import Input from "@mui/joy/Input";
import {
    StyledJobOfferCreationContainer,
    StyledInputJobOfferContainer,
    StyledTextarea,
    StyledGridContainer,
    StyledGridItem,
    StyledSelectJobType,
    StyledCurrencyType,
    StyledButtonCenter, StyledJobOfferContainer, StyledRedButtonModalButton, StyledInputLabel
} from "./JobOfferFormContainer.styles";
import React, {useState, useEffect} from "react";
import {Form} from "react-bootstrap";
import Navbar from "../molecules/Navbar";
import StyledText from "../atoms/StyledText";
import DialogContentText from "@mui/material/DialogContentText";
import TechnicalRequirementsContainer from "../molecules/TechnicalRequirementsContainer";
import JobOfferFormula from "../molecules/JobOfferFormulaModal";
import {useNavigate, useParams} from "react-router-dom";
import {createJob, updateJob} from "../../api/JobsApi";
import Typography from "@mui/joy/Typography";
import {languageLabels} from "../../constants/Constans";
import {
    incorrectBenefitsLengthMessage, incorrectCurrencyTypeBlankMessage,
    incorrectDescriptionBlankMessage,
    incorrectDescriptionLengthMessage, incorrectJobTypeBlankMessage,
    incorrectLocationBlankMessage,
    incorrectLocationLengthMessage,
    incorrectResponsibilitiesLengthMessage, incorrectResponsibilitiesBlankMessage,
    incorrectSalaryFromBlankMessage,
    incorrectSalaryFromLengthMessage,
    incorrectSalaryFromLessThanZeroMessage,
    incorrectSalaryFromNotANumberMessage,
    incorrectSalaryToBlankMessage, incorrectSalaryToLengthMessage,
    incorrectSalaryToLessThanZeroMessage,
    incorrectSalaryToNotANumberMessage,
    incorrectTitleBlankMessage,
    incorrectTitleLengthMessage,
    incorrectWhoWeAreLookingLengthMessage, incorrectWorkTypeBlankMessage,
    maximumValueLength,
    maxLocationValueLength, maxSalaryValueLength,
    maxTitleLengthValue,
    minSalaryValueLength,
    minTechnicalRequirementsValue,
    missingTechnicalRequirementMessage, incorrectWhoWeAreLookingForBlankMessage, incorrectBenefitsBlankMessage
} from "../../constants/JobOfferFormValidationsMessages";

const jobType = [
    {value: "", label: "Job type", disabled: true},
    {value: 'FULL_TIME', label: 'Full-time'},
    {value: 'PART_TIME', label: 'Part-time'},
    {value: 'CONTRACT', label: 'Contract'},
    {value: 'FREELANCE', label: 'Freelance'},
    {value: 'INTERNSHIP', label: 'Internship'},
    {value: 'TEMPORARY', label: 'Temporary'},
];

const currencyType = [
    {value: "", label: "Currency", disabled: true},
    {value: 'PLN', label: 'PLN'},
    {value: 'EURO', label: 'EURO'},
    {value: 'DOLLAR', label: 'DOLLAR'},
];

const workType = [
    {value: "", label: "Work type", disabled: true},
    {value: 'REMOTE', label: 'remote'},
    {value: 'ONSITE', label: 'on-site'},
    {value: 'HYBRID', label: 'hybrid'},
];

