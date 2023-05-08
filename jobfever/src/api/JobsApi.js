import {useState} from "react";
import axios from "axios";
import Cookies from "js-cookie";

const urls = [
    "http://localhost:8080/api/jobs/by-employer",
    "http://localhost:8080/api/jobs/"
]

export const useJobsByName = (id) => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        try {
            const {data: response} = await axios.get(urls[0], {
                params: {id: id},
                headers: {
                    Authorization: `Bearer ${JSON.parse(Cookies.get("jwt")).access_token}`
                }
            });
            return response.content;
        } catch (error) {
            console.error(error)
        }
        setLoading(false);
    };
    return fetchData;
};

export const getJobOfferById = async (id) => await axios.get(`http://localhost:8080/api/jobs/${id}`);

export const deleteJobOfferById = async (id) => await axios.delete(`http://localhost:8080/api/jobs/${id}`);

export const updateJob = (userData, onSuccess, onError, id) => {
    axios.put(`http://localhost:8080/api/jobs/${id}`, userData)
        .then((r) => {
            console.log(r);
            if(r.status === 200) {
                onSuccess();
            }
        })
        .catch((error) => {
            if (error.response) {
                const errorMessages = error.response.data.split(". ");
                onError(errorMessages);
                console.log(error.response);
                console.log("server responded");
            } else if (error.request) {
                console.log("network error");
            } else {
                console.log(error);
            }
        });

};
export const applyForJob = async (jobId, candidateId) => {
    const url = "http://localhost:8080/api/jobs/apply";
    let res;
    await axios.put(url, {}, {
        params: {id: jobId, candidateId: candidateId},
        headers: {
            Authorization: `Bearer ${JSON.parse(Cookies.get("jwt")).access_token}`
        }
    }).then((response) => {
        res = response.data
    })
    return res
}



export const createJob = (userData, onSuccess, onError) => {
    const url = "http://localhost:8080/api/jobs";
    axios.post(url, userData, ({
        params: {email: JSON.parse(Cookies.get("jwt")).name},
        headers: {
            Authorization: `Bearer ${JSON.parse(Cookies.get("jwt")).access_token}`
        }
    }))
        .then((response) => {
            console.log(response);
            if (response.status === 200 && response.data === "Job added successfully.") {
                onSuccess();
            }
        })
        .catch((error) => {
            if (error.response) {
                const errorMessages = error.response.data.split(". ");
                onError(errorMessages);
                console.log(error.response);
                console.log("server responded");
            } else if (error.request) {
                console.log("network error");
            } else {
                console.log(error);
            }
        });
};

