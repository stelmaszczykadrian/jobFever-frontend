import Input from "@mui/joy/Input";
import {
    StyledJobOfferCreationContainer,
    StyledInputJobOfferContainer,
    StyledTextarea,
    StyledGridContainer,
    StyledGridItem,
    StyledSelectJobType,
    StyledCurrencyType,
    StyledButtonCenter, StyledInputLabel
} from "./JobOfferFormContainer.styles";
import {useState} from "react";
import {Radio, RadioGroup} from "@mui/joy";
import RedButton from "../atoms/RedButton";
import {Form} from "react-bootstrap";
import axiosFetch from "../../api/axiosFetch";


const jobType = [
    {value: 'full-time', label: 'Full-time'},
    {value: 'part-time', label: 'Part-time'},
    {value: 'contract', label: 'Contract'},
    {value: 'freelance', label: 'Freelance'},
    {value: 'internship', label: 'Internship'},
    {value: 'temporary', label: 'Temporary'},
];


const currencyType = [
    {value: 'pln', label: 'PLN'},
    {value: 'euro', label: 'EURO'},
    {value: 'dollar', label: 'DOLLAR'},
];


const workOptions = [
    {label: 'Remote', value: 'remote'},
    {label: 'On-site', value: 'on-site'},
    {label: 'Hybrid', value: 'hybrid'}
];


export default function JobOfferFormContainer() {

    const [input, setInput] = useState({
        title: '',
        description: '',
        technicalRequirements: '',
        responsibilities: '',
        whoWeAreLookingFor: '',
        benefits: '',
        location: '',
        salaryFrom: '',
        salaryTo: '',
        jobType: '',
        currencyType: '',
        workOptions: ''
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        // console.log(input);

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
            workOptions: input.workOptions
        };

        axiosFetch(userData,'http://localhost:8080/api/jobs')
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
            workOptions: e.target.value,
        }));
    };

    return (
        <Form onSubmit={handleSubmit}>
            <StyledJobOfferCreationContainer>
                <StyledInputJobOfferContainer>
                    <StyledInputLabel>Title: </StyledInputLabel>
                    <Input
                        type="text"
                        placeholder="Enter title"
                        name="title"
                        value={input.title}
                        onChange={onInputChange}
                    />
                    <StyledInputLabel>Project description:</StyledInputLabel>
                    <StyledTextarea
                        placeholder="Enter description"
                        name="description"
                        value={input.description}
                        onChange={onInputChange}
                    />
                    <StyledInputLabel>Technical requirements:</StyledInputLabel>
                    <StyledTextarea
                        placeholder="Enter technical requirements"
                        name="technicalRequirements"
                        value={input.technicalRequirements}
                        onChange={onInputChange}
                    />
                    <StyledInputLabel>Responsibilities:</StyledInputLabel>
                    <StyledTextarea
                        placeholder="Enter responsibilities"
                        name="responsibilities"
                        value={input.responsibilities}
                        onChange={onInputChange}
                    />
                    <StyledInputLabel>Who we are looking for:</StyledInputLabel>
                    <StyledTextarea
                        placeholder="Enter who we are looking for"
                        name="whoWeAreLookingFor"
                        value={input.whoWeAreLookingFor}
                        onChange={onInputChange}
                    />
                    <StyledInputLabel>Benefits:</StyledInputLabel>
                    <StyledTextarea
                        placeholder="Enter benefits"
                        name="benefits"
                        value={input.benefits}
                        onChange={onInputChange}
                    />
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
                                <StyledInputLabel>Currency: </StyledInputLabel>
                            </StyledGridItem>
                            <StyledGridItem>
                                <StyledCurrencyType
                                    value={input.currencyType}
                                    onChange={onCurrencyTypeChange}
                                >
                                    {currencyType.map((option) => (
                                        <option value={option.value}>{option.label}</option>
                                    ))}
                                </StyledCurrencyType>
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
                                        <option value={option.value}>{option.label}</option>
                                    ))}
                                </StyledSelectJobType>
                            </StyledGridItem>
                        </StyledGridItem>
                        <StyledGridContainer>
                            <RadioGroup value={input.workOptions} onChange={onOptionRadioTypeChange}>
                                {workOptions.map((work) => (
                                    <Radio
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
                        <RedButton text={'SUBMIT'}>></RedButton>
                    </StyledButtonCenter>
                </StyledInputJobOfferContainer>
            </StyledJobOfferCreationContainer>
        </Form>
    );

}