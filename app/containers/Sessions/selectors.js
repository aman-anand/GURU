import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the sessions state domain
 */

const selectSessionsDomain = state => state.sessions || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Sessions
 */

const makeSelectSessions = () =>
  createSelector(
    selectSessionsDomain,
    substate => substate,
  );

export default makeSelectSessions;
export { selectSessionsDomain };
