import { Router } from 'express';
import { init } from './controllers';
import type { ControllerDependencies } from './types';
import type { Context } from '../types';
import type { RestServer } from '../rest-server';
import * as resourceController from './resource/resource';
import * as capabilitiesController from './capabilities';
import { notAllowed } from '../utils/response';
import errorMiddleware from './error-middleware';

// Mock dependencies
jest.mock('./resource/resource', () => ({
  init: jest.fn(),
}));

jest.mock('./capabilities', () => ({
  init: jest.fn(),
}));

jest.mock('../utils/response', () => ({
  notAllowed: jest.fn(() => jest.fn((interactionType) => `notAllowedHandler-${interactionType}`)),
}));

jest.mock('./error-middleware', () => {
  return jest.fn(() => 'errorMiddlewareHandler');
});

const mockResourceInit = resourceController.init as jest.MockedFunction<
  typeof resourceController.init
>;
const mockCapabilitiesInit = capabilitiesController.init as jest.MockedFunction<
  typeof capabilitiesController.init
>;
const mockNotAllowed = notAllowed as jest.MockedFunction<typeof notAllowed>;
const mockErrorMiddleware = errorMiddleware as jest.MockedFunction<typeof errorMiddleware>;

describe('controllers', () => {
  interface TestContext extends Context {
    userId: string;
  }

  let mockRouter: any;
  let dependencies: ControllerDependencies<TestContext>;

  beforeEach(() => {
    jest.clearAllMocks();

    mockRouter = {
      get: jest.fn().mockReturnThis(),
      post: jest.fn().mockReturnThis(),
      use: jest.fn().mockReturnThis(),
    };

    const mockServer: RestServer<TestContext> = {
      options: {
        capabilities: {
          resourceType: 'CapabilityStatement',
          status: 'active',
          date: '2023-01-01',
          kind: 'instance',
          fhirVersion: '4.0.1',
          format: ['json'],
        },
      },
      obtainRestResourceInteractionOption: jest.fn(),
    };

    const mockContext = jest.fn(async () => ({ userId: 'test' }));

    dependencies = {
      router: mockRouter,
      server: mockServer,
      context: mockContext,
    };
  });

  describe('init', () => {
    it('should set up all required routes', () => {
      init(dependencies);

      // Verify search-system routes are set up
      expect(mockRouter.get).toHaveBeenCalledWith('/', 'notAllowedHandler-search-system');
      expect(mockRouter.post).toHaveBeenCalledWith('/_search', 'notAllowedHandler-search-system');

      // Verify transaction/batch route is set up
      expect(mockRouter.post).toHaveBeenCalledWith('/', 'notAllowedHandler-transaction');

      // Verify history-system route is set up
      expect(mockRouter.get).toHaveBeenCalledWith('/_history', 'notAllowedHandler-history-system');

      // Verify error middleware is applied
      expect(mockRouter.use).toHaveBeenCalledWith('errorMiddlewareHandler');
    });

    it('should call notAllowed with correct interaction types', () => {
      init(dependencies);

      // notAllowed() is called first, then the returned function is called with the interaction type
      expect(mockNotAllowed).toHaveBeenCalledTimes(4);
      expect(mockNotAllowed).toHaveBeenCalledWith(); // Called without parameters first

      // Check that each returned function was called with correct interaction types
      const returnedFunctions = mockNotAllowed.mock.results.map((result) => result.value);

      // First call: search-system (for GET /)
      expect(returnedFunctions[0]).toHaveBeenCalledWith('search-system');

      // Second call: search-system (for POST /_search)
      expect(returnedFunctions[1]).toHaveBeenCalledWith('search-system');

      // Third call: transaction (for POST /)
      expect(returnedFunctions[2]).toHaveBeenCalledWith('transaction');

      // Fourth call: history-system (for GET /_history)
      expect(returnedFunctions[3]).toHaveBeenCalledWith('history-system');
    });

    it('should initialize capabilities controller', () => {
      init(dependencies);

      expect(mockCapabilitiesInit).toHaveBeenCalledWith(dependencies);
    });

    it('should initialize resource controller', () => {
      init(dependencies);

      expect(mockResourceInit).toHaveBeenCalledWith(dependencies);
    });

    it('should create error middleware with dependencies', () => {
      init(dependencies);

      expect(mockErrorMiddleware).toHaveBeenCalledWith(dependencies);
    });

    it('should chain router calls correctly', () => {
      init(dependencies);

      // Verify that get() and post() calls return the router for chaining
      expect(mockRouter.get).toHaveReturnedWith(mockRouter);
      expect(mockRouter.post).toHaveReturnedWith(mockRouter);
      expect(mockRouter.use).toHaveReturnedWith(mockRouter);
    });

    it('should set up routes in correct order', () => {
      init(dependencies);

      // Check the actual order of router method calls
      expect(mockRouter.get).toHaveBeenNthCalledWith(1, '/', 'notAllowedHandler-search-system');
      expect(mockRouter.post).toHaveBeenNthCalledWith(
        1,
        '/_search',
        'notAllowedHandler-search-system',
      );
      expect(mockRouter.post).toHaveBeenNthCalledWith(2, '/', 'notAllowedHandler-transaction');
      expect(mockRouter.get).toHaveBeenNthCalledWith(
        2,
        '/_history',
        'notAllowedHandler-history-system',
      );
    });

    it('should work with different context types', () => {
      interface CustomContext extends Context {
        tenantId: string;
        permissions: string[];
      }

      const customMockServer: RestServer<CustomContext> = {
        options: {
          capabilities: {
            resourceType: 'CapabilityStatement',
            status: 'active',
            date: '2023-01-01',
            kind: 'instance',
            fhirVersion: '4.0.1',
            format: ['json'],
          },
        },
        obtainRestResourceInteractionOption: jest.fn(),
      };

      const customContext = jest.fn(async () => ({
        tenantId: 'tenant1',
        permissions: ['read', 'write'],
      }));

      const customDependencies: ControllerDependencies<CustomContext> = {
        router: mockRouter,
        server: customMockServer,
        context: customContext,
      };

      // Should not throw and should call sub-controllers
      expect(() => init(customDependencies)).not.toThrow();
      expect(mockCapabilitiesInit).toHaveBeenCalledWith(customDependencies);
      expect(mockResourceInit).toHaveBeenCalledWith(customDependencies);
    });
  });

  describe('integration', () => {
    it('should properly integrate all controller modules', () => {
      init(dependencies);

      // Verify all components are initialized with the same dependencies
      expect(mockCapabilitiesInit).toHaveBeenCalledWith(dependencies);
      expect(mockResourceInit).toHaveBeenCalledWith(dependencies);
      expect(mockErrorMiddleware).toHaveBeenCalledWith(dependencies);

      // Verify notAllowed handlers are properly created
      expect(mockNotAllowed).toHaveBeenCalledTimes(4);

      // Verify router methods were called
      expect(mockRouter.get).toHaveBeenCalledTimes(2);
      expect(mockRouter.post).toHaveBeenCalledTimes(2);
      expect(mockRouter.use).toHaveBeenCalledTimes(4);
    });
  });
});
