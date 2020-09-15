/*
 *
 * Home reducer
 *
 */

import { fromJS } from 'immutable';
import { HOME_FULFILLED } from './constants';

export const initialState = fromJS({
  data: {},
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case HOME_FULFILLED: {
      const { data } = action.payload;
      return state.merge({ data });
    }
    default:
      return state;
  }
}

export default homeReducer;
