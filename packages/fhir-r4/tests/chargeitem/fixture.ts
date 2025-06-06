import type { ChargeItem } from "../../src/v4.0.1/chargeitem/types";

export const ChargeitemExample: ChargeItem = {
  resourceType: "ChargeItem",
  id: "example",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">Example of ChargeItem Usage in Context of the German EBM Billing code system</div>',
  },
  identifier: [
    {
      system: "http://myHospital.org/ChargeItems",
      value: "654321",
    },
  ],
  definitionUri: [
    "http://www.kbv.de/tools/ebm/html/01520_2904360860826220813632.html",
  ],
  status: "billable",
  code: {
    coding: [
      {
        code: "01510",
        display:
          "Zusatzpauschale für Beobachtung nach diagnostischer Koronarangiografie",
      },
    ],
  },
  subject: {
    reference: "Patient/example",
  },
  context: {
    reference: "Encounter/example",
  },
  occurrencePeriod: {
    start: "2017-01-25T08:00:00+01:00",
    end: "2017-01-25T12:35:00+01:00",
  },
  performer: [
    {
      function: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "17561000",
            display: "Cardiologist",
          },
        ],
      },
      actor: {
        reference: "Practitioner/example",
      },
    },
    {
      function: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "224542009",
            display: "Coronary Care Nurse",
          },
        ],
      },
      actor: {
        reference: "Practitioner/example",
      },
    },
  ],
  performingOrganization: {
    identifier: {
      system: "http://myhospital/NamingSystem/departments",
      value: "CARD_INTERMEDIATE_CARE",
    },
  },
  requestingOrganization: {
    identifier: {
      system: "http://myhospital/NamingSystem/departments",
      value: "CARD_U1",
    },
  },
  quantity: {
    value: 1,
  },
  factorOverride: 0.8,
  priceOverride: {
    value: 40,
    currency: "EUR",
  },
  overrideReason:
    "Patient is Cardiologist's golf buddy, so he gets a 20% discount!",
  enterer: {
    reference: "Practitioner/example",
  },
  enteredDate: "2017-01-25T23:55:04+01:00",
  reason: [
    {
      coding: [
        {
          system: "http://hl7.org/fhir/sid/icd-10",
          code: "123456",
          display: "DIAG-1",
        },
      ],
    },
  ],
  service: [
    {
      reference: "Procedure/example",
    },
  ],
  account: [
    {
      reference: "Account/example",
    },
  ],
  note: [
    {
      authorReference: {
        reference: "Practitioner/example",
      },
      time: "2017-01-25T23:55:04+01:00",
      text: "The code is only applicable for periods longer than 4h",
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
