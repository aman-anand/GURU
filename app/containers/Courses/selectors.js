import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the courses state domain
 */

const selectCoursesDomain = state => state.courses || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Courses
 */

const makeSelectCourses = () =>
  createSelector(
    selectCoursesDomain,
    substate => substate,
  );

export default makeSelectCourses;
export { selectCoursesDomain };
