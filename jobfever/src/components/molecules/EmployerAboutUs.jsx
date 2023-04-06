import React, {useState} from "react";
import {StyledBottomBox, StyledIconBox, StyledProfilePaper, StyledTopBox} from "./CandidateProfile.styles";
import ProfileContainerTitle from "../atoms/ProfileContainerTitle";
import ResponsiveDialog from "./CandidateEducationModal";
import {Box} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import {StyledCheckIcon} from "../atoms/StyledCheckIcon";
import {StyledEditIcon} from "../atoms/StyledEditIcon";
import EditableInput from "../atoms/EditableInput";

export default function EmployerAboutUs(){
    const [isEdit, setIsEdit] = useState(false);
    const [aboutUs, setAboutUs] = useState("");

    const handleEditClick = () => {
        setIsEdit(true);
    };
    const handleSaveEditClick = () => {
        setIsEdit(false);
    };

    return (
        <StyledProfilePaper>
            <StyledTopBox>

                <ProfileContainerTitle text={'About Us'}/>
                <StyledIconBox>
                    <ResponsiveDialog/>
                </StyledIconBox>
            </StyledTopBox>
            <StyledBottomBox>
                <Box>

                        <Box mb={1}>
                            <EditableInput
                                isEdit={isEdit}
                                value={aboutUs}
                                onChange={(e) => setAboutUs(e.target.value)}
                                placeholder="Name Surname"
                            />
                        </Box><StyledIconBox>
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