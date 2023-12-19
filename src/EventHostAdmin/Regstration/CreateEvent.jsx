import React, { useState } from 'react';
import { Button, Grid, TextField, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import './Registration.css';

const CreateEvent = () => {

  const [openDialog, setOpenDialog] = useState(false);
  const [workshops, setWorkshops] = useState([]);
  const [workshopDetails, setWorkshopDetails] = useState({
    workshopname:'',
    workshopdescription:'',
    venue:'',
    workshopdate:'',
    workshopvenue:'',
    workshopicon:'',



  });

  const handleAddWorkshop = () => {
    setWorkshops([...workshops, workshopDetails]);
    setWorkshopDetails({  workshopname:'',
                          workshopdescription:'',
                          venue:'',
                          workshopdate:'',
                          workshopvenue:'',
                          workshopicon:''
                        });
    setOpenDialog(false);
  };

  return (
    <div className='registration-container'>
      <div style={{width:'70%'}}>

     
    
    <Grid container spacing={1} className='grid-form-container'>
        <Grid item xs={12} md={6}>
          <div className='label-textbox-container'>
            <label className='label-custom'>Event Name</label>
            <TextField
              className='text-field-container'
              id="event-name"
              label="Event Name"
              variant="outlined"
              size="small" // Adjust the size as needed
            />
          </div>
        </Grid>

        <Grid item xs={12} md={6}>
          <div className='label-textbox-container'>
            <label className='label-custom'>Description</label>
            <TextField
              className='text-field-container'
              id="event-name"
              label="Event Name"
              variant="outlined"
              multiline
              rows={3}
              size="small" // Adjust the size as needed
            />
          </div>
        </Grid>

        <Grid item xs={12} md={6}>
          <div className='label-textbox-container'>
            <label className='label-custom'>Date</label>
            <TextField
              className='text-field-container'
              id="eventdate"
              type='date'
             
              variant="outlined"
              size="small" // Adjust the size as needed
            />
          </div>
        </Grid>

        <Grid item xs={12} md={6}>
          <div className='label-textbox-container'>
            <label className='label-custom'>Venue</label>
            <TextField
              className='text-field-container'
              id="eventdate"
              label="Venue"
              variant="outlined"
              size="small" // Adjust the size as needed
            />
          </div>
        </Grid>

        <Grid item xs={12} md={6}>
          <div className='label-textbox-container'>
            <label className='label-custom'>Upload File</label>
            <TextField
              className='text-field-container'
              id="event-name"
              variant="outlined"
              size="small" // Adjust the size as needed
              type='file'
            />
          </div>
        </Grid>

      <Grid item xs={12} md={6} >
      <label className='label-custom'>Add Workshop</label>
          <Button variant='contained'  onClick={() => setOpenDialog(true)} size='small'  className='button-custom-class'>add </Button>
      </Grid>
    </Grid>


    <Dialog open={openDialog} onClose={() => setOpenDialog(false)}  >
        <DialogTitle>Add Workshop</DialogTitle>
        <DialogContent>
          <div style={{margin:'2%', width:'70%',alignSelf:'center'}}>
          <TextField
            style={{marginBottom:'5%'}}
            label="Workshop Name"
            variant="outlined"
            fullWidth
            value={workshopDetails.workshopname}
            onChange={(e) => setWorkshopDetails({ ...workshopDetails, workshopname: e.target.value })}
          />
          <TextField
             style={{marginBottom:'5%'}}
            label="Description"
            variant="outlined"
            fullWidth
            value={workshopDetails.workshopdescription}
            onChange={(e) => setWorkshopDetails({ ...workshopDetails, workshopdescription: e.target.value })}
          />
          <TextField
           style={{marginBottom:'5%'}}
            label="Venue"
            variant="outlined"
            fullWidth
            value={workshopDetails.workshopvenue}
            onChange={(e) => setWorkshopDetails({ ...workshopDetails, workshopvenue: e.target.value })}
          />
          <TextField
           style={{marginBottom:'5%'}}
           label='Date'
          variant='outlined'
          value={workshopDetails.workshopdate}
          fullWidth
          type='date'
          onChange={(e)=> setWorkshopDetails({ ...workshopDetails,workshopdate:e.target.value})}
          />
          <label>Upload Icon</label>
          <TextField 
           style={{marginBottom:'5%'}}
          variant='outlined'
          fullWidth
          value={workshopDetails.workshopicon}
          type='file'
          onChange={(e)=> setWorkshopDetails({...workshopDetails , workshopicon:e.target.value})}

          />
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
          <Button onClick={handleAddWorkshop} variant="contained" color="primary">
            Add Workshop
          </Button>
        </DialogActions>
      </Dialog>

    
     <div className='workshoplist-container'>
      
        <Grid container spacing={2} style={{width:'100%'}}>
          {workshops.map((workshop, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <div className='workshop-item'>
                <ul>
                  <li>{`Name: ${workshop.workshopname}`}</li>
                  <li>{`Description: ${workshop.workshopdescription}`}</li>
                  <li>
                    <Button color='error'>Remove</Button>
                  </li>
                </ul>
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
     <Button > </Button>
      
    </div>
    </div>
  );
}

export default CreateEvent;
