/*
 *
 * Profile actions
 *
 */
import { UPLOAD_API, UPDATE_API } from '../../dataService/Home';
import {
  UPLOAD_PENDING,
  UPLOAD_FULFILLED,
  UPLOAD_REJECTED,
  PROFILE_UPDATE_PENDING,
  PROFILE_UPDATE_FULFILLED,
  PROFILE_UPDATE_REJECTED,
} from './constants';

export function uploadAction(params) {
  return async dispatch => {
    dispatch(fetchData({ types: UPLOAD_PENDING }));
    try {
      const { data } = await UPLOAD_API(params);
      return dispatch(fetchData({ types: UPLOAD_FULFILLED, data }));
    } catch (err) {
      return dispatch(fetchData({ types: UPLOAD_REJECTED, err }));
    }
  };
}

export function profileUpdateAction(params) {
  return async dispatch => {
    dispatch(fetchData({ types: PROFILE_UPDATE_PENDING }));
    try {
      const { data } = await UPDATE_API(params);
      return dispatch(fetchData({ types: PROFILE_UPDATE_FULFILLED, data }));
    } catch (err) {
      return dispatch(fetchData({ types: PROFILE_UPDATE_REJECTED, err }));
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
