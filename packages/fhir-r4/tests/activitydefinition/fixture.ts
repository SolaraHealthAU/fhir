import type { ActivityDefinition } from "../../src/v4.0.1/activitydefinition/types";

export const ActivitydefinitionAdministerZikaVirusExposureAssessment: ActivityDefinition =
  {
    resourceType: "ActivityDefinition",
    id: "administer-zika-virus-exposure-assessment",
    text: {
      status: "generated",
      div: '<div xmlns="http://www.w3.org/1999/xhtml">\n         <table class="grid dict">\n            <tr>\n               <td>\n                  <b>Id: </b>\n               </td>\n            </tr>\n            <tr>\n               <td style="padding-left: 25px; padding-right: 25px;">ActivityDefinition/administer-zika-virus-exposure-assessment</td>\n            </tr>\n         </table>\n         <p/>\n         <table class="grid dict">\n            <tr>\n               <td>\n                  <b>Status: </b>\n               </td>\n            </tr>\n            <tr>\n               <td style="padding-left: 25px; padding-right: 25px;">draft</td>\n            </tr>\n         </table>\n         <p/>\n         <table class="grid dict">\n            <tr>\n               <td>\n                  <b>Description: </b>\n               </td>\n            </tr>\n            <tr>\n               <td style="padding-left: 25px; padding-right: 25px;">Administer Zika Virus Exposure Assessment</td>\n            </tr>\n         </table>\n         <p/>\n         <table class="grid dict">\n            <tr>\n               <td>\n                  <b>Category: </b>\n               </td>\n            </tr>\n            <tr>\n               <td style="padding-left: 25px; padding-right: 25px;">procedure</td>\n            </tr>\n         </table>\n         <p/>\n         <table class="grid dict">\n            <tr>\n               <td>\n                  <b>Code: </b>\n               </td>\n            </tr>\n            <tr>\n               <td style="padding-right: 25px;">\n                  <span>\n                     <span>\n                        <span style="padding-left: 25px;">\n                           <b>system: </b>\n                           <span>http://example.org/questionnaires</span>\n                           <br/>\n                        </span>\n                        <span style="padding-left: 25px;">\n                           <b>code: </b>\n                           <span>zika-virus-exposure-assessment</span>\n                           <br/>\n                        </span>\n                     </span>\n                  </span>\n               </td>\n            </tr>\n         </table>\n         <p/>\n         <table class="grid dict">\n            <tr>\n               <td>\n                  <b>Participant: </b>\n               </td>\n            </tr>\n            <tr style="vertical-align: top;">\n               <td style="padding-left: 25px; padding-right: 25px;">practitioner</td>\n            </tr>\n         </table>\n      </div>',
    },
    url: "http://example.org/ActivityDefinition/administer-zika-virus-exposure-assessment",
    status: "draft",
    description: "Administer Zika Virus Exposure Assessment",
    useContext: [
      {
        code: {
          system: "http://terminology.hl7.org/CodeSystem/usage-context-type",
          code: "age",
        },
        valueRange: {
          low: {
            value: 12,
            unit: "a",
          },
        },
      },
    ],
    relatedArtifact: [
      {
        type: "derived-from",
        url: "https://www.cdc.gov/zika/hc-providers/pregnant-woman.html",
      },
      {
        type: "depends-on",
        resource: "Questionnaire/zika-virus-exposure-assessment",
      },
    ],
    library: ["Library/zika-virus-intervention-logic"],
    kind: "ServiceRequest",
    code: {
      coding: [
        {
          system: "http://example.org/questionnaires",
          code: "zika-virus-exposure-assessment",
        },
      ],
    },
    timingTiming: {
      _event: [
        {
          extension: [
            {
              url: "http://hl7.org/fhir/StructureDefinition/cqf-expression",
              valueExpression: {
                language: "text/cql",
                expression: "Now()",
              },
            },
          ],
        },
      ],
    },
    participant: [
      {
        type: "practitioner",
      },
    ],
  } as const;

