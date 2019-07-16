import React from 'react';
import './SelectCon.css'

const selectCon = (props) => (
    <div className="SelectControl">
        <div>{props.label}</div>
        <button className="SelectCon" onClick={props.added}>Select</button>
        <button
            className="SelectCon"
            onClick={props.removed}
            disabled={props.disabled}>Remove</button>


    </div>
);


export default selectCon;
