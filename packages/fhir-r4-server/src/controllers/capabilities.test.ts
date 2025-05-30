import { Request, Response, NextFunction, Router } from 'express';
import { init } from './capabilities';
import { ControllerDependencies } from './types';
import { Context } from '../types';
import { sendFhirResponse } from '../utils/response';
import type { CapabilityStatement } from '@solarahealth/fhir-r4';

// Mock the sendFhirResponse utility
jest.mock('../utils/response', () => ({
  sendFhirResponse: jest.fn(),
}));

const mockSendFhirResponse = sendFhirResponse as jest.MockedFunction<typeof sendFhirResponse>;

// Test context interface
interface TestContext extends Context {
  userId?: string;
}

// Sample CapabilityStatement
const sampleCapabilities: CapabilityStatement = {
  resourceType: 'CapabilityStatement',
  status: 'active',
  date: '2024-01-01',
  kind: 'instance',
  fhirVersion: '4.0.1',
  format: ['application/json'],
  rest: [
    {
      mode: 'server',
      resource: [
        {
          type: 'Patient',
          interaction: [{ code: 'read' }, { code: 'search-type' }],
        },
      ],
    },
  ],
};

describe('Capabilities Controller', () => {
  let mockRouter: jest.Mocked<Router>;
  let mockSendResponse: jest.Mock;
  let mockRequest: Partial<Request>;
  let mockResponse: Partial<Response>;
  let mockNext: NextFunction;
  let dependencies: ControllerDependencies<TestContext>;

  beforeEach(() => {
    // Reset all mocks
    jest.clearAllMocks();

    // Mock the response function
    mockSendResponse = jest.fn();
    mockSendFhirResponse.mockReturnValue(mockSendResponse);

    // Mock Express router
    mockRouter = {
      get: jest.fn(),
      post: jest.fn(),
      put: jest.fn(),
      delete: jest.fn(),
      patch: jest.fn(),
      use: jest.fn(),
    } as unknown as jest.Mocked<Router>;

    // Mock request and response objects
    mockRequest = {
      params: {},
      query: {},
      headers: {},
    };

    mockResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis(),
      send: jest.fn().mockReturnThis(),
      setHeader: jest.fn().mockReturnThis(),
    };

    mockNext = jest.fn();

    // Mock dependencies
    dependencies = {
      router: mockRouter,
      server: {
        options: {
          capabilities: sampleCapabilities as any,
          fhir: null,
        },
      },
      context: jest.fn(),
    } as unknown as ControllerDependencies<TestContext>;
  });

  describe('init', () => {
    it('should register a GET route for /metadata', () => {
      // Act
      init(dependencies);

      // Assert
      expect(mockRouter.get).toHaveBeenCalledWith('/metadata', expect.any(Function));
      expect(mockRouter.get).toHaveBeenCalledTimes(1);
    });

    it('should return capabilities when /metadata endpoint is called', async () => {
      // Arrange
      init(dependencies);
      const routeHandler = mockRouter.get.mock.calls[0][1];

      // Act
      await routeHandler(mockRequest as Request, mockResponse as Response, mockNext);

      // Assert
      expect(mockSendFhirResponse).toHaveBeenCalledWith(dependencies);
      expect(mockSendResponse).toHaveBeenCalledWith(mockRequest, mockResponse, {
        status: 200,
        resource: sampleCapabilities,
      });
      expect(mockNext).not.toHaveBeenCalled();
    });

    it('should handle errors and pass them to next middleware', async () => {
      // Arrange
      const error = new Error('Test error');
      mockSendResponse.mockImplementation(() => {
        throw error;
      });

      init(dependencies);
      const routeHandler = mockRouter.get.mock.calls[0][1];

      // Act
      await routeHandler(mockRequest as Request, mockResponse as Response, mockNext);

      // Assert
      expect(mockNext).toHaveBeenCalledWith(error);
    });

    it('should return the exact capabilities from server options', async () => {
      // Arrange
      const customCapabilities: CapabilityStatement = {
        ...sampleCapabilities,
        publisher: 'Custom Publisher',
        description: 'Custom description',
      };

      dependencies.server.options.capabilities = customCapabilities as any;
      init(dependencies);
      const routeHandler = mockRouter.get.mock.calls[0][1];

      // Act
      await routeHandler(mockRequest as Request, mockResponse as Response, mockNext);

      // Assert
      expect(mockSendResponse).toHaveBeenCalledWith(mockRequest, mockResponse, {
        status: 200,
        resource: customCapabilities,
      });
    });

    it('should work with undefined capabilities', async () => {
      // Arrange
      dependencies.server.options.capabilities = undefined as any;
      init(dependencies);
      const routeHandler = mockRouter.get.mock.calls[0][1];

      // Act
      await routeHandler(mockRequest as Request, mockResponse as Response, mockNext);

      // Assert
      expect(mockSendResponse).toHaveBeenCalledWith(mockRequest, mockResponse, {
        status: 200,
        resource: undefined,
      });
    });
  });

  describe('error handling', () => {
    it('should catch synchronous errors in sendFhirResponse', async () => {
      // Arrange
      const error = new Error('Synchronous error');
      mockSendFhirResponse.mockImplementation(() => {
        throw error;
      });

      init(dependencies);
      const routeHandler = mockRouter.get.mock.calls[0][1];

      // Act
      await routeHandler(mockRequest as Request, mockResponse as Response, mockNext);

      // Assert
      expect(mockNext).toHaveBeenCalledWith(error);
    });

    it('should catch errors when accessing capabilities', async () => {
      // Arrange
      const error = new Error('Access error');
      Object.defineProperty(dependencies.server.options, 'capabilities', {
        get: () => {
          throw error;
        },
      });

      init(dependencies);
      const routeHandler = mockRouter.get.mock.calls[0][1];

      // Act
      await routeHandler(mockRequest as Request, mockResponse as Response, mockNext);

      // Assert
      expect(mockNext).toHaveBeenCalledWith(error);
    });
  });
});
