import type { CapabilityStatement } from "../../src/v4.0.1/capabilitystatement/types";

export const CapabilitystatementBase2: CapabilityStatement = {
  resourceType: "CapabilityStatement",
  id: "base2",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><h2>Base FHIR Capability Statement (Empty)</h2><div><p>This is the base Capability Statement for FHIR. It represents a server that provides the none of the functionality defined by FHIR. It is provided to use as a template for system designers to build their own Capability Statements from. A capability statement has to contain something, so this contains a read of a Capability Statement</p>\n</div><table><tr><td>Mode</td><td>SERVER</td></tr><tr><td>Description</td><td>An empty Capability Statement</td></tr><tr><td>Transaction</td><td></td></tr><tr><td>System History</td><td></td></tr><tr><td>System Search</td><td></td></tr></table><table><tr><th><b>Resource Type</b></th><th><b>Profile</b></th><th><b title="GET a resource (read interaction)">Read</b></th><th><b title="GET all set of resources of the type (search interaction)">Search</b></th><th><b title="PUT a new resource version (update interaction)">Update</b></th><th><b title="POST a new resource (create interaction)">Create</b></th></tr><tr><td>CapabilityStatement</td><td>y</td><td></td><td></td><td></td></tr></table></div>',
  },
  url: "http://hl7.org/fhir/CapabilityStatement/base2",
  version: "4.0.1",
  name: "Base FHIR Capability Statement (Empty)",
  status: "draft",
  experimental: true,
  date: "2019-11-01T09:29:23+11:00",
  publisher: "FHIR Project Team",
  contact: [
    {
      telecom: [
        {
          system: "url",
          value: "http://hl7.org/fhir",
        },
      ],
    },
  ],
  description:
    "This is the base Capability Statement for FHIR. It represents a server that provides the none of the functionality defined by FHIR. It is provided to use as a template for system designers to build their own Capability Statements from. A capability statement has to contain something, so this contains a read of a Capability Statement",
  kind: "capability",
  software: {
    name: "Insert your software name here...",
  },
  fhirVersion: "4.0.1",
  format: ["xml", "json"],
  rest: [
    {
      mode: "server",
      documentation: "An empty Capability Statement",
      security: {
        cors: true,
        service: [
          {
            coding: [
              {
                system:
                  "http://terminology.hl7.org/CodeSystem/restful-security-service",
                code: "SMART-on-FHIR",
                display: "SMART-on-FHIR",
              },
            ],
            text: "See http://docs.smarthealthit.org/",
          },
        ],
        description:
          "This is the Capability Statement to declare that the server supports SMART-on-FHIR. See the SMART-on-FHIR docs for the extension that would go with such a server",
      },
      resource: [
        {
          type: "CapabilityStatement",
          interaction: [
            {
              code: "read",
              documentation: "Read CapabilityStatement Resource",
            },
          ],
        },
      ],
    },
  ],
} as const;

