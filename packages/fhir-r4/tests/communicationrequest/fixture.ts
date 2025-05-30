import type { CommunicationRequest } from "../../src/v4.0.1/communicationrequest/types";

export const CommunicationrequestExampleFmSolicitAttachment: CommunicationRequest =
  {
    resourceType: "CommunicationRequest",
    id: "fm-solicit",
    text: {
      status: "generated",
      div: '<div xmlns="http://www.w3.org/1999/xhtml">Request for Accident Report</div>',
    },
    contained: [
      {
        resourceType: "Organization",
        id: "provider",
        identifier: [
          {
            system: "http://www.jurisdiction.com/provideroffices",
            value: "3456",
          },
        ],
      },
      {
        resourceType: "Organization",
        id: "payor",
        identifier: [
          {
            system: "http://www.jurisdiction.com/insurer",
            value: "123456",
          },
        ],
      },
      {
        resourceType: "Practitioner",
        id: "requester",
        identifier: [
          {
            value: "6789",
          },
        ],
      },
    ],
    identifier: [
      {
        system: "http://www.jurisdiction.com/insurer/123456",
        value: "ABC123",
      },
    ],
    basedOn: [
      {
        display: "EligibilityRequest",
      },
    ],
    replaces: [
      {
        display: "prior CommunicationRequest",
      },
    ],
    groupIdentifier: {
      value: "12345",
    },
    status: "active",
    category: [
      {
        coding: [
          {
            system: "http://acme.org/messagetypes",
            code: "SolicitedAttachmentRequest",
          },
        ],
      },
    ],
    priority: "routine",
    medium: [
      {
        coding: [
          {
            system:
              "http://terminology.hl7.org/CodeSystem/v3-ParticipationMode",
            code: "WRITTEN",
            display: "written",
          },
        ],
        text: "written",
      },
    ],
    encounter: {
      reference: "Encounter/example",
    },
    payload: [
      {
        contentString:
          "Please provide the accident report and any associated pictures to support your Claim# DEF5647.",
      },
    ],
    occurrenceDateTime: "2016-06-10T11:01:10-08:00",
    authoredOn: "2016-06-10T11:01:10-08:00",
    requester: {
      reference: "#requester",
    },
    recipient: [
      {
        reference: "#provider",
      },
    ],
    sender: {
      reference: "#payor",
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

export const CommunicationrequestExample: CommunicationRequest = {
  resourceType: "CommunicationRequest",
  id: "example",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">To be filled out at a later time</div>',
  },
  status: "active",
  subject: {
    reference: "Patient/example",
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
