import type { Contract } from "../../src/v4.0.1/contract/types";

export const ContractExample42cfrPart2: Contract = {
  resourceType: "Contract",
  id: "C-2121",
  meta: {
    versionId: "1",
    lastUpdated: "2016-07-19T18:18:42.108-04:00",
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
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: C-2121</p><p><b>meta</b>: </p><p><b>status</b>: executed</p><p><b>contentDerivative</b>: Content Registration <span>(Details : {http://terminology.hl7.org/CodeSystem/contract-content-derivative code 'registration' = 'Content Registration)</span></p><p><b>issued</b>: 01/11/2013 9:18:27 PM</p><p><b>applies</b>: 01/11/2013 9:18:27 PM --&gt; (ongoing)</p><p><b>subject</b>: <a>Patient/f201</a></p><p><b>type</b>: Opt-in consent directive <span>(Details : {http://mdhhs.org/fhir/consentdirective-type code 'OPTIN' = 'OPTIN)</span></p><p><b>subType</b>: Health Care Directive <span>(Details : {http://terminology.hl7.org/CodeSystem/consentcategorycodes code 'hcd' = 'Health Care Directive)</span></p><blockquote><p><b>term</b></p><h3>Offers</h3><table><tr><td>-</td><td><b>Type</b></td><td><b>Decision</b></td><td><b>Text</b></td></tr><tr><td>*</td><td>Statutory <span>(Details : {http://terminology.hl7.org/CodeSystem/contracttermtypecodes code 'statutory' = 'Statutory)</span></td><td>opt-in <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-ActCode code 'OPTIN' = 'opt-in)</span></td><td>Can't refuse</td></tr></table><h3>Assets</h3><table><tr><td>-</td><td><b>Period</b></td></tr><tr><td>*</td><td>01/11/2013 9:18:27 PM --&gt; 01/11/2019 9:18:27 PM</td></tr></table><blockquote><p><b>action</b></p><p><b>type</b>: Action A <span>(Details : {http://terminology.hl7.org/CodeSystem/contractaction code 'action-a' = 'Action A)</span></p><blockquote><p><b>subject</b></p><p><b>reference</b>: <a>VA Ann Arbor Healthcare System</a></p><p><b>role</b>: Recipient of restricted health information <span>(Details : {http://mdhhs.org/fhir/consent-actor-type code 'IR' = 'IR', given as 'Recipient'})</span></p></blockquote><blockquote><p><b>subject</b></p><p><b>reference</b>: <a>Community Mental Health Clinic</a></p><p><b>role</b>: Sender of restricted health information <span>(Details : {http://mdhhs.org/fhir/consent-actor-type code 'IS' = 'IS', given as 'Sender'})</span></p></blockquote><p><b>intent</b>: health program reporting <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-ActReason code 'HPRGRP' = 'health program reporting)</span></p><p><b>status</b>: Sample <span>(Details )</span></p></blockquote></blockquote><h3>Signers</h3><table><tr><td>-</td><td><b>Type</b></td><td><b>Party</b></td><td><b>Signature</b></td></tr><tr><td>*</td><td>SELF (Details: http://mdhhs.org/fhir/consent-signer-type code SELF = 'SELF', stated as 'null')</td><td><a>Alice Recruit</a></td><td/></tr></table><h3>Legals</h3><table><tr><td>-</td><td><b>Content[x]</b></td></tr><tr><td>*</td><td/></tr></table></div>",
  },
  status: "executed",
  contentDerivative: {
    coding: [
      {
        system:
          "http://terminology.hl7.org/CodeSystem/contract-content-derivative",
        code: "registration",
      },
    ],
  },
  issued: "2013-11-01T21:18:27-04:00",
  applies: {
    start: "2013-11-01T21:18:27-04:00",
  },
  subject: [
    {
      reference: "Patient/f201",
    },
  ],
  type: {
    coding: [
      {
        system: "http://mdhhs.org/fhir/consentdirective-type",
        code: "OPTIN",
      },
    ],
    text: "Opt-in consent directive",
  },
  subType: [
    {
      coding: [
        {
          system: "http://terminology.hl7.org/CodeSystem/consentcategorycodes",
          code: "hcd",
        },
      ],
    },
  ],
  term: [
    {
      offer: {
        type: {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/contracttermtypecodes",
              code: "statutory",
            },
          ],
        },
        decision: {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
              code: "OPTIN",
            },
          ],
        },
        text: "Can't refuse",
      },
      asset: [
        {
          period: [
            {
              start: "2013-11-01T21:18:27-04:00",
              end: "2019-11-01T21:18:27-04:00",
            },
          ],
        },
      ],
      action: [
        {
          type: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/contractaction",
                code: "action-a",
              },
            ],
          },
          subject: [
            {
              reference: [
                {
                  reference: "Organization/f001",
                  display: "VA Ann Arbor Healthcare System",
                },
              ],
              role: {
                coding: [
                  {
                    system: "http://mdhhs.org/fhir/consent-actor-type",
                    code: "IR",
                    display: "Recipient",
                  },
                ],
                text: "Recipient of restricted health information",
              },
            },
            {
              reference: [
                {
                  reference: "Organization/2",
                  display: "Community Mental Health Clinic",
                },
              ],
              role: {
                coding: [
                  {
                    system: "http://mdhhs.org/fhir/consent-actor-type",
                    code: "IS",
                    display: "Sender",
                  },
                ],
                text: "Sender of restricted health information",
              },
            },
          ],
          intent: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
                code: "HPRGRP",
              },
            ],
          },
          status: {
            text: "Sample",
          },
        },
      ],
    },
  ],
  signer: [
    {
      type: {
        system: "http://mdhhs.org/fhir/consent-signer-type",
        code: "SELF",
      },
      party: {
        reference: "Patient/f201",
        display: "Alice Recruit",
      },
      signature: [
        {
          type: [
            {
              system: "urn:iso-astm:E1762-95:2013",
              code: "1.2.840.10065.1.12.1.1",
            },
          ],
          when: "2017-02-08T10:57:34+01:00",
          who: {
            reference: "Patient/f201",
          },
        },
      ],
    },
  ],
  legal: [
    {
      contentAttachment: {
        contentType: "application/pdf",
        language: "en-US",
        url: "http://org.mihin.ecms/ConsentDirective-2121",
        title: "MDHHS-5515 Consent To Share Your Health Information",
      },
    },
  ],
} as const;

