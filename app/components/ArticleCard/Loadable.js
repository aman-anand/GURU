/**
 *
 * Asynchronously loads the component for ArticleCard
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
