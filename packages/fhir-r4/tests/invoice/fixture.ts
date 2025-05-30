import type { Invoice } from "../../src/v4.0.1/invoice/types";

export const InvoiceExample: Invoice = {
  resourceType: "Invoice",
  id: "example",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">Example of Invoice</div>',
  },
  identifier: [
    {
      system: "http://myHospital.org/Invoices",
      value: "654321",
    },
  ],
  status: "issued",
  subject: {
    reference: "Patient/example",
  },
  date: "2017-01-25T08:00:00+01:00",
  participant: [
    {
      role: {
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
  ],
  issuer: {
    identifier: {
      system: "http://myhospital/NamingSystem/departments",
      value: "CARD_INTERMEDIATE_CARE",
    },
  },
  account: {
    reference: "Account/example",
  },
  totalNet: {
    value: 40,
    currency: "EUR",
  },
  totalGross: {
    value: 48,
    currency: "EUR",
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
