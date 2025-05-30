import type { ObservationDefinition } from "../../src/v4.0.1/observationdefinition/types";

export const ObservationdefinitionExample: ObservationDefinition = {
  resourceType: "ObservationDefinition",
  id: "example",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: example</p><p><b>code</b>: Glucose [Moles/volume] in Blood <span>(Details : {LOINC code '15074-8' = 'Glucose [Moles/volume] in Blood', given as 'Glucose [Moles/volume] in Blood'})</span></p></div>",
  },
  code: {
    coding: [
      {
        system: "http://loinc.org",
        code: "15074-8",
        display: "Glucose [Moles/volume] in Blood",
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
