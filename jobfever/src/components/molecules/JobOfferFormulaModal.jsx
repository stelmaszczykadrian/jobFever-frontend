import {Modal} from "@mui/joy";
import Typography from "@mui/joy/Typography";
import {StyledModal} from "./JobOfferFormulaModal.styles";
import Container from "@mui/material/Container";


export default function JobOfferFormulaModal({ open, handleClose, errorMessage }) {
    const handleCloseModal = () => handleClose();

    return (
        <Modal
            open={open}
            onClose={handleCloseModal}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <StyledModal>
                <Container id="modal-modal-description">
                    {errorMessage ? (
                        <Container>
                            {errorMessage.map((msg, index) => (
                                <Typography key={index}>{msg}</Typography>
                            ))}
                        </Container>
                    ) : (
                        <Container>
                            <Typography>Job added successfully!</Typography>
                            <Typography>You will be redirected to the jobs page shortly.</Typography>
                        </Container>
                    )}
                </Container>
            </StyledModal>
        </Modal>
    );
}