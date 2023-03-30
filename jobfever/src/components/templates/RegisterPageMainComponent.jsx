import axiosFetch from "../../api/axiosFetch";
import Sheet from "@mui/joy/Sheet";
import LogoIcon from "../../components/atoms/LogoIcon";
import Typography from "@mui/joy/Typography";
import FormControl from "@mui/joy/FormControl";
import {useState} from "react";
import {StyledRegisterMainComponent} from "./RegisterPageMainComponent.styles";
import {StyledLeftContainer} from "../styled-components/StyledLeftContainer";
import {RightContainer} from "../styled-components/StyledRightConatiner";
import {StyledText} from "../styled-components/StyledText";
import {StyledLabel} from "../styled-components/StyledLabel";
import {StyledUserInputValidation} from "../styled-components/StyledUserInputValidation";
import UsernameInput from "../atoms/UsernameInput";
import PasswordInput from "../atoms/PasswordInput";
import RedButton from "../atoms/RedButton";
import SocialmediaButtons from "../molecules/SocialmediaButtons";

export default function RegisterMainComponent() {
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
        <StyledRegisterMainComponent>
            <StyledLeftContainer/>
            <RightContainer>
                <Sheet style={{backgroundColor: 'transparent'}}>
                    <div>
                        <LogoIcon/>
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

        </StyledRegisterMainComponent>
    );
}