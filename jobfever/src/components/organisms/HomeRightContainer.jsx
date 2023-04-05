import {StyledHomeHeader, StyledHomeRightContainer, StyledHomeSimpleText} from "./HomeRightContainer.styles";
import RightNavbar from "../molecules/RightNavbar";
import {StyledHomeTextSideContainer} from "../molecules/HomeTextSideContainer.styles";
import {StyledLoginAndRegisterButtonsContainer} from "../molecules/LoginAndRegisterButtonsContainer.styles";
import {StyledLink} from "../atoms/Link.styles";
import WhiteButton from "../atoms/WhiteButton";
import React from "react";
import SocialMediaButtons from "../molecules/SocialMediaButtons";

export default function HomeRightContainer() {
    return (
        <StyledHomeRightContainer>
            <RightNavbar/>
            <StyledHomeTextSideContainer>
                <StyledHomeHeader>
                    Welcome
                </StyledHomeHeader>
                <StyledHomeSimpleText>
                    Our website is dedicated to providing programmers like you with the latest
                    and greatest job  opportunity in the industry. Whether you're a seasoned
                    developer or just starting out in your career, we're here to connect you with
                    employers who are looking for talented programmers just like you.
                </StyledHomeSimpleText>
            </StyledHomeTextSideContainer>
            <StyledLoginAndRegisterButtonsContainer>
                <StyledLink to='/candidate/login'>
                    <WhiteButton text={'LOGIN'}/>
                </StyledLink>
                <StyledLink to='/candidate/register'>
                    <WhiteButton text={'REGISTER'}/>
                </StyledLink>
            </StyledLoginAndRegisterButtonsContainer>
            <SocialMediaButtons/>
        </StyledHomeRightContainer>
    )
}