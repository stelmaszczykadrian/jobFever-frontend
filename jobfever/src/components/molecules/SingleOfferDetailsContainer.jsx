import React from "react";
import {StyledSingleOfferDetailsContainer} from "./SingleOfferDetailsContainer.styles";
import RedButton from "../atoms/RedButton";

function SingleOfferDetailsContainer() {
    return (
        <StyledSingleOfferDetailsContainer>
            <RedButton text="Apply" />
            <h3>Salary</h3>
            <p>10 000 PLN</p>
            <h3>Valid</h3>
            <p>31.12.2023</p>
            <h3>Contract Type</h3>
            <p>Full-Time</p>
            <h3>Location</h3>
            <p>Krakow</p>
            <p>ul. Jana Kowalskiego 1</p>
        </StyledSingleOfferDetailsContainer>


    );
}
export default SingleOfferDetailsContainer;