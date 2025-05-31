import type { Consent } from "../../src/v4.0.1/consent/types";

export const ConsentExampleEmergency: Consent = {
  resourceType: "Consent",
  id: "consent-example-Emergency",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n      <p>\n\tWithhold Authorization for Treatment rule for Emegency Treatment\n\t</p>\n      <p>\n    Patient &quot;P. van de Heuvel&quot; wishes to have no data at the Good Health Psychiatric Hospital \n   available rule for Emergency treatment use.\n   An overall Deny consent Directive, with an exception &quot;Permit&quot; of purposeOfUse &quot;ETREAT&quot; \n   at &quot;Good Health&quot; hospital, and exception &quot;Deny&quot; all other purposeOfUse from good health hospital.\n   </p>\n    </div>',
  },
  status: "active",
  scope: {
    coding: [
      {
        system: "http://terminology.hl7.org/CodeSystem/consentscope",
        code: "patient-privacy",
      },
    ],
  },
  category: [
    {
      coding: [
        {
          system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
          code: "EMRGONLY",
        },
      ],
    },
  ],
  patient: {
    reference: "Patient/f001",
    display: "P. van de Heuvel",
  },
  dateTime: "2015-11-18",
  organization: [
    {
      reference: "Organization/f001",
    },
  ],
  sourceAttachment: {
    title: "The terms of the consent in lawyer speak.",
  },
  policyRule: {
    coding: [
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "OPTOUT",
      },
    ],
  },
  provision: {
    actor: [
      {
        role: {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
              code: "CST",
            },
          ],
        },
        reference: {
          reference: "Organization/f001",
        },
      },
    ],
    purpose: [
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "ETREAT",
      },
    ],
    provision: [
      {
        type: "deny",
        actor: [
          {
            role: {
              coding: [
                {
                  system:
                    "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
                  code: "CST",
                },
              ],
            },
            reference: {
              reference: "Organization/f001",
            },
          },
        ],
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

export const ConsentExampleOut: Consent = {
  resourceType: "Consent",
  id: "consent-example-Out",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">The following scenario is based on existing jurisdictional policy and are realized in existing systems in Canada. \n\tThe default policy is one of implied consent for the provision of care, so these scenarios all deal with withdrawal or withholding consent for that purpose. \n\tIn other jurisdictions, where an express consent model is used (Opt-In), these would examples would contain the phrase &quot;consent to&quot; rather \n\tthan &quot;withhold&quot; or &quot;withdraw&quot; consent for.\n    <p>\n\tSpecific to use-case 0) Withhold Authorization of sharing data for Treatment\n\t</p><p>\n    Patient &quot;P. van de Heuvel&quot; wishes to have no data at the Good Health Psychiatric Hospital \n   available for normal treatment use.\n   </p>\n   </div>',
  },
  status: "active",
  scope: {
    coding: [
      {
        system: "http://terminology.hl7.org/CodeSystem/consentscope",
        code: "patient-privacy",
      },
    ],
  },
  category: [
    {
      coding: [
        {
          system: "http://loinc.org",
          code: "59284-0",
        },
      ],
    },
  ],
  patient: {
    reference: "Patient/f001",
    display: "P. van de Heuvel",
  },
  dateTime: "2015-11-18",
  organization: [
    {
      reference: "Organization/f001",
    },
  ],
  sourceAttachment: {
    title: "The terms of the consent in lawyer speak.",
  },
  policyRule: {
    coding: [
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "OPTOUT",
      },
    ],
  },
  provision: {
    actor: [
      {
        role: {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
              code: "CST",
            },
          ],
        },
        reference: {
          reference: "Organization/f001",
        },
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

export const ConsentExampleGrantor: Consent = {
  resourceType: "Consent",
  id: "consent-example-grantor",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">The following scenario is based on a question asked on John Moehrke\'s blog in the \n\t<a href="http://healthcaresecprivacy.blogspot.com/2016/04/consent-given-to-authorized.html">Consent given to authorized representative</a>\n    <p>\nThis is a case where a Patient is giving a limited (read-only) access to an individual.\n\t</p><p>\n    Patient &quot;P. van de Heuvel&quot; wishes to provide XXX with read-only access to the data at Good Health Psychiatric Hospital \n   available for patient requested access use.\n   </p>\n   </div>',
  },
  status: "active",
  scope: {
    coding: [
      {
        system: "http://terminology.hl7.org/CodeSystem/consentscope",
        code: "patient-privacy",
      },
    ],
  },
  category: [
    {
      coding: [
        {
          system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
          code: "INFAO",
        },
      ],
    },
  ],
  patient: {
    reference: "Patient/f001",
    display: "P. van de Heuvel",
  },
  dateTime: "2015-11-18",
  organization: [
    {
      reference: "Organization/f001",
    },
  ],
  sourceAttachment: {
    title: "The terms of the consent in lawyer speak.",
  },
  policyRule: {
    coding: [
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "OPTOUT",
      },
    ],
  },
  provision: {
    actor: [
      {
        role: {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
              code: "CST",
            },
          ],
        },
        reference: {
          reference: "Organization/f001",
        },
      },
      {
        role: {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
              code: "PRCP",
            },
          ],
        },
        reference: {
          reference: "Patient/example",
          display: "Good Health Clinic",
        },
      },
    ],
    action: [
      {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/consentaction",
            code: "access",
          },
        ],
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

