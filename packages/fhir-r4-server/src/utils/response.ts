import { Request, Response, NextFunction } from 'express';

import * as errors from '../errors';
import { Context, Interaction } from '../types';
import * as requestUtils from './request';
import type { RestServer } from '../rest-server';
import type { ResourceListType } from '@solarahealth/fhir-r4';

export function sendFhirResponse<C extends Context>(deps: { server: RestServer<C> }) {
  return (
    req: Request,
    res: Response,
    fhir:
      | {
          status: 200 | 201 | 202 | 400 | 404 | 405 | 500;
          resource: ResourceListType;
        }
      | { status: 204 }
      | { status: 400 | 404 | 405 | 500 },
  ) => {
    const { status } = fhir;

    if ('resource' in fhir === true) {
      const { resource } = fhir;

      const format = requestUtils.getFormat(req, resource.resourceType);

      if ('meta' in resource && resource.meta?.lastUpdated != null) {
        res.setHeader('Last-Modified', resource.meta.lastUpdated);
      }

      if ('meta' in resource && resource.meta?.versionId != null) {
        res.setHeader('ETag', `W/"${resource.meta.versionId}"`);
      }

      if (format === 'application/xml' && deps.server.options.fhir != null) {
        const xml = deps.server.options.fhir.objToXml(resource);
        if (xml != null) {
          res.status(status).contentType('application/xml').send(xml);
          return;
        }
        throw new errors.ResourceInvalid(resource.resourceType, 'Invalid XML');
      }

      if (format === 'application/json') {
        res.status(status).json(resource);
        return;
      }

      throw new errors.ResourceFormatNotSupported(resource.resourceType, format);
    }

    res.status(status).send();
    return;
  };
}

export function notAllowed() {
  return (type: Interaction) => {
    return (req: Request, res: Response, next: NextFunction) => {
      try {
        const resourceType = requestUtils.getResourceType(req);
        const id = requestUtils.getId(req);

        throw new errors.ResourceMethodNotAllowed(type, resourceType ?? undefined, id ?? undefined);
      } catch (e: unknown) {
        console.log('notAllowed', e);
        next(e);
      }
    };
  };
}
