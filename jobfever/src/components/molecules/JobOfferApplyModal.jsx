import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {StyledGridItem} from "../organisms/JobOfferFormContainer.styles";
import {RedButtonStyled} from "../atoms/RedButton.styles";
import {Checkbox} from "@mui/joy";
import {FormControlLabel} from "@mui/material";
import StyledText from "../atoms/StyledText";
import Cookies from "js-cookie";

export default function JobOfferApplyModal() {

    const title = "Are You sure that You wanna apply for this offer?";
    let jwt = Cookies.get("jwt")
    const [open, setOpen] = React.useState(false);
    const [fullWidth, setFullWidth] = React.useState(true);
    const [maxWidth, setMaxWidth] = React.useState('sm');
    const [state, setState] = React.useState({
        r1: false,
        r2: false,
    });

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleChange = (event) => {
        // const error = validateInput(state);
        setState({
            ...state,
            [event.target.name]: event.target.checked,
            // errors: {...state.errors, [event.target.name]: error}
        });
    };

    // const validateInput = (state) => {
    //     switch (state.r1, state.r2) {
    //         case state.r1:
    //             return state.r1 !== false ? '' : 'You have to accept the regulations!';
    //         case state.r2:
    //             return state.r2 !== false ? '' : 'You have to accept the regulations!';
    //         default:
    //             return '';
    //     }
    // };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSave = async () => {
        setOpen(false);
        };
    const RenderApplyButton = () => {
        if (jwt){
            if (JSON.parse(jwt).role === "CANDIDATE"){
                return (
                    <RedButtonStyled onClick={handleClickOpen}>
                        Apply
                    </RedButtonStyled>
                )
            }
        }
    }
    return (
        <div>
            <RenderApplyButton />
            <Dialog
                fullWidth={fullWidth}
                maxWidth={maxWidth}
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogTitle sx={{textAlign : "center"}} id="responsive-dialog-title">
                    {title}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText component="legend" sx={{textAlign : "center"}}> If You're sure, please accept the RODO to continue application process.</DialogContentText>
                    <p/>
                    <StyledGridItem>
                        <FormControlLabel control={<Checkbox
                            color="danger"
                            onChange={handleChange}
                            // onBlur={validateInput}
                            name = "r1"/>}
                         label="I hereby give consent for my personal data to be processed for the purpose of conducting recruitment for the position for which I am applying."/>
                    </StyledGridItem>
                    <p/>
                    <StyledGridItem>
                        <FormControlLabel control={<Checkbox color="danger"
                             onChange={handleChange}
                             // onBlur={validateInput}
                             name = "r2"/>}
                         label="I also consent to processing of my personal data for the purposes of any future recruitment processes."/>
                        {state.r1.errors && <StyledText
                            tag="span"
                            color="red"
                            text={state.r1.errors}
                        />}
                    </StyledGridItem>
                </DialogContent>
                <DialogActions>
                    <RedButtonStyled onClick={handleClose}>
                        Discard
                    </RedButtonStyled>
                    <RedButtonStyled onClick={handleSave}>
                        Apply
                    </RedButtonStyled>
                </DialogActions>
            </Dialog>
        </div>
    );
}