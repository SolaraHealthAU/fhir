import * as z from 'zod';
import type { Bundle, Patient, CapabilityStatementSearchParam } from '@solarahealth/fhir-r4';
import { SearchBuilder } from './search-builder';
import type { Context } from '../types';
import * as errors from '../errors';
import {
  createSearchParametersSchema,
  createNumberParameterSchema,
  createDateParameterSchema,
  createTokenParameterSchema,
} from '../codecs/search-parameters';

// Test context interface
interface TestContext extends Context {
  userId?: string;
  database: {
    search: jest.Mock;
    patients: {
      search: jest.Mock;
    };
  };
  request: {
    baseUrl: string;
  };
}

// Sample search parameter definitions
const patientSearchParams = [
  {
    name: 'name',
    documentation: 'A server defined search that matches name fields',
    type: 'string',
  },
  {
    name: 'family',
    documentation: 'A portion of the family name of the patient',
    type: 'string',
  },
  {
    name: 'given',
    documentation: 'A portion of the given name of the patient',
    type: 'string',
  },
  {
    name: 'birthdate',
    documentation: "The patient's date of birth",
    type: 'date',
  },
  {
    name: 'gender',
    documentation: 'Gender of the patient',
    type: 'token',
  },
  {
    name: 'active',
    documentation: 'Whether the patient record is active',
    type: 'token',
  },
  {
    name: 'identifier',
    documentation: 'A patient identifier',
    type: 'token',
  },
  {
    name: '_count',
    documentation: 'Number of results to return',
    type: 'number',
  },
  {
    name: '_sort',
    documentation: 'Sort order for results',
    type: 'string',
  },
] as const satisfies ReadonlyArray<CapabilityStatementSearchParam>;

// Sample patient data
const samplePatients: Patient[] = [
  {
    resourceType: 'Patient',
    id: '123',
    name: [{ given: ['John'], family: 'Doe' }],
    gender: 'male',
    birthDate: '1980-01-01',
    active: true,
  },
  {
    resourceType: 'Patient',
    id: '456',
    name: [{ given: ['Jane'], family: 'Smith' }],
    gender: 'female',
    birthDate: '1985-05-15',
    active: true,
  },
];

// Sample bundle response
const sampleBundle: Bundle = {
  resourceType: 'Bundle',
  type: 'searchset',
  total: 2,
  entry: samplePatients.map((resource) => ({
    resource,
    search: { mode: 'match' },
    fullUrl: `http://example.com/fhir/Patient/${resource.id}`,
  })),
};

