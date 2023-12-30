import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField,InputLabel } from '@mui/material';
import React, { useState } from 'react'
import './Dialog.css';

const Dialoge_forUpdate = ({open,onClose,onUpdate,initialData}) => {
    const [updatedData,setUpdatedData] = useState(initialData);
    console.log("UpdatedData",initialData);

    const handleInputChange =(e)=>{
        const {name,value} = e.target;
        setUpdatedData((prevdata)=>({
            ...prevdata,
            [name]:value,
        }));
    };

    const handleUpdateWorkshopData=()=>{
        onUpdate(updatedData);
        onClose();
    }
  return (
    <Dialog open={open} onClose={onClose}>
        <DialogTitle>Edit Workshop</DialogTitle>
        <DialogContent className='dialog-content-container'>
        <div className='text-field-container'>
          <InputLabel htmlFor="name">Workshop Name</InputLabel>
          <TextField
            className='text-field-custom'
            id="name"
            name="name"
            value={updatedData.name}
            onChange={handleInputChange}
            fullWidth
          />
        </div>
        <div className='text-field-container'>
          <InputLabel htmlFor="date">Date</InputLabel>
          <TextField
            className='text-field-custom'
            id="date"
            name="date"
            value={updatedData.date}
            onChange={handleInputChange}
            fullWidth
          />
        </div>
        <div className='text-field-container'>
          <InputLabel htmlFor="venue">Venue</InputLabel>
          <TextField
            id="venue"
            name="venue"
            value={updatedData.venue}
            onChange={handleInputChange}
            fullWidth
          />
        </div>
        <div className='text-field-container'>
          <InputLabel htmlFor="maximumParticipants">Max Participants</InputLabel>
          <TextField
            className='text-field-custom'
            id="maximumParticipants"
            name="maximumParticipants"
            value={updatedData.maximumParticipants}
            onChange={handleInputChange}
            fullWidth
          />
        </div>
      </DialogContent>
        <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleUpdateWorkshopData} color="primary">
          Update
        </Button>
        </DialogActions>
    </Dialog>
  )
}

export default Dialoge_forUpdate
