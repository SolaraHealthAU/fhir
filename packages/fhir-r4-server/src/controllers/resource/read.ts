import { Request, Response, NextFunction } from 'express';

import type { ResourceDependencies } from './types';
import type { Context } from '../../types';
import * as errors from '../../errors';
import { sendFhirResponse } from '../../utils/response';
import {
  getResourceType,
  getId,
  getIfModifiedSinceHeader,
  getIfNoneMatchHeader,
} from '../../utils/request';

export const init = <C extends Context>(deps: ResourceDependencies<C>) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const resourceType = getResourceType(req);
      if (resourceType == null) {
        throw new errors.ResourceTypeNotSupported();
      }
      const id = getId(req);
      if (id == null) {
        throw new errors.InternalServerError('Missing resource type or id');
      }

      // Fetch the resource interaction
      const interaction = deps.server.obtainRestResourceInteractionOption(resourceType, 'read');
      if (!interaction) {
        throw new errors.ResourceTypeNotSupported(resourceType);
      }

      const ifModifiedSince = getIfModifiedSinceHeader(req);
      const ifNoneMatch = getIfNoneMatchHeader(req);

      const context = await deps.context({ req, res });
      const resource = await interaction.handler(
        {
          id,
          ifModifiedSince,
          ifNoneMatch,
        },
        context,
      );
      if (resource == null) {
        throw new errors.ResourceNotFound(resourceType, id);
      }

      return sendFhirResponse(deps)(req, res, { status: 200, resource });
    } catch (e: unknown) {
      if (e instanceof Error) {
        return next(e);
      }
      return next(new errors.InternalServerError('Unknown error occurred'));
    }
  };
};
