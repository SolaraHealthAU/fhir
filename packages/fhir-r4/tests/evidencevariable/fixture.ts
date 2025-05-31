import type { EvidenceVariable } from "../../src/v4.0.1/evidencevariable/types";

export const EvidencevariableExample: EvidenceVariable = {
  resourceType: "EvidenceVariable",
  id: "example",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">[Put rendering here]</div>',
  },
  status: "draft",
  characteristic: [
    {
      definitionCodeableConcept: {
        text: "Diabetic patients over 65",
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
