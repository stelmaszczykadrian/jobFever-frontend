import ProfileContainerTitle from "../atoms/ProfileContainerTitle";
import {StyledProfilePaper} from "./CandidateProfile.styles";
import React, {useEffect, useState} from "react";
import {deleteJobOfferById, useJobsByName} from "../../api/JobsApi";
import RedButton from "../atoms/RedButton";
import {useNavigate} from "react-router-dom"
import {JobCard} from "./JobsCard";

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

    const handleJobClick = (jobId) => {
        navigate(`/job/${jobId}`);
    };

    return (
        <>
            {data && (
                <StyledProfilePaper>
                    <ProfileContainerTitle text={'Our Jobs'}/>
                    {data.map((job, index) => (
                        <div key={job.jobId}>
                            <JobCard job={job} handleJobClick={handleJobClick} />
                            <RedButton text="Edit" onClick={() => navigate(`/job/${job.jobId}/edit`)}/>
                            <RedButton text="Delete" onClick={() => deleteOffer(job.jobId)}/>
                        </div>
                    ))}
                </StyledProfilePaper>
            )}
        </>
    );
}