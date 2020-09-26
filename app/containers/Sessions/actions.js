/*
 *
 * Sessions actions
 *
 */

import {
  UPC_SESSION_API,
  COURSE_API,
  ATT_SESSION_API,
} from '../../dataService/Home';

import {
  UPC_SESION_PENDING,
  UPC_SESION_FULFILLED,
  UPC_SESION_REJECTED,
  ATT_SESION_PENDING,
  ATT_SESION_FULFILLED,
  ATT_SESION_REJECTED,
} from './constants';

import {
  COURSE_FULFILLED,
  COURSE_PENDING,
  COURSE_REJECTED,
} from '../Course/constants';

export function upcSessionAction(params) {
  return async dispatch => {
    dispatch(fetchData({ types: UPC_SESION_PENDING }));
    try {
      const { data } = await UPC_SESSION_API(params);
      return dispatch(fetchData({ types: UPC_SESION_FULFILLED, data }));
    } catch (err) {
      return dispatch(fetchData({ types: UPC_SESION_REJECTED, err }));
    }
  };
}

export function attSessionAction(params) {
  return async dispatch => {
    dispatch(fetchData({ types: ATT_SESION_PENDING }));
    try {
      const { data } = await ATT_SESSION_API(params);
      return dispatch(fetchData({ types: ATT_SESION_FULFILLED, data }));
    } catch (err) {
      return dispatch(fetchData({ types: ATT_SESION_REJECTED, err }));
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
