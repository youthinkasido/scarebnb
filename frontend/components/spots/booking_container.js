import {
  DateRangePicker,
  SingleDatePicker,
  DayPickerRangeController
} from "react-dates";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import moment from "moment";
import React from "react";
import { connect } from "react-redux";
import BookingShow from "./booking_show";
import { createBooking } from "../../actions/booking_actions";
import { withRouter } from "react-router-dom";

const msp = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
    pricePerDay:
      state.entities.spots[ownProps.match.params.spotId].cost_per_night,
    bookingImage: state.entities.spots[ownProps.match.params.spotId].image_url
  };
};

const mdp = dispatch => {
  return {
    createBooking: (userId, formData) =>
      dispatch(createBooking(userId, formData))
  };
};

export default withRouter(
  connect(
    msp,
    mdp
  )(BookingShow)
);
