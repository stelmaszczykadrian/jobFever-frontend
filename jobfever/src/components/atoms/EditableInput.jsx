import React from "react";
import {TextField} from "@mui/material";


export default function EditableInput({isEdit, value, onChange, placeholder}) {
    if (isEdit) {
        return <TextField color="error" placeholder={placeholder} value={value} onChange={onChange} label={placeholder}/>;
    } else {
        return <span>{value}</span>;
    }
}