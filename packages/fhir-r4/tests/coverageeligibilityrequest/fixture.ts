import type { CoverageEligibilityRequest } from "../../src/v4.0.1/coverageeligibilityrequest/types";

export const CoverageeligibilityrequestExample2: CoverageEligibilityRequest = {
  resourceType: "CoverageEligibilityRequest",
  id: "52346",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">A human-readable rendering of the CoverageEligibilityRequest</div>',
  },
  identifier: [
    {
      system: "http://happyvalley.com/coverageelegibilityrequest",
      value: "52346",
    },
  ],
  status: "active",
  priority: {
    coding: [
      {
        code: "normal",
      },
    ],
  },
  purpose: ["validation", "benefits"],
  patient: {
    reference: "Patient/pat1",
  },
  servicedDate: "2014-09-17",
  created: "2014-08-16",
  enterer: {
    identifier: {
      system: "http://happyvalleyclinic.com/staff",
      value: "14",
    },
  },
  provider: {
    reference: "Organization/1",
  },
  insurer: {
    reference: "Organization/2",
  },
  facility: {
    identifier: {
      system: "http://statecliniclicensor.com/clinicid",
      value: "G35B9",
    },
  },
  insurance: [
    {
      coverage: {
        reference: "Coverage/9876B1",
      },
      businessArrangement: "NB8742",
    },
  ],
  item: [
    {
      category: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/ex-benefitcategory",
            code: "69",
            display: "Maternity",
          },
        ],
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

export const CoverageeligibilityrequestExample: CoverageEligibilityRequest = {
  resourceType: "CoverageEligibilityRequest",
  id: "52345",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">A human-readable rendering of the CoverageEligibilityRequest</div>',
  },
  identifier: [
    {
      system: "http://happyvalley.com/coverageelegibilityrequest",
      value: "52345",
    },
  ],
  status: "active",
  priority: {
    coding: [
      {
        code: "normal",
      },
    ],
  },
  purpose: ["validation"],
  patient: {
    reference: "Patient/pat1",
  },
  created: "2014-08-16",
  provider: {
    reference: "Organization/1",
  },
  insurer: {
    reference: "Organization/2",
  },
  insurance: [
    {
      focal: true,
      coverage: {
        reference: "Coverage/9876B1",
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
