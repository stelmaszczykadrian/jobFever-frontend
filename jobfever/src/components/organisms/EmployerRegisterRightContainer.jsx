import {StyledLabel, StyledRightContainer, StyledUserInputValidation} from "./RightConatiner.styles";
import RightNavbar from "../molecules/RightNavbar";
import Sheet from "@mui/joy/Sheet";
import Input from "@mui/joy/Input";
import FormControl from "@mui/joy/FormControl";
import React, {useState} from "react";
import {
    StyleEmployerRegisterSubmitButton, EmployerRegisterRightContainerColumn, EmployerRegisterTextEmployerExist
} from "./EmployerRegisterRightContainer.styles";
import RedButton from "../atoms/RedButton";
import SocialMediaButtons from "../molecules/SocialMediaButtons";
import Container from "@mui/material/Container";
import {Form} from "react-bootstrap";
import axios from "axios";
import {useNavigate} from "react-router-dom";



export default function EmployerRegisterRightContainer() {

    const [employerMessage, setEmployerMessage] = useState('');
    const navigate = useNavigate();

    const [input, setInput] = useState({
        companyName: '',
        nameAndSurname: '',
        phoneNumber: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const onInputChange = e => {
        const {name, value} = e.target;
        setInput(prev => ({
            ...prev,
            [name]: value
        }));

        // validateInput(e);
    }




    const handleSubmit = (event) => {
        event.preventDefault();
        // console.log(input);

        const userData = {
            companyName: input.companyName,
            nameAndSurname: input.nameAndSurname,
            phoneNumber: input.phoneNumber,
            email: input.email,
            password: input.password,
            confirmPassword: input.confirmPassword
        };

        console.log(userData)

        axios
            .post('http://localhost:8080/api/employers', userData)
            .then((response) => {
                console.log(response);
                setEmployerMessage('Employer added successfully.');
                setTimeout(() =>{
                    navigate('/employer/login');
                },2000)
            })
            .catch((error) => {
                if (error.response) {
                    if(error.response.data === "Employer already exists."){
                        // setEmployerExists(true);
                        setEmployerMessage("Employer already exists.")
                    }else{
                        console.log(error.response);
                        console.log("server responded");
                    }
                } else if (error.request) {
                    console.log("network error");
                } else {
                    console.log(error);
                }
            });
    };


    return (<StyledRightContainer>
        <RightNavbar/>
        <Form onSubmit={handleSubmit}>
            <Sheet style={{backgroundColor: 'transparent'}}>

                <Container>
                    <EmployerRegisterRightContainerColumn>
                        <FormControl width="40">
                            <StyledLabel>Company name</StyledLabel>
                            <StyledUserInputValidation>
                                <Input
                                    type="text"
                                    name="companyName"
                                    placeholder='ex. job Fever'
                                    value={input.companyName}
                                    onChange={onInputChange}
                                    // onBlur={validateInput}
                                />
                            </StyledUserInputValidation>
                            {/*{error.username &&*/}
                            {/*    <StyledText*/}
                            {/*        tag="span"*/}
                            {/*        color="rgba(171, 36, 36)"*/}
                            {/*        text={error.username}*/}
                            {/*    />}*/}
                        </FormControl>
                        <FormControl width="40">
                            <StyledLabel>Name and surname</StyledLabel>
                            <StyledUserInputValidation>
                                <Input
                                    type="text"
                                    name="nameAndSurname"
                                    placeholder='ex. Jan Kowalski'
                                    value={input.nameAndSurname}
                                    onChange={onInputChange}
                                    // onBlur={validateInput}
                                />
                            </StyledUserInputValidation>
                            {/*{error.username &&*/}
                            {/*    <StyledText*/}
                            {/*        tag="span"*/}
                            {/*        color="rgba(171, 36, 36)"*/}
                            {/*        text={error.username}*/}
                            {/*    />}*/}
                        </FormControl>
                        <FormControl width="40">
                            <StyledLabel>Phone number</StyledLabel>
                            <StyledUserInputValidation>
                                <Input
                                    type="number"
                                    name="phoneNumber"
                                    placeholder='ex. 505438212'
                                    value={input.phoneNumber}
                                    onChange={onInputChange}
                                    // onBlur={validateInput}
                                />
                            </StyledUserInputValidation>
                            {/*{error.username &&*/}
                            {/*    <StyledText*/}
                            {/*        tag="span"*/}
                            {/*        color="rgba(171, 36, 36)"*/}
                            {/*        text={error.username}*/}
                            {/*    />}*/}
                        </FormControl>
                    </EmployerRegisterRightContainerColumn>
                    <EmployerRegisterRightContainerColumn>
                        <FormControl width="40">
                            <StyledLabel>E-mail</StyledLabel>
                            <StyledUserInputValidation>
                                <Input
                                    type="text"
                                    name="email"
                                    placeholder='ex. jobFever@email.com'
                                    value={input.email}
                                    onChange={onInputChange}
                                    // onBlur={validateInput}
                                />
                            </StyledUserInputValidation>
                            {/*{error.username &&*/}
                            {/*    <StyledText*/}
                            {/*        tag="span"*/}
                            {/*        color="rgba(171, 36, 36)"*/}
                            {/*        text={error.username}*/}
                            {/*    />}*/}
                        </FormControl>
                        <FormControl>
                            <StyledLabel>
                                Password
                            </StyledLabel>
                            <StyledUserInputValidation>
                                <Input
                                    type="password"
                                    name={'password'}
                                    // placeholder='Enter Password'
                                    value={input.password}
                                    onChange={onInputChange}
                                    // onBlur={validateInput}
                                />
                            </StyledUserInputValidation>
                            {/*{error.password &&*/}
                            {/*    <StyledText*/}
                            {/*        tag="span"*/}
                            {/*        color="rgba(171, 36, 36)"*/}
                            {/*        text={error.password}*/}
                            {/*/>}*/}
                        </FormControl>
                        <FormControl>
                            <StyledLabel>
                                Confirm Password
                            </StyledLabel>
                            <StyledUserInputValidation>
                                <Input
                                    type="password"
                                    name={'confirmPassword'}
                                    // placeholder='Confirm password'
                                    value={input.confirmPassword}
                                    onChange={onInputChange}
                                    // onBlur={validateInput}
                                />
                            </StyledUserInputValidation>
                            {/*{error.confirmPassword &&*/}
                            {/*    <StyledText*/}
                            {/*        tag="span"*/}
                            {/*        color="rgba(171, 36, 36)"*/}
                            {/*        text={error.username}*/}
                            {/*    />}*/}
                        </FormControl>
                    </EmployerRegisterRightContainerColumn>
                </Container>
            </Sheet>
            {/*</Sheet>*/}
            {employerMessage  && <EmployerRegisterTextEmployerExist>{employerMessage}</EmployerRegisterTextEmployerExist>}
            <StyleEmployerRegisterSubmitButton>
                <RedButton
                    text={"REGISTER"}>
                </RedButton>
            </StyleEmployerRegisterSubmitButton>
        </Form>

        <SocialMediaButtons/>

    </StyledRightContainer>);
}