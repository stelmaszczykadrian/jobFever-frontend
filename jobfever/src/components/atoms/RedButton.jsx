import React from "react";
import Button from "@mui/joy/Button";

function RedButton(props) {
    return (
        <Button
            type="submit"
            onClick={props.onClick}
            sx={{
                ':hover': {
                    bgcolor: '#852222',
                    color: 'white'
                },
                width: 1 / 4,
                alignSelf: 'center',
                mt: 5,
                backgroundColor: 'rgba(171, 36, 36)'
            }}
        >
            {props.text}
        </Button>
    );
}
export default RedButton