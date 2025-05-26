import type { ResourceDependencies } from './types';
import { notAllowed } from '../../utils/response';
import errorMiddleware from '../error-middleware';
import * as read from './read';
import * as readHead from './read-head';
import * as searchType from './search-type';
import { Context } from '../../types';

export const init = <C extends Context>(deps: ResourceDependencies<C>) => {
  const { router } = deps;

  // read
  router.get('/:resourceType/:id', read.init(deps)).use(errorMiddleware(deps));
  router.head('/:resourceType/:id', readHead.init(deps)).use(errorMiddleware(deps));

  // vread
  router.get('/:resourceType/:id/_history/:vid', notAllowed()('vread')).use(errorMiddleware(deps));
  router.head('/:resourceType/:id/_history/:vid', notAllowed()('vread')).use(errorMiddleware(deps));

  // update
  router.put('/:resourceType/:id', notAllowed()('update')).use(errorMiddleware(deps));

  // patch
  router.patch('/:resourceType/:id', notAllowed()('patch')).use(errorMiddleware(deps));

  // delete
  router.delete('/:resourceType/:id', notAllowed()('delete')).use(errorMiddleware(deps));

  // create
  router.post('/:resourceType', notAllowed()('create')).use(errorMiddleware(deps));

  // search-type
  router.get('/:resourceType', searchType.init(deps)).use(errorMiddleware(deps));
  router.post('/:resourceType/_search', searchType.init(deps)).use(errorMiddleware(deps));

  // history-instance
  router
    .get('/:resourceType/:id/_history', notAllowed()('history-instance'), errorMiddleware(deps))
    .use(errorMiddleware(deps));

  // history-type
  router.get('/:resourceType/_history', notAllowed()('history-type')).use(errorMiddleware(deps));
};
