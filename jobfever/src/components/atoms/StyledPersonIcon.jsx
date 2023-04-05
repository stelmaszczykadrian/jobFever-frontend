import { Person as MUIPersonIcon } from '@mui/icons-material'
import React from "react";
import {styled} from "@mui/material";

export const StyledPersonIcon = styled(MUIPersonIcon)(() => ({
    fontSize: '2em',
    color: '#666',
    marginRight: '1rem'
}))
