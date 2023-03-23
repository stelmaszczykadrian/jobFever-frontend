import * as React from 'react';
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import App from "../../App";

const pages = ['FOR EMPLOYERS', 'ABOUT US', 'CONTACT'];

function Navbar() {
    return (
    <Box sx={{ flexGrow: 1, display: {md: 'flex' }, justifyContent: 'space-between', margin: '0 50px' }}>
        {pages.map((page) => (
            <Button
                key={page}
                sx={{ my: 2, color: 'white', display: 'block' }}
            >
                {page}
            </Button>
        ))}
    </Box>
    )
}

export default Navbar;