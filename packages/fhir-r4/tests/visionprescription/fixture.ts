import type { VisionPrescription } from "../../src/v4.0.1/visionprescription/types";

export const VisionprescriptionExample1: VisionPrescription = {
  resourceType: "VisionPrescription",
  id: "33124",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">Sample Contract Lens prescription</div>',
  },
  identifier: [
    {
      system: "http://www.happysight.com/prescription",
      value: "15014",
    },
  ],
  status: "active",
  created: "2014-06-15",
  patient: {
    reference: "Patient/example",
  },
  encounter: {
    reference: "Encounter/f001",
  },
  dateWritten: "2014-06-15",
  prescriber: {
    reference: "Practitioner/example",
  },
  lensSpecification: [
    {
      product: {
        coding: [
          {
            system:
              "http://terminology.hl7.org/CodeSystem/ex-visionprescriptionproduct",
            code: "contact",
          },
        ],
      },
      eye: "right",
      cylinder: -2.25,
      axis: 160,
      add: 1.75,
      power: -2.75,
      backCurve: 8.7,
      diameter: 14,
      duration: {
        value: 1,
        unit: "month",
        system: "http://unitsofmeasure.org",
        code: "month",
      },
      color: "green",
      brand: "OphthaGuard",
      note: [
        {
          text: "Shade treatment for extreme light sensitivity",
        },
      ],
    },
    {
      product: {
        coding: [
          {
            system:
              "http://terminology.hl7.org/CodeSystem/ex-visionprescriptionproduct",
            code: "contact",
          },
        ],
      },
      eye: "left",
      cylinder: -3.5,
      axis: 160,
      add: 1.75,
      power: -2.75,
      backCurve: 8.7,
      diameter: 14,
      duration: {
        value: 1,
        unit: "month",
        system: "http://unitsofmeasure.org",
        code: "month",
      },
      color: "green",
      brand: "OphthaGuard",
      note: [
        {
          text: "Shade treatment for extreme light sensitivity",
        },
      ],
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

export const VisionprescriptionExample: VisionPrescription = {
  resourceType: "VisionPrescription",
  id: "33123",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n\t\t\t<p>OD -2.00 SPH         +2.00 add    0.5 p.d. BD</p>\n\t\t\t<p>OS -1.00 -0.50 x 180 +2.00 add    0.5 p.d. BU</p>\n\t\t</div>',
  },
  identifier: [
    {
      system: "http://www.happysight.com/prescription",
      value: "15013",
    },
  ],
  status: "active",
  created: "2014-06-15",
  patient: {
    reference: "Patient/example",
  },
  dateWritten: "2014-06-15",
  prescriber: {
    reference: "Practitioner/example",
  },
  lensSpecification: [
    {
      product: {
        coding: [
          {
            system:
              "http://terminology.hl7.org/CodeSystem/ex-visionprescriptionproduct",
            code: "lens",
          },
        ],
      },
      eye: "right",
      sphere: -2,
      prism: [
        {
          amount: 0.5,
          base: "down",
        },
      ],
      add: 2,
    },
    {
      product: {
        coding: [
          {
            system:
              "http://terminology.hl7.org/CodeSystem/ex-visionprescriptionproduct",
            code: "lens",
          },
        ],
      },
      eye: "left",
      sphere: -1,
      cylinder: -0.5,
      axis: 180,
      prism: [
        {
          amount: 0.5,
          base: "up",
        },
      ],
      add: 2,
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
