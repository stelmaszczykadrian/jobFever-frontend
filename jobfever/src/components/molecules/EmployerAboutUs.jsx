import React, {useState} from "react";
import {StyledBottomBox, StyledIconBox, StyledProfilePaper, StyledTopBox} from "./CandidateProfile.styles";
import ProfileContainerTitle from "../atoms/ProfileContainerTitle";
import ResponsiveDialog from "./CandidateEducationModal";
import {Box} from "@mui/material";
import EmployerAboutusModal from "./EmployerAboutusModal";
import {StyledAddIcon} from "../atoms/StyledAddIcon";

export default function EmployerAboutUs(props) {
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

                    <StyledIconBox>
                        {/* Edit button */}
                        <EmployerAboutusModal id={props.id} text={'About Us..'} tag={<StyledAddIcon/>}/>
                    </StyledIconBox>
                </Box>
            </StyledBottomBox>
        </StyledProfilePaper>
    );

}