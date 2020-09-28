/*
 *
 * LeaderBoard reducer
 *
 */
import produce from 'immer';
import { LEADER_FULFILLED } from './constants';

export const initialState = {
  leader: {},
};

/* eslint-disable default-case, no-param-reassign */
const leaderBoardReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LEADER_FULFILLED:
        {
          const { data } = action.payload;
          draft.leader = data;
        }
        break;
    }
  });

export default leaderBoardReducer;
