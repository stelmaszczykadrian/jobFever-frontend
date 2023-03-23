import React from 'react';
import './WelcomePage.css'
import logo from "../../images/logo2.png";
import Navbar from "./Navbar";
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import {IconButton} from "@mui/material";
import Button from "@mui/material/Button";


function WelcomePage() {
    return (
        <div>
            <div className="container background" >
                <div className="halfSide leftSide">
                    <div className="sideContainer logoContainer">
                        <img className="logo" src={logo}/>
                    </div>
                </div>
                <div className="halfSide rightSide">
                    <Navbar />
                    <div className="sideContainer textContainer">
                        <span className="header">Welcome</span>
                        <div className="text">
                            Our website is dedicated to providing programmers like you with the latest
                            and greatest job  opportunity in the industry. Whether you're a seasoned
                            developer or just starting out in your career, we're here to connect you with
                            employers who are looking for talented programmers just like you.
                        </div>
                    </div>
                    <div className="sideContainer buttons">
                        <Button sx={{ ':hover': {
                            bgcolor: '#852222', color: 'white'},

                            mr: 2,
                            width: 1/4,
                            alignSelf: 'center',
                            mt: 1,
                            backgroundColor: 'rgb(255,255,255)',}}
                        >
                            <span className="button-text">Log in</span>
                        </Button>
                        <Button sx={{ ':hover': {
                            bgcolor: '#852222', color: 'white'},
                            width: 1/4,
                            alignSelf: 'center',
                            mt: 1, backgroundColor: 'rgb(255,255,255)'}}
                        >
                            <span className="button-text">Register</span>
                        </Button>
                    </div>
                    <div className="sideContainer socialMediaIcons">
                        <IconButton><FacebookOutlinedIcon fontSize="large"/></IconButton>
                        <IconButton><InstagramIcon fontSize="large"/></IconButton>
                        <IconButton><WhatsAppIcon fontSize="large"/></IconButton>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WelcomePage;
