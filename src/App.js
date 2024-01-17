import { BrowserRouter, Navigate, Route, Routes, useLocation, useNavigation } from 'react-router-dom';
import './App.css';
import PersistentDrawerLeft from './container/SideDrawer/SideDrawer';

import { useEffect, useRef, useState } from 'react';
import Home from './LandingPage/Home';
import SignInNew from './container/Login/SignInNew';
import SignUp from './container/SignUp/SignUp';
import ErrorHandling from './container/ErrorHandling/ErrorHandling';
import EventList from './EventHostAdmin/EventList/EventList';
import CreateEvent from './EventHostAdmin/Regstration/CreateEvent';
import { HPlusMobiledata } from '@mui/icons-material';
import HomeParticipant from './Participants/Home/HomeParticipant';
import PartcipantRegister from './Participants/Registration/PartcipantRegister';
import EventEdit from './EventHostAdmin/EventEdit/EventEdit';
import AddGroup from './EventHostAdmin/AddGroup/AddGroup';
import Authguard from './guards/Authguard';


function App() {
  
  // const path = useRef()
  // console.log("Path name",window.location.pathname);
  // const pathName = window.location.pathname;
  // path.current = window.location.pathname;
  // console.log("Path name",path.current);

  // const [token,setToken] = useState(null);
  // useEffect(()=>{
  //   setToken(sessionStorage.getItem("token"));
  // },[pathName])

  return (

      <BrowserRouter>

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/signinhere' element={<SignInNew/>} />
        <Route path='/signUp' element={<SignUp/>} />

        <Route path='/drawer' element={<Authguard component={<PersistentDrawerLeft/>} />}/>
        {/* <Route path='/drawer' element={<Navigate replace to="/signinhere"></Navigate>} /> */}
    
        <Route path='/eventlist' element={<Authguard component={<EventList/>}/>} />
        {/* <Route path='/eventlist' element={<Navigate replace to="/signinhere"></Navigate>}/> */}
  
       <Route path='/eventRegister' element={<Authguard component={<CreateEvent/>} />} />
       {/* <Route path='/eventRegister' element={<Navigate replace to="/signinhere"></Navigate>}/> */}
        
      <Route path='/editEvent' element={<Authguard component={<EventEdit/>} />}/>
       {/* <Route path='/editEvent' element={<Navigate replace to="/signinhere"></Navigate>}/> */}
      
        {/* participant routes */}
        <Route path='/participantregister' element={<PartcipantRegister/>} />
        <Route path= '/participanthome/:eventid' element={<HomeParticipant/>} />

        <Route path='/*' element={<ErrorHandling titlemessage={'Oops....Error 404'} message={'Sorry, but the page you are looking for doesn’t exist'}/>} />
   

      </Routes> 
      </BrowserRouter> 
  );
}

export default App;
