/**
 *
 * Asynchronously loads the component for Bredcrumb
 *
 */

import loadable from 'loadable-components';

export default loadable(() => import('./index'));
