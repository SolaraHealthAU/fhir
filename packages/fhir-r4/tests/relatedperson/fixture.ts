import type { RelatedPerson } from "../../src/v4.0.1/relatedperson/types";

export const RelatedpersonExampleF001Sarah: RelatedPerson = {
  resourceType: "RelatedPerson",
  id: "f001",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n     Sarah Abels\n    </div>',
  },
  identifier: [
    {
      use: "official",
      type: {
        text: "BSN",
      },
      system: "urn:oid:2.16.840.1.113883.2.4.6.3",
    },
  ],
  patient: {
    reference: "Patient/f001",
  },
  relationship: [
    {
      coding: [
        {
          system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
          code: "SIGOTHR",
        },
      ],
    },
  ],
  name: [
    {
      use: "usual",
      family: "Abels",
      given: ["Sarah"],
    },
  ],
  telecom: [
    {
      system: "phone",
      value: "0690383372",
      use: "mobile",
    },
    {
      system: "email",
      value: "s.abels@kpn.nl",
      use: "home",
    },
  ],
  gender: "female",
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

export const RelatedpersonExampleF002Ariadne: RelatedPerson = {
  resourceType: "RelatedPerson",
  id: "f002",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n     Ariadne Bor-Jansma\n    </div>',
  },
  patient: {
    reference: "Patient/f201",
  },
  relationship: [
    {
      coding: [
        {
          system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
          code: "SIGOTHR",
        },
      ],
    },
  ],
  name: [
    {
      use: "usual",
      text: "Ariadne Bor-Jansma",
    },
  ],
  telecom: [
    {
      system: "phone",
      value: "+31201234567",
      use: "home",
    },
  ],
  gender: "female",
  birthDate: "1963",
  photo: [
    {
      contentType: "image/jpeg",
      data: "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",
    },
  ],
  period: {
    start: "1975",
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

export const RelatedpersonExampleNewbornMom: RelatedPerson = {
  resourceType: "RelatedPerson",
  id: "newborn-mom",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: newborn-mom</p><p><b>identifier</b>: Social Security number = 444222222</p><p><b>active</b>: true</p><p><b>patient</b>: <a>Patient/newborn</a></p><p><b>relationship</b>: Natural Mother <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-RoleCode code 'NMTH' = 'natural mother', given as 'natural mother'})</span></p><p><b>name</b>: Eve Everywoman (OFFICIAL)</p><p><b>telecom</b>: ph: 555-555-2003(WORK)</p><p><b>gender</b>: female</p><p><b>birthDate</b>: 31/05/1973</p><p><b>address</b>: 2222 Home Street (HOME)</p></div>",
  },
  identifier: [
    {
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/v2-0203",
            code: "SS",
          },
        ],
      },
      system: "http://hl7.org/fhir/sid/us-ssn",
      value: "444222222",
    },
  ],
  active: true,
  patient: {
    reference: "Patient/newborn",
  },
  relationship: [
    {
      coding: [
        {
          system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
          code: "NMTH",
          display: "natural mother",
        },
      ],
      text: "Natural Mother",
    },
  ],
  name: [
    {
      use: "official",
      family: "Everywoman",
      given: ["Eve"],
    },
  ],
  telecom: [
    {
      system: "phone",
      value: "555-555-2003",
      use: "work",
    },
  ],
  gender: "female",
  birthDate: "1973-05-31",
  address: [
    {
      use: "home",
      line: ["2222 Home Street"],
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
