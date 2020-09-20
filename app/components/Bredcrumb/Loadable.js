/**
 *
 * Asynchronously loads the component for Bredcrumb
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
