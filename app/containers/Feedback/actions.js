/*
 *
 * Feedback actions
 *
 */

import { ADD_REVIEW_API } from '../../dataService/Home';
import {
  SEND_COMMENT_PENDING,
  SEND_COMMENT_FULFILLED,
  SEND_COMMENT_REJECTED,
} from './constants';

export function submitReviewAction(params) {
  return async dispatch => {
    dispatch(fetchData({ types: SEND_COMMENT_PENDING }));
    try {
      const { data } = await ADD_REVIEW_API(params);
      return dispatch(fetchData({ types: SEND_COMMENT_FULFILLED, data }));
    } catch (err) {
      return dispatch(fetchData({ types: SEND_COMMENT_REJECTED, err }));
    }
  };
}

// ANCHOR: Common featch method
export const fetchData = params => {
  const { types, data, err } = params || {};
  return {
    type: types,
    payload: data || err || {},
  };
};
