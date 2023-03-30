import JobOfferGrid from "../molecules/JobOfferGrid";
import React from "react";
import {styled} from "@mui/material";

const StyledJobOffersContainer = styled("div")`
  flex: content;
  flex-direction: row;
  flex-grow: 30;
  width: 80%;
  height: 50%;
  margin-left: 10%;
  margin-right: 10%;
  margin-bottom: 5%;
`
export default function JobOffersContainer(){
    return (
        <StyledJobOffersContainer>
            <JobOfferGrid />
            <JobOfferGrid />
        </StyledJobOffersContainer>
    )
}