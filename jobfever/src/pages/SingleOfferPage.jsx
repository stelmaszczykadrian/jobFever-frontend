import SingleOfferMainComponent from "../components/templates/SingleOfferMainComponent";
import {useParams} from "react-router-dom";

function SingleOfferPage() {

    const { id } = useParams();

    return (
        <SingleOfferMainComponent id={id}/>
    )}

export default SingleOfferPage;








