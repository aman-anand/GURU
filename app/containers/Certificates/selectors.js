import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the certificates state domain
 */

const selectCertificatesDomain = state => state.certificates || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Certificates
 */

const makeSelectCertificates = () =>
  createSelector(
    selectCertificatesDomain,
    substate => substate,
  );

export default makeSelectCertificates;
export { selectCertificatesDomain };
