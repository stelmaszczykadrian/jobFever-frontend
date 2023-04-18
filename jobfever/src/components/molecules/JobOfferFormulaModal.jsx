
import {Modal} from "@mui/joy";
import Box from "@mui/material/Box";
import Typography from "@mui/joy/Typography";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function JobOfferFormulaModal({ open, handleClose,errorMessage }) {
    const handleCloseModal = () => {
        handleClose();
    };

    return (
        <Modal
            open={open}
            onClose={handleCloseModal}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>

                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    {errorMessage ? (
                        <div>
                            {errorMessage.map((msg, index) => (
                                <div key={index}>{msg}</div>
                            ))}
                        </div>
                    ) : (
                        <div>
                            <h3>Job added successfully!</h3>
                            <p>You will be redirected to the jobs page shortly.</p>
                        </div>
                    )}
                </Typography>
            </Box>
        </Modal>
    );
}