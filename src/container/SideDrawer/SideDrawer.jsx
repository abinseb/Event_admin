import * as React from 'react';
import { useState,useEffect } from 'react';
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

import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Dashboard from '../../EventHostAdmin/Dashboard/Dashboard';
import CreateEvent from '../../EventHostAdmin/Regstration/CreateEvent';
import EventRegistration from '../../EventHostAdmin/Regstration/EventRegistration';
import { Route, Router,Link, Routes, BrowserRouter, useNavigation, useNavigate, useSearchParams } from 'react-router-dom';
import PublishEvent from '../../EventHostAdmin/PublishEvent/PublishEvent';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import PublishedWithChangesIcon from '@mui/icons-material/PublishedWithChanges';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LogoutIcon from '@mui/icons-material/Logout';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import WorkshopView from '../../EventHostAdmin/Workshop/WorkshopView';
const drawerWidth = 240;

export default function PermanentDrawerLeft() {

  const nav = useNavigate();
  const[drawerOpen,setDraweropen] = useState(false);
  const [page,setPage] =React.useState(null);

  const [searchParams] = useSearchParams();
  const pageType = searchParams.get('page');

  useEffect(()=>{
   switch(pageType){
    case'dashboard':
      setPage(<Dashboard/>);
      break;
    case 'eventRegistration':
      setPage(<CreateEvent/>)
      break;
    case 'publish':
      setPage(<PublishEvent/>)
      break;
      case 'workshop':
        setPage(<WorkshopView/>)
        break;
    default:
      setPage(<PublishEvent/>)
   }
  },[pageType])



  const handleDrawerToggle=()=>{
    setDraweropen(!drawerOpen);
    console.log("drawersatate",drawerOpen);
  }

 const handleNavigationToScreen=(pageName)=>{
    nav(`/drawer?page=${pageName}`)
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
              <ListItem disablePadding onClick={()=>{handleNavigationToScreen('eventRegistration')}}>
                <ListItemButton>
                  <ListItemIcon>
                    <AppRegistrationIcon />
                  </ListItemIcon>
                  <ListItemText primary="EventRegistration" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding onClick={()=>{handleNavigationToScreen('publish')}}>
                  <ListItemButton>
                    <ListItemIcon>
                      <PublishedWithChangesIcon />
                    </ListItemIcon>
                    <ListItemText primary="Publish" />
                  </ListItemButton>
              </ListItem>

              <ListItem disablePadding onClick={()=>{handleNavigationToScreen('workshop')}}>
                  <ListItemButton>
                    <ListItemIcon>
                      <CorporateFareIcon />
                    </ListItemIcon>
                    <ListItemText primary="Workshop" />
                  </ListItemButton>
              </ListItem>

                <ListItem disablePadding onClick={()=>{handleNavigationToScreen('dashboard')}}>
                  <ListItemButton>
                    <ListItemIcon>
                      <DashboardIcon />
                    </ListItemIcon>
                    <ListItemText primary="Dashboard" />
                  </ListItemButton>
              </ListItem>

             
              <ListItem disablePadding style={{position:'absolute',bottom:0}}>
                <ListItemButton>
                  <ListItemIcon>
                    <LogoutIcon />
                  </ListItemIcon>
                  <ListItemText primary="LogOut" />
                </ListItemButton>
              </ListItem>
            </List>
        </Drawer>
      </div>
     <Box
        component="main"
        sx={{ flexGrow: 1, p: 1, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        {page}
      </Box> 
    </Box>
   
  );
}
