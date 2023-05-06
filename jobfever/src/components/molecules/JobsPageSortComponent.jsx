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
                <div key={`${icon}-${index}`}>
                    <StyledSortButton
                        id={index}
                        value={languageLabelsSortJobsPage[index]}
                        onClick={() => handleButtonClick(languageLabelsSortJobsPage[index], index)}
                        color={pressedButtons.includes(index) ? 'rgba(171, 36, 36)' : 'white'}
                    >
                        {icon}
                    </StyledSortButton>
                    <DialogContentText sx={{color: 'rgba(171, 36, 36)', fontWeight: 'bold', marginBottom: '10px'}}>{languageLabelsSortJobsPage[index]}</DialogContentText>
                </div>
            ))}
        </StyledContainer>
    );

}