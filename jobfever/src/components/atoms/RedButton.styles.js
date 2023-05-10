import Button from "@mui/joy/Button";
import {styled} from "@mui/material";


export const RedButtonStyled = styled(Button)(() => ({
    alignSelf: 'center',
    mt: 5,
    backgroundColor: 'rgba(171, 36, 36)',
    ':hover': {
        backgroundColor: '#852222',
        color: 'white'
    },
    ':disabled' : {
        backgroundColor: '#808080',
    }
}));