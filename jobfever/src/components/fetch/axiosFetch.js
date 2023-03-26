import axios from "axios";

export default function axiosFetch(userData, url) {
    axios
        .post(url, userData)
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            if (error.response) {
                console.log(error.response);
                console.log("server responded");
            } else if (error.request) {
                console.log("network error");
            } else {
                console.log(error);
            }
        });
}