export const ActivitydefinitionExample: ActivityDefinition = {
  resourceType: "ActivityDefinition",
  id: "referralPrimaryCareMentalHealth",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n         <table class="grid dict">\n            <tr>\n               <td>\n                  <b>Id: </b>\n               </td>\n            </tr>\n            <tr>\n               <td style="padding-left: 25px; padding-right: 25px;">ActivityDefinition/referralPrimaryCareMentalHealth</td>\n            </tr>\n         </table>\n         <p/>\n         <table class="grid dict">\n            <tr>\n               <td>\n                  <b>Status: </b>\n               </td>\n            </tr>\n            <tr>\n               <td style="padding-left: 25px; padding-right: 25px;">draft</td>\n            </tr>\n         </table>\n         <p/>\n         <table class="grid dict">\n            <tr>\n               <td>\n                  <b>Description: </b>\n               </td>\n            </tr>\n            <tr>\n               <td style="padding-left: 25px; padding-right: 25px;">refer to primary care mental-health integrated care program for evaluation and treatment of mental health conditions now</td>\n            </tr>\n         </table>\n         <p/>\n         <table class="grid dict">\n            <tr>\n               <td>\n                  <b>Category: </b>\n               </td>\n            </tr>\n            <tr>\n               <td style="padding-left: 25px; padding-right: 25px;">referral</td>\n            </tr>\n         </table>\n         <p/>\n         <table class="grid dict">\n            <tr>\n               <td>\n                  <b>Code: </b>\n               </td>\n            </tr>\n            <tr>\n               <td style="padding-right: 25px;">\n                  <span style="padding-left: 25px;">\n                     <b>text: </b>\n                     <span>Referral to service (procedure)</span>\n                     <br/>\n                  </span>\n                  <span>\n                     <span>\n                        <span style="padding-left: 25px;">\n                           <b>system: </b>\n                           <span>http://snomed.info/sct</span>\n                           <br/>\n                        </span>\n                        <span style="padding-left: 25px;">\n                           <b>code: </b>\n                           <span>306206005</span>\n                           <br/>\n                        </span>\n                     </span>\n                  </span>\n               </td>\n            </tr>\n         </table>\n         <p/>\n         <table class="grid dict">\n            <tr>\n               <td>\n                  <b>Participant: </b>\n               </td>\n            </tr>\n            <tr style="vertical-align: top;">\n               <td style="padding-left: 25px; padding-right: 25px;">practitioner</td>\n            </tr>\n         </table>\n      </div>',
  },
  url: "http://motivemi.com/artifacts/ActivityDefinition/referralPrimaryCareMentalHealth",
  identifier: [
    {
      use: "official",
      system: "http://motivemi.com/artifacts",
      value: "referralPrimaryCareMentalHealth",
    },
  ],
  version: "1.1.0",
  name: "ReferralPrimaryCareMentalHealth",
  title: "Referral to Primary Care Mental Health",
  status: "active",
  experimental: true,
  date: "2017-03-03T14:06:00Z",
  publisher: "Motive Medical Intelligence",
  contact: [
    {
      telecom: [
        {
          system: "phone",
          value: "415-362-4007",
          use: "work",
        },
        {
          system: "email",
          value: "info@motivemi.com",
          use: "work",
        },
      ],
    },
  ],
  description:
    "refer to primary care mental-health integrated care program for evaluation and treatment of mental health conditions now",
  useContext: [
    {
      code: {
        system: "http://terminology.hl7.org/CodeSystem/usage-context-type",
        code: "age",
      },
      valueCodeableConcept: {
        coding: [
          {
            system: "https://meshb.nlm.nih.gov",
            code: "D000328",
            display: "Adult",
          },
        ],
      },
    },
    {
      code: {
        system: "http://terminology.hl7.org/CodeSystem/usage-context-type",
        code: "focus",
      },
      valueCodeableConcept: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "87512008",
            display: "Mild major depression",
          },
        ],
      },
    },
    {
      code: {
        system: "http://terminology.hl7.org/CodeSystem/usage-context-type",
        code: "focus",
      },
      valueCodeableConcept: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "40379007",
            display: "Major depression, recurrent, mild",
          },
        ],
      },
    },
    {
      code: {
        system: "http://terminology.hl7.org/CodeSystem/usage-context-type",
        code: "focus",
      },
      valueCodeableConcept: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "225444004",
            display: "At risk for suicide (finding)",
          },
        ],
      },
    },
    {
      code: {
        system: "http://terminology.hl7.org/CodeSystem/usage-context-type",
        code: "focus",
      },
      valueCodeableConcept: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "306206005",
            display: "Referral to service (procedure)",
          },
        ],
      },
    },
    {
      code: {
        system: "http://terminology.hl7.org/CodeSystem/usage-context-type",
        code: "user",
      },
      valueCodeableConcept: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "309343006",
            display: "Physician",
          },
        ],
      },
    },
    {
      code: {
        system: "http://terminology.hl7.org/CodeSystem/usage-context-type",
        code: "venue",
      },
      valueCodeableConcept: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "440655000",
            display: "Outpatient environment",
          },
        ],
      },
    },
  ],
  jurisdiction: [
    {
      coding: [
        {
          system: "urn:iso:std:iso:3166",
          code: "US",
        },
      ],
    },
  ],
  purpose:
    "Defines a referral to a mental-health integrated care program for use in suicide risk order sets. The definition is independent of the order set in which it appears to allow reuse of the general definition of the referrral.",
  usage:
    "This activity definition is used as the definition of a referral request within various suicide risk order sets. Elements that apply universally are defined here, while elements that apply to the specific setting of a referral within a particular order set are defined in the order set.",
  copyright:
    "© Copyright 2016 Motive Medical Intelligence. All rights reserved.",
  approvalDate: "2017-03-01",
  lastReviewDate: "2017-03-01",
  effectivePeriod: {
    start: "2017-03-01",
    end: "2017-12-31",
  },
  topic: [
    {
      text: "Mental Health Referral",
    },
  ],
  author: [
    {
      name: "Motive Medical Intelligence",
      telecom: [
        {
          system: "phone",
          value: "415-362-4007",
          use: "work",
        },
        {
          system: "email",
          value: "info@motivemi.com",
          use: "work",
        },
      ],
    },
  ],
  relatedArtifact: [
    {
      type: "citation",
      display:
        "Practice Guideline for the Treatment of Patients with Major Depressive Disorder",
      url: "http://psychiatryonline.org/pb/assets/raw/sitewide/practice_guidelines/guidelines/mdd.pdf",
    },
    {
      type: "predecessor",
      resource: "ActivityDefinition/referralPrimaryCareMentalHealth-initial",
    },
  ],
  kind: "ServiceRequest",
  code: {
    coding: [
      {
        system: "http://snomed.info/sct",
        code: "306206005",
      },
    ],
    text: "Referral to service (procedure)",
  },
  timingTiming: {
    _event: [
      {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/cqf-expression",
            valueExpression: {
              language: "text/cql",
              expression: "Now()",
            },
          },
        ],
      },
    ],
  },
  participant: [
    {
      type: "practitioner",
    },
  ],
} as const;

