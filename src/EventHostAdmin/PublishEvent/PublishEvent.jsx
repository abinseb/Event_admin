import React, { useEffect, useState } from 'react';
import { Box, Card, CardContent, Grid, Typography ,List, ListItem} from '@mui/material';
import './Publishevent.css'
import { Button } from 'react-bootstrap';
import RedirectedToRegister from '../WarningPages/RedirectToRegister';
import { URL_Fetch } from '../../API /URL_Fetch';
import axios from 'axios';
import {  WorkshopDataFetch, eventDataFetch_Single } from '../../API /GetDataFromDB';
import { useNavigate } from 'react-router-dom';
import Dialog_box from '../../components/Dialog/Dilog_Box';
import './boxlist.scss'
const PublishEvent = () => {
  const publishurl = window.location.href;
  const navigate = useNavigate();
  const url = URL_Fetch();
  const [approvedStatus, setApprovedStatus] = useState();
  const [eventData,setEventData] = useState([]);
  const [subEventlist,setSubEventlist] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [urlType , setUrl] = useState('');
  
  useEffect(()=>{
    eventDetailsFetch();
  },[])

  const eventDetailsFetch=async()=>{
      const event = await eventDataFetch_Single();
      const workshop = await WorkshopDataFetch();
      console.log("Eventdataa",event);
      await setEventData(event.data)
      await setSubEventlist(workshop);
      console.log("WorkshopDetails",workshop);

  }

  const publishEventDetails=async()=>{
    const dynamicURL = await `/participanthome/${eventData._id}`;
    // navigate(dynamicURL);
    const topurl = new URL(publishurl)
   await setUrl(topurl.origin + dynamicURL);
   await dialogOpen();
  }

  const dialogOpen=()=>{
    setOpenDialog(true);
  }
  const handleCloseDialog=()=>{
    setOpenDialog(false);
  }
  const handleCopyUrl = (url) => {
    // Implement URL copy logic here, for example using the Clipboard API
    navigator.clipboard.writeText(url)
      .then(() => {
        console.log('URL copied successfully');
      })
      .catch((error) => {
        console.error('Error copying URL:', error);
      });
  };


  return (

    <div className='container-custom-outer' style={{backgroundImage:`url(data:image/jpeg;base64,${eventData.icon})` ,backgroundSize:'cover'}}>
         <>
         {/*<div className='image-container-custom'>
        <img className='image-custom'  src={`data:image/jpeg;base64,${eventData.icon}`}   alt='Eventvlogo image' />
      </div> */}
      <div className='card-box-container'>
          <Grid container spacing={2} className='grid-container'>
            <Grid item xs={12} md={6} className='grid-class-style'>
            <div className="root-container">
                <Typography className='card-tittle-class'>Program Details</Typography>
                <div className='box-div-text-arrange-container'>
                  <h2>{eventData.title}</h2>
                  {/* <Typography className='event-title-class'>{eventData.title}</Typography> */}
                  <Typography className='text2-style-class-time'>Start Date: {eventData.start_time_date}</Typography>
                  <Typography className='text2-style-class-time'>End Date: {eventData.end_time_date}</Typography>
                  <Typography className='text2-style-class-time'>Venue: {eventData.venu}</Typography>
                  {/* <Typography className='text4-style-class-description'>
                      {eventData.description}
                  </Typography> */}
                  <p>{eventData.description}</p>
                </div>
                </div>
            </Grid>
            <Grid item xs={12} md={6} className='grid-class-style'>
              {/* <Box className='box-custom'>
                <Typography className='card-tittle-class'>Sub-Activities</Typography> */}
                
                <div className="root-container">
                    <h2>Sub Events</h2>
                <ol className="alternating-colors">
                  {subEventlist.map((item, index) => (
                    <li className='listyle' key={index}>
                      <strong>{item.title}</strong>
                      <p>{item.description}</p>
                    </li>
                  ))}
                </ol>
                  
                </div>
{/*                
              </Box> */}
            </Grid>
          </Grid>
        </div>
        <div className='button-view-style-class'>
        {eventData.approve === true ?
            <Button className='button-custom-style' onClick={publishEventDetails}>Publish</Button>
            :
           
            <Typography className='status-text'>The approval for the event is currently pending.</Typography>
            }
        </div>
        
        </>
      {/* <div className='event-not-approved'>
        <Typography style={{fontSize:'20px',color:'red'}}>Approval of Event is Pending,</Typography>
      </div> */}
        <Dialog_box
        open={openDialog}
        message="Copy the published url"
        url={urlType}
        handleClose={handleCloseDialog}
        handleCopyUrl={handleCopyUrl}
      />
    </div>
// }
//     </>
  )
}

export default PublishEvent
