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
import {editCandidateEducation, addCandidateEducation} from "../../api/CandidateApi";

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
                <DialogTitle id="responsive-dialog-title">
                    {title}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>School</DialogContentText>
                    <StyledGridItem>
                        <StyledGridItem>
                            <Input
                                placeholder="Ex. Boston University"
                                name="school"
                                value={school}
                                onChange={(e) => setSchool(e.target.value)}
                            />
                        </StyledGridItem>
                    </StyledGridItem>
                    <p>
                        <DialogContentText>Degree</DialogContentText>
                        <StyledGridItem>
                            <Input
                                placeholder="Ex. Bechelor's"
                                name="degree"
                                value={degree}
                                onChange={(e) => setDegree(e.target.value)}
                            />
                        </StyledGridItem>
                    </p>
                    <DialogContentText>Filed of study</DialogContentText>
                    <StyledGridItem>
                        <Input
                            placeholder="Ex. Economy"
                            name="fieldOfStudy"
                            value={fieldOfStudy}
                            onChange={(e) => setFieldOfStudy(e.target.value)}
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
                                    value={startDate}
                                    onChange={(e) => setStartDate(e.target.value)}
                                />
                            </StyledGridItem>
                            <StyledGridItem>
                                <DialogContentText>
                                    End date
                                </DialogContentText>
                                <CalendarForm
                                    name="endDate"
                                    value={endDate}
                                    onChange={(e) => setEndDate(e.target.value)}
                                />
                            </StyledGridItem>
                        </StyledGridContainer>
                    </p>
                    <DialogContentText>
                        Description
                    </DialogContentText>
                    <StyledGridItem>
                        <Input
                            placeholder="Ex. Activity clubs, extra achievements"
                            name="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
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