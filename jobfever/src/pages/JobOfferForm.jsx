import JobOfferFormContainer from "../components/organisms/JobOfferFormContainer";

function JobOfferForm() {
    return (
        <JobOfferFormContainer title=''
                               description=''
                               technicalRequirements={[]}
                               responsibilities=''
                               whoWeAreLookingFor=''
                               benefits=''
                               location=''
                               salaryFrom=''
                               salaryTo=''
                               jobType=''
                               currencyType=''
                               workType=''
                               type='CREATE'
                               pageTitle="Post a job offer"/>

    );
}

export default JobOfferForm;

