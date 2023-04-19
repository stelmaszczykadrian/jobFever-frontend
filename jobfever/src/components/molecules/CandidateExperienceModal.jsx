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
import {
    addCandidateEducation,
    addCandidateExperience,
    editCandidateEducation,
    editCandidateExperience
} from "../../api/CandidateApi";

export default function CandidateExperienceModal(props) {
    const title = (props.isNew ? "Add Experience" : "Edit experience");
    const experience = (props.isNew ? {
        position: '',
        companyName: '',
        location: '',
        startDate: '',
        endDate: '',
        industry: '',
        description: ''
    } : props.experience);
    const candidate = props.candidate;

    const [open, setOpen] = React.useState(false);
    const [fullWidth, setFullWidth] = React.useState(true);
    const [maxWidth, setMaxWidth] = React.useState('sm');

    const [position, setPosition] = useState(experience.position);
    const [companyName, setCompanyName] = useState(experience.companyName);
    const [location, setLocation] = useState(experience.location);
    const [startDate, setStartDate] = useState(experience.startDate);
    const [endDate, setEndDate] = useState(experience.endDate);
    const [industry, setIndustry] = useState(experience.industry);
    const [description, setDescription] = useState(experience.description);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSave = async () => {
        setOpen(false);
        const updatedExperienceData = {
            position: position,
            companyName: companyName,
            location: location,
            startDate: startDate,
            endDate: endDate,
            industry: industry,
            description: description,
        }

        let expBeforeChange = props.experience;

        if (props.isNew) {
            const temp_id = "temp-" + crypto.randomUUID();
            props.setExperiences((experiences) => {
                experiences.push({...updatedExperienceData, id: temp_id});
                return [...experiences];
            });
            await addCandidateExperience(candidate.id, updatedExperienceData)
                .then(res => {
                        if (res.status != 200) {
                            props.setExperiences((experiences) => {
                                experiences.pop();
                                return [...experiences];
                            });
                        } else {
                            props.setExperiences((experiences) => {
                                let expIdx = experiences.findIndex((exp => exp.id == temp_id));
                                experiences[expIdx] = {...experiences[expIdx], id: res.data};
                                return [...experiences];
                            })
                        }
                    }
                )

        } else {
            props.setExperiences((experiences) => {
                const expIdx = experiences.findIndex((exp => exp.id == experience.id));
                experiences[expIdx] = {...experiences[expIdx], ...updatedExperienceData};
                return [...experiences];
            });
            await editCandidateExperience(candidate.id, experience.id, updatedExperienceData)
                .then(res => {
                        if (res.status != 200) {
                            props.setExperiences((experiences) => {
                                const expIdx = experiences.findIndex((exp => exp.id == experience.id));
                                experiences[expIdx] = {...experiences[expIdx], ...expBeforeChange};
                                return [...experiences];
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
                    <DialogContentText>Position</DialogContentText>
                    <StyledGridItem>
                        <StyledGridItem>
                            <Input
                                placeholder="Ex. Frontend developer"
                                name="position"
                                value={position}
                                onChange={(e) => setPosition(e.target.value)}
                            />
                        </StyledGridItem>
                    </StyledGridItem>
                        <DialogContentText>Company name</DialogContentText>
                        <StyledGridItem>
                            <Input
                                placeholder="Ex. jobFever"
                                name="companyName"
                                value={companyName}
                                onChange={(e) => setCompanyName(e.target.value)}
                            />
                        </StyledGridItem>
                    <DialogContentText>location</DialogContentText>
                    <StyledGridItem>
                        <Input
                            placeholder="Ex. London"
                            name="location"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                        />
                    </StyledGridItem>
                        <StyledGridContainer>
                            <StyledGridItem>
                                <DialogContentText>
                                    Start date
                                </DialogContentText>
                                <CalendarForm
                                    name="startDate"
                                    value={startDate}
                                    onChange={(e) => setStartDate(e.target.value)}/>
                            </StyledGridItem>
                            <StyledGridItem>
                                <DialogContentText>
                                    End date
                                </DialogContentText>
                                <CalendarForm
                                    name="endDate"
                                    value={endDate}
                                    onChange={(e) => setEndDate(e.target.value)}/>
                            </StyledGridItem>
                        </StyledGridContainer>
                    <DialogContentText>
                        Industry
                    </DialogContentText>
                    <StyledGridItem>
                        <Input
                            placeholder="Ex. Gaming, Software, Hardware, IT consultant"
                            name="industry"
                            value={industry}
                            onChange={(e) => setIndustry(e.target.value)}
                        />
                    </StyledGridItem>
                    <DialogContentText>
                        Description
                    </DialogContentText>
                    <StyledGridItem>
                        <Input
                            placeholder="Ex. Work responsibilities"
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