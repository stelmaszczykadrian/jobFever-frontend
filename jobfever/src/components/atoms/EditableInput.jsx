import Input from "@mui/joy/Input";
import React from "react";


export default function EditableInput({isEdit, value, onChange, placeholder}) {
    if (isEdit) {
        return <Input type="text" placeholder={placeholder} value={value} onChange={onChange}/>;
    } else {
        return <span>{value}</span>;
    }
}