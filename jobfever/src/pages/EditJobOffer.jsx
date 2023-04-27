import JobOfferFormContainer from "../components/organisms/JobOfferFormContainer";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getJobOfferById} from "../api/JobsApi";

function EditJobOffer() {

    const {id} = useParams();
    const [jobDetails, setJobDetails] = useState();

    useEffect(() => {
        const fetchOffer = async () => {
            const {data} = await getJobOfferById(id);
            setJobDetails(data)
            console.log(data)
        };
        fetchOffer()
    }, [id]);



    return jobDetails ?
            (<JobOfferFormContainer title={jobDetails.title}
                               description={jobDetails.description}
                               technicalRequirements={jobDetails.technicalRequirements}
                               responsibilities={jobDetails.responsibilities}
                               whoWeAreLookingFor={jobDetails.whoWeAreLookingFor}
                               benefits={jobDetails.benefits}
                               location={jobDetails.location}
                               salaryFrom={jobDetails.salaryFrom}
                               salaryTo={jobDetails.salaryTo}
                               jobType={jobDetails.jobType}
                               currencyType={jobDetails.currencyType}
                               workType={jobDetails.workType}
                               pageTitle="Edit job offer"/>
        ): <div>Loading</div>;
}

export default EditJobOffer;