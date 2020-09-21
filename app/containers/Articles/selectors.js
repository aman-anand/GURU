import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the articles state domain
 */

const selectArticlesDomain = state => state.articles || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Articles
 */

const makeSelectArticles = () =>
  createSelector(
    selectArticlesDomain,
    substate => substate,
  );

export default makeSelectArticles;
export { selectArticlesDomain };
