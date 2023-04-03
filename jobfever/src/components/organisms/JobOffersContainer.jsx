import JobOfferGrid from "../molecules/JobOfferGrid";
import React, {useEffect, useState} from "react";
import {StyledJobOffersContainer} from "./JobOffersContainer.styles";
import axios from "axios";
import {Pagination} from "@mui/material";


export default function JobOffersContainer(){




    const res = axios.get('http://localhost:8080/api/jobs/pagination');
    console.log(res)





    return (
        <StyledJobOffersContainer>
            {/*<JobOfferGrid />*/}
            {/*<JobOfferGrid />*/}
        </StyledJobOffersContainer>
    )
}