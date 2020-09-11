import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the guruCourses state domain
 */

const selectGuruCoursesDomain = state => state.get('guruCourses', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by GuruCourses
 */

const makeSelectGuruCourses = () => createSelector(selectGuruCoursesDomain, substate => substate.toJS());

export default makeSelectGuruCourses;
export { selectGuruCoursesDomain };
