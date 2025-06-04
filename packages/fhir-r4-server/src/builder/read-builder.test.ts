import * as z from 'zod';
import type { Patient } from '@solarahealth/fhir-r4';
import { ReadBuilder } from './read-builder';
import type { Context, Resource } from '../types';

// Test context interface
interface TestContext extends Context {
  userId?: string;
  database: {
    findById: jest.Mock;
  };
}

// Sample patient data
const samplePatient: Resource<'Patient'> = {
  resourceType: 'Patient',
  id: '123',
  name: [{ given: ['John'], family: 'Doe' }],
};

const samplePatientWithUuid: Resource<'Patient'> = {
  resourceType: 'Patient',
  id: '550e8400-e29b-41d4-a716-446655440000',
  name: [{ given: ['Jane'], family: 'Smith' }],
};

describe('ReadBuilder', () => {
  let builder: ReadBuilder<'Patient', TestContext>;
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
        .retrieveWith(async (id: string, context: TestContext): Promise<Resource<'Patient'>> => {
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
      const patients: Record<string, Resource<'Patient'>> = {
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
});
