import {languageIconsSortJobsPage, languageLabelsSortJobsPage} from "../../constants/Constans";
import {StyledSortButton} from "../atoms/StyledSortButton";
import {StyledContainer} from "./TechnicalRequirementsContainer.styles";
import React, {useState} from "react";
import DialogContentText from "@mui/material/DialogContentText";

export default function JobsPageSortComponent({onLanguageChange}) {
    const [pressedButtons, setPressedButtons] = useState([]);
    const [input, setInput] = useState({technicalRequirements: []});

    const handleButtonClick = (value, index) => {
        const newValue = value === 'All' ? '' : value;
        setInput({technicalRequirements: [newValue]});
        setPressedButtons([index]);
        onLanguageChange(newValue);
    };

    return(
        <StyledContainer>
            {languageIconsSortJobsPage.map((icon, index) => (
                <div
                    key={`${icon}-${index}`}>
                    <StyledSortButton
                        sx={{marginTop: '10px'}}
                        id={index}
                        value={languageLabelsSortJobsPage[index]}
                        onClick={() => handleButtonClick(languageLabelsSortJobsPage[index], index)}
                        color={pressedButtons.includes(index) ? 'rgba(171, 36, 36)' : 'white'}
                    >
                        {icon}
                    </StyledSortButton>
                    <DialogContentText sx={{color: 'white', fontSize: '14px',marginBottom: '20px'}}>{languageLabelsSortJobsPage[index]}</DialogContentText>
                </div>
            ))}
        </StyledContainer>
    );

}