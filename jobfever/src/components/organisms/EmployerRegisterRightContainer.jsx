import {StyledLabel, StyledRightContainer, StyledUserInputValidation} from "./RightConatiner.styles";
import RightNavbar from "../molecules/RightNavbar";
import Sheet from "@mui/joy/Sheet";
import Input from "@mui/joy/Input";
import FormControl from "@mui/joy/FormControl";
import React from "react";
import {
    StyleEmployerRegisterSubmitButton, EmployerRegisterRightContainerColumn
} from "./EmployerRegisterRightContainer.styles";
import RedButton from "../atoms/RedButton";
import SocialMediaButtons from "../molecules/SocialMediaButtons";
import Container from "@mui/material/Container";


export default function EmployerRegisterRightContainer() {
    return (<StyledRightContainer>
        <RightNavbar/>
        <Sheet style={{backgroundColor: 'transparent'}}>
            <Container>
                <EmployerRegisterRightContainerColumn>
                    <FormControl width="40">
                        <StyledLabel>Company name</StyledLabel>
                        <StyledUserInputValidation>
                            <Input
                                type="text"
                                name="company-name"
                                // placeholder='jobFever@email.com'
                                // value={input.username}
                                // onChange={onInputChange}
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
                                name="name-surname"
                                // placeholder='jobFever@email.com'
                                // value={input.username}
                                // onChange={onInputChange}
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
                                name="phone-number"
                                // placeholder='jobFever@email.com'
                                // value={input.username}
                                // onChange={onInputChange}
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
                                name="company-email"
                                // placeholder='jobFever@email.com'
                                // value={input.username}
                                // onChange={onInputChange}
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
                                // value={input.password}
                                // placeholder='Enter Password'
                                // onChange={onInputChange}
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
                                // value={input.confirmPassword}
                                // placeholder='Confirm password'
                                // onChange={onInputChange}
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
        <StyleEmployerRegisterSubmitButton>
            <RedButton
                text={"REGISTER"}>
            </RedButton>
        </StyleEmployerRegisterSubmitButton>
        <SocialMediaButtons/>

    </StyledRightContainer>);
}