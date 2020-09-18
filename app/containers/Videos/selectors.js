import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the articles state domain
 */

const selectVideosDomain = state => state.get('videos', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by Articles
 */

const makeSelectVideos = () => createSelector(selectVideosDomain, substate => substate.toJS());

export default makeSelectVideos;
export { selectVideosDomain };
