import Button from "@mui/joy/Button";
import {styled} from "@mui/material";


export const SortButton = styled(Button)(() => ({
    minHeight: '0',
    padding: '5px',
    marginTop: '10px',
    marginRight: '5px',
    backgroundColor: '#A9A9A9',
    color: 'black',
    ':hover': {
        color: 'white',
        backgroundColor: '#696969',
    },
}));
