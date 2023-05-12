import styled from "styled-components";
import Button from "@mui/joy/Button";


export const StyledPostJobButton = styled(Button)(() => ({
    alignSelf: 'center',
    mt: 5,
    float: 'right',

    backgroundColor: 'rgba(171, 36, 36) !important',
    ':hover': {
        backgroundColor: '#852222',
        color: 'white'
    },
}));


