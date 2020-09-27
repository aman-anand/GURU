/**
 *
 * Asynchronously loads the component for LeaderBoard
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
