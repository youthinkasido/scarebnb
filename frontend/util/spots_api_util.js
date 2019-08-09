export const fetchSpots = () =>(
    $.ajax({
        method: 'GET',
        url: 'api/spots'
})
)


export const fetchSpot = (id) => (
    $.ajax({
        method: 'GET',
        url: `api/spots/${id}`
    })
)

export const fetchReviews = (spotId) =>{
    // debugger
   return(
    $.ajax({
        method: 'GET',
        url: `api/reviews`,
        data: {spot_id: spotId}
    })
   )
}





export const createReview = review => {
    // debugger
    return(
    $.ajax({
        method: 'POST',
        url: 'api/reviews',
        data: { review: review }
    })
    )
}


// do we need a fetch review?