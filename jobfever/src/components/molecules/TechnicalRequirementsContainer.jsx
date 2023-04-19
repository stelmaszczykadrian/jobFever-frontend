import {StyledContainer} from "./TechnicalRequirementsContainer.styles";
import * as React from "react";
import {StyledSortButton} from "../atoms/StyledSortButton";
import {languageIcons, languageLabels} from "../../constants/constans";
import {Search} from "@mui/icons-material";
import SearchIcon from '@mui/icons-material/Search';
import {InputBase} from "@mui/material";
import { styled, alpha } from '@mui/material/styles';
import DialogContentText from "@mui/material/DialogContentText";

const TechnicalRequirementsContainer = ({pressedButtons, setPressedButtons, setInput}) => {

    const handleButtonClick = (value, index) => {
        if (pressedButtons.includes(index)) {
            setPressedButtons(pressedButtons.filter((pressedIndex) => pressedIndex !== index));
        } else {
            setPressedButtons([...pressedButtons, index]);
        }

        setInput(prev => ({
            ...prev,
            technicalRequirements: pressedButtons.includes(index)
                ? prev.technicalRequirements.filter(item => item !== value)
                : [...prev.technicalRequirements, value]
        }));
    }

    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.25),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.35),
        },
        marginLeft: 0,
        marginTop: 6,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    }));

    const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
    }));

    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'white',
        '& .MuiInputBase-input': {
            padding: theme.spacing(1, 12, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(3em + ${theme.spacing(0)})`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('sm')]: {
                width: '6ch',
                '&:focus': {
                    width: '12ch',
                },
            },
        },
    }));

    return (
        <div>
        <StyledContainer>
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
                    <div>
                        <DialogContentText sx={{color: 'white'}}>{languageLabels[index]}</DialogContentText></div>
                </div>
            ))}
            <div>
            <Search>
                <SearchIconWrapper>
                    <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ 'aria-label': 'search' }}
                />
            </Search>
            </div>
        </StyledContainer>
        </div>
    );
};

export default TechnicalRequirementsContainer;