/*
 *
 * Course reducer
 *
 */
import produce from 'immer';
import { COURSE_FULFILLED, COURSE_DETAILS_FULFILLED } from './constants';

export const initialState = {
  courseObj: {},
  courseDetailsObj: {},
};

/* eslint-disable default-case, no-param-reassign */
const courseReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case COURSE_FULFILLED:
        {
          const { payload } = action;
          draft.courseObj = payload;
        }
        break;
      case COURSE_DETAILS_FULFILLED:
        {
          const { payload } = action;
          draft.courseDetailsObj = payload;
        }
        break;
    }
  });

export default courseReducer;
