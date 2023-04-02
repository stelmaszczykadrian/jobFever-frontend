import {SortButton} from "../atoms/SortButton";
import React from "react";
import {StyledSortButtonsContainer} from "./SortButtonsContainer.styles";

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