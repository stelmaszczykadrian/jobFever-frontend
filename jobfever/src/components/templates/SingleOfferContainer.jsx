import React from "react";
import {StyledSingleOfferContainer} from "./SingleOfferContainer.styles";


function SingleOfferContainer(props) {
    return (
        <StyledSingleOfferContainer>
            {props.children}
        </StyledSingleOfferContainer>
    );
}
export default SingleOfferContainer;