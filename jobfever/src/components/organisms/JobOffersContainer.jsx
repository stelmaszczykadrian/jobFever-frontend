import JobOfferGrid from "../molecules/JobOfferGrid";
import React, {useState, useCallback} from "react";
import {StyledJobOffersContainer} from "./JobOffersContainer.styles";
import {useJobsPagination} from "../../api/JobsApi";
import JobsPageSortComponent from "../molecules/JobsPageSortComponent";
import {useNavigate} from "react-router-dom";
import {InputBase} from "@mui/material";
import { styled, alpha } from '@mui/material/styles';



export default function JobOffersContainer() {
    const navigate = useNavigate();

    const handleJobClick = (jobId) => {
        navigate(`/job/${jobId}`);
    };

    const [pageNumber, setPageNumber] = useState(1);
    const [field, setField] = useState("");
    const [sortBy, setSortBy] = useState("postingDate");

    const {
        jobs,
        hasMore,
        loading,
        error,
    } = useJobsPagination(pageNumber, sortBy, field);

    const lastJobElementRef = useCallback(
        (node) => {
            if (loading) return;

            const observer = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting && hasMore) {
                    setPageNumber((prevPageNumber) => prevPageNumber + 1);
                }
            });

            if (node) observer.observe(node);

            return () => observer.disconnect();
        },
        [loading, hasMore]
    );

    return (
        <StyledJobOffersContainer>
            <JobsPageSortComponent />
            {jobs.map((job, index) => {
                if (jobs.length === index + 1) {
                    return (
                        <div key={job.id} ref={lastJobElementRef}>
                            <JobOfferGrid job={job} onClick={() => handleJobClick(job.jobId)} />
                        </div>
                    );
                } else {
                    return (
                        <JobOfferGrid
                            job={job}
                            onClick={() => handleJobClick(job.jobId)}
                            key={job.id}
                        />
                    );
                }
            })}
            {loading && <div>loading</div>}
            {error && <div>error when loading jobs</div>}
        </StyledJobOffersContainer>
    );
}