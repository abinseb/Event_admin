import React from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import './Registration.css'
const EventRegistration = () => {
  return (
    <div className='registration-container'>
      <div className='form-container'>
    
      <FloatingLabel
        controlId="floatingInput"
        label="Event Name"
        className="mb-3"
      >
        <Form.Control  placeholder="Name"  />
      </FloatingLabel>

      <FloatingLabel
        controlId="floatingInput"
        label="Description"
        className="mb-3"
      >
        <Form.Control type="email" placeholder="name@example.com" />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingInput"
        label="Venue"
        className="mb-3"
      >
        <Form.Control type="number" placeholder="+91 10 digit number" />
      </FloatingLabel>

      <FloatingLabel
        controlId="floatingInput"
        label="Date"
        className="mb-3"
      >
        <Form.Control type="date" placeholder="+91 10 digit number" />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingInput"
        label="Event Icon"
        className="mb-3"
      >
        <Form.Control type="file" placeholder="+91 10 digit number" />
      </FloatingLabel>
      <Button className='button-custom-class' variant="info">Workshop</Button>
      </div>
      
    </div>
  )
}

export default EventRegistration
