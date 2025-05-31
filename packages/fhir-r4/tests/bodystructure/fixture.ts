import type { BodyStructure } from "../../src/v4.0.1/bodystructure/types";

export const BodystructureExampleFetus: BodyStructure = {
  resourceType: "BodyStructure",
  id: "fetus",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: fetus</p><p><b>identifier</b>: 12345</p><p><b>location</b>: Fetus <span>(Details : {SNOMED CT code '83418008' = 'Fetus', given as 'Entire fetus (body structure)'})</span></p><p><b>description</b>: EDD 1/1/2017 confirmation by LMP</p><p><b>patient</b>: <a>Patient/example</a></p></div>",
  },
  identifier: [
    {
      system: "http://goodhealth.org/bodystructure/identifiers",
      value: "12345",
    },
  ],
  location: {
    coding: [
      {
        system: "http://snomed.info/sct",
        code: "83418008",
        display: "Entire fetus (body structure)",
      },
    ],
    text: "Fetus",
  },
  description: "EDD 1/1/2017 confirmation by LMP",
  patient: {
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

export const BodystructureExampleSkinPatch: BodyStructure = {
  resourceType: "BodyStructure",
  id: "skin-patch",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: skin-patch</p><p><b>identifier</b>: 12345</p><p><b>active</b>: false</p><p><b>morphology</b>: Skin patch <span>(Details )</span></p><p><b>location</b>: Forearm <span>(Details : {SNOMED CT code '14975008' = 'Forearm', given as 'Forearm'})</span></p><p><b>locationQualifier</b>: Left <span>(Details : {SNOMED CT code '419161000' = 'Unilateral left', given as 'Unilateral left'})</span>, Volar <span>(Details : {SNOMED CT code '263929005' = 'Volar', given as 'Volar'})</span></p><p><b>description</b>: inner surface (volar) of the left forearm</p><p><b>patient</b>: <a>Patient/example</a></p></div>",
  },
  identifier: [
    {
      system: "http://goodhealth.org/bodystructure/identifiers",
      value: "12345",
    },
  ],
  active: false,
  morphology: {
    text: "Skin patch",
  },
  location: {
    coding: [
      {
        system: "http://snomed.info/sct",
        code: "14975008",
        display: "Forearm",
      },
    ],
    text: "Forearm",
  },
  locationQualifier: [
    {
      coding: [
        {
          system: "http://snomed.info/sct",
          code: "419161000",
          display: "Unilateral left",
        },
      ],
      text: "Left",
    },
    {
      coding: [
        {
          system: "http://snomed.info/sct",
          code: "263929005",
          display: "Volar",
        },
      ],
      text: "Volar",
    },
  ],
  description: "inner surface (volar) of the left forearm",
  patient: {
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

export const BodystructureExampleTumor: BodyStructure = {
  resourceType: "BodyStructure",
  id: "tumor",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: tumor</p><p><b>identifier</b>: 12345</p><p><b>morphology</b>: Splenic mass <span>(Details : {SNOMED CT code '4147007' = 'Mass', given as 'Mass (morphologic abnormality)'})</span></p><p><b>location</b>: Spleen <span>(Details : {SNOMED CT code '78961009' = 'Spleen', given as 'Splenic structure (body structure)'})</span></p><p><b>description</b>: 7 cm maximum diameter</p><p><b>image</b>: </p><p><b>patient</b>: <a>Patient/example</a></p></div>",
  },
  identifier: [
    {
      system: "http://goodhealth.org/bodystructure/identifiers",
      value: "12345",
    },
  ],
  morphology: {
    coding: [
      {
        system: "http://snomed.info/sct",
        code: "4147007",
        display: "Mass (morphologic abnormality)",
      },
    ],
    text: "Splenic mass",
  },
  location: {
    coding: [
      {
        system: "http://snomed.info/sct",
        code: "78961009",
        display: "Splenic structure (body structure)",
      },
    ],
    text: "Spleen",
  },
  description: "7 cm maximum diameter",
  image: [
    {
      contentType: "application/dicom",
      url: "http://imaging.acme.com/wado/server?requestType=WADO&amp;wado_details",
    },
  ],
  patient: {
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
