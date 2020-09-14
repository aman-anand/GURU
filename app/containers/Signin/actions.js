/*
 *
 * Signin actions
 *
 */
import { SIGN_IN_API } from '../../dataService/Login';
import { SIGN_IN_PENDING, SIGN_IN_FULFILLED, SIGN_IN_REJECTED } from './constants';

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

// ANCHOR: Common featch method
export const fetchData = params => {
  const { types, data, err } = params || {};
  return {
    type: types,
    payload: data || err || {},
  };
};
