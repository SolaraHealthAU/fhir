# Mapping Objects to FHIR Objects

This guide covers best practices for transforming your existing database records and API responses into standardized FHIR R4 resources using the `@solarahealth/fhir-r4` library.

## Overview

When building healthcare applications, you often have existing data structures that need to be converted to FHIR format for interoperability. The `@solarahealth/fhir-r4` library provides both TypeScript interfaces and Zod schemas to ensure type safety and runtime validation during this mapping process.

### Key Benefits

- **Type Safety**: TypeScript interfaces ensure compile-time correctness
- **Runtime Validation**: Zod schemas catch data quality issues at runtime
- **Standardization**: Ensures your data conforms to FHIR R4 specifications
- **Interoperability**: Enables seamless integration with other FHIR-compliant systems

## Core Concepts

### 1. TypeScript Interfaces

The library provides complete TypeScript interfaces for all FHIR resources:

```typescript
import type { Patient, Observation, Practitioner } from '@solarahealth/fhir-r4';

// These interfaces provide compile-time type checking
const patient: Patient = {
  resourceType: 'Patient',
  id: 'patient-123',
  // TypeScript will enforce proper structure
};
```

### 2. Zod Schemas for Validation

Runtime validation ensures data quality:

```typescript
import { createPatientSchema, createObservationSchema } from '@solarahealth/fhir-r4';

const patientSchema = createPatientSchema();
const observationSchema = createObservationSchema();

// Validate data at runtime
const result = patientSchema.safeParse(patientData);
if (!result.success) {
  console.error('Validation failed:', result.error.issues);
}
```

## Best Practices for Object Mapping

### 1. Create Dedicated Mapper Classes

Organize your mapping logic in dedicated classes for maintainability:

```typescript
import type { Patient } from '@solarahealth/fhir-r4';
import { createPatientSchema } from '@solarahealth/fhir-r4';

export class PatientMapper {
  private schema = createPatientSchema();

  /**
   * Maps database patient record to FHIR Patient
   */
  mapFromDatabase(dbPatient: DatabasePatient): Patient {
    const fhirPatient: Patient = {
      resourceType: 'Patient',
      id: dbPatient.id,
      active: dbPatient.active ?? true,
      name: this.mapNames(dbPatient),
      gender: this.mapGender(dbPatient.gender),
      birthDate: this.mapBirthDate(dbPatient.dateOfBirth),
      telecom: this.mapTelecom(dbPatient),
      address: this.mapAddresses(dbPatient.addresses),
      identifier: this.mapIdentifiers(dbPatient),
    };

    // Validate the mapped object
    const result = this.schema.safeParse(fhirPatient);
    if (!result.success) {
      throw new Error(`Patient mapping validation failed: ${JSON.stringify(result.error.issues)}`);
    }

    return result.data;
  }

  private mapNames(dbPatient: DatabasePatient): Patient['name'] {
    if (!dbPatient.firstName && !dbPatient.lastName) return undefined;

    return [
      {
        use: 'official',
        family: dbPatient.lastName || undefined,
        given: dbPatient.firstName ? [dbPatient.firstName] : undefined,
        ...(dbPatient.middleName && {
          given: [dbPatient.firstName, dbPatient.middleName].filter(Boolean),
        }),
      },
    ];
  }

  private mapGender(gender: string | null): Patient['gender'] {
    const genderMap: Record<string, Patient['gender']> = {
      M: 'male',
      F: 'female',
      male: 'male',
      female: 'female',
      other: 'other',
      unknown: 'unknown',
    };

    return gender ? genderMap[gender] || 'unknown' : undefined;
  }

  private mapBirthDate(dateOfBirth: Date | string | null): string | undefined {
    if (!dateOfBirth) return undefined;
    const date = new Date(dateOfBirth);
    return date.toISOString().split('T')[0]; // YYYY-MM-DD format
  }

  private mapTelecom(dbPatient: DatabasePatient): Patient['telecom'] {
    const telecom: NonNullable<Patient['telecom']> = [];

    if (dbPatient.email) {
      telecom.push({
        system: 'email',
        value: dbPatient.email,
        use: 'home',
      });
    }

    if (dbPatient.phone) {
      telecom.push({
        system: 'phone',
        value: dbPatient.phone,
        use: 'home',
      });
    }

    if (dbPatient.mobilePhone) {
      telecom.push({
        system: 'phone',
        value: dbPatient.mobilePhone,
        use: 'mobile',
      });
    }

    return telecom.length > 0 ? telecom : undefined;
  }

  private mapAddresses(addresses: DatabaseAddress[] | null): Patient['address'] {
    if (!addresses || addresses.length === 0) return undefined;

    return addresses.map((addr) => ({
      use: 'home',
      type: 'physical',
      line: [addr.street1, addr.street2].filter(Boolean),
      city: addr.city || undefined,
      state: addr.state || undefined,
      postalCode: addr.zipCode || undefined,
      country: addr.country || undefined,
    }));
  }

  private mapIdentifiers(dbPatient: DatabasePatient): Patient['identifier'] {
    const identifiers: NonNullable<Patient['identifier']> = [];

    if (dbPatient.medicalRecordNumber) {
      identifiers.push({
        use: 'official',
        type: {
          coding: [
            {
              system: 'http://terminology.hl7.org/CodeSystem/v2-0203',
              code: 'MR',
              display: 'Medical record number',
            },
          ],
        },
        value: dbPatient.medicalRecordNumber,
      });
    }

    if (dbPatient.ssn) {
      identifiers.push({
        use: 'official',
        type: {
          coding: [
            {
              system: 'http://terminology.hl7.org/CodeSystem/v2-0203',
              code: 'SS',
              display: 'Social Security number',
            },
          ],
        },
        value: dbPatient.ssn,
      });
    }

    return identifiers.length > 0 ? identifiers : undefined;
  }
}

// Type definitions for your database structure
interface DatabasePatient {
  id: string;
  active?: boolean;
  firstName?: string;
  lastName?: string;
  middleName?: string;
  gender?: string;
  dateOfBirth?: Date | string;
  email?: string;
  phone?: string;
  mobilePhone?: string;
  medicalRecordNumber?: string;
  ssn?: string;
  addresses?: DatabaseAddress[];
}

interface DatabaseAddress {
  street1?: string;
  street2?: string;
  city?: string;
  state?: string;
  zipCode?: string;
  country?: string;
}
```

