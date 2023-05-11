import React from "react";
import {JobTitleOnJobsCard, StyledPaperJobsCard} from "./JobsCard.styles";
import IconButton from "@mui/material/IconButton";
import {StyledEditIcon} from "../atoms/StyledEditIcon";
import {StyledDeleteIcon} from "../atoms/StyledDeleteIcon";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";


export function JobCardForEmployer({ job, handleJobClick, handleJobEdit, handleDeleteOffer, handleCandidatesClick }) {

    const handleCardClick = () => {
        handleJobClick(job.jobId);
    };

    return (
        <StyledPaperJobsCard>
            <JobTitleOnJobsCard  onClick={handleCardClick} variant="h1" component="h1">
                {job.title}
            </JobTitleOnJobsCard>
            <div>
                <IconButton onClick={() => handleJobEdit(job.jobId)}>
                    <StyledEditIcon/>
                </IconButton>
                <IconButton onClick={() => handleDeleteOffer(job.jobId)}>
                    <StyledDeleteIcon />
                </IconButton>
                <IconButton onClick={() => handleCandidatesClick(job.jobId, job.title)}>
                    <PeopleAltIcon style={{fill: "rgb(183, 4, 11)", fontSize: '1.4em'}}/>
                </IconButton>
            </div>
        </StyledPaperJobsCard>
    );
}