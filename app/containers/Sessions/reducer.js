/*
 *
 * Sessions reducer
 *
 */
import produce from 'immer';
import {
  UPC_SESION_FULFILLED,
  ATT_SESION_FULFILLED,
  SESSION_DETAILS_FULFILLED,
} from './constants';
import { COURSE_FULFILLED } from '../Course/constants';

export const initialState = {
  upc: {},
  courseObj: {},
  details: {},
};

/* eslint-disable default-case, no-param-reassign */
const sessionsReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case UPC_SESION_FULFILLED:
        {
          const { payload } = action;
          draft.upc = payload;
        }
        break;
      case ATT_SESION_FULFILLED:
        {
          const { payload } = action;
          draft.upc = payload;
        }
        break;
      case SESSION_DETAILS_FULFILLED:
        {
          const { payload } = action;
          draft.details = payload;
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

export default sessionsReducer;
