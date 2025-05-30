import type { MessageHeader } from "../../src/v4.0.1/messageheader/types";

export const MessageheaderExample: MessageHeader = {
  resourceType: "MessageHeader",
  id: "1cbdfb97-5859-48a4-8301-d54eab818d68",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n      <p>Update Person resource for Peter James CHALMERS (Jim), MRN: 12345 (Acme Healthcare)</p>\n    </div>',
  },
  eventCoding: {
    system: "http://example.org/fhir/message-events",
    code: "admin-notify",
  },
  destination: [
    {
      name: "Acme Message Gateway",
      target: {
        reference: "Device/example",
      },
      endpoint: "llp:10.11.12.14:5432",
      receiver: {
        reference: "http://acme.com/ehr/fhir/Practitioner/2323-33-4",
      },
    },
  ],
  sender: {
    reference: "Organization/1",
  },
  enterer: {
    reference: "Practitioner/example",
  },
  author: {
    reference: "Practitioner/example",
  },
  source: {
    name: "Acme Central Patient Registry",
    software: "FooBar Patient Manager",
    version: "3.1.45.AABB",
    contact: {
      system: "phone",
      value: "+1 (555) 123 4567",
    },
    endpoint: "llp:10.11.12.13:5432",
  },
  reason: {
    coding: [
      {
        system:
          "http://terminology.hl7.org/CodeSystem/message-reasons-encounter",
        code: "admit",
      },
    ],
  },
  response: {
    identifier: "5015fe84-8e76-4526-89d8-44b322e8d4fb",
    code: "ok",
  },
  focus: [
    {
      reference: "Patient/example",
    },
  ],
  definition: "http:////acme.com/ehr/fhir/messagedefinition/patientrequest",
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
