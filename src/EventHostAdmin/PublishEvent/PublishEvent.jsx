import React, { useState } from 'react';
import { Box, Card, CardContent, Grid, Typography } from '@mui/material';
import './Publishevent.css'
import { Button } from 'react-bootstrap';

const PublishEvent = () => {
  const [approvedStatus, setApprovedStatus] = useState(false);
  return (
  
    <div className='container-custom-outer'>
        <div className='image-container-custom'>
            <img className='image-custom' src={require('../../image/evnt2.jpeg')} alt='Eventvlogo image' />
        </div>
      <div className='card-box-container'>
            <Grid container spacing={2} className='grid-container'>
                <Grid item xs={12} md={6} className='grid-class-style' >
                <Box className='box-custom'>
                  <Typography  className='card-tittle-class'>Program Details</Typography>
                   <div className='box-div-text-arrange-container'>
                    <Typography className='event-title-class'>Icset 4.0.01</Typography>
                    <Typography className='text2-style-class-time' >Program Organised on 17-10-2023</Typography>
                    <Typography className='text3-style-class-venue'>Venue: Adlux Auditoriam Angamali</Typography>
                    <Typography className='text4-style-class-description'>AI-focused industrial talk series, connecting with experts
                       to gain insights into the latest advancements and applications shaping various
                        industries.
                      </Typography>
                   </div>
                </Box>
                </Grid>
                <Grid item xs={12} md={6} className='grid-class-style'>
                <Box className='box-custom'>
                  <Typography  className='card-tittle-class'>Sub-Activities</Typography>
                   <div style={{paddingTop:'5%'}}>
                   <ul >
                        <li className='list-item'>Google workshops</li>
                        <li className='list-item'>IBM Workshops</li>
                        <li className='list-item'>Oracle Workshops</li>
                    </ul>
                   </div>
                </Box>
                </Grid>
            </Grid>
      </div>
      <div className='button-view-style-class'>
        {approvedStatus ===true ? 
          <Button className='button-custom-style'>Publish</Button>
          :
          <Typography style={{fontSize:'14px',color:'red'}}>The approval for the event is currently pending.</Typography>
        }
      </div>
      {/* <div className='event-not-approved'>
        <Typography style={{fontSize:'20px',color:'red'}}>Approval of Event is Pending,</Typography>
      </div> */}
    </div>
  )
}

export default PublishEvent
