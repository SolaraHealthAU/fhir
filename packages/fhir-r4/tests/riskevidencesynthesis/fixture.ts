import type { RiskEvidenceSynthesis } from "../../src/v4.0.1/riskevidencesynthesis/types";

export const RiskevidencesynthesisExample: RiskEvidenceSynthesis = {
  resourceType: "RiskEvidenceSynthesis",
  id: "example",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">[Put rendering here]</div>',
  },
  status: "draft",
  population: {
    reference: "EvidenceVariable/example",
  },
  outcome: {
    reference: "EvidenceVariable/example",
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
