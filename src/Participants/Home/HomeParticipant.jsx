import React, { useEffect, useState } from 'react'
import './Home.css';
import { Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { URL_Fetch } from '../../API /URL_Fetch';
const HomeParticipant = () => {

  const {eventid} = useParams();
  const urlfetch =URL_Fetch();

  const navigate = useNavigate();
  // event data fetch array
  const[eventdata , setEventData] = useState([]);

  // navigate to the participant registration page
  const navigationToRegister=()=>{
    navigate('/participantregister',{state:{eventid :eventid}});
  }

  useEffect(()=>{
    eventDetailsFetch();
  },[])
  const eventDetailsFetch=async()=>{
    // const url = new URL(urlfetch);
    // console.log(url.origin);
    // const baseurl = url.origin;
    console.log("evenid",eventid);
    const event = await axios.get(`${urlfetch}/host/event/details/${eventid}`);
    console.log("eventdata",event.data);
    event.data.start_date_time =formatDateTime(event.data.start_date_time);
    event.data.end_date_time =formatDateTime(event.data.end_date_time);

    setEventData(event.data);
  }

  // date formating
  const formatDateTime = (dateTimeString) => {
    const options = {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    };
    return new Date(dateTimeString).toLocaleString('en-GB', options);
  };
  return (
    <div className='event-participant-container' style={{backgroundImage:`url(data:image/jpeg;base64,${eventdata.icon})`}}>
        <div className='event-participants-details'>
          <div>
          <Typography className='event-partic-Title-text'  >{eventdata.title}</Typography>
          </div>
          
            
            <div className='event-partic-ButtonView'>

            <button class="button-19" role="button" onClick={navigationToRegister}>Register</button>
            </div>
            <div className='event-partic-details-view' >
              <Typography className='event-part-Text' style={{fontStyle:'italic'}}>
                {eventdata.description}
              </Typography>
              <Typography   className='event-part-Text align-position-text'>Venu: {eventdata.venu}</Typography>
              <Typography   className='event-part-Text align-position-text'>Start Date & Time: {eventdata.start_date_time}</Typography>
              <Typography   className='event-part-Text align-position-text'>End Date & Time:{eventdata.end_date_time} </Typography>
              
            </div>
        </div>
      
    </div>
  )
}

export default HomeParticipant