export const ActivitydefinitionMedicationorderExample: ActivityDefinition = {
  resourceType: "ActivityDefinition",
  id: "citalopramPrescription",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: citalopramPrescription</p><p><b>contained</b>: , </p><p><b>url</b>: <b>http://motivemi.com/artifacts/ActivityDefinition/citalopramPrescription</b></p><p><b>identifier</b>: citalopramPrescription (OFFICIAL)</p><p><b>version</b>: 1.0.0</p><p><b>name</b>: CitalopramPrescription</p><p><b>title</b>: Citalopram Prescription</p><p><b>status</b>: active</p><p><b>experimental</b>: true</p><p><b>date</b>: 15/08/2015</p><p><b>publisher</b>: Motive Medical Intelligence</p><p><b>contact</b>: </p><p><b>description</b>: Citalopram 20 mg tablet 1 tablet oral 1 time daily now (30 table; 3 refills</p><p><b>useContext</b>: , , , , , , </p><p><b>jurisdiction</b>: United States of America <span>(Details : {urn:iso:std:iso:3166 code 'US' = 'United States of America)</span></p><p><b>purpose</b>: Defines a guideline supported prescription for the treatment of depressive disorders</p><p><b>usage</b>: This activity definition is used as part of various suicide risk order sets</p><p><b>copyright</b>: © Copyright 2016 Motive Medical Intelligence. All rights reserved.</p><p><b>approvalDate</b>: 12/03/2016</p><p><b>lastReviewDate</b>: 15/08/2016</p><p><b>effectivePeriod</b>: 01/01/2016 --&gt; 31/12/2017</p><p><b>topic</b>: Mental Health Treatment <span>(Details )</span></p><p><b>author</b>: </p><p><b>relatedArtifact</b>: , </p><p><b>kind</b>: MedicationRequest</p><p><b>product</b>: id: citalopramMedication; citalopram <span>(Details : {RxNorm code '200371' = 'citalopram 20 MG Oral Tablet)</span>; Tablet dose form <span>(Details : {SNOMED CT code '385055001' = 'Tablet', given as 'Tablet dose form'})</span></p><p><b>dosage</b>: </p><blockquote><p><b>dynamicValue</b></p><p><b>path</b>: dispenseRequest.numberOfRepeatsAllowed</p><p><b>expression</b>: </p></blockquote><blockquote><p><b>dynamicValue</b></p><p><b>path</b>: dispenseRequest.quantity</p><p><b>expression</b>: </p></blockquote></div>",
  },
  contained: [
    {
      resourceType: "Medication",
      id: "citalopramMedication",
      code: {
        coding: [
          {
            system: "http://www.nlm.nih.gov/research/umls/rxnorm",
            code: "200371",
          },
        ],
        text: "citalopram",
      },
      form: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "385055001",
            display: "Tablet dose form",
          },
        ],
        text: "Tablet dose form",
      },
      ingredient: [
        {
          itemReference: {
            reference: "#citalopramSubstance",
          },
          strength: {
            numerator: {
              value: 20,
              unit: "mg",
            },
            denominator: {
              value: 1,
              unit: "{tbl}",
            },
          },
        },
      ],
    },
    {
      resourceType: "Substance",
      id: "citalopramSubstance",
      code: {
        coding: [
          {
            system: "http://www.nlm.nih.gov/research/umls/rxnorm",
            code: "2556",
          },
        ],
        text: "citalopram",
      },
    },
  ],
  url: "http://motivemi.com/artifacts/ActivityDefinition/citalopramPrescription",
  identifier: [
    {
      use: "official",
      system: "http://motivemi.com",
      value: "citalopramPrescription",
    },
  ],
  version: "1.0.0",
  name: "CitalopramPrescription",
  title: "Citalopram Prescription",
  status: "active",
  experimental: true,
  date: "2015-08-15",
  publisher: "Motive Medical Intelligence",
  contact: [
    {
      telecom: [
        {
          system: "phone",
          value: "415-362-4007",
          use: "work",
        },
        {
          system: "email",
          value: "info@motivemi.com",
          use: "work",
        },
      ],
    },
  ],
  description:
    "Citalopram 20 mg tablet 1 tablet oral 1 time daily now (30 table; 3 refills",
  useContext: [
    {
      code: {
        system: "http://terminology.hl7.org/CodeSystem/usage-context-type",
        code: "age",
      },
      valueCodeableConcept: {
        coding: [
          {
            system: "https://meshb.nlm.nih.gov",
            code: "D000328",
            display: "Adult",
          },
        ],
      },
    },
    {
      code: {
        system: "http://terminology.hl7.org/CodeSystem/usage-context-type",
        code: "focus",
      },
      valueCodeableConcept: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "87512008",
            display: "Mild major depression",
          },
        ],
      },
    },
    {
      code: {
        system: "http://terminology.hl7.org/CodeSystem/usage-context-type",
        code: "focus",
      },
      valueCodeableConcept: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "40379007",
            display: "Major depression, recurrent, mild",
          },
        ],
      },
    },
    {
      code: {
        system: "http://terminology.hl7.org/CodeSystem/usage-context-type",
        code: "focus",
      },
      valueCodeableConcept: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "225444004",
            display: "At risk for suicide (finding)",
          },
        ],
      },
    },
    {
      code: {
        system: "http://terminology.hl7.org/CodeSystem/usage-context-type",
        code: "focus",
      },
      valueCodeableConcept: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "306206005",
            display: "Referral to service (procedure)",
          },
        ],
      },
    },
    {
      code: {
        system: "http://terminology.hl7.org/CodeSystem/usage-context-type",
        code: "user",
      },
      valueCodeableConcept: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "309343006",
            display: "Physician",
          },
        ],
      },
    },
    {
      code: {
        system: "http://terminology.hl7.org/CodeSystem/usage-context-type",
        code: "venue",
      },
      valueCodeableConcept: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "440655000",
            display: "Outpatient environment",
          },
        ],
      },
    },
  ],
  jurisdiction: [
    {
      coding: [
        {
          system: "urn:iso:std:iso:3166",
          code: "US",
        },
      ],
    },
  ],
  purpose:
    "Defines a guideline supported prescription for the treatment of depressive disorders",
  usage:
    "This activity definition is used as part of various suicide risk order sets",
  copyright:
    "© Copyright 2016 Motive Medical Intelligence. All rights reserved.",
  approvalDate: "2016-03-12",
  lastReviewDate: "2016-08-15",
  effectivePeriod: {
    start: "2016-01-01",
    end: "2017-12-31",
  },
  topic: [
    {
      text: "Mental Health Treatment",
    },
  ],
  author: [
    {
      name: "Motive Medical Intelligence",
      telecom: [
        {
          system: "phone",
          value: "415-362-4007",
          use: "work",
        },
        {
          system: "email",
          value: "info@motivemi.com",
          use: "work",
        },
      ],
    },
  ],
  relatedArtifact: [
    {
      type: "citation",
      display:
        "Practice Guideline for the Treatment of Patients with Major Depressive Disorder",
      url: "http://psychiatryonline.org/pb/assets/raw/sitewide/practice_guidelines/guidelines/mdd.pdf",
    },
    {
      type: "composed-of",
      resource: "#citalopramMedication",
    },
  ],
  kind: "MedicationRequest",
  productReference: {
    reference: "#citalopramMedication",
  },
  dosage: [
    {
      text: "1 tablet oral 1 time daily",
      timing: {
        repeat: {
          frequency: 1,
          period: 1,
          periodUnit: "d",
        },
      },
      route: {
        coding: [
          {
            code: "26643006",
            display: "Oral route (qualifier value)",
          },
        ],
        text: "Oral route (qualifier value)",
      },
      doseAndRate: [
        {
          type: {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/dose-rate-type",
                code: "ordered",
                display: "Ordered",
              },
            ],
          },
          doseQuantity: {
            value: 1,
            unit: "{tbl}",
          },
        },
      ],
    },
  ],
  dynamicValue: [
    {
      path: "dispenseRequest.numberOfRepeatsAllowed",
      expression: {
        description: "dispenseRequest.numberOfRepeatsAllowed is three (3)",
        language: "text/cql",
        expression: "3",
      },
    },
    {
      path: "dispenseRequest.quantity",
      expression: {
        description: "dispenseRequest.quantity is thirty (30) tablets",
        language: "text/cql",
        expression: "30 '{tbl}'",
      },
    },
  ],
} as const;

