import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import moment from 'moment';
import React from 'react';
import {connect} from 'react-redux'
import BookingShow from './booking_show'
import {createBooking } from '../../actions/booking_actions'

const msp = (state) =>{
   
    return {
       
            // currentUser: this.state.entities.currentUser.id
           
    }

}

const mdp = (dispatch) => {
    return { createBooking: (userId, formData) => dispatch(createBooking(userId, formData)) } 
}

export default connect(msp,mdp)(BookingShow)