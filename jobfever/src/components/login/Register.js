import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import './LoginSheet.css';
import React, {useState} from "react";
import {RightContainer} from "./styled-components/StyledRightConatiner";
import Logo from "./Logo";
import SocialmediaButtons from "./SocialmediaButtons";
import axiosFetch from './axiosFetch'
import RedButton from "./RedButton";
import {StyledUserInputValidation} from "./styled-components/StyledUserInputValidation";
import UsernameInput from "./input-components/UsernameInput";
import PasswordInput from "./input-components/PasswordInput";
import {StyledLeftContainer} from "./styled-components/StyledLeftContainer";


function Register() {
    const [input, setInput] = useState({
        username: '',
        password: '',
        confirmPassword: ''
    });

    const [error, setError] = useState({
        username: '',
        password: '',
        confirmPassword: ''
    })

    const onInputChange = e => {
        const {name, value} = e.target;
        setInput(prev => ({
            ...prev,
            [name]: value
        }));
        validateInput(e);
    }

    const validateInput = e => {
        let {name, value} = e.target;
        setError(prev => {
            const stateObj = {...prev, [name]: ""};

            switch (name) {
                case "username":
                    if (!value) {
                        stateObj[name] = "Please enter Username.";
                    }
                    break;
                case "password":
                    if (!value) {
                        stateObj[name] = "Please enter Password.";
                    } else if (input.confirmPassword && value !== input.confirmPassword) {
                        stateObj["confirmPassword"] = "Password and Confirm Password does not match.";
                    } else {
                        stateObj["confirmPassword"] = input.confirmPassword ? "" : error.confirmPassword;
                    }
                    break;
                case "confirmPassword":
                    if (!value) {
                        stateObj[name] = "Please enter Confirm Password.";
                    } else if (input.password && value !== input.password) {
                        stateObj[name] = "Password and Confirm Password does not match.";
                    }
                    break;
                default:
                    break;
            }
            return stateObj;
        });
    }


    const handleSubmit = (e) => {
        e.preventDefault();

        const userData = {
            email: input.username,
            password: input.password,
            repeatPassword: input.confirmPassword
        };
        if (input.password === input.confirmPassword) {
            axiosFetch(userData, "http://localhost:8080/api/candidates/register-candidate");
        }
    };
    return (
        <div>
            <div id="container">
                <StyledLeftContainer/>
                <RightContainer>
                    <Sheet style={{backgroundColor: 'transparent'}}>
                        <div>
                            <Logo/>
                            <Typography level="h4" component="h1"
                                        sx={{color: 'rgba(171, 36, 36)', fontWeight: 'bold', textAlign: 'center'}}>
                                <span>Welcome!</span>
                            </Typography>
                            <Typography level="body2" component="h1"
                                        sx={{color: 'white', fontWeight: 'bold', textAlign: 'center'}}>
                                <span>Create account</span>
                            </Typography>
                        </div>
                        <p></p>
                        <form onSubmit={handleSubmit}>
                            <FormControl width="40">
                                <FormLabel sx={{alignSelf: 'center', color: 'white'}}>Email</FormLabel>
                                <StyledUserInputValidation>
                                    <UsernameInput value = {input.username}
                                                   onChange={onInputChange}
                                                   onBlur={validateInput}/>
                                </StyledUserInputValidation>
                                {error.username && <span className='err'>{error.username}</span>}
                            </FormControl>
                            <FormControl>
                                <FormLabel
                                    sx={{alignSelf: 'center', color: 'white'}}>Password</FormLabel>
                                <StyledUserInputValidation>
                                    <PasswordInput name = {'password'} value={input.password}
                                        onChange={onInputChange}
                                        onBlur={validateInput}
                                    />
                                </StyledUserInputValidation>
                                {error.password && <span className='err'>{error.password}</span>}
                            </FormControl>
                            <FormControl>
                                <FormLabel sx={{border: '1px', alignSelf: 'center', color: 'white'}}>Repeat
                                    Password</FormLabel>
                                <StyledUserInputValidation>
                                    <PasswordInput name = {'confirmPassword'} value={input.confirmPassword}
                                                   onChange={onInputChange}
                                                   onBlur={validateInput}
                                    />
                                </StyledUserInputValidation>
                                {error.confirmPassword && <span className='err'>{error.confirmPassword}</span>}
                            </FormControl>
                            <FormControl sx={{justifyContent: 'center'}}>
                                <RedButton
                                    text={'REGISTER'}>
                                </RedButton>
                            </FormControl>
                        </form>

                    </Sheet>
                    <SocialmediaButtons/>
                </RightContainer>

            </div>
        </div>
    );
}

export default Register;