import type { DeviceRequest } from "../../src/v4.0.1/devicerequest/types";

export const DevicerequestExampleInsulinpump: DeviceRequest = {
  resourceType: "DeviceRequest",
  id: "insulinpump",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: insulinpump</p><p><b>identifier</b>: ip_request1.1</p><p><b>instantiatesCanonical</b>: <a>http://motivemi.com/artifacts/PlanDefinition/low-suicide-risk-order-set</a></p><p><b>basedOn</b>: Homecare - DM follow-up</p><p><b>priorRequest</b>: CGM ambulatory</p><p><b>groupIdentifier</b>: ip_request1</p><p><b>status</b>: active</p><p><b>intent</b>: instance-order</p><p><b>priority</b>: routine</p><p><b>code</b>: Insulin delivery device panel <span>(Details : {LOINC code '43148-6' = 'Insulin delivery device panel)</span></p><p><b>subject</b>: <a>Patient/dicom</a></p><p><b>encounter</b>: Encounter 1</p><p><b>occurrence</b>: 08/05/2013 9:33:27 AM</p><p><b>authoredOn</b>: 08/05/2013 9:33:27 AM</p><p><b>requester</b>: <a>Dr. Adam Careful</a></p><p><b>performerType</b>: Nurse <span>(Details : {[not stated] code 'null' = 'null', given as 'Qualified nurse'})</span></p><p><b>performer</b>: Nurse Rossignol</p><p><b>reasonCode</b>: gastroparesis <span>(Details )</span></p><p><b>reasonReference</b>: Gastroparesis</p><p><b>supportingInfo</b>: Previous results</p><p><b>note</b>: this is the right device brand and model</p><p><b>relevantHistory</b>: Request for unspecified device</p></div>",
  },
  identifier: [
    {
      value: "ip_request1.1",
    },
  ],
  instantiatesCanonical: [
    "http://motivemi.com/artifacts/PlanDefinition/low-suicide-risk-order-set",
  ],
  basedOn: [
    {
      display: "Homecare - DM follow-up",
    },
  ],
  priorRequest: [
    {
      display: "CGM ambulatory",
    },
  ],
  groupIdentifier: {
    value: "ip_request1",
  },
  status: "active",
  intent: "instance-order",
  priority: "routine",
  codeCodeableConcept: {
    coding: [
      {
        system: "http://loinc.org",
        code: "43148-6",
      },
    ],
    text: "Insulin delivery device panel",
  },
  subject: {
    reference: "Patient/dicom",
  },
  encounter: {
    display: "Encounter 1",
  },
  occurrenceDateTime: "2013-05-08T09:33:27+07:00",
  authoredOn: "2013-05-08T09:33:27+07:00",
  requester: {
    reference: "Practitioner/example",
    display: "Dr. Adam Careful",
  },
  performerType: {
    coding: [
      {
        display: "Qualified nurse",
      },
    ],
    text: "Nurse",
  },
  performer: {
    display: "Nurse Rossignol",
  },
  reasonCode: [
    {
      text: "gastroparesis",
    },
  ],
  reasonReference: [
    {
      display: "Gastroparesis",
    },
  ],
  supportingInfo: [
    {
      display: "Previous results",
    },
  ],
  note: [
    {
      text: "this is the right device brand and model",
    },
  ],
  relevantHistory: [
    {
      display: "Request for unspecified device",
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

export const DevicerequestExample: DeviceRequest = {
  resourceType: "DeviceRequest",
  id: "example",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: example</p><p><b>status</b>: completed</p><p><b>intent</b>: original-order</p><p><b>code</b>: <a>Device/example</a></p><p><b>subject</b>: <a>Patient/example</a></p></div>',
  },
  status: "completed",
  intent: "original-order",
  codeReference: {
    reference: "Device/example",
  },
  subject: {
    reference: "Patient/example",
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

export const DevicerequestLeftLens: DeviceRequest = {
  resourceType: "DeviceRequest",
  id: "left-lens",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: left-lens</p><p><b>identifier</b>: 15013L</p><p><b>groupIdentifier</b>: 15013</p><p><b>status</b>: completed</p><p><b>intent</b>: original-order</p><p><b>code</b>: Lens <span>(Details : {http://terminology.hl7.org/CodeSystem/ex-visionprescriptionproduct code 'lens' = 'Lens)</span></p><blockquote><p><b>parameter</b></p><p><b>code</b>: sphere, left lens <span>(Details : {LOINC code '28842-3' = 'Sphere distance Glasses prescription.lens - left', given as 'Sphere distance Glasses prescription.lens - left'})</span></p><p><b>value</b>: -1.00 Diopter<span> (Details: UCUM code [diop] = 'diop')</span></p></blockquote><blockquote><p><b>parameter</b></p><p><b>code</b>: cylinder, left lens <span>(Details : {LOINC code '28843-1' = 'Cylinder distance Glasses prescription.lens - left', given as 'Cylinder base distance Glasses prescription.lens - left'})</span></p><p><b>value</b>: -0.50 Diopter<span> (Details: UCUM code [diop] = 'diop')</span></p></blockquote><blockquote><p><b>parameter</b></p><p><b>code</b>: axis, left lens <span>(Details : {LOINC code '28844-9' = 'Axis distance Glasses prescription.lens - left', given as ' Axis distance Glasses prescription.lens - left'})</span></p><p><b>value</b>: 180 Degrees<span> (Details: UCUM code deg = 'deg')</span></p></blockquote><p><b>subject</b>: <a>Patient/example</a></p><p><b>occurrence</b>: 15/06/2014</p><p><b>requester</b>: <a>Practitioner/example</a></p></div>",
  },
  identifier: [
    {
      system: "http://www.happysight.com/prescription",
      value: "15013L",
    },
  ],
  groupIdentifier: {
    system: "http://acme.org",
    value: "15013",
  },
  status: "completed",
  intent: "original-order",
  codeCodeableConcept: {
    coding: [
      {
        system:
          "http://terminology.hl7.org/CodeSystem/ex-visionprescriptionproduct",
        code: "lens",
      },
    ],
  },
  parameter: [
    {
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "28842-3",
            display: "Sphere distance Glasses prescription.lens - left",
          },
        ],
        text: "sphere, left lens",
      },
      valueQuantity: {
        value: -1,
        unit: "Diopter",
        system: "http://unitsofmeasure.org",
        code: "[diop]",
      },
    },
    {
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "28843-1",
            display: "Cylinder base distance Glasses prescription.lens - left",
          },
        ],
        text: "cylinder, left lens",
      },
      valueQuantity: {
        value: -0.5,
        unit: "Diopter",
        system: "http://unitsofmeasure.org",
        code: "[diop]",
      },
    },
    {
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "28844-9",
            display: " Axis distance Glasses prescription.lens - left",
          },
        ],
        text: "axis, left lens",
      },
      valueQuantity: {
        value: 180,
        unit: "Degrees",
        system: "http://unitsofmeasure.org",
        code: "deg",
      },
    },
  ],
  subject: {
    reference: "Patient/example",
  },
  occurrenceDateTime: "2014-06-15",
  requester: {
    reference: "Practitioner/example",
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

export const DevicerequestRightLens: DeviceRequest = {
  resourceType: "DeviceRequest",
  id: "right-lens",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: right-lens</p><p><b>identifier</b>: 15013R</p><p><b>groupIdentifier</b>: 15013</p><p><b>status</b>: completed</p><p><b>intent</b>: original-order</p><p><b>code</b>: Lens <span>(Details : {http://terminology.hl7.org/CodeSystem/ex-visionprescriptionproduct code 'lens' = 'Lens)</span></p><blockquote><p><b>parameter</b></p><p><b>code</b>: sphere, right lens <span>(Details : {LOINC code '28826-6' = 'Sphere distance Glasses prescription.lens - right', given as 'Sphere distance Glasses prescription.lens - right'})</span></p><p><b>value</b>: -2.00 Diopter<span> (Details: UCUM code [diop] = 'diop')</span></p></blockquote><blockquote><p><b>parameter</b></p><p><b>code</b>: prisms, right lens <span>(Details : {LOINC code '28829-0' = 'Prism base distance Glasses prescription.lens - right', given as 'Prism base distance Glasses prescription.lens - right'})</span></p><p><b>value</b>: -2.00 Diopter<span> (Details: UCUM code [diop] = 'diop')</span></p></blockquote><blockquote><p><b>parameter</b></p><p><b>code</b>: add, right lens <span>(Details : {LOINC code '28810-0' = 'Add 1 LM glasses lens - right', given as 'Add 1 LM glasses lens - right'})</span></p><p><b>value</b>: 2.00 Diopter<span> (Details: UCUM code [diop] = 'diop')</span></p></blockquote><p><b>subject</b>: <a>Patient/example</a></p><p><b>occurrence</b>: 15/06/2014</p><p><b>requester</b>: <a>Practitioner/example</a></p></div>",
  },
  identifier: [
    {
      system: "http://www.happysight.com/prescription",
      value: "15013R",
    },
  ],
  groupIdentifier: {
    system: "http://acme.org",
    value: "15013",
  },
  status: "completed",
  intent: "original-order",
  codeCodeableConcept: {
    coding: [
      {
        system:
          "http://terminology.hl7.org/CodeSystem/ex-visionprescriptionproduct",
        code: "lens",
      },
    ],
  },
  parameter: [
    {
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "28826-6",
            display: "Sphere distance Glasses prescription.lens - right",
          },
        ],
        text: "sphere, right lens",
      },
      valueQuantity: {
        value: -2,
        unit: "Diopter",
        system: "http://unitsofmeasure.org",
        code: "[diop]",
      },
    },
    {
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "28829-0",
            display: "Prism base distance Glasses prescription.lens - right",
          },
        ],
        text: "prisms, right lens",
      },
      valueQuantity: {
        value: -2,
        unit: "Diopter",
        system: "http://unitsofmeasure.org",
        code: "[diop]",
      },
    },
    {
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "28810-0",
            display: "Add 1 LM glasses lens - right",
          },
        ],
        text: "add, right lens",
      },
      valueQuantity: {
        value: 2,
        unit: "Diopter",
        system: "http://unitsofmeasure.org",
        code: "[diop]",
      },
    },
  ],
  subject: {
    reference: "Patient/example",
  },
  occurrenceDateTime: "2014-06-15",
  requester: {
    reference: "Practitioner/example",
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