### 2. Handle External API Responses

When integrating with external APIs, create mappers that transform their data structures:

```typescript
import type { Observation } from '@solarahealth/fhir-r4';
import { createObservationSchema } from '@solarahealth/fhir-r4';

export class LabResultMapper {
  private schema = createObservationSchema();

  /**
   * Maps external lab API response to FHIR Observation
   */
  mapFromLabAPI(labResult: ExternalLabResult): Observation {
    const observation: Observation = {
      resourceType: 'Observation',
      id: labResult.id,
      status: this.mapStatus(labResult.status),
      category: [
        {
          coding: [
            {
              system: 'http://terminology.hl7.org/CodeSystem/observation-category',
              code: 'laboratory',
              display: 'Laboratory',
            },
          ],
        },
      ],
      code: {
        coding: [
          {
            system: 'http://loinc.org',
            code: labResult.loincCode,
            display: labResult.testName,
          },
        ],
      },
      subject: {
        reference: `Patient/${labResult.patientId}`,
      },
      effectiveDateTime: labResult.collectionDateTime,
      valueQuantity: this.mapValue(labResult),
      referenceRange: this.mapReferenceRange(labResult),
      interpretation: this.mapInterpretation(labResult.flag),
    };

    // Validate before returning
    const result = this.schema.safeParse(observation);
    if (!result.success) {
      throw new Error(
        `Lab result mapping validation failed: ${JSON.stringify(result.error.issues)}`,
      );
    }

    return result.data;
  }

  private mapStatus(status: string): Observation['status'] {
    const statusMap: Record<string, Observation['status']> = {
      completed: 'final',
      pending: 'preliminary',
      cancelled: 'cancelled',
      final: 'final',
      preliminary: 'preliminary',
    };

    return statusMap[status.toLowerCase()] || 'unknown';
  }

  private mapValue(labResult: ExternalLabResult): Observation['valueQuantity'] {
    return {
      value: labResult.numericValue,
      unit: labResult.unit,
      system: 'http://unitsofmeasure.org',
      code: labResult.ucumCode || labResult.unit,
    };
  }

  private mapReferenceRange(labResult: ExternalLabResult): Observation['referenceRange'] {
    if (!labResult.referenceRangeLow && !labResult.referenceRangeHigh) {
      return undefined;
    }

    return [
      {
        low: labResult.referenceRangeLow
          ? {
              value: labResult.referenceRangeLow,
              unit: labResult.unit,
              system: 'http://unitsofmeasure.org',
            }
          : undefined,
        high: labResult.referenceRangeHigh
          ? {
              value: labResult.referenceRangeHigh,
              unit: labResult.unit,
              system: 'http://unitsofmeasure.org',
            }
          : undefined,
      },
    ];
  }

  private mapInterpretation(flag: string | null): Observation['interpretation'] {
    if (!flag) return undefined;

    const interpretationMap: Record<string, string> = {
      H: 'H', // High
      L: 'L', // Low
      N: 'N', // Normal
      A: 'A', // Abnormal
    };

    const code = interpretationMap[flag.toUpperCase()];
    if (!code) return undefined;

    return [
      {
        coding: [
          {
            system: 'http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation',
            code,
          },
        ],
      },
    ];
  }
}

interface ExternalLabResult {
  id: string;
  patientId: string;
  status: string;
  testName: string;
  loincCode: string;
  numericValue: number;
  unit: string;
  ucumCode?: string;
  collectionDateTime: string;
  referenceRangeLow?: number;
  referenceRangeHigh?: number;
  flag?: string;
}
```

