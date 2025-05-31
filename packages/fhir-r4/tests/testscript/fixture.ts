import type { TestScript } from "../../src/v4.0.1/testscript/types";

export const TestscriptExampleHistory: TestScript = {
  resourceType: "TestScript",
  id: "testscript-example-history",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: testscript-example-history</p><p><b>url</b>: <b>http://hl7.org/fhir/TestScript/testscript-example-history</b></p><p><b>identifier</b>: urn:oid:1.3.6.1.4.1.21367.2005.3.7.9877</p><p><b>version</b>: 1.0</p><p><b>name</b>: TestScript Example History</p><p><b>status</b>: draft</p><p><b>experimental</b>: true</p><p><b>date</b>: 18/01/2017</p><p><b>publisher</b>: HL7</p><p><b>contact</b>: </p><p><b>description</b>: TestScript example resource with setup to delete if present and create a new instance of a Patient then update that Patient to create a minimum history; and single test definition to get the history of that Patient with various asserts.</p><p><b>jurisdiction</b>: United States of America (the) <span>(Details : {urn:iso:std:iso:3166 code 'US' = 'United States of America', given as 'United States of America (the)'})</span></p><p><b>purpose</b>: Patient (Conditional) Create, Update, Delete and History (Instance) Operations</p><p><b>copyright</b>: © HL7.org 2011+</p><blockquote><p><b>metadata</b></p><h3>Links</h3><table><tr><td>-</td><td><b>Url</b></td><td><b>Description</b></td></tr><tr><td>*</td><td><a>http://hl7.org/fhir/patient.html</a></td><td>Demographics and other administrative information about an individual or animal receiving care or other health-related services.</td></tr></table><h3>Capabilities</h3><table><tr><td>-</td><td><b>Required</b></td><td><b>Validated</b></td><td><b>Description</b></td><td><b>Link</b></td><td><b>Capabilities</b></td></tr><tr><td>*</td><td>true</td><td>false</td><td>Patient Update, Delete and History (Instance) Operations</td><td><a>http://hl7.org/fhir/http.html#update</a></td><td><a>CapabilityStatement/example</a></td></tr></table></blockquote><blockquote><p><b>fixture</b></p><p><b>autocreate</b>: false</p><p><b>autodelete</b>: false</p><p><b>resource</b>: <a>Peter Chalmers</a></p></blockquote><blockquote><p><b>fixture</b></p><p><b>autocreate</b>: false</p><p><b>autodelete</b>: false</p><p><b>resource</b>: <a>Donald Duck</a></p></blockquote><p><b>profile</b>: <a>Generated Summary: url: http://hl7.org/fhir/StructureDefinition/Bundle; version: 4.0.1; name: Bundle; ACTIVE; date: 01/11/2019 9:29:23 AM; publisher: Health Level Seven International (FHIR Infrastructure); description: A container for a collection of resources.; 4.0.1; RESOURCE; type: Bundle; baseDefinition: http://hl7.org/fhir/StructureDefinition/Resource; SPECIALIZATION</a></p><h3>Variables</h3><table><tr><td>-</td><td><b>Name</b></td><td><b>Path</b></td><td><b>SourceId</b></td></tr><tr><td>*</td><td>createResourceId</td><td>Patient/id</td><td>fixture-patient-create</td></tr></table><blockquote><p><b>setup</b></p><blockquote><p><b>action</b></p><h3>Operations</h3><table><tr><td>-</td><td><b>Type</b></td><td><b>Resource</b></td><td><b>Label</b></td><td><b>Description</b></td><td><b>Accept</b></td><td><b>EncodeRequestUrl</b></td><td><b>Params</b></td></tr><tr><td>*</td><td>Delete (Details: http://terminology.hl7.org/CodeSystem/testscript-operation-codes code delete = 'Delete', stated as 'null')</td><td>Patient</td><td>SetupDeletePatient</td><td>Execute a delete operation to insure the patient does not exist on the server.</td><td>json</td><td>true</td><td>/${createResourceId}</td></tr></table></blockquote><blockquote><p><b>action</b></p><h3>Asserts</h3><table><tr><td>-</td><td><b>Description</b></td><td><b>Direction</b></td><td><b>Operator</b></td><td><b>ResponseCode</b></td><td><b>WarningOnly</b></td></tr><tr><td>*</td><td>Confirm that the returned HTTP status is 200(OK) or 204(No Content).</td><td>response</td><td>in</td><td>200,204</td><td>false</td></tr></table></blockquote><blockquote><p><b>action</b></p><h3>Operations</h3><table><tr><td>-</td><td><b>Type</b></td><td><b>Resource</b></td><td><b>Label</b></td><td><b>Description</b></td><td><b>Accept</b></td><td><b>ContentType</b></td><td><b>EncodeRequestUrl</b></td><td><b>Params</b></td><td><b>SourceId</b></td></tr><tr><td>*</td><td>Update (Details: http://terminology.hl7.org/CodeSystem/testscript-operation-codes code update = 'Update', stated as 'null')</td><td>Patient</td><td>SetupCreatePatient</td><td>Create patient resource on test server using the contents of fixture-patient-create</td><td>json</td><td>json</td><td>true</td><td>/${createResourceId}</td><td>fixture-patient-create</td></tr></table></blockquote><blockquote><p><b>action</b></p><h3>Asserts</h3><table><tr><td>-</td><td><b>Description</b></td><td><b>Direction</b></td><td><b>ResponseCode</b></td><td><b>WarningOnly</b></td></tr><tr><td>*</td><td>Confirm that the returned HTTP status is 201(Created).</td><td>response</td><td>201</td><td>false</td></tr></table></blockquote><blockquote><p><b>action</b></p><h3>Operations</h3><table><tr><td>-</td><td><b>Type</b></td><td><b>Resource</b></td><td><b>Label</b></td><td><b>Description</b></td><td><b>Accept</b></td><td><b>ContentType</b></td><td><b>EncodeRequestUrl</b></td><td><b>Params</b></td><td><b>SourceId</b></td></tr><tr><td>*</td><td>Update (Details: http://terminology.hl7.org/CodeSystem/testscript-operation-codes code update = 'Update', stated as 'null')</td><td>Patient</td><td>SetupUpdatePatient</td><td>Update patient resource on test server using the contents of fixture-patient-update</td><td>json</td><td>json</td><td>true</td><td>/${createResourceId}</td><td>fixture-patient-update</td></tr></table></blockquote><blockquote><p><b>action</b></p><h3>Asserts</h3><table><tr><td>-</td><td><b>Description</b></td><td><b>Direction</b></td><td><b>ResponseCode</b></td><td><b>WarningOnly</b></td></tr><tr><td>*</td><td>Confirm that the returned HTTP status is 200(OK).</td><td>response</td><td>200</td><td>false</td></tr></table></blockquote></blockquote><blockquote><p><b>test</b></p><p><b>name</b>: History Patient</p><p><b>description</b>: Get the history for a known Patient and validate response.</p><blockquote><p><b>action</b></p><h3>Operations</h3><table><tr><td>-</td></tr><tr><td>*</td></tr></table></blockquote><blockquote><p><b>action</b></p><h3>Asserts</h3><table><tr><td>-</td></tr><tr><td>*</td></tr></table></blockquote><blockquote><p><b>action</b></p><h3>Asserts</h3><table><tr><td>-</td></tr><tr><td>*</td></tr></table></blockquote><blockquote><p><b>action</b></p><h3>Asserts</h3><table><tr><td>-</td></tr><tr><td>*</td></tr></table></blockquote><blockquote><p><b>action</b></p><h3>Asserts</h3><table><tr><td>-</td></tr><tr><td>*</td></tr></table></blockquote></blockquote></div>",
  },
  url: "http://hl7.org/fhir/TestScript/testscript-example-history",
  identifier: {
    system: "urn:ietf:rfc:3986",
    value: "urn:oid:1.3.6.1.4.1.21367.2005.3.7.9877",
  },
  version: "1.0",
  name: "TestScript Example History",
  status: "draft",
  experimental: true,
  date: "2017-01-18",
  publisher: "HL7",
  contact: [
    {
      name: "Support",
      telecom: [
        {
          system: "email",
          value: "support@HL7.org",
          use: "work",
        },
      ],
    },
  ],
  description:
    "TestScript example resource with setup to delete if present and create a new instance of a Patient then update that Patient to create a minimum history; and single test definition to get the history of that Patient with various asserts.",
  jurisdiction: [
    {
      coding: [
        {
          system: "urn:iso:std:iso:3166",
          code: "US",
          display: "United States of America (the)",
        },
      ],
    },
  ],
  purpose:
    "Patient (Conditional) Create, Update, Delete and History (Instance) Operations",
  copyright: "© HL7.org 2011+",
  metadata: {
    link: [
      {
        url: "http://hl7.org/fhir/patient.html",
        description:
          "Demographics and other administrative information about an individual or animal receiving care or other health-related services.",
      },
    ],
    capability: [
      {
        required: true,
        validated: false,
        description: "Patient Update, Delete and History (Instance) Operations",
        link: [
          "http://hl7.org/fhir/http.html#update",
          "http://hl7.org/fhir/http.html#delete",
          "http://hl7.org/fhir/http.html#history",
        ],
        capabilities: "CapabilityStatement/example",
      },
    ],
  },
  fixture: [
    {
      id: "fixture-patient-create",
      autocreate: false,
      autodelete: false,
      resource: {
        reference: "Patient/example",
        display: "Peter Chalmers",
      },
    },
    {
      id: "fixture-patient-update",
      autocreate: false,
      autodelete: false,
      resource: {
        reference: "Patient/pat1",
        display: "Donald Duck",
      },
    },
  ],
  profile: [
    {
      id: "bundle-profile",
      reference: "http://hl7.org/fhir/StructureDefinition/Bundle",
    },
  ],
  variable: [
    {
      name: "createResourceId",
      path: "Patient/id",
      sourceId: "fixture-patient-create",
    },
  ],
  setup: {
    action: [
      {
        operation: {
          type: {
            system:
              "http://terminology.hl7.org/CodeSystem/testscript-operation-codes",
            code: "delete",
          },
          resource: "Patient",
          label: "SetupDeletePatient",
          description:
            "Execute a delete operation to insure the patient does not exist on the server.",
          accept: "json",
          encodeRequestUrl: true,
          params: "/${createResourceId}",
        },
      },
      {
        assert: {
          description:
            "Confirm that the returned HTTP status is 200(OK) or 204(No Content).",
          direction: "response",
          operator: "in",
          responseCode: "200,204",
          warningOnly: false,
        },
      },
      {
        operation: {
          type: {
            system:
              "http://terminology.hl7.org/CodeSystem/testscript-operation-codes",
            code: "update",
          },
          resource: "Patient",
          label: "SetupCreatePatient",
          description:
            "Create patient resource on test server using the contents of fixture-patient-create",
          accept: "json",
          contentType: "json",
          encodeRequestUrl: true,
          params: "/${createResourceId}",
          sourceId: "fixture-patient-create",
        },
      },
      {
        assert: {
          description: "Confirm that the returned HTTP status is 201(Created).",
          direction: "response",
          responseCode: "201",
          warningOnly: false,
        },
      },
      {
        operation: {
          type: {
            system:
              "http://terminology.hl7.org/CodeSystem/testscript-operation-codes",
            code: "update",
          },
          resource: "Patient",
          label: "SetupUpdatePatient",
          description:
            "Update patient resource on test server using the contents of fixture-patient-update",
          accept: "json",
          contentType: "json",
          encodeRequestUrl: true,
          params: "/${createResourceId}",
          sourceId: "fixture-patient-update",
        },
      },
      {
        assert: {
          description: "Confirm that the returned HTTP status is 200(OK).",
          direction: "response",
          responseCode: "200",
          warningOnly: false,
        },
      },
    ],
  },
  test: [
    {
      id: "01-HistoryPatient",
      name: "History Patient",
      description: "Get the history for a known Patient and validate response.",
      action: [
        {
          operation: {
            type: {
              system:
                "http://terminology.hl7.org/CodeSystem/testscript-operation-codes",
              code: "history",
            },
            resource: "Patient",
            description:
              "Get the Patient history on the test server using the id from fixture-patient-create.",
            accept: "json",
            contentType: "json",
            encodeRequestUrl: true,
            targetId: "fixture-patient-create",
          },
        },
        {
          assert: {
            description: "Confirm that the returned HTTP status is 200(OK).",
            direction: "response",
            response: "okay",
            warningOnly: false,
          },
        },
        {
          assert: {
            description: "Confirm that the returned resource type is Bundle.",
            resource: "Bundle",
            warningOnly: false,
          },
        },
        {
          assert: {
            description:
              "Confirm that the returned Bundle conforms to the base FHIR specification.",
            validateProfileId: "bundle-profile",
            warningOnly: false,
          },
        },
        {
          assert: {
            description:
              "Confirm that the returned Bundle type equals 'history'.",
            operator: "equals",
            path: "fhir:Bundle/fhir:type/@value",
            value: "history",
            warningOnly: false,
          },
        },
      ],
    },
  ],
} as const;

