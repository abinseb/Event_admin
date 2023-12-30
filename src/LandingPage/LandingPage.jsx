import React from 'react'
import './landing.css';
import { Grid, Typography } from '@mui/material';
const LandingPage = () => {

  const handle_scroll=(event)=>{
    console.log("scrolled");
  }
  return (
    <div className='background-container-landing' onScroll={handle_scroll}>
     <Grid container spacing={1} >
        <Grid xs={12} md={8} >
           <div className='inner-container-text'>
           </div>
        </Grid>
        <Grid xs={12} md={4} className='image-text-container'>
          {/* <div className='image-text-container'> */}
              <div className='image-box-container'>
              </div>
          {/* </div> */}
        </Grid>
     </Grid>
     <div className='text-line-container'>
      <Typography className='text-large' style={{color:'#FFFF'}}>Every event is a whisper from the past,</Typography>
     <Typography className='text-custom-style' style={{color:'#DDA20A'}}> an echo in the present, and a ripple in the waters of the future</Typography>
     </div>
    </div>
  )
}

export default LandingPage
