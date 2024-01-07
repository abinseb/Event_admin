import React, { useEffect, useRef, useState } from 'react';
import './Workshop.css';
import { Button, Grid, Typography, Dialog, DialogTitle, DialogContent, TextField, DialogActions } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Card_Update from '../../components/Cards/Card_Update';
import Dialoge_forUpdate from '../../components/Dialog/Dialoge_forUpdate';
import { WorkshopDataFetch } from '../../API /GetDataFromDB';
import { upDateWorkshop } from '../../API /Updation';
import { AddWorkshopDetails } from '../../API /Registration';
import { Delete_Workshop } from '../../API /Deletion';
import ToastMessage from '../../components/ToastNotifications/ToastMessage';
import ConfirmationDialog from '../../components/Dialog/ConfrmationDialog';
import RedirectedToRegister from '../WarningPages/RedirectToRegister';

const WorkshopView = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedWorkshop, setSelectedWorkshop] = useState(null);
  const [workshopDetails, setWorkshopDetails] = useState([]);
  const [newWorkshopDetails, setNewWorkshopDetails] = useState({
    workshopname: '',
    workshopdescription: '',
    workshopvenue: '',
    maximumparticipants: '',
    workshopdate: '',
    workshopicon: '',
  });

const [confirmDialog , setConfirmDialog] = useState(false);
// Notification
const [toastNotification , setToastNotification] = useState(null);
const deleteId = useRef('');
  useEffect(() => {
    workshopDetailsFetch();
  }, []);

  const workshopDetailsFetch = async () => {
    const worshop = await WorkshopDataFetch();
    console.log("WorkshopData Get", worshop);
    setWorkshopDetails(worshop);
  };

  const handleEditClick = (workshop) => {
    setSelectedWorkshop(workshop);
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setSelectedWorkshop(null);
    setDialogOpen(false);
  };

  const handleUpdateofWorkshop = async (updatedData) => {
    try{
    console.log("updating datatttttttttttt", updatedData);
    const update = await upDateWorkshop(updatedData);
    console.log("responseatui",update);
    setToastNotification(notification_Display('success','Updated'));
     workshopDetailsFetch();
    }
    catch(errr){
      setToastNotification(notification_Display('error','Updation Failed'));
      console.log(errr);
    }
  }

  const Open_AddWorkshopDialog = () => {
    setOpenDialog(true);
  }

  const handleAddWorkshopNew = async () => {
    try{
    const addWorkshop = await AddWorkshopDetails(newWorkshopDetails);
    console.log("addedlist,",addWorkshop);
    setToastNotification(notification_Display('success','Workshop Created'));
    setNewWorkshopDetails({
      workshopname: '',
      workshopdescription: '',
      workshopvenue: '',
      maximumparticipants: '',
      workshopdate: '',
      workshopicon: '',
    });
    setOpenDialog(false);
    workshopDetailsFetch();
  }
  catch(error){
    console.error(error);
    setToastNotification(notification_Display('error','Failed'));
  }
  }

  // delete workshop
  const deleteDialogOpen=(workshopid)=>{
    setConfirmDialog(true);
    deleteId.current = workshopid;
  }
  const handleDeleteWorkshop=async()=>{
    //const confirmed = window.confirm('Are you sure you want to delete this workshop?');
    console.log(deleteId.current);
    await handleCancelDelete();
    try{
     const workshopdelete =await Delete_Workshop(deleteId.current);
     console.log(workshopdelete);
      setToastNotification(notification_Display('success','Deleted'));
      workshopDetailsFetch();
    }
    catch(err){
      console.error(err);
      alert("Failed");
      setToastNotification(notification_Display('error','Failed'));
    }
  
  }

const handleCancelDelete=()=>{
    setConfirmDialog(false);
}


     


  const notification_Display=(type,msg)=>{
    return <ToastMessage type={type} message={msg} />
  }
  return (
    <>
    {workshopDetails === undefined ? 
    <RedirectedToRegister/>
    :
    <div className='container-main_Workshop'>
      <div className='titile-containerBox'>
        <Button variant='outlined' onClick={Open_AddWorkshopDialog} className='top-add-button' endIcon={<ArrowForwardIcon />} >ADD</Button>
        <Typography className='title-style'>Add subevents or update</Typography>
      </div>
      <div className='card-container-box'>
        <Grid container spacing={1}>
          {workshopDetails.map((workshop, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card_Update
                imageData={workshop.icon}
                workshopname={workshop.title}
                date={new Date(workshop.date).toISOString().split('T')[0]}
                venue={workshop.venu}
                maxparticipants={workshop.maximumparticipants}
                onEditClick={() => { handleEditClick(workshop) }}
                onDeleteClicked={()=>{deleteDialogOpen(workshop._id)}}
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
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>Add Workshop</DialogTitle>
        <DialogContent>
          <div style={{ margin: '2%', width: '70%', alignSelf: 'center' }}>
            <TextField
              style={{ marginBottom: '5%' }}
              label="Workshop Name"
              variant="outlined"
              name='workshopname'
              fullWidth
              value={newWorkshopDetails.workshopname}
              onChange={(e) => setNewWorkshopDetails({ ...newWorkshopDetails, workshopname: e.target.value })}
            />
            <TextField
              style={{ marginBottom: '5%' }}
              label="Description"
              variant="outlined"
              fullWidth
              name='workshopdescription'
              value={newWorkshopDetails.workshopdescription}
              onChange={(e) => setNewWorkshopDetails({ ...newWorkshopDetails, workshopdescription: e.target.value })}
            />
            <TextField
              style={{ marginBottom: '5%' }}
              label="Venue"
              variant="outlined"
              fullWidth
              name='workshopvenue'
              value={newWorkshopDetails.workshopvenue}
              onChange={(e) => setNewWorkshopDetails({ ...newWorkshopDetails, workshopvenue: e.target.value })}
            />
            <TextField
              style={{ marginBottom: '5%' }}
              label="Maximum participants"
              variant="outlined"
              fullWidth
              type='number'
              name='maximumparticipants'
              value={newWorkshopDetails.maximumparticipants}
              onChange={(e) => setNewWorkshopDetails({ ...newWorkshopDetails, maximumparticipants: e.target.value })}
            />
            <TextField
              style={{ marginBottom: '5%' }}
              label='Date'
              variant='outlined'
              name='workshopdate'
              value={newWorkshopDetails.workshopdate}
              fullWidth
              type='date'
              onChange={(e) => setNewWorkshopDetails({ ...newWorkshopDetails, workshopdate: e.target.value })}
            />
            <label>Upload Icon</label>
            <TextField
              style={{ marginBottom: '5%' }}
              variant='outlined'
              fullWidth
              name='workshopicon'
              type='file'
              onChange={(e) => {
                const file = e.target.files[0];
                
                if (file) {
                  const reader = new FileReader();

                  reader.onloadend = () => {
                    // Convert the file content to base64
                    const base64Data = reader.result.split(',')[1];

                    // Update the state with the base64 data
                    setNewWorkshopDetails({ ...newWorkshopDetails, workshopicon: base64Data });
                  };

                  // Read the file as a data URL (base64)
                  reader.readAsDataURL(file);
                }
              }}
            />
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
          <Button variant="contained" color="primary" onClick={handleAddWorkshopNew}>
            Add Workshop
          </Button>
        </DialogActions>
      </Dialog>
      {toastNotification}
      <ConfirmationDialog 
          open={confirmDialog}
          onClose={handleCancelDelete}
          onConfirm={handleDeleteWorkshop}
        />
    </div>
     
            }
        </>
  )
}

export default WorkshopView;
