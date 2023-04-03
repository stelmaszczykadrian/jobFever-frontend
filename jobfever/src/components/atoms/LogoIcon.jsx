import logo from "../../images/logo2.png";
import React from "react";
import {StyledLogo} from "./LogoIcon.styles";
import {Link} from "react-router-dom";

function LogoIcon() {
    return (
        <StyledLogo>
            <Link to='/'>
            <img id="logo" src={logo}  alt='Job fever logo'/>
            </Link>
        </StyledLogo>
    );
}
export default LogoIcon