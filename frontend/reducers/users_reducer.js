import merge from 'lodash/merge';

import { RECEIVE_CURRENT_USER, GO_TO_BOOKINGS } from '../actions/session_actions';



const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return merge({}, state, { [action.currentUser.user.id]: action.currentUser.user });
        default:
            return state;
    }
};



export default usersReducer;
