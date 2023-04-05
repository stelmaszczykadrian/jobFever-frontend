import Sheet from "@mui/joy/Sheet";
import IconButton from "@mui/material/IconButton";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import React from "react";

function SocialMediaButtons(){
    return (
        <Sheet style={{background: 'transparent'}}
               sx={{
                   alignSelf: 'center',
                   py: 8,
                   display: 'flex',
                   flexDirection: 'row',
                   gap: 0,
                   marginInline: 'auto',
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
    );

}
export default SocialMediaButtons