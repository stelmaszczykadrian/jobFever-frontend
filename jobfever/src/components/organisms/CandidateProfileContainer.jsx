import {StyledCandidateProfileContainer} from "./CandidateProfileContainer.styles";
import CandidateProfilePersonalInformation from "../molecules/CandidateProfilePersonalInformation";

export default function CandidateProfileContainer () {
    return (
        <StyledCandidateProfileContainer>
            <CandidateProfilePersonalInformation />
        </StyledCandidateProfileContainer>
    );
}