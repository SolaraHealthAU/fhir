import * as rest from '@solarahealth/fhir-r4-server';
import type { CapabilityStatementSearchParam } from '@solarahealth/fhir-r4';

// Define Patient search parameters following FHIR R4 specification
export const patientSearchParams = [
  {
    name: 'name',
    documentation: 'A portion of either family or given name of the patient',
    type: 'string',
  },
  {
    name: 'family',
    documentation: 'A portion of the family name of the patient',
    type: 'string',
  },
  {
    name: 'given',
    documentation: 'A portion of the given name of the patient',
    type: 'string',
  },
  {
    name: 'identifier',
    documentation: 'A patient identifier',
    type: 'token',
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
] as const satisfies ReadonlyArray<CapabilityStatementSearchParam>;

// Generate the schema directly from search parameters
export const patientSearchSchema = rest.codecs.createSearchParametersSchema(patientSearchParams);

// Export the type for use in handlers
export type PatientSearchParams = rest.codecs.ParamsToShape<typeof patientSearchParams>;

// Export a mutable version for the builder API
export const patientSearchParamsForBuilder = [
  ...patientSearchParams,
] as CapabilityStatementSearchParam[];
