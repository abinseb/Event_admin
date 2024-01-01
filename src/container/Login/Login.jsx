import React, { useState } from 'react'
import './login.css'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import ToastMessage from '../../components/ToastNotifications/ToastMessage'
import CustomAlerts from '../../components/Alert/Alert'
const Login = () => {
const navigate = useNavigate();

const [notification,setNotification] = useState(null);


  const handle_Login=async()=>{
      console.log("Login login");
      await setNotification(NotificationMessage());
      await navigate('/drawer')
      // setNotification(AlertShows());
  }

  const NotificationMessage=()=>{
    return <ToastMessage type='error' message='Login Success' />
  }

  const AlertShows=()=>{
    let count = 1;
   return <CustomAlerts type='error' tittle='Error' message='Invalid credentials' status={true} count={count+=1} />
  }

 
 
  return (
    <div className='background-container-login'>
      <div className='box-container'>
        <div className='image-view-container'> 
          <img  className='image-shape' src={require('../../image/red_1240336.png')}  /> 
        </div> 
        <div className='text-box-login'>
          <div  className='label-input-container'>
            <label className='label-style-class'>Username</label>
          <input 
            className='input-style-class'
          />
          </div>
          <div className='label-input-container'>
            <label  className='label-style-class'>Password</label>
          <input 
           className='input-style-class'
            type='password'
          />
          <label style={{fontSize:10,alignSelf:'end',color:'#2739DD',fontWeight:'500',paddingTop:'1%'}}>forgotPassord</label>
          </div>
          <div className='button-div-container'>
            <Button style={{width:'80%',height:30}} onClick={handle_Login}>Login</Button>
          </div>
        </div>
      </div>
      {notification}
    </div>
  
  )
}

export default Login
