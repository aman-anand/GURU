/**
 *
 * Asynchronously loads the component for DialogBox
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
