import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link ,useNavigate} from 'react-router-dom';

export default function AppBarNew() {
  const nav = useNavigate();
  const handleLogOut=async()=>{
    await sessionStorage.removeItem("token");
    await localStorage.removeItem("eventid");
    await nav("/");
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ backgroundColor: '#F0F8E1' }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Link to='/eventlist' style={{ textDecoration: 'none', color: '#000' }}>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Home
            </Typography>
          </Link>

          <Button variant='contained' onClick={handleLogOut} sx={{ color: 'black', backgroundColor: '#fff' }}>
            LogOut
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
