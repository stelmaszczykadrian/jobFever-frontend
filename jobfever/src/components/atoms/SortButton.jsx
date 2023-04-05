import Button from "@mui/joy/Button";
import {styled} from "@mui/material";

export const SortButton = styled(Button)(() => ({
    minHeight: '0',
    padding: '5px',
    marginTop: '10px',
    margin: 'auto',
    alignSelf: 'auto',
    backgroundColor: '#A9A9A0',
    color: 'black',
    borderRadius: '20px',
    ':hover': {
        color: 'white',
        backgroundColor: '#696960',
    },
}));
