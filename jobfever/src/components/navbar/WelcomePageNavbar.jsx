import * as React from 'react';
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const pages = ['FOR EMPLOYERS', 'ABOUT US', 'CONTACT'];

function WelcomePageNavbar() {
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

export default WelcomePageNavbar;