export const CapabilitystatementKnowledgeRepository: CapabilityStatement = {
  resourceType: "CapabilityStatement",
  id: "knowledge-repository",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n      <h2>Knowledge Repository Service Conformance Statement</h2>\n      <div>\n        <p>Basic conformance statement for a Knowledge Repository Service. A server can support more functionality\n           than defined here, but this is the minimum amount</p>\n\n      </div>\n      <table>\n        <tr>\n          <td>Mode</td>\n          <td>SERVER</td>\n        </tr>\n        <tr>\n          <td>Description</td>\n          <td>RESTful Knowledge Repository Server</td>\n        </tr>\n        <tr>\n          <td>Transaction</td>\n          <td/>\n        </tr>\n        <tr>\n          <td>System History</td>\n          <td/>\n        </tr>\n        <tr>\n          <td>System Search</td>\n          <td/>\n        </tr>\n      </table>\n      <table>\n        <tr>\n          <th>\n            <b>Resource Type</b>\n          </th>\n          <th>\n            <b>Profile</b>\n          </th>\n          <th>\n            <b>Read</b>\n          </th>\n          <th>\n            <b>V-Read</b>\n          </th>\n          <th>\n            <b>Search</b>\n          </th>\n          <th>\n            <b>Update</b>\n          </th>\n          <th>\n            <b>Updates</b>\n          </th>\n          <th>\n            <b>Create</b>\n          </th>\n          <th>\n            <b>Delete</b>\n          </th>\n          <th>\n            <b>History</b>\n          </th>\n        </tr>\n      </table>\n    </div>',
  },
  url: "http://hl7.org/fhir/knowledge-repository",
  name: "Knowledge Repository Service Conformance Statement",
  status: "draft",
  date: "2017-02-25",
  publisher: "HL7, Inc",
  contact: [
    {
      name: "FHIR Project",
      telecom: [
        {
          system: "other",
          value: "http://hl7.org/fhir",
        },
      ],
    },
  ],
  description:
    "Basic conformance statement for a Knowledge Repository Service. A server can support more functionality    than defined here, but this is the minimum amount",
  kind: "capability",
  software: {
    name: "ACME Knowledge Repository Service",
  },
  fhirVersion: "4.0.1",
  format: ["json", "xml"],
  rest: [
    {
      mode: "server",
      documentation: "RESTful Knowledge Repository Service",
      security: {
        cors: true,
        service: [
          {
            coding: [
              {
                system:
                  "http://terminology.hl7.org/CodeSystem/restful-security-service",
                code: "Certificates",
              },
            ],
          },
        ],
      },
      resource: [
        {
          type: "Library",
          profile: "StructureDefinition/Library",
          interaction: [
            {
              code: "read",
              documentation:
                "Read allows clients to get the logical definitions of the libraries",
            },
            {
              code: "search-type",
              documentation:
                "Search allows clients to filter libraries based on a provided search parameter",
            },
          ],
          searchParam: [
            {
              name: "description",
              definition:
                "http://hl7.org/fhir/SearchParameter/Library-description",
              type: "string",
            },
            {
              name: "identifier",
              definition:
                "http://hl7.org/fhir/SearchParameter/Library-identifier",
              type: "token",
            },
            {
              name: "status",
              definition: "http://hl7.org/fhir/SearchParameter/Library-status",
              type: "token",
            },
            {
              name: "title",
              definition: "http://hl7.org/fhir/SearchParameter/Library-title",
              type: "string",
            },
            {
              name: "topic",
              definition: "http://hl7.org/fhir/SearchParameter/Library-topic",
              type: "token",
            },
            {
              name: "version",
              definition: "http://hl7.org/fhir/SearchParameter/Library-version",
              type: "string",
            },
            {
              name: "composed-of",
              definition:
                "http://hl7.org/fhir/SearchParameter/Library-composed-of",
              type: "reference",
            },
            {
              name: "depends-on",
              definition:
                "http://hl7.org/fhir/SearchParameter/Library-depends-on",
              type: "reference",
            },
            {
              name: "derived-from",
              definition:
                "http://hl7.org/fhir/SearchParameter/Library-derived-from",
              type: "reference",
            },
            {
              name: "predecessor",
              definition:
                "http://hl7.org/fhir/SearchParameter/Library-predecessor",
              type: "reference",
            },
            {
              name: "successor",
              definition:
                "http://hl7.org/fhir/SearchParameter/Library-successor",
              type: "reference",
            },
          ],
        },
        {
          type: "PlanDefinition",
          profile: "StructureDefinition/PlanDefinition",
          interaction: [
            {
              code: "read",
              documentation:
                "Read allows clients to get the logical definitions of the plan definitions",
            },
            {
              code: "search-type",
              documentation:
                "Search allows clients to filter plan definitions based on a provided search parameter",
            },
          ],
          searchParam: [
            {
              name: "description",
              definition:
                "http://hl7.org/fhir/SearchParameter/PlanDefinition-description",
              type: "string",
            },
            {
              name: "identifier",
              definition:
                "http://hl7.org/fhir/SearchParameter/PlanDefinition-identifier",
              type: "token",
            },
            {
              name: "status",
              definition:
                "http://hl7.org/fhir/SearchParameter/PlanDefinition-status",
              type: "token",
            },
            {
              name: "title",
              definition:
                "http://hl7.org/fhir/SearchParameter/PlanDefinition-title",
              type: "string",
            },
            {
              name: "topic",
              definition:
                "http://hl7.org/fhir/SearchParameter/PlanDefinition-topic",
              type: "token",
            },
            {
              name: "version",
              definition:
                "http://hl7.org/fhir/SearchParameter/PlanDefinition-version",
              type: "string",
            },
            {
              name: "composed-of",
              definition:
                "http://hl7.org/fhir/SearchParameter/PlanDefinition-composed-of",
              type: "reference",
            },
            {
              name: "depends-on",
              definition:
                "http://hl7.org/fhir/SearchParameter/PlanDefinition-depends-on",
              type: "reference",
            },
            {
              name: "derived-from",
              definition:
                "http://hl7.org/fhir/SearchParameter/PlanDefinition-derived-from",
              type: "reference",
            },
            {
              name: "predecessor",
              definition:
                "http://hl7.org/fhir/SearchParameter/PlanDefinition-predecessor",
              type: "reference",
            },
            {
              name: "successor",
              definition:
                "http://hl7.org/fhir/SearchParameter/PlanDefinition-successor",
              type: "reference",
            },
          ],
        },
        {
          type: "ActivityDefinition",
          profile: "StructureDefinition/ActivityDefinition",
          interaction: [
            {
              code: "read",
              documentation:
                "Read allows clients to get the logical definitions of the activity definitions",
            },
            {
              code: "search-type",
              documentation:
                "Search allows clients to filter activity definitions based on a provided search parameter",
            },
          ],
          searchParam: [
            {
              name: "description",
              definition:
                "http://hl7.org/fhir/SearchParameter/ActivityDefinition-description",
              type: "string",
            },
            {
              name: "identifier",
              definition:
                "http://hl7.org/fhir/SearchParameter/ActivityDefinition-identifier",
              type: "token",
            },
            {
              name: "status",
              definition:
                "http://hl7.org/fhir/SearchParameter/ActivityDefinition-status",
              type: "token",
            },
            {
              name: "title",
              definition:
                "http://hl7.org/fhir/SearchParameter/ActivityDefinition-title",
              type: "string",
            },
            {
              name: "topic",
              definition:
                "http://hl7.org/fhir/SearchParameter/ActivityDefinition-topic",
              type: "token",
            },
            {
              name: "version",
              definition:
                "http://hl7.org/fhir/SearchParameter/ActivityDefinition-version",
              type: "string",
            },
            {
              name: "composed-of",
              definition:
                "http://hl7.org/fhir/SearchParameter/ActivityDefinition-composed-of",
              type: "reference",
            },
            {
              name: "depends-on",
              definition:
                "http://hl7.org/fhir/SearchParameter/ActivityDefinition-depends-on",
              type: "reference",
            },
            {
              name: "derived-from",
              definition:
                "http://hl7.org/fhir/SearchParameter/ActivityDefinition-derived-from",
              type: "reference",
            },
            {
              name: "predecessor",
              definition:
                "http://hl7.org/fhir/SearchParameter/ActivityDefinition-predecessor",
              type: "reference",
            },
            {
              name: "successor",
              definition:
                "http://hl7.org/fhir/SearchParameter/ActivityDefinition-successor",
              type: "reference",
            },
          ],
        },
        {
          type: "Measure",
          profile: "StructureDefinition/Measure",
          interaction: [
            {
              code: "read",
              documentation:
                "Read allows clients to get the logical definitions of the measures",
            },
            {
              code: "search-type",
              documentation:
                "Search allows clients to filter measures based on a provided search parameter",
            },
          ],
          searchParam: [
            {
              name: "description",
              definition:
                "http://hl7.org/fhir/SearchParameter/Measure-description",
              type: "string",
            },
            {
              name: "identifier",
              definition:
                "http://hl7.org/fhir/SearchParameter/Measure-identifier",
              type: "token",
            },
            {
              name: "status",
              definition: "http://hl7.org/fhir/SearchParameter/Measure-status",
              type: "token",
            },
            {
              name: "title",
              definition: "http://hl7.org/fhir/SearchParameter/Measure-title",
              type: "string",
            },
            {
              name: "topic",
              definition: "http://hl7.org/fhir/SearchParameter/Measure-topic",
              type: "token",
            },
            {
              name: "version",
              definition: "http://hl7.org/fhir/SearchParameter/Measure-version",
              type: "string",
            },
            {
              name: "composed-of",
              definition:
                "http://hl7.org/fhir/SearchParameter/Measure-composed-of",
              type: "reference",
            },
            {
              name: "depends-on",
              definition:
                "http://hl7.org/fhir/SearchParameter/Measure-depends-on",
              type: "reference",
            },
            {
              name: "derived-from",
              definition:
                "http://hl7.org/fhir/SearchParameter/Measure-derived-from",
              type: "reference",
            },
            {
              name: "predecessor",
              definition:
                "http://hl7.org/fhir/SearchParameter/Measure-predecessor",
              type: "reference",
            },
            {
              name: "successor",
              definition:
                "http://hl7.org/fhir/SearchParameter/Measure-successor",
              type: "reference",
            },
          ],
        },
        {
          type: "Questionnaire",
          profile: "StructureDefinition/Questionnaire",
          interaction: [
            {
              code: "read",
              documentation:
                "Read allows clients to get the logical definitions of the measures",
            },
            {
              code: "search-type",
              documentation:
                "Search allows clients to filter measures based on a provided search parameter",
            },
          ],
          searchParam: [
            {
              name: "code",
              definition:
                "http://hl7.org/fhir/SearchParameter/Questionnaire-code",
              type: "token",
            },
            {
              name: "context",
              definition:
                "http://hl7.org/fhir/SearchParameter/Questionnaire-context",
              type: "token",
            },
            {
              name: "date",
              definition:
                "http://hl7.org/fhir/SearchParameter/Questionnaire-date",
              type: "date",
            },
            {
              name: "identifier",
              definition:
                "http://hl7.org/fhir/SearchParameter/Questionnaire-identifier",
              type: "token",
            },
            {
              name: "publisher",
              definition:
                "http://hl7.org/fhir/SearchParameter/Questionnaire-publisher",
              type: "string",
            },
            {
              name: "status",
              definition:
                "http://hl7.org/fhir/SearchParameter/Questionnaire-status",
              type: "token",
            },
            {
              name: "title",
              definition:
                "http://hl7.org/fhir/SearchParameter/Questionnaire-title",
              type: "string",
            },
            {
              name: "version",
              definition:
                "http://hl7.org/fhir/SearchParameter/Questionnaire-version",
              type: "string",
            },
          ],
        },
      ],
      operation: [
        {
          name: "data-requirements",
          definition: "OperationDefinition/Library-data-requirements",
        },
      ],
    },
  ],
} as const;

