# Search Parameters

The `@fhir-r4-server` library provides a powerful feature that can create Zod schema codecs based on your search parameter definitions. This guide walks you through defining search parameters near your resource builders and generating schemas directly for full type safety.

## Overview

You can define search parameters as constants and generate schemas directly from them, providing:

- Zod schema creators for each resource type's search parameters
- TypeScript type definitions for the search parameters
- Full type safety without complex build steps

## Search Parameter Output Shapes

The generated schemas parse search parameters into structured objects. Each parameter type has a specific shape, and most parameters use a double-array structure `T[][]` to support FHIR's AND/OR logic (multiple parameter values are OR'd within each array, multiple arrays are AND'd together).

| Parameter Type | Output Shape                  | Example Input                      | Parsed Output                                                         |
| -------------- | ----------------------------- | ---------------------------------- | --------------------------------------------------------------------- |
| `number`       | `NumberParameterValue[][]`    | `"123"` or `"gt100"`               | `[[{ direction: 'eq', value: 123, significantFigures: 3 }]]`          |
| `date`         | `DateParameterValue[][]`      | `"2020-01-01"` or `"ge2020-01-01"` | `[[{ prefix: 'eq', date: Date('2020-01-01'), raw: '2020-01-01' }]]`   |
| `token`        | `TokenParameterValue[][]`     | `"code"` or `"system\|code"`       | `[[{ codingCodeOrIdentifierValue: 'code' }]]`                         |
| `reference`    | `ReferenceParameterValue[][]` | `"123"` or `"Patient/123"`         | `[[{ id: '123' }]]` or `[[{ type: 'Patient', id: '123' }]]`           |
| `quantity`     | `QuantityParameterValue[][]`  | `"5.4\|mg"`                        | `[[{ prefix: 'eq', value: 5.4, significantFigures: 2, code: 'mg' }]]` |
| `string`       | `StringParameterValue[][]`    | `"john"`                           | `[[{ op: 'startsWith', value: 'john' }]]`                             |
| `uri`          | `UriParameterValue[][]`       | `"http://example.com"`             | `[[{ op: 'eq', value: 'http://example.com' }]]`                       |
| `special`      | `SpecialParameterValue[][]`   | `"anything"`                       | `[['anything']]`                                                      |

### Special Parameters (Non-double-array)

| Parameter Name | Output Shape            | Example Input       | Parsed Output                                                                      |
| -------------- | ----------------------- | ------------------- | ---------------------------------------------------------------------------------- |
| `_id`          | `string[] \| undefined` | `"123,456"`         | `['123', '456']`                                                                   |
| `_count`       | `number \| undefined`   | `"20"`              | `20`                                                                               |
| `_sort`        | `SortParameter`         | `"name,-birthdate"` | `[{ direction: 'asc', field: 'name' }, { direction: 'desc', field: 'birthdate' }]` |

### Parameter Value Type Definitions

```typescript
type NumberParameterValue = {
  direction: 'eq' | 'lt' | 'le' | 'gt' | 'ge' | 'ne';
  value: number;
  significantFigures: number;
};

type DateParameterValue = {
  prefix: 'eq' | 'ne' | 'lt' | 'gt' | 'ge' | 'le' | 'sa' | 'eb' | 'ap';
  date: Date;
  raw: string;
};

type TokenParameterValue = {
  codingOrIdentifierSystem?: string;
  codingCodeOrIdentifierValue?: string;
};

type ReferenceParameterValue =
  | { id: string; type?: undefined }
  | { id: string; type: string }
  | { url: string };

type QuantityParameterValue = {
  prefix: 'eq' | 'lt' | 'le' | 'gt' | 'ge' | 'ne' | 'sa' | 'eb' | 'ap';
  value: number;
  significantFigures: number;
  system?: string;
  code?: string;
};

type StringParameterValue = {
  op: 'startsWith' | 'contains' | 'exact';
  value: string;
};

type UriParameterValue = {
  op: 'eq' | 'above' | 'below';
  value: string;
};

type SortParameter = Array<{
  direction: 'asc' | 'desc';
  field: string;
}>;
```

## Step 1: Define Search Parameters as Constants

Create reusable search parameter definitions close to your resource builders:

```typescript
// src/resources/patient-search-params.ts

import * as rest from '@solarahealth/fhir-r4-server';
import type { CapabilityStatementSearchParam } from '@solarahealth/fhir-r4';

export const patientSearchParams = [
  {
    name: 'identifier',
    documentation: 'A patient identifier',
    type: 'token',
  },
  {
    name: 'name',
    documentation: 'A server defined search that matches name fields',
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
    name: 'email',
    documentation: 'Search for patients by email address',
    type: 'token',
  },
  {
    name: 'phone',
    documentation: 'Search for patients by phone number',
    type: 'token',
  },
  {
    name: '_count',
    documentation: 'Number of results to return',
    type: 'number',
  },
  {
    name: '_sort',
    documentation:
      "Allowed sort fields include meta.lastUpdated. A leading '-' indicates descending order.",
    type: 'string',
  },
] as const satisfies ReadonlyArray<CapabilityStatementSearchParam>;

// Generate the schema directly
export const patientSearchSchema = rest.codecs.createSearchParametersSchema(patientSearchParams);
export type PatientSearchParams = rest.codecs.ParamsToShape<typeof patientSearchParams>;
```

