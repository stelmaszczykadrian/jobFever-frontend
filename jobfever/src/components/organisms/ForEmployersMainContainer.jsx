import {
    StyledForEmployersMainContainer,
    StyledRegisterEmployerHeader
} from "./ForEmployersMainContainer.styles";
import RedButton from "../atoms/RedButton";
import Container from "@mui/material/Container";
import {StyledLink} from "../atoms/Link.styles";
import React from "react";

export default function ForEmployersMainContainer() {
    return (
        <StyledForEmployersMainContainer>
            <StyledRegisterEmployerHeader>
                Do you already have an employer account on JobFever?
            </StyledRegisterEmployerHeader>
            <Container>
                <StyledLink to='/employer/login'>
                    <RedButton text={'Yes, go to login.'}>></RedButton>
                </StyledLink>
            </Container>
            <Container>
                <StyledLink to='/employer/register'>
                    <RedButton text={'No, go to registration.'}>></RedButton>
                </StyledLink>
            </Container>
        </StyledForEmployersMainContainer>

    );
}