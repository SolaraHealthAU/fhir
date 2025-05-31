import type { OrganizationAffiliation } from "../../src/v4.0.1/organizationaffiliation/types";

export const OrganizationaffiliationExample: OrganizationAffiliation = {
  resourceType: "OrganizationAffiliation",
  id: "example",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n\t\t\t<p>\n\t\t\t\tHL7 Payer Network services for Acme Hospital from 1-Jan 2012 to 31-Mar 2012\n\t\t\t</p>\n\t\t</div>',
  },
  identifier: [
    {
      system: "http://www.acme.org/practitioners",
      value: "23",
    },
  ],
  active: true,
  period: {
    start: "2012-01-01",
    end: "2012-03-31",
  },
  organization: {
    reference: "Organization/hl7pay",
  },
  participatingOrganization: {
    reference: "Organization/f001",
  },
  network: [
    {
      reference: "Organization/hl7pay",
      display: "HL7 Payer Network",
    },
  ],
  code: [
    {
      coding: [
        {
          system: "http://terminology.hl7.org/CodeSystem/organization-role",
          code: "provider",
        },
      ],
    },
  ],
  specialty: [
    {
      coding: [
        {
          system: "http://snomed.info/sct",
          code: "408443003",
          display: "General medical practice",
        },
      ],
    },
  ],
  location: [
    {
      reference: "Location/1",
      display: "South Wing, second floor",
    },
  ],
  healthcareService: [
    {
      reference: "HealthcareService/example",
    },
  ],
  telecom: [
    {
      system: "email",
      value: "general.practice@example.org",
      use: "work",
    },
  ],
  endpoint: [
    {
      reference: "Endpoint/example",
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

export const OrgroleExampleHie: OrganizationAffiliation = {
  resourceType: "OrganizationAffiliation",
  id: "orgrole2",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: orgrole2</p><p><b>identifier</b>: member hospital = hosp32 (SECONDARY)</p><p><b>active</b>: true</p><p><b>organization</b>: <a>Monument Health Information Exchange</a></p><p><b>participatingOrganization</b>: <a>Founding Fathers Memorial Hospital</a></p><p><b>code</b>: Hospital member <span>(Details : {http://hl7.org/fhir/organization-role code 'member' = 'Member', given as 'Member'})</span></p><p><b>endpoint</b>: <a>Founding Fathers Memorial Hospital HIE endpoint</a></p></div>",
  },
  identifier: [
    {
      use: "secondary",
      type: {
        text: "member hospital",
      },
      system: "http://example.org/www.monumentHIE.com",
      value: "hosp32",
      assigner: {
        reference: "http://hl7.org/fhir/ig/vhdir/Organization/monumentHIE",
        display: "Monument Health Information Exchange",
      },
    },
  ],
  active: true,
  organization: {
    reference: "http://hl7.org/fhir/ig/vhdir/Organization/monumentHIE",
    display: "Monument Health Information Exchange",
  },
  participatingOrganization: {
    reference: "http://hl7.org/fhir/ig/vhdir/Organization/foundingfathers",
    display: "Founding Fathers Memorial Hospital",
  },
  code: [
    {
      coding: [
        {
          system: "http://hl7.org/fhir/organization-role",
          code: "member",
          display: "Member",
        },
      ],
      text: "Hospital member",
    },
  ],
  endpoint: [
    {
      reference: "http://hl7.org/fhir/ig/vhdir/Endpoint/foundingfathersHIE",
      display: "Founding Fathers Memorial Hospital HIE endpoint",
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

export const OrgroleExampleServices: OrganizationAffiliation = {
  resourceType: "OrganizationAffiliation",
  id: "orgrole1",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: orgrole1</p><p><b>identifier</b>: service002 (SECONDARY)</p><p><b>active</b>: true</p><p><b>period</b>: 09/02/2018 --&gt; 01/02/2022</p><p><b>organization</b>: <a>Founding Fathers Memorial Hospital</a></p><p><b>participatingOrganization</b>: <a>Independence Rehabilitation Services, Inc.</a></p><p><b>network</b>: <a>Patriot Preferred Provider Network</a></p><p><b>code</b>: Provider of rehabilitation services <span>(Details : {http://hl7.org/fhir/organization-role code 'provider' = 'Provider', given as 'Provider'})</span></p><p><b>specialty</b>: Rehabilitation <span>(Details : {SNOMED CT code '394602003' = 'Rehabilitation - speciality', given as 'Rehabilitation - specialty'})</span></p><p><b>location</b>: <a>Founding Fathers Memorial Hospital</a></p><p><b>healthcareService</b>: </p><ul><li><a>Inpatient rehabilitation services</a></li><li><a>Outpatient rehabilitation services</a></li></ul><p><b>telecom</b>: ph: 202-109-8765(WORK)</p></div>",
  },
  identifier: [
    {
      use: "secondary",
      system: "http://example.org/www.foundingfathersmemorial.com",
      value: "service002",
      assigner: {
        reference: "http://hl7.org/fhir/ig/vhdir/Organization/foundingfathers",
        display: "Founding Fathers Memorial Hospital",
      },
    },
  ],
  active: true,
  period: {
    start: "2018-02-09",
    end: "2022-02-01",
  },
  organization: {
    reference: "http://hl7.org/fhir/ig/vhdir/Organization/foundingfathers",
    display: "Founding Fathers Memorial Hospital",
  },
  participatingOrganization: {
    reference: "http://hl7.org/fhir/ig/vhdir/Organization/independencerehab",
    display: "Independence Rehabilitation Services, Inc.",
  },
  network: [
    {
      reference: "http://hl7.org/fhir/ig/vhdir/Network/patriotppo",
      display: "Patriot Preferred Provider Network",
    },
  ],
  code: [
    {
      coding: [
        {
          system: "http://hl7.org/fhir/organization-role",
          code: "provider",
          display: "Provider",
          userSelected: true,
        },
      ],
      text: "Provider of rehabilitation services",
    },
  ],
  specialty: [
    {
      coding: [
        {
          system: "http://snomed.info/sct",
          code: "394602003",
          display: "Rehabilitation - specialty",
        },
      ],
      text: "Rehabilitation",
    },
  ],
  location: [
    {
      reference: "http://hl7.org/fhir/ig/vhdir/Location/foundingfathers1",
      display: "Founding Fathers Memorial Hospital",
    },
  ],
  healthcareService: [
    {
      reference:
        "http://hl7.org/fhir/ig/vhdir/HealthcareService/independencerehab1",
      display: "Inpatient rehabilitation services",
    },
    {
      reference:
        "http://hl7.org/fhir/ig/vhdir/HealthcareService/independencerehab2",
      display: "Outpatient rehabilitation services",
    },
  ],
  telecom: [
    {
      system: "phone",
      value: "202-109-8765",
      use: "work",
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
