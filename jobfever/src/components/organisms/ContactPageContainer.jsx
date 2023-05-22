import {
    StyledContactBox,
    StyledContactPageButton,
    StyledContactPageContainer,
    StyledContactPageHeading,
    StyledContactPageInputField,
    StyledContactPageLeftContainer,
    StyledContactPageRightContainer,
    StyledContactPageTextarea,
    StyledContactPageMainContainer
} from "./ContactPageContainer.styles";

export default function ContactPageContainer() {
    return (
        <StyledContactPageMainContainer>
            <StyledContactPageContainer>
                <StyledContactBox>
                    <StyledContactPageLeftContainer/>
                    <StyledContactPageRightContainer>
                        <StyledContactPageHeading>Contact Us</StyledContactPageHeading>
                        <StyledContactPageInputField type="text" placeholder="Your Name"></StyledContactPageInputField>
                        <StyledContactPageInputField type="text" placeholder="Your Email"></StyledContactPageInputField>
                        <StyledContactPageInputField type="text" placeholder="Phone"></StyledContactPageInputField>
                        <StyledContactPageTextarea placeholder="Message"></StyledContactPageTextarea>
                        <StyledContactPageButton>Send</StyledContactPageButton>
                    </StyledContactPageRightContainer>
                </StyledContactBox>
            </StyledContactPageContainer>
        </StyledContactPageMainContainer>
    );
}