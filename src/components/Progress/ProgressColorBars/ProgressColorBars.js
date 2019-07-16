import React, {Component} from 'react'
import PropTypes from 'prop-types';
import  './ProgressColorBars.css';


class ProgressColorBars extends Component {

    render(){
        let bar = null;

        switch (this.props.type) {
            case ('phaseOne'):
                bar = <div className="PhaseOne"></div>;
                break;
            case ('phaseTwo'):
                bar = <div className="PhaseTwo"></div>;
                break;
            case ('phaseThree'):
                bar = <div className="PhaseThree"></div>;
                break;
            case ('phaseFour'):
                bar = <div className="PhaseFour"></div>;
                break;
        }

        return bar;
    }


}

ProgressColorBars.propTypes = {
    type: PropTypes.string.isRequired
}


export default  ProgressColorBars;
