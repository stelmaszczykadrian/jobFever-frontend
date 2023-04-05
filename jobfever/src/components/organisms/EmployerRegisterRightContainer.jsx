import RightNavbar from "../molecules/RightNavbar";
import Sheet from "@mui/joy/Sheet";
import Input from "@mui/joy/Input";
import FormControl from "@mui/joy/FormControl";
import React, {useState} from "react";
import {
    StyleEmployerRegisterSubmitButton, EmployerRegisterRightContainerColumn, EmployerRegisterTextEmployerExist
} from "./EmployerRegisterRightContainer.styles";
import RedButton from "../atoms/RedButton";
import SocialMediaButtons from "../molecules/SocialMediaButtons";
import Container from "@mui/material/Container";
import {Form} from "react-bootstrap";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import StyledText from "../atoms/StyledText";
import {StyledUserInputValidation,StyledLabel,StyledRightContainer} from "./CandidateRegisterRightContainer.styles";

export default function EmployerRegisterRightContainer() {

    const [employerMessage, setEmployerMessage] = useState('');
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        companyName: '',
        nameAndSurname: '',
        phoneNumber: '',
        email: '',
        password: '',
        confirmPassword: '',
        errors: {
            companyName: '',
            nameAndSurname: '',
            phoneNumber: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    });

    const onInputChange = (e) => {
        const {name, value} = e.target;
        const error = validateInput(name, value);
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
            errors: {...prevFormData.errors, [name]: error}
        }));
    };

    const validateInput = (name, value) => {
        switch (name) {
            case 'companyName':
                return value.length < 3 ? 'Company name should be at least 3 characters long' : '';
            case 'nameAndSurname':
                return value.length < 2 ? 'Name should be at least 2 characters long' : '';
            case 'phoneNumber':
                return /^\d{9}$/.test(value) ? '' : 'Phone number should be 9 digits long';
            case 'email':
                return value !== '' ? '' : 'Email field cannot be empty';
            case 'password':
                return value.length < 6 ? 'Password should be at least 6 characters long' : '';
            case 'confirmPassword':
                return value !== formData.password ? 'Passwords do not match' : '';
            default:
                return '';
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if(formData.password === formData.confirmPassword){
            const userData = {
                companyName: formData.companyName,
                nameAndSurname: formData.nameAndSurname,
                phoneNumber: formData.phoneNumber,
                email: formData.email,
                password: formData.password,
            };
            try {
                const response = await axios.post('http://localhost:8080/api/employers', userData);
                console.log(response);
                setEmployerMessage('Employer added successfully.');
                setTimeout(() => {
                    navigate('/employer/login');
                }, 2000);
            } catch (error) {
                if (error.response) {
                    if (error.response.data === "Employer already exists.") {
                        setEmployerMessage("Employer already exists.")
                    } else {
                        console.log(error.response);
                        console.log("server responded");
                    }
                } else if (error.request) {
                    console.log("network error");
                } else {
                    console.log(error);
                }
            }
        }
    }

    return (<StyledRightContainer>
        <RightNavbar/>
        <Form onSubmit={handleSubmit}>
            <Sheet style={{backgroundColor: 'transparent'}}>
                <Container>
                    <EmployerRegisterRightContainerColumn>
                        <FormControl width="40">
                            <StyledLabel>Company name</StyledLabel>
                            <StyledUserInputValidation>
                                <Input
                                    type="text"
                                    name="companyName"
                                    placeholder='ex. job Fever'
                                    value={formData.companyName}
                                    onChange={onInputChange}
                                    onBlur={validateInput}
                                />
                            </StyledUserInputValidation>
                            {formData.errors.companyName && <StyledText
                                tag="span"
                                color="red"
                                text={formData.errors.companyName}
                            />}
                        </FormControl>
                        <FormControl width="40">
                            <StyledLabel>Name and surname</StyledLabel>
                            <StyledUserInputValidation>
                                <Input
                                    type="text"
                                    name="nameAndSurname"
                                    placeholder='ex. Jan Kowalski'
                                    value={formData.nameAndSurname}
                                    onChange={onInputChange}
                                    onBlur={validateInput}
                                />
                            </StyledUserInputValidation>
                            {formData.errors.nameAndSurname &&
                                <StyledText
                                    tag="span"
                                    color="red"
                                    text={formData.errors.nameAndSurname}
                                />}
                        </FormControl>
                        <FormControl width="40">
                            <StyledLabel>Phone number</StyledLabel>
                            <StyledUserInputValidation>
                                <Input
                                    type="number"
                                    name="phoneNumber"
                                    placeholder='ex. 505438212'
                                    value={formData.phoneNumber}
                                    onChange={onInputChange}
                                    onBlur={validateInput}
                                />
                            </StyledUserInputValidation>
                            {formData.errors.phoneNumber &&
                                <StyledText
                                    tag="span"
                                    color="red"
                                    text={formData.errors.phoneNumber}
                                />}
                        </FormControl>
                    </EmployerRegisterRightContainerColumn>
                    <EmployerRegisterRightContainerColumn>
                        <FormControl width="40">
                            <StyledLabel>E-mail</StyledLabel>
                            <StyledUserInputValidation>
                                <Input
                                    type="text"
                                    name="email"
                                    placeholder='ex. jobFever@email.com'
                                    value={formData.email}
                                    onChange={onInputChange}
                                    onBlur={validateInput}
                                />
                            </StyledUserInputValidation>
                            {formData.errors.email &&
                                <StyledText
                                    tag="span"
                                    color="red"
                                    text={formData.errors.email}
                                />}
                        </FormControl>
                        <FormControl>
                            <StyledLabel>
                                Password
                            </StyledLabel>
                            <StyledUserInputValidation>
                                <Input
                                    type="password"
                                    name={'password'}
                                    value={formData.password}
                                    onChange={onInputChange}
                                    onBlur={validateInput}
                                />
                            </StyledUserInputValidation>
                            {formData.errors.password &&
                                <StyledText
                                    tag="span"
                                    color="red"
                                    text={formData.errors.password}
                                />}
                        </FormControl>
                        <FormControl>
                            <StyledLabel>
                                Confirm Password
                            </StyledLabel>
                            <StyledUserInputValidation>
                                <Input
                                    type="password"
                                    name={'confirmPassword'}
                                    value={formData.confirmPassword}
                                    onChange={onInputChange}
                                    onBlur={validateInput}
                                />
                            </StyledUserInputValidation>
                            {formData.errors.confirmPassword &&
                                <StyledText
                                    tag="span"
                                    color="red"
                                    text={formData.errors.confirmPassword}
                                />}
                        </FormControl>
                    </EmployerRegisterRightContainerColumn>
                </Container>
            </Sheet>
            {employerMessage &&
                <EmployerRegisterTextEmployerExist>{employerMessage}</EmployerRegisterTextEmployerExist>}
            <StyleEmployerRegisterSubmitButton>
                <RedButton
                    text={"REGISTER"}>
                </RedButton>
            </StyleEmployerRegisterSubmitButton>

        </Form>
        <SocialMediaButtons/>
    </StyledRightContainer>);
}