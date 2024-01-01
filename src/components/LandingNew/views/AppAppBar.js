import * as React from 'react';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import AppBar from '../components/AppBar';
import Toolbar from '../components/Toolbar';
import { Button, Typography } from '@mui/material';

const rightLink = {
  fontSize: 16,
  ml: 3,
  fontWeight: 'bold'
};

function AppAppBar() {
  return (
    <div>
      <AppBar position="fixed" sx={{ backgroundColor: '#000' }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box sx={{ flex: 1 }} />
          <Typography
            variant="h6"
            underline="none"
            color="inherit"
            sx={{ fontSize: 24 }}
          >
            {'ICT EVENT'}
          </Typography>
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
            <Link
              color="inherit"
              variant="h6"
              underline="none"
              to='/signuphere'
              sx={{
                ...rightLink,
                color: 'white',
                ':visited': {
                  color: 'red',
                },
              }}
            >
             <Button style={{background:'#ffff',marginRight:'10px'}}> {'Sign In'}</Button>
            </Link>
            <Link
              variant="h6"
              underline="none"
              
              to='/SignUp'
              href=""
              sx={{
                ...rightLink,
                color: 'white',
                ':visited': {
                  color: 'red',
                },
              }}
            >
             <Button style={{background:'#ffff',marginRight:'5px'}}> {'Sign Up'}</Button>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
}

export default AppAppBar;
