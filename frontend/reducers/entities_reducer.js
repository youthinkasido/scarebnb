import { combineReducers } from 'redux';


import users from './users_reducer';
import spots from './spots_reducer'
import reviews from './reviews_reducer'
export default combineReducers({
users,
spots,
reviews
});
