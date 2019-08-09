import React from 'react'
import * as BookingApiUtil from '../util/bookings_api_util'
export const CREATE_BOOKING = 'CREATE_BOOKING'
export const SHOW_BOOKINGS = "SHOW_BOOKINGS"

export const receiveBooking = booking => ({
    type: CREATE_BOOKING,
    booking
})

export const showAllBookings = (bookings) => ({
    type: SHOW_BOOKINGS,
    bookings
})

export const createBooking = (userId,booking) => dispatch => {
debugger
    return(
        BookingApiUtil.createBooking(userId,booking).then(booking=> dispatch(receiveBooking(booking)))
    )
} 

export const showBookings = (dispatch) => {
    // debugger
    return (
        BookingApiUtil.fetchBookings().then(bookings=> dispatch(showAllBookings(bookings)))
    )
}




