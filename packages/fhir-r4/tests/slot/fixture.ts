import type { Slot } from "../../src/v4.0.1/slot/types";

export const SlotExampleBusy: Slot = {
  resourceType: "Slot",
  id: "1",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n\t\t\t25 Dec 2013 9:00am - 9:15am: <b>Busy</b> Physiotherapy\n\t\t</div>',
  },
  identifier: [
    {
      system: "http://example.org/identifiers/slots",
      value: "123132",
    },
  ],
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
  schedule: {
    reference: "Schedule/example",
  },
  status: "busy",
  start: "2013-12-25T09:00:00Z",
  end: "2013-12-25T09:15:00Z",
  overbooked: true,
  comment:
    "Assessments should be performed before requesting appointments in this slot.",
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

export const SlotExampleTentative: Slot = {
  resourceType: "Slot",
  id: "2",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n\t\t\t25 Dec 2013 9:45am - 10:00am: <b>Tentative</b> Physiotherapy\n\t\t</div>',
  },
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
  schedule: {
    reference: "Schedule/example",
  },
  status: "busy-tentative",
  start: "2013-12-25T09:45:00Z",
  end: "2013-12-25T10:00:00Z",
  comment: "Dr Careful is out of the office",
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

export const SlotExampleUnavailable: Slot = {
  resourceType: "Slot",
  id: "3",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n\t\t\t25 Dec 2013 9:30am - 9:45am: <b>Unavailable</b> Physiotherapy<br/>\n\t\t\tDr Careful is out of the office\n\t\t</div>',
  },
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
  schedule: {
    reference: "Schedule/example",
  },
  status: "busy-unavailable",
  start: "2013-12-25T09:30:00Z",
  end: "2013-12-25T09:45:00Z",
  comment: "Dr Careful is out of the office",
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

export const SlotExample: Slot = {
  resourceType: "Slot",
  id: "example",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n\t\t\t25 Dec 2013 9:15am - 9:30am: <b>Busy</b> Physiotherapy\n\t\t</div>',
  },
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
  appointmentType: {
    coding: [
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0276",
        code: "WALKIN",
        display: "A previously unscheduled walk-in visit",
      },
    ],
  },
  schedule: {
    reference: "Schedule/example",
  },
  status: "free",
  start: "2013-12-25T09:15:00Z",
  end: "2013-12-25T09:30:00Z",
  comment:
    "Assessments should be performed before requesting appointments in this slot.",
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
