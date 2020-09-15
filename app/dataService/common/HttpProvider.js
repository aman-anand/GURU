/* eslint-disable no-mixed-operators,no-mixed-operators */
import axios from 'axios';
import globalConfig from '../../config';

export const showLoader = () => {
  const ele = document.getElementById('loaderDiv');
  if (ele) {
    ele.style.display = 'block';
  }
};
export const hideLoader = () => {
  const ele = document.getElementById('loaderDiv');
  if (ele) {
    ele.style.display = 'none';
  }
};

axios.interceptors.request.use(config => {
  const c = config;
  // const { Authorization } = c.headers;
  const token = window.localStorage.getItem('token');
  c.headers.Authorization = `Bearer ${token}`;
  return c;
});
axios.interceptors.response.use(response => response, error => Promise.reject(error));

export const makeHttpRequest = config => {
  if (!config.hideLoader) {
    showLoader();
  }
  // IdentifyUserForMXP();
  config.params = config.params || {};
  return axios
    .request({
      method: config.method || 'GET',
      baseURL: config.baseURL ? config.baseURL : globalConfig.API_BASE(),
      url: config.url,
      data: config.data,
      headers: config.headers ? config.headers : {},
      params: config.params,
      timeout: config.timeout ? config.timeout : globalConfig.TIMEOUT,
      responseType: config.responseType ? config.responseType : 'json',
    })
    .then(res => {
      if (!config.hideLoader) {
        hideLoader();
      }
      return res;
    })
    .catch(err => {
      hideLoader();
      return errorHandler(err);
    });
};

export const errorHandler = err => {
  throw err;
};

export const extractData = (res = {}) => {
  res = { ...res };
  res.data = res.data || [];
  return res;
};

export default {
  makeHttpRequest,
  errorHandler,
  extractData,
};