### 3. Batch Processing and Error Handling

When processing multiple records, implement robust error handling:

```typescript
export class BatchPatientMapper {
  private patientMapper = new PatientMapper();

  async mapPatientBatch(dbPatients: DatabasePatient[]): Promise<{
    successful: Patient[];
    failed: Array<{ patient: DatabasePatient; error: string }>;
  }> {
    const successful: Patient[] = [];
    const failed: Array<{ patient: DatabasePatient; error: string }> = [];

    for (const dbPatient of dbPatients) {
      try {
        const fhirPatient = this.patientMapper.mapFromDatabase(dbPatient);
        successful.push(fhirPatient);
      } catch (error) {
        failed.push({
          patient: dbPatient,
          error: error instanceof Error ? error.message : 'Unknown error',
        });
      }
    }

    return { successful, failed };
  }

  /**
   * Create a FHIR Bundle from successfully mapped patients
   */
  createPatientBundle(patients: Patient[]): Bundle {
    return {
      resourceType: 'Bundle',
      type: 'collection',
      entry: patients.map((patient) => ({
        resource: patient,
      })),
    };
  }
}
```

## Advanced Mapping Patterns

### 1. Conditional Mapping

Handle optional fields and complex business logic:

```typescript
export class ConditionalMapper {
  mapPractitioner(dbUser: DatabaseUser): Practitioner {
    const practitioner: Practitioner = {
      resourceType: 'Practitioner',
      id: dbUser.id,
      active: dbUser.active,
      name: [
        {
          family: dbUser.lastName,
          given: [dbUser.firstName],
          prefix: dbUser.title ? [dbUser.title] : undefined,
        },
      ],
    };

    // Only add qualification if user has medical license
    if (dbUser.medicalLicenseNumber && dbUser.licenseState) {
      practitioner.qualification = [
        {
          code: {
            coding: [
              {
                system: 'http://terminology.hl7.org/CodeSystem/v2-0360',
                code: 'MD',
                display: 'Doctor of Medicine',
              },
            ],
          },
          identifier: [
            {
              use: 'official',
              value: dbUser.medicalLicenseNumber,
              assigner: {
                display: `${dbUser.licenseState} Medical Board`,
              },
            },
          ],
        },
      ];
    }

    // Add specialty if available
    if (dbUser.specialty) {
      practitioner.specialty = [
        {
          coding: [
            {
              system: 'http://snomed.info/sct',
              code: this.getSpecialtyCode(dbUser.specialty),
              display: dbUser.specialty,
            },
          ],
        },
      ];
    }

    return practitioner;
  }

  private getSpecialtyCode(specialty: string): string {
    const specialtyMap: Record<string, string> = {
      cardiology: '394579002',
      dermatology: '394582007',
      endocrinology: '394583002',
      // Add more mappings as needed
    };

    return specialtyMap[specialty.toLowerCase()] || '394814009'; // General practice
  }
}
```

