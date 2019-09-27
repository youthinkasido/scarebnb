import { connect } from "react-redux";
import { fetchBookings } from "../../actions/session_actions";


import UserProfile from "./user_profile";
import { withRouter } from "react-router-dom";
import { cancelBooking } from "../../actions/booking_actions";

const msp = state => {
  return {
    bookings: Object.values(state.entities.bookings),
    currentUser: state.entities.users[state.session.currentUser]
  };
};

const mdp = dispatch => {
  return {
     fetchBookings: userId => dispatch(fetchBookings(userId)),
     cancelBooking: (bookingId) => dispatch(cancelBooking(bookingId))
    
    };
};

export default withRouter(
  connect(
    msp,
    mdp
  )(UserProfile)
);
