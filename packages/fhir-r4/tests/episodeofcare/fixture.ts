import type { EpisodeOfCare } from "../../src/v4.0.1/episodeofcare/types";

export const EpisodeofcareExample: EpisodeOfCare = {
  resourceType: "EpisodeOfCare",
  id: "example",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n      HACC Program for Peter James Chalmers at HL7 Healthcare 15 Sept 2014 - current<br/>\n\t\t\twas on leave from 22 Sept - 24 Sept while in respite care\n    </div>',
  },
  identifier: [
    {
      system: "http://example.org/sampleepisodeofcare-identifier",
      value: "123",
    },
  ],
  status: "active",
  statusHistory: [
    {
      status: "planned",
      period: {
        start: "2014-09-01",
        end: "2014-09-14",
      },
    },
    {
      status: "active",
      period: {
        start: "2014-09-15",
        end: "2014-09-21",
      },
    },
    {
      status: "onhold",
      period: {
        start: "2014-09-22",
        end: "2014-09-24",
      },
    },
    {
      status: "active",
      period: {
        start: "2014-09-25",
      },
    },
  ],
  type: [
    {
      coding: [
        {
          system: "http://terminology.hl7.org/CodeSystem/episodeofcare-type",
          code: "hacc",
          display: "Home and Community Care",
        },
      ],
    },
  ],
  diagnosis: [
    {
      condition: {
        reference: "Condition/stroke",
      },
      role: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/diagnosis-role",
            code: "CC",
            display: "Chief complaint",
          },
        ],
      },
      rank: 1,
    },
  ],
  patient: {
    reference: "Patient/example",
  },
  managingOrganization: {
    reference: "Organization/hl7",
  },
  period: {
    start: "2014-09-01",
  },
  referralRequest: [
    {
      display: "Referral from Example Aged Care Services",
    },
  ],
  careManager: {
    reference: "Practitioner/14",
    display: "Amanda Assigned",
  },
  team: [
    {
      reference: "CareTeam/example",
      display: "example care team",
    },
  ],
  account: [
    {
      reference: "Account/example",
      display: "example account",
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
