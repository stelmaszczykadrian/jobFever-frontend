import axios from "axios";
import {useEffect, useState} from "react";

export default function axiosPost(userData, url) {
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
export function useAxiosPagination(pageNumber){
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
            params: { page: pageNumber -1},
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
        return {loading,error,jobs,hasMore}
}
