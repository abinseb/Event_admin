import React from 'react'
import './login.css'
import { Button } from 'react-bootstrap'

const Login = () => {
 
  return (
    <div className='background-container' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
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
            <Button style={{width:'80%',height:30}}>Login</Button>
          </div>
        </div>
      </div>
    </div>
  
  )
}

export default Login
