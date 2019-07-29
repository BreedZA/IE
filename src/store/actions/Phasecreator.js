import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';

export const addPhase = (name) => {
    return {
        type: actionTypes.ADD_PHASES,
        barPhase : name
    }
};
export const removePhase = (name) => {
    return {
        type: actionTypes.REMOVE_PHASES,
        barPhase : name
    }
};

// fetching phases
export const setPhaseBars = (bars) => {
    return  {
        type : actionTypes.SET_PHASE_BARS,
        bars: bars

    }
};

export const fetchPhases = () => {
  return dispatch => {
      axios.get('https://react-my-project-3b490.firebaseio.com/saveBars.json')
          .then(response => {
              dispatch(setPhaseBars(response.data))
          } )

  }
};
