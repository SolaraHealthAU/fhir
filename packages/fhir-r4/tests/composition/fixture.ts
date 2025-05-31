import type { Composition } from "../../src/v4.0.1/composition/types";

export const CompositionExampleMixed: Composition = {
  resourceType: "Composition",
  id: "example-mixed",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: example-mixed</p><p><b>status</b>: final</p><p><b>type</b>: Neonatal perinatal medicine Discharge summary <span>(Details : {LOINC code '78418-1' = 'Neonatal perinatal medicine Discharge summary', given as 'Neonatal perinatal medicine Discharge summary'})</span></p><p><b>category</b>: Report <span>(Details : {LOINC code 'LP173421-1' = 'Report', given as 'Report'})</span></p><p><b>date</b>: 30/10/2018 4:56:04 PM</p><p><b>author</b>: <a>Harold Hippocrates, MD</a></p><p><b>title</b>: Discharge Summary (Neonatal Service)</p><p><b>confidentiality</b>: N</p><h3>Attesters</h3><table><tr><td>-</td><td><b>Mode</b></td><td><b>Time</b></td><td><b>Party</b></td></tr><tr><td>*</td><td>legal</td><td>04/01/2012 9:10:14 AM</td><td><a>Harold Hippocrates, MD</a></td></tr></table><p><b>custodian</b>: <a>Good Health Clinic</a></p></div>",
  },
  status: "final",
  type: {
    coding: [
      {
        system: "http://loinc.org",
        code: "78418-1",
        display: "Neonatal perinatal medicine Discharge summary",
      },
    ],
  },
  category: [
    {
      coding: [
        {
          system: "http://loinc.org",
          code: "LP173421-1",
          display: "Report",
        },
      ],
    },
  ],
  subject: {
    reference: "Patient/newborn",
    display: "Tahlia Smith",
  },
  date: "2018-10-30T16:56:04+11:00",
  author: [
    {
      reference: "Practitioner/xcda-author",
      display: "Harold Hippocrates, MD",
    },
  ],
  title: "Discharge Summary (Neonatal Service)",
  confidentiality: "N",
  attester: [
    {
      mode: "legal",
      time: "2012-01-04T09:10:14Z",
      party: {
        reference: "Practitioner/xcda-author",
        display: "Harold Hippocrates, MD",
      },
    },
  ],
  custodian: {
    reference: "Organization/2.16.840.1.113883.19.5",
    display: "Good Health Clinic",
  },
  section: [
    {
      title: "Child's Details",
      code: {
        coding: [
          {
            system: "http://acme.org/codes/SectionType",
            code: "newborn",
            display: "New Born Details",
          },
        ],
      },
      text: {
        status: "generated",
        div: '<div xmlns="http://www.w3.org/1999/xhtml">\n        (snip)\n\t\t\t</div>',
      },
    },
    {
      title: "Mpther's Details",
      code: {
        coding: [
          {
            system: "http://acme.org/codes/SectionType",
            code: "mother",
            display: "Mother's Details",
          },
        ],
      },
      text: {
        status: "generated",
        div: '<div xmlns="http://www.w3.org/1999/xhtml">\n\t\t\t\t(snip)\n\t\t\t</div>',
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

export const CompositionExample: Composition = {
  resourceType: "Composition",
  id: "example",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n\t\t\t<p>Consultation note for Henry Levin the 7th</p>\n\t\t\t<p>Managed by Good Health Clinic</p>\n\t\t</div>',
  },
  identifier: {
    system: "http://healthintersections.com.au/test",
    value: "1",
  },
  status: "final",
  type: {
    coding: [
      {
        system: "http://loinc.org",
        code: "11488-4",
        display: "Consult note",
      },
    ],
  },
  category: [
    {
      coding: [
        {
          system: "http://loinc.org",
          code: "LP173421-1",
          display: "Report",
        },
      ],
    },
  ],
  subject: {
    reference: "Patient/xcda",
    display: "Henry Levin the 7th",
  },
  encounter: {
    reference: "Encounter/xcda",
  },
  date: "2012-01-04T09:10:14Z",
  author: [
    {
      reference: "Practitioner/xcda-author",
      display: "Harold Hippocrates, MD",
    },
  ],
  title: "Consultation Note",
  confidentiality: "N",
  attester: [
    {
      mode: "legal",
      time: "2012-01-04T09:10:14Z",
      party: {
        reference: "Practitioner/xcda-author",
        display: "Harold Hippocrates, MD",
      },
    },
  ],
  custodian: {
    reference: "Organization/2.16.840.1.113883.19.5",
    display: "Good Health Clinic",
  },
  relatesTo: [
    {
      code: "replaces",
      targetReference: {
        reference: "Composition/old-example",
      },
    },
    {
      code: "appends",
      targetIdentifier: {
        system: "http://example.org/fhir/NamingSystem/document-ids",
        value: "ABC123",
      },
    },
  ],
  event: [
    {
      code: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
              code: "HEALTHREC",
              display: "health record",
            },
          ],
        },
      ],
      period: {
        start: "2010-07-18",
        end: "2012-11-12",
      },
      detail: [
        {
          reference: "Observation/example",
        },
      ],
    },
  ],
  section: [
    {
      title: "History of present illness",
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "11348-0",
            display: "History of past illness Narrative",
          },
        ],
      },
      text: {
        status: "generated",
        div: '<div xmlns="http://www.w3.org/1999/xhtml">\n\t\t\t\t<table>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<b>Code</b>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<b>Date</b>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<b>Type</b>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<b>BodySite</b>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<b>Severity</b>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>Stroke</td>\n\t\t\t\t\t\t<td>2010-07-18</td>\n\t\t\t\t\t\t<td>Diagnosis</td>\n\t\t\t\t\t\t<td/>\n\t\t\t\t\t\t<td/>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>Burnt Ear</td>\n\t\t\t\t\t\t<td>2012-05-24</td>\n\t\t\t\t\t\t<td>Diagnosis</td>\n\t\t\t\t\t\t<td>Left Ear</td>\n\t\t\t\t\t\t<td/>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>Asthma</td>\n\t\t\t\t\t\t<td>2012-11-12</td>\n\t\t\t\t\t\t<td>Finding</td>\n\t\t\t\t\t\t<td/>\n\t\t\t\t\t\t<td>Mild</td>\n\t\t\t\t\t</tr>\n\t\t\t\t</table>\n\t\t\t</div>',
      },
      mode: "snapshot",
      orderedBy: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/list-order",
            code: "event-date",
            display: "Sorted by Event Date",
          },
        ],
      },
      entry: [
        {
          reference: "Condition/stroke",
        },
        {
          reference: "Condition/example",
        },
        {
          reference: "Condition/example2",
        },
      ],
    },
    {
      title: "History of family member diseases",
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "10157-6",
            display: "History of family member diseases Narrative",
          },
        ],
      },
      text: {
        status: "generated",
        div: '<div xmlns="http://www.w3.org/1999/xhtml">\n\t\t\t\t<p>History of family member diseases - not available</p>\n\t\t\t</div>',
      },
      mode: "snapshot",
      emptyReason: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/list-empty-reason",
            code: "withheld",
            display: "Information Withheld",
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
