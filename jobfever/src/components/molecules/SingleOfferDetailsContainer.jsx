import React from "react";
import {StyledSingleOfferDetailsContainer} from "./SingleOfferDetailsContainer.styles";
import RedButton from "../atoms/RedButton";
import {useGetJobOfferById} from "../../api/JobsApi";

function SingleOfferDetailsContainer() {

    const offerDetails = useGetJobOfferById();

    return (
        <StyledSingleOfferDetailsContainer>
            <RedButton text="Apply" />
            <h3>Salary</h3>
            <p>{offerDetails.salaryFrom}-{offerDetails.salaryTo} {offerDetails.currencyType}</p>
            <h3>Valid</h3>
            <p>{offerDetails.postingDate}</p>
            <h3>Contract Type</h3>
            <p>{offerDetails.jobType}</p>
            <h3>Location</h3>
            <p>{offerDetails.location}</p>

        </StyledSingleOfferDetailsContainer>
    );
}
export default SingleOfferDetailsContainer;