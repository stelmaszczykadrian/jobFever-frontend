import React from 'react';
import logo from "../images/logo2.png";
import WelcomePageNavbar from "../components/navbar/WelcomePageNavbar";
import { Link } from 'react-router-dom'
import WhiteButtonMainPage from "../components/buttons/WhiteButton";
import {StyledInlineContainer} from "../components/styled-components/StyledInlineContainer";
import SocialmediaButtons from "../components/buttons/SocialmediaButtons";
import {StyledInlineFlexContainer} from "../components/styled-components/StyledInlineFlexContainer";
import {StyledSimpleText} from "../components/text/StyledSimpleText";
import {Header} from "../components/text/Header";
import {StyledLogo} from "../components/logo/StyledLogo";
import {StyledSTextSideContainer} from "../components/text/StyledTextSideContainer";
import {StyledHalfSideRightWelcomePage} from "../components/styled-components/StyledHalfSideRightWelcomePage";
import {StyledHalfSideLeftWelcomePage} from "../components/styled-components/StyledHalfSideLeftWelcomePage";
import {StyledMainPageBackground} from "../components/styled-components/StyledMainPageBackground";

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
                        <Header>Welcome</Header>
                        <StyledSimpleText>
                            Our website is dedicated to providing programmers like you with the latest
                            and greatest job  opportunity in the industry. Whether you're a seasoned
                            developer or just starting out in your career, we're here to connect you with
                            employers who are looking for talented programmers just like you.
                        </StyledSimpleText>
                    </StyledSTextSideContainer>
                    <StyledInlineContainer>
                        <Link to='/login'>
                        <WhiteButtonMainPage text={'LOGIN'}/>
                        </Link>
                        <Link to='/register'>
                        <WhiteButtonMainPage text={'REGISTER'}/>
                        </Link>
                    </StyledInlineContainer>
                    <StyledInlineFlexContainer>
                        <SocialmediaButtons/>
                    </StyledInlineFlexContainer>
                </StyledHalfSideRightWelcomePage>
            </StyledMainPageBackground>
        </div>
    )}

export default WelcomePage;
