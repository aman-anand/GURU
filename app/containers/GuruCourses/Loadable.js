/**
 *
 * Asynchronously loads the component for GuruCourses
 *
 */

import loadable from 'loadable-components';

export default loadable(() => import('./index'));
