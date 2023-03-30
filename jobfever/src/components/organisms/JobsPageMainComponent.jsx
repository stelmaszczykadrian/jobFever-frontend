import {StyledJobsPageMainComponent} from "./JobsPageMainComponent.styled";
import SortButtonsContainer from "./SortButtonsContainer";
import JobOffersContainer from "./JobOffersContainer";
import React from "react";

export default function JobsPageMainComponent(){
    return(
        <StyledJobsPageMainComponent>
            <SortButtonsContainer/>
            <JobOffersContainer/>
        </StyledJobsPageMainComponent>
    )
}