export const CapabilitystatementMeasureProcessor: CapabilityStatement = {
  resourceType: "CapabilityStatement",
  id: "measure-processor",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n      <h2>Measure Calculation Service Conformance Statement</h2>\n      <div>\n        <p>Basic conformance statement for a Measure Processor Service. A server can support more functionality\n           than defined here, but this is the minimum amount</p>\n\n      </div>\n      <table>\n        <tr>\n          <td>Mode</td>\n          <td>SERVER</td>\n        </tr>\n        <tr>\n          <td>Description</td>\n          <td>RESTful Measure Processor Server</td>\n        </tr>\n        <tr>\n          <td>Transaction</td>\n          <td/>\n        </tr>\n        <tr>\n          <td>System History</td>\n          <td/>\n        </tr>\n        <tr>\n          <td>System Search</td>\n          <td/>\n        </tr>\n      </table>\n      <table>\n        <tr>\n          <th>\n            <b>Resource Type</b>\n          </th>\n          <th>\n            <b>Profile</b>\n          </th>\n          <th>\n            <b>Read</b>\n          </th>\n          <th>\n            <b>V-Read</b>\n          </th>\n          <th>\n            <b>Search</b>\n          </th>\n          <th>\n            <b>Update</b>\n          </th>\n          <th>\n            <b>Updates</b>\n          </th>\n          <th>\n            <b>Create</b>\n          </th>\n          <th>\n            <b>Delete</b>\n          </th>\n          <th>\n            <b>History</b>\n          </th>\n        </tr>\n      </table>\n    </div>',
  },
  url: "http://hl7.org/fhir/measure-processor",
  name: "Measure Processor Service Conformance Statement",
  status: "draft",
  date: "2016-09-16",
  publisher: "HL7, Inc",
  contact: [
    {
      name: "FHIR Project",
      telecom: [
        {
          system: "other",
          value: "http://hl7.org/fhir",
        },
      ],
    },
  ],
  description:
    "Basic conformance statement for a Measure Processor Service. A server can support more functionality    than defined here, but this is the minimum amount",
  kind: "capability",
  software: {
    name: "ACME Measure Processor Service",
  },
  fhirVersion: "4.0.1",
  format: ["json", "xml"],
  rest: [
    {
      mode: "server",
      documentation: "RESTful Measure Processor Service",
      security: {
        cors: true,
        service: [
          {
            coding: [
              {
                system:
                  "http://terminology.hl7.org/CodeSystem/restful-security-service",
                code: "Certificates",
              },
            ],
          },
        ],
      },
      resource: [
        {
          type: "Measure",
          profile: "StructureDefinition/Measure",
          interaction: [
            {
              code: "read",
              documentation:
                "Read allows clients to get the logical definitions of the measures",
            },
            {
              code: "search-type",
              documentation:
                "Search allows clients to filter measures based on a provided search parameter",
            },
          ],
          searchParam: [
            {
              name: "identifier",
              definition:
                "http://hl7.org/fhir/SearchParameter/Measure-identifier",
              type: "token",
            },
            {
              name: "status",
              definition: "http://hl7.org/fhir/SearchParameter/Measure-status",
              type: "token",
            },
            {
              name: "version",
              definition: "http://hl7.org/fhir/SearchParameter/Measure-version",
              type: "string",
            },
          ],
        },
      ],
      operation: [
        {
          name: "evaluate-measure",
          definition: "OperationDefinition/Measure-evaluate-measure",
        },
        {
          name: "data-requirements",
          definition: "OperationDefinition/Measure-data-requirements",
        },
      ],
    },
  ],
} as const;

