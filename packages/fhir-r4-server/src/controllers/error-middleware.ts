import { Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import type { ControllerDependencies } from './types';
import { sendFhirResponse } from '../utils/response';
import type { OperationOutcome } from '@solarahealth/fhir-r4';
import { Context } from '../types';
import { convertZodErrorToFhirOperationOutcome } from '../utils/utils';

const errorMiddleware =
  <C extends Context>(deps: ControllerDependencies<C>) =>
  (error: Error, req: Request, res: Response, next: NextFunction) => {
    if (res.headersSent) {
      next(error);
      return;
    }

    // Handle translation of zod errors to FHIR OperationOutcome
    if (error instanceof z.ZodError) {
      return sendFhirResponse(deps)(req, res, {
        status: 400,
        resource: convertZodErrorToFhirOperationOutcome(error),
      });
    }

    try {
      // Handle specific FHIR errors
      switch (error.name) {
        case 'NotFound':
        case 'ResourceNotFound':
          return sendFhirResponse(deps)(req, res, {
            status: 404,
            resource: {
              resourceType: 'OperationOutcome',
              issue: [
                {
                  severity: 'error',
                  code: 'not-found',
                  diagnostics: error.message,
                },
              ],
            } satisfies OperationOutcome,
          });

        case 'ResourceMethodNotAllowed':
          return sendFhirResponse(deps)(req, res, {
            status: 405,
            resource: {
              resourceType: 'OperationOutcome',
              issue: [
                {
                  severity: 'error',
                  code: 'not-supported',
                  diagnostics: error.message,
                },
              ],
            } satisfies OperationOutcome,
          });

        case 'ResourceTypeNotSupported':
          return sendFhirResponse(deps)(req, res, {
            status: 400,
            resource: {
              resourceType: 'OperationOutcome',
              issue: [
                {
                  severity: 'error',
                  code: 'not-supported',
                  diagnostics: error.message,
                },
              ],
            } satisfies OperationOutcome,
          });

        case 'ResourceFormatNotSupported':
          return sendFhirResponse(deps)(req, res, {
            status: 400,
            resource: {
              resourceType: 'OperationOutcome',
              issue: [
                {
                  severity: 'error',
                  code: 'not-supported',
                  diagnostics: error.message,
                },
              ],
            } satisfies OperationOutcome,
          });

        default:
          console.log('error', error);
          // Handle unexpected errors
          return sendFhirResponse(deps)(req, res, {
            status: 500,
            resource: {
              resourceType: 'OperationOutcome',
              issue: [
                {
                  severity: 'error',
                  code: 'unknown',
                  diagnostics: 'An internal server error occurred',
                },
              ],
            } satisfies OperationOutcome,
          });
      }
    } catch (e) {
      next(e);
    }
  };

export default errorMiddleware;
