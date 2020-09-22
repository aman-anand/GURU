import { createSelector } from 'reselect';
import { initialState } from '../Articles/reducer';

/**
 * Direct selector to the articleDetails state domain
 */

const selectArticleDetailsDomain = state =>
  state.articleDetails || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by ArticleDetails
 */

const makeSelectArticleDetails = () =>
  createSelector(
    selectArticleDetailsDomain,
    substate => substate,
  );

export default makeSelectArticleDetails;
export { selectArticleDetailsDomain };