export const TestscriptExampleMultisystem: TestScript = {
  resourceType: "TestScript",
  id: "testscript-example-multisystem",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: testscript-example-multisystem</p><p><b>url</b>: <b>http://hl7.org/fhir/TestScript/testscript-example-multisystem</b></p><p><b>identifier</b>: urn:oid:1.3.6.1.4.1.21367.2005.3.7.9878</p><p><b>version</b>: 1.0</p><p><b>name</b>: testscript-example-multisystem</p><p><b>title</b>: Multisystem Test Script</p><p><b>status</b>: draft</p><p><b>experimental</b>: true</p><p><b>date</b>: 18/01/2017</p><p><b>publisher</b>: HL7</p><p><b>contact</b>: </p><p><b>description</b>: TestScript example resource showing use of origin and destination for multisystem support. The single origin will execute a Patient read against the two destination systems using user defined dynamic variables. The test engine will wait at each operation action with a defined origin and destination for the origin test system to send the expected FHIR operation to the destination test system. Once the expected request and response is observed, the test engine will continue with the test execution.</p><p><b>jurisdiction</b>: United States of America (the) <span>(Details : {urn:iso:std:iso:3166 code 'US' = 'United States of America', given as 'United States of America (the)'})</span></p><p><b>purpose</b>: Patient Read Operation</p><p><b>copyright</b>: © HL7.org 2011+</p><h3>Origins</h3><table><tr><td>-</td><td><b>Index</b></td><td><b>Profile</b></td></tr><tr><td>*</td><td>1</td><td>FHIR-Client (Details: [not stated] code FHIR-Client = 'FHIR-Client', stated as 'null')</td></tr></table><blockquote><p><b>destination</b></p><p><b>index</b>: 1</p><p><b>profile</b>: FHIR-Server (Details: [not stated] code FHIR-Server = 'FHIR-Server', stated as 'null')</p></blockquote><blockquote><p><b>destination</b></p><p><b>index</b>: 2</p><p><b>profile</b>: FHIR-Server (Details: [not stated] code FHIR-Server = 'FHIR-Server', stated as 'null')</p></blockquote><blockquote><p><b>metadata</b></p><h3>Links</h3><table><tr><td>-</td><td><b>Url</b></td><td><b>Description</b></td></tr><tr><td>*</td><td><a>http://hl7.org/fhir/patient.html</a></td><td>Demographics and other administrative information about an individual or animal receiving care or other health-related services.</td></tr></table><blockquote><p><b>capability</b></p><p><b>required</b>: true</p><p><b>validated</b>: false</p><p><b>description</b>: Patient Read Operation</p><p><b>origin</b>: 1</p><p><b>destination</b>: 1</p><p><b>link</b>: <a>http://hl7.org/fhir/http.html#read</a></p><p><b>capabilities</b>: <a>CapabilityStatement/example</a></p></blockquote><blockquote><p><b>capability</b></p><p><b>required</b>: true</p><p><b>validated</b>: false</p><p><b>description</b>: Patient Read Operation</p><p><b>origin</b>: 1</p><p><b>destination</b>: 2</p><p><b>link</b>: <a>http://hl7.org/fhir/http.html#read</a></p><p><b>capabilities</b>: <a>CapabilityStatement/example</a></p></blockquote></blockquote><blockquote><p><b>variable</b></p><p><b>name</b>: Dest1PatientResourceId</p><p><b>defaultValue</b>: example</p></blockquote><blockquote><p><b>variable</b></p><p><b>name</b>: Dest2PatientResourceId</p><p><b>defaultValue</b>: example</p></blockquote><blockquote><p><b>test</b></p><p><b>name</b>: ReadPatient-Destination1</p><p><b>description</b>: Read a Patient from the first destination test system using the user defined dynamic variable ${Dest1PatientResourceId}. Perform basic validation.</p><blockquote><p><b>action</b></p><h3>Operations</h3><table><tr><td>-</td></tr><tr><td>*</td></tr></table></blockquote><blockquote><p><b>action</b></p><h3>Asserts</h3><table><tr><td>-</td></tr><tr><td>*</td></tr></table></blockquote><blockquote><p><b>action</b></p><h3>Asserts</h3><table><tr><td>-</td></tr><tr><td>*</td></tr></table></blockquote><blockquote><p><b>action</b></p><h3>Asserts</h3><table><tr><td>-</td></tr><tr><td>*</td></tr></table></blockquote><blockquote><p><b>action</b></p><h3>Asserts</h3><table><tr><td>-</td></tr><tr><td>*</td></tr></table></blockquote><blockquote><p><b>action</b></p><h3>Asserts</h3><table><tr><td>-</td></tr><tr><td>*</td></tr></table></blockquote></blockquote><blockquote><p><b>test</b></p><p><b>name</b>: ReadPatient-Destination2</p><p><b>description</b>: Read a Patient from the second destination test system using the user defined dynamic variable ${Dest2PatientResourceId}. Perform basic validation.</p><blockquote><p><b>action</b></p><h3>Operations</h3><table><tr><td>-</td></tr><tr><td>*</td></tr></table></blockquote><blockquote><p><b>action</b></p><h3>Asserts</h3><table><tr><td>-</td></tr><tr><td>*</td></tr></table></blockquote><blockquote><p><b>action</b></p><h3>Asserts</h3><table><tr><td>-</td></tr><tr><td>*</td></tr></table></blockquote><blockquote><p><b>action</b></p><h3>Asserts</h3><table><tr><td>-</td></tr><tr><td>*</td></tr></table></blockquote><blockquote><p><b>action</b></p><h3>Asserts</h3><table><tr><td>-</td></tr><tr><td>*</td></tr></table></blockquote></blockquote></div>",
  },
  url: "http://hl7.org/fhir/TestScript/testscript-example-multisystem",
  identifier: {
    system: "urn:ietf:rfc:3986",
    value: "urn:oid:1.3.6.1.4.1.21367.2005.3.7.9878",
  },
  version: "1.0",
  name: "testscript-example-multisystem",
  title: "Multisystem Test Script",
  status: "draft",
  experimental: true,
  date: "2017-01-18",
  publisher: "HL7",
  contact: [
    {
      name: "Support",
      telecom: [
        {
          system: "email",
          value: "support@HL7.org",
          use: "work",
        },
      ],
    },
  ],
  description:
    "TestScript example resource showing use of origin and destination for multisystem support. The single origin will execute a Patient read against the two destination systems using user defined dynamic variables. The test engine will wait at each operation action with a defined origin and destination for the origin test system to send the expected FHIR operation to the destination test system. Once the expected request and response is observed, the test engine will continue with the test execution.",
  jurisdiction: [
    {
      coding: [
        {
          system: "urn:iso:std:iso:3166",
          code: "US",
          display: "United States of America (the)",
        },
      ],
    },
  ],
  purpose: "Patient Read Operation",
  copyright: "© HL7.org 2011+",
  origin: [
    {
      index: 1,
      profile: {
        code: "FHIR-Client",
      },
    },
  ],
  destination: [
    {
      index: 1,
      profile: {
        code: "FHIR-Server",
      },
    },
    {
      index: 2,
      profile: {
        code: "FHIR-Server",
      },
    },
  ],
  metadata: {
    link: [
      {
        url: "http://hl7.org/fhir/patient.html",
        description:
          "Demographics and other administrative information about an individual or animal receiving care or other health-related services.",
      },
    ],
    capability: [
      {
        required: true,
        validated: false,
        description: "Patient Read Operation",
        origin: [1],
        destination: 1,
        link: ["http://hl7.org/fhir/http.html#read"],
        capabilities: "CapabilityStatement/example",
      },
      {
        required: true,
        validated: false,
        description: "Patient Read Operation",
        origin: [1],
        destination: 2,
        link: ["http://hl7.org/fhir/http.html#read"],
        capabilities: "CapabilityStatement/example",
      },
    ],
  },
  variable: [
    {
      name: "Dest1PatientResourceId",
      defaultValue: "example",
    },
    {
      name: "Dest2PatientResourceId",
      defaultValue: "example",
    },
  ],
  test: [
    {
      id: "01-ReadPatient-Destination1",
      name: "ReadPatient-Destination1",
      description:
        "Read a Patient from the first destination test system using the user defined dynamic variable ${Dest1PatientResourceId}. Perform basic validation.",
      action: [
        {
          operation: {
            type: {
              system:
                "http://terminology.hl7.org/CodeSystem/testscript-operation-codes",
              code: "read",
            },
            resource: "Patient",
            description:
              "Read a Patient from the first destination test system and perform basic validation.",
            accept: "xml",
            contentType: "xml",
            destination: 1,
            encodeRequestUrl: true,
            origin: 1,
            params: "/${Dest1PatientResourceId}",
            requestId: "request-read-patient-01",
          },
        },
        {
          assert: {
            description:
              "Confirm that the request method GET was sent by the client system under test.",
            requestMethod: "get",
            warningOnly: false,
          },
        },
        {
          assert: {
            description: "Confirm that the client requested an Accept of xml.",
            direction: "request",
            headerField: "Accept",
            operator: "contains",
            value: "xml",
            warningOnly: false,
          },
        },
        {
          assert: {
            description: "Confirm that the returned HTTP status is 200(OK).",
            direction: "response",
            response: "okay",
            warningOnly: false,
          },
        },
        {
          assert: {
            description: "Confirm that the returned format is XML.",
            direction: "response",
            contentType: "xml",
            warningOnly: false,
          },
        },
        {
          assert: {
            description: "Confirm that the returned resource type is Patient.",
            direction: "response",
            resource: "Patient",
            warningOnly: false,
          },
        },
      ],
    },
    {
      id: "02-ReadPatient-Destination2",
      name: "ReadPatient-Destination2",
      description:
        "Read a Patient from the second destination test system using the user defined dynamic variable ${Dest2PatientResourceId}. Perform basic validation.",
      action: [
        {
          operation: {
            type: {
              system:
                "http://terminology.hl7.org/CodeSystem/testscript-operation-codes",
              code: "read",
            },
            resource: "Patient",
            description:
              "Read a Patient from the second destination test system and perform basic validation.",
            accept: "xml",
            contentType: "xml",
            destination: 2,
            encodeRequestUrl: true,
            origin: 1,
            params: "/${Dest2PatientResourceId}",
            requestHeader: [
              {
                field: "Accept-Charset",
                value: "utf-8",
              },
            ],
          },
        },
        {
          assert: {
            description: "Confirm that the client requested an Accept of xml.",
            direction: "request",
            headerField: "Accept",
            operator: "contains",
            value: "xml",
            warningOnly: false,
          },
        },
        {
          assert: {
            description: "Confirm that the returned HTTP status is 200(OK).",
            direction: "response",
            response: "okay",
            warningOnly: false,
          },
        },
        {
          assert: {
            description: "Confirm that the returned format is XML.",
            direction: "response",
            contentType: "xml",
            warningOnly: false,
          },
        },
        {
          assert: {
            description: "Confirm that the returned resource type is Patient.",
            direction: "response",
            resource: "Patient",
            warningOnly: false,
          },
        },
      ],
    },
  ],
} as const;

