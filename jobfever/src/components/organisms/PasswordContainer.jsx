import {useNavigate, useParams} from "react-router-dom";
import React, {useState} from "react";
import {validateFormData} from "../../utils/Validators";
import {
    incorrectPasswordLengthMessage,
    minimumPasswordLength,
    passwordsDoNotMatchMessage
} from "../../constants/RegisterFormValidationsMessages";
import {
    StyledRightContainer
} from "./CandidateRegisterRightContainer.styles";
import RightNavbar from "../molecules/RightNavbar";
import Sheet from "@mui/joy/Sheet";
import StyledText from "../atoms/StyledText";
import FormControl from "@mui/joy/FormControl";
import RedButton from "../atoms/RedButton";
import {EmployerRegisterTextEmployerExist} from "./EmployerRegisterRightContainer.styles";
import {changePassword} from "../../api/AuthApi";
import PasswordInputField from "../molecules/PasswordInputField";

export default function PasswordContainer() {
    const params = useParams();
    const [errorMessage, setErrorMessage] = useState(null);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        password: '',
        confirmPassword: '',
        errors: {
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
        changePassword("http://localhost:8080/api/authentication/reset-password", params.token, formData.password)
        setErrorMessage('Password changed successfully.');

        setTimeout(() => {
            navigate("/");
        }, 2000);

    };
    return (
        <StyledRightContainer>
            <RightNavbar/>
            <Sheet style={{backgroundColor: 'transparent'}}>
                <StyledText
                    color="white"
                    tag={"h2"}
                    text={"Change password"}
                />
                <form onSubmit={handleSubmit}>
                    <FormControl>
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
                    </FormControl>
                    <FormControl>
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
                    </FormControl>
                    <FormControl sx={{justifyContent: 'center'}}>
                        <RedButton
                            text="SUBMIT">
                        </RedButton>
                    </FormControl>
                    {errorMessage &&
                        <EmployerRegisterTextEmployerExist>{errorMessage}</EmployerRegisterTextEmployerExist>}
                </form>
            </Sheet>
        </StyledRightContainer>
    );
}