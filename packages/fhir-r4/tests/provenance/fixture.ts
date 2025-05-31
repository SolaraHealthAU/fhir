import type { Provenance } from "../../src/v4.0.1/provenance/types";

export const ProvenanceConsentSignature: Provenance = {
  resourceType: "Provenance",
  id: "consent-signature",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: consent-signature</p><p><b>target</b>: <a>Consent/consent-example-signature</a></p><p><b>recorded</b>: 26/05/2016 12:41:10 AM</p><h3>Agents</h3><table><tr><td>-</td><td><b>Role</b></td><td><b>Who</b></td></tr><tr><td>*</td><td>author (originator) <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-ParticipationType code 'AUT' = 'author (originator))</span></td><td><a>Patient/72</a></td></tr></table><p><b>signature</b>: </p></div>",
  },
  target: [
    {
      reference: "Consent/consent-example-signature",
    },
  ],
  recorded: "2016-05-26T00:41:10-04:00",
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
        reference: "Patient/72",
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
      when: "2016-05-26T00:41:10-04:00",
      who: {
        reference: "Patient/72",
      },
      targetFormat: "application/fhir+xml",
      sigFormat: "application/signature+xml",
      data: "dGhpcyBibG9iIGlzIHNuaXBwZWQ=",
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

export const ProvenanceExampleBiocomputeObject: Provenance = {
  resourceType: "Provenance",
  id: "example-biocompute-object",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n\t\t\t<p>\n\t\t\t\t<b>Generated Narrative with Details</b>\n\t\t\t</p><p>\n\t\t\t\t<b>id</b>: example-biocompute-object</p><p>\n\t\t\t\t<b>target</b>: <a href=\"http://build.fhir.org/sequence-example.html\">MolecularSequence/example</a>\n\t\t\t</p><p>\n\t\t\t\t<b>period</b>: 2017-6-6 --&gt; (ongoing)</p><p>\n\t\t\t\t<b>recorded</b>: 2016-6-9 8:12:14</p><p>\n\t\t\t\t<b>reason</b>: antiviral resistance detection (Details: [not stated] code null = 'null', stated as\n         'antiviral resistance detection')</p>\n\t\t\t<h3>Agents</h3>\n\t\t\t<table>\n\t\t\t\t<tr>\n\t\t\t\t\t<td>-</td>\n\t\t\t\t\t<td>\n\t\t\t\t\t\t<b>Role</b>\n\t\t\t\t\t</td>\n\t\t\t\t\t<td>\n\t\t\t\t\t\t<b>Who</b>\n\t\t\t\t\t</td>\n\t\t\t\t</tr>\n\t\t\t\t<tr>\n\t\t\t\t\t<td>*</td>\n\t\t\t\t\t<td>Author (Details: http://hl7.org/fhir/provenance-participant-role code author = 'Author',\n             stated as 'null')</td>\n\t\t\t\t\t<td>\n\t\t\t\t\t\t<a href=\"http://build.fhir.org/practitioner-example.html\">Practitioner/example</a>\n\t\t\t\t\t</td>\n\t\t\t\t</tr>\n\t\t\t</table>\n\t\t\t<h3>Entities</h3>\n\t\t\t<table>\n\t\t\t\t<tr>\n\t\t\t\t\t<td>-</td>\n\t\t\t\t\t<td>\n\t\t\t\t\t\t<b>Role</b>\n\t\t\t\t\t</td>\n\t\t\t\t\t<td>\n\t\t\t\t\t\t<b>Reference</b>\n\t\t\t\t\t</td>\n\t\t\t\t</tr>\n\t\t\t\t<tr>\n\t\t\t\t\t<td>*</td>\n\t\t\t\t\t<td>source</td>\n\t\t\t\t\t<td>\n\t\t\t\t\t\t<a href=\"https://hive.biochemistry.gwu.edu/cgi-bin/prd/htscsrs/servlet.cgi?pageid=bcoexample_1\">Biocompute example</a>\n\t\t\t\t\t</td>\n\t\t\t\t</tr>\n\t\t\t</table>\n\t\t</div>",
  },
  target: [
    {
      reference: "MolecularSequence/example",
    },
  ],
  occurredPeriod: {
    start: "2017-06-06",
  },
  recorded: "2016-06-09T08:12:14+10:00",
  reason: [
    {
      text: "antiviral resistance detection",
    },
  ],
  agent: [
    {
      type: {
        coding: [
          {
            system:
              "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
            code: "AUT",
          },
        ],
      },
      who: {
        reference: "Practitioner/example",
      },
    },
  ],
  entity: [
    {
      role: "source",
      what: {
        identifier: {
          type: {
            coding: [
              {
                system: "https://hive.biochemistry.gwu.edu",
                code: "biocompute",
                display: "obj.1001",
              },
            ],
          },
          value:
            "https://hive.biochemistry.gwu.edu/cgi-bin/prd/htscsrs/servlet.cgi?pageid=bcoexample_1",
        },
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

export const ProvenanceExampleCwl: Provenance = {
  resourceType: "Provenance",
  id: "example-cwl",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n\t\t\t<p>\n\t\t\t\t<b>Generated Narrative with Details</b>\n\t\t\t</p><p>\n\t\t\t\t<b>id</b>: cwl-example</p><p>\n\t\t\t\t<b>target</b>: <a href=\"http://build.fhir.org/sequence-example-pgx-1.html\">MolecularSequence/example-pgx-1</a>\n\t\t\t</p><p>\n\t\t\t\t<b>period</b>: Nov 30, 2016 --&gt; (ongoing)</p><p>\n\t\t\t\t<b>recorded</b>: Dec 1, 2016 8:12:14 AM</p><p>\n\t\t\t\t<b>reason</b>: profiling Short Tandem Repeats (STRs) from high throughput sequencing data. (Details:\n         [not stated] code null = 'null', stated as 'profiling Short Tandem Repeats (STRs) from\n         high throughput sequencing data.')</p>\n\t\t\t<h3>Agents</h3>\n\t\t\t<table>\n\t\t\t\t<tr>\n\t\t\t\t\t<td>-</td>\n\t\t\t\t\t<td>\n\t\t\t\t\t\t<b>Role</b>\n\t\t\t\t\t</td>\n\t\t\t\t\t<td>\n\t\t\t\t\t\t<b>Who</b>\n\t\t\t\t\t</td>\n\t\t\t\t</tr>\n\t\t\t\t<tr>\n\t\t\t\t\t<td>*</td>\n\t\t\t\t\t<td>Author (Details: http://hl7.org/fhir/provenance-participant-role code author = 'Author',\n             stated as 'null')</td>\n\t\t\t\t\t<td>\n\t\t\t\t\t\t<a href=\"http://build.fhir.org/patient-example.html\">Patient/example</a>\n\t\t\t\t\t</td>\n\t\t\t\t</tr>\n\t\t\t</table>\n\t\t\t<h3>Entities</h3>\n\t\t\t<table>\n\t\t\t\t<tr>\n\t\t\t\t\t<td>-</td>\n\t\t\t\t\t<td>\n\t\t\t\t\t\t<b>Role</b>\n\t\t\t\t\t</td>\n\t\t\t\t\t<td>\n\t\t\t\t\t\t<b>Reference</b>\n\t\t\t\t\t</td>\n\t\t\t\t</tr>\n\t\t\t\t<tr>\n\t\t\t\t\t<td>*</td>\n\t\t\t\t\t<td>source</td>\n\t\t\t\t\t<td>\n\t\t\t\t\t\t<a href=\"https://github.com/common-workflow-language/workflows/blob/master/workflows/lobSTR/lobSTR-workflow.cwl\">CWL example</a>\n\t\t\t\t\t</td>\n\t\t\t\t</tr>\n\t\t\t</table>\n\t\t</div>",
  },
  target: [
    {
      reference: "MolecularSequence/example-pgx-1",
    },
  ],
  occurredPeriod: {
    start: "2016-11-30",
  },
  recorded: "2016-12-01T08:12:14+10:00",
  reason: [
    {
      text: "profiling Short Tandem Repeats (STRs) from high throughput sequencing data.",
    },
  ],
  agent: [
    {
      type: {
        coding: [
          {
            system:
              "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
            code: "AUT",
          },
        ],
      },
      who: {
        reference: "Patient/example",
      },
    },
  ],
  entity: [
    {
      role: "source",
      what: {
        identifier: {
          type: {
            coding: [
              {
                system: "https://github.com/common-workflow-language/workflows",
                code: "CWL",
                display: "lobSTR",
              },
            ],
          },
          value:
            "https://github.com/common-workflow-language/workflows/blob/master/workflows/lobSTR/lobSTR-workflow.cwl",
        },
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

export const ProvenanceExampleSig: Provenance = {
  resourceType: "Provenance",
  id: "signature",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">procedure record authored on 27-June 2015 by Harold Hippocrates, MD Content extracted from Referral received 26-June</div>',
  },
  target: [
    {
      reference: "DocumentReference/example",
    },
  ],
  recorded: "2015-08-27T08:39:24+10:00",
  reason: [
    {
      coding: [
        {
          system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
          code: "TREAT",
          display: "treatment",
        },
      ],
    },
  ],
  activity: {
    coding: [
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-DocumentCompletion",
        code: "AU",
        display: "authenticated",
      },
    ],
  },
  agent: [
    {
      type: {
        coding: [
          {
            system:
              "http://terminology.hl7.org/CodeSystem/contractsignertypecodes",
            code: "VERF",
          },
        ],
      },
      who: {
        identifier: {
          system: "urn:ietf:rfc:3986",
          value: "mailto://hhd@ssa.gov",
        },
      },
    },
  ],
  signature: [
    {
      type: [
        {
          system: "urn:iso-astm:E1762-95:2013",
          code: "1.2.840.10065.1.12.1.5",
          display: "Verification Signature",
        },
      ],
      when: "2015-08-27T08:39:24+10:00",
      who: {
        reference: "Practitioner/xcda-author",
      },
      targetFormat: "application/fhir+xml",
      sigFormat: "application/signature+xml",
      data: "Li4u",
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

export const ProvenanceExample: Provenance = {
  resourceType: "Provenance",
  id: "example",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">procedure record authored on 27-June 2015 by Harold Hippocrates, MD Content extracted from XDS managed CDA Referral received 26-June as authorized by a referenced Consent.</div>',
  },
  target: [
    {
      reference: "Procedure/example/_history/1",
    },
  ],
  occurredPeriod: {
    start: "2015-06-27",
    end: "2015-06-28",
  },
  recorded: "2015-06-27T08:39:24+10:00",
  policy: ["http://acme.com/fhir/Consent/25"],
  location: {
    reference: "Location/1",
  },
  reason: [
    {
      coding: [
        {
          system: "http://snomed.info/sct",
          code: "3457005",
          display: "Referral",
        },
      ],
    },
  ],
  agent: [
    {
      type: {
        coding: [
          {
            system:
              "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
            code: "AUT",
          },
        ],
      },
      who: {
        reference: "Practitioner/xcda-author",
      },
    },
    {
      id: "a1",
      type: {
        coding: [
          {
            system:
              "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
            code: "DEV",
          },
        ],
      },
      who: {
        reference: "Device/software",
      },
    },
  ],
  entity: [
    {
      role: "source",
      what: {
        reference: "DocumentReference/example",
        display: "CDA Document in XDS repository",
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
