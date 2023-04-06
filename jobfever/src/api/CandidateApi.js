import axios from "axios";
import {useEffect, useState} from "react";

const url = "http://localhost:8080/api/candidates/";

export const createCandidate = async(userData) =>{
    return await axios.post(url, userData);
}

export const useCandidateById = (id) => {
    const [candidate, setCandidate] = useState({});
    const [loading, setLoading] = useState(true);
    console.log(id)

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