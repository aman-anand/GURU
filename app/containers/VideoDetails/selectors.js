import { createSelector } from 'reselect';
import { initialState } from '../Videos/reducer';

/**
 * Direct selector to the videoDetails state domain
 */

const selectVideoDetailsDomain = state => state.videoDetails || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by VideoDetails
 */

const makeSelectVideoDetails = () =>
  createSelector(
    selectVideoDetailsDomain,
    substate => substate,
  );

export default makeSelectVideoDetails;
export { selectVideoDetailsDomain };
