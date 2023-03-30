import React from "react";
import {StyledMainComponent} from "../components/styled-components/StyledMainComponent";
import {SortButton} from "../components/atoms/SortButton";
import {StyledJobOffersContainer} from "../components/styled-components/StyledJobOffersContainer";
import JobOfferGrid from "../components/molecules/JobOfferGrid";
import SortButtonsContainer from "../components/molecules/SortButtonsContainer";


export default function JobsPage() {
    return (
        <div>
            <StyledMainComponent>
                <SortButtonsContainer />
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