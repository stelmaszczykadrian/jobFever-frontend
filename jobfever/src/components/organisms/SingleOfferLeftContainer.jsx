import React from "react";
import {StyledSingleOfferLeftContainer} from "./SingleOfferLeftContainer.styles";
import SingleOfferField from "../molecules/SingleOfferField";
import {useGetJobOfferById} from "../../api/JobsApi";




function SingleOfferLeftContainer() {

    const offerDetails = useGetJobOfferById();

    return (
        <StyledSingleOfferLeftContainer>
            {/*<SingleOfferField title={offerDetails.employer.companyName} text={offerDetails.title} />*/}
            <SingleOfferField title="Offer Title" text={offerDetails.title} />
            <SingleOfferField title="Description" text={offerDetails.description} />
            <SingleOfferField title="Technical Requirements" text={offerDetails.technicalRequirements} />
            <SingleOfferField title="Responsibilities" text={offerDetails.responsibilities} />
            <SingleOfferField title="Who We Are Looking For" text={offerDetails.whoWeAreLookingFor} />
            <SingleOfferField title="Benefits" text={offerDetails.benefits} />
        </StyledSingleOfferLeftContainer>
    );
}
export default SingleOfferLeftContainer;

// const titles = ['Description', "Technical Requirements", "Responsibilities", "Who We Are Looking For", "Benefits"]
{/*{titles.map((title,index) =>*/}
{/*    (<SingleOfferField key={`${title}_${index}`} title={title} text="Some Offer Information"/>))}*/}