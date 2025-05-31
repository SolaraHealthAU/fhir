import type { ServiceRequest } from "../../src/v4.0.1/servicerequest/types";

export const ServicerequestExampleAmbulation: ServiceRequest = {
  resourceType: "ServiceRequest",
  id: "ambulation",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: ambulation</p><p><b>identifier</b>: 45678</p><p><b>basedOn</b>: <a>Maternity care plan</a></p><p><b>status</b>: completed</p><p><b>intent</b>: order</p><p><b>code</b>: Ambulation <span>(Details : {SNOMED CT code '62013009' = 'Ambulating patient', given as 'Ambulating patient (procedure)'})</span></p><p><b>subject</b>: <a>Patient/example</a></p><p><b>authoredOn</b>: 05/03/2017</p><p><b>requester</b>: <a>Dr. Beverly Crusher</a></p><p><b>reasonReference</b>: <a>Blood Pressure</a></p></div>",
  },
  identifier: [
    {
      value: "45678",
    },
  ],
  basedOn: [
    {
      reference: "CarePlan/preg",
      display: "Maternity care plan",
    },
  ],
  status: "completed",
  intent: "order",
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
  authoredOn: "2017-03-05",
  requester: {
    reference: "Practitioner/3ad0687e-f477-468c-afd5-fcc2bf897809",
    display: "Dr. Beverly Crusher",
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

export const ServicerequestExampleAppendectomy: ServiceRequest = {
  resourceType: "ServiceRequest",
  id: "appendectomy-narrative",
  text: {
    status: "additional",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n\t\t\t<p>Date: 2013-03-16</p>\n\t\t\t<p>Patient:: Paula Patient</p>\n\t\t\t<p>Ordered by: Angela Care, MD</p>\n\t\t\t<p>Procedure: Routine Appendectomy</p>\n\t\t\t<p>Surgeon: Dr Cecil Surgeon</p>\n\t\t</div>',
  },
  status: "completed",
  intent: "order",
  code: {
    text: "Appendectomy",
  },
  subject: {
    display: "Paula Patient",
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

export const ServicerequestExampleColonoscopyBx: ServiceRequest = {
  resourceType: "ServiceRequest",
  id: "colon-biopsy",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: colon-biopsy</p><p><b>identifier</b>: 12345</p><p><b>requisition</b>: req12345</p><p><b>status</b>: completed</p><p><b>intent</b>: order</p><p><b>code</b>: Biopsy of colon <span>(Details : {SNOMED CT code '76164006' = 'Biopsy of colon', given as 'Biopsy of colon (procedure)'})</span></p><p><b>subject</b>: <a>Patient/example</a></p><p><b>authoredOn</b>: 05/03/2017</p><p><b>requester</b>: <a>Dr. Beverly Crusher</a></p><p><b>performer</b>: <a>Dr Adam Careful</a></p></div>",
  },
  identifier: [
    {
      value: "12345",
    },
  ],
  requisition: {
    system: "http://bumc.org/requisitions",
    value: "req12345",
  },
  status: "completed",
  intent: "order",
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
  authoredOn: "2017-03-05",
  requester: {
    reference: "Practitioner/3ad0687e-f477-468c-afd5-fcc2bf897809",
    display: "Dr. Beverly Crusher",
  },
  performer: [
    {
      reference: "Practitioner/example",
      display: "Dr Adam Careful",
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

export const ServicerequestExampleColonoscopy: ServiceRequest = {
  resourceType: "ServiceRequest",
  id: "colonoscopy",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: colonoscopy</p><p><b>identifier</b>: 45678</p><p><b>requisition</b>: req12345</p><p><b>status</b>: completed</p><p><b>intent</b>: order</p><p><b>code</b>: Colonoscopy <span>(Details : {SNOMED CT code '73761001' = 'Colonoscopy', given as 'Colonoscopy (procedure)'})</span></p><p><b>subject</b>: <a>Patient/example</a></p><p><b>authoredOn</b>: 05/03/2017</p><p><b>requester</b>: <a>Dr. Beverly Crusher</a></p><p><b>performer</b>: <a>Dr Adam Careful</a></p></div>",
  },
  identifier: [
    {
      value: "45678",
    },
  ],
  requisition: {
    system: "http://bumc.org/requisitions",
    value: "req12345",
  },
  status: "completed",
  intent: "order",
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
  authoredOn: "2017-03-05",
  requester: {
    reference: "Practitioner/3ad0687e-f477-468c-afd5-fcc2bf897809",
    display: "Dr. Beverly Crusher",
  },
  performer: [
    {
      reference: "Practitioner/example",
      display: "Dr Adam Careful",
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

export const ServicerequestExampleDi: ServiceRequest = {
  resourceType: "ServiceRequest",
  id: "di",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: di</p><p><b>status</b>: active</p><p><b>intent</b>: original-order</p><p><b>code</b>: Chest CT <span>(Details : {LOINC code '24627-2' = 'Chest CT)</span></p><p><b>subject</b>: <a>Patient/dicom</a></p><p><b>occurrence</b>: 08/05/2013 9:33:27 AM</p><p><b>requester</b>: <a>Dr. Adam Careful</a></p><p><b>reasonCode</b>: Check for metastatic disease <span>(Details )</span></p></div>",
  },
  status: "active",
  intent: "original-order",
  code: {
    coding: [
      {
        system: "http://loinc.org",
        code: "24627-2",
      },
    ],
    text: "Chest CT",
  },
  subject: {
    reference: "Patient/dicom",
  },
  occurrenceDateTime: "2013-05-08T09:33:27+07:00",
  requester: {
    reference: "Practitioner/example",
    display: "Dr. Adam Careful",
  },
  reasonCode: [
    {
      text: "Check for metastatic disease",
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

export const ServicerequestExampleEdu: ServiceRequest = {
  resourceType: "ServiceRequest",
  id: "education",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: education</p><p><b>status</b>: completed</p><p><b>intent</b>: order</p><p><b>category</b>: Education <span>(Details : {SNOMED CT code '311401005' = 'Patient education', given as 'Patient education (procedure)'})</span></p><p><b>code</b>: Health education - breast examination <span>(Details : {SNOMED CT code '48023004' = 'Breast self-examination technique education', given as 'Breast self-examination technique education (procedure)'})</span></p><p><b>subject</b>: Jane Doe</p><p><b>occurrence</b>: 16/08/2014</p><p><b>authoredOn</b>: 16/08/2016</p><p><b>requester</b>: Angela Care, MD</p><p><b>performer</b>: Pamela Educator, RN</p><p><b>reasonCode</b>: early detection of breast mass <span>(Details )</span></p></div>",
  },
  status: "completed",
  intent: "order",
  category: [
    {
      coding: [
        {
          system: "http://snomed.info/sct",
          code: "311401005",
          display: "Patient education (procedure)",
        },
      ],
      text: "Education",
    },
  ],
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
  occurrenceDateTime: "2014-08-16",
  authoredOn: "2016-08-16",
  requester: {
    display: "Angela Care, MD",
  },
  performer: [
    {
      display: "Pamela Educator, RN",
    },
  ],
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

export const ServicerequestExampleFt4: ServiceRequest = {
  resourceType: "ServiceRequest",
  id: "ft4",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: ft4</p><p><b>status</b>: active</p><p><b>intent</b>: reflex-order</p><p><b>code</b>: Free T4 <span>(Details : {LOINC code '3024-7' = 'Thyroxine (T4) free [Mass/volume] in Serum or Plasma', given as 'Thyroxine (T4) free [Mass/​volume] in Serum or Plasma'})</span></p><p><b>subject</b>: <a>Patient/pat2</a></p><p><b>occurrence</b>: 27/08/2015 9:33:27 AM</p><p><b>requester</b>: <a>Practitioner/example</a></p></div>",
  },
  status: "active",
  intent: "reflex-order",
  code: {
    coding: [
      {
        system: "http://loinc.org",
        code: "3024-7",
        display: "Thyroxine (T4) free [Mass/​volume] in Serum or Plasma",
      },
    ],
    text: "Free T4",
  },
  subject: {
    reference: "Patient/pat2",
  },
  occurrenceDateTime: "2015-08-27T09:33:27+07:00",
  requester: {
    reference: "Practitioner/example",
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

export const ServicerequestExampleImplant: ServiceRequest = {
  resourceType: "ServiceRequest",
  id: "example-implant",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: example-implant</p><p><b>status</b>: completed</p><p><b>intent</b>: order</p><p><b>code</b>: Implant Pacemaker <span>(Details : {SNOMED CT code '25267002' = 'Insertion of intracardiac pacemaker', given as 'Insertion of intracardiac pacemaker (procedure)'})</span></p><p><b>subject</b>: <a>Patient/example</a></p><p><b>authoredOn</b>: 30/03/2015</p><p><b>requester</b>: <a>Dr. Beverly Crusher</a></p><p><b>performer</b>: <a>Dr Cecil Surgeon</a></p><p><b>reasonCode</b>: Bradycardia <span>(Details )</span></p></div>",
  },
  status: "completed",
  intent: "order",
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
  authoredOn: "2015-03-30",
  requester: {
    reference: "Practitioner/3ad0687e-f477-468c-afd5-fcc2bf897809",
    display: "Dr. Beverly Crusher",
  },
  performer: [
    {
      reference: "Practitioner/example",
      display: "Dr Cecil Surgeon",
    },
  ],
  reasonCode: [
    {
      text: "Bradycardia",
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

export const ServicerequestExampleLipid: ServiceRequest = {
  resourceType: "ServiceRequest",
  id: "lipid",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: lipid</p><p><b>contained</b>: , </p><p><b>identifier</b>: Placer = 2345234234234</p><p><b>status</b>: active</p><p><b>intent</b>: original-order</p><p><b>code</b>: Lipid Panel <span>(Details : {http://acme.org/tests code 'LIPID' = 'LIPID)</span></p><p><b>subject</b>: <a>Patient/example</a></p><p><b>encounter</b>: <a>Encounter/example</a></p><p><b>occurrence</b>: 02/05/2013 4:16:00 PM</p><p><b>requester</b>: <a>Practitioner/example</a></p><p><b>performer</b>: <a>Practitioner/f202</a></p><p><b>reasonCode</b>: Fam hx-ischem heart dis <span>(Details : {ICD-9 code 'V173' = 'V173', given as 'Fam hx-ischem heart dis'})</span></p><p><b>supportingInfo</b>: Fasting status. Generated Summary: id: fasting; status: final; Fasting status - Reported <span>(Details : {LOINC code '49541-6' = 'Fasting status - Reported', given as 'Fasting status - Reported'})</span>; Yes <span>(Details : {http://terminology.hl7.org/CodeSystem/v2-0136 code 'Y' = 'Yes', given as 'Yes'})</span></p><p><b>specimen</b>: Serum specimen. Generated Summary: id: serum; 20150107-0012; Serum sample <span>(Details : {SNOMED CT code '119364003' = 'Serum specimen', given as 'Serum sample'})</span></p><p><b>note</b>: patient is afraid of needles</p></div>",
  },
  contained: [
    {
      resourceType: "Observation",
      id: "fasting",
      status: "final",
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "49541-6",
            display: "Fasting status - Reported",
          },
        ],
      },
      subject: {
        reference: "Patient/example",
      },
      valueCodeableConcept: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/v2-0136",
            code: "Y",
            display: "Yes",
          },
        ],
      },
    },
    {
      resourceType: "Specimen",
      id: "serum",
      identifier: [
        {
          system: "http://acme.org/specimens",
          value: "20150107-0012",
        },
      ],
      type: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "119364003",
            display: "Serum sample",
          },
        ],
      },
      subject: {
        reference: "Patient/example",
      },
      collection: {
        collectedDateTime: "2015-08-16T06:40:17Z",
      },
    },
  ],
  identifier: [
    {
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/v2-0203",
            code: "PLAC",
          },
        ],
        text: "Placer",
      },
      system: "urn:oid:1.3.4.5.6.7",
      value: "2345234234234",
    },
  ],
  status: "active",
  intent: "original-order",
  code: {
    coding: [
      {
        system: "http://acme.org/tests",
        code: "LIPID",
      },
    ],
    text: "Lipid Panel",
  },
  subject: {
    reference: "Patient/example",
  },
  encounter: {
    reference: "Encounter/example",
  },
  occurrenceDateTime: "2013-05-02T16:16:00-07:00",
  requester: {
    reference: "Practitioner/example",
  },
  performer: [
    {
      reference: "Practitioner/f202",
    },
  ],
  reasonCode: [
    {
      coding: [
        {
          system: "http://hl7.org/fhir/sid/icd-9",
          code: "V173",
          display: "Fam hx-ischem heart dis",
        },
      ],
    },
  ],
  supportingInfo: [
    {
      reference: "#fasting",
      display: "Fasting status",
    },
  ],
  specimen: [
    {
      reference: "#serum",
      display: "Serum specimen",
    },
  ],
  note: [
    {
      text: "patient is afraid of needles",
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

export const ServicerequestExampleMyringotomy: ServiceRequest = {
  resourceType: "ServiceRequest",
  id: "myringotomy",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: myringotomy</p><p><b>identifier</b>: ret4421</p><p><b>basedOn</b>: ServiceRequest for Myringotomy and insertion of tympanic ventilation tube</p><p><b>replaces</b>: prior ServiceRequest</p><p><b>requisition</b>: 1234</p><p><b>status</b>: active</p><p><b>intent</b>: order</p><p><b>category</b>: Patient referral to specialist <span>(Details : {SNOMED CT code '103696004' = 'Patient referral to specialist', given as 'Patient referral to specialist'})</span></p><p><b>priority</b>: routine</p><p><b>code</b>: Insertion of grommets <span>(Details : {SNOMED CT code '172676009' = 'Myringotomy and insertion of short-term grommet', given as 'Myringotomy and insertion of tympanic ventilation tube'})</span></p><p><b>subject</b>: <a>Beverly Weaver</a></p><p><b>encounter</b>: Beverly Waver's encounter on 2014-02-14</p><p><b>occurrence</b>: ?? --&gt; 14/03/2014</p><p><b>authoredOn</b>: 14/02/2014</p><p><b>requester</b>: <a>Serena Shrink</a></p><p><b>performerType</b>: ENT <span>(Details : {http://orionhealth.com/fhir/apps/specialties code 'ent' = 'ent', given as 'ENT'})</span></p><p><b>performer</b>: <a>Dr Dave</a></p><p><b>reasonCode</b>: For consideration of Grommets <span>(Details )</span></p><p><b>note</b>: In the past 2 years Beverly has had 6 instances of rt-sided Otitis media. She is     falling behind her peers at school, and displaying some learning difficulties.</p></div>",
  },
  identifier: [
    {
      system: "http://orionhealth.com/fhir/apps/referralids",
      value: "ret4421",
    },
  ],
  basedOn: [
    {
      display:
        "ServiceRequest for Myringotomy and insertion of tympanic ventilation tube",
    },
  ],
  replaces: [
    {
      display: "prior ServiceRequest",
    },
  ],
  requisition: {
    value: "1234",
  },
  status: "active",
  intent: "order",
  category: [
    {
      coding: [
        {
          system: "http://snomed.info/sct",
          code: "103696004",
          display: "Patient referral to specialist",
        },
      ],
    },
  ],
  priority: "routine",
  code: {
    coding: [
      {
        system: "http://snomed.info/sct",
        code: "172676009",
        display: "Myringotomy and insertion of tympanic ventilation tube",
      },
    ],
    text: "Insertion of grommets",
  },
  subject: {
    reference: "https://fhir.orionhealth.com/blaze/fhir/Patient/77662",
    display: "Beverly Weaver",
  },
  encounter: {
    display: "Beverly Waver's encounter on 2014-02-14",
  },
  occurrencePeriod: {
    end: "2014-03-14",
  },
  authoredOn: "2014-02-14",
  requester: {
    reference: "https://fhir.orionhealth.com/blaze/fhir/Practitioner/77272",
    display: "Serena Shrink",
  },
  performerType: {
    coding: [
      {
        system: "http://orionhealth.com/fhir/apps/specialties",
        code: "ent",
        display: "ENT",
      },
    ],
  },
  performer: [
    {
      reference: "https://fhir.orionhealth.com/blaze/fhir/Practitioner/76597",
      display: "Dr Dave",
    },
  ],
  reasonCode: [
    {
      text: "For consideration of Grommets",
    },
  ],
  note: [
    {
      authorString: "Serena Shrink",
      time: "2014-02-14",
      text: "In the past 2 years Beverly has had 6 instances of rt-sided Otitis media. She is     falling behind her peers at school, and displaying some learning difficulties.",
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

export const ServicerequestExampleOb: ServiceRequest = {
  resourceType: "ServiceRequest",
  id: "ob",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: ob</p><p><b>status</b>: completed</p><p><b>intent</b>: order</p><p><b>category</b>: OB <span>(Details : {SNOMED CT code '386637004' = 'Obstetric procedure', given as 'Obstetric procedure (procedure)'})</span></p><p><b>code</b>: Vaginal delivery <span>(Details : {SNOMED CT code '22633006' = 'Vaginal delivery, medical personnel present', given as 'Vaginal delivery, medical personnel present (procedure)'})</span></p><p><b>subject</b>: Jane Doe</p><p><b>occurrence</b>: 02/06/2012</p><p><b>requester</b>: Women’s Hospital</p><p><b>performer</b>: Martha Midwife, RNP</p><p><b>reasonCode</b>: term pregnancy, active labor <span>(Details )</span></p></div>",
  },
  status: "completed",
  intent: "order",
  category: [
    {
      coding: [
        {
          system: "http://snomed.info/sct",
          code: "386637004",
          display: "Obstetric procedure (procedure)",
        },
      ],
      text: "OB",
    },
  ],
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
  occurrenceDateTime: "2012-06-02",
  requester: {
    display: "Women’s Hospital",
  },
  performer: [
    {
      display: "Martha Midwife, RNP",
    },
  ],
  reasonCode: [
    {
      text: "term pregnancy, active labor",
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

export const ServicerequestExamplePgx: ServiceRequest = {
  resourceType: "ServiceRequest",
  id: "example-pgx",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: example-pgx</p><p><b>status</b>: active</p><p><b>intent</b>: original-order</p><p><b>code</b>: CYP2D6 gene targeted mutation analysis <span>(Details : {LOINC code '47403-1' = 'CYP2D6 gene mutation analysis in Blood or Tissue by Molecular genetics method Narrative', given as 'CYP2D6 gene targeted mutation analysis'})</span></p><p><b>subject</b>: <a>Patient/899962</a></p><p><b>authoredOn</b>: 10/10/2016 3:00:00 PM</p><p><b>requester</b>: <a>Practitioner/12345</a></p></div>",
  },
  status: "active",
  intent: "original-order",
  code: {
    coding: [
      {
        system: "http://loinc.org",
        code: "47403-1",
        display: "CYP2D6 gene targeted mutation analysis",
      },
    ],
  },
  subject: {
    reference: "Patient/899962",
  },
  authoredOn: "2016-10-10T15:00:00-07:00",
  requester: {
    reference: "Practitioner/12345",
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

export const ServicerequestExamplePt: ServiceRequest = {
  resourceType: "ServiceRequest",
  id: "physical-therapy",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: physical-therapy</p><p><b>status</b>: completed</p><p><b>intent</b>: order</p><p><b>category</b>: Evaluation <span>(Details : {SNOMED CT code '386053000' = 'Patient evaluation procedure', given as 'Evaluation procedure (procedure)'})</span></p><p><b>code</b>: Assessment of passive range of motion <span>(Details : {SNOMED CT code '710830005' = 'Assessment of passive range of motion', given as 'Assessment of passive range of motion (procedure)'})</span></p><p><b>subject</b>: <a>Patient/example</a></p><p><b>occurrence</b>: 27/09/2016</p><p><b>authoredOn</b>: 20/09/2016</p><p><b>requester</b>: Ollie Ortho, MD</p><p><b>performer</b>: Paul Therapist, PT</p><p><b>reasonCode</b>: assessment of mobility limitations due to osteoarthritis <span>(Details )</span></p><p><b>bodySite</b>: Both knees <span>(Details : {SNOMED CT code '36701003' = 'Both knees', given as 'Both knees (body structure)'})</span></p></div>",
  },
  status: "completed",
  intent: "order",
  category: [
    {
      coding: [
        {
          system: "http://snomed.info/sct",
          code: "386053000",
          display: "Evaluation procedure (procedure)",
        },
      ],
      text: "Evaluation",
    },
  ],
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
  occurrenceDateTime: "2016-09-27",
  authoredOn: "2016-09-20",
  requester: {
    display: "Ollie Ortho, MD",
  },
  performer: [
    {
      display: "Paul Therapist, PT",
    },
  ],
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

export const ServicerequestExampleSubrequest: ServiceRequest = {
  resourceType: "ServiceRequest",
  id: "subrequest",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: subrequest</p><p><b>basedOn</b>: Original Request</p><p><b>replaces</b>: Previous allergy test</p><p><b>requisition</b>: A13848392</p><p><b>status</b>: active</p><p><b>intent</b>: instance-order</p><p><b>priority</b>: routine</p><p><b>code</b>: Peanut IgG <span>(Details : {LOINC code '35542-0' = 'Peanut IgG Ab [Mass/volume] in Serum)</span></p><p><b>subject</b>: <a>Patient/dicom</a></p><p><b>occurrence</b>: 08/05/2013 9:33:27 AM</p><p><b>requester</b>: <a>Dr. Adam Careful</a></p><p><b>performerType</b>: Nurse <span>(Details : {[not stated] code 'null' = 'null', given as 'Qualified nurse'})</span></p><p><b>reasonCode</b>: Check for Peanut Allergy <span>(Details )</span></p><p><b>bodySite</b>: Right arm <span>(Details : {[not stated] code 'null' = 'null', given as 'Right arm'})</span></p></div>",
  },
  basedOn: [
    {
      display: "Original Request",
    },
  ],
  replaces: [
    {
      display: "Previous allergy test",
    },
  ],
  requisition: {
    value: "A13848392",
  },
  status: "active",
  intent: "instance-order",
  priority: "routine",
  code: {
    coding: [
      {
        system: "http://loinc.org",
        code: "35542-0",
      },
    ],
    text: "Peanut IgG",
  },
  subject: {
    reference: "Patient/dicom",
  },
  occurrenceDateTime: "2013-05-08T09:33:27+07:00",
  requester: {
    reference: "Practitioner/example",
    display: "Dr. Adam Careful",
  },
  performerType: {
    coding: [
      {
        display: "Qualified nurse",
      },
    ],
    text: "Nurse",
  },
  reasonCode: [
    {
      text: "Check for Peanut Allergy",
    },
  ],
  bodySite: [
    {
      coding: [
        {
          display: "Right arm",
        },
      ],
      text: "Right arm",
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

export const ServicerequestExampleVentilation: ServiceRequest = {
  resourceType: "ServiceRequest",
  id: "vent",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: vent</p><p><b>status</b>: completed</p><p><b>intent</b>: order</p><p><b>code</b>: Mechanical Ventilation <span>(Details : {SNOMED CT code '40617009' = 'Artificial respiration', given as 'Artificial respiration (procedure)'})</span></p><p><b>orderDetail</b>: IPPB <span>(Details : {SNOMED CT code '243144002' = 'Patient triggered inspiratory assistance', given as 'Patient triggered inspiratory assistance (procedure)'})</span>,  Initial Settings : Sens: -1 cm H20 Pressure 15 cm H2O moderate flow:  Monitor VS every 15 minutes x 4 at the start of mechanical ventilation, then routine for unit OR every 5 hr <span>(Details )</span></p><p><b>subject</b>: <a>Patient/example</a></p><p><b>authoredOn</b>: 20/02/2018</p><p><b>requester</b>: <a>Dr. Beverly Crusher</a></p><p><b>performer</b>: <a>Dr Cecil Surgeon</a></p><p><b>reasonCode</b>: chronic obstructive lung disease (COLD) <span>(Details )</span></p></div>",
  },
  status: "completed",
  intent: "order",
  code: {
    coding: [
      {
        system: "http://snomed.info/sct",
        code: "40617009",
        display: "Artificial respiration (procedure)",
      },
    ],
    text: "Mechanical Ventilation",
  },
  orderDetail: [
    {
      coding: [
        {
          system: "http://snomed.info/sct",
          code: "243144002",
          display: "Patient triggered inspiratory assistance (procedure)",
        },
      ],
      text: "IPPB",
    },
    {
      text: " Initial Settings : Sens: -1 cm H20 Pressure 15 cm H2O moderate flow:  Monitor VS every 15 minutes x 4 at the start of mechanical ventilation, then routine for unit OR every 5 hr",
    },
  ],
  subject: {
    reference: "Patient/example",
  },
  authoredOn: "2018-02-20",
  requester: {
    reference: "Practitioner/3ad0687e-f477-468c-afd5-fcc2bf897809",
    display: "Dr. Beverly Crusher",
  },
  performer: [
    {
      reference: "Practitioner/example",
      display: "Dr Cecil Surgeon",
    },
  ],
  reasonCode: [
    {
      text: "chronic obstructive lung disease (COLD)",
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

export const ServicerequestExample: ServiceRequest = {
  resourceType: "ServiceRequest",
  id: "example",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">To be added</div>',
  },
  status: "completed",
  intent: "order",
  category: [
    {
      coding: [
        {
          system: "http://snomed.info/sct",
          code: "103693007",
          display: "Diagnostic procedure (procedure)",
        },
      ],
      text: "Diagnostics Procedure",
    },
  ],
  code: {
    coding: [
      {
        system: "http://snomed.info/sct",
        code: "303653007",
        display: "Computed tomography of head",
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

export const ServicerequestExample2: ServiceRequest = {
  resourceType: "ServiceRequest",
  id: "physiotherapy",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: physiotherapy</p><p><b>contained</b>: , </p><p><b>identifier</b>: Placer = 20170201-0001</p><p><b>basedOn</b>: <a>CarePlan/gpvisit</a></p><p><b>status</b>: completed</p><p><b>intent</b>: order</p><p><b>code</b>: Physiotherapy of chest (regime/therapy)  <span>(Details : {SNOMED CT code '34431008' = 'Physiotherapy of chest', given as 'Physiotherapy of chest (regime/therapy) '})</span></p><p><b>subject</b>: <a>Patient/example</a></p><p><b>occurrence</b>: Duration 15days, Do 1-1 per 1 days</p><p><b>asNeeded</b>: as needed to clear mucus <span>(Details )</span></p><p><b>authoredOn</b>: 01/02/2017 5:23:07 PM</p><p><b>requester</b>: <a>Dr Adam Careful</a></p><p><b>reasonReference</b>: id: cystic-fibrosis; Active <span>(Details : {http://terminology.hl7.org/CodeSystem/condition-clinical code 'active' = 'Active)</span>; Confirmed <span>(Details : {http://terminology.hl7.org/CodeSystem/condition-ver-status code 'confirmed' = 'Confirmed)</span>; Problem List Item <span>(Details : {http://terminology.hl7.org/CodeSystem/condition-category code 'problem-list-item' = 'Problem List Item', given as 'Problem List Item'})</span>; Mild <span>(Details : {SNOMED CT code '255604002' = 'Mild', given as 'Mild'})</span>; Cystic Fibrosis <span>(Details : {http://hl7.org/fhir/sid/icd-10-cm code 'E84.0' = 'E84.0', given as 'Cystic fibrosis with pulmonary manifestations'})</span>; onset: 12/11/2012</p><p><b>relevantHistory</b>: Author's Signature. Generated Summary: id: signature; recorded: 01/02/2017 5:23:07 PM; </p></div>",
  },
  contained: [
    {
      resourceType: "Provenance",
      id: "signature",
      target: [
        {
          reference: "ServiceRequest/physiotherapy/_history/1",
        },
      ],
      recorded: "2017-02-01T17:23:07Z",
      agent: [
        {
          role: [
            {
              coding: [
                {
                  system:
                    "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
                  code: "AUT",
                },
              ],
            },
          ],
          who: {
            reference: "Practitioner/example",
            display: "Dr Adam Careful",
          },
        },
      ],
      signature: [
        {
          type: [
            {
              system: "urn:iso-astm:E1762-95:2013",
              code: "1.2.840.10065.1.12.1.1",
              display: "Author's Signature",
            },
          ],
          when: "2017-02-01T17:23:07Z",
          who: {
            reference: "Practitioner/example",
            display: "Dr Adam Careful",
          },
          targetFormat: "application/fhir+xml",
          sigFormat: "application/signature+xml",
          data: "dGhpcyBibG9iIGlzIHNuaXBwZWQ=",
        },
      ],
    },
    {
      resourceType: "Condition",
      id: "cystic-fibrosis",
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
            system:
              "http://terminology.hl7.org/CodeSystem/condition-ver-status",
            code: "confirmed",
          },
        ],
      },
      category: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/condition-category",
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
        coding: [
          {
            system: "http://hl7.org/fhir/sid/icd-10-cm",
            code: "E84.0",
            display: "Cystic fibrosis with pulmonary manifestations",
          },
        ],
        text: "Cystic Fibrosis",
      },
      subject: {
        reference: "Patient/example",
      },
      onsetDateTime: "2012-11-12",
    },
  ],
  identifier: [
    {
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/v2-0203",
            code: "PLAC",
            display: "Placer Identifier",
          },
        ],
        text: "Placer",
      },
      system: "http://goodhealth.org/placer-ids",
      value: "20170201-0001",
    },
  ],
  basedOn: [
    {
      reference: "CarePlan/gpvisit",
    },
  ],
  status: "completed",
  intent: "order",
  code: {
    coding: [
      {
        system: "http://snomed.info/sct",
        code: "34431008",
        display: "Physiotherapy of chest (regime/therapy) ",
      },
    ],
  },
  subject: {
    reference: "Patient/example",
  },
  occurrenceTiming: {
    repeat: {
      duration: 15,
      durationMax: 25,
      durationUnit: "min",
      frequency: 1,
      frequencyMax: 4,
      period: 1,
      periodUnit: "d",
    },
  },
  asNeededCodeableConcept: {
    text: "as needed to clear mucus",
  },
  authoredOn: "2017-02-01T17:23:07Z",
  requester: {
    reference: "Practitioner/example",
    display: "Dr Adam Careful",
  },
  reasonReference: [
    {
      reference: "#cystic-fibrosis",
    },
  ],
  relevantHistory: [
    {
      reference: "#signature",
      display: "Author's Signature",
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

export const ServicerequestExample3: ServiceRequest = {
  resourceType: "ServiceRequest",
  id: "do-not-turn",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: do-not-turn</p><p><b>identifier</b>: 20170201-0002</p><p><b>status</b>: active</p><p><b>intent</b>: order</p><p><b>priority</b>: stat</p><p><b>doNotPerform</b>: true</p><p><b>code</b>: Turning patient in bed (procedure) <span>(Details : {SNOMED CT code '359962006' = 'Turning patient in bed', given as 'Turning patient in bed (procedure)'})</span></p><p><b>subject</b>: <a>Patient/example</a></p><p><b>authoredOn</b>: 01/02/2017 5:23:07 PM</p><p><b>requester</b>: <a>Dr Adam Careful</a></p><p><b>reasonReference</b>: Patient has a spinal fracture</p></div>",
  },
  identifier: [
    {
      system: "http://goodhealth.org/placer-ids",
      value: "20170201-0002",
    },
  ],
  status: "active",
  intent: "order",
  priority: "stat",
  doNotPerform: true,
  code: {
    coding: [
      {
        system: "http://snomed.info/sct",
        code: "359962006",
        display: "Turning patient in bed (procedure)",
      },
    ],
  },
  subject: {
    reference: "Patient/example",
  },
  authoredOn: "2017-02-01T17:23:07Z",
  requester: {
    reference: "Practitioner/example",
    display: "Dr Adam Careful",
  },
  reasonReference: [
    {
      display: "Patient has a spinal fracture",
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

export const ServicerequestExample4: ServiceRequest = {
  resourceType: "ServiceRequest",
  id: "benchpress",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: benchpress</p><p><b>status</b>: active</p><p><b>intent</b>: plan</p><p><b>code</b>: Bench Press (regime/therapy)  <span>(Details : {SNOMED CT code '229115003' = 'Bench press', given as 'Bench Press (regime/therapy) '})</span></p><p><b>subject</b>: <a>Patient/example</a></p><p><b>occurrence</b>: Count 20 times, Do 3 per 1 weeks</p><p><b>patientInstruction</b>: Start with 30kg 10-15 repetitions for three sets and increase in increments of 5kg when you feel ready</p></div>",
  },
  status: "active",
  intent: "plan",
  code: {
    coding: [
      {
        system: "http://snomed.info/sct",
        code: "229115003",
        display: "Bench Press (regime/therapy) ",
      },
    ],
  },
  subject: {
    reference: "Patient/example",
  },
  occurrenceTiming: {
    repeat: {
      count: 20,
      countMax: 30,
      frequency: 3,
      period: 1,
      periodUnit: "wk",
    },
  },
  patientInstruction:
    "Start with 30kg 10-15 repetitions for three sets and increase in increments of 5kg when you feel ready",
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

export const ServicerequestGeneticsExample1: ServiceRequest = {
  resourceType: "ServiceRequest",
  id: "og-example1",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: og-example1</p><p><b>status</b>: active</p><p><b>intent</b>: original-order</p><p><b>code</b>: ABCB4 gene mutation analysis <span>(Details : {LOINC code '49874-1' = 'ABCB4 gene mutation analysis in Blood or Tissue by Molecular genetics method Narrative)</span></p><p><b>subject</b>: <a>Patient/example</a></p><p><b>encounter</b>: <a>Encounter/example</a></p><p><b>occurrence</b>: 12/05/2014 4:16:00 PM</p><p><b>requester</b>: <a>Practitioner/example</a></p><p><b>performer</b>: <a>Practitioner/example</a></p></div>",
  },
  status: "active",
  intent: "original-order",
  code: {
    coding: [
      {
        system: "http://loinc.org",
        code: "49874-1",
      },
    ],
    text: "ABCB4 gene mutation analysis",
  },
  subject: {
    reference: "Patient/example",
  },
  encounter: {
    reference: "Encounter/example",
  },
  occurrenceDateTime: "2014-05-12T16:16:00-07:00",
  requester: {
    reference: "Practitioner/example",
  },
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
