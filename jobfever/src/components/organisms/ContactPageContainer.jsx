import {
    StyledContactBox,
    StyledContactPageContainer,
    StyledContactPageHeading,
    StyledContactPageLeftContainer,
    StyledContactPageRightContainer,
    StyledContactPageMainContainer, StyledContactPageText
} from "./ContactPageContainer.styles";

export default function ContactPageContainer() {
    return (
        <StyledContactPageMainContainer>
            <StyledContactPageContainer>
                <StyledContactBox>
                    <StyledContactPageLeftContainer/>
                    <StyledContactPageRightContainer>
                        <StyledContactPageHeading>Contact Us</StyledContactPageHeading>
                        <StyledContactPageText>Feel free to contact us if you need any help or want to discuss our
                            services. Our team will be happy to answer your questions and help solve any
                            problems.</StyledContactPageText>
                        <StyledContactPageText>
                            <a href="mailto:job.fever.contact@gmail.com">job.fever.contact@gmail.com</a>
                        </StyledContactPageText>
                    </StyledContactPageRightContainer>
                </StyledContactBox>
            </StyledContactPageContainer>
        </StyledContactPageMainContainer>
    );
}