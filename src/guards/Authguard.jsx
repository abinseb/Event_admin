import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Authguard = ({component}) => {

    const[status , setStatus] = useState(false);
    const navigate =  useNavigate();

    useEffect(()=>{
        // check the token in the local storage
        const checkToken = async()=>{
            try{
                let token = sessionStorage.getItem('token');
                if(token){
                    setStatus(true);
                }
                else{
                    navigate('/signinhere');
                }
            }
            catch(error){
                navigate('/signinhere');
            }
        }
    checkToken();
    },[])

  return status ?<>{component}</>:<></>;
}

export default Authguard
