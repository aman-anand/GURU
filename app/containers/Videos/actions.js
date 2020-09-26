/*
 *
 * Articles actions
 *
 */

import {
  VIDEOS_PENDING,
  VIDEOS_FULFILLED,
  VIDEOS_REJECTED,
  VIDEOS_DETAILS_PENDING,
  VIDEOS_DETAILS_FULFILLED,
  VIDEOS_DETAILS_REJECTED,
} from './constants';
import {
  COURSE_FULFILLED,
  COURSE_PENDING,
  COURSE_REJECTED,
} from '../Course/constants';
import {
  VIDEOS_API,
  COURSE_API,
  VIDEO_DETAILS_API,
} from '../../dataService/Home';

export function videosAction(params) {
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

export function videosDetailsAction(params) {
  return async dispatch => {
    dispatch(fetchData({ types: VIDEOS_DETAILS_PENDING }));
    try {
      const { data } = await VIDEO_DETAILS_API(params);
      return dispatch(fetchData({ types: VIDEOS_DETAILS_FULFILLED, data }));
    } catch (err) {
      return dispatch(fetchData({ types: VIDEOS_DETAILS_REJECTED, err }));
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
