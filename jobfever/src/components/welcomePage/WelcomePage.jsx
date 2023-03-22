import React from 'react';
import './WelcomePage.css'
import logo from "../../images/logo2.png";
import Navbar from "./Navbar";


function WelcomePage() {
    return (
        <div>
            <div className="container" >
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
                </div>
            </div>
        </div>
    )
}

export default WelcomePage;
