
// we want to output select controls from here

import React from 'react';
import './SelectControls.css';
import SelectControl from './SelectCon/SelectCon';
import Auxil from '../../../hoc/Auxil';
const buttons = [
    {label: 'PhaseOne' , type: 'phaseOne'},
    {label: 'PhaseTwo', type: 'phaseTwo'},
    {label: 'PhaseThree', type: 'phaseThree'},
    {label: 'PhaseFour', type: 'phaseFour'},

];

const selectControls = (props) => (

    <Auxil>
    <div className="SelectContorls">
        {buttons.map(ctrl => (
            <SelectControl
                key={ctrl.label}
                label={ctrl.label}
                 added={() => props.phaseAdded(ctrl.type)}
            removed={() => props.phaseRemoved(ctrl.type)}

            disable={props.disabled[ctrl.type]}

            />



        ))}
        <button onClick={props.phaseSave}>save</button>

    </div>
    </Auxil>
);

export default selectControls;
