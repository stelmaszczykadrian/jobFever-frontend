import {StyledTopBox, StyledProfilePaper, StyledBottomBox, StyledIconBox} from "./CandidateProfile.styles";
import {Box} from "@mui/material";
import ProfileContainerTitle from "../atoms/ProfileContainerTitle";
import React, {useState} from "react";
import {StyledEditIcon} from "../atoms/StyledEditIcon";
import {StyledAddIcon} from "../atoms/StyledAddIcon";
import {StyledSchoolIcon} from "../atoms/StyledSchoolIcon";
import ResponsiveDialog from "./CandidateEducationModal";


export default function CandidateProfileEducation() {

    const [isEdit, setIsEdit] = useState(false);

    const handleEditClick = () => {
        setIsEdit(true);
    };
    const handleSaveEditClick = () => {
        setIsEdit(false);
    };

    return (
        <StyledProfilePaper>
            <StyledTopBox>
                <StyledSchoolIcon/>
                <ProfileContainerTitle text={'Education'}/>
                <StyledIconBox>
                    <ResponsiveDialog text={'Add education'} tag={<StyledAddIcon/>}/>
                </StyledIconBox>
            </StyledTopBox>
            <StyledBottomBox>
                <Box>
                    <span>Education 1</span>
                    <StyledIconBox>
                        <ResponsiveDialog text={'Edit education'} tag={<StyledEditIcon/>}/>
                    </StyledIconBox>
                </Box>
                <Box>
                    <span>Education 2</span>
                    <StyledIconBox>
                        <ResponsiveDialog text={'Edit education'} tag={<StyledEditIcon/>}/>
                    </StyledIconBox>
                </Box>
            </StyledBottomBox>
        </StyledProfilePaper>
    );
}