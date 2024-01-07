import React, { useState } from 'react';
import './RegRedirected.scss';
import { useNavigate } from 'react-router-dom';

const RedirectedToRegister = () => {
    const navigate = useNavigate();
    const [showOverlay, setShowOverlay] = useState(true);

    const handleRegisterClick = () => {
        setShowOverlay(false);
        navigate('/eventRegister');

    };

    return (
        <div className='homeContainer'>
            <div className={`bodyClass ${showOverlay ? 'withOverlay' : ''}`}>
                <div className='banner-img' style={{paddingTop:'382px',paddingLeft:'130px'}}>
                <button onClick={handleRegisterClick} className='button'>Register</button>
                </div>
               
            </div>
        </div>
    );
};

export default RedirectedToRegister;