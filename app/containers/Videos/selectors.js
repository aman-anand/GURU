import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the videos state domain
 */

const selectVideosDomain = state => state.videos || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Videos
 */

const makeSelectVideos = () =>
  createSelector(
    selectVideosDomain,
    substate => substate,
  );

export default makeSelectVideos;
export { selectVideosDomain };
