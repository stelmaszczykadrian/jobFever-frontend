import React from "react";
import {StyledSingleOfferLeftContainer} from "./SingleOfferLeftContainer.styles";
import SingleOfferField from "../molecules/SingleOfferField";

const titles = ['Description', "Technical Requirements", "Responsibilities", "Who We Are Looking For", "Benefits"]

function SingleOfferLeftContainer() {
    return (

        <StyledSingleOfferLeftContainer>
            {titles.map((title) =>
                (<SingleOfferField title={title} text="Some Offer Information"/>))}
        </StyledSingleOfferLeftContainer>

    );
}
export default SingleOfferLeftContainer;

