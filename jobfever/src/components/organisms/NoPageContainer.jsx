import {StyledNoPageImage, StyledNoPageMainContainer} from "./NoPageContainer.styles";
import {useNavigate} from "react-router-dom";
import RedButton from "../atoms/RedButton";
import React from "react";

export default function NoPageContainer(){
    const navigate = useNavigate();

    return(
        <StyledNoPageMainContainer>
            <StyledNoPageImage />
            <RedButton text="Home Page" onClick={() => navigate(`/`)}/>
        </StyledNoPageMainContainer>
    );
}
