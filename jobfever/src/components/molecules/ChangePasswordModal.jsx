import * as React from "react";
import {useState} from "react";
import IconButton from "@mui/material/IconButton";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import {RedButtonStyled} from "../atoms/RedButton.styles";
import {Link} from "@mui/joy";
import Input from "@mui/joy/Input";
import {MailOutline} from "@material-ui/icons";
import {StyledEmailInputValidation} from "../organisms/CandidateRegisterRightContainer.styles";
import {sendEmailForPasswordChange} from "../../api/AuthApi";
import {GoogleReCaptcha, GoogleReCaptchaProvider} from "react-google-recaptcha-v3";
import {StyledDontRememberPasswordLink} from "../atoms/StyledLink";

export default function ChangePasswordModal() {
    const [open, setOpen] = useState(false);
    const [input, setInput] = useState({
    });
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
        console.log(isVerified)
    }
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const handleSave = async () => {
        if (isVerified){
            await sendEmailForPasswordChange(input.email)
        }
        setOpen(false);
    };

    return (
        <div>
            {/*<Link sx={{color: 'red', textAlign: 'center'}} onClick={handleClickOpen}>You dont remember password?</Link>*/}
            <StyledDontRememberPasswordLink onClick={handleClickOpen}>You dont remember password?</StyledDontRememberPasswordLink>
            <Dialog
                fullWidth
                maxWidth="sm"
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogTitle sx={{textAlign: "center", fontWeight: 'bold'}} id="responsive-dialog-title">
                    Insert email
                </DialogTitle>
                            <StyledEmailInputValidation>
                                <Input
                                    type="text"
                                    name="email"
                                    placeholder='ex. jobFever@email.com'
                                    onChange={onInputChange}
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
                        <GoogleReCaptcha onVerify={handleVerify} />
                    </GoogleReCaptchaProvider>
                </DialogActions>
            </Dialog>
        </div>
    );

}