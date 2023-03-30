import JobOfferGrid from "../molecules/JobOfferGrid";
import React from "react";
import {StyledJobOffersContainer} from "./JobOffersContainer.styled";



export default function JobOffersContainer(){
    return (
        <StyledJobOffersContainer>
            <JobOfferGrid />
            <JobOfferGrid />
        </StyledJobOffersContainer>
    )
}