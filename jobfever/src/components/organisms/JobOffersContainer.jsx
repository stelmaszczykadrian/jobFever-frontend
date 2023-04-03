import JobOfferGrid from "../molecules/JobOfferGrid";
import React, {useState, useRef, useCallback} from "react";
import {StyledJobOffersContainer} from "./JobOffersContainer.styles";
import {useAxiosPagination} from "../../api/axiosFetch";


export default function JobOffersContainer() {
    const [pageNumber, setPageNumber] = useState(1)

    const {
        jobs,
        hasMore,
        loading,
        error
    } = useAxiosPagination(pageNumber)

    const observer = useRef()
    let lastJobElementRef = useCallback(node => {
        if (loading) return
        if (observer.current) {
            console.log("dupa")
            observer.current.disconnect()
        }
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && hasMore) {
                setPageNumber(prevPageNumber => prevPageNumber + 1)
            }
        })
        if (node) observer.current.observe(node)
    }, [loading, hasMore])





    return (
        <StyledJobOffersContainer>
            {
                jobs.content?.map((job, index) => {
                    if (jobs.content.length === index + 1) {
                        console.log("jestem")
                        return (<div key={index} ref={lastJobElementRef}><JobOfferGrid job={job}/></div>)
                    } else {
                        return (<JobOfferGrid job={job} key={index}/>)
                    }
                })
            }
                <div>{loading && 'loading'}<div></div><div></div><div></div></div>
                <div>{error && 'error when loading jobs'}</div>
                </StyledJobOffersContainer>
                )
            }