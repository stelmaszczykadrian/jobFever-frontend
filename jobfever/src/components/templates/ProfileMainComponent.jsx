import Navbar from "../molecules/Navbar";
import ProfileContainer from "../organisms/ProfileContainer";
import {StyledProfileMainComponent} from "./ProfileMainComponent.styles";

export default function ProfileMainComponent(props) {
    return (
        <StyledProfileMainComponent>
            <Navbar/>
            <ProfileContainer type={props.type}/>
        </StyledProfileMainComponent>
    );

}