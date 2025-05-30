import type { EventDefinition } from "../../src/v4.0.1/eventdefinition/types";

export const EventdefinitionExample: EventDefinition = {
  resourceType: "EventDefinition",
  id: "example",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n    </div>',
  },
  status: "draft",
  purpose: "Monitor all admissions to Emergency",
  trigger: [
    {
      type: "named-event",
      name: "monitor-emergency-admissions",
      data: [
        {
          type: "Encounter",
        },
      ],
      condition: {
        description:
          "Encounter Location = emergency (active/completed encounters, current or previous)",
        language: "text/fhirpath",
        expression:
          "(this | %previous).location.where(location = 'Location/emergency' and status in {'active', 'completed'}).exists()",
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
