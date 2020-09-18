/*
 *
 * Articles actions
 *
 */

import { ARTICLES_PENDING, ARTICLES_FULFILLED, ARTICLES_REJECTED } from './constants';
import { ARTICLES_API } from '../../dataService/Home';

export function articlesAction(params) {
  return async dispatch => {
    dispatch(fetchData({ types: ARTICLES_PENDING }));
    try {
      const { data } = await ARTICLES_API(params);
      return dispatch(fetchData({ types: ARTICLES_FULFILLED, data }));
    } catch (err) {
      return dispatch(fetchData({ types: ARTICLES_REJECTED, err }));
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
