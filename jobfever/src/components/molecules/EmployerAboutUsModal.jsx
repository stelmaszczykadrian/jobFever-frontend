import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import {useState} from "react";
import {StyledGridItem, StyledTextarea} from "../organisms/JobOfferFormContainer.styles";
import {RedButtonStyled} from "../atoms/RedButton.styles";
import IconButton from "@mui/material/IconButton";
import {editEmployer} from "../../api/EmployersApi";
import {useNavigate} from "react-router-dom";

export default function EmployerAboutUsModal(props) {
    const [open, setOpen] = React.useState(false);
    const navigate = useNavigate();
    const [input, setInput] = useState({
        aboutMe: props.previousAboutUs,
    });

    const onInputChange = e => {
        const {name, value} = e.target;
        setInput(prev => ({
            ...prev,
            [name]: value
        }));
    }

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSave = () => {
        setOpen(false);

        editEmployer(props.id,null,null,null, null,input.aboutMe, null, null)
        navigate(`/employer/${props.id}`);
        window.location.reload();
    };

    const isSaveDisabled = !input.aboutMe;

    return (
        <div>
            <IconButton onClick={handleClickOpen}>
                {props.tag}
            </IconButton>
            <Dialog
                fullWidth
                maxWidth="sm"
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogTitle sx={{textAlign: "center", fontWeight: 'bold'}} id="responsive-dialog-title">
                    About Us
                </DialogTitle>
                <DialogContent>
                    <StyledGridItem>
                        <StyledGridItem>
                            <StyledTextarea
                                placeholder="Write some information about your company"
                                name="aboutMe"
                                value={input.aboutMe || ''}
                                onChange={onInputChange}
                            />
                        </StyledGridItem>
                    </StyledGridItem>
                </DialogContent>
                <DialogActions>
                    <RedButtonStyled onClick={handleClose}>
                        Discard
                    </RedButtonStyled>
                    <RedButtonStyled onClick={handleSave} disabled={isSaveDisabled}>
                        Save
                    </RedButtonStyled>
                </DialogActions>
            </Dialog>
        </div>
    );
}
