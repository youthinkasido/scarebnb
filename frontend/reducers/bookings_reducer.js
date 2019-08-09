import {CREATE_BOOKING,SHOW_BOOKINGS} from '../actions/booking_actions'
import merge from 'lodash/merge'



const bookingReducer = (state={}, action) => {

    Object.freeze(state)
    
    switch(action.type){
        case CREATE_BOOKING:
           return merge({}, state, action.booking)
        case SHOW_BOOKINGS:
            return action.bookings
        default: 
        return state
    }
} 

export default bookingReducer