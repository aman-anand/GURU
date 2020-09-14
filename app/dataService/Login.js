import { SIGN_IN } from '../constants/endpoints';
import { makeHttpRequest as makeHttpCall } from './common/HttpProvider';

export const SIGN_IN_API = (params, hideLoader) => {
  const config = { url: SIGN_IN(), data: params, method: 'POST', hideLoader };
  return makeHttpCall(config);
};
export const isUserAlreadyLogin = () =>
  window.localStorage.getItem('token') &&
  window.localStorage.getItem('id') &&
  window.localStorage.getItem('role') &&
  window.localStorage.getItem('expires') &&
  window.localStorage.getItem('phone');
