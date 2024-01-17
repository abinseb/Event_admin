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
import { DeleteEventFromDB } from '../../API /Deletion';
import ConfirmationDialog from '../../components/Dialog/ConfrmationDialog';
const PublishEvent = () => {
  const publishurl = window.location.href;
  const navigate = useNavigate();
  const url = URL_Fetch();
  const [approvedStatus, setApprovedStatus] = useState();
  const [eventData,setEventData] = useState([]);
  const [subEventlist,setSubEventlist] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [urlType , setUrl] = useState('');
  const [confirmOpenDialog,setConfirmOpenDialog] = useState(false);
  const [publishconfirm, setPublishConfirm] = useState(false);
  
  
  useEffect(()=>{
    eventDetailsFetch();
  },[])
  const formatDateTime = (dateTimeString) => {
    return new Date(dateTimeString).toLocaleString('en-GB');
  }
  const eventDetailsFetch=async()=>{
      const event = await eventDataFetch_Single();
      const workshop = await WorkshopDataFetch();
      console.log("Eventdataa",event);
      event.data.start_date_time = formatDateTime(event.data.start_date_time)
      event.data.end_date_time = formatDateTime(event.data.end_date_time)
      await setEventData(event.data)
      await setSubEventlist(workshop);
      console.log("WorkshopDetails",workshop);

  }

  // here open the popup and url of the published event is on that popup
const publishEventDetails=async()=>{
    const dynamicURL = await `/participanthome/${eventData._id}`;
    const topurl = new URL(publishurl)
   await setUrl(topurl.origin + dynamicURL);
   await dialogOpen();
  }

  // popup for copy the published url
  const dialogOpen=()=>{
    setOpenDialog(true);
  }

  // closing the popup
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

// delete the event before approve
const eventDeleteBeforeApprove=async()=>{
  console.log("Eventdelete",eventData._id);
  const deleteEvent =await DeleteEventFromDB(eventData._id);
  console.log(deleteEvent);
  if(deleteEvent.status === 200){
    navigate('/eventlist');
  }
  else if(deleteEvent.status === undefined){
    alert("Deletion Failed");
  }
}
// handle open the dialog
const handleopenConfirmDialoge=()=>{
  setConfirmOpenDialog(true);
}
// handle close the confirm dialog
const handleCloseConfirmdialog=()=>{
  setConfirmOpenDialog(false);
}

// open the publish confirm dlalog
const handleOpenPublish=()=>{
  setPublishConfirm(true);
}
// close the publish confirm dialog, popup box
const handleClosePublish=()=>{
  setPublishConfirm(false);
}


return (
    <>
{eventData &&
    <div className='container-custom-outer' style={{backgroundImage:`url(data:image/jpeg;base64,${eventData.icon})` }}>
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
                  <Typography className='text2-style-class-time'>Start Date: {eventData.start_date_time}</Typography>
                  <Typography className='text2-style-class-time'>End Date: {eventData.end_date_time}</Typography>
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
        {eventData.approve === true ?
        <div className='button-view-style-class'>
            <Button className='button-custom-style' onClick={handleOpenPublish}>Publish</Button>
            
        </div>
        :
        <div className='button-view-style-class'>
        <Typography className='pulish-event-text-style'>Approval of Event is Pending,You can delete at any time</Typography>
        <Button className='button-custom-delete-style'onClick={handleopenConfirmDialoge}>Delete</Button>
      </div> 
      }
        
        </>
        <ConfirmationDialog 
          open={publishconfirm}
          onClose={handleClosePublish}
          onConfirm={publishEventDetails}
          message={'Are you sure you want to Publish this event?'}
        />

        <ConfirmationDialog 
          open={confirmOpenDialog}
          onClose={handleCloseConfirmdialog}
          onConfirm={eventDeleteBeforeApprove}
          message={'Are you sure you want to delete this event?'}
        />
      
        <Dialog_box
        open={openDialog}
        message="Copy the published url"
        url={urlType}
        handleClose={handleCloseDialog}
        handleCopyUrl={handleCopyUrl}
      />
    </div>
 
    }
    </>
  )
}

export default PublishEvent