describe('SearchBuilder', () => {
  let builder: SearchBuilder<'Patient', any>;
  let mockContext: TestContext;
  let patientSearchSchema: z.ZodTypeAny;

  beforeEach(() => {
    builder = new SearchBuilder('Patient');
    mockContext = {
      userId: 'test-user',
      database: {
        search: jest.fn(),
        patients: {
          search: jest.fn(),
        },
      },
      request: {
        baseUrl: 'http://example.com/fhir',
      },
    };
    patientSearchSchema = createSearchParametersSchema(patientSearchParams);
  });

  describe('basic functionality', () => {
    it('should build a working search handler with parameter validation', async () => {
      // Arrange
      const handler = builder
        .params(patientSearchSchema)
        .list(async (params, context, req) => {
          return sampleBundle;
        })
        .build();

      // Act
      const result = await handler({ params: { name: 'John' } }, mockContext);

      // Assert
      expect(result).toEqual(sampleBundle);
    });

    it('should validate search parameters with Zod schema', async () => {
      // Arrange
      const handler = builder
        .params(patientSearchSchema)
        .list(async (params, context, req) => {
          return sampleBundle;
        })
        .build();

      // Act
      const result = await handler({ params: { family: 'Doe', active: 'true' } }, mockContext);

      // Assert
      expect(result).toEqual(sampleBundle);
    });

    it('should pass validated parameters to the list function', async () => {
      // Arrange
      const listFn = jest.fn().mockResolvedValue(sampleBundle);
      const handler = builder.params(patientSearchSchema).list(listFn).build();

      // Act
      await handler({ params: { name: 'John' } }, mockContext);

      // Assert
      expect(listFn).toHaveBeenCalledWith(
        expect.objectContaining({
          name: [[{ op: 'startsWith', value: 'John' }]],
        }),
        mockContext,
        { query: { name: 'John' } },
      );
    });

    it('should pass context and request to the list function', async () => {
      // Arrange
      const listFn = jest.fn().mockResolvedValue(sampleBundle);
      const handler = builder.params(patientSearchSchema).list(listFn).build();

      // Act
      await handler({ params: { name: 'test' } }, mockContext);

      // Assert
      expect(listFn).toHaveBeenCalledWith(expect.any(Object), mockContext, {
        query: { name: 'test' },
      });
    });
  });

  describe('parameter type handling', () => {
    it('should handle string parameters with different operations', async () => {
      // Arrange
      const listFn = jest.fn().mockResolvedValue(sampleBundle);
      const handler = builder.params(patientSearchSchema).list(listFn).build();

      // Act
      await handler({ params: { 'name:exact': 'John Doe' } }, mockContext);

      // Assert
      expect(listFn).toHaveBeenCalledWith(
        expect.objectContaining({
          name: [[{ op: 'exact', value: 'John Doe' }]],
        }),
        mockContext,
        expect.any(Object),
      );
    });

    it('should handle date parameters with prefixes', async () => {
      // Arrange
      const listFn = jest.fn().mockResolvedValue(sampleBundle);
      const handler = builder.params(patientSearchSchema).list(listFn).build();

      // Act
      await handler({ params: { birthdate: 'ge2020-01-01' } }, mockContext);

      // Assert
      expect(listFn).toHaveBeenCalledWith(
        expect.objectContaining({
          birthdate: [
            [
              {
                prefix: 'ge',
                date: new Date('2020-01-01T00:00:00.000Z'),
                raw: '2020-01-01',
              },
            ],
          ],
        }),
        mockContext,
        expect.any(Object),
      );
    });

    it('should handle token parameters', async () => {
      // Arrange
      const listFn = jest.fn().mockResolvedValue(sampleBundle);
      const handler = builder.params(patientSearchSchema).list(listFn).build();

      // Act
      await handler({ params: { gender: 'male' } }, mockContext);

      // Assert
      expect(listFn).toHaveBeenCalledWith(
        expect.objectContaining({
          gender: [[{ codingCodeOrIdentifierValue: 'male' }]],
        }),
        mockContext,
        expect.any(Object),
      );
    });

    it('should handle token parameters with system|code format', async () => {
      // Arrange
      const listFn = jest.fn().mockResolvedValue(sampleBundle);
      const handler = builder.params(patientSearchSchema).list(listFn).build();

      // Act
      await handler({ params: { identifier: 'http://example.com|123456' } }, mockContext);

      // Assert
      expect(listFn).toHaveBeenCalledWith(
        expect.objectContaining({
          identifier: [
            [
              {
                codingOrIdentifierSystem: 'http://example.com',
                codingCodeOrIdentifierValue: '123456',
              },
            ],
          ],
        }),
        mockContext,
        expect.any(Object),
      );
    });

    it('should handle special parameters (_count, _sort)', async () => {
      // Arrange
      const listFn = jest.fn().mockResolvedValue(sampleBundle);
      const handler = builder.params(patientSearchSchema).list(listFn).build();

      // Act
      await handler({ params: { _count: '10', _sort: 'name,-birthdate' } }, mockContext);

      // Assert
      expect(listFn).toHaveBeenCalledWith(
        expect.objectContaining({
          _count: 10,
          _sort: [
            { direction: 'asc', field: 'name' },
            { direction: 'desc', field: 'birthdate' },
          ],
        }),
        mockContext,
        expect.any(Object),
      );
    });
  });

  describe('multiple parameter values (AND/OR logic)', () => {
    it('should handle OR logic within a parameter (comma-separated)', async () => {
      // Arrange
      const listFn = jest.fn().mockResolvedValue(sampleBundle);
      const handler = builder.params(patientSearchSchema).list(listFn).build();

      // Act
      await handler({ params: { family: 'Doe,Smith' } }, mockContext);

      // Assert
      expect(listFn).toHaveBeenCalledWith(
        expect.objectContaining({
          family: [
            [
              { op: 'startsWith', value: 'Doe' },
              { op: 'startsWith', value: 'Smith' },
            ],
          ],
        }),
        mockContext,
        expect.any(Object),
      );
    });

    it('should handle AND logic between parameters (multiple param instances)', async () => {
      // Arrange
      const listFn = jest.fn().mockResolvedValue(sampleBundle);
      const handler = builder.params(patientSearchSchema).list(listFn).build();

      // Act
      await handler({ params: { family: ['Doe', 'Smith'] } }, mockContext);

      // Assert
      expect(listFn).toHaveBeenCalledWith(
        expect.objectContaining({
          family: [[{ op: 'startsWith', value: 'Doe' }], [{ op: 'startsWith', value: 'Smith' }]],
        }),
        mockContext,
        expect.any(Object),
      );
    });
  });

  describe('error handling', () => {
    it('should throw error when build() is called without params() configuration', () => {
      // Arrange
      const incompleteBuilder = new SearchBuilder('Patient').list(async () => sampleBundle);

      // Act & Assert
      expect(() => incompleteBuilder.build()).toThrow(
        'SearchBuilder incomplete – params() and list() are required.',
      );
    });

    it('should throw error when build() is called without list() configuration', () => {
      // Arrange
      const incompleteBuilder = new SearchBuilder('Patient').params(patientSearchSchema);

      // Act & Assert
      expect(() => incompleteBuilder.build()).toThrow(
        'SearchBuilder incomplete – params() and list() are required.',
      );
    });

    it('should throw error when both params() and list() are missing', () => {
      // Arrange
      const incompleteBuilder = new SearchBuilder('Patient');

      // Act & Assert
      expect(() => incompleteBuilder.build()).toThrow(
        'SearchBuilder incomplete – params() and list() are required.',
      );
    });

    it('should throw BadRequest error for invalid search parameters', async () => {
      // Arrange
      const handler = builder
        .params(patientSearchSchema)
        .list(async () => sampleBundle)
        .build();

      // Act & Assert
      await expect(handler({ params: { birthdate: 'invalid-date' } }, mockContext)).rejects.toThrow(
        errors.BadRequest,
      );
    });

    it('should include validation error details in BadRequest', async () => {
      // Arrange
      const handler = builder
        .params(patientSearchSchema)
        .list(async () => sampleBundle)
        .build();

      // Act & Assert
      try {
        await handler({ params: { birthdate: 'not-a-date' } }, mockContext);
        fail('Expected error to be thrown');
      } catch (error: any) {
        expect(error).toBeInstanceOf(errors.BadRequest);
        expect(error.message).toContain('Invalid search parameters');
      }
    });

    it('should propagate errors from the list function', async () => {
      // Arrange
      const listError = new Error('Database connection failed');
      const handler = builder
        .params(patientSearchSchema)
        .list(async () => {
          throw listError;
        })
        .build();

      // Act & Assert
      await expect(handler({ params: { name: 'John' } }, mockContext)).rejects.toThrow(
        'Database connection failed',
      );
    });
  });

  describe('method chaining', () => {
    it('should support fluent method chaining', () => {
      // Act
      const result = builder.params(patientSearchSchema).list(async () => sampleBundle);

      // Assert
      expect(result).toBeInstanceOf(SearchBuilder);
      expect(() => result.build()).not.toThrow();
    });

    it('should maintain type safety through method chaining', () => {
      // This test verifies that TypeScript compilation succeeds
      // and the builder maintains proper typing

      const handler = builder
        .params(patientSearchSchema)
        .list(async (params, context, req): Promise<Bundle> => {
          return sampleBundle;
        })
        .build();

      expect(handler).toBeDefined();
      expect(typeof handler).toBe('function');
    });
  });

  describe('real-world scenarios', () => {
    it('should handle a complete Patient search scenario like in the docs', async () => {
      // Arrange - mimicking the resource-operations.md example
      const handler = builder
        .params(patientSearchSchema)
        .list(async (params: any, context, req) => {
          // Helper function to extract first value from double array
          const getFirstValue = <T>(param: T[][] | undefined): T | undefined => {
            return param?.[0]?.[0];
          };

          // Build response based on search parameters
          let filteredPatients = [...samplePatients];

          const nameQuery = getFirstValue(params.name);
          if (nameQuery && typeof nameQuery === 'object' && 'value' in nameQuery) {
            const value = nameQuery.value as string;
            filteredPatients = filteredPatients.filter((patient) =>
              patient.name?.[0]?.given?.[0]?.toLowerCase().includes(value.toLowerCase()),
            );
          }

          const genderQuery = getFirstValue(params.gender);
          if (
            genderQuery &&
            typeof genderQuery === 'object' &&
            'codingCodeOrIdentifierValue' in genderQuery
          ) {
            const gender = genderQuery.codingCodeOrIdentifierValue as string;
            filteredPatients = filteredPatients.filter((patient) => patient.gender === gender);
          }

          return {
            resourceType: 'Bundle',
            type: 'searchset',
            total: filteredPatients.length,
            entry: filteredPatients.map((resource) => ({
              resource,
              search: { mode: 'match' },
            })),
          } as Bundle;
        })
        .build();

      // Act - search by name
      const nameResult = await handler({ params: { name: 'John' } }, mockContext);

      // Assert
      expect(nameResult.total).toBe(1);
      expect((nameResult.entry?.[0]?.resource as Patient)?.id).toBe('123');

      // Act - search by gender
      const genderResult = await handler({ params: { gender: 'female' } }, mockContext);

      // Assert
      expect(genderResult.total).toBe(1);
      expect((genderResult.entry?.[0]?.resource as Patient)?.id).toBe('456');
    });

    it('should handle search with pagination from the docs', async () => {
      // Arrange - mimicking the api.md example
      const handler = builder
        .params(patientSearchSchema)
        .list(async (params: any, context: any, req) => {
          const count = params._count || 20;
          const baseUrl = (context as TestContext).request.baseUrl;

          // Simulate pagination
          const totalResults = 100;
          const offset = 0; // simplified for test

          return {
            resourceType: 'Bundle',
            type: 'searchset',
            total: totalResults,
            link: [
              {
                relation: 'self',
                url: `${baseUrl}/Patient?name=test&_count=${count}`,
              },
              {
                relation: 'next',
                url: `${baseUrl}/Patient?name=test&_count=${count}&_offset=${offset + count}`,
              },
            ],
            entry: samplePatients.slice(0, count).map((resource) => ({
              resource,
              search: { mode: 'match' },
              fullUrl: `${baseUrl}/Patient/${resource.id}`,
            })),
          } as Bundle;
        })
        .build();

      // Act
      const result = await handler({ params: { name: 'test', _count: '10' } }, mockContext);

      // Assert
      expect(result.total).toBe(100);
      expect(result.link).toHaveLength(2);
      expect(result.link?.[0]?.relation).toBe('self');
      expect(result.link?.[1]?.relation).toBe('next');
      expect(result.link?.[1]?.url).toContain('_offset=10');
    });

    it('should handle complex search with multiple parameters', async () => {
      // Arrange
      const handler = builder
        .params(patientSearchSchema)
        .list(async (params: any, context, req) => {
          const getFirstValue = <T>(param: T[][] | undefined): T | undefined => {
            return param?.[0]?.[0];
          };

          let results = [...samplePatients];

          // Filter by family name
          const familyQuery = getFirstValue(params.family);
          if (familyQuery && typeof familyQuery === 'object' && 'value' in familyQuery) {
            const value = familyQuery.value as string;
            results = results.filter((patient) =>
              patient.name?.[0]?.family?.toLowerCase().includes(value.toLowerCase()),
            );
          }

          // Filter by active status
          const activeQuery = getFirstValue(params.active);
          if (
            activeQuery &&
            typeof activeQuery === 'object' &&
            'codingCodeOrIdentifierValue' in activeQuery
          ) {
            const isActive = (activeQuery.codingCodeOrIdentifierValue as string) === 'true';
            results = results.filter((patient) => patient.active === isActive);
          }

          // Filter by birth date
          const birthdateQuery = getFirstValue(params.birthdate);
          if (
            birthdateQuery &&
            typeof birthdateQuery === 'object' &&
            'prefix' in birthdateQuery &&
            'date' in birthdateQuery
          ) {
            results = results.filter((patient) => {
              if (!patient.birthDate) return false;
              const patientDate = new Date(patient.birthDate);
              const searchDate = birthdateQuery.date as Date;

              switch ((birthdateQuery as any).prefix) {
                case 'eq':
                  return patientDate.toDateString() === searchDate.toDateString();
                case 'ge':
                  return patientDate >= searchDate;
                case 'le':
                  return patientDate <= searchDate;
                default:
                  return false;
              }
            });
          }

          return {
            resourceType: 'Bundle',
            type: 'searchset',
            total: results.length,
            entry: results.map((resource) => ({ resource })),
          } as Bundle;
        })
        .build();

      // Act
      const result = await handler(
        {
          params: {
            family: 'doe',
            active: 'true',
            birthdate: 'le1985-01-01',
          },
        },
        mockContext,
      );

      // Assert
      expect(result.total).toBe(1);
      expect((result.entry?.[0]?.resource as Patient)?.id).toBe('123');
    });
  });

  describe('edge cases', () => {
    it('should handle empty search parameters', async () => {
      // Arrange
      const handler = builder
        .params(patientSearchSchema)
        .list(async () => sampleBundle)
        .build();

      // Act & Assert
      await expect(handler({ params: {} }, mockContext)).resolves.toEqual(sampleBundle);
    });

    it('should handle parameters with empty values', async () => {
      // Arrange
      const listFn = jest.fn().mockResolvedValue(sampleBundle);
      const handler = builder.params(patientSearchSchema).list(listFn).build();

      // Act
      await handler({ params: { name: '' } }, mockContext);

      // Assert - empty parameters should still be processed
      expect(listFn).toHaveBeenCalled();
    });

    it('should handle array parameters correctly', async () => {
      // Arrange
      const listFn = jest.fn().mockResolvedValue(sampleBundle);
      const handler = builder.params(patientSearchSchema).list(listFn).build();

      // Act
      await handler({ params: { name: ['John', 'Jane'] } }, mockContext);

      // Assert
      expect(listFn).toHaveBeenCalledWith(
        expect.objectContaining({
          name: [[{ op: 'startsWith', value: 'John' }], [{ op: 'startsWith', value: 'Jane' }]],
        }),
        mockContext,
        expect.any(Object),
      );
    });

    it('should handle parameter modifiers correctly', async () => {
      // Arrange
      const listFn = jest.fn().mockResolvedValue(sampleBundle);
      const handler = builder.params(patientSearchSchema).list(listFn).build();

      // Act
      await handler(
        {
          params: {
            'name:contains': 'john',
            'family:exact': 'Doe',
          },
        },
        mockContext,
      );

      // Assert
      expect(listFn).toHaveBeenCalledWith(
        expect.objectContaining({
          name: [[{ op: 'contains', value: 'john' }]],
          family: [[{ op: 'exact', value: 'Doe' }]],
        }),
        mockContext,
        expect.any(Object),
      );
    });

    it('should handle bundle with no entries', async () => {
      // Arrange
      const emptyBundle: Bundle = {
        resourceType: 'Bundle',
        type: 'searchset',
        total: 0,
        entry: [],
      };

      const handler = builder
        .params(patientSearchSchema)
        .list(async () => emptyBundle)
        .build();

      // Act
      const result = await handler({ params: { name: 'nonexistent' } }, mockContext);

      // Assert
      expect(result).toEqual(emptyBundle);
      expect(result.total).toBe(0);
      expect(result.entry).toEqual([]);
    });
  });
});
