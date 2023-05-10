import ProfileContainerTitle from "../atoms/ProfileContainerTitle";
import {StyledProfilePaper} from "./CandidateProfile.styles";
import React, {useEffect, useState} from "react";
import {deleteJobOfferById, getJobOfferCandidatesByJobId, useJobsByName} from "../../api/JobsApi";
import RedButton from "../atoms/RedButton";
import {useNavigate} from "react-router-dom"
import {JobCard} from "./JobsCard";
import CandidateModal from "./CandidateModal";
import Typography from "@mui/joy/Typography";
import IconButton from "@mui/material/IconButton";
import {StyledEditIcon} from "../atoms/StyledEditIcon";
import {StyledDeleteIcon} from "../atoms/StyledDeleteIcon";
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';


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
        <StyledProfilePaper>
            <ProfileContainerTitle text={"Our Jobs"} />
            {data.length > 0 ? (
                <>
                    {data.map((job, index) => (
                        <div key={job.jobId} style={{backgroundColor: 'rgba(0, 0, 0, 0.05)', borderRadius: '8px'}}>
                            <JobCard job={job} style={{marginTop: '2%', marginBottom: '2%'}} handleJobClick={handleJobClick} />
                            <div style={{display: 'flex', flexDirection: 'row-reverse'}}>
                                <IconButton onClick={() => navigate(`/job/${job.jobId}/edit`)}>
                                    <StyledEditIcon/>
                                </IconButton>
                                <IconButton onClick={() => deleteOffer(job.jobId)}>
                                    <StyledDeleteIcon />
                                </IconButton>
                                <IconButton onClick={() => handleCandidatesClick(job.jobId, job.title)}>
                                    <PeopleAltIcon style={{fill: "rgb(183, 4, 11)", fontSize: '1.4em'}}/>
                                </IconButton>
                            </div>
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
        </StyledProfilePaper>
    );
}