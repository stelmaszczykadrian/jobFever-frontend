import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import {JobTitleOnJobsCard, StyledPaperJobsCard} from "./JobsCard.styles";
import DialogActions from "@mui/material/DialogActions";
import Dialog from "@mui/material/Dialog";
import RedButton from "../atoms/RedButton";
import Typography from "@mui/joy/Typography";
import {useNavigate} from "react-router-dom";


export default function CandidateModal(props) {
    const navigate = useNavigate();
    const {showModal, handleModalClose, jobTitle, candidateData} = props;


    const handleClick = (candidateId) => {
        navigate(`/candidate/${candidateId}`);
    };

    return (
        <Dialog
            open={showModal}
            onClose={handleModalClose}
            maxWidth="sm"
            fullWidth
            >
            <DialogTitle sx={{textAlign: "center", fontWeight: 'bold'}} id="responsive-dialog-title">
                Applicants for : {jobTitle}
            </DialogTitle>
            <DialogContent>
                <DialogContentText component="legend" sx={{textAlign: "center"}}>
                    {candidateData.length > 0 ? (
                        candidateData.map((candidate) => (
                            <StyledPaperJobsCard key={candidate.id}>
                                <JobTitleOnJobsCard
                                    variant="h1"
                                    component="h1"
                                    onClick={() => handleClick(candidate.id)}
                                >
                                    {candidate.name}
                                </JobTitleOnJobsCard>
                            </StyledPaperJobsCard>
                        ))
                    ) : (
                        <Typography variant="h5">No candidates</Typography>
                    )}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <RedButton text="Close" onClick={handleModalClose} color="secondary"/>
            </DialogActions>
        </Dialog>
    );
}