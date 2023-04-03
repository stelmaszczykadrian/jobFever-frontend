import Button from "@mui/joy/Button";
import React from "react";
import {StyledProfileContainerTitle} from "./ProfileContainerTitle.styles";

function ProfileContainerTitle(props) {
    return (
        <StyledProfileContainerTitle>
            {props.text}
        </StyledProfileContainerTitle>
    );
}

export default ProfileContainerTitle