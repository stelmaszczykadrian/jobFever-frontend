import Sheet from "@mui/joy/Sheet";
import LogoIcon from "../atoms/LogoIcon";
import FormControl from "@mui/joy/FormControl";
import {StyledLabel} from "../styled-components/StyledLabel";
import {StyledUserInputValidation} from "../styled-components/StyledUserInputValidation";
import RedButton from "../atoms/RedButton";
import SocialmediaButtons from "../molecules/SocialmediaButtons";
import {useState} from "react";
import {StyledRightContainer} from "./RightConatiner.styles";
import Input from "@mui/joy/Input";
import StyledText from "../atoms/StyledText";
import WelcomeMessage from "../molecules/WelcomeMessage";
import axiosPost from "../../api/axiosFetch";


export default function RightContainer(props) {
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
        console.log(props.page.toLowerCase())
        if(props.page === "REGISTER"){
            if (input.password === input.confirmPassword) {
                axiosPost(userData, "http://localhost:8080/api/candidates/" + props.page.toLowerCase());
            }
        }else{
            axiosPost(userData, "http://localhost:8080/api/candidates/" + props.page.toLowerCase());
        }

    };
    let ConfirmPassword =
        <FormControl>
            <StyledLabel>
                Confirm Password
            </StyledLabel>
            <StyledUserInputValidation>
                <Input
                    type="password"
                    name={'confirmPassword'}
                    value={input.confirmPassword}
                    placeholder='Confirm password'
                    onChange={onInputChange}
                    onBlur={validateInput}
                />
            </StyledUserInputValidation>
            {error.confirmPassword &&
                <StyledText
                    tag="span"
                    color="rgba(171, 36, 36)"
                    text={error.username}
                />}
        </FormControl>;

    if (props.page === "LOGIN") {
        ConfirmPassword = null
    }

    return (
        <StyledRightContainer>
            <Sheet style={{backgroundColor: 'transparent'}}>
                <div>
                    <LogoIcon/>
                    <WelcomeMessage
                        page={props.page}>
                    </WelcomeMessage>
                </div>
                <form onSubmit={handleSubmit}>
                    <FormControl width="40">
                        <StyledLabel>
                            E-mail
                        </StyledLabel>
                        <StyledUserInputValidation>
                            <Input
                                type="text"
                                name="username"
                                placeholder='jobFever@email.com'
                                value={input.username}
                                onChange={onInputChange}
                                onBlur={validateInput}
                            />
                        </StyledUserInputValidation>
                        {error.username &&
                            <StyledText
                                tag="span"
                                color="rgba(171, 36, 36)"
                                text={error.username}
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
                                value={input.password}
                                placeholder='Enter Password'
                                onChange={onInputChange}
                                onBlur={validateInput}
                            />
                        </StyledUserInputValidation>
                        {error.password &&
                            <StyledText
                                tag="span"
                                color="rgba(171, 36, 36)"
                                text={error.password}
                            />}
                    </FormControl>
                    {ConfirmPassword}
                    <FormControl sx={{justifyContent: 'center'}}>
                        <RedButton
                            text={props.page}>
                        </RedButton>
                    </FormControl>
                </form>
            </Sheet>
            <SocialmediaButtons/>
        </StyledRightContainer>
    )
}