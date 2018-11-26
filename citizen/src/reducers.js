/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux-immutable';
import cardReducer from './containers/Card/reducer';
import filterReducer from './containers/Filter/reducer';

/**
 * Creates the main reducer with the dynamically injected ones
 */
export default function createReducer(injectedReducers) {
  return combineReducers({
    cardReducer,
    filterReducer,
    ...injectedReducers,
  });
}
