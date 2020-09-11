/**
 *
 * Asynchronously loads the component for VideoPlayer
 *
 */

import loadable from 'loadable-components';

export default loadable(() => import('./index'));
