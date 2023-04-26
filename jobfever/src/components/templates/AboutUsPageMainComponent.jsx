import ResponsiveAppBar from "../molecules/Navbar";
import {StyledAboutUsPageMainComponent} from "./AboutUsPageMainComponent.styles";
import AboutUsPageContainer from "../organisms/AboutUsPageContainer";


export default function AboutUsPageMainComponent() {
    return (
        <StyledAboutUsPageMainComponent>
            <ResponsiveAppBar/>
            <AboutUsPageContainer/>
        </StyledAboutUsPageMainComponent>
    );
}