import type { CatalogEntry } from "../../src/v4.0.1/catalogentry/types";

export const CatalogentryExample: CatalogEntry = {
  resourceType: "CatalogEntry",
  id: "example",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">[Put rendering here]</div>',
  },
  identifier: [
    {
      system: "http://example.com/identifier",
      value: "123",
    },
  ],
  type: {
    text: "Medication",
  },
  orderable: true,
  referencedItem: {
    reference: "Medication/123",
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
