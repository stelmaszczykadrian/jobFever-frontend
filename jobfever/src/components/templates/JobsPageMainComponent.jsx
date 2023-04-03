import {StyledJobsPageMainComponent} from "./JobsPageMainComponent.styles";
import SortButtonsContainer from "../organisms/SortButtonsContainer";
import JobOffersContainer from "../organisms/JobOffersContainer";
import React from "react";
import Navbar from "../molecules/Navbar";

export default function JobsPageMainComponent(){
    return(
        <StyledJobsPageMainComponent>
            <Navbar />
            <SortButtonsContainer/>
            <JobOffersContainer/>
        </StyledJobsPageMainComponent>
    )
}