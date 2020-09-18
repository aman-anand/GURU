/*
 *
 * Articles actions
 *
 */

import { VIDEOS_PENDING, VIDEOS_FULFILLED, VIDEOS_REJECTED } from './constants';
import { VIDEOS_API } from '../../dataService/Home';

export function articlesAction(params) {
  return async dispatch => {
    dispatch(fetchData({ types: VIDEOS_PENDING }));
    try {
      const { data } = await VIDEOS_API(params);
      return dispatch(fetchData({ types: VIDEOS_FULFILLED, data }));
    } catch (err) {
      return dispatch(fetchData({ types: VIDEOS_REJECTED, err }));
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
