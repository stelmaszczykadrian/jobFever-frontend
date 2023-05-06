import LeftContainer from "../organisms/LeftContainer";
import LoginContainer from "../organisms/LoginContainer";
import {StyledCandidateRegisterMainComponent} from "./CandidateRegisterMainComponent.styles";

export default function CandidateLoginMainComponent({ apiUrl,text }){
    return(
        <StyledCandidateRegisterMainComponent>
            <LeftContainer/>
            <LoginContainer apiUrl={apiUrl} text={text}/>
        </StyledCandidateRegisterMainComponent>
    );
}