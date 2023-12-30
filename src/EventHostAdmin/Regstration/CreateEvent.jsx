import React, { useState } from 'react';
import { Button, Grid, TextField, Dialog, DialogTitle, DialogContent, DialogActions, Typography } from '@mui/material';
import './Registration.css';
import { Event_registration_Function } from '../../API /Registration';
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

  const [eventDetails , setEventDetails] = useState({
    eventname:'',
    eventdescription:'',
    eventdate:'',
    eventvenue:'',
    eventimage:null
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
const handle_removeWorkshops=(index)=>{
  const updatedWorkshops = [...workshops];
  updatedWorkshops.splice(index,1);
  setWorkshops(updatedWorkshops);
}

const handleEventDetailsChange=(e)=>{
  setEventDetails({...eventDetails,[e.target.name]:e.target.value});
}

const handleEventFileChange=(e)=>{
  const file = e.target.file[0];
  setEventDetails({...eventDetails,eventimage:file});
}

const handle_EventRegistration=async()=>{
      try{
        const registrationData ={
          eventDetails:{...eventDetails},
          workshops:[...workshops],
        };
        console.log("Dataa",registrationData);
      const RegistrationResponse = await Event_registration_Function(registrationData);
        console.log("RegistrationData",RegistrationResponse.data.success);
        if(RegistrationResponse.data.success === true){
          alert("Event Created Successfully");
        }
      }
      catch(error){
        console.log("Error in eventregistration", error);
      }
}
  return (
    <div className='registration-container'>
      <div style={{width:'70%'}}>  
      <Typography variant='h5' className='tittle-custom-style'>Event Registration</Typography>  
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
              name='eventname'
              value={eventDetails.eventname}
              onChange={handleEventDetailsChange}
            />
          </div>
        </Grid>

        <Grid item xs={12} md={6}>
          <div className='label-textbox-container'>
            <label className='label-custom'>Description</label>
            <TextField
              className='text-field-container'
              label="Event Name"
              variant="outlined"
              multiline
              rows={3}
              size="small" // Adjust the size as needed
              name='eventdescription'
              value={eventDetails.eventdescription}
              onChange={handleEventDetailsChange}

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
              name='eventdate'
              value={eventDetails.eventdate}
              onChange={handleEventDetailsChange}
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
              name='eventvenue'
              value={eventDetails.eventvenue}
              onChange={handleEventDetailsChange}
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
              name='eventimage'
              onChange={handleEventFileChange}

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
      <Grid container spacing={2} style={{ width: '100%' }}>
        {workshops.map((workshop, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <div className='workshop-item'>
              <h6>{workshop.workshopname}</h6>
              <ul>
                <li style={{fontSize:'10px'}}>{`Description: ${workshop.workshopdescription}`}</li>
                <li style={{fontSize:'10px'}}>{`Date: ${workshop.workshopdate}`}</li>
                <li style={{fontSize:'10px'}}>{`Venue: ${workshop.workshopvenue}`}</li>
                <li style={{fontSize:'10px'}}>{`Icon: ${workshop.workshopicon}`}</li>
              </ul>
              <div style={{ marginTop: '10px', textAlign:'start' }}>
                <Button style={{height:'20px',width:'auto',fontSize:'8px'}} 
                variant='contained' color='secondary' onClick={() => handle_removeWorkshops(index)}>
                  Remove
                </Button>
              </div>
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
    </div>
    <div className='bottom-button-container'>
        <Button variant='contained' onClick={handle_EventRegistration}>Register</Button>
    </div>
    
    </div>
  );
}

export default CreateEvent;
