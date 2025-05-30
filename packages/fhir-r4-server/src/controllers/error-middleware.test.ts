import { Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import errorMiddleware from './error-middleware';
import { ControllerDependencies } from './types';
import { sendFhirResponse } from '../utils/response';
import { convertZodErrorToFhirOperationOutcome } from '../utils/utils';
import * as errors from '../errors';
import { Context } from '../types';
import type { OperationOutcome } from '@solarahealth/fhir-r4';

// Mock dependencies
jest.mock('../utils/response', () => ({
  sendFhirResponse: jest.fn(),
}));

jest.mock('../utils/utils', () => ({
  convertZodErrorToFhirOperationOutcome: jest.fn(),
}));

const mockSendFhirResponse = sendFhirResponse as jest.MockedFunction<typeof sendFhirResponse>;
const mockConvertZodErrorToFhirOperationOutcome =
  convertZodErrorToFhirOperationOutcome as jest.MockedFunction<
    typeof convertZodErrorToFhirOperationOutcome
  >;

describe('error middleware', () => {
  let mockRequest: Partial<Request>;
  let mockResponse: Partial<Response>;
  let mockNext: NextFunction;
  let mockDependencies: ControllerDependencies<Context>;
  let mockSendResponse: jest.Mock;
  let middleware: (error: Error, req: Request, res: Response, next: NextFunction) => void;

  beforeEach(() => {
    jest.clearAllMocks();

    mockRequest = {
      url: '/Patient/123',
      method: 'GET',
      params: { resourceType: 'Patient', id: '123' },
    };

    mockResponse = {
      headersSent: false,
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis(),
      send: jest.fn().mockReturnThis(),
    };

    mockNext = jest.fn();
    mockSendResponse = jest.fn();

    mockDependencies = {
      router: {} as any,
      server: {} as any,
      context: jest.fn(),
    };

    mockSendFhirResponse.mockReturnValue(mockSendResponse);

    // Initialize middleware with dependencies
    middleware = errorMiddleware(mockDependencies);
  });

  describe('headers already sent check', () => {
    it('should call next when headers are already sent', () => {
      // Arrange
      const testError = new Error('Test error');
      mockResponse.headersSent = true;

      // Act
      middleware(testError, mockRequest as Request, mockResponse as Response, mockNext);

      // Assert
      expect(mockNext).toHaveBeenCalledWith(testError);
      expect(mockSendFhirResponse).not.toHaveBeenCalled();
    });

    it('should process error when headers are not sent', () => {
      // Arrange
      const testError = new Error('Test error');
      mockResponse.headersSent = false;

      // Act
      middleware(testError, mockRequest as Request, mockResponse as Response, mockNext);

      // Assert
      expect(mockSendFhirResponse).toHaveBeenCalled();
      expect(mockNext).not.toHaveBeenCalled();
    });
  });

  describe('Zod error handling', () => {
    it('should handle Zod validation errors and convert to FHIR OperationOutcome', () => {
      // Arrange
      const zodError = new z.ZodError([
        {
          code: 'invalid_type',
          expected: 'string',
          received: 'number',
          path: ['name'],
          message: 'Expected string, received number',
        },
      ]);

      const mockOperationOutcome: OperationOutcome = {
        resourceType: 'OperationOutcome',
        issue: [
          {
            severity: 'error',
            code: 'structure',
            details: { text: 'Expected string, received number' },
            diagnostics: 'schema validation',
            expression: ['name'],
          },
        ],
      };

      mockConvertZodErrorToFhirOperationOutcome.mockReturnValue(mockOperationOutcome);

      // Act
      middleware(zodError, mockRequest as Request, mockResponse as Response, mockNext);

      // Assert
      expect(mockConvertZodErrorToFhirOperationOutcome).toHaveBeenCalledWith(zodError);
      expect(mockSendFhirResponse).toHaveBeenCalledWith(mockDependencies);
      expect(mockSendResponse).toHaveBeenCalledWith(mockRequest, mockResponse, {
        status: 400,
        resource: mockOperationOutcome,
      });
      expect(mockNext).not.toHaveBeenCalled();
    });

    it('should handle multiple Zod validation errors', () => {
      // Arrange
      const zodError = new z.ZodError([
        {
          code: 'invalid_type',
          expected: 'string',
          received: 'number',
          path: ['name'],
          message: 'Expected string, received number',
        },
        {
          code: 'too_small',
          minimum: 18,
          type: 'number',
          inclusive: true,
          exact: false,
          path: ['age'],
          message: 'Number must be greater than or equal to 18',
        },
      ]);

      const mockOperationOutcome: OperationOutcome = {
        resourceType: 'OperationOutcome',
        issue: [
          {
            severity: 'error',
            code: 'structure',
            details: { text: 'Expected string, received number' },
            diagnostics: 'schema validation',
            expression: ['name'],
          },
          {
            severity: 'error',
            code: 'value',
            details: { text: 'Number must be greater than or equal to 18' },
            diagnostics: 'schema validation',
            expression: ['age'],
          },
        ],
      };

      mockConvertZodErrorToFhirOperationOutcome.mockReturnValue(mockOperationOutcome);

      // Act
      middleware(zodError, mockRequest as Request, mockResponse as Response, mockNext);

      // Assert
      expect(mockSendResponse).toHaveBeenCalledWith(mockRequest, mockResponse, {
        status: 400,
        resource: mockOperationOutcome,
      });
    });
  });

  describe('FHIR error handling', () => {
    it('should handle ResourceNotFound errors with 404 status', () => {
      // Arrange
      const resourceNotFoundError = new errors.ResourceNotFound('Patient', '123');

      // Act
      middleware(resourceNotFoundError, mockRequest as Request, mockResponse as Response, mockNext);

      // Assert
      expect(mockSendFhirResponse).toHaveBeenCalledWith(mockDependencies);
      expect(mockSendResponse).toHaveBeenCalledWith(mockRequest, mockResponse, {
        status: 404,
        resource: {
          resourceType: 'OperationOutcome',
          issue: [
            {
              severity: 'error',
              code: 'not-found',
              diagnostics: resourceNotFoundError.message,
            },
          ],
        },
      });
    });

    it('should handle NotFound errors (generic) with 404 status', () => {
      // Arrange
      const notFoundError = new Error('Resource not found');
      notFoundError.name = 'NotFound';

      // Act
      middleware(notFoundError, mockRequest as Request, mockResponse as Response, mockNext);

      // Assert
      expect(mockSendResponse).toHaveBeenCalledWith(mockRequest, mockResponse, {
        status: 404,
        resource: {
          resourceType: 'OperationOutcome',
          issue: [
            {
              severity: 'error',
              code: 'not-found',
              diagnostics: 'Resource not found',
            },
          ],
        },
      });
    });

    it('should handle ResourceMethodNotAllowed errors with 405 status', () => {
      // Arrange
      const methodNotAllowedError = new errors.ResourceMethodNotAllowed('update', 'Patient', '123');

      // Act
      middleware(methodNotAllowedError, mockRequest as Request, mockResponse as Response, mockNext);

      // Assert
      expect(mockSendResponse).toHaveBeenCalledWith(mockRequest, mockResponse, {
        status: 405,
        resource: {
          resourceType: 'OperationOutcome',
          issue: [
            {
              severity: 'error',
              code: 'not-supported',
              diagnostics: methodNotAllowedError.message,
            },
          ],
        },
      });
    });

    it('should handle ResourceTypeNotSupported errors with 400 status', () => {
      // Arrange
      const typeNotSupportedError = new errors.ResourceTypeNotSupported('InvalidResource');

      // Act
      middleware(typeNotSupportedError, mockRequest as Request, mockResponse as Response, mockNext);

      // Assert
      expect(mockSendResponse).toHaveBeenCalledWith(mockRequest, mockResponse, {
        status: 400,
        resource: {
          resourceType: 'OperationOutcome',
          issue: [
            {
              severity: 'error',
              code: 'not-supported',
              diagnostics: typeNotSupportedError.message,
            },
          ],
        },
      });
    });

    it('should handle ResourceFormatNotSupported errors with 400 status', () => {
      // Arrange
      const formatNotSupportedError = new errors.ResourceFormatNotSupported(
        'Patient',
        'text/plain',
      );

      // Act
      middleware(
        formatNotSupportedError,
        mockRequest as Request,
        mockResponse as Response,
        mockNext,
      );

      // Assert
      expect(mockSendResponse).toHaveBeenCalledWith(mockRequest, mockResponse, {
        status: 400,
        resource: {
          resourceType: 'OperationOutcome',
          issue: [
            {
              severity: 'error',
              code: 'not-supported',
              diagnostics: formatNotSupportedError.message,
            },
          ],
        },
      });
    });
  });

  describe('unknown error handling', () => {
    it('should handle unknown errors with 500 status', () => {
      // Arrange
      const unknownError = new Error('Some unexpected error');
      unknownError.name = 'UnknownError';

      // Act
      middleware(unknownError, mockRequest as Request, mockResponse as Response, mockNext);

      // Assert
      expect(mockSendResponse).toHaveBeenCalledWith(mockRequest, mockResponse, {
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
        },
      });
    });

    it('should handle generic Error instances with 500 status', () => {
      // Arrange
      const genericError = new Error('Database connection failed');

      // Act
      middleware(genericError, mockRequest as Request, mockResponse as Response, mockNext);

      // Assert
      expect(mockSendResponse).toHaveBeenCalledWith(mockRequest, mockResponse, {
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
        },
      });
    });

    it('should handle errors with empty names as unknown errors', () => {
      // Arrange
      const errorWithEmptyName = new Error('Error with empty name');
      errorWithEmptyName.name = '';

      // Act
      middleware(errorWithEmptyName, mockRequest as Request, mockResponse as Response, mockNext);

      // Assert
      expect(mockSendResponse).toHaveBeenCalledWith(mockRequest, mockResponse, {
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
        },
      });
    });

    it('should handle null error gracefully', () => {
      // Arrange
      const nullError = null as any;

      // Act & Assert
      // When null is passed as error, the middleware will likely throw or call next
      // because null can't be processed by instanceof checks
      expect(() => {
        middleware(nullError, mockRequest as Request, mockResponse as Response, mockNext);
      }).not.toThrow(); // The middleware should handle this gracefully without crashing

      // The null error should be passed to next() due to the try-catch
      expect(mockNext).toHaveBeenCalled();
    });
  });

  describe('exception handling in error processing', () => {
    it('should call next when sendFhirResponse throws an error', () => {
      // Arrange
      const originalError = new Error('Original error');
      const sendResponseError = new Error('Send response failed');
      mockSendFhirResponse.mockImplementation(() => {
        throw sendResponseError;
      });

      // Act
      middleware(originalError, mockRequest as Request, mockResponse as Response, mockNext);

      // Assert
      expect(mockNext).toHaveBeenCalledWith(sendResponseError);
    });

    it('should handle exceptions during OperationOutcome creation', () => {
      // Arrange
      const testError = new errors.ResourceNotFound('Patient', '123');

      // Mock sendFhirResponse to throw during execution
      mockSendFhirResponse.mockReturnValue(() => {
        throw new Error('OperationOutcome creation failed');
      });

      // Act
      middleware(testError, mockRequest as Request, mockResponse as Response, mockNext);

      // Assert
      expect(mockNext).toHaveBeenCalledWith(expect.any(Error));
    });
  });

  describe('middleware creation', () => {
    it('should return a function with correct arity', () => {
      // Arrange & Act
      const middleware = errorMiddleware(mockDependencies);

      // Assert
      expect(typeof middleware).toBe('function');
      expect(middleware.length).toBe(4); // error, req, res, next parameters
    });

    it('should work with different context types', () => {
      // Arrange
      interface CustomContext extends Context {
        customField: string;
      }

      const customDependencies: ControllerDependencies<CustomContext> = {
        router: {} as any,
        server: {} as any,
        context: jest.fn(),
      };

      // Act
      const customMiddleware = errorMiddleware(customDependencies);

      // Assert
      expect(typeof customMiddleware).toBe('function');
      expect(customMiddleware.length).toBe(4);
    });
  });

  describe('edge cases', () => {
    it('should handle error objects without name property', () => {
      // Arrange
      const errorWithoutName = { message: 'Error without name' } as any;

      // Act
      middleware(errorWithoutName, mockRequest as Request, mockResponse as Response, mockNext);

      // Assert
      expect(mockSendResponse).toHaveBeenCalledWith(mockRequest, mockResponse, {
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
        },
      });
    });

    it('should handle error objects without message property', () => {
      // Arrange
      const errorWithoutMessage = { name: 'ResourceNotFound' } as any;

      // Act
      middleware(errorWithoutMessage, mockRequest as Request, mockResponse as Response, mockNext);

      // Assert
      expect(mockSendResponse).toHaveBeenCalledWith(mockRequest, mockResponse, {
        status: 404,
        resource: {
          resourceType: 'OperationOutcome',
          issue: [
            {
              severity: 'error',
              code: 'not-found',
              diagnostics: undefined, // Should handle undefined message gracefully
            },
          ],
        },
      });
    });

    it('should preserve error message in FHIR OperationOutcome diagnostics', () => {
      // Arrange
      const customMessage = 'Patient with ID "nonexistent" was not found in the database';
      const resourceNotFoundError = new errors.ResourceNotFound('Patient', 'nonexistent');
      // Override message
      Object.defineProperty(resourceNotFoundError, 'message', { value: customMessage });

      // Act
      middleware(resourceNotFoundError, mockRequest as Request, mockResponse as Response, mockNext);

      // Assert
      expect(mockSendResponse).toHaveBeenCalledWith(mockRequest, mockResponse, {
        status: 404,
        resource: {
          resourceType: 'OperationOutcome',
          issue: [
            {
              severity: 'error',
              code: 'not-found',
              diagnostics: customMessage,
            },
          ],
        },
      });
    });
  });

  describe('OperationOutcome structure validation', () => {
    it('should create valid FHIR OperationOutcome structure for all error types', () => {
      // Test multiple error types and verify OperationOutcome structure
      const errorCases = [
        {
          error: new errors.ResourceNotFound('Patient', '123'),
          expectedStatus: 404,
          expectedCode: 'not-found',
        },
        {
          error: new errors.ResourceMethodNotAllowed('create', 'Patient'),
          expectedStatus: 405,
          expectedCode: 'not-supported',
        },
        {
          error: new errors.ResourceTypeNotSupported('InvalidType'),
          expectedStatus: 400,
          expectedCode: 'not-supported',
        },
        {
          error: new errors.ResourceFormatNotSupported('Patient', 'invalid/format'),
          expectedStatus: 400,
          expectedCode: 'not-supported',
        },
      ];

      errorCases.forEach(({ error, expectedStatus, expectedCode }) => {
        jest.clearAllMocks();

        // Act
        middleware(error, mockRequest as Request, mockResponse as Response, mockNext);

        // Assert
        expect(mockSendResponse).toHaveBeenCalledWith(mockRequest, mockResponse, {
          status: expectedStatus,
          resource: expect.objectContaining({
            resourceType: 'OperationOutcome',
            issue: expect.arrayContaining([
              expect.objectContaining({
                severity: 'error',
                code: expectedCode,
                diagnostics: error.message,
              }),
            ]),
          }),
        });
      });
    });
  });
});
