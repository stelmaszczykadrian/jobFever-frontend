import {StyledEmployerRegisterMainComponent} from "./EmployersRegisterMainComponent.styles";
import LeftContainer from "../organisms/LeftContainer";
import LoginContainer from "../organisms/LoginContainer";

export default function EmployerLoginMainComponent({ apiUrl,text }){
    return(
        <StyledEmployerRegisterMainComponent>
            <LeftContainer/>
            <LoginContainer apiUrl={apiUrl} text={text}/>
        </StyledEmployerRegisterMainComponent>
    );
}