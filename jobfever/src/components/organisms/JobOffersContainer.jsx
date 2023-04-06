import JobOfferGrid from "../molecules/JobOfferGrid";
import React, {useState, useRef, useCallback} from "react";
import {StyledJobOffersContainer} from "./JobOffersContainer.styles";
import {useJobsPagination} from "../../api/apiJobs";
import TechnicalRequirementsContainer from "../molecules/TechnicalRequirementsContainer";
import {useJobsPagination} from "../../api/JobsApi";

export default function JobOffersContainer() {
    const [activeButtonIndex, setActiveButtonIndex] = useState();
    const [pressedButtons, setPressedButtons] = useState([]);

    const [input, setInput] = useState({
        technicalRequirements: [],
    });


    const [pageNumber, setPageNumber] = useState(1)
    const [field, setField] = useState("")
    const [sortBy, setSortBy] = useState("postingDate")

    const {
        jobs,
        hasMore,
        loading,
        error
    } = useJobsPagination(pageNumber, sortBy, field)

    const observer = useRef()
    let lastJobElementRef = useCallback(node => {
        if (loading) return
        if (observer.current) {
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
            <TechnicalRequirementsContainer pressedButtons={pressedButtons} setPressedButtons={setPressedButtons} input={input} setInput={setInput} />
            {
                jobs.map((job, index) => {
                    if (jobs.length === index + 1) {
                        return (<div key={index} ref={lastJobElementRef}><JobOfferGrid job={job}/></div>)
                    } else {
                        return (<JobOfferGrid job={job} key={index}/>)
                    }
                })
            }
            <div>{loading && 'loading'}</div>
            <div>{error && 'error when loading jobs'}</div>
        </StyledJobOffersContainer>
    )
}