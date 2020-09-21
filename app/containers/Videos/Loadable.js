/**
 *
 * Asynchronously loads the component for Videos
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
