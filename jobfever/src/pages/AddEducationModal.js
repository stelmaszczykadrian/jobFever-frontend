import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useTheme } from '@mui/material/styles';
import {Fab} from "@mui/material";
import {StyledCurrencyType, StyledGridItem } from "../components/organisms/JobOfferFormContainer.styles";
import Input from "@mui/joy/Input";
import {useState} from "react";
import CalendarForm from "../components/organisms/CalendarForm";
import {RedButtonStyled} from "../components/atoms/RedButton.styles";


export default function ResponsiveDialog() {
    const [open, setOpen] = React.useState(false);

    const fullWidth = React.useState('lg');

    const [input, setInput] = useState({
        school: '',
        degree: '',
        filedOfStudy: '',
        startDate: '',
        endDate: '',
        activities: '',
    });

    const currencyMonth = [
        {value: 'january', label: 'January'},
        {value: 'february', label: 'February'},
        {value: 'march', label: 'March'},
        {value: 'april', label: 'April'},
        {value: 'may', label: 'May'},
        {value: 'june', label: 'June'},
        {value: 'july', label: 'July'},
        {value: 'august', label: 'August'},
        {value: 'september', label: 'September'},
        {value: 'october', label: 'October'},
        {value: 'november', label: 'November'},
        {value: 'december', label: 'December'},
    ];

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

    return (
        <div>
            <RedButtonStyled onClick={handleClickOpen}/> //guzik do podpięcia
            <Dialog
                fullWidth={fullWidth}
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogTitle id="responsive-dialog-title">
                    {"Add education"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        School
                    </DialogContentText>
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
                    <DialogContentText>
                        Degree
                    </DialogContentText>
                    <StyledGridItem>
                        <Input
                            placeholder="Ex. Bechelor's"
                            name="degree"
                            value={input.degree}
                            onChange={onInputChange}
                        />
                    </StyledGridItem>
                    <DialogContentText>
                        Filed of study
                    </DialogContentText>
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
                    <RedButtonStyled autoFocus onClick={handleClose}>
                        Discard </RedButtonStyled>
                    <RedButtonStyled onClick={handleClose} autoFocus>
                        Save
                    </RedButtonStyled>
                </DialogActions>
            </Dialog>
        </div>
    );
}