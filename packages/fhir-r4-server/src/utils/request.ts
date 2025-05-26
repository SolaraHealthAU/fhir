import { createKnownResourceTypeSchema } from '@solarahealth/fhir-r4';
import * as errors from '../errors';
import { Request } from 'express';

export const getResourceType = (req: Request) => {
  if (req.params.resourceType != null) {
    const resourceType = req.params.resourceType.toString();
    const knownResourceTypeSchema = createKnownResourceTypeSchema();
    const result = knownResourceTypeSchema.safeParse(resourceType);
    if (result.success) {
      return result.data;
    }
  }
  return null;
};

export const getId = (req: Request) => {
  if (req.params.id != null) {
    return req.params.id.toString();
  }
  return null;
};

export const getQueryParams = (req: Request): Record<string, string | string[]> => {
  function stringOrStringArray(value: unknown): string | string[] {
    if (typeof value === 'string') {
      return value;
    }
    if (Array.isArray(value)) {
      return value.flatMap((s) => {
        const val = stringOrStringArray(s);
        if (Array.isArray(val)) {
          return val;
        }
        return [val];
      });
    }
    if (value == null) {
      return [];
    }
    return String(value);
  }

  return Object.fromEntries(
    Object.entries(req.query).map(([key, value]) => [key, stringOrStringArray(value)]),
  );
};

export const getVid = (req: Request) => {
  if (req.params.vid != null) {
    return req.params.vid.toString();
  }
  return null;
};

export const getIfModifiedSinceHeader = (req: Request) => {
  if (req.headers['if-modified-since'] != null) {
    return req.headers['if-modified-since'].toString();
  }
  return null;
};

export const getIfNoneMatchHeader = (req: Request) => {
  if (req.headers['if-none-match'] != null) {
    return req.headers['if-none-match'].toString();
  }
  return null;
};

export const getIfMatchHeader = (req: Request) => {
  if (req.headers['if-match'] != null) {
    return req.headers['if-match'].toString();
  }
  return null;
};

export const getIfNoneExistHeader = (req: Request) => {
  if (req.headers['if-none-exist'] != null) {
    return req.headers['if-none-exist'].toString();
  }
  return null;
};

export function getFormat(req: Request, resourceType: string) {
  const accept = req.query._format?.toString() ?? 'application/fhir+json';

  switch (accept) {
    case 'json':
    case 'application/json':
    case 'application/fhir+json':
      return 'application/json';
    case 'xml':
    case 'application/xml+fhir': // Old format
    case 'application/xml':
    case 'application/fhir+xml':
      return 'application/xml';
    default:
      throw new errors.ResourceFormatNotSupported(resourceType, accept);
  }
}
