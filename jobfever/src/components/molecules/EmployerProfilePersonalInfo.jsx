import React, {useState} from 'react';
import {Box} from '@mui/material';
import {
    StyledTopBox,
    StyledLeftBox,
    StyledProfilePaper,
    StyledRightBox, StyledBottomBoxPersonalInfo
} from "./CandidateProfile.styles";
import ProfileContainerTitle from "../atoms/ProfileContainerTitle";
import ProfilePhoto from "../atoms/ProfilePhoto";
import IconButton from "@mui/material/IconButton";
import {StyledEditIcon} from "../atoms/StyledEditIcon";
import {StyledCheckIcon} from "../atoms/StyledCheckIcon";
import {editEmployer, useEmployerById} from "../../api/EmployersApi";
import EditableInput from "../atoms/EditableInput";
import Cookies from "js-cookie";


export default function EmployerProfilePersonalInfo(props){
    const {data, loading} = useEmployerById(props.id)
    const [isEdit, setIsEdit] = useState(false);
    const [companyName, setCompanyName] = useState("asd");
    const [nameAndSurname, setNameAndSurname] = useState('City');
    const [email, setEmail] = useState('email@example.com');
    const [linkedin, setLinkedIn] = useState('https://www.linkedin.com/');
    const [github, setGitHub] = useState('https://github.com/');
    const [localization, setLocalization] = useState('Pcim');
    const [phoneNumber, setPhoneNumber] = useState(123456789);

    const handleEditClick = () => {
        setIsEdit(true);
    };
    const handleSaveClick = async () => {
        if (nameAndSurname === '' || localization === '' || phoneNumber === '') {
            return
        }
        setIsEdit(false);
    await editEmployer(props.id, companyName, nameAndSurname, phoneNumber, localization, null);
};

    React.useEffect(() => {
        if (!loading) {
            setCompanyName(data.companyName);
            setNameAndSurname(data.nameAndSurname)
            setEmail(data.email)
            setPhoneNumber(data.phoneNumber)
            setLocalization(data.localization)
        }
    }, [data]);

    if (!loading) {
        const RenderEditIcons = () => {
            if (props.id === JSON.parse(Cookies.get("jwt")).employer_id.toString()){

                return (
                    isEdit ? (
                            <IconButton onClick={handleSaveClick}>
                                <StyledCheckIcon/>
                            </IconButton>
                        ) : (
                            <IconButton onClick={handleEditClick}>
                                <StyledEditIcon/>
                            </IconButton>
                        )
                )
            }
        }
        return (
            <StyledProfilePaper>
                <StyledTopBox>
                    <ProfileContainerTitle text={companyName}/>
                </StyledTopBox>
                <StyledBottomBoxPersonalInfo>
                    <StyledLeftBox>
                        {/* Photo */}
                        <Box mb={1}>
                            <ProfilePhoto/>
                        </Box>
                        {/* Name */}
                        <h3>Owner</h3>
                        <Box mb={1}>
                            <EditableInput
                                isEdit={isEdit}
                                value={nameAndSurname}
                                onChange={(e) => setNameAndSurname(e.target.value)}
                                placeholder="Name Surname"
                                isRequired={true}
                            />
                        </Box>
                        <h3>Localization</h3>
                        <Box mb={1}>
                            <EditableInput
                                isEdit={isEdit}
                                value={localization}
                                onChange={(e) => setLocalization(e.target.value)}
                                placeholder="Localization"
                                isRequired={true}
                            />
                        </Box>
                        {/* Email */}
                        {/*<h4>Email</h4>*/}
                        {/*<Box mb={1}>*/}
                        {/*    <EditableInput*/}
                        {/*        isEdit={isEdit}*/}
                        {/*        value={email}*/}
                        {/*        onChange={(e) => setEmail(e.target.value)}*/}
                        {/*        placeholder="email"*/}
                        {/*    />*/}
                        {/*</Box>*/}
                    </StyledLeftBox>

                    <StyledRightBox>
                        <h3>Phone number</h3>
                        <Box mb={4}>
                            <EditableInput
                                isEdit={isEdit}
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                placeholder="Phone number"
                                isRequired={true}
                            />
                        </Box>
                        <h3>Social Links</h3>
                        <Box mb={1}>
                            <EditableInput
                                isEdit={isEdit}
                                value={linkedin}
                                onChange={(e) => setLinkedIn(e.target.value)}
                                placeholder="https://www.linkedin.com/"
                                isRequired={false}
                            />
                        </Box>
                        <Box mb={8}>
                            <EditableInput
                                isEdit={isEdit}
                                value={github}
                                onChange={(e) => setGitHub(e.target.value)}
                                placeholder="https://github.com/"
                                isRequired={false}
                            />
                        </Box>
                        <Box>
                            {/* Edit button */}
                            <RenderEditIcons />
                        </Box>
                    </StyledRightBox>
                </StyledBottomBoxPersonalInfo>
            </StyledProfilePaper>
        );
    }
    return  <span>Loading</span>

}