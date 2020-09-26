/*
 *
 * Videos reducer
 *
 */
import produce from 'immer';
import {
  VIDEOS_FULFILLED,
  VIDEOS_REJECTED,
  VIDEOS_PENDING,
  VIDEOS_DETAILS_FULFILLED,
} from './constants';
import { COURSE_FULFILLED } from '../Course/constants';

export const initialState = {
  data: {},
  courseObj: {},
  details: {},
};

/* eslint-disable default-case, no-param-reassign */
const videosReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case VIDEOS_PENDING:
        break;
      case VIDEOS_FULFILLED:
        {
          const { payload } = action || {};
          draft.data = payload;
        }
        break;
      case VIDEOS_REJECTED:
        break;
      case COURSE_FULFILLED:
        {
          const { payload } = action;
          draft.courseObj = payload;
        }
        break;
      case VIDEOS_DETAILS_FULFILLED:
        {
          const { payload } = action;
          const { data } = payload || {};
          draft.details = data;
        }
        break;
    }
  });

export default videosReducer;
