import React from "react";
import {StyledSingleOfferLeftContainer} from "./SingleOfferLeftContainer.styles";
import SingleOfferField from "../molecules/SingleOfferField";


function SingleOfferLeftContainer(props) {

    const {offerDetails} = props;

    return (
        <StyledSingleOfferLeftContainer>
            {/*<SingleOfferField title={offerDetails.employer.companyName} text={offerDetails.title} />*/}
            <SingleOfferField title="Offer Title" text={offerDetails.title} />
            <SingleOfferField title="Description" text={offerDetails.description} />
            <SingleOfferField title="Technical Requirements" text={(offerDetails.technicalRequirements).join(", ")} />
            <SingleOfferField title="Responsibilities" text={offerDetails.responsibilities} />
            <SingleOfferField title="Who We Are Looking For" text={offerDetails.whoWeAreLookingFor} />
            <SingleOfferField title="Benefits" text={offerDetails.benefits} />
        </StyledSingleOfferLeftContainer>
    );
}
export default SingleOfferLeftContainer;

