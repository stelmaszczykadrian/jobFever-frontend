import EditIcon from '@mui/icons-material/Edit';
import React from "react";
import {StyledProfileEditIcon} from "./ProfileEditIcon.styles";

function ProfileEditIcon() {
    return (
        <StyledProfileEditIcon>
            <EditIcon fontSize={'large'}/>
        </StyledProfileEditIcon>
    );
}
export default ProfileEditIcon