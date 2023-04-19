import {StyledTopBox, StyledProfilePaper, StyledBottomBox, StyledIconBox} from "./CandidateProfile.styles";
import {ButtonBase} from "@mui/material";
import ProfileContainerTitle from "../atoms/ProfileContainerTitle";
import React, {useState} from "react";
import {StyledEditIcon} from "../atoms/StyledEditIcon";
import {StyledAddIcon} from "../atoms/StyledAddIcon";
import {StyledSchoolIcon} from "../atoms/StyledSchoolIcon";
import CandidateEducationModal from "./CandidateEducationModal";
import {useCandidateById} from "../../api/CandidateApi";
import {Grid} from "@mui/joy";
import {Img, StyledPaper} from "./JobOfferGrid.styles";
import img from "../../images/logo.png";
import Typography from "@mui/joy/Typography";


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
                    {educations.sort((a, b) => a.id - b.id).map((education) => (
                        <StyledPaper key={education.id} elevation={3} sx={{minWidth: '100%'}}>
                            <Grid container spacing={2} mt={1}>
                                <Grid item>
                                    <ButtonBase sx={{width: 100, height: 100}}>
                                        <Img alt="Employer logo" src={img}></Img>
                                    </ButtonBase>
                                </Grid>
                                <Grid item container>
                                    <Grid item>
                                        <Typography component="h1">
                                            {`${education.school}`}
                                        </Typography>
                                        <Typography component="h2">
                                            {`${education.degree}`}
                                        </Typography>
                                        <Typography component="h2">
                                            {`${education.fieldOfStudy}`}
                                        </Typography>
                                        <Typography variant="body2" gutterBottom>
                                            {`${education.startDate} - ${education.endDate}`}
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <StyledIconBox>
                                    <CandidateEducationModal
                                        candidate={props}
                                        education={education}
                                        setEducations={setEducations}
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