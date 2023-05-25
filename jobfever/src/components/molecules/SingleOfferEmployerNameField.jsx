import {StyledSingleOfferDetailsContainer} from "./SingleOfferDetailsContainer.styles";
import {useEmployerById} from "../../api/EmployersApi";
import {StyledJobImage} from "../atoms/JobImage.styles";

function SingleOfferEmployerNameField(props) {

    const {offerDetails} = props;
    const {data, loading} = useEmployerById(offerDetails.employer_id);

    return (
        <StyledSingleOfferDetailsContainer style={{display: 'flex'}} onClick={props.onClick}>
            <StyledJobImage style={{margin: '0% 3% 0% 0%'}} alt="Employer logo" src={data.picture}/>
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <h3 style={{margin: 'auto', marginLeft: '0'}}>Company</h3>
                <p style={{margin: 'auto', marginLeft: '0'}}>{data.companyName}</p>
            </div>
        </StyledSingleOfferDetailsContainer>
    );
}
export default SingleOfferEmployerNameField;