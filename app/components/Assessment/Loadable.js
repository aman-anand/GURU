/**
 *
 * Asynchronously loads the component for Assessment
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
