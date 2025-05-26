import { z } from 'zod';
import type { OperationOutcome, OperationOutcomeIssue } from '@solarahealth/fhir-r4';
import { SortParameter } from '../codecs/search-parameters';

function mapZodCodeToFhirCode(zodCode: z.ZodIssueCode): OperationOutcomeIssue['code'] {
  switch (zodCode) {
    case 'invalid_type':
    case 'invalid_union':
    case 'invalid_union_discriminator':
    case 'invalid_arguments':
    case 'invalid_return_type':
    case 'invalid_intersection_types':
    case 'unrecognized_keys':
      return 'structure';
    case 'invalid_literal':
    case 'invalid_enum_value':
    case 'invalid_date':
    case 'invalid_string':
    case 'too_small':
    case 'too_big':
    case 'not_multiple_of':
    case 'not_finite':
      return 'value';
    case 'custom':
    default:
      // Provide a fallback for custom errors or unhandled codes
      return 'processing';
  }
}

export function convertZodErrorToFhirOperationOutcome(error: z.ZodError): OperationOutcome {
  return {
    resourceType: 'OperationOutcome',
    issue: error.errors.map(
      (e): OperationOutcomeIssue => ({
        severity: 'error',
        code: mapZodCodeToFhirCode(e.code), // Map Zod code to FHIR code
        details: {
          text: e.message,
        },
        diagnostics: `schema validation`, // Include original Zod code for diagnostics
        expression: e.path.map(String), // Include the path of the error
      }),
    ),
  };
}

export function pickFirstSearchParameterValue<T>(arr: T[][] | undefined): T | undefined {
  if (Array.isArray(arr) && arr.length > 0) {
    const orGroup = arr[0];
    if (Array.isArray(orGroup) && orGroup.length > 0) {
      return orGroup[0];
    }
  }
  return undefined;
}

export function remapSortSearchParameterFieldNames(
  sort: SortParameter,
  map: Record<string, string>,
): SortParameter {
  return sort.map((s) => ({ ...s, field: map[s.field] }));
}

export function typeGuardSortSearchParameter(
  sort: SortParameter,
  fields: ReadonlyArray<string>,
): sort is { direction: 'asc' | 'desc'; field: (typeof fields)[number] }[] {
  return sort.every((s) => typeof s.field === 'string' && fields.includes(s.field));
}
