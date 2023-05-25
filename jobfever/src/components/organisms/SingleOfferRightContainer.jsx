import React from "react";
import {StyledSingleOfferRightContainer} from "./SingleOfferRightContainer.styles";
import SingleOfferDetailsContainer from "../molecules/SingleOfferDetailsContainer";
import SingleOfferEmployerNameField from "../molecules/SingleOfferEmployerNameField";
import {useNavigate} from "react-router-dom";

function SingleOfferRightContainer(props) {

    const navigate = useNavigate();
    const navigateToEmployerPage = (employerId) => {
        navigate(`/employer/${employerId}`);
    };
    const handleEmployerClick = (employerId) => {
        navigateToEmployerPage(employerId);
    };

    return (
        <StyledSingleOfferRightContainer>
            <SingleOfferEmployerNameField {...props} onClick={() => handleEmployerClick(props.offerDetails.employer_id)}/>
            <SingleOfferDetailsContainer {...props}/>
        </StyledSingleOfferRightContainer>
    );
}
export default SingleOfferRightContainer;