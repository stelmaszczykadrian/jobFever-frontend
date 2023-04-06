import LeftContainer from "../organisms/LeftContainer";
import EmployerRegisterRightContainer from "../organisms/EmployerRegisterRightContainer";
import {StyledEmployerRegisterMainComponent} from "./EmployersRegisterMainComponent.styles";

export default function EmployersRegisterMainComponent(){
    return (
        <StyledEmployerRegisterMainComponent>
            <LeftContainer/>
            <EmployerRegisterRightContainer/>
        </StyledEmployerRegisterMainComponent>

    );
}