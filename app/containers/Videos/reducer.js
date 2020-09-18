/*
 *
 * Articles reducer
 *
 */

import { fromJS } from 'immutable';
import { VIDEOS_FULFILLED, VIDEOS_REJECTED, VIDEOS_PENDING } from './constants';

export const initialState = fromJS({
  data: {},
});

function articlesReducer(state = initialState, action) {
  switch (action.type) {
    case VIDEOS_PENDING:
      return state.merge({});
    case VIDEOS_FULFILLED: {
      const { payload } = action || {};
      return state.merge({
        data: payload,
      });
    }
    case VIDEOS_REJECTED:
      return state.merge({});
    default:
      return state;
  }
}

export default articlesReducer;
