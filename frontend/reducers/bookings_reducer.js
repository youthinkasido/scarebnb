import { RECEIVE_BOOKING, SHOW_BOOKINGS, CANCEL_BOOKING } from '../actions/booking_actions'
import merge from 'lodash/merge'
import { GO_TO_BOOKINGS } from '../actions/session_actions';




const bookingReducer = (state = {}, action) => {

    Object.freeze(state)

    switch (action.type) {


        case RECEIVE_BOOKING:

            return merge({}, state, action.booking)
        case SHOW_BOOKINGS:

            return action.bookings
        case GO_TO_BOOKINGS:
            return action.bookings

        case CANCEL_BOOKING:
            
            let newState = merge({}, state);
            delete newState[action.booking];
            return newState;

        default:
            return state
    }
}

export default bookingReducer