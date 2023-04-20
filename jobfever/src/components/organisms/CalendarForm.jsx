import * as React from 'react';
import {DatePicker} from '@mui/x-date-pickers/DatePicker';
import dayjs from "dayjs";
import EditableModalInput from "../atoms/EditableModalInput";

export default function CalendarForm({name, date, setDate}) {
    let required = true;
    return (
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
    );
}