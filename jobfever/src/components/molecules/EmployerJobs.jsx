import ProfileContainerTitle from "../atoms/ProfileContainerTitle";
import {StyledProfilePaper} from "./CandidateProfile.styles";
import React, {useEffect, useState} from "react";
import {deleteJobOfferById, getJobOfferCandidatesByJobId, useJobsByName} from "../../api/JobsApi";
import RedButton from "../atoms/RedButton";
import {useNavigate} from "react-router-dom"
import {JobCard} from "./JobsCard";
import CandidateModal from "./CandidateModal";


export default function EmployerJobs(props) {
    const [data, setData] = useState([]);
    const fetchData = useJobsByName(props.id);
    const [jobTitle, setJobTitle] = useState("");
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();

    const [candidateData, setCandidateData] = useState([]);
    const candidateFetchData = async (jobId) => {
        const response = await getJobOfferCandidatesByJobId(jobId);
        const data = response.data;
        setCandidateData(data);
    };

    const handleCandidatesClick = (jobId, jobTitle) => {
        handleModalOpen(jobId);
        setJobTitle(jobTitle);
    };

    const handleModalOpen = async (jobId) => {
        const defaultJobId = data.length > 0 ? data[0].jobId : undefined;
        const jobIdToUse = jobId || defaultJobId;
        await candidateFetchData(jobIdToUse);
        setShowModal(true);
    };

    const deleteOffer = async (jobId) => {
        const userAgree = window.confirm("Are you sure to delete?");
        if (!userAgree) {
            return;
        }
        await deleteJobOfferById(jobId);
        await fetchOffer();
    };

    const fetchOffer = async () => {
        const data = await fetchData();
        setData(data);
    };

    useEffect(() => {
        fetchOffer();
    }, []);

    const handleJobClick = (jobId) => {
        navigate(`/job/${jobId}`);
    };

    const handleModalClose = () => {
        setShowModal(false);
    };

    return (
        <>
            {data.length > 0 && (
                <StyledProfilePaper>
                    <ProfileContainerTitle text={"Our Jobs"}/>
                    {data.map((job, index) => (
                        <div key={job.jobId}>
                            <JobCard job={job} handleJobClick={handleJobClick}/>
                            <RedButton
                                text="Edit"
                                onClick={() => navigate(`/job/${job.jobId}/edit`)}
                            />
                            <RedButton text="Delete" onClick={() => deleteOffer(job.jobId)}/>
                            <RedButton text="Candidates" onClick={() => handleCandidatesClick(job.jobId, job.title)}/>
                        </div>
                    ))}
                </StyledProfilePaper>
            )}
            <CandidateModal
                jobTitle={jobTitle}
                showModal={showModal}
                handleModalClose={handleModalClose}
                candidateData={candidateData}
            />
        </>
    );
}