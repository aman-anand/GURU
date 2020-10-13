/*
 *
 * Feedback reducer
 *
 */
import produce from 'immer';
import { SEND_COMMENT_FULFILLED } from './constants';

export const initialState = {
  data: {},
};

/* eslint-disable default-case, no-param-reassign */
const feedbackReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case SEND_COMMENT_FULFILLED:
        {
          const { payload } = action;
          const { data: actionData } = payload;
          draft.data = actionData;
        }
        break;
    }
  });

export default feedbackReducer;
