import {
    StyledTopBox,
    StyledProfilePaper,
    StyledBottomBox, StyledIconBox
} from "./CandidateProfile.styles";
import {Box} from "@mui/material";
import ProfileContainerTitle from "../atoms/ProfileContainerTitle";
import IconButton from "@mui/material/IconButton";
import React, {useState} from "react";
import {StyledEditIcon} from "../atoms/StyledEditIcon";
import {StyledCheckIcon} from "../atoms/StyledCheckIcon";
import {StyledWorkIcon} from "../atoms/StyledWorkIcon";
import {StyledAddIcon} from "../atoms/StyledAddIcon";
import CandidateExperienceModal from "./CandidateExperienceModal";

export default function CandidateProfileExperience() {

    const [isEdit, setIsEdit] = useState(false);
    const [isAdd, setIsAdd] = useState(false);

    const handleAddClick = () => {
        setIsAdd(true);
    };

    const handleSaveAddClick = () => {
        setIsAdd(false);
    };

    const handleEditClick = () => {
        setIsEdit(true);
    };
    const handleSaveEditClick = () => {
        setIsEdit(false);
    };

    return (
        <StyledProfilePaper>
            <StyledTopBox>
                <StyledWorkIcon/>
                <ProfileContainerTitle text={'Experience'}/>
                <StyledIconBox>
                    <CandidateExperienceModal text={'Add experience'} tag={<StyledAddIcon/>}/>
                </StyledIconBox>
            </StyledTopBox>
            <StyledBottomBox>
                <Box>
                    <span>Experience 1</span>
                    <StyledIconBox>
                        <CandidateExperienceModal text={'Edit experience'} tag={<StyledEditIcon/>}/>
                    </StyledIconBox>
                </Box>
                <Box>
                    <span>Experience 2</span>
                    <StyledIconBox>
                        <CandidateExperienceModal text={'Edit experience'} tag={<StyledEditIcon/>}/>
                    </StyledIconBox>
                </Box>
            </StyledBottomBox>
        </StyledProfilePaper>
    );
}