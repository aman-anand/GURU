import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the feedback state domain
 */

const selectFeedbackDomain = state => state.feedback || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Feedback
 */

const makeSelectFeedback = () =>
  createSelector(
    selectFeedbackDomain,
    substate => substate,
  );

export default makeSelectFeedback;
export { selectFeedbackDomain };
