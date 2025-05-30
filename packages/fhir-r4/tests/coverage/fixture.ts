import type { Coverage } from "../../src/v4.0.1/coverage/types";

export const CoverageExample2: Coverage = {
  resourceType: "Coverage",
  id: "7546D",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">A human-readable rendering of the coverage</div>',
  },
  identifier: [
    {
      system: "http://xyz.com/codes/identifier",
      value: "AB98761",
    },
  ],
  status: "active",
  type: {
    coding: [
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "EHCPOL",
        display: "extended healthcare",
      },
    ],
  },
  subscriber: {
    reference: "Patient/5",
  },
  subscriberId: "AB9876",
  beneficiary: {
    reference: "Patient/5",
  },
  dependent: "1",
  relationship: {
    coding: [
      {
        code: "self",
      },
    ],
  },
  period: {
    start: "2011-03-17",
    end: "2012-03-17",
  },
  payor: [
    {
      reference: "Organization/2",
    },
  ],
  class: [
    {
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/coverage-class",
            code: "group",
          },
        ],
      },
      value: "WESTAIR",
      name: "Western Airlines",
    },
    {
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/coverage-class",
            code: "plan",
          },
        ],
      },
      value: "BG4352",
      name: "Full Coverage: Medical, Dental, Pharmacy, Vision, EHC",
    },
    {
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/coverage-class",
            code: "subplan",
          },
        ],
      },
      value: "D15C9",
      name: "Platinum",
    },
  ],
  order: 2,
  network: "5",
  costToBeneficiary: [
    {
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/coverage-copay-type",
            code: "gpvisit",
          },
        ],
      },
      valueMoney: {
        value: 20,
        currency: "USD",
      },
      exception: [
        {
          type: {
            coding: [
              {
                system:
                  "http://terminology.hl7.org/CodeSystem/ex-coverage-financial-exception",
                code: "retired",
              },
            ],
          },
          period: {
            start: "2018-01-01",
            end: "2018-12-31",
          },
        },
      ],
    },
  ],
  contract: [
    {
      reference: "Contract/INS-101",
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

export const CoverageExampleEhic: Coverage = {
  resourceType: "Coverage",
  id: "7547E",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">A human-readable rendering of the European Health Insurance Card</div>',
  },
  identifier: [
    {
      system: "http://ehic.com/insurer/123456789/member",
      value: "A123456780",
    },
  ],
  status: "active",
  type: {
    coding: [
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "EHCPOL",
        display: "extended healthcare",
      },
    ],
  },
  subscriber: {
    reference: "Patient/5",
  },
  beneficiary: {
    reference: "Patient/5",
  },
  relationship: {
    coding: [
      {
        code: "self",
      },
    ],
  },
  period: {
    end: "2012-03-17",
  },
  payor: [
    {
      identifier: {
        system: "http://ehic.com/insurer",
        value: "123456789",
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

export const CoverageExampleSelfpay: Coverage = {
  resourceType: "Coverage",
  id: "SP1234",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">A human-readable rendering of a Self Pay Agreement.</div>',
  },
  identifier: [
    {
      system: "http://hospitalx.com/selfpayagreement",
      value: "SP12345678",
    },
  ],
  status: "active",
  type: {
    coding: [
      {
        system: "http://terminology.hl7.org/CodeSystem/coverage-selfpay",
        code: "pay",
        display: "PAY",
      },
    ],
  },
  subscriber: {
    reference: "Patient/5",
  },
  beneficiary: {
    reference: "Patient/5",
  },
  relationship: {
    coding: [
      {
        code: "self",
      },
    ],
  },
  period: {
    end: "2012-03-17",
  },
  payor: [
    {
      reference: "Patient/5",
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

export const CoverageExample: Coverage = {
  resourceType: "Coverage",
  id: "9876B1",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">A human-readable rendering of the coverage</div>',
  },
  identifier: [
    {
      system: "http://benefitsinc.com/certificate",
      value: "12345",
    },
  ],
  status: "active",
  type: {
    coding: [
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "EHCPOL",
        display: "extended healthcare",
      },
    ],
  },
  policyHolder: {
    reference: "http://benefitsinc.com/FHIR/Organization/CBI35",
  },
  subscriber: {
    reference: "Patient/4",
  },
  beneficiary: {
    reference: "Patient/4",
  },
  dependent: "0",
  relationship: {
    coding: [
      {
        code: "self",
      },
    ],
  },
  period: {
    start: "2011-05-23",
    end: "2012-05-23",
  },
  payor: [
    {
      reference: "Organization/2",
    },
  ],
  class: [
    {
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/coverage-class",
            code: "group",
          },
        ],
      },
      value: "CB135",
      name: "Corporate Baker's Inc. Local #35",
    },
    {
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/coverage-class",
            code: "subgroup",
          },
        ],
      },
      value: "123",
      name: "Trainee Part-time Benefits",
    },
    {
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/coverage-class",
            code: "plan",
          },
        ],
      },
      value: "B37FC",
      name: "Full Coverage: Medical, Dental, Pharmacy, Vision, EHC",
    },
    {
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/coverage-class",
            code: "subplan",
          },
        ],
      },
      value: "P7",
      name: "Includes afterlife benefits",
    },
    {
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/coverage-class",
            code: "class",
          },
        ],
      },
      value: "SILVER",
      name: "Silver: Family Plan spouse only",
    },
    {
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/coverage-class",
            code: "subclass",
          },
        ],
      },
      value: "Tier2",
      name: "Low deductable, max $20 copay",
    },
    {
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/coverage-class",
            code: "sequence",
          },
        ],
      },
      value: "9",
    },
    {
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/coverage-class",
            code: "rxid",
          },
        ],
      },
      value: "MDF12345",
    },
    {
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/coverage-class",
            code: "rxbin",
          },
        ],
      },
      value: "987654",
    },
    {
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/coverage-class",
            code: "rxgroup",
          },
        ],
      },
      value: "M35PT",
    },
    {
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/coverage-class",
            code: "rxpcn",
          },
        ],
      },
      value: "234516",
    },
    {
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/coverage-class",
            code: "sequence",
          },
        ],
      },
      value: "9",
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
