import Sheet from "@mui/joy/Sheet";
import logo from "../images/logo2.png";
import Typography from "@mui/joy/Typography";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import RedButton from "../components/buttons/RedButton";
import IconButton from "@mui/material/IconButton";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import '../css/LoginPage.css';

function LoginSheet() {
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
                        <div id="gridedBox">
                            <img id="logo" src={logo}/>
                        </div>
                        <Typography level="h4" component="h1"
                                    sx={{color: 'rgba(171, 36, 36)', fontWeight: 'bold', textAlign: 'center'}}>
                            <span>Welcome!</span>
                        </Typography>
                        <Typography level="body2" component="h1"
                                    sx={{color: 'white', fontWeight: 'bold', textAlign: 'center'}}>
                            <span>Sign in to continue.</span>
                        </Typography>
                    </div>
                    <p></p>
                    <FormControl width="40">
                        <FormLabel sx={{alignSelf: 'center', color: 'white'}}>Email</FormLabel>
                        <Input
                            sx={{border: '1px', width: 2 / 5, alignSelf: 'center', color: 'grey'}}
                            name="email"
                            type="email"
                            placeholder="jobFever@email.com"
                        />
                    </FormControl>
                    <FormControl id="inputLighter">
                        <FormLabel sx={{border: '1px', alignSelf: 'center', color: 'white'}}>Password</FormLabel>
                        <Input
                            sx={{width: 2 / 5, alignSelf: 'center', color: 'grey'}}
                            name="password"
                            type="password"
                            placeholder="password"
                        />
                        <Typography
                            endDecorator={<a style={{color: 'white'}} href="">Forgot a password?</a>}
                            fontSize="sm"
                            sx={{color: 'white', fontWeight: 'bold', textAlign: 'center', alignSelf: 'center'}}
                        ></Typography>
                    </FormControl>
                    <RedButton
                        text={'LOG IN'}>
                    </RedButton>
                    <Typography
                        endDecorator={<a style={{color: 'rgba(171, 36, 36)'}} href="/sign-up">Sign up</a>}
                        fontSize="sm"
                        sx={{alignSelf: 'center', color: 'white', fontWeight: 'bold', textAlign: 'center'}}
                    >
                        <span>Don't have an account?</span>
                    </Typography>
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

export default LoginSheet;
