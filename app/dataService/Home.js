import {
  HOME,
  ALL_COURSE,
  COURSE_DETAILS,
  SUBMIT_QUIZ,
  ALL_ARTICLES,
  ARTICLE_DETAILS,
  ALL_VIDEOS,
  VIDEO_DETAILS,
  UPC_SESSION,
  ATT_SESSION,
  CERTIFICATE,
  SESSION_DETAILS,
  LEADER,
  // SUBMIT_COMMENT,
  UPLOAD,
  UPDATE,
  ADD_REVIEW,
} from '../constants/endpoints';
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
  const config = {
    url: COURSE_DETAILS(),
    params: { _id: COURSE_ID },
    data: { number },
    method: 'GET',
    hideLoader,
  };
  return makeHttpCall(config);
};

export const SUBMIT_QUIZ_API = (params, hideLoader) => {
  const config = {
    url: SUBMIT_QUIZ(),
    data: params,
    method: 'POST',
    hideLoader,
  };
  return makeHttpCall(config);
};

export const ARTICLES_API = (params, hideLoader) => {
  const config = { url: ALL_ARTICLES(), params, method: 'GET', hideLoader };
  return makeHttpCall(config);
};
export const ARTICLE_DETAILS_API = (params, hideLoader) => {
  const { ARTICLE_ID } = params || {};
  const config = {
    url: ARTICLE_DETAILS(),
    params: { _id: ARTICLE_ID },
    method: 'GET',
    hideLoader,
  };
  return makeHttpCall(config);
};
export const VIDEOS_API = (params, hideLoader) => {
  const config = { url: ALL_VIDEOS(), params, method: 'GET', hideLoader };
  return makeHttpCall(config);
};
export const VIDEO_DETAILS_API = (params, hideLoader) => {
  const { VIDEO_ID } = params || {};
  const config = {
    url: VIDEO_DETAILS(),
    params: { _id: VIDEO_ID },
    method: 'GET',
    hideLoader,
  };
  return makeHttpCall(config);
};

export const UPC_SESSION_API = (params, hideLoader) => {
  const config = { url: UPC_SESSION(), params, method: 'GET', hideLoader };
  return makeHttpCall(config);
};
export const ATT_SESSION_API = (params, hideLoader) => {
  const config = { url: ATT_SESSION(), params, method: 'GET', hideLoader };
  return makeHttpCall(config);
};

export const SESSION_DETAILS_API = (params, hideLoader) => {
  const { SESSION_ID } = params || {};
  const config = {
    url: SESSION_DETAILS(),
    params: { _id: SESSION_ID },
    method: 'GET',
    hideLoader,
  };
  return makeHttpCall(config);
};
export const CERTIFICATE_API = (params, hideLoader) => {
  const config = { url: CERTIFICATE(), params, method: 'GET', hideLoader };
  return makeHttpCall(config);
};
export const LEADER_API = (params, hideLoader) => {
  const config = { url: LEADER(), params, method: 'GET', hideLoader };
  return makeHttpCall(config);
};
// export const SEND_COMMENT_API = (params, hideLoader) => {
//   const config = {
//     url: SUBMIT_COMMENT(),
//     data: params,
//     method: 'POST',
//     hideLoader,
//   };
//   return makeHttpCall(config);
// };
export const UPLOAD_API = (params, hideLoader) => {
  const config = {
    url: UPLOAD(),
    data: params,
    method: 'POST',
    hideLoader,
  };
  return makeHttpCall(config);
};
export const ADD_REVIEW_API = (params, hideLoader) => {
  const config = {
    url: ADD_REVIEW(),
    data: params,
    method: 'POST',
    hideLoader,
  };
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
