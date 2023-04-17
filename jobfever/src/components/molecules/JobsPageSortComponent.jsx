import {languageIcons, languageLabels} from "../../constants/constans";
import {StyledSortButton} from "../atoms/StyledSortButton";
import {StyledContainer} from "./TechnicalRequirementsContainer.styles";
import {useState} from "react";


export default function JobsPageSortComponent(){


    const [pressedButtons, setPressedButtons] = useState([]);
    const [input, setInput] = useState({ technicalRequirements: [] });
    const handleButtonClick = (value, index) => {
        const newPressedButtons = [index];
        setInput({ technicalRequirements: [value] });
        setPressedButtons(newPressedButtons);
    };

    return <StyledContainer>
        {languageIcons.map((icon, index) => (
            <div key={`${icon}-${index}`}>
                <StyledSortButton
                    id={index}
                    value={languageLabels[index]}
                    onClick={() => handleButtonClick(languageLabels[index], index)}
                    color={pressedButtons.includes(index) ? 'rgba(171, 36, 36)' : 'white'}
                >
                    {icon}
                </StyledSortButton>
                <div>{languageLabels[index]}</div>
            </div>
        ))}
    </StyledContainer>
}