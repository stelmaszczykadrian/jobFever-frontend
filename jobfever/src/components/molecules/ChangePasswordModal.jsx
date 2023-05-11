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
import {changePassword, forgotPassword} from "../../api/AuthApi";

export default function ChangePasswordModal() {
    const [open, setOpen] = useState(false);
    const [input, setInput] = useState({
    });
    const [urlForPasswordChange, setUrlForPasswordChange] = useState("")
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
    const handleSave = async () => {
        const url = await forgotPassword(input.email)
        console.log(typeof url)
        changePassword(url, "222222")
        setOpen(false);
    };

    return (
        <div>
            <Link onClick={handleClickOpen}>You dont remember password?</Link>
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
                                    // value={formData.email}
                                    onChange={onInputChange}
                                    // onBlur={validateInput}
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
                        Try
                    </RedButtonStyled>
                </DialogActions>
            </Dialog>
        </div>
    );

}