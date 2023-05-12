import logo from "../../images/logos/logo.png";

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import {Link, useNavigate} from "react-router-dom";
import {StyledLink} from "../atoms/Link.styles";
import Cookies from "js-cookie";
import {StyledPostJobButton} from "./Navbar.styles";
import {useState} from "react";
import icon from "../../images/languages/add.svg"
import Python from "../../images/languages/python.svg";

const pages = [
    <StyledLink to='/jobs'>OFFERS</StyledLink>,
    <StyledLink to='/about'>ABOUT US</StyledLink>,
    <StyledLink to='/contact'>CONTACT</StyledLink>,
];


export default function ResponsiveAppBar() {
    let jwt = Cookies.get('jwt');
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);
    const [settings, setSettings] = useState([]);

    const navigate = useNavigate();

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    function setProfileLink(){
        if (jwt) {
            if (!JSON.parse(jwt).employer_id) {
                setSettings([
                    'Dashboard', 'Favourites'
                ])
            } else {
                setSettings([
                    'Dashboard', 'Favourites'
                ])
            }
        }
    }

    const handleOpenUserMenu = (event) => {
        setProfileLink();
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    const logout = () => {
        Cookies.remove('jwt');
        navigate('/');
    };
    const navigateToProfile = () => {
        if (!JSON.parse(jwt).employer_id) {
            navigate('/candidate/' + JSON.parse(jwt).candidate_id);
        }else{
            navigate('/employer/' + JSON.parse(jwt).employer_id);
        }
    };

    function AddJobButton() {

        if (!jwt) {
            return null;
        }
        if (JSON.parse(jwt).role === "EMPLOYER") {
            return (
                <StyledPostJobButton
                    onClick={() => {
                        navigate('/add-job');
                    }}
                >
                    <img src={icon} width={"25px"}/> ADD JOB OFFER
                </StyledPostJobButton>
            );
        }
    }

    function LoggedInNavbar() {
        return (
            <AppBar position="static" style={{margin: 0, background: 'rgba(29, 25, 23, 0.7)'}}>
                <Container maxWidth="l">
                    <Toolbar disableGutters>
                        <Link to='/'>
                            <Box sx={{m: 0}}>
                                <img width="185" height="45" alt={"jobfever logo"} src={logo} margin="left"/>
                            </Box>
                        </Link>
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                mr: 2,
                                display: {xs: 'none', md: 'flex'},
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                        </Typography>
                        <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon/>
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: {xs: 'block', md: 'none'},
                                }}
                            >
                                {pages.map((page, index) => (
                                    <MenuItem key={`Navbar_${index}`} onClick={handleCloseNavMenu}>
                                        <Typography textAlign="center">{page}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href=""
                            sx={{
                                mr: 0,
                                display: {xs: 'flex', md: 'none'},
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                        </Typography>
                        <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
                            {pages.map((page, index) => (
                                <Button
                                    key={`Navbar_${index}`}
                                    onClick={handleCloseNavMenu}
                                    sx={{my: 2, color: 'white', display: 'block'}}
                                >
                                    {page}
                                </Button>
                            ))}
                        </Box>
                        <Box sx={{flexGrow: 0.1, marginRight: '30px'}}>
                            <AddJobButton/>
                        </Box>
                        <Box sx={{flexGrow: 0}}>
                            <Tooltip title="Open details">
                                <IconButton size="large"
                                            edge="start"
                                            color="inherit"
                                            aria-label="menu"
                                            sx={{ mr: 2 }}
                                            onClick={handleOpenUserMenu} sx={{p: 2}}>
                                    <MenuIcon />
                                </IconButton>
                            </Tooltip>
                            <Menu
                                sx={{mt: '45px'}}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                <MenuItem key={"Profile"} onClick={navigateToProfile}>
                                    <Typography textAlign="center">Profile</Typography>
                                </MenuItem>
                                {settings.map((setting) => (
                                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                        <Typography textAlign="center">{setting}</Typography>
                                    </MenuItem>
                                ))}
                                <MenuItem key={"Logout"} onClick={logout}>
                                    <Typography textAlign="center">Logout</Typography>
                                </MenuItem>
                            </Menu>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        );
    }

    function LoggedOutNavbar() {
        return (
            <AppBar position="static" style={{margin: 0, background: 'rgba(29, 25, 23, 0.7)'}}>
                <Container maxWidth="l">
                    <Toolbar disableGutters>
                        <Link to='/'>
                            <Box sx={{m: 0}}>
                                <img width="185" height="45" alt="logo" src={logo} margin="left"/>
                            </Box>
                        </Link>
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                mr: 2,
                                display: {xs: 'none', md: 'flex'},
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                        </Typography>
                        <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon/>
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: {xs: 'block', md: 'none'},
                                }}
                            >
                                {pages.map((page, index) => (
                                    <MenuItem key={`Navbar_${index}`} onClick={handleCloseNavMenu}>
                                        <Typography textAlign="center">{page}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href=""
                            sx={{
                                mr: 0,
                                display: {xs: 'flex', md: 'none'},
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                        </Typography>
                        <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
                            {pages.map((page, index) => (
                                <Button
                                    key={`Navbar_${index}`}
                                    onClick={handleCloseNavMenu}
                                    sx={{my: 2, color: 'white', display: 'block'}}
                                >
                                    {page}
                                </Button>
                            ))}
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>);
    }
    if (!jwt) {
        return  LoggedOutNavbar()
    }else{
            return LoggedInNavbar()
    }
}
