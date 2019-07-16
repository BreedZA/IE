import React from 'react';
import './Input.css';
const input = (props) => {

    let inputElement = null;
    switch (props.inputType) {
        case ('input'):
            inputElement = <input className="Input" {...props}/>;
            break;
        default:
            inputElement = <input/>;
    }

    return (
        <div className="Input">
        <label>
            {props.label}
        </label>
            {inputElement}
    </div>)
    };



export default input;
