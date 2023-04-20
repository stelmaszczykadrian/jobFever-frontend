import {createTheme, ThemeProvider} from '@mui/material/styles';
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

export default function EditableModalInput({value, onChange, placeholder, isRequired, label, fullWidth}) {
    const isFieldEmpty = isRequired && !value;
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
                label={label}
                fullWidth={fullWidth}
            />
        </ThemeProvider>
    );

}