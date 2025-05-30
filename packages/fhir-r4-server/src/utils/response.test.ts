import { Request, Response, NextFunction } from 'express';
import { sendFhirResponse, notAllowed } from './response';
import * as errors from '../errors';
import * as requestUtils from './request';
import { Interaction } from '../types';
import type { RestServer } from '../rest-server';
import type { ResourceListType } from '@solarahealth/fhir-r4';

// Mock the request utils module
jest.mock('./request', () => ({
  getFormat: jest.fn(),
  getResourceType: jest.fn(),
  getId: jest.fn(),
}));

const mockRequestUtils = requestUtils as jest.Mocked<typeof requestUtils>;

describe('response utils', () => {
  let mockRequest: Partial<Request>;
  let mockResponse: Partial<Response>;
  let mockNext: NextFunction;
  let mockServer: Partial<RestServer<any>>;
  let consoleLogSpy: jest.SpyInstance;

  beforeEach(() => {
    jest.clearAllMocks();

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
      contentType: jest.fn().mockReturnThis(),
    };

    mockNext = jest.fn();

    mockServer = {
      options: {
        capabilities: {} as any, // Add required capabilities property
        fhir: {
          objToXml: jest.fn(),
        },
      },
    };

    // Spy on console.log to test logging in notAllowed function
    consoleLogSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleLogSpy.mockRestore();
  });

  describe('sendFhirResponse', () => {
    it('should send JSON response with resource and set headers', () => {
      // Arrange
      const resource: ResourceListType = {
        resourceType: 'Patient',
        id: 'patient-123',
        meta: {
          lastUpdated: '2023-01-01T00:00:00Z',
          versionId: '1',
        },
        name: [{ family: 'Doe', given: ['John'] }],
      };

      mockRequestUtils.getFormat.mockReturnValue('application/json');

      const sendResponse = sendFhirResponse({ server: mockServer as RestServer<any> });

      // Act
      sendResponse(mockRequest as Request, mockResponse as Response, {
        status: 200,
        resource,
      });

      // Assert
      expect(mockRequestUtils.getFormat).toHaveBeenCalledWith(mockRequest, 'Patient');
      expect(mockResponse.setHeader).toHaveBeenCalledWith('Last-Modified', '2023-01-01T00:00:00Z');
      expect(mockResponse.setHeader).toHaveBeenCalledWith('ETag', 'W/"1"');
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith(resource);
    });

    it('should send JSON response without setting headers when meta is missing', () => {
      // Arrange
      const resource: ResourceListType = {
        resourceType: 'Patient',
        id: 'patient-123',
        name: [{ family: 'Doe', given: ['John'] }],
      };

      mockRequestUtils.getFormat.mockReturnValue('application/json');

      const sendResponse = sendFhirResponse({ server: mockServer as RestServer<any> });

      // Act
      sendResponse(mockRequest as Request, mockResponse as Response, {
        status: 201,
        resource,
      });

      // Assert
      expect(mockResponse.setHeader).not.toHaveBeenCalled();
      expect(mockResponse.status).toHaveBeenCalledWith(201);
      expect(mockResponse.json).toHaveBeenCalledWith(resource);
    });

    it('should send XML response when format is application/xml', () => {
      // Arrange
      const resource: ResourceListType = {
        resourceType: 'Patient',
        id: 'patient-123',
        name: [{ family: 'Doe', given: ['John'] }],
      };

      const xmlString = '<Patient><id value="patient-123"/></Patient>';

      mockRequestUtils.getFormat.mockReturnValue('application/xml');
      (mockServer.options!.fhir!.objToXml as jest.Mock).mockReturnValue(xmlString);

      const sendResponse = sendFhirResponse({ server: mockServer as RestServer<any> });

      // Act
      sendResponse(mockRequest as Request, mockResponse as Response, {
        status: 200,
        resource,
      });

      // Assert
      expect(mockServer.options!.fhir!.objToXml).toHaveBeenCalledWith(resource);
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.contentType).toHaveBeenCalledWith('application/xml');
      expect(mockResponse.send).toHaveBeenCalledWith(xmlString);
    });

    it('should throw ResourceInvalid when XML conversion returns null', () => {
      // Arrange
      const resource: ResourceListType = {
        resourceType: 'Patient',
        id: 'patient-123',
        name: [{ family: 'Doe', given: ['John'] }],
      };

      mockRequestUtils.getFormat.mockReturnValue('application/xml');
      (mockServer.options!.fhir!.objToXml as jest.Mock).mockReturnValue(null);

      const sendResponse = sendFhirResponse({ server: mockServer as RestServer<any> });

      // Act & Assert
      expect(() =>
        sendResponse(mockRequest as Request, mockResponse as Response, {
          status: 200,
          resource,
        }),
      ).toThrow(errors.ResourceInvalid);
      expect(() =>
        sendResponse(mockRequest as Request, mockResponse as Response, {
          status: 200,
          resource,
        }),
      ).toThrow('Invalid XML');
    });

    it('should throw ResourceInvalid when XML conversion returns undefined', () => {
      // Arrange
      const resource: ResourceListType = {
        resourceType: 'Patient',
        id: 'patient-123',
        name: [{ family: 'Doe', given: ['John'] }],
      };

      mockRequestUtils.getFormat.mockReturnValue('application/xml');
      (mockServer.options!.fhir!.objToXml as jest.Mock).mockReturnValue(undefined);

      const sendResponse = sendFhirResponse({ server: mockServer as RestServer<any> });

      // Act & Assert
      expect(() =>
        sendResponse(mockRequest as Request, mockResponse as Response, {
          status: 200,
          resource,
        }),
      ).toThrow(errors.ResourceInvalid);
    });

    it('should throw ResourceFormatNotSupported for unsupported format', () => {
      // Arrange
      const resource: ResourceListType = {
        resourceType: 'Patient',
        id: 'patient-123',
        name: [{ family: 'Doe', given: ['John'] }],
      };

      // Mock getFormat to return an unsupported format, then handle the error
      mockRequestUtils.getFormat.mockImplementation(() => {
        throw new errors.ResourceFormatNotSupported('Patient', 'text/plain');
      });

      const sendResponse = sendFhirResponse({ server: mockServer as RestServer<any> });

      // Act & Assert
      expect(() =>
        sendResponse(mockRequest as Request, mockResponse as Response, {
          status: 200,
          resource,
        }),
      ).toThrow(errors.ResourceFormatNotSupported);
      expect(() =>
        sendResponse(mockRequest as Request, mockResponse as Response, {
          status: 200,
          resource,
        }),
      ).toThrow("Format 'text/plain' not supported for resource 'Patient'");
    });

    it('should send empty response for 204 status without resource', () => {
      // Arrange
      const sendResponse = sendFhirResponse({ server: mockServer as RestServer<any> });

      // Act
      sendResponse(mockRequest as Request, mockResponse as Response, {
        status: 204,
      });

      // Assert
      expect(mockResponse.status).toHaveBeenCalledWith(204);
      expect(mockResponse.send).toHaveBeenCalledWith();
      expect(mockResponse.json).not.toHaveBeenCalled();
      expect(mockRequestUtils.getFormat).not.toHaveBeenCalled();
    });

    it('should send empty response for error statuses without resource', () => {
      // Arrange
      const sendResponse = sendFhirResponse({ server: mockServer as RestServer<any> });

      // Act
      sendResponse(mockRequest as Request, mockResponse as Response, {
        status: 404,
      });

      // Assert
      expect(mockResponse.status).toHaveBeenCalledWith(404);
      expect(mockResponse.send).toHaveBeenCalledWith();
      expect(mockResponse.json).not.toHaveBeenCalled();
      expect(mockRequestUtils.getFormat).not.toHaveBeenCalled();
    });

    it('should handle resource with meta but no lastUpdated', () => {
      // Arrange
      const resource: ResourceListType = {
        resourceType: 'Patient',
        id: 'patient-123',
        meta: {
          versionId: '1',
        },
        name: [{ family: 'Doe', given: ['John'] }],
      };

      mockRequestUtils.getFormat.mockReturnValue('application/json');

      const sendResponse = sendFhirResponse({ server: mockServer as RestServer<any> });

      // Act
      sendResponse(mockRequest as Request, mockResponse as Response, {
        status: 200,
        resource,
      });

      // Assert
      expect(mockResponse.setHeader).toHaveBeenCalledWith('ETag', 'W/"1"');
      expect(mockResponse.setHeader).toHaveBeenCalledTimes(1); // Only ETag, not Last-Modified
    });

    it('should handle resource with meta but no versionId', () => {
      // Arrange
      const resource: ResourceListType = {
        resourceType: 'Patient',
        id: 'patient-123',
        meta: {
          lastUpdated: '2023-01-01T00:00:00Z',
        },
        name: [{ family: 'Doe', given: ['John'] }],
      };

      mockRequestUtils.getFormat.mockReturnValue('application/json');

      const sendResponse = sendFhirResponse({ server: mockServer as RestServer<any> });

      // Act
      sendResponse(mockRequest as Request, mockResponse as Response, {
        status: 200,
        resource,
      });

      // Assert
      expect(mockResponse.setHeader).toHaveBeenCalledWith('Last-Modified', '2023-01-01T00:00:00Z');
      expect(mockResponse.setHeader).toHaveBeenCalledTimes(1); // Only Last-Modified, not ETag
    });

    it('should handle resource without meta property', () => {
      // Arrange
      const resource = {
        resourceType: 'Patient',
        id: 'patient-123',
        name: [{ family: 'Doe', given: ['John'] }],
      } as ResourceListType;

      mockRequestUtils.getFormat.mockReturnValue('application/json');

      const sendResponse = sendFhirResponse({ server: mockServer as RestServer<any> });

      // Act
      sendResponse(mockRequest as Request, mockResponse as Response, {
        status: 200,
        resource,
      });

      // Assert
      expect(mockResponse.setHeader).not.toHaveBeenCalled();
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith(resource);
    });

    it('should handle XML format when fhir option is null', () => {
      // Arrange
      const resource: ResourceListType = {
        resourceType: 'Patient',
        id: 'patient-123',
        name: [{ family: 'Doe', given: ['John'] }],
      };

      mockRequestUtils.getFormat.mockReturnValue('application/xml');
      mockServer.options!.fhir = null as any;

      const sendResponse = sendFhirResponse({ server: mockServer as RestServer<any> });

      // Act & Assert
      // When fhir is null, the condition `deps.server.options.fhir != null` is false,
      // so it skips XML processing and throws ResourceFormatNotSupported instead
      expect(() =>
        sendResponse(mockRequest as Request, mockResponse as Response, {
          status: 200,
          resource,
        }),
      ).toThrow(errors.ResourceFormatNotSupported);
    });
  });

  describe('notAllowed', () => {
    it('should create middleware that throws ResourceMethodNotAllowed with resourceType and id', () => {
      // Arrange
      mockRequestUtils.getResourceType.mockReturnValue('Patient');
      mockRequestUtils.getId.mockReturnValue('patient-123');

      const middleware = notAllowed()('read' as Interaction);

      // Act
      middleware(mockRequest as Request, mockResponse as Response, mockNext);

      // Assert
      expect(mockRequestUtils.getResourceType).toHaveBeenCalledWith(mockRequest);
      expect(mockRequestUtils.getId).toHaveBeenCalledWith(mockRequest);
      expect(consoleLogSpy).toHaveBeenCalledWith(
        'notAllowed',
        expect.any(errors.ResourceMethodNotAllowed),
      );
      expect(mockNext).toHaveBeenCalledWith(expect.any(errors.ResourceMethodNotAllowed));
    });

    it('should create middleware that throws ResourceMethodNotAllowed with null resourceType and id', () => {
      // Arrange
      mockRequestUtils.getResourceType.mockReturnValue(null);
      mockRequestUtils.getId.mockReturnValue(null);

      const middleware = notAllowed()('create' as Interaction);

      // Act
      middleware(mockRequest as Request, mockResponse as Response, mockNext);

      // Assert
      expect(mockNext).toHaveBeenCalledWith(expect.any(errors.ResourceMethodNotAllowed));

      // Verify the error was constructed with undefined values
      const calledError = (mockNext as jest.Mock).mock.calls[0][0];
      expect(calledError).toBeInstanceOf(errors.ResourceMethodNotAllowed);
    });

    it('should create middleware that throws ResourceMethodNotAllowed with only resourceType', () => {
      // Arrange
      mockRequestUtils.getResourceType.mockReturnValue('Patient');
      mockRequestUtils.getId.mockReturnValue(null);

      const middleware = notAllowed()('update' as Interaction);

      // Act
      middleware(mockRequest as Request, mockResponse as Response, mockNext);

      // Assert
      expect(mockNext).toHaveBeenCalledWith(expect.any(errors.ResourceMethodNotAllowed));

      const calledError = (mockNext as jest.Mock).mock.calls[0][0];
      expect(calledError).toBeInstanceOf(errors.ResourceMethodNotAllowed);
    });

    it('should create middleware that throws ResourceMethodNotAllowed with only id', () => {
      // Arrange
      mockRequestUtils.getResourceType.mockReturnValue(null);
      mockRequestUtils.getId.mockReturnValue('patient-123');

      const middleware = notAllowed()('delete' as Interaction);

      // Act
      middleware(mockRequest as Request, mockResponse as Response, mockNext);

      // Assert
      expect(mockNext).toHaveBeenCalledWith(expect.any(errors.ResourceMethodNotAllowed));

      const calledError = (mockNext as jest.Mock).mock.calls[0][0];
      expect(calledError).toBeInstanceOf(errors.ResourceMethodNotAllowed);
    });

    it('should log the error and pass it to next middleware', () => {
      // Arrange
      mockRequestUtils.getResourceType.mockReturnValue('Patient');
      mockRequestUtils.getId.mockReturnValue('patient-123');

      const middleware = notAllowed()('search-type' as Interaction);

      // Act
      middleware(mockRequest as Request, mockResponse as Response, mockNext);

      // Assert
      expect(consoleLogSpy).toHaveBeenCalledWith('notAllowed', expect.any(Error));
      expect(mockNext).toHaveBeenCalledTimes(1);
      expect(mockNext).toHaveBeenCalledWith(expect.any(errors.ResourceMethodNotAllowed));
    });

    it('should handle different interaction types', () => {
      // Arrange
      const interactions: Interaction[] = ['read', 'create', 'update', 'delete', 'search-type'];

      for (const interaction of interactions) {
        jest.clearAllMocks();
        mockRequestUtils.getResourceType.mockReturnValue('Patient');
        mockRequestUtils.getId.mockReturnValue('patient-123');

        const middleware = notAllowed()(interaction);

        // Act
        middleware(mockRequest as Request, mockResponse as Response, mockNext);

        // Assert
        expect(mockNext).toHaveBeenCalledWith(expect.any(errors.ResourceMethodNotAllowed));
        const error = (mockNext as jest.Mock).mock.calls[0][0];
        expect(error.message).toContain(interaction);
      }
    });

    it('should handle errors thrown by request utils', () => {
      // Arrange
      const thrownError = new Error('Request parsing error');
      mockRequestUtils.getResourceType.mockImplementation(() => {
        throw thrownError;
      });

      const middleware = notAllowed()('read' as Interaction);

      // Act
      middleware(mockRequest as Request, mockResponse as Response, mockNext);

      // Assert
      expect(consoleLogSpy).toHaveBeenCalledWith('notAllowed', thrownError);
      expect(mockNext).toHaveBeenCalledWith(thrownError);
    });
  });
});
