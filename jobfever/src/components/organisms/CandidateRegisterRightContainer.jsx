import RightNavbar from "../molecules/RightNavbar";
import React, {useState} from "react";
import Sheet from "@mui/joy/Sheet";
import FormControl from "@mui/joy/FormControl";
import Input from "@mui/joy/Input";
import RedButton from "../atoms/RedButton";
import SocialMediaButtons from "../molecules/SocialMediaButtons";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import StyledText from "../atoms/StyledText";
import {
    CandidateRegisterTextCandidateExist,
    StyledUserInputValidation,
    StyledLabel,
    StyledRightContainer
} from "./CandidateRegisterRightContainer.styles";

export default function CandidateRegisterRightContainer() {

    const [candidateMessage, setCandidateMessage] = useState('');
    const navigate = useNavigate();
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
        if (formData.password === formData.confirmPassword) {
            const userData = {
                email: formData.email,
                password: formData.password,
            };
            try {
                const response = await axios.post('http://localhost:8080/api/candidates/register', userData);
                console.log(response);
                setCandidateMessage('Candidate added successfully.');
                setTimeout(() => {
                    navigate('/candidate/login');
                }, 2000);
            } catch (error) {
                if (error.response) {
                    if (error.response.data === "Candidate already exists.") {
                        setCandidateMessage("Candidate already exists.")
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
                    {candidateMessage &&
                        <CandidateRegisterTextCandidateExist>{candidateMessage}</CandidateRegisterTextCandidateExist>}
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