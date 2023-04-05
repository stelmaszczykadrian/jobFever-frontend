import {StyledEmployerRegisterMainComponent} from "./EmployersRegisterMainComponent.styles";
import LeftContainer from "../organisms/LeftContainer";
import LoginContainer from "../organisms/LoginContainer";
import {StyledCandidateRegisterMainComponent} from "./CandidateRegisterMainComponent.styles";

export default function CandidateLoginMainComponent({ apiUrl }){
    return(
        <StyledCandidateRegisterMainComponent>
            <LeftContainer/>
            <LoginContainer apiUrl={apiUrl}/>
        </StyledCandidateRegisterMainComponent>
    );
}