export const TestscriptExampleReadtest: TestScript = {
  resourceType: "TestScript",
  id: "testscript-example-readtest",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: testscript-example-readtest</p><p><b>url</b>: <b>http://hl7.org/fhir/TestScript/testscript-example-readtest</b></p><p><b>identifier</b>: urn:oid:1.3.6.1.4.1.21367.2005.3.7.9879</p><p><b>version</b>: 1.0</p><p><b>name</b>: TestScript Example Read Test</p><p><b>status</b>: draft</p><p><b>experimental</b>: true</p><p><b>date</b>: 18/01/2017</p><p><b>publisher</b>: HL7</p><p><b>contact</b>: </p><p><b>description</b>: TestScript example resource with ported Sprinkler basic read tests R001, R002, R003, R004. The read tests will utilize user defined dynamic variables that will hold the Patient resource id values.</p><p><b>jurisdiction</b>: United States of America (the) <span>(Details : {urn:iso:std:iso:3166 code 'US' = 'United States of America', given as 'United States of America (the)'})</span></p><p><b>purpose</b>: Patient Read Operation</p><p><b>copyright</b>: © HL7.org 2011+</p><blockquote><p><b>metadata</b></p><h3>Links</h3><table><tr><td>-</td><td><b>Url</b></td><td><b>Description</b></td></tr><tr><td>*</td><td><a>http://hl7.org/fhir/patient.html</a></td><td>Demographics and other administrative information about an individual or animal receiving care or other health-related services.</td></tr></table><h3>Capabilities</h3><table><tr><td>-</td><td><b>Required</b></td><td><b>Validated</b></td><td><b>Description</b></td><td><b>Link</b></td><td><b>Capabilities</b></td></tr><tr><td>*</td><td>true</td><td>false</td><td>Patient Read Operation</td><td><a>http://hl7.org/fhir/http.html#read</a></td><td><a>CapabilityStatement/example</a></td></tr></table></blockquote><p><b>profile</b>: <a>Generated Summary: url: http://hl7.org/fhir/StructureDefinition/Patient; version: 4.0.1; name: Patient; ACTIVE; date: 01/11/2019 9:29:23 AM; publisher: Health Level Seven International (Patient Administration); description: Demographics and other administrative information about an individual or animal receiving care or other health-related services.; purpose: Tracking patient is the center of the healthcare process.; 4.0.1; RESOURCE; type: Patient; baseDefinition: http://hl7.org/fhir/StructureDefinition/DomainResource; SPECIALIZATION</a></p><blockquote><p><b>variable</b></p><p><b>name</b>: KnownPatientResourceId</p><p><b>defaultValue</b>: example</p></blockquote><blockquote><p><b>variable</b></p><p><b>name</b>: NonExistsPatientResourceId</p><p><b>defaultValue</b>: does-not-exist</p></blockquote><blockquote><p><b>test</b></p><p><b>name</b>: Sprinkler Read Test R001</p><p><b>description</b>: Read a known Patient and validate response.</p><blockquote><p><b>action</b></p><h3>Operations</h3><table><tr><td>-</td></tr><tr><td>*</td></tr></table></blockquote><blockquote><p><b>action</b></p><h3>Asserts</h3><table><tr><td>-</td></tr><tr><td>*</td></tr></table></blockquote><blockquote><p><b>action</b></p><h3>Asserts</h3><table><tr><td>-</td></tr><tr><td>*</td></tr></table></blockquote><blockquote><p><b>action</b></p><h3>Asserts</h3><table><tr><td>-</td></tr><tr><td>*</td></tr></table></blockquote><blockquote><p><b>action</b></p><h3>Asserts</h3><table><tr><td>-</td></tr><tr><td>*</td></tr></table></blockquote><blockquote><p><b>action</b></p><h3>Asserts</h3><table><tr><td>-</td></tr><tr><td>*</td></tr></table></blockquote></blockquote><blockquote><p><b>test</b></p><p><b>name</b>: Sprinkler Read Test R002</p><p><b>description</b>: Read an unknown Resource Type and validate response.</p><blockquote><p><b>action</b></p><h3>Operations</h3><table><tr><td>-</td></tr><tr><td>*</td></tr></table></blockquote><blockquote><p><b>action</b></p><h3>Asserts</h3><table><tr><td>-</td></tr><tr><td>*</td></tr></table></blockquote></blockquote><blockquote><p><b>test</b></p><p><b>name</b>: Sprinkler Read Test R003</p><p><b>description</b>: Read a known, non-existing Patient and validate response.</p><blockquote><p><b>action</b></p><h3>Operations</h3><table><tr><td>-</td></tr><tr><td>*</td></tr></table></blockquote><blockquote><p><b>action</b></p><h3>Asserts</h3><table><tr><td>-</td></tr><tr><td>*</td></tr></table></blockquote></blockquote><blockquote><p><b>test</b></p><p><b>name</b>: Sprinkler Read Test R004</p><p><b>description</b>: Read a Patient using a known bad formatted resource id and validate response.</p><blockquote><p><b>action</b></p><h3>Operations</h3><table><tr><td>-</td></tr><tr><td>*</td></tr></table></blockquote><blockquote><p><b>action</b></p><h3>Asserts</h3><table><tr><td>-</td></tr><tr><td>*</td></tr></table></blockquote></blockquote></div>",
  },
  url: "http://hl7.org/fhir/TestScript/testscript-example-readtest",
  identifier: {
    system: "urn:ietf:rfc:3986",
    value: "urn:oid:1.3.6.1.4.1.21367.2005.3.7.9879",
  },
  version: "1.0",
  name: "TestScript Example Read Test",
  status: "draft",
  experimental: true,
  date: "2017-01-18",
  publisher: "HL7",
  contact: [
    {
      name: "Support",
      telecom: [
        {
          system: "email",
          value: "support@HL7.org",
          use: "work",
        },
      ],
    },
  ],
  description:
    "TestScript example resource with ported Sprinkler basic read tests R001, R002, R003, R004. The read tests will utilize user defined dynamic variables that will hold the Patient resource id values.",
  jurisdiction: [
    {
      coding: [
        {
          system: "urn:iso:std:iso:3166",
          code: "US",
          display: "United States of America (the)",
        },
      ],
    },
  ],
  purpose: "Patient Read Operation",
  copyright: "© HL7.org 2011+",
  metadata: {
    link: [
      {
        url: "http://hl7.org/fhir/patient.html",
        description:
          "Demographics and other administrative information about an individual or animal receiving care or other health-related services.",
      },
    ],
    capability: [
      {
        required: true,
        validated: false,
        description: "Patient Read Operation",
        link: ["http://hl7.org/fhir/http.html#read"],
        capabilities: "CapabilityStatement/example",
      },
    ],
  },
  profile: [
    {
      id: "patient-profile",
      reference: "http://hl7.org/fhir/StructureDefinition/Patient",
    },
  ],
  variable: [
    {
      name: "KnownPatientResourceId",
      defaultValue: "example",
    },
    {
      name: "NonExistsPatientResourceId",
      defaultValue: "does-not-exist",
    },
  ],
  test: [
    {
      id: "R001",
      name: "Sprinkler Read Test R001",
      description: "Read a known Patient and validate response.",
      action: [
        {
          operation: {
            type: {
              system:
                "http://terminology.hl7.org/CodeSystem/testscript-operation-codes",
              code: "read",
            },
            resource: "Patient",
            description:
              "Read the known Patient resource on the destination test system using the user defined dynamic variable ${KnownPatientResourceId}.",
            accept: "xml",
            encodeRequestUrl: true,
            params: "/${KnownPatientResourceId}",
          },
        },
        {
          assert: {
            description: "Confirm that the returned HTTP status is 200(OK).",
            response: "okay",
            warningOnly: false,
          },
        },
        {
          assert: {
            description: "Confirm that the returned format is XML.",
            contentType: "xml",
            warningOnly: false,
          },
        },
        {
          assert: {
            description:
              "Confirm that the returned HTTP Header Last-Modified is present. Warning only as the server might not support versioning.",
            headerField: "Last-Modified",
            operator: "notEmpty",
            warningOnly: true,
          },
        },
        {
          assert: {
            description: "Confirm that the returned resource type is Patient.",
            resource: "Patient",
            warningOnly: false,
          },
        },
        {
          assert: {
            description:
              "Confirm that the returned Patient conforms to the base FHIR specification.",
            validateProfileId: "patient-profile",
            warningOnly: false,
          },
        },
      ],
    },
    {
      id: "R002",
      name: "Sprinkler Read Test R002",
      description: "Read an unknown Resource Type and validate response.",
      action: [
        {
          operation: {
            type: {
              system:
                "http://terminology.hl7.org/CodeSystem/testscript-operation-codes",
              code: "read",
            },
            resource: "Patient",
            description:
              "Attempt to read the Parameters resource type. What we really want here is an illegal type but the build process won't allow that. Parameters is a valid resource which doesn't have an end-point so, this should fail.",
            accept: "xml",
            encodeRequestUrl: true,
            params: "/1",
          },
        },
        {
          assert: {
            description:
              "Confirm that the returned HTTP status is 404(Not Found).",
            response: "notFound",
            warningOnly: false,
          },
        },
      ],
    },
    {
      id: "R003",
      name: "Sprinkler Read Test R003",
      description: "Read a known, non-existing Patient and validate response.",
      action: [
        {
          operation: {
            type: {
              system:
                "http://terminology.hl7.org/CodeSystem/testscript-operation-codes",
              code: "read",
            },
            resource: "Patient",
            description:
              "Attempt to read the non-existing Patient resource on the destination test system using the user defined dynamic variable ${NonExistsPatientResourceId}.",
            accept: "xml",
            encodeRequestUrl: true,
            params: "/${NonExistsPatientResourceId}",
          },
        },
        {
          assert: {
            description:
              "Confirm that the returned HTTP status is 404(Not Found).",
            response: "notFound",
            warningOnly: false,
          },
        },
      ],
    },
    {
      id: "R004",
      name: "Sprinkler Read Test R004",
      description:
        "Read a Patient using a known bad formatted resource id and validate response.",
      action: [
        {
          operation: {
            type: {
              system:
                "http://terminology.hl7.org/CodeSystem/testscript-operation-codes",
              code: "read",
            },
            resource: "Patient",
            description:
              "Attempt to read a Patient resource on the destination test system using known bad formatted resource id.",
            accept: "xml",
            encodeRequestUrl: true,
            params: "/ID-may-not-contain-CAPITALS",
          },
        },
        {
          assert: {
            description:
              "Confirm that the returned HTTP status is 400(Bad Request).",
            response: "bad",
            warningOnly: false,
          },
        },
      ],
    },
  ],
} as const;

