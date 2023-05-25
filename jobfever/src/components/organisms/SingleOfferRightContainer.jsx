import React from "react";
import {StyledSingleOfferRightContainer} from "./SingleOfferRightContainer.styles";
import SingleOfferDetailsContainer from "../molecules/SingleOfferDetailsContainer";
import SingleOfferEmployerNameField from "../molecules/SingleOfferEmployerNameField";

function SingleOfferRightContainer(props) {

    return (
        <StyledSingleOfferRightContainer>
            <SingleOfferEmployerNameField {...props}/>
            <SingleOfferDetailsContainer {...props}/>
        </StyledSingleOfferRightContainer>
    );
}
export default SingleOfferRightContainer;