import LeftContainer from "../organisms/LeftContainer";
import {StyledCandidateRegisterMainComponent} from "./CandidateRegisterMainComponent.styles";
import CandidateRegisterRightContainer from "../organisms/CandidateRegisterRightContainer"

export default function CandidateRegisterMainComponent(){
    return(
        <StyledCandidateRegisterMainComponent>
            <LeftContainer/>
            <CandidateRegisterRightContainer/>
        </StyledCandidateRegisterMainComponent>
    );

}