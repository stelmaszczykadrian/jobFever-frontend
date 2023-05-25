import * as React from 'react';
import {DatePicker} from '@mui/x-date-pickers/DatePicker';
import dayjs from "dayjs";
import EditableModalInput from "../atoms/EditableModalInput";
import {createTheme, ThemeProvider} from "@mui/material/styles";

const theme = createTheme({
    components: {
        MuiFormLabel: {
            styleOverrides: {
                root: {
                    '&.Mui-focused': {
                        color: '#000000',
                    },
                },
            },
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#000000',
                    },
                },
            },
        },
        MuiPickersDay: {
            styleOverrides: {
                root: {
                    '&.Mui-selected': {
                        color: '#fff',
                        backgroundColor: '#c0030b !important',
                    },
                    '&.MuiDay-today': {
                        color: '#c0030b',
                        backgroundColor: 'transparent !important',
                    },
                    '&:not(.Mui-selected)': {
                        backgroundColor: 'transparent',
                    },
                    '&:hover': {
                        backgroundColor: '#c0030b',
                        color: '#fff',
                    },
                    '&:hover.Mui-selected': {
                        backgroundColor: '#c0030b',
                    },
                },
            },
        },
        MuiPickersYear: {
            styleOverrides: {
                yearButton: {
                    '&.Mui-selected': {
                        color: '#fff',
                        backgroundColor: '#c0030b !important',
                    },
                },
            },
        },
    },
});


export default function CalendarForm({name, date, setDate}) {
    let required = true;
    return (
        <ThemeProvider theme={theme}>
            <DatePicker
                TextFieldComponent={EditableModalInput}
                required={required}
                error={!date}
                helperText={!date ? 'This field cannot be empty' : ''}
                format="YYYY-MM-DD"
                label={name}
                value={dayjs(date)}
                onChange={(e) => {
                    setDate(e.format('YYYY-MM-DD'))
                }}
            />
        </ThemeProvider>
    );
}
