import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Input from "@mui/joy/Input";
import {useState} from "react";
import {StyledGridContainer, StyledGridItem} from "../organisms/JobOfferFormContainer.styles";
import {RedButtonStyled} from "../atoms/RedButton.styles";
import CalendarForm from "../organisms/CalendarForm";
import IconButton from "@mui/material/IconButton";

export default function CandidateExperienceModal(props) {

    const [open, setOpen] = React.useState(false);
    const [fullWidth, setFullWidth] = React.useState(true);
    const [maxWidth, setMaxWidth] = React.useState('sm');
    const [input, setInput] = useState({
        position: '',
        companyName: '',
        location: '',
        startDate: '',
        endDate: '',
        industry: '',
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
                {props.tag}
            </IconButton>
            <Dialog
                fullWidth={fullWidth}
                maxWidth={maxWidth}
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogTitle id="responsive-dialog-title">
                    {props.text}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>Position</DialogContentText>
                    <StyledGridItem>
                        <StyledGridItem>
                            <Input
                                placeholder="Ex. Frontend developer"
                                name="position"
                                value={input.position}
                                onChange={onInputChange}
                            />
                        </StyledGridItem>
                    </StyledGridItem>
                    <p>
                        <DialogContentText>Company name</DialogContentText>
                        <StyledGridItem>
                            <Input
                                placeholder="Ex. jobFever"
                                name="companyName"
                                value={input.companyName}
                                onChange={onInputChange}
                            />
                        </StyledGridItem>
                    </p>
                    <DialogContentText>location</DialogContentText>
                    <StyledGridItem>
                        <Input
                            placeholder="Ex. London"
                            name="location"
                            value={input.filedOfStudy}
                            onChange={onInputChange}
                        />
                    </StyledGridItem>
                    <p>
                        <StyledGridContainer>
                            <StyledGridItem>
                                <DialogContentText>
                                    Start date
                                </DialogContentText>
                                <CalendarForm
                                    name="startDate"
                                    value={input.startDate}
                                    onChange={onInputChange}/>
                            </StyledGridItem>
                            <StyledGridItem>
                                <DialogContentText>
                                    End date
                                </DialogContentText>
                                <CalendarForm
                                    name="endDate"
                                    value={input.endDate}
                                    onChange={onInputChange}/>
                            </StyledGridItem>
                        </StyledGridContainer>
                    </p>
                    <DialogContentText>
                        Industry
                    </DialogContentText>
                    <StyledGridItem>
                        <Input
                            placeholder="Ex. Gaming, Software, Hardware, IT consultant"
                            name="industry"
                            value={input.industry}
                            onChange={onInputChange}
                        />
                    </StyledGridItem>
                    <p>
                    <DialogContentText>
                        Description
                    </DialogContentText>
                    <StyledGridItem>
                        <Input
                            placeholder="Ex. Work responsibilities"
                            name="description"
                            value={input.description}
                            onChange={onInputChange}
                        />
                    </StyledGridItem>
                    </p>
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