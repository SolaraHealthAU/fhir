import type { Patient } from '@solarahealth/fhir-r4';

// Sample patient data with diverse characteristics for testing search functionality
export const samplePatients: Record<string, Patient> = {
  '123': {
    resourceType: 'Patient',
    id: '123',
    identifier: [
      {
        use: 'usual',
        system: 'http://hospital.example.org/mrn',
        value: 'MRN123456',
      },
    ],
    name: [
      {
        use: 'official',
        family: 'Doe',
        given: ['John', 'Michael'],
      },
    ],
    gender: 'male',
    birthDate: '1980-01-15',
    telecom: [
      {
        system: 'phone',
        value: '+1-555-123-4567',
        use: 'home',
      },
      {
        system: 'email',
        value: 'john.doe@example.com',
        use: 'home',
      },
    ],
    address: [
      {
        use: 'home',
        line: ['123 Main St', 'Apt 4B'],
        city: 'Springfield',
        state: 'IL',
        postalCode: '62701',
        country: 'US',
      },
    ],
  },
  '456': {
    resourceType: 'Patient',
    id: '456',
    identifier: [
      {
        use: 'usual',
        system: 'http://hospital.example.org/mrn',
        value: 'MRN789012',
      },
    ],
    name: [
      {
        use: 'official',
        family: 'Smith',
        given: ['Jane', 'Elizabeth'],
      },
      {
        use: 'maiden',
        family: 'Johnson',
        given: ['Jane'],
      },
    ],
    gender: 'female',
    birthDate: '1975-08-22',
    telecom: [
      {
        system: 'phone',
        value: '+1-555-987-6543',
        use: 'work',
      },
      {
        system: 'email',
        value: 'jane.smith@example.com',
        use: 'work',
      },
    ],
  },
  '789': {
    resourceType: 'Patient',
    id: '789',
    identifier: [
      {
        use: 'usual',
        system: 'http://hospital.example.org/mrn',
        value: 'MRN345678',
      },
    ],
    name: [
      {
        use: 'official',
        family: 'Brown',
        given: ['Robert', 'James'],
      },
      {
        use: 'nickname',
        given: ['Bob'],
      },
    ],
    gender: 'male',
    birthDate: '1992-03-10',
    telecom: [
      {
        system: 'phone',
        value: '+1-555-456-7890',
        use: 'mobile',
      },
    ],
  },
  '101': {
    resourceType: 'Patient',
    id: '101',
    identifier: [
      {
        use: 'usual',
        system: 'http://hospital.example.org/mrn',
        value: 'MRN567890',
      },
    ],
    name: [
      {
        use: 'official',
        family: 'Wilson',
        given: ['Sarah', 'Marie'],
      },
    ],
    gender: 'female',
    birthDate: '1988-12-05',
    telecom: [
      {
        system: 'email',
        value: 'sarah.wilson@example.com',
        use: 'home',
      },
    ],
  },
};
