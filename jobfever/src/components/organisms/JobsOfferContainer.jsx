import {useEffect, useState} from "react";

import Pagination from "@mui/material/Pagination";
import Typography from "@mui/joy/Typography";
import {makeStyles} from "@mui/styles";
import {useNavigate} from "react-router-dom";
import {StyledJobsPageMainComponent} from "../templates/JobsPageMainComponent.styles";
import {StyledJobOffersContainer, StyledPaginationContainer} from "./JobOffersContainer.styles";
import JobsPageSortComponent from "../molecules/JobsPageSortComponent";
import JobOfferGrid from "../molecules/JobOfferGrid";
import axios from "axios";


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
    const navigate = useNavigate();

    useEffect(() => {
        loadItems();
    }, [currentPage, selectedLanguage]);


    function loadItems() {
        const apiUrl = `http://localhost:8080/api/jobs?page=${currentPage}&size=10&language=${selectedLanguage}`;

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
        setCurrentPage(0);
    };

    const handleJobClick = (jobId) => {
        navigate(`/job/${jobId}`);
    };

    return (
        <div>
            <StyledJobsPageMainComponent>
                <StyledJobOffersContainer>
                    <JobsPageSortComponent onLanguageChange={handleLanguageChange}/>
                    {loading ? (
                        <Typography></Typography>
                    ) : (
                        <div>
                            {jobs.map((job, index) => (
                                <div key={job.index}>
                                    <JobOfferGrid job={job} key={index} onClick={() => handleJobClick(job.jobId)}/>
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
                        classes={{ul: classes.ul}}
                    />
                </StyledPaginationContainer>
            </StyledJobsPageMainComponent>
        </div>
    );
}




