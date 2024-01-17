import React from 'react'
import ReportIcon from '@mui/icons-material/Report';
import './Error404.css';
import { Typography } from '@mui/material';
import AppAppBar from '../../components/LandingNew/views/AppAppBar';
const ErrorHandling = ({titlemessage,message}) => {
  return (
    <>
    <AppAppBar></AppAppBar>
         <div className='container-main'>
            <div className='inner-container-box'>
                <div className='icon-image-view'>
                    <ReportIcon className='icon-style' style={{fontSize: '5rem'}} color='disabled' />
                </div>
                <div className='text-view-container'>
                    <Typography className='text-tittle'>Oops....Error 404  </Typography>
                    <Typography className='bottom-text-sub' color='#746F6F'>Sorry, but the page you are looking for doesn’t exist</Typography>
                </div>
                
            </div>
         </div>
    </>
   
  )
}

export default ErrorHandling
