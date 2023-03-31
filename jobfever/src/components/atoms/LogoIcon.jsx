import logo from "../../images/logo2.png";
import React from "react";
import {StyledLogo} from "./LogoIcon.styles";

function LogoIcon() {
    return (
        <StyledLogo>
            <img id="logo" src={logo}  alt='Job fever logo'/>
        </StyledLogo>
    );
}
export default LogoIcon