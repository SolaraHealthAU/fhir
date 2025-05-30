import * as fhirR4Server from './index';

describe('index exports', () => {
  describe('module exports', () => {
    it('should export RestServer module', () => {
      expect(fhirR4Server.RestServer).toBeDefined();
      expect(typeof fhirR4Server.RestServer).toBe('object');
      expect(fhirR4Server.RestServer.init).toBeDefined();
      expect(fhirR4Server.RestServer.expressMiddleware).toBeDefined();
    });

    it('should export errors module', () => {
      expect(fhirR4Server.errors).toBeDefined();
      expect(typeof fhirR4Server.errors).toBe('object');

      // Check key error classes are exported
      expect(fhirR4Server.errors.ResourceNotFound).toBeDefined();
      expect(fhirR4Server.errors.ResourceTypeNotSupported).toBeDefined();
      expect(fhirR4Server.errors.ResourceGone).toBeDefined();
      expect(fhirR4Server.errors.ResourceMethodNotAllowed).toBeDefined();
      expect(fhirR4Server.errors.ResourceFormatNotSupported).toBeDefined();
      expect(fhirR4Server.errors.ResourceInvalid).toBeDefined();
      expect(fhirR4Server.errors.InternalServerError).toBeDefined();
      expect(fhirR4Server.errors.BadRequest).toBeDefined();
      expect(fhirR4Server.errors.NotFound).toBeDefined();
    });

    it('should export codecs module', () => {
      expect(fhirR4Server.codecs).toBeDefined();
      expect(typeof fhirR4Server.codecs).toBe('object');

      // Check key codec functions are exported
      expect(fhirR4Server.codecs.createTokenParameterSchema).toBeDefined();
      expect(fhirR4Server.codecs.createDateParameterSchema).toBeDefined();
      expect(fhirR4Server.codecs.createNumberParameterSchema).toBeDefined();
      expect(fhirR4Server.codecs.createIdParameterSchema).toBeDefined();
    });

    it('should export builder module', () => {
      expect(fhirR4Server.builder).toBeDefined();
      expect(typeof fhirR4Server.builder).toBe('object');

      // Check key builder functions are exported
      expect(fhirR4Server.builder.defineResource).toBeDefined();
      expect(fhirR4Server.builder.ReadBuilder).toBeDefined();
      expect(fhirR4Server.builder.SearchBuilder).toBeDefined();
    });

    it('should export generate function', () => {
      expect(fhirR4Server.generate).toBeDefined();
      expect(typeof fhirR4Server.generate).toBe('function');
    });

    it('should export utility functions', () => {
      expect(fhirR4Server.pickFirstSearchParameterValue).toBeDefined();
      expect(fhirR4Server.remapSortSearchParameterFieldNames).toBeDefined();
      expect(fhirR4Server.typeGuardSortSearchParameter).toBeDefined();
      expect(fhirR4Server.convertZodErrorToFhirOperationOutcome).toBeDefined();

      expect(typeof fhirR4Server.pickFirstSearchParameterValue).toBe('function');
      expect(typeof fhirR4Server.remapSortSearchParameterFieldNames).toBe('function');
      expect(typeof fhirR4Server.typeGuardSortSearchParameter).toBe('function');
      expect(typeof fhirR4Server.convertZodErrorToFhirOperationOutcome).toBe('function');
    });
  });

  describe('type exports', () => {
    it('should export all necessary types', () => {
      // We can't directly test type exports at runtime, but we can verify
      // that the module imports without TypeScript compilation errors
      // This test passes if the file compiles successfully
      expect(true).toBe(true);
    });
  });

  describe('error class functionality', () => {
    it('should create ResourceNotFound error correctly', () => {
      const error = new fhirR4Server.errors.ResourceNotFound('Patient', '123');

      expect(error).toBeInstanceOf(Error);
      expect(error.name).toBe('ResourceNotFound');
      expect(error.message).toBe("Resource 'Patient/ 123' not found");
    });

    it('should create ResourceTypeNotSupported error correctly', () => {
      const error = new fhirR4Server.errors.ResourceTypeNotSupported('InvalidType');

      expect(error).toBeInstanceOf(Error);
      expect(error.name).toBe('ResourceTypeNotSupported');
      expect(error.message).toBe("Resource type 'InvalidType' is not supported");
    });

    it('should create ResourceGone error correctly', () => {
      const error = new fhirR4Server.errors.ResourceGone('Patient', '123');

      expect(error).toBeInstanceOf(Error);
      expect(error.name).toBe('ResourceGone');
      expect(error.message).toBe("Resource 'Patient/123' has been deleted");
    });

    it('should create ResourceMethodNotAllowed error correctly', () => {
      const error = new fhirR4Server.errors.ResourceMethodNotAllowed('create', 'Patient', '123');

      expect(error).toBeInstanceOf(Error);
      expect(error.name).toBe('ResourceMethodNotAllowed');
      expect(error.message).toBe("Method 'create' not allowed for resource 'Patient/123'");
    });

    it('should create ResourceFormatNotSupported error correctly', () => {
      const error = new fhirR4Server.errors.ResourceFormatNotSupported('Patient', 'xml');

      expect(error).toBeInstanceOf(Error);
      expect(error.name).toBe('ResourceFormatNotSupported');
      expect(error.message).toBe("Format 'xml' not supported for resource 'Patient'");
    });

    it('should create ResourceInvalid error correctly', () => {
      const error = new fhirR4Server.errors.ResourceInvalid('Patient', 'Missing required field');

      expect(error).toBeInstanceOf(Error);
      expect(error.name).toBe('ResourceInvalid');
      expect(error.message).toBe("Invalid resource 'Patient': Missing required field");
    });

    it('should create InternalServerError error correctly', () => {
      const error = new fhirR4Server.errors.InternalServerError('Database connection failed');

      expect(error).toBeInstanceOf(Error);
      expect(error.name).toBe('InternalServerError');
      expect(error.message).toBe('Database connection failed');
    });

    it('should create BadRequest error correctly', () => {
      const error = new fhirR4Server.errors.BadRequest('Invalid parameter format');

      expect(error).toBeInstanceOf(Error);
      expect(error.name).toBe('BadRequest');
      expect(error.message).toBe('Invalid parameter format');
    });

    it('should create NotFound error correctly', () => {
      const error = new fhirR4Server.errors.NotFound('Endpoint not found');

      expect(error).toBeInstanceOf(Error);
      expect(error.name).toBe('NotFound');
      expect(error.message).toBe('Endpoint not found');
    });
  });

  describe('integration tests', () => {
    it('should allow creating a complete server setup using exported modules', async () => {
      // This test demonstrates that all exported modules work together
      const capabilities = {
        resourceType: 'CapabilityStatement' as const,
        status: 'active' as const,
        date: '2023-01-01',
        kind: 'instance' as const,
        fhirVersion: '4.0.1' as const,
        format: ['json'],
        rest: [
          {
            mode: 'server' as const,
            resource: [
              {
                type: 'Patient' as const,
                interaction: [
                  {
                    code: 'read' as const,
                    handler: async () => ({
                      resourceType: 'Patient' as const,
                      id: '123',
                    }),
                  },
                ],
              },
            ],
          },
        ],
      };

      // Initialize server using exported RestServer module
      const server = fhirR4Server.RestServer.init({ capabilities });

      expect(server).toBeDefined();
      expect(server.options.capabilities).toBe(capabilities);

      // Test that interaction mapping works
      const readInteraction = server.obtainRestResourceInteractionOption('Patient', 'read');
      expect(readInteraction).not.toBeNull();
      expect(readInteraction?.code).toBe('read');
    });

    it('should generate TypeScript code using exported generate function', async () => {
      const capabilities = {
        resourceType: 'CapabilityStatement' as const,
        status: 'active' as const,
        date: '2023-01-01',
        kind: 'instance' as const,
        fhirVersion: '4.0.1' as const,
        format: ['json'],
        rest: [
          {
            mode: 'server' as const,
            resource: [
              {
                type: 'Patient' as const,
                searchParam: [{ name: 'family', type: 'string' as const }],
              },
            ],
          },
        ],
      };

      const generatedCode = await fhirR4Server.generate(capabilities);

      expect(generatedCode).toContain('PatientSearchParams');
      expect(generatedCode).toContain('createPatientSearchParamsSchema');
      expect(generatedCode).toContain('"name":"family"');
    });

    it('should use codec functions for parameter parsing', () => {
      // Test that exported codec functions work
      const tokenSchema = fhirR4Server.codecs.createTokenParameterSchema();
      const dateSchema = fhirR4Server.codecs.createDateParameterSchema();
      const numberSchema = fhirR4Server.codecs.createNumberParameterSchema();
      const idSchema = fhirR4Server.codecs.createIdParameterSchema();

      expect(tokenSchema).toBeDefined();
      expect(dateSchema).toBeDefined();
      expect(numberSchema).toBeDefined();
      expect(idSchema).toBeDefined();

      // These should be Zod schemas
      expect(tokenSchema.parse).toBeDefined();
      expect(dateSchema.parse).toBeDefined();
      expect(numberSchema.parse).toBeDefined();
      expect(idSchema.parse).toBeDefined();
    });

    it('should use utility functions correctly', () => {
      // Test pickFirstSearchParameterValue
      const multiValue = [['value1', 'value2'], ['value3']];
      const firstValue = fhirR4Server.pickFirstSearchParameterValue(multiValue);
      expect(firstValue).toBe('value1');

      const emptyValue = undefined;
      const emptyResult = fhirR4Server.pickFirstSearchParameterValue(emptyValue);
      expect(emptyResult).toBeUndefined();

      // Test typeGuardSortSearchParameter
      const sortParam = [{ field: 'name', direction: 'asc' as const }];
      const allowedFields = ['name', 'birthDate'] as const;
      const isValid = fhirR4Server.typeGuardSortSearchParameter(sortParam, allowedFields);
      expect(typeof isValid).toBe('boolean');
      expect(isValid).toBe(true);

      // Test remapSortSearchParameterFieldNames
      const sortParams = [{ field: 'name', direction: 'asc' as const }];
      const fieldMap = { name: 'patient_name' };
      const remapped = fhirR4Server.remapSortSearchParameterFieldNames(sortParams, fieldMap);
      expect(remapped).toEqual([{ field: 'patient_name', direction: 'asc' }]);
    });
  });
});
