import { createTheme, ThemeProvider } from '@mui/material/styles';
import {TextField} from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
            main: '#2f2f2f',
        },
        error: {
            main: '#f44336',
        },
        black: {
            main: '#000000',
        },
    },
});

export default function EditableInput({ isEdit, value, onChange, placeholder, isRequired, isCorrect = true, errorMsg = 'This field cannot be empty',  type = "text" }) {
    const isFieldEmpty = isRequired && !value;
    if (isEdit) {
        return (
            <ThemeProvider theme={theme}>
                <TextField
                    required={isRequired}
                    error={isFieldEmpty || !isCorrect}
                    helperText={isFieldEmpty || !isCorrect ? errorMsg : ''}
                    color={isFieldEmpty ? 'error' : 'black'}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    label={placeholder}
                    type ={type}
                />
            </ThemeProvider>
        );
    } else {
        return <span>{value}</span>;
    }
}