export const TestscriptExampleSearch: TestScript = {
  resourceType: "TestScript",
  id: "testscript-example-search",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: testscript-example-search</p><p><b>url</b>: <b>http://hl7.org/fhir/TestScript/testscript-example-search</b></p><p><b>identifier</b>: urn:oid:1.3.6.1.4.1.21367.2005.3.7.9881</p><p><b>version</b>: 1.0</p><p><b>name</b>: TestScript Example Search</p><p><b>status</b>: draft</p><p><b>experimental</b>: true</p><p><b>date</b>: 18/01/2017</p><p><b>publisher</b>: HL7</p><p><b>contact</b>: </p><p><b>description</b>: TestScript example resource with simple Patient search test. The read tests will utilize user defined dynamic variables that will hold the Patient search parameter values.</p><p><b>jurisdiction</b>: United States of America (the) <span>(Details : {urn:iso:std:iso:3166 code 'US' = 'United States of America', given as 'United States of America (the)'})</span></p><p><b>purpose</b>: Patient Search Operation</p><p><b>copyright</b>: © HL7.org 2011+</p><blockquote><p><b>metadata</b></p><h3>Links</h3><table><tr><td>-</td><td><b>Url</b></td><td><b>Description</b></td></tr><tr><td>*</td><td><a>http://hl7.org/fhir/patient.html</a></td><td>Demographics and other administrative information about an individual or animal receiving care or other health-related services.</td></tr></table><h3>Capabilities</h3><table><tr><td>-</td><td><b>Required</b></td><td><b>Validated</b></td><td><b>Description</b></td><td><b>Link</b></td><td><b>Capabilities</b></td></tr><tr><td>*</td><td>true</td><td>false</td><td>Patient Search Operation</td><td><a>http://hl7.org/fhir/http.html#search</a></td><td><a>CapabilityStatement/example</a></td></tr></table></blockquote><h3>Fixtures</h3><table><tr><td>-</td><td><b>Autocreate</b></td><td><b>Autodelete</b></td><td><b>Resource</b></td></tr><tr><td>*</td><td>false</td><td>false</td><td><a>Peter Chalmers</a></td></tr></table><p><b>profile</b>: <a>Generated Summary: url: http://hl7.org/fhir/StructureDefinition/Bundle; version: 4.0.1; name: Bundle; ACTIVE; date: 01/11/2019 9:29:23 AM; publisher: Health Level Seven International (FHIR Infrastructure); description: A container for a collection of resources.; 4.0.1; RESOURCE; type: Bundle; baseDefinition: http://hl7.org/fhir/StructureDefinition/Resource; SPECIALIZATION</a></p><blockquote><p><b>variable</b></p><p><b>name</b>: PatientCreateLocation</p><p><b>headerField</b>: Location</p><p><b>sourceId</b>: PatientCreateResponse</p></blockquote><blockquote><p><b>variable</b></p><p><b>name</b>: PatientSearchFamilyName</p><p><b>description</b>: Enter patient search criteria for a known family name on the target system</p><p><b>hint</b>: [Family name]</p></blockquote><blockquote><p><b>variable</b></p><p><b>name</b>: PatientSearchGivenName</p><p><b>description</b>: Enter patient search criteria for a known given name on the target system</p><p><b>hint</b>: [Given name]</p></blockquote><blockquote><p><b>variable</b></p><p><b>name</b>: PatientSearchBundleTotal</p><p><b>description</b>: Evaluate the returned Patient searchset Bundle.total value</p><p><b>expression</b>: Bundle.total.toInteger()</p></blockquote><blockquote><p><b>setup</b></p><blockquote><p><b>action</b></p><h3>Operations</h3><table><tr><td>-</td><td><b>Type</b></td><td><b>Resource</b></td><td><b>Description</b></td><td><b>Accept</b></td><td><b>EncodeRequestUrl</b></td><td><b>Params</b></td></tr><tr><td>*</td><td>Search (Details: http://terminology.hl7.org/CodeSystem/testscript-operation-codes code search = 'Search', stated as 'null')</td><td>Patient</td><td>Test simple search to verify server support.</td><td>xml</td><td>true</td><td>?family=DONTEXPECTAMATCH&amp;given=DONTEXPECTAMATCH</td></tr></table></blockquote><blockquote><p><b>action</b></p><h3>Asserts</h3><table><tr><td>-</td><td><b>Description</b></td><td><b>Direction</b></td><td><b>Operator</b></td><td><b>RequestURL</b></td><td><b>WarningOnly</b></td></tr><tr><td>*</td><td>Confirm that the request url contains the family search parameter.</td><td>request</td><td>contains</td><td>family</td><td>false</td></tr></table></blockquote><blockquote><p><b>action</b></p><h3>Asserts</h3><table><tr><td>-</td><td><b>Description</b></td><td><b>Direction</b></td><td><b>ResponseCode</b></td><td><b>WarningOnly</b></td></tr><tr><td>*</td><td>Confirm that the returned HTTP status is 200(OK).</td><td>response</td><td>200</td><td>false</td></tr></table></blockquote><blockquote><p><b>action</b></p><h3>Asserts</h3><table><tr><td>-</td><td><b>Description</b></td><td><b>Resource</b></td><td><b>WarningOnly</b></td></tr><tr><td>*</td><td>Confirm that the returned resource type is Bundle.</td><td>Bundle</td><td>false</td></tr></table></blockquote><blockquote><p><b>action</b></p><h3>Asserts</h3><table><tr><td>-</td><td><b>Description</b></td><td><b>NavigationLinks</b></td><td><b>WarningOnly</b></td></tr><tr><td>*</td><td>Confirm that the returned Bundle correctly defines the navigation links.</td><td>true</td><td>false</td></tr></table></blockquote></blockquote><blockquote><p><b>test</b></p><p><b>name</b>: Patient Create Search</p><p><b>description</b>: Create a Patient resource and capture the returned HTTP Header Location. Then search for (read) that Patient using the Location URL value and validate the response.</p><blockquote><p><b>action</b></p><h3>Operations</h3><table><tr><td>-</td></tr><tr><td>*</td></tr></table></blockquote><blockquote><p><b>action</b></p><h3>Asserts</h3><table><tr><td>-</td></tr><tr><td>*</td></tr></table></blockquote><blockquote><p><b>action</b></p><h3>Asserts</h3><table><tr><td>-</td></tr><tr><td>*</td></tr></table></blockquote><blockquote><p><b>action</b></p><h3>Operations</h3><table><tr><td>-</td></tr><tr><td>*</td></tr></table></blockquote><blockquote><p><b>action</b></p><h3>Asserts</h3><table><tr><td>-</td></tr><tr><td>*</td></tr></table></blockquote><blockquote><p><b>action</b></p><h3>Asserts</h3><table><tr><td>-</td></tr><tr><td>*</td></tr></table></blockquote></blockquote><blockquote><p><b>test</b></p><p><b>name</b>: Patient Search Dynamic</p><p><b>description</b>: Search for Patient resources using the user defined dynamic variables ${PatientSearchFamilyName} and ${PatientSearchGivenName} and validate response.</p><blockquote><p><b>action</b></p><h3>Operations</h3><table><tr><td>-</td></tr><tr><td>*</td></tr></table></blockquote><blockquote><p><b>action</b></p><h3>Asserts</h3><table><tr><td>-</td></tr><tr><td>*</td></tr></table></blockquote><blockquote><p><b>action</b></p><h3>Asserts</h3><table><tr><td>-</td></tr><tr><td>*</td></tr></table></blockquote><blockquote><p><b>action</b></p><h3>Asserts</h3><table><tr><td>-</td></tr><tr><td>*</td></tr></table></blockquote><blockquote><p><b>action</b></p><h3>Asserts</h3><table><tr><td>-</td></tr><tr><td>*</td></tr></table></blockquote><blockquote><p><b>action</b></p><h3>Asserts</h3><table><tr><td>-</td></tr><tr><td>*</td></tr></table></blockquote><blockquote><p><b>action</b></p><h3>Asserts</h3><table><tr><td>-</td></tr><tr><td>*</td></tr></table></blockquote></blockquote></div>",
  },
  url: "http://hl7.org/fhir/TestScript/testscript-example-search",
  identifier: {
    system: "urn:ietf:rfc:3986",
    value: "urn:oid:1.3.6.1.4.1.21367.2005.3.7.9881",
  },
  version: "1.0",
  name: "TestScript Example Search",
  status: "draft",
  experimental: true,
  date: "2017-01-18",
  publisher: "HL7",
  contact: [
    {
      name: "Support",
      telecom: [
        {
          system: "email",
          value: "support@HL7.org",
          use: "work",
        },
      ],
    },
  ],
  description:
    "TestScript example resource with simple Patient search test. The read tests will utilize user defined dynamic variables that will hold the Patient search parameter values.",
  jurisdiction: [
    {
      coding: [
        {
          system: "urn:iso:std:iso:3166",
          code: "US",
          display: "United States of America (the)",
        },
      ],
    },
  ],
  purpose: "Patient Search Operation",
  copyright: "© HL7.org 2011+",
  metadata: {
    link: [
      {
        url: "http://hl7.org/fhir/patient.html",
        description:
          "Demographics and other administrative information about an individual or animal receiving care or other health-related services.",
      },
    ],
    capability: [
      {
        required: true,
        validated: false,
        description: "Patient Search Operation",
        link: ["http://hl7.org/fhir/http.html#search"],
        capabilities: "CapabilityStatement/example",
      },
    ],
  },
  fixture: [
    {
      id: "fixture-patient-create",
      autocreate: false,
      autodelete: false,
      resource: {
        reference: "Patient/example",
        display: "Peter Chalmers",
      },
    },
  ],
  profile: [
    {
      id: "bundle-profile",
      reference: "http://hl7.org/fhir/StructureDefinition/Bundle",
    },
  ],
  variable: [
    {
      name: "PatientCreateLocation",
      headerField: "Location",
      sourceId: "PatientCreateResponse",
    },
    {
      name: "PatientSearchFamilyName",
      description:
        "Enter patient search criteria for a known family name on the target system",
      hint: "[Family name]",
    },
    {
      name: "PatientSearchGivenName",
      description:
        "Enter patient search criteria for a known given name on the target system",
      hint: "[Given name]",
    },
    {
      name: "PatientSearchBundleTotal",
      description: "Evaluate the returned Patient searchset Bundle.total value",
      expression: "Bundle.total.toInteger()",
    },
  ],
  setup: {
    action: [
      {
        operation: {
          type: {
            system:
              "http://terminology.hl7.org/CodeSystem/testscript-operation-codes",
            code: "search",
          },
          resource: "Patient",
          description: "Test simple search to verify server support.",
          accept: "xml",
          encodeRequestUrl: true,
          params: "?family=DONTEXPECTAMATCH&given=DONTEXPECTAMATCH",
        },
      },
      {
        assert: {
          description:
            "Confirm that the request url contains the family search parameter.",
          direction: "request",
          operator: "contains",
          requestURL: "family",
          warningOnly: false,
        },
      },
      {
        assert: {
          description: "Confirm that the returned HTTP status is 200(OK).",
          direction: "response",
          responseCode: "200",
          warningOnly: false,
        },
      },
      {
        assert: {
          description: "Confirm that the returned resource type is Bundle.",
          resource: "Bundle",
          warningOnly: false,
        },
      },
      {
        assert: {
          description:
            "Confirm that the returned Bundle correctly defines the navigation links.",
          navigationLinks: true,
          warningOnly: false,
        },
      },
    ],
  },
  test: [
    {
      id: "01-PatientCreateSearch",
      name: "Patient Create Search",
      description:
        "Create a Patient resource and capture the returned HTTP Header Location. Then search for (read) that Patient using the Location URL value and validate the response.",
      action: [
        {
          operation: {
            type: {
              system:
                "http://terminology.hl7.org/CodeSystem/testscript-operation-codes",
              code: "create",
            },
            resource: "Patient",
            description:
              "Create a Patient resource and capture the returned HTTP Header Location.",
            accept: "xml",
            contentType: "xml",
            encodeRequestUrl: true,
            responseId: "PatientCreateResponse",
            sourceId: "fixture-patient-create",
          },
        },
        {
          assert: {
            description:
              "Confirm that the returned HTTP status is 201(Created).",
            response: "created",
            warningOnly: false,
          },
        },
        {
          assert: {
            description:
              "Confirm that the returned HTTP Header Location is present.",
            direction: "response",
            headerField: "Location",
            operator: "notEmpty",
            warningOnly: false,
          },
        },
        {
          operation: {
            type: {
              system:
                "http://terminology.hl7.org/CodeSystem/testscript-operation-codes",
              code: "read",
            },
            description:
              "Read the created Patient using the captured Location URL value.",
            accept: "xml",
            encodeRequestUrl: true,
            url: "${PatientCreateLocation}",
          },
        },
        {
          assert: {
            description: "Confirm that the returned HTTP status is 200(OK).",
            response: "okay",
            warningOnly: false,
          },
        },
        {
          assert: {
            description: "Confirm that the returned resource type is Patient.",
            resource: "Patient",
            warningOnly: false,
          },
        },
      ],
    },
    {
      id: "02-PatientSearchDynamic",
      name: "Patient Search Dynamic",
      description:
        "Search for Patient resources using the user defined dynamic variables ${PatientSearchFamilyName} and ${PatientSearchGivenName} and validate response.",
      action: [
        {
          operation: {
            type: {
              system:
                "http://terminology.hl7.org/CodeSystem/testscript-operation-codes",
              code: "search",
            },
            resource: "Patient",
            description:
              "Search for Patient resources on the destination test system.",
            accept: "xml",
            encodeRequestUrl: true,
            params:
              "?family=${PatientSearchFamilyName}&given=${PatientSearchGivenName}",
          },
        },
        {
          assert: {
            description: "Confirm that the returned HTTP status is 200(OK).",
            response: "okay",
            warningOnly: false,
          },
        },
        {
          assert: {
            description: "Confirm that the returned format is XML.",
            contentType: "xml",
            warningOnly: false,
          },
        },
        {
          assert: {
            description: "Confirm that the returned resource type is Bundle.",
            resource: "Bundle",
            warningOnly: false,
          },
        },
        {
          assert: {
            description:
              "Confirm that the returned Bundle conforms to the base FHIR specification.",
            validateProfileId: "bundle-profile",
            warningOnly: false,
          },
        },
        {
          assert: {
            description:
              "Confirm that the returned Bundle type equals 'searchset'.",
            operator: "equals",
            path: "fhir:Bundle/fhir:type/@value",
            value: "searchset",
            warningOnly: false,
          },
        },
        {
          assert: {
            description:
              "Confirm that the returned Bundle total is greater than or equal to the number of returned entries.",
            expression: "Bundle.total.toInteger() >= entry.count()",
            warningOnly: false,
          },
        },
      ],
    },
  ],
} as const;

