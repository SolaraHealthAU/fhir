import type { Communication } from "../../src/v4.0.1/communication/types";

export const CommunicationExampleFmAttachment: Communication = {
  resourceType: "Communication",
  id: "fm-attachment",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">Attachment which is unsolicited</div>',
  },
  identifier: [
    {
      system: "http://www.providerco.com/communication",
      value: "12345",
    },
  ],
  status: "completed",
  category: [
    {
      coding: [
        {
          system: "http://acme.org/messagetypes",
          code: "SolicitedAttachment",
        },
      ],
    },
  ],
  subject: {
    reference: "Patient/1",
  },
  about: [
    {
      identifier: {
        system: "http://happyvalley.com/claim",
        value: "12345",
      },
    },
    {
      identifier: {
        system: "http://www.BenefitsInc.com/fhir/claimresponse",
        value: "R3500",
      },
    },
  ],
  sent: "2016-06-12T18:01:10-08:00",
  recipient: [
    {
      identifier: {
        system: "http://www.jurisdiction.com/insurer",
        value: "123456",
      },
    },
  ],
  sender: {
    identifier: {
      system: "http://www.jurisdiction.com/provideroffices",
      value: "3456",
    },
  },
  payload: [
    {
      contentAttachment: {
        contentType: "application/pdf",
        data: "SGVsbG8=",
        title: "accident notes 20100201.pdf",
        creation: "2010-02-01T11:50:23-05:00",
      },
    },
    {
      contentAttachment: {
        contentType: "application/pdf",
        url: "http://example.org/docs/AB12345",
        size: 104274,
        hash: "SGVsbG8gdGhlcmU=",
        creation: "2010-02-01T10:57:34+01:00",
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

export const CommunicationExampleFmSolicitedAttachment: Communication = {
  resourceType: "Communication",
  id: "fm-solicited",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">Attachment in response to a Request</div>',
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
      resourceType: "CommunicationRequest",
      id: "request",
      identifier: [
        {
          system: "http://www.jurisdiction.com/insurer/123456",
          value: "ABC123",
        },
      ],
      status: "completed",
      subject: {
        reference: "Patient/1",
      },
    },
  ],
  identifier: [
    {
      system: "http://www.providerco.com/communication",
      value: "12345",
    },
  ],
  basedOn: [
    {
      reference: "#request",
    },
  ],
  status: "completed",
  category: [
    {
      coding: [
        {
          system: "http://acme.org/messagetypes",
          code: "SolicitedAttachment",
        },
      ],
    },
  ],
  subject: {
    reference: "Patient/1",
  },
  sent: "2016-06-12T18:01:10-08:00",
  recipient: [
    {
      reference: "#payor",
    },
  ],
  sender: {
    reference: "#provider",
  },
  payload: [
    {
      contentAttachment: {
        contentType: "application/pdf",
        data: "SGVsbG8=",
        title: "accident notes 20100201.pdf",
        creation: "2010-02-01T11:50:23-05:00",
      },
    },
    {
      contentAttachment: {
        contentType: "application/pdf",
        url: "http://happyvalley.com/docs/AB12345",
        size: 104274,
        hash: "SGVsbG8gdGhlcmU=",
        creation: "2010-02-01T10:57:34+01:00",
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

export const CommunicationExample: Communication = {
  resourceType: "Communication",
  id: "example",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">Patient has very high serum potassium</div>',
  },
  identifier: [
    {
      type: {
        text: "Paging System",
      },
      system: "urn:oid:1.3.4.5.6.7",
      value: "2345678901",
    },
  ],
  instantiatesUri: ["http://example.org/hyperkalemia"],
  partOf: [
    {
      display: "Serum Potassium Observation",
    },
  ],
  status: "completed",
  category: [
    {
      coding: [
        {
          system: "http://acme.org/messagetypes",
          code: "Alert",
        },
      ],
      text: "Alert",
    },
  ],
  medium: [
    {
      coding: [
        {
          system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationMode",
          code: "WRITTEN",
          display: "written",
        },
      ],
      text: "written",
    },
  ],
  subject: {
    reference: "Patient/example",
  },
  encounter: {
    reference: "Encounter/example",
  },
  sent: "2014-12-12T18:01:10-08:00",
  received: "2014-12-12T18:01:11-08:00",
  recipient: [
    {
      reference: "Practitioner/example",
    },
  ],
  sender: {
    reference: "Device/f001",
  },
  payload: [
    {
      contentString:
        "Patient 1 has a very high serum potassium value (7.2 mmol/L on 2014-Dec-12 at 5:55 pm)",
    },
    {
      contentReference: {
        display: "Serum Potassium Observation",
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
