/*
 *
 * Videos reducer
 *
 */
import produce from 'immer';
import { VIDEOS_FULFILLED, VIDEOS_REJECTED, VIDEOS_PENDING } from './constants';

export const initialState = {
  data: {},
};

/* eslint-disable default-case, no-param-reassign */
const videosReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case VIDEOS_PENDING:
        break;
      case VIDEOS_FULFILLED:
        {
          const { payload } = action || {};
          draft.data = payload;
        }
        break;
      case VIDEOS_REJECTED:
        break;
    }
  });

export default videosReducer;
