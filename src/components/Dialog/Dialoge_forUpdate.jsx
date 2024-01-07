import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField,InputLabel } from '@mui/material';
import React, { useState } from 'react'
import './Dialog.css';

const Dialoge_forUpdate = ({open,onClose,onUpdate,initialData}) => {
  const [updatedData, setUpdatedData] = useState(initialData);
    console.log("UpdatedDatahooiii",initialData);

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
    <Dialog open={open} onClose={onClose} >
        <DialogTitle>Edit Workshop</DialogTitle>
        <DialogContent className='dialog-content-container'>
        <div className='text-field-container'>
          <InputLabel htmlFor="name">Workshop Name</InputLabel>
          <TextField
            className='text-field-custom'
            id="title"
            name="title"
            value={updatedData.title}
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
            id="venu"
            name="venu"
            value={updatedData.venu}
            onChange={handleInputChange}
            fullWidth
          />
        </div>
        <div className='text-field-container'>
          <InputLabel htmlFor="maximumParticipants">Max Participants</InputLabel>
          <TextField
            className='text-field-custom'
            id="maximumParticipants"
            name="maximumparticipants"
            value={updatedData.maximumparticipants}
            onChange={handleInputChange}
            fullWidth
          />
        </div>
        <div className='text-field-container'>
          <InputLabel htmlFor="maximumParticipants">Upload Icon</InputLabel>
          <TextField
            className='text-field-custom'
            id="icon"
            name="icon"
            type='file'
            // value={updatedData.icon}
            onChange={(e) => {
              const file = e.target.files[0];
              
              if (file) {
                const reader = new FileReader();

                reader.onloadend = () => {
                  // Convert the file content to base64
                  const base64Data = reader.result.split(',')[1];

                  // Update the state with the base64 data
                  setUpdatedData({ ...updatedData, icon: base64Data });
                };

                // Read the file as a data URL (base64)
                reader.readAsDataURL(file);
              }
            }}
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
