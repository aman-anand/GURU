/**
 *
 * Asynchronously loads the component for VideoCard
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
