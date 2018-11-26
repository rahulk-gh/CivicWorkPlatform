import { fromJS } from 'immutable';

const initialState = fromJS({

});

function cardReducer(state = initialState, action) {
  switch(action.type) {
    default:
      return state;
  }
}

export default cardReducer;
