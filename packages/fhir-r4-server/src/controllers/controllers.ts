import type { ControllerDependencies } from './types';
import * as resource from './resource/resource';
import * as capabilities from './capabilities';
import { notAllowed } from '../utils/response';
import errorMiddleware from './error-middleware';
import { Context } from '../types';

export const init = <C extends Context>(dependencies: ControllerDependencies<C>) => {
  const { router } = dependencies;
  // search-system
  router.get('/', notAllowed()('search-system')).use(errorMiddleware(dependencies));
  router.post('/_search', notAllowed()('search-system')).use(errorMiddleware(dependencies));

  // transaction | batch
  router.post('/', notAllowed()('transaction')).use(errorMiddleware(dependencies));

  // history-system
  router.get('/_history', notAllowed()('history-system')).use(errorMiddleware(dependencies));

  // Capabilities
  capabilities.init(dependencies);

  // Resources
  resource.init(dependencies);
};
