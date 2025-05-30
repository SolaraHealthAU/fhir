import { Router } from 'express';
import { init } from './resource';
import { ResourceDependencies } from './types';
import { notAllowed } from '../../utils/response';
import errorMiddleware from '../error-middleware';
import * as read from './read';
import * as readHead from './read-head';
import * as searchType from './search-type';
import { Context } from '../../types';

// Mock dependencies
jest.mock('../../utils/response', () => ({
  notAllowed: jest.fn(),
}));

jest.mock('../error-middleware', () => jest.fn());

jest.mock('./read', () => ({
  init: jest.fn(),
}));

jest.mock('./read-head', () => ({
  init: jest.fn(),
}));

jest.mock('./search-type', () => ({
  init: jest.fn(),
}));

const mockNotAllowed = notAllowed as jest.MockedFunction<typeof notAllowed>;
const mockErrorMiddleware = errorMiddleware as jest.MockedFunction<typeof errorMiddleware>;
const mockRead = read.init as jest.MockedFunction<typeof read.init>;
const mockReadHead = readHead.init as jest.MockedFunction<typeof readHead.init>;
const mockSearchType = searchType.init as jest.MockedFunction<typeof searchType.init>;

describe('resource controller', () => {
  let mockRouter: jest.Mocked<Router>;
  let mockDependencies: ResourceDependencies<Context>;
  let mockMiddleware: jest.Mock;
  let mockReadHandler: jest.Mock;
  let mockReadHeadHandler: jest.Mock;
  let mockSearchTypeHandler: jest.Mock;
  let mockNotAllowedHandler: jest.Mock;

  beforeEach(() => {
    jest.clearAllMocks();

    // Mock router with chainable methods
    mockRouter = {
      get: jest.fn().mockReturnThis(),
      post: jest.fn().mockReturnThis(),
      put: jest.fn().mockReturnThis(),
      patch: jest.fn().mockReturnThis(),
      delete: jest.fn().mockReturnThis(),
      head: jest.fn().mockReturnThis(),
      use: jest.fn().mockReturnThis(),
    } as unknown as jest.Mocked<Router>;

    // Mock handlers
    mockMiddleware = jest.fn();
    mockReadHandler = jest.fn();
    mockReadHeadHandler = jest.fn();
    mockSearchTypeHandler = jest.fn();
    mockNotAllowedHandler = jest.fn();

    mockDependencies = {
      router: mockRouter,
      server: {} as any,
      context: jest.fn(),
    };

    // Setup mock returns
    mockErrorMiddleware.mockReturnValue(mockMiddleware);
    mockRead.mockReturnValue(mockReadHandler);
    mockReadHead.mockReturnValue(mockReadHeadHandler);
    mockSearchType.mockReturnValue(mockSearchTypeHandler);
    mockNotAllowed.mockReturnValue(jest.fn().mockReturnValue(mockNotAllowedHandler));
  });

  describe('init', () => {
    it('should set up all required routes with correct handlers', () => {
      // Act
      init(mockDependencies);

      // Assert - verify all route registrations
      expect(mockRouter.get).toHaveBeenCalledWith('/:resourceType/:id', mockReadHandler);
      expect(mockRouter.head).toHaveBeenCalledWith('/:resourceType/:id', mockReadHeadHandler);
      expect(mockRouter.get).toHaveBeenCalledWith(
        '/:resourceType/:id/_history/:vid',
        mockNotAllowedHandler,
      );
      expect(mockRouter.head).toHaveBeenCalledWith(
        '/:resourceType/:id/_history/:vid',
        mockNotAllowedHandler,
      );
      expect(mockRouter.put).toHaveBeenCalledWith('/:resourceType/:id', mockNotAllowedHandler);
      expect(mockRouter.patch).toHaveBeenCalledWith('/:resourceType/:id', mockNotAllowedHandler);
      expect(mockRouter.delete).toHaveBeenCalledWith('/:resourceType/:id', mockNotAllowedHandler);
      expect(mockRouter.post).toHaveBeenCalledWith('/:resourceType', mockNotAllowedHandler);
      expect(mockRouter.get).toHaveBeenCalledWith('/:resourceType', mockSearchTypeHandler);
      expect(mockRouter.post).toHaveBeenCalledWith('/:resourceType/_search', mockSearchTypeHandler);
      // history-instance route passes multiple arguments to .get()
      expect(mockRouter.get).toHaveBeenCalledWith(
        '/:resourceType/:id/_history',
        mockNotAllowedHandler,
        mockMiddleware,
      );
      expect(mockRouter.get).toHaveBeenCalledWith('/:resourceType/_history', mockNotAllowedHandler);
    });

    it('should call error middleware for all routes', () => {
      // Act
      init(mockDependencies);

      // Assert - verify error middleware is attached to all routes
      // Each route should call .use(errorMiddleware(deps))
      expect(mockRouter.use).toHaveBeenCalledTimes(12); // 12 routes total (history-instance has 2 .use calls)
      expect(mockErrorMiddleware).toHaveBeenCalledWith(mockDependencies);
    });

    it('should initialize read controller with dependencies', () => {
      // Act
      init(mockDependencies);

      // Assert
      expect(mockRead).toHaveBeenCalledWith(mockDependencies);
    });

    it('should initialize read-head controller with dependencies', () => {
      // Act
      init(mockDependencies);

      // Assert
      expect(mockReadHead).toHaveBeenCalledWith(mockDependencies);
    });

    it('should initialize search-type controller with dependencies', () => {
      // Act
      init(mockDependencies);

      // Assert
      expect(mockSearchType).toHaveBeenCalledWith(mockDependencies);
      expect(mockSearchType).toHaveBeenCalledTimes(2); // Called for both GET and POST search routes
    });

    it('should set up notAllowed handlers for unsupported operations', () => {
      // Act
      init(mockDependencies);

      // Assert - verify notAllowed is called with correct interaction types
      expect(mockNotAllowed).toHaveBeenCalledWith();

      // The notAllowed function returns a function that takes an interaction type
      // We can verify it was called the expected number of times for different interactions
      const mockNotAllowedInstance = mockNotAllowed();
      expect(mockNotAllowedInstance).toHaveBeenCalledTimes(8); // 8 different not-allowed operations (vread x2, update, patch, delete, create, history-instance, history-type)
    });

    it('should set up vread routes (GET and HEAD) as not allowed', () => {
      // Act
      init(mockDependencies);

      // Assert
      expect(mockRouter.get).toHaveBeenCalledWith(
        '/:resourceType/:id/_history/:vid',
        mockNotAllowedHandler,
      );
      expect(mockRouter.head).toHaveBeenCalledWith(
        '/:resourceType/:id/_history/:vid',
        mockNotAllowedHandler,
      );
    });

    it('should set up CRUD routes correctly', () => {
      // Act
      init(mockDependencies);

      // Assert
      // READ operations (implemented)
      expect(mockRouter.get).toHaveBeenCalledWith('/:resourceType/:id', mockReadHandler);
      expect(mockRouter.head).toHaveBeenCalledWith('/:resourceType/:id', mockReadHeadHandler);

      // WRITE operations (not allowed)
      expect(mockRouter.put).toHaveBeenCalledWith('/:resourceType/:id', mockNotAllowedHandler);
      expect(mockRouter.patch).toHaveBeenCalledWith('/:resourceType/:id', mockNotAllowedHandler);
      expect(mockRouter.delete).toHaveBeenCalledWith('/:resourceType/:id', mockNotAllowedHandler);
      expect(mockRouter.post).toHaveBeenCalledWith('/:resourceType', mockNotAllowedHandler);
    });

    it('should set up search routes correctly', () => {
      // Act
      init(mockDependencies);

      // Assert
      expect(mockRouter.get).toHaveBeenCalledWith('/:resourceType', mockSearchTypeHandler);
      expect(mockRouter.post).toHaveBeenCalledWith('/:resourceType/_search', mockSearchTypeHandler);
    });

    it('should set up history routes as not allowed', () => {
      // Act
      init(mockDependencies);

      // Assert
      // history-instance route has special implementation with both notAllowed and errorMiddleware as args
      expect(mockRouter.get).toHaveBeenCalledWith(
        '/:resourceType/:id/_history',
        mockNotAllowedHandler,
        mockMiddleware,
      );
      expect(mockRouter.get).toHaveBeenCalledWith('/:resourceType/_history', mockNotAllowedHandler);
    });

    it('should ensure router method chaining works correctly', () => {
      // Act
      init(mockDependencies);

      // Assert - verify that each router method returns this (for chaining)
      // This is ensured by our mock setup, but we can verify the pattern
      expect(mockRouter.get).toHaveReturnedWith(mockRouter);
      expect(mockRouter.post).toHaveReturnedWith(mockRouter);
      expect(mockRouter.put).toHaveReturnedWith(mockRouter);
      expect(mockRouter.patch).toHaveReturnedWith(mockRouter);
      expect(mockRouter.delete).toHaveReturnedWith(mockRouter);
      expect(mockRouter.head).toHaveReturnedWith(mockRouter);
    });

    it('should handle route registration order correctly', () => {
      // Act
      init(mockDependencies);

      // Assert - verify specific routes are registered in the correct order
      const getCalls = (mockRouter.get as jest.Mock).mock.calls;

      // Specific routes should come before general ones
      expect(getCalls.findIndex((call) => call[0] === '/:resourceType/:id')).toBeLessThan(
        getCalls.findIndex((call) => call[0] === '/:resourceType'),
      );

      expect(
        getCalls.findIndex((call) => call[0] === '/:resourceType/:id/_history/:vid'),
      ).toBeLessThan(getCalls.findIndex((call) => call[0] === '/:resourceType/:id/_history'));
    });
  });
});
