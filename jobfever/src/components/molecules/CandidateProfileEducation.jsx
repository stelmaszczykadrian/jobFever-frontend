import {StyledTopBox, StyledProfilePaper, StyledBottomBox, StyledIconBox} from "./CandidateProfile.styles";
import {Box} from "@mui/material";
import ProfileContainerTitle from "../atoms/ProfileContainerTitle";
import React, {useState} from "react";
import {StyledEditIcon} from "../atoms/StyledEditIcon";
import {StyledAddIcon} from "../atoms/StyledAddIcon";
import {StyledSchoolIcon} from "../atoms/StyledSchoolIcon";
import CandidateEducationModal from "./CandidateEducationModal";
import {useCandidateById} from "../../api/CandidateApi";


export default function CandidateProfileEducation(props) {

    const {data, loading} = useCandidateById(props.id);
    const [educations, setEducations] = useState([]);

    React.useEffect(() => {
        if (data.candidateEducations) {
            setEducations(data.candidateEducations);
        }
    }, [data.candidateEducations]);


    if (!data || !data.candidateEducations) {
        return <div>Loading...</div>;
    } else {
        return (
            <StyledProfilePaper>
                <StyledTopBox>
                    <StyledSchoolIcon/>
                    <ProfileContainerTitle text={'Education'}/>
                    <StyledIconBox>
                        <CandidateEducationModal
                            candidate={props}
                            isNew={true}
                            setEducations={setEducations}
                            tag={<StyledAddIcon/>}
                        />
                    </StyledIconBox>
                </StyledTopBox>
                <StyledBottomBox>
                    {educations.sort((a,b) => a.id - b.id).map((education) => (
                        <Box key={education.id}>
                            <span>{`Education ${education.id}: ${education.school}`}</span>
                            <StyledIconBox>
                                <CandidateEducationModal
                                    candidate={props}
                                    education={education}
                                    setEducations={setEducations}
                                    isNew={false}
                                    tag={<StyledEditIcon/>}
                                />
                            </StyledIconBox>
                        </Box>
                    ))}
                </StyledBottomBox>
            </StyledProfilePaper>
        );
    }
}