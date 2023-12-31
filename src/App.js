import { BrowserRouter, Navigate, Route, Routes, useLocation, useNavigation } from 'react-router-dom';
import './App.css';
import HeaderUi from './container/Header/Header';

import Login from './container/Login/Login';
import PersistentDrawerLeft from './container/SideDrawer/SideDrawer';
import EventRegistration from './EventHostAdmin/Regstration/EventRegistration';
import { useRef } from 'react';
import Home from './LandingPage/Home';
import SignInNew from './container/Login/SignInNew';
import SignUp from './container/SignUp/SignUp';
import ErrorHandling from './container/ErrorHandling/ErrorHandling';
import EventList from './EventHostAdmin/EventList/EventList';
import CreateEvent from './EventHostAdmin/Regstration/CreateEvent';

function App() {
const token = sessionStorage.getItem("token");


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
    //   <Home/>
    // </div>
      
      <BrowserRouter>
    {/* {path.current !== '/drawer'&&
    <HeaderUi/>
    } */}
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/signinhere' element={<SignInNew/>} />
        {/* <Route path='/login' element={<Login/>} />
        <Route path='/signin' element={<SignIn/>} /> */}
        <Route path='/signUp' element={<SignUp/>} />
        {token && <Route path='/drawer' element={<PersistentDrawerLeft/>} />}
        <Route path='/drawer' element={<Navigate replace to="/signinhere"></Navigate>} />
        <Route path='/eventRegistration' element={<EventRegistration/>} />
        {token &&  <Route path='/eventlist' element={<EventList/>}/>}
        <Route path='/eventlist' element={<Navigate replace to="/signinhere"></Navigate>}/>
        
       
        <Route path='/eventRegister' element={<CreateEvent/>} />
        <Route path='/*' element={<ErrorHandling/>} />

      </Routes> 
      </BrowserRouter> 
  );
}

export default App;
