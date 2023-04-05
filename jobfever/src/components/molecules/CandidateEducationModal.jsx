import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Input from "@mui/joy/Input";
import {useState} from "react";
import {StyledGridItem} from "../organisms/JobOfferFormContainer.styles";
import {RedButtonStyled} from "../atoms/RedButton.styles";
import CalendarForm from "../organisms/CalendarForm";
import {StyledAddIcon} from "../atoms/StyledAddIcon";
import IconButton from "@mui/material/IconButton";

export default function ResponsiveDialog() {
    const [open, setOpen] = React.useState(false);
    const [input, setInput] = useState({
        school: '',
        degree: '',
        filedOfStudy: '',
        startDate: '',
        endDate: '',
        description: '',
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
        // przesłanie danych z formularza na backend
    };

    return (
        <div>
            <IconButton onClick={handleClickOpen}>
                <StyledAddIcon/>
            </IconButton>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogTitle id="responsive-dialog-title">
                    {"Add education"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>School</DialogContentText>
                    <StyledGridItem>
                        <StyledGridItem>
                            <Input
                                placeholder="Ex. Boston University"
                                name="school"
                                value={input.school}
                                onChange={onInputChange}
                            />
                        </StyledGridItem>
                    </StyledGridItem>
                    <DialogContentText>Degree</DialogContentText>
                    <StyledGridItem>
                        <Input
                            placeholder="Ex. Bechelor's"
                            name="degree"
                            value={input.degree}
                            onChange={onInputChange}
                        />
                    </StyledGridItem>
                    <DialogContentText>Filed of study</DialogContentText>
                    <StyledGridItem>
                        <Input
                            placeholder="Ex. Economy"
                            name="filedOfStudy"
                            value={input.filedOfStudy}
                            onChange={onInputChange}
                        />
                    </StyledGridItem>
                    <StyledGridItem>
                        <DialogContentText>
                            Start date
                        </DialogContentText>
                        <DialogContentText>
                            End date
                        </DialogContentText>
                    </StyledGridItem>
                    <StyledGridItem>
                        <CalendarForm
                            name="startDate"
                            value={input.startDate}
                            onChange={onInputChange}/>
                        <CalendarForm
                            name="endDate"
                            value={input.endDate}
                            onChange={onInputChange}/>
                    </StyledGridItem>
                    <DialogContentText>
                        Description
                    </DialogContentText>
                    <StyledGridItem>
                        <Input
                            placeholder="Ex. Activity clubs, extra achievements"
                            name="description"
                            value={input.description}
                            onChange={onInputChange}
                        />
                    </StyledGridItem>
                </DialogContent>
                <DialogActions>
                    <RedButtonStyled onClick={handleClose}>
                        Discard
                    </RedButtonStyled>
                    <RedButtonStyled onClick={handleSave}>
                        Save
                    </RedButtonStyled>
                </DialogActions>
            </Dialog>
        </div>
    );
}