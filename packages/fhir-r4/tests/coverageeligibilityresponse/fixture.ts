import type { CoverageEligibilityResponse } from "../../src/v4.0.1/coverageeligibilityresponse/types";

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
