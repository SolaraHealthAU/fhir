import { Request, Response, NextFunction } from 'express';
import { init } from './search-type';
import { ResourceDependencies } from './types';
import * as errors from '../../errors';
import { sendFhirResponse } from '../../utils/response';
import { getResourceType, getQueryParams } from '../../utils/request';
import { Context } from '../../types';
import type { ResourceListType } from '@solarahealth/fhir-r4';

// Mock dependencies
jest.mock('../../utils/response', () => ({
  sendFhirResponse: jest.fn(),
}));

jest.mock('../../utils/request', () => ({
  getResourceType: jest.fn(),
  getQueryParams: jest.fn(),
}));

const mockSendFhirResponse = sendFhirResponse as jest.MockedFunction<typeof sendFhirResponse>;
const mockGetResourceType = getResourceType as jest.MockedFunction<typeof getResourceType>;
const mockGetQueryParams = getQueryParams as jest.MockedFunction<typeof getQueryParams>;

describe('search-type controller', () => {
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
      params: { resourceType: 'Patient' },
      query: { name: 'John', family: 'Doe' },
      body: {},
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
    it('should successfully perform search and return 200 with results', async () => {
      // Arrange
      const mockSearchResults: ResourceListType = {
        resourceType: 'Bundle',
        id: 'search-results',
        type: 'searchset',
        total: 2,
        entry: [
          {
            resource: {
              resourceType: 'Patient',
              id: 'patient-1',
              name: [{ family: 'Doe', given: ['John'] }],
            },
          },
          {
            resource: {
              resourceType: 'Patient',
              id: 'patient-2',
              name: [{ family: 'Doe', given: ['Jane'] }],
            },
          },
        ],
      };

      const queryParams = { name: 'John', family: 'Doe' };

      mockGetResourceType.mockReturnValue('Patient');
      mockGetQueryParams.mockReturnValue(queryParams);

      mockDependencies.server.obtainRestResourceInteractionOption = jest.fn().mockReturnValue({
        handler: mockInteractionHandler,
      });
      mockInteractionHandler.mockResolvedValue(mockSearchResults);

      const middleware = init(mockDependencies);

      // Act
      await middleware(mockRequest as Request, mockResponse as Response, mockNext);

      // Assert
      expect(mockGetResourceType).toHaveBeenCalledWith(mockRequest);
      expect(mockGetQueryParams).toHaveBeenCalledWith(mockRequest);
      expect(mockDependencies.server.obtainRestResourceInteractionOption).toHaveBeenCalledWith(
        'Patient',
        'search-type',
      );
      expect(mockDependencies.context).toHaveBeenCalledWith({
        req: mockRequest,
        res: mockResponse,
      });
      expect(mockInteractionHandler).toHaveBeenCalledWith({ params: queryParams }, mockContext);
      expect(mockSendFhirResponse).toHaveBeenCalledWith(mockDependencies);
      expect(mockSendResponse).toHaveBeenCalledWith(mockRequest, mockResponse, {
        status: 200,
        resource: mockSearchResults,
      });
      expect(mockNext).not.toHaveBeenCalled();
    });

    it('should throw ResourceTypeNotSupported when resourceType is null', async () => {
      // Arrange
      mockGetResourceType.mockReturnValue(null);
      mockGetQueryParams.mockReturnValue({});

      const middleware = init(mockDependencies);

      // Act
      await middleware(mockRequest as Request, mockResponse as Response, mockNext);

      // Assert
      expect(mockNext).toHaveBeenCalledWith(expect.any(errors.ResourceTypeNotSupported));
      expect(mockDependencies.server.obtainRestResourceInteractionOption).not.toHaveBeenCalled();
    });

    it('should throw ResourceTypeNotSupported when interaction is not found', async () => {
      // Arrange
      mockGetResourceType.mockReturnValue('Patient');
      mockGetQueryParams.mockReturnValue({});
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

    it('should handle interaction handler throwing an error', async () => {
      // Arrange
      const handlerError = new Error('Search query failed');
      mockGetResourceType.mockReturnValue('Patient');
      mockGetQueryParams.mockReturnValue({});
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
      mockGetQueryParams.mockReturnValue({});
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
      mockGetQueryParams.mockReturnValue({});
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

    it('should handle empty search results', async () => {
      // Arrange
      const emptySearchResults: ResourceListType = {
        resourceType: 'Bundle',
        id: 'empty-search',
        type: 'searchset',
        total: 0,
        entry: [],
      };

      mockGetResourceType.mockReturnValue('Patient');
      mockGetQueryParams.mockReturnValue({ name: 'NonExistent' });

      mockDependencies.server.obtainRestResourceInteractionOption = jest.fn().mockReturnValue({
        handler: mockInteractionHandler,
      });
      mockInteractionHandler.mockResolvedValue(emptySearchResults);

      const middleware = init(mockDependencies);

      // Act
      await middleware(mockRequest as Request, mockResponse as Response, mockNext);

      // Assert
      expect(mockSendResponse).toHaveBeenCalledWith(mockRequest, mockResponse, {
        status: 200,
        resource: emptySearchResults,
      });
    });

    it('should handle complex query parameters', async () => {
      // Arrange
      const complexQueryParams = {
        name: ['John', 'Jane'],
        birthdate: ['ge2000-01-01', 'le2020-12-31'],
        active: 'true',
        _include: 'Patient:organization',
        _sort: 'name',
        _count: '50',
      };

      const mockSearchResults: ResourceListType = {
        resourceType: 'Bundle',
        id: 'complex-search',
        type: 'searchset',
        total: 1,
        entry: [
          {
            resource: {
              resourceType: 'Patient',
              id: 'patient-complex',
              name: [{ family: 'Doe', given: ['John'] }],
            },
          },
        ],
      };

      mockGetResourceType.mockReturnValue('Patient');
      mockGetQueryParams.mockReturnValue(complexQueryParams);

      mockDependencies.server.obtainRestResourceInteractionOption = jest.fn().mockReturnValue({
        handler: mockInteractionHandler,
      });
      mockInteractionHandler.mockResolvedValue(mockSearchResults);

      const middleware = init(mockDependencies);

      // Act
      await middleware(mockRequest as Request, mockResponse as Response, mockNext);

      // Assert
      expect(mockInteractionHandler).toHaveBeenCalledWith(
        { params: complexQueryParams },
        mockContext,
      );
      expect(mockSendResponse).toHaveBeenCalledWith(mockRequest, mockResponse, {
        status: 200,
        resource: mockSearchResults,
      });
    });

    it('should handle different resource types', async () => {
      // Arrange
      const mockSearchResults: ResourceListType = {
        resourceType: 'Bundle',
        id: 'org-search',
        type: 'searchset',
        total: 1,
        entry: [
          {
            resource: {
              resourceType: 'Organization',
              id: 'org-1',
              name: 'Test Hospital',
            },
          },
        ],
      };

      mockGetResourceType.mockReturnValue('Organization');
      mockGetQueryParams.mockReturnValue({ name: 'Hospital' });

      mockDependencies.server.obtainRestResourceInteractionOption = jest.fn().mockReturnValue({
        handler: mockInteractionHandler,
      });
      mockInteractionHandler.mockResolvedValue(mockSearchResults);

      const middleware = init(mockDependencies);

      // Act
      await middleware(mockRequest as Request, mockResponse as Response, mockNext);

      // Assert
      expect(mockDependencies.server.obtainRestResourceInteractionOption).toHaveBeenCalledWith(
        'Organization',
        'search-type',
      );
      expect(mockSendResponse).toHaveBeenCalledWith(mockRequest, mockResponse, {
        status: 200,
        resource: mockSearchResults,
      });
    });

    it('should handle undefined interaction option', async () => {
      // Arrange
      mockGetResourceType.mockReturnValue('Patient');
      mockGetQueryParams.mockReturnValue({});
      mockDependencies.server.obtainRestResourceInteractionOption = jest
        .fn()
        .mockReturnValue(undefined);

      const middleware = init(mockDependencies);

      // Act
      await middleware(mockRequest as Request, mockResponse as Response, mockNext);

      // Assert
      expect(mockNext).toHaveBeenCalledWith(expect.any(errors.ResourceTypeNotSupported));
    });

    it('should work with POST _search requests', async () => {
      // Arrange
      const mockSearchResults: ResourceListType = {
        resourceType: 'Bundle',
        id: 'post-search',
        type: 'searchset',
        total: 1,
        entry: [
          {
            resource: {
              resourceType: 'Patient',
              id: 'patient-post',
              name: [{ family: 'Smith', given: ['Bob'] }],
            },
          },
        ],
      };

      // Simulate POST _search request with parameters in body
      const postQueryParams = { name: 'Bob', family: 'Smith' };
      mockGetResourceType.mockReturnValue('Patient');
      mockGetQueryParams.mockReturnValue(postQueryParams);

      mockDependencies.server.obtainRestResourceInteractionOption = jest.fn().mockReturnValue({
        handler: mockInteractionHandler,
      });
      mockInteractionHandler.mockResolvedValue(mockSearchResults);

      const middleware = init(mockDependencies);

      // Act
      await middleware(mockRequest as Request, mockResponse as Response, mockNext);

      // Assert
      expect(mockInteractionHandler).toHaveBeenCalledWith({ params: postQueryParams }, mockContext);
      expect(mockSendResponse).toHaveBeenCalledWith(mockRequest, mockResponse, {
        status: 200,
        resource: mockSearchResults,
      });
    });

    it('should handle empty query parameters', async () => {
      // Arrange
      const mockSearchResults: ResourceListType = {
        resourceType: 'Bundle',
        id: 'all-patients',
        type: 'searchset',
        total: 100,
        entry: [], // Simplified for test
      };

      mockGetResourceType.mockReturnValue('Patient');
      mockGetQueryParams.mockReturnValue({});

      mockDependencies.server.obtainRestResourceInteractionOption = jest.fn().mockReturnValue({
        handler: mockInteractionHandler,
      });
      mockInteractionHandler.mockResolvedValue(mockSearchResults);

      const middleware = init(mockDependencies);

      // Act
      await middleware(mockRequest as Request, mockResponse as Response, mockNext);

      // Assert
      expect(mockInteractionHandler).toHaveBeenCalledWith({ params: {} }, mockContext);
      expect(mockSendResponse).toHaveBeenCalledWith(mockRequest, mockResponse, {
        status: 200,
        resource: mockSearchResults,
      });
    });
  });
});
