/*
 *
 * Signin actions
 *
 */
import {
  SEND_OTP_API,
  VERIFY_OTP_API,
  RETRY_OTP_API,
  SIGN_IN_API,
  SIGN_UP_API,
  UPDATE_DETAILS,
} from '../../dataService/Login';
import {
  OTP_PENDING,
  OTP_FULFILLED,
  OTP_REJECTED,
  VERIFY_OTP_PENDING,
  VERIFY_OTP_FULFILLED,
  VERIFY_OTP_REJECTED,
  SIGN_IN_PENDING,
  SIGN_IN_FULFILLED,
  SIGN_IN_REJECTED,
  REGISTER_PENDING,
  REGISTER_FULFILLED,
  REGISTER_REJECTED,
  UPDATE_PENDING,
  UPDATE_FULFILLED,
  UPDATE_REJECTED,
} from './constants';

export function sendOtpAction(params) {
  return async dispatch => {
    dispatch(fetchData({ types: OTP_PENDING }));
    try {
      const { data } = await SEND_OTP_API(params);
      return dispatch(fetchData({ types: OTP_FULFILLED, data }));
    } catch (err) {
      return dispatch(fetchData({ types: OTP_REJECTED, err }));
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

export function loginAction(params) {
  return async dispatch => {
    dispatch(fetchData({ types: SIGN_IN_PENDING }));
    try {
      const { data } = await SIGN_IN_API(params);
      return dispatch(fetchData({ types: SIGN_IN_FULFILLED, data }));
    } catch (err) {
      return dispatch(fetchData({ types: SIGN_IN_REJECTED, err }));
    }
  };
}

export function signupAction(params) {
  return async dispatch => {
    dispatch(fetchData({ types: REGISTER_PENDING }));
    try {
      const { data } = await SIGN_UP_API(params);
      return dispatch(fetchData({ types: REGISTER_FULFILLED, data }));
    } catch (err) {
      return dispatch(fetchData({ types: REGISTER_REJECTED, err }));
    }
  };
}

export function uipdateAction(params) {
  return async dispatch => {
    dispatch(fetchData({ types: UPDATE_PENDING }));
    try {
      const { data } = await UPDATE_DETAILS(params);
      return dispatch(fetchData({ types: UPDATE_FULFILLED, data }));
    } catch (err) {
      return dispatch(fetchData({ types: UPDATE_REJECTED, err }));
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