export const CapabilitystatementPhrExample: CapabilityStatement = {
  resourceType: "CapabilityStatement",
  id: "phr",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n     \n      <p>Prototype Capability Statement for September 2013 Connectathon</p>\n     \n      <p>The server offers read and search support on the following resource types:</p>\n     \n      <ul>\n      \n        <li>Patient</li>\n      \n        <li>DocumentReference</li>\n      \n        <li>Condition</li>\n      \n        <li>DiagnosticReport</li>\n    \n      </ul>\n    \n    </div>',
  },
  name: "PHR Template",
  status: "draft",
  date: "2013-06-18",
  publisher: "FHIR Project",
  contact: [
    {
      telecom: [
        {
          system: "url",
          value: "http://hl7.org/fhir",
        },
      ],
    },
  ],
  description: "Prototype Capability Statement for September 2013 Connectathon",
  kind: "capability",
  software: {
    name: "ACME PHR Server",
  },
  fhirVersion: "4.0.1",
  format: ["json", "xml"],
  rest: [
    {
      mode: "server",
      documentation:
        "Protoype server Capability Statement for September 2013 Connectathon",
      security: {
        service: [
          {
            text: "OAuth",
          },
        ],
        description:
          "We recommend that PHR servers use standard OAuth using a          standard 3rd party provider. We are not testing the ability to provide an          OAuth authentication/authorization service itself, and nor is providing          any security required for the connectathon at all",
      },
      resource: [
        {
          type: "Patient",
          interaction: [
            {
              code: "read",
            },
            {
              code: "search-type",
              documentation:
                "When a client searches patients with no search criteria, they get a list of all patients they have access too. Servers may elect to offer additional search parameters, but this is not required",
            },
          ],
        },
        {
          type: "DocumentReference",
          interaction: [
            {
              code: "read",
            },
            {
              code: "search-type",
            },
          ],
          searchParam: [
            {
              name: "_id",
              type: "token",
              documentation:
                "_id parameter always supported. For the connectathon, servers may elect which search parameters are supported",
            },
          ],
        },
        {
          type: "Condition",
          interaction: [
            {
              code: "read",
            },
            {
              code: "search-type",
            },
          ],
          searchParam: [
            {
              name: "_id",
              type: "token",
              documentation: "Standard _id parameter",
            },
          ],
        },
        {
          type: "DiagnosticReport",
          interaction: [
            {
              code: "read",
            },
            {
              code: "search-type",
            },
          ],
          searchParam: [
            {
              name: "_id",
              type: "token",
              documentation: "Standard _id parameter",
            },
            {
              name: "service",
              type: "token",
              documentation:
                "which diagnostic discipline/department created the report",
            },
          ],
        },
      ],
    },
  ],
  meta: {
    tag: [
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "HTEST",
        display: "test health data",
      },
    ],
  },
} as const;

