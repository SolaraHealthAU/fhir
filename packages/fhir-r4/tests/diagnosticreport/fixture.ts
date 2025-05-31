import type { DiagnosticReport } from "../../src/v4.0.1/diagnosticreport/types";

export const DiagnosticreportExampleDxa: DiagnosticReport = {
  resourceType: "DiagnosticReport",
  id: "102",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n\t\t\t<h2>DXA BONE DENSITOMETRY</h2>\n\t\t\t<table>\n\t\t\t\t<tr>\n\t\t\t\t\t<td>NAME</td>\n\t\t\t\t\t<td>XXXXXXX</td>\n\t\t\t\t</tr>\n\t\t\t\t<tr>\n\t\t\t\t\t<td>DOB</td>\n\t\t\t\t\t<td>10/02/1974</td>\n\t\t\t\t</tr>\n\t\t\t\t<tr>\n\t\t\t\t\t<td>REFERRING DR</td>\n\t\t\t\t\t<td>Smith, Jane</td>\n\t\t\t\t</tr>\n\t\t\t\t<tr>\n\t\t\t\t\t<td>INDICATIONS</td>\n\t\t\t\t\t<td>Early menopause on estrogen levels. No period  for 18 months</td>\n\t\t\t\t</tr>\n\t\t\t\t<tr>\n\t\t\t\t\t<td>PROCEDURE</td>\n\t\t\t\t\t<td>Dual energy x-ray absorptiometry (DEXA)</td>\n\t\t\t\t</tr>\n\t\t\t</table>\n\t\t\t<h3>Bone Mineral Density</h3>\n\t\t\t<table>\n\t\t\t\t<tr>\n\t\t\t\t\t<td>Scan Type</td>\n\t\t\t\t\t<td>Region</td>\n\t\t\t\t\t<td>Measured</td>\n\t\t\t\t\t<td>Age</td>\n\t\t\t\t\t<td>BMD</td>\n\t\t\t\t\t<td>T-Score</td>\n\t\t\t\t\t<td>Z-Score</td>\n\t\t\t\t\t<td>?BMD(g/cm2)</td>\n\t\t\t\t\t<td>?BMD(%)</td>\n\t\t\t\t</tr>\n\t\t\t\t<tr>\n\t\t\t\t\t<td>AP Spine</td>\n\t\t\t\t\t<td>L1-L4</td>\n\t\t\t\t\t<td>17/06/2008</td>\n\t\t\t\t\t<td>34.4</td>\n\t\t\t\t\t<td>1.148 g/cm²</td>\n\t\t\t\t\t<td>-0.4</td>\n\t\t\t\t\t<td>-0.5</td>\n\t\t\t\t\t<td>-</td>\n\t\t\t\t\t<td>-</td>\n\t\t\t\t</tr>\n\t\t\t\t<tr>\n\t\t\t\t\t<td>Left Femur</td>\n\t\t\t\t\t<td>Neck</td>\n\t\t\t\t\t<td>17/06/2008</td>\n\t\t\t\t\t<td>34.4</td>\n\t\t\t\t\t<td>0.891 g/cm²</td>\n\t\t\t\t\t<td>-1.0</td>\n\t\t\t\t\t<td>-0.9</td>\n\t\t\t\t\t<td>-</td>\n\t\t\t\t\t<td>-</td>\n\t\t\t\t</tr>\n\t\t\t\t<tr>\n\t\t\t\t\t<td>Left Femur</td>\n\t\t\t\t\t<td>Total</td>\n\t\t\t\t\t<td>17/06/2008</td>\n\t\t\t\t\t<td>34.4</td>\n\t\t\t\t\t<td>0.887 g/cm²</td>\n\t\t\t\t\t<td>-1.2</td>\n\t\t\t\t\t<td>-1.3</td>\n\t\t\t\t\t<td>-</td>\n\t\t\t\t\t<td>-</td>\n\t\t\t\t</tr>\n\t\t\t\t<tr>\n\t\t\t\t\t<td>Right Femur</td>\n\t\t\t\t\t<td>Neck</td>\n\t\t\t\t\t<td>17/06/2008</td>\n\t\t\t\t\t<td>34.4</td>\n\t\t\t\t\t<td>0.885 g/cm²</td>\n\t\t\t\t\t<td>-1.0</td>\n\t\t\t\t\t<td>-1.0</td>\n\t\t\t\t\t<td>-</td>\n\t\t\t\t\t<td>-</td>\n\t\t\t\t</tr>\n\t\t\t\t<tr>\n\t\t\t\t\t<td>Right Femur</td>\n\t\t\t\t\t<td>Total</td>\n\t\t\t\t\t<td>17/06/2008</td>\n\t\t\t\t\t<td>34.4</td>\n\t\t\t\t\t<td>0.867 g/cm²</td>\n\t\t\t\t\t<td>-1.4</td>\n\t\t\t\t\t<td>-1.4</td>\n\t\t\t\t\t<td>-</td>\n\t\t\t\t\t<td>-</td>\n\t\t\t\t</tr>\n\t\t\t</table>\n\t\t\t<p>Assessment:</p>\n\t\t\t<ul>\n\t\t\t\t<li>The Spine L1-L4 BMD is normal.</li>\n\t\t\t\t<li>The Left Femur Neck BMD is in the osteopenic range. Relative fracture risk is about 2.</li>\n\t\t\t\t<li>The Left Femur Total BMD is in the osteopenic range. Relative fracture risk is about 2.</li>\n\t\t\t\t<li>The Right Femur Neck BMD is in the osteopenic range. Relative fracture risk is about 2.</li>\n\t\t\t\t<li>The Right Femur Total BMD is in the osteopenic range. Relative fracture risk is about 2.</li>\n\t\t\t</ul>\n\t\t\t<p>\n\t\t\t\t<b>COMMENT</b>\n\t\t\t</p>\n\t\t\t<p>Osteopenia on measured BMD. The estimated 10-year probability of fracture based on present age, gender and measured BMD is less than 10%. This absolute fracture risk remains low. A follow-up assessment may be considered in 2 to 3 years to monitor the trend in BMD.</p>\n\t\t\t<p>Thank you for your referral.  Dr Henry Seven  17/06/2008</p>\n\t\t\t<pre>\nNote:\nWHO classification of osteoporosis (WHO Technical Report Series 1994: 843)\n- Normal: T-score equal to -1.0 s.d. or higher\n- Osteopenia: T-score  between -1.0 and -2.5 s.d.\n- Osteoporosis: T-score equal to -2.5 s.d. or lower\n- Severe/Established osteoporosis: Osteoporosis with one or more fragility fracture.\nT-score: The number of s.d. from the mean BMD for a gender-matched young adult population.\nZ-score: The number of s.d. from the mean BMD for an age-, weight- and gender-matched population.\nReference for 10-year probability of fracture risk: Kanis JA, Johnell O, Oden A, Dawson A,  De Laet C, Jonsson B. Ten year probabilities of osteoporotic fractures according to BMD and diagnostic thresholds. Osteoporos.Int. 2001;12(12):989-995.\nGE LUNAR PRODIGY DENSITOMETER\n</pre>\n\t\t</div>',
  },
  status: "final",
  code: {
    coding: [
      {
        system: "http://loinc.org",
        code: "38269-7",
      },
    ],
    text: "DXA BONE DENSITOMETRY",
  },
  subject: {
    reference: "Patient/pat2",
  },
  effectiveDateTime: "2008-06-17",
  issued: "2008-06-18T09:23:00+10:00",
  performer: [
    {
      reference: "Practitioner/3ad0687e-f477-468c-afd5-fcc2bf897809",
      display: "Dr Henry Seven",
    },
  ],
  result: [
    {
      reference: "Observation/bmd",
    },
  ],
  conclusionCode: [
    {
      coding: [
        {
          system: "http://snomed.info/sct",
          code: "391040000",
          display: "At risk of osteoporotic fracture",
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

export const DiagnosticreportExampleF201Brainct: DiagnosticReport = {
  resourceType: "DiagnosticReport",
  id: "f201",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: f201</p><p><b>status</b>: final</p><p><b>category</b>: Radiology <span>(Details : {SNOMED CT code '394914008' = 'Radiology - speciality', given as 'Radiology'}; {http://terminology.hl7.org/CodeSystem/v2-0074 code 'RAD' = 'Radiology)</span></p><p><b>code</b>: CT of head-neck <span>(Details : {SNOMED CT code '429858000' = 'Computed tomography (CT) of head and neck', given as 'Computed tomography (CT) of head and neck'})</span></p><p><b>subject</b>: <a>Roel</a></p><p><b>effective</b>: 01/12/2012 12:00:00 PM</p><p><b>issued</b>: 01/12/2012 12:00:00 PM</p><p><b>performer</b>: <a>Blijdorp MC</a></p><p><b>imagingStudy</b>: HEAD and NECK CT DICOM imaging study</p><p><b>conclusion</b>: CT brains: large tumor sphenoid/clivus.</p><p><b>conclusionCode</b>: Malignant tumor of craniopharyngeal duct <span>(Details : {SNOMED CT code '188340000' = 'Malignant tumor of craniopharyngeal duct', given as 'Malignant tumor of craniopharyngeal duct'})</span></p></div>",
  },
  status: "final",
  category: [
    {
      coding: [
        {
          system: "http://snomed.info/sct",
          code: "394914008",
          display: "Radiology",
        },
        {
          system: "http://terminology.hl7.org/CodeSystem/v2-0074",
          code: "RAD",
        },
      ],
    },
  ],
  code: {
    coding: [
      {
        system: "http://snomed.info/sct",
        code: "429858000",
        display: "Computed tomography (CT) of head and neck",
      },
    ],
    text: "CT of head-neck",
  },
  subject: {
    reference: "Patient/f201",
    display: "Roel",
  },
  effectiveDateTime: "2012-12-01T12:00:00+01:00",
  issued: "2012-12-01T12:00:00+01:00",
  performer: [
    {
      reference: "Organization/f203",
      display: "Blijdorp MC",
    },
  ],
  imagingStudy: [
    {
      display: "HEAD and NECK CT DICOM imaging study",
    },
  ],
  conclusion: "CT brains: large tumor sphenoid/clivus.",
  conclusionCode: [
    {
      coding: [
        {
          system: "http://snomed.info/sct",
          code: "188340000",
          display: "Malignant tumor of craniopharyngeal duct",
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

export const DiagnosticreportExamplePapsmear: DiagnosticReport = {
  resourceType: "DiagnosticReport",
  id: "pap",
  text: {
    status: "additional",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n\t\t\t<p>Acme Anatomic Pathology Services<br/>2216 Santa Monica Blvd, Suite 114<br/>Santa Monica, CA 90404<br/>===============================================================<br/>GYN CYTOLOGY (PAP SMEAR) REPORT<br/>===============================================================</p>\n\t\t\t<p>Patient: Everywoman, Eve Report Date: 2/14/2013<br/>DOB: 05/31/1973 Age: 30 Sex: F MRN: PATID14567<br/>Patient Address: 2222 Home Street<br/> Huntington Park<br/> CA 90255<br/>Order: ORD40<br/>Physician: Careful, Adam 5742200012 (NPI)<br/>SpecimenID: GHSID40<br/>Collected Date: 2/11/2013<br/>Received Date: 2/12/2013<br/>LMP: 1/28/2013<br/>Specimen Source: Cervical Cytology (ThinPrep)<br/>Previously abnormal Pap? Unknown</p>\n\t\t\t<p>Specimen Adequacy: Satisfactory<br/>Diagnostic Interpretation: Epithelial cell abnormality: Atypical squamous cells<br/>of undetermined significance<br/>Hormonal Evaluations: not possible, due to presence of atypical cells<br/>Recommendations: Appropriate Follow-up. Suggest repeat as clinically indicated<br/>Comments: Abnormal report reviewed by pathologist for confirmation</p>\n\t\t\t<p/>\n\t\t</div>',
  },
  status: "final",
  code: {
    coding: [
      {
        system: "http://loinc.org",
        code: "47527-7",
      },
    ],
  },
  subject: {
    reference: "Patient/b248b1b2-1686-4b94-9936-37d7a5f94b51",
  },
  effectiveDateTime: "2013-02-11T10:33:33+11:00",
  issued: "2013-02-13T11:45:33+11:00",
  performer: [
    {
      reference: "Practitioner/example",
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

export const DiagnosticreportExamplePgx: DiagnosticReport = {
  resourceType: "DiagnosticReport",
  id: "example-pgx",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: example-pgx</p><p><b>basedOn</b>: <a>ServiceRequest/example-pgx</a></p><p><b>status</b>: final</p><p><b>code</b>: Pharmacogenetics Report <span>(Details : {https://system/PGxReport code 'PGxReport' = 'PGxReport', given as 'Pharmacogenetics Report'})</span></p><p><b>subject</b>: <a>Bob Smith</a></p><p><b>effective</b>: 15/10/2016 12:34:56 PM</p><p><b>issued</b>: 20/10/2016 2:00:05 PM</p><p><b>performer</b>: <a>Organization/4829</a></p><p><b>result</b>: <a>Observation/example-phenotype</a></p><p><b>presentedForm</b>: </p></div>",
  },
  basedOn: [
    {
      reference: "ServiceRequest/example-pgx",
    },
  ],
  status: "final",
  code: {
    coding: [
      {
        system: "https://system/PGxReport",
        code: "PGxReport",
        display: "Pharmacogenetics Report",
      },
    ],
    text: "Pharmacogenetics Report",
  },
  subject: {
    reference: "Patient/899962",
    display: "Bob Smith",
  },
  effectiveDateTime: "2016-10-15T12:34:56+11:00",
  issued: "2016-10-20T14:00:05+11:00",
  performer: [
    {
      reference: "Organization/4829",
    },
  ],
  result: [
    {
      reference: "Observation/example-phenotype",
    },
  ],
  presentedForm: [
    {
      contentType: "application/pdf",
      language: "en",
      data: "cGRmSW5CYXNlNjRCaW5hcnk=",
      hash: "571ef9c5655840f324e679072ed62b1b95eef8a0",
      title: "Pharmacogenetics Report",
      creation: "2016-10-20T20:00:00+11:00",
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

export const DiagnosticreportExampleUltrasound: DiagnosticReport = {
  resourceType: "DiagnosticReport",
  id: "ultrasound",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: ultrasound</p><p><b>status</b>: final</p><p><b>category</b>: Radiology <span>(Details : {SNOMED CT code '394914008' = 'Radiology - speciality', given as 'Radiology'}; {http://terminology.hl7.org/CodeSystem/v2-0074 code 'RAD' = 'Radiology)</span></p><p><b>code</b>: Abdominal Ultrasound <span>(Details : {SNOMED CT code '45036003' = 'Ultrasonography of abdomen', given as 'Ultrasonography of abdomen'})</span></p><p><b>subject</b>: <a>Patient/example</a></p><p><b>effective</b>: 01/12/2012 12:00:00 PM</p><p><b>issued</b>: 01/12/2012 12:00:00 PM</p><p><b>performer</b>: <a>Practitioner/example</a></p><h3>Media</h3><table><tr><td>-</td><td><b>Comment</b></td><td><b>Link</b></td></tr><tr><td>*</td><td>A comment about the image</td><td><a>WADO example image</a></td></tr></table><p><b>conclusion</b>: Unremarkable study</p></div>",
  },
  status: "final",
  category: [
    {
      coding: [
        {
          system: "http://snomed.info/sct",
          code: "394914008",
          display: "Radiology",
        },
        {
          system: "http://terminology.hl7.org/CodeSystem/v2-0074",
          code: "RAD",
        },
      ],
    },
  ],
  code: {
    coding: [
      {
        system: "http://snomed.info/sct",
        code: "45036003",
        display: "Ultrasonography of abdomen",
      },
    ],
    text: "Abdominal Ultrasound",
  },
  subject: {
    reference: "Patient/example",
  },
  effectiveDateTime: "2012-12-01T12:00:00+01:00",
  issued: "2012-12-01T12:00:00+01:00",
  performer: [
    {
      reference: "Practitioner/example",
    },
  ],
  media: [
    {
      comment: "A comment about the image",
      link: {
        reference:
          "Media/1.2.840.11361907579238403408700.3.1.04.19970327150033",
        display: "WADO example image",
      },
    },
  ],
  conclusion: "Unremarkable study",
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
