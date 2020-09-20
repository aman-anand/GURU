/*
 *
 * CourseDetails reducer
 *
 */
import produce from 'immer';
import { DEFAULT_ACTION } from './constants';

export const initialState = {
  courseDetails: 'Course Details',
};

/* eslint-disable default-case, no-param-reassign */
const courseDetailsReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    switch (action.type) {
      case DEFAULT_ACTION:
        break;
    }
  });

export default courseDetailsReducer;
