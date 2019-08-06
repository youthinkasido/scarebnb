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
            const { review, average_rating } = action; // 
            const newState = merge({}, state); //what?
            newState[review.spot_id].reviewIds.push(review.id); //spot_id is created in review form state as a key
            newState[review.spot_id].average_rating = average_rating; // returns given spots average rating
        default: 
            return state
    }
}

export default spotReducer;