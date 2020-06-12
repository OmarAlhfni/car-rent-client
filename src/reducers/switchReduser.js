import { COMPONENT_SWITCH } from '../actions/types';

const INITIAL_STATE = {
    display: ""
};
 
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case COMPONENT_SWITCH:
            return {...state, display: action.payload}
        default:
            return state
    }
}