export const ActivitydefinitionOrderSerumDengueVirusIgm: ActivityDefinition = {
  resourceType: "ActivityDefinition",
  id: "serum-dengue-virus-igm",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n         <table class="grid dict">\n            <tr>\n               <td>\n                  <b>Id: </b>\n               </td>\n            </tr>\n            <tr>\n               <td style="padding-left: 25px; padding-right: 25px;">ActivityDefinition/serum-dengue-virus-igm</td>\n            </tr>\n         </table>\n         <p/>\n         <table class="grid dict">\n            <tr>\n               <td>\n                  <b>Status: </b>\n               </td>\n            </tr>\n            <tr>\n               <td style="padding-left: 25px; padding-right: 25px;">draft</td>\n            </tr>\n         </table>\n         <p/>\n         <table class="grid dict">\n            <tr>\n               <td>\n                  <b>Description: </b>\n               </td>\n            </tr>\n            <tr>\n               <td style="padding-left: 25px; padding-right: 25px;">Order Serum Dengue Virus IgM</td>\n            </tr>\n         </table>\n         <p/>\n         <table class="grid dict">\n            <tr>\n               <td>\n                  <b>Related: </b>\n               </td>\n            </tr>\n            <tr style="vertical-align: top;">\n               <td style="padding-left: 25px; padding-right: 25px;">\n                  <p style="margin-top: 5px;">\n                     <b>type: </b>\n                     <span>documentation</span>\n                  </p>\n                  <p style="margin-top: 5px;">\n                     <b>display: </b>\n                     <span>Explanation of diagnostic tests for Dengue virus and which to use based on the patients clinical and exposure history.</span>\n                  </p>\n               </td>\n            </tr>\n         </table>\n         <p/>\n         <table class="grid dict">\n            <tr>\n               <td>\n                  <b>Category: </b>\n               </td>\n            </tr>\n            <tr>\n               <td style="padding-left: 25px; padding-right: 25px;">diagnostic</td>\n            </tr>\n         </table>\n         <p/>\n         <table class="grid dict">\n            <tr>\n               <td>\n                  <b>Code: </b>\n               </td>\n            </tr>\n            <tr>\n               <td style="padding-right: 25px;">\n                  <span style="padding-left: 25px;">\n                     <b>text: </b>\n                     <span>Serum Dengue Virus IgM</span>\n                     <br/>\n                  </span>\n               </td>\n            </tr>\n         </table>\n         <p/>\n         <table class="grid dict">\n            <tr>\n               <td>\n                  <b>Participant: </b>\n               </td>\n            </tr>\n            <tr style="vertical-align: top;">\n               <td style="padding-left: 25px; padding-right: 25px;">practitioner</td>\n            </tr>\n         </table>\n      </div>',
  },
  url: "http://example.org/ActivityDefinition/serum-dengue-virus-igm",
  status: "draft",
  description: "Order Serum Dengue Virus IgM",
  relatedArtifact: [
    {
      type: "documentation",
      display:
        "Explanation of diagnostic tests for Dengue virus and which to use based on the patient’s clinical and exposure history.",
    },
  ],
  kind: "ServiceRequest",
  code: {
    text: "Serum Dengue Virus IgM",
  },
  timingTiming: {
    _event: [
      {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/cqf-expression",
            valueExpression: {
              language: "text/cql",
              expression: "Now()",
            },
          },
        ],
      },
    ],
  },
  participant: [
    {
      type: "practitioner",
    },
  ],
} as const;

