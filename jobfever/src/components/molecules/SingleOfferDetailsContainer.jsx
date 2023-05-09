import React from "react";
import {StyledSingleOfferDetailsContainer} from "./SingleOfferDetailsContainer.styles";
import JobOfferApplyModal from "./JobOfferApplyModal";
import moment from "moment";

function SingleOfferDetailsContainer(props) {
    const {offerDetails} = props;
    const postingDate = moment(offerDetails.postingDate);
    const expirationDate = moment(offerDetails.expirationDate);
    const remainingDays = expirationDate.diff(postingDate, 'days');

    return (
        <StyledSingleOfferDetailsContainer>
            <JobOfferApplyModal jobId = {offerDetails.jobId}/>
            <h3>Salary</h3>
            <p>{offerDetails.salaryFrom}-{offerDetails.salaryTo} {offerDetails.currencyType}</p>
            <h3>Valid</h3>
            <p>{postingDate.format("DD/MM/YYYY")} (expires in {remainingDays} days)</p>
            <h3>Contract Type</h3>
            <p>{offerDetails.jobType}</p>
            <h3>Location</h3>
            <p>{offerDetails.location}</p>

        </StyledSingleOfferDetailsContainer>
    );
}
export default SingleOfferDetailsContainer;