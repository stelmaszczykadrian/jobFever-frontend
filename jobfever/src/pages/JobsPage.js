import React from "react";
import {StyledMainComponent} from "../components/styled-components/StyledMainComponent";
import SortButtonsContainer from "../components/organisms/SortButtonsContainer";
import JobOffersContainer from "../components/organisms/JobOffersContainer";


export default function JobsPage() {
    return (
        <StyledMainComponent>
            <SortButtonsContainer/>
            <JobOffersContainer/>
        </StyledMainComponent>
    )
}