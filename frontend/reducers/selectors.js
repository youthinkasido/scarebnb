export const selectAllSpots = (state) => Object.values(state.entities.spots)
export const selectReviewsForSpot = (reviews,spotId) => {
    // debugger
    return(Object.values(this.props.reviews))
}





// // state => entities => reviews: 
// [reviews.id]

// 1: {id, comment, reviewer_id, spot_id},
// 2: { id, comment, reviewer_id, spot_id},
// 3: {id, comment, reviewer_id, spot_id},
// 4: {id, comment, reviewer_id, spot_id},
