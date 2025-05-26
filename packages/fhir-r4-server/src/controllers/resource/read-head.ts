import { NextFunction, Request, Response } from 'express';

import type { ResourceDependencies } from './types';
import * as errors from '../../errors';
import { sendFhirResponse } from '../../utils/response';
import {
  getResourceType,
  getId,
  getIfNoneMatchHeader,
  getIfModifiedSinceHeader,
} from '../../utils/request';
import { Context } from '../../types';

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

      const context = await deps.context({ req, res });
      const resource = await interaction.handler(
        {
          id,
          ifModifiedSince: getIfModifiedSinceHeader(req),
          ifNoneMatch: getIfNoneMatchHeader(req),
        },
        context,
      );
      if (resource == null) {
        throw new errors.ResourceNotFound(resourceType, id);
      }

      return sendFhirResponse(deps)(req, res, { status: 204 });
    } catch (e: unknown) {
      if (e instanceof Error) {
        return next(e);
      }
      return next(new errors.InternalServerError('Unknown error occurred'));
    }
  };
};
