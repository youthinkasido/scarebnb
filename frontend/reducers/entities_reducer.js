import { combineReducers } from 'redux';


import users from './users_reducer';
import spots from './spots_reducer'

export default combineReducers({
users,
spots
});
