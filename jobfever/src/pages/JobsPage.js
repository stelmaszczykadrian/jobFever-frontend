import React from "react";
import {StyledMainComponent} from "../components/styled-components/StyledMainComponent";
import {StyledSortButtonsContainer} from "../components/styled-components/StyledSortButtonsContainer";
import {SortButton} from "../components/buttons/SortButton";






export default function JobsPage(){
    return (
        <div>
        <StyledMainComponent>
            <StyledSortButtonsContainer>
            <SortButton>SQL</SortButton>
            <SortButton>JS</SortButton>
            <SortButton>C++</SortButton>
            <SortButton>JAVA</SortButton>
            <SortButton>Java Developer</SortButton>
            </StyledSortButtonsContainer>
        </StyledMainComponent>
        </div>
    )
}