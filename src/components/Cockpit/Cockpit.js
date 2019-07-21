import React from 'react';

import  './Cockpit.css';

const cockpit = ( props ) => {


    return (
        <div className="Cockpit">
            <h1>{props.title}</h1>

            <button

                onClick={props.clicked}>Toggle Persons</button>
        </div>
    );
};

export default cockpit;
