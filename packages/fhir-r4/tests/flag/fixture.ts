import type { Flag } from "../../src/v4.0.1/flag/types";

export const FlagExampleEncounter: Flag = {
  resourceType: "Flag",
  id: "example-encounter",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">Follow Infection Control Level 3 Protocol</div>',
  },
  status: "active",
  category: [
    {
      coding: [
        {
          system: "http://example.org/local",
          code: "infection",
          display: "Infection Control Level",
        },
      ],
    },
  ],
  code: {
    coding: [
      {
        system: "http://example.org/local/if1",
        code: "l3",
        display: "Follow Level 3 Protocol",
      },
    ],
  },
  subject: {
    reference: "Patient/example",
    display: "Peter Patient",
  },
  encounter: {
    reference: "Encounter/example",
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

export const FlagExample: Flag = {
  resourceType: "Flag",
  id: "example",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">Large Dog warning for Peter Patient</div>',
  },
  identifier: [
    {
      value: "12345",
    },
  ],
  status: "inactive",
  category: [
    {
      coding: [
        {
          system: "http://terminology.hl7.org/CodeSystem/flag-category",
          code: "safety",
          display: "Safety",
        },
      ],
      text: "Safety",
    },
  ],
  code: {
    coding: [
      {
        system: "http://example.org/local",
        code: "bigdog",
        display: "Big dog",
      },
    ],
    text: "Patient has a big dog at his home. Always always wear a suit of armor or take other active counter-measures",
  },
  subject: {
    reference: "Patient/example",
    display: "Peter Patient",
  },
  period: {
    start: "2015-01-17",
    end: "2016-12-01",
  },
  author: {
    reference: "Practitioner/example",
    display: "Nancy Nurse",
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
