// RECEIVE_SPOT

import merge from 'lodash/merge';

import {
    RECEIVE_ALL_SPOTS,
    RECEIVE_SPOT,
    SEARCH_SPOT,
    // would i ever need reviews here?\
} from '../actions/spot_actions';
let newState

const spotReducer = (state = {}, action) => { // action is dispatched aciton that contains a type and payload
    // debugger
    switch (action.type) {

        case RECEIVE_ALL_SPOTS:
            //console.log('SPORT REducER->>>>>>', typeof action.spots)
            return action.spots
        case RECEIVE_SPOT:
            return merge({}, state, { [action.spot.id]: action.spot })
        case SEARCH_SPOT:
            const a = []
            let spots = Object.values(action.spots)
            debugger
            newState = spots.filter(spot => spot.city.split('').filter(substring => action.city.includes(substring)))
            return newState
        default:
            return state
    }
}

export default spotReducer;