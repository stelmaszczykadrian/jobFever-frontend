import ProfileContainerTitle from "../atoms/ProfileContainerTitle";
import {StyledProfilePaper} from "./CandidateProfile.styles";
import React from "react";
import JobOfferGrid from "./JobOfferGrid";
import {useJobsByName} from "../../api/JobsApi";


export default function EmployerJobs(props) {

    const {data, loading} = useJobsByName(props.id)

    if (!loading) {
        console.log(data)
        return(

            <StyledProfilePaper>
                <ProfileContainerTitle text={'Our Jobs'}/>
                {
                    data.map((job, index) => {
                        return (<JobOfferGrid job={job} key={index}/>)
                    })
                }
            </StyledProfilePaper>
)
    }
    return <span>Loading...</span>;
}