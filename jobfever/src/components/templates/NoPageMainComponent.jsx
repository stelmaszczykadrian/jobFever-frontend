import NoPageContainer from "../organisms/NoPageContainer";
import {StyledNoPageMainComponent} from "./NoPageMainComponent.styles";
import ResponsiveAppBar from "../molecules/Navbar";
import React from "react";

export default function NoPageMainComponent(){
    return(
        <StyledNoPageMainComponent>
            <ResponsiveAppBar />
            <NoPageContainer/>
        </StyledNoPageMainComponent>
    );
}
