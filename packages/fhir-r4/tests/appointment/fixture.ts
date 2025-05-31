import type { Appointment } from "../../src/v4.0.1/appointment/types";

export const AppointmentExampleRequest: Appointment = {
  resourceType: "Appointment",
  id: "examplereq",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">Brian MRI results discussion</div>',
  },
  identifier: [
    {
      system: "http://example.org/sampleappointment-identifier",
      value: "123",
    },
  ],
  status: "proposed",
  serviceCategory: [
    {
      coding: [
        {
          system: "http://example.org/service-category",
          code: "gp",
          display: "General Practice",
        },
      ],
    },
  ],
  specialty: [
    {
      coding: [
        {
          system: "http://snomed.info/sct",
          code: "394814009",
          display: "General practice",
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
  reasonCode: [
    {
      coding: [
        {
          system: "http://snomed.info/sct",
          code: "413095006",
        },
      ],
      text: "Clinical Review",
    },
  ],
  priority: 5,
  description: "Discussion on the results of your recent MRI",
  minutesDuration: 15,
  slot: [
    {
      reference: "Slot/example",
    },
  ],
  created: "2015-12-02",
  comment:
    "Further expand on the results of the MRI and determine the next actions that may be appropriate.",
  participant: [
    {
      actor: {
        reference: "Patient/example",
        display: "Peter James Chalmers",
      },
      required: "required",
      status: "needs-action",
    },
    {
      type: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
              code: "ATND",
            },
          ],
        },
      ],
      required: "required",
      status: "needs-action",
    },
    {
      actor: {
        reference: "Location/1",
        display: "South Wing, second floor",
      },
      required: "required",
      status: "accepted",
    },
  ],
  requestedPeriod: [
    {
      start: "2016-06-02",
      end: "2016-06-09",
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

export const AppointmentExample: Appointment = {
  resourceType: "Appointment",
  id: "example",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">Brian MRI results discussion</div>',
  },
  status: "booked",
  serviceCategory: [
    {
      coding: [
        {
          system: "http://example.org/service-category",
          code: "gp",
          display: "General Practice",
        },
      ],
    },
  ],
  serviceType: [
    {
      coding: [
        {
          code: "52",
          display: "General Discussion",
        },
      ],
    },
  ],
  specialty: [
    {
      coding: [
        {
          system: "http://snomed.info/sct",
          code: "394814009",
          display: "General practice",
        },
      ],
    },
  ],
  appointmentType: {
    coding: [
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0276",
        code: "FOLLOWUP",
        display: "A follow up visit from a previous appointment",
      },
    ],
  },
  reasonReference: [
    {
      reference: "Condition/example",
      display: "Severe burn of left ear",
    },
  ],
  priority: 5,
  description: "Discussion on the results of your recent MRI",
  start: "2013-12-10T09:00:00Z",
  end: "2013-12-10T11:00:00Z",
  created: "2013-10-10",
  comment:
    "Further expand on the results of the MRI and determine the next actions that may be appropriate.",
  basedOn: [
    {
      reference: "ServiceRequest/myringotomy",
    },
  ],
  participant: [
    {
      actor: {
        reference: "Patient/example",
        display: "Peter James Chalmers",
      },
      required: "required",
      status: "accepted",
    },
    {
      type: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
              code: "ATND",
            },
          ],
        },
      ],
      actor: {
        reference: "Practitioner/example",
        display: "Dr Adam Careful",
      },
      required: "required",
      status: "accepted",
    },
    {
      actor: {
        reference: "Location/1",
        display: "South Wing, second floor",
      },
      required: "required",
      status: "accepted",
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

export const AppointmentExample2doctors: Appointment = {
  resourceType: "Appointment",
  id: "2docs",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">Brian MRI results discussion</div>',
  },
  status: "booked",
  serviceCategory: [
    {
      coding: [
        {
          system: "http://example.org/service-category",
          code: "gp",
          display: "General Practice",
        },
      ],
    },
  ],
  serviceType: [
    {
      coding: [
        {
          code: "52",
          display: "General Discussion",
        },
      ],
    },
  ],
  specialty: [
    {
      coding: [
        {
          system: "http://snomed.info/sct",
          code: "394814009",
          display: "General practice",
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
  priority: 5,
  description: "Discussion about Peter Chalmers MRI results",
  supportingInformation: [
    {
      reference: "DiagnosticReport/ultrasound",
    },
  ],
  start: "2013-12-09T09:00:00Z",
  end: "2013-12-09T11:00:00Z",
  comment:
    "Clarify the results of the MRI to ensure context of test was correct",
  participant: [
    {
      actor: {
        reference: "Patient/example",
        display: "Peter James Chalmers",
      },
      required: "information-only",
      status: "accepted",
    },
    {
      actor: {
        reference: "Practitioner/example",
        display: "Dr Adam Careful",
      },
      required: "required",
      status: "accepted",
    },
    {
      actor: {
        reference: "Practitioner/f202",
        display: "Luigi Maas",
      },
      required: "required",
      status: "accepted",
    },
    {
      actor: {
        display: "Phone Call",
      },
      required: "information-only",
      status: "accepted",
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
