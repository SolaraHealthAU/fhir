import { Request, Response, NextFunction } from 'express';

import type { ResourceDependencies } from './types';
import * as errors from '../../errors';
import { sendFhirResponse } from '../../utils/response';
import { getResourceType, getQueryParams } from '../../utils/request';
import { Context } from '../../types';

export const init = <C extends Context>(deps: ResourceDependencies<C>) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const resourceType = getResourceType(req);
      if (resourceType == null) {
        throw new errors.ResourceTypeNotSupported();
      }

      // Fetch the resource interaction
      const interaction = deps.server.obtainRestResourceInteractionOption(
        resourceType,
        'search-type',
      );
      if (!interaction) {
        throw new errors.ResourceTypeNotSupported(resourceType);
      }

      // Create context
      const context = await deps.context({ req, res });
      const resource = await interaction.handler({ params: getQueryParams(req) }, context);

      return sendFhirResponse(deps)(req, res, { status: 200, resource });
    } catch (e: unknown) {
      if (e instanceof Error) {
        return next(e);
      }
      return next(new errors.InternalServerError('Unknown error occurred'));
    }
  };
};
