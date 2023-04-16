import axios from "axios";
import {useEffect, useState} from "react";

const url = "http://localhost:8080/api/candidates/";

export const useCandidateById = (id) => {
    const [candidate, setCandidate] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data: response } = await axios.get(url, {params:{id:id}});
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
            params:{id:id}
        });
}

export async function editCandidateEducation(candidateId, educationId, updatedCandidateEducationData) {
    await axios.put(`http://localhost:8080/api/candidates/${candidateId}/education/${educationId}`, {
            degree: updatedCandidateEducationData.degree,
            description: updatedCandidateEducationData.description,
            endDate: updatedCandidateEducationData.endDate,
            fieldOfStudy: updatedCandidateEducationData.fieldOfStudy,
            school: updatedCandidateEducationData.school,
            startDate: updatedCandidateEducationData.startDate
        },
        {
        });
}

export async function addCandidateEducation(candidateId, updatedCandidateEducationData) {
    await axios.post(`http://localhost:8080/api/candidates/${candidateId}/education`, {
            degree: updatedCandidateEducationData.degree,
            description: updatedCandidateEducationData.description,
            endDate: updatedCandidateEducationData.endDate,
            fieldOfStudy: updatedCandidateEducationData.fieldOfStudy,
            school: updatedCandidateEducationData.school,
            startDate: updatedCandidateEducationData.startDate
        },
        {
        });
}