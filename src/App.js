import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HeaderUi from './container/Header/Header';
import LandingPage from './LandingPage/LandingPage';
import Login from './container/Login/Login';
import SignIn from './container/SignIn/SignIn';

function App() {
  return (
    
    
    // <div className="App">
    <BrowserRouter>
    <HeaderUi/>
      <Routes>
        <Route path='/' element={<LandingPage/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signin' element={<SignIn/>} />
      </Routes>
      </BrowserRouter>
  );
}

export default App;
