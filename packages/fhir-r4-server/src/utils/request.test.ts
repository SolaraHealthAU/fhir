import { Request } from 'express';
import {
  getResourceType,
  getId,
  getQueryParams,
  getVid,
  getIfModifiedSinceHeader,
  getIfNoneMatchHeader,
  getIfMatchHeader,
  getIfNoneExistHeader,
  getFormat,
} from './request';
import * as errors from '../errors';

// Mock the FHIR R4 dependency
jest.mock('@solarahealth/fhir-r4', () => ({
  createKnownResourceTypeSchema: jest.fn(),
}));

import { createKnownResourceTypeSchema } from '@solarahealth/fhir-r4';

const mockCreateKnownResourceTypeSchema = createKnownResourceTypeSchema as jest.MockedFunction<
  typeof createKnownResourceTypeSchema
>;

describe('request utils', () => {
  let mockRequest: Partial<Request>;

  beforeEach(() => {
    jest.clearAllMocks();
    mockRequest = {
      params: {},
      query: {},
      headers: {},
    };
  });

  describe('getResourceType', () => {
    it('should return valid resource type when params contains valid resourceType', () => {
      // Arrange
      const mockSchema = {
        safeParse: jest.fn().mockReturnValue({
          success: true,
          data: 'Patient',
        }),
      };
      mockCreateKnownResourceTypeSchema.mockReturnValue(mockSchema as any);
      mockRequest.params = { resourceType: 'Patient' };

      // Act
      const result = getResourceType(mockRequest as Request);

      // Assert
      expect(result).toBe('Patient');
      expect(mockCreateKnownResourceTypeSchema).toHaveBeenCalled();
      expect(mockSchema.safeParse).toHaveBeenCalledWith('Patient');
    });

    it('should return null when params contains invalid resourceType', () => {
      // Arrange
      const mockSchema = {
        safeParse: jest.fn().mockReturnValue({
          success: false,
        }),
      };
      mockCreateKnownResourceTypeSchema.mockReturnValue(mockSchema as any);
      mockRequest.params = { resourceType: 'InvalidType' };

      // Act
      const result = getResourceType(mockRequest as Request);

      // Assert
      expect(result).toBeNull();
      expect(mockSchema.safeParse).toHaveBeenCalledWith('InvalidType');
    });

    it('should return null when resourceType param is null', () => {
      // Arrange
      mockRequest.params = {};

      // Act
      const result = getResourceType(mockRequest as Request);

      // Assert
      expect(result).toBeNull();
      expect(mockCreateKnownResourceTypeSchema).not.toHaveBeenCalled();
    });

    it('should return null when resourceType param is undefined', () => {
      // Arrange
      mockRequest.params = { resourceType: undefined as any };

      // Act
      const result = getResourceType(mockRequest as Request);

      // Assert
      expect(result).toBeNull();
    });

    it('should handle non-string resourceType param by converting to string', () => {
      // Arrange
      const mockSchema = {
        safeParse: jest.fn().mockReturnValue({
          success: true,
          data: 'Patient',
        }),
      };
      mockCreateKnownResourceTypeSchema.mockReturnValue(mockSchema as any);
      mockRequest.params = { resourceType: 123 as any };

      // Act
      const result = getResourceType(mockRequest as Request);

      // Assert
      expect(result).toBe('Patient');
      expect(mockSchema.safeParse).toHaveBeenCalledWith('123');
    });
  });

  describe('getId', () => {
    it('should return id when params contains id', () => {
      // Arrange
      mockRequest.params = { id: 'patient-123' };

      // Act
      const result = getId(mockRequest as Request);

      // Assert
      expect(result).toBe('patient-123');
    });

    it('should return null when id param is null', () => {
      // Arrange
      mockRequest.params = {};

      // Act
      const result = getId(mockRequest as Request);

      // Assert
      expect(result).toBeNull();
    });

    it('should return null when id param is undefined', () => {
      // Arrange
      mockRequest.params = { id: undefined as any };

      // Act
      const result = getId(mockRequest as Request);

      // Assert
      expect(result).toBeNull();
    });

    it('should handle non-string id param by converting to string', () => {
      // Arrange
      mockRequest.params = { id: 123 as any };

      // Act
      const result = getId(mockRequest as Request);

      // Assert
      expect(result).toBe('123');
    });
  });

  describe('getQueryParams', () => {
    it('should return empty object when no query params', () => {
      // Arrange
      mockRequest.query = {};

      // Act
      const result = getQueryParams(mockRequest as Request);

      // Assert
      expect(result).toEqual({});
    });

    it('should handle string query parameters', () => {
      // Arrange
      mockRequest.query = {
        name: 'John',
        family: 'Doe',
      };

      // Act
      const result = getQueryParams(mockRequest as Request);

      // Assert
      expect(result).toEqual({
        name: 'John',
        family: 'Doe',
      });
    });

    it('should handle array query parameters', () => {
      // Arrange
      mockRequest.query = {
        identifier: ['123', '456'],
        _include: ['Patient:organization'],
      };

      // Act
      const result = getQueryParams(mockRequest as Request);

      // Assert
      expect(result).toEqual({
        identifier: ['123', '456'],
        _include: ['Patient:organization'],
      });
    });

    it('should handle mixed string and array query parameters', () => {
      // Arrange
      mockRequest.query = {
        name: 'John',
        identifier: ['123', '456'],
        active: 'true',
      };

      // Act
      const result = getQueryParams(mockRequest as Request);

      // Assert
      expect(result).toEqual({
        name: 'John',
        identifier: ['123', '456'],
        active: 'true',
      });
    });

    it('should handle null query parameters', () => {
      // Arrange
      mockRequest.query = {
        name: null as any,
        family: 'Doe',
      };

      // Act
      const result = getQueryParams(mockRequest as Request);

      // Assert
      expect(result).toEqual({
        name: [],
        family: 'Doe',
      });
    });

    it('should handle undefined query parameters', () => {
      // Arrange
      mockRequest.query = {
        name: undefined,
        family: 'Doe',
      };

      // Act
      const result = getQueryParams(mockRequest as Request);

      // Assert
      expect(result).toEqual({
        name: [],
        family: 'Doe',
      });
    });

    it('should convert non-string, non-array values to strings', () => {
      // Arrange
      mockRequest.query = {
        count: 10 as any,
        active: true as any,
        score: 99.5 as any,
      };

      // Act
      const result = getQueryParams(mockRequest as Request);

      // Assert
      expect(result).toEqual({
        count: '10',
        active: 'true',
        score: '99.5',
      });
    });

    it('should handle nested arrays by flattening them', () => {
      // Arrange
      mockRequest.query = {
        identifier: [['123', '456'] as any, '789'],
      };

      // Act
      const result = getQueryParams(mockRequest as Request);

      // Assert
      expect(result).toEqual({
        identifier: ['123', '456', '789'],
      });
    });

    it('should handle complex nested structures', () => {
      // Arrange
      mockRequest.query = {
        mixed: [['a', 'b'] as any, 'c', null as any, 123 as any, ['d'] as any],
      };

      // Act
      const result = getQueryParams(mockRequest as Request);

      // Assert
      expect(result).toEqual({
        mixed: ['a', 'b', 'c', '123', 'd'],
      });
    });
  });

  describe('getVid', () => {
    it('should return vid when params contains vid', () => {
      // Arrange
      mockRequest.params = { vid: 'version-123' };

      // Act
      const result = getVid(mockRequest as Request);

      // Assert
      expect(result).toBe('version-123');
    });

    it('should return null when vid param is null', () => {
      // Arrange
      mockRequest.params = {};

      // Act
      const result = getVid(mockRequest as Request);

      // Assert
      expect(result).toBeNull();
    });

    it('should return null when vid param is undefined', () => {
      // Arrange
      mockRequest.params = { vid: undefined as any };

      // Act
      const result = getVid(mockRequest as Request);

      // Assert
      expect(result).toBeNull();
    });

    it('should handle non-string vid param by converting to string', () => {
      // Arrange
      mockRequest.params = { vid: 456 as any };

      // Act
      const result = getVid(mockRequest as Request);

      // Assert
      expect(result).toBe('456');
    });
  });

  describe('getIfModifiedSinceHeader', () => {
    it('should return if-modified-since header when present', () => {
      // Arrange
      mockRequest.headers = { 'if-modified-since': 'Wed, 21 Oct 2015 07:28:00 GMT' };

      // Act
      const result = getIfModifiedSinceHeader(mockRequest as Request);

      // Assert
      expect(result).toBe('Wed, 21 Oct 2015 07:28:00 GMT');
    });

    it('should return null when if-modified-since header is not present', () => {
      // Arrange
      mockRequest.headers = {};

      // Act
      const result = getIfModifiedSinceHeader(mockRequest as Request);

      // Assert
      expect(result).toBeNull();
    });

    it('should handle array header values by converting to string', () => {
      // Arrange
      mockRequest.headers = { 'if-modified-since': ['Wed, 21 Oct 2015 07:28:00 GMT'] as any };

      // Act
      const result = getIfModifiedSinceHeader(mockRequest as Request);

      // Assert
      expect(result).toBe('Wed, 21 Oct 2015 07:28:00 GMT');
    });
  });

  describe('getIfNoneMatchHeader', () => {
    it('should return if-none-match header when present', () => {
      // Arrange
      mockRequest.headers = { 'if-none-match': '"123456789"' };

      // Act
      const result = getIfNoneMatchHeader(mockRequest as Request);

      // Assert
      expect(result).toBe('"123456789"');
    });

    it('should return null when if-none-match header is not present', () => {
      // Arrange
      mockRequest.headers = {};

      // Act
      const result = getIfNoneMatchHeader(mockRequest as Request);

      // Assert
      expect(result).toBeNull();
    });

    it('should handle array header values by converting to string', () => {
      // Arrange
      mockRequest.headers = { 'if-none-match': ['"123456789"'] as any };

      // Act
      const result = getIfNoneMatchHeader(mockRequest as Request);

      // Assert
      expect(result).toBe('"123456789"');
    });
  });

  describe('getIfMatchHeader', () => {
    it('should return if-match header when present', () => {
      // Arrange
      mockRequest.headers = { 'if-match': '"123456789"' };

      // Act
      const result = getIfMatchHeader(mockRequest as Request);

      // Assert
      expect(result).toBe('"123456789"');
    });

    it('should return null when if-match header is not present', () => {
      // Arrange
      mockRequest.headers = {};

      // Act
      const result = getIfMatchHeader(mockRequest as Request);

      // Assert
      expect(result).toBeNull();
    });

    it('should handle array header values by converting to string', () => {
      // Arrange
      mockRequest.headers = { 'if-match': ['"123456789"'] as any };

      // Act
      const result = getIfMatchHeader(mockRequest as Request);

      // Assert
      expect(result).toBe('"123456789"');
    });
  });

  describe('getIfNoneExistHeader', () => {
    it('should return if-none-exist header when present', () => {
      // Arrange
      mockRequest.headers = { 'if-none-exist': 'identifier=123456' };

      // Act
      const result = getIfNoneExistHeader(mockRequest as Request);

      // Assert
      expect(result).toBe('identifier=123456');
    });

    it('should return null when if-none-exist header is not present', () => {
      // Arrange
      mockRequest.headers = {};

      // Act
      const result = getIfNoneExistHeader(mockRequest as Request);

      // Assert
      expect(result).toBeNull();
    });

    it('should handle array header values by converting to string', () => {
      // Arrange
      mockRequest.headers = { 'if-none-exist': ['identifier=123456'] as any };

      // Act
      const result = getIfNoneExistHeader(mockRequest as Request);

      // Assert
      expect(result).toBe('identifier=123456');
    });
  });

  describe('getFormat', () => {
    const resourceType = 'Patient';

    it('should return application/json for json format', () => {
      // Arrange
      mockRequest.query = { _format: 'json' };

      // Act
      const result = getFormat(mockRequest as Request, resourceType);

      // Assert
      expect(result).toBe('application/json');
    });

    it('should return application/json for application/json format', () => {
      // Arrange
      mockRequest.query = { _format: 'application/json' };

      // Act
      const result = getFormat(mockRequest as Request, resourceType);

      // Assert
      expect(result).toBe('application/json');
    });

    it('should return application/json for application/fhir+json format', () => {
      // Arrange
      mockRequest.query = { _format: 'application/fhir+json' };

      // Act
      const result = getFormat(mockRequest as Request, resourceType);

      // Assert
      expect(result).toBe('application/json');
    });

    it('should return application/xml for xml format', () => {
      // Arrange
      mockRequest.query = { _format: 'xml' };

      // Act
      const result = getFormat(mockRequest as Request, resourceType);

      // Assert
      expect(result).toBe('application/xml');
    });

    it('should return application/xml for application/xml format', () => {
      // Arrange
      mockRequest.query = { _format: 'application/xml' };

      // Act
      const result = getFormat(mockRequest as Request, resourceType);

      // Assert
      expect(result).toBe('application/xml');
    });

    it('should return application/xml for application/fhir+xml format', () => {
      // Arrange
      mockRequest.query = { _format: 'application/fhir+xml' };

      // Act
      const result = getFormat(mockRequest as Request, resourceType);

      // Assert
      expect(result).toBe('application/xml');
    });

    it('should return application/xml for legacy application/xml+fhir format', () => {
      // Arrange
      mockRequest.query = { _format: 'application/xml+fhir' };

      // Act
      const result = getFormat(mockRequest as Request, resourceType);

      // Assert
      expect(result).toBe('application/xml');
    });

    it('should default to application/json when no _format query param is present', () => {
      // Arrange
      mockRequest.query = {};

      // Act
      const result = getFormat(mockRequest as Request, resourceType);

      // Assert
      expect(result).toBe('application/json');
    });

    it('should default to application/json when _format is undefined', () => {
      // Arrange
      mockRequest.query = { _format: undefined };

      // Act
      const result = getFormat(mockRequest as Request, resourceType);

      // Assert
      expect(result).toBe('application/json');
    });

    it('should throw ResourceFormatNotSupported for unsupported format', () => {
      // Arrange
      mockRequest.query = { _format: 'text/plain' };

      // Act & Assert
      expect(() => getFormat(mockRequest as Request, resourceType)).toThrow(
        errors.ResourceFormatNotSupported,
      );
      expect(() => getFormat(mockRequest as Request, resourceType)).toThrow(
        "Format 'text/plain' not supported for resource 'Patient'",
      );
    });

    it('should throw ResourceFormatNotSupported for unknown format', () => {
      // Arrange
      mockRequest.query = { _format: 'unknown/format' };

      // Act & Assert
      expect(() => getFormat(mockRequest as Request, resourceType)).toThrow(
        errors.ResourceFormatNotSupported,
      );
      expect(() => getFormat(mockRequest as Request, resourceType)).toThrow(
        "Format 'unknown/format' not supported for resource 'Patient'",
      );
    });

    it('should handle non-string _format values by converting to string', () => {
      // Arrange
      mockRequest.query = { _format: { toString: () => 'json' } as any };

      // Act
      const result = getFormat(mockRequest as Request, resourceType);

      // Assert
      expect(result).toBe('application/json');
    });

    it('should be case sensitive for format values', () => {
      // Arrange
      mockRequest.query = { _format: 'JSON' };

      // Act & Assert
      expect(() => getFormat(mockRequest as Request, resourceType)).toThrow(
        errors.ResourceFormatNotSupported,
      );
    });
  });
});
