import * as z from 'zod';
import type { Bundle, Patient, CapabilityStatementSearchParam } from '@solarahealth/fhir-r4';
import { defineResource } from './resource-builder';
import type { Context, CapabilityStatementResource } from '../types';
import * as errors from '../errors';
import { createSearchParametersSchema } from '../codecs/search-parameters';

// Test context interface
interface TestContext extends Context {
  userId?: string;
  database: {
    patients: {
      findById: jest.Mock;
      search: jest.Mock;
    };
  };
  logger: {
    info: jest.Mock;
    error: jest.Mock;
  };
}

// Sample search parameter definitions
const patientSearchParams: CapabilityStatementSearchParam[] = [
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
];

// Sample patient data
const samplePatient: Patient = {
  resourceType: 'Patient',
  id: '123',
  name: [{ given: ['John'], family: 'Doe' }],
  gender: 'male',
  birthDate: '1980-01-01',
  active: true,
};

const sampleBundle: Bundle = {
  resourceType: 'Bundle',
  type: 'searchset',
  total: 1,
  entry: [
    {
      resource: samplePatient,
      search: { mode: 'match' },
    },
  ],
};

describe('ResourceBuilder', () => {
  let mockContext: TestContext;
  let patientSearchSchema: z.ZodTypeAny;

  beforeEach(() => {
    mockContext = {
      userId: 'test-user',
      database: {
        patients: {
          findById: jest.fn(),
          search: jest.fn(),
        },
      },
      logger: {
        info: jest.fn(),
        error: jest.fn(),
      },
    };
    patientSearchSchema = createSearchParametersSchema(patientSearchParams);
  });

  describe('defineResource function', () => {
    it('should create a ResourceBuilder for a valid resource type', () => {
      // Act
      const builder = defineResource<TestContext, 'Patient'>('Patient');

      // Assert
      expect(builder).toBeDefined();
      expect(typeof builder.read).toBe('function');
      expect(typeof builder.search).toBe('function');
      expect(typeof builder.build).toBe('function');
    });

    it('should create builders for different resource types', () => {
      // Act
      const patientBuilder = defineResource<TestContext, 'Patient'>('Patient');
      const observationBuilder = defineResource<TestContext, 'Observation'>('Observation');

      // Assert
      expect(patientBuilder).toBeDefined();
      expect(observationBuilder).toBeDefined();
    });
  });

  describe('basic functionality', () => {
    it('should build a resource with only read capability', () => {
      // Act
      const resource = defineResource<TestContext, 'Patient'>('Patient')
        .read((builder) =>
          builder.id(z.string()).retrieveWith(async (id, context) => {
            return await context.database.patients.findById(id);
          }),
        )
        .build();

      // Assert
      expect(resource.type).toBe('Patient');
      expect(resource.interaction).toHaveLength(1);
      expect(resource.interaction[0].code).toBe('read');
      expect(resource.interaction[0].handler).toBeDefined();
    });

    it('should build a resource with only search capability', () => {
      // Act
      const resource = defineResource<TestContext, 'Patient'>('Patient')
        .search((builder) =>
          builder.params(patientSearchSchema).list(async (params, context, req) => {
            return sampleBundle;
          }),
        )
        .build();

      // Assert
      expect(resource.type).toBe('Patient');
      expect(resource.interaction).toHaveLength(1);
      expect(resource.interaction[0].code).toBe('search-type');
      expect(resource.interaction[0].handler).toBeDefined();
    });

    it('should build a resource with both read and search capabilities', () => {
      // Act
      const resource = defineResource<TestContext, 'Patient'>('Patient')
        .read((builder) =>
          builder.id(z.string()).retrieveWith(async (id, context) => {
            return samplePatient;
          }),
        )
        .search((builder) =>
          builder.params(patientSearchSchema).list(async (params, context, req) => {
            return sampleBundle;
          }),
        )
        .build();

      // Assert
      expect(resource.type).toBe('Patient');
      expect(resource.interaction).toHaveLength(2);
      expect(resource.interaction.map((i) => i.code)).toEqual(['read', 'search-type']);
    });
  });

  describe('capability statement configuration', () => {
    it('should configure conditional read capability', () => {
      // Act
      const resource = defineResource<TestContext, 'Patient'>('Patient')
        .conditionalRead('modified-since')
        .read((builder) =>
          builder.id(z.string()).retrieveWith(async (id, context) => samplePatient),
        )
        .build();

      // Assert
      expect(resource.conditionalRead).toBe('modified-since');
    });

    it('should configure search parameters', () => {
      // Act
      const resource = defineResource<TestContext, 'Patient'>('Patient')
        .searchParams(patientSearchParams)
        .search((builder) =>
          builder.params(patientSearchSchema).list(async (params, context, req) => sampleBundle),
        )
        .build();

      // Assert
      expect(resource.searchParam).toEqual(patientSearchParams);
    });

    it('should configure multiple capability properties', () => {
      // Act
      const resource = defineResource<TestContext, 'Patient'>('Patient')
        .conditionalRead('modified-since')
        .conditionalCreate(true)
        .conditionalUpdate(true)
        .conditionalDelete('multiple')
        .versioning('versioned')
        .readHistory(false)
        .updateCreate(true)
        .searchParams(patientSearchParams)
        .read((builder) =>
          builder.id(z.string()).retrieveWith(async (id, context) => samplePatient),
        )
        .build();

      // Assert
      expect(resource.conditionalRead).toBe('modified-since');
      expect(resource.conditionalCreate).toBe(true);
      expect(resource.conditionalUpdate).toBe(true);
      expect(resource.conditionalDelete).toBe('multiple');
      expect(resource.versioning).toBe('versioned');
      expect(resource.readHistory).toBe(false);
      expect(resource.updateCreate).toBe(true);
      expect(resource.searchParam).toEqual(patientSearchParams);
    });

    it('should exclude undefined properties from the built resource', () => {
      // Act
      const resource = defineResource<TestContext, 'Patient'>('Patient')
        .read((builder) =>
          builder.id(z.string()).retrieveWith(async (id, context) => samplePatient),
        )
        .build();

      // Assert
      expect(resource).not.toHaveProperty('conditionalRead');
      expect(resource).not.toHaveProperty('conditionalCreate');
      expect(resource).not.toHaveProperty('searchParam');
      expect(resource).toHaveProperty('type');
      expect(resource).toHaveProperty('interaction');
    });
  });

  describe('method chaining', () => {
    it('should support fluent method chaining', () => {
      // Act
      const result = defineResource<TestContext, 'Patient'>('Patient')
        .conditionalRead('modified-since')
        .searchParams(patientSearchParams)
        .read((builder) =>
          builder.id(z.string()).retrieveWith(async (id, context) => samplePatient),
        )
        .search((builder) =>
          builder.params(patientSearchSchema).list(async (params, context, req) => sampleBundle),
        );

      // Assert
      expect(result).toBeDefined();
      expect(typeof result.build).toBe('function');
      expect(() => result.build()).not.toThrow();
    });

    it('should maintain type safety through method chaining', () => {
      // This test verifies that TypeScript compilation succeeds
      // and the builder maintains proper typing

      const resource = defineResource<TestContext, 'Patient'>('Patient')
        .read((builder) =>
          builder
            .id(z.string())
            .retrieveWith(async (id: string, context: TestContext): Promise<Patient> => {
              return samplePatient;
            }),
        )
        .search((builder) =>
          builder
            .params(patientSearchSchema)
            .list(async (params, context, req): Promise<Bundle> => {
              return sampleBundle;
            }),
        )
        .build();

      expect(resource).toBeDefined();
      expect(resource.type).toBe('Patient');
    });

    it('should allow methods to be called in any order', () => {
      // Act - different order
      const resource1 = defineResource<TestContext, 'Patient'>('Patient')
        .search((builder) => builder.params(patientSearchSchema).list(async () => sampleBundle))
        .conditionalRead('modified-since')
        .read((builder) => builder.id(z.string()).retrieveWith(async () => samplePatient))
        .searchParams(patientSearchParams)
        .build();

      const resource2 = defineResource<TestContext, 'Patient'>('Patient')
        .searchParams(patientSearchParams)
        .read((builder) => builder.id(z.string()).retrieveWith(async () => samplePatient))
        .conditionalRead('modified-since')
        .search((builder) => builder.params(patientSearchSchema).list(async () => sampleBundle))
        .build();

      // Assert - both should produce equivalent results
      expect(resource1.type).toBe(resource2.type);
      expect(resource1.conditionalRead).toBe(resource2.conditionalRead);
      expect(resource1.searchParam).toEqual(resource2.searchParam);
      expect(resource1.interaction).toHaveLength(resource2.interaction.length);
    });
  });

  describe('documentation support', () => {
    it('should support documentation for read operations', () => {
      // Act
      const resource = defineResource<TestContext, 'Patient'>('Patient')
        .read(
          (builder) => builder.id(z.string()).retrieveWith(async (id, context) => samplePatient),
          'Retrieve a patient by ID',
        )
        .build();

      // Assert
      expect(resource.interaction[0].documentation).toBe('Retrieve a patient by ID');
    });

    it('should support documentation for search operations', () => {
      // Act
      const resource = defineResource<TestContext, 'Patient'>('Patient')
        .search(
          (builder) =>
            builder.params(patientSearchSchema).list(async (params, context, req) => sampleBundle),
          'Search for patients using various parameters',
        )
        .build();

      // Assert
      expect(resource.interaction[0].documentation).toBe(
        'Search for patients using various parameters',
      );
    });
  });

  describe('builder validation', () => {
    it('should validate builder composition - read operations', () => {
      // Act & Assert - building with proper read configuration should not throw
      expect(() => {
        defineResource<TestContext, 'Patient'>('Patient')
          .read((builder) =>
            builder.id(z.string()).retrieveWith(async (id, context) => samplePatient),
          )
          .build();
      }).not.toThrow();
    });

    it('should validate builder composition - search operations', () => {
      // Act & Assert - building with proper search configuration should not throw
      expect(() => {
        defineResource<TestContext, 'Patient'>('Patient')
          .search((builder) =>
            builder.params(patientSearchSchema).list(async (params, context, req) => sampleBundle),
          )
          .build();
      }).not.toThrow();
    });

    it('should handle builder errors from read configuration', () => {
      // Act & Assert
      expect(() => {
        defineResource<TestContext, 'Patient'>('Patient')
          .read(null as any)
          .build();
      }).toThrow('Invalid argument provided to read()');
    });

    it('should handle builder errors from search configuration', () => {
      // Act & Assert
      expect(() => {
        defineResource<TestContext, 'Patient'>('Patient')
          .search(null as any)
          .build();
      }).toThrow('Invalid argument provided to search()');
    });
  });

  describe('real-world scenarios from documentation', () => {
    it('should support quick-start.md Patient resource pattern', () => {
      // Arrange - mimicking the quick-start.md example
      const patients: Record<string, Patient> = {
        '123': {
          resourceType: 'Patient',
          id: '123',
          name: [{ given: ['John'], family: 'Doe' }],
        },
      };

      // Act
      const patientResource = defineResource<TestContext, 'Patient'>('Patient')
        .read((builder) =>
          builder.id(z.string()).retrieveWith(async (id) => {
            const patient = patients[id];
            if (!patient) {
              throw new errors.ResourceNotFound('Patient', id);
            }
            return patient;
          }),
        )
        .build();

      // Assert
      expect(patientResource.type).toBe('Patient');
      expect(patientResource.interaction).toHaveLength(1);
      expect(patientResource.interaction[0].code).toBe('read');
    });

    it('should support builder-api.md comprehensive resource pattern', () => {
      // Act
      const patientResource = defineResource<TestContext, 'Patient'>('Patient')
        .searchParams(patientSearchParams)
        .read((builder) =>
          builder.id(z.string()).retrieveWith(async (id, context) => {
            const patient = await context.database.patients.findById(id);
            if (!patient) {
              throw new errors.ResourceNotFound('Patient', id);
            }
            return patient;
          }),
        )
        .search((builder) =>
          builder.params(patientSearchSchema).list(async (params, context, req) => {
            const results = await (context as TestContext).database.patients.search(params);
            return {
              resourceType: 'Bundle',
              type: 'searchset',
              total: results.total,
              entry: results.patients.map((resource: Patient) => ({ resource })),
            };
          }),
        )
        .build();

      // Assert
      expect(patientResource.type).toBe('Patient');
      expect(patientResource.interaction).toHaveLength(2);
      expect(patientResource.searchParam).toEqual(patientSearchParams);
      expect(patientResource.interaction.map((i) => i.code)).toEqual(['read', 'search-type']);
    });

    it('should support authorization middleware pattern from builder-api.md', () => {
      // Arrange - implementing the auth pattern from docs
      interface AuthenticatedContext extends TestContext {
        user: { id: string; canReadPatient: (id: string) => Promise<boolean> };
      }

      function requireAuth<T extends any[], R>(
        handler: (...args: [...T, AuthenticatedContext]) => Promise<R>,
      ): (...args: [...T, Context]) => Promise<R> {
        return async (...args) => {
          const context = args[args.length - 1] as TestContext;

          if (!context.userId) {
            throw new errors.BadRequest('Authentication required');
          }

          const authenticatedContext: AuthenticatedContext = {
            ...context,
            user: {
              id: context.userId,
              canReadPatient: async (id: string) => true,
            },
          };

          return handler(...(args.slice(0, -1) as T), authenticatedContext);
        };
      }

      // Act
      const securePatientResource = defineResource<TestContext, 'Patient'>('Patient')
        .read((builder) =>
          builder.id(z.string()).retrieveWith(
            requireAuth(async (id, context) => {
              const canRead = await context.user.canReadPatient(id);
              if (!canRead) {
                throw new errors.ResourceInvalid('Patient', 'Insufficient permissions');
              }
              return samplePatient;
            }),
          ),
        )
        .build();

      // Assert
      expect(securePatientResource.type).toBe('Patient');
      expect(securePatientResource.interaction).toHaveLength(1);
      expect(securePatientResource.interaction[0].code).toBe('read');
    });
  });

  describe('advanced configuration', () => {
    it('should handle search include and rev-include parameters', () => {
      // Act
      const resource = defineResource<TestContext, 'Patient'>('Patient')
        .searchInclude(['Patient:organization', 'Patient:general-practitioner'])
        .searchRevInclude(['Observation:subject', 'Encounter:subject'])
        .search((builder) =>
          builder.params(patientSearchSchema).list(async (params, context, req) => sampleBundle),
        )
        .build();

      // Assert
      expect(resource.searchInclude).toEqual([
        'Patient:organization',
        'Patient:general-practitioner',
      ]);
      expect(resource.searchRevInclude).toEqual(['Observation:subject', 'Encounter:subject']);
    });

    it('should handle all capability statement configuration options', () => {
      // Act
      const resource = defineResource<TestContext, 'Patient'>('Patient')
        .conditionalRead('full-support')
        .conditionalCreate(true)
        .conditionalUpdate(true)
        .conditionalDelete('single')
        .versioning('versioned-update')
        .readHistory(true)
        .updateCreate(false)
        .searchInclude(['Patient:organization'])
        .searchRevInclude(['Observation:subject'])
        .searchParams(patientSearchParams)
        .read((builder) =>
          builder.id(z.string()).retrieveWith(async (id, context) => samplePatient),
        )
        .build();

      // Assert
      expect(resource.conditionalRead).toBe('full-support');
      expect(resource.conditionalCreate).toBe(true);
      expect(resource.conditionalUpdate).toBe(true);
      expect(resource.conditionalDelete).toBe('single');
      expect(resource.versioning).toBe('versioned-update');
      expect(resource.readHistory).toBe(true);
      expect(resource.updateCreate).toBe(false);
      expect(resource.searchInclude).toEqual(['Patient:organization']);
      expect(resource.searchRevInclude).toEqual(['Observation:subject']);
      expect(resource.searchParam).toEqual(patientSearchParams);
    });
  });

  describe('edge cases', () => {
    it('should build a resource with no operations', () => {
      // Act
      const resource = defineResource<TestContext, 'Patient'>('Patient').build();

      // Assert
      expect(resource.type).toBe('Patient');
      expect(resource.interaction).toEqual([]);
    });

    it('should handle multiple calls to the same method (last one wins)', () => {
      // Act
      const resource = defineResource<TestContext, 'Patient'>('Patient')
        .conditionalRead('not-supported')
        .conditionalRead('modified-since') // This should override the previous one
        .read((builder) =>
          builder.id(z.string()).retrieveWith(async (id, context) => samplePatient),
        )
        .build();

      // Assert
      expect(resource.conditionalRead).toBe('modified-since');
    });

    it('should handle alternative read handler syntax', () => {
      // Arrange
      const readHandlerBuilder = {
        build:
          () =>
          async (
            args: { id: string; ifModifiedSince: string | null; ifNoneMatch: string | null },
            context: TestContext,
          ) => {
            return samplePatient;
          },
      };

      // Act
      const resource = defineResource<TestContext, 'Patient'>('Patient')
        .read(readHandlerBuilder)
        .build();

      // Assert
      expect(resource.interaction).toHaveLength(1);
      expect(resource.interaction[0].code).toBe('read');
    });

    it('should handle alternative search handler syntax', () => {
      // Arrange
      const searchHandlerBuilder = {
        build:
          () =>
          async (args: { params: Record<string, string | string[]> }, context: TestContext) => {
            return sampleBundle;
          },
      };

      // Act
      const resource = defineResource<TestContext, 'Patient'>('Patient')
        .search(searchHandlerBuilder)
        .build();

      // Assert
      expect(resource.interaction).toHaveLength(1);
      expect(resource.interaction[0].code).toBe('search-type');
    });
  });
});
