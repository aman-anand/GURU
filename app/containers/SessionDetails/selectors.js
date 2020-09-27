import { createSelector } from 'reselect';
import { initialState } from '../Sessions/reducer';

/**
 * Direct selector to the sessionDetails state domain
 */

const selectSessionDetailsDomain = state =>
  state.sessionDetails || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by SessionDetails
 */

const makeSelectSessionDetails = () =>
  createSelector(
    selectSessionDetailsDomain,
    substate => substate,
  );

export default makeSelectSessionDetails;
export { selectSessionDetailsDomain };
