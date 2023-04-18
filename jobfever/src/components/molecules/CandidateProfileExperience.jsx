import {
    StyledTopBox,
    StyledProfilePaper,
    StyledBottomBox, StyledIconBox
} from "./CandidateProfile.styles";
import {Box} from "@mui/material";
import ProfileContainerTitle from "../atoms/ProfileContainerTitle";
import React, {useState} from "react";
import {StyledEditIcon} from "../atoms/StyledEditIcon";
import {StyledWorkIcon} from "../atoms/StyledWorkIcon";
import {StyledAddIcon} from "../atoms/StyledAddIcon";
import CandidateExperienceModal from "./CandidateExperienceModal";
import {useCandidateById} from "../../api/CandidateApi";

export default function CandidateProfileExperience(props) {

    const {data, loading} = useCandidateById(props.id);
    const [experiences, setExperiences] = useState([]);

    React.useEffect(() => {
        if (data.candidateExperiences) {
            setExperiences(data.candidateExperiences);
        }
    }, [data.candidateExperiences]);

    if (!data || !data.candidateExperiences) {
        return <div>Loading...</div>;
    } else {
        return (
            <StyledProfilePaper>
                <StyledTopBox>
                    <StyledWorkIcon/>
                    <ProfileContainerTitle text={'Experience'}/>
                    <StyledIconBox>
                        <CandidateExperienceModal
                            candidate={props}
                            isNew={true}
                            setExperiences={setExperiences}
                            tag={<StyledAddIcon/>}/>
                    </StyledIconBox>
                </StyledTopBox>
                <StyledBottomBox>
                    {experiences.sort((a,b) => a.id - b.id).map((experience) => (
                        <Box key={experience.id}>
                            <span>{`Experience ${experience.id}: ${experience.position}`}</span>
                            <StyledIconBox>
                            <CandidateExperienceModal
                                candidate={props}
                                experience={experience}
                                setExperiences={setExperiences}
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