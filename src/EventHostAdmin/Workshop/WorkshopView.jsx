import React, { useState } from 'react'
import './Workshop.css';
import { Button, Grid, Typography } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Card_Update from '../../components/Cards/Card_Update';
import Dialoge_forUpdate from '../../components/Dialog/Dialoge_forUpdate';

const workshopData =[
    {
      "name": "Google",
      "date": "10-12-2023",
      "venue": "Place",
      "maximumParticipants": 200
    },
    {
      "name": "IBM",
      "date": "10-12-2023",
      "venue": "Place",
      "maximumParticipants": 200
    },
    {
      "name": "Oracle",
      "date": "10-12-2023",
      "venue": "Place",
      "maximumParticipants": 200
    },
    {
      "name": "Quest",
      "date": "10-12-2023",
      "venue": "Place",
      "maximumParticipants": 200
    },
    {
      "name": "ExampleEvent",
      "date": "10-12-2023",
      "venue": "Place",
      "maximumParticipants": 200
    }
  ]

  


const WorkshopView = () => {
    const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedWorkshop, setSelectedWorkshop] = useState(null);

//   edit clicked for editing Workshop data
  const handleEditClick = (workshop) => {
    setSelectedWorkshop(workshop);
    setDialogOpen(true);
  };

//   close the dialoge 
  const handleDialogClose = () => {
    setSelectedWorkshop(null);
    setDialogOpen(false);
  };

//   updating data to the server
  const handleUpdateofWorkshop=(updatedData)=>{
    console.log("updating data",updatedData);
    alert('Update clicked');
  }
  return (
    <div className='container-main'>
        <div className='titile-container'>
            <Button variant='outlined' className='top-add-button'  endIcon={<ArrowForwardIcon/>} >ADD</Button>
            <Typography className='title-style'>Add subevents or update</Typography>
        </div>
        <div className='card-container-box'>
            <Grid  container spacing={4}>
                {workshopData.map((workshop,index)=>(
                <Grid item xs={12} md={4}>
                    <Card_Update
                        workshopname={workshop.name}
                        date={workshop.date}
                        venue={workshop.venue}
                        maxparticipants={workshop.maximumParticipants}
                        onEditClick={()=>{handleEditClick(workshop)}}
                    />
                </Grid>
            ))}
                
            </Grid>
            
        </div>
        {selectedWorkshop && (
            <Dialoge_forUpdate 
                open={dialogOpen}
                onClose={handleDialogClose}
                onUpdate={handleUpdateofWorkshop}
                initialData={selectedWorkshop}
            />
        )}
    </div>
  )
}

export default WorkshopView
