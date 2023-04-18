import axios from "axios";
import {useEffect, useState} from "react";
import * as React from "react";

const url = "http://localhost:8080/api/candidates/";

export const useCandidateById = (id) => {
    const [candidate, setCandidate] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const {data: response} = await axios.get(url, {params: {id: id}});
                setCandidate(response);
            } catch (error) {
                console.error(error)
            }
            setLoading(false);
        };

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
            github: updatedCandidateData.github
        },
        {
            params: {id: id}
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
    }).catch(error => {
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
    })
        .catch(error => {
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
    }).catch(error => {
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
    })
        .catch(error => {
            return error
        })
}