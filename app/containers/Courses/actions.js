/*
 *
 * Courses actions
 *
 */

import { COURSE_API } from '../../dataService/Home';
import { COURSE_FULFILLED, COURSE_PENDING, COURSE_REJECTED } from './constants';

export function courseAction(params) {
  return async dispatch => {
    dispatch(fetchData({ types: COURSE_PENDING }));
    try {
      const { data } = await COURSE_API(params);
      return dispatch(fetchData({ types: COURSE_FULFILLED, data }));
    } catch (err) {
      return dispatch(fetchData({ types: COURSE_REJECTED, err }));
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
