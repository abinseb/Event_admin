import React from 'react';
import { Button, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import './Card_custom.css';

const Card_Update = ({ workshopname, date, venue, maxparticipants, onEditClick, imageData,onDeleteClicked }) => {
  return (
    <Card className='card-container'>
      <div className='inner-container'>
        <CardMedia
          component="img"
          src={`data:image/jpeg;base64,${imageData}`}  
          alt='icon'
          style={{ width: '100px',height:'100px' }}

        />
        <CardContent className='Details-container'>
          <Typography className='title-class'>{workshopname}</Typography>
          <Typography className='sub-details-text'>Date : {date}</Typography>
          <Typography className='sub-details-text'>Venue : {venue}</Typography>
          <Typography className='sub-details-text'>Max Participants : {maxparticipants}</Typography>
        </CardContent>
        <IconButton
          aria-label="close"
          className='workshop_delete_icon'
          style={{
            color: 'red',
            height: '15px',
            width: '15px',
            // marginLeft: '70px',
            marginTop:'10px'
          }}
          onClick={onDeleteClicked}
        >
          <DeleteIcon sx={{ fontSize: 25, color: 'red' }} />
        </IconButton>
      </div>
      <CardActions className='card-bottom-action'>
        <Button variant='outlined' sx={{ fontSize: 10, height: 20 }} onClick={onEditClick}> Edit</Button>
      </CardActions>
    </Card>
  );
};

export default Card_Update;
