import NoPageContainer from "../organisms/NoPageContainer";
import {StyledNoPageMainComponent} from "./NoPageMainComponent.styles";
import Navbar from "../molecules/Navbar";
import React from "react";

export default function NoPageMainComponent() {
    return (
        <StyledNoPageMainComponent>
            <Navbar/>
            <NoPageContainer/>
        </StyledNoPageMainComponent>
    );
}
