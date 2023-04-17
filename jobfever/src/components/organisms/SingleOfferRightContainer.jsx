import React from "react";
import {StyledSingleOfferRightContainer} from "./SingleOfferRightContainer.styles";
import SingleOfferDetailsContainer from "../molecules/SingleOfferDetailsContainer";

function SingleOfferRightContainer(props) {
    return (
        <StyledSingleOfferRightContainer>
            <SingleOfferDetailsContainer {...props}/>
        </StyledSingleOfferRightContainer>
    );
}
export default SingleOfferRightContainer;