import { Router } from 'express';
import type { Context, ExpressContextFunction } from '../../types';
import type { RestServer } from '../../rest-server';

export type ResourceDependencies<C extends Context> = {
  router: Router;
  server: RestServer<C>;
  context: ExpressContextFunction<C>;
};
