import ProfileContainerTitle from "../atoms/ProfileContainerTitle";
import {StyledProfilePaper} from "./CandidateProfile.styles";
import React from "react";
import JobOfferGrid from "./JobOfferGrid";
import {useJobsByName} from "../../api/JobsApi";


export default function EmployerJobs(props) {

    const {data, loading} = useJobsByName(props.id)

    if (!loading) {
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