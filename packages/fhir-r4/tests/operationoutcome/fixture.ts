import type { OperationOutcome } from "../../src/v4.0.1/operationoutcome/types";

export const OperationoutcomeExampleAllok: OperationOutcome = {
  resourceType: "OperationOutcome",
  id: "allok",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n      <p>All OK</p>\n    </div>',
  },
  issue: [
    {
      severity: "information",
      code: "informational",
      details: {
        text: "All OK",
      },
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

export const OperationoutcomeExampleBreakTheGlass: OperationOutcome = {
  resourceType: "OperationOutcome",
  id: "break-the-glass",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n      <p>Additional information may be available using the Break-The-Glass Protocol</p>\n    </div>',
  },
  issue: [
    {
      severity: "information",
      code: "suppressed",
      details: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
            code: "ETREAT",
            display: "Emergency Treatment",
          },
        ],
        text: "Additional information may be available using the Break-The-Glass Protocol",
      },
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

export const OperationoutcomeExampleException: OperationOutcome = {
  resourceType: "OperationOutcome",
  id: "exception",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n      <p>SQL Link Communication Error (dbx = 34234)</p>\n    </div>',
  },
  issue: [
    {
      severity: "error",
      code: "exception",
      details: {
        text: "SQL Link Communication Error (dbx = 34234)",
      },
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

export const OperationoutcomeExampleSearchfail: OperationOutcome = {
  resourceType: "OperationOutcome",
  id: "searchfail",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n      <p>The &quot;name&quot; parameter has the modifier &quot;exact&quot; which is not supported by this server</p>\n    </div>',
  },
  issue: [
    {
      severity: "fatal",
      code: "code-invalid",
      details: {
        text: 'The "name" parameter has the modifier "exact" which is not supported by this server',
      },
      location: ["http.name:exact"],
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

export const OperationoutcomeExampleValidationfail: OperationOutcome = {
  resourceType: "OperationOutcome",
  id: "validationfail",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n      <p>Error parsing resource XML (Unknown Content &quot;label&quot; @ /Patient/identifier/label) at Patient.identifier</p>\n    </div>',
  },
  issue: [
    {
      severity: "error",
      code: "structure",
      details: {
        text: 'Error parsing resource XML (Unknown Content "label"',
      },
      location: ["/f:Patient/f:identifier"],
      expression: ["Patient.identifier"],
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

export const OperationoutcomeExample: OperationOutcome = {
  resourceType: "OperationOutcome",
  id: "101",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n      <p>The code &quot;W&quot; is not known and not legal Patient.gender.</p>\n    </div>',
  },
  issue: [
    {
      severity: "error",
      code: "code-invalid",
      details: {
        text: 'The code "W" is not known and not legal in this context',
      },
      diagnostics:
        "Acme.Interop.FHIRProcessors.Patient.processGender line 2453",
      location: ["/f:Patient/f:gender"],
      expression: ["Patient.gender"],
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
