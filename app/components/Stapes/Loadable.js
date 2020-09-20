/**
 *
 * Asynchronously loads the component for Stapes
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
