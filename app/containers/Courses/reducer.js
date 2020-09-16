/*
 *
 * Courses reducer
 *
 */

import { fromJS } from 'immutable';
import { COURSE_FULFILLED } from './constants';

export const initialState = fromJS({
  courseObj: {},
});

function coursesReducer(state = initialState, action) {
  switch (action.type) {
    case COURSE_FULFILLED: {
      const { payload } = action;
      return state.merge({
        courseObj: payload,
      });
    }
    default:
      return state;
  }
}

export default coursesReducer;
