import type { DeviceDefinition } from "../../src/v4.0.1/devicedefinition/types";

export const DevicedefinitionExample: DeviceDefinition = {
  resourceType: "DeviceDefinition",
  id: "example",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: example</p><p><b>identifier</b>: 0</p></div>',
  },
  identifier: [
    {
      value: "0",
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
