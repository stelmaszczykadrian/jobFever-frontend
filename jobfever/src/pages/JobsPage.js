import React from "react";
import {StyledMainComponent} from "../components/styled-components/StyledMainComponent";
import {StyledSortButtonsContainer} from "../components/styled-components/StyledSortButtonsContainer";
import {SortButton} from "../components/buttons/SortButton";
import {StyledJobOffersContainer} from "../components/styled-components/StyledJobOffersContainer";
import JobOfferGrid from "../components/containers/JobOfferGrid";


export default function JobsPage() {
    return (
        <div>
            <StyledMainComponent>
                <StyledSortButtonsContainer>
                    <SortButton>SQL</SortButton>
                    <SortButton>JS</SortButton>
                    <SortButton>C++</SortButton>
                    <SortButton>JAVA</SortButton>
                    <SortButton>Java Developer</SortButton>

                </StyledSortButtonsContainer>
                <StyledJobOffersContainer>
                    <JobOfferGrid>

                </JobOfferGrid>
                    <JobOfferGrid>

                    </JobOfferGrid>

                </StyledJobOffersContainer>

            </StyledMainComponent>
        </div>
    )
}