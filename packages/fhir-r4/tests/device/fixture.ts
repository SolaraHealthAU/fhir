import type { Device } from "../../src/v4.0.1/device/types";
import type { DeviceUseStatement } from "../../src/v4.0.1/device/types";

export const DeviceExampleF001Feedingtube: Device = {
  resourceType: "Device",
  id: "f001",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: f001</p><p><b>identifier</b>: 12345</p><p><b>status</b>: active</p></div>',
  },
  identifier: [
    {
      system: "http:/goodhealthhospital/identifier/devices",
      value: "12345",
    },
  ],
  status: "active",
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

export const DeviceExample: Device = {
  resourceType: "Device",
  id: "example",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: example</p><p><b>identifier</b>: 345675</p></div>',
  },
  identifier: [
    {
      system: "http://goodcare.org/devices/id",
      value: "345675",
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

export const DeviceusestatementExample: DeviceUseStatement = {
  resourceType: "DeviceUseStatement",
  id: "example",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: example</p><p><b>identifier</b>: 51ebb7a9-4e3a-4360-9a05-0cc2d869086f</p><p><b>status</b>: active</p><p><b>subject</b>: <a>Patient/example</a></p><p><b>device</b>: <a>Device/example</a></p><p><b>reasonReference</b>: <a>Appendectomy (surgery)</a></p></div>',
  },
  identifier: [
    {
      system: "http:goodhealth.org/identifiers",
      value: "51ebb7a9-4e3a-4360-9a05-0cc2d869086f",
    },
  ],
  status: "active",
  subject: {
    reference: "Patient/example",
  },
  device: {
    reference: "Device/example",
  },
  reasonReference: [
    {
      reference: "Procedure/example",
      display: "Appendectomy (surgery)",
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
