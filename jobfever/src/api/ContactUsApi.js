import axios from "axios";

export const sendContactUs = async (name, email, phoneNumber, message) => {
    let data
    try {
        await axios.post("http://localhost:8080/api/contact/", {
            name: name,
            email: email,
            phoneNumber: phoneNumber,
            message: message
        },).then((response) => {
            data = response.data;
        });
    } catch (error) {
        console.error(error)
    }
    return data
}