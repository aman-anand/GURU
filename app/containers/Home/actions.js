/*
 *
 * Home actions
 *
 */

import { HOME_API } from '../../dataService/Home';
import { HOME_PENDING, HOME_FULFILLED, HOME_REJECTED } from './constants';

export function homeAction(params) {
  return async dispatch => {
    dispatch(fetchData({ types: HOME_PENDING }));
    try {
      const { data } = await HOME_API(params);
      return dispatch(fetchData({ types: HOME_FULFILLED, data }));
    } catch (err) {
      return dispatch(fetchData({ types: HOME_REJECTED, err }));
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
