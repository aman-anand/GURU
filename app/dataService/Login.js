import {
  SEND_OTP,
  VERIFY_OTP,
  RETRY_OTP,
  SIGN_IN,
  REGISTER,
  UPDATE,
} from '../constants/endpoints';
import { makeHttpRequest as makeHttpCall } from './common/HttpProvider';
import { getFromLocalStore } from '../services/CommonSetterGetter';

export const SEND_OTP_API = (params, hideLoader) => {
  const config = { url: SEND_OTP(), data: params, method: 'POST', hideLoader };
  return makeHttpCall(config);
};
export const VERIFY_OTP_API = (params, hideLoader) => {
  const config = {
    url: VERIFY_OTP(),
    data: params,
    method: 'POST',
    hideLoader,
  };
  return makeHttpCall(config);
};
export const RETRY_OTP_API = (params, hideLoader) => {
  const config = { url: RETRY_OTP(), data: params, method: 'POST', hideLoader };
  return makeHttpCall(config);
};

export const SIGN_IN_API = (params, hideLoader) => {
  const config = { url: SIGN_IN(), data: params, method: 'POST', hideLoader };
  return makeHttpCall(config);
};

export const SIGN_UP_API = (params, hideLoader) => {
  const config = { url: REGISTER(), data: params, method: 'POST', hideLoader };
  return makeHttpCall(config);
};

export const UPDATE_API = (params, hideLoader) => {
  const config = {
    url: UPDATE(),
    data: params,
    method: 'PUT',
    hideLoader,
  };
  return makeHttpCall(config);
};

export const isUserAlreadyLogin = () => {
  const store = getFromLocalStore([
    'token',
    'id',
    'role',
    'expires',
    'phone',
    'fName',
    'lName',
  ]);
  const { token, id, role, expires, phone, fName, lName } = store || {};
  const auth =
    !!token && !!id && !!role && !!expires && !!phone && !!fName && !!lName;
  return auth;
};
