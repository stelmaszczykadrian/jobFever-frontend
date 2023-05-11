import {StyledEmployerRegisterMainComponent} from "./EmployersRegisterMainComponent.styles";
import LeftContainer from "../organisms/LeftContainer";
import PasswordContainer from "../organisms/PasswordContainer";

export default function ChangePasswordComponent(){
    return(
        <StyledEmployerRegisterMainComponent>
            <LeftContainer/>
            <PasswordContainer />
        </StyledEmployerRegisterMainComponent>
    )
}