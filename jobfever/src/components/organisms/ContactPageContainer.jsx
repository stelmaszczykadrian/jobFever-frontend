import {
    StyledContactBox,
    StyledContactPageButton,
    StyledContactPageContainer,
    StyledContactPageHeading,
    StyledContactPageInputField,
    StyledContactPageLeftContainer,
    StyledContactPageRightContainer,
    StyledContactPageTextarea,
    StyledContactPageMainContainer
} from "./ContactPageContainer.styles";
import {useState} from "react";
import {sendContactUs} from "../../api/ContactUsApi";
import {GoogleReCaptcha, GoogleReCaptchaProvider} from "react-google-recaptcha-v3";

export default function ContactPageContainer() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
    let isVerified = false;
    const handleVerify = () => {
        isVerified = true;
        console.log(isVerified)
    }
    const handleSubmit = event => {
        event.preventDefault();
        if (isVerified){
            sendContactUs(name, email, phone, message)
            setName("")
            setMessage("")
            setEmail("")
            setPhone("")
        }

    };
    return (
        <StyledContactPageMainContainer>
            <StyledContactPageContainer>
                <StyledContactBox>
                    <StyledContactPageLeftContainer/>
                    <StyledContactPageRightContainer>
                        <StyledContactPageHeading>Contact Us</StyledContactPageHeading>
                        <form onSubmit={handleSubmit}>
                        <StyledContactPageInputField type="text" placeholder="Your Name"
                                                     name={"name"} value={name} onChange={event => setName(event.target.value)}>
                        </StyledContactPageInputField>
                        <StyledContactPageInputField type="text" placeholder="Your Email" name={"email"} value={email} onChange={event => setEmail(event.target.value)}></StyledContactPageInputField>
                        <StyledContactPageInputField type="text" placeholder="Phone" name={"phone"} value={phone} onChange={event => setPhone(event.target.value)}></StyledContactPageInputField>
                        <StyledContactPageTextarea placeholder="Message" name={"message"} value={message} onChange={event => setMessage(event.target.value)}></StyledContactPageTextarea>
                            <GoogleReCaptchaProvider reCaptchaKey="6LfrfCwmAAAAABYCQj15CnQgsCuZ6djnXOoyn33M">
                                <GoogleReCaptcha onVerify={handleVerify} />
                            </GoogleReCaptchaProvider>
                        <StyledContactPageButton type={"submit"}>Send</StyledContactPageButton>
                        </form>
                    </StyledContactPageRightContainer>
                </StyledContactBox>
            </StyledContactPageContainer>
        </StyledContactPageMainContainer>
    );
}