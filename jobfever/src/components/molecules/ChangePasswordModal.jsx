import * as React from "react";
import {useState} from "react";
import IconButton from "@mui/material/IconButton";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import {RedButtonStyled} from "../atoms/RedButton.styles";
import {Link} from "@mui/joy";
import {MailOutline} from "@material-ui/icons";
import {StyledEmailInputValidation} from "../organisms/CandidateRegisterRightContainer.styles";
import {sendEmailForPasswordChange} from "../../api/AuthApi";
import EditableModalInput from "../atoms/EditableModalInput";
import {GoogleReCaptcha, GoogleReCaptchaProvider} from "react-google-recaptcha-v3";
import {StyledDontRememberPasswordLink} from "../atoms/StyledLink";

export default function ChangePasswordModal() {
    const [open, setOpen] = useState(false);
    const [input, setInput] = useState({});
    let isVerified = false;
    const onInputChange = e => {
        const {name, value} = e.target;
        setInput(prev => ({
            ...prev,
            [name]: value
        }));
    }
    const handleVerify = () => {
        isVerified = true;
    }
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const handleSave = async () => {
        if (isVerified) {
            await sendEmailForPasswordChange(input.email)
        }
        setOpen(false);
    };

    return (
        <div>
            <StyledDontRememberPasswordLink onClick={handleClickOpen}>You don't remember
                password?</StyledDontRememberPasswordLink>
            <Dialog PaperProps={{style: {borderRadius: "20px", maxWidth: "520px", padding: "0.5%"}}}
                    fullWidth
                    maxWidth='sm'
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="responsive-dialog-title"
            >
                <DialogTitle sx={{textAlign: "center", fontWeight: 'bold'}} id="responsive-dialog-title">
                    Forgot your account’s password? Enter your email and we’ll send you a recovery link.
                </DialogTitle>
                <StyledEmailInputValidation>
                    <EditableModalInput
                        type="text"
                        name="email"
                        placeholder="ex. jobFever@email.com"
                        label="ex. jobFever@email.com"
                        onChange={onInputChange}
                        fullWidth
                        isRequired={false}
                    />
                    <IconButton sx={{color: 'white'}}>
                        <MailOutline/>
                    </IconButton>
                </StyledEmailInputValidation>
                <DialogActions>
                    <RedButtonStyled onClick={handleClose}>
                        Discard
                    </RedButtonStyled>
                    <RedButtonStyled onClick={handleSave}>
                        Send
                    </RedButtonStyled>
                    <GoogleReCaptchaProvider reCaptchaKey="6LfrfCwmAAAAABYCQj15CnQgsCuZ6djnXOoyn33M">
                        <GoogleReCaptcha onVerify={handleVerify}/>
                    </GoogleReCaptchaProvider>
                </DialogActions>
            </Dialog>
        </div>
    );
}
