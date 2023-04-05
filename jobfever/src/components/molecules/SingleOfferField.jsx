import React from "react";
import {StyledSingleOfferField} from "./SingleOfferField.styles";
import SingleOfferFieldTitle from "../atoms/SingleOfferFieldTitle";
import SingleOfferFieldText from "../atoms/SingleOfferFieldText";

function SingleOfferField(props) {
    return (
        <StyledSingleOfferField>
            <SingleOfferFieldTitle title={props.title}></SingleOfferFieldTitle>
            <SingleOfferFieldText text={props.text}></SingleOfferFieldText>
        </StyledSingleOfferField>
    );
}
export default SingleOfferField;

