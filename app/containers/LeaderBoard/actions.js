/*
 *
 * LeaderBoard actions
 *
 */
import { LEADER_API } from '../../dataService/Home';

import { LEADER_PENDING, LEADER_FULFILLED, LEADER_REJECTED } from './constants';

export function leaderAction(params) {
  return async dispatch => {
    dispatch(fetchData({ types: LEADER_PENDING }));
    try {
      const { data } = await LEADER_API(params);
      return dispatch(fetchData({ types: LEADER_FULFILLED, data }));
    } catch (err) {
      return dispatch(fetchData({ types: LEADER_REJECTED, err }));
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
