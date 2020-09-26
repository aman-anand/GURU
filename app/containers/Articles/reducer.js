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
  ARTICLES_DETAILS_FULFILLED,
} from './constants';
import { COURSE_FULFILLED } from '../Course/constants';

export const initialState = {
  data: {},
  courseObj: {},
  details: [],
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
      case ARTICLES_DETAILS_FULFILLED:
        {
          const { payload } = action;
          const { data } = payload || {};
          draft.details = data;
        }
        break;
      case COURSE_FULFILLED:
        {
          const { payload } = action;
          draft.courseObj = payload;
        }
        break;
    }
  });

export default articlesReducer;
