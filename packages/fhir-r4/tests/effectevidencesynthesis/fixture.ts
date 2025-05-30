import type { EffectEvidenceSynthesis } from "../../src/v4.0.1/effectevidencesynthesis/types";

export const EffectevidencesynthesisExample: EffectEvidenceSynthesis = {
  resourceType: "EffectEvidenceSynthesis",
  id: "example",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">[Put rendering here]</div>',
  },
  status: "draft",
  population: {
    reference: "EvidenceVariable/example",
  },
  exposure: {
    reference: "EvidenceVariable/example",
  },
  exposureAlternative: {
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
