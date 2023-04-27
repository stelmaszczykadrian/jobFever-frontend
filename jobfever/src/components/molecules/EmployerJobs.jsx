import ProfileContainerTitle from "../atoms/ProfileContainerTitle";
import {StyledProfilePaper} from "./CandidateProfile.styles";
import React, {useEffect, useState} from "react";
import JobOfferGrid from "./JobOfferGrid";
import {deleteJobOfferById, useJobsByName} from "../../api/JobsApi";
import RedButton from "../atoms/RedButton";
import {useNavigate} from "react-router-dom"


export default function EmployerJobs(props) {
    const [data, setData] = useState();
    const fetchData = useJobsByName(props.id)

    const navigate = useNavigate();
    const deleteOffer = async (jobId) => {
        const userAgree = window.confirm("Are you sure to delete?");
        if (!userAgree) {
            return
        }
        await deleteJobOfferById(jobId);
        await fetchOffer();
    }
    const fetchOffer = async () => {
        const data = await fetchData();
        setData(data);
    }
    useEffect(() => {fetchOffer()},[])

    if (data) {
        console.log(data)
        return(

            <StyledProfilePaper>
                <ProfileContainerTitle text={'Our Jobs'}/>
                {
                    data.map((job, index) => {
                        return <>
                            <JobOfferGrid job={job} key={index}/>
                            <RedButton text="Edit" onClick={() => navigate(`/job/${job.jobId}/edit`)}/>
                            <RedButton text="Delete" onClick={() => deleteOffer(job.jobId)}/>
                        </>
                    })
                }
            </StyledProfilePaper>
)
    }
    return <span>Loading...</span>;
}