export const selectAllSpots = (state) => Object.values(state.entities.spots)




export const selectReviewsForSpot = ({spots,reviews}, spot) =>{
    return spot.reviewIds.map(reviewId => reviews[reviewId])
}