/**
 *
 * Asynchronously loads the component for Courses
 *
 */

import loadable from 'loadable-components';

export default loadable(() => import('./index'));
