import React from 'react';
import orthoLogo from '../../assets/Images/logo.png';
import './Logo.css';
const logo = (props) => (
    <div className="Logo">
        <img src={orthoLogo} alt="logo"/>
    </div>
);

export default logo;
