import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the shishyaHome state domain
 */

const selectShishyaHomeDomain = state => state.get('shishyaHome', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by ShishyaHome
 */

const makeSelectShishyaHome = () => createSelector(selectShishyaHomeDomain, substate => substate.toJS());

export default makeSelectShishyaHome;
export { selectShishyaHomeDomain };
