import { connect } from 'react-redux'
import { fetchBookings } from "../../actions/session_actions";

import UserProfile from './user_profile';
import {withRouter} from 'react-router-dom'


const msp = (state) => {
    debugger
    return {bookings: state.entities.bookings,
            currentUser: state.entities.users[state.session.currentUser]}
    
}

const mdp = (dispatch) => {
    return { fetchBookings: (userId) => dispatch(fetchBookings(userId)) }
}

export default withRouter(connect(msp, mdp)(UserProfile))

