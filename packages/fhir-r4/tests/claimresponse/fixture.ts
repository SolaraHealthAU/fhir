import type { ClaimResponse } from "../../src/v4.0.1/claimresponse/types";

export const ClaimresponseExample2: ClaimResponse = {
  resourceType: "ClaimResponse",
  id: "R3501",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">A human-readable rendering of the ClaimResponse that demonstrates returning errors</div>',
  },
  identifier: [
    {
      system: "http://www.BenefitsInc.com/fhir/remittance",
      value: "R3501",
    },
  ],
  status: "active",
  type: {
    coding: [
      {
        system: "http://terminology.hl7.org/CodeSystem/claim-type",
        code: "oral",
      },
    ],
  },
  use: "claim",
  patient: {
    reference: "Patient/1",
  },
  created: "2014-08-16",
  insurer: {
    identifier: {
      system: "http://www.jurisdiction.org/insurers",
      value: "555123",
    },
  },
  requestor: {
    reference: "Practitioner/1",
  },
  request: {
    reference: "Claim/100156",
  },
  outcome: "error",
  disposition: "Claim could not be processed",
  formCode: {
    coding: [
      {
        system: "http://terminology.hl7.org/CodeSystem/forms-codes",
        code: "2",
      },
    ],
  },
  processNote: [
    {
      number: 1,
      type: "display",
      text: "Invalid claim",
      language: {
        coding: [
          {
            system: "urn:ietf:bcp:47",
            code: "en-CA",
          },
        ],
      },
    },
  ],
  communicationRequest: [
    {
      reference: "CommunicationRequest/fm-solicit",
    },
  ],
  error: [
    {
      itemSequence: 3,
      detailSequence: 2,
      code: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/adjudication-error",
            code: "a002",
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

export const ClaimresponseExampleAdditem: ClaimResponse = {
  resourceType: "ClaimResponse",
  id: "R3503",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">A human-readable rendering of the ClaimResponse to Claim Oral Average with additional items</div>',
  },
  identifier: [
    {
      system: "http://www.BenefitsInc.com/fhir/remittance",
      value: "R3503",
    },
  ],
  status: "active",
  type: {
    coding: [
      {
        system: "http://terminology.hl7.org/CodeSystem/claim-type",
        code: "oral",
      },
    ],
  },
  use: "claim",
  patient: {
    reference: "Patient/1",
  },
  created: "2014-08-16",
  insurer: {
    identifier: {
      system: "http://www.jurisdiction.org/insurers",
      value: "555123",
    },
  },
  requestor: {
    reference: "Organization/1",
  },
  request: {
    identifier: {
      system: "http://happyvalley.com/claim",
      value: "12346",
    },
  },
  outcome: "complete",
  disposition: "Claim settled as per contract.",
  payeeType: {
    coding: [
      {
        system: "http://terminology.hl7.org/CodeSystem/payeetype",
        code: "provider",
      },
    ],
  },
  item: [
    {
      itemSequence: 1,
      adjudication: [
        {
          category: {
            coding: [
              {
                code: "eligible",
              },
            ],
          },
          amount: {
            value: 0,
            currency: "USD",
          },
        },
        {
          category: {
            coding: [
              {
                code: "benefit",
              },
            ],
          },
          amount: {
            value: 0,
            currency: "USD",
          },
        },
      ],
    },
    {
      itemSequence: 2,
      adjudication: [
        {
          category: {
            coding: [
              {
                code: "eligible",
              },
            ],
          },
          amount: {
            value: 105,
            currency: "USD",
          },
        },
        {
          category: {
            coding: [
              {
                code: "eligpercent",
              },
            ],
          },
          value: 80,
        },
        {
          category: {
            coding: [
              {
                code: "benefit",
              },
            ],
          },
          amount: {
            value: 84,
            currency: "USD",
          },
        },
      ],
    },
    {
      itemSequence: 3,
      adjudication: [
        {
          category: {
            coding: [
              {
                code: "eligible",
              },
            ],
          },
          amount: {
            value: 750,
            currency: "USD",
          },
        },
        {
          category: {
            coding: [
              {
                code: "eligpercent",
              },
            ],
          },
          value: 80,
        },
        {
          category: {
            coding: [
              {
                code: "benefit",
              },
            ],
          },
          amount: {
            value: 600,
            currency: "USD",
          },
        },
      ],
      detail: [
        {
          detailSequence: 1,
          adjudication: [
            {
              category: {
                coding: [
                  {
                    code: "eligible",
                  },
                ],
              },
              amount: {
                value: 750,
                currency: "USD",
              },
            },
            {
              category: {
                coding: [
                  {
                    code: "eligpercent",
                  },
                ],
              },
              value: 80,
            },
            {
              category: {
                coding: [
                  {
                    code: "benefit",
                  },
                ],
              },
              amount: {
                value: 600,
                currency: "USD",
              },
            },
          ],
        },
        {
          detailSequence: 2,
          adjudication: [
            {
              category: {
                coding: [
                  {
                    code: "eligible",
                  },
                ],
              },
              amount: {
                value: 0,
                currency: "USD",
              },
            },
            {
              category: {
                coding: [
                  {
                    code: "benefit",
                  },
                ],
              },
              amount: {
                value: 0,
                currency: "USD",
              },
            },
          ],
        },
      ],
    },
  ],
  addItem: [
    {
      itemSequence: [1],
      productOrService: {
        coding: [
          {
            system: "http://example.org/fhir/oralservicecodes",
            code: "1101",
          },
        ],
      },
      modifier: [
        {
          coding: [
            {
              system: "http://example.org/fhir/modifiers",
              code: "x",
              display: "None",
            },
          ],
        },
      ],
      net: {
        value: 135.57,
        currency: "USD",
      },
      noteNumber: [101],
      adjudication: [
        {
          category: {
            coding: [
              {
                code: "eligible",
              },
            ],
          },
          amount: {
            value: 100,
            currency: "USD",
          },
        },
        {
          category: {
            coding: [
              {
                code: "copay",
              },
            ],
          },
          amount: {
            value: 10,
            currency: "USD",
          },
        },
        {
          category: {
            coding: [
              {
                code: "eligpercent",
              },
            ],
          },
          value: 80,
        },
        {
          category: {
            coding: [
              {
                code: "benefit",
              },
            ],
          },
          reason: {
            coding: [
              {
                system:
                  "http://terminology.hl7.org/CodeSystem/adjudication-reason",
                code: "ar002",
                display: "Plan Limit Reached",
              },
            ],
          },
          amount: {
            value: 72,
            currency: "USD",
          },
        },
      ],
    },
    {
      itemSequence: [1],
      productOrService: {
        coding: [
          {
            system: "http://example.org/fhir/oralservicecodes",
            code: "2141",
            display: "Radiograph, bytewing",
          },
        ],
      },
      net: {
        value: 35.57,
        currency: "USD",
      },
      adjudication: [
        {
          category: {
            coding: [
              {
                code: "eligible",
              },
            ],
          },
          amount: {
            value: 35.57,
            currency: "USD",
          },
        },
        {
          category: {
            coding: [
              {
                code: "eligpercent",
              },
            ],
          },
          value: 80,
        },
        {
          category: {
            coding: [
              {
                code: "benefit",
              },
            ],
          },
          amount: {
            value: 28.47,
            currency: "USD",
          },
        },
      ],
    },
    {
      itemSequence: [3],
      detailSequence: [2],
      productOrService: {
        coding: [
          {
            system: "http://example.org/fhir/oralservicecodes",
            code: "expense",
          },
        ],
      },
      modifier: [
        {
          coding: [
            {
              system: "http://example.org/fhir/modifiers",
              code: "x",
              display: "None",
            },
          ],
        },
      ],
      net: {
        value: 350,
        currency: "USD",
      },
      noteNumber: [101],
      adjudication: [
        {
          category: {
            coding: [
              {
                code: "eligible",
              },
            ],
          },
          amount: {
            value: 350,
            currency: "USD",
          },
        },
        {
          category: {
            coding: [
              {
                code: "eligpercent",
              },
            ],
          },
          value: 80,
        },
        {
          category: {
            coding: [
              {
                code: "benefit",
              },
            ],
          },
          amount: {
            value: 270,
            currency: "USD",
          },
        },
      ],
    },
  ],
  total: [
    {
      category: {
        coding: [
          {
            code: "submitted",
          },
        ],
      },
      amount: {
        value: 1340.57,
        currency: "USD",
      },
    },
    {
      category: {
        coding: [
          {
            code: "benefit",
          },
        ],
      },
      amount: {
        value: 1054.47,
        currency: "USD",
      },
    },
  ],
  payment: {
    type: {
      coding: [
        {
          system: "http://terminology.hl7.org/CodeSystem/ex-paymenttype",
          code: "complete",
        },
      ],
    },
    date: "2014-08-31",
    amount: {
      value: 100.47,
      currency: "USD",
    },
    identifier: {
      system: "http://www.BenefitsInc.com/fhir/paymentidentifier",
      value: "201408-2-15507",
    },
  },
  processNote: [
    {
      number: 101,
      type: "print",
      text: "Package codes are not permitted. Codes replaced by Insurer.",
      language: {
        coding: [
          {
            system: "urn:ietf:bcp:47",
            code: "en-CA",
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

export const ClaimresponseExampleUnsolicitedPreauth: ClaimResponse = {
  resourceType: "ClaimResponse",
  id: "UR3503",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">A sample unsolicited pre-authorization response which authorizes basic dental services to be performed for a patient.</div>',
  },
  identifier: [
    {
      system: "http://www.SocialBenefitsInc.com/fhir/ClaimResponse",
      value: "UR3503",
    },
  ],
  status: "active",
  type: {
    coding: [
      {
        system: "http://terminology.hl7.org/CodeSystem/claim-type",
        code: "oral",
      },
    ],
  },
  use: "preauthorization",
  patient: {
    reference: "Patient/1",
  },
  created: "2014-08-16",
  insurer: {
    identifier: {
      system: "http://www.jurisdiction.org/insurers",
      value: "444123",
    },
  },
  requestor: {
    reference: "Organization/1",
  },
  outcome: "complete",
  disposition:
    "The enclosed services are authorized for your provision within 30 days of this notice.",
  preAuthRef: "18SS12345",
  payeeType: {
    coding: [
      {
        system: "http://terminology.hl7.org/CodeSystem/payeetype",
        code: "provider",
      },
    ],
  },
  addItem: [
    {
      itemSequence: [1],
      productOrService: {
        coding: [
          {
            system: "http://example.org/fhir/oralservicecodes",
            code: "1101",
          },
        ],
      },
      modifier: [
        {
          coding: [
            {
              system: "http://example.org/fhir/modifiers",
              code: "x",
              display: "None",
            },
          ],
        },
      ],
      net: {
        value: 250,
        currency: "USD",
      },
      noteNumber: [101],
      adjudication: [
        {
          category: {
            coding: [
              {
                code: "eligible",
              },
            ],
          },
          amount: {
            value: 250,
            currency: "USD",
          },
        },
        {
          category: {
            coding: [
              {
                code: "copay",
              },
            ],
          },
          amount: {
            value: 10,
            currency: "USD",
          },
        },
        {
          category: {
            coding: [
              {
                code: "eligpercent",
              },
            ],
          },
          value: 100,
        },
        {
          category: {
            coding: [
              {
                code: "benefit",
              },
            ],
          },
          amount: {
            value: 240,
            currency: "USD",
          },
        },
      ],
    },
    {
      itemSequence: [1],
      productOrService: {
        coding: [
          {
            system: "http://example.org/fhir/oralservicecodes",
            code: "2101",
            display: "Radiograph, series (12)",
          },
        ],
      },
      net: {
        value: 800,
        currency: "USD",
      },
      adjudication: [
        {
          category: {
            coding: [
              {
                code: "eligible",
              },
            ],
          },
          amount: {
            value: 800,
            currency: "USD",
          },
        },
        {
          category: {
            coding: [
              {
                code: "eligpercent",
              },
            ],
          },
          value: 100,
        },
        {
          category: {
            coding: [
              {
                code: "benefit",
              },
            ],
          },
          amount: {
            value: 800,
            currency: "USD",
          },
        },
      ],
    },
  ],
  total: [
    {
      category: {
        coding: [
          {
            code: "submitted",
          },
        ],
      },
      amount: {
        value: 1050,
        currency: "USD",
      },
    },
    {
      category: {
        coding: [
          {
            code: "benefit",
          },
        ],
      },
      amount: {
        value: 1040,
        currency: "USD",
      },
    },
  ],
  processNote: [
    {
      number: 101,
      type: "print",
      text: "Please submit a Pre-Authorization request if a more extensive examination or urgent services are required.",
      language: {
        coding: [
          {
            system: "urn:ietf:bcp:47",
            code: "en-CA",
          },
        ],
      },
    },
  ],
  insurance: [
    {
      sequence: 1,
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

export const ClaimresponseExampleVision3tier: ClaimResponse = {
  resourceType: "ClaimResponse",
  id: "R3502",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">A human-readable rendering of the ClaimResponse</div>',
  },
  identifier: [
    {
      system: "http://thebenefitcompany.com/claimresponse",
      value: "CR6532875367",
    },
  ],
  status: "active",
  type: {
    coding: [
      {
        system: "http://terminology.hl7.org/CodeSystem/claim-type",
        code: "vision",
      },
    ],
  },
  use: "claim",
  patient: {
    reference: "Patient/1",
  },
  created: "2014-08-16",
  insurer: {
    reference: "Organization/2",
  },
  requestor: {
    reference: "Organization/1",
  },
  request: {
    identifier: {
      system: "http://happysight.com/claim",
      value: "6612346",
    },
  },
  outcome: "complete",
  disposition: "Claim settled as per contract.",
  payeeType: {
    coding: [
      {
        system: "http://terminology.hl7.org/CodeSystem/payeetype",
        code: "provider",
      },
    ],
  },
  item: [
    {
      itemSequence: 1,
      adjudication: [
        {
          category: {
            coding: [
              {
                code: "eligible",
              },
            ],
          },
          amount: {
            value: 235.4,
            currency: "USD",
          },
        },
        {
          category: {
            coding: [
              {
                code: "copay",
              },
            ],
          },
          amount: {
            value: 20,
            currency: "USD",
          },
        },
        {
          category: {
            coding: [
              {
                code: "eligpercent",
              },
            ],
          },
          value: 80,
        },
        {
          category: {
            coding: [
              {
                code: "benefit",
              },
            ],
          },
          amount: {
            value: 172.32,
            currency: "USD",
          },
        },
      ],
      detail: [
        {
          detailSequence: 1,
          noteNumber: [1],
          adjudication: [
            {
              category: {
                coding: [
                  {
                    code: "eligible",
                  },
                ],
              },
              amount: {
                value: 100,
                currency: "USD",
              },
            },
            {
              category: {
                coding: [
                  {
                    code: "copay",
                  },
                ],
              },
              amount: {
                value: 20,
                currency: "USD",
              },
            },
            {
              category: {
                coding: [
                  {
                    code: "eligpercent",
                  },
                ],
              },
              value: 80,
            },
            {
              category: {
                coding: [
                  {
                    code: "benefit",
                  },
                ],
              },
              amount: {
                value: 80,
                currency: "USD",
              },
            },
          ],
        },
        {
          detailSequence: 2,
          noteNumber: [1],
          adjudication: [
            {
              category: {
                coding: [
                  {
                    code: "eligible",
                  },
                ],
              },
              amount: {
                value: 110,
                currency: "USD",
              },
            },
            {
              category: {
                coding: [
                  {
                    code: "eligpercent",
                  },
                ],
              },
              value: 80,
            },
            {
              category: {
                coding: [
                  {
                    code: "benefit",
                  },
                ],
              },
              amount: {
                value: 88,
                currency: "USD",
              },
            },
          ],
          subDetail: [
            {
              subDetailSequence: 1,
              noteNumber: [1],
              adjudication: [
                {
                  category: {
                    coding: [
                      {
                        code: "eligible",
                      },
                    ],
                  },
                  amount: {
                    value: 60,
                    currency: "USD",
                  },
                },
                {
                  category: {
                    coding: [
                      {
                        code: "eligpercent",
                      },
                    ],
                  },
                  value: 80,
                },
                {
                  category: {
                    coding: [
                      {
                        code: "benefit",
                      },
                    ],
                  },
                  amount: {
                    value: 48,
                    currency: "USD",
                  },
                },
              ],
            },
            {
              subDetailSequence: 2,
              adjudication: [
                {
                  category: {
                    coding: [
                      {
                        code: "eligible",
                      },
                    ],
                  },
                  amount: {
                    value: 30,
                    currency: "USD",
                  },
                },
                {
                  category: {
                    coding: [
                      {
                        code: "eligpercent",
                      },
                    ],
                  },
                  value: 80,
                },
                {
                  category: {
                    coding: [
                      {
                        code: "benefit",
                      },
                    ],
                  },
                  amount: {
                    value: 24,
                    currency: "USD",
                  },
                },
              ],
            },
            {
              subDetailSequence: 3,
              noteNumber: [1],
              adjudication: [
                {
                  category: {
                    coding: [
                      {
                        code: "eligible",
                      },
                    ],
                  },
                  amount: {
                    value: 10,
                    currency: "USD",
                  },
                },
                {
                  category: {
                    coding: [
                      {
                        code: "eligpercent",
                      },
                    ],
                  },
                  value: 80,
                },
                {
                  category: {
                    coding: [
                      {
                        code: "benefit",
                      },
                    ],
                  },
                  amount: {
                    value: 8,
                    currency: "USD",
                  },
                },
              ],
            },
          ],
        },
        {
          detailSequence: 3,
          noteNumber: [1],
          adjudication: [
            {
              category: {
                coding: [
                  {
                    code: "eligible",
                  },
                ],
              },
              amount: {
                value: 200,
                currency: "USD",
              },
            },
            {
              category: {
                coding: [
                  {
                    code: "eligpercent",
                  },
                ],
              },
              value: 80,
            },
            {
              category: {
                coding: [
                  {
                    code: "benefit",
                  },
                ],
              },
              amount: {
                value: 14,
                currency: "USD",
              },
            },
          ],
        },
      ],
    },
  ],
  total: [
    {
      category: {
        coding: [
          {
            code: "submitted",
          },
        ],
      },
      amount: {
        value: 235.4,
        currency: "USD",
      },
    },
    {
      category: {
        coding: [
          {
            code: "benefit",
          },
        ],
      },
      amount: {
        value: 182,
        currency: "USD",
      },
    },
  ],
  payment: {
    type: {
      coding: [
        {
          system: "http://terminology.hl7.org/CodeSystem/ex-paymenttype",
          code: "complete",
        },
      ],
    },
    adjustment: {
      value: 75,
      currency: "USD",
    },
    adjustmentReason: {
      coding: [
        {
          system:
            "http://terminology.hl7.org/CodeSystem/payment-adjustment-reason",
          code: "a002",
          display: "Prior Overpayment",
        },
      ],
    },
    date: "2014-08-16",
    amount: {
      value: 107,
      currency: "USD",
    },
    identifier: {
      system: "http://thebenefitcompany.com/paymentidentifier",
      value: "201416-123456",
    },
  },
  processNote: [
    {
      number: 1,
      type: "display",
      text: "After hours surcharge declined",
      language: {
        coding: [
          {
            system: "urn:ietf:bcp:47",
            code: "en-CA",
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

export const ClaimresponseExample: ClaimResponse = {
  resourceType: "ClaimResponse",
  id: "R3500",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">A human-readable rendering of the ClaimResponse</div>',
  },
  identifier: [
    {
      system: "http://www.BenefitsInc.com/fhir/remittance",
      value: "R3500",
    },
  ],
  status: "active",
  type: {
    coding: [
      {
        system: "http://terminology.hl7.org/CodeSystem/claim-type",
        code: "oral",
      },
    ],
  },
  subType: {
    coding: [
      {
        system: "http://terminology.hl7.org/CodeSystem/ex-claimsubtype",
        code: "emergency",
      },
    ],
  },
  use: "claim",
  patient: {
    reference: "Patient/1",
  },
  created: "2014-08-16",
  insurer: {
    identifier: {
      system: "http://www.jurisdiction.org/insurers",
      value: "555123",
    },
  },
  requestor: {
    reference: "Organization/1",
  },
  request: {
    reference: "http://www.BenefitsInc.com/fhir/oralhealthclaim/15476332402",
  },
  outcome: "complete",
  disposition: "Claim settled as per contract.",
  payeeType: {
    coding: [
      {
        system: "http://terminology.hl7.org/CodeSystem/payeetype",
        code: "provider",
      },
    ],
  },
  item: [
    {
      itemSequence: 1,
      adjudication: [
        {
          category: {
            coding: [
              {
                code: "eligible",
              },
            ],
          },
          amount: {
            value: 135.57,
            currency: "USD",
          },
        },
        {
          category: {
            coding: [
              {
                code: "copay",
              },
            ],
          },
          amount: {
            value: 10,
            currency: "USD",
          },
        },
        {
          category: {
            coding: [
              {
                code: "eligpercent",
              },
            ],
          },
          value: 80,
        },
        {
          category: {
            coding: [
              {
                code: "benefit",
              },
            ],
          },
          reason: {
            coding: [
              {
                system:
                  "http://terminology.hl7.org/CodeSystem/adjudication-reason",
                code: "ar002",
                display: "Plan Limit Reached",
              },
            ],
          },
          amount: {
            value: 90.47,
            currency: "USD",
          },
        },
      ],
    },
  ],
  total: [
    {
      category: {
        coding: [
          {
            code: "submitted",
          },
        ],
      },
      amount: {
        value: 135.57,
        currency: "USD",
      },
    },
    {
      category: {
        coding: [
          {
            code: "benefit",
          },
        ],
      },
      amount: {
        value: 90.47,
        currency: "USD",
      },
    },
  ],
  payment: {
    type: {
      coding: [
        {
          system: "http://terminology.hl7.org/CodeSystem/ex-paymenttype",
          code: "complete",
        },
      ],
    },
    date: "2014-08-31",
    amount: {
      value: 100.47,
      currency: "USD",
    },
    identifier: {
      system: "http://www.BenefitsInc.com/fhir/paymentidentifier",
      value: "201408-2-1569478",
    },
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
