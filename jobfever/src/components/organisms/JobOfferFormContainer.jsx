import Input from "@mui/joy/Input";
import {
    StyledJobOfferCreationContainer,
    StyledInputJobOfferContainer,
    StyledTextarea,
    StyledGridContainer,
    StyledGridItem,
    StyledSelectJobType,
    StyledCurrencyType,
    StyledButtonCenter, StyledJobOfferContainer
} from "./JobOfferFormContainer.styles";
import {useState} from "react";
import {Radio, RadioGroup} from "@mui/joy";
import RedButton from "../atoms/RedButton";
import {Form} from "react-bootstrap";
import Navbar from "../molecules/Navbar";
import StyledText from "../atoms/StyledText";
import DialogContentText from "@mui/material/DialogContentText";

import TechnicalRequirementsContainer from "../molecules/TechnicalRequirementsContainer";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const jobType = [
    {value: 'FULLTIME', label: 'Full-time'},
    {value: 'PART_TIME', label: 'Part-time'},
    {value: 'CONTRACT', label: 'Contract'},
    {value: 'FREELANCE', label: 'Freelance'},
    {value: 'INTERNSHIP', label: 'Internship'},
    {value: 'TEMPORARY', label: 'Temporary'},
];

const currencyType = [
    {value: 'PLN', label: 'PLN'},
    {value: 'EURO', label: 'EURO'},
    {value: 'DOLLAR', label: 'DOLLAR'},
];

const workType = [
    {value: 'REMOTE', label: 'remote'},
    {value: 'ONSITE', label: 'on-site'},
    {value: 'HYBRID', label: 'hybrid'},
];

export default function JobOfferFormContainer() {
    const navigate = useNavigate();
    // const [activeButtonIndex, setActiveButtonIndex] = useState();
    const [pressedButtons, setPressedButtons] = useState([]);

    const [input, setInput] = useState({
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
    });

    const handleSubmit = async (event) => {
        event.preventDefault();

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

        console.log(userData)


        const url = "http://localhost:8080/api/jobs"
        axios
            .post(url, userData)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                if (error.response) {
                    console.log(error.response);
                    console.log("server responded");
                } else if (error.request) {
                    console.log("network error");
                } else {
                    console.log(error);
                }
            });



    };







    const onInputChange = e => {
        const {name, value} = e.target;
        setInput(prev => ({
            ...prev,
            [name]: value
        }));
    }

    const onJobTypeChange = (e) => {
        setInput((prev) => ({
            ...prev,
            jobType: e.target.value,
        }));
    };

    const onCurrencyTypeChange = (e) => {
        setInput((prev) => ({
            ...prev,
            currencyType: e.target.value,
        }));
    };

    const onOptionRadioTypeChange = (e) => {
        setInput((prev) => ({
            ...prev,
            workType: e.target.value,
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
                    <p>
                    <DialogContentText sx={{color: 'white'}}>Project description:</DialogContentText>
                    <StyledTextarea
                        placeholder="Enter description"
                        name="description"
                        value={input.description}
                        onChange={onInputChange}
                    /></p>
                    <DialogContentText sx={{color: 'white'}}>Technical requirements:</DialogContentText>
                    <p>
                        <TechnicalRequirementsContainer pressedButtons={pressedButtons} setPressedButtons={setPressedButtons} input={input} setInput={setInput} />
                    </p>
                    <DialogContentText sx={{color: 'white'}}>Responsibilities:</DialogContentText>
                    <StyledTextarea
                        placeholder="Enter responsibilities"
                        name="responsibilities"
                        value={input.responsibilities}
                        onChange={onInputChange}
                    />
                    <DialogContentText sx={{color: 'white'}}>Who we are looking for: </DialogContentText>
                    <StyledTextarea
                        placeholder="Enter who we are looking for"
                        name="whoWeAreLookingFor"
                        value={input.whoWeAreLookingFor}
                        onChange={onInputChange}
                    />
                    <DialogContentText sx={{color: 'white'}}>Benefits:</DialogContentText>
                    <StyledTextarea
                        placeholder="Enter benefits"
                        name="benefits"
                        value={input.benefits}
                        onChange={onInputChange}
                    />
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
                                    </StyledGridItem>
                                    <StyledGridItem>
                                        <Input
                                            placeholder="To"
                                            name="salaryTo"
                                            value={input.salaryTo}
                                            onChange={onInputChange}
                                        />
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
                                        <option key={option.value} value={option.value}>
                                            {option.label}
                                        </option>
                                    ))}
                                </StyledCurrencyType>
                            </StyledGridItem>
                        </StyledGridItem>
                    </StyledGridContainer>
                    <p>
                    <DialogContentText sx={{color: 'white'}}>Location:</DialogContentText>
                    <Input
                        placeholder="Enter location"
                        name="location"
                        value={input.location}
                        onChange={onInputChange}
                    /></p>
                    <StyledGridContainer>
                        <StyledGridItem>
                            <p>
                            <StyledGridItem>
                                <DialogContentText sx={{color: 'white'}}>Types of jobs:</DialogContentText>
                            </StyledGridItem>
                            <StyledGridItem>
                                <StyledSelectJobType
                                    value={input.jobType}
                                    onChange={onJobTypeChange}
                                >
                                    {jobType.map((option) => (
                                        <option key={option.value} value={option.value}>{option.label}</option>
                                    ))}
                                </StyledSelectJobType>
                            </StyledGridItem>
                            </p>
                        </StyledGridItem>
                        <StyledGridContainer>
                            <RadioGroup value={input.workType} onChange={onOptionRadioTypeChange}>
                                {workType.map((work) => (
                                    <Radio sx={{color: 'white'}}
                                        key={work.value}
                                        color="danger"
                                        size="lg"
                                        variant="solid"
                                        label={work.label}
                                        value={work.value}
                                    />
                                ))}
                            </RadioGroup>
                        </StyledGridContainer>
                    </StyledGridContainer>
                    <StyledButtonCenter>
                        <RedButton text={'SUBMIT'}></RedButton>
                        <p></p>
                    </StyledButtonCenter>
                </StyledInputJobOfferContainer>
            </StyledJobOfferCreationContainer>
        </Form>
        </StyledJobOfferContainer>
    );

}