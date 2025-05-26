import { ControllerDependencies } from './types';
import { sendFhirResponse } from '../utils/response';
import { Context } from '../types';

export const init = <C extends Context>(dependencies: ControllerDependencies<C>) => {
  const { router } = dependencies;

  router.get('/metadata', async (req, res, next) => {
    try {
      const capabilities = dependencies.server.options.capabilities;

      sendFhirResponse(dependencies)(req, res, {
        status: 200,
        resource: capabilities,
      });
    } catch (error) {
      next(error);
    }
  });
};
