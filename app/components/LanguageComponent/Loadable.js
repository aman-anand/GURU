/**
 *
 * Asynchronously loads the component for LanguageComponent
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
