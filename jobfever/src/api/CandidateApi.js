import axios from "axios";
import {useEffect, useState} from "react";
import * as React from "react";
import Cookies from "js-cookie";
import {useNavigate} from "react-router-dom";
import {useAuthorization} from "../utils/AuthUtils";

const url = "http://localhost:8080/api/candidates/";

export const useCandidateById = (id) => {
    const [candidate, setCandidate] = useState({});
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const {getAccessToken} = useAuthorization();

    const getImgFile = async (filename) => {
        try {
            if (filename) {
                const resp = await axios.get('http://localhost:8080/api/file/url', {
                    params: {filename: filename},
                    headers: {
                        Authorization: `Bearer ${getAccessToken()}`
                    }
                });
                return resp.data;
            }
        } catch (error) {
            console.error(error)
        }
    };

    const fetchData = async () => {
        try {
            const resp = await axios.get(url, {
                params: {id: id},
                headers: {
                    Authorization: `Bearer ${getAccessToken()}`
                }
            });

            const pic = await getImgFile(resp.data.imgFileName);

            const fullData = {...resp.data,
                    picture: pic
            }

            if(!fullData){
                navigate('/404')
            }
            setLoading(false);
            setCandidate(fullData);
        } catch (error) {
            console.error(error)
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return {
        data: candidate,
        loading,
    };
};

export async function editCandidate(id, updatedCandidateData) {
    await axios.put(url, {
            name: updatedCandidateData.name,
            city: updatedCandidateData.city,
            linkedin: updatedCandidateData.linkedin,
            github: updatedCandidateData.github,
            email: updatedCandidateData.email
        },
        {
            params: {id: id},
            headers: {
                Authorization: `Bearer ${JSON.parse(Cookies.get("jwt")).access_token}`
            }
        });
}

export async function editCandidateEducation(candidateId, educationId, updatedCandidateEducationData) {
    return await axios.put(`http://localhost:8080/api/candidates/${candidateId}/education/${educationId}`, {
            degree: updatedCandidateEducationData.degree,
            description: updatedCandidateEducationData.description,
            endDate: updatedCandidateEducationData.endDate,
            fieldOfStudy: updatedCandidateEducationData.fieldOfStudy,
            school: updatedCandidateEducationData.school,
            startDate: updatedCandidateEducationData.startDate
        },
        ({
            headers: {
                Authorization: `Bearer ${JSON.parse(Cookies.get("jwt")).access_token}`
            }
        })).catch(error => {
        return error
    })
}

export async function addCandidateEducation(candidateId, updatedCandidateEducationData) {
    return await axios.post(`http://localhost:8080/api/candidates/${candidateId}/education`, {
            degree: updatedCandidateEducationData.degree,
            description: updatedCandidateEducationData.description,
            endDate: updatedCandidateEducationData.endDate,
            fieldOfStudy: updatedCandidateEducationData.fieldOfStudy,
            school: updatedCandidateEducationData.school,
            startDate: updatedCandidateEducationData.startDate
        },
        ({
            headers: {
                Authorization: `Bearer ${JSON.parse(Cookies.get("jwt")).access_token}`
            }
        })).catch(error => {
        return error
    })
}

export async function editCandidateExperience(candidateId, experienceId, updatedCandidateExperienceData) {
    return await axios.put(`http://localhost:8080/api/candidates/${candidateId}/experience/${experienceId}`, {
            position: updatedCandidateExperienceData.position,
            companyName: updatedCandidateExperienceData.companyName,
            location: updatedCandidateExperienceData.location,
            startDate: updatedCandidateExperienceData.startDate,
            endDate: updatedCandidateExperienceData.endDate,
            industry: updatedCandidateExperienceData.industry,
            description: updatedCandidateExperienceData.description
        },
        ({
            headers: {
                Authorization: `Bearer ${JSON.parse(Cookies.get("jwt")).access_token}`
            }
        })).catch(error => {
        return error
    })
}

export async function addCandidateExperience(candidateId, updatedCandidateExperienceData) {
    return await axios.post(`http://localhost:8080/api/candidates/${candidateId}/experience`, {
            position: updatedCandidateExperienceData.position,
            companyName: updatedCandidateExperienceData.companyName,
            location: updatedCandidateExperienceData.location,
            startDate: updatedCandidateExperienceData.startDate,
            endDate: updatedCandidateExperienceData.endDate,
            industry: updatedCandidateExperienceData.industry,
            description: updatedCandidateExperienceData.description
        },
        ({
            headers: {
                Authorization: `Bearer ${JSON.parse(Cookies.get("jwt")).access_token}`
            }
        })).catch(error => {
        return error
    })
}

export const saveCandidatesImgFilename = async (id, filename) => {
    try {
        await axios.put("http://localhost:8080/api/candidates/add-image", {}, {
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

export const saveCandidatesCvFile = async (id, filename) => {
    try {
        await axios.put("http://localhost:8080/api/candidates/add-cv-file", {}, {
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

export const registerCandidate = (userData, onSuccess, onError) => {
    const url = "http://localhost:8080/api/authentication/candidates/register";
    axios.post(url, userData)
        .then((response) => {
            console.log(response);
            if (response.status === 200 && response.data === "Candidate added successfully.") {
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

export async function deleteCandidateExperience(candidateId, experienceId) {
    return await axios.delete(`http://localhost:8080/api/candidates/${candidateId}/experience/${experienceId}`, {
        headers: {
            Authorization: `Bearer ${JSON.parse(Cookies.get("jwt")).access_token}`
        }
    }).catch(error => {
        return error
    })
}

export async function deleteCandidateEducation(candidateId, educationId) {
    return await axios.delete(`http://localhost:8080/api/candidates/${candidateId}/education/${educationId}`, {
        headers: {
            Authorization: `Bearer ${JSON.parse(Cookies.get("jwt")).access_token}`
        }
    }).catch(error => {
        return error
    })
}
