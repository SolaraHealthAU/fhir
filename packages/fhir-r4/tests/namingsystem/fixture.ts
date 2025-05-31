import type { NamingSystem } from "../../src/v4.0.1/namingsystem/types";

export const NamingsystemExampleId: NamingSystem = {
  resourceType: "NamingSystem",
  id: "example-id",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n      <p>\n        <b>Australian IHI Number</b>\n      </p>\n      \n      <p> oid: 1.2.36.1.2001.1003.0</p>\n      \n      <p> uri: http://ns.electronichealth.net.au/id/hi/ihi/1.0</p>\n    \n    </div>',
  },
  name: "Austalian Healthcare Identifier - Individual",
  status: "active",
  kind: "identifier",
  date: "2015-08-31",
  publisher: "HL7 Australia on behalf of NEHTA",
  contact: [
    {
      name: "HL7 Australia FHIR Team",
      telecom: [
        {
          system: "url",
          value: "http://hl7-australia.wikispaces.com/FHIR+Australia",
        },
      ],
    },
  ],
  responsible: "HI Service Operator / NEHTA",
  type: {
    coding: [
      {
        system: "http://terminology.hl7.org/CodeSystem/v2-0203",
        code: "NI",
        display: "National unique individual identifier",
      },
    ],
    text: "IHI",
  },
  description:
    "Australian HI Identifier as established by relevant regulations etc.",
  jurisdiction: [
    {
      coding: [
        {
          system: "urn:iso:std:iso:3166",
          code: "AU",
        },
      ],
    },
  ],
  usage: "Used in Australia for identifying patients",
  uniqueId: [
    {
      type: "oid",
      value: "1.2.36.1.2001.1003.0",
      comment: "This value is used in Australian CDA documents",
    },
    {
      type: "uri",
      value: "http://ns.electronichealth.net.au/id/hi/ihi/1.0",
      preferred: true,
      period: {
        start: "2015-08-21",
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

export const NamingsystemExample: NamingSystem = {
  resourceType: "NamingSystem",
  id: "example",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n      \n      <p>\n        <b>SNOMED CT</b>\n      </p>\n      \n      <p> oid: 2.16.840.1.113883.6.96</p>\n      \n      <p> uri: http://snomed.info/sct</p>\n    \n    </div>',
  },
  name: "SNOMED CT",
  status: "active",
  kind: "codesystem",
  date: "2014-12-13",
  publisher: "HL7 International on behalf of IHTSDO",
  contact: [
    {
      name: "FHIR project team",
      telecom: [
        {
          system: "url",
          value: "http://hl7.org/fhir",
        },
      ],
    },
  ],
  responsible: "IHTSDO & affiliates",
  description:
    'SNOMED CT is a concept-based, scientifically validated terminology that provides a unique and permanent concept identifier that can be included in multiple HL7 data types including CD and CE.  The concepts are managed to avoid "semantic drift" so the meaning remains constant.  If the concept is found to be ambiguous or the meaning changes, the concept is inactivated but still retained and the identifier is never reused.    SNOMED CT\'s concepts are interrelated hierarchically and using description logic.    SNOMED CT concepts have a unique "fully-specified name", a preferred term, and, optionally, synonyms.  The description languages include English and Spanish.',
  uniqueId: [
    {
      type: "oid",
      value: "2.16.840.1.113883.6.96",
    },
    {
      type: "uri",
      value: "http://snomed.info/sct",
      preferred: true,
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
