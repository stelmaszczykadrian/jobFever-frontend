import {alpha, styled} from "@mui/material/styles";
import {InputBase} from "@mui/material";

export const Search = styled('div')(({theme}) => ({
    marginBottom: "1%",
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.95),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.35),
    },
    marginTop: '12px',
    marginLeft : '10px',
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

export const SearchIconWrapper = styled('div')(({theme}) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'black',
}));


export const StyledInputBase = styled(InputBase)(({theme}) => ({
    fontFamily: 'Arial',
    color: 'black',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 12, 1, 0),
        paddingLeft: theme.spacing(6),

    },
}));

export const StyledBoxFlex = styled("box")`
    display: flex;
    flex: content;
    border-radius: 20px;
    align-self: center;
    text-align: center;
    grid-column-gap: 10px;
    justify-content: space-around;
    flex-direction: row;
    font-family: 'monospace';
`