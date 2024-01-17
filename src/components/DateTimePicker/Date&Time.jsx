import * as React from 'react';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

export default function DateAndTimePicker({ onDateTimeChange ,name ,date}) {
  const [value, setValue] = React.useState(dayjs(date));

  const handleDateTimeChange = (newValue) => {
    setValue(newValue);
    onDateTimeChange(newValue,name); // Call the callback function in the parent component
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} style={{with:'100%'}}>
      <DemoContainer components={['DateTimePicker', 'DateTimePicker']}>
        <DateTimePicker
          label="Date & Time"
          name={name}
          value={value}
          onChange={handleDateTimeChange}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}
