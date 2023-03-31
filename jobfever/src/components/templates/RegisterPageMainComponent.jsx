import {StyledRegisterMainComponent} from "./RegisterPageMainComponent.styles";
import LeftContainer from "../organisms/LeftContainer";
import RightContainer from "../organisms/RightContainer";

export default function RegisterMainComponent(props) {
    return (
        <StyledRegisterMainComponent>
            <LeftContainer />
            <RightContainer page={props.page}/>
        </StyledRegisterMainComponent>
    );
}