import {useEffect, useState} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";
const urls = [
    "http://localhost:8080/api/jobs/by-employer",
    "http://localhost:8080/api/jobs/"
]
export function useJobsPagination(pageNumber, sortBy, field) {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [jobs, setJobs] = useState([])
    const [hasMore, setHasMore] = useState(false)

    useEffect(() => {
        setLoading(true)
        setError(false)
        let cancel
        axios({
            method: 'GET',
            url: 'http://localhost:8080/api/jobs/',
            params: {page: pageNumber - 1, sortBy: sortBy, field: field},
            cancelToken: new axios.CancelToken(c => cancel = c)
        }).then(res => {
            setJobs(prevJobs => {
                return [...new Set([...prevJobs, ...res.data.content])]
            })
            setHasMore(res.data.content.length > 0)
            setLoading(false)
        }).catch(e => {
            if (axios.isCancel(e)) return
            setError(true)
        })
        return () => cancel()
    }, [pageNumber])
    return {loading, error, jobs, hasMore}
}


export const useJobsByName = (id) => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data: response } = await axios.get(urls[0], {params:{id:id}});
                setData(response.content);
            } catch (error) {
                console.error(error)
            }
            setLoading(false);
        };

        fetchData();
    }, []);

    return {
        data,
        loading,
    };
};

export const getJobOfferById = async (id) => await axios.get(`http://localhost:8080/api/jobs/${id}`);







