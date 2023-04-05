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

function EditableInput({isEdit, value, onChange, placeholder}) {
    if (isEdit) {
        return <input type="text" placeholder={placeholder} value={value} onChange={onChange}/>;
    } else {
        return <span>{value.toString()}</span>;
    }
}
export default function EmployerProfilePersonalInfo(props){
    const [isEdit, setIsEdit] = useState(false);
    const [name, setName] = useState('Name Surname');
    const [city, setCity] = useState('City');
    const [email, setEmail] = useState('email@example.com');
    const [linkedin, setLinkedIn] = useState('https://www.linkedin.com/');
    const [github, setGitHub] = useState('https://github.com/');
    const [cv, setCv] = useState(null);

    const handleEditClick = () => {
        setIsEdit(true);
    };
    const handleSaveClick = () => {
        setIsEdit(false);
    };

    return (
        <StyledProfilePaper>
            <StyledTopBox>
                <StyledPersonIcon/>
                <ProfileContainerTitle text={'Personal information'}/>
            </StyledTopBox>
            <StyledBottomBoxPersonalInfo>
                <StyledLeftBox>
                    {/* Photo */}
                    <Box mb={2}>
                        <ProfilePhoto/>
                    </Box>
                    {/* Name */}
                    <Box mb={1}>
                        <EditableInput
                            isEdit={isEdit}
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Name Surname"
                        />
                    </Box>
                    {/* City */}
                    <Box mb={1}>
                        <EditableInput
                            isEdit={isEdit}
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            placeholder="City"
                        />
                    </Box>
                    {/* Email */}
                    <Box mb={1}>
                        {email}
                    </Box>
                </StyledLeftBox>

                <StyledRightBox>
                    <h3>Social Links</h3>
                    <Box mb={1}>
                        <EditableInput
                            isEdit={isEdit}
                            value={linkedin}
                            onChange={(e) => setLinkedIn(e.target.value)}
                            placeholder="LinkedIn profile link"
                        />
                    </Box>
                    <Box mb={2}>
                        <EditableInput
                            isEdit={isEdit}
                            value={github}
                            onChange={(e) => setGitHub(e.target.value)}
                            placeholder="GitHub profile link"
                        />
                    </Box>
                    <Box mb={4}>
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