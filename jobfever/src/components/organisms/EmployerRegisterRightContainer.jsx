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
import {useNavigate} from "react-router-dom";
import StyledText from "../atoms/StyledText";
import {
    StyledPasswordInputValidation,
    StyledLabel,
    StyledRightContainer, StyledInputRedHover,
} from "./CandidateRegisterRightContainer.styles";
import {registerEmployer} from "../../api/EmployersApi";
import {
    incorrectEmailEmptyMessage, incorrectCompanyNameMessage, incorrectNameMessage,
    incorrectPasswordLengthMessage, incorrectPhoneNumberMessage, incorrectEmailAddressMessage,
    minimumCompanyLength, minimumNameLengthMessage, minimumPasswordLength,
    passwordsDoNotMatchMessage
} from "../../constants/RegisterFormValidationsMessages";
import {isValidEmail, isValidPhoneNumber, validateFormData} from "../../utils/Validators";
import EmailInputField from "../molecules/EmailInputField";
import PasswordInputField from "../molecules/PasswordInputField";

export default function EmployerRegisterRightContainer() {
    const [errorMessage, setErrorMessage] = useState(null);
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
                return value.length < minimumCompanyLength ? incorrectCompanyNameMessage : '';
            case 'nameAndSurname':
                return value.length < minimumNameLengthMessage ? incorrectNameMessage : '';
            case 'phoneNumber':
                return isValidPhoneNumber(value) ? '' : incorrectPhoneNumberMessage;
            case 'email':
                return value !== '' ? (isValidEmail(value) ? '' : incorrectEmailAddressMessage) : incorrectEmailEmptyMessage;
            case 'password':
                return value.length < minimumPasswordLength ? incorrectPasswordLengthMessage : '';
            case 'confirmPassword':
                return value !== formData.password ? passwordsDoNotMatchMessage : '';
            default:
                return '';
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const errors = validateFormData(formData, validateInput);
        if (errors) {
            setFormData((prevFormData) => ({...prevFormData, errors}));
            return;
        }

        if (formData.password === formData.confirmPassword) {
            const userData = {
                companyName: formData.companyName,
                nameAndSurname: formData.nameAndSurname,
                phoneNumber: formData.phoneNumber,
                email: formData.email,
                password: formData.password,
            };
            registerEmployer(userData,
                () => {
                    setErrorMessage('Employer added successfully.');
                    setTimeout(() => {
                        navigate('/employer/login');
                    }, 2000);
                },
                (errorMessage) => {
                    setErrorMessage(errorMessage);
                }
            );
        }
    }
    return (<StyledRightContainer>
        <RightNavbar/>
        <Form onSubmit={handleSubmit}>
            <StyledText
                color="rgba(171, 36, 36)"
                tag={"h2"}
                text={"Welcome!"}
            />
            <StyledText
                color="white"
                tag={"h3"}
                text={"Create employer account."}
            />
            <Sheet style={{backgroundColor: 'transparent'}}>
                <Container>
                    <EmployerRegisterRightContainerColumn>
                        <FormControl width="40">
                            <StyledLabel>Company name</StyledLabel>
                            <StyledPasswordInputValidation>
                                <StyledInputRedHover
                                    error
                                    type="text"
                                    name="companyName"
                                    placeholder='ex. job Fever'
                                    value={formData.companyName}
                                    onChange={onInputChange}
                                    onBlur={validateInput}
                                />
                            </StyledPasswordInputValidation>
                            {formData.errors.companyName && <StyledText
                                tag="span"
                                color="red"
                                text={formData.errors.companyName}
                            />}
                        </FormControl>
                        <FormControl width="40">
                            <StyledLabel>Name and surname</StyledLabel>
                            <StyledPasswordInputValidation>
                                <StyledInputRedHover
                                    error
                                    type="text"
                                    name="nameAndSurname"
                                    placeholder='ex. Jan Kowalski'
                                    value={formData.nameAndSurname}
                                    onChange={onInputChange}
                                    onBlur={validateInput}
                                />
                            </StyledPasswordInputValidation>
                            {formData.errors.nameAndSurname &&
                                <StyledText
                                    tag="span"
                                    color="red"
                                    text={formData.errors.nameAndSurname}
                                />}
                        </FormControl>
                        <FormControl width="40">
                            <StyledLabel>Phone number</StyledLabel>
                            <StyledPasswordInputValidation>
                                <StyledInputRedHover
                                    error
                                    type="number"
                                    name="phoneNumber"
                                    placeholder='ex. 505438212'
                                    value={formData.phoneNumber}
                                    onChange={onInputChange}
                                    onBlur={validateInput}
                                />
                            </StyledPasswordInputValidation>
                            {formData.errors.phoneNumber &&
                                <StyledText
                                    tag="span"
                                    color="red"
                                    text={formData.errors.phoneNumber}
                                />}
                        </FormControl>
                    </EmployerRegisterRightContainerColumn>
                    <EmployerRegisterRightContainerColumn>
                        <EmailInputField
                            formData={formData}
                            onInputChange={onInputChange}
                            validateInput={validateInput}
                        />
                        <PasswordInputField
                            error
                            formData={formData}
                            onInputChange={onInputChange}
                            validateInput={validateInput}
                            label="Password"
                            inputName="password"
                            inputPlaceholder="Enter Password"
                            inputType="password"
                            inputError={formData.errors.password}
                        />
                        <PasswordInputField
                            error
                            formData={formData}
                            onInputChange={onInputChange}
                            validateInput={validateInput}
                            label="Confirm Password"
                            inputName="confirmPassword"
                            inputPlaceholder="Confirm Password"
                            inputType="password"
                            inputError={formData.errors.confirmPassword}
                        />
                    </EmployerRegisterRightContainerColumn>
                </Container>
            </Sheet>
            {errorMessage &&
                <EmployerRegisterTextEmployerExist>{errorMessage}</EmployerRegisterTextEmployerExist>}
            <StyleEmployerRegisterSubmitButton>
                <RedButton
                    text={"REGISTER"}>
                </RedButton>
            </StyleEmployerRegisterSubmitButton>
        </Form>
        <SocialMediaButtons/>
    </StyledRightContainer>);
}