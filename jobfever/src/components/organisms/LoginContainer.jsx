import {
    CandidateRegisterTextCandidateExist,
    StyledRightContainer
} from "./CandidateRegisterRightContainer.styles";
import RightNavbar from "../molecules/RightNavbar";
import Sheet from "@mui/joy/Sheet";
import FormControl from "@mui/joy/FormControl";
import StyledText from "../atoms/StyledText";
import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import RedButton from "../atoms/RedButton";
import Cookies from 'js-cookie';
import {isValidEmail, validateFormData} from "../../utils/Validators";
import {
    incorrectEmailAddressMessage,
    incorrectEmailEmptyMessage, incorrectPasswordBlankMessage
} from "../../constants/RegisterFormValidationsMessages";
import ChangePasswordModal from "../molecules/ChangePasswordModal";
import {StyledAddIcon} from "../atoms/StyledAddIcon";
import EmailInputField from "../molecules/EmailInputField";
import PasswordInputField from "../molecules/PasswordInputField";

export default function LoginContainer(props) {
    const [loginMessage, setLoginMessage] = useState('');
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        errors: {
            email: '',
            password: '',
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
                return value !== '' ? '' : incorrectPasswordBlankMessage;
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

        try {
            const userData = {
                email: formData.email,
                password: formData.password,
            };

            const response = await axios.post(`${props.apiUrl}`, userData);
            Cookies.set("jwt", JSON.stringify(response.data), {expires: 7})
            setLoginMessage("Login successful.");

            setTimeout(() => {
                navigate("/jobs");
            }, 2000);
        } catch (error) {
            if (error.response) {
                if (error.response.status === 403) {
                    setLoginMessage("Invalid email or password.");
                } else {
                    console.log(error.response);
                }
            } else if (error.request) {
                console.log("network error");
            } else {
                console.log(error);
            }
        }
    };

    return (
        <StyledRightContainer>
            <RightNavbar/>
            <Sheet style={{backgroundColor: 'transparent'}}>
                <StyledText
                    color="white"
                    tag={"h3"}
                    text={props.text}
                />
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
                    {loginMessage &&
                        <CandidateRegisterTextCandidateExist>{loginMessage}</CandidateRegisterTextCandidateExist>}
                    <FormControl sx={{justifyContent: 'center'}}>
                        <RedButton
                            text="LOG IN">
                        </RedButton>
                        <ChangePasswordModal id={props.id} tag={<StyledAddIcon/>}/>
                    </FormControl>
                </form>
            </Sheet>
        </StyledRightContainer>
    );
}