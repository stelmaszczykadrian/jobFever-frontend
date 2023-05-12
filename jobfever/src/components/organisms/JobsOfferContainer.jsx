import React, {useEffect, useState} from "react";

import Pagination from "@mui/material/Pagination";
import Typography from "@mui/joy/Typography";
import {makeStyles} from "@mui/styles";
import {useNavigate} from "react-router-dom";
import {StyledJobOffersContainer, StyledPaginationContainer} from "./JobOffersContainer.styles";
import JobsPageSortComponent from "../molecules/JobsPageSortComponent";
import JobOfferGrid from "../molecules/JobOfferGrid";
import axios from "axios";
import SearchBar from "../molecules/SearchBar";
import {StyledBoxFlex} from "../molecules/SearchBar.styles";

const useStyles = makeStyles(() => ({
    ul: {
        "& .MuiPaginationItem-root": {
            color: "red",
            fontWeight: "bold",
            fontSize: "18px",
            '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.04)',
            },
            '&.Mui-selected': {
                backgroundColor: 'red',
                color: '#fff',
                fontWeight: 'bold',
                fontSize: '18px'
            }
        }
    }
}));

export default function JobsOfferContainer() {
    const classes = useStyles();
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [selectedLanguage, setSelectedLanguage] = useState("");
    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        loadItems();
    }, [currentPage, selectedLanguage, searchTerm]);

    function loadItems() {
        let apiUrl = "";
        if (searchTerm) {
            apiUrl = `http://localhost:8080/api/jobs/search?searchTerm=${searchTerm}&page=${currentPage}&size=10`;
        } else {
            apiUrl = `http://localhost:8080/api/jobs?page=${currentPage}&size=10&language=${selectedLanguage}`;
        }
        setLoading(true);

        axios.get(apiUrl)
            .then(response => {
                setJobs(response.data.content);
                setTotalPages(response.data.totalPages);
                setLoading(false);
            })
            .catch(error => console.log(error));

    }

    function handlePageChange(event, value) {
        setCurrentPage(value - 1);
    }

    const handleLanguageChange = (language) => {
        setSelectedLanguage(language);
        setSearchTerm("");
        setCurrentPage(0);
    };


    const navigateToJobPage = (jobId) => {
        navigate(`/job/${jobId}`);
    };

    const handleJobClick = (jobId) => {
        navigateToJobPage(jobId);
    };

    const handleSearch = (searchTerm) => {
        setSearchTerm(searchTerm);
        setSelectedLanguage("");
        setCurrentPage(0);
    };

    return (
        <box>
                <StyledJobOffersContainer>
                    <StyledBoxFlex>
                    <JobsPageSortComponent onLanguageChange={handleLanguageChange} />
                    <SearchBar onSearch={handleSearch} />
                    </StyledBoxFlex>
                    {loading ? (
                        <Typography></Typography>
                    ) : (
                        <div>
                            {jobs.map((job, index) => (
                                <div key={`JobOffer_${index}`}>
                                    <JobOfferGrid
                                        job={job}
                                        key={`JobOffer_${index}`}
                                        onClick={() => handleJobClick(job.jobId)}
                                    />
                                </div>
                            ))}
                        </div>
                    )}
                </StyledJobOffersContainer>
                <StyledPaginationContainer>
                    <Pagination
                        count={totalPages}
                        page={currentPage + 1}
                        onChange={handlePageChange}
                        classes={{ ul: classes.ul }}
                    />
                </StyledPaginationContainer>
        </box>
    );
}

