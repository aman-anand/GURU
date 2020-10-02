/*
 *
 * Profile reducer
 *
 */
import produce from 'immer';
import { UPLOAD_FULFILLED } from './constants';

export const initialState = {};

/* eslint-disable default-case, no-param-reassign */
const profileReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    switch (action.type) {
      case UPLOAD_FULFILLED:
        break;
    }
  });

export default profileReducer;
