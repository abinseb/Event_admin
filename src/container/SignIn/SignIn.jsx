import React from 'react'
import Button from 'react-bootstrap/Button';
import Form_component from '../../components/Form'
import './signin.css'
import { Typography } from '@mui/material';
const SignIn = () => {
  return (
    <div className='form-main-container'>
     <div className='margin-class'>
      <Typography className='tittle-signup'>Sign Up</Typography>
     <Form_component />
      <Button className='button-custom-class' variant="info">SignIn</Button>
     </div>
    </div>
  )
}

export default SignIn
