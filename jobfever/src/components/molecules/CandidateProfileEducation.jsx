import {StyledTopBox, StyledProfilePaper, StyledBottomBox, StyledIconBox} from "./CandidateProfile.styles";
import {Box} from "@mui/material";
import ProfileContainerTitle from "../atoms/ProfileContainerTitle";
import React, {useState} from "react";
import {StyledEditIcon} from "../atoms/StyledEditIcon";
import {StyledAddIcon} from "../atoms/StyledAddIcon";
import {StyledSchoolIcon} from "../atoms/StyledSchoolIcon";
import ResponsiveDialog from "./CandidateEducationModal";
import {useCandidateById} from "../../api/CandidateApi";


export default function CandidateProfileEducation(props) {

    const {data, loading} = useCandidateById(props.id);
    console.log(data)
    console.log("TestData " + JSON.stringify(data.candidateEducations));

    if (!data || !data.candidateEducations) {
        return <div>Loading...</div>;
    }
    return (
        <StyledProfilePaper>
            <StyledTopBox>
                <StyledSchoolIcon/>
                <ProfileContainerTitle text={'Education'}/>
                <StyledIconBox>
                    <ResponsiveDialog id={props.id} text={'Add education'} tag={<StyledAddIcon/>}/>
                </StyledIconBox>
            </StyledTopBox>
            <StyledBottomBox>
                {data.candidateEducations.map((education) => (
                    <Box key={education.id}>
                        <span>{`Education ${education.id}: ${education.school}`}</span>
                        <StyledIconBox>
                            <ResponsiveDialog id={props.id} text={'Edit education'} tag={<StyledEditIcon/>}/>
                        </StyledIconBox>
                    </Box>
                ))}
            </StyledBottomBox>
        </StyledProfilePaper>
    );
}