## Step 2: Use in Resource Builder

Import and use the search parameters and schema directly in your resource definition:

```typescript
// src/resources/patient.ts

import * as rest from '@solarahealth/fhir-r4-server';
import { Context } from '../types';
import { patientSearchParams, patientSearchSchema } from './patient-search-params';

const patientResource = rest
  .resource('Patient')
  .searchParams(patientSearchParams)
  .search((builder) =>
    builder.params(patientSearchSchema).handler(async (ctx: Context, params) => {
      // params is fully typed based on patientSearchParams
      const { name, email, birthdate, identifier, _count, _sort } = params;

      // Helper function to extract simple values from double arrays
      const getFirstValue = <T>(param: T[][] | undefined): T | undefined => {
        return param?.[0]?.[0];
      };

      // Helper function to extract all values for OR queries
      const getAllValues = <T>(param: T[][] | undefined): T[] => {
        return param?.flat() || [];
      };

      // Working with string parameters (name search)
      const nameQuery = getFirstValue(name);
      if (nameQuery) {
        console.log(`Searching for names that ${nameQuery.op} "${nameQuery.value}"`);
        // nameQuery.op could be 'startsWith', 'contains', or 'exact'
      }

      // Working with token parameters (email search)
      const emailQuery = getFirstValue(email);
      if (emailQuery) {
        if (emailQuery.codingOrIdentifierSystem && emailQuery.codingCodeOrIdentifierValue) {
          console.log(
            `Email system: ${emailQuery.codingOrIdentifierSystem}, value: ${emailQuery.codingCodeOrIdentifierValue}`,
          );
        } else if (emailQuery.codingCodeOrIdentifierValue) {
          console.log(`Email: ${emailQuery.codingCodeOrIdentifierValue}`);
        }
      }

      // Working with date parameters (birthdate search)
      const birthdateQuery = getFirstValue(birthdate);
      if (birthdateQuery) {
        console.log(`Birthdate ${birthdateQuery.prefix} ${birthdateQuery.date.toISOString()}`);
        // birthdateQuery.prefix could be 'eq', 'lt', 'gt', etc.
      }

      // Working with multiple values (OR logic within AND groups)
      const allIdentifiers = getAllValues(identifier);
      if (allIdentifiers.length > 0) {
        console.log('Searching for any of these identifiers:', allIdentifiers);
      }

      // Working with sort parameters
      if (_sort) {
        const orderBy = _sort.map((sort) => ({
          [sort.field]: sort.direction,
        }));
        console.log('Sorting by:', orderBy);
      }

      // Implement your search logic here
      const results = await ctx.db.patient.findMany({
        where: {
          // String search example
          ...(nameQuery && {
            name:
              nameQuery.op === 'exact'
                ? { equals: nameQuery.value }
                : nameQuery.op === 'contains'
                  ? { contains: nameQuery.value }
                  : { startsWith: nameQuery.value },
          }),
          // Token search example
          ...(emailQuery?.codingCodeOrIdentifierValue && {
            email: emailQuery.codingCodeOrIdentifierValue,
          }),
          // Date search example
          ...(birthdateQuery && {
            birthDate:
              birthdateQuery.prefix === 'eq'
                ? { equals: birthdateQuery.date }
                : birthdateQuery.prefix === 'gt'
                  ? { gt: birthdateQuery.date }
                  : birthdateQuery.prefix === 'lt'
                    ? { lt: birthdateQuery.date }
                    : { gte: birthdateQuery.date }, // fallback
          }),
          // Multiple identifiers (OR logic)
          ...(allIdentifiers.length > 0 && {
            OR: allIdentifiers.map((id) => ({
              identifier: {
                some: {
                  ...(id.codingOrIdentifierSystem && { system: id.codingOrIdentifierSystem }),
                  ...(id.codingCodeOrIdentifierValue && {
                    value: id.codingCodeOrIdentifierValue,
                  }),
                },
              },
            })),
          }),
        },
        take: _count || 20,
        orderBy: _sort?.map((sort) => ({ [sort.field]: sort.direction })) || [
          { lastUpdated: 'desc' },
        ],
      });

      return {
        resourceType: 'Bundle',
        type: 'searchset',
        total: results.length,
        entry: results.map((patient) => ({
          resource: patient,
        })),
      };
    }),
  );

export default patientResource;
```