export const CapabilitystatementTerminologyServer: CapabilityStatement = {
  resourceType: "CapabilityStatement",
  id: "terminology-server",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n      <h2>Terminology Service Capability Statement</h2>\n      <div>\n        <p>Basic capability statement for a Terminology Server. A server can support more fucntionality than defined here, but this is the minimum amount</p>\n\n      </div>\n      <table>\n        <tr>\n          <td>Mode</td>\n          <td>SERVER</td>\n        </tr>\n        <tr>\n          <td>Description</td>\n          <td>RESTful Terminology Server</td>\n        </tr>\n        <tr>\n          <td>Transaction</td>\n          <td/>\n        </tr>\n        <tr>\n          <td>System History</td>\n          <td/>\n        </tr>\n        <tr>\n          <td>System Search</td>\n          <td/>\n        </tr>\n      </table>\n      <table>\n        <tr>\n          <th>\n            <b>Resource Type</b>\n          </th>\n          <th>\n            <b>Profile</b>\n          </th>\n          <th>\n            <b title="GET a resource (read interaction)">Read</b>\n          </th>\n          <th>\n            <b title="GET all set of resources of the type (search interaction)">Search</b>\n          </th>\n          <th>\n            <b title="PUT a new resource version (update interaction)">Update</b>\n          </th>\n          <th>\n            <b title="POST a new resource (create interaction)">Create</b>\n          </th>\n        </tr>\n        <tr>\n          <td>ValueSet</td>\n          <td>\n            <a href="StructureDefinition/ValueSet">StructureDefinition/ValueSet</a>\n          </td>\n          <td>y</td>\n          <td>y</td>\n          <td/>\n          <td/>\n        </tr>\n        <tr>\n          <td>ConceptMap</td>\n          <td>\n            <a href="StructureDefinition/ConceptMap">StructureDefinition/ConceptMap</a>\n          </td>\n          <td>y</td>\n          <td>y</td>\n          <td/>\n          <td/>\n        </tr>\n      </table>\n    </div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/capabilitystatement-supported-system",
      valueUri: "http://loinc.org",
    },
  ],
  url: "http://hl7.org/fhir/terminology-server",
  version: "4.0.1",
  name: "Terminology Service Capability Statement",
  status: "draft",
  date: "2015-07-05",
  publisher: "HL7, Inc",
  contact: [
    {
      name: "FHIR Project",
      telecom: [
        {
          system: "url",
          value: "http://hl7.org/fhir",
        },
      ],
    },
  ],
  description:
    "Basic capability statement for a Terminology Server. A server can support more fucntionality than defined here, but this is the minimum amount",
  kind: "capability",
  software: {
    name: "ACME Terminology Server",
  },
  fhirVersion: "4.0.1",
  format: ["json", "xml"],
  rest: [
    {
      mode: "server",
      documentation: "RESTful Terminology Server",
      security: {
        cors: true,
        service: [
          {
            coding: [
              {
                system:
                  "http://terminology.hl7.org/CodeSystem/restful-security-service",
                code: "Certificates",
              },
            ],
          },
        ],
      },
      resource: [
        {
          type: "ValueSet",
          profile: "StructureDefinition/ValueSet",
          interaction: [
            {
              extension: [
                {
                  url: "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation",
                  valueCode: "SHALL",
                },
              ],
              code: "read",
              documentation:
                "Read allows clients to get the logical definitions of the value sets",
            },
            {
              extension: [
                {
                  url: "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation",
                  valueCode: "SHALL",
                },
              ],
              code: "search-type",
              documentation:
                "Search allows clients to find value sets on the server",
            },
          ],
          searchParam: [
            {
              name: "date",
              definition: "http://hl7.org/fhir/SearchParameter/ValueSet-date",
              type: "date",
            },
            {
              name: "name",
              definition: "http://hl7.org/fhir/SearchParameter/ValueSet-name",
              type: "string",
            },
            {
              name: "reference",
              definition:
                "http://hl7.org/fhir/SearchParameter/ValueSet-reference",
              type: "token",
            },
            {
              name: "status",
              definition: "http://hl7.org/fhir/SearchParameter/ValueSet-status",
              type: "token",
            },
            {
              name: "url",
              definition: "http://hl7.org/fhir/SearchParameter/ValueSet-url",
              type: "uri",
            },
            {
              name: "version",
              definition:
                "http://hl7.org/fhir/SearchParameter/ValueSet-version",
              type: "token",
            },
          ],
        },
        {
          type: "ConceptMap",
          profile: "StructureDefinition/ConceptMap",
          interaction: [
            {
              extension: [
                {
                  url: "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation",
                  valueCode: "SHALL",
                },
              ],
              code: "read",
              documentation:
                "Read allows clients to get the logical definitions of the concept maps",
            },
            {
              extension: [
                {
                  url: "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation",
                  valueCode: "SHALL",
                },
              ],
              code: "search-type",
              documentation:
                "Search allows clients to find concept maps on the server",
            },
          ],
          searchParam: [
            {
              name: "date",
              definition: "http://hl7.org/fhir/SearchParameter/ConceptMap-date",
              type: "date",
            },
            {
              name: "name",
              definition: "http://hl7.org/fhir/SearchParameter/ConceptMap-name",
              type: "string",
            },
            {
              name: "status",
              definition:
                "http://hl7.org/fhir/SearchParameter/ConceptMap-status",
              type: "token",
            },
            {
              name: "source",
              definition:
                "http://hl7.org/fhir/SearchParameter/ConceptMap-source",
              type: "uri",
            },
            {
              name: "target",
              definition:
                "http://hl7.org/fhir/SearchParameter/ConceptMap-target",
              type: "uri",
            },
            {
              name: "url",
              definition: "http://hl7.org/fhir/SearchParameter/ConceptMap-url",
              type: "uri",
            },
            {
              name: "version",
              definition:
                "http://hl7.org/fhir/SearchParameter/ConceptMap-version",
              type: "token",
            },
          ],
        },
      ],
      operation: [
        {
          extension: [
            {
              url: "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation",
              valueCode: "SHALL",
            },
          ],
          name: "expand",
          definition: "OperationDefinition/ValueSet-expand",
        },
        {
          extension: [
            {
              url: "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation",
              valueCode: "SHALL",
            },
          ],
          name: "lookup",
          definition: "OperationDefinition/CodeSystem-lookup",
        },
        {
          extension: [
            {
              url: "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation",
              valueCode: "SHALL",
            },
          ],
          name: "validate-code",
          definition: "OperationDefinition/ValueSet-validate-code",
        },
        {
          extension: [
            {
              url: "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation",
              valueCode: "SHALL",
            },
          ],
          name: "translate",
          definition: "OperationDefinition/ConceptMap-translate",
        },
        {
          extension: [
            {
              url: "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation",
              valueCode: "SHOULD",
            },
          ],
          name: "closure",
          definition: "OperationDefinition/ConceptMap-closure",
        },
      ],
    },
  ],
} as const;
