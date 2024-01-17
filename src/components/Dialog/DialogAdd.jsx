import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField'; // Import TextField

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
   // Add the following styles to set fixed width
  //  '& .MuiDialog-paper': {
  //   maxWidth: '2000px', // Set your desired width
  // },
}));

export default function DialogWithTextField({handleOperation, opendialog, handleClose, groupName, handleSaveChanges }) {
  return (
    <BootstrapDialog
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={opendialog}
    
    >
      <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
       Add Group
      </DialogTitle>
      <IconButton
        aria-label="close"
        onClick={handleClose}
        sx={{
          position: 'absolute',
          right: 8,
          top: 8,
          color: (theme) => theme.palette.grey[500],
        }}
      >
        <CloseIcon />
      </IconButton>
      <DialogContent dividers style={{width:'600px'}}>
        <TextField
         style={{width:'100%'}}
          label="Group Name"
          value={groupName}
          onChange={(e) => handleSaveChanges(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleOperation}>
          Save changes
        </Button>
      </DialogActions>
    </BootstrapDialog>
  );
}
