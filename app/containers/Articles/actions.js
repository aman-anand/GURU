/*
 *
 * Articles actions
 *
 */

import {
  ARTICLES_PENDING,
  ARTICLES_FULFILLED,
  ARTICLES_REJECTED,
  ARTICLES_DETAILS_PENDING,
  ARTICLES_DETAILS_FULFILLED,
  ARTICLES_DETAILS_REJECTED,
} from './constants';
import {
  COURSE_FULFILLED,
  COURSE_PENDING,
  COURSE_REJECTED,
} from '../Course/constants';
import {
  ARTICLES_API,
  COURSE_API,
  ARTICLE_DETAILS_API,
} from '../../dataService/Home';

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
export function articlesDetailsAction(params) {
  return async dispatch => {
    dispatch(fetchData({ types: ARTICLES_DETAILS_PENDING }));
    try {
      const { data } = await ARTICLE_DETAILS_API(params);
      return dispatch(fetchData({ types: ARTICLES_DETAILS_FULFILLED, data }));
    } catch (err) {
      return dispatch(fetchData({ types: ARTICLES_DETAILS_REJECTED, err }));
    }
  };
}
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
