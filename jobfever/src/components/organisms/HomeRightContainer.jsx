import {StyledHomeRightContainer} from "./HomeRightContainer.styles";
import HomeNavbar from "../molecules/HomeNavbar";
import {StyledHomeTextSideContainer} from "../molecules/HomeTextSideContainer.styles";
import HomeHeader from "../atoms/HomeHeader";
import HomeSimpleText from "../atoms/HomeSimpleText";
import {StyledLoginAndRegisterButtonsContainer} from "../molecules/LoginAndRegisterButtonsContainer.styles";
import {StyledLink} from "../atoms/Link.styles";
import WhiteButton from "../atoms/WhiteButton";
import React from "react";
import SocialMediaButtons from "../molecules/SocialMediaButtons";

export default function HomeRightContainer() {
    return (
        <StyledHomeRightContainer>
            <HomeNavbar/>
            <StyledHomeTextSideContainer>
                <HomeHeader/>
                <HomeSimpleText/>
            </StyledHomeTextSideContainer>
            <StyledLoginAndRegisterButtonsContainer>
                <StyledLink to='/login'>
                    <WhiteButton text={'LOGIN'}/>
                </StyledLink>
                <StyledLink to='/register'>
                    <WhiteButton text={'REGISTER'}/>
                </StyledLink>
            </StyledLoginAndRegisterButtonsContainer>
            <SocialMediaButtons/>
        </StyledHomeRightContainer>
    )
}