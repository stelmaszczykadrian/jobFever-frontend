import React, {useState} from "react";
import {StyledBottomBox, StyledIconBox, StyledProfilePaper, StyledTopBox} from "./CandidateProfile.styles";
import ProfileContainerTitle from "../atoms/ProfileContainerTitle";
import {Box} from "@mui/material";
import EmployerAboutusModal from "./EmployerAboutusModal";
import {StyledAddIcon} from "../atoms/StyledAddIcon";
import {StyledEditIcon} from "../atoms/StyledEditIcon";

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
                    {/* Add button */}
                    <EmployerAboutusModal id={props.id} text={'About Us..'} tag={<StyledAddIcon/>}/>
                </StyledIconBox>
            </StyledTopBox>
            <StyledBottomBox>
                <Box>
                    <StyledIconBox>
                        {/* Edit button */}
                        <EmployerAboutusModal id={props.id} text={'About Us..'} tag={<StyledEditIcon/>}/>
                    </StyledIconBox>
                </Box>
            </StyledBottomBox>
        </StyledProfilePaper>
    );

}