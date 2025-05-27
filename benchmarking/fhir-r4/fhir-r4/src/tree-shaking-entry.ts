import { createPatientSchema } from '@solarahealth/fhir-r4';

// Simple usage of createPatientSchema to test tree shaking
const patientSchema = createPatientSchema();

// Sample patient data to validate the schema works
const samplePatient = {
  resourceType: 'Patient' as const,
  name: [{ given: ['John'], family: 'Doe' }],
  birthDate: '1990-01-01',
  gender: 'male',
  active: true,
};

// Parse the sample patient to ensure the schema is actually used
const validatedPatient = patientSchema.parse(samplePatient);

console.log('Tree shaking test: Patient schema created and validated successfully');
console.log('Validated patient ID:', validatedPatient.id || 'No ID provided');

// Export something to prevent the code from being completely eliminated
export { validatedPatient };
