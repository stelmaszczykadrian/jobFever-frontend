import React from 'react';
import logo from "../images/logo2.png";
import WelcomePageNavbar from "../components/molecules/WelcomePageNavbar";
import WhiteButtonMainPage from "../components/atoms/WhiteButton";
import {StyledInlineContainer} from "../components/styled-components/StyledInlineContainer";
import SocialmediaButtons from "../components/molecules/SocialmediaButtons";
import {StyledInlineFlexContainer} from "../components/styled-components/StyledInlineFlexContainer";
import {StyledSimpleText} from "../components/styled-components/StyledSimpleText";
import {StyledHeader} from "../components/styled-components/StyledHeader";
import {StyledLogo} from "../components/styled-components/StyledLogo";
import {StyledSTextSideContainer} from "../components/styled-components/StyledTextSideContainer";
import {StyledHalfSideRightWelcomePage} from "../components/styled-components/StyledHalfSideRightWelcomePage";
import {StyledHalfSideLeftWelcomePage} from "../components/styled-components/StyledHalfSideLeftWelcomePage";
import {StyledMainPageBackground} from "../components/styled-components/StyledMainPageBackground";
import {StyledLink} from "../components/atoms/Link.styled";

function WelcomePage() {
    return (
        <div>
            <StyledMainPageBackground>
                <StyledHalfSideLeftWelcomePage>
                    <StyledSTextSideContainer>
                        <StyledLogo src={logo}/>
                    </StyledSTextSideContainer>
                </StyledHalfSideLeftWelcomePage>
                <StyledHalfSideRightWelcomePage>
                    <WelcomePageNavbar />
                    <StyledSTextSideContainer>
                        <StyledHeader>Welcome</StyledHeader>
                        <StyledSimpleText>
                            Our website is dedicated to providing programmers like you with the latest
                            and greatest job  opportunity in the industry. Whether you're a seasoned
                            developer or just starting out in your career, we're here to connect you with
                            employers who are looking for talented programmers just like you.
                        </StyledSimpleText>
                    </StyledSTextSideContainer>
                    <StyledInlineContainer>
                        <StyledLink to='/login'>
                        <WhiteButtonMainPage text={'LOGIN'}/>
                        </StyledLink>
                        <StyledLink to='/register'>
                        <WhiteButtonMainPage text={'REGISTER'}/>
                        </StyledLink>
                    </StyledInlineContainer>
                    <StyledInlineFlexContainer>
                        <SocialmediaButtons/>
                    </StyledInlineFlexContainer>
                </StyledHalfSideRightWelcomePage>
            </StyledMainPageBackground>
        </div>
    )}

export default WelcomePage;