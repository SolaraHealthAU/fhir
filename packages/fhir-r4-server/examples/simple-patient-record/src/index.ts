// app.ts
import express from 'express';
import type { Patient, Bundle } from '@solarahealth/fhir-r4';
import { RestServer, builder, errors } from '@solarahealth/fhir-r4-server';
import { createContext, AppContext } from './create-context';
import {
  patientSearchParamsForBuilder,
  patientSearchSchema,
  PatientSearchParams,
} from './patient-search-params';
import { samplePatients } from './sample-data';
import { z } from 'zod';

// 1. Create an Express app
const app = express();
app.use(express.json());

// 2. Sample data store (in a real app, this would be a database)
const patients: Record<string, Patient> = { ...samplePatients };

// 3. Helper functions for search implementation
const getFirstValue = <T>(param: T[][] | undefined): T | undefined => {
  return param?.[0]?.[0];
};

const searchPatientsByName = (query: string): Patient[] => {
  const lowerQuery = query.toLowerCase();
  return Object.values(patients).filter((patient) => {
    return patient.name?.some((name) => {
      const fullName = [...(name.given || []), name.family].filter(Boolean).join(' ').toLowerCase();

      return fullName.includes(lowerQuery);
    });
  });
};

const searchPatientsByFamily = (query: string): Patient[] => {
  const lowerQuery = query.toLowerCase();
  return Object.values(patients).filter((patient) => {
    return patient.name?.some((name) => name.family?.toLowerCase().includes(lowerQuery));
  });
};

const searchPatientsByGiven = (query: string): Patient[] => {
  const lowerQuery = query.toLowerCase();
  return Object.values(patients).filter((patient) => {
    return patient.name?.some((name) =>
      name.given?.some((given) => given.toLowerCase().includes(lowerQuery)),
    );
  });
};

const searchPatientsByIdentifier = (query: string): Patient[] => {
  return Object.values(patients).filter((patient) => {
    return patient.identifier?.some((identifier) => identifier.value === query);
  });
};

const searchPatientsByGender = (query: string): Patient[] => {
  return Object.values(patients).filter((patient) => patient.gender === query.toLowerCase());
};

const searchPatientsByBirthdate = (dateParam: any): Patient[] => {
  // Simple implementation - in a real app, you'd handle date ranges properly
  const targetDate = dateParam.date.toISOString().split('T')[0];
  return Object.values(patients).filter((patient) => patient.birthDate === targetDate);
};

// 4. Define Patient resource with read and search capabilities
const patientResource = builder
  .defineResource('Patient')
  .searchParams(patientSearchParamsForBuilder)
  .read((builder) =>
    builder.id(z.string()).retrieveWith(async (id, context) => {
      console.log(`Reading patient with ID: ${id}`);

      const patient = patients[id];

      if (!patient) {
        throw new errors.ResourceNotFound('Patient', id);
      }

      return patient;
    }),
  )
  .search((builder) =>
    builder.params(patientSearchSchema).list(async (params: PatientSearchParams, context, req) => {
      console.log('Patient search params:', JSON.stringify(params, null, 2));

      let results: Patient[] = Object.values(patients);

      // Apply search filters
      const nameQuery = getFirstValue(params.name);
      if (nameQuery) {
        results = searchPatientsByName(nameQuery.value);
      }

      const familyQuery = getFirstValue(params.family);
      if (familyQuery) {
        results = results.filter((patient) =>
          searchPatientsByFamily(familyQuery.value).includes(patient),
        );
      }

      const givenQuery = getFirstValue(params.given);
      if (givenQuery) {
        results = results.filter((patient) =>
          searchPatientsByGiven(givenQuery.value).includes(patient),
        );
      }

      const identifierQuery = getFirstValue(params.identifier);
      if (identifierQuery && identifierQuery.codingCodeOrIdentifierValue) {
        results = results.filter((patient) =>
          searchPatientsByIdentifier(identifierQuery.codingCodeOrIdentifierValue!).includes(
            patient,
          ),
        );
      }

      const genderQuery = getFirstValue(params.gender);
      if (genderQuery && genderQuery.codingCodeOrIdentifierValue) {
        results = results.filter((patient) =>
          searchPatientsByGender(genderQuery.codingCodeOrIdentifierValue!).includes(patient),
        );
      }

      const birthdateQuery = getFirstValue(params.birthdate);
      if (birthdateQuery) {
        results = results.filter((patient) =>
          searchPatientsByBirthdate(birthdateQuery).includes(patient),
        );
      }

      // Create FHIR Bundle response
      const bundle: Bundle = {
        resourceType: 'Bundle',
        type: 'searchset',
        total: results.length,
        entry: results.map((resource) => ({
          resource,
          search: { mode: 'match' },
        })),
      };

      console.log(`Found ${results.length} patients matching search criteria`);
      return bundle;
    }),
  )
  .build();

// 5. Initialize the FHIR server with enhanced capability statement
const fhirServer = RestServer.init<AppContext>({
  capabilities: {
    resourceType: 'CapabilityStatement',
    status: 'active',
    date: new Date().toISOString(),
    kind: 'instance',
    fhirVersion: '4.0.1',
    format: ['json'],
    rest: [
      {
        mode: 'server',
        resource: [patientResource], // Include resource capabilities with search parameters
      },
    ],
  },
});

// 6. Mount the FHIR server middleware
app.use('/fhir', RestServer.expressMiddleware(fhirServer, { context: createContext }));

// 7. Add a simple health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'healthy', timestamp: new Date().toISOString() });
});

// 8. Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 FHIR server running on http://localhost:${PORT}`);
  console.log(`📋 Capability statement: http://localhost:${PORT}/fhir/metadata`);
  console.log(`👤 Example patient: http://localhost:${PORT}/fhir/Patient/123`);
  console.log(`🔍 Search patients: http://localhost:${PORT}/fhir/Patient?name=John`);
  console.log(`💚 Health check: http://localhost:${PORT}/health`);
});
