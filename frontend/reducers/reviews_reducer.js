import { RECEIVE_SPOT, RECEIVE_REVIEW, RECEIVE_REVIEWS } from "../actions/spot_actions";
import merge from 'lodash/merge'

const reviewsReducer = (state = {}, action) => {// action will contain everything we got back from the j builder wrapped with a type and payload
    // debugger
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_SPOT:
            return merge({}, state, action.reviews);
        case RECEIVE_REVIEW:
       
            return merge({}, state, { [action.review.id]: action.review });
        case RECEIVE_REVIEWS:
            
            return action.reviews
        default:
            return state;
    }
}

export default reviewsReducer