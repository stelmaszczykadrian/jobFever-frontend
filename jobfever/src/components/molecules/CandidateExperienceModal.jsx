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
import {
    addCandidateExperience,
    editCandidateExperience
} from "../../api/CandidateApi";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import EditableModalInput from "../atoms/EditableModalInput";

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
            if (position.trim() === '' || companyName.trim() === '' || location.trim() === '' || industry.trim() === '' || description.trim() === '' || endDate === '' || startDate === '') {
                return
            }
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
                const res = await addCandidateExperience(candidate.id, updatedExperienceData)
                if (res.status !== 200) {
                    props.setExperiences((experiences) => {
                        experiences.pop();
                        return [...experiences];
                    });
                    return
                }
                props.setExperiences((experiences) => {
                    let expIdx = experiences.findIndex((exp => exp.id === temp_id));
                    experiences[expIdx] = {...experiences[expIdx], id: res.data};
                    return [...experiences];
                });
            } else {
                props.setExperiences((experiences) => {
                    const expIdx = experiences.findIndex((exp => exp.id === experience.id));
                    experiences[expIdx] = {...experiences[expIdx], ...updatedExperienceData};
                    return [...experiences];
                });
                const res = await editCandidateExperience(candidate.id, experience.id, updatedExperienceData)
                if (res.status !== 200) {
                    props.setExperiences((experiences) => {
                        const expIdx = experiences.findIndex((exp => exp.id === experience.id));
                        experiences[expIdx] = {...experiences[expIdx], ...expBeforeChange};
                        return [...experiences];
                    });
                }
            }
        }
    ;

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
                        <EditableModalInput
                            placeholder="Ex. Frontend developer"
                            label="Position"
                            value={position}
                            onChange={(e) => setPosition(e.target.value)}
                            fullWidth
                            isRequired
                        />
                    </StyledGridItem>
                    <StyledGridItem>
                        <EditableModalInput
                            placeholder="Ex. jobFever"
                            label="Company name"
                            value={companyName}
                            onChange={(e) => setCompanyName(e.target.value)}
                            fullWidth
                            isRequired
                        />
                    </StyledGridItem>
                    <StyledGridItem>
                        <EditableModalInput
                            placeholder="Ex. London"
                            label="Location"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            fullWidth
                            isRequired
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
                                    name="End Date"
                                    date={endDate}
                                    setDate={setEndDate}
                                />
                            </StyledGridItem>
                        </LocalizationProvider>
                    </StyledGridContainer>
                    <StyledGridItem>
                        <EditableModalInput
                            placeholder="Ex. Gaming, Software, Hardware, IT consultant"
                            label="Industry"
                            value={industry}
                            onChange={(e) => setIndustry(e.target.value)}
                            fullWidth
                            isRequired
                        />
                    </StyledGridItem>
                    <StyledGridItem>
                        <EditableModalInput
                            placeholder="Ex. Work responsibilities"
                            label="Description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            fullWidth
                            isRequired
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