import ProfileContainerTitle from "../atoms/ProfileContainerTitle";
import {StyledProfilePaper} from "./CandidateProfile.styles";
import React, {useEffect, useState} from "react";
import {deleteJobOfferById, getJobOfferCandidatesByJobId, useJobsByName} from "../../api/JobsApi";
import RedButton from "../atoms/RedButton";
import {useNavigate} from "react-router-dom"
import {JobCard} from "./JobsCard";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import Dialog from "@mui/material/Dialog";
import Button from "@mui/joy/Button";
import {JobTitleOnJobsCard, StyledPaperJobsCard} from "./JobsCard.styles";


export default function EmployerJobs(props) {
    const [data, setData] = useState([]);
    const fetchData = useJobsByName(props.id);
    const [jobTitle, setJobTitle] = useState("");
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();

    const [candidateData, setCandidateData] = useState([]);
    const candidateFetchData = async (jobId) => {
        console.log("jobId:", jobId);
        const response = await getJobOfferCandidatesByJobId(jobId);
        const data = response.data;
        console.log(data)
        setCandidateData(data);
    };

    const handleCandidatesClick = (jobId, jobTitle) => {
        handleModalOpen(jobId);
        console.log(jobTitle)
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

            <Dialog open={showModal} onClose={handleModalClose}>
                <DialogTitle sx={{textAlign: "center"}} id="responsive-dialog-title">
                    Applicants for {jobTitle}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText
                        component="legend"
                        sx={{textAlign: "center"}}
                    >
                        {candidateData.map((candidate) =>(
                            <StyledPaperJobsCard>
                                <JobTitleOnJobsCard variant="h1" component="h1">
                                    {candidate.name}
                                </JobTitleOnJobsCard>
                            </StyledPaperJobsCard>
                        ))}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleModalClose} color="secondary">
                        Discard
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}