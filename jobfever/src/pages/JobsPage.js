import React from "react";
import {StyledMainComponent} from "../components/styled-components/StyledMainComponent";
import {SortButton} from "../components/buttons/SortButton";
import Button from "@mui/joy/Button";
import {StyledSortButtonsContainer} from "../components/styled-components/StyledSortButtonsContainer";






export default function JobsPage(){
    return (
        <div>
        <StyledMainComponent>
            <StyledSortButtonsContainer>
            <SortButton>SQL</SortButton>
            <SortButton>JS</SortButton>
            <SortButton>C++</SortButton>
            <SortButton>JAVA</SortButton>
            </StyledSortButtonsContainer>
        </StyledMainComponent>
        </div>
    )
}