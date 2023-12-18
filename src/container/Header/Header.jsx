import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import './header.css';
import { Link } from 'react-router-dom';

function HeaderUi() {
  const logImage = require('../../image/iconict.png');

  return (
    <Navbar  className='header-container' expand="md">
      <Container>
        <Navbar.Brand className='logo-position' xs={8} md={2}>
          <Image className='image-style-class' src={logImage} alt="Logo" fluid />
        </Navbar.Brand>
        <Navbar.Text className='title-style' xs={4} md={4}>
          Event Management Application
        </Navbar.Text>
        <Navbar.Toggle aria-controls="basic-navbar-nav " className='custom-navbar-Toggle' />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end ">
          <Nav className="ml-auto">
           <Nav.Link as={Link} to='/login' className='navbar-link-button'>Login</Nav.Link> 
            <Nav.Link as={Link} to='/signin' className='navbar-link-button'>SignUp</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HeaderUi;
