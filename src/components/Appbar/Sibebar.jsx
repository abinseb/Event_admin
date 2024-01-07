import React from 'react'

import Drawer from "@mui/material/Drawer";

import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";

import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import PublishedWithChangesIcon from "@mui/icons-material/PublishedWithChanges";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LogoutIcon from "@mui/icons-material/Logout";
import CorporateFareIcon from "@mui/icons-material/CorporateFare";

import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
const Sibebar = () => {
  return (
    <div >
    <Drawer
      sx={{
        width: '500px',
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: '100px',
          boxSizing: "border-box",
        },
      }}
      variant="persistent"
      anchor="left"
     
    >
      <Toolbar />
      <Divider />
      <List>{/* Your list items here */}</List>
      <Divider />
      <List
        sx={{ position: "relative", height: "100%", listStyle: "none" }}
        dense
      >
        <ListItemButton
          sx={{ listStyle: "none" }}
          disablePadding
          
        >
          <ListItemIcon>
            <AppRegistrationIcon />
          </ListItemIcon>
          <ListItemText primary="EventRegistration" />
        </ListItemButton>

        <ListItemButton
          sx={{ listStyle: "none" }}
          disablePadding
          
        >
          <ListItemIcon>
            <PublishedWithChangesIcon />
          </ListItemIcon>
          <ListItemText primary="Publish" />
        </ListItemButton>

        <ListItemButton
          disablePadding
        
        >
          <ListItemIcon>
            <CorporateFareIcon />
          </ListItemIcon>
          <ListItemText primary="Workshop" />
        </ListItemButton>

        <ListItemButton
          disablePadding
         
        >
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItemButton>

        <ListItemButton
          disablePadding
          style={{ position: "absolute", bottom: 0 }}
         
        >
          <ListItemIcon>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText primary="LogOut" />
        </ListItemButton>
      </List>
    </Drawer>
  </div>
  )
}

export default Sibebar
