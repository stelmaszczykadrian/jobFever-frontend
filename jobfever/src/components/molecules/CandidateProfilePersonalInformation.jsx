import React, {useState} from 'react';
import {Box} from '@mui/material';
import {
    StyledTopBox, StyledInput,
    StyledLeftBox,
    StyledProfilePaper,
    StyledRightBox, StyledBottomBoxPersonalInfo
} from "./CandidateProfile.styles";
import ProfileContainerTitle from "../atoms/ProfileContainerTitle";
import ProfilePhoto from "../atoms/ProfilePhoto";
import IconButton from "@mui/material/IconButton";
import {StyledEditIcon} from "../atoms/StyledEditIcon";
import {StyledCheckIcon} from "../atoms/StyledCheckIcon";
import {StyledPersonIcon} from "../atoms/StyledPersonIcon";
import {editCandidate, useCandidateById} from "../../api/CandidateApi";
import EditableInput from "../atoms/EditableInput";


export default function CandidateProfilePersonalInformation(props) {

    const {data, loading} = useCandidateById(props.id)
    const [isEdit, setIsEdit] = useState(false);
    const [name, setName] = useState('Name Surname');
    const [city, setCity] = useState('City');
    const [linkedin, setLinkedIn] = useState('https://www.linkedin.com/');
    const [github, setGitHub] = useState('https://github.com/');
    const handleEditClick = () => {
        setIsEdit(true);
    };
    const handleSaveClick = async () => {
        if (name.trim() === '' || city.trim() === '') {
            return
        }
        setIsEdit(false);
        const updatedCandidateData = {
            name: name,
            city: city,
            linkedin: linkedin,
            github: github
        };
        await editCandidate(props.id, updatedCandidateData);
    };

    React.useEffect(() => {
        if (data) {
            setName(data.name);
            setCity(data.city);
            setLinkedIn(data.linkedin);
            setGitHub(data.github);
        }
    }, [data]);

    if (!loading) {
        return (
            <StyledProfilePaper>
                <StyledTopBox>
                    <StyledPersonIcon/>
                    <ProfileContainerTitle text={'Personal information'}/>
                </StyledTopBox>
                <StyledBottomBoxPersonalInfo>
                    <StyledLeftBox>
                        {/* Photo */}
                        <Box mb={1}>
                            <ProfilePhoto/>
                        </Box>
                        {/* Name */}
                        <h3>Name</h3>
                        <Box mb={1}>
                            <EditableInput
                                isEdit={isEdit}
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Name Surname"
                                isRequired={true}
                            />
                        </Box>
                        {/* City */}
                        <h3>Localization</h3>
                        <Box mb={1}>
                            <EditableInput
                                isEdit={isEdit}
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                                placeholder="Localization"
                                isRequired={true}
                            />
                        </Box>
                    </StyledLeftBox>
                    <StyledRightBox>
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
                        <Box mb={6}>
                            <EditableInput
                                isEdit={isEdit}
                                value={github}
                                onChange={(e) => setGitHub(e.target.value)}
                                placeholder="https://github.com/"
                                isRequired={false}
                            />
                        </Box>
                        <Box mb={8}>
                            <h3>CV file</h3>
                            <StyledInput>
                                <input type="file" accept=".pdf,.doc,.docx"/>
                            </StyledInput>
                        </Box>
                        <Box>
                            {/* Edit button */}
                            {isEdit ? (
                                <IconButton onClick={handleSaveClick}>
                                    <StyledCheckIcon/>
                                </IconButton>
                            ) : (
                                <IconButton onClick={handleEditClick}>
                                    <StyledEditIcon/>
                                </IconButton>
                            )}
                        </Box>
                    </StyledRightBox>
                </StyledBottomBoxPersonalInfo>
            </StyledProfilePaper>
        );
    }
    return <span>Loading</span>
}

