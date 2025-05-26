# FHIR R4

Set of packages for managing HL7 FHIR R4 types

- Typescript type definitions
- ZOD based codecs

## Installation

```shell
npm i @solarahealth/fhir-r4
```

## Basic Use

```typescript
import { createAccountSchema, type Account } from '@solarahealth/fhir-r4';

// Leverage the FHIR Account Resource type
const account: Account = {
  resourceType: 'Account',
  id: '123',
  status: 'active',
};

// Use codecs for object validation
const accountSchema = createAccountSchema();
const result = accountSchema.safeParse(account);
// result.success = true...
```

## Contributing

You can modify the generation via `scripts/generate/R4/generate.ts`.

Download the specification, and generate the library.

```shell
npm run generate
```

Test the output

```shell
npm run ci
```

Build the output

```shell
npm run build
```
