import React from "react";
import {StyledSingleOfferMainComponent} from "./SingleOfferMainComponent.styles";
import SingleOfferLeftContainer from "../organisms/SingleOfferLeftContainer";
import SingleOfferRightContainer from "../organisms/SingleOfferRightContainer";
import Navbar from "../molecules/Navbar";

function SingleOfferMainComponent() {
    return (
        <StyledSingleOfferMainComponent>
            <Navbar />
            <div style={{display:"flex", flexDirection:"row"}}>
                <SingleOfferLeftContainer />
                <SingleOfferRightContainer />
            </div>
            {/*<SingleOfferLeftContainer />*/}
            {/*<SingleOfferRightContainer />*/}
        </StyledSingleOfferMainComponent>
    );
}
export default SingleOfferMainComponent;