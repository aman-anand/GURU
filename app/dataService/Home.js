import { HOME, ALL_COURSE, COURSE_DETAILS } from '../constants/endpoints';
import { makeHttpRequest as makeHttpCall } from './common/HttpProvider';

export const HOME_API = (params, hideLoader) => {
  const config = { url: HOME(), params, method: 'GET', hideLoader };
  return makeHttpCall(config);
};

export const COURSE_API = (params, hideLoader) => {
  const config = { url: ALL_COURSE(), params, method: 'GET', hideLoader };
  return makeHttpCall(config);
};

export const COURSE_DETAILS_API = (params, hideLoader) => {
  const { number, COURSE_ID } = params || {};
  const config = { url: COURSE_DETAILS(), params: { _id: COURSE_ID }, data: { number }, method: 'GET', hideLoader };
  return makeHttpCall(config);
};
