import * as React from "react";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Dashboard from "../../EventHostAdmin/Dashboard/Dashboard";
import CreateEvent from "../../EventHostAdmin/Regstration/CreateEvent";
import EventRegistration from "../../EventHostAdmin/Regstration/EventRegistration";
import {
  Route,
  Router,
  Link,
  Routes,
  BrowserRouter,
  useNavigation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import PublishEvent from "../../EventHostAdmin/PublishEvent/PublishEvent";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import PublishedWithChangesIcon from "@mui/icons-material/PublishedWithChanges";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LogoutIcon from "@mui/icons-material/Logout";
import CorporateFareIcon from "@mui/icons-material/CorporateFare";
import WorkshopView from "../../EventHostAdmin/Workshop/WorkshopView";
const drawerWidth = 240;

export default function PermanentDrawerLeft() {
  const nav = useNavigate();
  const [drawerOpen, setDraweropen] = useState(false);
  const [page, setPage] = React.useState(null);

  const [searchParams] = useSearchParams();
  const pageType = searchParams.get("page");

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    console.log("Token",token);
    switch (pageType) {
      case "dashboard":
        setPage(<Dashboard />);
        break;
      // case "eventRegistration":
      //   setPage(<CreateEvent />);
      //   break;
      case "publish":
        setPage(<PublishEvent />);
        break;
      case "workshop":
        setPage(<WorkshopView />);
        break;
      default:
        setPage(<Dashboard />);
    }
  }, [pageType]);

  const handleDrawerToggle = () => {
    setDraweropen(!drawerOpen);
    console.log("drawersatate", drawerOpen);
  };

  const handleNavigationToScreen = (pageName) => {
    nav(`/drawer?page=${pageName}`);
  };

  const handleLogOut = async() => {
    await sessionStorage.removeItem("token");
    await localStorage.removeItem("eventid");
    await nav("/");
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "#000",
          width: "100%",
          zIndex: (theme) => theme.zIndex.drawer + 1, // Make the AppBar appear above the Drawer
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
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
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          variant="persistent"
          anchor="left"
          open={drawerOpen}
        >
          <Toolbar />
          <Divider />
          <List>{/* Your list items here */}</List>
          <Divider />
          <List
            sx={{ position: "relative", height: "100%", listStyle: "none" }}
            dense
          >
            {/* <ListItemButton
              sx={{ listStyle: "none" }}
              disablePadding
              onClick={() => {
                handleNavigationToScreen("eventRegistration");
              }}
            >
              <ListItemIcon>
                <AppRegistrationIcon />
              </ListItemIcon>
              <ListItemText primary="EventRegistration" />
            </ListItemButton> */}

            <ListItemButton
              disablePadding
              onClick={() => {
                handleNavigationToScreen("dashboard");
              }}
            >
              <ListItemIcon>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItemButton>

            <ListItemButton
              sx={{ listStyle: "none" }}
              disablePadding
              onClick={() => {
                handleNavigationToScreen("publish");
              }}
            >
              <ListItemIcon>
                <PublishedWithChangesIcon />
              </ListItemIcon>
              <ListItemText primary="Publish" />
            </ListItemButton>

            <ListItemButton
              disablePadding
              onClick={() => {
                handleNavigationToScreen("workshop");
              }}
            >
              <ListItemIcon>
                <CorporateFareIcon />
              </ListItemIcon>
              <ListItemText primary="Workshop" />
            </ListItemButton>

           
            <ListItemButton
              disablePadding
              style={{ position: "absolute", bottom: 0 }}
              onClick={handleLogOut}
            >
              <ListItemIcon>
                <LogoutIcon />
              </ListItemIcon>
              <ListItemText primary="LogOut" />
            </ListItemButton>
          </List>
        </Drawer>
      </div>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 1,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          height: '100%', // Set the height to 100%
          overflow: 'auto', // Add overflow property if content exceeds the height
        }}
      >
        {page}
      </Box>
    </Box>
  );
}
