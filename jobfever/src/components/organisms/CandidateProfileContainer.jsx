import {StyledCandidateProfileContainer} from "./CandidateProfileContainer.styles";
import CandidateProfilePersonalInformation from "../molecules/CandidateProfilePersonalInformation";
import CandidateProfileExperience from "../molecules/CandidateProfileExperience";
import CandidateProfileEducation from "../molecules/CandidateProfileEducation";

export default function CandidateProfileContainer () {
    return (
        <StyledCandidateProfileContainer>
            <CandidateProfilePersonalInformation />
            <CandidateProfileExperience />
            <CandidateProfileEducation />
        </StyledCandidateProfileContainer>
    );
}