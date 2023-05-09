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
import {applyForJob} from "../../api/JobsApi";
import {useState} from "react";

export default function JobOfferApplyModal(props) {
    const title = "Are You sure that You wanna apply for this offer?";
    let jwt = Cookies.get("jwt")
    const [open, setOpen] = useState(false);
    const [fullWidth] = useState(true);
    const [maxWidth] = useState('sm');
    const [appliedText, setAppliedText] = useState("");
    const [isFirstBoxChecked, setIsFirstBoxChecked] = useState(false)
    const [isSecondBoxChecked, setIsSecondBoxChecked] = useState(false)

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    function timeout(delay) {
        return new Promise( res => setTimeout(res, delay) );
    }
    const handleSave = async () => {
        const message = await applyForJob(props.jobId, JSON.parse(jwt).candidate_id)
        setAppliedText(message)
        await timeout(2000);
        setOpen(false);
        setAppliedText("")
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
                            onChange={(e) => {
                                setIsFirstBoxChecked(e.target.checked)
                        }}
                            name = "r1"/>}
                         label="I hereby give consent for my personal data to be processed for the purpose of conducting recruitment for the position for which I am applying."/>
                    </StyledGridItem>
                    <p/>
                    <StyledGridItem>
                        <FormControlLabel control={<Checkbox color="danger"
                             onChange={(e) => {
                                 setIsSecondBoxChecked(e.target.checked)
                             }}
                             name = "r2"/>}
                         label="I also consent to processing of my personal data for the purposes of any future recruitment processes."/>
                    </StyledGridItem>
                    <StyledText tag={"h4"} color={"black"} text={appliedText} />
                </DialogContent>
                <DialogActions>
                    <RedButtonStyled onClick={handleClose}>
                        Discard
                    </RedButtonStyled>
                    {isFirstBoxChecked && isSecondBoxChecked ? (
                        <RedButtonStyled disabled={false} onClick={handleSave}>
                            Apply
                        </RedButtonStyled>) : (
                        <RedButtonStyled disabled={true}>
                            Apply
                        </RedButtonStyled>
                    )
                    }
                </DialogActions>
            </Dialog>
        </div>
    );
}