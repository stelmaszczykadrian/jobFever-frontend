import Input from "@mui/joy/Input";
import {
    StyledJobOfferCreationContainer,
    StyledInputJobOfferContainer,
    StyledTextarea,
    StyledGridContainer,
    StyledGridItem,
    StyledSelectJobType,
    StyledCurrencyType,
    StyledButtonCenter, StyledJobOfferContainer, StyledRedButtonModalButton
} from "./JobOfferFormContainer.styles";
import React, {useState, useEffect} from "react";
import {Form} from "react-bootstrap";
import Navbar from "../molecules/Navbar";
import StyledText from "../atoms/StyledText";
import DialogContentText from "@mui/material/DialogContentText";
import TechnicalRequirementsContainer from "../molecules/TechnicalRequirementsContainer";
import JobOfferFormula from "../molecules/JobOfferFormulaModal";
import {useNavigate} from "react-router-dom";
import {createJob} from "../../api/JobsApi";
import Typography from "@mui/joy/Typography";
import {languageLabels} from "../../constants/constans";

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
    const navigate = useNavigate();
    const [pressedButtons, setPressedButtons] = useState(getInitialButtons())
    const [showModal, setShowModal] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);


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
                    return 'Title field cannot be empty.';
                } else if (value.length > 30) {
                    return 'Title field must be no longer than 30 characters.';
                }
                return '';
            case 'description':
                return value !== '' ? (value.length <= 2000 ? '' : 'Description field cannot exceed 2000 characters.') : 'Description field cannot be empty.';
            case 'responsibilities':
                return value.length <= 2000 ? '' : 'Responsibilities field cannot exceed 2000 characters.';
            case 'whoWeAreLookingFor':
                return value.length <= 2000 ? '' : 'Who we are looking for field cannot exceed 2000 characters.';
            case 'technicalRequirements':
                return value.length > 0 ? '' : 'At least one technical requirement must be specified.';
            case 'benefits':
                return value.length <= 2000 ? '' : 'Benefits field cannot be longer than 2000 characters.';
            case 'location':
                if (value === '') {
                    return 'Location field cannot be empty.';
                } else if (value.length > 20) {
                    return 'Location field must be no longer than 20 characters.';
                }
                return '';
            case 'salaryFrom':
                if (value === '') {
                    return 'Salary from field cannot be empty.';
                }else if (isNaN(value)) {
                    return 'Salary to field must be a number.';
                }else if (value <= 0) {
                    return 'Salary from field must be greater than 0.';
                }else if (parseInt(value) > 9999) {
                    return 'Salary from field must be less than 10000.';
                } else {
                    return '';
                }
            case 'salaryTo':
                if (value === '') {
                    return 'Salary to field cannot be empty.';
                }else if (isNaN(value)) {
                    return 'Salary to field must be a number.';
                }else if (value <= 0) {
                    return 'Salary to field must be greater than 0.';
                }else if (parseInt(value) > 9999) {
                    return 'Salary to field must be less than 10000.';
                } else {
                    return '';
                }
            case "jobType":
                return value !== "" ? "" : "Job type field cannot be empty.";
            case 'currencyType':
                return value !== '' ? '' : 'Currency type field cannot be empty.';
            case 'workType':
                return value !== '' ? '' : 'Work type field cannot be empty.';
            default:
                return '';
        }
    };


    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();


        const errors = {...input.errors};
        let formIsValid = true;

        // walidacja inputów
        for (const [key, value] of Object.entries(input)) {
            const errorMessage = validateInput(key, value);
            errors[key] = errorMessage;
            if (errorMessage) {
                formIsValid = false;
            }
        }

        // sprawdzenie, czy formularz jest poprawnie wypełniony
        if (formIsValid) {
            // dodaj tutaj kod, który wyśle formularz

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

            createJob(userData, () => {
                setShowModal(true);
                setFormSubmitted(true);
                setErrorMessage(null);
                setTimeout(() => {
                    navigate('/jobs');
                }, 2000);
            }, (errorMessages) => {
                setErrorMessage(errorMessages);
            });
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
            error = value.length > 0 ? '' : 'At least one technical requirement must be specified.';
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
                            color="white"
                            text={"Post a job offer"}/>
                <StyledJobOfferCreationContainer>
                    <StyledInputJobOfferContainer>
                        <DialogContentText sx={{color: 'white'}}>Title: </DialogContentText>
                        <Input
                            type="text"
                            placeholder="Ex. Junior java developer"
                            name="title"
                            value={input.title}
                            onChange={onInputChange}
                        />
                        {input.errors.title &&
                            <StyledText
                                tag="span"
                                color="red"
                                text={input.errors.title}
                            />}
                        <DialogContentText sx={{color: 'white'}}>Project description:</DialogContentText>
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
                        <DialogContentText sx={{color: 'white'}}>Technical requirements:</DialogContentText>

                        <TechnicalRequirementsContainer pressedButtons={pressedButtons}
                                                        setPressedButtons={setPressedButtons} input={input}
                                                        setInput={setInput}/>
                        {input.errors.technicalRequirements && input.technicalRequirements.length === 0 &&
                            <StyledText
                                tag="span"
                                color="red"
                                text={input.errors.technicalRequirements}
                            />}
                        <DialogContentText sx={{color: 'white'}}>Responsibilities:</DialogContentText>
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
                        <DialogContentText sx={{color: 'white'}}>Who we are looking for: </DialogContentText>
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
                        <DialogContentText sx={{color: 'white'}}>Benefits:</DialogContentText>
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
                                <DialogContentText sx={{color: 'white'}}>Salary:</DialogContentText>
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
                                                <StyledText
                                                    tag="span"
                                                    color="red"
                                                    text={input.errors.salaryFrom}
                                                />}
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
                                    <DialogContentText sx={{color: 'white'}}>Currency: </DialogContentText>
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
                        <DialogContentText sx={{color: 'white'}}>Location:</DialogContentText>
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
                                    <DialogContentText sx={{color: 'white'}}>Types of jobs:</DialogContentText>
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
                                    <DialogContentText sx={{color: 'white'}}>Work types:</DialogContentText>
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
                            <JobOfferFormula open={showModal} handleClose={handleClose} errorMessage={errorMessage}/>
                        </StyledButtonCenter>
                    </StyledInputJobOfferContainer>
                </StyledJobOfferCreationContainer>
            </Form>

        </StyledJobOfferContainer>
    );

}