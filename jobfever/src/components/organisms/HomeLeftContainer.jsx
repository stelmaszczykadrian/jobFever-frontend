import {StyledHomeLeftContainer} from "./HomeLeftContainer.styles";
import {StyledHomeTextSideContainer} from "../molecules/HomeTextSideContainer.styles";
import LogoIcon from "../atoms/LogoIcon";

export default function HomeLeftContainer() {
    return(
        <StyledHomeLeftContainer>
            <StyledHomeTextSideContainer>
                <LogoIcon/>
            </StyledHomeTextSideContainer>
        </StyledHomeLeftContainer>
    )
}