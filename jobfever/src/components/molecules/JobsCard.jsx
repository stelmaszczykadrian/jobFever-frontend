import React from "react";
import {JobTitleOnJobsCard, StyledPaperJobsCard} from "./JobsCard.styles";

export function JobCard({ job, handleJobClick }) {
    const handleCardClick = () => {
        handleJobClick(job.jobId);
    };

    return (
        <StyledPaperJobsCard onClick={handleCardClick}>
            <JobTitleOnJobsCard variant="h1" component="h1">
                {job.title}
            </JobTitleOnJobsCard>
        </StyledPaperJobsCard>
    );
}