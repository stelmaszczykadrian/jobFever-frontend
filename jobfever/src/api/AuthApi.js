import axios from "axios";


export const forgotPassword = async (email) => {
    let data
    try {
        await axios.post("http://localhost:8080/api/authentication/forgot-password", {
        },{
            params: {
                email: email
            },
        }).then((response) => {
            console.log(response.data)
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
            console.log(response.data)
            return response.data;
        });
    } catch (error) {
        console.error(error)
    }
}