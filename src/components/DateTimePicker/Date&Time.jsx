import * as React from 'react';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

export default function DateAndTimePicker({ onDateTimeChange ,name }) {
  const [value, setValue] = React.useState(dayjs('2022-04-17T15:30'));

  const handleDateTimeChange = (newValue) => {
    setValue(newValue);
    onDateTimeChange(newValue,name); // Call the callback function in the parent component
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} style={{with:'100%'}}>
      <DemoContainer components={['DateTimePicker', 'DateTimePicker']}>
        <DateTimePicker
          label="Controlled picker"
          name={name}
          value={value}
          onChange={handleDateTimeChange}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}
