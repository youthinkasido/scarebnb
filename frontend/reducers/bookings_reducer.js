import {CREATE_BOOKING,SHOW_BOOKINGS} from '../actions/booking_actions'
import merge from 'lodash/merge'
import { GO_TO_BOOKINGS } from '../actions/session_actions';
import { RECEIVE_ALL_SPOTS } from '../actions/spot_actions';



const bookingReducer = (state={}, action) => {
 
    Object.freeze(state)
   
    switch(action.type){
        
        case CREATE_BOOKING:
            debugger
           return merge({}, state, action.booking)
        case SHOW_BOOKINGS:
            return action.bookings
            case GO_TO_BOOKINGS:
            return merge({}, state,action.bookings)
        case RECEIVE_ALL_SPOTS:
            debugger
            return state
        default: 
        return state
    }
} 

export default bookingReducer