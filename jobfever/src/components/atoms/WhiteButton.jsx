import React from "react";
import Button from "@mui/joy/Button";

function WhiteButton(props) {
    return (
        <Button sx={{ ':hover': {
            bgcolor: '#852222', color: 'white'},
            width: 1/5,
            color: 'black',
            marginInline: 2,
            textDecoration: 'none',
            backgroundColor: 'white'}}
        >
            {props.text}
        </Button>
    )
}
export default WhiteButton