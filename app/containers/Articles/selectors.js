import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the articles state domain
 */

const selectArticlesDomain = state => state.get('articles', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by Articles
 */

const makeSelectArticles = () => createSelector(selectArticlesDomain, substate => substate.toJS());

export default makeSelectArticles;
export { selectArticlesDomain };
