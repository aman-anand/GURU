/*
 *
 * Signin reducer
 *
 */
import produce from 'immer';
import {
  SEND_OTP_FULFILLED,
  VERIFY_OTP_FULFILLED,
  PROFILE_UPDATE_FULFILLED,
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
      case SEND_OTP_FULFILLED:
        draft.stage = 'OTP';
        break;
      case VERIFY_OTP_FULFILLED:
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
            aadharImageUrl,
            address,
            dob,
            age,
            occupation,
            maritalStatus,
            motherTongue,
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
              { aadharImageUrl },
              { dob },
              { age },
              { occupation },
              { maritalStatus },
              { motherTongue },
              { city },
              { country },
              { locality },
              { pincode },
              { state: adressState },
              { lang: 'EN' },
            ]);
          }
          draft.data = data;
        }
        break;
      case PROFILE_UPDATE_FULFILLED:
        draft.data = {};
        break;
    }
  });

export default signinReducer;
