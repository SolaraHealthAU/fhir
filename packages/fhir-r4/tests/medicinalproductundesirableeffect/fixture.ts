import type { MedicinalProductUndesirableEffect } from "../../src/v4.0.1/medicinalproductundesirableeffect/types";

export const MedicinalproductundesirableeffectExample: MedicinalProductUndesirableEffect =
  {
    resourceType: "MedicinalProductUndesirableEffect",
    id: "example",
    text: {
      status: "generated",
      div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: example</p><p><b>symptomConditionEffect</b>: Prevention of\\nVTE in adult\\npatients who have\\nundergone\\nelective hip or\\nknee replacement\\nsurgery (VTEp) <span>(Details : {http://ema.europa.eu/example/undesirableeffectassymptom-condition-effect code 'Anaemia' = 'Anaemia)</span></p><p><b>classification</b>: Bloodandlymphaticsystemdisorders <span>(Details : {http://ema.europa.eu/example/symptom-condition-effectclassification code 'Bloodandlymphaticsystemdisorders' = 'Bloodandlymphaticsystemdisorders)</span></p><p><b>frequencyOfOccurrence</b>: Common <span>(Details : {http://ema.europa.eu/example/frequencyofoccurrence code 'Common' = 'Common)</span></p></div>",
    },
    symptomConditionEffect: {
      coding: [
        {
          system:
            "http://ema.europa.eu/example/undesirableeffectassymptom-condition-effect",
          code: "Anaemia",
        },
      ],
      text: "Prevention of\\nVTE in adult\\npatients who have\\nundergone\\nelective hip or\\nknee replacement\\nsurgery (VTEp)",
    },
    classification: {
      coding: [
        {
          system:
            "http://ema.europa.eu/example/symptom-condition-effectclassification",
          code: "Bloodandlymphaticsystemdisorders",
        },
      ],
    },
    frequencyOfOccurrence: {
      coding: [
        {
          system: "http://ema.europa.eu/example/frequencyofoccurrence",
          code: "Common",
        },
      ],
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