export const ActivitydefinitionOrderSerumZikaDengueVirusIgm: ActivityDefinition =
  {
    resourceType: "ActivityDefinition",
    id: "serum-zika-dengue-virus-igm",
    text: {
      status: "generated",
      div: '<div xmlns="http://www.w3.org/1999/xhtml">\n         <table class="grid dict">\n            <tr>\n               <td>\n                  <b>Id: </b>\n               </td>\n            </tr>\n            <tr>\n               <td style="padding-left: 25px; padding-right: 25px;">ActivityDefinition/serum-zika-dengue-virus-igm</td>\n            </tr>\n         </table>\n         <p/>\n         <table class="grid dict">\n            <tr>\n               <td>\n                  <b>Status: </b>\n               </td>\n            </tr>\n            <tr>\n               <td style="padding-left: 25px; padding-right: 25px;">draft</td>\n            </tr>\n         </table>\n         <p/>\n         <table class="grid dict">\n            <tr>\n               <td>\n                  <b>Description: </b>\n               </td>\n            </tr>\n            <tr>\n               <td style="padding-left: 25px; padding-right: 25px;">Order Serum Zika and Dengue Virus IgM</td>\n            </tr>\n         </table>\n         <p/>\n         <table class="grid dict">\n            <tr>\n               <td>\n                  <b>Related: </b>\n               </td>\n            </tr>\n            <tr style="vertical-align: top;">\n               <td style="padding-left: 25px; padding-right: 25px;">\n                  <p style="margin-top: 5px;">\n                     <b>type: </b>\n                     <span>documentation</span>\n                  </p>\n                  <p style="margin-top: 5px;">\n                     <b>display: </b>\n                     <span>Explanation of diagnostic tests for Zika virus and which to use based on the patients clinical and exposure history.</span>\n                  </p>\n                  <p style="margin-top: 5px;">\n                     <b>url: </b>\n                     <span>http://www.cdc.gov/zika/hc-providers/diagnostic.html</span>\n                  </p>\n               </td>\n            </tr>\n         </table>\n         <p/>\n         <table class="grid dict">\n            <tr>\n               <td>\n                  <b>Category: </b>\n               </td>\n            </tr>\n            <tr>\n               <td style="padding-left: 25px; padding-right: 25px;">diagnostic</td>\n            </tr>\n         </table>\n         <p/>\n         <table class="grid dict">\n            <tr>\n               <td>\n                  <b>Code: </b>\n               </td>\n            </tr>\n            <tr>\n               <td style="padding-right: 25px;">\n                  <span style="padding-left: 25px;">\n                     <b>text: </b>\n                     <span>Serum Zika and Dengue Virus IgM</span>\n                     <br/>\n                  </span>\n               </td>\n            </tr>\n         </table>\n         <p/>\n         <table class="grid dict">\n            <tr>\n               <td>\n                  <b>Participant: </b>\n               </td>\n            </tr>\n            <tr style="vertical-align: top;">\n               <td style="padding-left: 25px; padding-right: 25px;">practitioner</td>\n            </tr>\n         </table>\n      </div>',
    },
    url: "http://example.org/ActivityDefinition/serum-zika-dengue-virus-igm",
    status: "draft",
    description: "Order Serum Zika and Dengue Virus IgM",
    relatedArtifact: [
      {
        type: "documentation",
        display:
          "Explanation of diagnostic tests for Zika virus and which to use based on the patient’s clinical and exposure history.",
        url: "http://www.cdc.gov/zika/hc-providers/diagnostic.html",
      },
      {
        type: "derived-from",
        resource: "ActivityDefinition/serum-dengue-virus-igm",
      },
    ],
    library: ["Library/zika-virus-intervention-logic"],
    kind: "ServiceRequest",
    code: {
      text: "Serum Zika and Dengue Virus IgM",
    },
    timingTiming: {
      _event: [
        {
          extension: [
            {
              url: "http://hl7.org/fhir/StructureDefinition/cqf-expression",
              valueExpression: {
                language: "text/cql",
                expression: "Now()",
              },
            },
          ],
        },
      ],
    },
    participant: [
      {
        type: "practitioner",
      },
    ],
  } as const;

