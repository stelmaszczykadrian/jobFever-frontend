import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import Link from '@mui/joy/Link';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import './LoginSheet.css';
import React from "react";
import logo from "../../images/logo2.png";

function LoginSheet() {
    return (
        <div>
            <div id="container" >
                <div id="flexedBox"></div>
                <div id="flexedBox" style={{ background: 'rgba(29, 25, 23, 0.7)'}}>
                    <div id="gridedBox">
                        <img id="logo" src={logo}/>
                    </div>
                    <div id="gridedBox">
                        <Sheet style={{ background: 'rgba(29, 25, 23, 0.7)'}}
                               sx={{
                                   width: 350,
                                   mx: 'auto', // margin left & right
                                   my: 4, // margin top & botom
                                   py: 3, // padding top & bottom
                                   px: 2, // padding left & right
                                   display: 'flex',
                                   flexDirection: 'column',
                                   gap: 3,
                                   borderRadius: 'sm',
                                   boxShadow: 'md',
                               }}
                        >
                            <div>
                                <Typography level="h4" component="h1" sx={{ color: '#dc143c', fontWeight: 'bold', textAlign: 'center' }}>
                                    <span>Welcome!</span>
                                </Typography>
                                <Typography level="body2" component="h1" sx={{ color: 'white', fontWeight: 'bold', textAlign: 'center' }}>
                                    <span>Sign in to continue.</span>
                                </Typography>
                            </div>
                            <FormControl>
                                <FormLabel>Email</FormLabel>
                                <Input
                                    // html input attribute
                                    name="email"
                                    type="email"
                                    placeholder="jobFever@email.com"
                                />
                            </FormControl>
                            <FormControl>
                                <FormLabel>Password</FormLabel>
                                <Input
                                    name="password"
                                    type="password"
                                    placeholder="password"
                                />
                            </FormControl>
                            <Button sx={{ mt: 1, backgroundColor: '#dc143c' /* margin top */ }}>
                                Log in
                            </Button>
                            <Typography
                                endDecorator={<Link href="/sign-up">Sign up</Link>}
                                fontSize="sm"
                                sx={{ alignSelf: 'center',color: 'white', fontWeight: 'bold', textAlign: 'center' }}
                            >
                                <span>Don't have an account?</span>
                            </Typography>
                        </Sheet>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default LoginSheet;