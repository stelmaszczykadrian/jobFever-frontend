import {
    StyledTopBox,
    StyledProfilePaper,
    StyledBottomBox, StyledIconBox
} from "./CandidateProfile.styles";
import {ButtonBase} from "@mui/material";
import ProfileContainerTitle from "../atoms/ProfileContainerTitle";
import React, {useState} from "react";
import {StyledEditIcon} from "../atoms/StyledEditIcon";
import {StyledWorkIcon} from "../atoms/StyledWorkIcon";
import {StyledAddIcon} from "../atoms/StyledAddIcon";
import CandidateExperienceModal from "./CandidateExperienceModal";
import {useCandidateById} from "../../api/CandidateApi";
import {Grid} from "@mui/joy";
import {Img, StyledPaper} from "./JobOfferGrid.styles";
import img from "../../images/logo.png";
import Typography from "@mui/joy/Typography";

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
                    {experiences.sort((a, b) => a.id - b.id).map((experience) => (
                        <StyledPaper key={experience.id} elevation={3} sx={{minWidth: '100%'}}>
                            <Grid container spacing={2} mt={1}>
                                <Grid item>
                                    <ButtonBase sx={{width: 100, height: 100}}>
                                        <Img alt="Employer logo" src={img}></Img>
                                    </ButtonBase>
                                </Grid>
                                <Grid item container>
                                    <Grid item>
                                        <Typography component="h1">
                                            {`${experience.position}`}
                                        </Typography>
                                        <Typography component="h2">
                                            {`${experience.companyName}`}
                                        </Typography>
                                        <Typography component="h2">
                                            {`${experience.industry}`}
                                        </Typography>
                                        <Typography variant="body2">
                                            {`${experience.location}`}
                                        </Typography>
                                        <Typography variant="body2">
                                            {`${experience.startDate} - ${experience.endDate}`}
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <StyledIconBox>
                                    <CandidateExperienceModal
                                        candidate={props}
                                        experience={experience}
                                        setExperiences={setExperiences}
                                        isNew={false}
                                        tag={<StyledEditIcon/>}
                                    />
                                </StyledIconBox>
                            </Grid>
                        </StyledPaper>
                    ))}
                </StyledBottomBox>
            </StyledProfilePaper>
        );
    }
}