export const ActivitydefinitionPredecessorExample: ActivityDefinition = {
  resourceType: "ActivityDefinition",
  id: "referralPrimaryCareMentalHealth-initial",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n         <table class="grid dict">\n            <tr>\n               <td>\n                  <b>Id: </b>\n               </td>\n            </tr>\n            <tr>\n               <td style="padding-left: 25px; padding-right: 25px;">ActivityDefinition/referralPrimaryCareMentalHealth-initial</td>\n            </tr>\n         </table>\n         <p/>\n         <table class="grid dict">\n            <tr>\n               <td>\n                  <b>Status: </b>\n               </td>\n            </tr>\n            <tr>\n               <td style="padding-left: 25px; padding-right: 25px;">draft</td>\n            </tr>\n         </table>\n         <p/>\n         <table class="grid dict">\n            <tr>\n               <td>\n                  <b>Description: </b>\n               </td>\n            </tr>\n            <tr>\n               <td style="padding-left: 25px; padding-right: 25px;">refer to primary care mental-health integrated care program for evaluation and treatment of mental health conditions now</td>\n            </tr>\n         </table>\n         <p/>\n         <table class="grid dict">\n            <tr>\n               <td>\n                  <b>Category: </b>\n               </td>\n            </tr>\n            <tr>\n               <td style="padding-left: 25px; padding-right: 25px;">referral</td>\n            </tr>\n         </table>\n         <p/>\n         <table class="grid dict">\n            <tr>\n               <td>\n                  <b>Code: </b>\n               </td>\n            </tr>\n            <tr>\n               <td style="padding-right: 25px;">\n                  <span style="padding-left: 25px;">\n                     <b>text: </b>\n                     <span>Referral to service (procedure)</span>\n                     <br/>\n                  </span>\n                  <span>\n                     <span>\n                        <span style="padding-left: 25px;">\n                           <b>system: </b>\n                           <span>http://snomed.info/sct</span>\n                           <br/>\n                        </span>\n                        <span style="padding-left: 25px;">\n                           <b>code: </b>\n                           <span>306206005</span>\n                           <br/>\n                        </span>\n                     </span>\n                  </span>\n               </td>\n            </tr>\n         </table>\n         <p/>\n         <table class="grid dict">\n            <tr>\n               <td>\n                  <b>Participant: </b>\n               </td>\n            </tr>\n            <tr style="vertical-align: top;">\n               <td style="padding-left: 25px; padding-right: 25px;">practitioner</td>\n            </tr>\n         </table>\n      </div>',
  },
  url: "http://motivemi.com/artifacts/ActivityDefinition/referralPrimaryCareMentalHealth",
  identifier: [
    {
      use: "official",
      system: "http://motivemi.com/artifacts",
      value: "referralPrimaryCareMentalHealth",
    },
  ],
  version: "1.0.0",
  name: "ReferralPrimaryCareMentalHealth",
  title: "Referral to Primary Care Mental Health",
  status: "retired",
  experimental: true,
  date: "2017-03-03T14:06:00Z",
  publisher: "Motive Medical Intelligence",
  contact: [
    {
      telecom: [
        {
          system: "phone",
          value: "415-362-4007",
          use: "work",
        },
        {
          system: "email",
          value: "info@motivemi.com",
          use: "work",
        },
      ],
    },
  ],
  description:
    "refer to primary care mental-health integrated care program for evaluation and treatment of mental health conditions now",
  useContext: [
    {
      code: {
        system: "http://terminology.hl7.org/CodeSystem/usage-context-type",
        code: "age",
      },
      valueCodeableConcept: {
        coding: [
          {
            system: "https://meshb.nlm.nih.gov",
            code: "D000328",
            display: "Adult",
          },
        ],
      },
    },
    {
      code: {
        system: "http://terminology.hl7.org/CodeSystem/usage-context-type",
        code: "focus",
      },
      valueCodeableConcept: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "87512008",
            display: "Mild major depression",
          },
        ],
      },
    },
    {
      code: {
        system: "http://terminology.hl7.org/CodeSystem/usage-context-type",
        code: "focus",
      },
      valueCodeableConcept: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "40379007",
            display: "Major depression, recurrent, mild",
          },
        ],
      },
    },
    {
      code: {
        system: "http://terminology.hl7.org/CodeSystem/usage-context-type",
        code: "focus",
      },
      valueCodeableConcept: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "225444004",
            display: "At risk for suicide (finding)",
          },
        ],
      },
    },
    {
      code: {
        system: "http://terminology.hl7.org/CodeSystem/usage-context-type",
        code: "focus",
      },
      valueCodeableConcept: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "306206005",
            display: "Referral to service (procedure)",
          },
        ],
      },
    },
    {
      code: {
        system: "http://terminology.hl7.org/CodeSystem/usage-context-type",
        code: "user",
      },
      valueCodeableConcept: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "309343006",
            display: "Physician",
          },
        ],
      },
    },
    {
      code: {
        system: "http://terminology.hl7.org/CodeSystem/usage-context-type",
        code: "venue",
      },
      valueCodeableConcept: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "440655000",
            display: "Outpatient environment",
          },
        ],
      },
    },
  ],
  jurisdiction: [
    {
      coding: [
        {
          system: "urn:iso:std:iso:3166",
          code: "US",
        },
      ],
    },
  ],
  purpose:
    "Defines a referral to a mental-health integrated care program for use in suicide risk order sets. The definition is independent of the order set in which it appears to allow reuse of the general definition of the referrral.",
  usage:
    "This activity definition is used as the definition of a referral request within various suicide risk order sets. Elements that apply universally are defined here, while elements that apply to the specific setting of a referral within a particular order set are defined in the order set.",
  copyright:
    "© Copyright 2016 Motive Medical Intelligence. All rights reserved.",
  approvalDate: "2016-03-12",
  lastReviewDate: "2016-08-15",
  effectivePeriod: {
    start: "2016-01-01",
    end: "2017-12-31",
  },
  topic: [
    {
      text: "Mental Health Referral",
    },
  ],
  author: [
    {
      name: "Motive Medical Intelligence",
      telecom: [
        {
          system: "phone",
          value: "415-362-4007",
          use: "work",
        },
        {
          system: "email",
          value: "info@motivemi.com",
          use: "work",
        },
      ],
    },
  ],
  relatedArtifact: [
    {
      type: "citation",
      display:
        "Practice Guideline for the Treatment of Patients with Major Depressive Disorder",
      url: "http://psychiatryonline.org/pb/assets/raw/sitewide/practice_guidelines/guidelines/mdd.pdf",
    },
    {
      type: "successor",
      resource: "ActivityDefinition/referralPrimaryCareMentalHealth",
    },
  ],
  kind: "ServiceRequest",
  code: {
    coding: [
      {
        system: "http://snomed.info/sct",
        code: "306206005",
      },
    ],
    text: "Referral to service (procedure)",
  },
  timingTiming: {
    _event: [
      {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/cqf-expression",
            valueExpression: {
              language: "text/cql",
              expression: "Now()",
            },
          },
        ],
      },
    ],
  },
  participant: [
    {
      type: "practitioner",
    },
  ],
} as const;