## Step 3: Build Capability Statement

Use the same search parameter definitions in your capability statement:

```typescript
// src/capability-statement.ts

import * as rest from '@solarahealth/fhir-r4-server';
import { Context } from './types';
import patientResource from './resources/patient';
import observationResource from './resources/observation';

export const capabilityStatement: rest.CapabilityStatement<Context> = {
  name: 'My FHIR Server',
  resourceType: 'CapabilityStatement',
  status: 'active',
  date: new Date().toISOString(),
  kind: 'instance',
  fhirVersion: '4.0.1',
  format: ['json'],
  rest: [
    {
      mode: 'server',
      resource: [
        patientResource, // Uses patientSearchParams internally
        observationResource,
      ],
    },
  ],
};
```

## Best Practices

### 1. Working with Double Arrays (AND/OR Logic)

Most search parameters use the double-array structure `T[][]` to support FHIR's complex query logic:

```typescript
// Helper functions for common patterns
function getFirstValue<T>(param: T[][] | undefined): T | undefined {
  return param?.[0]?.[0];
}

function getAllValues<T>(param: T[][] | undefined): T[] {
  return param?.flat() || [];
}

function hasAnyValue<T>(param: T[][] | undefined): boolean {
  return (param?.length || 0) > 0 && (param[0]?.length || 0) > 0;
}
```

### 2. Type-Safe Parameter Access

```typescript
// ✅ TypeScript will catch typos and provide autocomplete
if (params.name) {
  const nameSearch = params.name[0][0]; // StringParameterValue
  console.log(nameSearch.op, nameSearch.value); // 'startsWith' | 'contains' | 'exact', string
}

// ✅ Special parameters have simpler types
if (params._count) {
  const count: number = params._count;
}

if (params._sort) {
  params._sort.forEach((sort) => {
    console.log(sort.field, sort.direction); // string, 'asc' | 'desc'
  });
}
```

### 3. Organize Search Parameters

Keep search parameter definitions close to your resource builders for better maintainability:

```typescript
// File structure
src/
  resources/
    patient/
      patient-search-params.ts    # Search parameter definitions
      patient-resource.ts         # Resource builder using the params
    observation/
      observation-search-params.ts
      observation-resource.ts
```

### 4. Multiple Resource Types

Each resource gets its own search parameter definitions and schemas:

```typescript
// src/resources/observation/observation-search-params.ts
export const observationSearchParams = [
  {
    name: 'subject',
    documentation: 'The subject that the observation is about',
    type: 'reference',
  },
  {
    name: 'code',
    documentation: 'The code of the observation type',
    type: 'token',
  },
  // ... more parameters
] as const satisfies ReadonlyArray<CapabilityStatementSearchParam>;

export const observationSearchSchema =
  rest.codecs.createSearchParametersSchema(observationSearchParams);
export type ObservationSearchParams = rest.codecs.ParamsToShape<typeof observationSearchParams>;
```

### 5. Custom Search Parameter Types

You can define custom search parameter types beyond the standard FHIR types:

```typescript
{
  name: 'custom-param',
  documentation: 'A custom search parameter',
  type: 'special', // Will be treated as SpecialParameterValue[][] (unknown[][])
}
```

### 6. Reusable Parameter Definitions

Create reusable parameter definitions for common patterns:

```typescript
// src/common/standard-search-params.ts

export const standardCursorPaginationSearchParams = [
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

// Use in resource definitions
export const patientSearchParams = [
  ...standardCursorPaginationSearchParams,
  {
    name: 'name',
    documentation: 'Patient name',
    type: 'string',
  },
  // ... other patient-specific params
] as const satisfies ReadonlyArray<CapabilityStatementSearchParam>;
```

## Troubleshooting

### TypeScript Errors

1. **Missing imports**: Ensure you've imported the search parameter types correctly
2. **Type mismatches**: Verify your search parameter types match your implementation
3. **Double array confusion**: Remember most parameters are `T[][]`, use helper functions to extract values

### Runtime Issues

1. **Parameter validation**: The schemas will validate incoming search parameters at runtime
2. **Empty arrays**: Check for empty arrays when accessing parameter values, use optional chaining

### Working with Complex Queries

```typescript
// Example: name=john&name=jane (OR logic)
// Results in: name = [['john'], ['jane']]
const nameValues = getAllValues(params.name); // ['john', 'jane']

// Example: name=john,jane (AND logic - multiple values in one parameter)
// Results in: name = [['john', 'jane']]
const nameGroup = params.name?.[0]; // ['john', 'jane']

// Example: Complex query with modifiers
// name:exact=john&name:contains=doe
// Results in separate parameters that get merged by the base name
```

This approach ensures that your search parameters are always in sync with your capability statement and provides excellent developer experience with full type safety throughout your FHIR server implementation.
