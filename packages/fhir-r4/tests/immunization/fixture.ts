import type { Immunization } from "../../src/v4.0.1/immunization/types";

export const ImmunizationExampleHistorical: Immunization = {
  resourceType: "Immunization",
  id: "historical",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: historical</p><p><b>identifier</b>: urn:oid:1.3.6.1.4.1.21367.2005.3.7.1234</p><p><b>status</b>: completed</p><p><b>vaccineCode</b>: Influenza <span>(Details : {urn:oid:1.2.36.1.2001.1005.17 code 'GNFLU' = 'Influenza)</span></p><p><b>patient</b>: <a>Patient/example</a></p><p><b>occurrence</b>: January 2012</p><p><b>primarySource</b>: false</p><p><b>reportOrigin</b>: Written Record <span>(Details : {http://terminology.hl7.org/CodeSystem/immunization-origin code 'record' = 'Written Record)</span></p><p><b>location</b>: <a>Location/1</a></p><p><b>note</b>: Notes on adminstration of a historical vaccine</p></div>",
  },
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:1.3.6.1.4.1.21367.2005.3.7.1234",
    },
  ],
  status: "completed",
  vaccineCode: {
    coding: [
      {
        system: "urn:oid:1.2.36.1.2001.1005.17",
        code: "GNFLU",
      },
    ],
    text: "Influenza",
  },
  patient: {
    reference: "Patient/example",
  },
  occurrenceString: "January 2012",
  primarySource: false,
  reportOrigin: {
    coding: [
      {
        system: "http://terminology.hl7.org/CodeSystem/immunization-origin",
        code: "record",
      },
    ],
    text: "Written Record",
  },
  location: {
    reference: "Location/1",
  },
  note: [
    {
      text: "Notes on adminstration of a historical vaccine",
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

export const ImmunizationExampleProtocol: Immunization = {
  resourceType: "Immunization",
  id: "protocol",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: protocol</p><p><b>identifier</b>: urn:oid:1.3.6.1.4.1.21367.2005.3.7.1234</p><p><b>status</b>: completed</p><p><b>vaccineCode</b>: Twinrix (HepA/HepB) <span>(Details : {http://hl7.org/fhir/sid/cvx code '104' = 'Hep A-Hep B)</span></p><p><b>patient</b>: <a>Patient/example</a></p><p><b>encounter</b>: <a>Encounter/example</a></p><p><b>occurrence</b>: 18/06/2018</p><p><b>primarySource</b>: true</p><p><b>location</b>: <a>Location/1</a></p><p><b>manufacturer</b>: <a>Organization/hl7</a></p><p><b>lotNumber</b>: PT123F</p><p><b>expirationDate</b>: 15/12/2018</p><p><b>site</b>: left arm <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-ActSite code 'LA' = 'left arm', given as 'left arm'})</span></p><p><b>route</b>: Injection, intramuscular <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-RouteOfAdministration code 'IM' = 'Injection, intramuscular', given as 'Injection, intramuscular'})</span></p><p><b>doseQuantity</b>: 5 mg<span> (Details: UCUM code mg = 'mg')</span></p><blockquote><p><b>performer</b></p><p><b>function</b>: Ordering Provider <span>(Details : {http://terminology.hl7.org/CodeSystem/v2-0443 code 'OP' = 'Ordering Provider)</span></p><p><b>actor</b>: <a>Practitioner/example</a></p></blockquote><blockquote><p><b>performer</b></p><p><b>function</b>: Administering Provider <span>(Details : {http://terminology.hl7.org/CodeSystem/v2-0443 code 'AP' = 'Administering Provider)</span></p><p><b>actor</b>: <a>Practitioner/example</a></p></blockquote><p><b>isSubpotent</b>: false</p><p><b>programEligibility</b>: Not Eligible <span>(Details : {http://terminology.hl7.org/CodeSystem/immunization-program-eligibility code 'ineligible' = 'Not Eligible)</span></p><p><b>fundingSource</b>: Private <span>(Details : {http://terminology.hl7.org/CodeSystem/immunization-funding-source code 'private' = 'Private)</span></p><blockquote><p><b>protocolApplied</b></p><p><b>series</b>: 2-dose</p><p><b>targetDisease</b>: Viral hepatitis, type A <span>(Details : {SNOMED CT code '40468003' = 'Viral hepatitis, type A)</span></p><p><b>doseNumber</b>: 1</p></blockquote><blockquote><p><b>protocolApplied</b></p><p><b>series</b>: 3-dose</p><p><b>targetDisease</b>: Type B viral hepatitis <span>(Details : {SNOMED CT code '66071002' = 'Type B viral hepatitis)</span></p><p><b>doseNumber</b>: 2</p></blockquote></div>",
  },
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:1.3.6.1.4.1.21367.2005.3.7.1234",
    },
  ],
  status: "completed",
  vaccineCode: {
    coding: [
      {
        system: "http://hl7.org/fhir/sid/cvx",
        code: "104",
      },
    ],
    text: "Twinrix (HepA/HepB)",
  },
  patient: {
    reference: "Patient/example",
  },
  encounter: {
    reference: "Encounter/example",
  },
  occurrenceDateTime: "2018-06-18",
  primarySource: true,
  location: {
    reference: "Location/1",
  },
  manufacturer: {
    reference: "Organization/hl7",
  },
  lotNumber: "PT123F",
  expirationDate: "2018-12-15",
  site: {
    coding: [
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActSite",
        code: "LA",
        display: "left arm",
      },
    ],
  },
  route: {
    coding: [
      {
        system:
          "http://terminology.hl7.org/CodeSystem/v3-RouteOfAdministration",
        code: "IM",
        display: "Injection, intramuscular",
      },
    ],
  },
  doseQuantity: {
    value: 5,
    system: "http://unitsofmeasure.org",
    code: "mg",
  },
  performer: [
    {
      function: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/v2-0443",
            code: "OP",
          },
        ],
      },
      actor: {
        reference: "Practitioner/example",
      },
    },
    {
      function: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/v2-0443",
            code: "AP",
          },
        ],
      },
      actor: {
        reference: "Practitioner/example",
      },
    },
  ],
  isSubpotent: false,
  programEligibility: [
    {
      coding: [
        {
          system:
            "http://terminology.hl7.org/CodeSystem/immunization-program-eligibility",
          code: "ineligible",
        },
      ],
    },
  ],
  fundingSource: {
    coding: [
      {
        system:
          "http://terminology.hl7.org/CodeSystem/immunization-funding-source",
        code: "private",
      },
    ],
  },
  protocolApplied: [
    {
      series: "2-dose",
      targetDisease: [
        {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "40468003",
            },
          ],
        },
      ],
      doseNumberPositiveInt: 1,
    },
    {
      series: "3-dose",
      targetDisease: [
        {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "66071002",
            },
          ],
        },
      ],
      doseNumberPositiveInt: 2,
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

