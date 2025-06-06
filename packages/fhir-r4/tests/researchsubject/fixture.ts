import type { ResearchSubject } from "../../src/v4.0.1/researchsubject/types";

export const ResearchsubjectExample: ResearchSubject = {
  resourceType: "ResearchSubject",
  id: "example",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">[Put rendering here]</div>',
  },
  identifier: [
    {
      type: {
        text: "Subject id",
      },
      system: "http://example.org/studysubjectids",
      value: "123",
    },
  ],
  status: "candidate",
  study: {
    reference: "ResearchStudy/example",
  },
  individual: {
    reference: "Patient/example",
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
