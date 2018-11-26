import { fromJS } from 'immutable';
import { CHANGE_FILTERS } from './constants';

const initialState = fromJS({
  filters: [
    {
      name: 'Bronx',
      checked: false,
    },
    {
      name: 'Manhattan',
      checked: false,
    },
    {
      name: 'Queens',
      checked: false,
    },
    {
      name: 'Brooklyn',
      checked: false,
    },
    {
      name: 'Staten',
      checked: false,
    },
    {
      name: 'All',
      checked: true,
    },
  ]
});

function filterReducer(state = initialState, action) {
  switch(action.type) {
    case CHANGE_FILTERS:
      return state.set('filters', action.payload);
    default:
      return state;
  }
}

export default filterReducer;
