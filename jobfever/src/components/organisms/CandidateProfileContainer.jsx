import {StyledCandidateProfileContainer} from "./CandidateProfileContainer.styles";
import CandidateProfilePersonalInformation from "../molecules/CandidateProfilePersonalInformation";
import CandidateProfileExperience from "../molecules/CandidateProfileExperience";

export default function CandidateProfileContainer () {
    return (
        <StyledCandidateProfileContainer>
            <CandidateProfilePersonalInformation />
            <CandidateProfileExperience />
        </StyledCandidateProfileContainer>
    );
}