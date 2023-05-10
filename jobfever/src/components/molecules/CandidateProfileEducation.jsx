import {StyledTopBox, StyledProfilePaper, StyledBottomBox, StyledIconBox} from "./CandidateProfile.styles";
import {ButtonBase} from "@mui/material";
import ProfileContainerTitle from "../atoms/ProfileContainerTitle";
import React, {useState} from "react";
import {StyledEditIcon} from "../atoms/StyledEditIcon";
import {StyledAddIcon} from "../atoms/StyledAddIcon";
import {StyledSchoolIcon} from "../atoms/StyledSchoolIcon";
import CandidateEducationModal from "./CandidateEducationModal";
import {deleteCandidateEducation, useCandidateById} from "../../api/CandidateApi";
import {Grid} from "@mui/joy";
import {Img, StyledPaper} from "./JobOfferGrid.styles";
import img from "../../images/logos/logo.png";
import Typography from "@mui/joy/Typography";
import {StyledDeleteIcon} from "../atoms/StyledDeleteIcon";
import IconButton from "@mui/material/IconButton";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import {RedButtonStyled} from "../atoms/RedButton.styles";
import Dialog from "@mui/material/Dialog";
import Cookies from "js-cookie";

export default function CandidateProfileEducation(props) {

    const {data} = useCandidateById(props.id);
    const [educations, setEducations] = useState([]);
    const [deleteEducationId, setDeleteEducationId] = useState(null);
    const [isDeleteConfirmationOpen, setIsDeleteConfirmationOpen] = useState(false);

    React.useEffect(() => {
        if (data.candidateEducations) {
            setEducations(data.candidateEducations);
        }
    }, [data.candidateEducations]);


    const handleDeleteEducation = (educationId) => {
        setDeleteEducationId(educationId);
        setIsDeleteConfirmationOpen(true);
    };

    const handleConfirmationDelete = async () => {
        if (deleteEducationId) {
            const response = await deleteCandidateEducation(props.id, deleteEducationId);
            if (response.status === 200) {
                setEducations(educations.filter(e => e.id !== deleteEducationId));
            }
        }
        setIsDeleteConfirmationOpen(false);
    };

    const handleCancelDelete = () => {
        setIsDeleteConfirmationOpen(false);
    };

    const RenderCandidateProfileEducationModalAddButton = ({candidate}) => {
        if (candidate.id === JSON.parse(Cookies.get("jwt")).candidate_id.toString()) {
            return (
                <StyledIconBox>
                    <CandidateEducationModal
                        candidate={props}
                        isNew
                        setEducations={setEducations}
                        tag={<StyledAddIcon/>}
                    />
                </StyledIconBox>
            )
        }
    }

    const RenderCandidateProfileEducationModal = ({education, candidate, setEducations, isNew}) => {
        if (candidate.id === JSON.parse(Cookies.get("jwt")).candidate_id.toString()) {
            return (
                <StyledIconBox>
                    <CandidateEducationModal
                        candidate={props}
                        education={education}
                        setEducations={setEducations}
                        isNew={false}
                        tag={<StyledEditIcon/>}
                    />
                    <IconButton onClick={() => handleDeleteEducation(education.id)}>
                        <StyledDeleteIcon/>
                    </IconButton>
                </StyledIconBox>
            )
        }
    }

    if (!data || !data.candidateEducations) {
        return <div>Loading...</div>;
    } else {
        return (
            <StyledProfilePaper>
                <StyledTopBox>
                    <StyledSchoolIcon/>
                    <ProfileContainerTitle text={'Education'}/>
                    <RenderCandidateProfileEducationModalAddButton
                        candidate={props}
                        setEducations={setEducations}
                    />
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
                                    <RenderCandidateProfileEducationModal
                                        education={education}
                                        candidate={props}
                                        setEducations={setEducations}
                                        isNew={false}
                                    />
                                </StyledIconBox>
                            </Grid>
                        </StyledPaper>
                    ))}
                </StyledBottomBox>
                <Dialog open={isDeleteConfirmationOpen} onClose={handleCancelDelete}>
                    <DialogTitle>Confirm Delete</DialogTitle>
                    <DialogContent>
                        <Typography>Are you sure you want to delete this education?</Typography>
                    </DialogContent>
                    <DialogActions>
                        <RedButtonStyled onClick={handleConfirmationDelete}>Delete</RedButtonStyled>
                        <RedButtonStyled onClick={handleCancelDelete}>Cancel</RedButtonStyled>
                    </DialogActions>
                </Dialog>
            </StyledProfilePaper>
        );
    }
}