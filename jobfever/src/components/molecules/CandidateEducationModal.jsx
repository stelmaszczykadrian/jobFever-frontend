import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import {useState} from "react";
import {StyledGridContainer, StyledGridItem} from "../organisms/JobOfferFormContainer.styles";
import {RedButtonStyled} from "../atoms/RedButton.styles";
import CalendarForm from "../organisms/CalendarForm";
import IconButton from "@mui/material/IconButton";
import {editCandidateEducation, addCandidateEducation} from "../../api/CandidateApi";
import {TextField} from "@mui/material";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

export default function CandidateEducationModal(props) {
    const title = (props.isNew ? "Add Education" : "Edit education");
    const education = (props.isNew ? {
        degree: '',
        school: '',
        fieldOfStudy: '',
        startDate: '',
        endDate: '',
        description: ''
    } : props.education);
    const candidate = props.candidate;

    const [open, setOpen] = React.useState(false);
    const [fullWidth, setFullWidth] = React.useState(true);
    const [maxWidth, setMaxWidth] = React.useState('sm');

    const [school, setSchool] = useState(education.school);
    const [degree, setDegree] = useState(education.degree);
    const [fieldOfStudy, setFieldOfStudy] = useState(education.fieldOfStudy);
    const [startDate, setStartDate] = useState(education.startDate);
    const [endDate, setEndDate] = useState(education.endDate);
    const [description, setDescription] = useState(education.description);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSave = async () => {
        setOpen(false);
        const updatedEducationData = {
            degree: degree,
            description: description,
            endDate: endDate,
            fieldOfStudy: fieldOfStudy,
            school: school,
            startDate: startDate,
        };

        let eduBeforeChange = props.education;

        if (props.isNew) {
            const temp_id = "temp-" + crypto.randomUUID();
            props.setEducations((educations) => {
                educations.push({...updatedEducationData, id: temp_id});
                return [...educations];
            });
            await addCandidateEducation(candidate.id, updatedEducationData)
                .then(res => {
                        if (res.status != 200) {
                            props.setEducations((educations) => {
                                educations.pop();
                                return [...educations];
                            });
                        } else {
                            props.setEducations((educations) => {
                                let eduIdx = educations.findIndex((edu => edu.id == temp_id));
                                educations[eduIdx] = {...educations[eduIdx], id: res.data};
                                return [...educations];
                            })
                        }
                    }
                )

        } else {
            props.setEducations((educations) => {
                const eduIdx = educations.findIndex((edu => edu.id == education.id));
                educations[eduIdx] = {...educations[eduIdx], ...updatedEducationData};
                return [...educations];
            });
            await editCandidateEducation(candidate.id, education.id, updatedEducationData)
                .then(res => {
                        if (res.status != 200) {
                            props.setEducations((educations) => {
                                const eduIdx = educations.findIndex((edu => edu.id == education.id));
                                educations[eduIdx] = {...educations[eduIdx], ...eduBeforeChange};
                                return [...educations];
                            });
                        }
                    }
                )
        }
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
                <DialogTitle id="responsive-dialog-title" mt={2} ml={1}>
                    {title}
                </DialogTitle>
                <DialogContent>
                    <StyledGridItem>
                            <TextField
                                required
                                color="error"
                                placeholder="Ex. Boston University"
                                label="School"
                                value={school}
                                onChange={(e) => setSchool(e.target.value)}
                                fullWidth
                            />
                    </StyledGridItem>
                        <StyledGridItem>
                            <TextField
                                required
                                color="error"
                                placeholder="Ex. Bechelor's"
                                label="Degree"
                                value={degree}
                                onChange={(e) => setDegree(e.target.value)}
                                fullWidth
                            />
                        </StyledGridItem>
                    <StyledGridItem>
                        <TextField
                            required
                            color="error"
                            placeholder="Ex. Economy"
                            label="Field of study"
                            value={fieldOfStudy}
                            onChange={(e) => setFieldOfStudy(e.target.value)}
                            fullWidth
                        />
                    </StyledGridItem>
                        <StyledGridContainer>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <StyledGridItem>
                                <CalendarForm
                                    name="Start date"
                                    date={startDate}
                                    setDate={setStartDate}
                                />
                            </StyledGridItem>
                            <StyledGridItem>
                                <CalendarForm
                                    name="End date"
                                    date={endDate}
                                    setDate={setEndDate}
                                />
                            </StyledGridItem>
                                </LocalizationProvider>

                        </StyledGridContainer>
                    <StyledGridItem>
                        <TextField
                            required
                            color="error"
                            placeholder="Ex. Activity clubs, extra achievements"
                            label="Description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            fullWidth
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