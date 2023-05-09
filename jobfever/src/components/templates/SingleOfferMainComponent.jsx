import React, {useEffect, useState} from "react";
import {StyledSingleOfferMainComponent} from "./SingleOfferMainComponent.styles";
import SingleOfferLeftContainer from "../organisms/SingleOfferLeftContainer";
import SingleOfferRightContainer from "../organisms/SingleOfferRightContainer";
import Navbar from "../molecules/Navbar";
import {useParams} from "react-router-dom";
import {getJobOfferById} from "../../api/JobsApi";

function SingleOfferMainComponent() {

    const {id} = useParams();
    const [jobDetails, setJobDetails] = useState();

    useEffect(() => {
        const fetchOffer = async () => {
            const {data} = await getJobOfferById(id);
            setJobDetails(data)
        };
        fetchOffer()
    }, [id]);

    return jobDetails ? (
        <StyledSingleOfferMainComponent>
            <Navbar />
        <div style={{display:"flex", flexDirection:"row", maxHeight:"100vh", overflowY:"auto", height:"80%", marginTop:"2%"}}>
            <SingleOfferLeftContainer offerDetails={jobDetails}/>
            <SingleOfferRightContainer offerDetails={jobDetails}/>
        </div>
        </StyledSingleOfferMainComponent>
    ): <div>Loading</div>;
}
export default SingleOfferMainComponent;