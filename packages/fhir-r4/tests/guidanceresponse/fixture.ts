import type { GuidanceResponse } from "../../src/v4.0.1/guidanceresponse/types";

export const GuidanceresponseExample: GuidanceResponse = {
  resourceType: "GuidanceResponse",
  id: "example",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: example</p><p><b>contained</b>: </p><p><b>requestIdentifier</b>: guidanceRequest1</p><p><b>identifier</b>: guidanceResponse1</p><p><b>module</b>: <a>http://someguidelineprovider.org/radiology-appropriateness-guidelines.html</a></p><p><b>status</b>: success</p><p><b>subject</b>: <a>Patient/example</a></p><p><b>encounter</b>: <a>Encounter/example</a></p><p><b>occurrenceDateTime</b>: 10/03/2017 4:02:00 PM</p><p><b>performer</b>: <a>Device/software</a></p><p><b>reasonCode</b>: Guideline Appropriate Ordering Assessment <span>(Details )</span></p><p><b>outputParameters</b>: id: outputParameters1</p></div>',
  },
  contained: [
    {
      resourceType: "Parameters",
      id: "outputParameters1",
      parameter: [
        {
          name: "score",
          valueDecimal: 7,
        },
        {
          name: "item-assessed",
          valueCodeableConcept: {
            coding: [
              {
                system: "http://www.ama-assn.org/go/cpt",
                code: "70450",
                display: "CT, head, wo iv contrast",
              },
            ],
          },
        },
        {
          name: "device",
          valueReference: {
            reference: "Device/software",
          },
        },
        {
          name: "guideline-followed",
          valueUri:
            "http://someguidelineprovider.org/radiology-appropriateness-guidelines.html",
        },
      ],
    },
  ],
  requestIdentifier: {
    system: "http://example.org",
    value: "guidanceRequest1",
  },
  identifier: [
    {
      system: "http://example.org",
      value: "guidanceResponse1",
    },
  ],
  moduleUri:
    "http://someguidelineprovider.org/radiology-appropriateness-guidelines.html",
  status: "success",
  subject: {
    reference: "Patient/example",
  },
  encounter: {
    reference: "Encounter/example",
  },
  occurrenceDateTime: "2017-03-10T16:02:00Z",
  performer: {
    reference: "Device/software",
  },
  reasonCode: [
    {
      text: "Guideline Appropriate Ordering Assessment",
    },
  ],
  outputParameters: {
    reference: "#outputParameters1",
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
