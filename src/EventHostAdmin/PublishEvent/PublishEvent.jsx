import React, { useEffect, useState } from 'react';
import { Box, Card, CardContent, Grid, Typography } from '@mui/material';
import './Publishevent.css'
import { Button } from 'react-bootstrap';
import RedirectedToRegister from '../WarningPages/RedirectToRegister';
import { URL_Fetch } from '../../API /URL_Fetch';
import axios from 'axios';
import {  eventDataFetch_Single } from '../../API /GetDataFromDB';
;

const PublishEvent = () => {
  const url = URL_Fetch();
  const [approvedStatus, setApprovedStatus] = useState(false);
  const [eventData,setEventData] = useState([]);
  const [subEventlist,setSubEventlist] = useState([])

  useEffect(()=>{
    eventDetailsFetch();
  },[])

  const eventDetailsFetch=async()=>{
      const event = await eventDataFetch_Single();
      console.log("Eventdataa",event);
      await setEventData(event.data)
      await setSubEventlist(event.data.workshops)

  }
  return (
//  <>
//  {eventData.length === 0 ?
//  <RedirectedToRegister/>
//   :
    <div className='container-custom-outer'>
        <><div className='image-container-custom'>
        <img className='image-custom'  src={`data:image/jpeg;base64,${eventData.icon}`}   alt='Eventvlogo image' />
      </div><div className='card-box-container'>
          <Grid container spacing={2} className='grid-container'>
            <Grid item xs={12} md={6} className='grid-class-style'>
              <Box className='box-custom'>
                <Typography className='card-tittle-class'>Program Details</Typography>
                <div className='box-div-text-arrange-container'>
                  <Typography className='event-title-class'>{eventData.title}</Typography>
                  <Typography className='text2-style-class-time'>Program Organised on {eventData.date}</Typography>
                  <Typography className='text3-style-class-venue'>Venue: {eventData.venu}</Typography>
                  <Typography className='text4-style-class-description'>
                      {eventData.description}
                  </Typography>
                </div>
              </Box>
            </Grid>
            <Grid item xs={12} md={6} className='grid-class-style'>
              <Box className='box-custom'>
                <Typography className='card-tittle-class'>Sub-Activities</Typography>
                {subEventlist.map((workshop)=>(
                <div style={{ paddingTop: '5%' }}>
                  <ul>
                    <li className='list-item'>{workshop}</li>
                    
                  </ul>
                </div>
                ))}
              </Box>
            </Grid>
          </Grid>
        </div><div className='button-view-style-class'>
          {/* {approvedStatus === true ? */}
            <Button className='button-custom-style'>Publish</Button>
            {/* :
            <Typography className='status-text'>The approval for the event is currently pending.</Typography>} */}
        </div></>
      {/* <div className='event-not-approved'>
        <Typography style={{fontSize:'20px',color:'red'}}>Approval of Event is Pending,</Typography>
      </div> */}
    </div>
// }
//     </>
  )
}

export default PublishEvent