export const ActivitydefinitionProvideMosquitoPreventionAdvice: ActivityDefinition =
  {
    resourceType: "ActivityDefinition",
    id: "provide-mosquito-prevention-advice",
    text: {
      status: "generated",
      div: '<div xmlns="http://www.w3.org/1999/xhtml">\n         <table class="grid dict">\n            <tr>\n               <td>\n                  <b>Id: </b>\n               </td>\n            </tr>\n            <tr>\n               <td style="padding-left: 25px; padding-right: 25px;">ActivityDefinition/provide-mosquito-prevention-advice</td>\n            </tr>\n         </table>\n         <p/>\n         <table class="grid dict">\n            <tr>\n               <td>\n                  <b>Status: </b>\n               </td>\n            </tr>\n            <tr>\n               <td style="padding-left: 25px; padding-right: 25px;">draft</td>\n            </tr>\n         </table>\n         <p/>\n         <table class="grid dict">\n            <tr>\n               <td>\n                  <b>Description: </b>\n               </td>\n            </tr>\n            <tr>\n               <td style="padding-left: 25px; padding-right: 25px;">Provide mosquito prevention advice</td>\n            </tr>\n         </table>\n         <p/>\n         <table class="grid dict">\n            <tr>\n               <td>\n                  <b>Related: </b>\n               </td>\n            </tr>\n            <tr style="vertical-align: top;">\n               <td style="padding-left: 25px; padding-right: 25px;">\n                  <p style="margin-top: 5px;">\n                     <b>type: </b>\n                     <span>documentation</span>\n                  </p>\n                  <p style="margin-top: 5px;">\n                     <b>display: </b>\n                     <span>Advice for patients about how to avoid Mosquito bites.</span>\n                  </p>\n                  <p style="margin-top: 5px;">\n                     <b>url: </b>\n                     <span>http://www.cdc.gov/zika/prevention/index.html</span>\n                  </p>\n               </td>\n            </tr>\n         </table>\n         <table class="grid dict">\n            <tr>\n               <td>\n                  <b>Related: </b>\n               </td>\n            </tr>\n            <tr style="vertical-align: top;">\n               <td style="padding-left: 25px; padding-right: 25px;">\n                  <p style="margin-top: 5px;">\n                     <b>type: </b>\n                     <span>documentation</span>\n                  </p>\n                  <p style="margin-top: 5px;">\n                     <b>display: </b>\n                     <span>Advice for patients about which mosquito repellents are effective and safe to use in pregnancy. [DEET, IF3535 and Picardin are safe during]</span>\n                  </p>\n                  <p style="margin-top: 5px;">\n                     <b>url: </b>\n                     <span>https://www.epa.gov/insect-repellents/find-insect-repellent-right-you</span>\n                  </p>\n               </td>\n            </tr>\n         </table>\n         <p/>\n         <table class="grid dict">\n            <tr>\n               <td>\n                  <b>Category: </b>\n               </td>\n            </tr>\n            <tr>\n               <td style="padding-left: 25px; padding-right: 25px;">communication</td>\n            </tr>\n         </table>\n         <p/>\n         <table class="grid dict">\n            <tr>\n               <td>\n                  <b>Code: </b>\n               </td>\n            </tr>\n            <tr>\n               <td style="padding-right: 25px;">\n                  <span style="padding-left: 25px;">\n                     <b>text: </b>\n                     <span>Provide Mosquito Prevention Advice</span>\n                     <br/>\n                  </span>\n               </td>\n            </tr>\n         </table>\n         <p/>\n         <table class="grid dict">\n            <tr>\n               <td>\n                  <b>Participant: </b>\n               </td>\n            </tr>\n            <tr style="vertical-align: top;">\n               <td style="padding-left: 25px; padding-right: 25px;">practitioner</td>\n            </tr>\n         </table>\n      </div>',
    },
    url: "http://example.org/ActivityDefinition/provide-mosquito-prevention-advice",
    status: "draft",
    description: "Provide mosquito prevention advice",
    relatedArtifact: [
      {
        type: "documentation",
        display: "Advice for patients about how to avoid Mosquito bites.",
        url: "http://www.cdc.gov/zika/prevention/index.html",
      },
      {
        type: "documentation",
        display:
          "Advice for patients about which mosquito repellents are effective and safe to use in pregnancy. [DEET, IF3535 and Picardin are safe during]",
        url: "https://www.epa.gov/insect-repellents/find-insect-repellent-right-you",
      },
    ],
    library: ["Library/zika-virus-intervention-logic"],
    kind: "CommunicationRequest",
    code: {
      text: "Provide Mosquito Prevention Advice",
    },
    timingTiming: {
      _event: [
        {
          extension: [
            {
              url: "http://hl7.org/fhir/StructureDefinition/cqf-expression",
              valueExpression: {
                language: "text/cql",
                expression: "Now()",
              },
            },
          ],
        },
      ],
    },
    participant: [
      {
        type: "practitioner",
      },
    ],
  } as const;

