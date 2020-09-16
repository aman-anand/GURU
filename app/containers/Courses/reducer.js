/*
 *
 * Courses reducer
 *
 */

import { fromJS } from 'immutable';
import { COURSE_FULFILLED, COURSE_DETAILS_FULFILLED } from './constants';

export const initialState = fromJS({
  courseObj: {},
  courseDetailsObj: {},
});

function coursesReducer(state = initialState, action) {
  switch (action.type) {
    case COURSE_FULFILLED: {
      const { payload } = action;
      return state.merge({
        courseObj: payload,
      });
    }
    case COURSE_DETAILS_FULFILLED: {
      const { payload } = action;
      return state.merge({
        courseDetailsObj: payload,
      });
    }
    default:
      return state;
  }
}

export default coursesReducer;
