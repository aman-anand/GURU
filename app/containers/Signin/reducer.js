/*
 *
 * Signin reducer
 *
 */
import produce from 'immer';
import {
  SIGN_IN_FULFILLED,
  OTP_FULFILLED,
  REGISTER_FULFILLED,
} from './constants';
import { setLoclStoreArry } from '../../services/CommonSetterGetter';

export const initialState = {
  data: {},
  stage: 'LOGIN',
};

/* eslint-disable default-case, no-param-reassign */
const signinReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case SIGN_IN_FULFILLED:
        {
          const { data, success } = action.payload || {};
          const {
            auth,
            email,
            role,
            id,
            profileImage,
            phone,
            rollNumber,
            fName,
            lName,
            gender,
            aadharNumber,
            address,
          } = data;
          const { city, country, locality, pincode, state: adressState } =
            address || {};
          const { token, expires } = auth || {};
          if (success) {
            setLoclStoreArry([
              { token },
              { email },
              { role },
              { id },
              { profileImage },
              { expires },
              { phone },
              { rollNumber },
              { fName },
              { lName },
              { gender },
              { aadharNumber },
              { city },
              { country },
              { locality },
              { pincode },
              { state: adressState },
            ]);
          }
          draft.data = data;
        }
        break;
      case OTP_FULFILLED:
        draft.stage = 'OTP';
        break;
      case REGISTER_FULFILLED:
        {
          const { data, success } = action.payload || {};
          const {
            auth,
            email,
            role,
            id,
            profileImage,
            phone,
            rollNumber,
            fName,
            lName,
            gender,
          } = data;
          const { token, expires } = auth || {};
          if (success) {
            setLoclStoreArry([
              { token },
              { email },
              { role },
              { id },
              { profileImage },
              { expires },
              { phone },
              { rollNumber },
              { fName },
              { lName },
              { gender },
            ]);
          }
          draft.merge({
            data,
          });
        }
        break;
    }
  });

export default signinReducer;
