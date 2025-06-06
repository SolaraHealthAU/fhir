import * as z from 'zod';
import type { Patient, Account, Organization } from '@solarahealth/fhir-r4';
import { ReadBuilder } from './read-builder';
import type { Context } from '../types';

// Test context interface
interface TestContext extends Context {
  userId?: string;
  database: {
    findById: jest.Mock;
  };
}

// Sample patient data
const samplePatient: Patient = {
  resourceType: 'Patient',
  id: '123',
  name: [{ given: ['John'], family: 'Doe' }],
};

const samplePatientWithUuid: Patient = {
  resourceType: 'Patient',
  id: '550e8400-e29b-41d4-a716-446655440000',
  name: [{ given: ['Jane'], family: 'Smith' }],
};

describe('ReadBuilder', () => {
  let builder: ReadBuilder<Patient, TestContext>;
  let mockContext: TestContext;

  beforeEach(() => {
    builder = new ReadBuilder('Patient');
    mockContext = {
      userId: 'test-user',
      database: {
        findById: jest.fn(),
      },
    };
  });

  describe('basic functionality', () => {
    it('should build a working read handler with string ID validation', async () => {
      // Arrange
      mockContext.database.findById.mockResolvedValue(samplePatient);

      const handler = builder
        .id(z.string())
        .retrieveWith(async (id, context) => {
          return await context.database.findById(id);
        })
        .build();

      // Act
      const result = await handler(
        { id: '123', ifModifiedSince: null, ifNoneMatch: null },
        mockContext,
      );

      // Assert
      expect(result).toEqual(samplePatient);
      expect(mockContext.database.findById).toHaveBeenCalledWith('123');
    });

    it('should build a working read handler with UUID validation', async () => {
      // Arrange
      const uuidSchema = z.string().uuid('ID must be a valid UUID');
      mockContext.database.findById.mockResolvedValue(samplePatientWithUuid);

      const handler = builder
        .id(uuidSchema)
        .retrieveWith(async (id, context) => {
          return await context.database.findById(id);
        })
        .build();

      // Act
      const result = await handler(
        {
          id: '550e8400-e29b-41d4-a716-446655440000',
          ifModifiedSince: null,
          ifNoneMatch: null,
        },
        mockContext,
      );

      // Assert
      expect(result).toEqual(samplePatientWithUuid);
      expect(mockContext.database.findById).toHaveBeenCalledWith(
        '550e8400-e29b-41d4-a716-446655440000',
      );
    });

    it('should pass context to the retrieve function', async () => {
      // Arrange
      const contextCapture = jest.fn().mockResolvedValue(samplePatient);

      const handler = builder.id(z.string()).retrieveWith(contextCapture).build();

      // Act
      await handler({ id: '123', ifModifiedSince: null, ifNoneMatch: null }, mockContext);

      // Assert
      expect(contextCapture).toHaveBeenCalledWith('123', mockContext);
    });
  });

  describe('ID preprocessing', () => {
    it('should apply ID preprocessing before validation', async () => {
      // Arrange
      const preprocessor = jest.fn((raw: string) => raw.toUpperCase());
      mockContext.database.findById.mockResolvedValue(samplePatient);

      const handler = builder
        .id(z.string(), preprocessor)
        .retrieveWith(async (id, context) => {
          return await context.database.findById(id);
        })
        .build();

      // Act
      await handler({ id: 'abc123', ifModifiedSince: null, ifNoneMatch: null }, mockContext);

      // Assert
      expect(preprocessor).toHaveBeenCalledWith('abc123');
      expect(mockContext.database.findById).toHaveBeenCalledWith('ABC123');
    });

    it('should work without ID preprocessing', async () => {
      // Arrange
      mockContext.database.findById.mockResolvedValue(samplePatient);

      const handler = builder
        .id(z.string())
        .retrieveWith(async (id, context) => {
          return await context.database.findById(id);
        })
        .build();

      // Act
      await handler({ id: 'test123', ifModifiedSince: null, ifNoneMatch: null }, mockContext);

      // Assert
      expect(mockContext.database.findById).toHaveBeenCalledWith('test123');
    });

    it('should handle complex ID preprocessing (e.g., prefix removal)', async () => {
      // Arrange
      const removePrefix = (raw: string) => (raw.startsWith('pat-') ? raw.slice(4) : raw);
      mockContext.database.findById.mockResolvedValue(samplePatient);

      const handler = builder
        .id(z.string(), removePrefix)
        .retrieveWith(async (id, context) => {
          return await context.database.findById(id);
        })
        .build();

      // Act
      await handler({ id: 'pat-123', ifModifiedSince: null, ifNoneMatch: null }, mockContext);

      // Assert
      expect(mockContext.database.findById).toHaveBeenCalledWith('123');
    });
  });

  describe('validation', () => {
    it('should validate ID with Zod schema', async () => {
      // Arrange
      const uuidSchema = z.string().uuid();

      const handler = builder
        .id(uuidSchema)
        .retrieveWith(async (id) => samplePatient)
        .build();

      // Act & Assert
      await expect(
        handler({ id: 'invalid-uuid', ifModifiedSince: null, ifNoneMatch: null }, mockContext),
      ).rejects.toThrow();
    });

    it('should pass validation with correct ID format', async () => {
      // Arrange
      const handler = builder
        .id(z.string().min(1, 'ID cannot be empty'))
        .retrieveWith(async (id) => samplePatient)
        .build();

      // Act & Assert
      await expect(
        handler({ id: '123', ifModifiedSince: null, ifNoneMatch: null }, mockContext),
      ).resolves.toEqual(samplePatient);
    });

    it('should throw validation error for empty ID when required', async () => {
      // Arrange
      const handler = builder
        .id(z.string().min(1, 'ID cannot be empty'))
        .retrieveWith(async (id) => samplePatient)
        .build();

      // Act & Assert
      await expect(
        handler({ id: '', ifModifiedSince: null, ifNoneMatch: null }, mockContext),
      ).rejects.toThrow('ID cannot be empty');
    });
  });

  describe('error handling', () => {
    it('should throw error when build() is called without id() configuration', () => {
      // Arrange
      const incompleteBuilder = new ReadBuilder('Patient').retrieveWith(
        async (id) => samplePatient,
      );

      // Act & Assert
      expect(() => incompleteBuilder.build()).toThrow(
        'ReadBuilder incomplete – you must call id() and retrieveWith()',
      );
    });

    it('should throw error when build() is called without retrieveWith() configuration', () => {
      // Arrange
      const incompleteBuilder = new ReadBuilder('Patient').id(z.string());

      // Act & Assert
      expect(() => incompleteBuilder.build()).toThrow(
        'ReadBuilder incomplete – you must call id() and retrieveWith()',
      );
    });

    it('should throw error when both id() and retrieveWith() are missing', () => {
      // Arrange
      const incompleteBuilder = new ReadBuilder('Patient');

      // Act & Assert
      expect(() => incompleteBuilder.build()).toThrow(
        'ReadBuilder incomplete – you must call id() and retrieveWith()',
      );
    });

    it('should propagate errors from the retrieve function', async () => {
      // Arrange
      const retrieveError = new Error('Database connection failed');

      const handler = builder
        .id(z.string())
        .retrieveWith(async (id) => {
          throw retrieveError;
        })
        .build();

      // Act & Assert
      await expect(
        handler({ id: '123', ifModifiedSince: null, ifNoneMatch: null }, mockContext),
      ).rejects.toThrow('Database connection failed');
    });

    it('should handle async errors in retrieve function', async () => {
      // Arrange
      const handler = builder
        .id(z.string())
        .retrieveWith(async (id, context) => {
          await new Promise((resolve) => setTimeout(resolve, 1));
          throw new Error('Async operation failed');
        })
        .build();

      // Act & Assert
      await expect(
        handler({ id: '123', ifModifiedSince: null, ifNoneMatch: null }, mockContext),
      ).rejects.toThrow('Async operation failed');
    });
  });

  describe('method chaining', () => {
    it('should support fluent method chaining', () => {
      // Act
      const result = builder.id(z.string()).retrieveWith(async (id) => samplePatient);

      // Assert
      expect(result).toBeInstanceOf(ReadBuilder);
      expect(() => result.build()).not.toThrow();
    });

    it('should maintain type safety through method chaining', () => {
      // This test verifies that TypeScript compilation succeeds
      // and the builder maintains proper typing

      const handler = builder
        .id(z.string())
        .retrieveWith(async (id: string, context: TestContext): Promise<Patient> => {
          return samplePatient;
        })
        .build();

      expect(handler).toBeDefined();
      expect(typeof handler).toBe('function');
    });
  });

  describe('real-world scenarios', () => {
    it('should handle a complete Patient read scenario like in the docs', async () => {
      // Arrange - mimicking the quick-start.md example
      const patients: Record<string, Patient> = {
        '123': {
          resourceType: 'Patient',
          id: '123',
          name: [{ given: ['John'], family: 'Doe' }],
        },
      };

      const handler = builder
        .id(z.string())
        .retrieveWith(async (id) => {
          const patient = patients[id];
          if (!patient) {
            const error = new Error(`Patient with id ${id} not found`);
            error.name = 'ResourceNotFound';
            throw error;
          }
          return patient;
        })
        .build();

      // Act - successful case
      const result = await handler(
        { id: '123', ifModifiedSince: null, ifNoneMatch: null },
        mockContext,
      );

      // Assert
      expect(result).toEqual(patients['123']);

      // Act & Assert - not found case
      await expect(
        handler({ id: '999', ifModifiedSince: null, ifNoneMatch: null }, mockContext),
      ).rejects.toThrow('Patient with id 999 not found');
    });

    it('should handle UUID validation scenario from API docs', async () => {
      // Arrange - mimicking the api.md example
      const handler = builder
        .id(z.string().uuid('ID must be a valid UUID'))
        .retrieveWith(async (id, context) => {
          // Simulate database lookup
          if (id === '550e8400-e29b-41d4-a716-446655440000') {
            return samplePatientWithUuid;
          }
          throw new Error('Patient not found');
        })
        .build();

      // Act & Assert - valid UUID
      const result = await handler(
        {
          id: '550e8400-e29b-41d4-a716-446655440000',
          ifModifiedSince: null,
          ifNoneMatch: null,
        },
        mockContext,
      );
      expect(result).toEqual(samplePatientWithUuid);

      // Act & Assert - invalid UUID
      await expect(
        handler({ id: 'not-a-uuid', ifModifiedSince: null, ifNoneMatch: null }, mockContext),
      ).rejects.toThrow('ID must be a valid UUID');
    });

    it('should handle context usage scenario', async () => {
      // Arrange
      const contextAwareHandler = builder
        .id(z.string())
        .retrieveWith(async (id, context) => {
          // Use context in retrieval logic
          if (!context.userId) {
            throw new Error('Unauthorized');
          }
          const patient: Patient = {
            ...samplePatient,
            id,
            meta: {
              lastUpdated: new Date().toISOString(),
              tag: [{ code: 'accessed-by', display: context.userId }],
            },
          };

          return patient;
        })
        .build();

      // Act
      const result = await contextAwareHandler(
        { id: '123', ifModifiedSince: null, ifNoneMatch: null },
        mockContext,
      );

      // Assert
      expect(result.meta?.tag?.[0]?.display).toBe('test-user');
    });
  });

  describe('edge cases', () => {
    it('should handle null/undefined preprocessing gracefully', async () => {
      // Arrange
      const handler = builder
        .id(z.string(), undefined) // explicitly undefined preprocessor
        .retrieveWith(async (id) => samplePatient)
        .build();

      // Act & Assert
      await expect(
        handler({ id: '123', ifModifiedSince: null, ifNoneMatch: null }, mockContext),
      ).resolves.toEqual(samplePatient);
    });

    it('should handle very long IDs', async () => {
      // Arrange
      const longId = 'a'.repeat(1000);
      const handler = builder
        .id(z.string().max(1000))
        .retrieveWith(async (id) => ({ ...samplePatient, id }))
        .build();

      // Act
      const result = await handler(
        { id: longId, ifModifiedSince: null, ifNoneMatch: null },
        mockContext,
      );

      // Assert
      expect(result.id).toBe(longId);
    });

    it('should handle special characters in IDs', async () => {
      // Arrange
      const specialId = 'test-123_$%@';
      const handler = builder
        .id(z.string())
        .retrieveWith(async (id) => ({ ...samplePatient, id }))
        .build();

      // Act
      const result = await handler(
        { id: specialId, ifModifiedSince: null, ifNoneMatch: null },
        mockContext,
      );

      // Assert
      expect(result.id).toBe(specialId);
    });
  });

  describe('FHIR contained resources', () => {
    // Sample data for contained resources test using proper FHIR types
    const sampleOrganization: Organization = {
      resourceType: 'Organization',
      id: 'org-123',
      name: 'Acme Healthcare',
      active: true,
    };

    const sampleAccountWithContainedOrg: Account<Organization> = {
      resourceType: 'Account',
      id: 'account-456',
      status: 'active',
      name: 'Patient Account for John Doe',
      contained: [sampleOrganization],
    };

    it('should demonstrate the key improvement: Account<Organization> vs Account<unknown>', async () => {
      // BEFORE: Account with unknown contained resources (default behavior)
      const defaultAccountBuilder = new ReadBuilder<Account, TestContext>('Account');

      // AFTER: Account with type-safe Organization contained resources
      const typeSafeAccountBuilder = new ReadBuilder<Account<Organization>, TestContext>('Account');

      const typeSafeHandler = typeSafeAccountBuilder
        .id(z.string())
        .retrieveWith(async (id, context) => {
          return sampleAccountWithContainedOrg;
        })
        .build();

      // Act
      const result = await typeSafeHandler(
        { id: 'account-456', ifModifiedSince: null, ifNoneMatch: null },
        mockContext,
      );

      // Assert - Now we have full type safety with Account<Organization>
      expect(result.contained).toBeDefined();
      if (result.contained && result.contained.length > 0) {
        const containedOrg = result.contained[0];
        // ✅ TypeScript knows this is an Organization without any casting!
        expect(containedOrg.resourceType).toBe('Organization');
        expect(containedOrg.name).toBe('Acme Healthcare'); // Type-safe access to .name
        expect(containedOrg.active).toBe(true); // Type-safe access to .active

        // This demonstrates the improvement: previously contained would be unknown[]
        // Now it's properly typed as Organization[]
      }
    });

    describe('without type-safe contained resources (default behavior)', () => {
      let accountBuilder: ReadBuilder<Account, TestContext>;

      beforeEach(() => {
        accountBuilder = new ReadBuilder('Account');
      });

      it('should handle account with contained resources using unknown[] (default)', async () => {
        // Arrange
        mockContext.database.findById.mockResolvedValue(sampleAccountWithContainedOrg);

        const handler = accountBuilder
          .id(z.string())
          .retrieveWith(async (id, context) => {
            return await context.database.findById(id);
          })
          .build();

        // Act
        const result = await handler(
          { id: 'account-456', ifModifiedSince: null, ifNoneMatch: null },
          mockContext,
        );

        // Assert
        expect(result).toEqual(sampleAccountWithContainedOrg);
        expect(result.contained).toBeDefined();
        expect(result.contained?.[0]).toEqual(sampleOrganization);
        expect(mockContext.database.findById).toHaveBeenCalledWith('account-456');
      });

      it('should demonstrate the limitation: contained resources are unknown[]', async () => {
        // Arrange
        const handler = accountBuilder
          .id(z.string())
          .retrieveWith(async (id, context) => {
            return sampleAccountWithContainedOrg;
          })
          .build();

        // Act
        const result = await handler(
          { id: 'account-456', ifModifiedSince: null, ifNoneMatch: null },
          mockContext,
        );

        // Assert - TypeScript would require type assertion to access contained resource properties
        expect(result.contained).toBeDefined();
        expect(Array.isArray(result.contained)).toBe(true);

        // This demonstrates the limitation: we can't access Organization properties without casting
        if (result.contained && result.contained.length > 0) {
          const containedResource = result.contained[0] as Organization;
          expect(containedResource.resourceType).toBe('Organization');
          expect(containedResource.name).toBe('Acme Healthcare');
        }
      });
    });

    describe('with type-safe contained resources using FHIR generics', () => {
      it('should demonstrate type-safe contained resources with Account<Organization>', async () => {
        // Using the proper FHIR Account<Organization> type for type safety
        const typeSafeAccountBuilder = new ReadBuilder<Account<Organization>, TestContext>(
          'Account',
        );

        const handler = typeSafeAccountBuilder
          .id(z.string())
          .retrieveWith(async (id, context) => {
            return sampleAccountWithContainedOrg;
          })
          .build();

        // Act
        const result = await handler(
          { id: 'account-456', ifModifiedSince: null, ifNoneMatch: null },
          mockContext,
        );

        // Assert - Now we have full type safety with the proper FHIR types
        expect(result.contained).toBeDefined();
        if (result.contained && result.contained.length > 0) {
          const containedOrg = result.contained[0];
          // TypeScript now knows this is an Organization!
          expect(containedOrg.resourceType).toBe('Organization');
          expect(containedOrg.name).toBe('Acme Healthcare');
          expect(containedOrg.active).toBe(true);
        }
      });

      it('should handle validation of contained resources in retrieval', async () => {
        // Simulate validation that contained resources match expected types
        type ValidatedAccount = Account & {
          contained?: (Organization | Patient)[];
        };

        const validatedBuilder = new ReadBuilder<ValidatedAccount, TestContext>('Account');

        const handler = validatedBuilder
          .id(z.string())
          .retrieveWith(async (id, context) => {
            const account = await context.database.findById(id);

            // Simulate validation of contained resources
            if (account.contained) {
              account.contained.forEach((resource: unknown) => {
                const typedResource = resource as { resourceType: string };
                if (!['Organization', 'Patient'].includes(typedResource.resourceType)) {
                  throw new Error(`Invalid contained resource type: ${typedResource.resourceType}`);
                }
              });
            }

            return account as ValidatedAccount;
          })
          .build();

        // Arrange
        mockContext.database.findById.mockResolvedValue(sampleAccountWithContainedOrg);

        // Act
        const result = await handler(
          { id: 'account-456', ifModifiedSince: null, ifNoneMatch: null },
          mockContext,
        );

        // Assert
        expect(result).toBeDefined();
        expect(result.contained?.[0]).toEqual(sampleOrganization);

        // Test error case with invalid contained resource
        const invalidAccount = {
          ...sampleAccountWithContainedOrg,
          contained: [{ resourceType: 'InvalidResource', id: 'invalid' }],
        };
        mockContext.database.findById.mockResolvedValue(invalidAccount);

        await expect(
          handler({ id: 'invalid-account', ifModifiedSince: null, ifNoneMatch: null }, mockContext),
        ).rejects.toThrow('Invalid contained resource type: InvalidResource');
      });
    });

    describe('realistic contained resource scenarios', () => {
      it('should handle Patient with contained Organization scenario', async () => {
        // This follows the example from contained-resources.md documentation
        type PatientWithContainedOrg = Patient & {
          contained?: Organization[];
          managingOrganization?: { reference: string };
        };

        const patientBuilder = new ReadBuilder<PatientWithContainedOrg, TestContext>('Patient');

        const patientWithContainedOrg: PatientWithContainedOrg = {
          resourceType: 'Patient',
          id: 'patient-123',
          name: [{ given: ['John'], family: 'Doe' }],
          contained: [
            {
              resourceType: 'Organization',
              id: 'provider-org',
              name: 'Acme Healthcare',
              active: true,
            },
          ],
          managingOrganization: {
            reference: '#provider-org',
          },
        };

        const handler = patientBuilder
          .id(z.string())
          .retrieveWith(async (id, context) => {
            if (id === 'patient-123') {
              return patientWithContainedOrg;
            }
            throw new Error('Patient not found');
          })
          .build();

        // Act
        const result = await handler(
          { id: 'patient-123', ifModifiedSince: null, ifNoneMatch: null },
          mockContext,
        );

        // Assert
        expect(result.resourceType).toBe('Patient');
        expect(result.name?.[0]?.given?.[0]).toBe('John');
        expect(result.contained).toBeDefined();
        expect(result.contained?.[0]?.resourceType).toBe('Organization');
        expect(result.contained?.[0]?.name).toBe('Acme Healthcare');
        expect(result.managingOrganization?.reference).toBe('#provider-org');
      });

      it('should demonstrate complex contained resource processing with union types', async () => {
        // Using Account with union of contained types
        const complexAccountBuilder = new ReadBuilder<Account<Organization | Patient>, TestContext>(
          'Account',
        );

        const complexAccountData: Account<Organization | Patient> = {
          resourceType: 'Account',
          id: 'complex-account',
          status: 'active',
          name: 'Multi-contained Account',
          contained: [
            {
              resourceType: 'Organization',
              id: 'billing-org',
              name: 'Billing Department',
              active: true,
            },
            {
              resourceType: 'Patient',
              id: 'account-patient',
              name: [{ given: ['Jane'], family: 'Smith' }],
            },
          ],
        };

        const handler = complexAccountBuilder
          .id(z.string())
          .retrieveWith(async (id, context) => {
            return complexAccountData;
          })
          .build();

        // Act
        const result = await handler(
          { id: 'complex-account', ifModifiedSince: null, ifNoneMatch: null },
          mockContext,
        );

        // Assert
        expect(result.contained).toHaveLength(2);

        const organizations = result.contained?.filter(
          (r): r is Organization => r.resourceType === 'Organization',
        );
        const patients = result.contained?.filter(
          (r): r is Patient => r.resourceType === 'Patient',
        );

        expect(organizations).toHaveLength(1);
        expect(patients).toHaveLength(1);
        expect(organizations?.[0]?.name).toBe('Billing Department');
        expect(patients?.[0]?.name?.[0]?.family).toBe('Smith');
      });
    });

    describe('integration with FHIR schema patterns', () => {
      it('should work with the documented contained resource pattern', () => {
        // This test demonstrates how the ReadBuilder would work with the documented
        // pattern from contained-resources.md once proper schema integration is in place

        // Simulating the pattern:
        // const AppContained = makeContainedUnion(
        //   createOrganizationSchema(),
        //   createPatientSchema(),
        // );
        // const Account = createAccountSchema({ contained: AppContained });

        type DocumentedPattern = {
          resourceType: 'Account';
          id?: string;
          status: 'active' | 'inactive' | 'entered-in-error' | 'on-hold' | 'unknown';
          contained?: (Organization | Patient)[];
        };

        const documentedBuilder = new ReadBuilder<DocumentedPattern, TestContext>('Account');

        const handler = documentedBuilder
          .id(z.string().uuid('ID must be a valid UUID'))
          .retrieveWith(async (id, context) => {
            // Simulate the type-safe retrieval with contained resources
            const account: DocumentedPattern = {
              resourceType: 'Account',
              id,
              status: 'active',
              contained: [
                {
                  resourceType: 'Organization',
                  id: 'contained-org',
                  name: 'Healthcare Provider',
                },
              ],
            };
            return account;
          })
          .build();

        // This demonstrates that the ReadBuilder supports the typed resource structure
        expect(handler).toBeDefined();
        expect(typeof handler).toBe('function');
      });

      it('should handle error cases with contained resources', async () => {
        const builder = new ReadBuilder<Account, TestContext>('Account');

        const handler = builder
          .id(z.string())
          .retrieveWith(async (id, context) => {
            if (id === 'error-account') {
              throw new Error('Account processing failed');
            }
            return sampleAccountWithContainedOrg;
          })
          .build();

        // Test error propagation works correctly even with contained resources
        await expect(
          handler({ id: 'error-account', ifModifiedSince: null, ifNoneMatch: null }, mockContext),
        ).rejects.toThrow('Account processing failed');
      });
    });
  });
});
