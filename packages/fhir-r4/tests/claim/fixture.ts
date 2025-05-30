import type { Claim } from "../../src/v4.0.1/claim/types";

export const ClaimExampleCms1500Medical: Claim = {
  resourceType: "Claim",
  id: "MED-00050",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">A human-readable rendering of a CMS 1500 Claim</div>',
  },
  contained: [
    {
      resourceType: "Patient",
      id: "patient-1",
      name: [
        {
          use: "official",
          family: "Ashcraft",
          given: ["Alvina"],
        },
      ],
      gender: "female",
      birthDate: "1954-06-11",
      address: [
        {
          use: "home",
          line: ["123 Main Street"],
          city: "Portland",
          state: "OR",
          postalCode: "97125",
          country: "USA",
        },
      ],
    },
    {
      resourceType: "Coverage",
      id: "coverage-1",
      identifier: [
        {
          system: "http://benefitsinc.com/certificate",
          value: "10138556",
        },
      ],
      status: "active",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
            code: "HIP",
            display: "health insurance plan policy",
          },
        ],
      },
      subscriber: {
        reference: "#patient-1",
      },
      beneficiary: {
        reference: "#patient-1",
      },
      relationship: {
        coding: [
          {
            code: "self",
          },
        ],
      },
      period: {
        start: "2015-01-01T00:00:00-07:00",
        end: "2016-01-01T00:00:00-07:00",
      },
      payor: [
        {
          identifier: {
            system: "http://www.bindb.com/bin",
            value: "123456",
          },
          display: "Humana Inc.",
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
          value: "80902206",
        },
      ],
    },
  ],
  identifier: [
    {
      system: "http://CedarArmsMedicalCenter.com/claim",
      value: "MED-00050",
    },
  ],
  status: "active",
  type: {
    coding: [
      {
        system: "http://terminology.hl7.org/CodeSystem/claim-type",
        code: "institutional",
      },
    ],
  },
  subType: {
    coding: [
      {
        system: "https://www.cms.gov/codes/billtype",
        code: "831",
        display:
          "Hospital Outpatient Surgery performed in an Ambulatory ​Surgical Center",
      },
    ],
  },
  use: "claim",
  patient: {
    reference: "#patient-1",
  },
  created: "2015-10-16T00:00:00-07:00",
  insurer: {
    identifier: {
      system: "http://www.bindb.com/bin",
      value: "123456",
    },
    display: "Humana Inc.",
  },
  provider: {
    reference: "Organization/1",
  },
  priority: {
    coding: [
      {
        code: "normal",
      },
    ],
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
      reference: "Organization/1",
    },
  },
  careTeam: [
    {
      sequence: 1,
      provider: {
        reference: "Practitioner/example",
      },
    },
  ],
  supportingInfo: [
    {
      sequence: 1,
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
        start: "2015-10-01T00:00:00-07:00",
        end: "2015-10-05T00:00:00-07:00",
      },
    },
    {
      sequence: 2,
      category: {
        coding: [
          {
            system:
              "http://terminology.hl7.org/CodeSystem/claiminformationcategory",
            code: "discharge",
          },
        ],
      },
      code: {
        coding: [
          {
            system:
              "https://www.cms.gov/Outreach-and-Education/Medicare-Learning-Network-MLN/MLNMattersArticles/downloads/SE0801.pdf",
            code: "01",
            display: "Discharge to Home or Self Care",
          },
        ],
      },
    },
  ],
  diagnosis: [
    {
      sequence: 1,
      diagnosisCodeableConcept: {
        coding: [
          {
            system: "http://hl7.org/fhir/sid/icd-10",
            code: "M96.1",
            display: "Postlaminectomy syndrome",
          },
        ],
      },
    },
    {
      sequence: 2,
      diagnosisCodeableConcept: {
        coding: [
          {
            system: "http://hl7.org/fhir/sid/icd-10",
            code: "G89.4",
            display: "Chronic pain syndrome",
          },
        ],
      },
    },
    {
      sequence: 3,
      diagnosisCodeableConcept: {
        coding: [
          {
            system: "http://hl7.org/fhir/sid/icd-10",
            code: "M53.88",
            display:
              "Other specified dorsopathies, sacral and sacrococcygeal region",
          },
        ],
      },
    },
    {
      sequence: 4,
      diagnosisCodeableConcept: {
        coding: [
          {
            system: "http://hl7.org/fhir/sid/icd-10",
            code: "M47.816",
            display:
              "Spondylosis without myelopathy or radiculopathy, lumbar region",
          },
        ],
      },
    },
  ],
  insurance: [
    {
      sequence: 1,
      focal: true,
      identifier: {
        system: "http://CedarArmsMedicalCenter.com/claim",
        value: "MED-00050",
      },
      coverage: {
        reference: "#coverage-1",
      },
    },
  ],
  item: [
    {
      sequence: 1,
      careTeamSequence: [1],
      diagnosisSequence: [2, 4],
      informationSequence: [1],
      productOrService: {
        coding: [
          {
            system: "http://www.ama-assn.org/go/cpt",
            code: "62264",
            display: "Surgical Procedures on the Spine and Spinal Cord",
          },
        ],
      },
      servicedDate: "2015-10-13",
      locationCodeableConcept: {
        coding: [
          {
            system:
              "https://www.cms.gov/medicare/coding/place-of-service-codes/place_of_service_code_set.html",
            code: "24",
            display: "Ambulatory Surgical Center",
          },
        ],
      },
      unitPrice: {
        value: 12500,
        currency: "USD",
      },
      net: {
        value: 12500,
        currency: "USD",
      },
    },
  ],
  total: {
    value: 12500,
    currency: "USD",
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

export const ClaimExampleInstitutionalRich: Claim = {
  resourceType: "Claim",
  id: "960151",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">A human-readable rendering of the Claim</div>',
  },
  identifier: [
    {
      system: "http://happyhospital.com/claim",
      value: "96123451",
    },
  ],
  status: "active",
  type: {
    coding: [
      {
        system: "http://terminology.hl7.org/CodeSystem/claim-type",
        code: "institutional",
      },
    ],
  },
  use: "claim",
  patient: {
    reference: "Patient/1",
  },
  billablePeriod: {
    start: "2014-08-15",
    end: "2014-08-16",
  },
  created: "2014-08-16",
  enterer: {
    identifier: {
      system: "http://jurisdiction.org/facilities/HOSP1234/users",
      value: "UC1234",
    },
  },
  insurer: {
    reference: "Organization/2",
  },
  provider: {
    identifier: {
      system: "http://npid.org/providerid",
      value: "NJ12345",
    },
  },
  priority: {
    coding: [
      {
        code: "normal",
      },
    ],
  },
  payee: {
    type: {
      coding: [
        {
          code: "provider",
        },
      ],
    },
  },
  facility: {
    identifier: {
      system: "http://jurisdiction.org/facilities",
      value: "HOSP1234",
    },
  },
  careTeam: [
    {
      sequence: 1,
      provider: {
        reference: "Practitioner/example",
      },
      responsible: true,
      role: {
        coding: [
          {
            system: "http://example.org/fhir/CodeSystem/claim-careteamrole",
            code: "primary",
          },
        ],
      },
      qualification: {
        coding: [
          {
            system: "http://example.org/fhir/CodeSystem/provider-qualification",
            code: "physician",
          },
        ],
      },
    },
  ],
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
        start: "2014-08-16",
        end: "2014-08-16",
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
        start: "2014-08-15",
        end: "2014-08-16",
      },
    },
  ],
  diagnosis: [
    {
      sequence: 1,
      diagnosisCodeableConcept: {
        coding: [
          {
            code: "654456",
          },
        ],
      },
      type: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/ex-diagnosistype",
              code: "admitting",
            },
          ],
        },
      ],
      packageCode: {
        coding: [
          {
            system:
              "http://terminology.hl7.org/CodeSystem/ex-diagnosisrelatedgroup",
            code: "400",
            display: "Head trauma - concussion",
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
      businessArrangement: "BA987123",
      preAuthRef: ["PA2014G56473"],
    },
  ],
  accident: {
    date: "2014-07-09",
    type: {
      coding: [
        {
          system: "http://terminology.hl7.org/CodeSystem/v3-ActIncidentCode",
          code: "SPT",
          display: "Sporting Accident",
        },
      ],
    },
    locationAddress: {
      text: "Grouse Mountain Ski Hill",
    },
  },
  item: [
    {
      sequence: 1,
      careTeamSequence: [1],
      productOrService: {
        coding: [
          {
            system: "http://hl7.org/fhir/ex-serviceproduct",
            code: "exam",
          },
        ],
      },
      servicedDate: "2014-08-16",
      unitPrice: {
        value: 125,
        currency: "USD",
      },
      net: {
        value: 125,
        currency: "USD",
      },
    },
  ],
  total: {
    value: 125,
    currency: "USD",
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

export const ClaimExampleInstitutional: Claim = {
  resourceType: "Claim",
  id: "960150",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">A human-readable rendering of the Claim</div>',
  },
  identifier: [
    {
      system: "http://happyhospital.com/claim",
      value: "9612345",
    },
  ],
  status: "active",
  type: {
    coding: [
      {
        system: "http://terminology.hl7.org/CodeSystem/claim-type",
        code: "institutional",
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
  enterer: {
    identifier: {
      system: "http://jurisdiction.org/facilities/HOSP1234/users",
      value: "UC1234",
    },
  },
  insurer: {
    reference: "Organization/2",
  },
  provider: {
    reference: "Organization/1",
  },
  priority: {
    coding: [
      {
        code: "normal",
      },
    ],
  },
  payee: {
    type: {
      coding: [
        {
          code: "provider",
        },
      ],
    },
  },
  facility: {
    identifier: {
      system: "http://jurisdiction.org/facilities",
      value: "HOSP1234",
    },
  },
  careTeam: [
    {
      sequence: 1,
      provider: {
        reference: "Practitioner/example",
      },
    },
  ],
  diagnosis: [
    {
      sequence: 1,
      diagnosisCodeableConcept: {
        coding: [
          {
            code: "654456",
          },
        ],
      },
    },
  ],
  procedure: [
    {
      sequence: 1,
      type: [
        {
          coding: [
            {
              code: "primary",
            },
          ],
        },
      ],
      date: "2014-08-16",
      procedureCodeableConcept: {
        coding: [
          {
            code: "SDI9901",
          },
        ],
        text: "Subcutaneous diagnostic implant",
      },
      udi: [
        {
          reference: "Device/example",
        },
      ],
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
  item: [
    {
      sequence: 1,
      careTeamSequence: [1],
      productOrService: {
        coding: [
          {
            system: "http://hl7.org/fhir/ex-serviceproduct",
            code: "exam",
          },
        ],
      },
      servicedDate: "2014-08-16",
      unitPrice: {
        value: 125,
        currency: "USD",
      },
      net: {
        value: 125,
        currency: "USD",
      },
      encounter: [
        {
          reference: "Encounter/example",
        },
      ],
    },
  ],
  total: {
    value: 125,
    currency: "USD",
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

export const ClaimExampleOralAverage: Claim = {
  resourceType: "Claim",
  id: "100151",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">A human-readable rendering of the Oral Health Claim</div>',
  },
  identifier: [
    {
      system: "http://happyvalley.com/claim",
      value: "12346",
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
    reference: "Organization/2",
  },
  provider: {
    reference: "Organization/1",
  },
  priority: {
    coding: [
      {
        code: "normal",
      },
    ],
  },
  payee: {
    type: {
      coding: [
        {
          code: "provider",
        },
      ],
    },
  },
  careTeam: [
    {
      sequence: 1,
      provider: {
        reference: "Practitioner/example",
      },
    },
  ],
  supportingInfo: [
    {
      sequence: 1,
      category: {
        coding: [
          {
            system:
              "http://terminology.hl7.org/CodeSystem/claiminformationcategory",
            code: "missingtooth",
          },
        ],
      },
      code: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/ex-tooth",
            code: "15",
          },
        ],
      },
      timingDate: "2012-04-07",
      reason: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/missingtoothreason",
            code: "e",
          },
        ],
      },
    },
    {
      sequence: 2,
      category: {
        coding: [
          {
            system:
              "http://terminology.hl7.org/CodeSystem/claiminformationcategory",
            code: "exception",
          },
        ],
      },
      code: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/claim-exception",
            code: "student",
          },
        ],
      },
      valueString: "Happy Valley Community College",
    },
  ],
  diagnosis: [
    {
      sequence: 1,
      diagnosisCodeableConcept: {
        coding: [
          {
            code: "123456",
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
  item: [
    {
      sequence: 1,
      careTeamSequence: [1],
      productOrService: {
        coding: [
          {
            system: "http://example.org/fhir/oralservicecodes",
            code: "1200",
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
    },
    {
      sequence: 2,
      careTeamSequence: [1],
      productOrService: {
        coding: [
          {
            system: "http://example.org/fhir/oralservicecodes",
            code: "21211",
          },
        ],
      },
      servicedDate: "2014-08-16",
      unitPrice: {
        value: 105,
        currency: "USD",
      },
      net: {
        value: 105,
        currency: "USD",
      },
      bodySite: {
        coding: [
          {
            system: "http://fdi.org/fhir/oraltoothcodes",
            code: "21",
          },
        ],
      },
      subSite: [
        {
          coding: [
            {
              system: "http://fdi.org/fhir/oralsurfacecodes",
              code: "L",
            },
          ],
        },
      ],
    },
    {
      sequence: 3,
      careTeamSequence: [1],
      productOrService: {
        coding: [
          {
            system: "http://example.org/fhir/oralservicecodes",
            code: "27211",
          },
        ],
      },
      servicedDate: "2014-08-16",
      unitPrice: {
        value: 1100,
        currency: "USD",
      },
      net: {
        value: 1100,
        currency: "USD",
      },
      bodySite: {
        coding: [
          {
            system: "http://fdi.org/fhir/oraltoothcodes",
            code: "36",
          },
        ],
      },
      detail: [
        {
          sequence: 1,
          productOrService: {
            coding: [
              {
                system: "http://example.org/fhir/oralservicecodes",
                code: "27211",
              },
            ],
          },
          unitPrice: {
            value: 1000,
            currency: "USD",
          },
          factor: 0.75,
          net: {
            value: 750,
            currency: "USD",
          },
        },
        {
          sequence: 2,
          productOrService: {
            coding: [
              {
                system: "http://example.org/fhir/oralservicecodes",
                code: "lab",
              },
            ],
          },
          unitPrice: {
            value: 350,
            currency: "USD",
          },
          net: {
            value: 350,
            currency: "USD",
          },
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

export const ClaimExampleOralBridge: Claim = {
  resourceType: "Claim",
  id: "100156",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">A human-readable rendering of the Oral Health Claim</div>',
  },
  contained: [
    {
      resourceType: "Device",
      id: "device-bridge",
    },
    {
      resourceType: "ServiceRequest",
      id: "referral",
      status: "active",
      intent: "order",
      subject: {
        reference: "Patient/1",
      },
    },
  ],
  identifier: [
    {
      system: "http://happyvalley.com/claim",
      value: "123466",
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
    reference: "Organization/2",
  },
  provider: {
    reference: "Organization/1",
  },
  priority: {
    coding: [
      {
        code: "normal",
      },
    ],
  },
  related: [
    {
      claim: {
        reference: "Claim/100151",
      },
      relationship: {
        coding: [
          {
            system:
              "http://terminology.hl7.org/CodeSystem/ex-relatedclaimrelationship",
            code: "associated",
          },
        ],
      },
      reference: {
        value: "CASE156746B",
      },
    },
  ],
  payee: {
    type: {
      coding: [
        {
          system: "http://terminology.hl7.org/CodeSystem/payeetype",
          code: "other",
        },
      ],
    },
    party: {
      reference: "RelatedPerson/peter",
    },
  },
  referral: {
    reference: "#referral",
  },
  careTeam: [
    {
      sequence: 1,
      provider: {
        reference: "Practitioner/example",
      },
    },
  ],
  supportingInfo: [
    {
      sequence: 1,
      category: {
        coding: [
          {
            system:
              "http://terminology.hl7.org/CodeSystem/claiminformationcategory",
            code: "prosthesis",
          },
        ],
      },
      code: {
        coding: [
          {
            system: "http://hl7.org/fhir/ex-oralprostho",
            code: "2",
            display: "Maryland Bridge",
          },
        ],
      },
      timingDate: "2001-04-07",
    },
  ],
  procedure: [
    {
      sequence: 1,
      date: "2014-07-04",
      procedureCodeableConcept: {
        text: "Resection of gum to increase exposed tooth.",
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
  item: [
    {
      sequence: 1,
      careTeamSequence: [1],
      informationSequence: [1],
      productOrService: {
        coding: [
          {
            system: "http://example.org/fhir/oralservicecodes",
            code: "67221",
            display: "Maryland Bridge",
          },
        ],
      },
      servicedDate: "2014-08-16",
      locationCodeableConcept: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
            code: "11",
          },
        ],
      },
      unitPrice: {
        value: 1400,
        currency: "USD",
      },
      factor: 0.75,
      net: {
        value: 1050,
        currency: "USD",
      },
      udi: [
        {
          reference: "#device-bridge",
        },
      ],
      bodySite: {
        coding: [
          {
            system: "http://fdi.org/fhir/oraltoothcodes",
            code: "01",
          },
        ],
      },
    },
    {
      sequence: 2,
      careTeamSequence: [1],
      productOrService: {
        coding: [
          {
            system: "http://example.org/fhir/oralservicecodes",
            code: "21211",
          },
        ],
      },
      servicedDate: "2014-08-16",
      locationCodeableConcept: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
            code: "11",
          },
        ],
      },
      unitPrice: {
        value: 105,
        currency: "USD",
      },
      net: {
        value: 105,
        currency: "USD",
      },
      bodySite: {
        coding: [
          {
            system: "http://fdi.org/fhir/oraltoothcodes",
            code: "21",
          },
        ],
      },
      subSite: [
        {
          coding: [
            {
              system: "http://fdi.org/fhir/oralsurfacecodes",
              code: "L",
            },
          ],
        },
      ],
    },
    {
      sequence: 3,
      careTeamSequence: [1],
      procedureSequence: [1],
      productOrService: {
        coding: [
          {
            system: "http://example.org/fhir/oralservicecodes",
            code: "27211",
          },
        ],
      },
      servicedDate: "2014-08-16",
      locationCodeableConcept: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
            code: "11",
          },
        ],
      },
      unitPrice: {
        value: 1100,
        currency: "USD",
      },
      net: {
        value: 1100,
        currency: "USD",
      },
      bodySite: {
        coding: [
          {
            system: "http://fdi.org/fhir/oraltoothcodes",
            code: "24",
          },
        ],
      },
      detail: [
        {
          sequence: 1,
          productOrService: {
            coding: [
              {
                system: "http://example.org/fhir/oralservicecodes",
                code: "27211",
              },
            ],
          },
          unitPrice: {
            value: 1000,
            currency: "USD",
          },
          factor: 0.75,
          net: {
            value: 750,
            currency: "USD",
          },
        },
        {
          sequence: 2,
          productOrService: {
            coding: [
              {
                system: "http://example.org/fhir/oralservicecodes",
                code: "lab",
              },
            ],
          },
          unitPrice: {
            value: 350,
            currency: "USD",
          },
          net: {
            value: 350,
            currency: "USD",
          },
        },
      ],
    },
  ],
  total: {
    value: 2255,
    currency: "USD",
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

export const ClaimExampleOralContainedIdentifier: Claim = {
  resourceType: "Claim",
  id: "100155",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">This example assumes a national health care scheme where patients, providers and organizations have known business identifiers.</div>',
  },
  contained: [
    {
      resourceType: "Patient",
      id: "patient-1",
      name: [
        {
          use: "official",
          family: "Donald",
          given: ["Duck"],
        },
      ],
      gender: "male",
      birthDate: "1986-05-17",
      address: [
        {
          use: "home",
          line: ["1234 Main Street"],
          city: "Vancouver",
          postalCode: "V2H1Y3",
          country: "CAD",
        },
      ],
    },
  ],
  identifier: [
    {
      system: "http://happyvalley.com/claim",
      value: "12347",
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
    reference: "#patient-1",
  },
  created: "2014-08-16",
  insurer: {
    identifier: {
      system: "http://www.jurisdiction.com/insurers",
      value: "123456",
    },
  },
  provider: {
    identifier: {
      system: "http://www.jurisdiction.com/careorganizations",
      value: "HOSP12345",
    },
  },
  priority: {
    coding: [
      {
        code: "normal",
      },
    ],
  },
  payee: {
    type: {
      coding: [
        {
          code: "provider",
        },
      ],
    },
  },
  careTeam: [
    {
      sequence: 1,
      provider: {
        identifier: {
          system: "http://www.jurisdiction.com/providerId",
          value: "MD98765",
        },
      },
    },
  ],
  diagnosis: [
    {
      sequence: 1,
      diagnosisCodeableConcept: {
        coding: [
          {
            code: "123456",
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
        reference: "http://www.jurisdiction.com/nationalplan/123AB345",
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
            code: "1200",
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

export const ClaimExampleOralContained: Claim = {
  resourceType: "Claim",
  id: "100152",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">A human-readable rendering of the Oral Health Claim</div>',
  },
  contained: [
    {
      resourceType: "Organization",
      id: "org-insurer",
      identifier: [
        {
          system: "http://www.bindb.com/bin",
          value: "123456",
        },
      ],
    },
    {
      resourceType: "Organization",
      id: "org-org",
      identifier: [
        {
          system: "http://www.jurisdiction.com/oralhealthoffices",
          value: "3456",
        },
      ],
    },
    {
      resourceType: "Practitioner",
      id: "provider-1",
      identifier: [
        {
          system: "http://www.jurisdiction.com/oralhealthproviders",
          value: "123456789",
        },
      ],
    },
    {
      resourceType: "Patient",
      id: "patient-1",
      name: [
        {
          use: "official",
          family: "Donald",
          given: ["Duck"],
        },
      ],
      gender: "male",
      birthDate: "1986-05-17",
      address: [
        {
          use: "home",
          line: ["1234 Main Street"],
          city: "Vancouver",
          postalCode: "V2H1Y3",
          country: "CAD",
        },
      ],
    },
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
        reference: "#patient-1",
      },
      beneficiary: {
        reference: "#patient-1",
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
                system: "http://terminology.hl7.org/CodeSystem/coverage-class",
                code: "plan",
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
                system: "http://terminology.hl7.org/CodeSystem/coverage-class",
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
                system: "http://terminology.hl7.org/CodeSystem/coverage-class",
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
      system: "http://happyvalley.com/claim",
      value: "12347",
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
    reference: "#patient-1",
  },
  created: "2014-08-16",
  insurer: {
    reference: "#org-insurer",
  },
  provider: {
    reference: "#org-org",
  },
  priority: {
    coding: [
      {
        code: "normal",
      },
    ],
  },
  payee: {
    type: {
      coding: [
        {
          code: "provider",
        },
      ],
    },
  },
  careTeam: [
    {
      sequence: 1,
      provider: {
        reference: "#provider-1",
      },
    },
  ],
  diagnosis: [
    {
      sequence: 1,
      diagnosisCodeableConcept: {
        coding: [
          {
            code: "123456",
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
        reference: "#coverage-1",
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
            code: "1200",
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

export const ClaimExampleOralIdentifier: Claim = {
  resourceType: "Claim",
  id: "100154",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">This example assumes a national health care scheme where patients, providers and organizations have known business identifiers.</div>',
  },
  identifier: [
    {
      system: "http://happyvalley.com/claim",
      value: "12347",
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
    identifier: {
      system: "http://www.jurisdiction.com/nationalId",
      value: "123AB345",
    },
  },
  created: "2014-08-16",
  insurer: {
    identifier: {
      system: "http://www.jurisdiction.com/insurers",
      value: "123456",
    },
  },
  provider: {
    identifier: {
      system: "http://www.jurisdiction.com/careorganizations",
      value: "HOSP12345",
    },
  },
  priority: {
    coding: [
      {
        code: "normal",
      },
    ],
  },
  payee: {
    type: {
      coding: [
        {
          code: "provider",
        },
      ],
    },
  },
  careTeam: [
    {
      sequence: 1,
      provider: {
        identifier: {
          system: "http://www.jurisdiction.com/providerId",
          value: "MD98765",
        },
      },
    },
  ],
  diagnosis: [
    {
      sequence: 1,
      diagnosisCodeableConcept: {
        coding: [
          {
            code: "123456",
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
        identifier: {
          system: "http://www.jurisdiction.com/nationalplan",
          value: "123AB345",
        },
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
            code: "1200",
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

export const ClaimExampleOralOrthoplan: Claim = {
  resourceType: "Claim",
  id: "100153",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">A human-readable rendering of the Oral Health Claim</div>',
  },
  identifier: [
    {
      system: "http://happyvalley.com/claim",
      value: "12355",
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
  created: "2015-03-16",
  insurer: {
    reference: "Organization/2",
  },
  provider: {
    reference: "Organization/1",
  },
  priority: {
    coding: [
      {
        code: "normal",
      },
    ],
  },
  fundsReserve: {
    coding: [
      {
        code: "provider",
      },
    ],
  },
  payee: {
    type: {
      coding: [
        {
          code: "provider",
        },
      ],
    },
  },
  careTeam: [
    {
      sequence: 1,
      provider: {
        reference: "Practitioner/example",
      },
    },
  ],
  diagnosis: [
    {
      sequence: 1,
      diagnosisCodeableConcept: {
        coding: [
          {
            system: "http://hl7.org/fhir/sid/icd-10",
            code: "123457",
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
  item: [
    {
      sequence: 1,
      careTeamSequence: [1],
      diagnosisSequence: [1],
      productOrService: {
        coding: [
          {
            system: "http://example.org/fhir/oralservicecodes",
            code: "ORTHPLAN",
          },
        ],
      },
      servicedDate: "2015-05-16",
      unitPrice: {
        value: 9000,
        currency: "USD",
      },
      net: {
        value: 9000,
        currency: "USD",
      },
      detail: [
        {
          sequence: 1,
          productOrService: {
            coding: [
              {
                system: "http://example.org/fhir/oralservicecodes",
                code: "ORTHOEXAM",
              },
            ],
          },
          unitPrice: {
            value: 1000,
            currency: "USD",
          },
          net: {
            value: 1000,
            currency: "USD",
          },
        },
        {
          sequence: 2,
          productOrService: {
            coding: [
              {
                system: "http://example.org/fhir/oralservicecodes",
                code: "ORTHODIAG",
              },
            ],
          },
          unitPrice: {
            value: 1500,
            currency: "USD",
          },
          net: {
            value: 1500,
            currency: "USD",
          },
        },
        {
          sequence: 3,
          productOrService: {
            coding: [
              {
                system: "http://example.org/fhir/oralservicecodes",
                code: "ORTHOINITIAL",
              },
            ],
          },
          unitPrice: {
            value: 500,
            currency: "USD",
          },
          net: {
            value: 500,
            currency: "USD",
          },
        },
        {
          sequence: 4,
          productOrService: {
            coding: [
              {
                system: "http://example.org/fhir/oralservicecodes",
                code: "ORTHOMONTHS",
              },
            ],
          },
          quantity: {
            value: 24,
          },
        },
        {
          sequence: 5,
          productOrService: {
            coding: [
              {
                system: "http://example.org/fhir/oralservicecodes",
                code: "ORTHOPERIODIC",
              },
            ],
          },
          quantity: {
            value: 24,
          },
          unitPrice: {
            value: 250,
            currency: "USD",
          },
          net: {
            value: 250,
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
            system: "http://example.org/fhir/oralservicecodes",
            code: "21211",
          },
        ],
      },
      servicedDate: "2014-08-16",
      unitPrice: {
        value: 105,
        currency: "USD",
      },
      net: {
        value: 105,
        currency: "USD",
      },
      bodySite: {
        coding: [
          {
            system: "http://fdi.org/fhir/oraltoothcodes",
            code: "21",
          },
        ],
      },
      subSite: [
        {
          coding: [
            {
              system: "http://fdi.org/fhir/oralsurfacecodes",
              code: "L",
            },
          ],
        },
      ],
    },
    {
      sequence: 3,
      careTeamSequence: [1],
      productOrService: {
        coding: [
          {
            system: "http://example.org/fhir/oralservicecodes",
            code: "27211",
          },
        ],
      },
      servicedDate: "2014-08-16",
      unitPrice: {
        value: 1100,
        currency: "USD",
      },
      net: {
        value: 1100,
        currency: "USD",
      },
      bodySite: {
        coding: [
          {
            system: "http://fdi.org/fhir/oraltoothcodes",
            code: "36",
          },
        ],
      },
      detail: [
        {
          sequence: 1,
          productOrService: {
            coding: [
              {
                system: "http://example.org/fhir/oralservicecodes",
                code: "27211",
              },
            ],
          },
          unitPrice: {
            value: 750,
            currency: "USD",
          },
          net: {
            value: 750,
            currency: "USD",
          },
        },
        {
          sequence: 2,
          productOrService: {
            coding: [
              {
                system: "http://example.org/fhir/oralservicecodes",
                code: "lab",
              },
            ],
          },
          unitPrice: {
            value: 350,
            currency: "USD",
          },
          net: {
            value: 350,
            currency: "USD",
          },
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

export const ClaimExamplePharmacyCompound: Claim = {
  resourceType: "Claim",
  id: "760152",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">A human-readable rendering of the Pharmacy Claim</div>',
  },
  identifier: [
    {
      system: "http://happypharma.com/claim",
      value: "7612345",
    },
  ],
  status: "active",
  type: {
    coding: [
      {
        system: "http://terminology.hl7.org/CodeSystem/claim-type",
        code: "pharmacy",
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
  provider: {
    reference: "Organization/1",
  },
  priority: {
    coding: [
      {
        code: "stat",
      },
    ],
  },
  payee: {
    type: {
      coding: [
        {
          code: "provider",
        },
      ],
    },
  },
  careTeam: [
    {
      sequence: 1,
      provider: {
        reference: "Practitioner/example",
      },
    },
  ],
  supportingInfo: [
    {
      sequence: 1,
      category: {
        coding: [
          {
            code: "pharmacyrefill",
          },
        ],
      },
      code: {
        coding: [
          {
            system: "http://example.org/fhir/CodeSystem/pharmacy-refill",
            code: "new",
          },
        ],
      },
    },
    {
      sequence: 2,
      category: {
        coding: [
          {
            code: "pharmacyinformation",
          },
        ],
      },
      code: {
        coding: [
          {
            system: "http://example.org/fhir/CodeSystem/pharmacy-information",
            code: "refillsremaining",
          },
        ],
      },
      valueQuantity: {
        value: 0,
      },
    },
    {
      sequence: 3,
      category: {
        coding: [
          {
            code: "pharmacyinformation",
          },
        ],
      },
      code: {
        coding: [
          {
            system: "http://example.org/fhir/CodeSystem/pharmacy-information",
            code: "dayssupply",
          },
        ],
      },
      valueQuantity: {
        value: 10,
      },
    },
    {
      sequence: 4,
      category: {
        coding: [
          {
            code: "pharmacy",
          },
        ],
      },
      code: {
        coding: [
          {
            system: "http://example.org/fhir/CodeSystem/pharmacy-form",
            code: "capsule",
          },
        ],
      },
    },
  ],
  diagnosis: [
    {
      sequence: 1,
      diagnosisCodeableConcept: {
        coding: [
          {
            code: "654456",
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
  item: [
    {
      sequence: 1,
      careTeamSequence: [1],
      informationSequence: [1, 2, 3, 4],
      productOrService: {
        coding: [
          {
            system: "http://localdruglist.org",
            code: "compound",
            display: "Custom compound",
          },
        ],
      },
      servicedDate: "2014-08-16",
      quantity: {
        value: 30,
        unit: "TAB",
        system: "http://unitsofmeasure.org",
        code: "TAB",
      },
      net: {
        value: 155,
        currency: "USD",
      },
      detail: [
        {
          sequence: 1,
          productOrService: {
            coding: [
              {
                system: "http://localdruglist.org",
                code: "44001",
                display: "Acetaminophen 250mg",
              },
            ],
          },
          quantity: {
            value: 250,
            unit: "mg",
          },
          net: {
            value: 20,
            currency: "USD",
          },
          subDetail: [
            {
              sequence: 1,
              productOrService: {
                coding: [
                  {
                    system: "http://hl7.org/fhir/ex-pharmaservice",
                    code: "drugcost",
                  },
                ],
              },
              net: {
                value: 20,
                currency: "USD",
              },
            },
          ],
        },
        {
          sequence: 2,
          productOrService: {
            coding: [
              {
                system: "http://localdruglist.org",
                code: "44035",
                display: "Phenacetin 50mg",
              },
            ],
          },
          quantity: {
            value: 50,
            unit: "mg",
          },
          net: {
            value: 25,
            currency: "USD",
          },
          subDetail: [
            {
              sequence: 1,
              productOrService: {
                coding: [
                  {
                    system: "http://hl7.org/fhir/ex-pharmaservice",
                    code: "drugcost",
                  },
                ],
              },
              net: {
                value: 25,
                currency: "USD",
              },
            },
          ],
        },
        {
          sequence: 3,
          productOrService: {
            coding: [
              {
                system: "http://localdruglist.org",
                code: "44057",
                display: "Codeine 25mg",
              },
            ],
          },
          quantity: {
            value: 25,
            unit: "mg",
          },
          net: {
            value: 28,
            currency: "USD",
          },
          subDetail: [
            {
              sequence: 1,
              productOrService: {
                coding: [
                  {
                    system: "http://hl7.org/fhir/ex-pharmaservice",
                    code: "drugcost",
                  },
                ],
              },
              net: {
                value: 28,
                currency: "USD",
              },
            },
          ],
        },
        {
          sequence: 2,
          productOrService: {
            coding: [
              {
                system: "http://hl7.org/fhir/ex-pharmaservice",
                code: "markup",
              },
            ],
          },
          net: {
            value: 22,
            currency: "USD",
          },
        },
        {
          sequence: 3,
          productOrService: {
            coding: [
              {
                system: "http://hl7.org/fhir/ex-pharmaservice",
                code: "compoundfee",
              },
            ],
          },
          net: {
            value: 60,
            currency: "USD",
          },
        },
      ],
    },
  ],
  total: {
    value: 155,
    currency: "USD",
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

export const ClaimExamplePharmacyMedication: Claim = {
  resourceType: "Claim",
  id: "760151",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">A human-readable rendering of the Pharmacy Claim</div>',
  },
  identifier: [
    {
      system: "http://happypharma.com/claim",
      value: "7612345",
    },
  ],
  status: "active",
  type: {
    coding: [
      {
        system: "http://terminology.hl7.org/CodeSystem/claim-type",
        code: "pharmacy",
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
  provider: {
    reference: "Organization/1",
  },
  priority: {
    coding: [
      {
        code: "stat",
      },
    ],
  },
  prescription: {
    reference: "http://pharmacy.org/MedicationRequest/AB1234G",
  },
  originalPrescription: {
    reference: "http://pharmacy.org/MedicationRequest/AB1202B",
  },
  payee: {
    type: {
      coding: [
        {
          code: "provider",
        },
      ],
    },
  },
  careTeam: [
    {
      sequence: 1,
      provider: {
        reference: "Practitioner/example",
      },
    },
  ],
  supportingInfo: [
    {
      sequence: 1,
      category: {
        coding: [
          {
            code: "pharmacyrefill",
          },
        ],
      },
      code: {
        coding: [
          {
            system: "http://example.org/fhir/CodeSystem/pharmacy-refill",
            code: "new",
          },
        ],
      },
    },
    {
      sequence: 2,
      category: {
        coding: [
          {
            code: "pharmacyinformation",
          },
        ],
      },
      code: {
        coding: [
          {
            system: "http://example.org/fhir/CodeSystem/pharmacy-information",
            code: "refillsremaining",
          },
        ],
      },
      valueQuantity: {
        value: 2,
      },
    },
    {
      sequence: 3,
      category: {
        coding: [
          {
            code: "pharmacyinformation",
          },
        ],
      },
      code: {
        coding: [
          {
            system: "http://example.org/fhir/CodeSystem/pharmacy-information",
            code: "dayssupply",
          },
        ],
      },
      valueQuantity: {
        value: 90,
      },
    },
  ],
  diagnosis: [
    {
      sequence: 1,
      diagnosisCodeableConcept: {
        coding: [
          {
            code: "654456",
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
  item: [
    {
      sequence: 1,
      careTeamSequence: [1],
      informationSequence: [1, 2, 3],
      productOrService: {
        coding: [
          {
            system: "http://www.nlm.nih.gov/research/umls/rxnorm",
            code: "562721",
            display: "Alprazolam 0.25mg (Xanax)",
          },
        ],
      },
      servicedDate: "2014-08-16",
      quantity: {
        value: 90,
        unit: "TAB",
        system: "http://unitsofmeasure.org",
        code: "TAB",
      },
      net: {
        value: 90,
        currency: "USD",
      },
      detail: [
        {
          sequence: 1,
          productOrService: {
            coding: [
              {
                system: "http://hl7.org/fhir/ex-pharmaservice",
                code: "drugcost",
              },
            ],
          },
          net: {
            value: 45,
            currency: "USD",
          },
        },
        {
          sequence: 2,
          productOrService: {
            coding: [
              {
                system: "http://hl7.org/fhir/ex-pharmaservice",
                code: "markup",
              },
            ],
          },
          net: {
            value: 9,
            currency: "USD",
          },
        },
        {
          sequence: 3,
          productOrService: {
            coding: [
              {
                system: "http://hl7.org/fhir/ex-pharmaservice",
                code: "dispensefee",
              },
            ],
          },
          net: {
            value: 36,
            currency: "USD",
          },
        },
      ],
    },
  ],
  total: {
    value: 90,
    currency: "USD",
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

export const ClaimExamplePharmacy: Claim = {
  resourceType: "Claim",
  id: "760150",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">A human-readable rendering of the Pharmacy Claim</div>',
  },
  identifier: [
    {
      system: "http://happypharma.com/claim",
      value: "7612345",
    },
  ],
  status: "active",
  type: {
    coding: [
      {
        system: "http://terminology.hl7.org/CodeSystem/claim-type",
        code: "pharmacy",
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
  provider: {
    reference: "Organization/1",
  },
  priority: {
    coding: [
      {
        code: "stat",
      },
    ],
  },
  payee: {
    type: {
      coding: [
        {
          code: "provider",
        },
      ],
    },
  },
  careTeam: [
    {
      sequence: 1,
      provider: {
        reference: "Practitioner/example",
      },
    },
  ],
  diagnosis: [
    {
      sequence: 1,
      diagnosisCodeableConcept: {
        coding: [
          {
            code: "654456",
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
  item: [
    {
      sequence: 1,
      careTeamSequence: [1],
      productOrService: {
        coding: [
          {
            system: "http://hl7.org/fhir/ex-pharmaservice",
            code: "smokecess",
          },
        ],
      },
      servicedDate: "2014-08-16",
      unitPrice: {
        value: 60,
        currency: "USD",
      },
      net: {
        value: 60,
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

export const ClaimExampleProfessional: Claim = {
  resourceType: "Claim",
  id: "860150",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">A human-readable rendering of the Claim</div>',
  },
  identifier: [
    {
      system: "http://happypdocs.com/claim",
      value: "8612345",
    },
  ],
  status: "active",
  type: {
    coding: [
      {
        system: "http://terminology.hl7.org/CodeSystem/claim-type",
        code: "professional",
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
  provider: {
    reference: "Organization/1",
  },
  priority: {
    coding: [
      {
        code: "normal",
      },
    ],
  },
  payee: {
    type: {
      coding: [
        {
          code: "provider",
        },
      ],
    },
  },
  careTeam: [
    {
      sequence: 1,
      provider: {
        reference: "Practitioner/example",
      },
    },
  ],
  diagnosis: [
    {
      sequence: 1,
      diagnosisCodeableConcept: {
        coding: [
          {
            code: "654456",
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
  item: [
    {
      sequence: 1,
      careTeamSequence: [1],
      productOrService: {
        coding: [
          {
            system: "http://hl7.org/fhir/ex-serviceproduct",
            code: "exam",
          },
        ],
      },
      servicedDate: "2014-08-16",
      unitPrice: {
        value: 75,
        currency: "USD",
      },
      net: {
        value: 75,
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

export const ClaimExampleVisionGlasses3tier: Claim = {
  resourceType: "Claim",
  id: "660152",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">A human-readable rendering of the Vision Claim for Glasses</div>',
  },
  contained: [
    {
      resourceType: "Device",
      id: "device-frame",
    },
    {
      resourceType: "Device",
      id: "device-lens",
    },
  ],
  identifier: [
    {
      system: "http://happysight.com/claim",
      value: "6612347",
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
  provider: {
    reference: "Organization/1",
  },
  priority: {
    coding: [
      {
        code: "normal",
      },
    ],
  },
  prescription: {
    reference: "http://www.optdocs.com/prescription/12345",
  },
  payee: {
    type: {
      coding: [
        {
          code: "provider",
        },
      ],
    },
  },
  careTeam: [
    {
      sequence: 1,
      provider: {
        reference: "Practitioner/example",
      },
    },
  ],
  diagnosis: [
    {
      sequence: 1,
      diagnosisCodeableConcept: {
        coding: [
          {
            code: "654321",
          },
        ],
      },
    },
  ],
  insurance: [
    {
      sequence: 1,
      focal: false,
      coverage: {
        reference: "Coverage/9876B1",
      },
      preAuthRef: ["PR7652387237"],
      claimResponse: {
        reference: "ClaimResponse/R3500",
      },
    },
    {
      sequence: 2,
      focal: true,
      coverage: {
        reference: "Coverage/9876B1",
      },
      preAuthRef: ["AB543GTD7567"],
    },
  ],
  item: [
    {
      sequence: 1,
      careTeamSequence: [1],
      revenue: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/ex-revenue-center",
            code: "0010",
            display: "Vision Clinic",
          },
        ],
      },
      category: {
        coding: [
          {
            system: "http://example.org/fhir/CodeSystem/benefit-subcategory",
            code: "F6",
            display: "Vision Coverage",
          },
        ],
      },
      productOrService: {
        coding: [
          {
            system: "http://example.org/fhir/CodeSystem/ex-visionservice",
            code: "glasses",
          },
        ],
      },
      modifier: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/modifiers",
              code: "rooh",
            },
          ],
        },
      ],
      programCode: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/ex-programcode",
              code: "none",
            },
          ],
        },
      ],
      servicedDate: "2014-08-16",
      unitPrice: {
        value: 235.4,
        currency: "USD",
      },
      net: {
        value: 235.4,
        currency: "USD",
      },
      detail: [
        {
          sequence: 1,
          revenue: {
            coding: [
              {
                system:
                  "http://terminology.hl7.org/CodeSystem/ex-revenue-center",
                code: "0010",
                display: "Vision Clinic",
              },
            ],
          },
          category: {
            coding: [
              {
                system:
                  "http://example.org/fhir/CodeSystem/benefit-subcategory",
                code: "F6",
                display: "Vision Coverage",
              },
            ],
          },
          productOrService: {
            coding: [
              {
                system: "http://example.org/fhir/CodeSystem/ex-visionservice",
                code: "frame",
              },
            ],
          },
          modifier: [
            {
              coding: [
                {
                  system: "http://terminology.hl7.org/CodeSystem/modifiers",
                  code: "rooh",
                },
              ],
            },
          ],
          unitPrice: {
            value: 100,
            currency: "USD",
          },
          factor: 1.1,
          net: {
            value: 110,
            currency: "USD",
          },
          udi: [
            {
              reference: "#device-frame",
            },
          ],
        },
        {
          sequence: 2,
          revenue: {
            coding: [
              {
                system:
                  "http://terminology.hl7.org/CodeSystem/ex-revenue-center",
                code: "0010",
                display: "Vision Clinic",
              },
            ],
          },
          category: {
            coding: [
              {
                system:
                  "http://example.org/fhir/CodeSystem/benefit-subcategory",
                code: "F6",
                display: "Vision Coverage",
              },
            ],
          },
          productOrService: {
            coding: [
              {
                system: "http://example.org/fhir/CodeSystem/ex-visionservice",
                code: "lens",
              },
            ],
          },
          programCode: [
            {
              coding: [
                {
                  system:
                    "http://terminology.hl7.org/CodeSystem/ex-programcode",
                  code: "none",
                },
              ],
            },
          ],
          quantity: {
            value: 2,
          },
          unitPrice: {
            value: 55,
            currency: "USD",
          },
          net: {
            value: 110,
            currency: "USD",
          },
          subDetail: [
            {
              sequence: 1,
              revenue: {
                coding: [
                  {
                    system:
                      "http://terminology.hl7.org/CodeSystem/ex-revenue-center",
                    code: "0010",
                    display: "Vision Clinic",
                  },
                ],
              },
              category: {
                coding: [
                  {
                    system:
                      "http://example.org/fhir/CodeSystem/benefit-subcategory",
                    code: "F6",
                    display: "Vision Coverage",
                  },
                ],
              },
              productOrService: {
                coding: [
                  {
                    system:
                      "http://example.org/fhir/CodeSystem/ex-visionservice",
                    code: "lens",
                  },
                ],
              },
              modifier: [
                {
                  coding: [
                    {
                      system: "http://terminology.hl7.org/CodeSystem/modifiers",
                      code: "rooh",
                    },
                  ],
                },
              ],
              programCode: [
                {
                  coding: [
                    {
                      system:
                        "http://terminology.hl7.org/CodeSystem/ex-programcode",
                      code: "none",
                    },
                  ],
                },
              ],
              quantity: {
                value: 2,
              },
              unitPrice: {
                value: 30,
                currency: "USD",
              },
              factor: 1.1,
              net: {
                value: 66,
                currency: "USD",
              },
              udi: [
                {
                  reference: "#device-lens",
                },
              ],
            },
            {
              sequence: 2,
              revenue: {
                coding: [
                  {
                    system:
                      "http://terminology.hl7.org/CodeSystem/ex-revenue-center",
                    code: "0010",
                    display: "Vision Clinic",
                  },
                ],
              },
              category: {
                coding: [
                  {
                    system:
                      "http://example.org/fhir/CodeSystem/benefit-subcategory",
                    code: "F6",
                    display: "Vision Coverage",
                  },
                ],
              },
              productOrService: {
                coding: [
                  {
                    system:
                      "http://example.org/fhir/CodeSystem/ex-visionservice",
                    code: "hardening",
                  },
                ],
              },
              modifier: [
                {
                  coding: [
                    {
                      system: "http://terminology.hl7.org/CodeSystem/modifiers",
                      code: "rooh",
                    },
                  ],
                },
              ],
              quantity: {
                value: 2,
              },
              unitPrice: {
                value: 15,
                currency: "USD",
              },
              factor: 1.1,
              net: {
                value: 33,
                currency: "USD",
              },
            },
            {
              sequence: 3,
              revenue: {
                coding: [
                  {
                    system:
                      "http://terminology.hl7.org/CodeSystem/ex-revenue-center",
                    code: "0010",
                    display: "Vision Clinic",
                  },
                ],
              },
              category: {
                coding: [
                  {
                    system:
                      "http://example.org/fhir/CodeSystem/benefit-subcategory",
                    code: "F6",
                    display: "Vision Coverage",
                  },
                ],
              },
              productOrService: {
                coding: [
                  {
                    system:
                      "http://example.org/fhir/CodeSystem/ex-visionservice",
                    code: "UV coating",
                  },
                ],
              },
              modifier: [
                {
                  coding: [
                    {
                      system: "http://terminology.hl7.org/CodeSystem/modifiers",
                      code: "rooh",
                    },
                  ],
                },
              ],
              quantity: {
                value: 2,
              },
              unitPrice: {
                value: 5,
                currency: "USD",
              },
              factor: 1.1,
              net: {
                value: 11,
                currency: "USD",
              },
            },
          ],
        },
        {
          sequence: 3,
          revenue: {
            coding: [
              {
                system:
                  "http://terminology.hl7.org/CodeSystem/ex-revenue-center",
                code: "0010",
                display: "Vision Clinic",
              },
            ],
          },
          category: {
            coding: [
              {
                system:
                  "http://example.org/fhir/CodeSystem/benefit-subcategory",
                code: "F6",
                display: "Vision Coverage",
              },
            ],
          },
          productOrService: {
            coding: [
              {
                system: "http://example.org/fhir/CodeSystem/ex-visionservice",
                code: "fst",
              },
            ],
          },
          unitPrice: {
            value: 220,
            currency: "USD",
          },
          factor: 0.07,
          net: {
            value: 15.4,
            currency: "USD",
          },
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

export const ClaimExampleVisionGlasses: Claim = {
  resourceType: "Claim",
  id: "660151",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">A human-readable rendering of the Vision Claim for Glasses</div>',
  },
  identifier: [
    {
      system: "http://happysight.com/claim",
      value: "6612346",
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
  provider: {
    reference: "Organization/1",
  },
  priority: {
    coding: [
      {
        code: "normal",
      },
    ],
  },
  prescription: {
    reference: "http://www.optdocs.com/prescription/12345",
  },
  payee: {
    type: {
      coding: [
        {
          code: "provider",
        },
      ],
    },
  },
  careTeam: [
    {
      sequence: 1,
      provider: {
        reference: "Practitioner/example",
      },
    },
  ],
  diagnosis: [
    {
      sequence: 1,
      diagnosisCodeableConcept: {
        coding: [
          {
            code: "654321",
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
  item: [
    {
      sequence: 1,
      careTeamSequence: [1],
      productOrService: {
        coding: [
          {
            system: "http://example.org/fhir/CodeSystem/ex-visionservice",
            code: "glasses",
          },
        ],
      },
      servicedDate: "2014-08-16",
      unitPrice: {
        value: 214,
        currency: "USD",
      },
      net: {
        value: 214,
        currency: "USD",
      },
      detail: [
        {
          sequence: 1,
          productOrService: {
            coding: [
              {
                system: "http://example.org/fhir/CodeSystem/ex-visionservice",
                code: "frame",
              },
            ],
          },
          unitPrice: {
            value: 100,
            currency: "USD",
          },
          net: {
            value: 100,
            currency: "USD",
          },
        },
        {
          sequence: 2,
          productOrService: {
            coding: [
              {
                system: "http://example.org/fhir/CodeSystem/ex-visionservice",
                code: "lens",
              },
            ],
          },
          quantity: {
            value: 2,
          },
          unitPrice: {
            value: 50,
            currency: "USD",
          },
          net: {
            value: 100,
            currency: "USD",
          },
        },
        {
          sequence: 3,
          productOrService: {
            coding: [
              {
                system: "http://example.org/fhir/CodeSystem/ex-visionservice",
                code: "fst",
              },
            ],
          },
          unitPrice: {
            value: 200,
            currency: "USD",
          },
          factor: 0.07,
          net: {
            value: 14,
            currency: "USD",
          },
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

export const ClaimExampleVision: Claim = {
  resourceType: "Claim",
  id: "660150",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">A human-readable rendering of the Vision Claim</div>',
  },
  identifier: [
    {
      system: "http://happysight.com/claim",
      value: "6612345",
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
  provider: {
    reference: "Organization/1",
  },
  priority: {
    coding: [
      {
        code: "normal",
      },
    ],
  },
  payee: {
    type: {
      coding: [
        {
          code: "provider",
        },
      ],
    },
  },
  careTeam: [
    {
      sequence: 1,
      provider: {
        reference: "Practitioner/example",
      },
    },
  ],
  diagnosis: [
    {
      sequence: 1,
      diagnosisCodeableConcept: {
        coding: [
          {
            code: "654321",
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
  item: [
    {
      sequence: 1,
      careTeamSequence: [1],
      productOrService: {
        coding: [
          {
            system: "http://example.org/fhir/CodeSystem/ex-visionservice",
            code: "exam",
          },
        ],
      },
      servicedDate: "2014-08-16",
      unitPrice: {
        value: 80,
        currency: "USD",
      },
      net: {
        value: 80,
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

export const ClaimExample: Claim = {
  resourceType: "Claim",
  id: "100150",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">A human-readable rendering of the Oral Health Claim</div>',
  },
  identifier: [
    {
      system: "http://happyvalley.com/claim",
      value: "12345",
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
    reference: "Organization/2",
  },
  provider: {
    reference: "Organization/1",
  },
  priority: {
    coding: [
      {
        code: "normal",
      },
    ],
  },
  payee: {
    type: {
      coding: [
        {
          code: "provider",
        },
      ],
    },
  },
  careTeam: [
    {
      sequence: 1,
      provider: {
        reference: "Practitioner/example",
      },
    },
  ],
  diagnosis: [
    {
      sequence: 1,
      diagnosisCodeableConcept: {
        coding: [
          {
            code: "123456",
          },
        ],
      },
    },
  ],
  insurance: [
    {
      sequence: 1,
      focal: true,
      identifier: {
        system: "http://happyvalley.com/claim",
        value: "12345",
      },
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
            code: "1200",
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
