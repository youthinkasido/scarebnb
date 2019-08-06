import { RECEIVE_SPOT, RECEIVE_REVIEW } from "../actions/spot_actions";

import merge from 'lodash/merge'
const reviewsReducer = {state={}, action } =>{
    Object.freeze(state);
    switch(action.type){
        case RECEIVE_SPOT:
            return merge({}, state, action.reviews) //
        case RECEIVE_REVIEW: 
            const { review } = action; // ?
            return merge({}, state, { [review.id]: review }); // where?
        default:
            return state
    }
}

export default reviewsReducer