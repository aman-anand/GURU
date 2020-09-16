import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the guruCoursesDetails state domain
 */

const selectGuruCoursesDetailsDomain = state => state.get('guruCoursesDetails', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by GuruCoursesDetails
 */

const makeSelectGuruCoursesDetails = () => createSelector(selectGuruCoursesDetailsDomain, substate => substate.toJS());

export default makeSelectGuruCoursesDetails;
export { selectGuruCoursesDetailsDomain };
