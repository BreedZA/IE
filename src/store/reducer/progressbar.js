import * as actionTypes from '../actions/actionTypes';

const initialState ={
    bars: {
        phaseOne : 0,
        phaseTwo : 0,
        phaseThree: 0,
        phaseFour: 0


    },
    error: false




};
/*bars: {
    phaseOne : 0,
        phaseTwo : 0,
        phaseThree: 0,
        phaseFour: 0


}*/
const progressbar = (state = initialState, action) => {
        switch (action.type) {
            case actionTypes.ADD_PHASES:
                return{
                    ...state,
                    bars: {
                        ...state.bars,
                        // does not create an array , it passes a variable
                        // with the name you want to use as a property barPhase
                        // the name barPhase will be passed to the disptach methods as payloads
                        [action.barPhase]: state.bars[action.barPhase] + 1

                    }

                };
            case actionTypes.REMOVE_PHASES:
                return{
                    ...state,
                    bars: {
                        ...state.bars,
                        // does not create an array , it passes a variable
                        // with the name you want to use as a property barPhase
                        [action.barPhase]: state.bars[action.barPhase] - 1

                    }

                };
            default:
                return state;

        }

};

export default progressbar;
