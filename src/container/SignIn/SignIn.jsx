import React from 'react'
import Button from 'react-bootstrap/Button';
import Form_component from '../../components/Form'
import './signin.css'
const SignIn = () => {
  return (
    <div className='form-main-container'>
     <div className='margin-class'>
     <Form_component />
      <Button className='button-custom-class' variant="info">SignIn</Button>
     </div>
    </div>
  )
}

export default SignIn
