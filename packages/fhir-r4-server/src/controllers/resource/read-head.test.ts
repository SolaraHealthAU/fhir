import { Request, Response, NextFunction } from 'express';
import { init } from './read-head';
import { ResourceDependencies } from './types';
import * as errors from '../../errors';
import { sendFhirResponse } from '../../utils/response';
import {
  getResourceType,
  getId,
  getIfModifiedSinceHeader,
  getIfNoneMatchHeader,
} from '../../utils/request';
import { Context } from '../../types';
import type { ResourceListType } from '@solarahealth/fhir-r4';

// Mock dependencies
jest.mock('../../utils/response', () => ({
  sendFhirResponse: jest.fn(),
}));

jest.mock('../../utils/request', () => ({
  getResourceType: jest.fn(),
  getId: jest.fn(),
  getIfModifiedSinceHeader: jest.fn(),
  getIfNoneMatchHeader: jest.fn(),
}));

const mockSendFhirResponse = sendFhirResponse as jest.MockedFunction<typeof sendFhirResponse>;
const mockGetResourceType = getResourceType as jest.MockedFunction<typeof getResourceType>;
const mockGetId = getId as jest.MockedFunction<typeof getId>;
const mockGetIfModifiedSinceHeader = getIfModifiedSinceHeader as jest.MockedFunction<
  typeof getIfModifiedSinceHeader
>;
const mockGetIfNoneMatchHeader = getIfNoneMatchHeader as jest.MockedFunction<
  typeof getIfNoneMatchHeader
>;

