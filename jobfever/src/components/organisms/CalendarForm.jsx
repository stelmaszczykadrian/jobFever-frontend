import * as React from 'react';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from "dayjs";

export default function CalendarForm({name, date, setDate}) {
    let required=true;
    return (
            <DatePicker
                slotProps={{
                    textField: { error: false, color: "error", required}
                }}
                value={dayjs(date)}
                format="DD-MM-YYYY"
                label={name}
                onChange={(e) => {
                    setDate(e)
                }}
                />
    );
}