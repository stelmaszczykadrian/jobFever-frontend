import React from "react";
import {StyledSingleOfferRightContainer} from "./SingleOfferRightContainer.styles";
import SingleOfferDetailsContainer from "../molecules/SingleOfferDetailsContainer";

function SingleOfferRightContainer() {
    return (
        <StyledSingleOfferRightContainer>
            <SingleOfferDetailsContainer />
        </StyledSingleOfferRightContainer>
    );
}
export default SingleOfferRightContainer;