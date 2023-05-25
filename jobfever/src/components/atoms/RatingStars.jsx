import {Box} from "@mui/material";
import React, {useState} from "react";
import {addRating, useCandidateRatingById} from "../../api/CandidateApi";
import {StyledRatingStars} from "./RatingStars.styles";

export default function RenderRating(props) {
    const {data, loading} = useCandidateRatingById(props.candidateId, props.jobId)
    const [rating, setRating] = useState(0)
    const [value, setValue] = useState(0)
    React.useEffect(() => {
        if (!loading) {
            setRating(data)
        }
    }, [data, rating]);
    if (!loading) {
        if (value !== 0) {
            return (
                <Box mb={1}>
                    <StyledRatingStars
                        name="simple-controlled"
                        value={value}
                        onChange={(event, newValue) => {
                            addRating(props.candidateId, newValue, props.jobId)
                            setValue(newValue)
                        }}
                    />
                </Box>
            );
        } else {
        }
        return (
            <Box>
                <StyledRatingStars
                    name="simple-controlled"
                    value={rating}
                    onChange={(event, newValue) => {
                        addRating(props.candidateId, newValue, props.jobId)
                        setValue(newValue)
                    }}
                />
            </Box>
        );
    } else {
        return (
            <span>Loading...</span>
        )
    }

}