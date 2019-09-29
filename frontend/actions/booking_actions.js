import React from 'react'
import * as BookingApiUtil from '../util/bookings_api_util'
export const RECEIVE_BOOKING = 'RECEIVE_BOOKING'
export const SHOW_BOOKINGS = "SHOW_BOOKINGS"
export const CANCEL_BOOKING = "CANCEL_BOOKINGS"

export const receiveBooking = booking => ({
    type: RECEIVE_BOOKING,
    booking
})

export const showAllBookings = (bookings) => ({
    type: SHOW_BOOKINGS,
    bookings
})

export const cancelBooking = (booking) => dispatch => {

    return (
        BookingApiUtil.cancelBooking(booking).then(booking => {
            return dispatch({ type: CANCEL_BOOKING, booking })
        }))
}


export const createBooking = (userId, booking) => dispatch => {

    return (
        BookingApiUtil.createBooking(userId, booking).then(booking => {


            return dispatch({ type: RECEIVE_BOOKING, booking })
        }))
}


export const showBookings = (dispatch) => {
    // debugger
    return (
        BookingApiUtil.fetchBookings().then(bookings => dispatch(showAllBookings(bookings)))
    )
}




