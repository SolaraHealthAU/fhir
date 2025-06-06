import type { ClinicalImpression } from "../../src/v4.0.1/clinicalimpression/types";

export const ClinicalimpressionExample: ClinicalImpression = {
  resourceType: "ClinicalImpression",
  id: "example",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: example</p><p><b>identifier</b>: 12345</p><p><b>status</b>: completed</p><p><b>description</b>: This 26 yo male patient is brought into ER by ambulance after being involved in a motor vehicle accident</p><p><b>subject</b>: <a>Patient/example</a></p><p><b>encounter</b>: <a>Encounter/example</a></p><p><b>effective</b>: 06/12/2014 8:00:00 PM --&gt; 06/12/2014 10:33:00 PM</p><p><b>date</b>: 06/12/2014 10:33:00 PM</p><p><b>assessor</b>: <a>Practitioner/example</a></p><p><b>problem</b>: MVA</p><h3>Investigations</h3><table><tr><td>-</td><td><b>Code</b></td><td><b>Item</b></td></tr><tr><td>*</td><td>Initial Examination <span>(Details )</span></td><td>deep laceration of the scalp (left temporo-occipital)</td></tr></table><p><b>summary</b>: provisional diagnoses of laceration of head and traumatic brain injury (TBI)</p><h3>Findings</h3><table><tr><td>-</td><td><b>ItemCodeableConcept</b></td></tr><tr><td>*</td><td>850.0 <span>(Details : {ICD-9 code '850.0' = '850.0)</span></td></tr></table></div>",
  },
  identifier: [
    {
      value: "12345",
    },
  ],
  status: "completed",
  description:
    "This 26 yo male patient is brought into ER by ambulance after being involved in a motor vehicle accident",
  subject: {
    reference: "Patient/example",
  },
  encounter: {
    reference: "Encounter/example",
  },
  effectivePeriod: {
    start: "2014-12-06T20:00:00+11:00",
    end: "2014-12-06T22:33:00+11:00",
  },
  date: "2014-12-06T22:33:00+11:00",
  assessor: {
    reference: "Practitioner/example",
  },
  problem: [
    {
      display: "MVA",
    },
  ],
  investigation: [
    {
      code: {
        text: "Initial Examination",
      },
      item: [
        {
          display: "deep laceration of the scalp (left temporo-occipital)",
        },
        {
          display: "decreased level of consciousness",
        },
        {
          display: "disoriented to time and place",
        },
        {
          display: "restless",
        },
      ],
    },
  ],
  summary:
    "provisional diagnoses of laceration of head and traumatic brain injury (TBI)",
  finding: [
    {
      itemCodeableConcept: {
        coding: [
          {
            system: "http://hl7.org/fhir/sid/icd-9",
            code: "850.0",
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
