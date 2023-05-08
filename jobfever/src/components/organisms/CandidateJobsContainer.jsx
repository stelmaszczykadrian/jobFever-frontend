import React, {useEffect, useState} from "react";
import {StyledProfilePaper} from "../molecules/CandidateProfile.styles";
import ProfileContainerTitle from "../atoms/ProfileContainerTitle";
import {useNavigate} from "react-router-dom";
import {JobCard} from "../molecules/JobsCard";
import {StyledAppliedJobsIcon} from "./CandidateJobsContainer.styles";
import {useJobsByCandidateId} from "../../api/JobsApi";


export default function CandidateJobsContainer(props) {
    const [data, setData] = useState();
    const fetchData = useJobsByCandidateId(props.id);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchOffer = async () => {
            const data = await fetchData();
            setData(data);
        };
        fetchOffer();
    }, []);


    const handleJobClick = (jobId) => {
        navigate(`/job/${jobId}`);
    };

    return (
        <>
            {data && (
                <StyledProfilePaper>
                    <StyledAppliedJobsIcon/>
                    <ProfileContainerTitle text={'Applied Jobs'}/>
                    {data.map((job, index) => (
                        <JobCard job={job} handleJobClick={handleJobClick} key={job.jobId} />
                    ))}
                </StyledProfilePaper>
            )}
        </>
    );


    }