import type { DocumentManifest } from "../../src/v4.0.1/documentmanifest/types";

export const DocumentmanifestExample: DocumentManifest = {
  resourceType: "DocumentManifest",
  id: "example",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">Text</div>',
  },
  contained: [
    {
      resourceType: "Practitioner",
      id: "a1",
      name: [
        {
          family: "Dopplemeyer",
          given: ["Sherry"],
        },
      ],
      telecom: [
        {
          system: "email",
          value: "john.doe@healthcare.example.org",
        },
      ],
    },
  ],
  masterIdentifier: {
    system: "http://example.org/documents",
    value: "23425234234-2346",
  },
  identifier: [
    {
      system: "http://example.org/documents",
      value: "23425234234-2347",
    },
  ],
  status: "current",
  type: {
    text: "History and Physical",
  },
  subject: {
    reference: "Patient/xcda",
  },
  created: "2004-12-25T23:50:50-05:00",
  author: [
    {
      reference: "#a1",
    },
  ],
  recipient: [
    {
      reference: "Practitioner/xcda1",
    },
  ],
  source: "urn:oid:1.3.6.1.4.1.21367.2009.1.2.1",
  description: "Physical",
  content: [
    {
      reference: "DocumentReference/example",
    },
  ],
  related: [
    {
      identifier: {
        system: "http://example.org/documents",
        value: "23425234234-9999",
      },
      ref: {
        reference: "DocumentReference/example",
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

export const DocumentmanifestFmAttachment: DocumentManifest = {
  resourceType: "DocumentManifest",
  id: "654789",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">A Financial Management Attachment example</div>',
  },
  contained: [
    {
      resourceType: "Organization",
      id: "org-1",
      identifier: [
        {
          system: "http://nationalidentifiers.org/insurers",
          value: "52345",
        },
      ],
    },
    {
      resourceType: "DocumentReference",
      id: "a1",
      status: "current",
      content: [
        {
          attachment: {
            contentType: "application/pdf",
            data: "SGVsbG8=",
            title: "accident notes 20100201.pdf",
            creation: "2010-02-01T11:50:23-05:00",
          },
        },
      ],
    },
    {
      resourceType: "DocumentReference",
      id: "a2",
      status: "current",
      content: [
        {
          attachment: {
            contentType: "application/pdf",
            url: "http://happyvalley.com/docs/AB12345",
            size: 104274,
            hash: "SGVsbG8gdGhlcmU=",
            creation: "2010-02-01T10:57:34+01:00",
          },
        },
      ],
    },
  ],
  identifier: [
    {
      system: "http://happyvalley.com/supportingdocumentation",
      value: "52345",
    },
  ],
  status: "current",
  created: "2014-09-21T11:50:23-05:00",
  recipient: [
    {
      reference: "#org-1",
    },
  ],
  content: [
    {
      reference: "#a1",
    },
    {
      reference: "#a2",
    },
    {
      reference: "DocumentReference/example",
    },
    {
      reference: "DiagnosticReport/f001",
    },
  ],
  related: [
    {
      identifier: {
        system: "http://happyvalley.com/claim",
        value: "12345",
      },
    },
    {
      identifier: {
        system: "http://www.BenefitsInc.com/fhir/remittance",
        value: "R3500",
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