export const TestscriptExampleUpdate: TestScript = {
  resourceType: "TestScript",
  id: "testscript-example-update",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: testscript-example-update</p><p><b>url</b>: <b>http://hl7.org/fhir/TestScript/testscript-example-update</b></p><p><b>identifier</b>: urn:oid:1.3.6.1.4.1.21367.2005.3.7.9882</p><p><b>version</b>: 1.0</p><p><b>name</b>: TestScript Example Update</p><p><b>status</b>: draft</p><p><b>experimental</b>: true</p><p><b>date</b>: 18/01/2017</p><p><b>publisher</b>: HL7</p><p><b>contact</b>: </p><p><b>description</b>: TestScript example resource with setup to delete if present and create a new instance of a Patient; and single test definition to update that Patient with various asserts.</p><p><b>jurisdiction</b>: United States of America (the) <span>(Details : {urn:iso:std:iso:3166 code 'US' = 'United States of America', given as 'United States of America (the)'})</span></p><p><b>purpose</b>: Patient (Conditional) Create, Update, Delete Operations</p><p><b>copyright</b>: © HL7.org 2011+</p><blockquote><p><b>metadata</b></p><h3>Links</h3><table><tr><td>-</td><td><b>Url</b></td><td><b>Description</b></td></tr><tr><td>*</td><td><a>http://hl7.org/fhir/patient.html</a></td><td>Demographics and other administrative information about an individual or animal receiving care or other health-related services.</td></tr></table><h3>Capabilities</h3><table><tr><td>-</td><td><b>Required</b></td><td><b>Validated</b></td><td><b>Description</b></td><td><b>Link</b></td><td><b>Capabilities</b></td></tr><tr><td>*</td><td>true</td><td>false</td><td>Patient Update and Delete Operations</td><td><a>http://hl7.org/fhir/http.html#update</a></td><td><a>CapabilityStatement/example</a></td></tr></table></blockquote><blockquote><p><b>fixture</b></p><p><b>autocreate</b>: false</p><p><b>autodelete</b>: false</p><p><b>resource</b>: <a>Peter Chalmers</a></p></blockquote><blockquote><p><b>fixture</b></p><p><b>autocreate</b>: false</p><p><b>autodelete</b>: false</p><p><b>resource</b>: <a>Donald Duck</a></p></blockquote><p><b>profile</b>: <a>Generated Summary: url: http://hl7.org/fhir/StructureDefinition/Patient; version: 4.0.1; name: Patient; ACTIVE; date: 01/11/2019 9:29:23 AM; publisher: Health Level Seven International (Patient Administration); description: Demographics and other administrative information about an individual or animal receiving care or other health-related services.; purpose: Tracking patient is the center of the healthcare process.; 4.0.1; RESOURCE; type: Patient; baseDefinition: http://hl7.org/fhir/StructureDefinition/DomainResource; SPECIALIZATION</a></p><h3>Variables</h3><table><tr><td>-</td><td><b>Name</b></td><td><b>Path</b></td><td><b>SourceId</b></td></tr><tr><td>*</td><td>createResourceId</td><td>Patient/id</td><td>fixture-patient-create</td></tr></table><blockquote><p><b>setup</b></p><blockquote><p><b>action</b></p><h3>Operations</h3><table><tr><td>-</td><td><b>Type</b></td><td><b>Resource</b></td><td><b>Label</b></td><td><b>Description</b></td><td><b>Accept</b></td><td><b>EncodeRequestUrl</b></td><td><b>Params</b></td></tr><tr><td>*</td><td>Delete (Details: http://terminology.hl7.org/CodeSystem/testscript-operation-codes code delete = 'Delete', stated as 'null')</td><td>Patient</td><td>SetupDeletePatient</td><td>Execute a delete operation to insure the patient does not exist on the server.</td><td>xml</td><td>true</td><td>/${createResourceId}</td></tr></table></blockquote><blockquote><p><b>action</b></p><h3>Asserts</h3><table><tr><td>-</td><td><b>Description</b></td><td><b>Direction</b></td><td><b>Operator</b></td><td><b>ResponseCode</b></td><td><b>WarningOnly</b></td></tr><tr><td>*</td><td>Confirm that the returned HTTP status is 200(OK) or 204(No Content).</td><td>response</td><td>in</td><td>200,204</td><td>false</td></tr></table></blockquote><blockquote><p><b>action</b></p><h3>Operations</h3><table><tr><td>-</td><td><b>Type</b></td><td><b>Resource</b></td><td><b>Label</b></td><td><b>Description</b></td><td><b>Accept</b></td><td><b>ContentType</b></td><td><b>EncodeRequestUrl</b></td><td><b>Params</b></td><td><b>SourceId</b></td></tr><tr><td>*</td><td>Update (Details: http://terminology.hl7.org/CodeSystem/testscript-operation-codes code update = 'Update', stated as 'null')</td><td>Patient</td><td>SetupCreatePatient</td><td>Create patient resource on test server using the contents of fixture-patient-create</td><td>xml</td><td>xml</td><td>true</td><td>/${createResourceId}</td><td>fixture-patient-create</td></tr></table></blockquote><blockquote><p><b>action</b></p><h3>Asserts</h3><table><tr><td>-</td><td><b>Description</b></td><td><b>Direction</b></td><td><b>ResponseCode</b></td><td><b>WarningOnly</b></td></tr><tr><td>*</td><td>Confirm that the returned HTTP status is 201(Created).</td><td>response</td><td>201</td><td>false</td></tr></table></blockquote></blockquote><blockquote><p><b>test</b></p><p><b>name</b>: Update Patient</p><p><b>description</b>: Update a Patient and validate response.</p><blockquote><p><b>action</b></p><h3>Operations</h3><table><tr><td>-</td></tr><tr><td>*</td></tr></table></blockquote><blockquote><p><b>action</b></p><h3>Asserts</h3><table><tr><td>-</td></tr><tr><td>*</td></tr></table></blockquote><blockquote><p><b>action</b></p><h3>Asserts</h3><table><tr><td>-</td></tr><tr><td>*</td></tr></table></blockquote><blockquote><p><b>action</b></p><h3>Asserts</h3><table><tr><td>-</td></tr><tr><td>*</td></tr></table></blockquote></blockquote></div>",
  },
  url: "http://hl7.org/fhir/TestScript/testscript-example-update",
  identifier: {
    system: "urn:ietf:rfc:3986",
    value: "urn:oid:1.3.6.1.4.1.21367.2005.3.7.9882",
  },
  version: "1.0",
  name: "TestScript Example Update",
  status: "draft",
  experimental: true,
  date: "2017-01-18",
  publisher: "HL7",
  contact: [
    {
      name: "Support",
      telecom: [
        {
          system: "email",
          value: "support@HL7.org",
          use: "work",
        },
      ],
    },
  ],
  description:
    "TestScript example resource with setup to delete if present and create a new instance of a Patient; and single test definition to update that Patient with various asserts.",
  jurisdiction: [
    {
      coding: [
        {
          system: "urn:iso:std:iso:3166",
          code: "US",
          display: "United States of America (the)",
        },
      ],
    },
  ],
  purpose: "Patient (Conditional) Create, Update, Delete Operations",
  copyright: "© HL7.org 2011+",
  metadata: {
    link: [
      {
        url: "http://hl7.org/fhir/patient.html",
        description:
          "Demographics and other administrative information about an individual or animal receiving care or other health-related services.",
      },
    ],
    capability: [
      {
        required: true,
        validated: false,
        description: "Patient Update and Delete Operations",
        link: [
          "http://hl7.org/fhir/http.html#update",
          "http://hl7.org/fhir/http.html#delete",
        ],
        capabilities: "CapabilityStatement/example",
      },
    ],
  },
  fixture: [
    {
      id: "fixture-patient-create",
      autocreate: false,
      autodelete: false,
      resource: {
        reference: "Patient/example",
        display: "Peter Chalmers",
      },
    },
    {
      id: "fixture-patient-update",
      autocreate: false,
      autodelete: false,
      resource: {
        reference: "Patient/pat1",
        display: "Donald Duck",
      },
    },
  ],
  profile: [
    {
      id: "patient-profile",
      reference: "http://hl7.org/fhir/StructureDefinition/Patient",
    },
  ],
  variable: [
    {
      name: "createResourceId",
      path: "Patient/id",
      sourceId: "fixture-patient-create",
    },
  ],
  setup: {
    action: [
      {
        operation: {
          type: {
            system:
              "http://terminology.hl7.org/CodeSystem/testscript-operation-codes",
            code: "delete",
          },
          resource: "Patient",
          label: "SetupDeletePatient",
          description:
            "Execute a delete operation to insure the patient does not exist on the server.",
          accept: "xml",
          encodeRequestUrl: true,
          params: "/${createResourceId}",
        },
      },
      {
        assert: {
          description:
            "Confirm that the returned HTTP status is 200(OK) or 204(No Content).",
          direction: "response",
          operator: "in",
          responseCode: "200,204",
          warningOnly: false,
        },
      },
      {
        operation: {
          type: {
            system:
              "http://terminology.hl7.org/CodeSystem/testscript-operation-codes",
            code: "update",
          },
          resource: "Patient",
          label: "SetupCreatePatient",
          description:
            "Create patient resource on test server using the contents of fixture-patient-create",
          accept: "xml",
          contentType: "xml",
          encodeRequestUrl: true,
          params: "/${createResourceId}",
          sourceId: "fixture-patient-create",
        },
      },
      {
        assert: {
          description: "Confirm that the returned HTTP status is 201(Created).",
          direction: "response",
          responseCode: "201",
          warningOnly: false,
        },
      },
    ],
  },
  test: [
    {
      id: "01-UpdatePatient",
      name: "Update Patient",
      description: "Update a Patient and validate response.",
      action: [
        {
          operation: {
            type: {
              system:
                "http://terminology.hl7.org/CodeSystem/testscript-operation-codes",
              code: "update",
            },
            resource: "Patient",
            label: "SetupUpdatePatient",
            description:
              "Update patient resource on test server using the contents of fixture-patient-update",
            accept: "xml",
            contentType: "xml",
            encodeRequestUrl: true,
            params: "/${createResourceId}",
            sourceId: "fixture-patient-update",
          },
        },
        {
          assert: {
            description: "Confirm that the returned HTTP status is 200(OK).",
            response: "okay",
            warningOnly: false,
          },
        },
        {
          assert: {
            description: "Confirm that the returned format is XML.",
            contentType: "xml",
            warningOnly: false,
          },
        },
        {
          assert: {
            description:
              "Confirm that the returned HTTP Header Last-Modified is present. Warning only as the server might not support versioning.",
            headerField: "Last-Modified",
            operator: "notEmpty",
            warningOnly: true,
          },
        },
      ],
    },
  ],
} as const;

