import type { AppointmentResponse } from "../../src/v4.0.1/appointmentresponse/types";

export const AppointmentresponseExampleReq: AppointmentResponse = {
  resourceType: "AppointmentResponse",
  id: "exampleresp",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">Accept Brian MRI results discussion</div>',
  },
  identifier: [
    {
      system: "http://example.org/sampleappointmentresponse-identifier",
      value: "response123",
    },
  ],
  appointment: {
    reference: "Appointment/examplereq",
    display: "Brian MRI results discussion",
  },
  start: "2013-12-25T13:15:00Z",
  end: "2013-12-25T13:30:00Z",
  participantType: [
    {
      coding: [
        {
          system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
          code: "ATND",
        },
      ],
    },
  ],
  actor: {
    reference: "Practitioner/example",
    display: "Dr Adam Careful",
  },
  participantStatus: "tentative",
  comment: "can't we try for this time, can't do mornings",
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

export const AppointmentresponseExample: AppointmentResponse = {
  resourceType: "AppointmentResponse",
  id: "example",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">Accept Brian MRI results discussion</div>',
  },
  appointment: {
    reference: "Appointment/example",
    display: "Brian MRI results discussion",
  },
  actor: {
    reference: "Patient/example",
    display: "Peter James Chalmers",
  },
  participantStatus: "accepted",
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
