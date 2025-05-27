import { R4 } from '@ahryman40k/ts-fhir-types';

const json = {
  resourceType: 'Patient',
};

const validationResult = R4.RTTI_Patient.decode(json);

console.log(validationResult);
