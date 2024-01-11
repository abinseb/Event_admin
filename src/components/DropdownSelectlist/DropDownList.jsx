import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const DropdownList = ({datalist,label,name,handleChange}) => {
  const handleChangeList=(e)=>{
        const select = e.target.value;
        const result = {[name]:select}
        handleChange(result);

  }
  return (
    <FormControl fullWidth sx={{ mb: 3 }}>
      <InputLabel id="district-label">District</InputLabel>

      <Select
        labelId="group-label"
        id="group-select"
        label='Select From List'
        name={name}
        style={{width:'80%'}}
        onChange={handleChangeList}
      >
        <MenuItem value="">Select..</MenuItem>
        {datalist && datalist.map((item)=>(
            <MenuItem key={item._id} value={item._id} style={ { listStyleType: 'none'}}>
                {item.name}
            </MenuItem>
        ))}
        
      

      </Select>
    </FormControl>
  );
};

export default DropdownList;