### 2. Nested Resource Mapping

Handle complex nested structures:

```typescript
export class EncounterMapper {
  mapFromAppointment(appointment: DatabaseAppointment): Encounter {
    return {
      resourceType: 'Encounter',
      id: appointment.id,
      status: this.mapStatus(appointment.status),
      class: {
        system: 'http://terminology.hl7.org/CodeSystem/v3-ActCode',
        code: 'AMB',
        display: 'ambulatory',
      },
      subject: {
        reference: `Patient/${appointment.patientId}`,
      },
      participant: this.mapParticipants(appointment),
      period: {
        start: appointment.startTime,
        end: appointment.endTime,
      },
      location: appointment.locationId
        ? [
            {
              location: {
                reference: `Location/${appointment.locationId}`,
              },
            },
          ]
        : undefined,
      serviceType: this.mapServiceType(appointment.serviceType),
      reasonCode: this.mapReasonCodes(appointment.reasonCodes),
    };
  }

  private mapParticipants(appointment: DatabaseAppointment): Encounter['participant'] {
    const participants: NonNullable<Encounter['participant']> = [];

    if (appointment.practitionerId) {
      participants.push({
        type: [
          {
            coding: [
              {
                system: 'http://terminology.hl7.org/CodeSystem/v3-ParticipationType',
                code: 'PPRF',
                display: 'primary performer',
              },
            ],
          },
        ],
        individual: {
          reference: `Practitioner/${appointment.practitionerId}`,
        },
      });
    }

    return participants.length > 0 ? participants : undefined;
  }
}
```

## Testing Your Mappers

### Unit Testing

Test your mappers thoroughly to ensure data quality:

```typescript
import { PatientMapper } from '../mappers/patient-mapper';
import { createPatientSchema } from '@solarahealth/fhir-r4';

describe('PatientMapper', () => {
  let mapper: PatientMapper;
  let schema: ReturnType<typeof createPatientSchema>;

  beforeEach(() => {
    mapper = new PatientMapper();
    schema = createPatientSchema();
  });

  it('should map complete patient data correctly', () => {
    const dbPatient: DatabasePatient = {
      id: 'patient-123',
      active: true,
      firstName: 'John',
      lastName: 'Doe',
      gender: 'M',
      dateOfBirth: '1985-03-15',
      email: 'john.doe@email.com',
      phone: '+1-555-123-4567',
    };

    const fhirPatient = mapper.mapFromDatabase(dbPatient);

    expect(fhirPatient.resourceType).toBe('Patient');
    expect(fhirPatient.id).toBe('patient-123');
    expect(fhirPatient.name?.[0]?.given?.[0]).toBe('John');
    expect(fhirPatient.name?.[0]?.family).toBe('Doe');
    expect(fhirPatient.gender).toBe('male');
    expect(fhirPatient.birthDate).toBe('1985-03-15');

    // Ensure the result is valid FHIR
    const validation = schema.safeParse(fhirPatient);
    expect(validation.success).toBe(true);
  });

  it('should handle missing optional fields gracefully', () => {
    const dbPatient: DatabasePatient = {
      id: 'patient-minimal',
      firstName: 'Jane',
    };

    const fhirPatient = mapper.mapFromDatabase(dbPatient);

    expect(fhirPatient.resourceType).toBe('Patient');
    expect(fhirPatient.id).toBe('patient-minimal');
    expect(fhirPatient.name?.[0]?.given?.[0]).toBe('Jane');
    expect(fhirPatient.telecom).toBeUndefined();
    expect(fhirPatient.address).toBeUndefined();

    // Should still be valid FHIR
    const validation = schema.safeParse(fhirPatient);
    expect(validation.success).toBe(true);
  });

  it('should throw error for invalid data', () => {
    const dbPatient: DatabasePatient = {
      id: '', // Invalid: empty ID
      firstName: 'Invalid',
    };

    expect(() => mapper.mapFromDatabase(dbPatient)).toThrow();
  });
});
```

