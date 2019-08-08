export const createBooking = (bookerId, booking) =>{
    return $.ajax({
        method: 'POST',
        url: `api/users/${bookerId}/bookings`,
        data: {booking}
    })
}


