import ProfileContainerTitle from "../atoms/ProfileContainerTitle";
import {StyledProfilePaper} from "./CandidateProfile.styles";
import React from "react";
import JobOfferGrid from "./JobOfferGrid";
import {useJobsByName} from "../../api/apiJobs";


export default function EmployerJobs(props) {

    const {data, loading} = useJobsByName("http://localhost:8080/api/jobs/by-employer", props.id)

    if (!loading) {
        console.log(data)
        return(
        <div>
            <StyledProfilePaper>
                <ProfileContainerTitle text={'Our Jobs'}/>
            </StyledProfilePaper>
            <StyledProfilePaper>
                {
                    data.map((job, index) => {
                        return (<JobOfferGrid job={job} key={index}/>)
                    })
                }
            </StyledProfilePaper>
        </div>)
    }
    return <span>Loading...</span>;
}