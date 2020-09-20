/**
 *
 * Asynchronously loads the component for OptionalHeader
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
