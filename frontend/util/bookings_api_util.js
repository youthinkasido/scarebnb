export const createBooking = (bookerId, booking) =>{

    return $.ajax({
        method: 'POST',
        url: `api/users/${bookerId}/bookings`,
        data: {booking}
    })
}

export const fetchBookings = (userId) =>{
    
return $.ajax({
    method: 'GET',
    url: `api/users/${userId}/bookings`
    })
}


