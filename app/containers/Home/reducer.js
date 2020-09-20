/*
 *
 * Home reducer
 *
 */
import produce from 'immer';
import { HOME_FULFILLED } from './constants';

export const initialState = {
  data: {},
};

/* eslint-disable default-case, no-param-reassign */
const homeReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case HOME_FULFILLED:
        {
          const { data } = action.payload;
          draft.data = data;
        }
        break;
    }
  });

export default homeReducer;
