import { HOME, ALL_COURSE } from '../constants/endpoints';
import { makeHttpRequest as makeHttpCall } from './common/HttpProvider';

export const HOME_API = (params, hideLoader) => {
  const config = { url: HOME(), params, method: 'GET', hideLoader };
  return makeHttpCall(config);
};

export const COURSE_API = (params, hideLoader) => {
  const config = { url: ALL_COURSE(), params, method: 'GET', hideLoader };
  return makeHttpCall(config);
};
