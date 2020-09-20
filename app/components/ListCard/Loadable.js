/**
 *
 * Asynchronously loads the component for ListCard
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
