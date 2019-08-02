export const RECEIVE_ALL_SPOTS = "RECEIVE_ALL_SPOTS"
export const RECEIVE_SPOT = "RECEIVE_SPOT"


export const fetchAllSpots = () =>{
    return { 
        type: RECEIVE_ALL_SPOTS
    }
}

export const fetchSpot = (spot) => {
    return {
        type: RECEIVE_ALL_SPOTS,
        spot
    }
}

