import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Hidden from '@mui/material/Hidden';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const Header = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate();
  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };
const handleNavigation=(path)=>{
  navigate(path);
  handleDrawerClose();
}
  return (
    <AppBar position="static" style={{height:'75px',display:'flex',justifyContent:'center',backgroundColor:'#0099CC'}}>
      <Toolbar>
        <img
          src={require('../../image/iconict.png')}
          alt="logo"
          style={{ width: '70px', height: '70px' , marginRight:'2%' }}
        />
        <Typography variant="h6" noWrap component="div" style={{ flexGrow: 1 }}>
          Event app
        </Typography>
        
        {/* Display buttons for medium and larger screens */}
        <Hidden smDown>
        <Link style={{ textDecoration: 'none', color: '#ffffff' }} to='/signin' ><Button color="inherit">Signup</Button></Link>
        <Link to='/login' style={{textDecoration:'none' , color:'#ffff'}}>  <Button color="inherit">Login</Button></Link>
        </Hidden>

        {/* Display menu icon for small screens */}
        <Hidden smUp>
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerOpen}
            sx={{ marginLeft: 'auto' }}
          >
            <MenuIcon />
          </IconButton>
        </Hidden>

        {/* Responsive Drawer for mobile */}
        <Drawer anchor="right" open={isDrawerOpen} onClose={handleDrawerClose}>
          <List>
            <ListItem
              button
              onClick={()=>{handleNavigation('/signin')}}
              sx={{color:'black',backgroundColor:'white', '&:hover':{backgroundColor:'lightblue'}}}
            >
              <ListItemText primary="Signup" />
            </ListItem>
            <ListItem
              button
              onClick={()=>{handleNavigation('/login')}}
              sx={{color:'black', backgroundColor:'white' , '&:hover':{backgroundColor:'lightblue'}}}
            >
              <ListItemText primary="Login" />
            </ListItem>
          </List>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
