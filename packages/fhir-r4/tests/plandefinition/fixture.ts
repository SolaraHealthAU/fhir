import type { PlanDefinition } from "../../src/v4.0.1/plandefinition/types";

export const PlandefinitionChlamydiaScreeningIntervention: PlanDefinition = {
  resourceType: "PlanDefinition",
  id: "chlamydia-screening-intervention",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n         <table class="grid dict">\n            <tr>\n               <td>\n                  <b>Id: </b>\n               </td>\n            </tr>\n            <tr>\n               <td style="padding-left: 25px; padding-right: 25px;">PlanDefinition/chlamydia-screening-intervention</td>\n            </tr>\n         </table>\n         <p/>\n         <table class="grid dict">\n            <tr>\n               <td>\n                  <b>Identifier: </b>\n               </td>\n            </tr>\n            <tr>\n               <td style="padding-left: 25px; padding-right: 25px;">\n                  <b>value: </b>\n                  <span>ChlamydiaScreening_CDS_UsingCommon</span>\n               </td>\n            </tr>\n         </table>\n         <p/>\n         <table class="grid dict">\n            <tr>\n               <td>\n                  <b>Title: </b>\n               </td>\n            </tr>\n            <tr>\n               <td style="padding-left: 25px; padding-right: 25px;">Chalmydia Screening CDS Example Using Common</td>\n            </tr>\n         </table>\n         <p/>\n         <table class="grid dict">\n            <tr>\n               <td>\n                  <b>Status: </b>\n               </td>\n            </tr>\n            <tr>\n               <td style="padding-left: 25px; padding-right: 25px;">draft</td>\n            </tr>\n         </table>\n         <p/>\n         <table class="grid dict">\n            <tr>\n               <td>\n                  <b>Description: </b>\n               </td>\n            </tr>\n            <tr>\n               <td style="padding-left: 25px; padding-right: 25px;">Chlamydia Screening CDS Example Using Common</td>\n            </tr>\n         </table>\n         <p/>\n         <table class="grid dict">\n            <tr>\n               <td>\n                  <b>Topic: </b>\n               </td>\n            </tr>\n            <tr>\n               <td style="padding-left: 25px; padding-right: 25px;">\n                  <span>\n                     <b>text: </b>\n                     <span>Chlamydia Screening</span>\n                  </span>\n               </td>\n            </tr>\n         </table>\n         <p/>\n         <table class="grid dict">\n            <tr>\n               <td>\n                  <b>Library: </b>\n               </td>\n            </tr>\n            <tr>\n               <td style="padding-left: 25px; padding-right: 25px;">\n                  <b>reference: </b>\n                  <span>Library/example</span>\n               </td>\n            </tr>\n         </table>\n         <p/>\n         <h2>Actions</h2>\n         <p style="width: 100%;" class="hierarchy">\n            <span>\n               <b>Step: </b>\n               <br/>\n               <span style="padding-left: 25px;">\n                  <b>title: </b>\n                  <span>Patient has not had chlamydia screening within the recommended timeframe...</span>\n                  <br/>\n               </span>\n               <span style="padding-left: 25px;">\n                  <b>condition: </b>\n                  <br/>\n                  <span style="padding-left: 50px;">\n                     <b>type: </b>\n                     <span>applicability</span>\n                  </span>\n                  <br/>\n                  <span style="padding-left: 50px;">\n                     <b>expression: </b>\n                     <span>NoScreening</span>\n                  </span>\n               </span>\n            </span>\n         </p>\n      </div>',
  },
  identifier: [
    {
      use: "official",
      value: "ChlamydiaScreening_CDS_UsingCommon",
    },
  ],
  version: "2.0.0",
  title: "Chalmydia Screening CDS Example Using Common",
  status: "draft",
  date: "2015-07-22",
  description: "Chlamydia Screening CDS Example Using Common",
  topic: [
    {
      text: "Chlamydia Screening",
    },
  ],
  library: ["Library/example"],
  action: [
    {
      title:
        "Patient has not had chlamydia screening within the recommended timeframe...",
      condition: [
        {
          kind: "applicability",
          expression: {
            language: "text/cql",
            expression: "NoScreening",
          },
        },
      ],
      dynamicValue: [
        {
          path: "$this",
          expression: {
            language: "text/cql",
            expression: "ChlamydiaScreeningRequest",
          },
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

export const PlandefinitionExampleKdn5Simplified: PlanDefinition = {
  resourceType: "PlanDefinition",
  id: "KDN5",
  text: {
    status: "additional",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n      <table style="width: 100%;">\n        <tr>\n          <td>\n              <!-- link to NCCN image -->\n            <div style="width: 200px; height: 100px; vertical-align: top;">National Comprehensive Cancer Network</div>\n          </td>\n          <td>\n            <h3>Chemotherapy Order Template</h3>\n            <h1>Kidney Cancer</h1>\n            <h2>Gemcitabine/CARBOplatin</h2>\n          </td>\n          <td style="text-align: right; vertical-align: top;">KDN5</td>\n        </tr>\n      </table>\n      <table style="width: 100%; border-top: 1px solid; border-bottom: 1px solid;">\n        <tr>\n          <td style="width: 33%; border-right: 1px solid; vertical-align: top">\n            <h4>INDICATION:</h4>\n            <p>Metastatic or Relapsed – Collecting Duct/Medullary Subtypes</p>\n          </td>\n          <td style="width: 34%; border-right: 1px solid; vertical-align: top">\n            <h4>REFERENCES:</h4>\n            <ol>\n              <li><a href="http://www.example.org/professionals/physician_gls/PDF/kidney.pdf">NCCN Guidelines® for Kidney Cancer. V.3.2015.</a></li>\n              <li><a href="http://www.ncbi.nlm.nih.gov/pubmed?term=%22The+Journal+of+urology%22%5BJour%5D+AND+1698%5Bpage%5D+AND+2007%5Bpdat%5D+AND+Oudard+S%5Bauthor%5D">Oudard S, et al. <em>J Urol</em>. 2007;177(5):1698-702.</a><sup>\n                  <a href="http://www.example.org/OrderTemplates/PDF/appendix_E.pdf">a</a></sup>\n              </li>\n            </ol>\n          </td>\n          <td style="width: 33%; vertical-align: top">\n            <h4>NCCN SUPPORTIVE CARE:</h4>\n            <ol>\n              <li>\n                <i>Emetic Risk:</i>\n                <table>\n                  <tr>\n                    <td>Day 1</td>\n                    <td>Moderate</td>\n                  </tr>\n                  <tr>\n                    <td>Day 8</td>\n                    <td>Low</td>\n                  </tr>\n                </table>\n              </li>\n              <li>\n                <i>Fever Neutropenia Risk:</i><br/>\n                Refer to <a href="http://www.example.org/professionals/physician_gls/PDF/myeloid_growth.pdf">NCCN Guidelines for Myeloid Growth Factors. V.2.2014</a>\n              </li>\n            </ol>\n          </td>\n        </tr>\n      </table>\n        <!-- same as the regimen section of the Composition resource only this version is without the style guide notes -->\n      <h4>CHEMOTHERAPY REGIMEN</h4>\n      <p>\n        <i>21-day cycle for 6 cycles</i>\n      </p>\n      <ul>\n        <li>Gemcitabine 1250 mg/m<sup>2</sup> IV over 30 minutes on Days 1 and 8</li>\n        <li>CARBOplatin AUC 5 IV over 30 minutes on Day 1</li>\n      </ul>\n    </div>',
  },
  contained: [
    {
      resourceType: "ActivityDefinition",
      id: "1111",
      status: "draft",
      productCodeableConcept: {
        coding: [
          {
            system: "http://www.nlm.nih.gov/research/umls/rxnorm",
            code: "12574",
            display: "gemcitabine",
          },
        ],
        text: "gemcitabine",
      },
      dosage: [
        {
          text: "1250 mg/m² IV over 30 minutes",
          timing: {
            repeat: {
              duration: 30,
              durationUnit: "min",
            },
          },
          route: {
            text: "IV",
          },
          doseAndRate: [
            {
              type: {
                coding: [
                  {
                    system:
                      "http://terminology.hl7.org/CodeSystem/dose-rate-type",
                    code: "ordered",
                    display: "Ordered",
                  },
                ],
              },
              doseQuantity: {
                value: 1250,
                unit: "mg/m²",
              },
            },
          ],
        },
      ],
    },
    {
      resourceType: "ActivityDefinition",
      id: "2222",
      status: "draft",
      productCodeableConcept: {
        coding: [
          {
            system: "http://www.nlm.nih.gov/research/umls/rxnorm",
            code: "40048",
            display: "Carboplatin",
          },
        ],
        text: "CARBOplatin",
      },
      dosage: [
        {
          text: "AUC 5 IV over 30 minutes",
          timing: {
            repeat: {
              duration: 30,
              durationUnit: "min",
            },
          },
          route: {
            text: "IV",
          },
          doseAndRate: [
            {
              type: {
                coding: [
                  {
                    system:
                      "http://terminology.hl7.org/CodeSystem/dose-rate-type",
                    code: "ordered",
                    display: "Ordered",
                  },
                ],
              },
              doseQuantity: {
                extension: [
                  {
                    url: "http://example.org/fhir/AUC-dose",
                    valueInteger: 5,
                  },
                ],
              },
            },
          ],
        },
      ],
    },
  ],
  identifier: [
    {
      system: "http://example.org/ordertemplates",
      value: "KDN5",
    },
  ],
  version: "1",
  title: "Gemcitabine/CARBOplatin",
  type: {
    text: "Chemotherapy Order Template",
  },
  status: "draft",
  experimental: true,
  publisher: "National Comprehensive Cancer Network, Inc.",
  useContext: [
    {
      extension: [
        {
          url: "http://hl7.org/fhir/StructureDefinition/usagecontext-group",
          valueString: "A",
        },
      ],
      code: {
        system: "http://example.org/fhir/CodeSystem/indications",
        code: "treamentSetting-or-diseaseStatus",
      },
      valueCodeableConcept: {
        text: "Metastatic",
      },
    },
    {
      extension: [
        {
          url: "http://hl7.org/fhir/StructureDefinition/usagecontext-group",
          valueString: "A",
        },
      ],
      code: {
        system: "http://example.org/fhir/CodeSystem/indications",
        code: "disease-or-histology",
      },
      valueCodeableConcept: {
        text: "Collecting Duct/Medullary Subtypes",
      },
    },
    {
      extension: [
        {
          url: "http://hl7.org/fhir/StructureDefinition/usagecontext-group",
          valueString: "A",
        },
      ],
      code: {
        system: "http://terminology.hl7.org/CodeSystem/usage-context-type",
        code: "focus",
      },
      valueCodeableConcept: {
        text: "Kidney Cancer",
      },
    },
    {
      extension: [
        {
          url: "http://hl7.org/fhir/StructureDefinition/usagecontext-group",
          valueString: "B",
        },
      ],
      code: {
        system: "http://example.org/fhir/CodeSystem/indications",
        code: "treatmentSetting-or-diseaseStatus",
      },
      valueCodeableConcept: {
        text: "Relapsed",
      },
    },
    {
      extension: [
        {
          url: "http://hl7.org/fhir/StructureDefinition/usagecontext-group",
          valueString: "B",
        },
      ],
      code: {
        system: "http://example.org/fhir/CodeSystem/indications",
        code: "disease-or-histology",
      },
      valueCodeableConcept: {
        text: "Collecting Duct/Medullary Subtypes",
      },
    },
    {
      extension: [
        {
          url: "http://hl7.org/fhir/StructureDefinition/usagecontext-group",
          valueString: "B",
        },
      ],
      code: {
        system: "http://terminology.hl7.org/CodeSystem/usage-context-type",
        code: "focus",
      },
      valueCodeableConcept: {
        text: "Kidney Cancer – Collecting Duct/Medullary Subtypes - Metastatic",
      },
    },
  ],
  copyright: "All rights reserved.",
  approvalDate: "2016-07-27",
  lastReviewDate: "2016-07-27",
  author: [
    {
      name: "Lee Surprenant",
    },
  ],
  relatedArtifact: [
    {
      type: "derived-from",
      display: "NCCN Guidelines for Kidney Cancer. V.2.2016",
      url: "http://www.example.org/professionals/physician_gls/PDF/kidney.pdf",
    },
    {
      type: "citation",
      _type: {
        extension: [
          {
            url: "http://example.org/fhir/regimenReferenceType",
            valueCode: "a",
          },
        ],
      },
      citation: "Oudard S, et al. J Urol. 2007;177(5):1698-702",
      url: "http://www.ncbi.nlm.nih.gov/pubmed/17437788",
    },
  ],
  action: [
    {
      selectionBehavior: "exactly-one",
      action: [
        {
          selectionBehavior: "all",
          action: [
            {
              groupingBehavior: "sentence-group",
              selectionBehavior: "exactly-one",
              action: [
                {
                  id: "cycle-definition-1",
                  textEquivalent: "21-day cycle for 6 cycles",
                  timingTiming: {
                    repeat: {
                      count: 6,
                      duration: 21,
                      durationUnit: "d",
                    },
                  },
                  action: [
                    {
                      id: "action-1",
                      extension: [
                        {
                          url: "http://hl7.org/fhir/StructureDefinition/timing-daysOfCycle",
                          extension: [
                            {
                              url: "day",
                              valueInteger: 1,
                            },
                            {
                              url: "day",
                              valueInteger: 8,
                            },
                          ],
                        },
                      ],
                      textEquivalent:
                        "Gemcitabine 1250 mg/m² IV over 30 minutes on days 1 and 8",
                      definitionCanonical: "#1111",
                    },
                    {
                      id: "action-2",
                      extension: [
                        {
                          url: "http://hl7.org/fhir/StructureDefinition/timing-daysOfCycle",
                          extension: [
                            {
                              url: "day",
                              valueInteger: 1,
                            },
                          ],
                        },
                      ],
                      textEquivalent:
                        "CARBOplatin AUC 5 IV over 30 minutes on Day 1",
                      relatedAction: [
                        {
                          actionId: "action-1",
                          relationship: "concurrent-with-start",
                        },
                      ],
                      definitionCanonical: "#2222",
                    },
                  ],
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

export const PlandefinitionExample: PlanDefinition = {
  resourceType: "PlanDefinition",
  id: "low-suicide-risk-order-set",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n         <table class="grid dict">\n            <tr>\n               <td>\n                  <b>Id: </b>\n               </td>\n            </tr>\n            <tr>\n               <td style="padding-left: 25px; padding-right: 25px;">PlanDefinition/low-suicide-risk-order-set</td>\n            </tr>\n         </table>\n         <p/>\n         <table class="grid dict">\n            <tr>\n               <td>\n                  <b>Identifier: </b>\n               </td>\n            </tr>\n            <tr>\n               <td style="padding-left: 25px; padding-right: 25px;">\n                  <b>value: </b>\n                  <span>mmi:low-suicide-risk-order-set</span>\n               </td>\n            </tr>\n         </table>\n         <p/>\n         <table class="grid dict">\n            <tr>\n               <td>\n                  <b>Title: </b>\n               </td>\n            </tr>\n            <tr>\n               <td style="padding-left: 25px; padding-right: 25px;">Low Suicide Risk Order Set</td>\n            </tr>\n         </table>\n         <p/>\n         <table class="grid dict">\n            <tr>\n               <td>\n                  <b>Status: </b>\n               </td>\n            </tr>\n            <tr>\n               <td style="padding-left: 25px; padding-right: 25px;">draft</td>\n            </tr>\n         </table>\n         <p/>\n         <table class="grid dict">\n            <tr>\n               <td>\n                  <b>Description: </b>\n               </td>\n            </tr>\n            <tr>\n               <td style="padding-left: 25px; padding-right: 25px;">Orders to be applied to a patient characterized as low suicide risk.</td>\n            </tr>\n         </table>\n         <p/>\n         <table class="grid dict">\n            <tr>\n               <td>\n                  <b>Purpose: </b>\n               </td>\n            </tr>\n            <tr>\n               <td style="padding-left: 25px; padding-right: 25px;">This order set helps ensure consistent application of appropriate orders for the care of low suicide risk patients.</td>\n            </tr>\n         </table>\n         <p/>\n         <table class="grid dict">\n            <tr>\n               <td>\n                  <b>Usage: </b>\n               </td>\n            </tr>\n            <tr>\n               <td style="padding-left: 25px; padding-right: 25px;">This order set should be applied after assessing a patient for suicide risk, when the findings of that assessment indicate the patient has low suicide risk.</td>\n            </tr>\n         </table>\n         <p/>\n         <table class="grid dict">\n            <tr>\n               <td>\n                  <b>Context: </b>\n               </td>\n            </tr>\n            <tr style="vertical-align: top;">\n               <td style="padding-right: 25px;">\n                  <p style="padding-left: 25px; margin-top: 5px; margin-bottom: 5px;">\n                     <b>system: </b>\n                     <span>http://terminology.hl7.org/CodeSystem/usage-context-type</span>\n                  </p>\n                  <p style="padding-left: 25px; margin-top: 5px; margin-bottom: 5px;">\n                     <b>code: </b>\n                     <span>age</span>\n                  </p>\n                  <p style="padding-left: 25px; margin-top: 5px; margin-bottom: 5px;">\n                     <b>value: </b>\n                     <br/>\n                     <span>\n                        <span>\n                           <span>\n                              <span style="padding-left: 25px;">\n                                 <b>system: </b>\n                                 <span>https://meshb.nlm.nih.gov</span>\n                                 <br/>\n                              </span>\n                              <span style="padding-left: 25px;">\n                                 <b>code: </b>\n                                 <span>D000328</span>\n                                 <br/>\n                              </span>\n                              <span style="padding-left: 25px;">\n                                 <b>display: </b>\n                                 <span>Adult</span>\n                              </span>\n                           </span>\n                        </span>\n                     </span>\n                  </p>\n               </td>\n            </tr>\n         </table>\n         <table class="grid dict">\n            <tr>\n               <td>\n                  <b>Context: </b>\n               </td>\n            </tr>\n            <tr style="vertical-align: top;">\n               <td style="padding-right: 25px;">\n                  <p style="padding-left: 25px; margin-top: 5px; margin-bottom: 5px;">\n                     <b>system: </b>\n                     <span>http://terminology.hl7.org/CodeSystem/usage-context-type</span>\n                  </p>\n                  <p style="padding-left: 25px; margin-top: 5px; margin-bottom: 5px;">\n                     <b>code: </b>\n                     <span>focus</span>\n                  </p>\n                  <p style="padding-left: 25px; margin-top: 5px; margin-bottom: 5px;">\n                     <b>value: </b>\n                     <br/>\n                     <span>\n                        <span>\n                           <span>\n                              <span style="padding-left: 25px;">\n                                 <b>system: </b>\n                                 <span>http://snomed.info/sct</span>\n                                 <br/>\n                              </span>\n                              <span style="padding-left: 25px;">\n                                 <b>code: </b>\n                                 <span>87512008</span>\n                                 <br/>\n                              </span>\n                              <span style="padding-left: 25px;">\n                                 <b>display: </b>\n                                 <span>Mild major depression</span>\n                              </span>\n                           </span>\n                        </span>\n                     </span>\n                  </p>\n               </td>\n            </tr>\n         </table>\n         <table class="grid dict">\n            <tr>\n               <td>\n                  <b>Context: </b>\n               </td>\n            </tr>\n            <tr style="vertical-align: top;">\n               <td style="padding-right: 25px;">\n                  <p style="padding-left: 25px; margin-top: 5px; margin-bottom: 5px;">\n                     <b>system: </b>\n                     <span>http://terminology.hl7.org/CodeSystem/usage-context-type</span>\n                  </p>\n                  <p style="padding-left: 25px; margin-top: 5px; margin-bottom: 5px;">\n                     <b>code: </b>\n                     <span>focus</span>\n                  </p>\n                  <p style="padding-left: 25px; margin-top: 5px; margin-bottom: 5px;">\n                     <b>value: </b>\n                     <br/>\n                     <span>\n                        <span>\n                           <span>\n                              <span style="padding-left: 25px;">\n                                 <b>system: </b>\n                                 <span>http://snomed.info/sct</span>\n                                 <br/>\n                              </span>\n                              <span style="padding-left: 25px;">\n                                 <b>code: </b>\n                                 <span>40379007</span>\n                                 <br/>\n                              </span>\n                              <span style="padding-left: 25px;">\n                                 <b>display: </b>\n                                 <span>Major depression, recurrent, mild</span>\n                              </span>\n                           </span>\n                        </span>\n                     </span>\n                  </p>\n               </td>\n            </tr>\n         </table>\n         <table class="grid dict">\n            <tr>\n               <td>\n                  <b>Context: </b>\n               </td>\n            </tr>\n            <tr style="vertical-align: top;">\n               <td style="padding-right: 25px;">\n                  <p style="padding-left: 25px; margin-top: 5px; margin-bottom: 5px;">\n                     <b>system: </b>\n                     <span>http://terminology.hl7.org/CodeSystem/usage-context-type</span>\n                  </p>\n                  <p style="padding-left: 25px; margin-top: 5px; margin-bottom: 5px;">\n                     <b>code: </b>\n                     <span>focus</span>\n                  </p>\n                  <p style="padding-left: 25px; margin-top: 5px; margin-bottom: 5px;">\n                     <b>value: </b>\n                     <br/>\n                     <span>\n                        <span>\n                           <span>\n                              <span style="padding-left: 25px;">\n                                 <b>system: </b>\n                                 <span>http://snomed.info/sct</span>\n                                 <br/>\n                              </span>\n                              <span style="padding-left: 25px;">\n                                 <b>code: </b>\n                                 <span>394687007</span>\n                                 <br/>\n                              </span>\n                              <span style="padding-left: 25px;">\n                                 <b>display: </b>\n                                 <span>Low suicide risk</span>\n                              </span>\n                           </span>\n                        </span>\n                     </span>\n                  </p>\n               </td>\n            </tr>\n         </table>\n         <table class="grid dict">\n            <tr>\n               <td>\n                  <b>Context: </b>\n               </td>\n            </tr>\n            <tr style="vertical-align: top;">\n               <td style="padding-right: 25px;">\n                  <p style="padding-left: 25px; margin-top: 5px; margin-bottom: 5px;">\n                     <b>system: </b>\n                     <span>http://terminology.hl7.org/CodeSystem/usage-context-type</span>\n                  </p>\n                  <p style="padding-left: 25px; margin-top: 5px; margin-bottom: 5px;">\n                     <b>code: </b>\n                     <span>focus</span>\n                  </p>\n                  <p style="padding-left: 25px; margin-top: 5px; margin-bottom: 5px;">\n                     <b>value: </b>\n                     <br/>\n                     <span>\n                        <span>\n                           <span>\n                              <span style="padding-left: 25px;">\n                                 <b>system: </b>\n                                 <span>http://snomed.info/sct</span>\n                                 <br/>\n                              </span>\n                              <span style="padding-left: 25px;">\n                                 <b>code: </b>\n                                 <span>225337009</span>\n                                 <br/>\n                              </span>\n                              <span style="padding-left: 25px;">\n                                 <b>display: </b>\n                                 <span>Suicide risk assessment</span>\n                              </span>\n                           </span>\n                        </span>\n                     </span>\n                  </p>\n               </td>\n            </tr>\n         </table>\n         <table class="grid dict">\n            <tr>\n               <td>\n                  <b>Context: </b>\n               </td>\n            </tr>\n            <tr style="vertical-align: top;">\n               <td style="padding-right: 25px;">\n                  <p style="padding-left: 25px; margin-top: 5px; margin-bottom: 5px;">\n                     <b>system: </b>\n                     <span>http://terminology.hl7.org/CodeSystem/usage-context-type</span>\n                  </p>\n                  <p style="padding-left: 25px; margin-top: 5px; margin-bottom: 5px;">\n                     <b>code: </b>\n                     <span>user</span>\n                  </p>\n                  <p style="padding-left: 25px; margin-top: 5px; margin-bottom: 5px;">\n                     <b>value: </b>\n                     <br/>\n                     <span>\n                        <span>\n                           <span>\n                              <span style="padding-left: 25px;">\n                                 <b>system: </b>\n                                 <span>http://snomed.info/sct</span>\n                                 <br/>\n                              </span>\n                              <span style="padding-left: 25px;">\n                                 <b>code: </b>\n                                 <span>309343006</span>\n                                 <br/>\n                              </span>\n                              <span style="padding-left: 25px;">\n                                 <b>display: </b>\n                                 <span>Physician</span>\n                              </span>\n                           </span>\n                        </span>\n                     </span>\n                  </p>\n               </td>\n            </tr>\n         </table>\n         <table class="grid dict">\n            <tr>\n               <td>\n                  <b>Context: </b>\n               </td>\n            </tr>\n            <tr style="vertical-align: top;">\n               <td style="padding-right: 25px;">\n                  <p style="padding-left: 25px; margin-top: 5px; margin-bottom: 5px;">\n                     <b>system: </b>\n                     <span>http://terminology.hl7.org/CodeSystem/usage-context-type</span>\n                  </p>\n                  <p style="padding-left: 25px; margin-top: 5px; margin-bottom: 5px;">\n                     <b>code: </b>\n                     <span>venue</span>\n                  </p>\n                  <p style="padding-left: 25px; margin-top: 5px; margin-bottom: 5px;">\n                     <b>value: </b>\n                     <br/>\n                     <span>\n                        <span>\n                           <span>\n                              <span style="padding-left: 25px;">\n                                 <b>system: </b>\n                                 <span>http://snomed.info/sct</span>\n                                 <br/>\n                              </span>\n                              <span style="padding-left: 25px;">\n                                 <b>code: </b>\n                                 <span>440655000</span>\n                                 <br/>\n                              </span>\n                              <span style="padding-left: 25px;">\n                                 <b>display: </b>\n                                 <span>Outpatient environment</span>\n                              </span>\n                           </span>\n                        </span>\n                     </span>\n                  </p>\n               </td>\n            </tr>\n         </table>\n         <p/>\n         <table class="grid dict">\n            <tr>\n               <td>\n                  <b>Topic: </b>\n               </td>\n            </tr>\n            <tr>\n               <td style="padding-left: 25px; padding-right: 25px;">\n                  <span>\n                     <b>text: </b>\n                     <span>Suicide risk assessment</span>\n                  </span>\n               </td>\n            </tr>\n         </table>\n         <p/>\n         <table class="grid dict">\n            <tr>\n               <td>\n                  <b>Contributor: </b>\n               </td>\n            </tr>\n            <tr>\n               <td style="padding-left: 25px; padding-right: 25px;">\n                  <b>\n                     <span>author</span>:\n                  </b>\n               </td>\n            </tr>\n            <tr>\n               <td style="padding-left: 50px; padding-right: 25px;">Motive Medical Intelligence</td>\n            </tr>\n         </table>\n         <p/>\n         <table class="grid dict">\n            <tr>\n               <td>\n                  <b>Library: </b>\n               </td>\n            </tr>\n            <tr>\n               <td style="padding-left: 25px; padding-right: 25px;">\n                  <b>reference: </b>\n                  <span>Library/suiciderisk-orderset-logic</span>\n               </td>\n            </tr>\n            <tr>\n               <td style="padding-left: 25px; padding-right: 25px;">\n                  <b>display: </b>\n                  <span>SuicideRiskLogic</span>\n               </td>\n            </tr>\n         </table>\n         <p/>\n         <h2>Actions</h2>\n         <p style="width: 100%;" class="hierarchy">\n            <span>\n               <b>Step: </b>\n               <br/>\n               <span style="padding-left: 25px;">\n                  <b>title: </b>\n                  <span>Suicide Risk Assessment and Outpatient Management</span>\n                  <br/>\n               </span>\n               <span style="padding-left: 25px;">\n                  <span>\n                     <b>Step: </b>\n                     <br/>\n                     <span style="padding-left: 50px;">\n                        <b>title: </b>\n                        <span>Consults and Referrals</span>\n                        <br/>\n                     </span>\n                     <span style="padding-left: 50px;">\n                        <span>\n                           <b>Step: </b>\n                           <br/>\n                           <span style="padding-left: 75px;">\n                              <b>text: </b>\n                              <span>Refer to outpatient mental health program for evaluation and treatment of mental health conditions now</span>\n                              <br/>\n                           </span>\n                           <span style="padding-left: 75px;">\n                              <b>condition: </b>\n                              <br/>\n                              <span style="padding-left: 100px;">\n                                 <b>reference: </b>\n                                 <br/>\n                                 <span style="padding-left: 125px;">#referralToMentalHealthCare</span>\n                                 <span>\n                                    <span style="padding-left: 75px;">\n                                       <br/>\n                                       <span style="padding-left: 100px;">\n                                          <b>description: </b>\n                                          <span>refer to primary care mental-health integrated care program for evaluation and treatment of mental health conditions now</span>\n                                          <br/>\n                                       </span>\n                                       <span style="padding-left: 100px;">\n                                          <b>category: </b>\n                                          <span>referral</span>\n                                          <br/>\n                                       </span>\n                                    </span>\n                                 </span>\n                              </span>\n                           </span>\n                           <span style="padding-left: 50px;"/>\n                        </span>\n                     </span>\n                  </span>\n                  <span>\n                     <b>Step: </b>\n                     <br/>\n                     <span style="padding-left: 50px;">\n                        <b>title: </b>\n                        <span>Medications</span>\n                        <br/>\n                     </span>\n                     <span style="padding-left: 50px;">\n                        <span>\n                           <b>Step: </b>\n                           <br/>\n                           <span style="padding-left: 75px;">\n                              <b>title: </b>\n                              <span>First-Line Antidepressants</span>\n                              <br/>\n                           </span>\n                           <span style="padding-left: 75px;">\n                              <span>\n                                 <b>Step: </b>\n                                 <br/>\n                                 <span style="padding-left: 100px;">\n                                    <b>title: </b>\n                                    <span>Selective Serotonin Reuptake Inhibitors (Choose a mazimum of one or document reasons for exception)</span>\n                                    <br/>\n                                 </span>\n                                 <span style="padding-left: 100px;">\n                                    <span>\n                                       <b>Step: </b>\n                                       <br/>\n                                       <span style="padding-left: 125px;">\n                                          <b>text: </b>\n                                          <span>citalopram 20 mg tablet 1 tablet oral 1 time daily now (30 table; 3 refills)</span>\n                                          <br/>\n                                       </span>\n                                       <span style="padding-left: 125px;">\n                                          <b>condition: </b>\n                                          <br/>\n                                          <span style="padding-left: 150px;">\n                                             <b>reference: </b>\n                                             <br/>\n                                             <span style="padding-left: 175px;">#citalopramPrescription</span>\n                                             <span/>\n                                             <span>\n                                                <span style="padding-left: 125px;">\n                                                   <br/>\n                                                   <span style="padding-left: 150px;">\n                                                      <b>category: </b>\n                                                      <span>drug</span>\n                                                      <br/>\n                                                   </span>\n                                                </span>\n                                             </span>\n                                             <span/>\n                                             <span/>\n                                          </span>\n                                       </span>\n                                       <span style="padding-left: 100px;"/>\n                                    </span>\n                                    <span>\n                                       <b>Step: </b>\n                                       <br/>\n                                       <span style="padding-left: 125px;">\n                                          <b>text: </b>\n                                          <span>escitalopram 10 mg tablet 1 tablet oral 1 time daily now (30 tablet; 3 refills)</span>\n                                          <br/>\n                                       </span>\n                                       <span style="padding-left: 100px;"/>\n                                    </span>\n                                    <span>\n                                       <b>Step: </b>\n                                       <br/>\n                                       <span style="padding-left: 125px;">\n                                          <b>text: </b>\n                                          <span>fluoxetine 20 mg capsule 1 capsule oral 1 time daily now (30 tablet; 3 refills)</span>\n                                          <br/>\n                                       </span>\n                                       <span style="padding-left: 100px;"/>\n                                    </span>\n                                    <span>\n                                       <b>Step: </b>\n                                       <br/>\n                                       <span style="padding-left: 125px;">\n                                          <b>text: </b>\n                                          <span>paroxetine 20 mg tablet 1 tablet oral 1 time daily now (30 tablet; 3 refills)</span>\n                                          <br/>\n                                       </span>\n                                       <span style="padding-left: 100px;"/>\n                                    </span>\n                                    <span>\n                                       <b>Step: </b>\n                                       <br/>\n                                       <span style="padding-left: 125px;">\n                                          <b>text: </b>\n                                          <span>sertraline 50 mg tablet 1 tablet oral 1 time daily now (30 tablet; 3 refills)</span>\n                                          <br/>\n                                       </span>\n                                       <span style="padding-left: 100px;"/>\n                                    </span>\n                                 </span>\n                              </span>\n                              <span>\n                                 <b>Step: </b>\n                                 <br/>\n                                 <span style="padding-left: 125px;">\n                                    <b>text: </b>\n                                    <span>Dopamine Norepinephrine Reuptake Inhibitors (Choose a maximum of one or document reasons for exception)</span>\n                                    <br/>\n                                 </span>\n                                 <span style="padding-left: 75px;"/>\n                              </span>\n                              <span>\n                                 <b>Step: </b>\n                                 <br/>\n                                 <span style="padding-left: 100px;">\n                                    <b>text: </b>\n                                    <span>Serotonin Norepinephrine Reuptake Inhibitors (Choose a maximum of one or doument reasons for exception)</span>\n                                    <br/>\n                                 </span>\n                                 <span style="padding-left: 75px;"/>\n                              </span>\n                              <span>\n                                 <b>Step: </b>\n                                 <br/>\n                                 <span style="padding-left: 100px;">\n                                    <b>text: </b>\n                                    <span>Norepinephrine-Serotonin Modulators (Choose a maximum of one or document reasons for exception)</span>\n                                    <br/>\n                                 </span>\n                                 <span style="padding-left: 100px;"/>\n                              </span>\n                           </span>\n                        </span>\n                     </span>\n                  </span>\n               </span>\n            </span>\n         </p>\n      </div>',
  },
  contained: [
    {
      resourceType: "ActivityDefinition",
      id: "referralToMentalHealthCare",
      status: "draft",
      description:
        "refer to primary care mental-health integrated care program for evaluation and treatment of mental health conditions now",
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
    },
    {
      resourceType: "ActivityDefinition",
      id: "citalopramPrescription",
      status: "draft",
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
                    system:
                      "http://terminology.hl7.org/CodeSystem/dose-rate-type",
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
            language: "text/cql",
            expression: "3",
          },
        },
        {
          path: "dispenseRequest.quantity",
          expression: {
            language: "text/cql",
            expression: "30 '{tbl}'",
          },
        },
      ],
    },
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
  url: "http://motivemi.com/artifacts/PlanDefinition/low-suicide-risk-order-set",
  identifier: [
    {
      use: "official",
      system: "http://motivemi.com/artifacts",
      value: "mmi:low-suicide-risk-order-set",
    },
  ],
  version: "1.0.0",
  name: "LowSuicideRiskOrderSet",
  title: "Low Suicide Risk Order Set",
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
    "Orders to be applied to a patient characterized as low suicide risk.",
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
            code: "394687007",
            display: "Low suicide risk",
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
            code: "225337009",
            display: "Suicide risk assessment",
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
    "This order set helps ensure consistent application of appropriate orders for the care of low suicide risk patients.",
  usage:
    "This order set should be applied after assessing a patient for suicide risk, when the findings of that assessment indicate the patient has low suicide risk.",
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
      text: "Suicide risk assessment",
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
      type: "derived-from",
      display:
        "Practice Guideline for the Treatment of Patients with Major Depressive Disorder",
      url: "http://psychiatryonline.org/pb/assets/raw/sitewide/practice_guidelines/guidelines/mdd.pdf",
    },
    {
      type: "composed-of",
      resource: "ActivityDefinition/referralPrimaryCareMentalHealth",
    },
    {
      type: "composed-of",
      resource: "ActivityDefinition/citalopramPrescription",
    },
  ],
  library: ["Library/suiciderisk-orderset-logic"],
  action: [
    {
      title: "Suicide Risk Assessment and Outpatient Management",
      action: [
        {
          title: "Consults and Referrals",
          groupingBehavior: "logical-group",
          selectionBehavior: "any",
          action: [
            {
              textEquivalent:
                "Refer to outpatient mental health program for evaluation and treatment of mental health conditions now",
              definitionCanonical: "#referralToMentalHealthCare",
              dynamicValue: [
                {
                  path: "timing.event",
                  expression: {
                    language: "text/cql",
                    expression: "Now()",
                  },
                },
                {
                  path: "specialty",
                  expression: {
                    language: "text/cql",
                    expression:
                      "Code '261QM0850X' from SuicideRiskLogic.\"NUCC Provider Taxonomy\" display 'Adult Mental Health'",
                  },
                },
                {
                  path: "occurrenceDateTime",
                  expression: {
                    language: "text/cql",
                    expression:
                      "SuicideRiskLogic.ServiceRequestFulfillmentTime",
                  },
                },
                {
                  path: "subject",
                  expression: {
                    language: "text/cql",
                    expression: "SuicideRiskLogic.Patient",
                  },
                },
                {
                  path: "requester.agent",
                  expression: {
                    language: "text/cql",
                    expression: "SuicideRiskLogic.Practitioner",
                  },
                },
                {
                  path: "reasonCode",
                  expression: {
                    language: "text/cql",
                    expression: "SuicideRiskLogic.RiskAssessmentScore",
                  },
                },
                {
                  path: "reasonReference",
                  expression: {
                    language: "text/cql",
                    expression: "SuicideRiskLogic.RiskAssessment",
                  },
                },
              ],
            },
          ],
        },
        {
          title: "Medications",
          groupingBehavior: "logical-group",
          selectionBehavior: "at-most-one",
          action: [
            {
              title: "First-Line Antidepressants",
              documentation: [
                {
                  type: "citation",
                  document: {
                    extension: [
                      {
                        url: "http://hl7.org/fhir/StructureDefinition/cqf-qualityOfEvidence",
                        valueCodeableConcept: {
                          coding: [
                            {
                              system:
                                "http://terminology.hl7.org/CodeSystem/evidence-quality",
                              code: "high",
                            },
                          ],
                          text: "High Quality",
                        },
                      },
                    ],
                    contentType: "text/html",
                    url: "http://psychiatryonline.org/pb/assets/raw/sitewide/practice_guidelines/guidelines/mdd.pdf",
                    title:
                      "Practice Guideline for the Treatment of Patients with Major Depressive Disorder",
                  },
                },
              ],
              groupingBehavior: "logical-group",
              selectionBehavior: "at-most-one",
              action: [
                {
                  title:
                    "Selective Serotonin Reuptake Inhibitors (Choose a mazimum of one or document reasons for exception)",
                  documentation: [
                    {
                      type: "citation",
                      document: {
                        contentType: "text/html",
                        url: "http://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=6daeb45c-451d-b135-bf8f-2d6dff4b6b01",
                        title:
                          "National Library of Medicine. DailyMed website. CITALOPRAM- citalopram hydrobromide tablet, film coated.",
                      },
                    },
                  ],
                  groupingBehavior: "logical-group",
                  selectionBehavior: "at-most-one",
                  action: [
                    {
                      textEquivalent:
                        "citalopram 20 mg tablet 1 tablet oral 1 time daily now (30 table; 3 refills)",
                      definitionCanonical: "#citalopramPrescription",
                      dynamicValue: [
                        {
                          path: "status",
                          expression: {
                            language: "text/cql",
                            expression: "'draft'",
                          },
                        },
                        {
                          path: "patient",
                          expression: {
                            language: "text/cql",
                            expression: "SuicideRiskLogic.Patient",
                          },
                        },
                        {
                          path: "prescriber",
                          expression: {
                            language: "text/cql",
                            expression: "SuicideRiskLogic.Practitioner",
                          },
                        },
                        {
                          path: "reasonCode",
                          expression: {
                            language: "text/cql",
                            expression: "SuicideRiskLogic.RiskAssessmentScore",
                          },
                        },
                        {
                          path: "reasonReference",
                          expression: {
                            language: "text/cql",
                            expression: "SuicideRiskLogic.RiskAssessment",
                          },
                        },
                      ],
                    },
                    {
                      textEquivalent:
                        "escitalopram 10 mg tablet 1 tablet oral 1 time daily now (30 tablet; 3 refills)",
                    },
                    {
                      textEquivalent:
                        "fluoxetine 20 mg capsule 1 capsule oral 1 time daily now (30 tablet; 3 refills)",
                    },
                    {
                      textEquivalent:
                        "paroxetine 20 mg tablet 1 tablet oral 1 time daily now (30 tablet; 3 refills)",
                    },
                    {
                      textEquivalent:
                        "sertraline 50 mg tablet 1 tablet oral 1 time daily now (30 tablet; 3 refills)",
                    },
                  ],
                },
                {
                  textEquivalent:
                    "Dopamine Norepinephrine Reuptake Inhibitors (Choose a maximum of one or document reasons for exception)",
                },
                {
                  textEquivalent:
                    "Serotonin Norepinephrine Reuptake Inhibitors (Choose a maximum of one or doument reasons for exception)",
                },
                {
                  textEquivalent:
                    "Norepinephrine-Serotonin Modulators (Choose a maximum of one or document reasons for exception)",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
} as const;

export const PlandefinitionExclusiveBreastfeedingIntervention01: PlanDefinition =
  {
    resourceType: "PlanDefinition",
    id: "exclusive-breastfeeding-intervention-01",
    text: {
      status: "generated",
      div: '<div xmlns="http://www.w3.org/1999/xhtml">\n         <table class="grid dict">\n            <tr>\n               <td>\n                  <b>Id: </b>\n               </td>\n            </tr>\n            <tr>\n               <td style="padding-left: 25px; padding-right: 25px;">PlanDefinition/exclusive-breastfeeding-intervention-01</td>\n            </tr>\n         </table>\n         <p/>\n         <table class="grid dict">\n            <tr>\n               <td>\n                  <b>Identifier: </b>\n               </td>\n            </tr>\n            <tr>\n               <td style="padding-left: 25px; padding-right: 25px;">\n                  <b>value: </b>\n                  <span>exclusive-breastfeeding-intervention-01</span>\n               </td>\n            </tr>\n         </table>\n         <p/>\n         <table class="grid dict">\n            <tr>\n               <td>\n                  <b>Title: </b>\n               </td>\n            </tr>\n            <tr>\n               <td style="padding-left: 25px; padding-right: 25px;">Exclusive Breastfeeding Intervention-01</td>\n            </tr>\n         </table>\n         <p/>\n         <table class="grid dict">\n            <tr>\n               <td>\n                  <b>Status: </b>\n               </td>\n            </tr>\n            <tr>\n               <td style="padding-left: 25px; padding-right: 25px;">active</td>\n            </tr>\n         </table>\n         <p/>\n         <table class="grid dict">\n            <tr>\n               <td>\n                  <b>Description: </b>\n               </td>\n            </tr>\n            <tr>\n               <td style="padding-left: 25px; padding-right: 25px;">Exclusive breastfeeding intervention intended to improve outcomes for exclusive breastmilk feeding of newborns by ensuring that an appropriate breastfeeding readiness assessment order is created if necessary.</td>\n            </tr>\n         </table>\n         <p/>\n         <table class="grid dict">\n            <tr>\n               <td>\n                  <b>Topic: </b>\n               </td>\n            </tr>\n            <tr>\n               <td style="padding-left: 25px; padding-right: 25px;">\n                  <span>\n                     <b>text: </b>\n                     <span>Exclusive Breastfeeding</span>\n                  </span>\n               </td>\n            </tr>\n         </table>\n         <p/>\n         <table class="grid dict">\n            <tr>\n               <td>\n                  <b>Library: </b>\n               </td>\n            </tr>\n            <tr>\n               <td style="padding-left: 25px; padding-right: 25px;">\n                  <b>reference: </b>\n                  <span>Library/library-exclusive-breastfeeding-cds-logic</span>\n               </td>\n            </tr>\n         </table>\n         <p/>\n         <h2>Actions</h2>\n         <p style="width: 100%;" class="hierarchy">\n            <span>\n               <b>Step: </b>\n               <br/>\n               <span style="padding-left: 25px;">\n                  <b>title: </b>\n                  <span>Mother should be administered a breastfeeding readiness assessment.</span>\n                  <br/>\n               </span>\n               <span style="padding-left: 25px;">\n                  <b>condition: </b>\n                  <br/>\n                  <span style="padding-left: 50px;">\n                     <b>type: </b>\n                     <span>applicability</span>\n                     <br/>\n                  </span>\n                  <span style="padding-left: 50px;">\n                     <b>expression: </b>\n                     <span>Should Create Assessment Order</span>\n                     <br/>\n                  </span>\n               </span>\n               <span style="padding-left: 25px;">\n                  <span>\n                     <b>Step: </b>\n                     <br/>\n                     <span style="padding-left: 50px;">\n                        <b>title: </b>\n                        <span>Create the breastfeeding readiness assessment order.</span>\n                        <br/>\n                     </span>\n                     <span style="padding-left: 50px;">\n                        <b>text: </b>\n                        <span>Administer a breastfeeding readiness assessment.</span>\n                        <br/>\n                     </span>\n                     <span style="padding-left: 50px;"/>\n                  </span>\n                  <span>\n                     <b>Step: </b>\n                     <br/>\n                     <span style="padding-left: 75px;">\n                        <b>title: </b>\n                        <span>Notify the provider to sign the order.</span>\n                        <br/>\n                     </span>\n                     <span style="padding-left: 75px;">\n                        <b>text: </b>\n                        <span>A Breastfeeding Readiness Assessment is recommended, please authorize or reject the order.</span>\n                        <br/>\n                     </span>\n                  </span>\n               </span>\n            </span>\n         </p>\n      </div>',
    },
    identifier: [
      {
        use: "official",
        value: "exclusive-breastfeeding-intervention-01",
      },
    ],
    version: "1.0.0",
    title: "Exclusive Breastfeeding Intervention-01",
    status: "active",
    date: "2015-03-08",
    description:
      "Exclusive breastfeeding intervention intended to improve outcomes for exclusive breastmilk feeding of newborns by ensuring that an appropriate breastfeeding readiness assessment order is created if necessary.",
    topic: [
      {
        text: "Exclusive Breastfeeding",
      },
    ],
    relatedArtifact: [
      {
        type: "derived-from",
        resource: "Measure/measure-exclusive-breastfeeding",
      },
    ],
    library: ["Library/library-exclusive-breastfeeding-cds-logic"],
    action: [
      {
        title:
          "Mother should be administered a breastfeeding readiness assessment.",
        trigger: [
          {
            type: "named-event",
            name: "Admission",
          },
          {
            type: "named-event",
            name: "Birth",
          },
          {
            type: "named-event",
            name: "Infant Transfer to Recovery",
          },
          {
            type: "named-event",
            name: "Transfer to Post-Partum",
          },
        ],
        condition: [
          {
            kind: "applicability",
            expression: {
              language: "text/cql",
              expression: "Should Create Assessment Order",
            },
          },
        ],
        action: [
          {
            title: "Create the breastfeeding readiness assessment order.",
            textEquivalent: "Administer a breastfeeding readiness assessment.",
            type: {
              coding: [
                {
                  code: "create",
                },
              ],
            },
            dynamicValue: [
              {
                path: "/",
                expression: {
                  language: "text/cql",
                  expression: "Create Breastfeeding Risk Assessment",
                },
              },
            ],
          },
          {
            title: "Notify the provider to sign the order.",
            textEquivalent:
              "A Breastfeeding Readiness Assessment is recommended, please authorize or reject the order.",
            type: {
              coding: [
                {
                  code: "create",
                },
              ],
            },
            dynamicValue: [
              {
                path: "/",
                expression: {
                  language: "text/cql",
                  expression: "Communication Request to Provider",
                },
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

export const PlandefinitionExclusiveBreastfeedingIntervention02: PlanDefinition =
  {
    resourceType: "PlanDefinition",
    id: "exclusive-breastfeeding-intervention-02",
    text: {
      status: "generated",
      div: '<div xmlns="http://www.w3.org/1999/xhtml">\n         <table class="grid dict">\n            <tr>\n               <td>\n                  <b>Id: </b>\n               </td>\n            </tr>\n            <tr>\n               <td style="padding-left: 25px; padding-right: 25px;">PlanDefinition/exclusive-breastfeeding-intervention-02</td>\n            </tr>\n         </table>\n         <p/>\n         <table class="grid dict">\n            <tr>\n               <td>\n                  <b>Identifier: </b>\n               </td>\n            </tr>\n            <tr>\n               <td style="padding-left: 25px; padding-right: 25px;">\n                  <b>value: </b>\n                  <span>exclusive-breastfeeding-intervention-02</span>\n               </td>\n            </tr>\n         </table>\n         <p/>\n         <table class="grid dict">\n            <tr>\n               <td>\n                  <b>Title: </b>\n               </td>\n            </tr>\n            <tr>\n               <td style="padding-left: 25px; padding-right: 25px;">Exclusive Breastfeeding Intervention-02</td>\n            </tr>\n         </table>\n         <p/>\n         <table class="grid dict">\n            <tr>\n               <td>\n                  <b>Status: </b>\n               </td>\n            </tr>\n            <tr>\n               <td style="padding-left: 25px; padding-right: 25px;">active</td>\n            </tr>\n         </table>\n         <p/>\n         <table class="grid dict">\n            <tr>\n               <td>\n                  <b>Description: </b>\n               </td>\n            </tr>\n            <tr>\n               <td style="padding-left: 25px; padding-right: 25px;">Exclusive breastfeeding intervention intended to improve outcomes for exclusive breastmilk feeding of newborns by notifying the provider to sign the breastmilk feeding readiness assessment order, if necessary.</td>\n            </tr>\n         </table>\n         <p/>\n         <table class="grid dict">\n            <tr>\n               <td>\n                  <b>Topic: </b>\n               </td>\n            </tr>\n            <tr>\n               <td style="padding-left: 25px; padding-right: 25px;">\n                  <span>\n                     <b>text: </b>\n                     <span>Exclusive Breastfeeding</span>\n                  </span>\n               </td>\n            </tr>\n         </table>\n         <p/>\n         <table class="grid dict">\n            <tr>\n               <td>\n                  <b>Library: </b>\n               </td>\n            </tr>\n            <tr>\n               <td style="padding-left: 25px; padding-right: 25px;">\n                  <b>reference: </b>\n                  <span>Library/library-exclusive-breastfeeding-cds-logic</span>\n               </td>\n            </tr>\n         </table>\n         <p/>\n         <h2>Actions</h2>\n         <p style="width: 100%;" class="hierarchy">\n            <span>\n               <b>Step: </b>\n               <br/>\n               <span style="padding-left: 25px;">\n                  <b>title: </b>\n                  <span>Mother should be administered a breastfeeding readiness assessment.</span>\n                  <br/>\n               </span>\n               <span style="padding-left: 25px;">\n                  <b>condition: </b>\n                  <br/>\n                  <span style="padding-left: 50px;">\n                     <b>type: </b>\n                     <span>applicability</span>\n                     <br/>\n                  </span>\n                  <span style="padding-left: 50px;">\n                     <b>expression: </b>\n                     <span>Should Notify Provider to Sign Assessment Order</span>\n                     <br/>\n                  </span>\n               </span>\n               <span style="padding-left: 25px;">\n                  <span>\n                     <b>Step: </b>\n                     <br/>\n                     <span style="padding-left: 50px;">\n                        <b>title: </b>\n                        <span>Notify the provider to sign the order.</span>\n                        <br/>\n                     </span>\n                     <span style="padding-left: 50px;">\n                        <b>text: </b>\n                        <span>A Breastfeeding Readiness Assessment is recommended, please authorize or reject the order.</span>\n                        <br/>\n                     </span>\n                  </span>\n               </span>\n            </span>\n         </p>\n      </div>',
    },
    identifier: [
      {
        use: "official",
        value: "exclusive-breastfeeding-intervention-02",
      },
    ],
    version: "1.0.0",
    title: "Exclusive Breastfeeding Intervention-02",
    status: "active",
    date: "2015-03-08",
    description:
      "Exclusive breastfeeding intervention intended to improve outcomes for exclusive breastmilk feeding of newborns by notifying the provider to sign the breastmilk feeding readiness assessment order, if necessary.",
    topic: [
      {
        text: "Exclusive Breastfeeding",
      },
    ],
    relatedArtifact: [
      {
        type: "derived-from",
        resource: "Measure/measure-exclusive-breastfeeding",
      },
    ],
    library: ["Library/library-exclusive-breastfeeding-cds-logic"],
    action: [
      {
        title:
          "Mother should be administered a breastfeeding readiness assessment.",
        trigger: [
          {
            type: "named-event",
            name: "Admission",
          },
          {
            type: "named-event",
            name: "Birth",
          },
          {
            type: "named-event",
            name: "Infant Transfer to Recovery",
          },
          {
            type: "named-event",
            name: "Transfer to Post-Partum",
          },
        ],
        condition: [
          {
            kind: "applicability",
            expression: {
              language: "text/cql",
              expression: "Should Notify Provider to Sign Assessment Order",
            },
          },
        ],
        action: [
          {
            title: "Notify the provider to sign the order.",
            textEquivalent:
              "A Breastfeeding Readiness Assessment is recommended, please authorize or reject the order.",
            type: {
              coding: [
                {
                  code: "create",
                },
              ],
            },
            dynamicValue: [
              {
                path: "/",
                expression: {
                  language: "text/cql",
                  expression: "Communication Request to Provider",
                },
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

export const PlandefinitionExclusiveBreastfeedingIntervention03: PlanDefinition =
  {
    resourceType: "PlanDefinition",
    id: "exclusive-breastfeeding-intervention-03",
    text: {
      status: "generated",
      div: '<div xmlns="http://www.w3.org/1999/xhtml">\n         <table class="grid dict">\n            <tr>\n               <td>\n                  <b>Id: </b>\n               </td>\n            </tr>\n            <tr>\n               <td style="padding-left: 25px; padding-right: 25px;">PlanDefinition/exclusive-breastfeeding-intervention-03</td>\n            </tr>\n         </table>\n         <p/>\n         <table class="grid dict">\n            <tr>\n               <td>\n                  <b>Identifier: </b>\n               </td>\n            </tr>\n            <tr>\n               <td style="padding-left: 25px; padding-right: 25px;">\n                  <b>value: </b>\n                  <span>exclusive-breastfeeding-intervention-03</span>\n               </td>\n            </tr>\n         </table>\n         <p/>\n         <table class="grid dict">\n            <tr>\n               <td>\n                  <b>Title: </b>\n               </td>\n            </tr>\n            <tr>\n               <td style="padding-left: 25px; padding-right: 25px;">Exclusive Breastfeeding Intervention-03</td>\n            </tr>\n         </table>\n         <p/>\n         <table class="grid dict">\n            <tr>\n               <td>\n                  <b>Status: </b>\n               </td>\n            </tr>\n            <tr>\n               <td style="padding-left: 25px; padding-right: 25px;">active</td>\n            </tr>\n         </table>\n         <p/>\n         <table class="grid dict">\n            <tr>\n               <td>\n                  <b>Description: </b>\n               </td>\n            </tr>\n            <tr>\n               <td style="padding-left: 25px; padding-right: 25px;">Exclusive breastfeeding intervention intended to improve outcomes for exclusive breastmilk feeding of newborns by notifying the charge and/or bedside nurse to perform the breastfeeding readiness assessment.</td>\n            </tr>\n         </table>\n         <p/>\n         <table class="grid dict">\n            <tr>\n               <td>\n                  <b>Topic: </b>\n               </td>\n            </tr>\n            <tr>\n               <td style="padding-left: 25px; padding-right: 25px;">\n                  <span>\n                     <b>text: </b>\n                     <span>Exclusive Breastfeeding</span>\n                  </span>\n               </td>\n            </tr>\n         </table>\n         <p/>\n         <table class="grid dict">\n            <tr>\n               <td>\n                  <b>Library: </b>\n               </td>\n            </tr>\n            <tr>\n               <td style="padding-left: 25px; padding-right: 25px;">\n                  <b>reference: </b>\n                  <span>Library/library-exclusive-breastfeeding-cds-logic</span>\n               </td>\n            </tr>\n         </table>\n         <p/>\n         <h2>Actions</h2>\n         <p style="width: 100%;" class="hierarchy">\n            <span>\n               <b>Step: </b>\n               <br/>\n               <span style="padding-left: 25px;">\n                  <b>title: </b>\n                  <span>Mother should be administered a breastfeeding readiness assessment.</span>\n                  <br/>\n               </span>\n               <span style="padding-left: 25px;">\n                  <b>condition: </b>\n                  <br/>\n                  <span style="padding-left: 50px;">\n                     <b>type: </b>\n                     <span>applicability</span>\n                     <br/>\n                  </span>\n                  <span style="padding-left: 50px;">\n                     <b>expression: </b>\n                     <span>Should Notify Nurse to Perform Assessment</span>\n                     <br/>\n                  </span>\n               </span>\n               <span style="padding-left: 25px;">\n                  <span>\n                     <b>Step: </b>\n                     <br/>\n                     <span style="padding-left: 50px;">\n                        <b>title: </b>\n                        <span>Notify the charge nurse to perform the assessment.</span>\n                        <br/>\n                     </span>\n                     <span style="padding-left: 50px;">\n                        <b>text: </b>\n                        <span>A Breastfeeding Readiness Assessment is recommended, please administer the assessment.</span>\n                        <br/>\n                     </span>\n                     <span style="padding-left: 50px;"/>\n                  </span>\n                  <span>\n                     <b>Step: </b>\n                     <br/>\n                     <span style="padding-left: 75px;">\n                        <b>title: </b>\n                        <span>Notify the bedside nurse to perform the assessment.</span>\n                        <br/>\n                     </span>\n                     <span style="padding-left: 75px;">\n                        <b>text: </b>\n                        <span>A Breastfeeding Readiness Assessment is recommended, please administer the assessment.</span>\n                        <br/>\n                     </span>\n                  </span>\n               </span>\n            </span>\n         </p>\n      </div>',
    },
    identifier: [
      {
        use: "official",
        value: "exclusive-breastfeeding-intervention-03",
      },
    ],
    version: "1.0.0",
    title: "Exclusive Breastfeeding Intervention-03",
    status: "active",
    date: "2015-03-08",
    description:
      "Exclusive breastfeeding intervention intended to improve outcomes for exclusive breastmilk feeding of newborns by notifying the charge and/or bedside nurse to perform the breastfeeding readiness assessment.",
    topic: [
      {
        text: "Exclusive Breastfeeding",
      },
    ],
    relatedArtifact: [
      {
        type: "derived-from",
        resource: "Measure/measure-exclusive-breastfeeding",
      },
    ],
    library: ["Library/library-exclusive-breastfeeding-cds-logic"],
    action: [
      {
        title:
          "Mother should be administered a breastfeeding readiness assessment.",
        trigger: [
          {
            type: "named-event",
            name: "Admission",
          },
          {
            type: "named-event",
            name: "Birth",
          },
          {
            type: "named-event",
            name: "Infant Transfer to Recovery",
          },
          {
            type: "named-event",
            name: "Transfer to Post-Partum",
          },
        ],
        condition: [
          {
            kind: "applicability",
            expression: {
              language: "text/cql",
              expression: "Should Notify Nurse to Perform Assessment",
            },
          },
        ],
        action: [
          {
            title: "Notify the charge nurse to perform the assessment.",
            textEquivalent:
              "A Breastfeeding Readiness Assessment is recommended, please administer the assessment.",
            type: {
              coding: [
                {
                  code: "create",
                },
              ],
            },
            dynamicValue: [
              {
                path: "/",
                expression: {
                  language: "text/cql",
                  expression: "Communication Request to Charge Nurse",
                },
              },
            ],
          },
          {
            title: "Notify the bedside nurse to perform the assessment.",
            textEquivalent:
              "A Breastfeeding Readiness Assessment is recommended, please administer the assessment.",
            type: {
              coding: [
                {
                  code: "create",
                },
              ],
            },
            dynamicValue: [
              {
                path: "/",
                expression: {
                  language: "text/cql",
                  expression: "Communication Request to Bedside Nurse",
                },
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

export const PlandefinitionExclusiveBreastfeedingIntervention04: PlanDefinition =
  {
    resourceType: "PlanDefinition",
    id: "exclusive-breastfeeding-intervention-04",
    text: {
      status: "generated",
      div: '<div xmlns="http://www.w3.org/1999/xhtml">\n         <table class="grid dict">\n            <tr>\n               <td>\n                  <b>Id: </b>\n               </td>\n            </tr>\n            <tr>\n               <td style="padding-left: 25px; padding-right: 25px;">PlanDefinition/exclusive-breastfeeding-intervention-04</td>\n            </tr>\n         </table>\n         <p/>\n         <table class="grid dict">\n            <tr>\n               <td>\n                  <b>Identifier: </b>\n               </td>\n            </tr>\n            <tr>\n               <td style="padding-left: 25px; padding-right: 25px;">\n                  <b>value: </b>\n                  <span>exclusive-breastfeeding-intervention-04</span>\n               </td>\n            </tr>\n         </table>\n         <p/>\n         <table class="grid dict">\n            <tr>\n               <td>\n                  <b>Title: </b>\n               </td>\n            </tr>\n            <tr>\n               <td style="padding-left: 25px; padding-right: 25px;">Exclusive Breastfeeding Intervention-04</td>\n            </tr>\n         </table>\n         <p/>\n         <table class="grid dict">\n            <tr>\n               <td>\n                  <b>Status: </b>\n               </td>\n            </tr>\n            <tr>\n               <td style="padding-left: 25px; padding-right: 25px;">active</td>\n            </tr>\n         </table>\n         <p/>\n         <table class="grid dict">\n            <tr>\n               <td>\n                  <b>Description: </b>\n               </td>\n            </tr>\n            <tr>\n               <td style="padding-left: 25px; padding-right: 25px;">Exclusive breastfeeding intervention intended to improve outcomes for exclusive breastmilk feeding of newborns by creating a lactation consult for the mother if appropriate.</td>\n            </tr>\n         </table>\n         <p/>\n         <table class="grid dict">\n            <tr>\n               <td>\n                  <b>Topic: </b>\n               </td>\n            </tr>\n            <tr>\n               <td style="padding-left: 25px; padding-right: 25px;">\n                  <span>\n                     <b>text: </b>\n                     <span>Exclusive Breastfeeding</span>\n                  </span>\n               </td>\n            </tr>\n         </table>\n         <p/>\n         <table class="grid dict">\n            <tr>\n               <td>\n                  <b>Library: </b>\n               </td>\n            </tr>\n            <tr>\n               <td style="padding-left: 25px; padding-right: 25px;">\n                  <b>reference: </b>\n                  <span>Library/library-exclusive-breastfeeding-cds-logic</span>\n               </td>\n            </tr>\n         </table>\n         <p/>\n         <h2>Actions</h2>\n         <p style="width: 100%;" class="hierarchy">\n            <span>\n               <b>Step: </b>\n               <br/>\n               <span style="padding-left: 25px;">\n                  <b>title: </b>\n                  <span>Mother should be referred to a lactation specialist for consultation.</span>\n                  <br/>\n               </span>\n               <span style="padding-left: 25px;">\n                  <b>condition: </b>\n                  <br/>\n                  <span style="padding-left: 50px;">\n                     <b>type: </b>\n                     <span>applicability</span>\n                     <br/>\n                  </span>\n                  <span style="padding-left: 50px;">\n                     <b>expression: </b>\n                     <span>Should Create Lactation Consult</span>\n                     <br/>\n                  </span>\n               </span>\n               <span style="padding-left: 25px;">\n                  <span>\n                     <b>Step: </b>\n                     <br/>\n                     <span style="padding-left: 50px;">\n                        <b>title: </b>\n                        <span>Create a lactation consult request.</span>\n                        <br/>\n                     </span>\n                     <span style="padding-left: 50px;">\n                        <b>text: </b>\n                        <span>Create a lactation consult request</span>\n                        <br/>\n                     </span>\n                     <span style="padding-left: 50px;"/>\n                  </span>\n               </span>\n            </span>\n         </p>\n      </div>',
    },
    identifier: [
      {
        use: "official",
        value: "exclusive-breastfeeding-intervention-04",
      },
    ],
    version: "1.0.0",
    title: "Exclusive Breastfeeding Intervention-04",
    status: "active",
    date: "2015-03-08",
    description:
      "Exclusive breastfeeding intervention intended to improve outcomes for exclusive breastmilk feeding of newborns by creating a lactation consult for the mother if appropriate.",
    topic: [
      {
        text: "Exclusive Breastfeeding",
      },
    ],
    relatedArtifact: [
      {
        type: "derived-from",
        resource: "Measure/measure-exclusive-breastfeeding",
      },
    ],
    library: ["Library/library-exclusive-breastfeeding-cds-logic"],
    action: [
      {
        title:
          "Mother should be referred to a lactation specialist for consultation.",
        trigger: [
          {
            type: "named-event",
            name: "Admission",
          },
          {
            type: "named-event",
            name: "Birth",
          },
          {
            type: "named-event",
            name: "Infant Transfer to Recovery",
          },
          {
            type: "named-event",
            name: "Transfer to Post-Partum",
          },
        ],
        condition: [
          {
            kind: "applicability",
            expression: {
              language: "text/cql",
              expression: "Should Create Lactation Consult",
            },
          },
        ],
        action: [
          {
            title: "Create a lactation consult request.",
            textEquivalent: "Create a lactation consult request",
            type: {
              coding: [
                {
                  code: "create",
                },
              ],
            },
            dynamicValue: [
              {
                path: "/",
                expression: {
                  language: "text/cql",
                  expression: "Create Lactation Consult Request",
                },
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

export const PlandefinitionOpioidcds04: PlanDefinition = {
  resourceType: "PlanDefinition",
  id: "opioidcds-04",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: opioidcds-04</p><p><b>url</b>: <b>http://hl7.org/fhir/ig/opioid-cds/PlanDefinition/opioidcds-04</b></p><p><b>identifier</b>: cdc-opioid-guidance (OFFICIAL)</p><p><b>version</b>: 0.1.0</p><p><b>name</b>: cdc-opioid-04</p><p><b>title</b>: CDC Opioid Prescribing Guideline Recommendation #4</p><p><b>type</b>: ECA Rule <span>(Details : {http://terminology.hl7.org/CodeSystem/plan-definition-type code 'eca-rule' = 'ECA Rule', given as 'ECA Rule'})</span></p><p><b>status</b>: draft</p><p><b>date</b>: 19/03/2018</p><p><b>publisher</b>: Centers for Disease Control and Prevention (CDC)</p><p><b>description</b>: When starting opioid therapy for chronic pain, clinicians should prescribe immediate-release opioids instead of extended-release/long-acting (ER/LA) opioids.</p><p><b>useContext</b>: , </p><p><b>jurisdiction</b>: United States of America <span>(Details : {urn:iso:std:iso:3166 code 'US' = 'United States of America', given as 'United States of America'})</span></p><p><b>purpose</b>: CDC’s Guideline for Prescribing Opioids for Chronic Pain is intended to improve communication between providers and patients about the risks and benefits of opioid therapy for chronic pain, improve the safety and effectiveness of pain treatment, and reduce the risks associated with long-term opioid therapy, including opioid use disorder and overdose. The Guideline is not intended for patients who are in active cancer treatment, palliative care, or end-of-life care.</p><p><b>usage</b>: Providers should use caution when prescribing extended-release/long-acting (ER/LA) opioids as they carry a higher risk and negligible benefit compared to immediate-release opioids.</p><p><b>copyright</b>: © CDC 2016+.</p><p><b>topic</b>: Opioid Prescribing <span>(Details )</span></p><p><b>author</b>: , , , </p><p><b>relatedArtifact</b>: , </p><p><b>library</b>: <a>Library/opioidcds-recommendation-04</a></p><blockquote><p><b>action</b></p><p><b>title</b>: Extended-release opioid prescription triggered.</p><p><b>description</b>: Checking if the trigger prescription meets the inclusion criteria for recommendation #4 workflow.</p><p><b>documentation</b>: </p><p><b>trigger</b>: </p><h3>Conditions</h3><table><tr><td>-</td><td><b>Kind</b></td><td><b>Expression</b></td></tr><tr><td>*</td><td>applicability</td><td/></tr></table><p><b>groupingBehavior</b>: visual-group</p><p><b>selectionBehavior</b>: exactly-one</p><blockquote><p><b>dynamicValue</b></p><p><b>path</b>: action.title</p><p><b>expression</b>: </p></blockquote><blockquote><p><b>dynamicValue</b></p><p><b>path</b>: action.description</p><p><b>expression</b>: </p></blockquote><blockquote><p><b>dynamicValue</b></p><p><b>path</b>: activity.extension</p><p><b>expression</b>: </p></blockquote><h3>Actions</h3><table><tr><td>-</td></tr><tr><td>*</td></tr><tr><td>*</td></tr><tr><td>*</td></tr></table></blockquote></div>",
  },
  url: "http://hl7.org/fhir/ig/opioid-cds/PlanDefinition/opioidcds-04",
  identifier: [
    {
      use: "official",
      value: "cdc-opioid-guidance",
    },
  ],
  version: "0.1.0",
  name: "cdc-opioid-04",
  title: "CDC Opioid Prescribing Guideline Recommendation #4",
  type: {
    coding: [
      {
        system: "http://terminology.hl7.org/CodeSystem/plan-definition-type",
        code: "eca-rule",
        display: "ECA Rule",
      },
    ],
  },
  status: "draft",
  date: "2018-03-19",
  publisher: "Centers for Disease Control and Prevention (CDC)",
  description:
    "When starting opioid therapy for chronic pain, clinicians should prescribe immediate-release opioids instead of extended-release/long-acting (ER/LA) opioids.",
  useContext: [
    {
      code: {
        system: "http://terminology.hl7.org/CodeSystem/usage-context-type",
        code: "focus",
        display: "Clinical Focus",
      },
      valueCodeableConcept: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "182888003",
            display: "Medication requested (situation)",
          },
        ],
      },
    },
    {
      code: {
        system: "http://terminology.hl7.org/CodeSystem/usage-context-type",
        code: "focus",
        display: "Clinical Focus",
      },
      valueCodeableConcept: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "82423001",
            display: "Chronic pain (finding)",
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
          display: "United States of America",
        },
      ],
    },
  ],
  purpose:
    "CDC’s Guideline for Prescribing Opioids for Chronic Pain is intended to improve communication between providers and patients about the risks and benefits of opioid therapy for chronic pain, improve the safety and effectiveness of pain treatment, and reduce the risks associated with long-term opioid therapy, including opioid use disorder and overdose. The Guideline is not intended for patients who are in active cancer treatment, palliative care, or end-of-life care.",
  usage:
    "Providers should use caution when prescribing extended-release/long-acting (ER/LA) opioids as they carry a higher risk and negligible benefit compared to immediate-release opioids.",
  copyright: "© CDC 2016+.",
  topic: [
    {
      text: "Opioid Prescribing",
    },
  ],
  author: [
    {
      name: "Kensaku Kawamoto, MD, PhD, MHS",
    },
    {
      name: "Bryn Rhodes",
    },
    {
      name: "Floyd Eisenberg, MD, MPH",
    },
    {
      name: "Robert McClure, MD, MPH",
    },
  ],
  relatedArtifact: [
    {
      type: "documentation",
      display: "CDC guideline for prescribing opioids for chronic pain",
      url: "https://guidelines.gov/summaries/summary/50153/cdc-guideline-for-prescribing-opioids-for-chronic-pain---united-states-2016#420",
    },
    {
      type: "documentation",
      display: "MME Conversion Tables",
      url: "https://www.cdc.gov/drugoverdose/pdf/calculating_total_daily_dose-a.pdf",
    },
  ],
  library: ["Library/opioidcds-recommendation-04"],
  action: [
    {
      title: "Extended-release opioid prescription triggered.",
      description:
        "Checking if the trigger prescription meets the inclusion criteria for recommendation #4 workflow.",
      documentation: [
        {
          type: "documentation",
          document: {
            extension: [
              {
                url: "http://hl7.org/fhir/StructureDefinition/cqf-strengthOfRecommendation",
                valueCodeableConcept: {
                  coding: [
                    {
                      system:
                        "http://terminology.hl7.org/CodeSystem/recommendation-strength",
                      code: "strong",
                      display: "Strong",
                    },
                  ],
                },
              },
              {
                url: "http://hl7.org/fhir/StructureDefinition/cqf-qualityOfEvidence",
                valueCodeableConcept: {
                  coding: [
                    {
                      system:
                        "http://terminology.hl7.org/CodeSystem/evidence-quality",
                      code: "low",
                      display: "Low quality",
                    },
                  ],
                },
              },
            ],
          },
        },
      ],
      trigger: [
        {
          type: "named-event",
          name: "medication-prescribe",
        },
      ],
      condition: [
        {
          kind: "applicability",
          expression: {
            description:
              "Check whether the opioid prescription for the existing patient is extended-release without any opioids-with-abuse-potential prescribed in the past 90 days.",
            language: "text/cql",
            expression: "Inclusion Criteria",
          },
        },
      ],
      groupingBehavior: "visual-group",
      selectionBehavior: "exactly-one",
      dynamicValue: [
        {
          path: "action.title",
          expression: {
            language: "text/cql",
            expression: "Get Summary",
          },
        },
        {
          path: "action.description",
          expression: {
            language: "text/cql",
            expression: "Get Detail",
          },
        },
        {
          path: "activity.extension",
          expression: {
            language: "text/cql",
            expression: "Get Indicator",
          },
        },
      ],
      action: [
        {
          description: "Will precribe immediate release",
        },
        {
          description:
            "Risk of overdose carefully considered and outweighed by benefit; snooze 3 mo",
        },
        {
          description: "N/A - see comment; snooze 3 mo",
        },
      ],
    },
  ],
} as const;

export const PlandefinitionOpioidcds05: PlanDefinition = {
  resourceType: "PlanDefinition",
  id: "opioidcds-05",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: opioidcds-05</p><p><b>url</b>: <b>http://hl7.org/fhir/ig/opioid-cds/PlanDefinition/opioidcds-05</b></p><p><b>identifier</b>: cdc-opioid-guidance (OFFICIAL)</p><p><b>version</b>: 0.1.0</p><p><b>name</b>: cdc-opioid-05</p><p><b>title</b>: CDC Opioid Prescribing Guideline Recommendation #5</p><p><b>type</b>: ECA Rule <span>(Details : {http://terminology.hl7.org/CodeSystem/plan-definition-type code 'eca-rule' = 'ECA Rule', given as 'ECA Rule'})</span></p><p><b>status</b>: draft</p><p><b>date</b>: 23/04/2017</p><p><b>publisher</b>: Centers for Disease Control and Prevention (CDC)</p><p><b>description</b>: When opioids are started, providers should prescribe the lowest effective dosage.</p><p><b>useContext</b>: , </p><p><b>jurisdiction</b>: United States of America <span>(Details : {urn:iso:std:iso:3166 code 'US' = 'United States of America', given as 'United States of America'})</span></p><p><b>purpose</b>: CDC’s Guideline for Prescribing Opioids for Chronic Pain is intended to improve communication between providers and patients about the risks and benefits of opioid therapy for chronic pain, improve the safety and effectiveness of pain treatment, and reduce the risks associated with long-term opioid therapy, including opioid use disorder and overdose. The Guideline is not intended for patients who are in active cancer treatment, palliative care, or end-of-life care.</p><p><b>usage</b>: Providers should use caution when prescribing opioids at any dosage, should carefully reassess evidence of individual benefits and risks when considering increasing dosage to ≥50 morphine milligram equivalents (MME)/day, and should avoid increasing dosage to ≥90 MME/day or carefully justify a decision to titrate dosage to &gt;90 MME/day</p><p><b>copyright</b>: © CDC 2016+.</p><p><b>topic</b>: Opioid Prescribing <span>(Details )</span></p><p><b>author</b>: , , , </p><p><b>relatedArtifact</b>: , </p><p><b>library</b>: <a>Library/opioidcds-recommendation-05</a></p><blockquote><p><b>action</b></p><p><b>title</b>: High risk for opioid overdose.</p><p><b>description</b>: Total morphine milligram equivalent (MME) exceeds recommended amount. Taper to less than 50.</p><p><b>documentation</b>: </p><p><b>trigger</b>: </p><h3>Conditions</h3><table><tr><td>-</td><td><b>Kind</b></td><td><b>Expression</b></td></tr><tr><td>*</td><td>applicability</td><td/></tr></table><p><b>groupingBehavior</b>: visual-group</p><p><b>selectionBehavior</b>: exactly-one</p><blockquote><p><b>dynamicValue</b></p><p><b>path</b>: action.title</p><p><b>expression</b>: </p></blockquote><blockquote><p><b>dynamicValue</b></p><p><b>path</b>: action.description</p><p><b>expression</b>: </p></blockquote><blockquote><p><b>dynamicValue</b></p><p><b>path</b>: activity.extension</p><p><b>expression</b>: </p></blockquote><h3>Actions</h3><table><tr><td>-</td></tr><tr><td>*</td></tr><tr><td>*</td></tr><tr><td>*</td></tr><tr><td>*</td></tr></table></blockquote></div>",
  },
  url: "http://hl7.org/fhir/ig/opioid-cds/PlanDefinition/opioidcds-05",
  identifier: [
    {
      use: "official",
      value: "cdc-opioid-guidance",
    },
  ],
  version: "0.1.0",
  name: "cdc-opioid-05",
  title: "CDC Opioid Prescribing Guideline Recommendation #5",
  type: {
    coding: [
      {
        system: "http://terminology.hl7.org/CodeSystem/plan-definition-type",
        code: "eca-rule",
        display: "ECA Rule",
      },
    ],
  },
  status: "draft",
  date: "2017-04-23",
  publisher: "Centers for Disease Control and Prevention (CDC)",
  description:
    "When opioids are started, providers should prescribe the lowest effective dosage.",
  useContext: [
    {
      code: {
        system: "http://terminology.hl7.org/CodeSystem/usage-context-type",
        code: "focus",
        display: "Clinical Focus",
      },
      valueCodeableConcept: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "182888003",
            display: "Medication requested (situation)",
          },
        ],
      },
    },
    {
      code: {
        system: "http://terminology.hl7.org/CodeSystem/usage-context-type",
        code: "focus",
        display: "Clinical Focus",
      },
      valueCodeableConcept: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "82423001",
            display: "Chronic pain (finding)",
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
          display: "United States of America",
        },
      ],
    },
  ],
  purpose:
    "CDC’s Guideline for Prescribing Opioids for Chronic Pain is intended to improve communication between providers and patients about the risks and benefits of opioid therapy for chronic pain, improve the safety and effectiveness of pain treatment, and reduce the risks associated with long-term opioid therapy, including opioid use disorder and overdose. The Guideline is not intended for patients who are in active cancer treatment, palliative care, or end-of-life care.",
  usage:
    "Providers should use caution when prescribing opioids at any dosage, should carefully reassess evidence of individual benefits and risks when considering increasing dosage to ≥50 morphine milligram equivalents (MME)/day, and should avoid increasing dosage to ≥90 MME/day or carefully justify a decision to titrate dosage to >90 MME/day",
  copyright: "© CDC 2016+.",
  topic: [
    {
      text: "Opioid Prescribing",
    },
  ],
  author: [
    {
      name: "Kensaku Kawamoto, MD, PhD, MHS",
    },
    {
      name: "Bryn Rhodes",
    },
    {
      name: "Floyd Eisenberg, MD, MPH",
    },
    {
      name: "Robert McClure, MD, MPH",
    },
  ],
  relatedArtifact: [
    {
      type: "documentation",
      display: "CDC guideline for prescribing opioids for chronic pain",
      url: "https://guidelines.gov/summaries/summary/50153/cdc-guideline-for-prescribing-opioids-for-chronic-pain---united-states-2016#420",
    },
    {
      type: "documentation",
      display: "MME Conversion Tables",
      url: "https://www.cdc.gov/drugoverdose/pdf/calculating_total_daily_dose-a.pdf",
    },
  ],
  library: ["Library/opioidcds-recommendation-05"],
  action: [
    {
      title: "High risk for opioid overdose.",
      description:
        "Total morphine milligram equivalent (MME) exceeds recommended amount. Taper to less than 50.",
      documentation: [
        {
          type: "documentation",
          document: {
            extension: [
              {
                url: "http://hl7.org/fhir/StructureDefinition/cqf-strengthOfRecommendation",
                valueCodeableConcept: {
                  coding: [
                    {
                      system:
                        "http://terminology.hl7.org/CodeSystem/recommendation-strength",
                      code: "strong",
                      display: "Strong",
                    },
                  ],
                },
              },
              {
                url: "http://hl7.org/fhir/StructureDefinition/cqf-qualityOfEvidence",
                valueCodeableConcept: {
                  coding: [
                    {
                      system:
                        "http://terminology.hl7.org/CodeSystem/evidence-quality",
                      code: "low",
                      display: "Low quality",
                    },
                  ],
                },
              },
            ],
          },
        },
      ],
      trigger: [
        {
          type: "named-event",
          name: "medication-prescribe",
        },
      ],
      condition: [
        {
          kind: "applicability",
          expression: {
            description: "Is total MME >= 50?",
            language: "text/cql",
            expression: "Is MME 50 Or More?",
          },
        },
      ],
      groupingBehavior: "visual-group",
      selectionBehavior: "exactly-one",
      dynamicValue: [
        {
          path: "action.title",
          expression: {
            language: "text/cql",
            expression: "getSummary",
          },
        },
        {
          path: "action.description",
          expression: {
            language: "text/cql",
            expression: "getDetail",
          },
        },
        {
          path: "activity.extension",
          expression: {
            language: "text/cql",
            expression: "getIndicator",
          },
        },
      ],
      action: [
        {
          description: "Will reduce dosage",
        },
        {
          description:
            "Risk of overdose carefully considered and outweighed by benefit; snooze 3 mo",
        },
        {
          description: "Acute pain; snooze 1 mo",
        },
        {
          description:
            "N/A - see comment (will be reviewed by medical director); snooze 3 mo",
        },
      ],
    },
  ],
} as const;

export const PlandefinitionOpioidcds07: PlanDefinition = {
  resourceType: "PlanDefinition",
  id: "opioidcds-07",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: opioidcds-07</p><p><b>url</b>: <b>http://hl7.org/fhir/ig/opioid-cds/PlanDefinition/opioidcds-07</b></p><p><b>identifier</b>: cdc-opioid-guidance (OFFICIAL)</p><p><b>version</b>: 0.1.0</p><p><b>name</b>: cdc-opioid-07</p><p><b>title</b>: CDC Opioid Prescribing Guideline Recommendation #7</p><p><b>type</b>: ECA Rule <span>(Details : {http://terminology.hl7.org/CodeSystem/plan-definition-type code 'eca-rule' = 'ECA Rule', given as 'ECA Rule'})</span></p><p><b>status</b>: draft</p><p><b>date</b>: 19/03/2018</p><p><b>publisher</b>: Centers for Disease Control and Prevention (CDC)</p><p><b>description</b>: Clinicians should evaluate benefits and harms with patients within 1 to 4 weeks of starting opioid therapy for chronic pain or of dose escalation. Clinicians should evaluate benefits and harms of continued therapy with patients every 3 months or more frequently.</p><p><b>useContext</b>: , </p><p><b>jurisdiction</b>: United States of America <span>(Details : {urn:iso:std:iso:3166 code 'US' = 'United States of America', given as 'United States of America'})</span></p><p><b>purpose</b>: CDC’s Guideline for Prescribing Opioids for Chronic Pain is intended to improve communication between providers and patients about the risks and benefits of opioid therapy for chronic pain, improve the safety and effectiveness of pain treatment, and reduce the risks associated with long-term opioid therapy, including opioid use disorder and overdose. The Guideline is not intended for patients who are in active cancer treatment, palliative care, or end-of-life care.</p><p><b>usage</b>: If benefits do not outweigh harms of continued opioid therapy, clinicians should optimize other therapies and work with patients to taper opioids to lower dosages or to taper and discontinue opioids.</p><p><b>copyright</b>: © CDC 2016+.</p><p><b>topic</b>: Opioid Prescribing <span>(Details )</span></p><p><b>author</b>: , , , </p><p><b>relatedArtifact</b>: , </p><p><b>library</b>: <a>Library/opioidcds-recommendation-07</a></p><blockquote><p><b>action</b></p><p><b>title</b>: Existing patient should be evaluated for risk of continued opioid therapy.</p><p><b>description</b>: Checking if the trigger prescription meets the inclusion criteria for recommendation #7 workflow.</p><p><b>documentation</b>: </p><p><b>trigger</b>: </p><h3>Conditions</h3><table><tr><td>-</td><td><b>Kind</b></td><td><b>Expression</b></td></tr><tr><td>*</td><td>applicability</td><td/></tr></table><p><b>groupingBehavior</b>: visual-group</p><p><b>selectionBehavior</b>: exactly-one</p><blockquote><p><b>dynamicValue</b></p><p><b>path</b>: action.title</p><p><b>expression</b>: </p></blockquote><blockquote><p><b>dynamicValue</b></p><p><b>path</b>: action.description</p><p><b>expression</b>: </p></blockquote><blockquote><p><b>dynamicValue</b></p><p><b>path</b>: action.extension</p><p><b>expression</b>: </p></blockquote><h3>Actions</h3><table><tr><td>-</td></tr><tr><td>*</td></tr><tr><td>*</td></tr><tr><td>*</td></tr></table></blockquote></div>",
  },
  url: "http://hl7.org/fhir/ig/opioid-cds/PlanDefinition/opioidcds-07",
  identifier: [
    {
      use: "official",
      value: "cdc-opioid-guidance",
    },
  ],
  version: "0.1.0",
  name: "cdc-opioid-07",
  title: "CDC Opioid Prescribing Guideline Recommendation #7",
  type: {
    coding: [
      {
        system: "http://terminology.hl7.org/CodeSystem/plan-definition-type",
        code: "eca-rule",
        display: "ECA Rule",
      },
    ],
  },
  status: "draft",
  date: "2018-03-19",
  publisher: "Centers for Disease Control and Prevention (CDC)",
  description:
    "Clinicians should evaluate benefits and harms with patients within 1 to 4 weeks of starting opioid therapy for chronic pain or of dose escalation. Clinicians should evaluate benefits and harms of continued therapy with patients every 3 months or more frequently.",
  useContext: [
    {
      code: {
        system: "http://terminology.hl7.org/CodeSystem/usage-context-type",
        code: "focus",
        display: "Clinical Focus",
      },
      valueCodeableConcept: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "182888003",
            display: "Medication requested (situation)",
          },
        ],
      },
    },
    {
      code: {
        system: "http://terminology.hl7.org/CodeSystem/usage-context-type",
        code: "focus",
        display: "Clinical Focus",
      },
      valueCodeableConcept: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "82423001",
            display: "Chronic pain (finding)",
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
          display: "United States of America",
        },
      ],
    },
  ],
  purpose:
    "CDC’s Guideline for Prescribing Opioids for Chronic Pain is intended to improve communication between providers and patients about the risks and benefits of opioid therapy for chronic pain, improve the safety and effectiveness of pain treatment, and reduce the risks associated with long-term opioid therapy, including opioid use disorder and overdose. The Guideline is not intended for patients who are in active cancer treatment, palliative care, or end-of-life care.",
  usage:
    "If benefits do not outweigh harms of continued opioid therapy, clinicians should optimize other therapies and work with patients to taper opioids to lower dosages or to taper and discontinue opioids.",
  copyright: "© CDC 2016+.",
  topic: [
    {
      text: "Opioid Prescribing",
    },
  ],
  author: [
    {
      name: "Kensaku Kawamoto, MD, PhD, MHS",
    },
    {
      name: "Bryn Rhodes",
    },
    {
      name: "Floyd Eisenberg, MD, MPH",
    },
    {
      name: "Robert McClure, MD, MPH",
    },
  ],
  relatedArtifact: [
    {
      type: "documentation",
      display: "CDC guideline for prescribing opioids for chronic pain",
      url: "https://guidelines.gov/summaries/summary/50153/cdc-guideline-for-prescribing-opioids-for-chronic-pain---united-states-2016#420",
    },
    {
      type: "documentation",
      display: "MME Conversion Tables",
      url: "https://www.cdc.gov/drugoverdose/pdf/calculating_total_daily_dose-a.pdf",
    },
  ],
  library: ["Library/opioidcds-recommendation-07"],
  action: [
    {
      title:
        "Existing patient should be evaluated for risk of continued opioid therapy.",
      description:
        "Checking if the trigger prescription meets the inclusion criteria for recommendation #7 workflow.",
      documentation: [
        {
          type: "documentation",
          document: {
            extension: [
              {
                url: "http://hl7.org/fhir/StructureDefinition/cqf-strengthOfRecommendation",
                valueCodeableConcept: {
                  coding: [
                    {
                      system:
                        "http://terminology.hl7.org/CodeSystem/recommendation-strength",
                      code: "strong",
                      display: "Strong",
                    },
                  ],
                },
              },
              {
                url: "http://hl7.org/fhir/StructureDefinition/cqf-qualityOfEvidence",
                valueCodeableConcept: {
                  coding: [
                    {
                      system:
                        "http://terminology.hl7.org/CodeSystem/evidence-quality",
                      code: "low",
                      display: "Low quality",
                    },
                  ],
                },
              },
            ],
          },
        },
      ],
      trigger: [
        {
          type: "named-event",
          name: "medication-prescribe",
        },
      ],
      condition: [
        {
          kind: "applicability",
          expression: {
            description:
              "Check whether the existing patient, without an end of life condition or risk assessment in the past 90 days, has taken an opioid-with-abuse-potential for 7 of the past 10 days or 63 of the past 90 days.",
            language: "text/cql",
            expression: "Inclusion Criteria",
          },
        },
      ],
      groupingBehavior: "visual-group",
      selectionBehavior: "exactly-one",
      dynamicValue: [
        {
          path: "action.title",
          expression: {
            language: "text/cql",
            expression: "Get Summary",
          },
        },
        {
          path: "action.description",
          expression: {
            language: "text/cql",
            expression: "Get Detail",
          },
        },
        {
          path: "action.extension",
          expression: {
            language: "text/cql",
            expression: "Get Indicator",
          },
        },
      ],
      action: [
        {
          description:
            "Will schedule assessment of risk for opioid use for the patient",
        },
        {
          description:
            "Risk of overdose carefully considered and outweighed by benefit; snooze 3 mo",
        },
        {
          description: "N/A - see comment; snooze 3 mo",
        },
      ],
    },
  ],
} as const;

export const PlandefinitionOpioidcds08: PlanDefinition = {
  resourceType: "PlanDefinition",
  id: "opioidcds-08",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: opioidcds-08</p><p><b>url</b>: <b>http://hl7.org/fhir/ig/opioid-cds/PlanDefinition/opioidcds-08</b></p><p><b>identifier</b>: cdc-opioid-guidance (OFFICIAL)</p><p><b>version</b>: 0.1.0</p><p><b>name</b>: cdc-opioid-08</p><p><b>title</b>: CDC Opioid Prescribing Guideline Recommendation #8</p><p><b>type</b>: ECA Rule <span>(Details : {http://terminology.hl7.org/CodeSystem/plan-definition-type code 'eca-rule' = 'ECA Rule', given as 'ECA Rule'})</span></p><p><b>status</b>: draft</p><p><b>date</b>: 19/03/2018</p><p><b>publisher</b>: Centers for Disease Control and Prevention (CDC)</p><p><b>description</b>: Clinicians should incorporate into the management plan strategies to mitigate risk, including considering offering naloxone when factors that increase risk for opioid overdose, such as history of overdose, history of substance use disorder, higher opioid dosages (≥50 MME/day), or concurrent benzodiazepine use, are present.</p><p><b>useContext</b>: , </p><p><b>jurisdiction</b>: United States of America <span>(Details : {urn:iso:std:iso:3166 code 'US' = 'United States of America', given as 'United States of America'})</span></p><p><b>purpose</b>: CDC’s Guideline for Prescribing Opioids for Chronic Pain is intended to improve communication between providers and patients about the risks and benefits of opioid therapy for chronic pain, improve the safety and effectiveness of pain treatment, and reduce the risks associated with long-term opioid therapy, including opioid use disorder and overdose. The Guideline is not intended for patients who are in active cancer treatment, palliative care, or end-of-life care.</p><p><b>usage</b>: Before starting and periodically during continuation of opioid therapy, clinicians should evaluate risk factors for opioid-related harms.</p><p><b>copyright</b>: © CDC 2016+.</p><p><b>topic</b>: Opioid Prescribing <span>(Details )</span></p><p><b>author</b>: , , , </p><p><b>relatedArtifact</b>: , </p><p><b>library</b>: <a>Library/opioidcds-recommendation-08</a></p><blockquote><p><b>action</b></p><p><b>title</b>: Existing patient exhibits risk factors for opioid-related harms.</p><p><b>description</b>: Checking if the trigger prescription meets the inclusion criteria for recommendation #8 workflow.</p><p><b>documentation</b>: </p><p><b>trigger</b>: </p><h3>Conditions</h3><table><tr><td>-</td><td><b>Kind</b></td><td><b>Expression</b></td></tr><tr><td>*</td><td>applicability</td><td/></tr></table><p><b>groupingBehavior</b>: visual-group</p><p><b>selectionBehavior</b>: exactly-one</p><blockquote><p><b>dynamicValue</b></p><p><b>path</b>: action.description</p><p><b>expression</b>: </p></blockquote><blockquote><p><b>dynamicValue</b></p><p><b>path</b>: action.title</p><p><b>expression</b>: </p></blockquote><blockquote><p><b>dynamicValue</b></p><p><b>path</b>: action.extension</p><p><b>expression</b>: </p></blockquote><h3>Actions</h3><table><tr><td>-</td></tr><tr><td>*</td></tr><tr><td>*</td></tr><tr><td>*</td></tr></table></blockquote></div>",
  },
  url: "http://hl7.org/fhir/ig/opioid-cds/PlanDefinition/opioidcds-08",
  identifier: [
    {
      use: "official",
      value: "cdc-opioid-guidance",
    },
  ],
  version: "0.1.0",
  name: "cdc-opioid-08",
  title: "CDC Opioid Prescribing Guideline Recommendation #8",
  type: {
    coding: [
      {
        system: "http://terminology.hl7.org/CodeSystem/plan-definition-type",
        code: "eca-rule",
        display: "ECA Rule",
      },
    ],
  },
  status: "draft",
  date: "2018-03-19",
  publisher: "Centers for Disease Control and Prevention (CDC)",
  description:
    "Clinicians should incorporate into the management plan strategies to mitigate risk, including considering offering naloxone when factors that increase risk for opioid overdose, such as history of overdose, history of substance use disorder, higher opioid dosages (≥50 MME/day), or concurrent benzodiazepine use, are present.",
  useContext: [
    {
      code: {
        system: "http://terminology.hl7.org/CodeSystem/usage-context-type",
        code: "focus",
        display: "Clinical Focus",
      },
      valueCodeableConcept: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "182888003",
            display: "Medication requested (situation)",
          },
        ],
      },
    },
    {
      code: {
        system: "http://terminology.hl7.org/CodeSystem/usage-context-type",
        code: "focus",
        display: "Clinical Focus",
      },
      valueCodeableConcept: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "82423001",
            display: "Chronic pain (finding)",
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
          display: "United States of America",
        },
      ],
    },
  ],
  purpose:
    "CDC’s Guideline for Prescribing Opioids for Chronic Pain is intended to improve communication between providers and patients about the risks and benefits of opioid therapy for chronic pain, improve the safety and effectiveness of pain treatment, and reduce the risks associated with long-term opioid therapy, including opioid use disorder and overdose. The Guideline is not intended for patients who are in active cancer treatment, palliative care, or end-of-life care.",
  usage:
    "Before starting and periodically during continuation of opioid therapy, clinicians should evaluate risk factors for opioid-related harms.",
  copyright: "© CDC 2016+.",
  topic: [
    {
      text: "Opioid Prescribing",
    },
  ],
  author: [
    {
      name: "Kensaku Kawamoto, MD, PhD, MHS",
    },
    {
      name: "Bryn Rhodes",
    },
    {
      name: "Floyd Eisenberg, MD, MPH",
    },
    {
      name: "Robert McClure, MD, MPH",
    },
  ],
  relatedArtifact: [
    {
      type: "documentation",
      display: "CDC guideline for prescribing opioids for chronic pain",
      url: "https://guidelines.gov/summaries/summary/50153/cdc-guideline-for-prescribing-opioids-for-chronic-pain---united-states-2016#420",
    },
    {
      type: "documentation",
      display: "MME Conversion Tables",
      url: "https://www.cdc.gov/drugoverdose/pdf/calculating_total_daily_dose-a.pdf",
    },
  ],
  library: ["Library/opioidcds-recommendation-08"],
  action: [
    {
      title: "Existing patient exhibits risk factors for opioid-related harms.",
      description:
        "Checking if the trigger prescription meets the inclusion criteria for recommendation #8 workflow.",
      documentation: [
        {
          type: "documentation",
          document: {
            extension: [
              {
                url: "http://hl7.org/fhir/StructureDefinition/cqf-strengthOfRecommendation",
                valueCodeableConcept: {
                  coding: [
                    {
                      system:
                        "http://terminology.hl7.org/CodeSystem/recommendation-strength",
                      code: "strong",
                      display: "Strong",
                    },
                  ],
                },
              },
              {
                url: "http://hl7.org/fhir/StructureDefinition/cqf-qualityOfEvidence",
                valueCodeableConcept: {
                  coding: [
                    {
                      system:
                        "http://terminology.hl7.org/CodeSystem/evidence-quality",
                      code: "low",
                      display: "Low quality",
                    },
                  ],
                },
              },
            ],
          },
        },
      ],
      trigger: [
        {
          type: "named-event",
          name: "medication-prescribe",
        },
      ],
      condition: [
        {
          kind: "applicability",
          expression: {
            description:
              "Check whether the existing patient exhibits risk factors for opioid-related harms, such as concurrent use with benzodiazepine, a history of substance abuse, and/or an average MME greater than 50 mg/day.",
            language: "text/cql",
            expression: "Inclusion Criteria",
          },
        },
      ],
      groupingBehavior: "visual-group",
      selectionBehavior: "exactly-one",
      dynamicValue: [
        {
          path: "action.description",
          expression: {
            language: "text/cql",
            expression: "Get Detail",
          },
        },
        {
          path: "action.title",
          expression: {
            language: "text/cql",
            expression: "Get Summary",
          },
        },
        {
          path: "action.extension",
          expression: {
            language: "text/cql",
            expression: "Get Indicator",
          },
        },
      ],
      action: [
        {
          description: "Will offer Naloxone instead",
        },
        {
          description:
            "Risk of overdose carefully considered and outweighed by benefit; snooze 3 mo",
        },
        {
          description: "N/A - see comment; snooze 3 mo",
        },
      ],
    },
  ],
} as const;

export const PlandefinitionOpioidcds10: PlanDefinition = {
  resourceType: "PlanDefinition",
  id: "opioidcds-10",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: opioidcds-10</p><p><b>url</b>: <b>http://hl7.org/fhir/ig/opioid-cds/PlanDefinition/opioidcds-10</b></p><p><b>identifier</b>: cdc-opioid-guidance (OFFICIAL)</p><p><b>version</b>: 0.1.0</p><p><b>name</b>: cdc-opioid-10</p><p><b>title</b>: CDC Opioid Prescribing Guideline Recommendation #10</p><p><b>type</b>: ECA Rule <span>(Details : {http://terminology.hl7.org/CodeSystem/plan-definition-type code 'eca-rule' = 'ECA Rule', given as 'ECA Rule'})</span></p><p><b>status</b>: draft</p><p><b>date</b>: 23/04/2017</p><p><b>publisher</b>: Centers for Disease Control and Prevention (CDC)</p><p><b>description</b>: When prescribing opioids for chronic pain, providers should use urine drug testing before starting opioid therapy and consider urine drug testing at least annually to assess for prescribed medications as well as other controlled prescription drugs and illicit drugs.</p><p><b>useContext</b>: , </p><p><b>jurisdiction</b>: United States of America <span>(Details : {urn:iso:std:iso:3166 code 'US' = 'United States of America', given as 'United States of America'})</span></p><p><b>purpose</b>: CDC’s Guideline for Prescribing Opioids for Chronic Pain is intended to improve communication between providers and patients about the risks and benefits of opioid therapy for chronic pain, improve the safety and effectiveness of pain treatment, and reduce the risks associated with long-term opioid therapy, including opioid use disorder and overdose. The Guideline is not intended for patients who are in active cancer treatment, palliative care, or end-of-life care.</p><p><b>usage</b>: Providers should be aware if patients are taking other prescription drugs or illicit drugs that might increase their risk of an overdose.</p><p><b>copyright</b>: © CDC 2016+.</p><p><b>topic</b>: Opioid Prescribing <span>(Details )</span></p><p><b>author</b>: , , , </p><p><b>relatedArtifact</b>: </p><p><b>library</b>: <a>Library/opioidcds-recommendation-10</a></p><blockquote><p><b>action</b></p><p><b>title</b>: Annual Urine Screening Check</p><p><b>description</b>: Patient has not had a urine screening in the past 12 months</p><p><b>documentation</b>: </p><p><b>trigger</b>: </p><h3>Conditions</h3><table><tr><td>-</td><td><b>Kind</b></td><td><b>Expression</b></td></tr><tr><td>*</td><td>applicability</td><td/></tr></table><h3>DynamicValues</h3><table><tr><td>-</td><td><b>Path</b></td><td><b>Expression</b></td></tr><tr><td>*</td><td>activity.extension</td><td/></tr></table><h3>Actions</h3><table><tr><td>-</td></tr><tr><td>*</td></tr><tr><td>*</td></tr></table></blockquote><blockquote><p><b>action</b></p><p><b>title</b>: Positive Urine Screening Check</p><p><b>description</b>: Patient has a urine screening testing positive for either unprescribed opioids or illicit drugs in the past 12 months</p><p><b>documentation</b>: </p><h3>Conditions</h3><table><tr><td>-</td><td><b>Kind</b></td><td><b>Expression</b></td></tr><tr><td>*</td><td>applicability</td><td/></tr></table><h3>Actions</h3><table><tr><td>-</td></tr><tr><td>*</td></tr><tr><td>*</td></tr><tr><td>*</td></tr></table></blockquote></div>",
  },
  url: "http://hl7.org/fhir/ig/opioid-cds/PlanDefinition/opioidcds-10",
  identifier: [
    {
      use: "official",
      value: "cdc-opioid-guidance",
    },
  ],
  version: "0.1.0",
  name: "cdc-opioid-10",
  title: "CDC Opioid Prescribing Guideline Recommendation #10",
  type: {
    coding: [
      {
        system: "http://terminology.hl7.org/CodeSystem/plan-definition-type",
        code: "eca-rule",
        display: "ECA Rule",
      },
    ],
  },
  status: "draft",
  date: "2017-04-23",
  publisher: "Centers for Disease Control and Prevention (CDC)",
  description:
    "When prescribing opioids for chronic pain, providers should use urine drug testing before starting opioid therapy and consider urine drug testing at least annually to assess for prescribed medications as well as other controlled prescription drugs and illicit drugs.",
  useContext: [
    {
      code: {
        system: "http://terminology.hl7.org/CodeSystem/usage-context-type",
        code: "focus",
        display: "Clinical Focus",
      },
      valueCodeableConcept: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "182888003",
            display: "Medication requested (situation)",
          },
        ],
      },
    },
    {
      code: {
        system: "http://terminology.hl7.org/CodeSystem/usage-context-type",
        code: "focus",
        display: "Clinical Focus",
      },
      valueCodeableConcept: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "82423001",
            display: "Chronic pain (finding)",
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
          display: "United States of America",
        },
      ],
    },
  ],
  purpose:
    "CDC’s Guideline for Prescribing Opioids for Chronic Pain is intended to improve communication between providers and patients about the risks and benefits of opioid therapy for chronic pain, improve the safety and effectiveness of pain treatment, and reduce the risks associated with long-term opioid therapy, including opioid use disorder and overdose. The Guideline is not intended for patients who are in active cancer treatment, palliative care, or end-of-life care.",
  usage:
    "Providers should be aware if patients are taking other prescription drugs or illicit drugs that might increase their risk of an overdose.",
  copyright: "© CDC 2016+.",
  topic: [
    {
      text: "Opioid Prescribing",
    },
  ],
  author: [
    {
      name: "Kensaku Kawamoto, MD, PhD, MHS",
    },
    {
      name: "Bryn Rhodes",
    },
    {
      name: "Floyd Eisenberg, MD, MPH",
    },
    {
      name: "Robert McClure, MD, MPH",
    },
  ],
  relatedArtifact: [
    {
      type: "documentation",
      display: "CDC guideline for prescribing opioids for chronic pain",
      url: "https://guidelines.gov/summaries/summary/50153/cdc-guideline-for-prescribing-opioids-for-chronic-pain---united-states-2016#420",
    },
  ],
  library: ["Library/opioidcds-recommendation-10"],
  action: [
    {
      title: "Annual Urine Screening Check",
      description:
        "Patient has not had a urine screening in the past 12 months",
      documentation: [
        {
          type: "documentation",
          document: {
            extension: [
              {
                url: "http://hl7.org/fhir/StructureDefinition/cqf-strengthOfRecommendation",
                valueCodeableConcept: {
                  coding: [
                    {
                      system:
                        "http://terminology.hl7.org/CodeSystem/recommendation-strength",
                      code: "strong",
                      display: "Strong",
                    },
                  ],
                },
              },
              {
                url: "http://hl7.org/fhir/StructureDefinition/cqf-qualityOfEvidence",
                valueCodeableConcept: {
                  coding: [
                    {
                      system:
                        "http://terminology.hl7.org/CodeSystem/evidence-quality",
                      code: "low",
                      display: "Low quality",
                    },
                  ],
                },
              },
            ],
          },
        },
      ],
      trigger: [
        {
          type: "named-event",
          name: "medication-prescribe",
        },
      ],
      condition: [
        {
          kind: "applicability",
          expression: {
            description:
              "Patient has not had a urine screening in the past 12 months",
            language: "text/cql",
            expression: "No Screenings in Past Year",
          },
        },
      ],
      dynamicValue: [
        {
          path: "activity.extension",
          expression: {
            language: "text/cql",
            expression: "Get Indicator",
          },
        },
      ],
      action: [
        {
          description: "Will perform urine screening",
        },
        {
          description: "Not for chronic pain management. Snooze 3 months",
        },
      ],
    },
    {
      title: "Positive Urine Screening Check",
      description:
        "Patient has a urine screening testing positive for either unprescribed opioids or illicit drugs in the past 12 months",
      documentation: [
        {
          type: "documentation",
          document: {
            extension: [
              {
                url: "http://hl7.org/fhir/StructureDefinition/cqf-strengthOfRecommendation",
                valueCodeableConcept: {
                  coding: [
                    {
                      system:
                        "http://terminology.hl7.org/CodeSystem/recommendation-strength",
                      code: "strong",
                      display: "Strong",
                    },
                  ],
                },
              },
              {
                url: "http://hl7.org/fhir/StructureDefinition/cqf-qualityOfEvidence",
                valueCodeableConcept: {
                  coding: [
                    {
                      system:
                        "http://terminology.hl7.org/CodeSystem/evidence-quality",
                      code: "low",
                      display: "Low quality",
                    },
                  ],
                },
              },
            ],
          },
        },
      ],
      condition: [
        {
          kind: "applicability",
          expression: {
            description:
              "Patient has a positive urine screening in the past 12 months",
            language: "text/cql",
            expression: "Has Positive Screening?",
          },
        },
      ],
      action: [
        {
          title: "Unprescribed Opioids Found In Urine Screening",
          description:
            "Patient has a positive urine screening in the past 12 months for opioid(s), which is not prescribed",
          documentation: [
            {
              type: "documentation",
              document: {
                extension: [
                  {
                    url: "http://hl7.org/fhir/StructureDefinition/cqf-strengthOfRecommendation",
                    valueCodeableConcept: {
                      coding: [
                        {
                          system:
                            "http://terminology.hl7.org/CodeSystem/recommendation-strength",
                          code: "strong",
                          display: "Strong",
                        },
                      ],
                    },
                  },
                  {
                    url: "http://hl7.org/fhir/StructureDefinition/cqf-qualityOfEvidence",
                    valueCodeableConcept: {
                      coding: [
                        {
                          system:
                            "http://terminology.hl7.org/CodeSystem/evidence-quality",
                          code: "low",
                          display: "Low quality",
                        },
                      ],
                    },
                  },
                ],
              },
            },
          ],
          condition: [
            {
              kind: "applicability",
              expression: {
                description:
                  "Patient has a positive urine screening in the past 12 months for opioid(s), which is not prescribed",
                language: "text/cql",
                expression: "Has Unprescribed Opioids?",
              },
            },
          ],
          dynamicValue: [
            {
              path: "activity.extension",
              expression: {
                language: "text/cql",
                expression: "Get Indicator",
              },
            },
            {
              path: "action.description",
              expression: {
                language: "text/cql",
                expression: "Inconsistent Unprescribed Opioids",
              },
            },
          ],
          action: [
            {
              description: "Not for chronic pain management. Snooze 3 months",
            },
          ],
        },
        {
          title: "Prescribed Opioids Not Found In Urine Screening",
          description:
            "Patient has a positive urine screening in the past 12 months, which does not include prescribed opioids",
          documentation: [
            {
              type: "documentation",
              document: {
                extension: [
                  {
                    url: "http://hl7.org/fhir/StructureDefinition/cqf-strengthOfRecommendation",
                    valueCodeableConcept: {
                      coding: [
                        {
                          system:
                            "http://terminology.hl7.org/CodeSystem/recommendation-strength",
                          code: "strong",
                          display: "Strong",
                        },
                      ],
                    },
                  },
                  {
                    url: "http://hl7.org/fhir/StructureDefinition/cqf-qualityOfEvidence",
                    valueCodeableConcept: {
                      coding: [
                        {
                          system:
                            "http://terminology.hl7.org/CodeSystem/evidence-quality",
                          code: "low",
                          display: "Low quality",
                        },
                      ],
                    },
                  },
                ],
              },
            },
          ],
          condition: [
            {
              kind: "applicability",
              expression: {
                description:
                  "Patient has a positive urine screening in the past 12 months, which does not include prescribed opioids",
                language: "text/cql",
                expression: "Has Missing Opioids?",
              },
            },
          ],
          dynamicValue: [
            {
              path: "activity.extension",
              expression: {
                language: "text/cql",
                expression: "Get Indicator",
              },
            },
            {
              path: "action.description",
              expression: {
                language: "text/cql",
                expression: "Inconsistent Missing Opioids",
              },
            },
          ],
        },
        {
          title: "Illicit Drugs Found In Urine Screening",
          description:
            "Patient has a positive urine screening in the past 12 months for illicit drugs",
          documentation: [
            {
              type: "documentation",
              document: {
                extension: [
                  {
                    url: "http://hl7.org/fhir/StructureDefinition/cqf-strengthOfRecommendation",
                    valueCodeableConcept: {
                      coding: [
                        {
                          system:
                            "http://terminology.hl7.org/CodeSystem/recommendation-strength",
                          code: "strong",
                          display: "Strong",
                        },
                      ],
                    },
                  },
                  {
                    url: "http://hl7.org/fhir/StructureDefinition/cqf-qualityOfEvidence",
                    valueCodeableConcept: {
                      coding: [
                        {
                          system:
                            "http://terminology.hl7.org/CodeSystem/evidence-quality",
                          code: "low",
                          display: "Low quality",
                        },
                      ],
                    },
                  },
                ],
              },
            },
          ],
          condition: [
            {
              kind: "applicability",
              expression: {
                description:
                  "Patient has a positive urine screening in the past 12 months for illicit drugs",
                language: "text/cql",
                expression: "Has Illicit Drugs in Screening?",
              },
            },
          ],
          dynamicValue: [
            {
              path: "activity.extension",
              expression: {
                language: "text/cql",
                expression: "Get Indicator",
              },
            },
            {
              path: "action.description",
              expression: {
                language: "text/cql",
                expression: "Inconsistent Illicit Drugs",
              },
            },
          ],
          action: [
            {
              description: "Not for chronic pain management. Snooze 3 months",
            },
          ],
        },
      ],
    },
  ],
} as const;

export const PlandefinitionOpioidcds11: PlanDefinition = {
  resourceType: "PlanDefinition",
  id: "opioidcds-11",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: opioidcds-11</p><p><b>url</b>: <b>http://hl7.org/fhir/ig/opioid-cds/PlanDefinition/opioidcds-11</b></p><p><b>identifier</b>: cdc-opioid-guidance (OFFICIAL)</p><p><b>version</b>: 0.1.0</p><p><b>name</b>: cdc-opioid-11</p><p><b>title</b>: CDC Opioid Prescribing Guideline Recommendation #11</p><p><b>type</b>: ECA Rule <span>(Details : {http://terminology.hl7.org/CodeSystem/plan-definition-type code 'eca-rule' = 'ECA Rule', given as 'ECA Rule'})</span></p><p><b>status</b>: draft</p><p><b>date</b>: 19/03/2018</p><p><b>publisher</b>: Centers for Disease Control and Prevention (CDC)</p><p><b>description</b>: Concurrently prescribing opioid medications with benzodiazepines increases the risk of harm for the patient.</p><p><b>useContext</b>: , </p><p><b>jurisdiction</b>: United States of America <span>(Details : {urn:iso:std:iso:3166 code 'US' = 'United States of America', given as 'United States of America'})</span></p><p><b>purpose</b>: CDC’s Guideline for Prescribing Opioids for Chronic Pain is intended to improve communication between providers and patients about the risks and benefits of opioid therapy for chronic pain, improve the safety and effectiveness of pain treatment, and reduce the risks associated with long-term opioid therapy, including opioid use disorder and overdose. The Guideline is not intended for patients who are in active cancer treatment, palliative care, or end-of-life care.</p><p><b>usage</b>: Clinicians should avoid prescribing opioid pain medication and benzodiazepines concurrently whenever possible.</p><p><b>copyright</b>: © CDC 2016+.</p><p><b>topic</b>: Opioid Prescribing <span>(Details )</span></p><p><b>author</b>: , , , </p><p><b>relatedArtifact</b>: , </p><p><b>library</b>: <a>Library/opioidcds-recommendation-11</a></p><blockquote><p><b>action</b></p><p><b>title</b>: Existing patient has concurrent opioid and benzodiazepine prescriptions.</p><p><b>description</b>: Checking if the trigger prescription meets the inclusion criteria for recommendation #11 workflow.</p><p><b>documentation</b>: </p><p><b>trigger</b>: </p><h3>Conditions</h3><table><tr><td>-</td><td><b>Kind</b></td><td><b>Expression</b></td></tr><tr><td>*</td><td>applicability</td><td/></tr></table><p><b>groupingBehavior</b>: visual-group</p><p><b>selectionBehavior</b>: exactly-one</p><blockquote><p><b>dynamicValue</b></p><p><b>path</b>: action.description</p><p><b>expression</b>: </p></blockquote><blockquote><p><b>dynamicValue</b></p><p><b>path</b>: action.title</p><p><b>expression</b>: </p></blockquote><blockquote><p><b>dynamicValue</b></p><p><b>path</b>: action.extension</p><p><b>expression</b>: </p></blockquote><h3>Actions</h3><table><tr><td>-</td></tr><tr><td>*</td></tr><tr><td>*</td></tr><tr><td>*</td></tr></table></blockquote></div>",
  },
  url: "http://hl7.org/fhir/ig/opioid-cds/PlanDefinition/opioidcds-11",
  identifier: [
    {
      use: "official",
      value: "cdc-opioid-guidance",
    },
  ],
  version: "0.1.0",
  name: "cdc-opioid-11",
  title: "CDC Opioid Prescribing Guideline Recommendation #11",
  type: {
    coding: [
      {
        system: "http://terminology.hl7.org/CodeSystem/plan-definition-type",
        code: "eca-rule",
        display: "ECA Rule",
      },
    ],
  },
  status: "draft",
  date: "2018-03-19",
  publisher: "Centers for Disease Control and Prevention (CDC)",
  description:
    "Concurrently prescribing opioid medications with benzodiazepines increases the risk of harm for the patient.",
  useContext: [
    {
      code: {
        system: "http://terminology.hl7.org/CodeSystem/usage-context-type",
        code: "focus",
        display: "Clinical Focus",
      },
      valueCodeableConcept: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "182888003",
            display: "Medication requested (situation)",
          },
        ],
      },
    },
    {
      code: {
        system: "http://terminology.hl7.org/CodeSystem/usage-context-type",
        code: "focus",
        display: "Clinical Focus",
      },
      valueCodeableConcept: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "82423001",
            display: "Chronic pain (finding)",
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
          display: "United States of America",
        },
      ],
    },
  ],
  purpose:
    "CDC’s Guideline for Prescribing Opioids for Chronic Pain is intended to improve communication between providers and patients about the risks and benefits of opioid therapy for chronic pain, improve the safety and effectiveness of pain treatment, and reduce the risks associated with long-term opioid therapy, including opioid use disorder and overdose. The Guideline is not intended for patients who are in active cancer treatment, palliative care, or end-of-life care.",
  usage:
    "Clinicians should avoid prescribing opioid pain medication and benzodiazepines concurrently whenever possible.",
  copyright: "© CDC 2016+.",
  topic: [
    {
      text: "Opioid Prescribing",
    },
  ],
  author: [
    {
      name: "Kensaku Kawamoto, MD, PhD, MHS",
    },
    {
      name: "Bryn Rhodes",
    },
    {
      name: "Floyd Eisenberg, MD, MPH",
    },
    {
      name: "Robert McClure, MD, MPH",
    },
  ],
  relatedArtifact: [
    {
      type: "documentation",
      display: "CDC guideline for prescribing opioids for chronic pain",
      url: "https://guidelines.gov/summaries/summary/50153/cdc-guideline-for-prescribing-opioids-for-chronic-pain---united-states-2016#420",
    },
    {
      type: "documentation",
      display: "MME Conversion Tables",
      url: "https://www.cdc.gov/drugoverdose/pdf/calculating_total_daily_dose-a.pdf",
    },
  ],
  library: ["Library/opioidcds-recommendation-11"],
  action: [
    {
      title:
        "Existing patient has concurrent opioid and benzodiazepine prescriptions.",
      description:
        "Checking if the trigger prescription meets the inclusion criteria for recommendation #11 workflow.",
      documentation: [
        {
          type: "documentation",
          document: {
            extension: [
              {
                url: "http://hl7.org/fhir/StructureDefinition/cqf-strengthOfRecommendation",
                valueCodeableConcept: {
                  coding: [
                    {
                      system:
                        "http://terminology.hl7.org/CodeSystem/recommendation-strength",
                      code: "strong",
                      display: "Strong",
                    },
                  ],
                },
              },
              {
                url: "http://hl7.org/fhir/StructureDefinition/cqf-qualityOfEvidence",
                valueCodeableConcept: {
                  coding: [
                    {
                      system:
                        "http://terminology.hl7.org/CodeSystem/evidence-quality",
                      code: "low",
                      display: "Low quality",
                    },
                  ],
                },
              },
            ],
          },
        },
      ],
      trigger: [
        {
          type: "named-event",
          name: "medication-prescribe",
        },
      ],
      condition: [
        {
          kind: "applicability",
          expression: {
            description:
              "Check whether the existing patient is using opioids concurrently with benzodiazepines.",
            language: "text/cql",
            expression: "Inclusion Criteria",
          },
        },
      ],
      groupingBehavior: "visual-group",
      selectionBehavior: "exactly-one",
      dynamicValue: [
        {
          path: "action.description",
          expression: {
            language: "text/cql",
            expression: "Get Detail",
          },
        },
        {
          path: "action.title",
          expression: {
            language: "text/cql",
            expression: "Get Summary",
          },
        },
        {
          path: "action.extension",
          expression: {
            language: "text/cql",
            expression: "Get Indicator",
          },
        },
      ],
      action: [
        {
          description: "Will revise",
        },
        {
          description:
            "Risk of overdose carefully considered and outweighed by benefit; snooze 3 mo",
        },
        {
          description: "N/A - see comment; snooze 3 mo",
        },
      ],
    },
  ],
} as const;

export const PlandefinitionOptionsExample: PlanDefinition = {
  resourceType: "PlanDefinition",
  id: "options-example",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">[Put rendering here]</div>',
  },
  contained: [
    {
      resourceType: "ActivityDefinition",
      id: "activitydefinition-medicationrequest-1",
      status: "draft",
      kind: "MedicationRequest",
      productCodeableConcept: {
        text: "Medication 1",
      },
    },
    {
      resourceType: "ActivityDefinition",
      id: "activitydefinition-medicationrequest-2",
      status: "draft",
      kind: "MedicationRequest",
      productCodeableConcept: {
        text: "Medication 2",
      },
    },
  ],
  title: "This example illustrates relationships between actions.",
  status: "draft",
  action: [
    {
      groupingBehavior: "logical-group",
      selectionBehavior: "all",
      action: [
        {
          id: "medication-action-1",
          title: "Administer Medication 1",
          definitionCanonical: "#activitydefinition-medicationrequest-1",
        },
        {
          id: "medication-action-2",
          title: "Administer Medication 2",
          relatedAction: [
            {
              actionId: "medication-action-1",
              relationship: "after-end",
              offsetDuration: {
                value: 1,
                unit: "h",
              },
            },
          ],
          definitionCanonical: "#activitydefinition-medicationrequest-2",
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

export const PlandefinitionPredecessorExample: PlanDefinition = {
  resourceType: "PlanDefinition",
  id: "zika-virus-intervention-initial",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n         <table class="grid dict">\n            <tr>\n               <td>\n                  <b>Id: </b>\n               </td>\n            </tr>\n            <tr>\n               <td style="padding-left: 25px; padding-right: 25px;">PlanDefinition/zika-virus-intervention-initial</td>\n            </tr>\n         </table>\n         <p/>\n         <table class="grid dict">\n            <tr>\n               <td>\n                  <b>Identifier: </b>\n               </td>\n            </tr>\n            <tr>\n               <td style="padding-left: 25px; padding-right: 25px;">\n                  <b>value: </b>\n                  <span>zika-virus-intervention</span>\n               </td>\n            </tr>\n         </table>\n         <p/>\n         <table class="grid dict">\n            <tr>\n               <td>\n                  <b>Title: </b>\n               </td>\n            </tr>\n            <tr>\n               <td style="padding-left: 25px; padding-right: 25px;">Example Zika Virus Intervention</td>\n            </tr>\n         </table>\n         <p/>\n         <table class="grid dict">\n            <tr>\n               <td>\n                  <b>Status: </b>\n               </td>\n            </tr>\n            <tr>\n               <td style="padding-left: 25px; padding-right: 25px;">active</td>\n            </tr>\n         </table>\n         <p/>\n         <table class="grid dict">\n            <tr>\n               <td>\n                  <b>Description: </b>\n               </td>\n            </tr>\n            <tr>\n               <td style="padding-left: 25px; padding-right: 25px;">Zika Virus Management intervention describing the CDC Guidelines for Zika Virus Reporting and Management.</td>\n            </tr>\n         </table>\n         <p/>\n         <table class="grid dict">\n            <tr>\n               <td>\n                  <b>Topic: </b>\n               </td>\n            </tr>\n            <tr>\n               <td style="padding-left: 25px; padding-right: 25px;">\n                  <span>\n                     <b>text: </b>\n                     <span>Zika Virus Management</span>\n                  </span>\n               </td>\n            </tr>\n         </table>\n         <p/>\n         <table class="grid dict">\n            <tr>\n               <td>\n                  <b>Library: </b>\n               </td>\n            </tr>\n            <tr>\n               <td style="padding-left: 25px; padding-right: 25px;">\n                  <b>reference: </b>\n                  <span>Library/zika-virus-intervention-logic</span>\n               </td>\n            </tr>\n         </table>\n         <p/>\n         <h2>Actions</h2>\n         <p style="width: 100%;" class="hierarchy">\n            <span>\n               <b>Step: </b>\n               <br/>\n               <span style="padding-left: 25px;">\n                  <b>title: </b>\n                  <span>Zika Virus Assessment</span>\n                  <br/>\n               </span>\n               <span style="padding-left: 25px;">\n                  <b>condition: </b>\n                  <br/>\n                  <span style="padding-left: 50px;">\n                     <b>type: </b>\n                     <span>applicability</span>\n                     <br/>\n                  </span>\n                  <span style="padding-left: 50px;">\n                     <b>expression: </b>\n                     <span>Is Patient Pregnant</span>\n                     <br/>\n                  </span>\n               </span>\n               <span style="padding-left: 25px;">\n                  <span>\n                     <b>Step: </b>\n                     <br/>\n                     <span style="padding-left: 50px;">\n                        <b>condition: </b>\n                        <br/>\n                        <span style="padding-left: 75px;">\n                           <b>type: </b>\n                           <span>applicability</span>\n                           <br/>\n                        </span>\n                        <span style="padding-left: 75px;">\n                           <b>expression: </b>\n                           <span>Should Administer Zika Virus Exposure Assessment</span>\n                           <br/>\n                        </span>\n                     </span>\n                     <span style="padding-left: 50px;">\n                        <b>condition: </b>\n                        <br/>\n                        <span style="padding-left: 75px;">\n                           <b>reference: </b>\n                           <br/>\n                           <span style="padding-left: 100px;">#administer-zika-virus-exposure-assessment</span>\n                           <br/>\n                           <span>\n\t\t\t\t\t\t\t <span style="padding-left: 75px;">\n\t\t\t\t\t\t\t\t<b>description: </b>\n\t\t\t\t\t\t\t\t<span>Administer Zika Virus Exposure Assessment</span>\n\t\t\t\t\t\t\t\t<br/>\n\t\t\t\t\t\t\t </span>\n\t\t\t\t\t\t\t <span style="padding-left: 75px;">\n\t\t\t\t\t\t\t\t<b>category: </b>\n\t\t\t\t\t\t\t\t<span>procedure</span>\n\t\t\t\t\t\t\t\t<br/>\n\t\t\t\t\t\t\t </span>\n                           </span>\n                        </span>\n                     </span>\n                     <span style="padding-left: 50px;"/>\n                  </span>\n                  <span>\n                     <b>Step: </b>\n                     <br/>\n                     <span style="padding-left: 75px;">\n                        <b>condition: </b>\n                        <br/>\n                        <span style="padding-left: 100px;">\n                           <b>type: </b>\n                           <span>applicability</span>\n                           <br/>\n                        </span>\n                        <span style="padding-left: 100px;">\n                           <b>expression: </b>\n                           <span>Should Order Serum + Urine rRT-PCR Test</span>\n                           <br/>\n                        </span>\n                     </span>\n                     <span style="padding-left: 75px;">\n                        <b>condition: </b>\n                        <br/>\n                        <span style="padding-left: 100px;">\n                           <b>reference: </b>\n                           <br/>\n                           <span style="padding-left: 125px;">ActivityDefinition/order-serum-urine-rrt-pcr-test</span>\n                           <br/>\n                        </span>\n                     </span>\n                     <span style="padding-left: 50px;"/>\n                  </span>\n                  <span>\n                     <b>Step: </b>\n                     <br/>\n                     <span style="padding-left: 75px;">\n                        <b>condition: </b>\n                        <br/>\n                        <span style="padding-left: 100px;">\n                           <b>type: </b>\n                           <span>applicability</span>\n                           <br/>\n                        </span>\n                        <span style="padding-left: 100px;">\n                           <b>expression: </b>\n                           <span>Should Order Serum Zika Virus IgM + Dengue Virus IgM</span>\n                           <br/>\n                        </span>\n                     </span>\n                     <span style="padding-left: 75px;">\n                        <b>condition: </b>\n                        <br/>\n                        <span style="padding-left: 100px;">\n                           <b>reference: </b>\n                           <br/>\n                           <span style="padding-left: 125px;">#order-serum-zika-dengue-virus-igm</span>\n                           <br/>\n                           <span>\n                              <span style="padding-left: 50px;">\n                                 <span style="padding-left: 50px;">\n                                    <b>description: </b>\n                                    <span>Order Serum Zika and Dengue Virus IgM</span>\n                                    <br/>\n                                 </span>\n                                 <span style="padding-left: 75px;">\n                                    <b>related:</b>\n                                    <br/>\n                                    <span style="padding-left: 100px;">\n                                       <b>type: </b>\n                                       <span>documentation</span>\n                                       <br/>\n                                    </span>\n                                    <span style="padding-left: 100px;">\n                                       <b>display: </b>\n                                       <span>Explanation of diagnostic tests for Zika virus and which to use based on the patients clinical and exposure history.</span>\n                                       <br/>\n                                    </span>\n                                 </span>\n                                 <span style="padding-left: 100px;">\n                                    <b>category: </b>\n                                    <span>diagnostic</span>\n                                    <br/>\n                                 </span>\n                              </span>\n                           </span>\n                           <span/>\n                        </span>\n                     </span>\n                     <span style="padding-left: 50px;"/>\n                  </span>\n                  <span>\n                     <b>Step: </b>\n                     <br/>\n                     <span style="padding-left: 75px;">\n                        <b>condition: </b>\n                        <br/>\n                        <span style="padding-left: 100px;">\n                           <b>type: </b>\n                           <span>applicability</span>\n                           <br/>\n                        </span>\n                        <span style="padding-left: 100px;">\n                           <b>expression: </b>\n                           <span>Should Consider IgM Antibody Testing</span>\n                           <br/>\n                        </span>\n                     </span>\n                     <span style="padding-left: 75px;">\n                        <b>condition: </b>\n                        <br/>\n                        <span style="padding-left: 100px;">\n                           <b>reference: </b>\n                           <br/>\n                           <span style="padding-left: 125px;">ActivityDefinition/consider-igm-antibody-testing</span>\n                           <br/>\n                        </span>\n                     </span>\n                     <span style="padding-left: 50px;"/>\n                  </span>\n                  <span>\n                     <b>Step: </b>\n                     <br/>\n                     <span style="padding-left: 75px;">\n                        <b>condition: </b>\n                        <br/>\n                        <span style="padding-left: 100px;">\n                           <b>type: </b>\n                           <span>applicability</span>\n                           <br/>\n                        </span>\n                        <span style="padding-left: 100px;">\n                           <b>expression: </b>\n                           <span>Should Provide Mosquito Prevention and Contraception Advice</span>\n                           <br/>\n                        </span>\n                     </span>\n                     <span style="padding-left: 50px;">\n                        <span>\n                           <b>Step: </b>\n                           <br/>\n                           <span style="padding-left: 75px;">\n                              <b>condition: </b>\n                              <br/>\n                              <span style="padding-left: 100px;">\n                                 <b>reference: </b>\n                                 <br/>\n                                 <span style="padding-left: 125px;">#provide-mosquito-prevention-advice</span>\n                                 <span>\n                                    <span style="padding-left: 75px;">\n                                       <br/>\n                                       <span style="padding-left: 100px;">\n                                          <b>description: </b>\n                                          <span>Provide mosquito prevention advice</span>\n                                          <br/>\n                                       </span>\n                                       <span style="padding-left: 75px;">\n                                          <b>related:</b>\n                                          <br/>\n                                          <span style="padding-left: 100px;">\n                                             <b>type: </b>\n                                             <span>documentation</span>\n                                             <br/>\n                                          </span>\n                                          <span style="padding-left: 100px;">\n                                             <b>display: </b>\n                                             <span>Advice for patients about how to avoid Mosquito bites.</span>\n                                             <br/>\n                                          </span>\n                                       </span>\n                                       <span style="padding-left: 75px;">\n                                          <b>related:</b>\n                                          <br/>\n                                          <span style="padding-left: 100px;">\n                                             <b>type: </b>\n                                             <span>documentation</span>\n                                             <br/>\n                                          </span>\n                                          <span style="padding-left: 100px;">\n                                             <b>display: </b>\n                                             <span>Advice for patients about which mosquito repellents are effective and safe to use in pregnancy. [DEET, IF3535 and Picardin are safe during]</span>\n                                             <br/>\n                                          </span>\n                                       </span>\n                                       <span style="padding-left: 100px;">\n                                          <b>category: </b>\n                                          <span>communication</span>\n                                          <br/>\n                                       </span>\n                                    </span>\n                                 </span>\n                              </span>\n                           </span>\n                           <span style="padding-left: 75px;"/>\n                        </span>\n                        <span>\n                           <b>Step: </b>\n                           <br/>\n                           <span style="padding-left: 75px;">\n                              <b>condition: </b>\n                              <br/>\n                              <span style="padding-left: 100px;">\n                                 <b>reference: </b>\n                                 <br/>\n                                 <span style="padding-left: 125px;">ActivityDefinition/provide-contraception-advice</span>\n                                 <br/>\n                              </span>\n                           </span>\n                        </span>\n                     </span>\n                  </span>\n               </span>\n            </span>\n         </p>\n      </div>',
  },
  url: "http://example.org/PlanDefinition/zika-virus-intervention",
  identifier: [
    {
      use: "official",
      value: "zika-virus-intervention",
    },
  ],
  version: "1.0.0",
  title: "Example Zika Virus Intervention",
  status: "active",
  date: "2016-11-14",
  description:
    "Zika Virus Management intervention describing the CDC Guidelines for Zika Virus Reporting and Management.",
  topic: [
    {
      text: "Zika Virus Management",
    },
  ],
  relatedArtifact: [
    {
      type: "derived-from",
      url: "https://www.cdc.gov/mmwr/volumes/65/wr/mm6539e1.htm?s_cid=mm6539e1_w",
    },
    {
      type: "successor",
      resource: "PlanDefinition/zika-virus-intervention",
    },
  ],
  library: ["Library/zika-virus-intervention-logic"],
  action: [
    {
      title: "Zika Virus Assessment",
      trigger: [
        {
          type: "named-event",
          name: "patient-view",
        },
      ],
      condition: [
        {
          kind: "applicability",
          expression: {
            language: "text/cql",
            expression: "Is Patient Pregnant",
          },
        },
      ],
      action: [
        {
          condition: [
            {
              kind: "applicability",
              expression: {
                language: "text/cql",
                expression: "Should Administer Zika Virus Exposure Assessment",
              },
            },
          ],
          definitionCanonical:
            "ActivityDefinition/administer-zika-virus-exposure-assessment",
        },
        {
          condition: [
            {
              kind: "applicability",
              expression: {
                language: "text/cql",
                expression: "Should Order Serum + Urine rRT-PCR Test",
              },
            },
          ],
          definitionCanonical:
            "ActivityDefinition/order-serum-urine-rrt-pcr-test",
        },
        {
          condition: [
            {
              kind: "applicability",
              expression: {
                language: "text/cql",
                expression:
                  "Should Order Serum Zika Virus IgM + Dengue Virus IgM",
              },
            },
          ],
          definitionCanonical:
            "ActivityDefinition/order-serum-zika-dengue-virus-igm",
        },
        {
          condition: [
            {
              kind: "applicability",
              expression: {
                language: "text/cql",
                expression: "Should Consider IgM Antibody Testing",
              },
            },
          ],
          definitionCanonical:
            "ActivityDefinition/consider-igm-antibody-testing",
        },
        {
          condition: [
            {
              kind: "applicability",
              expression: {
                language: "text/cql",
                expression:
                  "Should Provide Mosquito Prevention and Contraception Advice",
              },
            },
          ],
          action: [
            {
              definitionCanonical:
                "ActivityDefinition/provide-mosquito-prevention-advice",
            },
            {
              definitionCanonical:
                "ActivityDefinition/provide-contraception-advice",
            },
          ],
        },
      ],
    },
  ],
} as const;

export const PlandefinitionProtocolExample: PlanDefinition = {
  resourceType: "PlanDefinition",
  id: "protocol-example",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n<p>\n    <b>id: </b>example, </p>\n\n  <p>\n    <b>identifier: </b>, <b>system: </b>http://acme.org, <b>value: </b>example-1, </p>\n  <p>\n    <b>title: </b>Obesity Assessment Protocol, </p>\n  <p>\n    <b>status: </b>draft, </p>\n  <p>\n    <b>type: </b>condition, </p>\n  <p>\n    <b>purpose: </b>Example of A medical algorithm for assessment and treatment of overweight and obesity, </p>\n  <p>\n    <b>author: </b>, <b>display: </b>National Heart, Lung, and Blood Institute http://www.nhlbi.nih.gov/health-pro/guidelines/current/obesity-guidelines/e_textbook/txgd/algorthm/algorthm.htm, </p>\n  <p>\n    <b>step: </b>, <b>name: </b>Measure BMI, <b>description: </b>Measure, Weight, Height, Waist, Circumference; Calculate BMI  Weight must be measured so that the BMI can be calculated. Most charts are based on weights obtained with the patient wearing undergarments and no shoes. BMI can be manually calculated (kg/[height in meters]2), but is more easily obtained from a nomogram. Waist circumference is important because evidence suggests that abdominal fat is a particularly strong determinant of cardiovascular risk in those with a BMI of 25 to 34.9 kg/m2. Increased waist circumference can also be a marker of increased risk even in persons of normal weight. The technique for measuring waist circumference is described in the text. A nutrition assessment will also help to assess the diet and physical activity habits of overweight patients, <b>precondition: </b>, <b>union: </b>, <b>description: </b>The practitioner must seek to determine whether the patient has ever been overweight. While a technical definition is provided, a simple question such as 'Have you ever been overweight?' will accomplish the same goal. Questions directed towards weight history, dietary habits, physical activities, and medications may provide useful information about the origins of obesity in particular patients., <b>condition: </b>, <b>type: </b>, <b>coding: </b>, <b>system: </b>http://acme.org, <b>code: </b>1234, <b>display: </b>Obesity, <b>valueBoolean: </b>true, <b>union: </b>, <b>description: </b>BMI Measured in Past 2 Years  For those who have not been overweight, a 2 year interval is appropriate for the reassessment of BMI. While this time span is not evidence-based, it is believed to be a reasonable compromise between the need to identify weight gain at an early stage and the need to limit the time, effort, and cost of repeated measurements., <b>condition: </b>, <b>type: </b>, <b>text: </b>BMI in last 2 years, <b>valueBoolean: </b>false, <b>activity: </b>, <b>detail: </b>, <b>category: </b>procedure, <b>code: </b>, <b>coding: </b>, <b>system: </b>http://loinc.org, <b>code: </b>39156-5, <b>display: </b>Body mass index (BMI) [Ratio], <b>performer: </b>, <b>display: </b>Nurse Ratched, <b>description: </b>Extra information on activity , </p>\n    </div>",
  },
  contained: [
    {
      resourceType: "ActivityDefinition",
      id: "procedure",
      status: "draft",
      description: "Extra information on activity ",
      kind: "ServiceRequest",
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "39156-5",
            display: "Body mass index (BMI) [Ratio]",
          },
        ],
      },
      participant: [
        {
          type: "practitioner",
          role: {
            coding: [
              {
                system:
                  "http://terminology.hl7.org/CodeSystem/practitioner-role",
                code: "doctor",
                display: "Doctor",
              },
            ],
          },
        },
      ],
    },
  ],
  identifier: [
    {
      system: "http://acme.org",
      value: "example-1",
    },
  ],
  title: "Obesity Assessment Protocol",
  type: {
    coding: [
      {
        code: "clinical-protocol",
      },
    ],
  },
  status: "draft",
  useContext: [
    {
      code: {
        code: "focus",
      },
      valueCodeableConcept: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "414916001",
            display: "Obesity (disorder)",
          },
        ],
      },
    },
  ],
  purpose:
    "Example of A medical algorithm for assessment and treatment of overweight and obesity",
  author: [
    {
      name: "National Heart, Lung, and Blood Institute",
      telecom: [
        {
          system: "url",
          value: "https://www.nhlbi.nih.gov/health-pro/guidelines",
        },
      ],
    },
  ],
  relatedArtifact: [
    {
      type: "derived-from",
      display: "Overweight and Obesity Treatment Guidelines",
      url: "http://www.nhlbi.nih.gov/health-pro/guidelines/current/obesity-guidelines/e_textbook/txgd/algorthm/algorthm.htm",
    },
  ],
  goal: [
    {
      id: "reduce-bmi-ratio",
      category: {
        text: "Treatment",
      },
      description: {
        text: "Reduce BMI to below 25",
      },
      priority: {
        text: "medium-priority",
      },
      start: {
        text: "When the patient's BMI Ratio is at or above 25",
      },
      addresses: [
        {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "414916001",
              display: "Obesity (disorder)",
            },
          ],
        },
      ],
      documentation: [
        {
          type: "justification",
          display: "Evaluation and Treatment Strategy",
          url: "https://www.nhlbi.nih.gov/health-pro/guidelines/current/obesity-guidelines/e_textbook/txgd/42.htm",
        },
      ],
      target: [
        {
          measure: {
            coding: [
              {
                system: "http://loinc.org",
                code: "39156-5",
                display: "Body mass index (BMI) [Ratio]",
              },
            ],
          },
          detailRange: {
            high: {
              value: 24.9,
              unit: "kg/m2",
            },
          },
          due: {
            value: 1,
            unit: "a",
          },
        },
      ],
    },
  ],
  action: [
    {
      title: "Measure BMI",
      description:
        "Measure, Weight, Height, Waist, Circumference; Calculate BMI",
      textEquivalent:
        "Weight must be measured so that the BMI can be calculated. Most charts are based on weights obtained with the patient wearing undergarments and no shoes. BMI can be manually calculated (kg/[height in meters]2), but is more easily obtained from a nomogram. Waist circumference is important because evidence suggests that abdominal fat is a particularly strong determinant of cardiovascular risk in those with a BMI of 25 to 34.9 kg/m2. Increased waist circumference can also be a marker of increased risk even in persons of normal weight. The technique for measuring waist circumference is described in the text. A nutrition assessment will also help to assess the diet and physical activity habits of overweight patients",
      goalId: ["reduce-bmi-ratio"],
      condition: [
        {
          kind: "applicability",
          expression: {
            description:
              "The practitioner must seek to determine whether the patient has ever been overweight. While a technical definition is provided, a simple question such as 'Have you ever been overweight?' will accomplish the same goal. Questions directed towards weight history, dietary habits, physical activities, and medications may provide useful information about the origins of obesity in particular patients.  For those who have not been overweight, a 2 year interval is appropriate for the reassessment of BMI. While this time span is not evidence-based, it is believed to be a reasonable compromise between the need to identify weight gain at an early stage and the need to limit the time, effort, and cost of repeated measurements.",
            language: "text/cql",
            expression:
              "exists ([Condition: Obesity]) or not exists ([Observation: BMI] O where O.effectiveDateTime 2 years or less before Today())",
          },
        },
      ],
      requiredBehavior: "must-unless-documented",
      cardinalityBehavior: "single",
      definitionCanonical: "#procedure",
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

export const PlandefinitionZikaVirusIntervention: PlanDefinition = {
  resourceType: "PlanDefinition",
  id: "zika-virus-intervention",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n         <table class="grid dict">\n            <tr>\n               <td>\n                  <b>Id: </b>\n               </td>\n            </tr>\n            <tr>\n               <td style="padding-left: 25px; padding-right: 25px;">PlanDefinition/zika-virus-intervention</td>\n            </tr>\n         </table>\n         <p/>\n         <table class="grid dict">\n            <tr>\n               <td>\n                  <b>Identifier: </b>\n               </td>\n            </tr>\n            <tr>\n               <td style="padding-left: 25px; padding-right: 25px;">\n                  <b>value: </b>\n                  <span>zika-virus-intervention</span>\n               </td>\n            </tr>\n         </table>\n         <p/>\n         <table class="grid dict">\n            <tr>\n               <td>\n                  <b>Title: </b>\n               </td>\n            </tr>\n            <tr>\n               <td style="padding-left: 25px; padding-right: 25px;">Example Zika Virus Intervention</td>\n            </tr>\n         </table>\n         <p/>\n         <table class="grid dict">\n            <tr>\n               <td>\n                  <b>Status: </b>\n               </td>\n            </tr>\n            <tr>\n               <td style="padding-left: 25px; padding-right: 25px;">active</td>\n            </tr>\n         </table>\n         <p/>\n         <table class="grid dict">\n            <tr>\n               <td>\n                  <b>Description: </b>\n               </td>\n            </tr>\n            <tr>\n               <td style="padding-left: 25px; padding-right: 25px;">Zika Virus Management intervention describing the CDC Guidelines for Zika Virus Reporting and Management.</td>\n            </tr>\n         </table>\n         <p/>\n         <table class="grid dict">\n            <tr>\n               <td>\n                  <b>Topic: </b>\n               </td>\n            </tr>\n            <tr>\n               <td style="padding-left: 25px; padding-right: 25px;">\n                  <span>\n                     <b>text: </b>\n                     <span>Zika Virus Management</span>\n                  </span>\n               </td>\n            </tr>\n         </table>\n         <p/>\n         <table class="grid dict">\n            <tr>\n               <td>\n                  <b>Library: </b>\n               </td>\n            </tr>\n            <tr>\n               <td style="padding-left: 25px; padding-right: 25px;">\n                  <b>reference: </b>\n                  <span>Library/zika-virus-intervention-logic</span>\n               </td>\n            </tr>\n         </table>\n         <p/>\n         <h2>Actions</h2>\n         <p style="width: 100%;" class="hierarchy">\n            <span>\n               <b>Step: </b>\n               <br/>\n               <span style="padding-left: 25px;">\n                  <b>title: </b>\n                  <span>Zika Virus Assessment</span>\n                  <br/>\n               </span>\n               <span style="padding-left: 25px;">\n                  <b>condition: </b>\n                  <br/>\n                  <span style="padding-left: 50px;">\n                     <b>type: </b>\n                     <span>applicability</span>\n                     <br/>\n                  </span>\n                  <span style="padding-left: 50px;">\n                     <b>expression: </b>\n                     <span>Is Patient Pregnant</span>\n                     <br/>\n                  </span>\n               </span>\n               <span style="padding-left: 25px;">\n                  <span>\n                     <b>Step: </b>\n                     <br/>\n                     <span style="padding-left: 50px;">\n                        <b>condition: </b>\n                        <br/>\n                        <span style="padding-left: 75px;">\n                           <b>type: </b>\n                           <span>applicability</span>\n                           <br/>\n                        </span>\n                        <span style="padding-left: 75px;">\n                           <b>expression: </b>\n                           <span>Should Administer Zika Virus Exposure Assessment</span>\n                           <br/>\n                        </span>\n                     </span>\n                     <span style="padding-left: 50px;">\n                        <b>condition: </b>\n                        <br/>\n                        <span style="padding-left: 75px;">\n                           <b>reference: </b>\n                           <br/>\n                           <span style="padding-left: 100px;">#administer-zika-virus-exposure-assessment</span>\n                           <br/>\n                           <span>\n\t\t\t\t\t\t\t <span style="padding-left: 75px;">\n\t\t\t\t\t\t\t\t<b>description: </b>\n\t\t\t\t\t\t\t\t<span>Administer Zika Virus Exposure Assessment</span>\n\t\t\t\t\t\t\t\t<br/>\n\t\t\t\t\t\t\t </span>\n\t\t\t\t\t\t\t <span style="padding-left: 75px;">\n\t\t\t\t\t\t\t\t<b>category: </b>\n\t\t\t\t\t\t\t\t<span>procedure</span>\n\t\t\t\t\t\t\t\t<br/>\n\t\t\t\t\t\t\t </span>\n                           </span>\n                        </span>\n                     </span>\n                     <span style="padding-left: 50px;"/>\n                  </span>\n                  <span>\n                     <b>Step: </b>\n                     <br/>\n                     <span style="padding-left: 75px;">\n                        <b>condition: </b>\n                        <br/>\n                        <span style="padding-left: 100px;">\n                           <b>type: </b>\n                           <span>applicability</span>\n                           <br/>\n                        </span>\n                        <span style="padding-left: 100px;">\n                           <b>expression: </b>\n                           <span>Should Order Serum + Urine rRT-PCR Test</span>\n                           <br/>\n                        </span>\n                     </span>\n                     <span style="padding-left: 75px;">\n                        <b>condition: </b>\n                        <br/>\n                        <span style="padding-left: 100px;">\n                           <b>reference: </b>\n                           <br/>\n                           <span style="padding-left: 125px;">ActivityDefinition/order-serum-urine-rrt-pcr-test</span>\n                           <br/>\n                        </span>\n                     </span>\n                     <span style="padding-left: 50px;"/>\n                  </span>\n                  <span>\n                     <b>Step: </b>\n                     <br/>\n                     <span style="padding-left: 75px;">\n                        <b>condition: </b>\n                        <br/>\n                        <span style="padding-left: 100px;">\n                           <b>type: </b>\n                           <span>applicability</span>\n                           <br/>\n                        </span>\n                        <span style="padding-left: 100px;">\n                           <b>expression: </b>\n                           <span>Should Order Serum Zika Virus IgM + Dengue Virus IgM</span>\n                           <br/>\n                        </span>\n                     </span>\n                     <span style="padding-left: 75px;">\n                        <b>condition: </b>\n                        <br/>\n                        <span style="padding-left: 100px;">\n                           <b>reference: </b>\n                           <br/>\n                           <span style="padding-left: 125px;">#order-serum-zika-dengue-virus-igm</span>\n                           <br/>\n                           <span>\n                              <span style="padding-left: 50px;">\n                                 <span style="padding-left: 50px;">\n                                    <b>description: </b>\n                                    <span>Order Serum Zika and Dengue Virus IgM</span>\n                                    <br/>\n                                 </span>\n                                 <span style="padding-left: 75px;">\n                                    <b>related:</b>\n                                    <br/>\n                                    <span style="padding-left: 100px;">\n                                       <b>type: </b>\n                                       <span>documentation</span>\n                                       <br/>\n                                    </span>\n                                    <span style="padding-left: 100px;">\n                                       <b>display: </b>\n                                       <span>Explanation of diagnostic tests for Zika virus and which to use based on the patients clinical and exposure history.</span>\n                                       <br/>\n                                    </span>\n                                 </span>\n                                 <span style="padding-left: 100px;">\n                                    <b>category: </b>\n                                    <span>diagnostic</span>\n                                    <br/>\n                                 </span>\n                              </span>\n                           </span>\n                           <span/>\n                        </span>\n                     </span>\n                     <span style="padding-left: 50px;"/>\n                  </span>\n                  <span>\n                     <b>Step: </b>\n                     <br/>\n                     <span style="padding-left: 75px;">\n                        <b>condition: </b>\n                        <br/>\n                        <span style="padding-left: 100px;">\n                           <b>type: </b>\n                           <span>applicability</span>\n                           <br/>\n                        </span>\n                        <span style="padding-left: 100px;">\n                           <b>expression: </b>\n                           <span>Should Consider IgM Antibody Testing</span>\n                           <br/>\n                        </span>\n                     </span>\n                     <span style="padding-left: 75px;">\n                        <b>condition: </b>\n                        <br/>\n                        <span style="padding-left: 100px;">\n                           <b>reference: </b>\n                           <br/>\n                           <span style="padding-left: 125px;">ActivityDefinition/consider-igm-antibody-testing</span>\n                           <br/>\n                        </span>\n                     </span>\n                     <span style="padding-left: 50px;"/>\n                  </span>\n                  <span>\n                     <b>Step: </b>\n                     <br/>\n                     <span style="padding-left: 75px;">\n                        <b>condition: </b>\n                        <br/>\n                        <span style="padding-left: 100px;">\n                           <b>type: </b>\n                           <span>applicability</span>\n                           <br/>\n                        </span>\n                        <span style="padding-left: 100px;">\n                           <b>expression: </b>\n                           <span>Should Provide Mosquito Prevention and Contraception Advice</span>\n                           <br/>\n                        </span>\n                     </span>\n                     <span style="padding-left: 50px;">\n                        <span>\n                           <b>Step: </b>\n                           <br/>\n                           <span style="padding-left: 75px;">\n                              <b>condition: </b>\n                              <br/>\n                              <span style="padding-left: 100px;">\n                                 <b>reference: </b>\n                                 <br/>\n                                 <span style="padding-left: 125px;">#provide-mosquito-prevention-advice</span>\n                                 <span>\n                                    <span style="padding-left: 75px;">\n                                       <br/>\n                                       <span style="padding-left: 100px;">\n                                          <b>description: </b>\n                                          <span>Provide mosquito prevention advice</span>\n                                          <br/>\n                                       </span>\n                                       <span style="padding-left: 75px;">\n                                          <b>related:</b>\n                                          <br/>\n                                          <span style="padding-left: 100px;">\n                                             <b>type: </b>\n                                             <span>documentation</span>\n                                             <br/>\n                                          </span>\n                                          <span style="padding-left: 100px;">\n                                             <b>display: </b>\n                                             <span>Advice for patients about how to avoid Mosquito bites.</span>\n                                             <br/>\n                                          </span>\n                                       </span>\n                                       <span style="padding-left: 75px;">\n                                          <b>related:</b>\n                                          <br/>\n                                          <span style="padding-left: 100px;">\n                                             <b>type: </b>\n                                             <span>documentation</span>\n                                             <br/>\n                                          </span>\n                                          <span style="padding-left: 100px;">\n                                             <b>display: </b>\n                                             <span>Advice for patients about which mosquito repellents are effective and safe to use in pregnancy. [DEET, IF3535 and Picardin are safe during]</span>\n                                             <br/>\n                                          </span>\n                                       </span>\n                                       <span style="padding-left: 100px;">\n                                          <b>category: </b>\n                                          <span>communication</span>\n                                          <br/>\n                                       </span>\n                                    </span>\n                                 </span>\n                              </span>\n                           </span>\n                           <span style="padding-left: 75px;"/>\n                        </span>\n                        <span>\n                           <b>Step: </b>\n                           <br/>\n                           <span style="padding-left: 75px;">\n                              <b>condition: </b>\n                              <br/>\n                              <span style="padding-left: 100px;">\n                                 <b>reference: </b>\n                                 <br/>\n                                 <span style="padding-left: 125px;">ActivityDefinition/provide-contraception-advice</span>\n                                 <br/>\n                              </span>\n                           </span>\n                        </span>\n                     </span>\n                  </span>\n               </span>\n            </span>\n         </p>\n      </div>',
  },
  url: "http://example.org/PlanDefinition/zika-virus-intervention",
  identifier: [
    {
      use: "official",
      value: "zika-virus-intervention",
    },
  ],
  version: "2.0.0",
  title: "Example Zika Virus Intervention",
  status: "active",
  date: "2017-01-12",
  description:
    "Zika Virus Management intervention describing the CDC Guidelines for Zika Virus Reporting and Management.",
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
  topic: [
    {
      text: "Zika Virus Management",
    },
  ],
  relatedArtifact: [
    {
      type: "derived-from",
      url: "https://www.cdc.gov/mmwr/volumes/65/wr/mm6539e1.htm?s_cid=mm6539e1_w",
    },
    {
      type: "predecessor",
      resource: "PlanDefinition/zika-virus-intervention-initial",
    },
  ],
  library: ["Library/zika-virus-intervention-logic"],
  action: [
    {
      title: "Zika Virus Assessment",
      trigger: [
        {
          type: "named-event",
          name: "patient-view",
        },
      ],
      condition: [
        {
          kind: "applicability",
          expression: {
            language: "text/cql",
            expression: "Is Patient Pregnant",
          },
        },
      ],
      action: [
        {
          condition: [
            {
              kind: "applicability",
              expression: {
                language: "text/cql",
                expression: "Should Administer Zika Virus Exposure Assessment",
              },
            },
          ],
          definitionCanonical:
            "ActivityDefinition/administer-zika-virus-exposure-assessment",
        },
        {
          condition: [
            {
              kind: "applicability",
              expression: {
                language: "text/cql",
                expression: "Should Order Serum + Urine rRT-PCR Test",
              },
            },
          ],
          definitionCanonical:
            "ActivityDefinition/order-serum-urine-rrt-pcr-test",
        },
        {
          condition: [
            {
              kind: "applicability",
              expression: {
                language: "text/cql",
                expression:
                  "Should Order Serum Zika Virus IgM + Dengue Virus IgM",
              },
            },
          ],
          definitionCanonical:
            "ActivityDefinition/order-serum-zika-dengue-virus-igm",
        },
        {
          condition: [
            {
              kind: "applicability",
              expression: {
                language: "text/cql",
                expression: "Should Consider IgM Antibody Testing",
              },
            },
          ],
          definitionCanonical:
            "ActivityDefinition/consider-igm-antibody-testing",
        },
        {
          condition: [
            {
              kind: "applicability",
              expression: {
                language: "text/cql",
                expression:
                  "Should Provide Mosquito Prevention and Contraception Advice",
              },
            },
          ],
          action: [
            {
              definitionCanonical:
                "ActivityDefinition/provide-mosquito-prevention-advice",
            },
            {
              definitionCanonical:
                "ActivityDefinition/provide-contraception-advice",
            },
          ],
        },
      ],
    },
  ],
} as const;
