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

export default function EditableInput({ isEdit, value, onChange, placeholder, isRequired }) {
    const isFieldEmpty = isRequired && !value;
    if (isEdit) {
        return (
            <ThemeProvider theme={theme}>
                <TextField
                    required={isRequired}
                    error={isFieldEmpty}
                    helperText={isFieldEmpty ? 'This field cannot be empty' : ''}
                    color={isFieldEmpty ? 'error' : 'black'}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    label={placeholder}
                />
            </ThemeProvider>
        );
    } else {
        return <span>{value}</span>;
    }
}