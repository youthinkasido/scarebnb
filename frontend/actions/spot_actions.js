import * as SpotsApiUtil from '../util/spots_api_util'

export const RECEIVE_ALL_SPOTS = "RECEIVE_ALL_SPOTS"
export const RECEIVE_SPOT = "RECEIVE_SPOT"


export const receiveAllSpots = (spots) =>{
    return { 
        type: RECEIVE_ALL_SPOTS,
        spots
    }
}

export const receiveSpot = (spot) => {
    return {
        type: RECEIVE_ALL_SPOTS,
        spot
    }
}

export const fetchAllSpots = () => dispatch => (
    SpotsApiUtil.fetchSpots().then((spots) => dispatch(receiveAllSpots(spots)))
)


window.fetchAllSpots = fetchAllSpots