export const ContractExampleInsPolicy: Contract = {
  resourceType: "Contract",
  id: "INS-101",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n         <p>Plan: Your Choice Split Copay (Non-Grandfathered)</p>\n         <p>Certificate Form Number: YCSCWLN (01-2017)</p>\n      </div>',
  },
  identifier: [
    {
      system: "http://xyz-insurance.com/forms",
      value: "YCSCWLN(01-2017)",
    },
  ],
  applies: {
    start: "2017-01-01",
  },
  subject: [
    {
      reference: "Patient/1",
    },
  ],
  type: {
    coding: [
      {
        system: "http://terminology.hl7.org/CodeSystem/contract-type",
        code: "healthinsurance",
        display: "Health Insurance",
      },
    ],
  },
  term: [
    {
      offer: {
        text: "The benefits, limitations, exclusions and other coverage provisions in this booklet are subject to the terms of our contract with the Group. This booklet is a part of that contract, which is on file in the Group's office.",
      },
      asset: [
        {
          type: [
            {
              coding: [
                {
                  system: "urn:ietf:rfc:3986",
                  code: "RicardianContract",
                },
              ],
            },
          ],
          subtype: [
            {
              text: "sample",
            },
          ],
          period: [
            {
              start: "2017-06-01",
            },
          ],
          valuedItem: [
            {
              entityCodeableConcept: {
                text: "Ford Bobcat",
              },
              identifier: {
                system: "http://somewhere.motor-vehicle.com/vin",
                value: "XXSVT34-7665t952236",
              },
              effectiveTime: "1995",
              quantity: {
                value: 1,
              },
              unitPrice: {
                value: 200,
                currency: "CAD",
              },
              factor: 1,
              points: 1,
              net: {
                value: 200,
                currency: "CAD",
              },
            },
          ],
        },
      ],
      group: [
        {
          offer: {
            text: "Eligible Providers",
          },
        },
        {
          offer: {
            text: "Responsibility for Payment",
          },
        },
        {
          offer: {
            text: "List of Benefits",
          },
          group: [
            {
              offer: {
                text: "Copays",
              },
              group: [
                {
                  offer: {
                    text: "Emergency Room Copay",
                  },
                },
                {
                  offer: {
                    text: "Professional Visit Copay",
                  },
                },
              ],
            },
            {
              offer: {
                text: "Calendar Year Deductible",
              },
            },
            {
              offer: {
                text: "Out-Of-Pocket Maximum",
              },
            },
            {
              offer: {
                text: "Medical Services",
              },
              group: [
                {
                  offer: {
                    text: "Ambulance Services",
                  },
                },
                {
                  offer: {
                    text: "Dental Services",
                  },
                },
                {
                  offer: {
                    text: "Diagnostic Services",
                  },
                },
                {
                  offer: {
                    text: "Emergency Room Services",
                  },
                },
                {
                  offer: {
                    text: "Hospital Inpatient Care",
                  },
                },
              ],
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

export const ContractExample: Contract = {
  resourceType: "Contract",
  id: "C-123",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">A human-readable rendering of the contract</div>',
  },
  identifier: [
    {
      system: "http://happyvalley.com/contract",
      value: "12347",
    },
  ],
  term: [
    {
      offer: {
        text: "Can't refuse",
      },
      asset: [
        {
          type: [
            {
              coding: [
                {
                  system: "urn:ietf:rfc:3986",
                  code: "RicardianContract",
                },
              ],
            },
          ],
          subtype: [
            {
              text: "sample",
            },
          ],
          period: [
            {
              start: "2017-06-01",
            },
          ],
          valuedItem: [
            {
              entityCodeableConcept: {
                text: "Ford Bobcat",
              },
              identifier: {
                system: "http://somewhere.motor-vehicle.com/vin",
                value: "XXSVT34-7665t952236",
              },
              effectiveTime: "1995",
              quantity: {
                value: 1,
              },
              unitPrice: {
                value: 200,
                currency: "CAD",
              },
              factor: 1,
              points: 1,
              net: {
                value: 200,
                currency: "CAD",
              },
            },
          ],
        },
      ],
    },
  ],
  rule: [
    {
      contentAttachment: {
        contentType: "application/txt",
        url: "http://www.rfc-editor.org/bcp/bcp13.txt",
      },
    },
  ],
  legallyBindingAttachment: {
    contentType: "application/pdf",
    url: "http://www.aws3.com/storage/doc.pdf",
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

export const PcdExampleNotauthor: Contract = {
  resourceType: "Contract",
  id: "pcd-example-notAuthor",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">The following scenario is based on existing\n      jurisdictional policy and are realized in existing systems in Canada. The default policy is\n      one of implied consent for the provision of care, so these scenarios all deal with withdrawal\n      or withholding consent for that purpose. In other jurisdictions, where an express consent\n      model is used (Opt-In), these would examples would contain the phrase &quot;consent to&quot; rather than\n      &quot;withhold&quot; or &quot;withdraw&quot; consent for. <p> specific to use-case 5) Withhold or withdraw consent\n        for disclosure of records that were authored by a specific organization (or service delivery\n        location). </p><p> Patient &quot;P. van de Heuvel&quot; wishes to have all of the PHI collected at the\n        Good Health Psychiatric Hospital restricted from disclosure to every provider. </p>\n    </div>',
  },
  issued: "2015-11-18",
  subject: [
    {
      reference: "Patient/f001",
      display: "P. van de Heuvel",
    },
  ],
  authority: [
    {
      reference: "Organization/3",
      display: "Michigan Health",
    },
  ],
  domain: [
    {
      reference: "Location/ukp",
      display: "UK Pharmacies",
    },
  ],
  type: {
    coding: [
      {
        system: "http://loinc.org",
        code: "57016-8",
      },
    ],
  },
  subType: [
    {
      coding: [
        {
          system: "http://www.infoway-inforoute.ca.org/Consent-subtype-codes",
          code: "Opt-In",
          display: "Default Authorization with exceptions.",
        },
      ],
    },
  ],
  term: [
    {
      type: {
        coding: [
          {
            system: "http://example.org/fhir/consent-term-type-codes",
            code: "withhold-authored-by",
            display: "Withhold all data authored by specified actor entity.",
          },
        ],
      },
      offer: {
        topic: {
          reference: "Organization/2.16.840.1.113883.19.5",
          display: "Good Health Clinic",
        },
        text: "Withhold all data authored by Good Health provider.",
      },
    },
  ],
  friendly: [
    {
      contentAttachment: {
        title: "The terms of the consent in friendly consumer speak.",
      },
    },
  ],
  legal: [
    {
      contentAttachment: {
        title: "The terms of the consent in lawyer speak.",
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

export const PcdExampleNotlabs: Contract = {
  resourceType: "Contract",
  id: "pcd-example-notLabs",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">The following scenario is based on existing\n      jurisdictional policy and are realized in existing systems in Canada. The default policy is\n      one of implied consent for the provision of care, so these scenarios all deal with withdrawal\n      or withholding consent for that purpose. In other jurisdictions, where an express consent\n      model is used (Opt-In), these would examples would contain the phrase &quot;consent to&quot; rather than\n      &quot;withhold&quot; or &quot;withdraw&quot; consent for. <p> specific to use-case 1. Withhold or withdraw consent\n        for disclosure of records related to specific domain (e.g. DI, LAB, etc.) </p><p> Patient\n        &quot;P. van de Heuvel&quot; wishes to withhold disclosure of all of her lab orders and results to any\n        provider. </p>\n    </div>',
  },
  issued: "2014-08-17",
  subject: [
    {
      reference: "Patient/f001",
      display: "P. van de Heuvel",
    },
  ],
  authority: [
    {
      reference: "Organization/3",
      display: "Michigan Health",
    },
  ],
  domain: [
    {
      reference: "Location/ukp",
      display: "UK Pharmacies",
    },
  ],
  type: {
    coding: [
      {
        system: "http://loinc.org",
        code: "57016-8",
      },
    ],
  },
  subType: [
    {
      coding: [
        {
          system: "http://www.infoway-inforoute.ca.org/Consent-subtype-codes",
          code: "Opt-In",
          display: "Default Authorization with exceptions.",
        },
      ],
    },
  ],
  term: [
    {
      offer: {
        text: "sample",
      },
      group: [
        {
          type: {
            coding: [
              {
                system: "http://example.org/fhir/consent-term-type-codes",
                code: "withhold-object-type",
              },
            ],
          },
          subType: {
            coding: [
              {
                system: "http://hl7.org/fhir/resource-types",
                code: "ServiceRequest",
              },
            ],
          },
          offer: {
            text: "Withhold orders from any provider.",
          },
        },
        {
          type: {
            coding: [
              {
                system: "http://example.org/fhir/consent-term-type-codes",
                code: "withhold-object-type",
              },
            ],
          },
          subType: {
            coding: [
              {
                system: "http://hl7.org/fhir/resource-types",
                code: "DiagnosticReport",
              },
            ],
          },
          offer: {
            text: "Withhold order results from any provider.",
          },
        },
      ],
    },
  ],
  friendly: [
    {
      contentAttachment: {
        title: "The terms of the consent in friendly consumer speak.",
      },
    },
  ],
  legal: [
    {
      contentAttachment: {
        title: "The terms of the consent in lawyer speak.",
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

export const PcdExampleNotorg: Contract = {
  resourceType: "Contract",
  id: "pcd-example-notOrg",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">The following scenario is based on existing\n      jurisdictional policy and are realized in existing systems in Canada. The default policy is\n      one of implied consent for the provision of care, so these scenarios all deal with withdrawal\n      or withholding consent for that purpose. In other jurisdictions, where an express consent\n      model is used (Opt-In), these would examples would contain the phrase &quot;consent to&quot; rather than\n      &quot;withhold&quot; or &quot;withdraw&quot; consent for. <p> specific to use-case 3) Withhold or withdraw consent\n        for disclosure to a specific provider organization </p><p> Patient &quot;P. van de Heuvel&quot;\n        ex-spouse is a Physician that is employed by Good Health Clinic. P. decides that he would\n        like to withdraw/withhold consent to disclose any instance of his health information to Good\n        Health Clinic. </p>\n    </div>',
  },
  issued: "2015-11-18",
  subject: [
    {
      reference: "Patient/f001",
      display: "P. van de Heuvel",
    },
  ],
  authority: [
    {
      reference: "Organization/3",
      display: "Michigan Health",
    },
  ],
  domain: [
    {
      reference: "Location/ukp",
      display: "UK Pharmacies",
    },
  ],
  type: {
    coding: [
      {
        system: "http://loinc.org",
        code: "57016-8",
      },
    ],
  },
  subType: [
    {
      coding: [
        {
          system: "http://www.infoway-inforoute.ca.org/Consent-subtype-codes",
          code: "Opt-In",
          display: "Default Authorization with exceptions.",
        },
      ],
    },
  ],
  term: [
    {
      type: {
        coding: [
          {
            system: "http://example.org/fhir/consent-term-type-codes",
            code: "withhold-from",
            display: "Withhold all data from specified actor entity.",
          },
        ],
      },
      offer: {
        topic: {
          reference: "Organization/2.16.840.1.113883.19.5",
          display: "Good Health Clinic",
        },
        text: "Withhold this order and any results or related objects from any provider.",
      },
    },
  ],
  friendly: [
    {
      contentAttachment: {
        title: "The terms of the consent in friendly consumer speak.",
      },
    },
  ],
  legal: [
    {
      contentAttachment: {
        title: "The terms of the consent in lawyer speak.",
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

export const PcdExampleNotthem: Contract = {
  resourceType: "Contract",
  id: "pcd-example-notThem",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">The following scenario is based on existing\n      jurisdictional policy and are realized in existing systems in Canada. The default policy is\n      one of implied consent for the provision of care, so these scenarios all deal with withdrawal\n      or withholding consent for that purpose. In other jurisdictions, where an express consent\n      model is used (Opt-In), these would examples would contain the phrase &quot;consent to&quot; rather than\n      &quot;withhold&quot; or &quot;withdraw&quot; consent for. <p> specific to use-case 4) Withhold or withdraw consent\n        for disclosure to a specific provider agent (an individual within an organization) </p><p>\n        Patient &quot;P. van de Heuvel&quot; ex-spouse, Bill T Lookafter is a Nurse that is employed by Good\n        Health Hospital. P. realizes that she may receive treatment at GHH, however she does not\n        want her ex-spouse to have any access to her IIHI. She indicates that she would like to\n        withdraw/withhold consent to disclose any instance of her health information to her\n        ex-spouse as a result of his employment at Good Health Clinic. </p>\n    </div>',
  },
  issued: "2015-11-18",
  subject: [
    {
      reference: "Patient/f001",
      display: "P. van de Heuvel",
    },
  ],
  authority: [
    {
      reference: "Organization/3",
      display: "Michigan Health",
    },
  ],
  domain: [
    {
      reference: "Location/ukp",
      display: "UK Pharmacies",
    },
  ],
  type: {
    coding: [
      {
        system: "http://loinc.org",
        code: "57016-8",
      },
    ],
  },
  subType: [
    {
      coding: [
        {
          system: "http://www.infoway-inforoute.ca.org/Consent-subtype-codes",
          code: "Opt-In",
          display: "Default Authorization with exceptions.",
        },
      ],
    },
  ],
  term: [
    {
      type: {
        coding: [
          {
            system: "http://example.org/fhir/consent-term-type-codes",
            code: "withhold-from",
            display: "Withhold all data from specified actor entity.",
          },
        ],
      },
      offer: {
        topic: {
          reference: "Practitioner/f204",
          display: "Fictive Nurse",
        },
        text: "Withhold this order and any results or related objects from specified nurse provider.",
      },
    },
  ],
  signer: [
    {
      type: {
        system: "http://terminology.hl7.org/CodeSystem/contractsignertypecodes",
        code: "COVPTY",
      },
      party: {
        reference: "Patient/f001",
      },
      signature: [
        {
          type: [
            {
              system: "urn:iso-astm:E1762-95:2013",
              code: "1.2.840.10065.1.12.1.1",
            },
          ],
          when: "2013-06-08T10:57:34-07:00",
          who: {
            reference: "Patient/f001",
          },
        },
      ],
    },
  ],
  friendly: [
    {
      contentAttachment: {
        title: "The terms of the consent in friendly consumer speak.",
      },
    },
  ],
  legal: [
    {
      contentAttachment: {
        title: "The terms of the consent in lawyer speak.",
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

export const PcdExampleNotthis: Contract = {
  resourceType: "Contract",
  id: "pcd-example-notThis",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">The following scenario is based on existing\n      jurisdictional policy and are realized in existing systems in Canada. The default policy is\n      one of implied consent for the provision of care, so these scenarios all deal with withdrawal\n      or withholding consent for that purpose. In other jurisdictions, where an express consent\n      model is used (Opt-In), these would examples would contain the phrase &quot;consent to&quot; rather than\n      &quot;withhold&quot; or &quot;withdraw&quot; consent for. <p> specific to use-case 2. Withhold or withdraw consent\n        for disclosure of a specific record (e.g. Lab Order/Result) </p><p> Patient &quot;P. van de\n        Heuvel&quot; Primary Care Provider, Dr. Philip Primary, has ordered a set of lab test which Adam\n        wishes to keep as private as possible. At the sample collection facility, he indicates that\n        he would like withhold consent to disclose the order and all results associated with that\n        specific order from all other providers </p>\n    </div>',
  },
  issued: "2015-11-18",
  subject: [
    {
      reference: "Patient/f001",
      display: "P. van de Heuvel",
    },
  ],
  authority: [
    {
      reference: "Organization/3",
      display: "Michigan Health",
    },
  ],
  domain: [
    {
      reference: "Location/ukp",
      display: "UK Pharmacies",
    },
  ],
  type: {
    coding: [
      {
        system: "http://loinc.org",
        code: "57016-8",
      },
    ],
  },
  subType: [
    {
      coding: [
        {
          system: "http://www.infoway-inforoute.ca.org/Consent-subtype-codes",
          code: "Opt-In",
          display: "Default Authorization with exceptions.",
        },
      ],
    },
  ],
  term: [
    {
      identifier: {
        system: "http://example.org/fhir/term-items",
        value: "3347689",
      },
      issued: "2015-11-01",
      applies: {
        start: "2015-11-18",
      },
      type: {
        coding: [
          {
            system: "http://example.org/fhir/consent-term-type-codes",
            code: "withhold-identified-object-and-related",
            display:
              "Withhold the identified object and any other resources that are related to this object.",
          },
        ],
      },
      offer: {
        topic: {
          reference: "ServiceRequest/lipid",
        },
        text: "Withhold this order and any results or related objects from any provider.",
      },
    },
  ],
  friendly: [
    {
      contentAttachment: {
        title: "The terms of the consent in friendly consumer speak.",
      },
    },
  ],
  legal: [
    {
      contentAttachment: {
        title: "The terms of the consent in lawyer speak.",
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
