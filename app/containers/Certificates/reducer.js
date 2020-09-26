/*
 *
 * Certificates reducer
 *
 */
import produce from 'immer';
import { CERTIFICATE_FULFILLED } from './constants';
import { COURSE_FULFILLED } from '../Course/constants';

export const initialState = {
  courseObj: {},
  certificateObj: {},
};

/* eslint-disable default-case, no-param-reassign */
const certificatesReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case CERTIFICATE_FULFILLED:
        {
          const { payload } = action;
          draft.certificateObj = payload;
        }
        break;
      case COURSE_FULFILLED:
        {
          const { payload } = action;
          draft.courseObj = payload;
        }
        break;
    }
  });

export default certificatesReducer;
