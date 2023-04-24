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
import axios from "axios";
import {Form} from "react-bootstrap";

export default function ContactPageContainer() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
        errors: {
            name: '',
            email: '',
            phone: '',
            message: ''
        }
    });

    function handleChange(event) {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    }


    function handleSubmit(event) {
        event.preventDefault();

        const userData = {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            message: formData.message
        };


        console.log(userData)


        axios.post('http://localhost:8080/api/contact', userData)
            .then(response => {
                console.log(response.data);
                // Do something with response data
            })
            .catch(error => {
                console.log(error);
                // Handle error
            });

    }

    return (
        <StyledContactPageMainContainer>
            <StyledContactPageContainer>
                <StyledContactBox>
                    <StyledContactPageLeftContainer/>
                    <StyledContactPageRightContainer>
                        <StyledContactPageHeading>Contact Us</StyledContactPageHeading>
                        <Form onSubmit={handleSubmit}>
                            <StyledContactPageInputField type="text" placeholder="Your Name" name="name" value={formData.name} onChange={handleChange}></StyledContactPageInputField>
                            <StyledContactPageInputField type="text" placeholder="Your Email" name="email" value={formData.email} onChange={handleChange}></StyledContactPageInputField>
                            <StyledContactPageInputField type="text" placeholder="Phone" name="phone" value={formData.phone} onChange={handleChange}></StyledContactPageInputField>
                            <StyledContactPageTextarea placeholder="Message" name="message" value={formData.message} onChange={handleChange}></StyledContactPageTextarea>
                            <StyledContactPageButton type="submit">Send</StyledContactPageButton>
                        </Form>
                    </StyledContactPageRightContainer>
                </StyledContactBox>
            </StyledContactPageContainer>
        </StyledContactPageMainContainer>
    );
}