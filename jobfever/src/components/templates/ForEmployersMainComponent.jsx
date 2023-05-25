import ForEmployersMainContainer from '../organisms/ForEmployersMainContainer'
import {StyledForEmployersMainComponent} from "./ForEmployersMainComponent.styles";
import Navbar from "../molecules/Navbar"

export default function ForEmployersMainComponent() {
    return (
        <StyledForEmployersMainComponent>
            <Navbar/>
            <ForEmployersMainContainer/>
        </StyledForEmployersMainComponent>
    );
}