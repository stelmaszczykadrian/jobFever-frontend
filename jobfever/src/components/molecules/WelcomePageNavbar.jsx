import * as React from 'react';
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import {StyledLink} from "../atoms/StyledLink";
import {map} from "react-bootstrap/ElementChildren";


const pages = ['FOR EMPLOYERS', 'ABOUT US', 'CONTACT'];
const routes = ['/for-employers', '/about-us', '/contact'];
const index = 0;

function WelcomePageNavbar() {
    return (
    <Box sx={{ flexGrow: 1, display: {md: 'flex' }, justifyContent: 'space-between', margin: '0 50px' }}>
        {pages.map((page) => (
            <StyledLink to={routes.map((route) => (
                ))}>
            <Button
                key={page}
                sx={{ my: 2, color: 'white', display: 'block' }}
            >
                {page}
            </Button>
            </StyledLink>
        ))}
    </Box>
    )
}

export default WelcomePageNavbar;