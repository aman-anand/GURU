/**
 *
 * Asynchronously loads the component for ArticleDetails
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
