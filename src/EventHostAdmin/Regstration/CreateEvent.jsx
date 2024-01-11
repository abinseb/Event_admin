import React, { useState } from 'react';
import { Button, Grid, TextField, Dialog, DialogTitle, DialogContent, DialogActions, Typography } from '@mui/material';
import './Registration.css';
import { Event_registration_Function } from '../../API /Registration';
import ToastMessage from '../../components/ToastNotifications/ToastMessage';
import { isValidateDateGraiterThanCurrent } from '../../Validations/Validation';
import AppBarNew from '../../components/Appbar/AppBarNew';
import { useNavigate } from 'react-router-dom';
import DateAndTimePicker from '../../components/DateTimePicker/Date&Time';
const CreateEvent = () => {

  const navigate = useNavigate();
  const [openDialog, setOpenDialog] = useState(false);
  const [workshops, setWorkshops] = useState([]);
  const [imag,setImage]= useState('');
  const [workshopicon,setWorkshopIcon] = useState('');
  const [workshopDetails, setWorkshopDetails] = useState({
    workshopname:'',
    workshopdescription:'',
    workshopdate:'',
    workshopvenue:'',
    maximumparticipants:'',
    workshopicon:'',
  });

  const [eventDetails , setEventDetails] = useState({
    eventname:'',
    eventdescription:'',
    // startdate_time:'',
    // enddate_time:'',
    eventvenue:'',
    eventimage:null
});

const [validationErrors, setValidationErrors] = useState({
  eventname: false,
  eventdescription:false,
  startdate_time:false,
  enddate_time:false,
  eventvenue:false,
  eventimage:false,
});
// Toast notifications
const [notificationView,setNotificationView] = useState(null);

  const handleAddWorkshop = () => {
    setWorkshops([...workshops, workshopDetails]);
    setWorkshopDetails({  workshopname:'',
                          workshopdescription:'',
                          workshopdate:'',
                          workshopvenue:'',
                          maximumparticipants:'',
                          workshopicon:''
                        });
    setOpenDialog(false);
  };

// remove the workshops
const handle_removeWorkshops=(index)=>{
  const updatedWorkshops = [...workshops];
  updatedWorkshops.splice(index,1);
  setWorkshops(updatedWorkshops);
}

const handleEventDetailsChange=(e)=>{
  const {name ,value} = e.target;

  const isNumericOnly = /^[0-9]+$/;
  const isValidInput = name === 'eventname' ? !isNumericOnly.test(value) : true;

  setValidationErrors((prevErrors) => ({
    ...prevErrors,
    [name]: value.trim() === '', // Set to true if the field is empty
  }));

  setEventDetails({ ...eventDetails, [name]: value });
  // setEventDetails({...eventDetails,[e.target.name]:e.target.value});
}

// const handleEventFileChange=(e)=>{
//   // const file = e.target.files[0];
//   const data = new FileReader();
//   data.addEventListener('load',()=>{
//     const base64icon = data.result;
//     setEventDetails({...eventDetails,eventimage:base64icon});
//   })
//   data.readAsDataURL(e.target.files[0])
//   //  setEventDetails({...eventDetails,eventimage:imag});
// }

console.log(imag);

const handle_EventRegistration=async()=>{
      try{
        if (
          Object.values(eventDetails).some((value) => typeof value === 'string' && value.trim() === '')
        ) {
          setNotificationView(ToasNotification('error', 'All fields must be filled out.'));
          return;
        }

        // if(!isValidateDateGraiterThanCurrent(eventDetails.startdate_time)){
        //   setNotificationView(ToasNotification('error', 'Invalid Date'));
        //   return;
        // }
        const registrationData ={
          eventDetails:{...eventDetails},
          workshops:[...workshops],
        };
        console.log("Dataa",registrationData);
      const RegistrationResponse = await Event_registration_Function(registrationData);
        console.log("RegistrationData",RegistrationResponse);
        if(RegistrationResponse.data.success === true){
          // alert("Event Created Successfully");
          setNotificationView(ToasNotification('success','Event Registration Success'));
          
          setEventDetails({
            eventname:'',
            eventdescription:'',
            eventdate:'',
            eventvenue:'',
            eventimage:null
          })

          navigate('/eventlist');
        }
        // else{
        //   setNotificationView(ToasNotification('error','Error'))
        // }
      }
      catch(error){
        console.log("Error in eventregistration", error);
        setNotificationView(ToasNotification('error','Error'))
      }
}

const ToasNotification=(type,message)=>{
  return <ToastMessage type={type} message={message}/>
}
const handleTimeDateChange=(newdate,namevalue)=>{
      console.log("new date",newdate);
    const Date =  newdate["$d"].toISOString();
    console.log("FetchedDate",Date,namevalue);
    setEventDetails({ ...eventDetails, [namevalue]: Date });
}

  return (
    <>
   <AppBarNew/>
    <div className='registration-container'>
      {notificationView}
      <div style={{width:'70%'}}>  
      <Typography variant='h5' className='tittle-custom-style'>Event Registration</Typography>  
    <Grid container spacing={1} className='grid-form-container'>
        <Grid item xs={12} md={6}>
          <div className='label-textbox-container'>
            <label className='label-custom'>Event Name</label>
            <TextField
              className='text-field-container'
              id='event-name'
              label='Event Name'
              variant='outlined'
              name='eventname'
              type='text'
              value={eventDetails.eventname}
              onChange={handleEventDetailsChange}
              error={validationErrors.eventname} // Set error prop based on validation status
              helperText={validationErrors.eventname && 'Required'} // Display error message
            />
          </div>
        </Grid>

        <Grid item xs={12} md={6}>
          <div className='label-textbox-container'>
            <label className='label-custom'>Description</label>
            <TextField
              className='text-field-container'
              label="Description"
              variant="outlined"
              multiline
              rows={3}
              size="medium" // Adjust the size as needed
              name='eventdescription'
              value={eventDetails.eventdescription}
              onChange={handleEventDetailsChange}
              error={validationErrors.eventdescription} // Set error prop based on validation status
              helperText={validationErrors.eventdescription && 'Required'} 

            />
          </div>
        </Grid>

        <Grid item xs={12} md={6}>
          <div className='label-textbox-container'>
            <label className='label-custom'>Starting Date & Time</label>
            <DateAndTimePicker
              onDateTimeChange={handleTimeDateChange}
              name='startdate_time'
            />
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div className='label-textbox-container'>
            <label className='label-custom'>Ending Date & Time</label>
            <DateAndTimePicker
              onDateTimeChange={handleTimeDateChange}
              name='enddate_time'
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
              size="medium" // Adjust the size as needed
              name='eventvenue'
              value={eventDetails.eventvenue}
              onChange={handleEventDetailsChange}
              error={validationErrors.eventvenue} // Set error prop based on validation status
              helperText={validationErrors.eventvenue && 'Required'} 
            />
          </div>
        </Grid>

        <Grid item xs={12} md={6}>
          <div className='label-textbox-container'>
            <label className='label-custom'>Upload File</label>
            <TextField
              className='text-field-container'
              variant="outlined"
              size="medium" // Adjust the size as needed
              type='file'
              name='eventimage'
              onChange={(e) => {
                const file = e.target.files[0];
                
                if (file) {
                  const reader = new FileReader();

                  reader.onloadend = () => {
                    // Convert the file content to base64
                    const base64Data = reader.result.split(',')[1];

                    // Update the state with the base64 data
                    setEventDetails({ ...eventDetails, eventimage: base64Data });
                  };

                  // Read the file as a data URL (base64)
                  reader.readAsDataURL(file);
                }
              }}

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
            label="Maximum participants"
            variant="outlined"
            fullWidth
            value={workshopDetails.maximumparticipants}
            onChange={(e) => setWorkshopDetails({ ...workshopDetails, maximumparticipants: e.target.value })}
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
                style={{ marginBottom: '5%' }}
                variant='outlined'
                fullWidth
                name='workshopicon'
                type='file'
                onChange={(e) => {
                  const file = e.target.files[0];
                  
                  if (file) {
                    const reader = new FileReader();

                    reader.onloadend = () => {
                      // Convert the file content to base64
                      const base64Data = reader.result.split(',')[1];

                      // Update the state with the base64 data
                      // setWorkshopDetails({ ...workshopDetails, workshopicon: base64Data });
                        setEventDetails({...eventDetails,eventimage:base64Data});
                    };

                    // Read the file as a data URL (base64)
                    reader.readAsDataURL(file);
                  }
                }}
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
                <li style={{fontSize:'10px'}}>{`MaximumParticipants: ${workshop.maximumparticipants}`}</li>
                {/* <li style={{fontSize:'10px'}}>{`Icon: ${workshop.workshopicon}`}</li> */}
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
    </>
  );
}

export default CreateEvent;
