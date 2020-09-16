import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the sessions state domain
 */

const selectSessionsDomain = state => state.get('sessions', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by Sessions
 */

const makeSelectSessions = () => createSelector(selectSessionsDomain, substate => substate.toJS());

export default makeSelectSessions;
export { selectSessionsDomain };
