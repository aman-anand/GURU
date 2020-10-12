/*
 *
 * Signin actions
 *
 */
import {
  SEND_OTP_API,
  VERIFY_OTP_API,
  RETRY_OTP_API,
  UPDATE_API,
} from '../../dataService/Login';
import {
  SEND_OTP_PENDING,
  SEND_OTP_FULFILLED,
  SEND_OTP_REJECTED,
  VERIFY_OTP_PENDING,
  VERIFY_OTP_FULFILLED,
  VERIFY_OTP_REJECTED,
  PROFILE_UPDATE_PENDING,
  PROFILE_UPDATE_FULFILLED,
  PROFILE_UPDATE_REJECTED,
} from './constants';

export function sendOtpAction(params) {
  return async dispatch => {
    dispatch(fetchData({ types: SEND_OTP_PENDING }));
    try {
      const { data } = await SEND_OTP_API(params);
      return dispatch(fetchData({ types: SEND_OTP_FULFILLED, data }));
    } catch (err) {
      return dispatch(fetchData({ types: SEND_OTP_REJECTED, err }));
    }
  };
}

export function verifyOtpAction(params) {
  return async dispatch => {
    dispatch(fetchData({ types: VERIFY_OTP_PENDING }));
    try {
      const { data } = await VERIFY_OTP_API(params);
      return dispatch(fetchData({ types: VERIFY_OTP_FULFILLED, data }));
    } catch (err) {
      return dispatch(fetchData({ types: VERIFY_OTP_REJECTED, err }));
    }
  };
}
export function retryOtpAction(params) {
  return async dispatch => {
    dispatch(fetchData({ types: VERIFY_OTP_PENDING }));
    try {
      const { data } = await RETRY_OTP_API(params);
      return dispatch(fetchData({ types: VERIFY_OTP_FULFILLED, data }));
    } catch (err) {
      return dispatch(fetchData({ types: VERIFY_OTP_REJECTED, err }));
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
