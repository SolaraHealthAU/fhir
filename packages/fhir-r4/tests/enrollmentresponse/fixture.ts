import type { EnrollmentResponse } from "../../src/v4.0.1/enrollmentresponse/types";

export const EnrollmentresponseExample: EnrollmentResponse = {
  resourceType: "EnrollmentResponse",
  id: "ER2500",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">A human-readable rendering of the EnrollmentResponse</div>',
  },
  identifier: [
    {
      system: "http://www.BenefitsInc.com/fhir/enrollmentresponse",
      value: "781234",
    },
  ],
  status: "active",
  request: {
    reference: "http://www.BenefitsInc.com/fhir/eligibility/225476332402",
  },
  outcome: "complete",
  disposition: "Dependant added to policy.",
  created: "2014-08-16",
  organization: {
    reference: "Organization/2",
  },
  requestProvider: {
    reference: "Organization/1",
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
