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
                               type='CREATE'/>
    );
}

export default JobOfferForm;