describe('read-head controller', () => {
  let mockRequest: Partial<Request>;
  let mockResponse: Partial<Response>;
  let mockNext: NextFunction;
  let mockDependencies: ResourceDependencies<Context>;
  let mockContext: Context;
  let mockSendResponse: jest.Mock;
  let mockInteractionHandler: jest.Mock;

  beforeEach(() => {
    jest.clearAllMocks();

    mockRequest = {
      params: { resourceType: 'Patient', id: 'patient-123' },
      headers: {},
    };

    mockResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis(),
      send: jest.fn().mockReturnThis(),
    };

    mockNext = jest.fn();
    mockContext = { userId: 'user-123' } as Context;
    mockSendResponse = jest.fn();
    mockInteractionHandler = jest.fn();

    mockDependencies = {
      router: {} as any,
      server: {
        obtainRestResourceInteractionOption: jest.fn(),
      } as any,
      context: jest.fn().mockResolvedValue(mockContext),
    };

    mockSendFhirResponse.mockReturnValue(mockSendResponse);
  });

  describe('init', () => {
    it('should return a middleware function', () => {
      // Act
      const middleware = init(mockDependencies);

      // Assert
      expect(typeof middleware).toBe('function');
      expect(middleware.length).toBe(3); // req, res, next parameters
    });
  });

  describe('middleware execution', () => {
    it('should successfully perform HEAD request and return 204', async () => {
      // Arrange
      const mockResource: ResourceListType = {
        resourceType: 'Patient',
        id: 'patient-123',
        name: [{ family: 'Doe', given: ['John'] }],
      };

      mockGetResourceType.mockReturnValue('Patient');
      mockGetId.mockReturnValue('patient-123');
      mockGetIfModifiedSinceHeader.mockReturnValue('Wed, 21 Oct 2015 07:28:00 GMT');
      mockGetIfNoneMatchHeader.mockReturnValue('"123456789"');

      mockDependencies.server.obtainRestResourceInteractionOption = jest.fn().mockReturnValue({
        handler: mockInteractionHandler,
      });
      mockInteractionHandler.mockResolvedValue(mockResource);

      const middleware = init(mockDependencies);

      // Act
      await middleware(mockRequest as Request, mockResponse as Response, mockNext);

      // Assert
      expect(mockGetResourceType).toHaveBeenCalledWith(mockRequest);
      expect(mockGetId).toHaveBeenCalledWith(mockRequest);
      expect(mockGetIfModifiedSinceHeader).toHaveBeenCalledWith(mockRequest);
      expect(mockGetIfNoneMatchHeader).toHaveBeenCalledWith(mockRequest);
      expect(mockDependencies.server.obtainRestResourceInteractionOption).toHaveBeenCalledWith(
        'Patient',
        'read',
      );
      expect(mockDependencies.context).toHaveBeenCalledWith({
        req: mockRequest,
        res: mockResponse,
      });
      expect(mockInteractionHandler).toHaveBeenCalledWith(
        {
          id: 'patient-123',
          ifModifiedSince: 'Wed, 21 Oct 2015 07:28:00 GMT',
          ifNoneMatch: '"123456789"',
        },
        mockContext,
      );
      expect(mockSendFhirResponse).toHaveBeenCalledWith(mockDependencies);
      expect(mockSendResponse).toHaveBeenCalledWith(mockRequest, mockResponse, {
        status: 204,
      });
      expect(mockNext).not.toHaveBeenCalled();
    });

    it('should throw ResourceTypeNotSupported when resourceType is null', async () => {
      // Arrange
      mockGetResourceType.mockReturnValue(null);
      mockGetId.mockReturnValue('patient-123');

      const middleware = init(mockDependencies);

      // Act
      await middleware(mockRequest as Request, mockResponse as Response, mockNext);

      // Assert
      expect(mockNext).toHaveBeenCalledWith(expect.any(errors.ResourceTypeNotSupported));
      expect(mockDependencies.server.obtainRestResourceInteractionOption).not.toHaveBeenCalled();
    });

    it('should throw InternalServerError when id is null', async () => {
      // Arrange
      mockGetResourceType.mockReturnValue('Patient');
      mockGetId.mockReturnValue(null);

      const middleware = init(mockDependencies);

      // Act
      await middleware(mockRequest as Request, mockResponse as Response, mockNext);

      // Assert
      expect(mockNext).toHaveBeenCalledWith(expect.any(errors.InternalServerError));
      expect(mockNext).toHaveBeenCalledWith(
        expect.objectContaining({ message: 'Missing resource type or id' }),
      );
    });

    it('should throw ResourceTypeNotSupported when interaction is not found', async () => {
      // Arrange
      mockGetResourceType.mockReturnValue('Patient');
      mockGetId.mockReturnValue('patient-123');
      mockDependencies.server.obtainRestResourceInteractionOption = jest.fn().mockReturnValue(null);

      const middleware = init(mockDependencies);

      // Act
      await middleware(mockRequest as Request, mockResponse as Response, mockNext);

      // Assert
      expect(mockNext).toHaveBeenCalledWith(expect.any(errors.ResourceTypeNotSupported));
      expect(mockNext).toHaveBeenCalledWith(
        expect.objectContaining({ message: "Resource type 'Patient' is not supported" }),
      );
    });

    it('should throw ResourceNotFound when resource is not found', async () => {
      // Arrange
      mockGetResourceType.mockReturnValue('Patient');
      mockGetId.mockReturnValue('patient-123');
      mockDependencies.server.obtainRestResourceInteractionOption = jest.fn().mockReturnValue({
        handler: mockInteractionHandler,
      });
      mockInteractionHandler.mockResolvedValue(null);

      const middleware = init(mockDependencies);

      // Act
      await middleware(mockRequest as Request, mockResponse as Response, mockNext);

      // Assert
      expect(mockNext).toHaveBeenCalledWith(expect.any(errors.ResourceNotFound));
      expect(mockNext).toHaveBeenCalledWith(
        expect.objectContaining({ message: "Resource 'Patient/ patient-123' not found" }),
      );
    });

    it('should handle interaction handler throwing an error', async () => {
      // Arrange
      const handlerError = new Error('Database connection failed');
      mockGetResourceType.mockReturnValue('Patient');
      mockGetId.mockReturnValue('patient-123');
      mockDependencies.server.obtainRestResourceInteractionOption = jest.fn().mockReturnValue({
        handler: mockInteractionHandler,
      });
      mockInteractionHandler.mockRejectedValue(handlerError);

      const middleware = init(mockDependencies);

      // Act
      await middleware(mockRequest as Request, mockResponse as Response, mockNext);

      // Assert
      expect(mockNext).toHaveBeenCalledWith(handlerError);
    });

    it('should handle context creation throwing an error', async () => {
      // Arrange
      const contextError = new Error('Context creation failed');
      mockGetResourceType.mockReturnValue('Patient');
      mockGetId.mockReturnValue('patient-123');
      mockDependencies.server.obtainRestResourceInteractionOption = jest.fn().mockReturnValue({
        handler: mockInteractionHandler,
      });
      mockDependencies.context = jest.fn().mockRejectedValue(contextError);

      const middleware = init(mockDependencies);

      // Act
      await middleware(mockRequest as Request, mockResponse as Response, mockNext);

      // Assert
      expect(mockNext).toHaveBeenCalledWith(contextError);
    });

    it('should handle non-Error exceptions as InternalServerError', async () => {
      // Arrange
      mockGetResourceType.mockReturnValue('Patient');
      mockGetId.mockReturnValue('patient-123');
      mockDependencies.server.obtainRestResourceInteractionOption = jest.fn().mockReturnValue({
        handler: mockInteractionHandler,
      });
      mockInteractionHandler.mockRejectedValue('string error');

      const middleware = init(mockDependencies);

      // Act
      await middleware(mockRequest as Request, mockResponse as Response, mockNext);

      // Assert
      expect(mockNext).toHaveBeenCalledWith(expect.any(errors.InternalServerError));
      expect(mockNext).toHaveBeenCalledWith(
        expect.objectContaining({ message: 'Unknown error occurred' }),
      );
    });

    it('should handle missing conditional headers gracefully', async () => {
      // Arrange
      const mockResource: ResourceListType = {
        resourceType: 'Patient',
        id: 'patient-123',
        name: [{ family: 'Doe', given: ['John'] }],
      };

      mockGetResourceType.mockReturnValue('Patient');
      mockGetId.mockReturnValue('patient-123');
      mockGetIfModifiedSinceHeader.mockReturnValue(null);
      mockGetIfNoneMatchHeader.mockReturnValue(null);

      mockDependencies.server.obtainRestResourceInteractionOption = jest.fn().mockReturnValue({
        handler: mockInteractionHandler,
      });
      mockInteractionHandler.mockResolvedValue(mockResource);

      const middleware = init(mockDependencies);

      // Act
      await middleware(mockRequest as Request, mockResponse as Response, mockNext);

      // Assert
      expect(mockInteractionHandler).toHaveBeenCalledWith(
        {
          id: 'patient-123',
          ifModifiedSince: null,
          ifNoneMatch: null,
        },
        mockContext,
      );
      expect(mockSendResponse).toHaveBeenCalledWith(mockRequest, mockResponse, {
        status: 204,
      });
    });

    it('should work with different resource types', async () => {
      // Arrange
      const mockResource: ResourceListType = {
        resourceType: 'Organization',
        id: 'org-456',
        name: 'Test Organization',
      };

      mockGetResourceType.mockReturnValue('Organization');
      mockGetId.mockReturnValue('org-456');
      mockGetIfModifiedSinceHeader.mockReturnValue(null);
      mockGetIfNoneMatchHeader.mockReturnValue(null);

      mockDependencies.server.obtainRestResourceInteractionOption = jest.fn().mockReturnValue({
        handler: mockInteractionHandler,
      });
      mockInteractionHandler.mockResolvedValue(mockResource);

      const middleware = init(mockDependencies);

      // Act
      await middleware(mockRequest as Request, mockResponse as Response, mockNext);

      // Assert
      expect(mockDependencies.server.obtainRestResourceInteractionOption).toHaveBeenCalledWith(
        'Organization',
        'read',
      );
      expect(mockInteractionHandler).toHaveBeenCalledWith(
        {
          id: 'org-456',
          ifModifiedSince: null,
          ifNoneMatch: null,
        },
        mockContext,
      );
      expect(mockSendResponse).toHaveBeenCalledWith(mockRequest, mockResponse, {
        status: 204,
      });
    });

    it('should return 204 status code instead of 200 for HEAD requests', async () => {
      // Arrange
      const mockResource: ResourceListType = {
        resourceType: 'Patient',
        id: 'patient-123',
        name: [{ family: 'Doe', given: ['John'] }],
      };

      mockGetResourceType.mockReturnValue('Patient');
      mockGetId.mockReturnValue('patient-123');
      mockGetIfModifiedSinceHeader.mockReturnValue(null);
      mockGetIfNoneMatchHeader.mockReturnValue(null);

      mockDependencies.server.obtainRestResourceInteractionOption = jest.fn().mockReturnValue({
        handler: mockInteractionHandler,
      });
      mockInteractionHandler.mockResolvedValue(mockResource);

      const middleware = init(mockDependencies);

      // Act
      await middleware(mockRequest as Request, mockResponse as Response, mockNext);

      // Assert
      // Unlike read controller, HEAD should return 204 (no content) not 200
      expect(mockSendResponse).toHaveBeenCalledWith(mockRequest, mockResponse, {
        status: 204,
      });
      // Note: no resource is sent in the response for HEAD requests
    });

    it('should still fetch the resource to validate existence despite HEAD request', async () => {
      // Arrange
      const mockResource: ResourceListType = {
        resourceType: 'Patient',
        id: 'patient-123',
        name: [{ family: 'Doe', given: ['John'] }],
      };

      mockGetResourceType.mockReturnValue('Patient');
      mockGetId.mockReturnValue('patient-123');

      mockDependencies.server.obtainRestResourceInteractionOption = jest.fn().mockReturnValue({
        handler: mockInteractionHandler,
      });
      mockInteractionHandler.mockResolvedValue(mockResource);

      const middleware = init(mockDependencies);

      // Act
      await middleware(mockRequest as Request, mockResponse as Response, mockNext);

      // Assert
      // Even for HEAD requests, we should still call the handler to validate existence
      expect(mockInteractionHandler).toHaveBeenCalled();
      expect(mockSendResponse).toHaveBeenCalledWith(mockRequest, mockResponse, {
        status: 204,
      });
    });

    it('should handle undefined interaction option', async () => {
      // Arrange
      mockGetResourceType.mockReturnValue('Patient');
      mockGetId.mockReturnValue('patient-123');
      mockDependencies.server.obtainRestResourceInteractionOption = jest
        .fn()
        .mockReturnValue(undefined);

      const middleware = init(mockDependencies);

      // Act
      await middleware(mockRequest as Request, mockResponse as Response, mockNext);

      // Assert
      expect(mockNext).toHaveBeenCalledWith(expect.any(errors.ResourceTypeNotSupported));
    });
  });
});
