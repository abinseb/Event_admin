import React, { useState } from 'react';
import { Button, Grid, TextField, Dialog, DialogTitle, DialogContent, DialogActions, Typography } from '@mui/material';
import './Registration.css';
import { Event_registration_Function } from '../../API /Registration';
import ToastMessage from '../../components/ToastNotifications/ToastMessage';
import { isValidateDateGraiterThanCurrent } from '../../Validations/Validation';
import AppBarNew from '../../components/Appbar/AppBarNew';
import { useNavigate } from 'react-router-dom';
import DateAndTimePicker from '../../components/DateTimePicker/Date&Time';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

const [isValidInput,setIsvalidInput] = useState({
  eventname: false,
  eventdescription:false,
  eventvenue:false,
});

// add workshop , store the workshop details in the 'workshops' array
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

// ochange function of the text field is perform
const handleEventDetailsChange=(e)=>{
  const {name ,value} = e.target;

  const isNumericOnly = /^[0-9]+$/;
  
  const isValidInput = !isNumericOnly.test(value);
  // setIsvalidInput(name === 'eventname' ? !isNumericOnly.test(value) : true);
  setIsvalidInput((prevIsValidInput) => ({
    ...prevIsValidInput,
    [name]: isValidInput,
  }));

  // check field is empty or not
  setValidationErrors((prevErrors) => ({
    ...prevErrors,
    [name]: value.trim() === '', // Set to true if the field is empty
  }));

  setEventDetails({ ...eventDetails, [name]: value });
  
}

// check any of thr validation is  failed
const validateForm = () => {
  // Check if any validation fails
  const isFormValid = Object.values(isValidInput).every((isValid) => isValid === true);
  const hasErrors = Object.values(validationErrors).some((error) => error === true);
  console.log("validateresult",isFormValid && !hasErrors);

  return isFormValid && !hasErrors;
};

console.log(imag);

// register event to the db
const handle_EventRegistration=async()=>{
      // check any filed is empty
        if (
          Object.values(eventDetails).some((value) => typeof value === 'string' && value.trim() === '')
        ) {
          // setNotificationView(ToasNotification('error', 'All fields must be filled out.'));
          toast.error('All fields must be filled out.');
          return;
        }
// check is there any validation fail
        if(validateForm()){
        const registrationData ={
          eventDetails:{...eventDetails},
          workshops:[...workshops],
        };
        console.log("Dataa",registrationData);
        // sent data to the registration api
      const RegistrationResponse = await Event_registration_Function(registrationData);
        console.log("RegistrationDataResponse",RegistrationResponse);
        if(RegistrationResponse.data){
        if(RegistrationResponse.data.success === true){
          // alert("Event Created Successfully");
          toast.success('Event Registered.');
          
          setEventDetails({
            eventname:'',
            eventdescription:'',
            eventdate:'',
            eventvenue:'',
            eventimage:null
          })

          navigate('/eventlist');
        }
      }
      else {
        // const errorMessage = RegistrationResponse.response.data.message;
          toast.error(RegistrationResponse.response.data.message);
          
        }
    }   
}
// workshop start and end data value handling
const handleWorkshopDateandTimeHandler=(newdate,namevalue)=>{
  console.log("workshop date",newdate);
const Date =  newdate["$d"].toISOString();
console.log("FetchedWorkshopDate",Date,namevalue);
setWorkshopDetails({ ...workshopDetails, [namevalue]: Date });
}

// time&date data handler of event start and end date
const handleTimeDateChange=(newdate,namevalue)=>{
      console.log("new date",newdate);
    const Date =  newdate["$d"].toISOString();
    console.log("FetchedDate",Date,namevalue);
    setEventDetails({ ...eventDetails, [namevalue]: Date });
}

const cancelRegistration=()=>{
  navigate('/eventlist');
}
  return (
    <>
   <AppBarNew/>
    <div className='registration-container'>

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
              helperText={validationErrors.eventname ? 'Event Name cannot be empty' : (validationErrors.eventname === false && !isValidInput.eventname ? <span style={{ color: 'red' }}>Event Name cannot be numeric</span> : '')} // Display error message
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
              helperText={validationErrors.eventdescription ? 'Description cannot be empty' :(validationErrors.eventdescription === false && !isValidInput.eventdescription ? <span style={{ color: 'red' }}>Description cannot be numeric</span> : '')} 

            />
          </div>
        </Grid>

        <Grid item xs={12} md={6}>
          <div className='label-textbox-container width-style' >
            <label className='label-custom'>Starting Date & Time</label>
            <DateAndTimePicker
              onDateTimeChange={handleTimeDateChange}
              name='startdate_time'
            />
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div className='label-textbox-container width-style'>
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
              helperText={validationErrors.eventvenue ? 'Venue cannot be empty' :(validationErrors.eventdescription === false && !isValidInput.eventvenue ? <span style={{ color: 'red' }}>Venue cannot be numeric</span> : '')} 
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
          <label>Workshop Name</label>
          <TextField
            style={{marginBottom:'5%'}}
            label="Workshop Name"
            variant="outlined"
            fullWidth
            value={workshopDetails.workshopname}
            onChange={(e) => setWorkshopDetails({ ...workshopDetails, workshopname: e.target.value })}
          />
            <label>Description</label>
          <TextField
             style={{marginBottom:'5%'}}
            label="Description"
            variant="outlined"
            fullWidth
            value={workshopDetails.workshopdescription}
            onChange={(e) => setWorkshopDetails({ ...workshopDetails, workshopdescription: e.target.value })}
          />
          <label>Venue</label>
          <TextField
           style={{marginBottom:'5%'}}
            label="Venue"
            variant="outlined"
            fullWidth
            value={workshopDetails.workshopvenue}
            onChange={(e) => setWorkshopDetails({ ...workshopDetails, workshopvenue: e.target.value })}
          />
           <label>Maximum Participants</label>
          <TextField
           style={{marginBottom:'5%'}}
            label="Maximum participants"
            variant="outlined"
            fullWidth
            value={workshopDetails.maximumparticipants}
            onChange={(e) => setWorkshopDetails({ ...workshopDetails, maximumparticipants: e.target.value })}
          />
          <label>Start Date</label>
        
          <DateAndTimePicker
            name='startdate'
            onDateTimeChange={handleWorkshopDateandTimeHandler}
          />
           <label>Start Date</label>
         
          <DateAndTimePicker
            name='enddate'
            onDateTimeChange={handleWorkshopDateandTimeHandler}
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
                <li style={{fontSize:'10px'}}>{`Start Date&Time: ${workshop.startdate}`}</li>
                <li style={{fontSize:'10px'}}>{`End Date&Time: ${workshop.enddate}`}</li>
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
        <Button className='padding-between-buttons' variant='contained' onClick={handle_EventRegistration}>Register</Button>
        <Button className='padding-between-buttons' style={{backgroundColor:'red'}} variant='contained' onClick={cancelRegistration}>Cancel</Button>
    </div>
    
    </div>
    <ToastContainer
        position='top-right'
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
      />
    </>
  );
}

export default CreateEvent;
