import { makeBundleResourceUnion, makeContainedUnion, makeResourceList } from './utils';
import { createPatientSchema } from './v4.0.1/patient/schema';
import { createObservationSchema } from './v4.0.1/observation/schema';
import { createOrganizationSchema } from './v4.0.1/organization/schema';

describe('Utils', () => {
  describe('makeBundleResourceUnion', () => {
    it('should create a discriminated union for bundle resources', () => {
      const bundleResources = makeBundleResourceUnion(
        createPatientSchema(),
        createObservationSchema(),
        createOrganizationSchema(),
      );

      // Test Patient
      const patientResult = bundleResources.safeParse({
        resourceType: 'Patient',
        id: 'patient-1',
        name: [{ given: ['John'], family: 'Doe' }],
      });
      expect(patientResult.success).toBe(true);

      // Test Observation
      const observationResult = bundleResources.safeParse({
        resourceType: 'Observation',
        id: 'obs-1',
        status: 'final',
        code: { text: 'Test' },
      });
      expect(observationResult.success).toBe(true);

      // Test Organization
      const organizationResult = bundleResources.safeParse({
        resourceType: 'Organization',
        id: 'org-1',
        name: 'Test Hospital',
      });
      expect(organizationResult.success).toBe(true);

      // Test invalid resource
      const invalidResult = bundleResources.safeParse({
        resourceType: 'InvalidResource',
        id: 'invalid-1',
      });
      expect(invalidResult.success).toBe(false);
    });

    it('should be equivalent to makeResourceList', () => {
      const bundleUnion = makeBundleResourceUnion(createPatientSchema(), createObservationSchema());
      const resourceList = makeResourceList(createPatientSchema(), createObservationSchema());

      const testData = {
        resourceType: 'Patient',
        id: 'patient-1',
        name: [{ given: ['John'], family: 'Doe' }],
      };

      const bundleResult = bundleUnion.safeParse(testData);
      const listResult = resourceList.safeParse(testData);

      expect(bundleResult.success).toBe(listResult.success);
      expect(bundleResult.data).toEqual(listResult.data);
    });
  });

  describe('makeContainedUnion', () => {
    it('should create a discriminated union for contained resources', () => {
      const containedResources = makeContainedUnion(
        createOrganizationSchema(),
        createPatientSchema(),
      );

      const result = containedResources.safeParse({
        resourceType: 'Organization',
        id: 'org-1',
        name: 'Test Organization',
      });

      expect(result.success).toBe(true);
    });
  });

  describe('makeResourceList', () => {
    it('should create a discriminated union for any resources', () => {
      const resourceList = makeResourceList(createPatientSchema(), createObservationSchema());

      const result = resourceList.safeParse({
        resourceType: 'Patient',
        id: 'patient-1',
        name: [{ given: ['Jane'], family: 'Smith' }],
      });

      expect(result.success).toBe(true);
    });
  });
});
