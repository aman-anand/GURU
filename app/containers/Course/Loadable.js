/**
 *
 * Asynchronously loads the component for Course
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
