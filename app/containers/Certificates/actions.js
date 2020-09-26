/*
 *
 * Certificates actions
 *
 */
import { COURSE_API, CERTIFICATE_API } from '../../dataService/Home';
import {
  COURSE_FULFILLED,
  COURSE_PENDING,
  COURSE_REJECTED,
} from '../Course/constants';
import {
  CERTIFICATE_PENDING,
  CERTIFICATE_FULFILLED,
  CERTIFICATE_REJECTED,
} from './constants';

export function certificateAction(params) {
  return async dispatch => {
    dispatch(fetchData({ types: CERTIFICATE_PENDING }));
    try {
      const { data } = await CERTIFICATE_API(params);
      return dispatch(fetchData({ types: CERTIFICATE_FULFILLED, data }));
    } catch (err) {
      return dispatch(fetchData({ types: CERTIFICATE_REJECTED, err }));
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
