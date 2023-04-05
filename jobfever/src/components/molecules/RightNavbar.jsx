import * as React from 'react';
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import {StyledLink} from "../atoms/Link.styles";

const pages = [
    <StyledLink to='/jobs'>OFFERS</StyledLink>,
    <StyledLink to='/for-employers'>FOR EMPLOYERS</StyledLink>,
    <StyledLink to='/about'>ABOUT US</StyledLink>,
    <StyledLink to='/contact'>CONTACT</StyledLink>,
];

function RightNavbar() {
    return (
    <Box sx={{ flexGrow: 1, display: {md: 'flex' }, justifyContent: 'space-between', margin: '0 50px' }}>
        {pages.map((page,index) => (
            <Button key={`RightNavbar_${index}`}>
                {page}
            </Button>
        ))}
    </Box>
    )
}

export default RightNavbar;