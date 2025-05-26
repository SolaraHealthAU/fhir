import { Router } from 'express';
import type { ResourceDependencies } from './resource/types';
import type { Context, ExpressContextFunction } from '../types';
import type { RestServer } from '../rest-server';

export type ControllerDependencies<C extends Context> = {
  router: Router;
  server: RestServer<C>;
  context: ExpressContextFunction<C>;
} & ResourceDependencies<C>;