export const TestscriptExample: TestScript = {
  resourceType: "TestScript",
  id: "testscript-example",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: testscript-example</p><p><b>url</b>: <b>http://hl7.org/fhir/TestScript/testscript-example</b></p><p><b>identifier</b>: urn:oid:1.3.6.1.4.1.21367.2005.3.7.9876</p><p><b>version</b>: 1.0</p><p><b>name</b>: TestScript Example</p><p><b>status</b>: draft</p><p><b>experimental</b>: true</p><p><b>date</b>: 18/01/2017</p><p><b>publisher</b>: HL7</p><p><b>contact</b>: </p><p><b>description</b>: TestScript example resource with setup to delete if present and create a new instance of a Patient; and single test definition to read the created Patient with various asserts.</p><p><b>useContext</b>: </p><p><b>jurisdiction</b>: United States of America (the) <span>(Details : {urn:iso:std:iso:3166 code 'US' = 'United States of America', given as 'United States of America (the)'})</span></p><p><b>purpose</b>: Patient Conditional Create (Update), Read and Delete Operations</p><p><b>copyright</b>: © HL7.org 2011+</p><blockquote><p><b>metadata</b></p><h3>Links</h3><table><tr><td>-</td><td><b>Url</b></td><td><b>Description</b></td></tr><tr><td>*</td><td><a>http://hl7.org/fhir/patient.html</a></td><td>Demographics and other administrative information about an individual or animal receiving care or other health-related services.</td></tr></table><h3>Capabilities</h3><table><tr><td>-</td><td><b>Required</b></td><td><b>Validated</b></td><td><b>Description</b></td><td><b>Link</b></td><td><b>Capabilities</b></td></tr><tr><td>*</td><td>true</td><td>false</td><td>Patient Update, Read and Delete Operations</td><td><a>http://hl7.org/fhir/http.html#delete</a></td><td><a>CapabilityStatement/example</a></td></tr></table></blockquote><blockquote><p><b>fixture</b></p><p><b>autocreate</b>: false</p><p><b>autodelete</b>: false</p><p><b>resource</b>: <a>Peter Chalmers</a></p></blockquote><blockquote><p><b>fixture</b></p><p><b>autocreate</b>: false</p><p><b>autodelete</b>: false</p><p><b>resource</b>: <a>Peter Chalmers (minimum)</a></p></blockquote><p><b>profile</b>: <a>Generated Summary: url: http://hl7.org/fhir/StructureDefinition/Patient; version: 4.0.1; name: Patient; ACTIVE; date: 01/11/2019 9:29:23 AM; publisher: Health Level Seven International (Patient Administration); description: Demographics and other administrative information about an individual or animal receiving care or other health-related services.; purpose: Tracking patient is the center of the healthcare process.; 4.0.1; RESOURCE; type: Patient; baseDefinition: http://hl7.org/fhir/StructureDefinition/DomainResource; SPECIALIZATION</a></p><h3>Variables</h3><table><tr><td>-</td><td><b>Name</b></td><td><b>Path</b></td><td><b>SourceId</b></td></tr><tr><td>*</td><td>createResourceId</td><td>Patient/id</td><td>fixture-patient-create</td></tr></table><blockquote><p><b>setup</b></p><blockquote><p><b>action</b></p><h3>Operations</h3><table><tr><td>-</td><td><b>Type</b></td><td><b>Resource</b></td><td><b>Label</b></td><td><b>Description</b></td><td><b>Accept</b></td><td><b>EncodeRequestUrl</b></td><td><b>Params</b></td></tr><tr><td>*</td><td>Delete (Details: http://terminology.hl7.org/CodeSystem/testscript-operation-codes code delete = 'Delete', stated as 'null')</td><td>Patient</td><td>SetupDeletePatient</td><td>Execute a delete operation to insure the patient does not exist on the server.</td><td>json</td><td>true</td><td>/${createResourceId}</td></tr></table></blockquote><blockquote><p><b>action</b></p><h3>Asserts</h3><table><tr><td>-</td><td><b>Description</b></td><td><b>Direction</b></td><td><b>Operator</b></td><td><b>ResponseCode</b></td><td><b>WarningOnly</b></td></tr><tr><td>*</td><td>Confirm that the returned HTTP status is 200(OK) or 204(No Content).</td><td>response</td><td>in</td><td>200,204</td><td>false</td></tr></table></blockquote><blockquote><p><b>action</b></p><h3>Operations</h3><table><tr><td>-</td><td><b>Type</b></td><td><b>Resource</b></td><td><b>Label</b></td><td><b>Description</b></td><td><b>Accept</b></td><td><b>ContentType</b></td><td><b>EncodeRequestUrl</b></td><td><b>Params</b></td><td><b>SourceId</b></td></tr><tr><td>*</td><td>Update (Details: http://terminology.hl7.org/CodeSystem/testscript-operation-codes code update = 'Update', stated as 'null')</td><td>Patient</td><td>SetupCreatePatient</td><td>Create patient resource on test server using the contents of fixture-patient-create</td><td>json</td><td>json</td><td>true</td><td>/${createResourceId}</td><td>fixture-patient-create</td></tr></table></blockquote><blockquote><p><b>action</b></p><h3>Asserts</h3><table><tr><td>-</td><td><b>Description</b></td><td><b>Direction</b></td><td><b>ResponseCode</b></td><td><b>WarningOnly</b></td></tr><tr><td>*</td><td>Confirm that the returned HTTP status is 201(Created).</td><td>response</td><td>201</td><td>false</td></tr></table></blockquote><blockquote><p><b>action</b></p><h3>Operations</h3><table><tr><td>-</td><td><b>Type</b></td><td><b>Resource</b></td><td><b>Description</b></td><td><b>EncodeRequestUrl</b></td><td><b>TargetId</b></td></tr><tr><td>*</td><td>Read (Details: http://terminology.hl7.org/CodeSystem/testscript-operation-codes code read = 'Read', stated as 'null')</td><td>Patient</td><td>Read the created patient resource on the test server using the id from fixture-patient-create. Verify contents.</td><td>true</td><td>fixture-patient-create</td></tr></table></blockquote><blockquote><p><b>action</b></p><h3>Asserts</h3><table><tr><td>-</td><td><b>Description</b></td><td><b>Direction</b></td><td><b>Response</b></td><td><b>WarningOnly</b></td></tr><tr><td>*</td><td>Confirm that the returned HTTP status is 200(OK).</td><td>response</td><td>okay</td><td>false</td></tr></table></blockquote><blockquote><p><b>action</b></p><h3>Asserts</h3><table><tr><td>-</td><td><b>Description</b></td><td><b>CompareToSourceId</b></td><td><b>CompareToSourceExpression</b></td><td><b>Operator</b></td><td><b>WarningOnly</b></td></tr><tr><td>*</td><td>Confirm that the returned Patient contains the expected family name 'Chalmers'. Uses explicit compareToSourceId reference to fixture-patient-create used to create the Patient.</td><td>fixture-patient-create</td><td>Patient.name.first().family</td><td>equals</td><td>false</td></tr></table></blockquote></blockquote><blockquote><p><b>test</b></p><p><b>name</b>: Read Patient</p><p><b>description</b>: Read a Patient and validate response.</p><blockquote><p><b>action</b></p><h3>Operations</h3><table><tr><td>-</td></tr><tr><td>*</td></tr></table></blockquote><blockquote><p><b>action</b></p><h3>Asserts</h3><table><tr><td>-</td></tr><tr><td>*</td></tr></table></blockquote><blockquote><p><b>action</b></p><h3>Asserts</h3><table><tr><td>-</td></tr><tr><td>*</td></tr></table></blockquote><blockquote><p><b>action</b></p><h3>Asserts</h3><table><tr><td>-</td></tr><tr><td>*</td></tr></table></blockquote><blockquote><p><b>action</b></p><h3>Asserts</h3><table><tr><td>-</td></tr><tr><td>*</td></tr></table></blockquote><blockquote><p><b>action</b></p><h3>Asserts</h3><table><tr><td>-</td></tr><tr><td>*</td></tr></table></blockquote><blockquote><p><b>action</b></p><h3>Asserts</h3><table><tr><td>-</td></tr><tr><td>*</td></tr></table></blockquote><blockquote><p><b>action</b></p><h3>Asserts</h3><table><tr><td>-</td></tr><tr><td>*</td></tr></table></blockquote><blockquote><p><b>action</b></p><h3>Asserts</h3><table><tr><td>-</td></tr><tr><td>*</td></tr></table></blockquote><blockquote><p><b>action</b></p><h3>Asserts</h3><table><tr><td>-</td></tr><tr><td>*</td></tr></table></blockquote></blockquote><blockquote><p><b>teardown</b></p><blockquote><p><b>action</b></p><h3>Operations</h3><table><tr><td>-</td></tr><tr><td>*</td></tr></table></blockquote></blockquote></div>",
  },
  url: "http://hl7.org/fhir/TestScript/testscript-example",
  identifier: {
    system: "urn:ietf:rfc:3986",
    value: "urn:oid:1.3.6.1.4.1.21367.2005.3.7.9876",
  },
  version: "1.0",
  name: "TestScript Example",
  status: "draft",
  experimental: true,
  date: "2017-01-18",
  publisher: "HL7",
  contact: [
    {
      name: "Support",
      telecom: [
        {
          system: "email",
          value: "support@HL7.org",
          use: "work",
        },
      ],
    },
  ],
  description:
    "TestScript example resource with setup to delete if present and create a new instance of a Patient; and single test definition to read the created Patient with various asserts.",
  useContext: [
    {
      code: {
        system: "http://terminology.hl7.org/CodeSystem/usage-context-type",
        code: "focus",
      },
      valueCodeableConcept: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/variant-state",
            code: "positive",
          },
        ],
      },
    },
  ],
  jurisdiction: [
    {
      coding: [
        {
          system: "urn:iso:std:iso:3166",
          code: "US",
          display: "United States of America (the)",
        },
      ],
    },
  ],
  purpose: "Patient Conditional Create (Update), Read and Delete Operations",
  copyright: "© HL7.org 2011+",
  metadata: {
    link: [
      {
        url: "http://hl7.org/fhir/patient.html",
        description:
          "Demographics and other administrative information about an individual or animal receiving care or other health-related services.",
      },
    ],
    capability: [
      {
        required: true,
        validated: false,
        description: "Patient Update, Read and Delete Operations",
        link: [
          "http://hl7.org/fhir/http.html#delete",
          "http://hl7.org/fhir/http.html#read",
          "http://hl7.org/fhir/http.html#update",
        ],
        capabilities: "CapabilityStatement/example",
      },
    ],
  },
  fixture: [
    {
      id: "fixture-patient-create",
      autocreate: false,
      autodelete: false,
      resource: {
        reference: "Patient/example",
        display: "Peter Chalmers",
      },
    },
    {
      id: "fixture-patient-minimum",
      autocreate: false,
      autodelete: false,
      resource: {
        reference: "Patient/example",
        display: "Peter Chalmers (minimum)",
      },
    },
  ],
  profile: [
    {
      id: "patient-profile",
      reference: "http://hl7.org/fhir/StructureDefinition/Patient",
    },
  ],
  variable: [
    {
      name: "createResourceId",
      path: "Patient/id",
      sourceId: "fixture-patient-create",
    },
  ],
  setup: {
    action: [
      {
        operation: {
          type: {
            system:
              "http://terminology.hl7.org/CodeSystem/testscript-operation-codes",
            code: "delete",
          },
          resource: "Patient",
          label: "SetupDeletePatient",
          description:
            "Execute a delete operation to insure the patient does not exist on the server.",
          accept: "json",
          encodeRequestUrl: true,
          params: "/${createResourceId}",
        },
      },
      {
        assert: {
          description:
            "Confirm that the returned HTTP status is 200(OK) or 204(No Content).",
          direction: "response",
          operator: "in",
          responseCode: "200,204",
          warningOnly: false,
        },
      },
      {
        operation: {
          type: {
            system:
              "http://terminology.hl7.org/CodeSystem/testscript-operation-codes",
            code: "update",
          },
          resource: "Patient",
          label: "SetupCreatePatient",
          description:
            "Create patient resource on test server using the contents of fixture-patient-create",
          accept: "json",
          contentType: "json",
          encodeRequestUrl: true,
          params: "/${createResourceId}",
          sourceId: "fixture-patient-create",
        },
      },
      {
        assert: {
          description: "Confirm that the returned HTTP status is 201(Created).",
          direction: "response",
          responseCode: "201",
          warningOnly: false,
        },
      },
      {
        operation: {
          type: {
            system:
              "http://terminology.hl7.org/CodeSystem/testscript-operation-codes",
            code: "read",
          },
          resource: "Patient",
          description:
            "Read the created patient resource on the test server using the id from fixture-patient-create. Verify contents.",
          encodeRequestUrl: true,
          targetId: "fixture-patient-create",
        },
      },
      {
        assert: {
          description: "Confirm that the returned HTTP status is 200(OK).",
          direction: "response",
          response: "okay",
          warningOnly: false,
        },
      },
      {
        assert: {
          description:
            "Confirm that the returned Patient contains the expected family name 'Chalmers'. Uses explicit compareToSourceId reference to fixture-patient-create used to create the Patient.",
          compareToSourceId: "fixture-patient-create",
          compareToSourceExpression: "Patient.name.first().family",
          operator: "equals",
          warningOnly: false,
        },
      },
    ],
  },
  test: [
    {
      id: "01-ReadPatient",
      name: "Read Patient",
      description: "Read a Patient and validate response.",
      action: [
        {
          operation: {
            type: {
              system:
                "http://terminology.hl7.org/CodeSystem/testscript-operation-codes",
              code: "read",
            },
            resource: "Patient",
            description:
              "Read the patient resource on the test server using the id from fixture-patient-create. Prevent URL encoding of the request.",
            encodeRequestUrl: false,
            responseId: "fixture-patient-read",
            targetId: "fixture-patient-create",
          },
        },
        {
          assert: {
            label: "01-ReadPatientOK",
            description: "Confirm that the returned HTTP status is 200(OK).",
            direction: "response",
            response: "okay",
            warningOnly: false,
          },
        },
        {
          assert: {
            description:
              "Confirm that the returned HTTP Header Last-Modified is present. Warning only as the server might not support versioning.",
            direction: "response",
            headerField: "Last-Modified",
            operator: "notEmpty",
            warningOnly: true,
          },
        },
        {
          assert: {
            description: "Confirm that the returned resource type is Patient.",
            resource: "Patient",
            warningOnly: false,
          },
        },
        {
          assert: {
            description:
              "Confirm that the returned Patient conforms to the base FHIR specification.",
            validateProfileId: "patient-profile",
            warningOnly: false,
          },
        },
        {
          assert: {
            description:
              "Confirm that the returned Patient contains the expected family name 'Chalmers'. Uses explicit sourceId reference to read responseId fixture.",
            operator: "equals",
            path: "fhir:Patient/fhir:name/fhir:family/@value",
            sourceId: "fixture-patient-read",
            value: "Chalmers",
            warningOnly: false,
          },
        },
        {
          assert: {
            description:
              "Confirm that the returned Patient contains the expected given name 'Peter'. Uses explicit sourceId reference to read responseId fixture.",
            operator: "equals",
            path: "fhir:Patient/fhir:name/fhir:given/@value",
            sourceId: "fixture-patient-read",
            value: "Peter",
            warningOnly: false,
          },
        },
        {
          assert: {
            description:
              "Confirm that the returned Patient contains the expected family name 'Chalmers'. Uses explicit compareToSourceId reference to fixture-patient-create used to create the Patient and implicit reference to read response payload.",
            compareToSourceId: "fixture-patient-create",
            compareToSourcePath: "fhir:Patient/fhir:name/fhir:family/@value",
            operator: "equals",
            path: "fhir:Patient/fhir:name/fhir:family/@value",
            warningOnly: false,
          },
        },
        {
          assert: {
            description:
              "Confirm that the returned Patient contains the expected family name 'Chalmers'. Uses explicit compareToSourceId reference to fixture-patient-create used to create the Patient and explicit reference to read response payload and default operator of 'equals'.",
            compareToSourceId: "fixture-patient-create",
            compareToSourcePath: "fhir:Patient/fhir:name/fhir:given/@value",
            path: "fhir:Patient/fhir:name/fhir:given/@value",
            sourceId: "fixture-patient-read",
            warningOnly: false,
          },
        },
        {
          assert: {
            description:
              "Confirm that the returned resource contains the expected retained elements and values. Warning only to provide users with reviewable results.",
            minimumId: "fixture-patient-minimum",
            warningOnly: true,
          },
        },
      ],
    },
  ],
  teardown: {
    action: [
      {
        operation: {
          type: {
            system:
              "http://terminology.hl7.org/CodeSystem/testscript-operation-codes",
            code: "delete",
          },
          resource: "Patient",
          description:
            "Delete the patient resource on the test server using the id from fixture-patient-create.",
          encodeRequestUrl: true,
          targetId: "fixture-patient-create",
        },
      },
    ],
  },
} as const;
