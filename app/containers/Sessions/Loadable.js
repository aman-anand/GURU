/**
 *
 * Asynchronously loads the component for Sessions
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
