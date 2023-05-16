import ProfileContainerTitle from "../atoms/ProfileContainerTitle";
import {StyledProfilePaper} from "./CandidateProfile.styles";
import React, {useEffect, useState} from "react";
import {deleteJobOfferById, getJobOfferCandidatesByJobId, useJobsByName} from "../../api/JobsApi";
import {useNavigate} from "react-router-dom"
import CandidateModal from "./CandidateModal";
import Typography from "@mui/joy/Typography";
import {JobCardForEmployer} from "./JobCardForEmployer";
import {DeleteConfirmationModal} from "./DeleteConfirmationModal";

export default function EmployerJobs(props) {
    const [data, setData] = useState([]);
    const fetchData = useJobsByName(props.id);
    const [jobTitle, setJobTitle] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [deletedJobId, setDeletedJobId] = useState(0)
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

    const deleteOffer = async () => {
        await deleteJobOfferById(deletedJobId);
        await fetchOffer();
        setIsDeleteModalOpen(false);
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

    const handleJobEdit = (jobId) => {
        navigate(`/job/${jobId}/edit`)
    };

    const handleModalClose = () => {
        setShowModal(false);
    };

    return (
        <StyledProfilePaper>
            <ProfileContainerTitle text={"Our Jobs"} />
            {data.length > 0 ? (
                <>
                    {data.map((job, index) => (
                        <div key={job.jobId} style={{backgroundColor: 'rgba(0, 0, 0, 0.05)', borderRadius: '8px'}}>
                            <JobCardForEmployer employerId={props.id}
                                                job={job}
                                                handleJobClick={handleJobClick}
                                                handleJobEdit={handleJobEdit}
                                                handleDeleteOffer={() => {
                                                    setDeletedJobId(job.jobId);
                                                    setIsDeleteModalOpen(true);
                                                }}
                                                handleCandidatesClick={handleCandidatesClick}/>
                        </div>
                    ))}
                    <CandidateModal
                        jobTitle={jobTitle}
                        showModal={showModal}
                        handleModalClose={handleModalClose}
                        candidateData={candidateData}
                    />
                </>
            ) : (
                <Typography sx={{ my: 2, fontWeight: 'bold', marginTop: '20px', fontSize: '1.2em', textAlign: 'center', color: 'gray' }}>
                    There are no jobs already.
                </Typography>
            )}
            <DeleteConfirmationModal isOpen={isDeleteModalOpen} handleCancel={() => setIsDeleteModalOpen(false)} handleConfirm={deleteOffer}/>
        </StyledProfilePaper>
    );
}