import React, {useState} from 'react';
import {Box} from '@mui/material';
import {
    StyledTopBox,
    StyledLeftBox,
    StyledProfilePaper,
    StyledRightBox, StyledBottomBoxPersonalInfo, StyledRightContentBox, StyledBoxElement
} from "./CandidateProfile.styles";
import ProfileContainerTitle from "../atoms/ProfileContainerTitle";
import IconButton from "@mui/material/IconButton";
import {StyledEditIcon} from "../atoms/StyledEditIcon";
import {StyledCheckIcon} from "../atoms/StyledCheckIcon";
import {editEmployer, saveEmployersImgFilename, useEmployerById} from "../../api/EmployersApi";
import EditableInput from "../atoms/EditableInput";
import {uploadFile} from "../../api/FilesApi";
import {StyledProfilePhoto} from "../atoms/ProfilePhoto.styles";
import {StyledEmailIcon} from "../atoms/StyledEmailIcon";
import {StyledLinkedInIcon} from "../atoms/StyledLinkedinIcon";
import {StyledContactPhoneIcon} from "../atoms/StyledPhoneIcon";
import {useAuthorization} from "../../utils/AuthUtils";
import logo from "../../images/logos/profiledefaultlogo.png";


export default function EmployerProfilePersonalInfo(props) {
    const {data, loading} = useEmployerById(props.id)
    const [isEdit, setIsEdit] = useState(false);
    const [companyName, setCompanyName] = useState("asd");
    const [nameAndSurname, setNameAndSurname] = useState('City');
    const [linkedin, setLinkedIn] = useState('https://www.linkedin.com/');
    const [email, setEmail] = useState('');
    const [localization, setLocalization] = useState('Pcim');
    const [phoneNumber, setPhoneNumber] = useState(123456789);
    const [nip, setNip] = useState();
    const [picture, setPicture] = useState();
    const [newPicture, setNewPicture] = useState();
    const {getEmployerId} = useAuthorization();

    const handleEditClick = () => {
        setIsEdit(true);
    };
    const handleSaveClick = async () => {
        if (nameAndSurname && nameAndSurname.trim() !== '' && localization && localization.trim() !== '' && phoneNumber.toString() && phoneNumber.toString().trim() !== '' && nip && nip.toString().trim() !== '' && nip.toString().length === 10) {
            setIsEdit(false);
            await editEmployer(props.id, companyName, nameAndSurname, phoneNumber, localization, null, nip, linkedin, email);
            if (newPicture) {
                await uploadFile(newPicture)
                await saveEmployersImgFilename(getEmployerId(), newPicture.name);
            }
        }
    };
    React.useEffect(() => {
        if (data
            && Object.keys(data).length > 0
            && Object.getPrototypeOf(data) === Object.prototype) {
            setCompanyName(data.companyName);
            setEmail(data.email);
            setNameAndSurname(data.nameAndSurname)
            setPhoneNumber(data.phoneNumber)
            setLocalization(data.localization)
            if (data.picture) {
                setPicture(data.picture);
            } else {
                setPicture(logo);
            }

            if (data.nip !== 0) {
                setNip(data.nip)
            }
            setLinkedIn(data.linkedin)
        }
    }, [data]);

    const savePicture = (e) => {
        setPicture(URL.createObjectURL(e.target.files[0]))
        setNewPicture(e.target.files[0]);
    };

    const RenderEditIcons = () => {
        if (props.id === getEmployerId()) {
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
    const RenderChangePhotoButtons = () => {
        if (props.id === getEmployerId()) {
            return (
                isEdit ? (
                    <form encType="multipart/form-data">
                        <input type="file" name="file" onChange={savePicture}/>
                    </form>
                ) : undefined
            )
        }
    }

    const ValidateLinkedinLink = () => {
        if ((linkedin && linkedin.startsWith("https://www.linkedin.com/company/")) || (linkedin && linkedin.startsWith("https://www.linkedin.com/in/"))) {
            return linkedin;
        } else {
            return 'https://www.linkedin.com/company/' + linkedin || 'https://www.linkedin.com/in/' + linkedin;
        }
    }

    if (!loading) {
        const validLinkedinHref = ValidateLinkedinLink();
        return (
            <StyledProfilePaper>
                <StyledTopBox>
                    <ProfileContainerTitle text={companyName}/>
                </StyledTopBox>
                <StyledBottomBoxPersonalInfo>
                    <StyledLeftBox>
                        <Box mb={1}>
                            <StyledProfilePhoto src={picture} alt="Profile"/>
                            <RenderChangePhotoButtons/>
                        </Box>
                        <h3>Owner</h3>
                        <Box mb={1}>
                            <EditableInput
                                isEdit={isEdit}
                                value={nameAndSurname || ""}
                                onChange={(e) => setNameAndSurname(e.target.value)}
                                placeholder="Name Surname"
                                isRequired
                            />
                        </Box>
                        <h3>Localization</h3>
                        <Box mb={1}>
                            <EditableInput
                                isEdit={isEdit}
                                value={localization || ""}
                                onChange={(e) => setLocalization(e.target.value)}
                                placeholder="Localization"
                                isRequired
                            />
                        </Box>
                    </StyledLeftBox>
                    <StyledRightBox>
                        <StyledRightContentBox>
                            <StyledBoxElement mb={2}>
                                <a href={`tel:${phoneNumber}`}><StyledContactPhoneIcon/></a>
                                <EditableInput
                                    isEdit={isEdit}
                                    value={phoneNumber || ""}
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                    placeholder="Phone number"
                                    isRequired
                                />
                            </StyledBoxElement>
                            <StyledBoxElement mb={2}>
                                <a href={`mailto:${email}`}><StyledEmailIcon/></a>
                                <EditableInput
                                    isEdit={isEdit}
                                    value={email || ""}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="email@email.com"
                                    isRequired={false}
                                />
                            </StyledBoxElement>
                            <StyledBoxElement mb={6}>
                                <a href={validLinkedinHref} target="_blank"
                                   rel="noopener noreferrer"><StyledLinkedInIcon/></a>
                                <EditableInput
                                    isEdit={isEdit}
                                    value={linkedin || ""}
                                    onChange={(e) => setLinkedIn(e.target.value)}
                                    placeholder="https://www.linkedin.com/company/"
                                    isRequired={false}
                                />
                            </StyledBoxElement>
                            <h3>NIP</h3>
                            <Box mb={1}>
                                <EditableInput
                                    isEdit={isEdit}
                                    isCorrect={nip && nip.toString().length === 10}
                                    errorMsg="This field must be 10 digits long"
                                    type="number"
                                    value={nip || ""}
                                    onChange={(e) => setNip(e.target.value)}
                                    placeholder="NIP"
                                    isRequired
                                />
                            </Box>
                        </StyledRightContentBox>
                        <Box>
                            <RenderEditIcons/>
                        </Box>
                    </StyledRightBox>
                </StyledBottomBoxPersonalInfo>
            </StyledProfilePaper>
        );
    }
    return <span>Loading</span>
}