export const ImmunizationExampleRefused: Immunization = {
  resourceType: "Immunization",
  id: "notGiven",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: notGiven</p><p><b>status</b>: not-done</p><p><b>statusReason</b>: medical precaution <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-ActReason code 'MEDPREC' = 'medical precaution', given as 'medical precaution'})</span></p><p><b>vaccineCode</b>: DTP <span>(Details : {http://hl7.org/fhir/sid/cvx code '01' = 'DTP', given as 'DTP'})</span></p><p><b>patient</b>: <a>Patient/example</a></p><p><b>occurrence</b>: 10/01/2013</p><p><b>primarySource</b>: true</p></div>",
  },
  status: "not-done",
  statusReason: {
    coding: [
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "MEDPREC",
        display: "medical precaution",
      },
    ],
  },
  vaccineCode: {
    coding: [
      {
        system: "http://hl7.org/fhir/sid/cvx",
        code: "01",
        display: "DTP",
      },
    ],
  },
  patient: {
    reference: "Patient/example",
  },
  occurrenceDateTime: "2013-01-10",
  primarySource: true,
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

export const ImmunizationExampleSubpotent: Immunization = {
  resourceType: "Immunization",
  id: "subpotent",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: subpotent</p><p><b>identifier</b>: urn:oid:1.3.6.1.4.1.21367.2005.3.7.1234</p><p><b>status</b>: completed</p><p><b>vaccineCode</b>: Hepatitis B <span>(Details : {urn:oid:1.2.36.1.2001.1005.17 code 'GNHEP' = 'Hepatitis B)</span></p><p><b>patient</b>: <a>Patient/example</a></p><p><b>encounter</b>: <a>Encounter/example</a></p><p><b>occurrence</b>: 15/01/2015</p><p><b>primarySource</b>: true</p><p><b>location</b>: <a>Location/1</a></p><p><b>manufacturer</b>: <a>Organization/hl7</a></p><p><b>lotNumber</b>: AAJN11K</p><p><b>expirationDate</b>: 28/02/2015</p><p><b>site</b>: left thigh <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-ActSite code 'LT' = 'left thigh', given as 'left thigh'})</span></p><p><b>route</b>: Injection, intramuscular <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-RouteOfAdministration code 'IM' = 'Injection, intramuscular', given as 'Injection, intramuscular'})</span></p><p><b>doseQuantity</b>: 0.5 ml<span> (Details: UCUM code ml = 'ml')</span></p><blockquote><p><b>performer</b></p><p><b>function</b>: Ordering Provider <span>(Details : {http://terminology.hl7.org/CodeSystem/v2-0443 code 'OP' = 'Ordering Provider)</span></p><p><b>actor</b>: <a>Practitioner/example</a></p></blockquote><blockquote><p><b>performer</b></p><p><b>function</b>: Administering Provider <span>(Details : {http://terminology.hl7.org/CodeSystem/v2-0443 code 'AP' = 'Administering Provider)</span></p><p><b>actor</b>: <a>Practitioner/example</a></p></blockquote><p><b>note</b>: Notes on adminstration of vaccine</p><p><b>isSubpotent</b>: false</p><p><b>subpotentReason</b>: Partial Dose <span>(Details : {http://terminology.hl7.org/CodeSystem/immunization-subpotent-reason code 'partial' = 'Partial Dose)</span></p><h3>Educations</h3><table><tr><td>-</td><td><b>DocumentType</b></td><td><b>PublicationDate</b></td><td><b>PresentationDate</b></td></tr><tr><td>*</td><td>253088698300010311120702</td><td>02/07/2012</td><td>10/01/2013</td></tr></table><p><b>programEligibility</b>: Not Eligible <span>(Details : {http://terminology.hl7.org/CodeSystem/immunization-program-eligibility code 'ineligible' = 'Not Eligible)</span></p><p><b>fundingSource</b>: Private <span>(Details : {http://terminology.hl7.org/CodeSystem/immunization-funding-source code 'private' = 'Private)</span></p></div>",
  },
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:1.3.6.1.4.1.21367.2005.3.7.1234",
    },
  ],
  status: "completed",
  vaccineCode: {
    coding: [
      {
        system: "urn:oid:1.2.36.1.2001.1005.17",
        code: "GNHEP",
      },
    ],
    text: "Hepatitis B",
  },
  patient: {
    reference: "Patient/example",
  },
  encounter: {
    reference: "Encounter/example",
  },
  occurrenceDateTime: "2015-01-15",
  primarySource: true,
  location: {
    reference: "Location/1",
  },
  manufacturer: {
    reference: "Organization/hl7",
  },
  lotNumber: "AAJN11K",
  expirationDate: "2015-02-28",
  site: {
    coding: [
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActSite",
        code: "LT",
        display: "left thigh",
      },
    ],
  },
  route: {
    coding: [
      {
        system:
          "http://terminology.hl7.org/CodeSystem/v3-RouteOfAdministration",
        code: "IM",
        display: "Injection, intramuscular",
      },
    ],
  },
  doseQuantity: {
    value: 0.5,
    system: "http://unitsofmeasure.org",
    code: "ml",
  },
  performer: [
    {
      function: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/v2-0443",
            code: "OP",
          },
        ],
      },
      actor: {
        reference: "Practitioner/example",
      },
    },
    {
      function: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/v2-0443",
            code: "AP",
          },
        ],
      },
      actor: {
        reference: "Practitioner/example",
      },
    },
  ],
  note: [
    {
      text: "Notes on adminstration of vaccine",
    },
  ],
  isSubpotent: false,
  subpotentReason: [
    {
      coding: [
        {
          system:
            "http://terminology.hl7.org/CodeSystem/immunization-subpotent-reason",
          code: "partial",
        },
      ],
    },
  ],
  education: [
    {
      documentType: "253088698300010311120702",
      publicationDate: "2012-07-02",
      presentationDate: "2013-01-10",
    },
  ],
  programEligibility: [
    {
      coding: [
        {
          system:
            "http://terminology.hl7.org/CodeSystem/immunization-program-eligibility",
          code: "ineligible",
        },
      ],
    },
  ],
  fundingSource: {
    coding: [
      {
        system:
          "http://terminology.hl7.org/CodeSystem/immunization-funding-source",
        code: "private",
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

export const ImmunizationExample: Immunization = {
  resourceType: "Immunization",
  id: "example",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: example</p><p><b>identifier</b>: urn:oid:1.3.6.1.4.1.21367.2005.3.7.1234</p><p><b>status</b>: completed</p><p><b>vaccineCode</b>: Fluvax (Influenza) <span>(Details : {urn:oid:1.2.36.1.2001.1005.17 code 'FLUVAX' = 'Fluvax)</span></p><p><b>patient</b>: <a>Patient/example</a></p><p><b>encounter</b>: <a>Encounter/example</a></p><p><b>occurrence</b>: 10/01/2013</p><p><b>primarySource</b>: true</p><p><b>location</b>: <a>Location/1</a></p><p><b>manufacturer</b>: <a>Organization/hl7</a></p><p><b>lotNumber</b>: AAJN11K</p><p><b>expirationDate</b>: 15/02/2015</p><p><b>site</b>: left arm <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-ActSite code 'LA' = 'left arm', given as 'left arm'})</span></p><p><b>route</b>: Injection, intramuscular <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-RouteOfAdministration code 'IM' = 'Injection, intramuscular', given as 'Injection, intramuscular'})</span></p><p><b>doseQuantity</b>: 5 mg<span> (Details: UCUM code mg = 'mg')</span></p><blockquote><p><b>performer</b></p><p><b>function</b>: Ordering Provider <span>(Details : {http://terminology.hl7.org/CodeSystem/v2-0443 code 'OP' = 'Ordering Provider)</span></p><p><b>actor</b>: <a>Practitioner/example</a></p></blockquote><blockquote><p><b>performer</b></p><p><b>function</b>: Administering Provider <span>(Details : {http://terminology.hl7.org/CodeSystem/v2-0443 code 'AP' = 'Administering Provider)</span></p><p><b>actor</b>: <a>Practitioner/example</a></p></blockquote><p><b>note</b>: Notes on adminstration of vaccine</p><p><b>reasonCode</b>: Procedure to meet occupational requirement <span>(Details : {SNOMED CT code '429060002' = 'Procedure to meet occupational requirement)</span></p><p><b>isSubpotent</b>: true</p><h3>Educations</h3><table><tr><td>-</td><td><b>DocumentType</b></td><td><b>PublicationDate</b></td><td><b>PresentationDate</b></td></tr><tr><td>*</td><td>253088698300010311120702</td><td>02/07/2012</td><td>10/01/2013</td></tr></table><p><b>programEligibility</b>: Not Eligible <span>(Details : {http://terminology.hl7.org/CodeSystem/immunization-program-eligibility code 'ineligible' = 'Not Eligible)</span></p><p><b>fundingSource</b>: Private <span>(Details : {http://terminology.hl7.org/CodeSystem/immunization-funding-source code 'private' = 'Private)</span></p></div>",
  },
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:1.3.6.1.4.1.21367.2005.3.7.1234",
    },
  ],
  status: "completed",
  vaccineCode: {
    coding: [
      {
        system: "urn:oid:1.2.36.1.2001.1005.17",
        code: "FLUVAX",
      },
    ],
    text: "Fluvax (Influenza)",
  },
  patient: {
    reference: "Patient/example",
  },
  encounter: {
    reference: "Encounter/example",
  },
  occurrenceDateTime: "2013-01-10",
  primarySource: true,
  location: {
    reference: "Location/1",
  },
  manufacturer: {
    reference: "Organization/hl7",
  },
  lotNumber: "AAJN11K",
  expirationDate: "2015-02-15",
  site: {
    coding: [
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActSite",
        code: "LA",
        display: "left arm",
      },
    ],
  },
  route: {
    coding: [
      {
        system:
          "http://terminology.hl7.org/CodeSystem/v3-RouteOfAdministration",
        code: "IM",
        display: "Injection, intramuscular",
      },
    ],
  },
  doseQuantity: {
    value: 5,
    system: "http://unitsofmeasure.org",
    code: "mg",
  },
  performer: [
    {
      function: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/v2-0443",
            code: "OP",
          },
        ],
      },
      actor: {
        reference: "Practitioner/example",
      },
    },
    {
      function: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/v2-0443",
            code: "AP",
          },
        ],
      },
      actor: {
        reference: "Practitioner/example",
      },
    },
  ],
  note: [
    {
      text: "Notes on adminstration of vaccine",
    },
  ],
  reasonCode: [
    {
      coding: [
        {
          system: "http://snomed.info/sct",
          code: "429060002",
        },
      ],
    },
  ],
  isSubpotent: true,
  education: [
    {
      documentType: "253088698300010311120702",
      publicationDate: "2012-07-02",
      presentationDate: "2013-01-10",
    },
  ],
  programEligibility: [
    {
      coding: [
        {
          system:
            "http://terminology.hl7.org/CodeSystem/immunization-program-eligibility",
          code: "ineligible",
        },
      ],
    },
  ],
  fundingSource: {
    coding: [
      {
        system:
          "http://terminology.hl7.org/CodeSystem/immunization-funding-source",
        code: "private",
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
