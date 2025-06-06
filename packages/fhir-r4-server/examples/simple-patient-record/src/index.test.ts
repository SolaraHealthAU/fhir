import request from 'supertest';
import app from './index';
import type { Bundle, Patient, CapabilityStatement } from '@solarahealth/fhir-r4';

describe('FHIR Simple Patient Record Server', () => {
  describe('Health Check', () => {
    it('should return health status', async () => {
      const response = await request(app).get('/health').expect(200);

      expect(response.body).toHaveProperty('status', 'healthy');
      expect(response.body).toHaveProperty('timestamp');
      expect(new Date(response.body.timestamp)).toBeInstanceOf(Date);
    });
  });

  describe('FHIR Metadata (Capability Statement)', () => {
    it('should return capability statement', async () => {
      const response = await request(app).get('/fhir/metadata').expect(200);

      const capabilityStatement: CapabilityStatement = response.body;
      expect(capabilityStatement.resourceType).toBe('CapabilityStatement');
      expect(capabilityStatement.status).toBe('active');
      expect(capabilityStatement.fhirVersion).toBe('4.0.1');
      expect(capabilityStatement.rest).toBeDefined();
      expect(capabilityStatement.rest).toHaveLength(1);
      expect(capabilityStatement.rest![0].mode).toBe('server');
      expect(capabilityStatement.rest![0].resource).toHaveLength(1);
      expect(capabilityStatement.rest![0].resource![0].type).toBe('Patient');
    });
  });

  describe('Patient Read Operations', () => {
    it('should read John Doe (Patient/123)', async () => {
      const response = await request(app).get('/fhir/Patient/123').expect(200);

      const patient: Patient = response.body;
      expect(patient.resourceType).toBe('Patient');
      expect(patient.id).toBe('123');
      expect(patient.name).toBeDefined();
      expect(patient.name![0].family).toBe('Doe');
      expect(patient.name![0].given).toContain('John');
      expect(patient.gender).toBe('male');
      expect(patient.birthDate).toBe('1980-01-15');
    });

    it('should read Jane Smith (Patient/456)', async () => {
      const response = await request(app).get('/fhir/Patient/456').expect(200);

      const patient: Patient = response.body;
      expect(patient.resourceType).toBe('Patient');
      expect(patient.id).toBe('456');
      expect(patient.name).toBeDefined();
      expect(patient.name![0].family).toBe('Smith');
      expect(patient.name![0].given).toContain('Jane');
      expect(patient.gender).toBe('female');
      expect(patient.birthDate).toBe('1975-08-22');
    });

    it('should return 404 for non-existent patient (Patient/999)', async () => {
      const response = await request(app).get('/fhir/Patient/999').expect(404);

      expect(response.body).toHaveProperty('resourceType', 'OperationOutcome');
      expect(response.body.issue).toHaveLength(1);
      expect(response.body.issue[0].severity).toBe('error');
      expect(response.body.issue[0].code).toBe('not-found');
    });
  });

  describe('Patient Search Operations', () => {
    it('should search patients by name "John"', async () => {
      const response = await request(app).get('/fhir/Patient').query({ name: 'John' }).expect(200);

      const bundle: Bundle = response.body;
      expect(bundle.resourceType).toBe('Bundle');
      expect(bundle.type).toBe('searchset');
      expect(bundle.total).toBe(2); // Finds both John Doe and patients with "John" in their names
      expect(bundle.entry).toHaveLength(2);

      // Should contain patients with "John" in their names
      const patientIds = bundle.entry!.map((entry) => (entry.resource as Patient).id);
      expect(patientIds).toContain('123'); // John Michael Doe
    });

    it('should search patients by family name "Smith"', async () => {
      const response = await request(app)
        .get('/fhir/Patient')
        .query({ family: 'Smith' })
        .expect(200);

      const bundle: Bundle = response.body;
      expect(bundle.resourceType).toBe('Bundle');
      expect(bundle.type).toBe('searchset');
      expect(bundle.total).toBe(1);
      expect(bundle.entry).toHaveLength(1);

      const patient = bundle.entry![0].resource as Patient;
      expect(patient.id).toBe('456');
      expect(patient.name![0].family).toBe('Smith');
    });

    it('should search patients by given name "Sarah"', async () => {
      const response = await request(app)
        .get('/fhir/Patient')
        .query({ given: 'Sarah' })
        .expect(200);

      const bundle: Bundle = response.body;
      expect(bundle.resourceType).toBe('Bundle');
      expect(bundle.type).toBe('searchset');
      expect(bundle.total).toBe(1);
      expect(bundle.entry).toHaveLength(1);

      const patient = bundle.entry![0].resource as Patient;
      expect(patient.id).toBe('101');
      expect(patient.name![0].given).toContain('Sarah');
    });

    it('should search patients by gender "female"', async () => {
      const response = await request(app)
        .get('/fhir/Patient')
        .query({ gender: 'female' })
        .expect(200);

      const bundle: Bundle = response.body;
      expect(bundle.resourceType).toBe('Bundle');
      expect(bundle.type).toBe('searchset');
      expect(bundle.total).toBe(2);
      expect(bundle.entry).toHaveLength(2);

      // Should contain Jane Smith (456) and Sarah Wilson (101)
      const patientIds = bundle.entry!.map((entry) => (entry.resource as Patient).id);
      expect(patientIds).toContain('456');
      expect(patientIds).toContain('101');

      bundle.entry!.forEach((entry) => {
        const patient = entry.resource as Patient;
        expect(patient.gender).toBe('female');
      });
    });

    it('should search patients by identifier "MRN123456"', async () => {
      const response = await request(app)
        .get('/fhir/Patient')
        .query({ identifier: 'MRN123456' })
        .expect(200);

      const bundle: Bundle = response.body;
      expect(bundle.resourceType).toBe('Bundle');
      expect(bundle.type).toBe('searchset');
      expect(bundle.total).toBe(1);
      expect(bundle.entry).toHaveLength(1);

      const patient = bundle.entry![0].resource as Patient;
      expect(patient.id).toBe('123');
      expect(patient.identifier).toBeDefined();
      expect(patient.identifier![0].value).toBe('MRN123456');
    });

    it('should search patients by birth date "1980-01-15"', async () => {
      const response = await request(app)
        .get('/fhir/Patient')
        .query({ birthdate: '1980-01-15' })
        .expect(200);

      const bundle: Bundle = response.body;
      expect(bundle.resourceType).toBe('Bundle');
      expect(bundle.type).toBe('searchset');
      expect(bundle.total).toBe(1);
      expect(bundle.entry).toHaveLength(1);

      const patient = bundle.entry![0].resource as Patient;
      expect(patient.id).toBe('123');
      expect(patient.birthDate).toBe('1980-01-15');
    });

    it('should return all patients when no search parameters provided', async () => {
      const response = await request(app).get('/fhir/Patient').expect(200);

      const bundle: Bundle = response.body;
      expect(bundle.resourceType).toBe('Bundle');
      expect(bundle.type).toBe('searchset');
      expect(bundle.total).toBe(4); // All sample patients
      expect(bundle.entry).toHaveLength(4);

      // Verify all expected patient IDs are present
      const patientIds = bundle.entry!.map((entry) => (entry.resource as Patient).id);
      expect(patientIds).toContain('123');
      expect(patientIds).toContain('456');
      expect(patientIds).toContain('789');
      expect(patientIds).toContain('101');
    });

    it('should return empty results for non-matching search', async () => {
      const response = await request(app)
        .get('/fhir/Patient')
        .query({ name: 'NonExistentName' })
        .expect(200);

      const bundle: Bundle = response.body;
      expect(bundle.resourceType).toBe('Bundle');
      expect(bundle.type).toBe('searchset');
      expect(bundle.total).toBe(0);
      expect(bundle.entry).toHaveLength(0);
    });
  });

  describe('Advanced Search Scenarios', () => {
    it('should search by gender "male" and return correct patients', async () => {
      const response = await request(app)
        .get('/fhir/Patient')
        .query({ gender: 'male' })
        .expect(200);

      const bundle: Bundle = response.body;
      expect(bundle.resourceType).toBe('Bundle');
      expect(bundle.type).toBe('searchset');
      expect(bundle.total).toBe(2);
      expect(bundle.entry).toHaveLength(2);

      // Should contain John Doe (123) and Robert Brown (789)
      const patientIds = bundle.entry!.map((entry) => (entry.resource as Patient).id);
      expect(patientIds).toContain('123');
      expect(patientIds).toContain('789');

      bundle.entry!.forEach((entry) => {
        const patient = entry.resource as Patient;
        expect(patient.gender).toBe('male');
      });
    });

    it('should search by partial name "Doe" and match family name', async () => {
      const response = await request(app).get('/fhir/Patient').query({ name: 'Doe' }).expect(200);

      const bundle: Bundle = response.body;
      expect(bundle.resourceType).toBe('Bundle');
      expect(bundle.type).toBe('searchset');
      expect(bundle.total).toBe(1);
      expect(bundle.entry).toHaveLength(1);

      const patient = bundle.entry![0].resource as Patient;
      expect(patient.id).toBe('123');
      expect(patient.name![0].family).toBe('Doe');
    });

    it('should handle case-insensitive searches', async () => {
      const response = await request(app)
        .get('/fhir/Patient')
        .query({ family: 'smith' }) // lowercase
        .expect(200);

      const bundle: Bundle = response.body;
      expect(bundle.resourceType).toBe('Bundle');
      expect(bundle.type).toBe('searchset');
      expect(bundle.total).toBe(1);
      expect(bundle.entry).toHaveLength(1);

      const patient = bundle.entry![0].resource as Patient;
      expect(patient.id).toBe('456');
      expect(patient.name![0].family).toBe('Smith');
    });
  });

  describe('Error Handling', () => {
    it('should handle invalid FHIR resource endpoints', async () => {
      const response = await request(app).get('/fhir/InvalidResource/123').expect(400);

      // The FHIR server should return appropriate error response
      expect(response.body).toHaveProperty('resourceType', 'OperationOutcome');
    });

    it('should handle malformed requests with invalid search parameters', async () => {
      const response = await request(app)
        .get('/fhir/Patient')
        .query({ invalidParam: 'value' })
        .expect(500); // Returns 500 for invalid search parameters

      expect(response.body).toHaveProperty('resourceType', 'OperationOutcome');
    });
  });

  describe('Response Format Validation', () => {
    it('should return proper FHIR Bundle structure for searches', async () => {
      const response = await request(app).get('/fhir/Patient').query({ name: 'John' }).expect(200);

      const bundle: Bundle = response.body;

      // Validate Bundle structure
      expect(bundle.resourceType).toBe('Bundle');
      expect(bundle.type).toBe('searchset');
      expect(typeof bundle.total).toBe('number');
      expect(Array.isArray(bundle.entry)).toBe(true);

      // Validate entry structure
      if (bundle.entry && bundle.entry.length > 0) {
        const entry = bundle.entry[0];
        expect(entry).toHaveProperty('resource');
        expect(entry).toHaveProperty('search');
        expect(entry.search?.mode).toBe('match');

        // Validate patient resource structure
        const patient = entry.resource as Patient;
        expect(patient.resourceType).toBe('Patient');
        expect(patient).toHaveProperty('id');
      }
    });

    it('should set correct Content-Type headers', async () => {
      const response = await request(app).get('/fhir/Patient/123').expect(200);

      expect(response.headers['content-type']).toMatch(/application\/json/);
    });
  });
});
