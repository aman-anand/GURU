/**
 *
 * Asynchronously loads the component for Courses
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
