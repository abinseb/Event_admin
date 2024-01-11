import React from 'react'
import './Home.css';
import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
const HomeParticipant = () => {

  const navigate = useNavigate();
  const navigationToRegister=()=>{
    navigate('/participantregister');
  }
  return (
    <div className='event-participant-container'>
        <div className='event-participants-details'>
          <div>
          <Typography className='event-partic-Title-text'  >The First International Conference</Typography>
          </div>
          
            
            <div className='event-partic-ButtonView'>

            <button class="button-19" role="button" onClick={navigationToRegister}>Register</button>
            </div>
            <div className='event-partic-details-view' >
              <Typography className='event-part-Text' style={{fontStyle:'italic'}}>"Events are occasions that bring people together for a specific purpose,such as 
                celebrations, conferences, or gatherings. They serve as platforms for networking, learning, 
                and fostering connections. From corporate meetings to cultural festivals, events play a pivotal
                 role in creating memorable experiences. Event planning involves  coordina 
                  tion to ensure smooth execution and attendee satisfaction.”
              </Typography>
              <Typography   className='event-part-Text align-position-text'>Venu: Adlux Auditoriam Angamaly</Typography>
              <Typography   className='event-part-Text align-position-text'>Date: 09/08/2023</Typography>
              
            </div>
        </div>
      
    </div>
  )
}

export default HomeParticipant
