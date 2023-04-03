import PersonIcon from "@mui/icons-material/Person";
import React from "react";
import {StyledPersonIcon} from "./ProfilePersonIcon.styles";

function ProfilePersonIcon() {
    return (
        <StyledPersonIcon>
            <PersonIcon fontSize={'large'}/>
        </StyledPersonIcon>
    );
}
export default ProfilePersonIcon