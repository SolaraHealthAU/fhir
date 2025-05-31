import type { Procedure } from "../../src/v4.0.1/procedure/types";

export const ProcedureExampleHcbs: Procedure = {
  resourceType: "Procedure",
  id: "HCBS",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n\t\t\t<p>\n\t\t\t\t<b> Personal care services provided at person's home</b>\n\t\t\t</p>\n\t\t\t<p>\n\t\t\t\t<b> Based On</b> : Peter's Long Term Services and Supports (LTSS) care plan</p>\n\t\t\t<p>\n\t\t\t\t<b> Status</b> : completed</p>\n\t\t\t<p>\n\t\t\t\t<b> Beneficiary</b> : Peter James</p>\n\t\t\t<p>\n\t\t\t\t<b> Service Name/Code</b> : Personal care services <span> (Details : {HCPCS code 'T1019' = 'Personal care services, per 15 minutes'})</span>\n\t\t\t</p>\n\t\t\t<p>\n\t\t\t\t<b> Service Date</b> : Apr 5, 2018</p>\n\t\t\t<p>\n\t\t\t\t<b> Service Provider</b> : Adam Careful</p>\n\t\t\t<p>\n\t\t\t\t<b> Service Delivery Address</b> : Peter's home</p>\n\t\t\t<p>\n\t\t\t\t<b> Service Comment</b> : Assisted with bathing and dressing, doing laundry, and meal preparation</p>\n\t\t</div>",
  },
  basedOn: [
    {
      display: "Peter's Long Term Service and Supports (LTSS) Care Plan",
    },
  ],
  status: "completed",
  code: {
    coding: [
      {
        system:
          "https://www.cms.gov/Medicare/Coding/HCPCSReleaseCodeSets/Alpha-Numeric-HCPCS.html",
        code: "T1019",
        display:
          "Personal care services, per 15 minutes, not for an inpatient or resident of a hospital, nursing facility, icf/mr or imd, part of the individualized plan of treatment.",
      },
    ],
    text: "Personal care services",
  },
  subject: {
    reference: "Patient/example",
    display: "Peter James",
  },
  performedDateTime: "2018-04-05",
  performer: [
    {
      actor: {
        reference: "Practitioner/example",
        display: "Adam Careful",
      },
    },
  ],
  location: {
    reference: "Location/ph",
    display: "Peter's Home",
  },
  note: [
    {
      text: "Assisted with bathing and dressing, doing laundry, and meal preparation",
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

export const ProcedureExampleAmbulation: Procedure = {
  resourceType: "Procedure",
  id: "ambulation",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">Ambulation procedure was not done</div>',
  },
  identifier: [
    {
      value: "12345",
    },
  ],
  instantiatesUri: [
    "http://example.org/protocol-for-hypertension-during-pregnancy",
  ],
  basedOn: [
    {
      reference: "CarePlan/preg",
      display: "Maternity care plan",
    },
  ],
  status: "not-done",
  statusReason: {
    coding: [
      {
        system: "http://snomed.info/sct",
        code: "398254007",
        display: "  Pre-eclampsia (disorder)",
      },
    ],
    text: "Pre-eclampsia",
  },
  code: {
    coding: [
      {
        system: "http://snomed.info/sct",
        code: "62013009",
        display: "Ambulating patient (procedure)",
      },
    ],
    text: "Ambulation",
  },
  subject: {
    reference: "Patient/example",
  },
  performer: [
    {
      actor: {
        reference: "Practitioner/f204",
        display: "Carla Espinosa",
      },
      onBehalfOf: {
        reference: "Organization/f001",
        display: "University Medical Hospital",
      },
    },
  ],
  location: {
    reference: "Location/1",
    display: "Burgers University Medical Center, South Wing, second floor",
  },
  reasonReference: [
    {
      reference: "Observation/blood-pressure",
      display: "Blood Pressure",
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

export const ProcedureExampleAppendectomyNarrative: Procedure = {
  resourceType: "Procedure",
  id: "appendectomy-narrative",
  text: {
    status: "additional",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">Routine Appendectomy in April 2013 performed by Dr Cecil Surgeon</div>',
  },
  status: "completed",
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

export const ProcedureExampleBiopsy: Procedure = {
  resourceType: "Procedure",
  id: "biopsy",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">Biopsy of suspected melanoma L) arm</div>',
  },
  status: "completed",
  category: {
    coding: [
      {
        system: "http://snomed.info/sct",
        code: "103693007",
        display: "Diagnostic procedure (procedure)",
      },
    ],
    text: "Diagnostic procedure",
  },
  code: {
    coding: [
      {
        system: "http://snomed.info/sct",
        code: "90105005",
        display: "Biopsy of soft tissue of forearm (Procedure)",
      },
    ],
    text: "Biopsy of suspected melanoma L) arm",
  },
  subject: {
    reference: "Patient/example",
  },
  performedDateTime: "2014-02-03",
  performer: [
    {
      actor: {
        reference: "Practitioner/example",
        display: "Dr Bert Biopser",
      },
    },
  ],
  reasonCode: [
    {
      text: "Dark lesion l) forearm. getting darker last 3 months.",
    },
  ],
  bodySite: [
    {
      coding: [
        {
          system: "http://snomed.info/sct",
          code: "368225008",
          display: "Entire Left Forearm",
        },
      ],
      text: "Left forearm",
    },
  ],
  complication: [
    {
      coding: [
        {
          system: "http://snomed.info/sct",
          code: "67750007",
          display: "Ineffective airway clearance (finding)",
        },
      ],
      text: "Ineffective airway clearance",
    },
  ],
  followUp: [
    {
      text: "Review in clinic",
    },
  ],
  note: [
    {
      text: "Standard Biopsy",
    },
  ],
  usedCode: [
    {
      coding: [
        {
          system: "http://snomed.info/sct",
          code: "79068005",
          display: "Needle, device (physical object)",
        },
      ],
      text: "30-guage needle",
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

export const ProcedureExampleColonBiopsy: Procedure = {
  resourceType: "Procedure",
  id: "colon-biopsy",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">Biopsy of colon, which was part of colonoscopy</div>',
  },
  identifier: [
    {
      value: "12345",
    },
  ],
  partOf: [
    {
      reference: "Procedure/colonoscopy",
      display: "Colonoscopy",
    },
  ],
  status: "completed",
  code: {
    coding: [
      {
        system: "http://snomed.info/sct",
        code: "76164006",
        display: "Biopsy of colon (procedure)",
      },
    ],
    text: "Biopsy of colon",
  },
  subject: {
    reference: "Patient/example",
  },
  performer: [
    {
      actor: {
        reference: "Practitioner/example",
        display: "Dr Adam Careful",
      },
    },
  ],
  location: {
    reference: "Location/1",
    display: "Burgers University Medical Center, South Wing, second floor",
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

export const ProcedureExampleColonoscopy: Procedure = {
  resourceType: "Procedure",
  id: "colonoscopy",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">Colonoscopy with complication</div>',
  },
  identifier: [
    {
      value: "12345",
    },
  ],
  status: "completed",
  code: {
    coding: [
      {
        system: "http://snomed.info/sct",
        code: "73761001",
        display: "Colonoscopy (procedure)",
      },
    ],
    text: "Colonoscopy",
  },
  subject: {
    reference: "Patient/example",
  },
  performer: [
    {
      actor: {
        reference: "Practitioner/example",
        display: "Dr Adam Careful",
      },
    },
  ],
  location: {
    reference: "Location/1",
    display: "Burgers University Medical Center, South Wing, second floor",
  },
  complicationDetail: [
    {
      display: "Perforated intestine condition",
    },
  ],
  usedReference: [
    {
      display: "Colonoscope device",
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

export const ProcedureExampleEducation: Procedure = {
  resourceType: "Procedure",
  id: "education",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">Health education - breast examination for early detection of breast mass</div>',
  },
  basedOn: [
    {
      reference: "ServiceRequest/education",
      display: "Order for health education",
    },
  ],
  status: "completed",
  category: {
    coding: [
      {
        system: "http://snomed.info/sct",
        code: "311401005",
        display: "Patient education (procedure)",
      },
    ],
    text: "Education",
  },
  code: {
    coding: [
      {
        system: "http://snomed.info/sct",
        code: "48023004",
        display: "Breast self-examination technique education (procedure)",
      },
    ],
    text: "Health education - breast examination",
  },
  subject: {
    display: "Jane Doe",
  },
  performedDateTime: "2014-08-16",
  performer: [
    {
      actor: {
        display: "Pamela Educator, RN",
      },
    },
  ],
  location: {
    display: "Southside Community Health Center",
  },
  reasonCode: [
    {
      text: "early detection of breast mass",
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

export const ProcedureExampleF001Heart: Procedure = {
  resourceType: "Procedure",
  id: "f001",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: f001</p><p><b>status</b>: completed</p><p><b>code</b>: Heart valve replacement <span>(Details : {SNOMED CT code '34068001' = 'Heart valve replacement', given as 'Heart valve replacement'})</span></p><p><b>subject</b>: <a>P. van de Heuvel</a></p><p><b>encounter</b>: <a>Encounter/f001</a></p><p><b>performed</b>: 26/06/2011 --&gt; 27/06/2011</p><h3>Performers</h3><table><tr><td>-</td><td><b>Function</b></td><td><b>Actor</b></td></tr><tr><td>*</td><td>Care role <span>(Details : {urn:oid:2.16.840.1.113883.2.4.15.111 code '01.000' = '01.000', given as 'Arts'})</span></td><td><a>P. Voigt</a></td></tr></table><p><b>reasonCode</b>: Heart valve disorder <span>(Details )</span></p><p><b>bodySite</b>: Heart valve structure <span>(Details : {SNOMED CT code '17401000' = 'Cardiac valve', given as 'Heart valve structure'})</span></p><p><b>outcome</b>: improved blood circulation <span>(Details )</span></p><p><b>report</b>: <a>Lab results blood test</a></p><p><b>followUp</b>: described in care plan <span>(Details )</span></p></div>",
  },
  status: "completed",
  code: {
    coding: [
      {
        system: "http://snomed.info/sct",
        code: "34068001",
        display: "Heart valve replacement",
      },
    ],
  },
  subject: {
    reference: "Patient/f001",
    display: "P. van de Heuvel",
  },
  encounter: {
    reference: "Encounter/f001",
  },
  performedPeriod: {
    start: "2011-06-26",
    end: "2011-06-27",
  },
  performer: [
    {
      function: {
        coding: [
          {
            system: "urn:oid:2.16.840.1.113883.2.4.15.111",
            code: "01.000",
            display: "Arts",
          },
        ],
        text: "Care role",
      },
      actor: {
        reference: "Practitioner/f002",
        display: "P. Voigt",
      },
    },
  ],
  reasonCode: [
    {
      text: "Heart valve disorder",
    },
  ],
  bodySite: [
    {
      coding: [
        {
          system: "http://snomed.info/sct",
          code: "17401000",
          display: "Heart valve structure",
        },
      ],
    },
  ],
  outcome: {
    text: "improved blood circulation",
  },
  report: [
    {
      reference: "DiagnosticReport/f001",
      display: "Lab results blood test",
    },
  ],
  followUp: [
    {
      text: "described in care plan",
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

export const ProcedureExampleF002Lung: Procedure = {
  resourceType: "Procedure",
  id: "f002",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: f002</p><p><b>status</b>: completed</p><p><b>code</b>: Partial lobectomy of lung <span>(Details : {SNOMED CT code '359615001' = 'Partial lobectomy of lung', given as 'Partial lobectomy of lung'})</span></p><p><b>subject</b>: <a>P. van de Heuvel</a></p><p><b>encounter</b>: <a>Encounter/f002</a></p><p><b>performed</b>: 08/03/2013 9:00:10 AM --&gt; 08/03/2013 9:30:10 AM</p><h3>Performers</h3><table><tr><td>-</td><td><b>Function</b></td><td><b>Actor</b></td></tr><tr><td>*</td><td>Care role <span>(Details : {urn:oid:2.16.840.1.113883.2.4.15.111 code '01.000' = '01.000', given as 'Arts'})</span></td><td><a>M.I.M. Versteegh</a></td></tr></table><p><b>reasonCode</b>: Malignant tumor of lung <span>(Details )</span></p><p><b>bodySite</b>: Lung structure <span>(Details : {SNOMED CT code '39607008' = 'Lung', given as 'Lung structure'})</span></p><p><b>outcome</b>: improved blood circulation <span>(Details )</span></p><p><b>report</b>: <a>Lab results blood test</a></p><p><b>followUp</b>: described in care plan <span>(Details )</span></p></div>",
  },
  status: "completed",
  code: {
    coding: [
      {
        system: "http://snomed.info/sct",
        code: "359615001",
        display: "Partial lobectomy of lung",
      },
    ],
  },
  subject: {
    reference: "Patient/f001",
    display: "P. van de Heuvel",
  },
  encounter: {
    reference: "Encounter/f002",
  },
  performedPeriod: {
    start: "2013-03-08T09:00:10+01:00",
    end: "2013-03-08T09:30:10+01:00",
  },
  performer: [
    {
      function: {
        coding: [
          {
            system: "urn:oid:2.16.840.1.113883.2.4.15.111",
            code: "01.000",
            display: "Arts",
          },
        ],
        text: "Care role",
      },
      actor: {
        reference: "Practitioner/f003",
        display: "M.I.M. Versteegh",
      },
    },
  ],
  reasonCode: [
    {
      text: "Malignant tumor of lung",
    },
  ],
  bodySite: [
    {
      coding: [
        {
          system: "http://snomed.info/sct",
          code: "39607008",
          display: "Lung structure",
        },
      ],
    },
  ],
  outcome: {
    text: "improved blood circulation",
  },
  report: [
    {
      reference: "DiagnosticReport/f001",
      display: "Lab results blood test",
    },
  ],
  followUp: [
    {
      text: "described in care plan",
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

export const ProcedureExampleF003Abscess: Procedure = {
  resourceType: "Procedure",
  id: "f003",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: f003</p><p><b>status</b>: completed</p><p><b>code</b>: Incision of retropharyngeal abscess <span>(Details : {SNOMED CT code '172960003' = 'Incision of retropharyngeal abscess', given as 'Incision of retropharyngeal abscess'})</span></p><p><b>subject</b>: <a>P. van de Heuvel</a></p><p><b>encounter</b>: <a>Encounter/f003</a></p><p><b>performed</b>: 24/03/2013 9:30:10 AM --&gt; 24/03/2013 10:30:10 AM</p><h3>Performers</h3><table><tr><td>-</td><td><b>Function</b></td><td><b>Actor</b></td></tr><tr><td>*</td><td>Care role <span>(Details : {urn:oid:2.16.840.1.113883.2.4.15.111 code '01.000' = '01.000', given as 'Arts'})</span></td><td><a>E.M.J.M. van den broek</a></td></tr></table><p><b>reasonCode</b>: abcess in retropharyngeal area <span>(Details )</span></p><p><b>bodySite</b>: Retropharyngeal area <span>(Details : {SNOMED CT code '83030008' = 'Retropharyngeal area', given as 'Retropharyngeal area'})</span></p><p><b>outcome</b>: removal of the retropharyngeal abscess <span>(Details )</span></p><p><b>report</b>: <a>Lab results blood test</a></p><p><b>followUp</b>: described in care plan <span>(Details )</span></p></div>",
  },
  status: "completed",
  code: {
    coding: [
      {
        system: "http://snomed.info/sct",
        code: "172960003",
        display: "Incision of retropharyngeal abscess",
      },
    ],
  },
  subject: {
    reference: "Patient/f001",
    display: "P. van de Heuvel",
  },
  encounter: {
    reference: "Encounter/f003",
  },
  performedPeriod: {
    start: "2013-03-24T09:30:10+01:00",
    end: "2013-03-24T10:30:10+01:00",
  },
  performer: [
    {
      function: {
        coding: [
          {
            system: "urn:oid:2.16.840.1.113883.2.4.15.111",
            code: "01.000",
            display: "Arts",
          },
        ],
        text: "Care role",
      },
      actor: {
        reference: "Practitioner/f001",
        display: "E.M.J.M. van den broek",
      },
    },
  ],
  reasonCode: [
    {
      text: "abcess in retropharyngeal area",
    },
  ],
  bodySite: [
    {
      coding: [
        {
          system: "http://snomed.info/sct",
          code: "83030008",
          display: "Retropharyngeal area",
        },
      ],
    },
  ],
  outcome: {
    text: "removal of the retropharyngeal abscess",
  },
  report: [
    {
      reference: "DiagnosticReport/f001",
      display: "Lab results blood test",
    },
  ],
  followUp: [
    {
      text: "described in care plan",
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

export const ProcedureExampleF004Tracheotomy: Procedure = {
  resourceType: "Procedure",
  id: "f004",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: f004</p><p><b>status</b>: completed</p><p><b>code</b>: Tracheotomy <span>(Details : {SNOMED CT code '48387007' = 'Incision of trachea', given as 'Tracheotomy'})</span></p><p><b>subject</b>: <a>P. van de Heuvel</a></p><p><b>encounter</b>: <a>Encounter/f003</a></p><p><b>performed</b>: 22/03/2013 9:30:10 AM --&gt; 22/03/2013 10:30:10 AM</p><h3>Performers</h3><table><tr><td>-</td><td><b>Function</b></td><td><b>Actor</b></td></tr><tr><td>*</td><td>Care role <span>(Details : {urn:oid:2.16.840.1.113883.2.4.15.111 code '01.000' = '01.000', given as 'Arts'})</span></td><td><a>A. Langeveld</a></td></tr></table><p><b>reasonCode</b>: ensure breathing during surgery <span>(Details )</span></p><p><b>bodySite</b>: Retropharyngeal area <span>(Details : {SNOMED CT code '83030008' = 'Retropharyngeal area', given as 'Retropharyngeal area'})</span></p><p><b>outcome</b>: removal of the retropharyngeal abscess <span>(Details )</span></p><p><b>report</b>: <a>???????????</a></p><p><b>followUp</b>: described in care plan <span>(Details )</span></p></div>",
  },
  status: "completed",
  code: {
    coding: [
      {
        system: "http://snomed.info/sct",
        code: "48387007",
        display: "Tracheotomy",
      },
    ],
  },
  subject: {
    reference: "Patient/f001",
    display: "P. van de Heuvel",
  },
  encounter: {
    reference: "Encounter/f003",
  },
  performedPeriod: {
    start: "2013-03-22T09:30:10+01:00",
    end: "2013-03-22T10:30:10+01:00",
  },
  performer: [
    {
      function: {
        coding: [
          {
            system: "urn:oid:2.16.840.1.113883.2.4.15.111",
            code: "01.000",
            display: "Arts",
          },
        ],
        text: "Care role",
      },
      actor: {
        reference: "Practitioner/f005",
        display: "A. Langeveld",
      },
    },
  ],
  reasonCode: [
    {
      text: "ensure breathing during surgery",
    },
  ],
  bodySite: [
    {
      coding: [
        {
          system: "http://snomed.info/sct",
          code: "83030008",
          display: "Retropharyngeal area",
        },
      ],
    },
  ],
  outcome: {
    text: "removal of the retropharyngeal abscess",
  },
  report: [
    {
      reference: "DiagnosticReport/f001",
      display: "???????????",
    },
  ],
  followUp: [
    {
      text: "described in care plan",
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

export const ProcedureExampleF201Tpf: Procedure = {
  resourceType: "Procedure",
  id: "f201",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: f201</p><p><b>instantiatesCanonical</b>: <a>PlanDefinition/KDN5</a></p><p><b>status</b>: completed</p><p><b>code</b>: Chemotherapy <span>(Details : {SNOMED CT code '367336001' = 'Chemotherapy', given as 'Chemotherapy'})</span></p><p><b>subject</b>: <a>Roel</a></p><p><b>encounter</b>: <a>Roel's encounter on January 28th, 2013</a></p><p><b>performed</b>: 28/01/2013 1:31:00 PM --&gt; 28/01/2013 2:27:00 PM</p><h3>Performers</h3><table><tr><td>-</td><td><b>Function</b></td><td><b>Actor</b></td></tr><tr><td>*</td><td>Medical oncologist <span>(Details : {SNOMED CT code '310512001' = 'Medical oncologist', given as 'Medical oncologist'})</span></td><td><a>Dokter Bronsig</a></td></tr></table><p><b>reasonCode</b>: DiagnosticReport/f201 <span>(Details )</span></p><p><b>bodySite</b>: Sphenoid bone <span>(Details : {SNOMED CT code '272676008' = 'Entire sphenoid bone', given as 'Sphenoid bone'})</span></p><p><b>note</b>: Eerste neo-adjuvante TPF-kuur bij groot proces in sphenoid met intracraniale uitbreiding.</p></div>",
  },
  instantiatesCanonical: ["PlanDefinition/KDN5"],
  status: "completed",
  code: {
    coding: [
      {
        system: "http://snomed.info/sct",
        code: "367336001",
        display: "Chemotherapy",
      },
    ],
  },
  subject: {
    reference: "Patient/f201",
    display: "Roel",
  },
  encounter: {
    reference: "Encounter/f202",
    display: "Roel's encounter on January 28th, 2013",
  },
  performedPeriod: {
    start: "2013-01-28T13:31:00+01:00",
    end: "2013-01-28T14:27:00+01:00",
  },
  performer: [
    {
      function: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "310512001",
            display: "Medical oncologist",
          },
        ],
      },
      actor: {
        reference: "Practitioner/f201",
        display: "Dokter Bronsig",
      },
    },
  ],
  reasonCode: [
    {
      text: "DiagnosticReport/f201",
    },
  ],
  bodySite: [
    {
      coding: [
        {
          system: "http://snomed.info/sct",
          code: "272676008",
          display: "Sphenoid bone",
        },
      ],
    },
  ],
  note: [
    {
      text: "Eerste neo-adjuvante TPF-kuur bij groot proces in sphenoid met intracraniale uitbreiding.",
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

export const ProcedureExampleImplant: Procedure = {
  resourceType: "Procedure",
  id: "example-implant",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: example-implant</p><p><b>status</b>: completed</p><p><b>code</b>: Implant Pacemaker <span>(Details : {SNOMED CT code '25267002' = 'Insertion of intracardiac pacemaker', given as 'Insertion of intracardiac pacemaker (procedure)'})</span></p><p><b>subject</b>: <a>Patient/example</a></p><p><b>performed</b>: 05/04/2015</p><h3>Performers</h3><table><tr><td>-</td><td><b>Actor</b></td></tr><tr><td>*</td><td><a>Dr Cecil Surgeon</a></td></tr></table><p><b>reasonCode</b>: Bradycardia <span>(Details )</span></p><p><b>followUp</b>: ROS 5 days  - 2013-04-10 <span>(Details )</span></p><p><b>note</b>: Routine Appendectomy. Appendix was inflamed and in retro-caecal position</p><h3>FocalDevices</h3><table><tr><td>-</td><td><b>Action</b></td><td><b>Manipulated</b></td></tr><tr><td>*</td><td>Implanted <span>(Details : {http://hl7.org/fhir/device-action code 'implanted' = 'Implanted)</span></td><td><a>Device/example-pacemaker</a></td></tr></table></div>",
  },
  status: "completed",
  code: {
    coding: [
      {
        system: "http://snomed.info/sct",
        code: "25267002",
        display: "Insertion of intracardiac pacemaker (procedure)",
      },
    ],
    text: "Implant Pacemaker",
  },
  subject: {
    reference: "Patient/example",
  },
  performedDateTime: "2015-04-05",
  performer: [
    {
      actor: {
        reference: "Practitioner/example",
        display: "Dr Cecil Surgeon",
      },
    },
  ],
  reasonCode: [
    {
      text: "Bradycardia",
    },
  ],
  followUp: [
    {
      text: "ROS 5 days  - 2013-04-10",
    },
  ],
  note: [
    {
      text: "Routine Appendectomy. Appendix was inflamed and in retro-caecal position",
    },
  ],
  focalDevice: [
    {
      action: {
        coding: [
          {
            system: "http://hl7.org/fhir/device-action",
            code: "implanted",
          },
        ],
      },
      manipulated: {
        reference: "Device/example-pacemaker",
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

export const ProcedureExampleOb: Procedure = {
  resourceType: "Procedure",
  id: "ob",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">Vaginal delivery of healthy male infant on June 2, 2012</div>',
  },
  status: "completed",
  category: {
    coding: [
      {
        system: "http://snomed.info/sct",
        code: "386637004",
        display: "Obstetric procedure (procedure)",
      },
    ],
    text: "OB",
  },
  code: {
    coding: [
      {
        system: "http://snomed.info/sct",
        code: "22633006",
        display: "Vaginal delivery, medical personnel present (procedure)",
      },
    ],
    text: "Vaginal delivery",
  },
  subject: {
    display: "Jane Doe",
  },
  performedDateTime: "2012-06-02",
  performer: [
    {
      actor: {
        display: "Martha Midwife, RNP",
      },
    },
  ],
  location: {
    display: "Women’s Hospital",
  },
  reasonCode: [
    {
      text: "term pregnancy, active labor",
    },
  ],
  outcome: {
    text: "delivery of healthy male infant",
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

export const ProcedureExamplePhysicalTherapy: Procedure = {
  resourceType: "Procedure",
  id: "physical-therapy",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">Assessment of passive range of motion for both knees on Sept 27, 2016 due to osteoarthritis</div>',
  },
  basedOn: [
    {
      reference: "ServiceRequest/physical-therapy",
      display: "Order for the assessment of passive range of motion",
    },
  ],
  status: "completed",
  category: {
    coding: [
      {
        system: "http://snomed.info/sct",
        code: "386053000",
        display: "Evaluation procedure (procedure)",
      },
    ],
    text: "Evaluation",
  },
  code: {
    coding: [
      {
        system: "http://snomed.info/sct",
        code: "710830005",
        display: "Assessment of passive range of motion (procedure)",
      },
    ],
    text: "Assessment of passive range of motion",
  },
  subject: {
    reference: "Patient/example",
  },
  performedDateTime: "2016-09-27",
  performer: [
    {
      actor: {
        display: "Paul Therapist, PT",
      },
    },
  ],
  location: {
    display: "Sawbones Orthopedic Clinic",
  },
  reasonCode: [
    {
      text: "assessment of mobility limitations due to osteoarthritis",
    },
  ],
  bodySite: [
    {
      coding: [
        {
          system: "http://snomed.info/sct",
          code: "36701003",
          display: "Both knees (body structure)",
        },
      ],
      text: "Both knees",
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

export const ProcedureExample: Procedure = {
  resourceType: "Procedure",
  id: "example",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">Routine Appendectomy</div>',
  },
  status: "completed",
  code: {
    coding: [
      {
        system: "http://snomed.info/sct",
        code: "80146002",
        display: "Appendectomy (Procedure)",
      },
    ],
    text: "Appendectomy",
  },
  subject: {
    reference: "Patient/example",
  },
  performedDateTime: "2013-04-05",
  recorder: {
    reference: "Practitioner/example",
    display: "Dr Cecil Surgeon",
  },
  asserter: {
    reference: "Practitioner/example",
    display: "Dr Cecil Surgeon",
  },
  performer: [
    {
      actor: {
        reference: "Practitioner/example",
        display: "Dr Cecil Surgeon",
      },
    },
  ],
  reasonCode: [
    {
      text: "Generalized abdominal pain 24 hours. Localized in RIF with rebound and guarding",
    },
  ],
  followUp: [
    {
      text: "ROS 5 days  - 2013-04-10",
    },
  ],
  note: [
    {
      text: "Routine Appendectomy. Appendix was inflamed and in retro-caecal position",
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
