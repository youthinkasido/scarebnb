
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import { connect } from "react-redux";
import BookingShow from "./booking_show";
import { createBooking } from "../../actions/booking_actions";
import { withRouter } from "react-router-dom";
import { openModal } from '../../actions/modal_actions'

const msp = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
    pricePerDay:
      state.entities.spots[ownProps.match.params.spotId].cost_per_night,
    bookingImage: state.entities.spots[ownProps.match.params.spotId].image_urls[3],
    spots: state.entities.spots,
    spotId: ownProps.match.params.spotId,
    booking: state.entities.spots[ownProps.match.params.spotId]
  };
};

const mdp = dispatch => {
  return {
    createBooking: (userId, formData) =>
      dispatch(createBooking(userId, formData)),
    openModal: (formType) => dispatch(openModal(formType))
  };
};

export default withRouter(
  connect(
    msp,
    mdp
  )(BookingShow)
);
