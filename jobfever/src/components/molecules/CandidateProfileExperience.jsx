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
import {deleteCandidateExperience, useCandidateById} from "../../api/CandidateApi";
import {Grid} from "@mui/joy";
import {Img, StyledPaper} from "./JobOfferGrid.styles";
import img from "../../images/logos/logo.png";
import Typography from "@mui/joy/Typography";
import IconButton from "@mui/material/IconButton";
import {StyledDeleteIcon} from "../atoms/StyledDeleteIcon";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Dialog from "@mui/material/Dialog";
import {RedButtonStyled} from "../atoms/RedButton.styles";
import Cookies from "js-cookie";

export default function CandidateProfileExperience(props) {

    const {data} = useCandidateById(props.id);
    const [experiences, setExperiences] = useState([]);
    const [deleteExperienceId, setDeleteExperienceId] = useState(null);
    const [isDeleteConfirmationOpen, setIsDeleteConfirmationOpen] = useState(false);

    React.useEffect(() => {
        if (data.candidateExperiences) {
            setExperiences(data.candidateExperiences);
        }
    }, [data.candidateExperiences]);


    const handleDeleteExperience = (experienceId) => {
        setDeleteExperienceId(experienceId);
        setIsDeleteConfirmationOpen(true);
    };

    const handleConfirmationDelete = async () => {
        if (deleteExperienceId) {
            const response = await deleteCandidateExperience(props.id, deleteExperienceId);
            if (response.status === 200) {
                setExperiences(experiences.filter(e => e.id !== deleteExperienceId));
            }
        }
        setIsDeleteConfirmationOpen(false);
    };

    const handleCancelDelete = () => {
        setIsDeleteConfirmationOpen(false);
    };

    const RenderCandidateProfileExperienceModal = ({experience, candidate, setExperiences, isNew}) => {
        if (candidate.id === JSON.parse(Cookies.get("jwt")).candidate_id.toString()) {
            return (
                <StyledIconBox>
                    <CandidateExperienceModal
                        candidate={candidate}
                        experience={experience}
                        setExperiences={setExperiences}
                        isNew={isNew}
                        tag={<StyledEditIcon/>}
                    />
                    <IconButton onClick={() => handleDeleteExperience(experience.id)}>
                        <StyledDeleteIcon/>
                    </IconButton>
                </StyledIconBox>
            )
        }
    }
    const RenderCandidateProfileExperienceModalAddButton = ({candidate, setExperiences}) => {
        if (candidate.id === JSON.parse(Cookies.get("jwt")).candidate_id.toString()) {
            return (
                <StyledIconBox>
                    <CandidateExperienceModal
                        candidate={props}
                        isNew
                        setExperiences={setExperiences}
                        tag={<StyledAddIcon/>}/>
                </StyledIconBox>
            )
        }
    }

    if (!data || !data.candidateExperiences) {
        return <div>Loading...</div>;
    } else {
        return (
            <StyledProfilePaper>
                <StyledTopBox>
                    <StyledWorkIcon/>
                    <ProfileContainerTitle text={'Experience'}/>
                    <RenderCandidateProfileExperienceModalAddButton
                        candidate={props}
                        setExperiences={setExperiences}
                    />
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
                                    <RenderCandidateProfileExperienceModal
                                        experience={experience}
                                        candidate={props}
                                        setExperiences={setExperiences}
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
                        <Typography>Are you sure you want to delete this experience?</Typography>
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