export const ConsentExampleNotauthor: Consent = {
  resourceType: "Consent",
  id: "consent-example-notAuthor",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">The following scenario is based on existing jurisdictional policy and are realized in existing systems in Canada. \n\tThe default policy is one of implied consent for the provision of care, so these scenarios all deal with withdrawal or withholding consent for that purpose. \n\tIn other jurisdictions, where an express consent model is used (Opt-In), these would examples would contain the phrase &quot;consent to&quot; rather \n\tthan &quot;withhold&quot; or &quot;withdraw&quot; consent for.\n    <p>\n\tspecific to use-case 5) Withhold or withdraw consent for disclosure of records that were authored by a specific organization (or service delivery location).  \n\t</p><p>\n    Patient &quot;P. van de Heuvel&quot; wishes to have all of the PHI collected at the Good Health Psychiatric Hospital \n   restricted from disclosure to every provider.\n   </p>\n   </div>',
  },
  status: "active",
  scope: {
    coding: [
      {
        system: "http://terminology.hl7.org/CodeSystem/consentscope",
        code: "patient-privacy",
      },
    ],
  },
  category: [
    {
      coding: [
        {
          system: "http://loinc.org",
          code: "59284-0",
        },
      ],
    },
  ],
  patient: {
    reference: "Patient/f001",
    display: "P. van de Heuvel",
  },
  dateTime: "2015-11-18",
  organization: [
    {
      reference: "Organization/f001",
    },
  ],
  sourceAttachment: {
    title: "The terms of the consent in lawyer speak.",
  },
  policyRule: {
    coding: [
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "OPTIN",
      },
    ],
  },
  provision: {
    actor: [
      {
        role: {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
              code: "CST",
            },
          ],
        },
        reference: {
          reference: "Organization/f001",
        },
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

export const ConsentExampleNotorg: Consent = {
  resourceType: "Consent",
  id: "consent-example-notOrg",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">The following scenario is based on existing jurisdictional policy and are realized in existing systems in Canada. \n\tThe default policy is one of implied consent for the provision of care, so these scenarios all deal with withdrawal or withholding consent for that purpose. \n\tIn other jurisdictions, where an express consent model is used (Opt-In), these would examples would contain the phrase &quot;consent to&quot; rather \n\tthan &quot;withhold&quot; or &quot;withdraw&quot; consent for.\n    <p>\n\tspecific to use-case 3) Withhold or withdraw consent for disclosure to a specific provider organization  \n\t</p><p>\n    Patient &quot;P. van de Heuvel&quot; ex-spouse is a Physician that is employed by Good Health Clinic.  P. decides\n   that he would like to withdraw/withhold consent to disclose any instance of his health information \n   to Good Health Clinic.\n   </p>\n   </div>',
  },
  status: "active",
  scope: {
    coding: [
      {
        system: "http://terminology.hl7.org/CodeSystem/consentscope",
        code: "patient-privacy",
      },
    ],
  },
  category: [
    {
      coding: [
        {
          system: "http://loinc.org",
          code: "59284-0",
        },
      ],
    },
  ],
  patient: {
    reference: "Patient/f001",
    display: "P. van de Heuvel",
  },
  dateTime: "2015-11-18",
  organization: [
    {
      reference: "Organization/f001",
    },
  ],
  sourceAttachment: {
    title: "The terms of the consent in lawyer speak.",
  },
  policyRule: {
    coding: [
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "OPTIN",
      },
    ],
  },
  provision: {
    type: "deny",
    actor: [
      {
        role: {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
              code: "PRCP",
            },
          ],
        },
        reference: {
          reference: "Organization/f001",
        },
      },
    ],
    action: [
      {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/consentaction",
            code: "access",
          },
        ],
      },
      {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/consentaction",
            code: "correct",
          },
        ],
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

