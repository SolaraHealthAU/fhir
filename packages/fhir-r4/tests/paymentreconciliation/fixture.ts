import type { PaymentReconciliation } from "../../src/v4.0.1/paymentreconciliation/types";

export const PaymentreconciliationExample: PaymentReconciliation = {
  resourceType: "PaymentReconciliation",
  id: "ER2500",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">A human-readable rendering of the PaymentReconciliation</div>',
  },
  identifier: [
    {
      system: "http://www.BenefitsInc.com/fhir/enrollmentresponse",
      value: "781234",
    },
  ],
  status: "active",
  period: {
    start: "2014-08-16",
    end: "2014-08-31",
  },
  created: "2014-08-16",
  paymentIssuer: {
    reference: "Organization/2",
  },
  request: {
    reference: "http://www.BenefitsInc.com/fhir/eligibility/225476332402",
  },
  requestor: {
    reference: "Organization/1",
  },
  outcome: "complete",
  disposition: "2014 August mid-month settlement.",
  paymentDate: "2014-08-01",
  paymentAmount: {
    value: 7000,
    currency: "USD",
  },
  paymentIdentifier: {
    system: "http://www.BenefitsInc.com/payment/2018",
    value: "10-12345",
  },
  detail: [
    {
      identifier: {
        system: "http://www.BenefitsInc.com/payment/2018/detail",
        value: "10-12345-001",
      },
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/payment-type",
            code: "payment",
          },
        ],
      },
      request: {
        identifier: {
          system: "http://happyvalleyclinic.com/claim",
          value: "AB12345",
        },
      },
      submitter: {
        reference: "Organization/1",
      },
      response: {
        identifier: {
          system: "http://www.BenefitsInc.com/fhir/claimresponse",
          value: "CR20140815-AB12345",
        },
      },
      date: "2014-08-16",
      payee: {
        reference: "Organization/1",
      },
      amount: {
        value: 3500,
        currency: "USD",
      },
    },
    {
      identifier: {
        system: "http://www.BenefitsInc.com/payment/2018/detail",
        value: "10-12345-002",
      },
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/payment-type",
            code: "payment",
          },
        ],
      },
      request: {
        reference:
          "http://www.BenefitsInc.com/fhir/oralhealthclaim/225476332699",
      },
      date: "2014-08-12",
      amount: {
        value: 4000,
        currency: "USD",
      },
    },
    {
      identifier: {
        system: "http://www.BenefitsInc.com/payment/2018/detail",
        value: "10-12345-003",
      },
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/payment-type",
            code: "advance",
          },
        ],
      },
      date: "2014-08-16",
      amount: {
        value: -1500,
        currency: "USD",
      },
    },
  ],
  formCode: {
    coding: [
      {
        system: "http://ncforms.org/formid",
        code: "PAYREC/2016/01B",
      },
    ],
  },
  processNote: [
    {
      type: "display",
      text: "Due to the year end holiday the cutoff for submissions for December will be the 28th.",
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
