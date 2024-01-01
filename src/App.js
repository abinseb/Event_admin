import { BrowserRouter, Route, Routes, useLocation, useNavigation } from 'react-router-dom';
import './App.css';
import HeaderUi from './container/Header/Header';
import LandingPage from './LandingPage/LandingPage';
import Login from './container/Login/Login';
import SignIn from './container/SignIn/SignIn';
import PersistentDrawerLeft from './container/SideDrawer/SideDrawer';
import EventRegistration from './EventHostAdmin/Regstration/EventRegistration';
import { useRef } from 'react';
import Home from './LandingPage/Home';
import SignInNew from './container/SignIn/SignInNew';
import SignUp from './container/SignUp/SignUp';

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
    //   <Home/>
    // </div>
      
      <BrowserRouter>
    {/* {path.current !== '/drawer'&&
    <HeaderUi/>
    } */}
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/signuphere' element={<SignInNew/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signin' element={<SignIn/>} />
        <Route path='/signUp' element={<SignUp/>} />
        <Route path='/drawer' element={<PersistentDrawerLeft/>} />
        <Route path='/eventRegistration' element={<EventRegistration/>} />
      
      </Routes> 
      </BrowserRouter> 
  );
}

export default App;
