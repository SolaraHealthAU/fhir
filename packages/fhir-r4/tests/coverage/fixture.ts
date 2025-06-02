import type { Coverage } from "../../src/v4.0.1/coverage/types";
import type { CoverageEligibilityRequest } from "../../src/v4.0.1/coverage/types";
import type { CoverageEligibilityResponse } from "../../src/v4.0.1/coverage/types";

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

export const CoverageeligibilityresponseExampleBenefits2: CoverageEligibilityResponse =
  {
    resourceType: "CoverageEligibilityResponse",
    id: "E2502",
    text: {
      status: "generated",
      div: '<div xmlns="http://www.w3.org/1999/xhtml">A human-readable rendering of the CoverageEligibilityResponse.</div>',
    },
    contained: [
      {
        resourceType: "Coverage",
        id: "coverage-1",
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
            },
          ],
        },
        subscriber: {
          reference: "Patient/f201",
        },
        beneficiary: {
          reference: "Patient/f201",
        },
        dependent: "1",
        relationship: {
          coding: [
            {
              code: "self",
            },
          ],
        },
        payor: [
          {
            identifier: {
              system: "http://www.bindb.com/bin",
              value: "123456",
            },
          },
        ],
        class: [
          {
            type: {
              coding: [
                {
                  system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
                  code: "EHCPOL",
                },
              ],
            },
            value: "CBI35",
            name: "Corporate Baker's Inc. Plan#35",
          },
          {
            type: {
              coding: [
                {
                  system:
                    "http://terminology.hl7.org/CodeSystem/coverage-class",
                  code: "subplan",
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
                  system:
                    "http://terminology.hl7.org/CodeSystem/coverage-class",
                  code: "sequence",
                },
              ],
            },
            value: "1",
          },
        ],
      },
    ],
    identifier: [
      {
        system: "http://www.BenefitsInc.com/fhir/coverageeligibilityresponse",
        value: "8812342",
      },
    ],
    status: "active",
    purpose: ["validation", "benefits"],
    patient: {
      reference: "Patient/f201",
    },
    created: "2014-09-16",
    requestor: {
      identifier: {
        system: "http://national.org/clinic",
        value: "OR1234",
      },
    },
    request: {
      reference:
        "http://www.BenefitsInc.com/fhir/coverageeligibilityrequest/225476332405",
    },
    outcome: "complete",
    disposition: "Policy is currently in-force.",
    insurer: {
      reference: "Organization/2",
    },
    insurance: [
      {
        coverage: {
          reference: "#coverage-1",
        },
        inforce: true,
        item: [
          {
            category: {
              coding: [
                {
                  system:
                    "http://terminology.hl7.org/CodeSystem/ex-benefitcategory",
                  code: "30",
                  display: "Health Benefit Plan Coverage",
                },
              ],
            },
            network: {
              coding: [
                {
                  system:
                    "http://terminology.hl7.org/CodeSystem/benefit-network",
                  code: "in",
                },
              ],
            },
            unit: {
              coding: [
                {
                  system: "http://terminology.hl7.org/CodeSystem/benefit-unit",
                  code: "individual",
                },
              ],
            },
            term: {
              coding: [
                {
                  system: "http://terminology.hl7.org/CodeSystem/benefit-term",
                  code: "annual",
                },
              ],
            },
            benefit: [
              {
                type: {
                  coding: [
                    {
                      code: "benefit",
                    },
                  ],
                },
                allowedMoney: {
                  value: 500000,
                  currency: "USD",
                },
                usedMoney: {
                  value: 3748,
                  currency: "USD",
                },
              },
              {
                type: {
                  coding: [
                    {
                      code: "copay-maximum",
                    },
                  ],
                },
                allowedMoney: {
                  value: 100,
                  currency: "USD",
                },
              },
              {
                type: {
                  coding: [
                    {
                      code: "copay-percent",
                    },
                  ],
                },
                allowedUnsignedInt: 20,
              },
            ],
          },
          {
            category: {
              coding: [
                {
                  system:
                    "http://terminology.hl7.org/CodeSystem/ex-benefitcategory",
                  code: "69",
                  display: "Maternity",
                },
              ],
            },
            network: {
              coding: [
                {
                  system:
                    "http://terminology.hl7.org/CodeSystem/benefit-network",
                  code: "in",
                },
              ],
            },
            unit: {
              coding: [
                {
                  system: "http://terminology.hl7.org/CodeSystem/benefit-unit",
                  code: "individual",
                },
              ],
            },
            term: {
              coding: [
                {
                  system: "http://terminology.hl7.org/CodeSystem/benefit-term",
                  code: "annual",
                },
              ],
            },
            benefit: [
              {
                type: {
                  coding: [
                    {
                      code: "benefit",
                    },
                  ],
                },
                allowedMoney: {
                  value: 15000,
                  currency: "USD",
                },
              },
            ],
          },
          {
            category: {
              coding: [
                {
                  system:
                    "http://terminology.hl7.org/CodeSystem/ex-benefitcategory",
                  code: "F3",
                  display: "Dental Coverage",
                },
              ],
            },
            network: {
              coding: [
                {
                  system:
                    "http://terminology.hl7.org/CodeSystem/benefit-network",
                  code: "in",
                },
              ],
            },
            unit: {
              coding: [
                {
                  system: "http://terminology.hl7.org/CodeSystem/benefit-unit",
                  code: "individual",
                },
              ],
            },
            term: {
              coding: [
                {
                  system: "http://terminology.hl7.org/CodeSystem/benefit-term",
                  code: "annual",
                },
              ],
            },
            benefit: [
              {
                type: {
                  coding: [
                    {
                      code: "benefit",
                    },
                  ],
                },
                allowedMoney: {
                  value: 2000,
                  currency: "USD",
                },
              },
            ],
          },
          {
            category: {
              coding: [
                {
                  system:
                    "http://terminology.hl7.org/CodeSystem/ex-benefitcategory",
                  code: "F6",
                  display: "Vision Coverage",
                },
              ],
            },
            excluded: true,
            name: "Vision",
            description:
              "Vision products and services such as exams, glasses and contact lenses.",
          },
        ],
      },
    ],
    form: {
      coding: [
        {
          system: "http://national.org/form",
          code: "ELRSP/2017/01",
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

export const CoverageeligibilityresponseExampleBenefits: CoverageEligibilityResponse =
  {
    resourceType: "CoverageEligibilityResponse",
    id: "E2501",
    text: {
      status: "generated",
      div: '<div xmlns="http://www.w3.org/1999/xhtml">A human-readable rendering of the CoverageEligibilityResponse.</div>',
    },
    identifier: [
      {
        system: "http://www.BenefitsInc.com/fhir/coverageeligibilityresponse",
        value: "881234",
      },
    ],
    status: "active",
    purpose: ["validation", "benefits"],
    patient: {
      reference: "Patient/pat1",
    },
    servicedDate: "2014-09-17",
    created: "2014-08-16",
    request: {
      reference:
        "http://www.BenefitsInc.com/fhir/coverageeligibilityresponse/225476332402",
    },
    outcome: "complete",
    disposition: "Policy is currently in-force.",
    insurer: {
      reference: "Organization/2",
    },
    insurance: [
      {
        coverage: {
          reference: "Coverage/9876B1",
        },
        inforce: true,
        item: [
          {
            category: {
              coding: [
                {
                  system:
                    "http://terminology.hl7.org/CodeSystem/ex-benefitcategory",
                  code: "30",
                  display: "Health Benefit Plan Coverage",
                },
              ],
            },
            network: {
              coding: [
                {
                  system:
                    "http://terminology.hl7.org/CodeSystem/benefit-network",
                  code: "in",
                },
              ],
            },
            unit: {
              coding: [
                {
                  system: "http://terminology.hl7.org/CodeSystem/benefit-unit",
                  code: "individual",
                },
              ],
            },
            term: {
              coding: [
                {
                  system: "http://terminology.hl7.org/CodeSystem/benefit-term",
                  code: "annual",
                },
              ],
            },
            benefit: [
              {
                type: {
                  coding: [
                    {
                      code: "benefit",
                    },
                  ],
                },
                allowedMoney: {
                  value: 500000,
                  currency: "SAR",
                },
              },
              {
                type: {
                  coding: [
                    {
                      code: "copay-maximum",
                    },
                  ],
                },
                allowedMoney: {
                  value: 100,
                  currency: "SAR",
                },
              },
              {
                type: {
                  coding: [
                    {
                      code: "copay-percent",
                    },
                  ],
                },
                allowedUnsignedInt: 20,
              },
            ],
          },
          {
            category: {
              coding: [
                {
                  system:
                    "http://terminology.hl7.org/CodeSystem/ex-benefitcategory",
                  code: "69",
                  display: "Maternity",
                },
              ],
            },
            network: {
              coding: [
                {
                  system:
                    "http://terminology.hl7.org/CodeSystem/benefit-network",
                  code: "in",
                },
              ],
            },
            unit: {
              coding: [
                {
                  system: "http://terminology.hl7.org/CodeSystem/benefit-unit",
                  code: "individual",
                },
              ],
            },
            term: {
              coding: [
                {
                  system: "http://terminology.hl7.org/CodeSystem/benefit-term",
                  code: "annual",
                },
              ],
            },
            benefit: [
              {
                type: {
                  coding: [
                    {
                      code: "benefit",
                    },
                  ],
                },
                allowedMoney: {
                  value: 15000,
                  currency: "SAR",
                },
              },
            ],
          },
          {
            category: {
              coding: [
                {
                  system:
                    "http://terminology.hl7.org/CodeSystem/ex-benefitcategory",
                  code: "F3",
                  display: "Dental Coverage",
                },
              ],
            },
            network: {
              coding: [
                {
                  system:
                    "http://terminology.hl7.org/CodeSystem/benefit-network",
                  code: "in",
                },
              ],
            },
            unit: {
              coding: [
                {
                  system: "http://terminology.hl7.org/CodeSystem/benefit-unit",
                  code: "individual",
                },
              ],
            },
            term: {
              coding: [
                {
                  system: "http://terminology.hl7.org/CodeSystem/benefit-term",
                  code: "annual",
                },
              ],
            },
            benefit: [
              {
                type: {
                  coding: [
                    {
                      code: "benefit",
                    },
                  ],
                },
                allowedMoney: {
                  value: 2000,
                  currency: "SAR",
                },
              },
            ],
          },
          {
            category: {
              coding: [
                {
                  system:
                    "http://terminology.hl7.org/CodeSystem/ex-benefitcategory",
                  code: "F6",
                  display: "Vision Coverage",
                },
              ],
            },
            network: {
              coding: [
                {
                  system:
                    "http://terminology.hl7.org/CodeSystem/benefit-network",
                  code: "in",
                },
              ],
            },
            unit: {
              coding: [
                {
                  system: "http://terminology.hl7.org/CodeSystem/benefit-unit",
                  code: "individual",
                },
              ],
            },
            term: {
              coding: [
                {
                  system: "http://terminology.hl7.org/CodeSystem/benefit-term",
                  code: "annual",
                },
              ],
            },
            benefit: [
              {
                type: {
                  coding: [
                    {
                      code: "benefit",
                    },
                  ],
                },
                allowedMoney: {
                  value: 400,
                  currency: "SAR",
                },
              },
            ],
          },
          {
            category: {
              coding: [
                {
                  system:
                    "http://terminology.hl7.org/CodeSystem/ex-benefitcategory",
                  code: "49",
                  display: "Hospital Room and Board",
                },
              ],
            },
            network: {
              coding: [
                {
                  system:
                    "http://terminology.hl7.org/CodeSystem/benefit-network",
                  code: "in",
                },
              ],
            },
            unit: {
              coding: [
                {
                  system: "http://terminology.hl7.org/CodeSystem/benefit-unit",
                  code: "individual",
                },
              ],
            },
            term: {
              coding: [
                {
                  system: "http://terminology.hl7.org/CodeSystem/benefit-term",
                  code: "day",
                },
              ],
            },
            benefit: [
              {
                type: {
                  coding: [
                    {
                      code: "room",
                    },
                  ],
                },
                allowedString: "shared",
              },
              {
                type: {
                  coding: [
                    {
                      code: "benefit",
                    },
                  ],
                },
                allowedMoney: {
                  value: 600,
                  currency: "SAR",
                },
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

export const CoverageeligibilityresponseExampleError: CoverageEligibilityResponse =
  {
    resourceType: "CoverageEligibilityResponse",
    id: "E2503",
    text: {
      status: "generated",
      div: '<div xmlns="http://www.w3.org/1999/xhtml">A human-readable rendering of the CoverageEligibilityResponse.</div>',
    },
    identifier: [
      {
        system: "http://www.BenefitsInc.com/fhir/coverageeligibilityresponse",
        value: "8812343",
      },
    ],
    status: "active",
    purpose: ["validation"],
    patient: {
      reference: "Patient/f201",
    },
    created: "2014-09-16",
    requestor: {
      identifier: {
        system: "http://national.org/clinic",
        value: "OR1234",
      },
    },
    request: {
      reference:
        "http://www.BenefitsInc.com/fhir/coverageeligibilityresponse/225476332406",
    },
    outcome: "error",
    disposition:
      "Eligibiliy request could not be processed, please address errors before submitting.",
    insurer: {
      reference: "Organization/2",
    },
    form: {
      coding: [
        {
          system: "http://national.org/form",
          code: "ELRSP/2017/01",
        },
      ],
    },
    error: [
      {
        code: {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/adjudication-error",
              code: "a001",
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

export const CoverageeligibilityresponseExample: CoverageEligibilityResponse = {
  resourceType: "CoverageEligibilityResponse",
  id: "E2500",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">A human-readable rendering of the CoverageEligibilityResponse.</div>',
  },
  identifier: [
    {
      system: "http://www.BenefitsInc.com/fhir/coverageeligibilityresponse",
      value: "881234",
    },
  ],
  status: "active",
  purpose: ["validation"],
  patient: {
    reference: "Patient/pat1",
  },
  created: "2014-08-16",
  request: {
    reference:
      "http://www.BenefitsInc.com/fhir/coverageeligibilityrequest/225476332402",
  },
  outcome: "complete",
  disposition: "Policy is currently in-force.",
  insurer: {
    reference: "Organization/2",
  },
  insurance: [
    {
      coverage: {
        reference: "Coverage/9876B1",
      },
      inforce: true,
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
