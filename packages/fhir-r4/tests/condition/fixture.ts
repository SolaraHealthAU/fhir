import type { Condition } from "../../src/v4.0.1/condition/types";

export const ConditionExampleF001Heart: Condition = {
  resourceType: "Condition",
  id: "f001",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: f001</p><p><b>clinicalStatus</b>: Active <span>(Details : {http://terminology.hl7.org/CodeSystem/condition-clinical code 'active' = 'Active)</span></p><p><b>verificationStatus</b>: Confirmed <span>(Details : {http://terminology.hl7.org/CodeSystem/condition-ver-status code 'confirmed' = 'Confirmed)</span></p><p><b>category</b>: diagnosis <span>(Details : {SNOMED CT code '439401001' = 'Diagnosis', given as 'diagnosis'})</span></p><p><b>severity</b>: Moderate <span>(Details : {SNOMED CT code '6736007' = 'Moderate', given as 'Moderate'})</span></p><p><b>code</b>: Heart valve disorder <span>(Details : {SNOMED CT code '368009' = 'Heart valve disorder', given as 'Heart valve disorder'})</span></p><p><b>bodySite</b>: heart structure <span>(Details : {SNOMED CT code '40768004' = 'Left thorax', given as 'Left thorax'})</span></p><p><b>subject</b>: <a>P. van de Heuvel</a></p><p><b>encounter</b>: <a>Encounter/f001</a></p><p><b>onset</b>: 05/08/2011</p><p><b>recordedDate</b>: 05/10/2011</p><p><b>asserter</b>: <a>P. van de Heuvel</a></p><h3>Evidences</h3><table><tr><td>-</td><td><b>Code</b></td></tr><tr><td>*</td><td>Cardiac chest pain <span>(Details : {SNOMED CT code '426396005' = 'Cardiac chest pain', given as 'Cardiac chest pain'})</span></td></tr></table></div>",
  },
  clinicalStatus: {
    coding: [
      {
        system: "http://terminology.hl7.org/CodeSystem/condition-clinical",
        code: "active",
      },
    ],
  },
  verificationStatus: {
    coding: [
      {
        system: "http://terminology.hl7.org/CodeSystem/condition-ver-status",
        code: "confirmed",
      },
    ],
  },
  category: [
    {
      coding: [
        {
          system: "http://snomed.info/sct",
          code: "439401001",
          display: "diagnosis",
        },
      ],
    },
  ],
  severity: {
    coding: [
      {
        system: "http://snomed.info/sct",
        code: "6736007",
        display: "Moderate",
      },
    ],
  },
  code: {
    coding: [
      {
        system: "http://snomed.info/sct",
        code: "368009",
        display: "Heart valve disorder",
      },
    ],
  },
  bodySite: [
    {
      coding: [
        {
          system: "http://snomed.info/sct",
          code: "40768004",
          display: "Left thorax",
        },
      ],
      text: "heart structure",
    },
  ],
  subject: {
    reference: "Patient/f001",
    display: "P. van de Heuvel",
  },
  encounter: {
    reference: "Encounter/f001",
  },
  onsetDateTime: "2011-08-05",
  recordedDate: "2011-10-05",
  asserter: {
    reference: "Patient/f001",
    display: "P. van de Heuvel",
  },
  evidence: [
    {
      code: [
        {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "426396005",
              display: "Cardiac chest pain",
            },
          ],
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

export const ConditionExampleF002Lung: Condition = {
  resourceType: "Condition",
  id: "f002",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: f002</p><p><b>clinicalStatus</b>: Active <span>(Details : {http://terminology.hl7.org/CodeSystem/condition-clinical code 'active' = 'Active)</span></p><p><b>verificationStatus</b>: Confirmed <span>(Details : {http://terminology.hl7.org/CodeSystem/condition-ver-status code 'confirmed' = 'Confirmed)</span></p><p><b>category</b>: diagnosis <span>(Details : {SNOMED CT code '439401001' = 'Diagnosis', given as 'diagnosis'})</span></p><p><b>severity</b>: Severe <span>(Details : {SNOMED CT code '24484000' = 'Severe', given as 'Severe'})</span></p><p><b>code</b>: NSCLC - Non-small cell lung cancer <span>(Details : {SNOMED CT code '254637007' = 'Non-small cell lung cancer', given as 'NSCLC - Non-small cell lung cancer'})</span></p><p><b>bodySite</b>: Thorax <span>(Details : {SNOMED CT code '51185008' = 'Thorax', given as 'Thorax'})</span></p><p><b>subject</b>: <a>P. van de Heuvel</a></p><p><b>encounter</b>: <a>Encounter/f002</a></p><p><b>onset</b>: 05/05/2011</p><p><b>recordedDate</b>: 03/06/2012</p><p><b>asserter</b>: <a>P. van de Heuvel</a></p><h3>Stages</h3><table><tr><td>-</td><td><b>Summary</b></td><td><b>Type</b></td></tr><tr><td>*</td><td>stage II <span>(Details : {SNOMED CT code '258219007' = 'Stage 2', given as 'stage II'})</span></td><td>Clinical staging (qualifier value) <span>(Details : {SNOMED CT code '260998006' = 'cS - Clinical staging', given as 'Clinical staging (qualifier value)'})</span></td></tr></table><h3>Evidences</h3><table><tr><td>-</td><td><b>Code</b></td></tr><tr><td>*</td><td>CT of thorax <span>(Details : {SNOMED CT code '169069000' = 'CT of chest', given as 'CT of thorax'})</span></td></tr></table></div>",
  },
  clinicalStatus: {
    coding: [
      {
        system: "http://terminology.hl7.org/CodeSystem/condition-clinical",
        code: "active",
      },
    ],
  },
  verificationStatus: {
    coding: [
      {
        system: "http://terminology.hl7.org/CodeSystem/condition-ver-status",
        code: "confirmed",
      },
    ],
  },
  category: [
    {
      coding: [
        {
          system: "http://snomed.info/sct",
          code: "439401001",
          display: "diagnosis",
        },
      ],
    },
  ],
  severity: {
    coding: [
      {
        system: "http://snomed.info/sct",
        code: "24484000",
        display: "Severe",
      },
    ],
  },
  code: {
    coding: [
      {
        system: "http://snomed.info/sct",
        code: "254637007",
        display: "NSCLC - Non-small cell lung cancer",
      },
    ],
  },
  bodySite: [
    {
      coding: [
        {
          system: "http://snomed.info/sct",
          code: "51185008",
          display: "Thorax",
        },
      ],
    },
  ],
  subject: {
    reference: "Patient/f001",
    display: "P. van de Heuvel",
  },
  encounter: {
    reference: "Encounter/f002",
  },
  onsetDateTime: "2011-05-05",
  recordedDate: "2012-06-03",
  asserter: {
    reference: "Patient/f001",
    display: "P. van de Heuvel",
  },
  stage: [
    {
      summary: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "258219007",
            display: "stage II",
          },
        ],
      },
      type: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "260998006",
            display: "Clinical staging (qualifier value)",
          },
        ],
      },
    },
  ],
  evidence: [
    {
      code: [
        {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "169069000",
              display: "CT of thorax",
            },
          ],
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

export const ConditionExampleF003Abscess: Condition = {
  resourceType: "Condition",
  id: "f003",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: f003</p><p><b>clinicalStatus</b>: Active <span>(Details : {http://terminology.hl7.org/CodeSystem/condition-clinical code 'active' = 'Active)</span></p><p><b>verificationStatus</b>: Confirmed <span>(Details : {http://terminology.hl7.org/CodeSystem/condition-ver-status code 'confirmed' = 'Confirmed)</span></p><p><b>category</b>: diagnosis <span>(Details : {SNOMED CT code '439401001' = 'Diagnosis', given as 'diagnosis'})</span></p><p><b>severity</b>: Mild to moderate <span>(Details : {SNOMED CT code '371923003' = 'Mild to moderate', given as 'Mild to moderate'})</span></p><p><b>code</b>: Retropharyngeal abscess <span>(Details : {SNOMED CT code '18099001' = 'Retropharyngeal abscess', given as 'Retropharyngeal abscess'})</span></p><p><b>bodySite</b>: Entire retropharyngeal area <span>(Details : {SNOMED CT code '280193007' = 'Retropharyngeal space', given as 'Entire retropharyngeal area'})</span></p><p><b>subject</b>: <a>P. van de Heuvel</a></p><p><b>encounter</b>: <a>Encounter/f003</a></p><p><b>onset</b>: 27/02/2012</p><p><b>recordedDate</b>: 20/02/2012</p><p><b>asserter</b>: <a>P. van de Heuvel</a></p><h3>Evidences</h3><table><tr><td>-</td><td><b>Code</b></td></tr><tr><td>*</td><td>CT of neck <span>(Details : {SNOMED CT code '169068008' = 'CT of neck', given as 'CT of neck'})</span></td></tr></table></div>",
  },
  clinicalStatus: {
    coding: [
      {
        system: "http://terminology.hl7.org/CodeSystem/condition-clinical",
        code: "active",
      },
    ],
  },
  verificationStatus: {
    coding: [
      {
        system: "http://terminology.hl7.org/CodeSystem/condition-ver-status",
        code: "confirmed",
      },
    ],
  },
  category: [
    {
      coding: [
        {
          system: "http://snomed.info/sct",
          code: "439401001",
          display: "diagnosis",
        },
      ],
    },
  ],
  severity: {
    coding: [
      {
        system: "http://snomed.info/sct",
        code: "371923003",
        display: "Mild to moderate",
      },
    ],
  },
  code: {
    coding: [
      {
        system: "http://snomed.info/sct",
        code: "18099001",
        display: "Retropharyngeal abscess",
      },
    ],
  },
  bodySite: [
    {
      coding: [
        {
          system: "http://snomed.info/sct",
          code: "280193007",
          display: "Entire retropharyngeal area",
        },
      ],
    },
  ],
  subject: {
    reference: "Patient/f001",
    display: "P. van de Heuvel",
  },
  encounter: {
    reference: "Encounter/f003",
  },
  onsetDateTime: "2012-02-27",
  recordedDate: "2012-02-20",
  asserter: {
    reference: "Patient/f001",
    display: "P. van de Heuvel",
  },
  evidence: [
    {
      code: [
        {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "169068008",
              display: "CT of neck",
            },
          ],
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

export const ConditionExampleF201Fever: Condition = {
  resourceType: "Condition",
  id: "f201",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: f201</p><p><b>identifier</b>: 12345</p><p><b>clinicalStatus</b>: Resolved <span>(Details : {http://terminology.hl7.org/CodeSystem/condition-clinical code 'resolved' = 'Resolved)</span></p><p><b>verificationStatus</b>: Confirmed <span>(Details : {http://terminology.hl7.org/CodeSystem/condition-ver-status code 'confirmed' = 'Confirmed)</span></p><p><b>category</b>: Problem <span>(Details : {SNOMED CT code '55607006' = 'Problem', given as 'Problem'}; {http://terminology.hl7.org/CodeSystem/condition-category code 'problem-list-item' = 'Problem List Item)</span></p><p><b>severity</b>: Mild <span>(Details : {SNOMED CT code '255604002' = 'Mild', given as 'Mild'})</span></p><p><b>code</b>: Fever <span>(Details : {SNOMED CT code '386661006' = 'Fever', given as 'Fever'})</span></p><p><b>bodySite</b>: Entire body as a whole <span>(Details : {SNOMED CT code '38266002' = 'Body as a whole', given as 'Entire body as a whole'})</span></p><p><b>subject</b>: <a>Roel</a></p><p><b>encounter</b>: <a>Encounter/f201</a></p><p><b>onset</b>: 02/04/2013</p><p><b>abatement</b>: around April 9, 2013</p><p><b>recordedDate</b>: 04/04/2013</p><p><b>recorder</b>: <a>Practitioner/f201</a></p><p><b>asserter</b>: <a>Practitioner/f201</a></p><h3>Evidences</h3><table><tr><td>-</td><td><b>Code</b></td><td><b>Detail</b></td></tr><tr><td>*</td><td>degrees C <span>(Details : {SNOMED CT code '258710007' = 'degrees C', given as 'degrees C'})</span></td><td><a>Temperature</a></td></tr></table></div>",
  },
  identifier: [
    {
      value: "12345",
    },
  ],
  clinicalStatus: {
    coding: [
      {
        system: "http://terminology.hl7.org/CodeSystem/condition-clinical",
        code: "resolved",
      },
    ],
  },
  verificationStatus: {
    coding: [
      {
        system: "http://terminology.hl7.org/CodeSystem/condition-ver-status",
        code: "confirmed",
      },
    ],
  },
  category: [
    {
      coding: [
        {
          system: "http://snomed.info/sct",
          code: "55607006",
          display: "Problem",
        },
        {
          system: "http://terminology.hl7.org/CodeSystem/condition-category",
          code: "problem-list-item",
        },
      ],
    },
  ],
  severity: {
    coding: [
      {
        system: "http://snomed.info/sct",
        code: "255604002",
        display: "Mild",
      },
    ],
  },
  code: {
    coding: [
      {
        system: "http://snomed.info/sct",
        code: "386661006",
        display: "Fever",
      },
    ],
  },
  bodySite: [
    {
      coding: [
        {
          system: "http://snomed.info/sct",
          code: "38266002",
          display: "Entire body as a whole",
        },
      ],
    },
  ],
  subject: {
    reference: "Patient/f201",
    display: "Roel",
  },
  encounter: {
    reference: "Encounter/f201",
  },
  onsetDateTime: "2013-04-02",
  abatementString: "around April 9, 2013",
  recordedDate: "2013-04-04",
  recorder: {
    reference: "Practitioner/f201",
  },
  asserter: {
    reference: "Practitioner/f201",
  },
  evidence: [
    {
      code: [
        {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "258710007",
              display: "degrees C",
            },
          ],
        },
      ],
      detail: [
        {
          reference: "Observation/f202",
          display: "Temperature",
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

export const ConditionExampleF202Malignancy: Condition = {
  resourceType: "Condition",
  id: "f202",
  meta: {
    security: [
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "TBOO",
        display: "taboo",
      },
    ],
    tag: [
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "HTEST",
        display: "test health data",
      },
    ],
  },
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: f202</p><p><b>meta</b>: </p><p><b>clinicalStatus</b>: Resolved <span>(Details : {http://terminology.hl7.org/CodeSystem/condition-clinical code 'resolved' = 'Resolved)</span></p><p><b>verificationStatus</b>: Confirmed <span>(Details : {http://terminology.hl7.org/CodeSystem/condition-ver-status code 'confirmed' = 'Confirmed)</span></p><p><b>category</b>: Encounter Diagnosis <span>(Details : {http://terminology.hl7.org/CodeSystem/condition-category code 'encounter-diagnosis' = 'Encounter Diagnosis)</span></p><p><b>severity</b>: Severe <span>(Details : {SNOMED CT code '24484000' = 'Severe', given as 'Severe'})</span></p><p><b>code</b>: Malignant neoplastic disease <span>(Details : {SNOMED CT code '363346000' = 'Malignant tumour', given as 'Malignant neoplastic disease'})</span></p><p><b>bodySite</b>: Entire head and neck <span>(Details : {SNOMED CT code '361355005' = 'Entire head and neck', given as 'Entire head and neck'})</span></p><p><b>subject</b>: <a>Roel</a></p><p><b>onset</b>: 52 years<span> (Details: UCUM code a = 'a')</span></p><p><b>abatement</b>: 54 years<span> (Details: UCUM code a = 'a')</span></p><p><b>recordedDate</b>: 01/12/2012</p><h3>Evidences</h3><table><tr><td>-</td><td><b>Detail</b></td></tr><tr><td>*</td><td><a>Erasmus' diagnostic report of Roel's tumor</a></td></tr></table></div>",
  },
  clinicalStatus: {
    coding: [
      {
        system: "http://terminology.hl7.org/CodeSystem/condition-clinical",
        code: "resolved",
      },
    ],
  },
  verificationStatus: {
    coding: [
      {
        system: "http://terminology.hl7.org/CodeSystem/condition-ver-status",
        code: "confirmed",
      },
    ],
  },
  category: [
    {
      coding: [
        {
          system: "http://terminology.hl7.org/CodeSystem/condition-category",
          code: "encounter-diagnosis",
        },
      ],
    },
  ],
  severity: {
    coding: [
      {
        system: "http://snomed.info/sct",
        code: "24484000",
        display: "Severe",
      },
    ],
  },
  code: {
    coding: [
      {
        system: "http://snomed.info/sct",
        code: "363346000",
        display: "Malignant neoplastic disease",
      },
    ],
  },
  bodySite: [
    {
      coding: [
        {
          system: "http://snomed.info/sct",
          code: "361355005",
          display: "Entire head and neck",
        },
      ],
    },
  ],
  subject: {
    reference: "Patient/f201",
    display: "Roel",
  },
  onsetAge: {
    value: 52,
    unit: "years",
    system: "http://unitsofmeasure.org",
    code: "a",
  },
  abatementAge: {
    value: 54,
    unit: "years",
    system: "http://unitsofmeasure.org",
    code: "a",
  },
  recordedDate: "2012-12-01",
  evidence: [
    {
      detail: [
        {
          reference: "DiagnosticReport/f201",
          display: "Erasmus' diagnostic report of Roel's tumor",
        },
      ],
    },
  ],
} as const;

export const ConditionExampleF203Sepsis: Condition = {
  resourceType: "Condition",
  id: "f203",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: f203</p><p><b>clinicalStatus</b>: Active <span>(Details : {http://terminology.hl7.org/CodeSystem/condition-clinical code 'active' = 'Active)</span></p><p><b>verificationStatus</b>: Confirmed <span>(Details : {http://terminology.hl7.org/CodeSystem/condition-ver-status code 'confirmed' = 'Confirmed)</span></p><p><b>category</b>: Problem <span>(Details : {SNOMED CT code '55607006' = 'Problem', given as 'Problem'}; {http://terminology.hl7.org/CodeSystem/condition-category code 'problem-list-item' = 'Problem List Item)</span></p><p><b>severity</b>: Moderate to severe <span>(Details : {SNOMED CT code '371924009' = 'Moderate to severe', given as 'Moderate to severe'})</span></p><p><b>code</b>: Bacterial sepsis <span>(Details : {SNOMED CT code '10001005' = 'Bacterial septicemia', given as 'Bacterial sepsis'})</span></p><p><b>bodySite</b>: Pulmonary vascular structure <span>(Details : {SNOMED CT code '281158006' = 'Pulmonary vascular structure', given as 'Pulmonary vascular structure'})</span></p><p><b>subject</b>: <a>Roel</a></p><p><b>encounter</b>: <a>Roel's encounter on March elevanth</a></p><p><b>onset</b>: 08/03/2013</p><p><b>recordedDate</b>: 11/03/2013</p><p><b>asserter</b>: <a>Practitioner/f201</a></p><h3>Evidences</h3><table><tr><td>-</td><td><b>Detail</b></td></tr><tr><td>*</td><td><a>Diagnostic report for Roel's sepsis</a></td></tr></table></div>",
  },
  clinicalStatus: {
    coding: [
      {
        system: "http://terminology.hl7.org/CodeSystem/condition-clinical",
        code: "active",
      },
    ],
  },
  verificationStatus: {
    coding: [
      {
        system: "http://terminology.hl7.org/CodeSystem/condition-ver-status",
        code: "confirmed",
      },
    ],
  },
  category: [
    {
      coding: [
        {
          system: "http://snomed.info/sct",
          code: "55607006",
          display: "Problem",
        },
        {
          system: "http://terminology.hl7.org/CodeSystem/condition-category",
          code: "problem-list-item",
        },
      ],
    },
  ],
  severity: {
    coding: [
      {
        system: "http://snomed.info/sct",
        code: "371924009",
        display: "Moderate to severe",
      },
    ],
  },
  code: {
    coding: [
      {
        system: "http://snomed.info/sct",
        code: "10001005",
        display: "Bacterial sepsis",
      },
    ],
  },
  bodySite: [
    {
      coding: [
        {
          system: "http://snomed.info/sct",
          code: "281158006",
          display: "Pulmonary vascular structure",
        },
      ],
    },
  ],
  subject: {
    reference: "Patient/f201",
    display: "Roel",
  },
  encounter: {
    reference: "Encounter/f203",
    display: "Roel's encounter on March elevanth",
  },
  onsetDateTime: "2013-03-08",
  recordedDate: "2013-03-11",
  asserter: {
    reference: "Practitioner/f201",
  },
  evidence: [
    {
      detail: [
        {
          reference: "DiagnosticReport/f202",
          display: "Diagnostic report for Roel's sepsis",
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

export const ConditionExampleF204Renal: Condition = {
  resourceType: "Condition",
  id: "f204",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: f204</p><p><b>clinicalStatus</b>: Inactive <span>(Details : {http://terminology.hl7.org/CodeSystem/condition-clinical code 'inactive' = 'Inactive)</span></p><p><b>verificationStatus</b>: Differential <span>(Details : {http://terminology.hl7.org/CodeSystem/condition-ver-status code 'differential' = 'Differential)</span></p><p><b>category</b>: Problem <span>(Details : {SNOMED CT code '55607006' = 'Problem', given as 'Problem'}; {http://terminology.hl7.org/CodeSystem/condition-category code 'problem-list-item' = 'Problem List Item)</span></p><p><b>severity</b>: Severe <span>(Details : {SNOMED CT code '24484000' = 'Severe', given as 'Severe'})</span></p><p><b>code</b>: Acute renal insufficiency specified as due to procedure <span>(Details : {SNOMED CT code '36225005' = 'Acute renal failure due to procedure', given as 'Acute renal insufficiency specified as due to procedure'})</span></p><p><b>bodySite</b>: Kidney <span>(Details : {SNOMED CT code '181414000' = 'Kidney', given as 'Kidney'})</span></p><p><b>subject</b>: <a>Roel</a></p><p><b>encounter</b>: <a>Roel's encounter on March elevanth</a></p><p><b>onset</b>: 11/03/2013</p><p><b>abatement</b>: 20/03/2013</p><p><b>recordedDate</b>: 11/03/2013</p><p><b>asserter</b>: <a>Practitioner/f201</a></p><h3>Stages</h3><table><tr><td>-</td><td><b>Summary</b></td><td><b>Assessment</b></td></tr><tr><td>*</td><td>Temporary <span>(Details : {SNOMED CT code '14803004' = 'Transitory', given as 'Temporary'})</span></td><td>Genetic analysis master panel</td></tr></table><p><b>note</b>: The patient is anuric.</p></div>",
  },
  clinicalStatus: {
    coding: [
      {
        system: "http://terminology.hl7.org/CodeSystem/condition-clinical",
        code: "inactive",
      },
    ],
  },
  verificationStatus: {
    coding: [
      {
        system: "http://terminology.hl7.org/CodeSystem/condition-ver-status",
        code: "differential",
      },
    ],
  },
  category: [
    {
      coding: [
        {
          system: "http://snomed.info/sct",
          code: "55607006",
          display: "Problem",
        },
        {
          system: "http://terminology.hl7.org/CodeSystem/condition-category",
          code: "problem-list-item",
        },
      ],
    },
  ],
  severity: {
    coding: [
      {
        system: "http://snomed.info/sct",
        code: "24484000",
        display: "Severe",
      },
    ],
  },
  code: {
    coding: [
      {
        system: "http://snomed.info/sct",
        code: "36225005",
        display: "Acute renal insufficiency specified as due to procedure",
      },
    ],
  },
  bodySite: [
    {
      coding: [
        {
          system: "http://snomed.info/sct",
          code: "181414000",
          display: "Kidney",
        },
      ],
    },
  ],
  subject: {
    reference: "Patient/f201",
    display: "Roel",
  },
  encounter: {
    reference: "Encounter/f203",
    display: "Roel's encounter on March elevanth",
  },
  onsetDateTime: "2013-03-11",
  abatementDateTime: "2013-03-20",
  recordedDate: "2013-03-11",
  asserter: {
    reference: "Practitioner/f201",
  },
  stage: [
    {
      summary: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "14803004",
            display: "Temporary",
          },
        ],
      },
      assessment: [
        {
          display: "Genetic analysis master panel",
        },
      ],
    },
  ],
  note: [
    {
      text: "The patient is anuric.",
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

export const ConditionExampleF205Infection: Condition = {
  resourceType: "Condition",
  id: "f205",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: f205</p><p><b>clinicalStatus</b>: Active <span>(Details : {http://terminology.hl7.org/CodeSystem/condition-clinical code 'active' = 'Active)</span></p><p><b>verificationStatus</b>: Differential <span>(Details : {http://terminology.hl7.org/CodeSystem/condition-ver-status code 'differential' = 'Differential)</span></p><p><b>code</b>: Bacterial infectious disease <span>(Details : {SNOMED CT code '87628006' = 'Bacterial infectious disease', given as 'Bacterial infectious disease'})</span></p><p><b>subject</b>: <a>Roel</a></p><p><b>recordedDate</b>: 04/04/2013</p><p><b>asserter</b>: <a>Practitioner/f201</a></p></div>",
  },
  clinicalStatus: {
    coding: [
      {
        system: "http://terminology.hl7.org/CodeSystem/condition-clinical",
        code: "active",
      },
    ],
  },
  verificationStatus: {
    coding: [
      {
        system: "http://terminology.hl7.org/CodeSystem/condition-ver-status",
        code: "differential",
      },
    ],
  },
  code: {
    coding: [
      {
        system: "http://snomed.info/sct",
        code: "87628006",
        display: "Bacterial infectious disease",
      },
    ],
  },
  subject: {
    reference: "Patient/f201",
    display: "Roel",
  },
  recordedDate: "2013-04-04",
  asserter: {
    reference: "Practitioner/f201",
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

export const ConditionExampleFamilyHistory: Condition = {
  resourceType: "Condition",
  id: "family-history",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">Family history of cancer of colon</div>',
  },
  clinicalStatus: {
    coding: [
      {
        system: "http://terminology.hl7.org/CodeSystem/condition-clinical",
        code: "active",
      },
    ],
  },
  category: [
    {
      coding: [
        {
          system: "http://terminology.hl7.org/CodeSystem/condition-category",
          code: "problem-list-item",
          display: "Problem List Item",
        },
      ],
    },
  ],
  code: {
    coding: [
      {
        system: "http://snomed.info/sct",
        code: "312824007",
        display: "Family history of cancer of colon",
      },
    ],
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

export const ConditionExampleStroke: Condition = {
  resourceType: "Condition",
  id: "stroke",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">Ischemic stroke, July 18, 2010</div>',
  },
  clinicalStatus: {
    coding: [
      {
        system: "http://terminology.hl7.org/CodeSystem/condition-clinical",
        code: "active",
      },
    ],
  },
  verificationStatus: {
    coding: [
      {
        system: "http://terminology.hl7.org/CodeSystem/condition-ver-status",
        code: "confirmed",
      },
    ],
  },
  category: [
    {
      coding: [
        {
          system: "http://terminology.hl7.org/CodeSystem/condition-category",
          code: "encounter-diagnosis",
          display: "Encounter Diagnosis",
        },
      ],
    },
  ],
  code: {
    coding: [
      {
        system: "http://snomed.info/sct",
        code: "422504002",
        display: "Ischemic stroke (disorder)",
      },
    ],
    text: "Stroke",
  },
  subject: {
    reference: "Patient/example",
  },
  onsetDateTime: "2010-07-18",
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

export const ConditionExample: Condition = {
  resourceType: "Condition",
  id: "example",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">Severe burn of left ear (Date: 24-May 2012)</div>',
  },
  clinicalStatus: {
    coding: [
      {
        system: "http://terminology.hl7.org/CodeSystem/condition-clinical",
        code: "active",
      },
    ],
  },
  verificationStatus: {
    coding: [
      {
        system: "http://terminology.hl7.org/CodeSystem/condition-ver-status",
        code: "confirmed",
      },
    ],
  },
  category: [
    {
      coding: [
        {
          system: "http://terminology.hl7.org/CodeSystem/condition-category",
          code: "encounter-diagnosis",
          display: "Encounter Diagnosis",
        },
        {
          system: "http://snomed.info/sct",
          code: "439401001",
          display: "Diagnosis",
        },
      ],
    },
  ],
  severity: {
    coding: [
      {
        system: "http://snomed.info/sct",
        code: "24484000",
        display: "Severe",
      },
    ],
  },
  code: {
    coding: [
      {
        system: "http://snomed.info/sct",
        code: "39065001",
        display: "Burn of ear",
      },
    ],
    text: "Burnt Ear",
  },
  bodySite: [
    {
      coding: [
        {
          system: "http://snomed.info/sct",
          code: "49521004",
          display: "Left external ear structure",
        },
      ],
      text: "Left Ear",
    },
  ],
  subject: {
    reference: "Patient/example",
  },
  onsetDateTime: "2012-05-24",
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

export const ConditionExample2: Condition = {
  resourceType: "Condition",
  id: "example2",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">Mild Asthma (Date: 12-Nov 2012)</div>',
  },
  clinicalStatus: {
    coding: [
      {
        system: "http://terminology.hl7.org/CodeSystem/condition-clinical",
        code: "active",
      },
    ],
  },
  verificationStatus: {
    coding: [
      {
        system: "http://terminology.hl7.org/CodeSystem/condition-ver-status",
        code: "confirmed",
      },
    ],
  },
  category: [
    {
      coding: [
        {
          system: "http://terminology.hl7.org/CodeSystem/condition-category",
          code: "problem-list-item",
          display: "Problem List Item",
        },
      ],
    },
  ],
  severity: {
    coding: [
      {
        system: "http://snomed.info/sct",
        code: "255604002",
        display: "Mild",
      },
    ],
  },
  code: {
    text: "Asthma",
  },
  subject: {
    reference: "Patient/example",
  },
  onsetString: "approximately November 2012",
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
