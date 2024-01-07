// EventList.js

import React, { useEffect, useState } from 'react';
import { Button, Grid, Paper, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './eventCard.css';
import axios from 'axios';
import { URL_Fetch } from '../../API /URL_Fetch';
import RedirectedToRegister from '../WarningPages/RedirectToRegister';
import AppBarNew from '../../components/Appbar/AppBarNew';

const EventList = () => {

    const url = URL_Fetch();
    const token = sessionStorage.getItem("token");

    const navigate = useNavigate();

    const [eventList,setEventList] = useState([]);

    useEffect(()=>{
        EnetlistFetch();

    },[])
const EnetlistFetch=async()=>{
    try{
    const eventData =await axios.get(`${url}/host/event`,{
        headers:{
            Authoriztion:token,
        },
    });

    console.log('EventDataaaa',eventData.data);
    // if(eventData.data !== n){
    setEventList(eventData.data);
    // }
    console.log("type",typeof(eventList),eventList);
}
catch(error){
    console.error(error);
}
}

    const handleNavigationToAddEvent=()=>{
        navigate('/eventRegister');
    }

    const handleViewEvent=async(eventId)=>{
        alert(eventId)
       await localStorage.setItem("eventid",eventId);
       await navigate('/drawer')
    }
    
  return (
    <>
    <AppBarNew />
    {eventList.event  ?(
    <RedirectedToRegister />
    )
    :
    (
    <div className='containerBody' style={{paddingTop:'10px'}}>
        <div style={{paddingBottom:'30px'}}>
        <button class="button-71" role="button" onClick={handleNavigationToAddEvent}>Add Event</button>
        </div>
    <Grid container spacing={1} style={{paddingLeft:'200px',overflowY: 'auto', maxHeight: '500px'}} >
      {eventList && eventList.map((event, index) => (
        <Grid item key={index} xs={12} sm={4} md={4} lg={4}>
          <Paper elevation={3} className="card-hover">
            <div className="card-hover__content">
              <Typography variant="h6" className="card-hover__title">
                {event.title}
              </Typography>
              <Typography variant="body2" className="card-hover__text">
                {event.description}
              </Typography>
              <a onClick={()=>{handleViewEvent(event._id)}} className="card-hover__link">
                <span>View</span>
                <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </div>
            <div className="card-hover__extra">
              <Typography variant="subtitle2">
                {event.extraInfo}
              </Typography>
            </div>
            <img
           src={`data:image/jpeg;base64,${event.icon}`}  
            alt=""
            className="card-hover__image"
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            />

          </Paper>
        </Grid>
      ))}
    </Grid>
    </div>
    )
}

    </>
  );
};

export default EventList;
