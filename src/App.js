import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HeaderUi from './container/Header/Header';
import LandingPage from './LandingPage/LandingPage';
import Login from './container/Login/Login';
import SignIn from './container/SignIn/SignIn';
import PersistentDrawerLeft from './container/SideDrawer/SideDrawer';
import EventRegistration from './EventHostAdmin/Regstration/EventRegistration';
import CreateEvent from './EventHostAdmin/Regstration/CreateEvent';
import Dashboard from './EventHostAdmin/Dashboard/Dashboard';

function App() {
  return (
    
    
    // <div className="App">
    <BrowserRouter>
    <HeaderUi/>
      <Routes>
        <Route path='/' element={<LandingPage/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signin' element={<SignIn/>} />
        <Route path='/drawer' element={<PersistentDrawerLeft/>} />
        <Route path='/eventRegistration' element={<EventRegistration/>} />
        <Route path='/createevent' element={<CreateEvent/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
      </Routes> 
      </BrowserRouter>
  );
}

export default App;
