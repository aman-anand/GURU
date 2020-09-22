/*
 *
 * Articles reducer
 *
 */
import produce from 'immer';
import {
  ARTICLES_FULFILLED,
  ARTICLES_REJECTED,
  ARTICLES_PENDING,
} from './constants';

export const initialState = {
  data: {},
};

/* eslint-disable default-case, no-param-reassign */
const articlesReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case ARTICLES_PENDING:
        break;
      case ARTICLES_FULFILLED:
        {
          const { payload } = action || {};
          draft.data = payload;
        }
        break;
      case ARTICLES_REJECTED:
        break;
    }
  });

export default articlesReducer;
