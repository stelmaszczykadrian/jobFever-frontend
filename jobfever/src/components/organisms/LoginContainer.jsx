import {
    CandidateRegisterTextCandidateExist,
    StyledLabel,
    StyledRightContainer,
    StyledPasswordInputValidation, StyledEmailInputValidation, StyledInputRedHover
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
import {isValidEmail, validateFormData} from "../../utils/Validators";
import {
    incorrectEmailAddressMessage,
    incorrectEmailEmptyMessage, incorrectPasswordBlankMessage
} from "../../constants/RegisterFormValidationsMessages";
import IconButton from "@mui/material/IconButton";
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { MailOutline } from '@material-ui/icons';
import {createTheme} from "@mui/material/styles";


export default function LoginContainer(props) {
    const [loginMessage, setLoginMessage] = useState('');
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        errors: {
            email: '',
            password: '',
        }
    });

    const theme = createTheme({
        palette: {
            primary: {
                main: '#2f2f2f',
            },
            error: {
                main: '#f44336',
            },
            black: {
                main: '#000000',
            },
        },
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
                    <FormControl>
                        <StyledLabel>E-mail</StyledLabel>
                        <StyledEmailInputValidation>
                            <StyledInputRedHover
                                error
                                id="outlined-error"
                                type="text"
                                name="email"
                                placeholder='ex. jobFever@email.com'
                                value={formData.email}
                                onChange={onInputChange}
                                onBlur={validateInput}
                            />
                            <IconButton sx={{color: 'white'}}>
                                <MailOutline/>
                            </IconButton>
                        </StyledEmailInputValidation>
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
                        <StyledPasswordInputValidation>
                            <StyledInputRedHover
                                error
                                type={showPassword ? "text" : "password"}
                                name={'password'}
                                value={formData.password}
                                onChange={onInputChange}
                                onBlur={validateInput}
                            />
                            <IconButton sx={{color: 'white'}} onClick={() => setShowPassword(!showPassword)}>
                                {showPassword ? <VisibilityOffIcon/> : <VisibilityIcon/>}
                            </IconButton>
                        </StyledPasswordInputValidation>
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