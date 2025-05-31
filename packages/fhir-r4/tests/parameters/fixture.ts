import type { Parameters } from "../../src/v4.0.1/parameters/types";

export const ParametersExample: Parameters = {
  resourceType: "Parameters",
  parameter: [
    {
      name: "exact",
      valueBoolean: true,
    },
    {
      name: "property",
      part: [
        {
          name: "code",
          valueCode: "focus",
        },
        {
          name: "value",
          valueCode: "top",
        },
      ],
    },
    {
      name: "patient",
      resource: {
        resourceType: "Patient",
        id: "example",
        name: [
          {
            use: "official",
            family: "Chalmers",
            given: ["Peter", "James"],
          },
        ],
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
