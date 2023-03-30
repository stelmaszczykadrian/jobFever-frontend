import {SortButton} from "../atoms/SortButton";
import React from "react";
import {styled} from "@mui/material";
export const StyledSortButtonsContainer = styled("div")`
  width: 80%;
  flex: content;
  flex-direction: row;
  flex-grow: 1;
  padding: 5px;
  margin-top: 5%;
`;

export default function SortButtonsContainer(){
    return (
        <StyledSortButtonsContainer>
            <SortButton>SQL</SortButton>
            <SortButton>JS</SortButton>
            <SortButton>C++</SortButton>
            <SortButton>JAVA</SortButton>
            <SortButton>Java Developer</SortButton>
        </StyledSortButtonsContainer>
    )
}