export default function JobOfferFormContainer(props) {

    const getInitialButtons = () => {
        if (!props.technicalRequirements) {
            return [];
        }
        const result = [];
        props.technicalRequirements.forEach(x => {
            const index = languageLabels.findIndex(e =>e.toLowerCase()===x.toLowerCase()) ;
            if (index > -1) {
                result.push(index)
            }
        })
        return result
    }
    const [modalText, setModalText] = useState(" ")
    const {id} = useParams();
    const navigate = useNavigate();
    const [pressedButtons, setPressedButtons] = useState(getInitialButtons())
    const [showModal, setShowModal] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);
    const [formSubmitted, setFormSubmitted] = useState(false);


    const [input, setInput] = useState({
        title: props.title,
        description: props.description,
        technicalRequirements: props.technicalRequirements,
        responsibilities: props.responsibilities,
        whoWeAreLookingFor: props.whoWeAreLookingFor,
        benefits: props.benefits,
        location: props.location,
        salaryFrom: props.salaryFrom,
        salaryTo: props.salaryTo,
        jobType: props.jobType,
        currencyType: props.currencyType,
        workType: props.workType,
        errors: {
            title: '',
            description: '',
            technicalRequirements: [],
            responsibilities: '',
            whoWeAreLookingFor: '',
            benefits: '',
            location: '',
            salaryFrom: '',
            salaryTo: '',
            jobType: '',
            currencyType: '',
            workType: ''
        }
    });

    const validateInput = (name, value) => {
        switch (name) {
            case 'title':
                if (value === '') {
                    return incorrectTitleBlankMessage;
                } else if (value.length > maxTitleLengthValue) {
                    return incorrectTitleLengthMessage
                }
                return '';
            case 'description':
                return value !== '' ? (value.length <= maximumValueLength ? '' : incorrectDescriptionLengthMessage) : incorrectDescriptionBlankMessage;
            case 'responsibilities':
                return value!== '' ? (value.length <= maximumValueLength ? '' : incorrectResponsibilitiesLengthMessage) : incorrectResponsibilitiesBlankMessage;
            case 'whoWeAreLookingFor':
                return value!== '' ? (value.length <= maximumValueLength ? '' : incorrectWhoWeAreLookingLengthMessage) : incorrectWhoWeAreLookingForBlankMessage;
            case 'technicalRequirements':
                return value.length > minTechnicalRequirementsValue ? '' : missingTechnicalRequirementMessage;
            case 'benefits':
                return value!== '' ? (value.length <= maximumValueLength ? '' : incorrectBenefitsLengthMessage) : incorrectBenefitsBlankMessage;
            case 'location':
                if (value === '') {
                    return incorrectLocationBlankMessage;
                } else if (value.length > maxLocationValueLength) {
                    return incorrectLocationLengthMessage;
                }
                return '';
            case 'salaryFrom':
                if (value === '') {
                    return incorrectSalaryFromBlankMessage;
                }else if (isNaN(value)) {
                    return incorrectSalaryFromNotANumberMessage;
                }else if (value <= minSalaryValueLength) {
                    return incorrectSalaryFromLessThanZeroMessage;
                }else if (parseInt(value) > maxSalaryValueLength) {
                    return incorrectSalaryFromLengthMessage;
                } else {
                    return '';
                }
            case 'salaryTo':
                if (value === '') {
                    return incorrectSalaryToBlankMessage;
                }else if (isNaN(value)) {
                    return incorrectSalaryToNotANumberMessage;
                }else if (value <= minSalaryValueLength) {
                    return incorrectSalaryToLessThanZeroMessage;
                }else if (parseInt(value) > maxSalaryValueLength) {
                    return incorrectSalaryToLengthMessage;
                } else {
                    return '';
                }
            case "jobType":
                return value !== "" ? "" : incorrectJobTypeBlankMessage;
            case 'currencyType':
                return value !== '' ? '' : incorrectCurrencyTypeBlankMessage;
            case 'workType':
                return value !== '' ? '' : incorrectWorkTypeBlankMessage;
            default:
                return '';
        }
    };


    const handleSubmit = async (event) => {
        event.preventDefault();

        const errors = {...input.errors};
        let formIsValid = true;

        for (const [key, value] of Object.entries(input)) {
            const errorMessage = validateInput(key, value);
            errors[key] = errorMessage;
            if (errorMessage) {
                formIsValid = false;
            }
        }
        if (formIsValid) {
            const userData = {
                title: input.title,
                description: input.description,
                technicalRequirements: input.technicalRequirements,
                responsibilities: input.responsibilities,
                whoWeAreLookingFor: input.whoWeAreLookingFor,
                benefits: input.benefits,
                location: input.location,
                salaryFrom: input.salaryFrom,
                salaryTo: input.salaryTo,
                jobType: input.jobType,
                currencyType: input.currencyType,
                workType: input.workType
            };

            if (props.type === 'CREATE'){
                createJob(userData, () => {
                    setShowModal(true);
                    setFormSubmitted(true);
                    setErrorMessage(null);
                    setModalText("Job added successfully");
                    setTimeout(() => {
                        navigate('/jobs');
                    }, 2000);
                }, (errorMessages) => {
                    setErrorMessage(errorMessages);
                });
            }else {
                console.log('update');
                console.log(userData);
                console.log(id);
                updateJob(userData, () => {
                    setShowModal(true);
                    setFormSubmitted(true);
                    setErrorMessage(null);
                    setModalText("Job edited successfully");
                    setTimeout(() => {
                        navigate('/jobs');
                    }, 2000);
                }, (errorMessages) => {
                    setErrorMessage(errorMessages);
                }, id);
            }


        } else {
            setInput((prev) => ({...prev, errors}));
        }
    };

    const handleClose = () => {
        setShowModal(false);
    };


    const onInputChange = e => {
        const {name, value} = e.target;
        let error = '';
        if (name === 'technicalRequirements') {
            error = value.length > minTechnicalRequirementsValue ? '' : missingTechnicalRequirementMessage;
        } else {
            error = validateInput(name, value);
        }
        setInput((prevFormData) => ({
            ...prevFormData,
            [name]: value,
            errors: {...prevFormData.errors, [name]: error}
        }));


    }

    const onJobTypeChange = (e) => {
        setInput((prev) => ({
            ...prev,
            jobType: e.target.value,
            errors: {
                ...prev.errors,
                jobType: ''
            }
        }));
    };

    const onCurrencyTypeChange = (e) => {
        setInput((prev) => ({
            ...prev,
            currencyType: e.target.value,
            errors: {
                ...prev.errors,
                currencyType: ''
            }
        }));
    };

    const onWorkTypeChange = (e) => {
        setInput((prev) => ({
            ...prev,
            workType: e.target.value,
            errors: {
                ...prev.errors,
                workType: ''
            }
        }));
    };

    return (
        <StyledJobOfferContainer>
            <Navbar/>
            <Form onSubmit={handleSubmit}>
                <StyledText tag="h1"
                            color="rgba(171, 36, 36)"
                            text={props.pageTitle}/>
                <StyledJobOfferCreationContainer>
                    <StyledInputJobOfferContainer>
                        <StyledInputLabel>Title :</StyledInputLabel>
                        <Input
                            type="text"
                            placeholder="Ex. Junior java developer"
                            name="title"
                            value={input.title}
                            onChange={onInputChange}
                        />
                        {input.errors.title &&
                            <Typography><StyledText
                                tag="span"
                                color="red"
                                text={input.errors.title}
                            /></Typography>}
                        <StyledInputLabel>Project description:</StyledInputLabel>
                        <StyledTextarea
                            placeholder="Enter description"
                            name="description"
                            value={input.description}
                            onChange={onInputChange}
                        />
                        {input.errors.description &&
                            <StyledText
                                tag="span"
                                color="red"
                                text={input.errors.description}
                            />}
                        <StyledInputLabel>Technical requirements:</StyledInputLabel>
                        <TechnicalRequirementsContainer pressedButtons={pressedButtons}
                                                        setPressedButtons={setPressedButtons} input={input}
                                                        setInput={setInput}/>
                        {input.errors.technicalRequirements && input.technicalRequirements.length === 0 &&
                            <StyledText
                                tag="span"
                                color="red"
                                text={input.errors.technicalRequirements}
                            />}
                        <StyledInputLabel>Responsibilities:</StyledInputLabel>
                        <StyledTextarea
                            placeholder="Enter responsibilities"
                            name="responsibilities"
                            value={input.responsibilities}
                            onChange={onInputChange}
                        />
                        {input.errors.responsibilities &&
                            <StyledText
                                tag="span"
                                color="red"
                                text={input.errors.responsibilities}
                            />}
                        <StyledInputLabel>Who we are looking for: </StyledInputLabel>
                        <StyledTextarea
                            placeholder="Enter who we are looking for"
                            name="whoWeAreLookingFor"
                            value={input.whoWeAreLookingFor}
                            onChange={onInputChange}
                        />
                        {input.errors.whoWeAreLookingFor &&
                            <StyledText
                                tag="span"
                                color="red"
                                text={input.errors.whoWeAreLookingFor}
                            />}
                        <StyledInputLabel>Benefits:</StyledInputLabel>
                        <StyledTextarea
                            placeholder="Enter benefits"
                            name="benefits"
                            value={input.benefits}
                            onChange={onInputChange}
                        />
                        {input.errors.benefits &&
                            <StyledText
                                tag="span"
                                color="red"
                                text={input.errors.benefits}
                            />}
                        <StyledGridContainer>
                            <StyledGridItem>
                                <StyledInputLabel>Salary:</StyledInputLabel>
                                <StyledGridItem>
                                    <StyledGridContainer>
                                        <StyledGridItem>
                                            <Input
                                                placeholder="From"
                                                name="salaryFrom"
                                                value={input.salaryFrom}
                                                onChange={onInputChange}
                                            />
                                            {input.errors.salaryFrom &&
                                                <Typography><StyledText
                                                    tag="span"
                                                    color="red"
                                                    text={input.errors.salaryFrom}
                                                /></Typography>}
                                        </StyledGridItem>
                                        <StyledGridItem>
                                            <Input
                                                placeholder="To"
                                                name="salaryTo"
                                                value={input.salaryTo}
                                                onChange={onInputChange}
                                            />
                                            {input.errors.salaryTo &&
                                                <StyledText
                                                    tag="span"
                                                    color="red"
                                                    text={input.errors.salaryTo}
                                                />}
                                        </StyledGridItem>
                                    </StyledGridContainer>
                                </StyledGridItem>
                            </StyledGridItem>
                            <StyledGridItem>
                                <StyledGridItem>
                                    <StyledInputLabel>Currency:</StyledInputLabel>
                                </StyledGridItem>
                                <StyledGridItem>
                                    <StyledCurrencyType
                                        value={input.currencyType}
                                        onChange={onCurrencyTypeChange}
                                    >
                                        {currencyType.map((option) => (
                                            <option
                                                key={option.value}
                                                value={option.value}
                                                disabled={option.disabled}
                                            >
                                                {option.label}
                                            </option>
                                        ))}
                                    </StyledCurrencyType>
                                    {input.errors.currencyType &&
                                        <Typography><StyledText
                                            tag="span"
                                            color="red"
                                            text={input.errors.currencyType}
                                        /></Typography>}
                                </StyledGridItem>
                            </StyledGridItem>
                        </StyledGridContainer>
                        <StyledInputLabel>Location:</StyledInputLabel>
                        <Input
                            placeholder="Enter location"
                            name="location"
                            value={input.location}
                            onChange={onInputChange}
                        />
                        {input.errors.location &&
                            <StyledText
                                tag="span"
                                color="red"
                                text={input.errors.location}
                            />}
                        <StyledGridContainer>
                            <StyledGridItem>
                                <StyledGridItem>
                                    <StyledInputLabel>Types of jobs:</StyledInputLabel>
                                </StyledGridItem>
                                <StyledGridItem>
                                    <StyledSelectJobType
                                        value={input.jobType}
                                        onChange={onJobTypeChange}
                                    >
                                        {jobType.map((option) => (
                                            <option key={option.value} value={option.value}
                                                    disabled={option.disabled}>{option.label}</option>
                                        ))}
                                    </StyledSelectJobType>
                                    {input.errors.jobType &&
                                        <Typography><StyledText
                                            tag="span"
                                            color="red"
                                            text={input.errors.jobType}
                                        /></Typography>}
                                </StyledGridItem>
                            </StyledGridItem>
                            <StyledGridItem>
                                <StyledGridItem>
                                    <StyledInputLabel>Work types:</StyledInputLabel>
                                </StyledGridItem>
                                <StyledGridItem>
                                    <StyledGridItem>
                                        <StyledSelectJobType
                                            value={input.workType}
                                            onChange={onWorkTypeChange}
                                        >
                                            {workType.map((option) => (
                                                <option key={option.value} value={option.value}
                                                        disabled={option.disabled}>{option.label}</option>
                                            ))}
                                        </StyledSelectJobType>
                                        {input.errors.workType &&
                                            <Typography><StyledText
                                                tag="span"
                                                color="red"
                                                text={input.errors.workType}
                                            /></Typography>}
                                    </StyledGridItem>
                                </StyledGridItem>
                            </StyledGridItem>
                        </StyledGridContainer>
                        <StyledButtonCenter>
                            <StyledRedButtonModalButton sx={{
                                ':hover': {
                                    bgcolor: '#852222',
                                    color: 'white'
                                },
                                width: 1 / 4,
                                alignSelf: 'center',
                                mt: 5,
                                backgroundColor: 'rgba(171, 36, 36)'
                            }} type='submit'>SUBMIT</StyledRedButtonModalButton>
                            <JobOfferFormula open={showModal} handleClose={handleClose} errorMessage={errorMessage} text={modalText}/>
                        </StyledButtonCenter>
                    </StyledInputJobOfferContainer>
                </StyledJobOfferCreationContainer>
            </Form>

        </StyledJobOfferContainer>
    );

}