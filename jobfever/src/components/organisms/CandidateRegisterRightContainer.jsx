import RightNavbar from "../molecules/RightNavbar";
import React, {useState} from "react";
import Sheet from "@mui/joy/Sheet";
import FormControl from "@mui/joy/FormControl";
import Input from "@mui/joy/Input";
import RedButton from "../atoms/RedButton";
import SocialMediaButtons from "../molecules/SocialMediaButtons";
import {useNavigate} from "react-router-dom";
import StyledText from "../atoms/StyledText";
import {
    CandidateRegisterTextCandidateExist,
    StyledUserInputValidation,
    StyledLabel,
    StyledRightContainer
} from "./CandidateRegisterRightContainer.styles";
import {
    incorrectEmailEmptyMessage,
    incorrectPasswordLengthMessage,
    incorrectEmailAddressMessage,
    isValidEmail, minimumPasswordLength, passwordsDoNotMatchMessage
} from "../../constants/ValidateRegisterForm";
import {registerCandidate} from "../../api/CandidateApi";
import {validateFormData} from "../../constants/ValidateUtil";

export default function CandidateRegisterRightContainer() {
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState(null);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        errors: {
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
                email: formData.email,
                password: formData.password,
            };
            registerCandidate(userData, () => {
                setErrorMessage('Candidate added successfully.');
                setTimeout(() => {
                    navigate('/candidate/login');
                }, 2000);
            }, (errorMessage) => {
                setErrorMessage(errorMessage);
            });
        }
    }
    return (
        <StyledRightContainer>
            <RightNavbar/>
            <Sheet style={{backgroundColor: 'transparent'}}>
                <StyledText
                    color="rgba(171, 36, 36)"
                    tag={"h2"}
                    text={"Welcome!"}
                >
                </StyledText>
                <StyledText
                    color="white"
                    tag={"h3"}
                    text={"Create account"}>
                </StyledText>;
                <form onSubmit={handleSubmit}>
                    <FormControl width="40">
                        <StyledLabel>
                            E-mail
                        </StyledLabel>
                        <StyledUserInputValidation>
                            <Input
                                type="text"
                                name="email"
                                placeholder='jobFever@email.com'
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
                                placeholder='Enter Password'
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
                                placeholder='Confirm password'
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
                    </FormControl>;
                    {errorMessage &&
                        <CandidateRegisterTextCandidateExist>{errorMessage}</CandidateRegisterTextCandidateExist>}
                    <FormControl sx={{justifyContent: 'center'}}>
                        <RedButton
                            text="REGISTER">
                        </RedButton>
                    </FormControl>
                </form>
            </Sheet>
            <SocialMediaButtons/>
        </StyledRightContainer>

    );
}