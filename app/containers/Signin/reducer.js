/*
 *
 * Signin reducer
 *
 */

import { fromJS } from 'immutable';
import { SIGN_IN_PENDING, SIGN_IN_FULFILLED, SIGN_IN_REJECTED, OTP_FULFILLED } from './constants';
import { setLoclStoreArry } from '../../services/CommonSetterGetter';
// import history from '../../utils/history';

export const initialState = fromJS({
  data: {},
  stage: 'LOGIN',
});

function signinReducer(state = initialState, action) {
  switch (action.type) {
    case SIGN_IN_PENDING:
      return state.merge({});
    case SIGN_IN_FULFILLED: {
      const { data, success } = action.payload || {};
      const { auth, email, role, id, profileImage, phone } = data;
      const { token, expires } = auth || {};
      if (success) {
        setLoclStoreArry([{ token }, { email }, { role }, { id }, { profileImage }, { expires }, { phone }]);
      }
      return state.merge({
        data,
      });
    }
    case SIGN_IN_REJECTED:
      return state.merge({});
    case OTP_FULFILLED: {
      return state.merge({
        stage: 'OTP',
      });
    }
    default:
      return state;
  }
}

export default signinReducer;
