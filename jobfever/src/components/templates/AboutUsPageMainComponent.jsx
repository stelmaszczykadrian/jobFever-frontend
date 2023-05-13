import Navbar from "../molecules/Navbar";
import {StyledAboutUsPageMainComponent} from "./AboutUsPageMainComponent.styles";
import AboutUsPageContainer from "../organisms/AboutUsPageContainer";


export default function AboutUsPageMainComponent() {
    return (
        <StyledAboutUsPageMainComponent>
            <Navbar/>
            <AboutUsPageContainer/>
        </StyledAboutUsPageMainComponent>
    );
}