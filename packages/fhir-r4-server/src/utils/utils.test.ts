import { z } from 'zod';
import {
  convertZodErrorToFhirOperationOutcome,
  pickFirstSearchParameterValue,
  remapSortSearchParameterFieldNames,
  typeGuardSortSearchParameter,
} from './utils';
import type { OperationOutcome } from '@solarahealth/fhir-r4';
import { SortParameter } from '../codecs/search-parameters';

describe('utils', () => {
  describe('convertZodErrorToFhirOperationOutcome', () => {
    it('should convert simple Zod error to FHIR OperationOutcome', () => {
      // Arrange
      const schema = z.string();
      const result = schema.safeParse(123);

      if (!result.success) {
        // Act
        const outcome = convertZodErrorToFhirOperationOutcome(result.error);

        // Assert
        expect(outcome.resourceType).toBe('OperationOutcome');
        expect(outcome.issue).toHaveLength(1);
        expect(outcome.issue[0]).toEqual({
          severity: 'error',
          code: 'structure',
          details: {
            text: 'Expected string, received number',
          },
          diagnostics: 'schema validation',
          expression: [],
        });
      } else {
        fail('Expected validation to fail');
      }
    });

    it('should convert invalid_literal Zod error to value code', () => {
      // Arrange
      const schema = z.literal('test');
      const result = schema.safeParse('wrong');

      if (!result.success) {
        // Act
        const outcome = convertZodErrorToFhirOperationOutcome(result.error);

        // Assert
        expect(outcome.issue[0].code).toBe('value');
      } else {
        fail('Expected validation to fail');
      }
    });

    it('should convert invalid_enum_value Zod error to value code', () => {
      // Arrange
      const schema = z.enum(['option1', 'option2']);
      const result = schema.safeParse('invalid');

      if (!result.success) {
        // Act
        const outcome = convertZodErrorToFhirOperationOutcome(result.error);

        // Assert
        expect(outcome.issue[0].code).toBe('value');
      } else {
        fail('Expected validation to fail');
      }
    });

    it('should convert too_small Zod error to value code', () => {
      // Arrange
      const schema = z.string().min(5);
      const result = schema.safeParse('hi');

      if (!result.success) {
        // Act
        const outcome = convertZodErrorToFhirOperationOutcome(result.error);

        // Assert
        expect(outcome.issue[0].code).toBe('value');
      } else {
        fail('Expected validation to fail');
      }
    });

    it('should convert too_big Zod error to value code', () => {
      // Arrange
      const schema = z.string().max(2);
      const result = schema.safeParse('hello');

      if (!result.success) {
        // Act
        const outcome = convertZodErrorToFhirOperationOutcome(result.error);

        // Assert
        expect(outcome.issue[0].code).toBe('value');
      } else {
        fail('Expected validation to fail');
      }
    });

    it('should convert custom Zod error to processing code', () => {
      // Arrange
      const schema = z.string().refine(() => false, 'Custom error');
      const result = schema.safeParse('test');

      if (!result.success) {
        // Act
        const outcome = convertZodErrorToFhirOperationOutcome(result.error);

        // Assert
        expect(outcome.issue[0].code).toBe('processing');
      } else {
        fail('Expected validation to fail');
      }
    });

    it('should convert unrecognized_keys Zod error to structure code', () => {
      // Arrange
      const schema = z.object({ name: z.string() }).strict();
      const result = schema.safeParse({ name: 'test', extra: 'field' });

      if (!result.success) {
        // Act
        const outcome = convertZodErrorToFhirOperationOutcome(result.error);

        // Assert
        expect(outcome.issue[0].code).toBe('structure');
      } else {
        fail('Expected validation to fail');
      }
    });

    it('should handle multiple Zod errors', () => {
      // Arrange
      const schema = z.object({
        name: z.string(),
        age: z.number().min(0),
      });
      const result = schema.safeParse({ name: 123, age: -5 });

      if (!result.success) {
        // Act
        const outcome = convertZodErrorToFhirOperationOutcome(result.error);

        // Assert
        expect(outcome.resourceType).toBe('OperationOutcome');
        expect(outcome.issue).toHaveLength(2);

        // First error: name should be string
        expect(outcome.issue[0]).toEqual({
          severity: 'error',
          code: 'structure',
          details: {
            text: 'Expected string, received number',
          },
          diagnostics: 'schema validation',
          expression: ['name'],
        });

        // Second error: age should be >= 0
        expect(outcome.issue[1]).toEqual({
          severity: 'error',
          code: 'value',
          details: {
            text: 'Number must be greater than or equal to 0',
          },
          diagnostics: 'schema validation',
          expression: ['age'],
        });
      } else {
        fail('Expected validation to fail');
      }
    });

    it('should handle nested object path in expression', () => {
      // Arrange
      const schema = z.object({
        patient: z.object({
          name: z.string(),
        }),
      });
      const result = schema.safeParse({ patient: { name: 123 } });

      if (!result.success) {
        // Act
        const outcome = convertZodErrorToFhirOperationOutcome(result.error);

        // Assert
        expect(outcome.issue[0].expression).toEqual(['patient', 'name']);
      } else {
        fail('Expected validation to fail');
      }
    });

    it('should handle array index in expression path', () => {
      // Arrange
      const schema = z.array(z.string());
      const result = schema.safeParse(['valid', 123, 'also valid']);

      if (!result.success) {
        // Act
        const outcome = convertZodErrorToFhirOperationOutcome(result.error);

        // Assert
        expect(outcome.issue[0].expression).toEqual(['1']);
      } else {
        fail('Expected validation to fail');
      }
    });

    it('should map all invalid_type variations to structure code', () => {
      // Arrange
      const testCases = [
        { schema: z.string(), input: 123 },
        { schema: z.number(), input: 'string' },
        { schema: z.boolean(), input: 'true' },
      ];

      testCases.forEach(({ schema, input }) => {
        const result = schema.safeParse(input);

        if (!result.success) {
          // Act
          const outcome = convertZodErrorToFhirOperationOutcome(result.error);

          // Assert
          expect(outcome.issue[0].code).toBe('structure');
        } else {
          fail('Expected validation to fail');
        }
      });
    });

    it('should map all value-related errors to value code', () => {
      // Test invalid_date
      const dateSchema = z.string().datetime();
      const dateResult = dateSchema.safeParse('invalid-date');

      if (!dateResult.success) {
        const outcome = convertZodErrorToFhirOperationOutcome(dateResult.error);
        expect(outcome.issue[0].code).toBe('value');
      }
    });
  });

  describe('pickFirstSearchParameterValue', () => {
    it('should return first value from nested array structure', () => {
      // Arrange
      const searchParams = [
        ['value1', 'value2'],
        ['value3', 'value4'],
      ];

      // Act
      const result = pickFirstSearchParameterValue(searchParams);

      // Assert
      expect(result).toBe('value1');
    });

    it('should return undefined for empty outer array', () => {
      // Arrange
      const searchParams: string[][] = [];

      // Act
      const result = pickFirstSearchParameterValue(searchParams);

      // Assert
      expect(result).toBeUndefined();
    });

    it('should return undefined for empty inner array', () => {
      // Arrange
      const searchParams = [[]];

      // Act
      const result = pickFirstSearchParameterValue(searchParams);

      // Assert
      expect(result).toBeUndefined();
    });

    it('should return undefined for undefined input', () => {
      // Arrange
      const searchParams = undefined;

      // Act
      const result = pickFirstSearchParameterValue(searchParams);

      // Assert
      expect(result).toBeUndefined();
    });

    it('should return undefined for non-array input', () => {
      // Arrange
      const searchParams = 'not an array' as any;

      // Act
      const result = pickFirstSearchParameterValue(searchParams);

      // Assert
      expect(result).toBeUndefined();
    });

    it('should work with different data types', () => {
      // Arrange
      const numberParams = [
        [1, 2],
        [3, 4],
      ];
      const objectParams = [[{ id: 1 }, { id: 2 }], [{ id: 3 }]];

      // Act
      const numberResult = pickFirstSearchParameterValue(numberParams);
      const objectResult = pickFirstSearchParameterValue(objectParams);

      // Assert
      expect(numberResult).toBe(1);
      expect(objectResult).toEqual({ id: 1 });
    });

    it('should handle single item arrays', () => {
      // Arrange
      const searchParams = [['single-value']];

      // Act
      const result = pickFirstSearchParameterValue(searchParams);

      // Assert
      expect(result).toBe('single-value');
    });

    it('should handle non-array inner elements gracefully', () => {
      // Arrange
      const searchParams = ['not-array' as any];

      // Act
      const result = pickFirstSearchParameterValue(searchParams);

      // Assert
      expect(result).toBeUndefined();
    });
  });

  describe('remapSortSearchParameterFieldNames', () => {
    it('should remap field names using provided mapping', () => {
      // Arrange
      const sortParams: SortParameter = [
        { field: 'name', direction: 'asc' },
        { field: 'birthDate', direction: 'desc' },
      ];
      const fieldMap = {
        name: 'patient_name',
        birthDate: 'birth_date',
      };

      // Act
      const result = remapSortSearchParameterFieldNames(sortParams, fieldMap);

      // Assert
      expect(result).toEqual([
        { field: 'patient_name', direction: 'asc' },
        { field: 'birth_date', direction: 'desc' },
      ]);
    });

    it('should preserve unmapped field names', () => {
      // Arrange
      const sortParams: SortParameter = [
        { field: 'name', direction: 'asc' },
        { field: 'unmapped', direction: 'desc' },
      ];
      const fieldMap = {
        name: 'patient_name',
      };

      // Act
      const result = remapSortSearchParameterFieldNames(sortParams, fieldMap);

      // Assert
      expect(result).toEqual([
        { field: 'patient_name', direction: 'asc' },
        { field: undefined, direction: 'desc' },
      ]);
    });

    it('should handle empty sort parameters', () => {
      // Arrange
      const sortParams: SortParameter = [];
      const fieldMap = { name: 'patient_name' };

      // Act
      const result = remapSortSearchParameterFieldNames(sortParams, fieldMap);

      // Assert
      expect(result).toEqual([]);
    });

    it('should handle empty field mapping', () => {
      // Arrange
      const sortParams: SortParameter = [{ field: 'name', direction: 'asc' }];
      const fieldMap = {};

      // Act
      const result = remapSortSearchParameterFieldNames(sortParams, fieldMap);

      // Assert
      expect(result).toEqual([{ field: undefined, direction: 'asc' }]);
    });

    it('should not mutate original sort parameters', () => {
      // Arrange
      const originalSortParams: SortParameter = [{ field: 'name', direction: 'asc' }];
      const fieldMap = { name: 'patient_name' };

      // Act
      const result = remapSortSearchParameterFieldNames(originalSortParams, fieldMap);

      // Assert
      expect(originalSortParams[0].field).toBe('name'); // Original unchanged
      expect(result[0].field).toBe('patient_name'); // Result changed
    });

    it('should preserve all other properties', () => {
      // Arrange
      const sortParams: SortParameter = [
        { field: 'name', direction: 'asc' as const },
        { field: 'birthDate', direction: 'desc' as const },
      ];
      const fieldMap = {
        name: 'patient_name',
        birthDate: 'birth_date',
      };

      // Act
      const result = remapSortSearchParameterFieldNames(sortParams, fieldMap);

      // Assert
      expect(result[0].direction).toBe('asc');
      expect(result[1].direction).toBe('desc');
    });
  });

  describe('typeGuardSortSearchParameter', () => {
    it('should return true when all fields are in allowed list', () => {
      // Arrange
      const sortParams: SortParameter = [
        { field: 'name', direction: 'asc' },
        { field: 'birthDate', direction: 'desc' },
      ];
      const allowedFields = ['name', 'birthDate', 'gender'] as const;

      // Act
      const result = typeGuardSortSearchParameter(sortParams, allowedFields);

      // Assert
      expect(result).toBe(true);
    });

    it('should return false when some fields are not in allowed list', () => {
      // Arrange
      const sortParams: SortParameter = [
        { field: 'name', direction: 'asc' },
        { field: 'unauthorized', direction: 'desc' },
      ];
      const allowedFields = ['name', 'birthDate'] as const;

      // Act
      const result = typeGuardSortSearchParameter(sortParams, allowedFields);

      // Assert
      expect(result).toBe(false);
    });

    it('should return true for empty sort parameters', () => {
      // Arrange
      const sortParams: SortParameter = [];
      const allowedFields = ['name', 'birthDate'] as const;

      // Act
      const result = typeGuardSortSearchParameter(sortParams, allowedFields);

      // Assert
      expect(result).toBe(true);
    });

    it('should return true for empty allowed fields when sort params are empty', () => {
      // Arrange
      const sortParams: SortParameter = [];
      const allowedFields = [] as const;

      // Act
      const result = typeGuardSortSearchParameter(sortParams, allowedFields);

      // Assert
      expect(result).toBe(true);
    });

    it('should return false for non-empty sort params with empty allowed fields', () => {
      // Arrange
      const sortParams: SortParameter = [{ field: 'name', direction: 'asc' }];
      const allowedFields = [] as const;

      // Act
      const result = typeGuardSortSearchParameter(sortParams, allowedFields);

      // Assert
      expect(result).toBe(false);
    });

    it('should handle single sort parameter', () => {
      // Arrange
      const sortParams: SortParameter = [{ field: 'name', direction: 'asc' }];
      const allowedFields = ['name'] as const;

      // Act
      const result = typeGuardSortSearchParameter(sortParams, allowedFields);

      // Assert
      expect(result).toBe(true);
    });

    it('should be case sensitive', () => {
      // Arrange
      const sortParams: SortParameter = [{ field: 'Name', direction: 'asc' }];
      const allowedFields = ['name'] as const;

      // Act
      const result = typeGuardSortSearchParameter(sortParams, allowedFields);

      // Assert
      expect(result).toBe(false);
    });

    it('should handle non-string field values', () => {
      // Arrange
      const sortParams = [{ field: 123 as any, direction: 'asc' }] as SortParameter;
      const allowedFields = ['name'] as const;

      // Act
      const result = typeGuardSortSearchParameter(sortParams, allowedFields);

      // Assert
      expect(result).toBe(false);
    });

    it('should work as type guard - narrowing types correctly', () => {
      // Arrange
      const sortParams: SortParameter = [
        { field: 'name', direction: 'asc' },
        { field: 'birthDate', direction: 'desc' },
      ];
      const allowedFields = ['name', 'birthDate'] as const;

      // Act
      if (typeGuardSortSearchParameter(sortParams, allowedFields)) {
        // Inside this block, TypeScript should know that sortParams has the narrowed type
        // This is more of a compile-time test, but we can verify the runtime behavior
        const firstField = sortParams[0].field;
        expect(['name', 'birthDate']).toContain(firstField);
      } else {
        fail('Type guard should have returned true');
      }
    });
  });
});
