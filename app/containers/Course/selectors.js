import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the course state domain
 */

const selectCourseDomain = state => state.course || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Course
 */

const makeSelectCourse = () =>
  createSelector(
    selectCourseDomain,
    substate => substate,
  );

export default makeSelectCourse;
export { selectCourseDomain };
