import { Router } from 'express';
import {
  init,
  expressMiddleware,
  type RestServer,
  type Options,
  type ExpressMiddlewareOptions,
} from './rest-server';
import type {
  Context,
  CapabilityStatement,
  ExpressContextFunction,
  ResourceReadHandler,
  ResourceSearchTypeHandler,
} from './types';
import * as controllers from './controllers/controllers';
import type { Patient, Practitioner } from '@solarahealth/fhir-r4';

// Mock the controllers module
jest.mock('./controllers/controllers', () => ({
  init: jest.fn(),
}));

const mockControllersInit = controllers.init as jest.MockedFunction<typeof controllers.init>;

// Mock Express Router
jest.mock('express', () => ({
  Router: jest.fn(() => ({
    use: jest.fn(),
    get: jest.fn(),
    post: jest.fn(),
    put: jest.fn(),
    delete: jest.fn(),
  })),
}));

const mockRouter = Router as jest.MockedFunction<typeof Router>;

describe('rest-server', () => {
  // Test context interface
  interface TestContext extends Context {
    userId: string;
    userRole: string;
  }

  let mockRouterInstance: any;

  beforeEach(() => {
    jest.clearAllMocks();

    mockRouterInstance = {
      use: jest.fn(),
      get: jest.fn(),
      post: jest.fn(),
      put: jest.fn(),
      delete: jest.fn(),
    };

    mockRouter.mockReturnValue(mockRouterInstance);
  });

  describe('init', () => {
    describe('basic functionality', () => {
      it('should initialize a rest server with simple capabilities', () => {
        const mockReadHandler: ResourceReadHandler<Patient, TestContext> = jest.fn(async () => ({
          resourceType: 'Patient' as const,
          id: '1',
        }));

        const capabilities: CapabilityStatement<TestContext> = {
          resourceType: 'CapabilityStatement',
          status: 'active',
          date: '2023-01-01',
          kind: 'instance',
          fhirVersion: '4.0.1',
          format: ['json'],
          rest: [
            {
              mode: 'server',
              resource: [
                {
                  type: 'Patient',
                  interaction: [
                    {
                      code: 'read',
                      handler: mockReadHandler,
                    },
                  ],
                },
              ],
            },
          ],
        };

        const options: Options<TestContext> = { capabilities };
        const server = init(options);

        expect(server).toHaveProperty('options', options);
        expect(server).toHaveProperty('obtainRestResourceInteractionOption');
        expect(typeof server.obtainRestResourceInteractionOption).toBe('function');
      });

      it('should handle capabilities without rest configuration', () => {
        const capabilities: CapabilityStatement<TestContext> = {
          resourceType: 'CapabilityStatement',
          status: 'active',
          date: '2023-01-01',
          kind: 'instance',
          fhirVersion: '4.0.1',
          format: ['json'],
        };

        const options: Options<TestContext> = { capabilities };
        const server = init(options);

        expect(server.options).toBe(options);

        // Should not find any interactions
        const interaction = server.obtainRestResourceInteractionOption('Patient', 'read');
        expect(interaction).toBeNull();
      });

      it('should handle capabilities with empty rest array', () => {
        const capabilities: CapabilityStatement<TestContext> = {
          resourceType: 'CapabilityStatement',
          status: 'active',
          date: '2023-01-01',
          kind: 'instance',
          fhirVersion: '4.0.1',
          format: ['json'],
          rest: [],
        };

        const options: Options<TestContext> = { capabilities };
        const server = init(options);

        expect(server.options).toBe(options);

        const interaction = server.obtainRestResourceInteractionOption('Patient', 'read');
        expect(interaction).toBeNull();
      });

      it('should include optional fhir configuration', () => {
        const mockFhir = {
          objToXml: jest.fn((obj) => '<xml></xml>'),
        };

        const capabilities: CapabilityStatement<TestContext> = {
          resourceType: 'CapabilityStatement',
          status: 'active',
          date: '2023-01-01',
          kind: 'instance',
          fhirVersion: '4.0.1',
          format: ['json'],
        };

        const options: Options<TestContext> = {
          capabilities,
          fhir: mockFhir,
        };

        const server = init(options);

        expect(server.options.fhir).toBe(mockFhir);
      });
    });

    describe('resource interaction mapping', () => {
      it('should map multiple resource types with multiple interactions', () => {
        const mockReadHandler: ResourceReadHandler<Patient, TestContext> = jest.fn();
        const mockSearchHandler: ResourceSearchTypeHandler<TestContext> = jest.fn();

        const capabilities: CapabilityStatement<TestContext> = {
          resourceType: 'CapabilityStatement',
          status: 'active',
          date: '2023-01-01',
          kind: 'instance',
          fhirVersion: '4.0.1',
          format: ['json'],
          rest: [
            {
              mode: 'server',
              resource: [
                {
                  type: 'Patient',
                  interaction: [
                    {
                      code: 'read',
                      handler: mockReadHandler,
                    },
                    {
                      code: 'search-type',
                      handler: mockSearchHandler,
                    },
                  ],
                },
                {
                  type: 'Observation',
                  interaction: [
                    {
                      code: 'read',
                      handler: mockReadHandler as any, // Need any here due to generic constraint
                    },
                  ],
                },
              ],
            },
          ],
        };

        const server = init({ capabilities });

        // Test Patient interactions
        const patientRead = server.obtainRestResourceInteractionOption('Patient', 'read');
        expect(patientRead).not.toBeNull();
        expect(patientRead?.code).toBe('read');
        expect(patientRead?.handler).toBe(mockReadHandler);

        const patientSearch = server.obtainRestResourceInteractionOption('Patient', 'search-type');
        expect(patientSearch).not.toBeNull();
        expect(patientSearch?.code).toBe('search-type');
        expect(patientSearch?.handler).toBe(mockSearchHandler);

        // Test Observation interactions
        const observationRead = server.obtainRestResourceInteractionOption('Observation', 'read');
        expect(observationRead).not.toBeNull();
        expect(observationRead?.code).toBe('read');

        const observationSearch = server.obtainRestResourceInteractionOption(
          'Observation',
          'search-type',
        );
        expect(observationSearch).toBeNull();
      });

      it('should handle multiple rest configurations', () => {
        const mockPatientHandler: ResourceReadHandler<Patient, TestContext> = jest.fn();
        const mockPractitionerHandler: ResourceReadHandler<Practitioner, TestContext> = jest.fn();

        const capabilities: CapabilityStatement<TestContext> = {
          resourceType: 'CapabilityStatement',
          status: 'active',
          date: '2023-01-01',
          kind: 'instance',
          fhirVersion: '4.0.1',
          format: ['json'],
          rest: [
            {
              mode: 'server',
              resource: [
                {
                  type: 'Patient',
                  interaction: [
                    {
                      code: 'read',
                      handler: mockPatientHandler,
                    },
                  ],
                },
              ],
            },
            {
              mode: 'client',
              resource: [
                {
                  type: 'Practitioner',
                  interaction: [
                    {
                      code: 'read',
                      handler: mockPractitionerHandler,
                    },
                  ],
                },
              ],
            },
          ],
        };

        const server = init({ capabilities });

        const patientRead = server.obtainRestResourceInteractionOption('Patient', 'read');
        expect(patientRead).not.toBeNull();

        const practitionerRead = server.obtainRestResourceInteractionOption('Practitioner', 'read');
        expect(practitionerRead).not.toBeNull();
      });

      it('should handle resources without interactions', () => {
        const capabilities: CapabilityStatement<TestContext> = {
          resourceType: 'CapabilityStatement',
          status: 'active',
          date: '2023-01-01',
          kind: 'instance',
          fhirVersion: '4.0.1',
          format: ['json'],
          rest: [
            {
              mode: 'server',
              resource: [
                {
                  type: 'Patient',
                  interaction: [],
                },
              ],
            },
          ],
        };

        const server = init({ capabilities });

        const interaction = server.obtainRestResourceInteractionOption('Patient', 'read');
        expect(interaction).toBeNull();
      });

      it('should handle rest without resources', () => {
        const capabilities: CapabilityStatement<TestContext> = {
          resourceType: 'CapabilityStatement',
          status: 'active',
          date: '2023-01-01',
          kind: 'instance',
          fhirVersion: '4.0.1',
          format: ['json'],
          rest: [
            {
              mode: 'server',
              resource: [],
            },
          ],
        };

        const server = init({ capabilities });

        const interaction = server.obtainRestResourceInteractionOption('Patient', 'read');
        expect(interaction).toBeNull();
      });
    });

    describe('obtainRestResourceInteractionOption', () => {
      let server: RestServer<TestContext>;

      beforeEach(() => {
        const mockReadHandler: ResourceReadHandler<Patient, TestContext> = jest.fn(async () => ({
          resourceType: 'Patient' as const,
          id: '1',
        }));

        const capabilities: CapabilityStatement<TestContext> = {
          resourceType: 'CapabilityStatement',
          status: 'active',
          date: '2023-01-01',
          kind: 'instance',
          fhirVersion: '4.0.1',
          format: ['json'],
          rest: [
            {
              mode: 'server',
              resource: [
                {
                  type: 'Patient',
                  interaction: [
                    {
                      code: 'read',
                      handler: mockReadHandler,
                    },
                  ],
                },
              ],
            },
          ],
        };

        server = init({ capabilities });
      });

      it('should return interaction when resource and interaction exist', () => {
        const interaction = server.obtainRestResourceInteractionOption('Patient', 'read');

        expect(interaction).not.toBeNull();
        expect(interaction?.code).toBe('read');
      });

      it('should return null when resource does not exist', () => {
        const interaction = server.obtainRestResourceInteractionOption('Observation', 'read');

        expect(interaction).toBeNull();
      });

      it('should return null when resource exists but interaction does not', () => {
        const interaction = server.obtainRestResourceInteractionOption('Patient', 'search-type');

        expect(interaction).toBeNull();
      });

      it('should maintain type safety with correct interaction code', () => {
        const interaction = server.obtainRestResourceInteractionOption('Patient', 'read');

        if (interaction) {
          expect(interaction.code).toBe('read');
          // TypeScript should infer the correct type here
          expect(typeof interaction.handler).toBe('function');
        }
      });
    });
  });

  describe('expressMiddleware', () => {
    let server: RestServer<TestContext>;
    let mockContext: ExpressContextFunction<TestContext>;

    beforeEach(() => {
      const mockReadHandler: ResourceReadHandler<Patient, TestContext> = jest.fn(async () => ({
        resourceType: 'Patient' as const,
        id: '1',
      }));

      const capabilities: CapabilityStatement<TestContext> = {
        resourceType: 'CapabilityStatement',
        status: 'active',
        date: '2023-01-01',
        kind: 'instance',
        fhirVersion: '4.0.1',
        format: ['json'],
        rest: [
          {
            mode: 'server',
            resource: [
              {
                type: 'Patient',
                interaction: [
                  {
                    code: 'read',
                    handler: mockReadHandler,
                  },
                ],
              },
            ],
          },
        ],
      };

      server = init({ capabilities });

      mockContext = jest.fn(async ({ req, res }) => ({
        userId: 'test-user',
        userRole: 'practitioner',
      }));
    });

    it('should create Express middleware with router', () => {
      const options: ExpressMiddlewareOptions<TestContext> = {
        context: mockContext,
      };

      const middleware = expressMiddleware(server, options);

      expect(mockRouter).toHaveBeenCalledWith({ mergeParams: true });
      expect(mockControllersInit).toHaveBeenCalledWith({
        router: mockRouterInstance,
        server,
        context: mockContext,
      });
      expect(middleware).toBe(mockRouterInstance);
    });

    it('should pass server and context to controllers', () => {
      const options: ExpressMiddlewareOptions<TestContext> = {
        context: mockContext,
      };

      expressMiddleware(server, options);

      expect(mockControllersInit).toHaveBeenCalledTimes(1);

      const initCall = mockControllersInit.mock.calls[0][0];
      expect(initCall.router).toBe(mockRouterInstance);
      expect(initCall.server).toBe(server);
      expect(initCall.context).toBe(mockContext);
    });

    it('should create new router instance for each middleware call', () => {
      const options: ExpressMiddlewareOptions<TestContext> = {
        context: mockContext,
      };

      const middleware1 = expressMiddleware(server, options);
      const middleware2 = expressMiddleware(server, options);

      expect(mockRouter).toHaveBeenCalledTimes(2);
      expect(middleware1).toBe(mockRouterInstance);
      expect(middleware2).toBe(mockRouterInstance);
    });

    it('should work with different context types', () => {
      interface CustomContext extends Context {
        customField: string;
      }

      const customCapabilities: CapabilityStatement<CustomContext> = {
        resourceType: 'CapabilityStatement',
        status: 'active',
        date: '2023-01-01',
        kind: 'instance',
        fhirVersion: '4.0.1',
        format: ['json'],
      };

      const customServer = init({ capabilities: customCapabilities });
      const customContextFn: ExpressContextFunction<CustomContext> = jest.fn(async () => ({
        customField: 'test',
      }));

      const customOptions: ExpressMiddlewareOptions<CustomContext> = {
        context: customContextFn,
      };

      const middleware = expressMiddleware(customServer, customOptions);

      expect(mockControllersInit).toHaveBeenCalledWith({
        router: mockRouterInstance,
        server: customServer,
        context: customContextFn,
      });
    });
  });

  describe('integration tests', () => {
    it('should create a complete working server setup', () => {
      const mockReadHandler: ResourceReadHandler<Patient, TestContext> = jest.fn(async () => ({
        resourceType: 'Patient' as const,
        id: '123',
      }));

      const mockSearchHandler: ResourceSearchTypeHandler<TestContext> = jest.fn(async () => ({
        resourceType: 'Bundle' as const,
        type: 'searchset' as const,
        total: 1,
        entry: [],
      }));

      const capabilities: CapabilityStatement<TestContext> = {
        resourceType: 'CapabilityStatement',
        status: 'active',
        date: '2023-01-01',
        kind: 'instance',
        fhirVersion: '4.0.1',
        format: ['json'],
        rest: [
          {
            mode: 'server',
            resource: [
              {
                type: 'Patient',
                interaction: [
                  {
                    code: 'read',
                    handler: mockReadHandler,
                  },
                  {
                    code: 'search-type',
                    handler: mockSearchHandler,
                  },
                ],
              },
            ],
          },
        ],
      };

      const fhir = {
        objToXml: jest.fn((obj) => '<Patient></Patient>'),
      };

      const server = init({ capabilities, fhir });

      const contextFn: ExpressContextFunction<TestContext> = jest.fn(async () => ({
        userId: 'user123',
        userRole: 'admin',
      }));

      const middleware = expressMiddleware(server, { context: contextFn });

      // Verify server structure
      expect(server.options.capabilities).toBe(capabilities);
      expect(server.options.fhir).toBe(fhir);

      // Verify interactions are properly mapped
      const readInteraction = server.obtainRestResourceInteractionOption('Patient', 'read');
      expect(readInteraction?.handler).toBe(mockReadHandler);

      const searchInteraction = server.obtainRestResourceInteractionOption(
        'Patient',
        'search-type',
      );
      expect(searchInteraction?.handler).toBe(mockSearchHandler);

      // Verify middleware is created
      expect(middleware).toBe(mockRouterInstance);
      expect(mockControllersInit).toHaveBeenCalledWith({
        router: mockRouterInstance,
        server,
        context: contextFn,
      });
    });
  });
});
