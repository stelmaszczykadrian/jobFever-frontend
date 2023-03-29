import {useState} from "react";
import Input from "@mui/joy/Input";
import {StyledJobOfferContainer} from "../components/styled-components/StyledJobOfferContainer";
import {StyledInputJobOfferContainer} from "../components/styled-components/StyledInputJobOfferContaine";
import '../css/JobOffer.css'
import RedButton from "../components/buttons/RedButton";
import {Radio, RadioGroup, Select} from "@mui/joy";

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


function JobOfferCreationForm() {


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
        console.log(input);
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
        <div>
            <h1>Job offer formulas</h1>
            <form onSubmit={handleSubmit}>
                <StyledJobOfferContainer>
                    <StyledInputJobOfferContainer>
                        <div id="big-container">
                            <div id="input-label">Title:</div>
                            <Input
                                type="text"
                                placeholder="Enter title"
                                name="title"
                                value={input.title}
                                onChange={onInputChange}
                            />
                            <div id="input-label">Project description:</div>
                            <textarea
                                placeholder="Enter description"
                                name="description"
                                value={input.description}
                                onChange={onInputChange}
                            >
                            </textarea>
                            <div id="input-label">Technical requirements:</div>
                            <textarea
                                placeholder="Enter technical requirements"
                                name="technicalRequirements"
                                value={input.technicalRequirements}
                                onChange={onInputChange}
                            >
                                </textarea>

                            <div id="input-label">Responsibilities:</div>
                            <textarea
                                placeholder="Enter responsibilities"
                                name="responsibilities"
                                value={input.responsibilities}
                                onChange={onInputChange}
                            >
                                </textarea>

                            <div id="input-label">Who we are looking for:</div>
                            <textarea
                                placeholder="Enter who we are looking for"
                                name="whoWeAreLookingFor"
                                value={input.whoWeAreLookingFor}
                                onChange={onInputChange}
                            >
                                </textarea>

                            <div id="input-label">Benefits:</div>
                            <textarea
                                placeholder="Enter benefits"
                                name="benefits"
                                value={input.benefits}
                                onChange={onInputChange}
                            >
                                </textarea>
                            <div id="grid-container">
                                <div id="grid-item">
                                    <div id="input-label">Salary:</div>
                                    <div id="grid-item">
                                        <div id="grid-container">
                                            <div id="grid-item">
                                                <Input
                                                    placeholder="From"
                                                    name="salaryFrom"
                                                    value={input.salaryFrom}
                                                    onChange={onInputChange}
                                                >
                                                </Input>
                                            </div>
                                            <div id="grid-item">
                                                <Input
                                                    placeholder="To"
                                                    name="salaryTo"
                                                    value={input.salaryTo}
                                                    onChange={onInputChange}
                                                >
                                                </Input>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="grid-item">
                                    <div id="input-label">Currency:</div>
                                    <select value={input.currencyType} onChange={onCurrencyTypeChange}>
                                        {currencyType.map((option) => (
                                            <option value={option.value}>{option.label}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div id="input-label">Location:</div>
                        <Input
                            placeholder="Enter location"
                            name="location"
                            value={input.location}
                            onChange={onInputChange}
                        >
                        </Input>
                        <div id="grid-container">
                            <div id="grid-item">
                                <div>
                                    <div id="input-label">Types of jobs:</div>
                                    <select
                                        value={input.jobType}
                                        onChange={onJobTypeChange}
                                        style={{fontSize: '1.2rem', padding: '0.5rem', borderRadius: '0.5rem'}}
                                    >
                                        {jobType.map((option) => (
                                            <option value={option.value}>{option.label}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <div id="grid-item">
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
                            </div>
                        </div>
                        <RedButton text={'SUBMIT'}>></RedButton>
                    </StyledInputJobOfferContainer>

                </StyledJobOfferContainer>
            </form>
        </div>
    );
}

export default JobOfferCreationForm;