export const ConsentExampleNotthem: Consent = {
  resourceType: "Consent",
  id: "consent-example-notThem",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">The following scenario is based on existing jurisdictional policy and are realized in existing systems in Canada. \n\tThe default policy is one of implied consent for the provision of care, so these scenarios all deal with withdrawal or withholding consent for that purpose. \n\tIn other jurisdictions, where an express consent model is used (Opt-In), these would examples would contain the phrase &quot;consent to&quot; rather \n\tthan &quot;withhold&quot; or &quot;withdraw&quot; consent for.\n    <p>\n\tspecific to use-case 4) Withhold or withdraw consent for disclosure to a specific provider agent (an individual within an organization) \n\t</p><p>\n    Patient &quot;P. van de Heuvel&quot; ex-spouse, Bill T Lookafter is a Nurse that is employed by Good Health Hospital.\n   P. realizes that she may receive treatment at GHH, however she does not want her ex-spouse to have any \n   access to her IIHI.  She indicates that she would like to withdraw/withhold consent to disclose any instance \n   of her health information to her ex-spouse as a result of his employment at Good Health Clinic.\n   </p>\n   </div>',
  },
  status: "active",
  scope: {
    coding: [
      {
        system: "http://terminology.hl7.org/CodeSystem/consentscope",
        code: "patient-privacy",
      },
    ],
  },
  category: [
    {
      coding: [
        {
          system: "http://loinc.org",
          code: "59284-0",
        },
      ],
    },
  ],
  patient: {
    reference: "Patient/f001",
    display: "P. van de Heuvel",
  },
  dateTime: "2015-11-18",
  organization: [
    {
      reference: "Organization/f001",
    },
  ],
  sourceAttachment: {
    title: "The terms of the consent in lawyer speak.",
  },
  policyRule: {
    coding: [
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "OPTIN",
      },
    ],
  },
  provision: {
    actor: [
      {
        role: {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
              code: "PRCP",
            },
          ],
        },
        reference: {
          reference: "Practitioner/f204",
          display: "Fictive Nurse",
        },
      },
    ],
    action: [
      {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/consentaction",
            code: "access",
          },
        ],
      },
      {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/consentaction",
            code: "correct",
          },
        ],
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

