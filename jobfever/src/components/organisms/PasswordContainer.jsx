import {useNavigate, useParams} from "react-router-dom";
import React, {useState} from "react";
import {validateFormData} from "../../utils/Validators";
import {
    incorrectPasswordLengthMessage,
    minimumPasswordLength,
    passwordsDoNotMatchMessage
} from "../../constants/RegisterFormValidationsMessages";
import {
    StyledLabel,
    StyledPasswordInputValidation,
    StyledRightContainer
} from "./CandidateRegisterRightContainer.styles";
import RightNavbar from "../molecules/RightNavbar";
import Sheet from "@mui/joy/Sheet";
import StyledText from "../atoms/StyledText";
import FormControl from "@mui/joy/FormControl";
import Input from "@mui/joy/Input";
import IconButton from "@mui/material/IconButton";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import VisibilityIcon from "@material-ui/icons/Visibility";
import RedButton from "../atoms/RedButton";
import {EmployerRegisterTextEmployerExist} from "./EmployerRegisterRightContainer.styles";
import {changePassword} from "../../api/AuthApi";

export default function PasswordContainer(){
    const params = useParams();
    const [errorMessage, setErrorMessage] = useState(null);
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
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
                        <StyledLabel>
                            Password
                        </StyledLabel>
                        <StyledPasswordInputValidation>
                            <Input
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
                    <FormControl>
                        <StyledLabel>
                            Confirm Password
                        </StyledLabel>
                        <StyledPasswordInputValidation>
                            <Input
                                type={showPassword ? "text" : "password"}
                                name={'confirmPassword'}
                                value={formData.confirmPassword}
                                onChange={onInputChange}
                                onBlur={validateInput}
                            />
                            <IconButton sx={{color: 'white'}} onClick={() => setShowPassword(!showPassword)}>
                                {showPassword ? <VisibilityOffIcon/> : <VisibilityIcon/>}
                            </IconButton>
                        </StyledPasswordInputValidation>

                        {formData.errors.confirmPassword &&
                            <StyledText
                                tag="span"
                                color="red"
                                text={formData.errors.confirmPassword}
                            />}
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