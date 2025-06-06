import type { Linkage } from "../../src/v4.0.1/linkage/types";

export const LinkageExample: Linkage = {
  resourceType: "Linkage",
  id: "example",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n      <p><b>Source:</b> Condition/example - <i>Severe burn of left ear (Date: 24-May 2012)</i></p>\n      <p><b>Alternate:</b> Condition/condition-example - <i>Severe burn of left ear (Date: 24-May 2012)</i></p>\n    </div>',
  },
  author: {
    reference: "Practitioner/f201",
  },
  item: [
    {
      type: "source",
      resource: {
        reference: "Condition/example",
        display: "Severe burn of left ear (Date: 24-May 2012)",
      },
    },
    {
      type: "alternate",
      resource: {
        reference: "Condition/condition-example",
        display: "Severe burn of left ear (Date: 24-May 2012)",
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
