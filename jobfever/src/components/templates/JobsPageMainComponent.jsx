import {StyledJobsPageMainComponent} from "./JobsPageMainComponent.styles";
import React from "react";
import Navbar from "../molecules/Navbar";
import JobsOfferContainer from "../organisms/JobsOfferContainer";

export default function JobsPageMainComponent(){
    return(
        <StyledJobsPageMainComponent>
            <Navbar />
            <JobsOfferContainer/>
        </StyledJobsPageMainComponent>
    )
}