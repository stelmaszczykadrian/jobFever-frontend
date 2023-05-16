import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import Typography from "@mui/joy/Typography";
import DialogActions from "@mui/material/DialogActions";
import {RedButtonStyled} from "../atoms/RedButton.styles";
import Dialog from "@mui/material/Dialog";
import React from "react";

export const DeleteConfirmationModal = (props) => {

    return <Dialog open={props.isOpen} onClose={props.handleCancel}>
        <DialogTitle>Confirm Delete</DialogTitle>
        <DialogContent>
            <Typography>Are you sure you want to delete this offer?</Typography>
        </DialogContent>
        <DialogActions>
            <RedButtonStyled onClick={props.handleConfirm}>Delete</RedButtonStyled>
            <RedButtonStyled onClick={props.handleCancel}>Cancel</RedButtonStyled>
        </DialogActions>
    </Dialog>
}