import type { ExplanationOfBenefit } from "../../src/v4.0.1/explanationofbenefit/types";

export const ExplanationofbenefitExample2: ExplanationOfBenefit = {
  resourceType: "ExplanationOfBenefit",
  id: "EB3501",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">A human-readable rendering of the ExplanationOfBenefit for a claim that had errors, various other attributes (such as accident and hospitalization) are also completed.</div>',
  },
  identifier: [
    {
      system: "http://www.BenefitsInc.com/fhir/explanationofbenefit",
      value: "error-1",
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
    reference: "Patient/pat1",
  },
  billablePeriod: {
    start: "2014-02-01",
    end: "2014-03-01",
  },
  created: "2014-08-16",
  enterer: {
    reference: "Practitioner/1",
  },
  insurer: {
    reference: "Organization/2",
  },
  provider: {
    reference: "Organization/2",
  },
  related: [
    {
      reference: {
        system: "http://www.BenefitsInc.com/case-number",
        value: "23-56Tu-XX-47-20150M14",
      },
    },
  ],
  prescription: {
    reference: "MedicationRequest/medrx002",
  },
  originalPrescription: {
    reference: "MedicationRequest/medrx0301",
  },
  facility: {
    reference: "Location/1",
  },
  claim: {
    reference: "Claim/100150",
  },
  claimResponse: {
    reference: "ClaimResponse/R3500",
  },
  outcome: "error",
  disposition: "Could not process.",
  supportingInfo: [
    {
      sequence: 1,
      category: {
        coding: [
          {
            system:
              "http://terminology.hl7.org/CodeSystem/claiminformationcategory",
            code: "employmentimpacted",
          },
        ],
      },
      timingPeriod: {
        start: "2014-02-14",
        end: "2014-02-28",
      },
    },
    {
      sequence: 2,
      category: {
        coding: [
          {
            system:
              "http://terminology.hl7.org/CodeSystem/claiminformationcategory",
            code: "hospitalized",
          },
        ],
      },
      timingPeriod: {
        start: "2014-02-14",
        end: "2014-02-16",
      },
    },
  ],
  procedure: [
    {
      sequence: 1,
      date: "2014-02-14",
      procedureCodeableConcept: {
        coding: [
          {
            system: "http://hl7.org/fhir/sid/ex-icd-10-procedures",
            code: "123001",
          },
        ],
      },
      udi: [
        {
          reference: "Device/example",
        },
      ],
    },
  ],
  precedence: 2,
  insurance: [
    {
      focal: true,
      coverage: {
        reference: "Coverage/9876B1",
      },
    },
  ],
  accident: {
    date: "2014-02-14",
    type: {
      coding: [
        {
          system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
          code: "SPT",
        },
      ],
    },
    locationReference: {
      reference: "Location/ph",
    },
  },
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
        value: 2478.57,
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

export const ExplanationofbenefitExample: ExplanationOfBenefit = {
  resourceType: "ExplanationOfBenefit",
  id: "EB3500",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">A human-readable rendering of the ExplanationOfBenefit</div>',
  },
  identifier: [
    {
      system: "http://www.BenefitsInc.com/fhir/explanationofbenefit",
      value: "987654321",
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
    reference: "Patient/pat1",
  },
  created: "2014-08-16",
  enterer: {
    reference: "Practitioner/1",
  },
  insurer: {
    reference: "Organization/3",
  },
  provider: {
    reference: "Practitioner/1",
  },
  payee: {
    type: {
      coding: [
        {
          system: "http://terminology.hl7.org/CodeSystem/payeetype",
          code: "provider",
        },
      ],
    },
    party: {
      reference: "Organization/2",
    },
  },
  facility: {
    reference: "Location/1",
  },
  claim: {
    reference: "Claim/100150",
  },
  claimResponse: {
    reference: "ClaimResponse/R3500",
  },
  outcome: "complete",
  disposition: "Claim settled as per contract.",
  careTeam: [
    {
      sequence: 1,
      provider: {
        reference: "Practitioner/example",
      },
    },
  ],
  insurance: [
    {
      focal: true,
      coverage: {
        reference: "Coverage/9876B1",
      },
    },
  ],
  item: [
    {
      sequence: 1,
      careTeamSequence: [1],
      productOrService: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/ex-USCLS",
            code: "1205",
          },
        ],
      },
      servicedDate: "2014-08-16",
      unitPrice: {
        value: 135.57,
        currency: "USD",
      },
      net: {
        value: 135.57,
        currency: "USD",
      },
      udi: [
        {
          reference: "Device/example",
        },
      ],
      encounter: [
        {
          reference: "Encounter/example",
        },
      ],
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
            value: 120,
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
          value: 0.8,
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
            value: 96,
            currency: "USD",
          },
        },
      ],
    },
    {
      sequence: 2,
      careTeamSequence: [1],
      productOrService: {
        coding: [
          {
            code: "group",
          },
        ],
      },
      servicedDate: "2014-08-16",
      net: {
        value: 200,
        currency: "USD",
      },
      adjudication: [
        {
          category: {
            coding: [
              {
                code: "benefit",
              },
            ],
          },
          amount: {
            value: 180,
            currency: "USD",
          },
        },
      ],
      detail: [
        {
          sequence: 1,
          productOrService: {
            coding: [
              {
                code: "group",
              },
            ],
          },
          net: {
            value: 200,
            currency: "USD",
          },
          udi: [
            {
              reference: "Device/example",
            },
          ],
          adjudication: [
            {
              category: {
                coding: [
                  {
                    code: "benefit",
                  },
                ],
              },
              amount: {
                value: 180,
                currency: "USD",
              },
            },
          ],
          subDetail: [
            {
              sequence: 1,
              productOrService: {
                coding: [
                  {
                    system: "http://terminology.hl7.org/CodeSystem/ex-USCLS",
                    code: "1205",
                  },
                ],
              },
              unitPrice: {
                value: 200,
                currency: "USD",
              },
              net: {
                value: 200,
                currency: "USD",
              },
              udi: [
                {
                  reference: "Device/example",
                },
              ],
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
                  value: 0.9,
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
                    value: 180,
                    currency: "USD",
                  },
                },
              ],
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
        value: 96,
        currency: "USD",
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
