import React from "react";
import Input from "@mui/joy/Input";

export default function UsernameInput(){
    return(
        <Input
            type="text"
            name="username"
            placeholder='jobFever@email.com'
        />
    )
}