export const ActivitydefinitionServicerequestExample: ActivityDefinition = {
  resourceType: "ActivityDefinition",
  id: "heart-valve-replacement",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n    </div>',
  },
  status: "draft",
  description: "Heart valve replacement",
  useContext: [
    {
      code: {
        system: "http://terminology.hl7.org/CodeSystem/usage-context-type",
        code: "age",
      },
      valueCodeableConcept: {
        coding: [
          {
            system: "https://meshb.nlm.nih.gov",
            code: "D000328",
            display: "Adult",
          },
        ],
      },
    },
    {
      code: {
        system: "http://terminology.hl7.org/CodeSystem/usage-context-type",
        code: "user",
      },
      valueCodeableConcept: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "309343006",
            display: "Physician",
          },
        ],
      },
    },
  ],
  purpose: "Describes the proposal to perform a Heart Valve replacement.",
  usage:
    "This activity definition is used as the definition of a service request to perform a heart valve replacement. Elements that apply universally are defined here, while elements that apply to the specific setting of a referral within a particular order set are defined in the order set.",
  topic: [
    {
      coding: [
        {
          system: "http://snomed.info/sct",
          code: "34068001",
          display: "Heart valve replacement",
        },
      ],
    },
  ],
  kind: "ServiceRequest",
  code: {
    coding: [
      {
        system: "http://snomed.info/sct",
        code: "34068001",
        display: "Heart valve replacement",
      },
    ],
  },
  timingTiming: {
    _event: [
      {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/cqf-expression",
            valueExpression: {
              language: "text/cql",
              expression: "Now()",
            },
          },
        ],
      },
    ],
  },
  location: {
    reference: "Location/1",
  },
  participant: [
    {
      type: "practitioner",
      role: {
        coding: [
          {
            system: "http://nucc.org/provider-taxonomy",
            code: "207RI0011X",
            display: "Interventional Cardiology",
          },
        ],
        text: "Interventional Cardiology",
      },
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

export const ActivitydefinitionSupplyrequestExample: ActivityDefinition = {
  resourceType: "ActivityDefinition",
  id: "blood-tubes-supply",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n    </div>',
  },
  status: "draft",
  description: "10 Blood collect tubes blue cap",
  purpose: "Describes a request for 10 Blood collection tubes with blue caps.",
  usage:
    "This activity definition is used as the definition of a supply request to resupply blood collection tubes. Elements that apply universally are defined here, while elements that apply to the specific setting of a referral within a particular order set are defined in the order set.",
  kind: "SupplyRequest",
  code: {
    coding: [
      {
        code: "BlueTubes",
        display: "Blood collect tubes blue cap",
      },
    ],
  },
  quantity: {
    value: 10,
  },
  transform: "StructureMap/supplyrequest-transform",
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
