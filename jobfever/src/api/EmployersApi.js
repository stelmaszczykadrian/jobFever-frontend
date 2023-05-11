import axios from "axios";
import {useEffect, useState} from "react";
import Cookies from "js-cookie";
import {useNavigate} from "react-router-dom";

const url = "http://localhost:8080/api/employers/";

export const useEmployerById = (id) => {
    const [employer, setEmployer] = useState({});
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const {data: response} = await axios.get(url, {
                    params: {id: id},
                });
                if(!response){
                    navigate('/404')
                }
                setEmployer(response);
            } catch (error) {
            }
            setLoading(false);
        };

        fetchData();
    }, []);

    return {
        data: employer,
        loading,
    };
};

export async function editEmployer(id, companyName, nameAndSurname, phoneNumber, localization, aboutUs, nip, linkedin, email) {
    if (!aboutUs) {
        try {
            await axios.put(url, {
                    companyName: companyName,
                    nameAndSurname: nameAndSurname,
                    phoneNumber: parseInt(phoneNumber),
                    localization: localization,
                    nip: parseInt(nip),
                    linkedin: linkedin,
                    email: email
                },
                {
                    params: {id: id},
                    headers: {
                        Authorization: `Bearer ${JSON.parse(Cookies.get("jwt")).access_token}`

                    }
                });
        } catch (error) {
            console.log(error);
        }
    } else {
        await axios.put(url, {
                aboutUs: aboutUs
            },
            {
                params: {id: id},
                headers: {
                    Authorization: `Bearer ${JSON.parse(Cookies.get("jwt")).access_token}`
                }
            });
    }

}

export const saveEmployersImgFilename = async (id, filename) => {
    try {
        await axios.put("http://localhost:8080/api/employers/add-image", {}, {
            params: {
                id: id,
                filename: filename
            },
            headers: {
                Authorization: `Bearer ${JSON.parse(Cookies.get("jwt")).access_token}`
            }
        });
    } catch (error) {
        console.error(error)
    }

}


export const registerEmployer = (userData, onSuccess, onError) => {
    const url = "http://localhost:8080/api/authentication/employers/register";
    axios.post(url, userData)
        .then((response) => {
            console.log(response);
            if (response.status === 200 && response.data === "Employer added successfully.") {
                onSuccess();
            }
        })
        .catch((error) => {
            if (error.response) {
                const errorMessage = error.response.data;
                onError(errorMessage);
                console.log(error.response);
                console.log("server responded");
            } else if (error.request) {
                console.log("network error");
            } else {
                console.log(error);
            }
        });
};


