import React, { useEffect, useState } from 'react'
import { TextField,Typography,Button } from '@mui/material';
import './edit.css';
import DateAndTimePicker from '../../components/DateTimePicker/Date&Time';
import { eventDataFetch_Single } from '../../API /GetDataFromDB';
import { update_Event_details } from '../../API /Updation';
import ToastMessage from '../../components/ToastNotifications/ToastMessage';


const EventEdit = () => {

  // for storing event data from the server
  const[eventList,setEventList] = useState([]);
  // for storing the notification message
  const [notfication,setNotification] = useState('');
  useEffect(()=>{
    eventDataFetch();
  },[])

  // fetch the event details
  const eventDataFetch=async()=>{
    const event = await eventDataFetch_Single();
    console.log("EventList",event.data);
    await setEventList(event.data);
  }
// handling the date inputs start date and end date with time
const handleTimeAndDate=(Date,name)=>{
   const newDate =  Date["$d"].toISOString()
    console.log("Formated date",newDate,name);
    setEventList((prevEventList) => ({
      ...prevEventList,
      [name]: newDate,
    }));
}

// handling the inputs from the text field
const handleInputChange=(e)=>{
  const {name , value } = e.target;

  setEventList((prevEventList) => ({
    ...prevEventList,
    [name]: value,
  }));
}

// update the event details latest to the server
const Update_EventList=async()=>{

  const update = await update_Event_details(eventList);
  console.log("updateResponse",update.status);
  if(update.status === 200){
    setNotification(Notification("success","Updated"))
    eventDataFetch();
  }
  else if(update.status === undefined){
    setNotification(Notification("error","Updation Failed"))
  }
}

const Notification=(type,msg)=>{
  return(
    <ToastMessage
      type={type}
      message={msg}
    />
  )
}

  return (
    <div className='event-edit-container'>
    <div className='event-edit-title-container'>
      <Typography style={{ paddingRight: '30px', fontSize: '40px', fontWeight: '500' }}>Event</Typography>
    </div>
    
    <div className='event-edit-form-container' >
      <div className='event-edit-textbox-container' >
        <label className='label'>Event Name</label>
        <TextField
          className='event-textfield-style'
          // label="Event Name"
          variant='outlined'
          value={eventList.title}
          name='title'
          onChange={handleInputChange}
        />
      </div>

      <div className='event-edit-textbox-container' >
        <label className='label'>Description</label>
        <TextField
          className='event-textfield-style'
          // label="Description"
          variant='outlined'
          multiline
          rows={3}
          value={eventList.description}
          name='description'
          onChange={handleInputChange}
        />
      </div>

      <div className='event-edit-textbox-container' >
        <label className='label'>Starting Date & Time</label>
        <DateAndTimePicker
            onDateTimeChange={handleTimeAndDate}
            name={'startdate_time'}
            date={eventList.start_date_time}
        />
      </div>

      <div className='event-edit-textbox-container' >
        <label className='label'>Ending Date & Time</label>
            <DateAndTimePicker
                onDateTimeChange={handleTimeAndDate}
                name={'enddate_time'}
                date={eventList.end_date_time}
            />
      </div>

      <div className='event-edit-textbox-container' >
        <label className='label'>Venue</label>
        <TextField
          className='event-textfield-style'
          // label="Event Name"
          variant='outlined'
          value={eventList.venu}
          name='venu'
          onChange={handleInputChange}
        />
      </div>
    
      <div className='event-edit-textbox-container' >
        <label className='label'>Upload File</label>
        <TextField
          className='event-textfield-style'
          variant='outlined'
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
                setEventList({ ...eventList, icon: base64Data });
              };

              // Read the file as a data URL (base64)
              reader.readAsDataURL(file);
            }
          }}
        />
      </div>

    </div>
    <div className='event-edit-button-view'>
        <Button variant='contained' className='event-partici-button' onClick={Update_EventList}>Update</Button>
    </div>
   {notfication}
  </div>
  )
}

export default EventEdit
