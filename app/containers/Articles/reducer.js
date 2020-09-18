/*
 *
 * Articles reducer
 *
 */

import { fromJS } from 'immutable';
import { ARTICLES_FULFILLED, ARTICLES_REJECTED, ARTICLES_PENDING } from './constants';

export const initialState = fromJS({
  data: {},
});

function articlesReducer(state = initialState, action) {
  switch (action.type) {
    case ARTICLES_PENDING:
      return state.merge({});
    case ARTICLES_FULFILLED: {
      const { payload } = action || {};
      return state.merge({
        data: payload,
      });
    }
    case ARTICLES_REJECTED:
      return state.merge({});
    default:
      return state;
  }
}

export default articlesReducer;
