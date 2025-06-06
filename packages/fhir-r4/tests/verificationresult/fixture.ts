import type { VerificationResult } from "../../src/v4.0.1/verificationresult/types";

export const VerificationresultExample: VerificationResult = {
  resourceType: "VerificationResult",
  id: "example",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: example</p><p><b>status</b>: attested</p></div>',
  },
  status: "attested",
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
