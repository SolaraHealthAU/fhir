import type { EnrollmentRequest } from "../../src/v4.0.1/enrollmentrequest/types";

export const EnrollmentrequestExample: EnrollmentRequest = {
  resourceType: "EnrollmentRequest",
  id: "22345",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">A human-readable rendering of the EnrollmentRequest.</div>',
  },
  identifier: [
    {
      system: "http://happyvalley.com/enrollmentrequest",
      value: "EN22345",
    },
  ],
  status: "active",
  created: "2014-08-16",
  insurer: {
    reference: "Organization/2",
  },
  provider: {
    reference: "Organization/1",
  },
  candidate: {
    reference: "Patient/1",
  },
  coverage: {
    reference: "Coverage/9876B1",
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
