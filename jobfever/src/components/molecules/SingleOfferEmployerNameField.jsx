import SingleOfferFieldTitle from "../atoms/SingleOfferFieldTitle";
import SingleOfferFieldText from "../atoms/SingleOfferFieldText";
import {StyledSingleOfferDetailsContainer} from "./SingleOfferDetailsContainer.styles";
import {useEmployerById} from "../../api/EmployersApi";
import {useState} from "react";

function SingleOfferEmployerNameField(props) {

    const {offerDetails} = props;
    const {data, loading} = useEmployerById(offerDetails.employer_id);

    const [pictureUrl, setPictureUrl] = useState();

    return (
        <StyledSingleOfferDetailsContainer onClick={props.onClick}>
            <SingleOfferFieldTitle title="Employer"></SingleOfferFieldTitle>
            <SingleOfferFieldText text={data.companyName}></SingleOfferFieldText>
        </StyledSingleOfferDetailsContainer>
    );
}
export default SingleOfferEmployerNameField;