export const ConsentExampleNotthis: Consent = {
  resourceType: "Consent",
  id: "consent-example-notThis",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">The following scenario is based on existing jurisdictional policy and are realized in existing systems in Canada. \n\tThe default policy is one of implied consent for the provision of care, so these scenarios all deal with withdrawal or withholding consent for that purpose. \n\tIn other jurisdictions, where an express consent model is used (Opt-In), these would examples would contain the phrase &quot;consent to&quot; rather \n\tthan &quot;withhold&quot; or &quot;withdraw&quot; consent for.\n    <p>\n\tspecific to use-case 2. Withhold or withdraw consent for disclosure of a specific record (e.g. Lab Order/Result) \n\t</p><p>\n    Patient &quot;P. van de Heuvel&quot; Primary Care Provider, Dr. Philip Primary, has ordered a set of lab test which Adam \n   wishes to keep as private as possible.  At the sample collection facility, he indicates that he would \n   like withhold consent to disclose the order and all results associated with that specific order from \n   all other providers  \n   </p>\n   </div>',
  },
  status: "active",
  scope: {
    coding: [
      {
        system: "http://terminology.hl7.org/CodeSystem/consentscope",
        code: "patient-privacy",
      },
    ],
  },
  category: [
    {
      coding: [
        {
          system: "http://loinc.org",
          code: "59284-0",
        },
      ],
    },
  ],
  patient: {
    reference: "Patient/f001",
    display: "P. van de Heuvel",
  },
  dateTime: "2015-11-18",
  organization: [
    {
      reference: "Organization/f001",
    },
  ],
  sourceAttachment: {
    title: "The terms of the consent in lawyer speak.",
  },
  policyRule: {
    coding: [
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "OPTIN",
      },
    ],
  },
  provision: {
    data: [
      {
        meaning: "related",
        reference: {
          reference: "Task/example3",
        },
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

export const ConsentExampleNottime: Consent = {
  resourceType: "Consent",
  id: "consent-example-notTime",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">The following scenario is based on existing jurisdictional policy and are realized in existing systems in Canada. \n\tThe default policy is one of implied consent for the provision of care, so these scenarios all deal with withdrawal or withholding consent for that purpose. \n\tIn other jurisdictions, where an express consent model is used (Opt-In), these would examples would contain the phrase &quot;consent to&quot; rather \n\tthan &quot;withhold&quot; or &quot;withdraw&quot; consent for.\n    <p>\n\tspecific to use-case 6. Withhold or withdraw consent for disclosure of records related published during a timeframe\n\t</p><p>\n    Patient &quot;P. van de Heuvel&quot; wishes to withhold disclosure of all data from a timeframe to any provider. \n   </p>\n   </div>',
  },
  status: "active",
  scope: {
    coding: [
      {
        system: "http://terminology.hl7.org/CodeSystem/consentscope",
        code: "patient-privacy",
      },
    ],
  },
  category: [
    {
      coding: [
        {
          system: "http://loinc.org",
          code: "59284-0",
        },
      ],
    },
  ],
  patient: {
    reference: "Patient/f001",
    display: "P. van de Heuvel",
  },
  dateTime: "2015-11-18",
  organization: [
    {
      reference: "Organization/f001",
    },
  ],
  sourceAttachment: {
    title: "The terms of the consent in lawyer speak.",
  },
  policyRule: {
    coding: [
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "OPTIN",
      },
    ],
  },
  provision: {
    period: {
      start: "2015-01-01",
      end: "2015-02-01",
    },
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

export const ConsentExamplePkb: Consent = {
  resourceType: "Consent",
  id: "consent-example-pkb",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n\t\t\t<p>\n        This example demonstrates how to encode this screen shot in a consent resource:\n\t\t\t</p>\n\t\t\t<p>\n\t\t\t\t<img src="pkb.png" alt="Screenshot from Patient Knows Best"/>\n\t\t\t</p>\n\t\t\t<p>\n        Thanks to <a href="https://www.patientsknowbest.com/">Patients Know Best</a> for contributing this example\n\t\t\t</p>\n\t\t</div>',
  },
  status: "active",
  scope: {
    coding: [
      {
        system: "http://terminology.hl7.org/CodeSystem/consentscope",
        code: "patient-privacy",
      },
    ],
  },
  category: [
    {
      coding: [
        {
          system: "http://loinc.org",
          code: "59284-0",
        },
      ],
    },
  ],
  patient: {
    reference: "Patient/example",
    display: "...example patient...",
  },
  dateTime: "2016-06-16",
  organization: [
    {
      reference: "Organization/f001",
    },
  ],
  policyRule: {
    coding: [
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "OPTOUT",
      },
    ],
  },
  provision: {
    actor: [
      {
        role: {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
              code: "PRCP",
            },
          ],
        },
        reference: {
          reference: "Organization/f001",
        },
      },
    ],
    action: [
      {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/consentaction",
            code: "access",
          },
        ],
      },
    ],
    securityLabel: [
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-Confidentiality",
        code: "N",
      },
    ],
    provision: [
      {
        actor: [
          {
            role: {
              coding: [
                {
                  system:
                    "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
                  code: "PRCP",
                },
              ],
            },
            reference: {
              reference: "Organization/f001",
            },
          },
        ],
        action: [
          {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/consentaction",
                code: "access",
              },
            ],
          },
        ],
        securityLabel: [
          {
            system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
            code: "PSY",
          },
        ],
      },
      {
        actor: [
          {
            role: {
              coding: [
                {
                  system:
                    "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
                  code: "PRCP",
                },
              ],
            },
            reference: {
              reference: "Organization/f001",
            },
          },
        ],
        action: [
          {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/consentaction",
                code: "access",
              },
            ],
          },
        ],
        securityLabel: [
          {
            system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
            code: "SPI",
          },
        ],
      },
      {
        actor: [
          {
            role: {
              coding: [
                {
                  system:
                    "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
                  code: "PRCP",
                },
              ],
            },
            reference: {
              reference: "Organization/f001",
            },
          },
        ],
        action: [
          {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/consentaction",
                code: "access",
              },
            ],
          },
        ],
        securityLabel: [
          {
            system: "http://terminology.hl7.org/CodeSystem/v3-Confidentiality",
            code: "N",
          },
        ],
      },
      {
        actor: [
          {
            role: {
              coding: [
                {
                  system:
                    "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
                  code: "PRCP",
                },
              ],
            },
            reference: {
              reference: "Organization/f001",
            },
          },
        ],
        action: [
          {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/consentaction",
                code: "access",
              },
            ],
          },
        ],
        securityLabel: [
          {
            system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
            code: "PSY",
          },
        ],
      },
      {
        actor: [
          {
            role: {
              coding: [
                {
                  system:
                    "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
                  code: "PRCP",
                },
              ],
            },
            reference: {
              reference: "Organization/f001",
            },
          },
        ],
        action: [
          {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/consentaction",
                code: "access",
              },
            ],
          },
        ],
        securityLabel: [
          {
            system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
            code: "SPI",
          },
        ],
      },
      {
        actor: [
          {
            role: {
              coding: [
                {
                  system:
                    "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
                  code: "PRCP",
                },
              ],
            },
            reference: {
              reference: "Organization/f001",
            },
          },
        ],
        action: [
          {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/consentaction",
                code: "access",
              },
            ],
          },
        ],
        securityLabel: [
          {
            system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
            code: "SEX",
          },
        ],
      },
      {
        actor: [
          {
            role: {
              coding: [
                {
                  system:
                    "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
                  code: "PRCP",
                },
              ],
            },
            reference: {
              reference: "Organization/f001",
            },
          },
        ],
        action: [
          {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/consentaction",
                code: "access",
              },
            ],
          },
        ],
        securityLabel: [
          {
            system: "http://terminology.hl7.org/CodeSystem/v3-Confidentiality",
            code: "N",
          },
        ],
      },
      {
        actor: [
          {
            role: {
              coding: [
                {
                  system:
                    "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
                  code: "PRCP",
                },
              ],
            },
            reference: {
              reference: "Organization/f001",
            },
          },
        ],
        action: [
          {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/consentaction",
                code: "access",
              },
            ],
          },
        ],
        securityLabel: [
          {
            system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
            code: "PSY",
          },
        ],
      },
      {
        actor: [
          {
            role: {
              coding: [
                {
                  system:
                    "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
                  code: "PRCP",
                },
              ],
            },
            reference: {
              reference: "Organization/f001",
            },
          },
        ],
        action: [
          {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/consentaction",
                code: "access",
              },
            ],
          },
        ],
        securityLabel: [
          {
            system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
            code: "SPI",
          },
        ],
      },
      {
        actor: [
          {
            role: {
              coding: [
                {
                  system:
                    "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
                  code: "PRCP",
                },
              ],
            },
            reference: {
              reference: "Organization/f001",
            },
          },
        ],
        action: [
          {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/consentaction",
                code: "access",
              },
            ],
          },
        ],
        securityLabel: [
          {
            system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
            code: "SEX",
          },
        ],
      },
      {
        actor: [
          {
            role: {
              coding: [
                {
                  system:
                    "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
                  code: "PRCP",
                },
              ],
            },
            reference: {
              reference: "Organization/f001",
            },
          },
        ],
        action: [
          {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/consentaction",
                code: "access",
              },
            ],
          },
        ],
        securityLabel: [
          {
            system: "http://terminology.hl7.org/CodeSystem/v3-Confidentiality",
            code: "N",
          },
        ],
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

