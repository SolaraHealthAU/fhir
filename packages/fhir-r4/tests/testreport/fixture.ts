import type { TestReport } from "../../src/v4.0.1/testreport/types";

export const TestreportExample: TestReport = {
  resourceType: "TestReport",
  id: "testreport-example",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: testreport-example</p><p><b>identifier</b>: urn:oid:1.3.6.1.4.1.21367.2005.3.7.9878</p><p><b>name</b>: TestReport Example for TestScript Example</p><p><b>status</b>: completed</p><p><b>testScript</b>: <a>TestScript/testscript-example</a></p><p><b>result</b>: pass</p><p><b>score</b>: 100.0</p><p><b>tester</b>: HL7 Execution Engine</p><p><b>issued</b>: 07/10/2016 8:25:34 AM</p><blockquote><p><b>participant</b></p><p><b>type</b>: test-engine</p><p><b>uri</b>: <a>http://projectcrucible.org</a></p><p><b>display</b>: Crucible</p></blockquote><blockquote><p><b>participant</b></p><p><b>type</b>: server</p><p><b>uri</b>: <a>http://fhir3.healthintersections.com.au/open</a></p><p><b>display</b>: HealthIntersections STU3</p></blockquote><blockquote><p><b>setup</b></p><blockquote><p><b>action</b></p><h3>Operations</h3><table><tr><td>-</td><td><b>Result</b></td><td><b>Message</b></td><td><b>Detail</b></td></tr><tr><td>*</td><td>pass</td><td>DELETE Patient</td><td><a>http://projectcrucible.org/permalink/1</a></td></tr></table></blockquote><blockquote><p><b>action</b></p><h3>Asserts</h3><table><tr><td>-</td><td><b>Result</b></td><td><b>Message</b></td><td><b>Detail</b></td></tr><tr><td>*</td><td>pass</td><td>HTTP 204</td><td>http://projectcrucible.org/permalink/1</td></tr></table></blockquote><blockquote><p><b>action</b></p><h3>Operations</h3><table><tr><td>-</td><td><b>Result</b></td><td><b>Message</b></td><td><b>Detail</b></td></tr><tr><td>*</td><td>pass</td><td>POST Patient/fixture-patient-create</td><td><a>http://projectcrucible.org/permalink/1</a></td></tr></table></blockquote><blockquote><p><b>action</b></p><h3>Asserts</h3><table><tr><td>-</td><td><b>Result</b></td><td><b>Message</b></td><td><b>Detail</b></td></tr><tr><td>*</td><td>pass</td><td>HTTP 201</td><td>http://projectcrucible.org/permalink/1</td></tr></table></blockquote></blockquote><blockquote><p><b>test</b></p><p><b>name</b>: Read Patient</p><p><b>description</b>: Read a Patient and validate response.</p><blockquote><p><b>action</b></p><h3>Operations</h3><table><tr><td>-</td></tr><tr><td>*</td></tr></table></blockquote><blockquote><p><b>action</b></p><h3>Asserts</h3><table><tr><td>-</td></tr><tr><td>*</td></tr></table></blockquote><blockquote><p><b>action</b></p><h3>Asserts</h3><table><tr><td>-</td></tr><tr><td>*</td></tr></table></blockquote><blockquote><p><b>action</b></p><h3>Asserts</h3><table><tr><td>-</td></tr><tr><td>*</td></tr></table></blockquote><blockquote><p><b>action</b></p><h3>Asserts</h3><table><tr><td>-</td></tr><tr><td>*</td></tr></table></blockquote><blockquote><p><b>action</b></p><h3>Asserts</h3><table><tr><td>-</td></tr><tr><td>*</td></tr></table></blockquote><blockquote><p><b>action</b></p><h3>Asserts</h3><table><tr><td>-</td></tr><tr><td>*</td></tr></table></blockquote><blockquote><p><b>action</b></p><h3>Asserts</h3><table><tr><td>-</td></tr><tr><td>*</td></tr></table></blockquote><blockquote><p><b>action</b></p><h3>Asserts</h3><table><tr><td>-</td></tr><tr><td>*</td></tr></table></blockquote><blockquote><p><b>action</b></p><h3>Asserts</h3><table><tr><td>-</td></tr><tr><td>*</td></tr></table></blockquote></blockquote><blockquote><p><b>teardown</b></p><blockquote><p><b>action</b></p><h3>Operations</h3><table><tr><td>-</td></tr><tr><td>*</td></tr></table></blockquote></blockquote></div>',
  },
  identifier: {
    system: "urn:ietf:rfc:3986",
    value: "urn:oid:1.3.6.1.4.1.21367.2005.3.7.9878",
  },
  name: "TestReport Example for TestScript Example",
  status: "completed",
  testScript: {
    reference: "TestScript/testscript-example",
  },
  result: "pass",
  score: 100,
  tester: "HL7 Execution Engine",
  issued: "2016-10-07T08:25:34-05:00",
  participant: [
    {
      type: "test-engine",
      uri: "http://projectcrucible.org",
      display: "Crucible",
    },
    {
      type: "server",
      uri: "http://fhir3.healthintersections.com.au/open",
      display: "HealthIntersections STU3",
    },
  ],
  setup: {
    action: [
      {
        operation: {
          result: "pass",
          message: "DELETE Patient",
          detail: "http://projectcrucible.org/permalink/1",
        },
      },
      {
        assert: {
          result: "pass",
          message: "HTTP 204",
          detail: "http://projectcrucible.org/permalink/1",
        },
      },
      {
        operation: {
          result: "pass",
          message: "POST Patient/fixture-patient-create",
          detail: "http://projectcrucible.org/permalink/1",
        },
      },
      {
        assert: {
          result: "pass",
          message: "HTTP 201",
          detail: "http://projectcrucible.org/permalink/1",
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
            result: "pass",
            message: "GET Patient/fixture-patient-create",
            detail: "http://projectcrucible.org/permalink/2",
          },
        },
        {
          assert: {
            result: "pass",
            message: "HTTP 200",
            detail: "http://projectcrucible.org/permalink/2",
          },
        },
        {
          assert: {
            result: "pass",
            message: "Last-Modified Present",
            detail: "http://projectcrucible.org/permalink/2",
          },
        },
        {
          assert: {
            result: "pass",
            message: "Response is Patient",
            detail: "http://projectcrucible.org/permalink/2",
          },
        },
        {
          assert: {
            result: "pass",
            message: "Response validates",
            detail: "http://projectcrucible.org/permalink/2",
          },
        },
        {
          assert: {
            result: "pass",
            message: "Patient.name.family 'Chalmers'",
            detail: "http://projectcrucible.org/permalink/2",
          },
        },
        {
          assert: {
            result: "pass",
            message: "Patient.name.given 'Peter'",
            detail: "http://projectcrucible.org/permalink/2",
          },
        },
        {
          assert: {
            result: "pass",
            message: "Patient.name.family 'Chalmers'",
            detail: "http://projectcrucible.org/permalink/2",
          },
        },
        {
          assert: {
            result: "pass",
            message: "Patient.name.family 'Chalmers'",
            detail: "http://projectcrucible.org/permalink/2",
          },
        },
        {
          assert: {
            result: "pass",
            message: "Patient expected values.",
            detail: "http://projectcrucible.org/permalink/2",
          },
        },
      ],
    },
  ],
  teardown: {
    action: [
      {
        operation: {
          result: "pass",
          message: "DELETE Patient/fixture-patient-create.",
          detail: "http://projectcrucible.org/permalink/3",
        },
      },
    ],
  },
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
