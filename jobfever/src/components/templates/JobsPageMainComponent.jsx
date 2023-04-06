import {StyledJobsPageMainComponent} from "./JobsPageMainComponent.styles";
import JobOffersContainer from "../organisms/JobOffersContainer";
import React from "react";
import Navbar from "../molecules/Navbar";

export default function JobsPageMainComponent(){
    return(
        <StyledJobsPageMainComponent>
            <Navbar />
            <JobOffersContainer/>
        </StyledJobsPageMainComponent>
    )
}