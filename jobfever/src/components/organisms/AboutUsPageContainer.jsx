import {
    StyledAboutsUsPageMainContainer,
    StyledAuthorInfoContainer,
    StyledImageContainer,
    StyledInfoRightContainer,
    StyledAuthorPersonalInfoContainer,
    StyledAboutUsPageText,
    StyledInfoContainerLeft, StyledAboutUsPageHeading
} from "./AboutUsPageContainer.styles";
import Adrian from "../../images/authors/Adrian.jpg"
import Monika from "../../images/authors/Monika.jpg"
import Karolina from "../../images/authors/Karolina.png"
import Grzegorz from "../../images/authors/Grzegorz.jpg"
import Piotr from "../../images/authors/Piotr.jpeg"

import linkedin from "../../images/languages/icons8-linkedin.svg";
import github from "../../images/languages/icons8-github.svg";
import {StyledContactPageHeading} from "./ContactPageContainer.styles";

export default function AboutUsPageContainer() {
    return (
        <StyledAboutsUsPageMainContainer>
            <StyledAboutUsPageHeading>Our team of developers</StyledAboutUsPageHeading>
            <StyledAuthorInfoContainer>
                <StyledInfoContainerLeft>
                    <StyledImageContainer imageUrl={Karolina}/>
                </StyledInfoContainerLeft>
                <StyledInfoRightContainer>
                    <StyledAuthorPersonalInfoContainer>
                        <StyledContactPageHeading>Karolina Mazurczak</StyledContactPageHeading>
                        <StyledAboutUsPageText>
                            <img src={linkedin} width="30px" height="30px" alt="linkedin"/>
                            <a href="https://www.linkedin.com/in/karolina-mazurczak-a71852275/">Linkedin</a>
                        </StyledAboutUsPageText>
                        <StyledAboutUsPageText>
                            <img src={github} alt="github"/>
                            <a href="https://github.com/karolinalodzinska">GitHub</a>
                        </StyledAboutUsPageText>
                    </StyledAuthorPersonalInfoContainer>
                </StyledInfoRightContainer>
            </StyledAuthorInfoContainer>
            <StyledAuthorInfoContainer>
                <StyledInfoContainerLeft>
                    <StyledImageContainer imageUrl={Monika}/>
                </StyledInfoContainerLeft>
                <StyledInfoRightContainer>
                    <StyledAuthorPersonalInfoContainer>
                        <StyledContactPageHeading>Monika Markulis</StyledContactPageHeading>
                        <StyledAboutUsPageText>
                            <img src={linkedin} width="30px" height="30px" alt="linkedin"/>
                            <a href="https://www.linkedin.com/in/monika-markulis-8a396b13b/">Linkedin</a>
                        </StyledAboutUsPageText>
                        <StyledAboutUsPageText>
                            <img src={github} alt="github"/>
                            <a href="https://github.com/MonikaMarkulis">GitHub</a>
                        </StyledAboutUsPageText>
                    </StyledAuthorPersonalInfoContainer>
                </StyledInfoRightContainer>
            </StyledAuthorInfoContainer>
            <StyledAuthorInfoContainer>
                <StyledInfoContainerLeft>
                    <StyledImageContainer imageUrl={Grzegorz}/>
                </StyledInfoContainerLeft>
                <StyledInfoRightContainer>
                    <StyledAuthorPersonalInfoContainer>
                        <StyledContactPageHeading>Grzegorz Reizer</StyledContactPageHeading>
                        <StyledAboutUsPageText>
                            <img src={linkedin} width="30px" height="30px" alt="linkedin"/>
                            <a href="https://www.linkedin.com/in/grzegorz-reizer-00522b276/">Linkedin</a>
                        </StyledAboutUsPageText>
                        <StyledAboutUsPageText>
                            <img src={github} alt="github"/>
                            <a href="https://github.com/reizergrzegorz">GitHub</a>
                        </StyledAboutUsPageText>
                    </StyledAuthorPersonalInfoContainer>
                </StyledInfoRightContainer>
            </StyledAuthorInfoContainer>
            <StyledAuthorInfoContainer>
                <StyledInfoContainerLeft>
                    <StyledImageContainer imageUrl={Adrian}/>
                </StyledInfoContainerLeft>
                <StyledInfoRightContainer>
                    <StyledAuthorPersonalInfoContainer>
                        <StyledContactPageHeading>Adrian Stelmaszczyk</StyledContactPageHeading>
                        <StyledAboutUsPageText>
                            <img src={linkedin} width="30px" height="30px" alt="linkedin"/>
                            <a href="https://www.linkedin.com/in/adrian-stelmaszczyk-0b2b87160/">Linkedin</a>
                        </StyledAboutUsPageText>
                        <StyledAboutUsPageText>
                            <img src={github} alt="github"/>
                            <a href="https://github.com/stelmaszczykadrian">GitHub</a>
                        </StyledAboutUsPageText>
                    </StyledAuthorPersonalInfoContainer>
                </StyledInfoRightContainer>
            </StyledAuthorInfoContainer>
            <StyledAuthorInfoContainer>
                <StyledInfoContainerLeft>
                    <StyledImageContainer imageUrl={Piotr}/>
                </StyledInfoContainerLeft>
                <StyledInfoRightContainer>
                    <StyledAuthorPersonalInfoContainer>
                        <StyledContactPageHeading>Piotr Petryka</StyledContactPageHeading>
                        <StyledAboutUsPageText>
                            <img src={linkedin} width="30px" height="30px" alt="linkedin"/>
                            <a href="https://www.linkedin.com/in/piotr-petryka-90528a270/">Linkedin</a>
                        </StyledAboutUsPageText>
                        <StyledAboutUsPageText>
                            <img src={github} alt="github"/>
                            <a href="https://github.com/ppwxp">GitHub</a>
                        </StyledAboutUsPageText>
                    </StyledAuthorPersonalInfoContainer>
                </StyledInfoRightContainer>
            </StyledAuthorInfoContainer>
        </StyledAboutsUsPageMainContainer>
    );
}