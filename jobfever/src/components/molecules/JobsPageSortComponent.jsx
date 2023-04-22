import {languageIconsSortJobsPage, languageLabelsSortJobsPage} from "../../constants/constans";
import {StyledSortButton} from "../atoms/StyledSortButton";
import {StyledContainer} from "./TechnicalRequirementsContainer.styles";
import React, {useState} from "react";
import SearchIcon from "@mui/icons-material/Search";
import {alpha, styled} from "@mui/material/styles";
import {InputBase} from "@mui/material";
import DialogContentText from "@mui/material/DialogContentText";


const Search = styled('div')(({theme}) => ({
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

const SearchIconWrapper = styled('div')(({theme}) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
}));

const StyledInputBase = styled(InputBase)(({theme}) => ({
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
            <div>
                <Search>
                    <SearchIconWrapper>
                        <SearchIcon/>
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder="Search…"
                        inputProps={{'aria-label': 'search'}}
                    />
                </Search>
            </div>
        </StyledContainer>
    );

}