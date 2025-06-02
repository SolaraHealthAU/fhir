import type { Endpoint } from "../../src/v4.0.1/endpoint/types";

export const EndpointExampleIid: Endpoint = {
  resourceType: "Endpoint",
  id: "example-iid",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n\t\t\tExample of an Imaging IID type endpoint\n\t\t</div>',
  },
  status: "active",
  connectionType: {
    system: "http://terminology.hl7.org/CodeSystem/endpoint-connection-type",
    code: "ihe-iid",
  },
  name: "PACS Hospital Invoke Image Display endpoint",
  payloadType: [
    {
      text: "DICOM IID",
    },
  ],
  address: "https://pacs.hospital.org/IHEInvokeImageDisplay",
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

export const EndpointExampleWadors: Endpoint = {
  resourceType: "Endpoint",
  id: "example-wadors",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n\t\t\tExample of an Imaging DICOM WADO-RS type endpoint\n\t\t</div>',
  },
  status: "active",
  connectionType: {
    system: "http://terminology.hl7.org/CodeSystem/endpoint-connection-type",
    code: "dicom-wado-rs",
  },
  name: "PACS Hospital DICOM WADO-RS endpoint",
  payloadType: [
    {
      text: "DICOM WADO-RS",
    },
  ],
  payloadMimeType: ["application/dicom"],
  address: "https://pacs.hospital.org/wado-rs",
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

export const EndpointExample: Endpoint = {
  resourceType: "Endpoint",
  id: "example",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n\t\t\tHealth Intersections CarePlan Hub<br/>\n\t\t\tCarePlans can be uploaded to/from this loccation\n\t\t</div>',
  },
  identifier: [
    {
      system: "http://example.org/enpoint-identifier",
      value: "epcp12",
    },
  ],
  status: "active",
  connectionType: {
    system: "http://terminology.hl7.org/CodeSystem/endpoint-connection-type",
    code: "hl7-fhir-rest",
  },
  name: "Health Intersections CarePlan Hub",
  managingOrganization: {
    reference: "Organization/hl7",
  },
  contact: [
    {
      system: "email",
      value: "endpointmanager@example.org",
      use: "work",
    },
  ],
  period: {
    start: "2014-09-01",
  },
  payloadType: [
    {
      coding: [
        {
          system: "http://hl7.org/fhir/resource-types",
          code: "CarePlan",
        },
      ],
    },
  ],
  payloadMimeType: ["application/fhir+xml"],
  address: "http://fhir3.healthintersections.com.au/open/CarePlan",
  header: ["bearer-code BASGS534s4"],
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
