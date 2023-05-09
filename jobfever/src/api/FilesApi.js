import axios from "axios";
import Cookies from "js-cookie";

export async function uploadFile(file) {
    let formData = new FormData();
    formData.append("file", file)
    return await axios.post('http://localhost:8080/api/file/upload', formData, {
        headers: {
            Authorization: `Bearer ${JSON.parse(Cookies.get("jwt")).access_token}`,
            'Content-Type': 'multipart/form-data',

        }
    }).then(response => {
        console.log(response.data);
    }).catch(error => {
        console.error(error);
    });
}

