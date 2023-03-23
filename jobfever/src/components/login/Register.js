import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import './LoginSheet.css';
import React, {useState} from "react";
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import IconButton from '@mui/material/IconButton';

import axios from "axios";
import Logo from "./Logo";

function Register() {
    const [input, setInput] = useState({
        username: '',
        password: '',
        confirmPassword: ''
    });

    const [error, setError] = useState({
        username: '',
        password: '',
        confirmPassword: ''
    })

    const onInputChange = e => {
        const {name, value} = e.target;
        setInput(prev => ({
            ...prev,
            [name]: value
        }));
        validateInput(e);
    }

    const validateInput = e => {
        let {name, value} = e.target;
        setError(prev => {
            const stateObj = {...prev, [name]: ""};

            switch (name) {
                case "username":
                    if (!value) {
                        stateObj[name] = "Please enter Username.";
                    }
                    break;

                case "password":
                    if (!value) {
                        stateObj[name] = "Please enter Password.";
                    } else if (input.confirmPassword && value !== input.confirmPassword) {
                        stateObj["confirmPassword"] = "Password and Confirm Password does not match.";
                    } else {
                        stateObj["confirmPassword"] = input.confirmPassword ? "" : error.confirmPassword;
                    }
                    break;

                case "confirmPassword":
                    if (!value) {
                        stateObj[name] = "Please enter Confirm Password.";
                    } else if (input.password && value !== input.password) {
                        stateObj[name] = "Password and Confirm Password does not match.";
                    }
                    break;

                default:
                    break;
            }

            return stateObj;
        });
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        const userData = {
            email: input.username,
            password: input.password,
            repeatPassword: input.confirmPassword
        };

        if (input.password === input.confirmPassword) {
            axios
                .post("http://localhost:8080/api/candidates/register-candidate", userData)
                .then((response) => {
                    console.log(response);
                })
                .catch((error) => {
                    if (error.response) {
                        console.log(error.response);
                        console.log("server responded");
                    } else if (error.request) {
                        console.log("network error");
                    } else {
                        console.log(error);
                    }
                });
        }

    };


    return (
        <div>
            <div id="container">
                <div id="flexedBox"></div>
                <Sheet style={{background: 'rgba(29, 25, 23, 0.7)'}}
                       sx={{
                           width: 1 / 2,
                           mx: 'auto', // margin left & right
                           my: 0, // margin top & botom
                           py: 3, // padding top & bottom
                           px: 4, // padding left & right
                           display: 'flex',
                           flexDirection: 'column',
                           gap: 2,
                       }}
                >
                    <div>
                        <Logo />
                        <Typography level="h4" component="h1"
                                    sx={{color: 'rgba(171, 36, 36)', fontWeight: 'bold', textAlign: 'center'}}>
                            <span>Welcome!</span>
                        </Typography>
                        <Typography level="body2" component="h1"
                                    sx={{color: 'white', fontWeight: 'bold', textAlign: 'center'}}>
                            <span>Create account</span>
                        </Typography>
                    </div>
                    <p></p>
                    {/*<form onSubmit={handleSubmit}>*/}
                    <form onSubmit={handleSubmit}>
                        <FormControl width="40">
                            <FormLabel sx={{alignSelf: 'center', color: 'white'}}>Email</FormLabel>
                            <Input
                                sx={{border: '1px', width: 2 / 5, alignSelf: 'center', color: 'grey', mt: 2}}
                                type="text"
                                name="username"
                                placeholder='jobFever@email.com'
                                value={input.username}
                                onChange={onInputChange}
                                onBlur={validateInput}
                            />
                            {error.username && <span className='err'>{error.username}</span>}
                        </FormControl>
                        <FormControl>
                            <FormLabel
                                sx={{border: '1px', alignSelf: 'center', color: 'white'}}>Password</FormLabel>
                            <Input
                                sx={{width: 2 / 5, alignSelf: 'center', color: 'grey', mt: 2}}
                                type="password"
                                name="password"
                                placeholder='Enter Password'
                                value={input.password}
                                onChange={onInputChange}
                                onBlur={validateInput}
                            />
                            {error.password && <span className='err'>{error.password}</span>}
                        </FormControl>
                        <FormControl>
                            <FormLabel sx={{border: '1px', alignSelf: 'center', color: 'white'}}>Repeat
                                Password</FormLabel>
                            <Input
                                sx={{width: 2 / 5, alignSelf: 'center', color: 'grey', mt: 2}}
                                type="password"
                                name="confirmPassword"
                                placeholder='Enter Confirm Password'
                                value={input.confirmPassword}
                                onChange={onInputChange}
                                onBlur={validateInput}
                            />
                            {error.confirmPassword && <span className='err'>{error.confirmPassword}</span>}
                        </FormControl>
                        <FormControl sx={{justifyContent: 'center'}}>
                            <Button
                                type="submit"
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
                                Register
                            </Button>
                        </FormControl>
                    </form>
                    <Sheet style={{background: 'transparent'}}
                           sx={{
                               mx: 'auto',
                               py: 8,
                               display: 'flex',
                               flexDirection: 'row',
                               gap: 0,
                           }}
                    >
                        <IconButton size="large" sx={{color: 'white'}}>
                            <FacebookOutlinedIcon/>
                        </IconButton>
                        <IconButton size="large" sx={{color: 'white'}}>
                            <InstagramIcon/>
                        </IconButton>
                        <IconButton size="large" sx={{color: 'white'}}>
                            <WhatsAppIcon/>
                        </IconButton>
                    </Sheet>
                </Sheet>
            </div>
        </div>
    );
}

export default Register;
