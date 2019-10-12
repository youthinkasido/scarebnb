// RECEIVE_SPOT

import merge from 'lodash/merge';

import {
    RECEIVE_ALL_SPOTS,
    RECEIVE_SPOT,
    SEARCH_SPOT,
} from '../actions/spot_actions';
let newState

const spotReducer = (state = {}, action) => { // action is dispatched aciton that contains a type and payload
    switch (action.type) {

        case RECEIVE_ALL_SPOTS:
            return action.spots
        case RECEIVE_SPOT:
            return merge({}, state, { [action.spot.id]: action.spot })
        case SEARCH_SPOT:

            const regexp = new RegExp(action.city, 'i')
            let spots = Object.values(action.spots)

            newState = spots.filter(spot => {
                return regexp.test(spot.city)
            })
            return newState
        default:
            return state
    }
}

export default spotReducer;