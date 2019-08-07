import * as SpotsApiUtil from '../util/spots_api_util'

export const RECEIVE_ALL_SPOTS = "RECEIVE_ALL_SPOTS"
export const RECEIVE_SPOT = "RECEIVE_SPOT"
export const RECEIVE_REVIEW = "RECEIVE_REVIEW"
export const RECEIVE_REVIEWS = "RECEIVE_REVIEWS"

export const receiveReview = (review) => ({ //where are we getting info from? // why destructured?
    type: RECEIVE_REVIEW,
    review
});



export const receiveReviews = (reviews) => ({ //where are we getting info from? // why destructured?
    type: RECEIVE_REVIEWS,
    reviews
});

export const receiveAllSpots = (spots) =>{
    return { 
        type: RECEIVE_ALL_SPOTS,
        spots
    }
}

export const receiveSpot = (spot) => {
    return {
        type: RECEIVE_SPOT,
        spot
    }
}

export const fetchReviews = (spotId) => dispatch => (
    SpotsApiUtil.fetchReviews(spotId).then(
        (reviews) =>  dispatch(receiveReviews(reviews))
        )
)

export const fetchAllSpots = () => dispatch => (
    SpotsApiUtil.fetchSpots().then((spots) => dispatch(receiveAllSpots(spots)))
    
)
// ajax request made to db through route/controller/action/model/db
// promise returned, then passed into receiveReview action which takes info 
// from the promise,creates an action object (POJO) and sends that object with a type,
// and data payload to the reducers, which update the state of the app
export const createReview = (review) => dispatch => {
    // debugger

    return(
        SpotsApiUtil.createReview(review).then(review=> dispatch(receiveReview(review)))
    )}
    
export const fetchSpot = (id) => dispatch => (
    SpotsApiUtil.fetchSpot(id).then((spot) => dispatch(receiveSpot(spot)))
)

 window.createReview= createReview







