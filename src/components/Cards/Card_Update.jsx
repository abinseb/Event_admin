import React, { useState } from 'react';
import { Button, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import './Card_custom.css';

const Card_Update = ({workshopname,date,venue,maxparticipants,onEditClick}) => {

  return (
    <Card className='card-container'>
    <div className='inner-container'>
    <CardMedia
        component="img"
        image={require('../../image/evnt2.jpeg')}
        alt='icon'
        style={{width:'40%'}}
      
    />
    <CardContent className='Details-container'>
        <Typography className='title-class'>{workshopname}</Typography>
        <Typography className='sub-details-text'>Date : {date}</Typography>
        <Typography className='sub-details-text'>Venue : {venue}</Typography>
        <Typography className='sub-details-text'>Maximum Participants : {maxparticipants}</Typography>
    </CardContent>
    <IconButton
          aria-label="close"
          style={{
            color: 'red',
            height: '15px',
            width: '15px', // Adjusted width here
           
            marginRight:'10px', 
          }}
        >
          <CloseIcon  sx={{ fontSize: 15 ,color:'red' }} />
        </IconButton>
    </div>
    <CardActions className='card-bottom-action'>
      <Button variant='outlined'  sx={{ fontSize: 10, height:20 }} onClick={onEditClick}> Edit</Button>
    </CardActions>
    </Card>
  );
};

export default Card_Update;
