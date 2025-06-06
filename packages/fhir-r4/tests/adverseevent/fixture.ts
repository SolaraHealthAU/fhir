import type { AdverseEvent } from "../../src/v4.0.1/adverseevent/types";

export const AdverseeventExample: AdverseEvent = {
  resourceType: "AdverseEvent",
  id: "example",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: example</p><p><b>identifier</b>: 49476534</p><p><b>actuality</b>: actual</p><p><b>category</b>: Product Use Error <span>(Details : {http://terminology.hl7.org/CodeSystem/adverse-event-category code 'product-use-error' = 'Product Use Error', given as 'Product Use Error'})</span></p><p><b>event</b>: This was a mild rash on the left forearm <span>(Details : {SNOMED CT code '304386008' = 'O/E - itchy rash', given as 'O/E - itchy rash'})</span></p><p><b>subject</b>: <a>Patient/example</a></p><p><b>date</b>: 29/01/2017 12:34:56 PM</p><p><b>seriousness</b>: Non-serious <span>(Details : {http://terminology.hl7.org/CodeSystem/adverse-event-seriousness code 'Non-serious' = 'Non-serious', given as 'Non-serious'})</span></p><p><b>severity</b>: Mild <span>(Details : {http://terminology.hl7.org/CodeSystem/adverse-event-severity code 'mild' = 'Mild', given as 'Mild'})</span></p><p><b>recorder</b>: <a>Practitioner/example</a></p><h3>SuspectEntities</h3><table><tr><td>-</td><td><b>Instance</b></td></tr><tr><td>*</td><td><a>Medication/example</a></td></tr></table></div>",
  },
  identifier: {
    system: "http://acme.com/ids/patients/risks",
    value: "49476534",
  },
  actuality: "actual",
  category: [
    {
      coding: [
        {
          system:
            "http://terminology.hl7.org/CodeSystem/adverse-event-category",
          code: "product-use-error",
          display: "Product Use Error",
        },
      ],
    },
  ],
  event: {
    coding: [
      {
        system: "http://snomed.info/sct",
        code: "304386008",
        display: "O/E - itchy rash",
      },
    ],
    text: "This was a mild rash on the left forearm",
  },
  subject: {
    reference: "Patient/example",
  },
  date: "2017-01-29T12:34:56+00:00",
  seriousness: {
    coding: [
      {
        system:
          "http://terminology.hl7.org/CodeSystem/adverse-event-seriousness",
        code: "Non-serious",
        display: "Non-serious",
      },
    ],
  },
  severity: {
    coding: [
      {
        system: "http://terminology.hl7.org/CodeSystem/adverse-event-severity",
        code: "mild",
        display: "Mild",
      },
    ],
  },
  recorder: {
    reference: "Practitioner/example",
  },
  suspectEntity: [
    {
      instance: {
        reference: "Medication/example",
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
