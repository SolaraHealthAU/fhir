import type { ResearchStudy } from "../../src/v4.0.1/researchstudy/types";

export const ResearchstudyExample: ResearchStudy = {
  resourceType: "ResearchStudy",
  id: "example",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">[Put rendering here]</div>',
  },
  status: "completed",
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
