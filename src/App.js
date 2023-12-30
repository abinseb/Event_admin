import { BrowserRouter, Route, Routes, useLocation, useNavigation } from 'react-router-dom';
import './App.css';
import HeaderUi from './container/Header/Header';
import LandingPage from './LandingPage/LandingPage';
import Login from './container/Login/Login';
import SignIn from './container/SignIn/SignIn';
import PersistentDrawerLeft from './container/SideDrawer/SideDrawer';
import EventRegistration from './EventHostAdmin/Regstration/EventRegistration';
import CreateEvent from './EventHostAdmin/Regstration/CreateEvent';
import Dashboard from './EventHostAdmin/Dashboard/Dashboard';
import PublishEvent from './EventHostAdmin/PublishEvent/PublishEvent';
import WorkshopView from './EventHostAdmin/Workshop/WorkshopView';
import HostRouting from './Routes/HostRouting';
import { useRef } from 'react';

function App() {

  // const location = useLocation();
  // const {  pathname, search } = location;
  // const pathurl =  navigation.location.pathname
  // console.log("Ptha usrl" ,pathurl);
  const path = useRef()
  // console.log("Path name",window.location.pathname);
  const pathName = window.location.pathname;
  path.current = window.location.pathname;
  console.log("Path name",path.current);


  return (
    
    
    // <div className="App">
    <BrowserRouter>
    {path.current !== '/drawer'&&
    <HeaderUi/>
    }
      <Routes>
        <Route path='/' element={<LandingPage/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signin' element={<SignIn/>} />
        <Route path='/drawer' element={<PersistentDrawerLeft/>} />
        <Route path='/eventRegistration' element={<EventRegistration/>} />
        {/* <Route path='/workshop' element={<WorkshopView/>} /> */}
        {/* <Route path='/sidebar' element={<HostRouting/>} /> */}
      </Routes> 
      </BrowserRouter>
  );
}

export default App;
