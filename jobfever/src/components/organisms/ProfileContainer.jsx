import {StyledProfileContainer} from "./ProfileContainer.styles";
import CandidateProfilePersonalInformation from "../molecules/CandidateProfilePersonalInformation";
import CandidateProfileExperience from "../molecules/CandidateProfileExperience";
import CandidateProfileEducation from "../molecules/CandidateProfileEducation";
import {useParams} from "react-router-dom";
import EmployerProfilePersonalInfo from "../molecules/EmployerProfilePersonalInfo";
import EmployerJobs from "../molecules/EmployerJobs";
import EmployerAboutUs from "../molecules/EmployerAboutUs";
import CandidateProfileAppliedJobsContainer from "./CandidateJobsContainer";


export default function ProfileContainer (props) {
    const { id } = useParams();
    if (props.type === "candidate") {
        return (
            <StyledProfileContainer>
                <CandidateProfilePersonalInformation id={id}/>
                <CandidateProfileExperience id={id}/>
                <CandidateProfileEducation id={id}/>
                <CandidateProfileAppliedJobsContainer id={id}/>
            </StyledProfileContainer>
        );
    }else{
        return(
        <StyledProfileContainer>
            <EmployerProfilePersonalInfo id={id}/>
            <EmployerAboutUs id={id}/>
            <EmployerJobs id={id}/>
        </StyledProfileContainer>
        )}
}