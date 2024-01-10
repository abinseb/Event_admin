import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

export default function SelectList({ dataList, placeholder, handleChangelist }) {

  const handleChange = (e) => {
    const selected = e.target.value;
    console.log("stateSelection", selected);
    handleChangelist(selected);
  }

  return (
    <FormControl fullWidth sx={{ mb: 3 }}>
      <InputLabel>{placeholder || "Select a pet…"}</InputLabel>
      <Select
        id="group-select"
        label='Select From List'
        onChange={handleChange}
       
        // IconComponent={() => <KeyboardArrowDownIcon />}
      >
         <MenuItem value="">Select..</MenuItem>
        {dataList && dataList.map((data) => (
          <MenuItem key={data} value={data}>
            {data}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
