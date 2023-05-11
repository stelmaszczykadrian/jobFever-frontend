import axios from "axios";


export const sendEmailForPasswordChange = async (email) => {
    let data
    try {
        await axios.post("http://localhost:8080/api/authentication/forgot-password", {
        },{
            params: {
                email: email
            },
        }).then((response) => {
            data = response.data;
        });
    } catch (error) {
        console.error(error)
    }
    return data
}
export const changePassword = async (url,token, password) => {
    try {
        await axios.put(url, {
        },{
            params: {
                token,
                password
            },
        }).then((response) => {
            return response.data;
        });
    } catch (error) {
        console.error(error)
    }
}