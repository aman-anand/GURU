/**
 *
 * Asynchronously loads the component for Exams
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
