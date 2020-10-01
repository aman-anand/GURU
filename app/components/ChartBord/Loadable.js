/**
 *
 * Asynchronously loads the component for ChartBord
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