### Integration Testing

Test with real data scenarios:

```typescript
describe('PatientMapper Integration', () => {
  it('should handle real database records', async () => {
    const dbPatients = await database.patients.findAll({ limit: 10 });
    const mapper = new PatientMapper();
    const batchMapper = new BatchPatientMapper();

    const result = await batchMapper.mapPatientBatch(dbPatients);

    expect(result.successful.length).toBeGreaterThan(0);
    expect(result.failed.length).toBe(0);

    // All mapped patients should be valid FHIR
    const schema = createPatientSchema();
    result.successful.forEach((patient) => {
      const validation = schema.safeParse(patient);
      expect(validation.success).toBe(true);
    });
  });
});
```

## Performance Considerations

### 1. Lazy Schema Creation

Create schemas once and reuse them:

```typescript
export class OptimizedMapper {
  private static patientSchema = createPatientSchema();
  private static observationSchema = createObservationSchema();

  static validatePatient(patient: Patient): Patient {
    const result = OptimizedMapper.patientSchema.safeParse(patient);
    if (!result.success) {
      throw new Error(`Validation failed: ${JSON.stringify(result.error.issues)}`);
    }
    return result.data;
  }
}
```

### 2. Batch Validation

For large datasets, consider batch processing:

```typescript
export class PerformantMapper {
  async processBatch(records: any[], batchSize = 100): Promise<Patient[]> {
    const results: Patient[] = [];

    for (let i = 0; i < records.length; i += batchSize) {
      const batch = records.slice(i, i + batchSize);
      const mappedBatch = await Promise.all(
        batch.map((record) => this.mapWithErrorHandling(record)),
      );

      results.push(...mappedBatch.filter(Boolean));
    }

    return results;
  }

  private async mapWithErrorHandling(record: any): Promise<Patient | null> {
    try {
      return this.mapPatient(record);
    } catch (error) {
      console.error(`Failed to map record ${record.id}:`, error);
      return null;
    }
  }
}
```

## Common Pitfalls and Solutions

### 1. Date Format Issues

Always ensure proper date formatting:

```typescript
private mapDate(dateInput: Date | string | null): string | undefined {
  if (!dateInput) return undefined;

  try {
    const date = new Date(dateInput);
    if (isNaN(date.getTime())) {
      throw new Error('Invalid date');
    }
    return date.toISOString().split('T')[0]; // YYYY-MM-DD
  } catch (error) {
    console.warn(`Invalid date format: ${dateInput}`);
    return undefined;
  }
}
```

### 2. Null vs Undefined Handling

FHIR prefers undefined over null for optional fields:

```typescript
private mapOptionalString(value: string | null | undefined): string | undefined {
  return value || undefined; // Converts null/empty string to undefined
}

private mapOptionalArray<T>(items: T[] | null | undefined): T[] | undefined {
  return items && items.length > 0 ? items : undefined;
}
```

### 3. Code System Mapping

Maintain centralized code system mappings:

```typescript
export const CODE_SYSTEMS = {
  LOINC: 'http://loinc.org',
  SNOMED: 'http://snomed.info/sct',
  ICD10: 'http://hl7.org/fhir/sid/icd-10-cm',
  UCUM: 'http://unitsofmeasure.org',
} as const;

export const OBSERVATION_CATEGORIES = {
  VITAL_SIGNS: {
    system: 'http://terminology.hl7.org/CodeSystem/observation-category',
    code: 'vital-signs',
    display: 'Vital Signs',
  },
  LABORATORY: {
    system: 'http://terminology.hl7.org/CodeSystem/observation-category',
    code: 'laboratory',
    display: 'Laboratory',
  },
} as const;
```

## Next Steps

- Review [Database Integration](./database-integration.md) for storage patterns
- Check [Validation and Error Handling](./validation-and-error-handling.md) for advanced validation techniques
- Explore [Resource Operations](./resource-operations.md) for CRUD operations with mapped objects
- See [Testing Guide](./testing.md) for comprehensive testing strategies

This mapping approach ensures your healthcare data maintains FHIR compliance while providing the flexibility to work with your existing data structures.
