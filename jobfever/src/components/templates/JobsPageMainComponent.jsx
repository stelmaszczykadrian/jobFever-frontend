import {StyledJobsPageMainComponent} from "./JobsPageMainComponent.styles";
import SortButtonsContainer from "../organisms/SortButtonsContainer";
import JobOffersContainer from "../organisms/JobOffersContainer";
import React from "react";

export default function JobsPageMainComponent(){
    return(
        <StyledJobsPageMainComponent>
            <SortButtonsContainer/>
            <JobOffersContainer/>
        </StyledJobsPageMainComponent>
    )
}