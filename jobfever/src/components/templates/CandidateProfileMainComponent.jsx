import Navbar from "../molecules/Navbar";
import CandidateProfileContainer from "../organisms/CandidateProfileContainer";
import {StyledCandidateProfileMainComponent} from "./CandidateProfileMainComponent.styles";

export default function CandidateProfileMainComponent() {
    return (
        <StyledCandidateProfileMainComponent>
            <Navbar/>
            <CandidateProfileContainer/>
        </StyledCandidateProfileMainComponent>
    );
}