import ResponsiveAppBar from "../molecules/Navbar";
import ContactPageContainer from "../organisms/ContactPageContainer";
import {StyledContactPageMainComponent} from "./ContactPageMainComponent.styles";

export default function ContactPageMainComponent() {
    return (
        <StyledContactPageMainComponent>
            <ResponsiveAppBar/>
            <ContactPageContainer/>
        </StyledContactPageMainComponent>
    );
}