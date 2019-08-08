import React from 'react'
import * as BookingApiUtil from '../util/bookings_api_util'
export const RECEIVE_BOOKING = 'CREATE_BOOKING'

export const receiveBooking = booking => ({
    type: RECEIVE_BOOKING,
    booking
})


export const createBooking = (booking) => dispatch => {

    return(
        BookingApiUtil.createBooking(booking).then(booking=> dispatch(receiveBooking(booking)))
    )
} 




