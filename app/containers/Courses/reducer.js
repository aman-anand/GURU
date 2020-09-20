/*
 *
 * Courses reducer
 *
 */
import produce from 'immer';
import { DEFAULT_ACTION } from './constants';

export const initialState = {
  name: 'sumanta',
};

/* eslint-disable default-case, no-param-reassign */
const coursesReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case DEFAULT_ACTION:
        draft.merge({
          name: 'sumanta',
        });
        break;
    }
  });

export default coursesReducer;
