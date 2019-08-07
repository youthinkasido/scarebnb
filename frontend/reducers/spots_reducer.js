// RECEIVE_SPOT

import merge from 'lodash/merge';

import {
    RECEIVE_ALL_SPOTS,
    RECEIVE_SPOT,
   // would i ever need reviews here?\
} from '../actions/spot_actions';


const spotReducer = (state = {}, action) => { // action is dispatched aciton that contains a type and payload
    // debugger
    switch(action.type){
       
       case RECEIVE_ALL_SPOTS:
           return action.spots
        case RECEIVE_SPOT:
        
            return merge({}, state, {[action.spot.id]: action.spot})
        default: 
            return state
    }
}

export default spotReducer;