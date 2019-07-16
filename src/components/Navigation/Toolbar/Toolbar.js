import React from 'react';
import './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavItems from '../NavItems/NavItems'
const toolbar = () => (
    <header className="Toolbar">
        <Logo/>
        <nav>
          <NavItems/>
        </nav>
    </header>
);

export default toolbar;
