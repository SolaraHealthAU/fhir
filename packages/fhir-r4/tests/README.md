# FHIR R4 Test Fixtures & Schema Validation

This directory contains TypeScript fixtures and validation tests generated from the official FHIR R4 example resources.

## 🔄 Auto-Generated Content

**⚠️ This directory is auto-generated. Do not edit these files manually.**

These fixtures and tests are generated by running:

```bash
npm run generate:fixtures
```

## 📁 Structure

```
tests/
├── account/
│   ├── fixture.ts       # Account example fixtures
│   └── schema.test.ts   # Zod schema validation tests
├── patient/
│   ├── fixture.ts       # Patient example fixtures
│   └── schema.test.ts   # Zod schema validation tests
└── ...                  # One directory per FHIR resource type
```

- Each FHIR resource type has its own subdirectory (e.g., `account/`, `patient/`, etc.)
- Each subdirectory contains:
  - `fixture.ts` - TypeScript fixtures with proper typing
  - `schema.test.ts` - Jest tests that validate fixtures against Zod schemas

## 🧪 What These Tests Do

Each test validates that the FHIR example fixtures conform to the corresponding Zod schema:

```typescript
it('should validate AccountExample fixture', () => {
  expect(() => createAccountSchema().parse(AccountExample)).not.toThrow();
});
```

This ensures:

- ✅ **Type Safety**: Fixtures match TypeScript interfaces
- ✅ **Runtime Validation**: Examples pass Zod schema validation
- ✅ **Data Quality**: Official FHIR examples are valid according to our schemas
- ✅ **Breaking Change Detection**: Schema changes that break existing examples are caught

## 🔧 Usage

### Running Tests

```bash
# Run all fixture validation tests
npm test tests/

# Run tests for a specific resource type
npm test tests/account/schema.test.ts
npm test tests/patient/schema.test.ts

# Run a pattern of tests
npm test tests/*/schema.test.ts
```

### Using Fixtures in Your Code

```typescript
import { AccountExample, AccountExampleWithGuarantor } from './tests/account/fixture';
import { PatientExample } from './tests/patient/fixture';

// Use in tests
const testAccount = AccountExample;
expect(testAccount.resourceType).toBe('Account');

// Use for development/debugging
const mockPatient = PatientExample;
console.log('Patient name:', mockPatient.name?.[0]?.given);

// Use for schema testing
import { createAccountSchema } from '../src';
expect(() => createAccountSchema().parse(AccountExample)).not.toThrow();
```

## 📝 Naming Convention

Fixture names are converted from the original JSON filenames using PascalCase:

- `account-example.json` → `AccountExample`
- `patient-example-f001-pieter.json` → `PatientExampleF001Pieter`
- `observation-example-bloodpressure.json` → `ObservationExampleBloodpressure`

## 🚫 Filtered Content

The generator automatically filters out:

- **Large files** (>100KB) to prevent memory issues during generation
- **Files without `resourceType`** property
- **Resource types without TypeScript definitions** in the source code
- **Null values** that cause TypeScript compilation errors

## ⚠️ Expected Test Failures

Some fixtures may legitimately fail validation:

1. **Edge case examples** (like `JsonEdgeCases`) that intentionally test boundary conditions
2. **Examples with invalid data** used to demonstrate error handling
3. **Examples using draft/experimental features** not yet supported

This is expected and helps identify areas where the schemas might need refinement.

## 🔗 Type Safety & Consistency

All fixtures are:

- **Strongly typed** with TypeScript interfaces imported from the source code
- **Immutable** using `as const` assertions for maximum type safety
- **Validated** against the same Zod schemas used in production
- **Consistent** with the main library's type definitions

## 🔄 Regeneration

Fixtures are regenerated whenever:

- New FHIR examples are added to the specifications
- The generator script is updated
- Schema definitions change in the source code

The generation process:

1. Scans `specifications/R4/examples/` for JSON files
2. Groups examples by `resourceType`
3. Generates TypeScript fixtures with proper imports
4. Creates validation tests for each fixture
5. Formats everything with Prettier

## 🎯 Benefits

This system provides:

- **Comprehensive testing** of schema definitions against real FHIR examples
- **Type-safe fixtures** for use in tests and development
- **Automated validation** that catches breaking changes
- **Documentation by example** showing how FHIR resources should be structured
- **Confidence** that the library works with real-world FHIR data
