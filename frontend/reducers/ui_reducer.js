import merge from 'lodash/merge';

import { UPDATE_FILTER } from '../actions/filter_actions.js';
import { combineReducers } from 'redux';
import filters from './filters_reducer';

import modal from './modal_reducer';

export default combineReducers({
  modal
});

// const defaultFilters = Object.freeze({
//     bounds: {}
// });

// const filtersReducer = (state = defaultFilters, action) => {
//     Object.freeze(state);
//     if (action.type === UPDATE_FILTER) {
//         const newFilter = {
//             [action.filter]: action.value
//         };
//         return merge({}, state, newFilter);
//     } else {
//         return state;
//     }
// };

// export default filtersReducer;
