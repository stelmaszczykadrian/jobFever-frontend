import {StyledProfileContainer} from "./ProfileContainer.styles";
import CandidateProfilePersonalInformation from "../molecules/CandidateProfilePersonalInformation";
import CandidateProfileExperience from "../molecules/CandidateProfileExperience";
import CandidateProfileEducation from "../molecules/CandidateProfileEducation";
import {useParams} from "react-router-dom";
import EmployerProfilePersonalInfo from "../molecules/EmployerProfilePersonalInfo";
import EmployerJobs from "../molecules/EmployerJobs";


export default function ProfileContainer (props) {
    const { id } = useParams();
    if (props.type === "candidate") {
        return (
            <StyledProfileContainer>
                <CandidateProfilePersonalInformation id={id}/>
                <CandidateProfileExperience/>
                <CandidateProfileEducation/>
            </StyledProfileContainer>
        );
    }else{
        console.log(id)
        return(
        <StyledProfileContainer>
            <EmployerProfilePersonalInfo id={id}/>
            <CandidateProfileExperience/>
            <CandidateProfileEducation/>
            <EmployerJobs id={id}/>
        </StyledProfileContainer>
        )}
}