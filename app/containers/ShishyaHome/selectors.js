import { createSelector } from 'reselect';
import { initialState } from '../Home/reducer';

/**
 * Direct selector to the shishyaHome state domain
 */

const selectShishyaHomeDomain = state => state.get('shishyaHome', initialState);
const selectLoginDomain = state => state.get('login', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by ShishyaHome
 */

const makeSelectShishyaHome = () => createSelector(selectShishyaHomeDomain, substate => substate.toJS());
const makeSelectLoginDomain = () => createSelector(selectLoginDomain, substate => substate.toJS());

export default makeSelectShishyaHome;
export { makeSelectShishyaHome, makeSelectLoginDomain };
