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
    setEventData(event.data);
  }
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
              <Typography   className='event-part-Text align-position-text'>Date: 09/08/2023</Typography>
              
            </div>
        </div>
      
    </div>
  )
}

export default HomeParticipant
