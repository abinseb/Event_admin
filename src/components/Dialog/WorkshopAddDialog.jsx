import React from 'react'
import DateAndTimePicker from '../DateTimePicker/Date&Time';

const WorkshopAddDialog = ({
    open,
    onClose,
    setWorkshopDetails,
  handleWorkshopDateandTimeHandler,
  handleAddWorkshop,
}) => {
  return (
    <Dialog open={open} onClose={onClose}  >
    <DialogTitle>Add Workshop</DialogTitle>
    <DialogContent>
      <div style={{margin:'2%', width:'70%',alignSelf:'center'}}>
      <label>Workshop Name</label>
      <TextField
        style={{marginBottom:'5%'}}
        label="Workshop Name"
        variant="outlined"
        fullWidth
        value={workshopDetails.workshopname}
        onChange={(e) => setWorkshopDetails({ ...workshopDetails, workshopname: e.target.value })}
      />
        <label>Description</label>
      <TextField
         style={{marginBottom:'5%'}}
        label="Description"
        variant="outlined"
        fullWidth
        value={workshopDetails.workshopdescription}
        onChange={(e) => setWorkshopDetails({ ...workshopDetails, workshopdescription: e.target.value })}
      />
      <label>Venue</label>
      <TextField
       style={{marginBottom:'5%'}}
        label="Venue"
        variant="outlined"
        fullWidth
        value={workshopDetails.workshopvenue}
        onChange={(e) => setWorkshopDetails({ ...workshopDetails, workshopvenue: e.target.value })}
      />
       <label>Maximum Participants</label>
      <TextField
       style={{marginBottom:'5%'}}
        label="Maximum participants"
        variant="outlined"
        fullWidth
        value={workshopDetails.maximumparticipants}
        onChange={(e) => setWorkshopDetails({ ...workshopDetails, maximumparticipants: e.target.value })}
      />
      <label>Start Date</label>
    
      <DateAndTimePicker
        name='startdate'
        onDateTimeChange={handleWorkshopDateandTimeHandler}
      />
       <label>Start Date</label>
     
      <DateAndTimePicker
        name='enddate'
        onDateTimeChange={handleWorkshopDateandTimeHandler}
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
                  // setWorkshopDetails({ ...workshopDetails, workshopicon: base64Data });
                    setEventDetails({...eventDetails,eventimage:base64Data});
                };

                // Read the file as a data URL (base64)
                reader.readAsDataURL(file);
              }
            }}
          />
      </div>
    </DialogContent>
    <DialogActions>
      <Button onClick={onClose}>Cancel</Button>
      <Button onClick={handleAddWorkshop} variant="contained" color="primary">
        Add Workshop
      </Button>
    </DialogActions>
  </Dialog>
  )
}

export default WorkshopAddDialog
