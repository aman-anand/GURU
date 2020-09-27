import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the leaderBoard state domain
 */

const selectLeaderBoardDomain = state => state.leaderBoard || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by LeaderBoard
 */

const makeSelectLeaderBoard = () =>
  createSelector(
    selectLeaderBoardDomain,
    substate => substate,
  );

export default makeSelectLeaderBoard;
export { selectLeaderBoardDomain };