export const ConsentExampleSignature: Consent = {
  resourceType: "Consent",
  id: "consent-example-signature",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: consent-example-signature</p><p><b>identifier</b>: 494e0c7a-a69e-4fb4-9d02-6aae747790d7</p><p><b>status</b>: active</p><p><b>scope</b>: Privacy Consent <span>(Details : {http://terminology.hl7.org/CodeSystem/consentscope code 'patient-privacy' = 'Privacy Consent)</span></p><p><b>category</b>: Notice of Privacy Practices <span>(Details : {http://terminology.hl7.org/CodeSystem/consentcategorycodes code 'npp' = 'Notice of Privacy Practices)</span></p><p><b>patient</b>: <a>Patient/72</a></p><p><b>dateTime</b>: 26/05/2016 12:41:10 AM</p><p><b>performer</b>: <a>Patient/72</a></p><p><b>organization</b>: <a>Organization/f001</a></p><p><b>policyRule</b>: opt-in <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-ActCode code 'OPTIN' = 'opt-in)</span></p><blockquote><p><b>provision</b></p><p><b>period</b>: 10/10/2015 --&gt; 10/10/2016</p><h3>Actors</h3><table><tr><td>-</td><td><b>Role</b></td><td><b>Reference</b></td></tr><tr><td>*</td><td>primary information recipient <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-ParticipationType code 'PRCP' = 'primary information recipient)</span></td><td><a>Practitioner/13</a></td></tr></table><h3>Provisions</h3><table><tr><td>-</td></tr><tr><td>*</td></tr></table></blockquote></div>",
  },
  identifier: [
    {
      system: "urn:oid:2.16.840.1.113883.3.72.5.9.1",
      value: "494e0c7a-a69e-4fb4-9d02-6aae747790d7",
    },
  ],
  status: "active",
  scope: {
    coding: [
      {
        system: "http://terminology.hl7.org/CodeSystem/consentscope",
        code: "patient-privacy",
      },
    ],
  },
  category: [
    {
      coding: [
        {
          system: "http://terminology.hl7.org/CodeSystem/consentcategorycodes",
          code: "npp",
        },
      ],
    },
  ],
  patient: {
    reference: "Patient/72",
  },
  dateTime: "2016-05-26T00:41:10-04:00",
  performer: [
    {
      reference: "Patient/72",
    },
  ],
  organization: [
    {
      reference: "Organization/f001",
    },
  ],
  policyRule: {
    coding: [
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "OPTIN",
      },
    ],
  },
  provision: {
    period: {
      start: "2015-10-10",
      end: "2016-10-10",
    },
    actor: [
      {
        role: {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
              code: "PRCP",
            },
          ],
        },
        reference: {
          reference: "Practitioner/13",
        },
      },
    ],
    provision: [
      {
        type: "permit",
        actor: [
          {
            role: {
              coding: [
                {
                  system:
                    "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
                  code: "AUT",
                },
              ],
            },
            reference: {
              reference: "Practitioner/xcda-author",
            },
          },
        ],
        class: [
          {
            system: "urn:ietf:bcp:13",
            code: "application/hl7-cda+xml",
          },
        ],
        code: [
          {
            coding: [
              {
                system: "http://loinc.org",
                code: "34133-9",
              },
            ],
          },
          {
            coding: [
              {
                system: "http://loinc.org",
                code: "18842-5",
              },
            ],
          },
        ],
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

export const ConsentExampleSmartonfhir: Consent = {
  resourceType: "Consent",
  id: "consent-example-smartonfhir",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: consent-example-smartonfhir</p><p><b>status</b>: active</p><p><b>scope</b>: Privacy Consent <span>(Details : {http://terminology.hl7.org/CodeSystem/consentscope code 'patient-privacy' = 'Privacy Consent)</span></p><p><b>category</b>: Patient Consent <span>(Details : {LOINC code '59284-0' = 'Patient Consent)</span></p><p><b>patient</b>: <a>Patient/xcda</a></p><p><b>dateTime</b>: 23/06/2016 5:02:33 PM</p><p><b>performer</b>: <a>RelatedPerson/peter</a></p><p><b>organization</b>: <a>Organization/f001</a></p><p><b>policyRule</b>: opt-in <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-ActCode code 'OPTIN' = 'opt-in)</span></p><blockquote><p><b>provision</b></p><p><b>period</b>: 23/06/2016 5:02:33 PM --&gt; 23/06/2016 5:32:33 PM</p><h3>Provisions</h3><table><tr><td>-</td></tr><tr><td>*</td></tr></table></blockquote></div>",
  },
  status: "active",
  scope: {
    coding: [
      {
        system: "http://terminology.hl7.org/CodeSystem/consentscope",
        code: "patient-privacy",
      },
    ],
  },
  category: [
    {
      coding: [
        {
          system: "http://loinc.org",
          code: "59284-0",
        },
      ],
    },
  ],
  patient: {
    reference: "Patient/xcda",
  },
  dateTime: "2016-06-23T17:02:33+10:00",
  performer: [
    {
      reference: "RelatedPerson/peter",
    },
  ],
  organization: [
    {
      reference: "Organization/f001",
    },
  ],
  policyRule: {
    coding: [
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "OPTIN",
      },
    ],
  },
  provision: {
    period: {
      start: "2016-06-23T17:02:33+10:00",
      end: "2016-06-23T17:32:33+10:00",
    },
    provision: [
      {
        type: "permit",
        action: [
          {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/consentaction",
                code: "access",
              },
            ],
          },
        ],
        class: [
          {
            system: "http://hl7.org/fhir/resource-types",
            code: "MedicationRequest",
          },
        ],
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

export const ConsentExample: Consent = {
  resourceType: "Consent",
  id: "consent-example-basic",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n\t\t\t<p>\n\tAuthorize Normal access for Treatment\n\t\t\t</p>\n\t\t\t<p>\n    Patient &quot;P. van de Heuvel&quot; wishes to have all of the PHI collected at the Good Health Psychiatric Hospital \n   available for normal treatment use.\n\t\t\t</p>\n\t\t</div>',
  },
  status: "active",
  scope: {
    coding: [
      {
        system: "http://terminology.hl7.org/CodeSystem/consentscope",
        code: "patient-privacy",
      },
    ],
  },
  category: [
    {
      coding: [
        {
          system: "http://loinc.org",
          code: "59284-0",
        },
      ],
    },
  ],
  patient: {
    reference: "Patient/f001",
    display: "P. van de Heuvel",
  },
  dateTime: "2016-05-11",
  organization: [
    {
      reference: "Organization/f001",
    },
  ],
  sourceAttachment: {
    title: "The terms of the consent in lawyer speak.",
  },
  policyRule: {
    coding: [
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        code: "OPTIN",
      },
    ],
  },
  provision: {
    period: {
      start: "1964-01-01",
      end: "2016-01-01",
    },
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
