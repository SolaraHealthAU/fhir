import type { Schedule } from "../../src/v4.0.1/schedule/types";

export const ScheduleExample: Schedule = {
  resourceType: "Schedule",
  id: "example",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n      Burgers UMC, South Wing, second floor Physiotherapy Schedule\n    </div>',
  },
  identifier: [
    {
      use: "usual",
      system: "http://example.org/scheduleid",
      value: "45",
    },
  ],
  active: true,
  serviceCategory: [
    {
      coding: [
        {
          code: "17",
          display: "General Practice",
        },
      ],
    },
  ],
  serviceType: [
    {
      coding: [
        {
          code: "57",
          display: "Immunization",
        },
      ],
    },
  ],
  specialty: [
    {
      coding: [
        {
          code: "408480009",
          display: "Clinical immunology",
        },
      ],
    },
  ],
  actor: [
    {
      reference: "Location/1",
      display: "Burgers UMC, South Wing, second floor",
    },
  ],
  planningHorizon: {
    start: "2013-12-25T09:15:00Z",
    end: "2013-12-25T09:30:00Z",
  },
  comment:
    "The slots attached to this schedule should be specialized to cover immunizations within the clinic",
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

export const ScheduleProviderLocation1Example: Schedule = {
  resourceType: "Schedule",
  id: "exampleloc1",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n      Dr. Beverly Crusher - USS Enterprise-D Sickbay Schedule\n\t\t</div>',
  },
  identifier: [
    {
      use: "usual",
      system: "http://example.org/scheduleid",
      value: "46",
    },
  ],
  active: true,
  serviceCategory: [
    {
      coding: [
        {
          code: "17",
          display: "General Practice",
        },
      ],
    },
  ],
  serviceType: [
    {
      coding: [
        {
          code: "75",
          display: "Genetic Counselling",
        },
      ],
    },
  ],
  specialty: [
    {
      coding: [
        {
          code: "394580004",
          display: "Clinical genetics",
        },
      ],
    },
  ],
  actor: [
    {
      reference: "Practitioner/1",
      display: "Dr. Beverly Crusher",
    },
    {
      reference: "Location/3",
      display: "USS Enterprise-D Sickbay",
    },
  ],
  planningHorizon: {
    start: "2017-12-25T09:15:00Z",
    end: "2017-12-25T09:30:00Z",
  },
  comment:
    "The slots attached to this schedule are for genetic counselling in the USS Enterprise-D Sickbay.",
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

export const ScheduleProviderLocation2Example: Schedule = {
  resourceType: "Schedule",
  id: "exampleloc2",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n      Dr. Beverly Crusher - Starfleet HQ Sickbay Schedule\n\t\t</div>',
  },
  identifier: [
    {
      use: "usual",
      system: "http://example.org/scheduleid",
      value: "47",
    },
  ],
  active: true,
  serviceCategory: [
    {
      coding: [
        {
          code: "31",
          display: "Specialist Surgical",
        },
      ],
    },
  ],
  serviceType: [
    {
      coding: [
        {
          code: "221",
          display: "Surgery - General",
        },
      ],
    },
  ],
  specialty: [
    {
      coding: [
        {
          code: "394610002",
          display: "Surgery-Neurosurgery",
        },
      ],
    },
  ],
  actor: [
    {
      reference: "Practitioner/1",
      display: "Dr. Beverly Crusher",
    },
    {
      reference: "Location/2",
      display: "Starfleet HQ Sickbay",
    },
  ],
  planningHorizon: {
    start: "2017-12-25T09:15:00Z",
    end: "2017-12-25T09:30:00Z",
  },
  comment:
    "The slots attached to this schedule are for neurosurgery operations at Starfleet HQ only.",
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
