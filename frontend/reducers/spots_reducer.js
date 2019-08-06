// RECEIVE_SPOT

import merge from 'lodash/merge';

import {
    RECEIVE_ALL_SPOTS,
    RECEIVE_SPOT,
    RECEIVE_REVIEW
} from '../actions/spot_actions';


const spotReducer = (state = {}, action) => {
  
    switch(action.type){
       
       case RECEIVE_ALL_SPOTS:
           return action.spots
        case RECEIVE_SPOT:
            return merge({}, state, {[action.spot.id]: action.spot})
        case RECEIVE_REVIEW:
            const newState = merge({}, state);
            
        default: 
            return state
    }
}

export default spotReducer;