import type { PaymentNotice } from "../../src/v4.0.1/paymentnotice/types";

export const PaymentnoticeExample: PaymentNotice = {
  resourceType: "PaymentNotice",
  id: "77654",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">A human-readable rendering of the PaymentNotice</div>',
  },
  identifier: [
    {
      system: "http://benefitsinc.com/paymentnotice",
      value: "776543",
    },
  ],
  status: "active",
  request: {
    reference: "http://benefitsinc.com/fhir/claim/12345",
  },
  response: {
    reference: "http://benefitsinc.com/fhir/claimresponse/CR12345",
  },
  created: "2014-08-16",
  provider: {
    reference: "Organization/1",
  },
  payment: {
    reference: "PaymentReconciliation/ER2500",
  },
  paymentDate: "2014-08-15",
  payee: {
    reference: "Organization/1",
  },
  recipient: {
    identifier: {
      system: "http://regulators.gov",
      value: "AB123",
    },
  },
  amount: {
    value: 12500,
    currency: "USD",
  },
  paymentStatus: {
    coding: [
      {
        system: "http://terminology.hl7.org/CodeSystem/paymentstatus",
        code: "paid",
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
