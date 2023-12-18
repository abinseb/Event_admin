import React, { useState } from 'react';
import { Button, Grid, TextField, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import './Registration.css';

const CreateEvent = () => {

  const [openDialog, setOpenDialog] = useState(false);
  const [workshops, setWorkshops] = useState([]);
  const [workshopDetails, setWorkshopDetails] = useState({
    title: '',
    date: '',
    venue: '',
  });

  const handleAddWorkshop = () => {
    setWorkshops([...workshops, workshopDetails]);
    setWorkshopDetails({ title: '', date: '', venue: '' });
    setOpenDialog(false);
  };

  return (
    <div className='registration-container'>

    
    <Grid container spacing={1} className='grid-form-container'>
      {/* Event Name */}
      <Grid item xs={12} md={6}>
        <label htmlFor="event-name">Event Name</label>
        <TextField
          id="event-name"
          label="Event Name"
          variant="outlined"
          fullWidth
        />
      </Grid>

      {/* Description */}
      <Grid item xs={12} md={6}>
        <label htmlFor="event-description">Description</label>
        <TextField
          id="event-description"
          label="Description"
          variant="outlined"
          multiline
          rows={4}
          fullWidth
        />
      </Grid>

      <Grid item xs={12} md={6}>
        <label>Venue</label>
        <TextField 
          label="Venue"
          variant='outlined'
          fullWidth
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <label>Date</label>
        <TextField 
          label="date"
          variant='outlined'
          fullWidth
          type='date'
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <label>Icon</label>
        <TextField 
         
          variant='outlined'
          fullWidth
          type='file'
        />
      </Grid>
      <Grid item xs={12} md={6} >
        <label>Add Workshops</label>
          <Button variant='contained'  onClick={() => setOpenDialog(true)} className='button-custom-class' style={{marginLeft:'10%',width:'30%'}}>Workshop </Button>
      </Grid>
    </Grid>


    <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>Add Workshop</DialogTitle>
        <DialogContent>
          <TextField
            label="Title"
            variant="outlined"
            fullWidth
            value={workshopDetails.title}
            onChange={(e) => setWorkshopDetails({ ...workshopDetails, title: e.target.value })}
          />
          <TextField
            label="Date"
            variant="outlined"
            fullWidth
            type='date'
            value={workshopDetails.date}
            onChange={(e) => setWorkshopDetails({ ...workshopDetails, date: e.target.value })}
          />
          <TextField
            label="Venue"
            variant="outlined"
            fullWidth
            value={workshopDetails.venue}
            onChange={(e) => setWorkshopDetails({ ...workshopDetails, venue: e.target.value })}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
          <Button onClick={handleAddWorkshop} variant="contained" color="primary">
            Add Workshop
          </Button>
        </DialogActions>
      </Dialog>

      <div>
        <h3>Added Workshops:</h3>
        <ul>
          {workshops.map((workshop, index) => (
            <li key={index}>
              {`Title: ${workshop.title}, Date: ${workshop.date}, Venue: ${workshop.venue}`}
            </li>
          ))}
        </ul>
      </div>
    </div>

  );
}

export default CreateEvent;
