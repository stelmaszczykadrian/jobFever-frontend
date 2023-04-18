import {
    CandidateRegisterTextCandidateExist,
    StyledLabel,
    StyledRightContainer,
    StyledUserInputValidation
} from "./CandidateRegisterRightContainer.styles";
import RightNavbar from "../molecules/RightNavbar";
import Sheet from "@mui/joy/Sheet";
import FormControl from "@mui/joy/FormControl";
import Input from "@mui/joy/Input";
import StyledText from "../atoms/StyledText";
import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import RedButton from "../atoms/RedButton";
import Cookies from 'js-cookie';


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
                return value !== '' ? '' : 'Email field cannot be empty';
            case 'password':
                return value.length < 6 ? 'Password should be at least 6 characters long' : '';
            default:
                return '';
        }
    };

    const handleSubmit = async (event) => {
        try {
            event.preventDefault();

            const userData = {
                email: formData.email,
                password: formData.password,
            };

            const response = await axios.post(`${props.apiUrl}`, userData);
            Cookies.set("jwt", JSON.stringify(response.data), { expires: 7 })
            setLoginMessage("Login successful.");

            setTimeout(() => {
                navigate("/jobs");
            }, 2000);
        } catch (error) {
            if (error.response) {
                if (error.response.data === "Invalid email or password.") {
                    setLoginMessage("Invalid email or password.");
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
    };

    return (
        <StyledRightContainer>
            <RightNavbar/>
            <Sheet style={{backgroundColor: 'transparent'}}>
                <StyledText
                    color="white"
                    tag={"h2"}
                    text={"Login to your profile"}
                />
                <form onSubmit={handleSubmit}>
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
                    {loginMessage &&
                        <CandidateRegisterTextCandidateExist>{loginMessage}</CandidateRegisterTextCandidateExist>}
                    <FormControl sx={{justifyContent: 'center'}}>
                        <RedButton
                            text="LOG IN">
                        </RedButton>
                    </FormControl>
                </form>
            </Sheet>
        </StyledRightContainer>
    );
}