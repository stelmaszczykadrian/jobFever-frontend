import {StyledTopBox, StyledProfilePaper, StyledBottomBox, StyledIconBox} from "./CandidateProfile.styles";
import {Box} from "@mui/material";
import ProfileContainerTitle from "../atoms/ProfileContainerTitle";
import IconButton from "@mui/material/IconButton";
import React, {useState} from "react";
import {StyledEditIcon} from "../atoms/StyledEditIcon";
import {StyledCheckIcon} from "../atoms/StyledCheckIcon";
import {StyledAddIcon} from "../atoms/StyledAddIcon";
import {StyledSchoolIcon} from "../atoms/StyledSchoolIcon";
import ResponsiveDialog from "./CandidateEducationModal";


export default function CandidateProfileEducation() {

    const [isEdit, setIsEdit] = useState(false);
    const [open, setOpen] = useState(false);
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
                    <ResponsiveDialog/>
                </StyledIconBox>
            </StyledTopBox>
            <StyledBottomBox>
                <Box>
                    <span>Education 1</span>
                    <StyledIconBox>
                        {/* Edit button */}
                        {isEdit ? (
                            <IconButton onClick={handleSaveEditClick}>
                                <StyledCheckIcon/>
                            </IconButton>
                        ) : (
                            <IconButton onClick={handleEditClick}>
                                <StyledEditIcon/>
                            </IconButton>

                        )}
                    </StyledIconBox>
                </Box>
                <Box>
                    <span>Education 2</span>
                    <StyledIconBox>
                        {/* Edit button */}
                        {isEdit ? (
                            <IconButton onClick={handleSaveEditClick}>
                                <StyledCheckIcon/>
                            </IconButton>
                        ) : (
                            <IconButton onClick={handleEditClick}>
                                <StyledEditIcon/>
                            </IconButton>
                        )}
                    </StyledIconBox>
                </Box>
            </StyledBottomBox>
        </StyledProfilePaper>
    );
}