import RightNavbar from "../molecules/RightNavbar";
import React, {useState} from "react";
import Sheet from "@mui/joy/Sheet";
import FormControl from "@mui/joy/FormControl";
import RedButton from "../atoms/RedButton";
import SocialMediaButtons from "../molecules/SocialMediaButtons";
import {useNavigate} from "react-router-dom";
import StyledText from "../atoms/StyledText";
import {
    CandidateRegisterTextCandidateExist,
    StyledRightContainer
} from "./CandidateRegisterRightContainer.styles";
import {
    incorrectEmailEmptyMessage,
    incorrectPasswordLengthMessage,
    incorrectEmailAddressMessage,
    minimumPasswordLength, passwordsDoNotMatchMessage
} from "../../constants/RegisterFormValidationsMessages";
import {registerCandidate} from "../../api/CandidateApi";
import {isValidEmail, validateFormData} from "../../utils/Validators";
import EmailInputField from "../molecules/EmailInputField";
import PasswordInputField from "../molecules/PasswordInputField";

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
                    text={"Create candidate account."}>
                </StyledText>;
                <form onSubmit={handleSubmit}>
                    <EmailInputField
                        formData={formData}
                        onInputChange={onInputChange}
                        validateInput={validateInput}
                    />
                    <PasswordInputField
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