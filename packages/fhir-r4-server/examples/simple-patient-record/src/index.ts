// app.ts
import express from 'express';
import type { Patient } from '@solarahealth/fhir-r4';
import { RestServer, builder, errors } from '@solarahealth/fhir-r4-server';
import { createContext, AppContext } from './create-context';
import { z } from 'zod';

// 1. Create an Express app
const app = express();
app.use(express.json());

// 2. Define your FHIR resource handlers
// Example: A simple in-memory Patient store
const patients: Record<string, Patient> = {};

// A hardcoded patient for example
patients['123'] = {
  resourceType: 'Patient',
  id: '123',
  name: [{ given: ['John'], family: 'Doe' }],
};

// 3. Define a resource and build interactions
// Example a simple 'read' capability for Patient
const patientResource = builder
  .defineResource('Patient')
  .read((builder) =>
    builder.id(z.string()).retrieveWith(async (id) => {
      // Fetch from in memory...
      const patient = patients[id];

      // Indicate a miss..
      if (!patient) {
        throw new errors.ResourceNotFound('Patient', id);
      }

      return patient;
    }),
  )
  .build();

// 4. Initialize the FHIR server
const fhirServer = RestServer.init<AppContext>({
  // Provide a base capability statement
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
        resource: [patientResource], // Include resource capabilities
      },
    ],
  },
});

// 5. Mount the FHIR server middleware, providing the context factory
app.use('/fhir', RestServer.expressMiddleware(fhirServer, { context: createContext }));

// 6. Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`FHIR server listening on port ${PORT}`);
});
