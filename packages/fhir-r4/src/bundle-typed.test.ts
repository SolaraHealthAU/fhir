import { makeBundleResourceUnion } from './utils';
import { createBundleSchema } from './v4.0.1/bundle/schema';
import { createPatientSchema } from './v4.0.1/patient/schema';
import { createObservationSchema } from './v4.0.1/observation/schema';
import { createOperationOutcomeSchema } from './v4.0.1/operationoutcome/schema';
import type { z } from 'zod/v4';

describe('Typed Bundle Schema', () => {
  describe('with makeBundleResourceUnion', () => {
    it('should create type-safe bundle with specific resource types', () => {
      const BundleResources = makeBundleResourceUnion(
        createPatientSchema(),
        createObservationSchema(),
      );

      const Bundle = createBundleSchema({
        resource: BundleResources,
      });

      const validBundle = {
        resourceType: 'Bundle' as const,
        type: 'collection' as const,
        entry: [
          {
            resource: {
              resourceType: 'Patient' as const,
              id: 'patient-1',
              name: [{ given: ['John'], family: 'Doe' }],
            },
          },
          {
            resource: {
              resourceType: 'Observation' as const,
              id: 'obs-1',
              status: 'final' as const,
              code: { text: 'Test Observation' },
            },
          },
        ],
      };

      const result = Bundle.safeParse(validBundle);
      expect(result.success).toBe(true);

      if (result.success) {
        // TypeScript should know the resource types
        const firstResource = result.data.entry?.[0]?.resource;
        const secondResource = result.data.entry?.[1]?.resource;

        expect(firstResource?.resourceType).toBe('Patient');
        expect(secondResource?.resourceType).toBe('Observation');
      }
    });

    it('should reject bundles with unsupported resource types', () => {
      const BundleResources = makeBundleResourceUnion(createPatientSchema());

      const Bundle = createBundleSchema({
        resource: BundleResources,
      });

      const invalidBundle = {
        resourceType: 'Bundle' as const,
        type: 'collection' as const,
        entry: [
          {
            resource: {
              resourceType: 'Organization' as const, // Not in the union
              id: 'org-1',
              name: 'Test Organization',
            },
          },
        ],
      };

      const result = Bundle.safeParse(invalidBundle);
      expect(result.success).toBe(false);
    });

    it('should support separate resource and outcome types', () => {
      const BundleResources = makeBundleResourceUnion(
        createPatientSchema(),
        createObservationSchema(),
      );

      const BundleOutcomes = makeBundleResourceUnion(createOperationOutcomeSchema());

      const Bundle = createBundleSchema({
        resource: BundleResources,
        outcome: BundleOutcomes,
      });

      const transactionBundle = {
        resourceType: 'Bundle' as const,
        type: 'transaction-response' as const,
        entry: [
          {
            resource: {
              resourceType: 'Patient' as const,
              id: 'patient-1',
              name: [{ given: ['Jane'], family: 'Smith' }],
            },
            response: {
              status: '201 Created',
              outcome: {
                resourceType: 'OperationOutcome' as const,
                issue: [],
              },
            },
          },
        ],
      };

      const result = Bundle.safeParse(transactionBundle);
      expect(result.success).toBe(true);

      if (result.success) {
        const entry = result.data.entry?.[0];
        expect(entry?.resource?.resourceType).toBe('Patient');
        expect(entry?.response?.outcome?.resourceType).toBe('OperationOutcome');
      }
    });

    it('should work with empty entries', () => {
      const BundleResources = makeBundleResourceUnion(createPatientSchema());
      const Bundle = createBundleSchema({ resource: BundleResources });

      const emptyBundle = {
        resourceType: 'Bundle' as const,
        type: 'collection' as const,
        entry: [],
      };

      const result = Bundle.safeParse(emptyBundle);
      expect(result.success).toBe(true);
    });

    it('should work without entry array', () => {
      const BundleResources = makeBundleResourceUnion(createPatientSchema());
      const Bundle = createBundleSchema({ resource: BundleResources });

      const bundleWithoutEntries = {
        resourceType: 'Bundle' as const,
        type: 'collection' as const,
      };

      const result = Bundle.safeParse(bundleWithoutEntries);
      expect(result.success).toBe(true);
    });
  });

  describe('Bundle type inference', () => {
    it('should infer correct types for bundle resources', () => {
      const BundleResources = makeBundleResourceUnion(
        createPatientSchema(),
        createObservationSchema(),
      );

      const Bundle = createBundleSchema({
        resource: BundleResources,
      });

      type BundleType = z.infer<typeof Bundle>;
      type EntryResourceType = NonNullable<NonNullable<BundleType['entry']>[0]['resource']>;

      // This should compile without errors if types are correct
      const testResource: EntryResourceType = {
        resourceType: 'Patient',
        id: 'test',
      };

      expect(testResource.resourceType).toBe('Patient');
    });
  });
});
