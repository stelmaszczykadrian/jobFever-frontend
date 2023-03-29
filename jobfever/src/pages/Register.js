import axiosFetch from "../components/fetch/axiosFetch";
import {StyledLeftContainer} from "../components/styled-components/StyledLeftContainer";
import {RightContainer} from "../components/styled-components/StyledRightConatiner";
import Sheet from "@mui/joy/Sheet";
import Logo from "../components/logo/Logo";
import {StyledText} from "../components/text/StyledText";
import Typography from "@mui/joy/Typography";
import FormControl from "@mui/joy/FormControl";
import {StyledLabel} from "../components/styled-components/StyledLabel";
import {StyledUserInputValidation} from "../components/styled-components/StyledUserInputValidation";
import UsernameInput from "../components/inputs/UsernameInput";
import PasswordInput from "../components/inputs/PasswordInput";
import RedButton from "../components/buttons/RedButton";
import SocialmediaButtons from "../components/buttons/SocialmediaButtons";
import {useState} from "react";

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
                            <StyledText>
                                <Typography level="h4" component="h1"
                                            sx={{color: 'rgba(171, 36, 36)'}}>
                                    <span>Welcome!</span>
                                </Typography>
                            </StyledText>
                            <StyledText>
                                <Typography level="body1" component="h1"
                                            sx={{color: 'white'}}>
                                    <span>Create account</span>
                                </Typography>
                            </StyledText>
                        </div>
                        <p></p>
                        <form onSubmit={handleSubmit}>
                            <FormControl width="40">
                                <StyledLabel>
                                    <span>E-mail</span>
                                </StyledLabel>
                                <StyledUserInputValidation>
                                    <UsernameInput value={input.username}
                                                   onChange={onInputChange}
                                                   onBlur={validateInput}/>
                                </StyledUserInputValidation>
                                {error.username && <span className='err'>{error.username}</span>}
                            </FormControl>
                            <FormControl>
                                <StyledLabel>
                                    <span>Password</span>
                                </StyledLabel>
                                <StyledUserInputValidation>
                                    <PasswordInput name={'password'} value={input.password}
                                                   onChange={onInputChange}
                                                   onBlur={validateInput}
                                    />
                                </StyledUserInputValidation>
                                {error.password && <span className='err'>{error.password}</span>}
                            </FormControl>
                            <FormControl>
                                <StyledLabel>
                                    <span>Confirm Password</span>
                                </StyledLabel>
                                <StyledUserInputValidation>
                                    <PasswordInput name={'confirmPassword'} value={input.confirmPassword}
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