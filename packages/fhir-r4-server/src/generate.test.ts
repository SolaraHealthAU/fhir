import { generate } from './generate';
import type { CapabilityStatement } from '@solarahealth/fhir-r4';

describe('generate', () => {
  describe('basic functionality', () => {
    it('should generate TypeScript code for a simple capability statement', async () => {
      const capabilityStatement: CapabilityStatement = {
        resourceType: 'CapabilityStatement',
        status: 'active',
        date: '2023-01-01',
        kind: 'instance',
        fhirVersion: '4.0.1',
        format: ['json'],
        rest: [
          {
            mode: 'server',
            resource: [
              {
                type: 'Patient',
                searchParam: [
                  { name: 'family', type: 'string' },
                  { name: 'given', type: 'string' },
                  { name: 'birthdate', type: 'date' },
                ],
              },
            ],
          },
        ],
      };

      const result = await generate(capabilityStatement);

      expect(result).toContain("import { z } from 'zod';");
      expect(result).toContain("import * as rest from '@solarahealth/fhir-r4-server';");
      expect(result).toContain(
        "import type { CapabilityStatementSearchParam } from '@solarahealth/fhir-r4';",
      );
      expect(result).toContain('const definitionPatientSearchParams =');
      expect(result).toContain('export function createPatientSearchParamsSchema()');
      expect(result).toContain('export type PatientSearchParams =');
      expect(result).toContain('"name":"family"');
      expect(result).toContain('"type":"string"');
      expect(result).toContain('"name":"given"');
      expect(result).toContain('"name":"birthdate"');
      expect(result).toContain('"type":"date"');
    });

    it('should handle multiple resource types', async () => {
      const capabilityStatement: CapabilityStatement = {
        resourceType: 'CapabilityStatement',
        status: 'active',
        date: '2023-01-01',
        kind: 'instance',
        fhirVersion: '4.0.1',
        format: ['json'],
        rest: [
          {
            mode: 'server',
            resource: [
              {
                type: 'Patient',
                searchParam: [{ name: 'family', type: 'string' }],
              },
              {
                type: 'Observation',
                searchParam: [{ name: 'code', type: 'token' }],
              },
            ],
          },
        ],
      };

      const result = await generate(capabilityStatement);

      expect(result).toContain('PatientSearchParams');
      expect(result).toContain('ObservationSearchParams');
      expect(result).toContain('createPatientSearchParamsSchema');
      expect(result).toContain('createObservationSearchParamsSchema');
    });

    it('should handle multiple rest configurations', async () => {
      const capabilityStatement: CapabilityStatement = {
        resourceType: 'CapabilityStatement',
        status: 'active',
        date: '2023-01-01',
        kind: 'instance',
        fhirVersion: '4.0.1',
        format: ['json'],
        rest: [
          {
            mode: 'server',
            resource: [
              {
                type: 'Patient',
                searchParam: [{ name: 'family', type: 'string' }],
              },
            ],
          },
          {
            mode: 'client',
            resource: [
              {
                type: 'Practitioner',
                searchParam: [{ name: 'name', type: 'string' }],
              },
            ],
          },
        ],
      };

      const result = await generate(capabilityStatement);

      expect(result).toContain('PatientSearchParams');
      expect(result).toContain('PractitionerSearchParams');
    });
  });

  describe('search parameter handling', () => {
    it('should filter out search parameters without names', async () => {
      const capabilityStatement: CapabilityStatement = {
        resourceType: 'CapabilityStatement',
        status: 'active',
        date: '2023-01-01',
        kind: 'instance',
        fhirVersion: '4.0.1',
        format: ['json'],
        rest: [
          {
            mode: 'server',
            resource: [
              {
                type: 'Patient',
                searchParam: [
                  { name: 'family', type: 'string' },
                  { type: 'string' }, // missing name (undefined)
                  { name: '', type: 'string' }, // empty name (should remain)
                  { name: 'given', type: 'string' },
                ],
              },
            ],
          },
        ],
      };

      const result = await generate(capabilityStatement);

      expect(result).toContain('"name":"family"');
      expect(result).toContain('"name":"given"');
      expect(result).toContain('"name":""'); // empty string remains after filtering
      // But undefined names should be filtered out
      expect(result).not.toContain('"name":null');
      expect(result).not.toContain('"name":undefined');

      // Should have exactly 3 parameters after filtering (family, empty, given)
      const paramCount = (result.match(/"name":/g) || []).length;
      expect(paramCount).toBe(3);
    });

    it('should default type to "special" when not provided', async () => {
      const capabilityStatement: CapabilityStatement = {
        resourceType: 'CapabilityStatement',
        status: 'active',
        date: '2023-01-01',
        kind: 'instance',
        fhirVersion: '4.0.1',
        format: ['json'],
        rest: [
          {
            mode: 'server',
            resource: [
              {
                type: 'Patient',
                searchParam: [
                  { name: 'family' }, // missing type
                  { name: 'given', type: 'string' },
                ],
              },
            ],
          },
        ],
      };

      const result = await generate(capabilityStatement);

      expect(result).toContain('"name":"family","type":"special"');
      expect(result).toContain('"name":"given","type":"string"');
    });

    it('should handle all FHIR search parameter types', async () => {
      const capabilityStatement: CapabilityStatement = {
        resourceType: 'CapabilityStatement',
        status: 'active',
        date: '2023-01-01',
        kind: 'instance',
        fhirVersion: '4.0.1',
        format: ['json'],
        rest: [
          {
            mode: 'server',
            resource: [
              {
                type: 'Patient',
                searchParam: [
                  { name: 'name', type: 'string' },
                  { name: 'birthdate', type: 'date' },
                  { name: 'gender', type: 'token' },
                  { name: 'age', type: 'number' },
                  { name: 'organization', type: 'reference' },
                  { name: 'location', type: 'composite' },
                  { name: 'phonetic', type: 'quantity' },
                  { name: 'near', type: 'uri' },
                  { name: 'custom', type: 'special' },
                ],
              },
            ],
          },
        ],
      };

      const result = await generate(capabilityStatement);

      expect(result).toContain('"type":"string"');
      expect(result).toContain('"type":"date"');
      expect(result).toContain('"type":"token"');
      expect(result).toContain('"type":"number"');
      expect(result).toContain('"type":"reference"');
      expect(result).toContain('"type":"composite"');
      expect(result).toContain('"type":"quantity"');
      expect(result).toContain('"type":"uri"');
      expect(result).toContain('"type":"special"');
    });
  });

  describe('edge cases', () => {
    it('should handle empty capability statement', async () => {
      const capabilityStatement: CapabilityStatement = {
        resourceType: 'CapabilityStatement',
        status: 'active',
        date: '2023-01-01',
        kind: 'instance',
        fhirVersion: '4.0.1',
        format: ['json'],
      };

      const result = await generate(capabilityStatement);

      // Should still include imports
      expect(result).toContain("import { z } from 'zod';");
      expect(result).toContain("import * as rest from '@solarahealth/fhir-r4-server';");
      expect(result).toContain(
        "import type { CapabilityStatementSearchParam } from '@solarahealth/fhir-r4';",
      );

      // Should not contain any generated types
      expect(result).not.toContain('SearchParams');
      expect(result).not.toContain('createSearchParamsSchema');
    });

    it('should handle empty rest array', async () => {
      const capabilityStatement: CapabilityStatement = {
        resourceType: 'CapabilityStatement',
        status: 'active',
        date: '2023-01-01',
        kind: 'instance',
        fhirVersion: '4.0.1',
        format: ['json'],
        rest: [],
      };

      const result = await generate(capabilityStatement);

      expect(result).toContain("import { z } from 'zod';");
      expect(result).not.toContain('SearchParams');
    });

    it('should handle rest with empty resource array', async () => {
      const capabilityStatement: CapabilityStatement = {
        resourceType: 'CapabilityStatement',
        status: 'active',
        date: '2023-01-01',
        kind: 'instance',
        fhirVersion: '4.0.1',
        format: ['json'],
        rest: [
          {
            mode: 'server',
            resource: [],
          },
        ],
      };

      const result = await generate(capabilityStatement);

      expect(result).toContain("import { z } from 'zod';");
      expect(result).not.toContain('SearchParams');
    });

    it('should handle resource with no search parameters', async () => {
      const capabilityStatement: CapabilityStatement = {
        resourceType: 'CapabilityStatement',
        status: 'active',
        date: '2023-01-01',
        kind: 'instance',
        fhirVersion: '4.0.1',
        format: ['json'],
        rest: [
          {
            mode: 'server',
            resource: [
              {
                type: 'Patient',
                // no searchParam property
              },
            ],
          },
        ],
      };

      const result = await generate(capabilityStatement);

      expect(result).toContain('PatientSearchParams');
      expect(result).toContain('definitionPatientSearchParams = undefined');
    });

    it('should handle resource with empty search parameters array', async () => {
      const capabilityStatement: CapabilityStatement = {
        resourceType: 'CapabilityStatement',
        status: 'active',
        date: '2023-01-01',
        kind: 'instance',
        fhirVersion: '4.0.1',
        format: ['json'],
        rest: [
          {
            mode: 'server',
            resource: [
              {
                type: 'Patient',
                searchParam: [],
              },
            ],
          },
        ],
      };

      const result = await generate(capabilityStatement);

      expect(result).toContain('PatientSearchParams');
      expect(result).toContain('definitionPatientSearchParams = []');
    });

    it('should handle special characters in resource type names', async () => {
      const capabilityStatement: CapabilityStatement = {
        resourceType: 'CapabilityStatement',
        status: 'active',
        date: '2023-01-01',
        kind: 'instance',
        fhirVersion: '4.0.1',
        format: ['json'],
        rest: [
          {
            mode: 'server',
            resource: [
              {
                type: 'Patient-Custom' as any, // TypeScript won't like this but the function should handle it
                searchParam: [{ name: 'name', type: 'string' }],
              },
            ],
          },
        ],
      };

      const result = await generate(capabilityStatement);

      expect(result).toContain('Patient-CustomSearchParams');
      expect(result).toContain('createPatient-CustomSearchParamsSchema');
    });
  });

  describe('output format validation', () => {
    it('should generate valid TypeScript syntax', async () => {
      const capabilityStatement: CapabilityStatement = {
        resourceType: 'CapabilityStatement',
        status: 'active',
        date: '2023-01-01',
        kind: 'instance',
        fhirVersion: '4.0.1',
        format: ['json'],
        rest: [
          {
            mode: 'server',
            resource: [
              {
                type: 'Patient',
                searchParam: [{ name: 'family', type: 'string' }],
              },
            ],
          },
        ],
      };

      const result = await generate(capabilityStatement);

      // Check for proper TypeScript syntax
      expect(result).toContain('as const satisfies ReadonlyArray<CapabilityStatementSearchParam>');
      expect(result).toContain('z.ZodType<PatientSearchParams>');
      expect(result).toContain('rest.codecs.createSearchParametersSchema');
      expect(result).toContain('rest.codecs.ParamsToShape');

      // Check for proper function syntax
      expect(result).toMatch(
        /export function create\w+SearchParamsSchema\(\): z\.ZodType<\w+SearchParams> \{/,
      );
      expect(result).toMatch(
        /return rest\.codecs\.createSearchParametersSchema\(definition\w+SearchParams\);/,
      );
      expect(result).toMatch(/\};/);

      // Check for proper type export
      expect(result).toMatch(
        /export type \w+SearchParams = rest\.codecs\.ParamsToShape<typeof definition\w+SearchParams>;/,
      );
    });

    it('should handle search parameter names that need JSON escaping', async () => {
      const capabilityStatement: CapabilityStatement = {
        resourceType: 'CapabilityStatement',
        status: 'active',
        date: '2023-01-01',
        kind: 'instance',
        fhirVersion: '4.0.1',
        format: ['json'],
        rest: [
          {
            mode: 'server',
            resource: [
              {
                type: 'Patient',
                searchParam: [
                  { name: 'name-with-quotes"', type: 'string' },
                  { name: 'name\\with\\backslashes', type: 'string' },
                ],
              },
            ],
          },
        ],
      };

      const result = await generate(capabilityStatement);

      // Should properly escape JSON
      expect(result).toContain('"name":"name-with-quotes\\""');
      expect(result).toContain('"name":"name\\\\with\\\\backslashes"');
    });
  });
});
