import type { InsurancePlan } from "../../src/v4.0.1/insuranceplan/types";

export const InsuranceplanExample: InsurancePlan = {
  resourceType: "InsurancePlan",
  id: "example",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: example</p><p><b>name</b>: foo</p></div>',
  },
  name: "foo",
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
