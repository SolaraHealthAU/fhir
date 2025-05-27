import { R4 } from '@ahryman40k/ts-fhir-types';
import { either as E } from 'fp-ts';

// Simple usage of R4.RTTI_Patient to test tree shaking
const patientRTTI = R4.RTTI_Patient;

// Sample patient data to validate the RTTI works
const samplePatient = {
  resourceType: 'Patient' as const,
  name: [{ given: ['John'], family: 'Doe' }],
  birthDate: '1990-01-01',
  gender: 'male',
  active: true,
};

// Decode the sample patient to ensure the RTTI is actually used
const validationResult = patientRTTI.decode(samplePatient);

console.log('Tree shaking test: Patient RTTI accessed and validation performed');
console.log('Validation successful:', E.isRight(validationResult));

// Export something to prevent the code from being completely eliminated
export { validationResult };
