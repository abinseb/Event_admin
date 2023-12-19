import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const drawerWidth = 240;

export default function PermanentDrawerLeft() {
  const[drawerOpen,setDraweropen] = React.useState(false);

  const handleDrawerToggle=()=>{
    setDraweropen(!drawerOpen);
    console.log("drawersatate",drawerOpen);
  }

 

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: '100%',
          zIndex: (theme) => theme.zIndex.drawer + 1, // Make the AppBar appear above the Drawer
        }}
      >
        <Toolbar>
          <IconButton color="inherit" 
          aria-label="open drawer"
           edge="start"
           onClick={handleDrawerToggle}
           >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Event Management
          </Typography>
        </Toolbar>
      </AppBar>

      <div style={{ marginLeft: drawerOpen ? 0 : -drawerWidth }}>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
            },
          }}
          variant="persistent"
          anchor="left"
          open={drawerOpen}
        >
          <Toolbar />
          <Divider />
          <List>
            {/* Your list items here */}
          </List>
          <Divider />
          <List style={{ position: 'relative', height: '100%' }}>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText primary="Event Registration" />
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <MailIcon />
                  </ListItemIcon>
                  <ListItemText primary="Dashboard" />
                </ListItemButton>
              </ListItem>
                  
              <ListItem disablePadding style={{position:'absolute',bottom:0}}>
                <ListItemButton>
                  <ListItemIcon>
                    <MailIcon />
                  </ListItemIcon>
                  <ListItemText primary="LogOut" />
                </ListItemButton>
              </ListItem>
            </List>
        </Drawer>
      </div>
    </Box>
  );
}
