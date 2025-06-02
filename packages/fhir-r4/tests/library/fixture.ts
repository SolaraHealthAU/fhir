import type { Library } from "../../src/v4.0.1/library/types";

export const LibraryCompositionExample: Library = {
  resourceType: "Library",
  id: "composition-example",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">Example of a library used as a composition of other artifacts.\n    </div>',
  },
  identifier: [
    {
      use: "official",
      system: "http://example.org",
      value: "Zika Artifacts",
    },
  ],
  version: "1.0.0",
  title: "Zika Artifacts",
  status: "draft",
  type: {
    coding: [
      {
        code: "asset-collection",
      },
    ],
  },
  date: "2017-03-10",
  description: "Artifacts required for implementation of Zika Virus Management",
  topic: [
    {
      text: "Zika Virus Management",
    },
  ],
  relatedArtifact: [
    {
      type: "composed-of",
      resource: "ActivityDefinition/administer-zika-virus-exposure-assessment",
    },
    {
      type: "composed-of",
      resource: "ActivityDefinition/order-serum-zika-dengue-virus-igm",
    },
    {
      type: "composed-of",
      resource: "ActivityDefinition/provide-mosquito-prevention-advice",
    },
    {
      type: "composed-of",
      resource: "Library/zika-virus-intervention-logic",
    },
    {
      type: "composed-of",
      resource: "PlanDefinition/zika-virus-intervention",
    },
    {
      type: "composed-of",
      resource: "Questionnaire/zika-virus-exposure-assessment",
    },
    {
      type: "derived-from",
      url: "https://www.cdc.gov/mmwr/volumes/65/wr/mm6539e1.htm?s_cid=mm6539e1_w",
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

export const LibraryExclusiveBreastfeedingCdsLogic: Library = {
  resourceType: "Library",
  id: "library-exclusive-breastfeeding-cds-logic",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n         <table class="grid dict">\n            <tr>\n               <td>\n                  <b>Id: </b>\n               </td>\n            </tr>\n            <tr>\n               <td style="padding-left: 25px; padding-right: 25px;">Library/library-exclusive-breastfeeding-cds-logic</td>\n            </tr>\n         </table>\n         <table class="grid dict">\n            <tr>\n               <td>\n                  <b>Identifier: </b>\n               </td>\n            </tr>\n            <tr>\n               <td style="padding-left: 25px; padding-right: 25px;">\n                  <b>value: </b>\n                  <span>Exclusive_Breastfeeding_CDS_Logic</span>\n               </td>\n            </tr>\n         </table>\n         <p/>\n         <table class="grid dict">\n            <tr>\n               <td>\n                  <b>Version: </b>\n               </td>\n            </tr>\n            <tr>\n               <td style="padding-left: 25px; padding-right: 25px;">1.0.0</td>\n            </tr>\n         </table>\n         <p/>\n         <table class="grid dict">\n            <tr>\n               <td>\n                  <b>Title: </b>\n               </td>\n            </tr>\n            <tr>\n               <td style="padding-left: 25px; padding-right: 25px;">Exclusive Breastfeeding CDS Logic</td>\n            </tr>\n         </table>\n         <p/>\n         <table class="grid dict">\n            <tr>\n               <td>\n                  <b>Type: </b>\n               </td>\n            </tr>\n            <tr>\n               <td style="padding-right: 25px;">\n                  <span>\n                     <span>\n                        <span style="padding-left: 25px;">\n                           <b>code: </b>\n                           <span>logic-library</span>\n                        </span>\n                     </span>\n                  </span>\n               </td>\n            </tr>\n         </table>\n         <p/>\n         <table class="grid dict">\n            <tr>\n               <td>\n                  <b>Status: </b>\n               </td>\n            </tr>\n            <tr>\n               <td style="padding-left: 25px; padding-right: 25px;">active</td>\n            </tr>\n         </table>\n         <p/>\n         <table class="grid dict">\n            <tr>\n               <td>\n                  <b>Description: </b>\n               </td>\n            </tr>\n            <tr>\n               <td style="padding-left: 25px; padding-right: 25px;">Decision support logic for improving outcomes for exclusive breastmilk feeding of newborns</td>\n            </tr>\n         </table>\n         <p/>\n         <table class="grid dict">\n            <tr>\n               <td>\n                  <b>Topic: </b>\n               </td>\n            </tr>\n            <tr>\n               <td style="padding-right: 25px;">\n                  <span style="padding-left: 25px;">\n                     <b>text: </b>\n                     <span>Exclusive Breastfeeding</span>\n                  </span>\n               </td>\n            </tr>\n         </table>\n         <p/>\n         <table class="grid dict">\n            <tr>\n               <td>\n                  <b>Related: </b>\n               </td>\n            </tr>\n            <tr style="vertical-align: top;">\n               <td style="padding-left: 25px; padding-right: 25px;">\n                  <p style="margin-bottom: 5px;">\n                     <b>type: </b>\n                     <span>depends-on</span>\n                  </p>\n                  <p style="margin-bottom: 5px;">\n                     <b>Resource: </b>\n                     <br/>\n                     <span>\n                        <span style="padding-left: 25px;">\n                           <b>reference: </b>\n                           <span>Library/library-quick-model-definition</span>\n                        </span>\n                     </span>\n                  </p>\n               </td>\n            </tr>\n         </table>\n         <table class="grid dict">\n            <tr>\n               <td>\n                  <b>Data Requirements: </b>\n               </td>\n            </tr>\n            <tr>\n               <td style="padding-left: 25px; padding-right: 25px;">\n                  <div>\n                     <p style="margin-bottom: 5px;">\n                        <b>type: </b>\n                        <span>Condition</span>\n                     </p>\n                     <p style="margin-bottom: 5px;">\n                        <b>code filter:</b>\n                        <br/>\n                        <span style="padding-left: 25px;">\n                           <b>path: </b>\n                           <span>code</span>\n                        </span>\n                        <br/>\n                        <span style="padding-left: 25px;">\n                           <b>valueset: </b>\n                           <span>Single Live Birth</span>\n                        </span>\n                     </p>\n                  </div>\n               </td>\n            </tr>\n         </table>\n         <table class="grid dict">\n            <tr>\n               <td>\n                  <b>Content: </b>\n               </td>\n            </tr>\n            <tr>\n               <td style="padding-left: 25px; padding-right: 25px;">\n                  <p style="margin-bottom: 5px;">\n                     <b>type: </b>\n                     <span>text/cql</span>\n                  </p>\n                  <p style="margin-bottom: 5px;">\n                     <b>url: </b>\n                     <span>http://cqlrepository.org/CMS9v4_CDS.cql</span>\n                  </p>\n               </td>\n            </tr>\n         </table>\n      </div>',
  },
  identifier: [
    {
      use: "official",
      value: "Exclusive_Breastfeeding_CDS_Logic",
    },
  ],
  version: "1.0.0",
  title: "Exclusive Breastfeeding CDS Logic",
  status: "active",
  experimental: true,
  type: {
    coding: [
      {
        code: "logic-library",
      },
    ],
  },
  date: "2016-03-08",
  description:
    "Decision support logic for improving outcomes for exclusive breastmilk feeding of newborns",
  topic: [
    {
      text: "Exclusive Breastfeeding",
    },
  ],
  relatedArtifact: [
    {
      type: "depends-on",
      resource: "Library/library-quick-model-definition",
    },
    {
      type: "derived-from",
      resource: "Measure/measure-exclusive-breastfeeding",
    },
  ],
  dataRequirement: [
    {
      type: "Condition",
      codeFilter: [
        {
          path: "code",
          valueSet: "urn:oid:2.16.840.1.113883.3.117.1.7.1.25",
        },
      ],
    },
  ],
  content: [
    {
      contentType: "text/cql",
      url: "http://cqlrepository.org/CMS9v4_CDS.cql",
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

export const LibraryExclusiveBreastfeedingCqmLogic: Library = {
  resourceType: "Library",
  id: "library-exclusive-breastfeeding-cqm-logic",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n         <table class="grid dict">\n            <tr>\n               <td>\n                  <b>Id: </b>\n               </td>\n            </tr>\n            <tr>\n               <td style="padding-left: 25px; padding-right: 25px;">Library/library-exclusive-breastfeeding-cqm-logic</td>\n            </tr>\n         </table>\n         <table class="grid dict">\n            <tr>\n               <td>\n                  <b>Identifier: </b>\n               </td>\n            </tr>\n            <tr>\n               <td style="padding-left: 25px; padding-right: 25px;">\n                  <b>value: </b>\n                  <span>Exclusive_Breastfeeding_CQM_Logic</span>\n               </td>\n            </tr>\n         </table>\n         <p/>\n         <table class="grid dict">\n            <tr>\n               <td>\n                  <b>Version: </b>\n               </td>\n            </tr>\n            <tr>\n               <td style="padding-left: 25px; padding-right: 25px;">1.0.0</td>\n            </tr>\n         </table>\n         <p/>\n         <table class="grid dict">\n            <tr>\n               <td>\n                  <b>Title: </b>\n               </td>\n            </tr>\n            <tr>\n               <td style="padding-left: 25px; padding-right: 25px;">Exclusive Breastfeeding CQM Logic</td>\n            </tr>\n         </table>\n         <p/>\n         <table class="grid dict">\n            <tr>\n               <td>\n                  <b>Type: </b>\n               </td>\n            </tr>\n            <tr>\n               <td style="padding-right: 25px;">\n                  <span>\n                     <span>\n                        <span style="padding-left: 25px;">\n                           <b>code: </b>\n                           <span>logic-library</span>\n                        </span>\n                     </span>\n                  </span>\n               </td>\n            </tr>\n         </table>\n         <p/>\n         <table class="grid dict">\n            <tr>\n               <td>\n                  <b>Status: </b>\n               </td>\n            </tr>\n            <tr>\n               <td style="padding-left: 25px; padding-right: 25px;">active</td>\n            </tr>\n         </table>\n         <p/>\n         <table class="grid dict">\n            <tr>\n               <td>\n                  <b>Description: </b>\n               </td>\n            </tr>\n            <tr>\n               <td style="padding-left: 25px; padding-right: 25px;">Quality measure logic for measuring outcomes for exclusive breastmilk feeding of newborns</td>\n            </tr>\n         </table>\n         <p/>\n         <table class="grid dict">\n            <tr>\n               <td>\n                  <b>Topic: </b>\n               </td>\n            </tr>\n            <tr>\n               <td style="padding-right: 25px;">\n                  <span style="padding-left: 25px;">\n                     <b>text: </b>\n                     <span>Exclusive Breastfeeding</span>\n                  </span>\n               </td>\n            </tr>\n         </table>\n         <p/>\n         <table class="grid dict">\n            <tr>\n               <td>\n                  <b>Related: </b>\n               </td>\n            </tr>\n            <tr style="vertical-align: top;">\n               <td style="padding-left: 25px; padding-right: 25px;">\n                  <p style="margin-bottom: 5px;">\n                     <b>type: </b>\n                     <span>depends-on</span>\n                  </p>\n                  <p style="margin-bottom: 5px;">\n                     <b>Resource: </b>\n                     <br/>\n                     <span>\n                        <span style="padding-left: 25px;">\n                           <b>reference: </b>\n                           <span>Library/library-quick-model-definition</span>\n                        </span>\n                     </span>\n                  </p>\n               </td>\n            </tr>\n         </table>\n         <table class="grid dict">\n            <tr>\n               <td>\n                  <b>Data Requirements: </b>\n               </td>\n            </tr>\n            <tr>\n               <td style="padding-left: 25px; padding-right: 25px;">\n                  <div>\n                     <p style="margin-bottom: 5px;">\n                        <b>type: </b>\n                        <span>Condition</span>\n                     </p>\n                     <p style="margin-bottom: 5px;">\n                        <b>code filter:</b>\n                        <br/>\n                        <span style="padding-left: 25px;">\n                           <b>path: </b>\n                           <span>code</span>\n                        </span>\n                        <br/>\n                        <span style="padding-left: 25px;">\n                           <b>valueset: </b>\n                           <span>Single Live Birth</span>\n                        </span>\n                     </p>\n                  </div>\n               </td>\n            </tr>\n         </table>\n         <table class="grid dict">\n            <tr>\n               <td>\n                  <b>Content: </b>\n               </td>\n            </tr>\n            <tr>\n               <td style="padding-left: 25px; padding-right: 25px;">\n                  <p style="margin-bottom: 5px;">\n                     <b>type: </b>\n                     <span>text/cql</span>\n                  </p>\n                  <p style="margin-bottom: 5px;">\n                     <b>url: </b>\n                     <span>http://cqlrepository.org/CMS9v4_CQM.cql</span>\n                  </p>\n               </td>\n            </tr>\n         </table>\n      </div>',
  },
  identifier: [
    {
      use: "official",
      value: "Exclusive_Breastfeeding_CQM_Logic",
    },
  ],
  version: "1.0.0",
  title: "Exclusive Breastfeeding CQM Logic",
  status: "active",
  experimental: true,
  type: {
    coding: [
      {
        code: "logic-library",
      },
    ],
  },
  date: "2016-03-08",
  description:
    "Quality measure logic for measuring outcomes for exclusive breastmilk feeding of newborns",
  topic: [
    {
      text: "Exclusive Breastfeeding",
    },
  ],
  relatedArtifact: [
    {
      type: "depends-on",
      resource: "Library/library-quick-model-definition",
    },
  ],
  dataRequirement: [
    {
      type: "Condition",
      codeFilter: [
        {
          path: "code",
          valueSet: "urn:oid:2.16.840.1.113883.3.117.1.7.1.25",
        },
      ],
    },
  ],
  content: [
    {
      contentType: "text/cql",
      url: "http://cqlrepository.org/CMS9v4_CQM.cql",
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

export const LibraryOpioidcdsCommon: Library = {
  resourceType: "Library",
  id: "opioidcds-common",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: opioidcds-common</p><p><b>identifier</b>: OpioidCDS_Common (OFFICIAL)</p><p><b>version</b>: 0.1.0</p><p><b>title</b>: Opioid CDS Common Logic</p><p><b>status</b>: active</p><p><b>experimental</b>: false</p><p><b>type</b>: Logic Library <span>(Details : {http://terminology.hl7.org/CodeSystem/library-type code 'logic-library' = 'Logic Library', given as 'Logic Library'})</span></p><p><b>date</b>: 25/03/2018 1:49:09 PM</p><p><b>publisher</b>: Centers for Disease Control and Prevention (CDC)</p><p><b>description</b>: Common Opioid Decision Support Logic for use in implementing CDC Opioid Prescribing Guidelines.</p><p><b>useContext</b>: , </p><p><b>jurisdiction</b>: United States of America <span>(Details : {urn:iso:std:iso:3166 code 'US' = 'United States of America', given as 'United States of America'})</span></p><p><b>purpose</b>: This library contains common logic across recommendations including MME calculations, conversions, and looking up codes in valuesets.</p><p><b>usage</b>: This library is used for decision support for opioid guideline recommendations when applying PlanDefinitions.</p><p><b>copyright</b>: © CDC 2016+.</p><p><b>topic</b>: Opioid Prescribing <span>(Details )</span></p><p><b>author</b>: , , , </p><p><b>relatedArtifact</b>: , , </p><p><b>content</b>: </p></div>",
  },
  identifier: [
    {
      use: "official",
      value: "OpioidCDS_Common",
    },
  ],
  version: "0.1.0",
  title: "Opioid CDS Common Logic",
  status: "active",
  experimental: false,
  type: {
    coding: [
      {
        system: "http://terminology.hl7.org/CodeSystem/library-type",
        code: "logic-library",
        display: "Logic Library",
      },
    ],
  },
  date: "2018-03-25T13:49:09-06:00",
  publisher: "Centers for Disease Control and Prevention (CDC)",
  description:
    "Common Opioid Decision Support Logic for use in implementing CDC Opioid Prescribing Guidelines.",
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
    "This library contains common logic across recommendations including MME calculations, conversions, and looking up codes in valuesets.",
  usage:
    "This library is used for decision support for opioid guideline recommendations when applying PlanDefinitions.",
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
      type: "depends-on",
      resource: "Library/omtk-logic",
    },
    {
      type: "documentation",
      display: "MME Conversion Tables",
      url: "https://www.cdc.gov/drugoverdose/pdf/calculating_total_daily_dose-a.pdf",
    },
  ],
  content: [
    {
      contentType: "application/elm+xml",
      data: "PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPGxpYnJhcnkgeG1sbnM9InVybjpobDctb3JnOmVsbTpyMSIgeG1sbnM6dD0idXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxIiB4bWxuczp4c2k9Imh0dHA6Ly93d3cudzMub3JnLzIwMDEvWE1MU2NoZW1hLWluc3RhbmNlIiB4bWxuczp4c2Q9Imh0dHA6Ly93d3cudzMub3JnLzIwMDEvWE1MU2NoZW1hIiB4bWxuczpmaGlyPSJodHRwOi8vaGw3Lm9yZy9maGlyIiB4bWxuczpxZG00Mz0idXJuOmhlYWx0aGl0LWdvdjpxZG06djRfMyIgeG1sbnM6cWRtNTM9InVybjpoZWFsdGhpdC1nb3Y6cWRtOnY1XzMiIHhtbG5zOmE9InVybjpobDctb3JnOmNxbC1hbm5vdGF0aW9uczpyMSI+CiAgIDxpZGVudGlmaWVyIGlkPSJPcGlvaWRDRFNfU1RVNF9Db21tb24iIHZlcnNpb249IjAuMS4wIi8+CiAgIDxzY2hlbWFJZGVudGlmaWVyIGlkPSJ1cm46aGw3LW9yZzplbG0iIHZlcnNpb249InIxIi8+CiAgIDx1c2luZ3M+CiAgICAgIDxkZWYgbG9jYWxJZGVudGlmaWVyPSJTeXN0ZW0iIHVyaT0idXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxIi8+CiAgICAgIDxkZWYgbG9jYWxJZGVudGlmaWVyPSJGSElSIiB1cmk9Imh0dHA6Ly9obDcub3JnL2ZoaXIiIHZlcnNpb249IjMuMi4wIi8+CiAgIDwvdXNpbmdzPgogICA8aW5jbHVkZXM+CiAgICAgIDxkZWYgbG9jYWxJZGVudGlmaWVyPSJPTVRLTG9naWMiIHBhdGg9Ik9NVEtMb2dpYyIgdmVyc2lvbj0iMC4xLjAiLz4KICAgPC9pbmNsdWRlcz4KICAgPHZhbHVlU2V0cz4KICAgICAgPGRlZiBuYW1lPSJCZW56b2RpYXplcGluZXMiIGlkPSJiZW56b2RpYXplcGluZXMiIGFjY2Vzc0xldmVsPSJQdWJsaWMiLz4KICAgICAgPGRlZiBuYW1lPSJOYWxveG9uZSIgaWQ9Im5hbG94b25lIiBhY2Nlc3NMZXZlbD0iUHVibGljIi8+CiAgICAgIDxkZWYgbmFtZT0iQW1idWxhdG9yeSBBYnVzZSBQb3RlbnRpYWwgT3Bpb2lkcyIgaWQ9Im9waW9pZHMtYWJ1c2VkLWluLWFtYnVsYXRvcnktY2FyZSIgYWNjZXNzTGV2ZWw9IlB1YmxpYyIvPgogICAgICA8ZGVmIG5hbWU9IkVuZCBPZiBMaWZlIE9waW9pZHMiIGlkPSJvcGlvaWRzLWluZGljYXRpbmctZW5kLW9mLWxpZmUiIGFjY2Vzc0xldmVsPSJQdWJsaWMiLz4KICAgICAgPGRlZiBuYW1lPSJMb25nIEFjdGluZyBPcGlvaWRzIiBpZD0ibG9uZy1hY3Rpbmctb3Bpb2lkcyIgYWNjZXNzTGV2ZWw9IlB1YmxpYyIvPgogICAgICA8ZGVmIG5hbWU9IklsbGljaXQgRHJ1ZyBTY3JlZW5pbmciIGlkPSJpbGxpY2l0LWRydWctdXJpbmUtc2NyZWVuaW5nIiBhY2Nlc3NMZXZlbD0iUHVibGljIi8+CiAgICAgIDxkZWYgbmFtZT0iT3Bpb2lkIERydWcgU2NyZWVuaW5nIiBpZD0ib3Bpb2lkLXVyaW5lLXNjcmVlbmluZyIgYWNjZXNzTGV2ZWw9IlB1YmxpYyIvPgogICAgICA8ZGVmIG5hbWU9Ik9waW9pZHMiIGlkPSJvcGlvaWRzIiBhY2Nlc3NMZXZlbD0iUHVibGljIi8+CiAgICAgIDxkZWYgbmFtZT0iQ29kZWluZSBDb3VnaCBNZWRzIiBpZD0ib3Bpb2lkcy1jb2RlaW5lLWNvdWdoLW1lZHMiIGFjY2Vzc0xldmVsPSJQdWJsaWMiLz4KICAgICAgPGRlZiBuYW1lPSJTaG9ydCBBY3RpbmcgT3Bpb2lkcyIgaWQ9InNob3J0LWFjdGluZy1vcGlvaWRzIiBhY2Nlc3NMZXZlbD0iUHVibGljIi8+CiAgIDwvdmFsdWVTZXRzPgogICA8c3RhdGVtZW50cz4KICAgICAgPGRlZiBuYW1lPSJJc0ZvckNocm9uaWNQYWluIiBjb250ZXh0PSJQYXRpZW50IiBhY2Nlc3NMZXZlbD0iUHVibGljIj4KICAgICAgICAgPGV4cHJlc3Npb24gdmFsdWVUeXBlPSJ0OkJvb2xlYW4iIHZhbHVlPSJ0cnVlIiB4c2k6dHlwZT0iTGl0ZXJhbCIvPgogICAgICA8L2RlZj4KICAgICAgPGRlZiBuYW1lPSJIYXNNZXRhc3RhdGljQ2FuY2VyIiBjb250ZXh0PSJQYXRpZW50IiBhY2Nlc3NMZXZlbD0iUHVibGljIj4KICAgICAgICAgPGV4cHJlc3Npb24gdmFsdWVUeXBlPSJ0OkJvb2xlYW4iIHZhbHVlPSJmYWxzZSIgeHNpOnR5cGU9IkxpdGVyYWwiLz4KICAgICAgPC9kZWY+CiAgICAgIDxkZWYgbmFtZT0iVG9Db2RlIiBjb250ZXh0PSJQYXRpZW50IiBhY2Nlc3NMZXZlbD0iUHVibGljIiB4c2k6dHlwZT0iRnVuY3Rpb25EZWYiPgogICAgICAgICA8ZXhwcmVzc2lvbiBjbGFzc1R5cGU9InQ6Q29kZSIgeHNpOnR5cGU9Ikluc3RhbmNlIj4KICAgICAgICAgICAgPGVsZW1lbnQgbmFtZT0iY29kZSI+CiAgICAgICAgICAgICAgIDx2YWx1ZSBwYXRoPSJ2YWx1ZSIgeHNpOnR5cGU9IlByb3BlcnR5Ij4KICAgICAgICAgICAgICAgICAgPHNvdXJjZSBwYXRoPSJjb2RlIiB4c2k6dHlwZT0iUHJvcGVydHkiPgogICAgICAgICAgICAgICAgICAgICA8c291cmNlIG5hbWU9ImNvZGluZyIgeHNpOnR5cGU9Ik9wZXJhbmRSZWYiLz4KICAgICAgICAgICAgICAgICAgPC9zb3VyY2U+CiAgICAgICAgICAgICAgIDwvdmFsdWU+CiAgICAgICAgICAgIDwvZWxlbWVudD4KICAgICAgICAgICAgPGVsZW1lbnQgbmFtZT0ic3lzdGVtIj4KICAgICAgICAgICAgICAgPHZhbHVlIHBhdGg9InZhbHVlIiB4c2k6dHlwZT0iUHJvcGVydHkiPgogICAgICAgICAgICAgICAgICA8c291cmNlIHBhdGg9InN5c3RlbSIgeHNpOnR5cGU9IlByb3BlcnR5Ij4KICAgICAgICAgICAgICAgICAgICAgPHNvdXJjZSBuYW1lPSJjb2RpbmciIHhzaTp0eXBlPSJPcGVyYW5kUmVmIi8+CiAgICAgICAgICAgICAgICAgIDwvc291cmNlPgogICAgICAgICAgICAgICA8L3ZhbHVlPgogICAgICAgICAgICA8L2VsZW1lbnQ+CiAgICAgICAgICAgIDxlbGVtZW50IG5hbWU9InZlcnNpb24iPgogICAgICAgICAgICAgICA8dmFsdWUgcGF0aD0idmFsdWUiIHhzaTp0eXBlPSJQcm9wZXJ0eSI+CiAgICAgICAgICAgICAgICAgIDxzb3VyY2UgcGF0aD0idmVyc2lvbiIgeHNpOnR5cGU9IlByb3BlcnR5Ij4KICAgICAgICAgICAgICAgICAgICAgPHNvdXJjZSBuYW1lPSJjb2RpbmciIHhzaTp0eXBlPSJPcGVyYW5kUmVmIi8+CiAgICAgICAgICAgICAgICAgIDwvc291cmNlPgogICAgICAgICAgICAgICA8L3ZhbHVlPgogICAgICAgICAgICA8L2VsZW1lbnQ+CiAgICAgICAgICAgIDxlbGVtZW50IG5hbWU9ImRpc3BsYXkiPgogICAgICAgICAgICAgICA8dmFsdWUgcGF0aD0idmFsdWUiIHhzaTp0eXBlPSJQcm9wZXJ0eSI+CiAgICAgICAgICAgICAgICAgIDxzb3VyY2UgcGF0aD0iZGlzcGxheSIgeHNpOnR5cGU9IlByb3BlcnR5Ij4KICAgICAgICAgICAgICAgICAgICAgPHNvdXJjZSBuYW1lPSJjb2RpbmciIHhzaTp0eXBlPSJPcGVyYW5kUmVmIi8+CiAgICAgICAgICAgICAgICAgIDwvc291cmNlPgogICAgICAgICAgICAgICA8L3ZhbHVlPgogICAgICAgICAgICA8L2VsZW1lbnQ+CiAgICAgICAgIDwvZXhwcmVzc2lvbj4KICAgICAgICAgPG9wZXJhbmQgbmFtZT0iY29kaW5nIj4KICAgICAgICAgICAgPG9wZXJhbmRUeXBlU3BlY2lmaWVyIG5hbWU9ImZoaXI6Q29kaW5nIiB4c2k6dHlwZT0iTmFtZWRUeXBlU3BlY2lmaWVyIi8+CiAgICAgICAgIDwvb3BlcmFuZD4KICAgICAgPC9kZWY+CiAgICAgIDxkZWYgbmFtZT0iVG9RdWFudGl0eSIgY29udGV4dD0iUGF0aWVudCIgYWNjZXNzTGV2ZWw9IlB1YmxpYyIgeHNpOnR5cGU9IkZ1bmN0aW9uRGVmIj4KICAgICAgICAgPGV4cHJlc3Npb24gY2xhc3NUeXBlPSJ0OlF1YW50aXR5IiB4c2k6dHlwZT0iSW5zdGFuY2UiPgogICAgICAgICAgICA8ZWxlbWVudCBuYW1lPSJ2YWx1ZSI+CiAgICAgICAgICAgICAgIDx2YWx1ZSBwYXRoPSJ2YWx1ZSIgeHNpOnR5cGU9IlByb3BlcnR5Ij4KICAgICAgICAgICAgICAgICAgPHNvdXJjZSBwYXRoPSJ2YWx1ZSIgeHNpOnR5cGU9IlByb3BlcnR5Ij4KICAgICAgICAgICAgICAgICAgICAgPHNvdXJjZSBuYW1lPSJxdWFudGl0eSIgeHNpOnR5cGU9Ik9wZXJhbmRSZWYiLz4KICAgICAgICAgICAgICAgICAgPC9zb3VyY2U+CiAgICAgICAgICAgICAgIDwvdmFsdWU+CiAgICAgICAgICAgIDwvZWxlbWVudD4KICAgICAgICAgICAgPGVsZW1lbnQgbmFtZT0idW5pdCI+CiAgICAgICAgICAgICAgIDx2YWx1ZSBwYXRoPSJ2YWx1ZSIgeHNpOnR5cGU9IlByb3BlcnR5Ij4KICAgICAgICAgICAgICAgICAgPHNvdXJjZSBwYXRoPSJ1bml0IiB4c2k6dHlwZT0iUHJvcGVydHkiPgogICAgICAgICAgICAgICAgICAgICA8c291cmNlIG5hbWU9InF1YW50aXR5IiB4c2k6dHlwZT0iT3BlcmFuZFJlZiIvPgogICAgICAgICAgICAgICAgICA8L3NvdXJjZT4KICAgICAgICAgICAgICAgPC92YWx1ZT4KICAgICAgICAgICAgPC9lbGVtZW50PgogICAgICAgICA8L2V4cHJlc3Npb24+CiAgICAgICAgIDxvcGVyYW5kIG5hbWU9InF1YW50aXR5Ij4KICAgICAgICAgICAgPG9wZXJhbmRUeXBlU3BlY2lmaWVyIG5hbWU9ImZoaXI6UXVhbnRpdHkiIHhzaTp0eXBlPSJOYW1lZFR5cGVTcGVjaWZpZXIiLz4KICAgICAgICAgPC9vcGVyYW5kPgogICAgICA8L2RlZj4KICAgICAgPGRlZiBuYW1lPSJQcmVzY3JpcHRpb25zIiBjb250ZXh0PSJQYXRpZW50IiBhY2Nlc3NMZXZlbD0iUHVibGljIiB4c2k6dHlwZT0iRnVuY3Rpb25EZWYiPgogICAgICAgICA8ZXhwcmVzc2lvbiB4c2k6dHlwZT0iUXVlcnkiPgogICAgICAgICAgICA8c291cmNlIGFsaWFzPSJPIj4KICAgICAgICAgICAgICAgPGV4cHJlc3Npb24gbmFtZT0iT3JkZXJzIiB4c2k6dHlwZT0iT3BlcmFuZFJlZiIvPgogICAgICAgICAgICA8L3NvdXJjZT4KICAgICAgICAgICAgPGxldCBpZGVudGlmaWVyPSJyeE5vcm1Db2RlIj4KICAgICAgICAgICAgICAgPGV4cHJlc3Npb24gbmFtZT0iVG9Db2RlIiB4c2k6dHlwZT0iRnVuY3Rpb25SZWYiPgogICAgICAgICAgICAgICAgICA8b3BlcmFuZCB4c2k6dHlwZT0iSW5kZXhlciI+CiAgICAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIHBhdGg9ImNvZGluZyIgeHNpOnR5cGU9IlByb3BlcnR5Ij4KICAgICAgICAgICAgICAgICAgICAgICAgPHNvdXJjZSBwYXRoPSJtZWRpY2F0aW9uIiBzY29wZT0iTyIgeHNpOnR5cGU9IlByb3BlcnR5Ii8+CiAgICAgICAgICAgICAgICAgICAgIDwvb3BlcmFuZD4KICAgICAgICAgICAgICAgICAgICAgPG9wZXJhbmQgdmFsdWVUeXBlPSJ0OkludGVnZXIiIHZhbHVlPSIwIiB4c2k6dHlwZT0iTGl0ZXJhbCIvPgogICAgICAgICAgICAgICAgICA8L29wZXJhbmQ+CiAgICAgICAgICAgICAgIDwvZXhwcmVzc2lvbj4KICAgICAgICAgICAgPC9sZXQ+CiAgICAgICAgICAgIDxsZXQgaWRlbnRpZmllcj0ibWVkaWNhdGlvbk5hbWUiPgogICAgICAgICAgICAgICA8ZXhwcmVzc2lvbiBuYW1lPSJHZXRNZWRpY2F0aW9uTmFtZSIgbGlicmFyeU5hbWU9Ik9NVEtMb2dpYyIgeHNpOnR5cGU9IkZ1bmN0aW9uUmVmIj4KICAgICAgICAgICAgICAgICAgPG9wZXJhbmQgbmFtZT0icnhOb3JtQ29kZSIgeHNpOnR5cGU9IlF1ZXJ5TGV0UmVmIi8+CiAgICAgICAgICAgICAgIDwvZXhwcmVzc2lvbj4KICAgICAgICAgICAgPC9sZXQ+CiAgICAgICAgICAgIDxsZXQgaWRlbnRpZmllcj0iZG9zYWdlSW5zdHJ1Y3Rpb24iPgogICAgICAgICAgICAgICA8ZXhwcmVzc2lvbiB4c2k6dHlwZT0iSW5kZXhlciI+CiAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIHBhdGg9ImRvc2FnZUluc3RydWN0aW9uIiBzY29wZT0iTyIgeHNpOnR5cGU9IlByb3BlcnR5Ii8+CiAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIHZhbHVlVHlwZT0idDpJbnRlZ2VyIiB2YWx1ZT0iMCIgeHNpOnR5cGU9IkxpdGVyYWwiLz4KICAgICAgICAgICAgICAgPC9leHByZXNzaW9uPgogICAgICAgICAgICA8L2xldD4KICAgICAgICAgICAgPGxldCBpZGVudGlmaWVyPSJyZXBlYXQiPgogICAgICAgICAgICAgICA8ZXhwcmVzc2lvbiBwYXRoPSJyZXBlYXQiIHhzaTp0eXBlPSJQcm9wZXJ0eSI+CiAgICAgICAgICAgICAgICAgIDxzb3VyY2UgcGF0aD0idGltaW5nIiB4c2k6dHlwZT0iUHJvcGVydHkiPgogICAgICAgICAgICAgICAgICAgICA8c291cmNlIG5hbWU9ImRvc2FnZUluc3RydWN0aW9uIiB4c2k6dHlwZT0iUXVlcnlMZXRSZWYiLz4KICAgICAgICAgICAgICAgICAgPC9zb3VyY2U+CiAgICAgICAgICAgICAgIDwvZXhwcmVzc2lvbj4KICAgICAgICAgICAgPC9sZXQ+CiAgICAgICAgICAgIDxsZXQgaWRlbnRpZmllcj0iZnJlcXVlbmN5Ij4KICAgICAgICAgICAgICAgPGV4cHJlc3Npb24geHNpOnR5cGU9IkNvYWxlc2NlIj4KICAgICAgICAgICAgICAgICAgPG9wZXJhbmQgcGF0aD0idmFsdWUiIHhzaTp0eXBlPSJQcm9wZXJ0eSI+CiAgICAgICAgICAgICAgICAgICAgIDxzb3VyY2UgcGF0aD0iZnJlcXVlbmN5TWF4IiB4c2k6dHlwZT0iUHJvcGVydHkiPgogICAgICAgICAgICAgICAgICAgICAgICA8c291cmNlIG5hbWU9InJlcGVhdCIgeHNpOnR5cGU9IlF1ZXJ5TGV0UmVmIi8+CiAgICAgICAgICAgICAgICAgICAgIDwvc291cmNlPgogICAgICAgICAgICAgICAgICA8L29wZXJhbmQ+CiAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIHBhdGg9InZhbHVlIiB4c2k6dHlwZT0iUHJvcGVydHkiPgogICAgICAgICAgICAgICAgICAgICA8c291cmNlIHBhdGg9ImZyZXF1ZW5jeSIgeHNpOnR5cGU9IlByb3BlcnR5Ij4KICAgICAgICAgICAgICAgICAgICAgICAgPHNvdXJjZSBuYW1lPSJyZXBlYXQiIHhzaTp0eXBlPSJRdWVyeUxldFJlZiIvPgogICAgICAgICAgICAgICAgICAgICA8L3NvdXJjZT4KICAgICAgICAgICAgICAgICAgPC9vcGVyYW5kPgogICAgICAgICAgICAgICA8L2V4cHJlc3Npb24+CiAgICAgICAgICAgIDwvbGV0PgogICAgICAgICAgICA8bGV0IGlkZW50aWZpZXI9InBlcmlvZCI+CiAgICAgICAgICAgICAgIDxleHByZXNzaW9uIGNsYXNzVHlwZT0idDpRdWFudGl0eSIgeHNpOnR5cGU9Ikluc3RhbmNlIj4KICAgICAgICAgICAgICAgICAgPGVsZW1lbnQgbmFtZT0idmFsdWUiPgogICAgICAgICAgICAgICAgICAgICA8dmFsdWUgcGF0aD0idmFsdWUiIHhzaTp0eXBlPSJQcm9wZXJ0eSI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxzb3VyY2UgcGF0aD0icGVyaW9kIiB4c2k6dHlwZT0iUHJvcGVydHkiPgogICAgICAgICAgICAgICAgICAgICAgICAgICA8c291cmNlIG5hbWU9InJlcGVhdCIgeHNpOnR5cGU9IlF1ZXJ5TGV0UmVmIi8+CiAgICAgICAgICAgICAgICAgICAgICAgIDwvc291cmNlPgogICAgICAgICAgICAgICAgICAgICA8L3ZhbHVlPgogICAgICAgICAgICAgICAgICA8L2VsZW1lbnQ+CiAgICAgICAgICAgICAgICAgIDxlbGVtZW50IG5hbWU9InVuaXQiPgogICAgICAgICAgICAgICAgICAgICA8dmFsdWUgcGF0aD0idmFsdWUiIHhzaTp0eXBlPSJQcm9wZXJ0eSI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxzb3VyY2UgcGF0aD0icGVyaW9kVW5pdCIgeHNpOnR5cGU9IlByb3BlcnR5Ij4KICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNvdXJjZSBuYW1lPSJyZXBlYXQiIHhzaTp0eXBlPSJRdWVyeUxldFJlZiIvPgogICAgICAgICAgICAgICAgICAgICAgICA8L3NvdXJjZT4KICAgICAgICAgICAgICAgICAgICAgPC92YWx1ZT4KICAgICAgICAgICAgICAgICAgPC9lbGVtZW50PgogICAgICAgICAgICAgICA8L2V4cHJlc3Npb24+CiAgICAgICAgICAgIDwvbGV0PgogICAgICAgICAgICA8bGV0IGlkZW50aWZpZXI9ImRvc2VEZXNjcmlwdGlvbiI+CiAgICAgICAgICAgICAgIDxleHByZXNzaW9uIHhzaTp0eXBlPSJDb2FsZXNjZSI+CiAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIHhzaTp0eXBlPSJUb0xpc3QiPgogICAgICAgICAgICAgICAgICAgICA8b3BlcmFuZCB4c2k6dHlwZT0iSWYiPgogICAgICAgICAgICAgICAgICAgICAgICA8Y29uZGl0aW9uIGFzVHlwZT0idDpCb29sZWFuIiB4c2k6dHlwZT0iQXMiPgogICAgICAgICAgICAgICAgICAgICAgICAgICA8b3BlcmFuZCB4c2k6dHlwZT0iSXMiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3BlcmFuZCBwYXRoPSJkb3NlIiB4c2k6dHlwZT0iUHJvcGVydHkiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c291cmNlIG5hbWU9ImRvc2FnZUluc3RydWN0aW9uIiB4c2k6dHlwZT0iUXVlcnlMZXRSZWYiLz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9vcGVyYW5kPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aXNUeXBlU3BlY2lmaWVyIG5hbWU9ImZoaXI6UmFuZ2UiIHhzaTp0eXBlPSJOYW1lZFR5cGVTcGVjaWZpZXIiLz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9vcGVyYW5kPgogICAgICAgICAgICAgICAgICAgICAgICA8L2NvbmRpdGlvbj4KICAgICAgICAgICAgICAgICAgICAgICAgPHRoZW4geHNpOnR5cGU9IkNvbmNhdGVuYXRlIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wZXJhbmQgeHNpOnR5cGU9IkNvbmNhdGVuYXRlIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wZXJhbmQgeHNpOnR5cGU9IkNvbmNhdGVuYXRlIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wZXJhbmQgeHNpOnR5cGU9IlRvU3RyaW5nIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wZXJhbmQgbmFtZT0iVG9RdWFudGl0eSIgeHNpOnR5cGU9IkZ1bmN0aW9uUmVmIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wZXJhbmQgcGF0aD0ibG93IiB4c2k6dHlwZT0iUHJvcGVydHkiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c291cmNlIHBhdGg9ImRvc2UiIHhzaTp0eXBlPSJQcm9wZXJ0eSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzb3VyY2UgbmFtZT0iZG9zYWdlSW5zdHJ1Y3Rpb24iIHhzaTp0eXBlPSJRdWVyeUxldFJlZiIvPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NvdXJjZT4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9vcGVyYW5kPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L29wZXJhbmQ+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvb3BlcmFuZD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wZXJhbmQgdmFsdWVUeXBlPSJ0OlN0cmluZyIgdmFsdWU9Ii0iIHhzaTp0eXBlPSJMaXRlcmFsIi8+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvb3BlcmFuZD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wZXJhbmQgeHNpOnR5cGU9IlRvU3RyaW5nIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wZXJhbmQgbmFtZT0iVG9RdWFudGl0eSIgeHNpOnR5cGU9IkZ1bmN0aW9uUmVmIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wZXJhbmQgcGF0aD0iaGlnaCIgeHNpOnR5cGU9IlByb3BlcnR5Ij4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNvdXJjZSBwYXRoPSJkb3NlIiB4c2k6dHlwZT0iUHJvcGVydHkiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c291cmNlIG5hbWU9ImRvc2FnZUluc3RydWN0aW9uIiB4c2k6dHlwZT0iUXVlcnlMZXRSZWYiLz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zb3VyY2U+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvb3BlcmFuZD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9vcGVyYW5kPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L29wZXJhbmQ+CiAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvb3BlcmFuZD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wZXJhbmQgcGF0aD0idmFsdWUiIHhzaTp0eXBlPSJQcm9wZXJ0eSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzb3VyY2UgcGF0aD0idW5pdCIgeHNpOnR5cGU9IlByb3BlcnR5Ij4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNvdXJjZSBwYXRoPSJoaWdoIiB4c2k6dHlwZT0iUHJvcGVydHkiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c291cmNlIHBhdGg9ImRvc2UiIHhzaTp0eXBlPSJQcm9wZXJ0eSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzb3VyY2UgbmFtZT0iZG9zYWdlSW5zdHJ1Y3Rpb24iIHhzaTp0eXBlPSJRdWVyeUxldFJlZiIvPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NvdXJjZT4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zb3VyY2U+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc291cmNlPgogICAgICAgICAgICAgICAgICAgICAgICAgICA8L29wZXJhbmQ+CiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlbj4KICAgICAgICAgICAgICAgICAgICAgICAgPGVsc2UgeHNpOnR5cGU9IlRvU3RyaW5nIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wZXJhbmQgbmFtZT0iVG9RdWFudGl0eSIgeHNpOnR5cGU9IkZ1bmN0aW9uUmVmIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wZXJhbmQgYXNUeXBlPSJmaGlyOlF1YW50aXR5IiB4c2k6dHlwZT0iQXMiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3BlcmFuZCBwYXRoPSJkb3NlIiB4c2k6dHlwZT0iUHJvcGVydHkiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c291cmNlIG5hbWU9ImRvc2FnZUluc3RydWN0aW9uIiB4c2k6dHlwZT0iUXVlcnlMZXRSZWYiLz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9vcGVyYW5kPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L29wZXJhbmQ+CiAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvb3BlcmFuZD4KICAgICAgICAgICAgICAgICAgICAgICAgPC9lbHNlPgogICAgICAgICAgICAgICAgICAgICA8L29wZXJhbmQ+CiAgICAgICAgICAgICAgICAgIDwvb3BlcmFuZD4KICAgICAgICAgICAgICAgPC9leHByZXNzaW9uPgogICAgICAgICAgICA8L2xldD4KICAgICAgICAgICAgPGxldCBpZGVudGlmaWVyPSJmcmVxdWVuY3lEZXNjcmlwdGlvbiI+CiAgICAgICAgICAgICAgIDxleHByZXNzaW9uIHhzaTp0eXBlPSJDb25jYXRlbmF0ZSI+CiAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIHhzaTp0eXBlPSJUb1N0cmluZyI+CiAgICAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIHBhdGg9InZhbHVlIiB4c2k6dHlwZT0iUHJvcGVydHkiPgogICAgICAgICAgICAgICAgICAgICAgICA8c291cmNlIHBhdGg9ImZyZXF1ZW5jeSIgeHNpOnR5cGU9IlByb3BlcnR5Ij4KICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNvdXJjZSBwYXRoPSJyZXBlYXQiIHhzaTp0eXBlPSJQcm9wZXJ0eSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzb3VyY2UgcGF0aD0idGltaW5nIiB4c2k6dHlwZT0iUHJvcGVydHkiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c291cmNlIG5hbWU9ImRvc2FnZUluc3RydWN0aW9uIiB4c2k6dHlwZT0iUXVlcnlMZXRSZWYiLz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zb3VyY2U+CiAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc291cmNlPgogICAgICAgICAgICAgICAgICAgICAgICA8L3NvdXJjZT4KICAgICAgICAgICAgICAgICAgICAgPC9vcGVyYW5kPgogICAgICAgICAgICAgICAgICA8L29wZXJhbmQ+CiAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIHhzaTp0eXBlPSJDb2FsZXNjZSI+CiAgICAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIHhzaTp0eXBlPSJDb25jYXRlbmF0ZSI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIHZhbHVlVHlwZT0idDpTdHJpbmciIHZhbHVlPSItIiB4c2k6dHlwZT0iTGl0ZXJhbCIvPgogICAgICAgICAgICAgICAgICAgICAgICA8b3BlcmFuZCB4c2k6dHlwZT0iVG9TdHJpbmciPgogICAgICAgICAgICAgICAgICAgICAgICAgICA8b3BlcmFuZCBwYXRoPSJ2YWx1ZSIgeHNpOnR5cGU9IlByb3BlcnR5Ij4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNvdXJjZSBwYXRoPSJmcmVxdWVuY3lNYXgiIHhzaTp0eXBlPSJQcm9wZXJ0eSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzb3VyY2UgcGF0aD0icmVwZWF0IiB4c2k6dHlwZT0iUHJvcGVydHkiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c291cmNlIHBhdGg9InRpbWluZyIgeHNpOnR5cGU9IlByb3BlcnR5Ij4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNvdXJjZSBuYW1lPSJkb3NhZ2VJbnN0cnVjdGlvbiIgeHNpOnR5cGU9IlF1ZXJ5TGV0UmVmIi8+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc291cmNlPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NvdXJjZT4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zb3VyY2U+CiAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvb3BlcmFuZD4KICAgICAgICAgICAgICAgICAgICAgICAgPC9vcGVyYW5kPgogICAgICAgICAgICAgICAgICAgICA8L29wZXJhbmQ+CiAgICAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIHZhbHVlVHlwZT0idDpTdHJpbmciIHZhbHVlPSIiIHhzaTp0eXBlPSJMaXRlcmFsIi8+CiAgICAgICAgICAgICAgICAgIDwvb3BlcmFuZD4KICAgICAgICAgICAgICAgPC9leHByZXNzaW9uPgogICAgICAgICAgICA8L2xldD4KICAgICAgICAgICAgPHJldHVybj4KICAgICAgICAgICAgICAgPGV4cHJlc3Npb24geHNpOnR5cGU9IlR1cGxlIj4KICAgICAgICAgICAgICAgICAgPGVsZW1lbnQgbmFtZT0icnhOb3JtQ29kZSI+CiAgICAgICAgICAgICAgICAgICAgIDx2YWx1ZSBuYW1lPSJyeE5vcm1Db2RlIiB4c2k6dHlwZT0iUXVlcnlMZXRSZWYiLz4KICAgICAgICAgICAgICAgICAgPC9lbGVtZW50PgogICAgICAgICAgICAgICAgICA8ZWxlbWVudCBuYW1lPSJpc0RyYWZ0Ij4KICAgICAgICAgICAgICAgICAgICAgPHZhbHVlIHhzaTp0eXBlPSJFcXVhbCI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIHBhdGg9InZhbHVlIiB4c2k6dHlwZT0iUHJvcGVydHkiPgogICAgICAgICAgICAgICAgICAgICAgICAgICA8c291cmNlIHBhdGg9InN0YXR1cyIgc2NvcGU9Ik8iIHhzaTp0eXBlPSJQcm9wZXJ0eSIvPgogICAgICAgICAgICAgICAgICAgICAgICA8L29wZXJhbmQ+CiAgICAgICAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIHZhbHVlVHlwZT0idDpTdHJpbmciIHZhbHVlPSJkcmFmdCIgeHNpOnR5cGU9IkxpdGVyYWwiLz4KICAgICAgICAgICAgICAgICAgICAgPC92YWx1ZT4KICAgICAgICAgICAgICAgICAgPC9lbGVtZW50PgogICAgICAgICAgICAgICAgICA8ZWxlbWVudCBuYW1lPSJpc1BSTiI+CiAgICAgICAgICAgICAgICAgICAgIDx2YWx1ZSBwYXRoPSJ2YWx1ZSIgeHNpOnR5cGU9IlByb3BlcnR5Ij4KICAgICAgICAgICAgICAgICAgICAgICAgPHNvdXJjZSBwYXRoPSJhc05lZWRlZCIgeHNpOnR5cGU9IlByb3BlcnR5Ij4KICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNvdXJjZSBuYW1lPSJkb3NhZ2VJbnN0cnVjdGlvbiIgeHNpOnR5cGU9IlF1ZXJ5TGV0UmVmIi8+CiAgICAgICAgICAgICAgICAgICAgICAgIDwvc291cmNlPgogICAgICAgICAgICAgICAgICAgICA8L3ZhbHVlPgogICAgICAgICAgICAgICAgICA8L2VsZW1lbnQ+CiAgICAgICAgICAgICAgICAgIDxlbGVtZW50IG5hbWU9InByZXNjcmlwdGlvbiI+CiAgICAgICAgICAgICAgICAgICAgIDx2YWx1ZSB4c2k6dHlwZT0iSWYiPgogICAgICAgICAgICAgICAgICAgICAgICA8Y29uZGl0aW9uIGFzVHlwZT0idDpCb29sZWFuIiB4c2k6dHlwZT0iQXMiPgogICAgICAgICAgICAgICAgICAgICAgICAgICA8b3BlcmFuZCB4c2k6dHlwZT0iTm90Ij4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wZXJhbmQgeHNpOnR5cGU9IklzTnVsbCI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIHBhdGg9InRleHQiIHhzaTp0eXBlPSJQcm9wZXJ0eSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzb3VyY2UgbmFtZT0iZG9zYWdlSW5zdHJ1Y3Rpb24iIHhzaTp0eXBlPSJRdWVyeUxldFJlZiIvPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L29wZXJhbmQ+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvb3BlcmFuZD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9vcGVyYW5kPgogICAgICAgICAgICAgICAgICAgICAgICA8L2NvbmRpdGlvbj4KICAgICAgICAgICAgICAgICAgICAgICAgPHRoZW4geHNpOnR5cGU9IkNvbmNhdGVuYXRlIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wZXJhbmQgeHNpOnR5cGU9IkNvbmNhdGVuYXRlIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wZXJhbmQgbmFtZT0ibWVkaWNhdGlvbk5hbWUiIHhzaTp0eXBlPSJRdWVyeUxldFJlZiIvPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3BlcmFuZCB2YWx1ZVR5cGU9InQ6U3RyaW5nIiB2YWx1ZT0iICIgeHNpOnR5cGU9IkxpdGVyYWwiLz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9vcGVyYW5kPgogICAgICAgICAgICAgICAgICAgICAgICAgICA8b3BlcmFuZCBwYXRoPSJ2YWx1ZSIgeHNpOnR5cGU9IlByb3BlcnR5Ij4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNvdXJjZSBwYXRoPSJ0ZXh0IiB4c2k6dHlwZT0iUHJvcGVydHkiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c291cmNlIG5hbWU9ImRvc2FnZUluc3RydWN0aW9uIiB4c2k6dHlwZT0iUXVlcnlMZXRSZWYiLz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zb3VyY2U+CiAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvb3BlcmFuZD4KICAgICAgICAgICAgICAgICAgICAgICAgPC90aGVuPgogICAgICAgICAgICAgICAgICAgICAgICA8ZWxzZSB4c2k6dHlwZT0iQ29uY2F0ZW5hdGUiPgogICAgICAgICAgICAgICAgICAgICAgICAgICA8b3BlcmFuZCB4c2k6dHlwZT0iQ29uY2F0ZW5hdGUiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3BlcmFuZCB4c2k6dHlwZT0iQ29uY2F0ZW5hdGUiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3BlcmFuZCB4c2k6dHlwZT0iQ29uY2F0ZW5hdGUiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3BlcmFuZCB4c2k6dHlwZT0iQ29uY2F0ZW5hdGUiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3BlcmFuZCBuYW1lPSJtZWRpY2F0aW9uTmFtZSIgeHNpOnR5cGU9IlF1ZXJ5TGV0UmVmIi8+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIHZhbHVlVHlwZT0idDpTdHJpbmciIHZhbHVlPSIgIiB4c2k6dHlwZT0iTGl0ZXJhbCIvPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L29wZXJhbmQ+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIG5hbWU9ImRvc2VEZXNjcmlwdGlvbiIgeHNpOnR5cGU9IlF1ZXJ5TGV0UmVmIi8+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvb3BlcmFuZD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wZXJhbmQgdmFsdWVUeXBlPSJ0OlN0cmluZyIgdmFsdWU9IiBxIiB4c2k6dHlwZT0iTGl0ZXJhbCIvPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L29wZXJhbmQ+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIG5hbWU9ImZyZXF1ZW5jeURlc2NyaXB0aW9uIiB4c2k6dHlwZT0iUXVlcnlMZXRSZWYiLz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9vcGVyYW5kPgogICAgICAgICAgICAgICAgICAgICAgICAgICA8b3BlcmFuZCB4c2k6dHlwZT0iSWYiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Y29uZGl0aW9uIGFzVHlwZT0idDpCb29sZWFuIiB4c2k6dHlwZT0iQXMiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3BlcmFuZCBwYXRoPSJ2YWx1ZSIgeHNpOnR5cGU9IlByb3BlcnR5Ij4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNvdXJjZSBwYXRoPSJhc05lZWRlZCIgeHNpOnR5cGU9IlByb3BlcnR5Ij4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNvdXJjZSBuYW1lPSJkb3NhZ2VJbnN0cnVjdGlvbiIgeHNpOnR5cGU9IlF1ZXJ5TGV0UmVmIi8+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc291cmNlPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L29wZXJhbmQ+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvY29uZGl0aW9uPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGhlbiB2YWx1ZVR5cGU9InQ6U3RyaW5nIiB2YWx1ZT0iIFBSTiIgeHNpOnR5cGU9IkxpdGVyYWwiLz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGVsc2UgdmFsdWVUeXBlPSJ0OlN0cmluZyIgdmFsdWU9IiIgeHNpOnR5cGU9IkxpdGVyYWwiLz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9vcGVyYW5kPgogICAgICAgICAgICAgICAgICAgICAgICA8L2Vsc2U+CiAgICAgICAgICAgICAgICAgICAgIDwvdmFsdWU+CiAgICAgICAgICAgICAgICAgIDwvZWxlbWVudD4KICAgICAgICAgICAgICAgICAgPGVsZW1lbnQgbmFtZT0iZG9zZSI+CiAgICAgICAgICAgICAgICAgICAgIDx2YWx1ZSB4c2k6dHlwZT0iSWYiPgogICAgICAgICAgICAgICAgICAgICAgICA8Y29uZGl0aW9uIGFzVHlwZT0idDpCb29sZWFuIiB4c2k6dHlwZT0iQXMiPgogICAgICAgICAgICAgICAgICAgICAgICAgICA8b3BlcmFuZCB4c2k6dHlwZT0iSXMiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3BlcmFuZCBwYXRoPSJkb3NlIiB4c2k6dHlwZT0iUHJvcGVydHkiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c291cmNlIG5hbWU9ImRvc2FnZUluc3RydWN0aW9uIiB4c2k6dHlwZT0iUXVlcnlMZXRSZWYiLz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9vcGVyYW5kPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aXNUeXBlU3BlY2lmaWVyIG5hbWU9ImZoaXI6UmFuZ2UiIHhzaTp0eXBlPSJOYW1lZFR5cGVTcGVjaWZpZXIiLz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9vcGVyYW5kPgogICAgICAgICAgICAgICAgICAgICAgICA8L2NvbmRpdGlvbj4KICAgICAgICAgICAgICAgICAgICAgICAgPHRoZW4gbmFtZT0iVG9RdWFudGl0eSIgeHNpOnR5cGU9IkZ1bmN0aW9uUmVmIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wZXJhbmQgcGF0aD0iaGlnaCIgeHNpOnR5cGU9IlByb3BlcnR5Ij4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNvdXJjZSBwYXRoPSJkb3NlIiB4c2k6dHlwZT0iUHJvcGVydHkiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c291cmNlIG5hbWU9ImRvc2FnZUluc3RydWN0aW9uIiB4c2k6dHlwZT0iUXVlcnlMZXRSZWYiLz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zb3VyY2U+CiAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvb3BlcmFuZD4KICAgICAgICAgICAgICAgICAgICAgICAgPC90aGVuPgogICAgICAgICAgICAgICAgICAgICAgICA8ZWxzZSBuYW1lPSJUb1F1YW50aXR5IiB4c2k6dHlwZT0iRnVuY3Rpb25SZWYiPgogICAgICAgICAgICAgICAgICAgICAgICAgICA8b3BlcmFuZCBhc1R5cGU9ImZoaXI6UXVhbnRpdHkiIHhzaTp0eXBlPSJBcyI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIHBhdGg9ImRvc2UiIHhzaTp0eXBlPSJQcm9wZXJ0eSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzb3VyY2UgbmFtZT0iZG9zYWdlSW5zdHJ1Y3Rpb24iIHhzaTp0eXBlPSJRdWVyeUxldFJlZiIvPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L29wZXJhbmQ+CiAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvb3BlcmFuZD4KICAgICAgICAgICAgICAgICAgICAgICAgPC9lbHNlPgogICAgICAgICAgICAgICAgICAgICA8L3ZhbHVlPgogICAgICAgICAgICAgICAgICA8L2VsZW1lbnQ+CiAgICAgICAgICAgICAgICAgIDxlbGVtZW50IG5hbWU9ImRvc2VzUGVyRGF5Ij4KICAgICAgICAgICAgICAgICAgICAgPHZhbHVlIHhzaTp0eXBlPSJDb2FsZXNjZSI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIG5hbWU9IlRvRGFpbHkiIGxpYnJhcnlOYW1lPSJPTVRLTG9naWMiIHhzaTp0eXBlPSJGdW5jdGlvblJlZiI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIG5hbWU9ImZyZXF1ZW5jeSIgeHNpOnR5cGU9IlF1ZXJ5TGV0UmVmIi8+CiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIG5hbWU9InBlcmlvZCIgeHNpOnR5cGU9IlF1ZXJ5TGV0UmVmIi8+CiAgICAgICAgICAgICAgICAgICAgICAgIDwvb3BlcmFuZD4KICAgICAgICAgICAgICAgICAgICAgICAgPG9wZXJhbmQgdmFsdWVUeXBlPSJ0OkRlY2ltYWwiIHZhbHVlPSIxLjAiIHhzaTp0eXBlPSJMaXRlcmFsIi8+CiAgICAgICAgICAgICAgICAgICAgIDwvdmFsdWU+CiAgICAgICAgICAgICAgICAgIDwvZWxlbWVudD4KICAgICAgICAgICAgICAgPC9leHByZXNzaW9uPgogICAgICAgICAgICA8L3JldHVybj4KICAgICAgICAgPC9leHByZXNzaW9uPgogICAgICAgICA8b3BlcmFuZCBuYW1lPSJPcmRlcnMiPgogICAgICAgICAgICA8b3BlcmFuZFR5cGVTcGVjaWZpZXIgeHNpOnR5cGU9Ikxpc3RUeXBlU3BlY2lmaWVyIj4KICAgICAgICAgICAgICAgPGVsZW1lbnRUeXBlIG5hbWU9ImZoaXI6TWVkaWNhdGlvblJlcXVlc3QiIHhzaTp0eXBlPSJOYW1lZFR5cGVTcGVjaWZpZXIiLz4KICAgICAgICAgICAgPC9vcGVyYW5kVHlwZVNwZWNpZmllcj4KICAgICAgICAgPC9vcGVyYW5kPgogICAgICA8L2RlZj4KICAgICAgPGRlZiBuYW1lPSJNTUUiIGNvbnRleHQ9IlBhdGllbnQiIGFjY2Vzc0xldmVsPSJQdWJsaWMiIHhzaTp0eXBlPSJGdW5jdGlvbkRlZiI+CiAgICAgICAgIDxleHByZXNzaW9uIHhzaTp0eXBlPSJRdWVyeSI+CiAgICAgICAgICAgIDxzb3VyY2UgYWxpYXM9IlAiPgogICAgICAgICAgICAgICA8ZXhwcmVzc2lvbiBuYW1lPSJQcmVzY3JpcHRpb25zIiB4c2k6dHlwZT0iRnVuY3Rpb25SZWYiPgogICAgICAgICAgICAgICAgICA8b3BlcmFuZCBuYW1lPSJwcmVzY3JpcHRpb25zIiB4c2k6dHlwZT0iT3BlcmFuZFJlZiIvPgogICAgICAgICAgICAgICA8L2V4cHJlc3Npb24+CiAgICAgICAgICAgIDwvc291cmNlPgogICAgICAgICAgICA8bGV0IGlkZW50aWZpZXI9Im1tZSI+CiAgICAgICAgICAgICAgIDxleHByZXNzaW9uIHhzaTp0eXBlPSJTaW5nbGV0b25Gcm9tIj4KICAgICAgICAgICAgICAgICAgPG9wZXJhbmQgbmFtZT0iQ2FsY3VsYXRlTU1FcyIgbGlicmFyeU5hbWU9Ik9NVEtMb2dpYyIgeHNpOnR5cGU9IkZ1bmN0aW9uUmVmIj4KICAgICAgICAgICAgICAgICAgICAgPG9wZXJhbmQgeHNpOnR5cGU9Ikxpc3QiPgogICAgICAgICAgICAgICAgICAgICAgICA8ZWxlbWVudCB4c2k6dHlwZT0iVHVwbGUiPgogICAgICAgICAgICAgICAgICAgICAgICAgICA8ZWxlbWVudCBuYW1lPSJyeE5vcm1Db2RlIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHZhbHVlIHBhdGg9InJ4Tm9ybUNvZGUiIHNjb3BlPSJQIiB4c2k6dHlwZT0iUHJvcGVydHkiLz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9lbGVtZW50PgogICAgICAgICAgICAgICAgICAgICAgICAgICA8ZWxlbWVudCBuYW1lPSJkb3NlUXVhbnRpdHkiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dmFsdWUgcGF0aD0iZG9zZSIgc2NvcGU9IlAiIHhzaTp0eXBlPSJQcm9wZXJ0eSIvPgogICAgICAgICAgICAgICAgICAgICAgICAgICA8L2VsZW1lbnQ+CiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxlbGVtZW50IG5hbWU9ImRvc2VzUGVyRGF5Ij4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHZhbHVlIHBhdGg9ImRvc2VzUGVyRGF5IiBzY29wZT0iUCIgeHNpOnR5cGU9IlByb3BlcnR5Ii8+CiAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZWxlbWVudD4KICAgICAgICAgICAgICAgICAgICAgICAgPC9lbGVtZW50PgogICAgICAgICAgICAgICAgICAgICA8L29wZXJhbmQ+CiAgICAgICAgICAgICAgICAgIDwvb3BlcmFuZD4KICAgICAgICAgICAgICAgPC9leHByZXNzaW9uPgogICAgICAgICAgICA8L2xldD4KICAgICAgICAgICAgPHJldHVybj4KICAgICAgICAgICAgICAgPGV4cHJlc3Npb24geHNpOnR5cGU9IlR1cGxlIj4KICAgICAgICAgICAgICAgICAgPGVsZW1lbnQgbmFtZT0icnhOb3JtQ29kZSI+CiAgICAgICAgICAgICAgICAgICAgIDx2YWx1ZSBwYXRoPSJyeE5vcm1Db2RlIiBzY29wZT0iUCIgeHNpOnR5cGU9IlByb3BlcnR5Ii8+CiAgICAgICAgICAgICAgICAgIDwvZWxlbWVudD4KICAgICAgICAgICAgICAgICAgPGVsZW1lbnQgbmFtZT0iaXNEcmFmdCI+CiAgICAgICAgICAgICAgICAgICAgIDx2YWx1ZSBwYXRoPSJpc0RyYWZ0IiBzY29wZT0iUCIgeHNpOnR5cGU9IlByb3BlcnR5Ii8+CiAgICAgICAgICAgICAgICAgIDwvZWxlbWVudD4KICAgICAgICAgICAgICAgICAgPGVsZW1lbnQgbmFtZT0iaXNQUk4iPgogICAgICAgICAgICAgICAgICAgICA8dmFsdWUgcGF0aD0iaXNQUk4iIHNjb3BlPSJQIiB4c2k6dHlwZT0iUHJvcGVydHkiLz4KICAgICAgICAgICAgICAgICAgPC9lbGVtZW50PgogICAgICAgICAgICAgICAgICA8ZWxlbWVudCBuYW1lPSJwcmVzY3JpcHRpb24iPgogICAgICAgICAgICAgICAgICAgICA8dmFsdWUgcGF0aD0icHJlc2NyaXB0aW9uIiBzY29wZT0iUCIgeHNpOnR5cGU9IlByb3BlcnR5Ii8+CiAgICAgICAgICAgICAgICAgIDwvZWxlbWVudD4KICAgICAgICAgICAgICAgICAgPGVsZW1lbnQgbmFtZT0iZGFpbHlEb3NlIj4KICAgICAgICAgICAgICAgICAgICAgPHZhbHVlIHBhdGg9ImRhaWx5RG9zZURlc2NyaXB0aW9uIiB4c2k6dHlwZT0iUHJvcGVydHkiPgogICAgICAgICAgICAgICAgICAgICAgICA8c291cmNlIG5hbWU9Im1tZSIgeHNpOnR5cGU9IlF1ZXJ5TGV0UmVmIi8+CiAgICAgICAgICAgICAgICAgICAgIDwvdmFsdWU+CiAgICAgICAgICAgICAgICAgIDwvZWxlbWVudD4KICAgICAgICAgICAgICAgICAgPGVsZW1lbnQgbmFtZT0iY29udmVyc2lvbkZhY3RvciI+CiAgICAgICAgICAgICAgICAgICAgIDx2YWx1ZSBwYXRoPSJjb252ZXJzaW9uRmFjdG9yIiB4c2k6dHlwZT0iUHJvcGVydHkiPgogICAgICAgICAgICAgICAgICAgICAgICA8c291cmNlIG5hbWU9Im1tZSIgeHNpOnR5cGU9IlF1ZXJ5TGV0UmVmIi8+CiAgICAgICAgICAgICAgICAgICAgIDwvdmFsdWU+CiAgICAgICAgICAgICAgICAgIDwvZWxlbWVudD4KICAgICAgICAgICAgICAgICAgPGVsZW1lbnQgbmFtZT0ibW1lIj4KICAgICAgICAgICAgICAgICAgICAgPHZhbHVlIHBhdGg9Im1tZSIgeHNpOnR5cGU9IlByb3BlcnR5Ij4KICAgICAgICAgICAgICAgICAgICAgICAgPHNvdXJjZSBuYW1lPSJtbWUiIHhzaTp0eXBlPSJRdWVyeUxldFJlZiIvPgogICAgICAgICAgICAgICAgICAgICA8L3ZhbHVlPgogICAgICAgICAgICAgICAgICA8L2VsZW1lbnQ+CiAgICAgICAgICAgICAgIDwvZXhwcmVzc2lvbj4KICAgICAgICAgICAgPC9yZXR1cm4+CiAgICAgICAgIDwvZXhwcmVzc2lvbj4KICAgICAgICAgPG9wZXJhbmQgbmFtZT0icHJlc2NyaXB0aW9ucyI+CiAgICAgICAgICAgIDxvcGVyYW5kVHlwZVNwZWNpZmllciB4c2k6dHlwZT0iTGlzdFR5cGVTcGVjaWZpZXIiPgogICAgICAgICAgICAgICA8ZWxlbWVudFR5cGUgbmFtZT0iZmhpcjpNZWRpY2F0aW9uUmVxdWVzdCIgeHNpOnR5cGU9Ik5hbWVkVHlwZVNwZWNpZmllciIvPgogICAgICAgICAgICA8L29wZXJhbmRUeXBlU3BlY2lmaWVyPgogICAgICAgICA8L29wZXJhbmQ+CiAgICAgIDwvZGVmPgogICAgICA8ZGVmIG5hbWU9IlRvdGFsTU1FIiBjb250ZXh0PSJQYXRpZW50IiBhY2Nlc3NMZXZlbD0iUHVibGljIiB4c2k6dHlwZT0iRnVuY3Rpb25EZWYiPgogICAgICAgICA8ZXhwcmVzc2lvbiBjbGFzc1R5cGU9InQ6UXVhbnRpdHkiIHhzaTp0eXBlPSJJbnN0YW5jZSI+CiAgICAgICAgICAgIDxlbGVtZW50IG5hbWU9InZhbHVlIj4KICAgICAgICAgICAgICAgPHZhbHVlIHhzaTp0eXBlPSJTdW0iPgogICAgICAgICAgICAgICAgICA8c291cmNlIHhzaTp0eXBlPSJRdWVyeSI+CiAgICAgICAgICAgICAgICAgICAgIDxzb3VyY2UgYWxpYXM9Ik0iPgogICAgICAgICAgICAgICAgICAgICAgICA8ZXhwcmVzc2lvbiBuYW1lPSJNTUUiIHhzaTp0eXBlPSJGdW5jdGlvblJlZiI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIG5hbWU9InByZXNjcmlwdGlvbnMiIHhzaTp0eXBlPSJPcGVyYW5kUmVmIi8+CiAgICAgICAgICAgICAgICAgICAgICAgIDwvZXhwcmVzc2lvbj4KICAgICAgICAgICAgICAgICAgICAgPC9zb3VyY2U+CiAgICAgICAgICAgICAgICAgICAgIDxyZXR1cm4+CiAgICAgICAgICAgICAgICAgICAgICAgIDxleHByZXNzaW9uIHBhdGg9InZhbHVlIiB4c2k6dHlwZT0iUHJvcGVydHkiPgogICAgICAgICAgICAgICAgICAgICAgICAgICA8c291cmNlIHBhdGg9Im1tZSIgc2NvcGU9Ik0iIHhzaTp0eXBlPSJQcm9wZXJ0eSIvPgogICAgICAgICAgICAgICAgICAgICAgICA8L2V4cHJlc3Npb24+CiAgICAgICAgICAgICAgICAgICAgIDwvcmV0dXJuPgogICAgICAgICAgICAgICAgICA8L3NvdXJjZT4KICAgICAgICAgICAgICAgPC92YWx1ZT4KICAgICAgICAgICAgPC9lbGVtZW50PgogICAgICAgICAgICA8ZWxlbWVudCBuYW1lPSJ1bml0Ij4KICAgICAgICAgICAgICAgPHZhbHVlIHZhbHVlVHlwZT0idDpTdHJpbmciIHZhbHVlPSJtZy9kIiB4c2k6dHlwZT0iTGl0ZXJhbCIvPgogICAgICAgICAgICA8L2VsZW1lbnQ+CiAgICAgICAgIDwvZXhwcmVzc2lvbj4KICAgICAgICAgPG9wZXJhbmQgbmFtZT0icHJlc2NyaXB0aW9ucyI+CiAgICAgICAgICAgIDxvcGVyYW5kVHlwZVNwZWNpZmllciB4c2k6dHlwZT0iTGlzdFR5cGVTcGVjaWZpZXIiPgogICAgICAgICAgICAgICA8ZWxlbWVudFR5cGUgbmFtZT0iZmhpcjpNZWRpY2F0aW9uUmVxdWVzdCIgeHNpOnR5cGU9Ik5hbWVkVHlwZVNwZWNpZmllciIvPgogICAgICAgICAgICA8L29wZXJhbmRUeXBlU3BlY2lmaWVyPgogICAgICAgICA8L29wZXJhbmQ+CiAgICAgIDwvZGVmPgogICAgICA8ZGVmIG5hbWU9IkdldFBlcmlvZERheXMiIGNvbnRleHQ9IlBhdGllbnQiIGFjY2Vzc0xldmVsPSJQdWJsaWMiIHhzaTp0eXBlPSJGdW5jdGlvbkRlZiI+CiAgICAgICAgIDxleHByZXNzaW9uIHhzaTp0eXBlPSJDYXNlIj4KICAgICAgICAgICAgPGNhc2VJdGVtPgogICAgICAgICAgICAgICA8d2hlbiB4c2k6dHlwZT0iU3RhcnRzV2l0aCI+CiAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIG5hbWU9InZhbHVlIiB4c2k6dHlwZT0iT3BlcmFuZFJlZiIvPgogICAgICAgICAgICAgICAgICA8b3BlcmFuZCB2YWx1ZVR5cGU9InQ6U3RyaW5nIiB2YWx1ZT0ieWVhciIgeHNpOnR5cGU9IkxpdGVyYWwiLz4KICAgICAgICAgICAgICAgPC93aGVuPgogICAgICAgICAgICAgICA8dGhlbiB2YWx1ZVR5cGU9InQ6RGVjaW1hbCIgdmFsdWU9IjM2NS4wIiB4c2k6dHlwZT0iTGl0ZXJhbCIvPgogICAgICAgICAgICA8L2Nhc2VJdGVtPgogICAgICAgICAgICA8Y2FzZUl0ZW0+CiAgICAgICAgICAgICAgIDx3aGVuIHhzaTp0eXBlPSJTdGFydHNXaXRoIj4KICAgICAgICAgICAgICAgICAgPG9wZXJhbmQgbmFtZT0idmFsdWUiIHhzaTp0eXBlPSJPcGVyYW5kUmVmIi8+CiAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIHZhbHVlVHlwZT0idDpTdHJpbmciIHZhbHVlPSJtb250aCIgeHNpOnR5cGU9IkxpdGVyYWwiLz4KICAgICAgICAgICAgICAgPC93aGVuPgogICAgICAgICAgICAgICA8dGhlbiB2YWx1ZVR5cGU9InQ6RGVjaW1hbCIgdmFsdWU9IjMwLjAiIHhzaTp0eXBlPSJMaXRlcmFsIi8+CiAgICAgICAgICAgIDwvY2FzZUl0ZW0+CiAgICAgICAgICAgIDxjYXNlSXRlbT4KICAgICAgICAgICAgICAgPHdoZW4geHNpOnR5cGU9IlN0YXJ0c1dpdGgiPgogICAgICAgICAgICAgICAgICA8b3BlcmFuZCBuYW1lPSJ2YWx1ZSIgeHNpOnR5cGU9Ik9wZXJhbmRSZWYiLz4KICAgICAgICAgICAgICAgICAgPG9wZXJhbmQgdmFsdWVUeXBlPSJ0OlN0cmluZyIgdmFsdWU9ImhvdXIiIHhzaTp0eXBlPSJMaXRlcmFsIi8+CiAgICAgICAgICAgICAgIDwvd2hlbj4KICAgICAgICAgICAgICAgPHRoZW4geHNpOnR5cGU9IkRpdmlkZSI+CiAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIHZhbHVlVHlwZT0idDpEZWNpbWFsIiB2YWx1ZT0iMS4wIiB4c2k6dHlwZT0iTGl0ZXJhbCIvPgogICAgICAgICAgICAgICAgICA8b3BlcmFuZCB2YWx1ZVR5cGU9InQ6RGVjaW1hbCIgdmFsdWU9IjI0LjAiIHhzaTp0eXBlPSJMaXRlcmFsIi8+CiAgICAgICAgICAgICAgIDwvdGhlbj4KICAgICAgICAgICAgPC9jYXNlSXRlbT4KICAgICAgICAgICAgPGNhc2VJdGVtPgogICAgICAgICAgICAgICA8d2hlbiB4c2k6dHlwZT0iU3RhcnRzV2l0aCI+CiAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIG5hbWU9InZhbHVlIiB4c2k6dHlwZT0iT3BlcmFuZFJlZiIvPgogICAgICAgICAgICAgICAgICA8b3BlcmFuZCB2YWx1ZVR5cGU9InQ6U3RyaW5nIiB2YWx1ZT0ibWludXRlIiB4c2k6dHlwZT0iTGl0ZXJhbCIvPgogICAgICAgICAgICAgICA8L3doZW4+CiAgICAgICAgICAgICAgIDx0aGVuIHhzaTp0eXBlPSJNdWx0aXBseSI+CiAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIHhzaTp0eXBlPSJEaXZpZGUiPgogICAgICAgICAgICAgICAgICAgICA8b3BlcmFuZCB2YWx1ZVR5cGU9InQ6RGVjaW1hbCIgdmFsdWU9IjEuMCIgeHNpOnR5cGU9IkxpdGVyYWwiLz4KICAgICAgICAgICAgICAgICAgICAgPG9wZXJhbmQgdmFsdWVUeXBlPSJ0OkRlY2ltYWwiIHZhbHVlPSIyNC4wIiB4c2k6dHlwZT0iTGl0ZXJhbCIvPgogICAgICAgICAgICAgICAgICA8L29wZXJhbmQ+CiAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIHZhbHVlVHlwZT0idDpEZWNpbWFsIiB2YWx1ZT0iNjAuMCIgeHNpOnR5cGU9IkxpdGVyYWwiLz4KICAgICAgICAgICAgICAgPC90aGVuPgogICAgICAgICAgICA8L2Nhc2VJdGVtPgogICAgICAgICAgICA8ZWxzZSB2YWx1ZVR5cGU9InQ6RGVjaW1hbCIgdmFsdWU9IjEuMCIgeHNpOnR5cGU9IkxpdGVyYWwiLz4KICAgICAgICAgPC9leHByZXNzaW9uPgogICAgICAgICA8b3BlcmFuZCBuYW1lPSJ2YWx1ZSI+CiAgICAgICAgICAgIDxvcGVyYW5kVHlwZVNwZWNpZmllciBuYW1lPSJ0OlN0cmluZyIgeHNpOnR5cGU9Ik5hbWVkVHlwZVNwZWNpZmllciIvPgogICAgICAgICA8L29wZXJhbmQ+CiAgICAgIDwvZGVmPgogICAgICA8ZGVmIG5hbWU9IkdldER1cmF0aW9uSW5EYXlzIiBjb250ZXh0PSJQYXRpZW50IiBhY2Nlc3NMZXZlbD0iUHVibGljIiB4c2k6dHlwZT0iRnVuY3Rpb25EZWYiPgogICAgICAgICA8ZXhwcmVzc2lvbiB4c2k6dHlwZT0iQ2FzZSI+CiAgICAgICAgICAgIDxjYXNlSXRlbT4KICAgICAgICAgICAgICAgPHdoZW4geHNpOnR5cGU9IlN0YXJ0c1dpdGgiPgogICAgICAgICAgICAgICAgICA8b3BlcmFuZCBwYXRoPSJ2YWx1ZSIgeHNpOnR5cGU9IlByb3BlcnR5Ij4KICAgICAgICAgICAgICAgICAgICAgPHNvdXJjZSBwYXRoPSJ1bml0IiB4c2k6dHlwZT0iUHJvcGVydHkiPgogICAgICAgICAgICAgICAgICAgICAgICA8c291cmNlIG5hbWU9InZhbHVlIiB4c2k6dHlwZT0iT3BlcmFuZFJlZiIvPgogICAgICAgICAgICAgICAgICAgICA8L3NvdXJjZT4KICAgICAgICAgICAgICAgICAgPC9vcGVyYW5kPgogICAgICAgICAgICAgICAgICA8b3BlcmFuZCB2YWx1ZVR5cGU9InQ6U3RyaW5nIiB2YWx1ZT0ieWVhciIgeHNpOnR5cGU9IkxpdGVyYWwiLz4KICAgICAgICAgICAgICAgPC93aGVuPgogICAgICAgICAgICAgICA8dGhlbiB4c2k6dHlwZT0iTXVsdGlwbHkiPgogICAgICAgICAgICAgICAgICA8b3BlcmFuZCBwYXRoPSJ2YWx1ZSIgeHNpOnR5cGU9IlByb3BlcnR5Ij4KICAgICAgICAgICAgICAgICAgICAgPHNvdXJjZSBwYXRoPSJ2YWx1ZSIgeHNpOnR5cGU9IlByb3BlcnR5Ij4KICAgICAgICAgICAgICAgICAgICAgICAgPHNvdXJjZSBuYW1lPSJ2YWx1ZSIgeHNpOnR5cGU9Ik9wZXJhbmRSZWYiLz4KICAgICAgICAgICAgICAgICAgICAgPC9zb3VyY2U+CiAgICAgICAgICAgICAgICAgIDwvb3BlcmFuZD4KICAgICAgICAgICAgICAgICAgPG9wZXJhbmQgdmFsdWVUeXBlPSJ0OkRlY2ltYWwiIHZhbHVlPSIzNjUuMCIgeHNpOnR5cGU9IkxpdGVyYWwiLz4KICAgICAgICAgICAgICAgPC90aGVuPgogICAgICAgICAgICA8L2Nhc2VJdGVtPgogICAgICAgICAgICA8Y2FzZUl0ZW0+CiAgICAgICAgICAgICAgIDx3aGVuIHhzaTp0eXBlPSJTdGFydHNXaXRoIj4KICAgICAgICAgICAgICAgICAgPG9wZXJhbmQgcGF0aD0idmFsdWUiIHhzaTp0eXBlPSJQcm9wZXJ0eSI+CiAgICAgICAgICAgICAgICAgICAgIDxzb3VyY2UgcGF0aD0idW5pdCIgeHNpOnR5cGU9IlByb3BlcnR5Ij4KICAgICAgICAgICAgICAgICAgICAgICAgPHNvdXJjZSBuYW1lPSJ2YWx1ZSIgeHNpOnR5cGU9Ik9wZXJhbmRSZWYiLz4KICAgICAgICAgICAgICAgICAgICAgPC9zb3VyY2U+CiAgICAgICAgICAgICAgICAgIDwvb3BlcmFuZD4KICAgICAgICAgICAgICAgICAgPG9wZXJhbmQgdmFsdWVUeXBlPSJ0OlN0cmluZyIgdmFsdWU9Im1vbnRoIiB4c2k6dHlwZT0iTGl0ZXJhbCIvPgogICAgICAgICAgICAgICA8L3doZW4+CiAgICAgICAgICAgICAgIDx0aGVuIHhzaTp0eXBlPSJNdWx0aXBseSI+CiAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIHBhdGg9InZhbHVlIiB4c2k6dHlwZT0iUHJvcGVydHkiPgogICAgICAgICAgICAgICAgICAgICA8c291cmNlIHBhdGg9InZhbHVlIiB4c2k6dHlwZT0iUHJvcGVydHkiPgogICAgICAgICAgICAgICAgICAgICAgICA8c291cmNlIG5hbWU9InZhbHVlIiB4c2k6dHlwZT0iT3BlcmFuZFJlZiIvPgogICAgICAgICAgICAgICAgICAgICA8L3NvdXJjZT4KICAgICAgICAgICAgICAgICAgPC9vcGVyYW5kPgogICAgICAgICAgICAgICAgICA8b3BlcmFuZCB2YWx1ZVR5cGU9InQ6RGVjaW1hbCIgdmFsdWU9IjMwLjAiIHhzaTp0eXBlPSJMaXRlcmFsIi8+CiAgICAgICAgICAgICAgIDwvdGhlbj4KICAgICAgICAgICAgPC9jYXNlSXRlbT4KICAgICAgICAgICAgPGVsc2UgcGF0aD0idmFsdWUiIHhzaTp0eXBlPSJQcm9wZXJ0eSI+CiAgICAgICAgICAgICAgIDxzb3VyY2UgcGF0aD0idmFsdWUiIHhzaTp0eXBlPSJQcm9wZXJ0eSI+CiAgICAgICAgICAgICAgICAgIDxzb3VyY2UgbmFtZT0idmFsdWUiIHhzaTp0eXBlPSJPcGVyYW5kUmVmIi8+CiAgICAgICAgICAgICAgIDwvc291cmNlPgogICAgICAgICAgICA8L2Vsc2U+CiAgICAgICAgIDwvZXhwcmVzc2lvbj4KICAgICAgICAgPG9wZXJhbmQgbmFtZT0idmFsdWUiPgogICAgICAgICAgICA8b3BlcmFuZFR5cGVTcGVjaWZpZXIgbmFtZT0iZmhpcjpEdXJhdGlvbiIgeHNpOnR5cGU9Ik5hbWVkVHlwZVNwZWNpZmllciIvPgogICAgICAgICA8L29wZXJhbmQ+CiAgICAgIDwvZGVmPgogICAgICA8ZGVmIG5hbWU9IlByb2JhYmxlRGF5c0luUmFuZ2UiIGNvbnRleHQ9IlBhdGllbnQiIGFjY2Vzc0xldmVsPSJQdWJsaWMiIHhzaTp0eXBlPSJGdW5jdGlvbkRlZiI+CiAgICAgICAgIDxleHByZXNzaW9uIHhzaTp0eXBlPSJRdWVyeSI+CiAgICAgICAgICAgIDxzb3VyY2UgYWxpYXM9Im9yZGVycyI+CiAgICAgICAgICAgICAgIDxleHByZXNzaW9uIG5hbWU9Ik9yZGVycyIgeHNpOnR5cGU9Ik9wZXJhbmRSZWYiLz4KICAgICAgICAgICAgPC9zb3VyY2U+CiAgICAgICAgICAgIDxsZXQgaWRlbnRpZmllcj0iZnJlcXVlbmN5Ij4KICAgICAgICAgICAgICAgPGV4cHJlc3Npb24gcGF0aD0idmFsdWUiIHhzaTp0eXBlPSJQcm9wZXJ0eSI+CiAgICAgICAgICAgICAgICAgIDxzb3VyY2UgcGF0aD0iZnJlcXVlbmN5IiB4c2k6dHlwZT0iUHJvcGVydHkiPgogICAgICAgICAgICAgICAgICAgICA8c291cmNlIHBhdGg9InJlcGVhdCIgeHNpOnR5cGU9IlByb3BlcnR5Ij4KICAgICAgICAgICAgICAgICAgICAgICAgPHNvdXJjZSBwYXRoPSJ0aW1pbmciIHhzaTp0eXBlPSJQcm9wZXJ0eSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzb3VyY2UgeHNpOnR5cGU9IkluZGV4ZXIiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3BlcmFuZCBwYXRoPSJkb3NhZ2VJbnN0cnVjdGlvbiIgc2NvcGU9Im9yZGVycyIgeHNpOnR5cGU9IlByb3BlcnR5Ii8+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIHZhbHVlVHlwZT0idDpJbnRlZ2VyIiB2YWx1ZT0iMCIgeHNpOnR5cGU9IkxpdGVyYWwiLz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zb3VyY2U+CiAgICAgICAgICAgICAgICAgICAgICAgIDwvc291cmNlPgogICAgICAgICAgICAgICAgICAgICA8L3NvdXJjZT4KICAgICAgICAgICAgICAgICAgPC9zb3VyY2U+CiAgICAgICAgICAgICAgIDwvZXhwcmVzc2lvbj4KICAgICAgICAgICAgPC9sZXQ+CiAgICAgICAgICAgIDxsZXQgaWRlbnRpZmllcj0icGVyaW9kIj4KICAgICAgICAgICAgICAgPGV4cHJlc3Npb24gcGF0aD0idmFsdWUiIHhzaTp0eXBlPSJQcm9wZXJ0eSI+CiAgICAgICAgICAgICAgICAgIDxzb3VyY2UgcGF0aD0icGVyaW9kIiB4c2k6dHlwZT0iUHJvcGVydHkiPgogICAgICAgICAgICAgICAgICAgICA8c291cmNlIHBhdGg9InJlcGVhdCIgeHNpOnR5cGU9IlByb3BlcnR5Ij4KICAgICAgICAgICAgICAgICAgICAgICAgPHNvdXJjZSBwYXRoPSJ0aW1pbmciIHhzaTp0eXBlPSJQcm9wZXJ0eSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzb3VyY2UgeHNpOnR5cGU9IkluZGV4ZXIiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3BlcmFuZCBwYXRoPSJkb3NhZ2VJbnN0cnVjdGlvbiIgc2NvcGU9Im9yZGVycyIgeHNpOnR5cGU9IlByb3BlcnR5Ii8+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIHZhbHVlVHlwZT0idDpJbnRlZ2VyIiB2YWx1ZT0iMCIgeHNpOnR5cGU9IkxpdGVyYWwiLz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zb3VyY2U+CiAgICAgICAgICAgICAgICAgICAgICAgIDwvc291cmNlPgogICAgICAgICAgICAgICAgICAgICA8L3NvdXJjZT4KICAgICAgICAgICAgICAgICAgPC9zb3VyY2U+CiAgICAgICAgICAgICAgIDwvZXhwcmVzc2lvbj4KICAgICAgICAgICAgPC9sZXQ+CiAgICAgICAgICAgIDxsZXQgaWRlbnRpZmllcj0icGVyaW9kRGF5cyI+CiAgICAgICAgICAgICAgIDxleHByZXNzaW9uIG5hbWU9IkdldFBlcmlvZERheXMiIHhzaTp0eXBlPSJGdW5jdGlvblJlZiI+CiAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIHBhdGg9InZhbHVlIiB4c2k6dHlwZT0iUHJvcGVydHkiPgogICAgICAgICAgICAgICAgICAgICA8c291cmNlIHBhdGg9InBlcmlvZFVuaXQiIHhzaTp0eXBlPSJQcm9wZXJ0eSI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxzb3VyY2UgcGF0aD0icmVwZWF0IiB4c2k6dHlwZT0iUHJvcGVydHkiPgogICAgICAgICAgICAgICAgICAgICAgICAgICA8c291cmNlIHBhdGg9InRpbWluZyIgeHNpOnR5cGU9IlByb3BlcnR5Ij4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNvdXJjZSB4c2k6dHlwZT0iSW5kZXhlciI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIHBhdGg9ImRvc2FnZUluc3RydWN0aW9uIiBzY29wZT0ib3JkZXJzIiB4c2k6dHlwZT0iUHJvcGVydHkiLz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wZXJhbmQgdmFsdWVUeXBlPSJ0OkludGVnZXIiIHZhbHVlPSIwIiB4c2k6dHlwZT0iTGl0ZXJhbCIvPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NvdXJjZT4KICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zb3VyY2U+CiAgICAgICAgICAgICAgICAgICAgICAgIDwvc291cmNlPgogICAgICAgICAgICAgICAgICAgICA8L3NvdXJjZT4KICAgICAgICAgICAgICAgICAgPC9vcGVyYW5kPgogICAgICAgICAgICAgICA8L2V4cHJlc3Npb24+CiAgICAgICAgICAgIDwvbGV0PgogICAgICAgICAgICA8bGV0IGlkZW50aWZpZXI9ImRvc2VzUGVyRGF5Ij4KICAgICAgICAgICAgICAgPGV4cHJlc3Npb24geHNpOnR5cGU9IklmIj4KICAgICAgICAgICAgICAgICAgPGNvbmRpdGlvbiBhc1R5cGU9InQ6Qm9vbGVhbiIgeHNpOnR5cGU9IkFzIj4KICAgICAgICAgICAgICAgICAgICAgPG9wZXJhbmQgeHNpOnR5cGU9IkdyZWF0ZXJPckVxdWFsIj4KICAgICAgICAgICAgICAgICAgICAgICAgPG9wZXJhbmQgeHNpOnR5cGU9IkRpdmlkZSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIHhzaTp0eXBlPSJUb0RlY2ltYWwiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3BlcmFuZCBuYW1lPSJmcmVxdWVuY3kiIHhzaTp0eXBlPSJRdWVyeUxldFJlZiIvPgogICAgICAgICAgICAgICAgICAgICAgICAgICA8L29wZXJhbmQ+CiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIHhzaTp0eXBlPSJNdWx0aXBseSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIG5hbWU9InBlcmlvZCIgeHNpOnR5cGU9IlF1ZXJ5TGV0UmVmIi8+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIG5hbWU9InBlcmlvZERheXMiIHhzaTp0eXBlPSJRdWVyeUxldFJlZiIvPgogICAgICAgICAgICAgICAgICAgICAgICAgICA8L29wZXJhbmQ+CiAgICAgICAgICAgICAgICAgICAgICAgIDwvb3BlcmFuZD4KICAgICAgICAgICAgICAgICAgICAgICAgPG9wZXJhbmQgdmFsdWVUeXBlPSJ0OkRlY2ltYWwiIHZhbHVlPSIxLjAiIHhzaTp0eXBlPSJMaXRlcmFsIi8+CiAgICAgICAgICAgICAgICAgICAgIDwvb3BlcmFuZD4KICAgICAgICAgICAgICAgICAgPC9jb25kaXRpb24+CiAgICAgICAgICAgICAgICAgIDx0aGVuIHZhbHVlVHlwZT0idDpEZWNpbWFsIiB2YWx1ZT0iMS4wIiB4c2k6dHlwZT0iTGl0ZXJhbCIvPgogICAgICAgICAgICAgICAgICA8ZWxzZSB4c2k6dHlwZT0iRGl2aWRlIj4KICAgICAgICAgICAgICAgICAgICAgPG9wZXJhbmQgeHNpOnR5cGU9IlRvRGVjaW1hbCI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIG5hbWU9ImZyZXF1ZW5jeSIgeHNpOnR5cGU9IlF1ZXJ5TGV0UmVmIi8+CiAgICAgICAgICAgICAgICAgICAgIDwvb3BlcmFuZD4KICAgICAgICAgICAgICAgICAgICAgPG9wZXJhbmQgeHNpOnR5cGU9Ik11bHRpcGx5Ij4KICAgICAgICAgICAgICAgICAgICAgICAgPG9wZXJhbmQgbmFtZT0icGVyaW9kIiB4c2k6dHlwZT0iUXVlcnlMZXRSZWYiLz4KICAgICAgICAgICAgICAgICAgICAgICAgPG9wZXJhbmQgbmFtZT0icGVyaW9kRGF5cyIgeHNpOnR5cGU9IlF1ZXJ5TGV0UmVmIi8+CiAgICAgICAgICAgICAgICAgICAgIDwvb3BlcmFuZD4KICAgICAgICAgICAgICAgICAgPC9lbHNlPgogICAgICAgICAgICAgICA8L2V4cHJlc3Npb24+CiAgICAgICAgICAgIDwvbGV0PgogICAgICAgICAgICA8bGV0IGlkZW50aWZpZXI9InJlcGVhdCI+CiAgICAgICAgICAgICAgIDxleHByZXNzaW9uIHBhdGg9InZhbHVlIiB4c2k6dHlwZT0iUHJvcGVydHkiPgogICAgICAgICAgICAgICAgICA8c291cmNlIHBhdGg9Im51bWJlck9mUmVwZWF0c0FsbG93ZWQiIHhzaTp0eXBlPSJQcm9wZXJ0eSI+CiAgICAgICAgICAgICAgICAgICAgIDxzb3VyY2UgcGF0aD0iZGlzcGVuc2VSZXF1ZXN0IiBzY29wZT0ib3JkZXJzIiB4c2k6dHlwZT0iUHJvcGVydHkiLz4KICAgICAgICAgICAgICAgICAgPC9zb3VyY2U+CiAgICAgICAgICAgICAgIDwvZXhwcmVzc2lvbj4KICAgICAgICAgICAgPC9sZXQ+CiAgICAgICAgICAgIDxsZXQgaWRlbnRpZmllcj0ic3VwcGx5RHVyYXRpb24iPgogICAgICAgICAgICAgICA8ZXhwcmVzc2lvbiBuYW1lPSJHZXREdXJhdGlvbkluRGF5cyIgeHNpOnR5cGU9IkZ1bmN0aW9uUmVmIj4KICAgICAgICAgICAgICAgICAgPG9wZXJhbmQgcGF0aD0iZXhwZWN0ZWRTdXBwbHlEdXJhdGlvbiIgeHNpOnR5cGU9IlByb3BlcnR5Ij4KICAgICAgICAgICAgICAgICAgICAgPHNvdXJjZSBwYXRoPSJkaXNwZW5zZVJlcXVlc3QiIHNjb3BlPSJvcmRlcnMiIHhzaTp0eXBlPSJQcm9wZXJ0eSIvPgogICAgICAgICAgICAgICAgICA8L29wZXJhbmQ+CiAgICAgICAgICAgICAgIDwvZXhwcmVzc2lvbj4KICAgICAgICAgICAgPC9sZXQ+CiAgICAgICAgICAgIDxsZXQgaWRlbnRpZmllcj0idmFsaWRpdHlQZXJpb2QiPgogICAgICAgICAgICAgICA8ZXhwcmVzc2lvbiBwcmVjaXNpb249IkRheSIgeHNpOnR5cGU9IkR1cmF0aW9uQmV0d2VlbiI+CiAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIHBhdGg9InZhbHVlIiB4c2k6dHlwZT0iUHJvcGVydHkiPgogICAgICAgICAgICAgICAgICAgICA8c291cmNlIHBhdGg9InN0YXJ0IiB4c2k6dHlwZT0iUHJvcGVydHkiPgogICAgICAgICAgICAgICAgICAgICAgICA8c291cmNlIHBhdGg9InZhbGlkaXR5UGVyaW9kIiB4c2k6dHlwZT0iUHJvcGVydHkiPgogICAgICAgICAgICAgICAgICAgICAgICAgICA8c291cmNlIHBhdGg9ImRpc3BlbnNlUmVxdWVzdCIgc2NvcGU9Im9yZGVycyIgeHNpOnR5cGU9IlByb3BlcnR5Ii8+CiAgICAgICAgICAgICAgICAgICAgICAgIDwvc291cmNlPgogICAgICAgICAgICAgICAgICAgICA8L3NvdXJjZT4KICAgICAgICAgICAgICAgICAgPC9vcGVyYW5kPgogICAgICAgICAgICAgICAgICA8b3BlcmFuZCB4c2k6dHlwZT0iVG9kYXkiLz4KICAgICAgICAgICAgICAgPC9leHByZXNzaW9uPgogICAgICAgICAgICA8L2xldD4KICAgICAgICAgICAgPGxldCBpZGVudGlmaWVyPSJlbmREaWZmZXJlbmNlIj4KICAgICAgICAgICAgICAgPGV4cHJlc3Npb24geHNpOnR5cGU9IklmIj4KICAgICAgICAgICAgICAgICAgPGNvbmRpdGlvbiBhc1R5cGU9InQ6Qm9vbGVhbiIgeHNpOnR5cGU9IkFzIj4KICAgICAgICAgICAgICAgICAgICAgPG9wZXJhbmQgeHNpOnR5cGU9Ikxlc3MiPgogICAgICAgICAgICAgICAgICAgICAgICA8b3BlcmFuZCBwYXRoPSJ2YWx1ZSIgeHNpOnR5cGU9IlByb3BlcnR5Ij4KICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNvdXJjZSBwYXRoPSJlbmQiIHhzaTp0eXBlPSJQcm9wZXJ0eSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzb3VyY2UgcGF0aD0idmFsaWRpdHlQZXJpb2QiIHhzaTp0eXBlPSJQcm9wZXJ0eSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzb3VyY2UgcGF0aD0iZGlzcGVuc2VSZXF1ZXN0IiBzY29wZT0ib3JkZXJzIiB4c2k6dHlwZT0iUHJvcGVydHkiLz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zb3VyY2U+CiAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc291cmNlPgogICAgICAgICAgICAgICAgICAgICAgICA8L29wZXJhbmQ+CiAgICAgICAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIHhzaTp0eXBlPSJUb2RheSIvPgogICAgICAgICAgICAgICAgICAgICA8L29wZXJhbmQ+CiAgICAgICAgICAgICAgICAgIDwvY29uZGl0aW9uPgogICAgICAgICAgICAgICAgICA8dGhlbiBwcmVjaXNpb249IkRheSIgeHNpOnR5cGU9IkR1cmF0aW9uQmV0d2VlbiI+CiAgICAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIHBhdGg9InZhbHVlIiB4c2k6dHlwZT0iUHJvcGVydHkiPgogICAgICAgICAgICAgICAgICAgICAgICA8c291cmNlIHBhdGg9ImVuZCIgeHNpOnR5cGU9IlByb3BlcnR5Ij4KICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNvdXJjZSBwYXRoPSJ2YWxpZGl0eVBlcmlvZCIgeHNpOnR5cGU9IlByb3BlcnR5Ij4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNvdXJjZSBwYXRoPSJkaXNwZW5zZVJlcXVlc3QiIHNjb3BlPSJvcmRlcnMiIHhzaTp0eXBlPSJQcm9wZXJ0eSIvPgogICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NvdXJjZT4KICAgICAgICAgICAgICAgICAgICAgICAgPC9zb3VyY2U+CiAgICAgICAgICAgICAgICAgICAgIDwvb3BlcmFuZD4KICAgICAgICAgICAgICAgICAgICAgPG9wZXJhbmQgeHNpOnR5cGU9IlRvZGF5Ii8+CiAgICAgICAgICAgICAgICAgIDwvdGhlbj4KICAgICAgICAgICAgICAgICAgPGVsc2UgdmFsdWVUeXBlPSJ0OkludGVnZXIiIHZhbHVlPSIwIiB4c2k6dHlwZT0iTGl0ZXJhbCIvPgogICAgICAgICAgICAgICA8L2V4cHJlc3Npb24+CiAgICAgICAgICAgIDwvbGV0PgogICAgICAgICAgICA8cmV0dXJuPgogICAgICAgICAgICAgICA8ZXhwcmVzc2lvbiB4c2k6dHlwZT0iR3JlYXRlck9yRXF1YWwiPgogICAgICAgICAgICAgICAgICA8b3BlcmFuZCB4c2k6dHlwZT0iTXVsdGlwbHkiPgogICAgICAgICAgICAgICAgICAgICA8b3BlcmFuZCB4c2k6dHlwZT0iTXVsdGlwbHkiPgogICAgICAgICAgICAgICAgICAgICAgICA8b3BlcmFuZCBuYW1lPSJkb3Nlc1BlckRheSIgeHNpOnR5cGU9IlF1ZXJ5TGV0UmVmIi8+CiAgICAgICAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIHhzaTp0eXBlPSJEaXZpZGUiPgogICAgICAgICAgICAgICAgICAgICAgICAgICA8b3BlcmFuZCB4c2k6dHlwZT0iTXVsdGlwbHkiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3BlcmFuZCB4c2k6dHlwZT0iVG9EZWNpbWFsIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wZXJhbmQgbmFtZT0icmVwZWF0IiB4c2k6dHlwZT0iUXVlcnlMZXRSZWYiLz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9vcGVyYW5kPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3BlcmFuZCBuYW1lPSJzdXBwbHlEdXJhdGlvbiIgeHNpOnR5cGU9IlF1ZXJ5TGV0UmVmIi8+CiAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvb3BlcmFuZD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wZXJhbmQgeHNpOnR5cGU9IlRvRGVjaW1hbCI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIG5hbWU9InZhbGlkaXR5UGVyaW9kIiB4c2k6dHlwZT0iUXVlcnlMZXRSZWYiLz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9vcGVyYW5kPgogICAgICAgICAgICAgICAgICAgICAgICA8L29wZXJhbmQ+CiAgICAgICAgICAgICAgICAgICAgIDwvb3BlcmFuZD4KICAgICAgICAgICAgICAgICAgICAgPG9wZXJhbmQgeHNpOnR5cGU9IlRvRGVjaW1hbCI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIHhzaTp0eXBlPSJTdWJ0cmFjdCI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIG5hbWU9ImRheXNQYXN0IiB4c2k6dHlwZT0iT3BlcmFuZFJlZiIvPgogICAgICAgICAgICAgICAgICAgICAgICAgICA8b3BlcmFuZCBuYW1lPSJlbmREaWZmZXJlbmNlIiB4c2k6dHlwZT0iUXVlcnlMZXRSZWYiLz4KICAgICAgICAgICAgICAgICAgICAgICAgPC9vcGVyYW5kPgogICAgICAgICAgICAgICAgICAgICA8L29wZXJhbmQ+CiAgICAgICAgICAgICAgICAgIDwvb3BlcmFuZD4KICAgICAgICAgICAgICAgICAgPG9wZXJhbmQgeHNpOnR5cGU9IlRvRGVjaW1hbCI+CiAgICAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIG5hbWU9Im51bURheXNJbkRheXNQYXN0IiB4c2k6dHlwZT0iT3BlcmFuZFJlZiIvPgogICAgICAgICAgICAgICAgICA8L29wZXJhbmQ+CiAgICAgICAgICAgICAgIDwvZXhwcmVzc2lvbj4KICAgICAgICAgICAgPC9yZXR1cm4+CiAgICAgICAgIDwvZXhwcmVzc2lvbj4KICAgICAgICAgPG9wZXJhbmQgbmFtZT0iT3JkZXJzIj4KICAgICAgICAgICAgPG9wZXJhbmRUeXBlU3BlY2lmaWVyIHhzaTp0eXBlPSJMaXN0VHlwZVNwZWNpZmllciI+CiAgICAgICAgICAgICAgIDxlbGVtZW50VHlwZSBuYW1lPSJmaGlyOk1lZGljYXRpb25SZXF1ZXN0IiB4c2k6dHlwZT0iTmFtZWRUeXBlU3BlY2lmaWVyIi8+CiAgICAgICAgICAgIDwvb3BlcmFuZFR5cGVTcGVjaWZpZXI+CiAgICAgICAgIDwvb3BlcmFuZD4KICAgICAgICAgPG9wZXJhbmQgbmFtZT0iZGF5c1Bhc3QiPgogICAgICAgICAgICA8b3BlcmFuZFR5cGVTcGVjaWZpZXIgbmFtZT0idDpJbnRlZ2VyIiB4c2k6dHlwZT0iTmFtZWRUeXBlU3BlY2lmaWVyIi8+CiAgICAgICAgIDwvb3BlcmFuZD4KICAgICAgICAgPG9wZXJhbmQgbmFtZT0ibnVtRGF5c0luRGF5c1Bhc3QiPgogICAgICAgICAgICA8b3BlcmFuZFR5cGVTcGVjaWZpZXIgbmFtZT0idDpJbnRlZ2VyIiB4c2k6dHlwZT0iTmFtZWRUeXBlU3BlY2lmaWVyIi8+CiAgICAgICAgIDwvb3BlcmFuZD4KICAgICAgPC9kZWY+CiAgICAgIDxkZWYgbmFtZT0iSXNOYWxveG9uZSIgY29udGV4dD0iUGF0aWVudCIgYWNjZXNzTGV2ZWw9IlB1YmxpYyIgeHNpOnR5cGU9IkZ1bmN0aW9uRGVmIj4KICAgICAgICAgPGV4cHJlc3Npb24geHNpOnR5cGU9IkluVmFsdWVTZXQiPgogICAgICAgICAgICA8Y29kZSBuYW1lPSJyeE5vcm1Db2RlIiB4c2k6dHlwZT0iT3BlcmFuZFJlZiIvPgogICAgICAgICAgICA8dmFsdWVzZXQgbmFtZT0iTmFsb3hvbmUiLz4KICAgICAgICAgPC9leHByZXNzaW9uPgogICAgICAgICA8b3BlcmFuZCBuYW1lPSJyeE5vcm1Db2RlIj4KICAgICAgICAgICAgPG9wZXJhbmRUeXBlU3BlY2lmaWVyIG5hbWU9InQ6Q29kZSIgeHNpOnR5cGU9Ik5hbWVkVHlwZVNwZWNpZmllciIvPgogICAgICAgICA8L29wZXJhbmQ+CiAgICAgIDwvZGVmPgogICAgICA8ZGVmIG5hbWU9IklzQmVuem9kaWF6ZXBpbmUiIGNvbnRleHQ9IlBhdGllbnQiIGFjY2Vzc0xldmVsPSJQdWJsaWMiIHhzaTp0eXBlPSJGdW5jdGlvbkRlZiI+CiAgICAgICAgIDxleHByZXNzaW9uIHhzaTp0eXBlPSJJblZhbHVlU2V0Ij4KICAgICAgICAgICAgPGNvZGUgbmFtZT0icnhOb3JtQ29kZSIgeHNpOnR5cGU9Ik9wZXJhbmRSZWYiLz4KICAgICAgICAgICAgPHZhbHVlc2V0IG5hbWU9IkJlbnpvZGlhemVwaW5lcyIvPgogICAgICAgICA8L2V4cHJlc3Npb24+CiAgICAgICAgIDxvcGVyYW5kIG5hbWU9InJ4Tm9ybUNvZGUiPgogICAgICAgICAgICA8b3BlcmFuZFR5cGVTcGVjaWZpZXIgbmFtZT0idDpDb2RlIiB4c2k6dHlwZT0iTmFtZWRUeXBlU3BlY2lmaWVyIi8+CiAgICAgICAgIDwvb3BlcmFuZD4KICAgICAgPC9kZWY+CiAgICAgIDxkZWYgbmFtZT0iSXNPcGlvaWRXaXRoQW1idWxhdG9yeUFidXNlUG90ZW50aWFsIiBjb250ZXh0PSJQYXRpZW50IiBhY2Nlc3NMZXZlbD0iUHVibGljIiB4c2k6dHlwZT0iRnVuY3Rpb25EZWYiPgogICAgICAgICA8ZXhwcmVzc2lvbiB4c2k6dHlwZT0iSW5WYWx1ZVNldCI+CiAgICAgICAgICAgIDxjb2RlIG5hbWU9InJ4Tm9ybUNvZGUiIHhzaTp0eXBlPSJPcGVyYW5kUmVmIi8+CiAgICAgICAgICAgIDx2YWx1ZXNldCBuYW1lPSJBbWJ1bGF0b3J5IEFidXNlIFBvdGVudGlhbCBPcGlvaWRzIi8+CiAgICAgICAgIDwvZXhwcmVzc2lvbj4KICAgICAgICAgPG9wZXJhbmQgbmFtZT0icnhOb3JtQ29kZSI+CiAgICAgICAgICAgIDxvcGVyYW5kVHlwZVNwZWNpZmllciBuYW1lPSJ0OkNvZGUiIHhzaTp0eXBlPSJOYW1lZFR5cGVTcGVjaWZpZXIiLz4KICAgICAgICAgPC9vcGVyYW5kPgogICAgICA8L2RlZj4KICAgICAgPGRlZiBuYW1lPSJJc0xvbmdBY3RpbmdPcGlvaWQiIGNvbnRleHQ9IlBhdGllbnQiIGFjY2Vzc0xldmVsPSJQdWJsaWMiIHhzaTp0eXBlPSJGdW5jdGlvbkRlZiI+CiAgICAgICAgIDxleHByZXNzaW9uIHhzaTp0eXBlPSJJblZhbHVlU2V0Ij4KICAgICAgICAgICAgPGNvZGUgbmFtZT0icnhOb3JtQ29kZSIgeHNpOnR5cGU9Ik9wZXJhbmRSZWYiLz4KICAgICAgICAgICAgPHZhbHVlc2V0IG5hbWU9IkxvbmcgQWN0aW5nIE9waW9pZHMiLz4KICAgICAgICAgPC9leHByZXNzaW9uPgogICAgICAgICA8b3BlcmFuZCBuYW1lPSJyeE5vcm1Db2RlIj4KICAgICAgICAgICAgPG9wZXJhbmRUeXBlU3BlY2lmaWVyIG5hbWU9InQ6Q29kZSIgeHNpOnR5cGU9Ik5hbWVkVHlwZVNwZWNpZmllciIvPgogICAgICAgICA8L29wZXJhbmQ+CiAgICAgIDwvZGVmPgogICAgICA8ZGVmIG5hbWU9IklzRW5kT2ZMaWZlT3Bpb2lkIiBjb250ZXh0PSJQYXRpZW50IiBhY2Nlc3NMZXZlbD0iUHVibGljIiB4c2k6dHlwZT0iRnVuY3Rpb25EZWYiPgogICAgICAgICA8ZXhwcmVzc2lvbiB4c2k6dHlwZT0iSW5WYWx1ZVNldCI+CiAgICAgICAgICAgIDxjb2RlIG5hbWU9InJ4Tm9ybUNvZGUiIHhzaTp0eXBlPSJPcGVyYW5kUmVmIi8+CiAgICAgICAgICAgIDx2YWx1ZXNldCBuYW1lPSJFbmQgT2YgTGlmZSBPcGlvaWRzIi8+CiAgICAgICAgIDwvZXhwcmVzc2lvbj4KICAgICAgICAgPG9wZXJhbmQgbmFtZT0icnhOb3JtQ29kZSI+CiAgICAgICAgICAgIDxvcGVyYW5kVHlwZVNwZWNpZmllciBuYW1lPSJ0OkNvZGUiIHhzaTp0eXBlPSJOYW1lZFR5cGVTcGVjaWZpZXIiLz4KICAgICAgICAgPC9vcGVyYW5kPgogICAgICA8L2RlZj4KICAgICAgPGRlZiBuYW1lPSJJc09waW9pZERydWdTY3JlZW4iIGNvbnRleHQ9IlBhdGllbnQiIGFjY2Vzc0xldmVsPSJQdWJsaWMiIHhzaTp0eXBlPSJGdW5jdGlvbkRlZiI+CiAgICAgICAgIDxleHByZXNzaW9uIHhzaTp0eXBlPSJJblZhbHVlU2V0Ij4KICAgICAgICAgICAgPGNvZGUgbmFtZT0ib2JzZXJ2YXRpb25Db2RlIiB4c2k6dHlwZT0iT3BlcmFuZFJlZiIvPgogICAgICAgICAgICA8dmFsdWVzZXQgbmFtZT0iT3Bpb2lkIERydWcgU2NyZWVuaW5nIi8+CiAgICAgICAgIDwvZXhwcmVzc2lvbj4KICAgICAgICAgPG9wZXJhbmQgbmFtZT0ib2JzZXJ2YXRpb25Db2RlIj4KICAgICAgICAgICAgPG9wZXJhbmRUeXBlU3BlY2lmaWVyIG5hbWU9InQ6Q29kZSIgeHNpOnR5cGU9Ik5hbWVkVHlwZVNwZWNpZmllciIvPgogICAgICAgICA8L29wZXJhbmQ+CiAgICAgIDwvZGVmPgogICAgICA8ZGVmIG5hbWU9IklzSWxsaWNpdERydWdTY3JlZW4iIGNvbnRleHQ9IlBhdGllbnQiIGFjY2Vzc0xldmVsPSJQdWJsaWMiIHhzaTp0eXBlPSJGdW5jdGlvbkRlZiI+CiAgICAgICAgIDxleHByZXNzaW9uIHhzaTp0eXBlPSJJblZhbHVlU2V0Ij4KICAgICAgICAgICAgPGNvZGUgbmFtZT0ib2JzZXJ2YXRpb25Db2RlIiB4c2k6dHlwZT0iT3BlcmFuZFJlZiIvPgogICAgICAgICAgICA8dmFsdWVzZXQgbmFtZT0iSWxsaWNpdCBEcnVnIFNjcmVlbmluZyIvPgogICAgICAgICA8L2V4cHJlc3Npb24+CiAgICAgICAgIDxvcGVyYW5kIG5hbWU9Im9ic2VydmF0aW9uQ29kZSI+CiAgICAgICAgICAgIDxvcGVyYW5kVHlwZVNwZWNpZmllciBuYW1lPSJ0OkNvZGUiIHhzaTp0eXBlPSJOYW1lZFR5cGVTcGVjaWZpZXIiLz4KICAgICAgICAgPC9vcGVyYW5kPgogICAgICA8L2RlZj4KICAgICAgPGRlZiBuYW1lPSJHZXRJbmdyZWRpZW50IiBjb250ZXh0PSJQYXRpZW50IiBhY2Nlc3NMZXZlbD0iUHVibGljIiB4c2k6dHlwZT0iRnVuY3Rpb25EZWYiPgogICAgICAgICA8ZXhwcmVzc2lvbiB4c2k6dHlwZT0iUXVlcnkiPgogICAgICAgICAgICA8c291cmNlIGFsaWFzPSIkdGhpcyI+CiAgICAgICAgICAgICAgIDxleHByZXNzaW9uIG5hbWU9IkdldEluZ3JlZGllbnRzIiBsaWJyYXJ5TmFtZT0iT01US0xvZ2ljIiB4c2k6dHlwZT0iRnVuY3Rpb25SZWYiPgogICAgICAgICAgICAgICAgICA8b3BlcmFuZCBuYW1lPSJyeE5vcm1Db2RlIiB4c2k6dHlwZT0iT3BlcmFuZFJlZiIvPgogICAgICAgICAgICAgICA8L2V4cHJlc3Npb24+CiAgICAgICAgICAgIDwvc291cmNlPgogICAgICAgICAgICA8d2hlcmUgeHNpOnR5cGU9Ik5vdCI+CiAgICAgICAgICAgICAgIDxvcGVyYW5kIHhzaTp0eXBlPSJJc051bGwiPgogICAgICAgICAgICAgICAgICA8b3BlcmFuZCBwYXRoPSJpbmdyZWRpZW50TmFtZSIgeHNpOnR5cGU9IlByb3BlcnR5Ij4KICAgICAgICAgICAgICAgICAgICAgPHNvdXJjZSBuYW1lPSIkdGhpcyIgeHNpOnR5cGU9IkFsaWFzUmVmIi8+CiAgICAgICAgICAgICAgICAgIDwvb3BlcmFuZD4KICAgICAgICAgICAgICAgPC9vcGVyYW5kPgogICAgICAgICAgICA8L3doZXJlPgogICAgICAgICAgICA8cmV0dXJuPgogICAgICAgICAgICAgICA8ZXhwcmVzc2lvbiBwYXRoPSJpbmdyZWRpZW50TmFtZSIgeHNpOnR5cGU9IlByb3BlcnR5Ij4KICAgICAgICAgICAgICAgICAgPHNvdXJjZSBuYW1lPSIkdGhpcyIgeHNpOnR5cGU9IkFsaWFzUmVmIi8+CiAgICAgICAgICAgICAgIDwvZXhwcmVzc2lvbj4KICAgICAgICAgICAgPC9yZXR1cm4+CiAgICAgICAgIDwvZXhwcmVzc2lvbj4KICAgICAgICAgPG9wZXJhbmQgbmFtZT0icnhOb3JtQ29kZSI+CiAgICAgICAgICAgIDxvcGVyYW5kVHlwZVNwZWNpZmllciBuYW1lPSJ0OkNvZGUiIHhzaTp0eXBlPSJOYW1lZFR5cGVTcGVjaWZpZXIiLz4KICAgICAgICAgPC9vcGVyYW5kPgogICAgICA8L2RlZj4KICAgPC9zdGF0ZW1lbnRzPgo8L2xpYnJhcnk+Cg==",
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

export const LibraryOpioidcdsRecommendation04: Library = {
  resourceType: "Library",
  id: "opioidcds-recommendation-04",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: opioidcds-recommendation-04</p><p><b>identifier</b>: OpioidCDS_REC_04 (OFFICIAL)</p><p><b>version</b>: 0.1.0</p><p><b>title</b>: Opioid CDS Logic for recommendation #4</p><p><b>status</b>: active</p><p><b>experimental</b>: false</p><p><b>type</b>: Logic Library <span>(Details : {http://terminology.hl7.org/CodeSystem/library-type code 'logic-library' = 'Logic Library', given as 'Logic Library'})</span></p><p><b>date</b>: 25/03/2018 1:49:09 PM</p><p><b>publisher</b>: Centers for Disease Control and Prevention (CDC)</p><p><b>description</b>: Opioid decision support logic for prescribing extended-release/long-acting (ER/LA) opioids when starting a patient on opioids.</p><p><b>useContext</b>: , </p><p><b>jurisdiction</b>: United States of America <span>(Details : {urn:iso:std:iso:3166 code 'US' = 'United States of America', given as 'United States of America'})</span></p><p><b>purpose</b>: The purpose of this library is to determine the appropriateness of extended-release opioids with ambulatory abuse potential for the patient.</p><p><b>usage</b>: This library is used to notify the prescriber/user that immediate-release opioids are recommended when starting a patient on opioids.</p><p><b>copyright</b>: © CDC 2016+.</p><p><b>topic</b>: Opioid Prescribing <span>(Details )</span></p><p><b>author</b>: , , , </p><p><b>relatedArtifact</b>: , </p><p><b>dataRequirement</b>: , </p><p><b>content</b>: </p></div>",
  },
  identifier: [
    {
      use: "official",
      value: "OpioidCDS_REC_04",
    },
  ],
  version: "0.1.0",
  title: "Opioid CDS Logic for recommendation #4",
  status: "active",
  experimental: false,
  type: {
    coding: [
      {
        system: "http://terminology.hl7.org/CodeSystem/library-type",
        code: "logic-library",
        display: "Logic Library",
      },
    ],
  },
  date: "2018-03-25T13:49:09-06:00",
  publisher: "Centers for Disease Control and Prevention (CDC)",
  description:
    "Opioid decision support logic for prescribing extended-release/long-acting (ER/LA) opioids when starting a patient on opioids.",
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
    "The purpose of this library is to determine the appropriateness of extended-release opioids with ambulatory abuse potential for the patient.",
  usage:
    "This library is used to notify the prescriber/user that immediate-release opioids are recommended when starting a patient on opioids.",
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
      type: "depends-on",
      resource: "Library/opioidcds-common",
    },
  ],
  dataRequirement: [
    {
      type: "MedicationRequest",
      codeFilter: [
        {
          path: "medicationCodeableConcept",
          valueSet:
            "http://example.org/fhir/ValueSet/opioids-abused-in-ambulatory-care",
        },
      ],
    },
    {
      type: "Encounter",
    },
  ],
  content: [
    {
      contentType: "application/elm+xml",
      data: "PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPGxpYnJhcnkgeG1sbnM9InVybjpobDctb3JnOmVsbTpyMSIgeG1sbnM6dD0idXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxIiB4bWxuczp4c2k9Imh0dHA6Ly93d3cudzMub3JnLzIwMDEvWE1MU2NoZW1hLWluc3RhbmNlIiB4bWxuczp4c2Q9Imh0dHA6Ly93d3cudzMub3JnLzIwMDEvWE1MU2NoZW1hIiB4bWxuczpmaGlyPSJodHRwOi8vaGw3Lm9yZy9maGlyIiB4bWxuczpxZG00Mz0idXJuOmhlYWx0aGl0LWdvdjpxZG06djRfMyIgeG1sbnM6cWRtNTM9InVybjpoZWFsdGhpdC1nb3Y6cWRtOnY1XzMiIHhtbG5zOmE9InVybjpobDctb3JnOmNxbC1hbm5vdGF0aW9uczpyMSI+CiAgIDxhbm5vdGF0aW9uIHN0YXJ0TGluZT0iNjciIHN0YXJ0Q2hhcj0iNSIgZW5kTGluZT0iNjciIGVuZENoYXI9IjY4IiBtZXNzYWdlPSJDb3VsZCBub3QgcmVzb2x2ZSBjb2RlIHBhdGggbWVkaWNhdGlvbkNvZGVhYmxlQ29uY2VwdCBmb3IgdGhlIHR5cGUgb2YgdGhlIHJldHJpZXZlIEZISVIuTWVkaWNhdGlvblJlcXVlc3QuIiBlcnJvclR5cGU9InNlbWFudGljIiBlcnJvclNldmVyaXR5PSJ3YXJuaW5nIiB4c2k6dHlwZT0iYTpDcWxUb0VsbUVycm9yIi8+CiAgIDxhbm5vdGF0aW9uIHN0YXJ0TGluZT0iNjciIHN0YXJ0Q2hhcj0iNSIgZW5kTGluZT0iNjciIGVuZENoYXI9IjY4IiBtZXNzYWdlPSJDb3VsZCBub3QgcmVzb2x2ZSBtZW1iZXJzaGlwIG9wZXJhdG9yIGZvciB0ZXJtaW5vbG9neSB0YXJnZXQgb2YgdGhlIHJldHJpZXZlLiIgZXJyb3JUeXBlPSJzZW1hbnRpYyIgZXJyb3JTZXZlcml0eT0id2FybmluZyIgeHNpOnR5cGU9ImE6Q3FsVG9FbG1FcnJvciIvPgogICA8YW5ub3RhdGlvbiBzdGFydExpbmU9Ijc4IiBzdGFydENoYXI9IjgzIiBlbmRMaW5lPSI3OCIgZW5kQ2hhcj0iMTI2IiBtZXNzYWdlPSJMaXN0LXZhbHVlZCBleHByZXNzaW9uIHdhcyBkZW1vdGVkIHRvIGEgc2luZ2xldG9uLiIgZXJyb3JUeXBlPSJzZW1hbnRpYyIgZXJyb3JTZXZlcml0eT0id2FybmluZyIgeHNpOnR5cGU9ImE6Q3FsVG9FbG1FcnJvciIvPgogICA8aWRlbnRpZmllciBpZD0iT3Bpb2lkQ0RTX1NUVTRfUkVDXzA0IiB2ZXJzaW9uPSIwLjEuMCIvPgogICA8c2NoZW1hSWRlbnRpZmllciBpZD0idXJuOmhsNy1vcmc6ZWxtIiB2ZXJzaW9uPSJyMSIvPgogICA8dXNpbmdzPgogICAgICA8ZGVmIGxvY2FsSWRlbnRpZmllcj0iU3lzdGVtIiB1cmk9InVybjpobDctb3JnOmVsbS10eXBlczpyMSIvPgogICAgICA8ZGVmIGxvY2FsSWRlbnRpZmllcj0iRkhJUiIgdXJpPSJodHRwOi8vaGw3Lm9yZy9maGlyIiB2ZXJzaW9uPSIzLjIuMCIvPgogICA8L3VzaW5ncz4KICAgPGluY2x1ZGVzPgogICAgICA8ZGVmIGxvY2FsSWRlbnRpZmllcj0iQ29tbW9uIiBwYXRoPSJPcGlvaWRDRFNfU1RVNF9Db21tb24iIHZlcnNpb249IjAuMS4wIi8+CiAgIDwvaW5jbHVkZXM+CiAgIDxwYXJhbWV0ZXJzPgogICAgICA8ZGVmIG5hbWU9IkNvbnRleHRQcmVzY3JpcHRpb25zIiBhY2Nlc3NMZXZlbD0iUHVibGljIj4KICAgICAgICAgPHBhcmFtZXRlclR5cGVTcGVjaWZpZXIgeHNpOnR5cGU9Ikxpc3RUeXBlU3BlY2lmaWVyIj4KICAgICAgICAgICAgPGVsZW1lbnRUeXBlIG5hbWU9ImZoaXI6TWVkaWNhdGlvblJlcXVlc3QiIHhzaTp0eXBlPSJOYW1lZFR5cGVTcGVjaWZpZXIiLz4KICAgICAgICAgPC9wYXJhbWV0ZXJUeXBlU3BlY2lmaWVyPgogICAgICA8L2RlZj4KICAgPC9wYXJhbWV0ZXJzPgogICA8c3RhdGVtZW50cz4KICAgICAgPGRlZiBuYW1lPSJQYXRpZW50IiBjb250ZXh0PSJQYXRpZW50Ij4KICAgICAgICAgPGV4cHJlc3Npb24geHNpOnR5cGU9IlNpbmdsZXRvbkZyb20iPgogICAgICAgICAgICA8b3BlcmFuZCBkYXRhVHlwZT0iZmhpcjpQYXRpZW50IiB4c2k6dHlwZT0iUmV0cmlldmUiLz4KICAgICAgICAgPC9leHByZXNzaW9uPgogICAgICA8L2RlZj4KICAgICAgPGRlZiBuYW1lPSJJbmNsdXNpb24gUGVyaW9kIiBjb250ZXh0PSJQYXRpZW50IiBhY2Nlc3NMZXZlbD0iUHVibGljIj4KICAgICAgICAgPGV4cHJlc3Npb24gbG93Q2xvc2VkPSJ0cnVlIiBoaWdoQ2xvc2VkPSJ0cnVlIiB4c2k6dHlwZT0iSW50ZXJ2YWwiPgogICAgICAgICAgICA8bG93IHhzaTp0eXBlPSJTdWJ0cmFjdCI+CiAgICAgICAgICAgICAgIDxvcGVyYW5kIHhzaTp0eXBlPSJUb2RheSIvPgogICAgICAgICAgICAgICA8b3BlcmFuZCB2YWx1ZT0iOTEiIHVuaXQ9ImRheXMiIHhzaTp0eXBlPSJRdWFudGl0eSIvPgogICAgICAgICAgICA8L2xvdz4KICAgICAgICAgICAgPGhpZ2ggeHNpOnR5cGU9IlN1YnRyYWN0Ij4KICAgICAgICAgICAgICAgPG9wZXJhbmQgeHNpOnR5cGU9IlRvZGF5Ii8+CiAgICAgICAgICAgICAgIDxvcGVyYW5kIHZhbHVlPSIxIiB1bml0PSJkYXlzIiB4c2k6dHlwZT0iUXVhbnRpdHkiLz4KICAgICAgICAgICAgPC9oaWdoPgogICAgICAgICA8L2V4cHJlc3Npb24+CiAgICAgIDwvZGVmPgogICAgICA8ZGVmIG5hbWU9IkVuY291bnRlciBQZXJpb2QiIGNvbnRleHQ9IlBhdGllbnQiIGFjY2Vzc0xldmVsPSJQdWJsaWMiPgogICAgICAgICA8ZXhwcmVzc2lvbiBsb3dDbG9zZWQ9InRydWUiIGhpZ2hDbG9zZWQ9InRydWUiIHhzaTp0eXBlPSJJbnRlcnZhbCI+CiAgICAgICAgICAgIDxsb3cgeHNpOnR5cGU9IlN1YnRyYWN0Ij4KICAgICAgICAgICAgICAgPG9wZXJhbmQgeHNpOnR5cGU9IlN1YnRyYWN0Ij4KICAgICAgICAgICAgICAgICAgPG9wZXJhbmQgeHNpOnR5cGU9IlRvZGF5Ii8+CiAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIHZhbHVlPSIxMiIgdW5pdD0ibW9udGhzIiB4c2k6dHlwZT0iUXVhbnRpdHkiLz4KICAgICAgICAgICAgICAgPC9vcGVyYW5kPgogICAgICAgICAgICAgICA8b3BlcmFuZCB2YWx1ZT0iMSIgdW5pdD0iZGF5cyIgeHNpOnR5cGU9IlF1YW50aXR5Ii8+CiAgICAgICAgICAgIDwvbG93PgogICAgICAgICAgICA8aGlnaCB4c2k6dHlwZT0iU3VidHJhY3QiPgogICAgICAgICAgICAgICA8b3BlcmFuZCB4c2k6dHlwZT0iVG9kYXkiLz4KICAgICAgICAgICAgICAgPG9wZXJhbmQgdmFsdWU9IjEiIHVuaXQ9ImRheXMiIHhzaTp0eXBlPSJRdWFudGl0eSIvPgogICAgICAgICAgICA8L2hpZ2g+CiAgICAgICAgIDwvZXhwcmVzc2lvbj4KICAgICAgPC9kZWY+CiAgICAgIDxkZWYgbmFtZT0iR2V0IFRyaWdnZXIgRXZlbnQgUHJlc2NyaXB0aW9ucyIgY29udGV4dD0iUGF0aWVudCIgYWNjZXNzTGV2ZWw9IlB1YmxpYyI+CiAgICAgICAgIDxleHByZXNzaW9uIHhzaTp0eXBlPSJRdWVyeSI+CiAgICAgICAgICAgIDxzb3VyY2UgYWxpYXM9InRyaWdnZXJTY3JpcHRzIj4KICAgICAgICAgICAgICAgPGV4cHJlc3Npb24gbmFtZT0iQ29udGV4dFByZXNjcmlwdGlvbnMiIHhzaTp0eXBlPSJQYXJhbWV0ZXJSZWYiLz4KICAgICAgICAgICAgPC9zb3VyY2U+CiAgICAgICAgICAgIDxsZXQgaWRlbnRpZmllcj0icnhOb3JtQ29kZSI+CiAgICAgICAgICAgICAgIDxleHByZXNzaW9uIG5hbWU9IlRvQ29kZSIgbGlicmFyeU5hbWU9IkNvbW1vbiIgeHNpOnR5cGU9IkZ1bmN0aW9uUmVmIj4KICAgICAgICAgICAgICAgICAgPG9wZXJhbmQgeHNpOnR5cGU9IkluZGV4ZXIiPgogICAgICAgICAgICAgICAgICAgICA8b3BlcmFuZCBwYXRoPSJjb2RpbmciIHhzaTp0eXBlPSJQcm9wZXJ0eSI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxzb3VyY2UgcGF0aD0ibWVkaWNhdGlvbiIgc2NvcGU9InRyaWdnZXJTY3JpcHRzIiB4c2k6dHlwZT0iUHJvcGVydHkiLz4KICAgICAgICAgICAgICAgICAgICAgPC9vcGVyYW5kPgogICAgICAgICAgICAgICAgICAgICA8b3BlcmFuZCB2YWx1ZVR5cGU9InQ6SW50ZWdlciIgdmFsdWU9IjAiIHhzaTp0eXBlPSJMaXRlcmFsIi8+CiAgICAgICAgICAgICAgICAgIDwvb3BlcmFuZD4KICAgICAgICAgICAgICAgPC9leHByZXNzaW9uPgogICAgICAgICAgICA8L2xldD4KICAgICAgICAgICAgPHdoZXJlIHhzaTp0eXBlPSJBbmQiPgogICAgICAgICAgICAgICA8b3BlcmFuZCBuYW1lPSJJc09waW9pZFdpdGhBbWJ1bGF0b3J5QWJ1c2VQb3RlbnRpYWwiIGxpYnJhcnlOYW1lPSJDb21tb24iIHhzaTp0eXBlPSJGdW5jdGlvblJlZiI+CiAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIG5hbWU9InJ4Tm9ybUNvZGUiIHhzaTp0eXBlPSJRdWVyeUxldFJlZiIvPgogICAgICAgICAgICAgICA8L29wZXJhbmQ+CiAgICAgICAgICAgICAgIDxvcGVyYW5kIG5hbWU9IklzTG9uZ0FjdGluZ09waW9pZCIgbGlicmFyeU5hbWU9IkNvbW1vbiIgeHNpOnR5cGU9IkZ1bmN0aW9uUmVmIj4KICAgICAgICAgICAgICAgICAgPG9wZXJhbmQgbmFtZT0icnhOb3JtQ29kZSIgeHNpOnR5cGU9IlF1ZXJ5TGV0UmVmIi8+CiAgICAgICAgICAgICAgIDwvb3BlcmFuZD4KICAgICAgICAgICAgPC93aGVyZT4KICAgICAgICAgPC9leHByZXNzaW9uPgogICAgICA8L2RlZj4KICAgICAgPGRlZiBuYW1lPSJHZXQgVHJpZ2dlciBUcmlnZ2VyIEV2ZW50IFByZXNjcmlwdGlvbiBJZHMiIGNvbnRleHQ9IlBhdGllbnQiIGFjY2Vzc0xldmVsPSJQdWJsaWMiPgogICAgICAgICA8ZXhwcmVzc2lvbiB4c2k6dHlwZT0iUXVlcnkiPgogICAgICAgICAgICA8c291cmNlIGFsaWFzPSJ0cmlnZ2VyU2NyaXB0cyI+CiAgICAgICAgICAgICAgIDxleHByZXNzaW9uIG5hbWU9IkdldCBUcmlnZ2VyIEV2ZW50IFByZXNjcmlwdGlvbnMiIHhzaTp0eXBlPSJFeHByZXNzaW9uUmVmIi8+CiAgICAgICAgICAgIDwvc291cmNlPgogICAgICAgICAgICA8bGV0IGlkZW50aWZpZXI9ImNvZGVTdHJpbmciPgogICAgICAgICAgICAgICA8ZXhwcmVzc2lvbiB2YWx1ZVR5cGU9InQ6U3RyaW5nIiB2YWx1ZT0iIiB4c2k6dHlwZT0iTGl0ZXJhbCIvPgogICAgICAgICAgICA8L2xldD4KICAgICAgICAgICAgPHJldHVybj4KICAgICAgICAgICAgICAgPGV4cHJlc3Npb24geHNpOnR5cGU9IkNvbmNhdGVuYXRlIj4KICAgICAgICAgICAgICAgICAgPG9wZXJhbmQgeHNpOnR5cGU9IkNvbmNhdGVuYXRlIj4KICAgICAgICAgICAgICAgICAgICAgPG9wZXJhbmQgbmFtZT0iY29kZVN0cmluZyIgeHNpOnR5cGU9IlF1ZXJ5TGV0UmVmIi8+CiAgICAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIHBhdGg9InZhbHVlIiB4c2k6dHlwZT0iUHJvcGVydHkiPgogICAgICAgICAgICAgICAgICAgICAgICA8c291cmNlIHBhdGg9ImlkIiBzY29wZT0idHJpZ2dlclNjcmlwdHMiIHhzaTp0eXBlPSJQcm9wZXJ0eSIvPgogICAgICAgICAgICAgICAgICAgICA8L29wZXJhbmQ+CiAgICAgICAgICAgICAgICAgIDwvb3BlcmFuZD4KICAgICAgICAgICAgICAgICAgPG9wZXJhbmQgdmFsdWVUeXBlPSJ0OlN0cmluZyIgdmFsdWU9IiAiIHhzaTp0eXBlPSJMaXRlcmFsIi8+CiAgICAgICAgICAgICAgIDwvZXhwcmVzc2lvbj4KICAgICAgICAgICAgPC9yZXR1cm4+CiAgICAgICAgIDwvZXhwcmVzc2lvbj4KICAgICAgPC9kZWY+CiAgICAgIDxkZWYgbmFtZT0iVmFsaWRhdGUgVHJpZ2dlciBFdmVudCIgY29udGV4dD0iUGF0aWVudCIgYWNjZXNzTGV2ZWw9IlB1YmxpYyI+CiAgICAgICAgIDxleHByZXNzaW9uIHhzaTp0eXBlPSJFeGlzdHMiPgogICAgICAgICAgICA8b3BlcmFuZCBuYW1lPSJHZXQgVHJpZ2dlciBFdmVudCBQcmVzY3JpcHRpb25zIiB4c2k6dHlwZT0iRXhwcmVzc2lvblJlZiIvPgogICAgICAgICA8L2V4cHJlc3Npb24+CiAgICAgIDwvZGVmPgogICAgICA8ZGVmIG5hbWU9Ik9waW9pZCB3aXRoIEFtYnVsYXRvcnkgQ2FyZSBBYnVzZSBQb3RlbnRpYWwgaW4gUGFzdCA5MCBEYXlzIiBjb250ZXh0PSJQYXRpZW50IiBhY2Nlc3NMZXZlbD0iUHVibGljIj4KICAgICAgICAgPGV4cHJlc3Npb24geHNpOnR5cGU9IkV4aXN0cyI+CiAgICAgICAgICAgIDxvcGVyYW5kIHhzaTp0eXBlPSJRdWVyeSI+CiAgICAgICAgICAgICAgIDxzb3VyY2UgYWxpYXM9Im9yZGVycyI+CiAgICAgICAgICAgICAgICAgIDxleHByZXNzaW9uIGRhdGFUeXBlPSJmaGlyOk1lZGljYXRpb25SZXF1ZXN0IiBjb2RlUHJvcGVydHk9Im1lZGljYXRpb25Db2RlYWJsZUNvbmNlcHQiIHhzaTp0eXBlPSJSZXRyaWV2ZSI+CiAgICAgICAgICAgICAgICAgICAgIDxjb2RlcyBuYW1lPSJBbWJ1bGF0b3J5IEFidXNlIFBvdGVudGlhbCBPcGlvaWRzIiBsaWJyYXJ5TmFtZT0iQ29tbW9uIiB4c2k6dHlwZT0iVmFsdWVTZXRSZWYiLz4KICAgICAgICAgICAgICAgICAgPC9leHByZXNzaW9uPgogICAgICAgICAgICAgICA8L3NvdXJjZT4KICAgICAgICAgICAgICAgPHdoZXJlIHhzaTp0eXBlPSJJbiI+CiAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIHhzaTp0eXBlPSJEYXRlRnJvbSI+CiAgICAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIHBhdGg9InZhbHVlIiB4c2k6dHlwZT0iUHJvcGVydHkiPgogICAgICAgICAgICAgICAgICAgICAgICA8c291cmNlIHBhdGg9ImF1dGhvcmVkT24iIHNjb3BlPSJvcmRlcnMiIHhzaTp0eXBlPSJQcm9wZXJ0eSIvPgogICAgICAgICAgICAgICAgICAgICA8L29wZXJhbmQ+CiAgICAgICAgICAgICAgICAgIDwvb3BlcmFuZD4KICAgICAgICAgICAgICAgICAgPG9wZXJhbmQgbmFtZT0iSW5jbHVzaW9uIFBlcmlvZCIgeHNpOnR5cGU9IkV4cHJlc3Npb25SZWYiLz4KICAgICAgICAgICAgICAgPC93aGVyZT4KICAgICAgICAgICAgPC9vcGVyYW5kPgogICAgICAgICA8L2V4cHJlc3Npb24+CiAgICAgIDwvZGVmPgogICAgICA8ZGVmIG5hbWU9IkluY2x1c2lvbiBDcml0ZXJpYSIgY29udGV4dD0iUGF0aWVudCIgYWNjZXNzTGV2ZWw9IlB1YmxpYyI+CiAgICAgICAgIDxleHByZXNzaW9uIHhzaTp0eXBlPSJBbmQiPgogICAgICAgICAgICA8b3BlcmFuZCB4c2k6dHlwZT0iQW5kIj4KICAgICAgICAgICAgICAgPG9wZXJhbmQgbmFtZT0iVmFsaWRhdGUgVHJpZ2dlciBFdmVudCIgeHNpOnR5cGU9IkV4cHJlc3Npb25SZWYiLz4KICAgICAgICAgICAgICAgPG9wZXJhbmQgeHNpOnR5cGU9Ik5vdCI+CiAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIG5hbWU9Ik9waW9pZCB3aXRoIEFtYnVsYXRvcnkgQ2FyZSBBYnVzZSBQb3RlbnRpYWwgaW4gUGFzdCA5MCBEYXlzIiB4c2k6dHlwZT0iRXhwcmVzc2lvblJlZiIvPgogICAgICAgICAgICAgICA8L29wZXJhbmQ+CiAgICAgICAgICAgIDwvb3BlcmFuZD4KICAgICAgICAgICAgPG9wZXJhbmQgeHNpOnR5cGU9IkV4aXN0cyI+CiAgICAgICAgICAgICAgIDxvcGVyYW5kIHhzaTp0eXBlPSJRdWVyeSI+CiAgICAgICAgICAgICAgICAgIDxzb3VyY2UgYWxpYXM9ImVuY291bnRlcnMiPgogICAgICAgICAgICAgICAgICAgICA8ZXhwcmVzc2lvbiBkYXRhVHlwZT0iZmhpcjpFbmNvdW50ZXIiIHhzaTp0eXBlPSJSZXRyaWV2ZSIvPgogICAgICAgICAgICAgICAgICA8L3NvdXJjZT4KICAgICAgICAgICAgICAgICAgPHdoZXJlIHhzaTp0eXBlPSJJbiI+CiAgICAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIHhzaTp0eXBlPSJEYXRlRnJvbSI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIHBhdGg9InZhbHVlIiB4c2k6dHlwZT0iUHJvcGVydHkiPgogICAgICAgICAgICAgICAgICAgICAgICAgICA8c291cmNlIHBhdGg9InN0YXJ0IiB4c2k6dHlwZT0iUHJvcGVydHkiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c291cmNlIHBhdGg9InBlcmlvZCIgc2NvcGU9ImVuY291bnRlcnMiIHhzaTp0eXBlPSJQcm9wZXJ0eSIvPgogICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NvdXJjZT4KICAgICAgICAgICAgICAgICAgICAgICAgPC9vcGVyYW5kPgogICAgICAgICAgICAgICAgICAgICA8L29wZXJhbmQ+CiAgICAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIG5hbWU9IkVuY291bnRlciBQZXJpb2QiIHhzaTp0eXBlPSJFeHByZXNzaW9uUmVmIi8+CiAgICAgICAgICAgICAgICAgIDwvd2hlcmU+CiAgICAgICAgICAgICAgIDwvb3BlcmFuZD4KICAgICAgICAgICAgPC9vcGVyYW5kPgogICAgICAgICA8L2V4cHJlc3Npb24+CiAgICAgIDwvZGVmPgogICAgICA8ZGVmIG5hbWU9IkdldCBJbmRpY2F0b3IiIGNvbnRleHQ9IlBhdGllbnQiIGFjY2Vzc0xldmVsPSJQdWJsaWMiPgogICAgICAgICA8ZXhwcmVzc2lvbiB2YWx1ZVR5cGU9InQ6U3RyaW5nIiB2YWx1ZT0id2FybmluZyIgeHNpOnR5cGU9IkxpdGVyYWwiLz4KICAgICAgPC9kZWY+CiAgICAgIDxkZWYgbmFtZT0iR2V0IFN1bW1hcnkiIGNvbnRleHQ9IlBhdGllbnQiIGFjY2Vzc0xldmVsPSJQdWJsaWMiPgogICAgICAgICA8ZXhwcmVzc2lvbiB2YWx1ZVR5cGU9InQ6U3RyaW5nIiB2YWx1ZT0iUmVjb21tZW5kIHVzZSBvZiBpbW1lZGlhdGUtcmVsZWFzZSBvcGlvaWRzIGluc3RlYWQgb2YgZXh0ZW5kZWQgcmVsZWFzZS9sb25nIGFjdGluZyBvcGlvaWRzIHdoZW4gc3RhcnRpbmcgcGF0aWVudCBvbiBvcGlvaWRzLiIgeHNpOnR5cGU9IkxpdGVyYWwiLz4KICAgICAgPC9kZWY+CiAgICAgIDxkZWYgbmFtZT0iR2V0IERldGFpbCIgY29udGV4dD0iUGF0aWVudCIgYWNjZXNzTGV2ZWw9IlB1YmxpYyI+CiAgICAgICAgIDxleHByZXNzaW9uIHhzaTp0eXBlPSJDb25jYXRlbmF0ZSI+CiAgICAgICAgICAgIDxvcGVyYW5kIHZhbHVlVHlwZT0idDpTdHJpbmciIHZhbHVlPSJUaGUgZm9sbG93aW5nIG1lZGljYXRpb24gcmVxdWVzdHMocykgcmVsZWFzZSByYXRlcyBzaG91bGQgYmUgcmUtZXZhbHVhdGVkOiAiIHhzaTp0eXBlPSJMaXRlcmFsIi8+CiAgICAgICAgICAgIDxvcGVyYW5kIHhzaTp0eXBlPSJTaW5nbGV0b25Gcm9tIj4KICAgICAgICAgICAgICAgPG9wZXJhbmQgbmFtZT0iR2V0IFRyaWdnZXIgVHJpZ2dlciBFdmVudCBQcmVzY3JpcHRpb24gSWRzIiB4c2k6dHlwZT0iRXhwcmVzc2lvblJlZiIvPgogICAgICAgICAgICA8L29wZXJhbmQ+CiAgICAgICAgIDwvZXhwcmVzc2lvbj4KICAgICAgPC9kZWY+CiAgIDwvc3RhdGVtZW50cz4KPC9saWJyYXJ5Pgo=",
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

export const LibraryOpioidcdsRecommendation05: Library = {
  resourceType: "Library",
  id: "opioidcds-recommendation-05",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: opioidcds-recommendation-05</p><p><b>identifier</b>: OpioidCDS_REC_05 (OFFICIAL)</p><p><b>version</b>: 0.1.0</p><p><b>title</b>: Opioid CDS Logic for recommendation #5</p><p><b>status</b>: active</p><p><b>experimental</b>: false</p><p><b>type</b>: Logic Library <span>(Details : {http://terminology.hl7.org/CodeSystem/library-type code 'logic-library' = 'Logic Library', given as 'Logic Library'})</span></p><p><b>date</b>: 25/03/2018 1:49:09 PM</p><p><b>publisher</b>: Centers for Disease Control and Prevention (CDC)</p><p><b>description</b>: Opioid Decision Support Logic for use in implementing CDC Opioid Prescribing Guidelines.</p><p><b>useContext</b>: , </p><p><b>jurisdiction</b>: United States of America <span>(Details : {urn:iso:std:iso:3166 code 'US' = 'United States of America', given as 'United States of America'})</span></p><p><b>purpose</b>: This library works in concert with the OMTK logic library to provide decision support for Morphine Milligram Equivalence calculations and dynamic value resolution.</p><p><b>usage</b>: This library is to notify the prescriber/user whether the current prescription exceeds the recommended MME.</p><p><b>copyright</b>: © CDC 2016+.</p><p><b>topic</b>: Opioid Prescribing <span>(Details )</span></p><p><b>author</b>: , , , </p><p><b>relatedArtifact</b>: , , </p><p><b>dataRequirement</b>: </p><p><b>content</b>: </p></div>",
  },
  identifier: [
    {
      use: "official",
      value: "OpioidCDS_REC_05",
    },
  ],
  version: "0.1.0",
  title: "Opioid CDS Logic for recommendation #5",
  status: "active",
  experimental: false,
  type: {
    coding: [
      {
        system: "http://terminology.hl7.org/CodeSystem/library-type",
        code: "logic-library",
        display: "Logic Library",
      },
    ],
  },
  date: "2018-03-25T13:49:09-06:00",
  publisher: "Centers for Disease Control and Prevention (CDC)",
  description:
    "Opioid Decision Support Logic for use in implementing CDC Opioid Prescribing Guidelines.",
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
    "This library works in concert with the OMTK logic library to provide decision support for Morphine Milligram Equivalence calculations and dynamic value resolution.",
  usage:
    "This library is to notify the prescriber/user whether the current prescription exceeds the recommended MME.",
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
      type: "depends-on",
      resource: "Library/opioidcds-common",
    },
    {
      type: "documentation",
      display: "MME Conversion Tables",
      url: "https://www.cdc.gov/drugoverdose/pdf/calculating_total_daily_dose-a.pdf",
    },
  ],
  dataRequirement: [
    {
      id: "medications",
      type: "MedicationRequest",
      codeFilter: [
        {
          path: "status",
          code: [
            {
              code: "active",
            },
          ],
        },
        {
          path: "category",
          code: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/medicationrequest-category",
              code: "outpatient",
            },
          ],
        },
      ],
    },
  ],
  content: [
    {
      contentType: "application/elm+xml",
      data: "PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPGxpYnJhcnkgeG1sbnM9InVybjpobDctb3JnOmVsbTpyMSIgeG1sbnM6dD0idXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxIiB4bWxuczp4c2k9Imh0dHA6Ly93d3cudzMub3JnLzIwMDEvWE1MU2NoZW1hLWluc3RhbmNlIiB4bWxuczp4c2Q9Imh0dHA6Ly93d3cudzMub3JnLzIwMDEvWE1MU2NoZW1hIiB4bWxuczpmaGlyPSJodHRwOi8vaGw3Lm9yZy9maGlyIiB4bWxuczpxZG00Mz0idXJuOmhlYWx0aGl0LWdvdjpxZG06djRfMyIgeG1sbnM6cWRtNTM9InVybjpoZWFsdGhpdC1nb3Y6cWRtOnY1XzMiIHhtbG5zOmE9InVybjpobDctb3JnOmNxbC1hbm5vdGF0aW9uczpyMSI+CiAgIDxpZGVudGlmaWVyIGlkPSJPcGlvaWRDRFNfU1RVNCIgdmVyc2lvbj0iMC4xLjAiLz4KICAgPHNjaGVtYUlkZW50aWZpZXIgaWQ9InVybjpobDctb3JnOmVsbSIgdmVyc2lvbj0icjEiLz4KICAgPHVzaW5ncz4KICAgICAgPGRlZiBsb2NhbElkZW50aWZpZXI9IlN5c3RlbSIgdXJpPSJ1cm46aGw3LW9yZzplbG0tdHlwZXM6cjEiLz4KICAgICAgPGRlZiBsb2NhbElkZW50aWZpZXI9IkZISVIiIHVyaT0iaHR0cDovL2hsNy5vcmcvZmhpciIgdmVyc2lvbj0iMy4yLjAiLz4KICAgPC91c2luZ3M+CiAgIDxpbmNsdWRlcz4KICAgICAgPGRlZiBsb2NhbElkZW50aWZpZXI9Ik1NRUNvbW1vbiIgcGF0aD0iT3Bpb2lkQ0RTX1NUVTRfQ29tbW9uIiB2ZXJzaW9uPSIwLjEuMCIvPgogICA8L2luY2x1ZGVzPgogICA8cGFyYW1ldGVycz4KICAgICAgPGRlZiBuYW1lPSJVc2VySUQiIGFjY2Vzc0xldmVsPSJQdWJsaWMiPgogICAgICAgICA8cGFyYW1ldGVyVHlwZVNwZWNpZmllciBuYW1lPSJ0OlN0cmluZyIgeHNpOnR5cGU9Ik5hbWVkVHlwZVNwZWNpZmllciIvPgogICAgICA8L2RlZj4KICAgICAgPGRlZiBuYW1lPSJDb250ZXh0UHJlc2NyaXB0aW9ucyIgYWNjZXNzTGV2ZWw9IlB1YmxpYyI+CiAgICAgICAgIDxwYXJhbWV0ZXJUeXBlU3BlY2lmaWVyIHhzaTp0eXBlPSJMaXN0VHlwZVNwZWNpZmllciI+CiAgICAgICAgICAgIDxlbGVtZW50VHlwZSBuYW1lPSJmaGlyOk1lZGljYXRpb25SZXF1ZXN0IiB4c2k6dHlwZT0iTmFtZWRUeXBlU3BlY2lmaWVyIi8+CiAgICAgICAgIDwvcGFyYW1ldGVyVHlwZVNwZWNpZmllcj4KICAgICAgPC9kZWY+CiAgIDwvcGFyYW1ldGVycz4KICAgPHN0YXRlbWVudHM+CiAgICAgIDxkZWYgbmFtZT0iUGF0aWVudCIgY29udGV4dD0iUGF0aWVudCI+CiAgICAgICAgIDxleHByZXNzaW9uIHhzaTp0eXBlPSJTaW5nbGV0b25Gcm9tIj4KICAgICAgICAgICAgPG9wZXJhbmQgZGF0YVR5cGU9ImZoaXI6UGF0aWVudCIgeHNpOnR5cGU9IlJldHJpZXZlIi8+CiAgICAgICAgIDwvZXhwcmVzc2lvbj4KICAgICAgPC9kZWY+CiAgICAgIDxkZWYgbmFtZT0iR2V0IEFjdGl2ZSBQcmVzY3JpcHRpb25zIiBjb250ZXh0PSJQYXRpZW50IiBhY2Nlc3NMZXZlbD0iUHVibGljIj4KICAgICAgICAgPGV4cHJlc3Npb24geHNpOnR5cGU9IlF1ZXJ5Ij4KICAgICAgICAgICAgPHNvdXJjZSBhbGlhcz0iYWN0aXZlUngiPgogICAgICAgICAgICAgICA8ZXhwcmVzc2lvbiBkYXRhVHlwZT0iZmhpcjpNZWRpY2F0aW9uUmVxdWVzdCIgeHNpOnR5cGU9IlJldHJpZXZlIi8+CiAgICAgICAgICAgIDwvc291cmNlPgogICAgICAgICAgICA8d2hlcmUgeHNpOnR5cGU9IkFuZCI+CiAgICAgICAgICAgICAgIDxvcGVyYW5kIHhzaTp0eXBlPSJFcXVhbCI+CiAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIHBhdGg9InZhbHVlIiB4c2k6dHlwZT0iUHJvcGVydHkiPgogICAgICAgICAgICAgICAgICAgICA8c291cmNlIHBhdGg9InN0YXR1cyIgc2NvcGU9ImFjdGl2ZVJ4IiB4c2k6dHlwZT0iUHJvcGVydHkiLz4KICAgICAgICAgICAgICAgICAgPC9vcGVyYW5kPgogICAgICAgICAgICAgICAgICA8b3BlcmFuZCB2YWx1ZVR5cGU9InQ6U3RyaW5nIiB2YWx1ZT0iYWN0aXZlIiB4c2k6dHlwZT0iTGl0ZXJhbCIvPgogICAgICAgICAgICAgICA8L29wZXJhbmQ+CiAgICAgICAgICAgICAgIDxvcGVyYW5kIHhzaTp0eXBlPSJFcXVhbCI+CiAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIHBhdGg9InZhbHVlIiB4c2k6dHlwZT0iUHJvcGVydHkiPgogICAgICAgICAgICAgICAgICAgICA8c291cmNlIHBhdGg9ImNvZGUiIHhzaTp0eXBlPSJQcm9wZXJ0eSI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxzb3VyY2UgeHNpOnR5cGU9IkluZGV4ZXIiPgogICAgICAgICAgICAgICAgICAgICAgICAgICA8b3BlcmFuZCB4c2k6dHlwZT0iRmxhdHRlbiI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIHhzaTp0eXBlPSJRdWVyeSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzb3VyY2UgYWxpYXM9IiR0aGlzIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGV4cHJlc3Npb24gcGF0aD0iY2F0ZWdvcnkiIHNjb3BlPSJhY3RpdmVSeCIgeHNpOnR5cGU9IlByb3BlcnR5Ii8+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc291cmNlPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8d2hlcmUgeHNpOnR5cGU9Ik5vdCI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIHhzaTp0eXBlPSJJc051bGwiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3BlcmFuZCBwYXRoPSJjb2RpbmciIHhzaTp0eXBlPSJQcm9wZXJ0eSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzb3VyY2UgbmFtZT0iJHRoaXMiIHhzaTp0eXBlPSJBbGlhc1JlZiIvPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L29wZXJhbmQ+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvb3BlcmFuZD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC93aGVyZT4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJldHVybj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGV4cHJlc3Npb24gcGF0aD0iY29kaW5nIiB4c2k6dHlwZT0iUHJvcGVydHkiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c291cmNlIG5hbWU9IiR0aGlzIiB4c2k6dHlwZT0iQWxpYXNSZWYiLz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9leHByZXNzaW9uPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3JldHVybj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9vcGVyYW5kPgogICAgICAgICAgICAgICAgICAgICAgICAgICA8L29wZXJhbmQ+CiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIHZhbHVlVHlwZT0idDpJbnRlZ2VyIiB2YWx1ZT0iMCIgeHNpOnR5cGU9IkxpdGVyYWwiLz4KICAgICAgICAgICAgICAgICAgICAgICAgPC9zb3VyY2U+CiAgICAgICAgICAgICAgICAgICAgIDwvc291cmNlPgogICAgICAgICAgICAgICAgICA8L29wZXJhbmQ+CiAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIHZhbHVlVHlwZT0idDpTdHJpbmciIHZhbHVlPSJvdXRwYXRpZW50IiB4c2k6dHlwZT0iTGl0ZXJhbCIvPgogICAgICAgICAgICAgICA8L29wZXJhbmQ+CiAgICAgICAgICAgIDwvd2hlcmU+CiAgICAgICAgIDwvZXhwcmVzc2lvbj4KICAgICAgPC9kZWY+CiAgICAgIDxkZWYgbmFtZT0iVG90YWwgTU1FIiBjb250ZXh0PSJQYXRpZW50IiBhY2Nlc3NMZXZlbD0iUHVibGljIj4KICAgICAgICAgPGV4cHJlc3Npb24gbmFtZT0iVG90YWxNTUUiIGxpYnJhcnlOYW1lPSJNTUVDb21tb24iIHhzaTp0eXBlPSJGdW5jdGlvblJlZiI+CiAgICAgICAgICAgIDxvcGVyYW5kIHhzaTp0eXBlPSJVbmlvbiI+CiAgICAgICAgICAgICAgIDxvcGVyYW5kIG5hbWU9IkNvbnRleHRQcmVzY3JpcHRpb25zIiB4c2k6dHlwZT0iUGFyYW1ldGVyUmVmIi8+CiAgICAgICAgICAgICAgIDxvcGVyYW5kIG5hbWU9IkdldCBBY3RpdmUgUHJlc2NyaXB0aW9ucyIgeHNpOnR5cGU9IkV4cHJlc3Npb25SZWYiLz4KICAgICAgICAgICAgPC9vcGVyYW5kPgogICAgICAgICA8L2V4cHJlc3Npb24+CiAgICAgIDwvZGVmPgogICAgICA8ZGVmIG5hbWU9IklzIE1NRSA1MCBPciBNb3JlPyIgY29udGV4dD0iUGF0aWVudCIgYWNjZXNzTGV2ZWw9IlB1YmxpYyI+CiAgICAgICAgIDxleHByZXNzaW9uIHhzaTp0eXBlPSJHcmVhdGVyT3JFcXVhbCI+CiAgICAgICAgICAgIDxvcGVyYW5kIG5hbWU9IlRvdGFsIE1NRSIgeHNpOnR5cGU9IkV4cHJlc3Npb25SZWYiLz4KICAgICAgICAgICAgPG9wZXJhbmQgdmFsdWU9IjUwIiB1bml0PSJtZy9kIiB4c2k6dHlwZT0iUXVhbnRpdHkiLz4KICAgICAgICAgPC9leHByZXNzaW9uPgogICAgICA8L2RlZj4KICAgICAgPGRlZiBuYW1lPSJHZXQgSW5kaWNhdG9yIiBjb250ZXh0PSJQYXRpZW50IiBhY2Nlc3NMZXZlbD0iUHVibGljIj4KICAgICAgICAgPGV4cHJlc3Npb24gdmFsdWVUeXBlPSJ0OlN0cmluZyIgdmFsdWU9Indhcm5pbmciIHhzaTp0eXBlPSJMaXRlcmFsIi8+CiAgICAgIDwvZGVmPgogICAgICA8ZGVmIG5hbWU9IkdldCBTdW1tYXJ5IiBjb250ZXh0PSJQYXRpZW50IiBhY2Nlc3NMZXZlbD0iUHVibGljIj4KICAgICAgICAgPGV4cHJlc3Npb24geHNpOnR5cGU9IkNvbmNhdGVuYXRlIj4KICAgICAgICAgICAgPG9wZXJhbmQgdmFsdWVUeXBlPSJ0OlN0cmluZyIgdmFsdWU9IkhpZ2ggcmlzayBmb3Igb3Bpb2lkIG92ZXJkb3NlIC0gIiB4c2k6dHlwZT0iTGl0ZXJhbCIvPgogICAgICAgICAgICA8b3BlcmFuZCB4c2k6dHlwZT0iQ2FzZSI+CiAgICAgICAgICAgICAgIDxjYXNlSXRlbT4KICAgICAgICAgICAgICAgICAgPHdoZW4geHNpOnR5cGU9IkdyZWF0ZXJPckVxdWFsIj4KICAgICAgICAgICAgICAgICAgICAgPG9wZXJhbmQgcGF0aD0idmFsdWUiIHhzaTp0eXBlPSJQcm9wZXJ0eSI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxzb3VyY2UgbmFtZT0iVG90YWwgTU1FIiB4c2k6dHlwZT0iRXhwcmVzc2lvblJlZiIvPgogICAgICAgICAgICAgICAgICAgICA8L29wZXJhbmQ+CiAgICAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIHhzaTp0eXBlPSJUb0RlY2ltYWwiPgogICAgICAgICAgICAgICAgICAgICAgICA8b3BlcmFuZCB2YWx1ZVR5cGU9InQ6SW50ZWdlciIgdmFsdWU9IjkwIiB4c2k6dHlwZT0iTGl0ZXJhbCIvPgogICAgICAgICAgICAgICAgICAgICA8L29wZXJhbmQ+CiAgICAgICAgICAgICAgICAgIDwvd2hlbj4KICAgICAgICAgICAgICAgICAgPHRoZW4gdmFsdWVUeXBlPSJ0OlN0cmluZyIgdmFsdWU9InRhcGVyIG5vdyIgeHNpOnR5cGU9IkxpdGVyYWwiLz4KICAgICAgICAgICAgICAgPC9jYXNlSXRlbT4KICAgICAgICAgICAgICAgPGVsc2UgdmFsdWVUeXBlPSJ0OlN0cmluZyIgdmFsdWU9ImNvbnNpZGVyIHRhcGVyaW5nIiB4c2k6dHlwZT0iTGl0ZXJhbCIvPgogICAgICAgICAgICA8L29wZXJhbmQ+CiAgICAgICAgIDwvZXhwcmVzc2lvbj4KICAgICAgPC9kZWY+CiAgICAgIDxkZWYgbmFtZT0iR2V0IERldGFpbCIgY29udGV4dD0iUGF0aWVudCIgYWNjZXNzTGV2ZWw9IlB1YmxpYyI+CiAgICAgICAgIDxleHByZXNzaW9uIHhzaTp0eXBlPSJDb25jYXRlbmF0ZSI+CiAgICAgICAgICAgIDxvcGVyYW5kIHhzaTp0eXBlPSJDb25jYXRlbmF0ZSI+CiAgICAgICAgICAgICAgIDxvcGVyYW5kIHZhbHVlVHlwZT0idDpTdHJpbmciIHZhbHVlPSJUb3RhbCBtb3JwaGluZSBtaWxsaWdyYW0gZXF1aXZhbGVudCAoTU1FKSBpcyAiIHhzaTp0eXBlPSJMaXRlcmFsIi8+CiAgICAgICAgICAgICAgIDxvcGVyYW5kIHhzaTp0eXBlPSJUb1N0cmluZyI+CiAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIG5hbWU9IlRvdGFsIE1NRSIgeHNpOnR5cGU9IkV4cHJlc3Npb25SZWYiLz4KICAgICAgICAgICAgICAgPC9vcGVyYW5kPgogICAgICAgICAgICA8L29wZXJhbmQ+CiAgICAgICAgICAgIDxvcGVyYW5kIHZhbHVlVHlwZT0idDpTdHJpbmciIHZhbHVlPSIuIFRhcGVyIHRvIGxlc3MgdGhhbiA1MC4iIHhzaTp0eXBlPSJMaXRlcmFsIi8+CiAgICAgICAgIDwvZXhwcmVzc2lvbj4KICAgICAgPC9kZWY+CiAgIDwvc3RhdGVtZW50cz4KPC9saWJyYXJ5Pgo=",
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

export const LibraryOpioidcdsRecommendation07: Library = {
  resourceType: "Library",
  id: "opioidcds-recommendation-07",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: opioidcds-recommendation-07</p><p><b>identifier</b>: OpioidCDS_REC_07 (OFFICIAL)</p><p><b>version</b>: 0.1.0</p><p><b>title</b>: Opioid CDS Logic for recommendation #7</p><p><b>status</b>: active</p><p><b>experimental</b>: false</p><p><b>type</b>: Logic Library <span>(Details : {http://terminology.hl7.org/CodeSystem/library-type code 'logic-library' = 'Logic Library', given as 'Logic Library'})</span></p><p><b>date</b>: 25/03/2018 1:49:09 PM</p><p><b>publisher</b>: Centers for Disease Control and Prevention (CDC)</p><p><b>description</b>: Opioid decision support logic to evaluate benefits and harms with patients within 1 to 4 weeks of starting opioid therapy and harms of continued therapy with patients every 3 months or more frequently.</p><p><b>useContext</b>: , </p><p><b>jurisdiction</b>: United States of America <span>(Details : {urn:iso:std:iso:3166 code 'US' = 'United States of America', given as 'United States of America'})</span></p><p><b>purpose</b>: The purpose of this library is to determine whether the patient has been evaluated for benefits and harms within 1 to 4 weeks of starting opioid therapy and every 3 months or more subsequently.</p><p><b>usage</b>: This library is used to notify the prescriber/user whether an evaluation for benefits and harms associated with opioid therapy is recommended for the patient.</p><p><b>copyright</b>: © CDC 2016+.</p><p><b>topic</b>: Opioid Prescribing <span>(Details )</span></p><p><b>author</b>: , , , </p><p><b>relatedArtifact</b>: , </p><p><b>dataRequirement</b>: , , , , </p><p><b>content</b>: </p></div>",
  },
  identifier: [
    {
      use: "official",
      value: "OpioidCDS_REC_07",
    },
  ],
  version: "0.1.0",
  title: "Opioid CDS Logic for recommendation #7",
  status: "active",
  experimental: false,
  type: {
    coding: [
      {
        system: "http://terminology.hl7.org/CodeSystem/library-type",
        code: "logic-library",
        display: "Logic Library",
      },
    ],
  },
  date: "2018-03-25T13:49:09-06:00",
  publisher: "Centers for Disease Control and Prevention (CDC)",
  description:
    "Opioid decision support logic to evaluate benefits and harms with patients within 1 to 4 weeks of starting opioid therapy and harms of continued therapy with patients every 3 months or more frequently.",
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
    "The purpose of this library is to determine whether the patient has been evaluated for benefits and harms within 1 to 4 weeks of starting opioid therapy and every 3 months or more subsequently.",
  usage:
    "This library is used to notify the prescriber/user whether an evaluation for benefits and harms associated with opioid therapy is recommended for the patient.",
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
      type: "depends-on",
      resource: "Library/opioidcds-common",
    },
  ],
  dataRequirement: [
    {
      type: "MedicationRequest",
      codeFilter: [
        {
          path: "medicationCodeableConcept",
          valueSet:
            "http://example.org/fhir/ValueSet/opioids-indicating-end-of-life",
        },
      ],
    },
    {
      type: "Procedure",
      codeFilter: [
        {
          path: "code",
        },
      ],
    },
    {
      type: "Procedure",
      codeFilter: [
        {
          path: "code",
        },
      ],
    },
    {
      type: "MedicationRequest",
      codeFilter: [
        {
          path: "medicationCodeableConcept",
          valueSet:
            "http://example.org/fhir/ValueSet/opioids-abused-in-ambulatory-care",
        },
      ],
    },
    {
      type: "Encounter",
    },
  ],
  content: [
    {
      contentType: "application/elm+xml",
      data: "PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPGxpYnJhcnkgeG1sbnM9InVybjpobDctb3JnOmVsbTpyMSIgeG1sbnM6dD0idXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxIiB4bWxuczp4c2k9Imh0dHA6Ly93d3cudzMub3JnLzIwMDEvWE1MU2NoZW1hLWluc3RhbmNlIiB4bWxuczp4c2Q9Imh0dHA6Ly93d3cudzMub3JnLzIwMDEvWE1MU2NoZW1hIiB4bWxuczpmaGlyPSJodHRwOi8vaGw3Lm9yZy9maGlyIiB4bWxuczpxZG00Mz0idXJuOmhlYWx0aGl0LWdvdjpxZG06djRfMyIgeG1sbnM6cWRtNTM9InVybjpoZWFsdGhpdC1nb3Y6cWRtOnY1XzMiIHhtbG5zOmE9InVybjpobDctb3JnOmNxbC1hbm5vdGF0aW9uczpyMSI+CiAgIDxhbm5vdGF0aW9uIHN0YXJ0TGluZT0iNzYiIHN0YXJ0Q2hhcj0iMyIgZW5kTGluZT0iNzYiIGVuZENoYXI9IjUxIiBtZXNzYWdlPSJDb3VsZCBub3QgcmVzb2x2ZSBjb2RlIHBhdGggbWVkaWNhdGlvbkNvZGVhYmxlQ29uY2VwdCBmb3IgdGhlIHR5cGUgb2YgdGhlIHJldHJpZXZlIEZISVIuTWVkaWNhdGlvblJlcXVlc3QuIiBlcnJvclR5cGU9InNlbWFudGljIiBlcnJvclNldmVyaXR5PSJ3YXJuaW5nIiB4c2k6dHlwZT0iYTpDcWxUb0VsbUVycm9yIi8+CiAgIDxhbm5vdGF0aW9uIHN0YXJ0TGluZT0iNzYiIHN0YXJ0Q2hhcj0iMyIgZW5kTGluZT0iNzYiIGVuZENoYXI9IjUxIiBtZXNzYWdlPSJDb3VsZCBub3QgcmVzb2x2ZSBtZW1iZXJzaGlwIG9wZXJhdG9yIGZvciB0ZXJtaW5vbG9neSB0YXJnZXQgb2YgdGhlIHJldHJpZXZlLiIgZXJyb3JUeXBlPSJzZW1hbnRpYyIgZXJyb3JTZXZlcml0eT0id2FybmluZyIgeHNpOnR5cGU9ImE6Q3FsVG9FbG1FcnJvciIvPgogICA8YW5ub3RhdGlvbiBzdGFydExpbmU9Ijg1IiBzdGFydENoYXI9IjQiIGVuZExpbmU9Ijg1IiBlbmRDaGFyPSI1MyIgbWVzc2FnZT0iQ291bGQgbm90IHJlc29sdmUgbWVtYmVyc2hpcCBvcGVyYXRvciBmb3IgdGVybWlub2xvZ3kgdGFyZ2V0IG9mIHRoZSByZXRyaWV2ZS4iIGVycm9yVHlwZT0ic2VtYW50aWMiIGVycm9yU2V2ZXJpdHk9Indhcm5pbmciIHhzaTp0eXBlPSJhOkNxbFRvRWxtRXJyb3IiLz4KICAgPGFubm90YXRpb24gc3RhcnRMaW5lPSI4NiIgc3RhcnRDaGFyPSIxMyIgZW5kTGluZT0iODYiIGVuZENoYXI9IjUyIiBtZXNzYWdlPSJDb3VsZCBub3QgcmVzb2x2ZSBtZW1iZXJzaGlwIG9wZXJhdG9yIGZvciB0ZXJtaW5vbG9neSB0YXJnZXQgb2YgdGhlIHJldHJpZXZlLiIgZXJyb3JUeXBlPSJzZW1hbnRpYyIgZXJyb3JTZXZlcml0eT0id2FybmluZyIgeHNpOnR5cGU9ImE6Q3FsVG9FbG1FcnJvciIvPgogICA8YW5ub3RhdGlvbiBzdGFydExpbmU9Ijk1IiBzdGFydENoYXI9IjMiIGVuZExpbmU9Ijk1IiBlbmRDaGFyPSI2NiIgbWVzc2FnZT0iQ291bGQgbm90IHJlc29sdmUgY29kZSBwYXRoIG1lZGljYXRpb25Db2RlYWJsZUNvbmNlcHQgZm9yIHRoZSB0eXBlIG9mIHRoZSByZXRyaWV2ZSBGSElSLk1lZGljYXRpb25SZXF1ZXN0LiIgZXJyb3JUeXBlPSJzZW1hbnRpYyIgZXJyb3JTZXZlcml0eT0id2FybmluZyIgeHNpOnR5cGU9ImE6Q3FsVG9FbG1FcnJvciIvPgogICA8YW5ub3RhdGlvbiBzdGFydExpbmU9Ijk1IiBzdGFydENoYXI9IjMiIGVuZExpbmU9Ijk1IiBlbmRDaGFyPSI2NiIgbWVzc2FnZT0iQ291bGQgbm90IHJlc29sdmUgbWVtYmVyc2hpcCBvcGVyYXRvciBmb3IgdGVybWlub2xvZ3kgdGFyZ2V0IG9mIHRoZSByZXRyaWV2ZS4iIGVycm9yVHlwZT0ic2VtYW50aWMiIGVycm9yU2V2ZXJpdHk9Indhcm5pbmciIHhzaTp0eXBlPSJhOkNxbFRvRWxtRXJyb3IiLz4KICAgPGFubm90YXRpb24gc3RhcnRMaW5lPSIxMDMiIHN0YXJ0Q2hhcj0iMTAiIGVuZExpbmU9IjEwMyIgZW5kQ2hhcj0iNzAiIG1lc3NhZ2U9Ikxpc3QtdmFsdWVkIGV4cHJlc3Npb24gd2FzIGRlbW90ZWQgdG8gYSBzaW5nbGV0b24uIiBlcnJvclR5cGU9InNlbWFudGljIiBlcnJvclNldmVyaXR5PSJ3YXJuaW5nIiB4c2k6dHlwZT0iYTpDcWxUb0VsbUVycm9yIi8+CiAgIDxhbm5vdGF0aW9uIHN0YXJ0TGluZT0iNjkiIHN0YXJ0Q2hhcj0iNTkiIGVuZExpbmU9IjY5IiBlbmRDaGFyPSI4OCIgbWVzc2FnZT0iTGlzdC12YWx1ZWQgZXhwcmVzc2lvbiB3YXMgZGVtb3RlZCB0byBhIHNpbmdsZXRvbi4iIGVycm9yVHlwZT0ic2VtYW50aWMiIGVycm9yU2V2ZXJpdHk9Indhcm5pbmciIHhzaTp0eXBlPSJhOkNxbFRvRWxtRXJyb3IiLz4KICAgPGFubm90YXRpb24gc3RhcnRMaW5lPSIxMTUiIHN0YXJ0Q2hhcj0iNiIgZW5kTGluZT0iMTE1IiBlbmRDaGFyPSIzNSIgbWVzc2FnZT0iTGlzdC12YWx1ZWQgZXhwcmVzc2lvbiB3YXMgZGVtb3RlZCB0byBhIHNpbmdsZXRvbi4iIGVycm9yVHlwZT0ic2VtYW50aWMiIGVycm9yU2V2ZXJpdHk9Indhcm5pbmciIHhzaTp0eXBlPSJhOkNxbFRvRWxtRXJyb3IiLz4KICAgPGlkZW50aWZpZXIgaWQ9Ik9waW9pZENEU19TVFU0X1JFQ18wNyIgdmVyc2lvbj0iMC4xLjAiLz4KICAgPHNjaGVtYUlkZW50aWZpZXIgaWQ9InVybjpobDctb3JnOmVsbSIgdmVyc2lvbj0icjEiLz4KICAgPHVzaW5ncz4KICAgICAgPGRlZiBsb2NhbElkZW50aWZpZXI9IlN5c3RlbSIgdXJpPSJ1cm46aGw3LW9yZzplbG0tdHlwZXM6cjEiLz4KICAgICAgPGRlZiBsb2NhbElkZW50aWZpZXI9IkZISVIiIHVyaT0iaHR0cDovL2hsNy5vcmcvZmhpciIgdmVyc2lvbj0iMy4yLjAiLz4KICAgPC91c2luZ3M+CiAgIDxpbmNsdWRlcz4KICAgICAgPGRlZiBsb2NhbElkZW50aWZpZXI9IkNvbW1vbiIgcGF0aD0iT3Bpb2lkQ0RTX1NUVTRfQ29tbW9uIiB2ZXJzaW9uPSIwLjEuMCIvPgogICA8L2luY2x1ZGVzPgogICA8cGFyYW1ldGVycz4KICAgICAgPGRlZiBuYW1lPSJDb250ZXh0UHJlc2NyaXB0aW9ucyIgYWNjZXNzTGV2ZWw9IlB1YmxpYyI+CiAgICAgICAgIDxwYXJhbWV0ZXJUeXBlU3BlY2lmaWVyIHhzaTp0eXBlPSJMaXN0VHlwZVNwZWNpZmllciI+CiAgICAgICAgICAgIDxlbGVtZW50VHlwZSBuYW1lPSJmaGlyOk1lZGljYXRpb25SZXF1ZXN0IiB4c2k6dHlwZT0iTmFtZWRUeXBlU3BlY2lmaWVyIi8+CiAgICAgICAgIDwvcGFyYW1ldGVyVHlwZVNwZWNpZmllcj4KICAgICAgPC9kZWY+CiAgIDwvcGFyYW1ldGVycz4KICAgPGNvZGVTeXN0ZW1zPgogICAgICA8ZGVmIG5hbWU9IlNOT01FRCIgaWQ9Imh0dHA6Ly9zbm9tZWQuaW5mby9zY3QiIGFjY2Vzc0xldmVsPSJQdWJsaWMiLz4KICAgPC9jb2RlU3lzdGVtcz4KICAgPGNvZGVzPgogICAgICA8ZGVmIG5hbWU9IkFzc2Vzc21lbnQgb2YgcmlzayBmb3Igb3Bpb2lkIGFidXNlIiBpZD0iNDU0MjgxMDAwMTI0MTAwIiBhY2Nlc3NMZXZlbD0iUHVibGljIj4KICAgICAgICAgPGNvZGVTeXN0ZW0gbmFtZT0iU05PTUVEIi8+CiAgICAgIDwvZGVmPgogICAgICA8ZGVmIG5hbWU9IkhpZ2ggcmlzayBkcnVnIG1vbml0b3JpbmciIGlkPSIyNjg1MjUwMDgiIGFjY2Vzc0xldmVsPSJQdWJsaWMiPgogICAgICAgICA8Y29kZVN5c3RlbSBuYW1lPSJTTk9NRUQiLz4KICAgICAgPC9kZWY+CiAgIDwvY29kZXM+CiAgIDxzdGF0ZW1lbnRzPgogICAgICA8ZGVmIG5hbWU9IlBhdGllbnQiIGNvbnRleHQ9IlBhdGllbnQiPgogICAgICAgICA8ZXhwcmVzc2lvbiB4c2k6dHlwZT0iU2luZ2xldG9uRnJvbSI+CiAgICAgICAgICAgIDxvcGVyYW5kIGRhdGFUeXBlPSJmaGlyOlBhdGllbnQiIHhzaTp0eXBlPSJSZXRyaWV2ZSIvPgogICAgICAgICA8L2V4cHJlc3Npb24+CiAgICAgIDwvZGVmPgogICAgICA8ZGVmIG5hbWU9IlJpc2sgQXNzZXNzbWVudCBJbnRlcnZhbCIgY29udGV4dD0iUGF0aWVudCIgYWNjZXNzTGV2ZWw9IlB1YmxpYyI+CiAgICAgICAgIDxleHByZXNzaW9uIGxvd0Nsb3NlZD0idHJ1ZSIgaGlnaENsb3NlZD0idHJ1ZSIgeHNpOnR5cGU9IkludGVydmFsIj4KICAgICAgICAgICAgPGxvdyB4c2k6dHlwZT0iU3VidHJhY3QiPgogICAgICAgICAgICAgICA8b3BlcmFuZCB4c2k6dHlwZT0iVG9kYXkiLz4KICAgICAgICAgICAgICAgPG9wZXJhbmQgdmFsdWU9IjkxIiB1bml0PSJkYXlzIiB4c2k6dHlwZT0iUXVhbnRpdHkiLz4KICAgICAgICAgICAgPC9sb3c+CiAgICAgICAgICAgIDxoaWdoIHhzaTp0eXBlPSJTdWJ0cmFjdCI+CiAgICAgICAgICAgICAgIDxvcGVyYW5kIHhzaTp0eXBlPSJUb2RheSIvPgogICAgICAgICAgICAgICA8b3BlcmFuZCB2YWx1ZT0iMSIgdW5pdD0iZGF5IiB4c2k6dHlwZT0iUXVhbnRpdHkiLz4KICAgICAgICAgICAgPC9oaWdoPgogICAgICAgICA8L2V4cHJlc3Npb24+CiAgICAgIDwvZGVmPgogICAgICA8ZGVmIG5hbWU9IkVuY291bnRlciBJbnRlcnZhbCIgY29udGV4dD0iUGF0aWVudCIgYWNjZXNzTGV2ZWw9IlB1YmxpYyI+CiAgICAgICAgIDxleHByZXNzaW9uIGxvd0Nsb3NlZD0idHJ1ZSIgaGlnaENsb3NlZD0idHJ1ZSIgeHNpOnR5cGU9IkludGVydmFsIj4KICAgICAgICAgICAgPGxvdyB4c2k6dHlwZT0iU3VidHJhY3QiPgogICAgICAgICAgICAgICA8b3BlcmFuZCB4c2k6dHlwZT0iU3VidHJhY3QiPgogICAgICAgICAgICAgICAgICA8b3BlcmFuZCB4c2k6dHlwZT0iVG9kYXkiLz4KICAgICAgICAgICAgICAgICAgPG9wZXJhbmQgdmFsdWU9IjEyIiB1bml0PSJtb250aHMiIHhzaTp0eXBlPSJRdWFudGl0eSIvPgogICAgICAgICAgICAgICA8L29wZXJhbmQ+CiAgICAgICAgICAgICAgIDxvcGVyYW5kIHZhbHVlPSIxIiB1bml0PSJkYXlzIiB4c2k6dHlwZT0iUXVhbnRpdHkiLz4KICAgICAgICAgICAgPC9sb3c+CiAgICAgICAgICAgIDxoaWdoIHhzaTp0eXBlPSJTdWJ0cmFjdCI+CiAgICAgICAgICAgICAgIDxvcGVyYW5kIHhzaTp0eXBlPSJUb2RheSIvPgogICAgICAgICAgICAgICA8b3BlcmFuZCB2YWx1ZT0iMSIgdW5pdD0iZGF5IiB4c2k6dHlwZT0iUXVhbnRpdHkiLz4KICAgICAgICAgICAgPC9oaWdoPgogICAgICAgICA8L2V4cHJlc3Npb24+CiAgICAgIDwvZGVmPgogICAgICA8ZGVmIG5hbWU9IlZhbGlkYXRlIFRyaWdnZXIgRXZlbnQiIGNvbnRleHQ9IlBhdGllbnQiIGFjY2Vzc0xldmVsPSJQdWJsaWMiPgogICAgICAgICA8ZXhwcmVzc2lvbiB4c2k6dHlwZT0iRXhpc3RzIj4KICAgICAgICAgICAgPG9wZXJhbmQgeHNpOnR5cGU9IlF1ZXJ5Ij4KICAgICAgICAgICAgICAgPHNvdXJjZSBhbGlhcz0idHJpZ2dlclNjcmlwdCI+CiAgICAgICAgICAgICAgICAgIDxleHByZXNzaW9uIG5hbWU9IkNvbnRleHRQcmVzY3JpcHRpb25zIiB4c2k6dHlwZT0iUGFyYW1ldGVyUmVmIi8+CiAgICAgICAgICAgICAgIDwvc291cmNlPgogICAgICAgICAgICAgICA8d2hlcmUgbmFtZT0iSXNPcGlvaWRXaXRoQW1idWxhdG9yeUFidXNlUG90ZW50aWFsIiBsaWJyYXJ5TmFtZT0iQ29tbW9uIiB4c2k6dHlwZT0iRnVuY3Rpb25SZWYiPgogICAgICAgICAgICAgICAgICA8b3BlcmFuZCBuYW1lPSJUb0NvZGUiIGxpYnJhcnlOYW1lPSJDb21tb24iIHhzaTp0eXBlPSJGdW5jdGlvblJlZiI+CiAgICAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIHhzaTp0eXBlPSJJbmRleGVyIj4KICAgICAgICAgICAgICAgICAgICAgICAgPG9wZXJhbmQgcGF0aD0iY29kaW5nIiB4c2k6dHlwZT0iUHJvcGVydHkiPgogICAgICAgICAgICAgICAgICAgICAgICAgICA8c291cmNlIHBhdGg9Im1lZGljYXRpb24iIHNjb3BlPSJ0cmlnZ2VyU2NyaXB0IiB4c2k6dHlwZT0iUHJvcGVydHkiLz4KICAgICAgICAgICAgICAgICAgICAgICAgPC9vcGVyYW5kPgogICAgICAgICAgICAgICAgICAgICAgICA8b3BlcmFuZCB2YWx1ZVR5cGU9InQ6SW50ZWdlciIgdmFsdWU9IjAiIHhzaTp0eXBlPSJMaXRlcmFsIi8+CiAgICAgICAgICAgICAgICAgICAgIDwvb3BlcmFuZD4KICAgICAgICAgICAgICAgICAgPC9vcGVyYW5kPgogICAgICAgICAgICAgICA8L3doZXJlPgogICAgICAgICAgICA8L29wZXJhbmQ+CiAgICAgICAgIDwvZXhwcmVzc2lvbj4KICAgICAgPC9kZWY+CiAgICAgIDxkZWYgbmFtZT0iTWVkaWNhdGlvbnMgSW5kaWNhdGluZyBFbmQgT2YgTGlmZSIgY29udGV4dD0iUGF0aWVudCIgYWNjZXNzTGV2ZWw9IlB1YmxpYyI+CiAgICAgICAgIDxleHByZXNzaW9uIHhzaTp0eXBlPSJRdWVyeSI+CiAgICAgICAgICAgIDxzb3VyY2UgYWxpYXM9ImVuZE9mTGlmZVJ4Ij4KICAgICAgICAgICAgICAgPGV4cHJlc3Npb24gZGF0YVR5cGU9ImZoaXI6TWVkaWNhdGlvblJlcXVlc3QiIGNvZGVQcm9wZXJ0eT0ibWVkaWNhdGlvbkNvZGVhYmxlQ29uY2VwdCIgeHNpOnR5cGU9IlJldHJpZXZlIj4KICAgICAgICAgICAgICAgICAgPGNvZGVzIG5hbWU9IkVuZCBPZiBMaWZlIE9waW9pZHMiIGxpYnJhcnlOYW1lPSJDb21tb24iIHhzaTp0eXBlPSJWYWx1ZVNldFJlZiIvPgogICAgICAgICAgICAgICA8L2V4cHJlc3Npb24+CiAgICAgICAgICAgIDwvc291cmNlPgogICAgICAgICAgICA8d2hlcmUgeHNpOnR5cGU9IkVxdWFsIj4KICAgICAgICAgICAgICAgPG9wZXJhbmQgcGF0aD0idmFsdWUiIHhzaTp0eXBlPSJQcm9wZXJ0eSI+CiAgICAgICAgICAgICAgICAgIDxzb3VyY2UgcGF0aD0ic3RhdHVzIiBzY29wZT0iZW5kT2ZMaWZlUngiIHhzaTp0eXBlPSJQcm9wZXJ0eSIvPgogICAgICAgICAgICAgICA8L29wZXJhbmQ+CiAgICAgICAgICAgICAgIDxvcGVyYW5kIHZhbHVlVHlwZT0idDpTdHJpbmciIHZhbHVlPSJhY3RpdmUiIHhzaTp0eXBlPSJMaXRlcmFsIi8+CiAgICAgICAgICAgIDwvd2hlcmU+CiAgICAgICAgIDwvZXhwcmVzc2lvbj4KICAgICAgPC9kZWY+CiAgICAgIDxkZWYgbmFtZT0iRXhjbHVzaW9uIENyaXRlcmlhIiBjb250ZXh0PSJQYXRpZW50IiBhY2Nlc3NMZXZlbD0iUHVibGljIj4KICAgICAgICAgPGV4cHJlc3Npb24geHNpOnR5cGU9IkV4aXN0cyI+CiAgICAgICAgICAgIDxvcGVyYW5kIG5hbWU9Ik1lZGljYXRpb25zIEluZGljYXRpbmcgRW5kIE9mIExpZmUiIHhzaTp0eXBlPSJFeHByZXNzaW9uUmVmIi8+CiAgICAgICAgIDwvZXhwcmVzc2lvbj4KICAgICAgPC9kZWY+CiAgICAgIDxkZWYgbmFtZT0iT3Bpb2lkIFJpc2sgQXNzZXNzbWVudCBpbiBQYXN0IDkwIERheXMiIGNvbnRleHQ9IlBhdGllbnQiIGFjY2Vzc0xldmVsPSJQdWJsaWMiPgogICAgICAgICA8ZXhwcmVzc2lvbiB4c2k6dHlwZT0iUXVlcnkiPgogICAgICAgICAgICA8c291cmNlIGFsaWFzPSJyaXNrQXNzZXNzbWVudCI+CiAgICAgICAgICAgICAgIDxleHByZXNzaW9uIHhzaTp0eXBlPSJVbmlvbiI+CiAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIGRhdGFUeXBlPSJmaGlyOlByb2NlZHVyZSIgY29kZVByb3BlcnR5PSJjb2RlIiB4c2k6dHlwZT0iUmV0cmlldmUiPgogICAgICAgICAgICAgICAgICAgICA8Y29kZXMgbmFtZT0iQXNzZXNzbWVudCBvZiByaXNrIGZvciBvcGlvaWQgYWJ1c2UiIHhzaTp0eXBlPSJDb2RlUmVmIi8+CiAgICAgICAgICAgICAgICAgIDwvb3BlcmFuZD4KICAgICAgICAgICAgICAgICAgPG9wZXJhbmQgZGF0YVR5cGU9ImZoaXI6UHJvY2VkdXJlIiBjb2RlUHJvcGVydHk9ImNvZGUiIHhzaTp0eXBlPSJSZXRyaWV2ZSI+CiAgICAgICAgICAgICAgICAgICAgIDxjb2RlcyBuYW1lPSJIaWdoIHJpc2sgZHJ1ZyBtb25pdG9yaW5nIiB4c2k6dHlwZT0iQ29kZVJlZiIvPgogICAgICAgICAgICAgICAgICA8L29wZXJhbmQ+CiAgICAgICAgICAgICAgIDwvZXhwcmVzc2lvbj4KICAgICAgICAgICAgPC9zb3VyY2U+CiAgICAgICAgICAgIDx3aGVyZSB4c2k6dHlwZT0iSW4iPgogICAgICAgICAgICAgICA8b3BlcmFuZCBwYXRoPSJ2YWx1ZSIgeHNpOnR5cGU9IlByb3BlcnR5Ij4KICAgICAgICAgICAgICAgICAgPHNvdXJjZSBwYXRoPSJzdGFydCIgeHNpOnR5cGU9IlByb3BlcnR5Ij4KICAgICAgICAgICAgICAgICAgICAgPHNvdXJjZSBwYXRoPSJwZXJmb3JtZWQiIHNjb3BlPSJyaXNrQXNzZXNzbWVudCIgeHNpOnR5cGU9IlByb3BlcnR5Ii8+CiAgICAgICAgICAgICAgICAgIDwvc291cmNlPgogICAgICAgICAgICAgICA8L29wZXJhbmQ+CiAgICAgICAgICAgICAgIDxvcGVyYW5kIG5hbWU9IlJpc2sgQXNzZXNzbWVudCBJbnRlcnZhbCIgeHNpOnR5cGU9IkV4cHJlc3Npb25SZWYiLz4KICAgICAgICAgICAgPC93aGVyZT4KICAgICAgICAgPC9leHByZXNzaW9uPgogICAgICA8L2RlZj4KICAgICAgPGRlZiBuYW1lPSJHZXQgQWN0aXZlIEFtYnVsYXRvcnkgT3Bpb2lkIFJ4IiBjb250ZXh0PSJQYXRpZW50IiBhY2Nlc3NMZXZlbD0iUHVibGljIj4KICAgICAgICAgPGV4cHJlc3Npb24geHNpOnR5cGU9IlF1ZXJ5Ij4KICAgICAgICAgICAgPHNvdXJjZSBhbGlhcz0iUngiPgogICAgICAgICAgICAgICA8ZXhwcmVzc2lvbiBkYXRhVHlwZT0iZmhpcjpNZWRpY2F0aW9uUmVxdWVzdCIgY29kZVByb3BlcnR5PSJtZWRpY2F0aW9uQ29kZWFibGVDb25jZXB0IiB4c2k6dHlwZT0iUmV0cmlldmUiPgogICAgICAgICAgICAgICAgICA8Y29kZXMgbmFtZT0iQW1idWxhdG9yeSBBYnVzZSBQb3RlbnRpYWwgT3Bpb2lkcyIgbGlicmFyeU5hbWU9IkNvbW1vbiIgeHNpOnR5cGU9IlZhbHVlU2V0UmVmIi8+CiAgICAgICAgICAgICAgIDwvZXhwcmVzc2lvbj4KICAgICAgICAgICAgPC9zb3VyY2U+CiAgICAgICAgICAgIDx3aGVyZSB4c2k6dHlwZT0iQW5kIj4KICAgICAgICAgICAgICAgPG9wZXJhbmQgeHNpOnR5cGU9IkVxdWFsIj4KICAgICAgICAgICAgICAgICAgPG9wZXJhbmQgcGF0aD0idmFsdWUiIHhzaTp0eXBlPSJQcm9wZXJ0eSI+CiAgICAgICAgICAgICAgICAgICAgIDxzb3VyY2UgcGF0aD0ic3RhdHVzIiBzY29wZT0iUngiIHhzaTp0eXBlPSJQcm9wZXJ0eSIvPgogICAgICAgICAgICAgICAgICA8L29wZXJhbmQ+CiAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIHZhbHVlVHlwZT0idDpTdHJpbmciIHZhbHVlPSJhY3RpdmUiIHhzaTp0eXBlPSJMaXRlcmFsIi8+CiAgICAgICAgICAgICAgIDwvb3BlcmFuZD4KICAgICAgICAgICAgICAgPG9wZXJhbmQgeHNpOnR5cGU9IkVxdWFsIj4KICAgICAgICAgICAgICAgICAgPG9wZXJhbmQgcGF0aD0idmFsdWUiIHhzaTp0eXBlPSJQcm9wZXJ0eSI+CiAgICAgICAgICAgICAgICAgICAgIDxzb3VyY2UgcGF0aD0iY29kZSIgeHNpOnR5cGU9IlByb3BlcnR5Ij4KICAgICAgICAgICAgICAgICAgICAgICAgPHNvdXJjZSB4c2k6dHlwZT0iSW5kZXhlciI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIHhzaTp0eXBlPSJGbGF0dGVuIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wZXJhbmQgeHNpOnR5cGU9IlF1ZXJ5Ij4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNvdXJjZSBhbGlhcz0iJHRoaXMiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZXhwcmVzc2lvbiBwYXRoPSJjYXRlZ29yeSIgc2NvcGU9IlJ4IiB4c2k6dHlwZT0iUHJvcGVydHkiLz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zb3VyY2U+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx3aGVyZSB4c2k6dHlwZT0iTm90Ij4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wZXJhbmQgeHNpOnR5cGU9IklzTnVsbCI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIHBhdGg9ImNvZGluZyIgeHNpOnR5cGU9IlByb3BlcnR5Ij4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNvdXJjZSBuYW1lPSIkdGhpcyIgeHNpOnR5cGU9IkFsaWFzUmVmIi8+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvb3BlcmFuZD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9vcGVyYW5kPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3doZXJlPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cmV0dXJuPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZXhwcmVzc2lvbiBwYXRoPSJjb2RpbmciIHhzaTp0eXBlPSJQcm9wZXJ0eSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzb3VyY2UgbmFtZT0iJHRoaXMiIHhzaTp0eXBlPSJBbGlhc1JlZiIvPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2V4cHJlc3Npb24+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcmV0dXJuPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L29wZXJhbmQ+CiAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvb3BlcmFuZD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wZXJhbmQgdmFsdWVUeXBlPSJ0OkludGVnZXIiIHZhbHVlPSIwIiB4c2k6dHlwZT0iTGl0ZXJhbCIvPgogICAgICAgICAgICAgICAgICAgICAgICA8L3NvdXJjZT4KICAgICAgICAgICAgICAgICAgICAgPC9zb3VyY2U+CiAgICAgICAgICAgICAgICAgIDwvb3BlcmFuZD4KICAgICAgICAgICAgICAgICAgPG9wZXJhbmQgdmFsdWVUeXBlPSJ0OlN0cmluZyIgdmFsdWU9Im91dHBhdGllbnQiIHhzaTp0eXBlPSJMaXRlcmFsIi8+CiAgICAgICAgICAgICAgIDwvb3BlcmFuZD4KICAgICAgICAgICAgPC93aGVyZT4KICAgICAgICAgPC9leHByZXNzaW9uPgogICAgICA8L2RlZj4KICAgICAgPGRlZiBuYW1lPSJFbmNvdW50ZXIgaW4gcGFzdCAxMiBtb250aHMiIGNvbnRleHQ9IlBhdGllbnQiIGFjY2Vzc0xldmVsPSJQdWJsaWMiPgogICAgICAgICA8ZXhwcmVzc2lvbiB4c2k6dHlwZT0iUXVlcnkiPgogICAgICAgICAgICA8c291cmNlIGFsaWFzPSJFIj4KICAgICAgICAgICAgICAgPGV4cHJlc3Npb24gZGF0YVR5cGU9ImZoaXI6RW5jb3VudGVyIiB4c2k6dHlwZT0iUmV0cmlldmUiLz4KICAgICAgICAgICAgPC9zb3VyY2U+CiAgICAgICAgICAgIDx3aGVyZSB4c2k6dHlwZT0iSW4iPgogICAgICAgICAgICAgICA8b3BlcmFuZCBwYXRoPSJ2YWx1ZSIgeHNpOnR5cGU9IlByb3BlcnR5Ij4KICAgICAgICAgICAgICAgICAgPHNvdXJjZSBwYXRoPSJzdGFydCIgeHNpOnR5cGU9IlByb3BlcnR5Ij4KICAgICAgICAgICAgICAgICAgICAgPHNvdXJjZSBwYXRoPSJwZXJpb2QiIHNjb3BlPSJFIiB4c2k6dHlwZT0iUHJvcGVydHkiLz4KICAgICAgICAgICAgICAgICAgPC9zb3VyY2U+CiAgICAgICAgICAgICAgIDwvb3BlcmFuZD4KICAgICAgICAgICAgICAgPG9wZXJhbmQgbmFtZT0iRW5jb3VudGVyIEludGVydmFsIiB4c2k6dHlwZT0iRXhwcmVzc2lvblJlZiIvPgogICAgICAgICAgICA8L3doZXJlPgogICAgICAgICA8L2V4cHJlc3Npb24+CiAgICAgIDwvZGVmPgogICAgICA8ZGVmIG5hbWU9IlJ4IEFjdGl2ZSA3IG9mIFBhc3QgMTAgRGF5cyBXaXRoIEVuY291bnRlciIgY29udGV4dD0iUGF0aWVudCIgYWNjZXNzTGV2ZWw9IlB1YmxpYyI+CiAgICAgICAgIDxleHByZXNzaW9uIHhzaTp0eXBlPSJBbmQiPgogICAgICAgICAgICA8b3BlcmFuZCB4c2k6dHlwZT0iU2luZ2xldG9uRnJvbSI+CiAgICAgICAgICAgICAgIDxvcGVyYW5kIG5hbWU9IlByb2JhYmxlRGF5c0luUmFuZ2UiIGxpYnJhcnlOYW1lPSJDb21tb24iIHhzaTp0eXBlPSJGdW5jdGlvblJlZiI+CiAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIG5hbWU9IkdldCBBY3RpdmUgQW1idWxhdG9yeSBPcGlvaWQgUngiIHhzaTp0eXBlPSJFeHByZXNzaW9uUmVmIi8+CiAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIHZhbHVlVHlwZT0idDpJbnRlZ2VyIiB2YWx1ZT0iMTAiIHhzaTp0eXBlPSJMaXRlcmFsIi8+CiAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIHZhbHVlVHlwZT0idDpJbnRlZ2VyIiB2YWx1ZT0iNyIgeHNpOnR5cGU9IkxpdGVyYWwiLz4KICAgICAgICAgICAgICAgPC9vcGVyYW5kPgogICAgICAgICAgICA8L29wZXJhbmQ+CiAgICAgICAgICAgIDxvcGVyYW5kIHhzaTp0eXBlPSJFeGlzdHMiPgogICAgICAgICAgICAgICA8b3BlcmFuZCBuYW1lPSJFbmNvdW50ZXIgaW4gcGFzdCAxMiBtb250aHMiIHhzaTp0eXBlPSJFeHByZXNzaW9uUmVmIi8+CiAgICAgICAgICAgIDwvb3BlcmFuZD4KICAgICAgICAgPC9leHByZXNzaW9uPgogICAgICA8L2RlZj4KICAgICAgPGRlZiBuYW1lPSJSeCBBY3RpdmUgNjMgb2YgUGFzdCA5MCBEYXlzIiBjb250ZXh0PSJQYXRpZW50IiBhY2Nlc3NMZXZlbD0iUHVibGljIj4KICAgICAgICAgPGV4cHJlc3Npb24gbmFtZT0iUHJvYmFibGVEYXlzSW5SYW5nZSIgbGlicmFyeU5hbWU9IkNvbW1vbiIgeHNpOnR5cGU9IkZ1bmN0aW9uUmVmIj4KICAgICAgICAgICAgPG9wZXJhbmQgbmFtZT0iR2V0IEFjdGl2ZSBBbWJ1bGF0b3J5IE9waW9pZCBSeCIgeHNpOnR5cGU9IkV4cHJlc3Npb25SZWYiLz4KICAgICAgICAgICAgPG9wZXJhbmQgdmFsdWVUeXBlPSJ0OkludGVnZXIiIHZhbHVlPSI5MCIgeHNpOnR5cGU9IkxpdGVyYWwiLz4KICAgICAgICAgICAgPG9wZXJhbmQgdmFsdWVUeXBlPSJ0OkludGVnZXIiIHZhbHVlPSI2MyIgeHNpOnR5cGU9IkxpdGVyYWwiLz4KICAgICAgICAgPC9leHByZXNzaW9uPgogICAgICA8L2RlZj4KICAgICAgPGRlZiBuYW1lPSJJbmNsdXNpb24gQ3JpdGVyaWEiIGNvbnRleHQ9IlBhdGllbnQiIGFjY2Vzc0xldmVsPSJQdWJsaWMiPgogICAgICAgICA8ZXhwcmVzc2lvbiB4c2k6dHlwZT0iQW5kIj4KICAgICAgICAgICAgPG9wZXJhbmQgeHNpOnR5cGU9IkFuZCI+CiAgICAgICAgICAgICAgIDxvcGVyYW5kIHhzaTp0eXBlPSJBbmQiPgogICAgICAgICAgICAgICAgICA8b3BlcmFuZCBuYW1lPSJWYWxpZGF0ZSBUcmlnZ2VyIEV2ZW50IiB4c2k6dHlwZT0iRXhwcmVzc2lvblJlZiIvPgogICAgICAgICAgICAgICAgICA8b3BlcmFuZCB4c2k6dHlwZT0iTm90Ij4KICAgICAgICAgICAgICAgICAgICAgPG9wZXJhbmQgbmFtZT0iRXhjbHVzaW9uIENyaXRlcmlhIiB4c2k6dHlwZT0iRXhwcmVzc2lvblJlZiIvPgogICAgICAgICAgICAgICAgICA8L29wZXJhbmQ+CiAgICAgICAgICAgICAgIDwvb3BlcmFuZD4KICAgICAgICAgICAgICAgPG9wZXJhbmQgeHNpOnR5cGU9Ik5vdCI+CiAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIHhzaTp0eXBlPSJFeGlzdHMiPgogICAgICAgICAgICAgICAgICAgICA8b3BlcmFuZCBuYW1lPSJPcGlvaWQgUmlzayBBc3Nlc3NtZW50IGluIFBhc3QgOTAgRGF5cyIgeHNpOnR5cGU9IkV4cHJlc3Npb25SZWYiLz4KICAgICAgICAgICAgICAgICAgPC9vcGVyYW5kPgogICAgICAgICAgICAgICA8L29wZXJhbmQ+CiAgICAgICAgICAgIDwvb3BlcmFuZD4KICAgICAgICAgICAgPG9wZXJhbmQgeHNpOnR5cGU9Ik9yIj4KICAgICAgICAgICAgICAgPG9wZXJhbmQgbmFtZT0iUnggQWN0aXZlIDcgb2YgUGFzdCAxMCBEYXlzIFdpdGggRW5jb3VudGVyIiB4c2k6dHlwZT0iRXhwcmVzc2lvblJlZiIvPgogICAgICAgICAgICAgICA8b3BlcmFuZCB4c2k6dHlwZT0iU2luZ2xldG9uRnJvbSI+CiAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIG5hbWU9IlJ4IEFjdGl2ZSA2MyBvZiBQYXN0IDkwIERheXMiIHhzaTp0eXBlPSJFeHByZXNzaW9uUmVmIi8+CiAgICAgICAgICAgICAgIDwvb3BlcmFuZD4KICAgICAgICAgICAgPC9vcGVyYW5kPgogICAgICAgICA8L2V4cHJlc3Npb24+CiAgICAgIDwvZGVmPgogICAgICA8ZGVmIG5hbWU9IkdldCBJbmRpY2F0b3IiIGNvbnRleHQ9IlBhdGllbnQiIGFjY2Vzc0xldmVsPSJQdWJsaWMiPgogICAgICAgICA8ZXhwcmVzc2lvbiB2YWx1ZVR5cGU9InQ6U3RyaW5nIiB2YWx1ZT0id2FybmluZyIgeHNpOnR5cGU9IkxpdGVyYWwiLz4KICAgICAgPC9kZWY+CiAgICAgIDxkZWYgbmFtZT0iR2V0IFN1bW1hcnkiIGNvbnRleHQ9IlBhdGllbnQiIGFjY2Vzc0xldmVsPSJQdWJsaWMiPgogICAgICAgICA8ZXhwcmVzc2lvbiB2YWx1ZVR5cGU9InQ6U3RyaW5nIiB2YWx1ZT0iUGF0aWVudHMgb24gb3Bpb2lkIHRoZXJhcHkgc2hvdWxkIGJlIGV2YWx1YXRlZCBmb3IgYmVuZWZpdHMgYW5kIGhhcm1zIHdpdGhpbiAxIHRvIDQgd2Vla3Mgb2Ygc3RhcnRpbmcgb3Bpb2lkIHRoZXJhcHkgYW5kIGV2ZXJ5IDMgbW9udGhzIG9yIG1vcmUgc3Vic2VxdWVudGx5LiIgeHNpOnR5cGU9IkxpdGVyYWwiLz4KICAgICAgPC9kZWY+CiAgICAgIDxkZWYgbmFtZT0iR2V0IERldGFpbCIgY29udGV4dD0iUGF0aWVudCIgYWNjZXNzTGV2ZWw9IlB1YmxpYyI+CiAgICAgICAgIDxleHByZXNzaW9uIHhzaTp0eXBlPSJJZiI+CiAgICAgICAgICAgIDxjb25kaXRpb24geHNpOnR5cGU9IlNpbmdsZXRvbkZyb20iPgogICAgICAgICAgICAgICA8b3BlcmFuZCBuYW1lPSJSeCBBY3RpdmUgNjMgb2YgUGFzdCA5MCBEYXlzIiB4c2k6dHlwZT0iRXhwcmVzc2lvblJlZiIvPgogICAgICAgICAgICA8L2NvbmRpdGlvbj4KICAgICAgICAgICAgPHRoZW4gdmFsdWVUeXBlPSJ0OlN0cmluZyIgdmFsdWU9Ik5vIGV2YWx1YXRpb24gZm9yIGJlbmVmaXRzIGFuZCBoYXJtcyBhc3NvY2lhdGVkIHdpdGggb3Bpb2lkIHRoZXJhcHkgaGFzIGJlZW4gcGVyZm9ybWVkIGZvciB0aGUgcGF0aWVudCBpbiB0aGUgcGFzdCAzIG1vbnRocyIgeHNpOnR5cGU9IkxpdGVyYWwiLz4KICAgICAgICAgICAgPGVsc2UgdmFsdWVUeXBlPSJ0OlN0cmluZyIgdmFsdWU9Ik5vIGV2YWx1YXRpb24gZm9yIGJlbmVmaXRzIGFuZCBoYXJtcyBoYXMgYmVlbiBwZXJmb3JtZWQgZm9yIHRoZSBwYXRpZW50IHN0YXJ0aW5nIG9waW9pZCB0aGVyYXB5IiB4c2k6dHlwZT0iTGl0ZXJhbCIvPgogICAgICAgICA8L2V4cHJlc3Npb24+CiAgICAgIDwvZGVmPgogICA8L3N0YXRlbWVudHM+CjwvbGlicmFyeT4K",
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

export const LibraryOpioidcdsRecommendation08: Library = {
  resourceType: "Library",
  id: "opioidcds-recommendation-08",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: opioidcds-recommendation-08</p><p><b>identifier</b>: OpioidCDS_REC_04 (OFFICIAL)</p><p><b>version</b>: 0.1.0</p><p><b>title</b>: Opioid CDS Logic for recommendation #4</p><p><b>status</b>: active</p><p><b>experimental</b>: false</p><p><b>type</b>: Logic Library <span>(Details : {http://terminology.hl7.org/CodeSystem/library-type code 'logic-library' = 'Logic Library', given as 'Logic Library'})</span></p><p><b>date</b>: 25/03/2018 1:49:09 PM</p><p><b>publisher</b>: Centers for Disease Control and Prevention (CDC)</p><p><b>description</b>: Opioid decision support logic to consider offering Naloxone when factors that increase risk for opioid overdose are present.</p><p><b>useContext</b>: , </p><p><b>jurisdiction</b>: United States of America <span>(Details : {urn:iso:std:iso:3166 code 'US' = 'United States of America', given as 'United States of America'})</span></p><p><b>purpose</b>: The purpose of this library is to determine whether increased risks for opioid overdose are present.</p><p><b>usage</b>: This library is used to recommend the prescriber/user to consider offering Naloxone when increased risks for opioid overdose are present.</p><p><b>copyright</b>: © CDC 2016+.</p><p><b>topic</b>: Opioid Prescribing <span>(Details )</span></p><p><b>author</b>: , , , </p><p><b>relatedArtifact</b>: , , </p><p><b>dataRequirement</b>: , , , </p><p><b>content</b>: </p></div>",
  },
  identifier: [
    {
      use: "official",
      value: "OpioidCDS_REC_04",
    },
  ],
  version: "0.1.0",
  title: "Opioid CDS Logic for recommendation #4",
  status: "active",
  experimental: false,
  type: {
    coding: [
      {
        system: "http://terminology.hl7.org/CodeSystem/library-type",
        code: "logic-library",
        display: "Logic Library",
      },
    ],
  },
  date: "2018-03-25T13:49:09-06:00",
  publisher: "Centers for Disease Control and Prevention (CDC)",
  description:
    "Opioid decision support logic to consider offering Naloxone when factors that increase risk for opioid overdose are present.",
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
    "The purpose of this library is to determine whether increased risks for opioid overdose are present.",
  usage:
    "This library is used to recommend the prescriber/user to consider offering Naloxone when increased risks for opioid overdose are present.",
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
      type: "depends-on",
      resource: "Library/opioidcds-common",
    },
    {
      type: "documentation",
      display: "MME Conversion Tables",
      url: "https://www.cdc.gov/drugoverdose/pdf/calculating_total_daily_dose-a.pdf",
    },
  ],
  dataRequirement: [
    {
      type: "MedicationRequest",
      codeFilter: [
        {
          path: "medicationCodeableConcept",
          valueSet: "http://example.org/fhir/ValueSet/naloxone",
        },
      ],
    },
    {
      type: "MedicationRequest",
      codeFilter: [
        {
          path: "medicationCodeableConcept",
          valueSet:
            "http://example.org/fhir/ValueSet/opioids-abused-in-ambulatory-care",
        },
      ],
    },
    {
      type: "MedicationRequest",
      codeFilter: [
        {
          path: "medicationCodeableConcept",
          valueSet: "http://example.org/fhir/ValueSet/benzodiazepines",
        },
      ],
    },
    {
      type: "Condition",
      codeFilter: [
        {
          path: "code",
          valueSet: "http://example.org/fhir/ValueSet/substance-abuse",
        },
      ],
    },
  ],
  content: [
    {
      contentType: "application/elm+xml",
      data: "PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPGxpYnJhcnkgeG1sbnM9InVybjpobDctb3JnOmVsbTpyMSIgeG1sbnM6dD0idXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxIiB4bWxuczp4c2k9Imh0dHA6Ly93d3cudzMub3JnLzIwMDEvWE1MU2NoZW1hLWluc3RhbmNlIiB4bWxuczp4c2Q9Imh0dHA6Ly93d3cudzMub3JnLzIwMDEvWE1MU2NoZW1hIiB4bWxuczpmaGlyPSJodHRwOi8vaGw3Lm9yZy9maGlyIiB4bWxuczpxZG00Mz0idXJuOmhlYWx0aGl0LWdvdjpxZG06djRfMyIgeG1sbnM6cWRtNTM9InVybjpoZWFsdGhpdC1nb3Y6cWRtOnY1XzMiIHhtbG5zOmE9InVybjpobDctb3JnOmNxbC1hbm5vdGF0aW9uczpyMSI+CiAgIDxhbm5vdGF0aW9uIHN0YXJ0TGluZT0iNjMiIHN0YXJ0Q2hhcj0iMTEiIGVuZExpbmU9IjYzIiBlbmRDaGFyPSI0OCIgbWVzc2FnZT0iQ291bGQgbm90IHJlc29sdmUgY29kZSBwYXRoIG1lZGljYXRpb25Db2RlYWJsZUNvbmNlcHQgZm9yIHRoZSB0eXBlIG9mIHRoZSByZXRyaWV2ZSBGSElSLk1lZGljYXRpb25SZXF1ZXN0LiIgZXJyb3JUeXBlPSJzZW1hbnRpYyIgZXJyb3JTZXZlcml0eT0id2FybmluZyIgeHNpOnR5cGU9ImE6Q3FsVG9FbG1FcnJvciIvPgogICA8YW5ub3RhdGlvbiBzdGFydExpbmU9IjYzIiBzdGFydENoYXI9IjExIiBlbmRMaW5lPSI2MyIgZW5kQ2hhcj0iNDgiIG1lc3NhZ2U9IkNvdWxkIG5vdCByZXNvbHZlIG1lbWJlcnNoaXAgb3BlcmF0b3IgZm9yIHRlcm1pbm9sb2d5IHRhcmdldCBvZiB0aGUgcmV0cmlldmUuIiBlcnJvclR5cGU9InNlbWFudGljIiBlcnJvclNldmVyaXR5PSJ3YXJuaW5nIiB4c2k6dHlwZT0iYTpDcWxUb0VsbUVycm9yIi8+CiAgIDxhbm5vdGF0aW9uIHN0YXJ0TGluZT0iODEiIHN0YXJ0Q2hhcj0iNSIgZW5kTGluZT0iODEiIGVuZENoYXI9IjY4IiBtZXNzYWdlPSJDb3VsZCBub3QgcmVzb2x2ZSBjb2RlIHBhdGggbWVkaWNhdGlvbkNvZGVhYmxlQ29uY2VwdCBmb3IgdGhlIHR5cGUgb2YgdGhlIHJldHJpZXZlIEZISVIuTWVkaWNhdGlvblJlcXVlc3QuIiBlcnJvclR5cGU9InNlbWFudGljIiBlcnJvclNldmVyaXR5PSJ3YXJuaW5nIiB4c2k6dHlwZT0iYTpDcWxUb0VsbUVycm9yIi8+CiAgIDxhbm5vdGF0aW9uIHN0YXJ0TGluZT0iODEiIHN0YXJ0Q2hhcj0iNSIgZW5kTGluZT0iODEiIGVuZENoYXI9IjY4IiBtZXNzYWdlPSJDb3VsZCBub3QgcmVzb2x2ZSBtZW1iZXJzaGlwIG9wZXJhdG9yIGZvciB0ZXJtaW5vbG9neSB0YXJnZXQgb2YgdGhlIHJldHJpZXZlLiIgZXJyb3JUeXBlPSJzZW1hbnRpYyIgZXJyb3JTZXZlcml0eT0id2FybmluZyIgeHNpOnR5cGU9ImE6Q3FsVG9FbG1FcnJvciIvPgogICA8YW5ub3RhdGlvbiBzdGFydExpbmU9Ijc0IiBzdGFydENoYXI9IjExIiBlbmRMaW5lPSI3NCIgZW5kQ2hhcj0iNTUiIG1lc3NhZ2U9IkNvdWxkIG5vdCByZXNvbHZlIGNvZGUgcGF0aCBtZWRpY2F0aW9uQ29kZWFibGVDb25jZXB0IGZvciB0aGUgdHlwZSBvZiB0aGUgcmV0cmlldmUgRkhJUi5NZWRpY2F0aW9uUmVxdWVzdC4iIGVycm9yVHlwZT0ic2VtYW50aWMiIGVycm9yU2V2ZXJpdHk9Indhcm5pbmciIHhzaTp0eXBlPSJhOkNxbFRvRWxtRXJyb3IiLz4KICAgPGFubm90YXRpb24gc3RhcnRMaW5lPSI3NCIgc3RhcnRDaGFyPSIxMSIgZW5kTGluZT0iNzQiIGVuZENoYXI9IjU1IiBtZXNzYWdlPSJDb3VsZCBub3QgcmVzb2x2ZSBtZW1iZXJzaGlwIG9wZXJhdG9yIGZvciB0ZXJtaW5vbG9neSB0YXJnZXQgb2YgdGhlIHJldHJpZXZlLiIgZXJyb3JUeXBlPSJzZW1hbnRpYyIgZXJyb3JTZXZlcml0eT0id2FybmluZyIgeHNpOnR5cGU9ImE6Q3FsVG9FbG1FcnJvciIvPgogICA8YW5ub3RhdGlvbiBzdGFydExpbmU9Ijc3IiBzdGFydENoYXI9IjEyIiBlbmRMaW5lPSI3NyIgZW5kQ2hhcj0iNDEiIG1lc3NhZ2U9IkNvdWxkIG5vdCByZXNvbHZlIG1lbWJlcnNoaXAgb3BlcmF0b3IgZm9yIHRlcm1pbm9sb2d5IHRhcmdldCBvZiB0aGUgcmV0cmlldmUuIiBlcnJvclR5cGU9InNlbWFudGljIiBlcnJvclNldmVyaXR5PSJ3YXJuaW5nIiB4c2k6dHlwZT0iYTpDcWxUb0VsbUVycm9yIi8+CiAgIDxpZGVudGlmaWVyIGlkPSJPcGlvaWRDRFNfU1RVNF9SRUNfMDgiIHZlcnNpb249IjAuMS4wIi8+CiAgIDxzY2hlbWFJZGVudGlmaWVyIGlkPSJ1cm46aGw3LW9yZzplbG0iIHZlcnNpb249InIxIi8+CiAgIDx1c2luZ3M+CiAgICAgIDxkZWYgbG9jYWxJZGVudGlmaWVyPSJTeXN0ZW0iIHVyaT0idXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxIi8+CiAgICAgIDxkZWYgbG9jYWxJZGVudGlmaWVyPSJGSElSIiB1cmk9Imh0dHA6Ly9obDcub3JnL2ZoaXIiIHZlcnNpb249IjMuMi4wIi8+CiAgIDwvdXNpbmdzPgogICA8aW5jbHVkZXM+CiAgICAgIDxkZWYgbG9jYWxJZGVudGlmaWVyPSJDb21tb24iIHBhdGg9Ik9waW9pZENEU19TVFU0X0NvbW1vbiIgdmVyc2lvbj0iMC4xLjAiLz4KICAgPC9pbmNsdWRlcz4KICAgPHBhcmFtZXRlcnM+CiAgICAgIDxkZWYgbmFtZT0iQ29udGV4dFByZXNjcmlwdGlvbnMiIGFjY2Vzc0xldmVsPSJQdWJsaWMiPgogICAgICAgICA8cGFyYW1ldGVyVHlwZVNwZWNpZmllciB4c2k6dHlwZT0iTGlzdFR5cGVTcGVjaWZpZXIiPgogICAgICAgICAgICA8ZWxlbWVudFR5cGUgbmFtZT0iZmhpcjpNZWRpY2F0aW9uUmVxdWVzdCIgeHNpOnR5cGU9Ik5hbWVkVHlwZVNwZWNpZmllciIvPgogICAgICAgICA8L3BhcmFtZXRlclR5cGVTcGVjaWZpZXI+CiAgICAgIDwvZGVmPgogICA8L3BhcmFtZXRlcnM+CiAgIDx2YWx1ZVNldHM+CiAgICAgIDxkZWYgbmFtZT0iU3Vic3RhbmNlIEFidXNlIiBpZD0iVE9ETyIgYWNjZXNzTGV2ZWw9IlB1YmxpYyIvPgogICA8L3ZhbHVlU2V0cz4KICAgPHN0YXRlbWVudHM+CiAgICAgIDxkZWYgbmFtZT0iUGF0aWVudCIgY29udGV4dD0iUGF0aWVudCI+CiAgICAgICAgIDxleHByZXNzaW9uIHhzaTp0eXBlPSJTaW5nbGV0b25Gcm9tIj4KICAgICAgICAgICAgPG9wZXJhbmQgZGF0YVR5cGU9ImZoaXI6UGF0aWVudCIgeHNpOnR5cGU9IlJldHJpZXZlIi8+CiAgICAgICAgIDwvZXhwcmVzc2lvbj4KICAgICAgPC9kZWY+CiAgICAgIDxkZWYgbmFtZT0iVmFsaWRhdGUgVHJpZ2dlciBFdmVudCIgY29udGV4dD0iUGF0aWVudCIgYWNjZXNzTGV2ZWw9IlB1YmxpYyI+CiAgICAgICAgIDxleHByZXNzaW9uIHhzaTp0eXBlPSJFeGlzdHMiPgogICAgICAgICAgICA8b3BlcmFuZCB4c2k6dHlwZT0iUXVlcnkiPgogICAgICAgICAgICAgICA8c291cmNlIGFsaWFzPSJ0cmlnZ2VyU2NyaXB0Ij4KICAgICAgICAgICAgICAgICAgPGV4cHJlc3Npb24gbmFtZT0iQ29udGV4dFByZXNjcmlwdGlvbnMiIHhzaTp0eXBlPSJQYXJhbWV0ZXJSZWYiLz4KICAgICAgICAgICAgICAgPC9zb3VyY2U+CiAgICAgICAgICAgICAgIDx3aGVyZSBuYW1lPSJJc09waW9pZFdpdGhBbWJ1bGF0b3J5QWJ1c2VQb3RlbnRpYWwiIGxpYnJhcnlOYW1lPSJDb21tb24iIHhzaTp0eXBlPSJGdW5jdGlvblJlZiI+CiAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIG5hbWU9IlRvQ29kZSIgbGlicmFyeU5hbWU9IkNvbW1vbiIgeHNpOnR5cGU9IkZ1bmN0aW9uUmVmIj4KICAgICAgICAgICAgICAgICAgICAgPG9wZXJhbmQgeHNpOnR5cGU9IkluZGV4ZXIiPgogICAgICAgICAgICAgICAgICAgICAgICA8b3BlcmFuZCBwYXRoPSJjb2RpbmciIHhzaTp0eXBlPSJQcm9wZXJ0eSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzb3VyY2UgcGF0aD0ibWVkaWNhdGlvbiIgc2NvcGU9InRyaWdnZXJTY3JpcHQiIHhzaTp0eXBlPSJQcm9wZXJ0eSIvPgogICAgICAgICAgICAgICAgICAgICAgICA8L29wZXJhbmQ+CiAgICAgICAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIHZhbHVlVHlwZT0idDpJbnRlZ2VyIiB2YWx1ZT0iMCIgeHNpOnR5cGU9IkxpdGVyYWwiLz4KICAgICAgICAgICAgICAgICAgICAgPC9vcGVyYW5kPgogICAgICAgICAgICAgICAgICA8L29wZXJhbmQ+CiAgICAgICAgICAgICAgIDwvd2hlcmU+CiAgICAgICAgICAgIDwvb3BlcmFuZD4KICAgICAgICAgPC9leHByZXNzaW9uPgogICAgICA8L2RlZj4KICAgICAgPGRlZiBuYW1lPSJFeGNsdXNpb24gQ3JpdGVyaWEiIGNvbnRleHQ9IlBhdGllbnQiIGFjY2Vzc0xldmVsPSJQdWJsaWMiPgogICAgICAgICA8ZXhwcmVzc2lvbiB4c2k6dHlwZT0iRXhpc3RzIj4KICAgICAgICAgICAgPG9wZXJhbmQgZGF0YVR5cGU9ImZoaXI6TWVkaWNhdGlvblJlcXVlc3QiIGNvZGVQcm9wZXJ0eT0ibWVkaWNhdGlvbkNvZGVhYmxlQ29uY2VwdCIgeHNpOnR5cGU9IlJldHJpZXZlIj4KICAgICAgICAgICAgICAgPGNvZGVzIG5hbWU9Ik5hbG94b25lIiBsaWJyYXJ5TmFtZT0iQ29tbW9uIiB4c2k6dHlwZT0iVmFsdWVTZXRSZWYiLz4KICAgICAgICAgICAgPC9vcGVyYW5kPgogICAgICAgICA8L2V4cHJlc3Npb24+CiAgICAgIDwvZGVmPgogICAgICA8ZGVmIG5hbWU9IkdldCBBY3RpdmUgQW1idWxhdG9yeSBPcGlvaWQgUngiIGNvbnRleHQ9IlBhdGllbnQiIGFjY2Vzc0xldmVsPSJQdWJsaWMiPgogICAgICAgICA8ZXhwcmVzc2lvbiB4c2k6dHlwZT0iVW5pb24iPgogICAgICAgICAgICA8b3BlcmFuZCB4c2k6dHlwZT0iUXVlcnkiPgogICAgICAgICAgICAgICA8c291cmNlIGFsaWFzPSJSeCI+CiAgICAgICAgICAgICAgICAgIDxleHByZXNzaW9uIGRhdGFUeXBlPSJmaGlyOk1lZGljYXRpb25SZXF1ZXN0IiBjb2RlUHJvcGVydHk9Im1lZGljYXRpb25Db2RlYWJsZUNvbmNlcHQiIHhzaTp0eXBlPSJSZXRyaWV2ZSI+CiAgICAgICAgICAgICAgICAgICAgIDxjb2RlcyBuYW1lPSJBbWJ1bGF0b3J5IEFidXNlIFBvdGVudGlhbCBPcGlvaWRzIiBsaWJyYXJ5TmFtZT0iQ29tbW9uIiB4c2k6dHlwZT0iVmFsdWVTZXRSZWYiLz4KICAgICAgICAgICAgICAgICAgPC9leHByZXNzaW9uPgogICAgICAgICAgICAgICA8L3NvdXJjZT4KICAgICAgICAgICAgICAgPHdoZXJlIHhzaTp0eXBlPSJBbmQiPgogICAgICAgICAgICAgICAgICA8b3BlcmFuZCB4c2k6dHlwZT0iRXF1YWwiPgogICAgICAgICAgICAgICAgICAgICA8b3BlcmFuZCBwYXRoPSJ2YWx1ZSIgeHNpOnR5cGU9IlByb3BlcnR5Ij4KICAgICAgICAgICAgICAgICAgICAgICAgPHNvdXJjZSBwYXRoPSJzdGF0dXMiIHNjb3BlPSJSeCIgeHNpOnR5cGU9IlByb3BlcnR5Ii8+CiAgICAgICAgICAgICAgICAgICAgIDwvb3BlcmFuZD4KICAgICAgICAgICAgICAgICAgICAgPG9wZXJhbmQgdmFsdWVUeXBlPSJ0OlN0cmluZyIgdmFsdWU9ImFjdGl2ZSIgeHNpOnR5cGU9IkxpdGVyYWwiLz4KICAgICAgICAgICAgICAgICAgPC9vcGVyYW5kPgogICAgICAgICAgICAgICAgICA8b3BlcmFuZCB4c2k6dHlwZT0iRXF1YWwiPgogICAgICAgICAgICAgICAgICAgICA8b3BlcmFuZCBwYXRoPSJ2YWx1ZSIgeHNpOnR5cGU9IlByb3BlcnR5Ij4KICAgICAgICAgICAgICAgICAgICAgICAgPHNvdXJjZSBwYXRoPSJjb2RlIiB4c2k6dHlwZT0iUHJvcGVydHkiPgogICAgICAgICAgICAgICAgICAgICAgICAgICA8c291cmNlIHhzaTp0eXBlPSJJbmRleGVyIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wZXJhbmQgeHNpOnR5cGU9IkZsYXR0ZW4iPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3BlcmFuZCB4c2k6dHlwZT0iUXVlcnkiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c291cmNlIGFsaWFzPSIkdGhpcyI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxleHByZXNzaW9uIHBhdGg9ImNhdGVnb3J5IiBzY29wZT0iUngiIHhzaTp0eXBlPSJQcm9wZXJ0eSIvPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NvdXJjZT4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHdoZXJlIHhzaTp0eXBlPSJOb3QiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3BlcmFuZCB4c2k6dHlwZT0iSXNOdWxsIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wZXJhbmQgcGF0aD0iY29kaW5nIiB4c2k6dHlwZT0iUHJvcGVydHkiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c291cmNlIG5hbWU9IiR0aGlzIiB4c2k6dHlwZT0iQWxpYXNSZWYiLz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9vcGVyYW5kPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L29wZXJhbmQ+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvd2hlcmU+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyZXR1cm4+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxleHByZXNzaW9uIHBhdGg9ImNvZGluZyIgeHNpOnR5cGU9IlByb3BlcnR5Ij4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNvdXJjZSBuYW1lPSIkdGhpcyIgeHNpOnR5cGU9IkFsaWFzUmVmIi8+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZXhwcmVzc2lvbj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9yZXR1cm4+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvb3BlcmFuZD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9vcGVyYW5kPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3BlcmFuZCB2YWx1ZVR5cGU9InQ6SW50ZWdlciIgdmFsdWU9IjAiIHhzaTp0eXBlPSJMaXRlcmFsIi8+CiAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc291cmNlPgogICAgICAgICAgICAgICAgICAgICAgICA8L3NvdXJjZT4KICAgICAgICAgICAgICAgICAgICAgPC9vcGVyYW5kPgogICAgICAgICAgICAgICAgICAgICA8b3BlcmFuZCB2YWx1ZVR5cGU9InQ6U3RyaW5nIiB2YWx1ZT0ib3V0cGF0aWVudCIgeHNpOnR5cGU9IkxpdGVyYWwiLz4KICAgICAgICAgICAgICAgICAgPC9vcGVyYW5kPgogICAgICAgICAgICAgICA8L3doZXJlPgogICAgICAgICAgICA8L29wZXJhbmQ+CiAgICAgICAgICAgIDxvcGVyYW5kIG5hbWU9IkNvbnRleHRQcmVzY3JpcHRpb25zIiB4c2k6dHlwZT0iUGFyYW1ldGVyUmVmIi8+CiAgICAgICAgIDwvZXhwcmVzc2lvbj4KICAgICAgPC9kZWY+CiAgICAgIDxkZWYgbmFtZT0iQXZlcmFnZSBNTUUiIGNvbnRleHQ9IlBhdGllbnQiIGFjY2Vzc0xldmVsPSJQdWJsaWMiPgogICAgICAgICA8ZXhwcmVzc2lvbiBuYW1lPSJUb3RhbE1NRSIgbGlicmFyeU5hbWU9IkNvbW1vbiIgeHNpOnR5cGU9IkZ1bmN0aW9uUmVmIj4KICAgICAgICAgICAgPG9wZXJhbmQgbmFtZT0iR2V0IEFjdGl2ZSBBbWJ1bGF0b3J5IE9waW9pZCBSeCIgeHNpOnR5cGU9IkV4cHJlc3Npb25SZWYiLz4KICAgICAgICAgPC9leHByZXNzaW9uPgogICAgICA8L2RlZj4KICAgICAgPGRlZiBuYW1lPSJNTUUgPj0gNTAgbWcvZD8iIGNvbnRleHQ9IlBhdGllbnQiIGFjY2Vzc0xldmVsPSJQdWJsaWMiPgogICAgICAgICA8ZXhwcmVzc2lvbiB4c2k6dHlwZT0iSWYiPgogICAgICAgICAgICA8Y29uZGl0aW9uIGFzVHlwZT0idDpCb29sZWFuIiB4c2k6dHlwZT0iQXMiPgogICAgICAgICAgICAgICA8b3BlcmFuZCB4c2k6dHlwZT0iSXNOdWxsIj4KICAgICAgICAgICAgICAgICAgPG9wZXJhbmQgbmFtZT0iQXZlcmFnZSBNTUUiIHhzaTp0eXBlPSJFeHByZXNzaW9uUmVmIi8+CiAgICAgICAgICAgICAgIDwvb3BlcmFuZD4KICAgICAgICAgICAgPC9jb25kaXRpb24+CiAgICAgICAgICAgIDx0aGVuIHZhbHVlVHlwZT0idDpCb29sZWFuIiB2YWx1ZT0iZmFsc2UiIHhzaTp0eXBlPSJMaXRlcmFsIi8+CiAgICAgICAgICAgIDxlbHNlIHhzaTp0eXBlPSJHcmVhdGVyT3JFcXVhbCI+CiAgICAgICAgICAgICAgIDxvcGVyYW5kIG5hbWU9IkF2ZXJhZ2UgTU1FIiB4c2k6dHlwZT0iRXhwcmVzc2lvblJlZiIvPgogICAgICAgICAgICAgICA8b3BlcmFuZCB2YWx1ZT0iNTAiIHVuaXQ9Im1nL2QiIHhzaTp0eXBlPSJRdWFudGl0eSIvPgogICAgICAgICAgICA8L2Vsc2U+CiAgICAgICAgIDwvZXhwcmVzc2lvbj4KICAgICAgPC9kZWY+CiAgICAgIDxkZWYgbmFtZT0iT24gQmVuem9kaWF6ZXBpbmUiIGNvbnRleHQ9IlBhdGllbnQiIGFjY2Vzc0xldmVsPSJQdWJsaWMiPgogICAgICAgICA8ZXhwcmVzc2lvbiB4c2k6dHlwZT0iRXhpc3RzIj4KICAgICAgICAgICAgPG9wZXJhbmQgZGF0YVR5cGU9ImZoaXI6TWVkaWNhdGlvblJlcXVlc3QiIGNvZGVQcm9wZXJ0eT0ibWVkaWNhdGlvbkNvZGVhYmxlQ29uY2VwdCIgeHNpOnR5cGU9IlJldHJpZXZlIj4KICAgICAgICAgICAgICAgPGNvZGVzIG5hbWU9IkJlbnpvZGlhemVwaW5lcyIgbGlicmFyeU5hbWU9IkNvbW1vbiIgeHNpOnR5cGU9IlZhbHVlU2V0UmVmIi8+CiAgICAgICAgICAgIDwvb3BlcmFuZD4KICAgICAgICAgPC9leHByZXNzaW9uPgogICAgICA8L2RlZj4KICAgICAgPGRlZiBuYW1lPSJJbmNsdXNpb24gQ3JpdGVyaWEiIGNvbnRleHQ9IlBhdGllbnQiIGFjY2Vzc0xldmVsPSJQdWJsaWMiPgogICAgICAgICA8ZXhwcmVzc2lvbiB4c2k6dHlwZT0iQW5kIj4KICAgICAgICAgICAgPG9wZXJhbmQgeHNpOnR5cGU9IkFuZCI+CiAgICAgICAgICAgICAgIDxvcGVyYW5kIG5hbWU9IlZhbGlkYXRlIFRyaWdnZXIgRXZlbnQiIHhzaTp0eXBlPSJFeHByZXNzaW9uUmVmIi8+CiAgICAgICAgICAgICAgIDxvcGVyYW5kIHhzaTp0eXBlPSJOb3QiPgogICAgICAgICAgICAgICAgICA8b3BlcmFuZCBuYW1lPSJFeGNsdXNpb24gQ3JpdGVyaWEiIHhzaTp0eXBlPSJFeHByZXNzaW9uUmVmIi8+CiAgICAgICAgICAgICAgIDwvb3BlcmFuZD4KICAgICAgICAgICAgPC9vcGVyYW5kPgogICAgICAgICAgICA8b3BlcmFuZCB4c2k6dHlwZT0iT3IiPgogICAgICAgICAgICAgICA8b3BlcmFuZCBuYW1lPSJNTUUgPj0gNTAgbWcvZD8iIHhzaTp0eXBlPSJFeHByZXNzaW9uUmVmIi8+CiAgICAgICAgICAgICAgIDxvcGVyYW5kIG5hbWU9Ik9uIEJlbnpvZGlhemVwaW5lIiB4c2k6dHlwZT0iRXhwcmVzc2lvblJlZiIvPgogICAgICAgICAgICA8L29wZXJhbmQ+CiAgICAgICAgIDwvZXhwcmVzc2lvbj4KICAgICAgPC9kZWY+CiAgICAgIDxkZWYgbmFtZT0iSGFzIFN1YnN0YW5jZSBBYnVzZSBIaXN0b3J5IiBjb250ZXh0PSJQYXRpZW50IiBhY2Nlc3NMZXZlbD0iUHVibGljIj4KICAgICAgICAgPGV4cHJlc3Npb24geHNpOnR5cGU9IkV4aXN0cyI+CiAgICAgICAgICAgIDxvcGVyYW5kIGRhdGFUeXBlPSJmaGlyOkNvbmRpdGlvbiIgY29kZVByb3BlcnR5PSJjb2RlIiB4c2k6dHlwZT0iUmV0cmlldmUiPgogICAgICAgICAgICAgICA8Y29kZXMgbmFtZT0iU3Vic3RhbmNlIEFidXNlIiB4c2k6dHlwZT0iVmFsdWVTZXRSZWYiLz4KICAgICAgICAgICAgPC9vcGVyYW5kPgogICAgICAgICA8L2V4cHJlc3Npb24+CiAgICAgIDwvZGVmPgogICAgICA8ZGVmIG5hbWU9IkdldCBJbmRpY2F0b3IiIGNvbnRleHQ9IlBhdGllbnQiIGFjY2Vzc0xldmVsPSJQdWJsaWMiPgogICAgICAgICA8ZXhwcmVzc2lvbiB2YWx1ZVR5cGU9InQ6U3RyaW5nIiB2YWx1ZT0id2FybmluZyIgeHNpOnR5cGU9IkxpdGVyYWwiLz4KICAgICAgPC9kZWY+CiAgICAgIDxkZWYgbmFtZT0iR2V0IFN1bW1hcnkiIGNvbnRleHQ9IlBhdGllbnQiIGFjY2Vzc0xldmVsPSJQdWJsaWMiPgogICAgICAgICA8ZXhwcmVzc2lvbiB2YWx1ZVR5cGU9InQ6U3RyaW5nIiB2YWx1ZT0iSW5jb3Jwb3JhdGUgaW50byB0aGUgbWFuYWdlbWVudCBwbGFuIHN0cmF0ZWdpZXMgdG8gbWl0aWdhdGUgcmlzazsgaW5jbHVkaW5nIGNvbnNpZGVyaW5nIG9mZmVyaW5nIG5hbG94b25lIHdoZW4gZmFjdG9ycyB0aGF0IGluY3JlYXNlIHJpc2sgZm9yIG9waW9pZCBvdmVyZG9zZSBhcmUgcHJlc2VudCIgeHNpOnR5cGU9IkxpdGVyYWwiLz4KICAgICAgPC9kZWY+CiAgICAgIDxkZWYgbmFtZT0iR2V0IE5vdGlmaWNhdGlvbiIgY29udGV4dD0iUGF0aWVudCIgYWNjZXNzTGV2ZWw9IlB1YmxpYyI+CiAgICAgICAgIDxleHByZXNzaW9uIHhzaTp0eXBlPSJDb25jYXRlbmF0ZSI+CiAgICAgICAgICAgIDxvcGVyYW5kIHZhbHVlVHlwZT0idDpTdHJpbmciIHZhbHVlPSJDb25zaWRlciBvZmZlcmluZyBuYWxveG9uZSBnaXZlbiBmb2xsb3dpbmcgcmlzayBmYWN0b3IocykgZm9yIG9waW9pZCBvdmVyZG9zZTogIiB4c2k6dHlwZT0iTGl0ZXJhbCIvPgogICAgICAgICAgICA8b3BlcmFuZCB4c2k6dHlwZT0iSWYiPgogICAgICAgICAgICAgICA8Y29uZGl0aW9uIGFzVHlwZT0idDpCb29sZWFuIiB4c2k6dHlwZT0iQXMiPgogICAgICAgICAgICAgICAgICA8b3BlcmFuZCBuYW1lPSJNTUUgPj0gNTAgbWcvZD8iIHhzaTp0eXBlPSJFeHByZXNzaW9uUmVmIi8+CiAgICAgICAgICAgICAgIDwvY29uZGl0aW9uPgogICAgICAgICAgICAgICA8dGhlbiB4c2k6dHlwZT0iQ29uY2F0ZW5hdGUiPgogICAgICAgICAgICAgICAgICA8b3BlcmFuZCB4c2k6dHlwZT0iQ29uY2F0ZW5hdGUiPgogICAgICAgICAgICAgICAgICAgICA8b3BlcmFuZCB2YWx1ZVR5cGU9InQ6U3RyaW5nIiB2YWx1ZT0iQXZlcmFnZSBNTUUgKCIgeHNpOnR5cGU9IkxpdGVyYWwiLz4KICAgICAgICAgICAgICAgICAgICAgPG9wZXJhbmQgeHNpOnR5cGU9IlRvU3RyaW5nIj4KICAgICAgICAgICAgICAgICAgICAgICAgPG9wZXJhbmQgbmFtZT0iQXZlcmFnZSBNTUUiIHhzaTp0eXBlPSJFeHByZXNzaW9uUmVmIi8+CiAgICAgICAgICAgICAgICAgICAgIDwvb3BlcmFuZD4KICAgICAgICAgICAgICAgICAgPC9vcGVyYW5kPgogICAgICAgICAgICAgICAgICA8b3BlcmFuZCB2YWx1ZVR5cGU9InQ6U3RyaW5nIiB2YWx1ZT0iKSA+PSA1MCBtZy9kYXksICIgeHNpOnR5cGU9IkxpdGVyYWwiLz4KICAgICAgICAgICAgICAgPC90aGVuPgogICAgICAgICAgICAgICA8ZWxzZSB4c2k6dHlwZT0iQ29uY2F0ZW5hdGUiPgogICAgICAgICAgICAgICAgICA8b3BlcmFuZCB2YWx1ZVR5cGU9InQ6U3RyaW5nIiB2YWx1ZT0iIiB4c2k6dHlwZT0iTGl0ZXJhbCIvPgogICAgICAgICAgICAgICAgICA8b3BlcmFuZCB4c2k6dHlwZT0iSWYiPgogICAgICAgICAgICAgICAgICAgICA8Y29uZGl0aW9uIGFzVHlwZT0idDpCb29sZWFuIiB4c2k6dHlwZT0iQXMiPgogICAgICAgICAgICAgICAgICAgICAgICA8b3BlcmFuZCBuYW1lPSJPbiBCZW56b2RpYXplcGluZSIgeHNpOnR5cGU9IkV4cHJlc3Npb25SZWYiLz4KICAgICAgICAgICAgICAgICAgICAgPC9jb25kaXRpb24+CiAgICAgICAgICAgICAgICAgICAgIDx0aGVuIHZhbHVlVHlwZT0idDpTdHJpbmciIHZhbHVlPSJjb25jdXJyZW50IHVzZSBvZiBiZW56b2RpYXplcGluZSwgIiB4c2k6dHlwZT0iTGl0ZXJhbCIvPgogICAgICAgICAgICAgICAgICAgICA8ZWxzZSB2YWx1ZVR5cGU9InQ6U3RyaW5nIiB2YWx1ZT0iIiB4c2k6dHlwZT0iTGl0ZXJhbCIvPgogICAgICAgICAgICAgICAgICA8L29wZXJhbmQ+CiAgICAgICAgICAgICAgIDwvZWxzZT4KICAgICAgICAgICAgPC9vcGVyYW5kPgogICAgICAgICA8L2V4cHJlc3Npb24+CiAgICAgIDwvZGVmPgogICA8L3N0YXRlbWVudHM+CjwvbGlicmFyeT4K",
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

export const LibraryOpioidcdsRecommendation10: Library = {
  resourceType: "Library",
  id: "opioidcds-recommendation-10",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: opioidcds-recommendation-10</p><p><b>identifier</b>: OpioidCDS_REC_10 (OFFICIAL)</p><p><b>version</b>: 0.1.0</p><p><b>title</b>: Opioid CDS Logic for recommendation #10</p><p><b>status</b>: active</p><p><b>experimental</b>: false</p><p><b>type</b>: Logic Library <span>(Details : {http://terminology.hl7.org/CodeSystem/library-type code 'logic-library' = 'Logic Library', given as 'Logic Library'})</span></p><p><b>date</b>: 25/03/2018 1:49:09 PM</p><p><b>publisher</b>: Centers for Disease Control and Prevention (CDC)</p><p><b>description</b>: Opioid decision support logic to evaluate whether the patient has had a urine screening in the past 12 months and provide analysis.</p><p><b>useContext</b>: , </p><p><b>jurisdiction</b>: United States of America <span>(Details : {urn:iso:std:iso:3166 code 'US' = 'United States of America', given as 'United States of America'})</span></p><p><b>purpose</b>: The purpose of this library is to determine whether the patient has had a urine screening in the past 12 months. Is so, then check the results for missing opioids that are prescribed, present opioids that aren't prescribed or present illicit drugs.</p><p><b>usage</b>: This library is used to notify the prescriber/user whether the patient has had a urine screening in the past 12 months and to provide analysis if true.</p><p><b>copyright</b>: © CDC 2016+.</p><p><b>topic</b>: Opioid Prescribing <span>(Details )</span></p><p><b>author</b>: , , , </p><p><b>relatedArtifact</b>: , </p><p><b>dataRequirement</b>: , , , </p><p><b>content</b>: </p></div>",
  },
  identifier: [
    {
      use: "official",
      value: "OpioidCDS_REC_10",
    },
  ],
  version: "0.1.0",
  title: "Opioid CDS Logic for recommendation #10",
  status: "active",
  experimental: false,
  type: {
    coding: [
      {
        system: "http://terminology.hl7.org/CodeSystem/library-type",
        code: "logic-library",
        display: "Logic Library",
      },
    ],
  },
  date: "2018-03-25T13:49:09-06:00",
  publisher: "Centers for Disease Control and Prevention (CDC)",
  description:
    "Opioid decision support logic to evaluate whether the patient has had a urine screening in the past 12 months and provide analysis.",
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
    "The purpose of this library is to determine whether the patient has had a urine screening in the past 12 months. Is so, then check the results for missing opioids that are prescribed, present opioids that aren't prescribed or present illicit drugs.",
  usage:
    "This library is used to notify the prescriber/user whether the patient has had a urine screening in the past 12 months and to provide analysis if true.",
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
      type: "depends-on",
      resource: "Library/opioidcds-common",
    },
  ],
  dataRequirement: [
    {
      type: "MedicationRequest",
      codeFilter: [
        {
          path: "medicationCodeableConcept",
          valueSet:
            "http://example.org/fhir/ValueSet/opioids-indicating-end-of-life",
        },
      ],
    },
    {
      type: "MedicationRequest",
      codeFilter: [
        {
          path: "medicationCodeableConcept",
          valueSet:
            "http://example.org/fhir/ValueSet/opioids-abused-in-ambulatory-care",
        },
      ],
    },
    {
      type: "Observation",
      codeFilter: [
        {
          path: "combo-code",
          valueSet:
            "http://example.org/fhir/ValueSet/illicit-drug-urine-screening",
        },
      ],
    },
    {
      type: "Observation",
      codeFilter: [
        {
          path: "combo-code",
          valueSet: "http://example.org/fhir/ValueSet/opioid-urine-screening",
        },
      ],
    },
  ],
  content: [
    {
      contentType: "application/elm+xml",
      data: "PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPGxpYnJhcnkgeG1sbnM9InVybjpobDctb3JnOmVsbTpyMSIgeG1sbnM6dD0idXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxIiB4bWxuczp4c2k9Imh0dHA6Ly93d3cudzMub3JnLzIwMDEvWE1MU2NoZW1hLWluc3RhbmNlIiB4bWxuczp4c2Q9Imh0dHA6Ly93d3cudzMub3JnLzIwMDEvWE1MU2NoZW1hIiB4bWxuczpmaGlyPSJodHRwOi8vaGw3Lm9yZy9maGlyIiB4bWxuczpxZG00Mz0idXJuOmhlYWx0aGl0LWdvdjpxZG06djRfMyIgeG1sbnM6cWRtNTM9InVybjpoZWFsdGhpdC1nb3Y6cWRtOnY1XzMiIHhtbG5zOmE9InVybjpobDctb3JnOmNxbC1hbm5vdGF0aW9uczpyMSI+CiAgIDxhbm5vdGF0aW9uIHN0YXJ0TGluZT0iNjIiIHN0YXJ0Q2hhcj0iMTIiIGVuZExpbmU9IjYyIiBlbmRDaGFyPSI2MCIgbWVzc2FnZT0iQ291bGQgbm90IHJlc29sdmUgY29kZSBwYXRoIG1lZGljYXRpb25Db2RlYWJsZUNvbmNlcHQgZm9yIHRoZSB0eXBlIG9mIHRoZSByZXRyaWV2ZSBGSElSLk1lZGljYXRpb25SZXF1ZXN0LiIgZXJyb3JUeXBlPSJzZW1hbnRpYyIgZXJyb3JTZXZlcml0eT0id2FybmluZyIgeHNpOnR5cGU9ImE6Q3FsVG9FbG1FcnJvciIvPgogICA8YW5ub3RhdGlvbiBzdGFydExpbmU9IjYyIiBzdGFydENoYXI9IjEyIiBlbmRMaW5lPSI2MiIgZW5kQ2hhcj0iNjAiIG1lc3NhZ2U9IkNvdWxkIG5vdCByZXNvbHZlIG1lbWJlcnNoaXAgb3BlcmF0b3IgZm9yIHRlcm1pbm9sb2d5IHRhcmdldCBvZiB0aGUgcmV0cmlldmUuIiBlcnJvclR5cGU9InNlbWFudGljIiBlcnJvclNldmVyaXR5PSJ3YXJuaW5nIiB4c2k6dHlwZT0iYTpDcWxUb0VsbUVycm9yIi8+CiAgIDxhbm5vdGF0aW9uIHN0YXJ0TGluZT0iNjYiIHN0YXJ0Q2hhcj0iMyIgZW5kTGluZT0iNjYiIGVuZENoYXI9IjY2IiBtZXNzYWdlPSJDb3VsZCBub3QgcmVzb2x2ZSBjb2RlIHBhdGggbWVkaWNhdGlvbkNvZGVhYmxlQ29uY2VwdCBmb3IgdGhlIHR5cGUgb2YgdGhlIHJldHJpZXZlIEZISVIuTWVkaWNhdGlvblJlcXVlc3QuIiBlcnJvclR5cGU9InNlbWFudGljIiBlcnJvclNldmVyaXR5PSJ3YXJuaW5nIiB4c2k6dHlwZT0iYTpDcWxUb0VsbUVycm9yIi8+CiAgIDxhbm5vdGF0aW9uIHN0YXJ0TGluZT0iNjYiIHN0YXJ0Q2hhcj0iMyIgZW5kTGluZT0iNjYiIGVuZENoYXI9IjY2IiBtZXNzYWdlPSJDb3VsZCBub3QgcmVzb2x2ZSBtZW1iZXJzaGlwIG9wZXJhdG9yIGZvciB0ZXJtaW5vbG9neSB0YXJnZXQgb2YgdGhlIHJldHJpZXZlLiIgZXJyb3JUeXBlPSJzZW1hbnRpYyIgZXJyb3JTZXZlcml0eT0id2FybmluZyIgeHNpOnR5cGU9ImE6Q3FsVG9FbG1FcnJvciIvPgogICA8YW5ub3RhdGlvbiBzdGFydExpbmU9Ijc0IiBzdGFydENoYXI9IjMiIGVuZExpbmU9Ijc0IiBlbmRDaGFyPSI2NCIgbWVzc2FnZT0iQ291bGQgbm90IHJlc29sdmUgY29kZSBwYXRoIGNvbWJvLWNvZGUgZm9yIHRoZSB0eXBlIG9mIHRoZSByZXRyaWV2ZSBGSElSLk9ic2VydmF0aW9uLiIgZXJyb3JUeXBlPSJzZW1hbnRpYyIgZXJyb3JTZXZlcml0eT0id2FybmluZyIgeHNpOnR5cGU9ImE6Q3FsVG9FbG1FcnJvciIvPgogICA8YW5ub3RhdGlvbiBzdGFydExpbmU9Ijc0IiBzdGFydENoYXI9IjMiIGVuZExpbmU9Ijc0IiBlbmRDaGFyPSI2NCIgbWVzc2FnZT0iQ291bGQgbm90IHJlc29sdmUgbWVtYmVyc2hpcCBvcGVyYXRvciBmb3IgdGVybWlub2xvZ3kgdGFyZ2V0IG9mIHRoZSByZXRyaWV2ZS4iIGVycm9yVHlwZT0ic2VtYW50aWMiIGVycm9yU2V2ZXJpdHk9Indhcm5pbmciIHhzaTp0eXBlPSJhOkNxbFRvRWxtRXJyb3IiLz4KICAgPGFubm90YXRpb24gc3RhcnRMaW5lPSI3OSIgc3RhcnRDaGFyPSIzIiBlbmRMaW5lPSI3OSIgZW5kQ2hhcj0iNjMiIG1lc3NhZ2U9IkNvdWxkIG5vdCByZXNvbHZlIGNvZGUgcGF0aCBjb21iby1jb2RlIGZvciB0aGUgdHlwZSBvZiB0aGUgcmV0cmlldmUgRkhJUi5PYnNlcnZhdGlvbi4iIGVycm9yVHlwZT0ic2VtYW50aWMiIGVycm9yU2V2ZXJpdHk9Indhcm5pbmciIHhzaTp0eXBlPSJhOkNxbFRvRWxtRXJyb3IiLz4KICAgPGFubm90YXRpb24gc3RhcnRMaW5lPSI3OSIgc3RhcnRDaGFyPSIzIiBlbmRMaW5lPSI3OSIgZW5kQ2hhcj0iNjMiIG1lc3NhZ2U9IkNvdWxkIG5vdCByZXNvbHZlIG1lbWJlcnNoaXAgb3BlcmF0b3IgZm9yIHRlcm1pbm9sb2d5IHRhcmdldCBvZiB0aGUgcmV0cmlldmUuIiBlcnJvclR5cGU9InNlbWFudGljIiBlcnJvclNldmVyaXR5PSJ3YXJuaW5nIiB4c2k6dHlwZT0iYTpDcWxUb0VsbUVycm9yIi8+CiAgIDxhbm5vdGF0aW9uIHN0YXJ0TGluZT0iMTM0IiBzdGFydENoYXI9IjIwIiBlbmRMaW5lPSIxMzQiIGVuZENoYXI9Ijc2IiBtZXNzYWdlPSJMaXN0LXZhbHVlZCBleHByZXNzaW9uIHdhcyBkZW1vdGVkIHRvIGEgc2luZ2xldG9uLiIgZXJyb3JUeXBlPSJzZW1hbnRpYyIgZXJyb3JTZXZlcml0eT0id2FybmluZyIgeHNpOnR5cGU9ImE6Q3FsVG9FbG1FcnJvciIvPgogICA8YW5ub3RhdGlvbiBzdGFydExpbmU9IjE0MyIgc3RhcnRDaGFyPSIxNiIgZW5kTGluZT0iMTQzIiBlbmRDaGFyPSIxNyIgbWVzc2FnZT0iTGlzdC12YWx1ZWQgZXhwcmVzc2lvbiB3YXMgZGVtb3RlZCB0byBhIHNpbmdsZXRvbi4iIGVycm9yVHlwZT0ic2VtYW50aWMiIGVycm9yU2V2ZXJpdHk9Indhcm5pbmciIHhzaTp0eXBlPSJhOkNxbFRvRWxtRXJyb3IiLz4KICAgPGFubm90YXRpb24gc3RhcnRMaW5lPSIxNTciIHN0YXJ0Q2hhcj0iNTIiIGVuZExpbmU9IjE1NyIgZW5kQ2hhcj0iNzMiIG1lc3NhZ2U9Ikxpc3QtdmFsdWVkIGV4cHJlc3Npb24gd2FzIGRlbW90ZWQgdG8gYSBzaW5nbGV0b24uIiBlcnJvclR5cGU9InNlbWFudGljIiBlcnJvclNldmVyaXR5PSJ3YXJuaW5nIiB4c2k6dHlwZT0iYTpDcWxUb0VsbUVycm9yIi8+CiAgIDxhbm5vdGF0aW9uIHN0YXJ0TGluZT0iMTcxIiBzdGFydENoYXI9IjYyIiBlbmRMaW5lPSIxNzEiIGVuZENoYXI9Ijc4IiBtZXNzYWdlPSJMaXN0LXZhbHVlZCBleHByZXNzaW9uIHdhcyBkZW1vdGVkIHRvIGEgc2luZ2xldG9uLiIgZXJyb3JUeXBlPSJzZW1hbnRpYyIgZXJyb3JTZXZlcml0eT0id2FybmluZyIgeHNpOnR5cGU9ImE6Q3FsVG9FbG1FcnJvciIvPgogICA8aWRlbnRpZmllciBpZD0iT3Bpb2lkQ0RTX1NUVTRfUkVDXzEwIiB2ZXJzaW9uPSIwLjEuMCIvPgogICA8c2NoZW1hSWRlbnRpZmllciBpZD0idXJuOmhsNy1vcmc6ZWxtIiB2ZXJzaW9uPSJyMSIvPgogICA8dXNpbmdzPgogICAgICA8ZGVmIGxvY2FsSWRlbnRpZmllcj0iU3lzdGVtIiB1cmk9InVybjpobDctb3JnOmVsbS10eXBlczpyMSIvPgogICAgICA8ZGVmIGxvY2FsSWRlbnRpZmllcj0iRkhJUiIgdXJpPSJodHRwOi8vaGw3Lm9yZy9maGlyIiB2ZXJzaW9uPSIzLjIuMCIvPgogICA8L3VzaW5ncz4KICAgPGluY2x1ZGVzPgogICAgICA8ZGVmIGxvY2FsSWRlbnRpZmllcj0iQ29tbW9uIiBwYXRoPSJPcGlvaWRDRFNfU1RVNF9Db21tb24iIHZlcnNpb249IjAuMS4wIi8+CiAgIDwvaW5jbHVkZXM+CiAgIDxwYXJhbWV0ZXJzPgogICAgICA8ZGVmIG5hbWU9IkNvbnRleHRQcmVzY3JpcHRpb25zIiBhY2Nlc3NMZXZlbD0iUHVibGljIj4KICAgICAgICAgPHBhcmFtZXRlclR5cGVTcGVjaWZpZXIgeHNpOnR5cGU9Ikxpc3RUeXBlU3BlY2lmaWVyIj4KICAgICAgICAgICAgPGVsZW1lbnRUeXBlIG5hbWU9ImZoaXI6TWVkaWNhdGlvblJlcXVlc3QiIHhzaTp0eXBlPSJOYW1lZFR5cGVTcGVjaWZpZXIiLz4KICAgICAgICAgPC9wYXJhbWV0ZXJUeXBlU3BlY2lmaWVyPgogICAgICA8L2RlZj4KICAgPC9wYXJhbWV0ZXJzPgogICA8c3RhdGVtZW50cz4KICAgICAgPGRlZiBuYW1lPSJQYXRpZW50IiBjb250ZXh0PSJQYXRpZW50Ij4KICAgICAgICAgPGV4cHJlc3Npb24geHNpOnR5cGU9IlNpbmdsZXRvbkZyb20iPgogICAgICAgICAgICA8b3BlcmFuZCBkYXRhVHlwZT0iZmhpcjpQYXRpZW50IiB4c2k6dHlwZT0iUmV0cmlldmUiLz4KICAgICAgICAgPC9leHByZXNzaW9uPgogICAgICA8L2RlZj4KICAgICAgPGRlZiBuYW1lPSJMb29rYmFjayBZZWFyIiBjb250ZXh0PSJQYXRpZW50IiBhY2Nlc3NMZXZlbD0iUHVibGljIj4KICAgICAgICAgPGV4cHJlc3Npb24gbG93Q2xvc2VkPSJ0cnVlIiBoaWdoQ2xvc2VkPSJ0cnVlIiB4c2k6dHlwZT0iSW50ZXJ2YWwiPgogICAgICAgICAgICA8bG93IHhzaTp0eXBlPSJTdWJ0cmFjdCI+CiAgICAgICAgICAgICAgIDxvcGVyYW5kIHhzaTp0eXBlPSJTdWJ0cmFjdCI+CiAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIHhzaTp0eXBlPSJUb2RheSIvPgogICAgICAgICAgICAgICAgICA8b3BlcmFuZCB2YWx1ZT0iMTIiIHVuaXQ9Im1vbnRocyIgeHNpOnR5cGU9IlF1YW50aXR5Ii8+CiAgICAgICAgICAgICAgIDwvb3BlcmFuZD4KICAgICAgICAgICAgICAgPG9wZXJhbmQgdmFsdWU9IjEiIHVuaXQ9ImRheXMiIHhzaTp0eXBlPSJRdWFudGl0eSIvPgogICAgICAgICAgICA8L2xvdz4KICAgICAgICAgICAgPGhpZ2ggeHNpOnR5cGU9IlN1YnRyYWN0Ij4KICAgICAgICAgICAgICAgPG9wZXJhbmQgeHNpOnR5cGU9IlRvZGF5Ii8+CiAgICAgICAgICAgICAgIDxvcGVyYW5kIHZhbHVlPSIxIiB1bml0PSJkYXkiIHhzaTp0eXBlPSJRdWFudGl0eSIvPgogICAgICAgICAgICA8L2hpZ2g+CiAgICAgICAgIDwvZXhwcmVzc2lvbj4KICAgICAgPC9kZWY+CiAgICAgIDxkZWYgbmFtZT0iVmFsaWRhdGUgVHJpZ2dlciBFdmVudCIgY29udGV4dD0iUGF0aWVudCIgYWNjZXNzTGV2ZWw9IlB1YmxpYyI+CiAgICAgICAgIDxleHByZXNzaW9uIHhzaTp0eXBlPSJFeGlzdHMiPgogICAgICAgICAgICA8b3BlcmFuZCB4c2k6dHlwZT0iUXVlcnkiPgogICAgICAgICAgICAgICA8c291cmNlIGFsaWFzPSJ0cmlnZ2VyU2NyaXB0Ij4KICAgICAgICAgICAgICAgICAgPGV4cHJlc3Npb24gbmFtZT0iQ29udGV4dFByZXNjcmlwdGlvbnMiIHhzaTp0eXBlPSJQYXJhbWV0ZXJSZWYiLz4KICAgICAgICAgICAgICAgPC9zb3VyY2U+CiAgICAgICAgICAgICAgIDx3aGVyZSBuYW1lPSJJc09waW9pZFdpdGhBbWJ1bGF0b3J5QWJ1c2VQb3RlbnRpYWwiIGxpYnJhcnlOYW1lPSJDb21tb24iIHhzaTp0eXBlPSJGdW5jdGlvblJlZiI+CiAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIG5hbWU9IlRvQ29kZSIgbGlicmFyeU5hbWU9IkNvbW1vbiIgeHNpOnR5cGU9IkZ1bmN0aW9uUmVmIj4KICAgICAgICAgICAgICAgICAgICAgPG9wZXJhbmQgeHNpOnR5cGU9IkluZGV4ZXIiPgogICAgICAgICAgICAgICAgICAgICAgICA8b3BlcmFuZCBwYXRoPSJjb2RpbmciIHhzaTp0eXBlPSJQcm9wZXJ0eSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzb3VyY2UgcGF0aD0ibWVkaWNhdGlvbiIgc2NvcGU9InRyaWdnZXJTY3JpcHQiIHhzaTp0eXBlPSJQcm9wZXJ0eSIvPgogICAgICAgICAgICAgICAgICAgICAgICA8L29wZXJhbmQ+CiAgICAgICAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIHZhbHVlVHlwZT0idDpJbnRlZ2VyIiB2YWx1ZT0iMCIgeHNpOnR5cGU9IkxpdGVyYWwiLz4KICAgICAgICAgICAgICAgICAgICAgPC9vcGVyYW5kPgogICAgICAgICAgICAgICAgICA8L29wZXJhbmQ+CiAgICAgICAgICAgICAgIDwvd2hlcmU+CiAgICAgICAgICAgIDwvb3BlcmFuZD4KICAgICAgICAgPC9leHByZXNzaW9uPgogICAgICA8L2RlZj4KICAgICAgPGRlZiBuYW1lPSJFeGNsdXNpb24gQ3JpdGVyaWEiIGNvbnRleHQ9IlBhdGllbnQiIGFjY2Vzc0xldmVsPSJQdWJsaWMiPgogICAgICAgICA8ZXhwcmVzc2lvbiB4c2k6dHlwZT0iT3IiPgogICAgICAgICAgICA8b3BlcmFuZCB4c2k6dHlwZT0iRXhpc3RzIj4KICAgICAgICAgICAgICAgPG9wZXJhbmQgZGF0YVR5cGU9ImZoaXI6TWVkaWNhdGlvblJlcXVlc3QiIGNvZGVQcm9wZXJ0eT0ibWVkaWNhdGlvbkNvZGVhYmxlQ29uY2VwdCIgeHNpOnR5cGU9IlJldHJpZXZlIj4KICAgICAgICAgICAgICAgICAgPGNvZGVzIG5hbWU9IkVuZCBPZiBMaWZlIE9waW9pZHMiIGxpYnJhcnlOYW1lPSJDb21tb24iIHhzaTp0eXBlPSJWYWx1ZVNldFJlZiIvPgogICAgICAgICAgICAgICA8L29wZXJhbmQ+CiAgICAgICAgICAgIDwvb3BlcmFuZD4KICAgICAgICAgICAgPG9wZXJhbmQgbmFtZT0iSGFzTWV0YXN0YXRpY0NhbmNlciIgbGlicmFyeU5hbWU9IkNvbW1vbiIgeHNpOnR5cGU9IkV4cHJlc3Npb25SZWYiLz4KICAgICAgICAgPC9leHByZXNzaW9uPgogICAgICA8L2RlZj4KICAgICAgPGRlZiBuYW1lPSJHZXQgQWN0aXZlIEFtYnVsYXRvcnkgT3Bpb2lkIFJ4IiBjb250ZXh0PSJQYXRpZW50IiBhY2Nlc3NMZXZlbD0iUHVibGljIj4KICAgICAgICAgPGV4cHJlc3Npb24geHNpOnR5cGU9IlF1ZXJ5Ij4KICAgICAgICAgICAgPHNvdXJjZSBhbGlhcz0iUngiPgogICAgICAgICAgICAgICA8ZXhwcmVzc2lvbiBkYXRhVHlwZT0iZmhpcjpNZWRpY2F0aW9uUmVxdWVzdCIgY29kZVByb3BlcnR5PSJtZWRpY2F0aW9uQ29kZWFibGVDb25jZXB0IiB4c2k6dHlwZT0iUmV0cmlldmUiPgogICAgICAgICAgICAgICAgICA8Y29kZXMgbmFtZT0iQW1idWxhdG9yeSBBYnVzZSBQb3RlbnRpYWwgT3Bpb2lkcyIgbGlicmFyeU5hbWU9IkNvbW1vbiIgeHNpOnR5cGU9IlZhbHVlU2V0UmVmIi8+CiAgICAgICAgICAgICAgIDwvZXhwcmVzc2lvbj4KICAgICAgICAgICAgPC9zb3VyY2U+CiAgICAgICAgICAgIDx3aGVyZSB4c2k6dHlwZT0iQW5kIj4KICAgICAgICAgICAgICAgPG9wZXJhbmQgeHNpOnR5cGU9IkVxdWFsIj4KICAgICAgICAgICAgICAgICAgPG9wZXJhbmQgcGF0aD0idmFsdWUiIHhzaTp0eXBlPSJQcm9wZXJ0eSI+CiAgICAgICAgICAgICAgICAgICAgIDxzb3VyY2UgcGF0aD0ic3RhdHVzIiBzY29wZT0iUngiIHhzaTp0eXBlPSJQcm9wZXJ0eSIvPgogICAgICAgICAgICAgICAgICA8L29wZXJhbmQ+CiAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIHZhbHVlVHlwZT0idDpTdHJpbmciIHZhbHVlPSJhY3RpdmUiIHhzaTp0eXBlPSJMaXRlcmFsIi8+CiAgICAgICAgICAgICAgIDwvb3BlcmFuZD4KICAgICAgICAgICAgICAgPG9wZXJhbmQgeHNpOnR5cGU9IkVxdWFsIj4KICAgICAgICAgICAgICAgICAgPG9wZXJhbmQgcGF0aD0idmFsdWUiIHhzaTp0eXBlPSJQcm9wZXJ0eSI+CiAgICAgICAgICAgICAgICAgICAgIDxzb3VyY2UgcGF0aD0iY29kZSIgeHNpOnR5cGU9IlByb3BlcnR5Ij4KICAgICAgICAgICAgICAgICAgICAgICAgPHNvdXJjZSB4c2k6dHlwZT0iSW5kZXhlciI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIHhzaTp0eXBlPSJGbGF0dGVuIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wZXJhbmQgeHNpOnR5cGU9IlF1ZXJ5Ij4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNvdXJjZSBhbGlhcz0iJHRoaXMiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZXhwcmVzc2lvbiBwYXRoPSJjYXRlZ29yeSIgc2NvcGU9IlJ4IiB4c2k6dHlwZT0iUHJvcGVydHkiLz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zb3VyY2U+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx3aGVyZSB4c2k6dHlwZT0iTm90Ij4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wZXJhbmQgeHNpOnR5cGU9IklzTnVsbCI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIHBhdGg9ImNvZGluZyIgeHNpOnR5cGU9IlByb3BlcnR5Ij4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNvdXJjZSBuYW1lPSIkdGhpcyIgeHNpOnR5cGU9IkFsaWFzUmVmIi8+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvb3BlcmFuZD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9vcGVyYW5kPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3doZXJlPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cmV0dXJuPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZXhwcmVzc2lvbiBwYXRoPSJjb2RpbmciIHhzaTp0eXBlPSJQcm9wZXJ0eSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzb3VyY2UgbmFtZT0iJHRoaXMiIHhzaTp0eXBlPSJBbGlhc1JlZiIvPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2V4cHJlc3Npb24+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcmV0dXJuPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L29wZXJhbmQ+CiAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvb3BlcmFuZD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wZXJhbmQgdmFsdWVUeXBlPSJ0OkludGVnZXIiIHZhbHVlPSIwIiB4c2k6dHlwZT0iTGl0ZXJhbCIvPgogICAgICAgICAgICAgICAgICAgICAgICA8L3NvdXJjZT4KICAgICAgICAgICAgICAgICAgICAgPC9zb3VyY2U+CiAgICAgICAgICAgICAgICAgIDwvb3BlcmFuZD4KICAgICAgICAgICAgICAgICAgPG9wZXJhbmQgdmFsdWVUeXBlPSJ0OlN0cmluZyIgdmFsdWU9Im91dHBhdGllbnQiIHhzaTp0eXBlPSJMaXRlcmFsIi8+CiAgICAgICAgICAgICAgIDwvb3BlcmFuZD4KICAgICAgICAgICAgPC93aGVyZT4KICAgICAgICAgPC9leHByZXNzaW9uPgogICAgICA8L2RlZj4KICAgICAgPGRlZiBuYW1lPSJHZXQgSWxsaWNpdCBEcnVnIFVyaW5lIFNjcmVlbmluZ3MgaW4gTGFzdCAxMiBNb250aHMiIGNvbnRleHQ9IlBhdGllbnQiIGFjY2Vzc0xldmVsPSJQdWJsaWMiPgogICAgICAgICA8ZXhwcmVzc2lvbiB4c2k6dHlwZT0iUXVlcnkiPgogICAgICAgICAgICA8c291cmNlIGFsaWFzPSJvYnNlcnZhdGlvbiI+CiAgICAgICAgICAgICAgIDxleHByZXNzaW9uIGRhdGFUeXBlPSJmaGlyOk9ic2VydmF0aW9uIiBjb2RlUHJvcGVydHk9ImNvbWJvLWNvZGUiIHhzaTp0eXBlPSJSZXRyaWV2ZSI+CiAgICAgICAgICAgICAgICAgIDxjb2RlcyBuYW1lPSJJbGxpY2l0IERydWcgU2NyZWVuaW5nIiBsaWJyYXJ5TmFtZT0iQ29tbW9uIiB4c2k6dHlwZT0iVmFsdWVTZXRSZWYiLz4KICAgICAgICAgICAgICAgPC9leHByZXNzaW9uPgogICAgICAgICAgICA8L3NvdXJjZT4KICAgICAgICAgICAgPHdoZXJlIHhzaTp0eXBlPSJJbiI+CiAgICAgICAgICAgICAgIDxvcGVyYW5kIHBhdGg9InZhbHVlIiB4c2k6dHlwZT0iUHJvcGVydHkiPgogICAgICAgICAgICAgICAgICA8c291cmNlIHBhdGg9ImVmZmVjdGl2ZSIgc2NvcGU9Im9ic2VydmF0aW9uIiB4c2k6dHlwZT0iUHJvcGVydHkiLz4KICAgICAgICAgICAgICAgPC9vcGVyYW5kPgogICAgICAgICAgICAgICA8b3BlcmFuZCBuYW1lPSJMb29rYmFjayBZZWFyIiB4c2k6dHlwZT0iRXhwcmVzc2lvblJlZiIvPgogICAgICAgICAgICA8L3doZXJlPgogICAgICAgICAgICA8c29ydD4KICAgICAgICAgICAgICAgPGJ5IGRpcmVjdGlvbj0iYXNjIiB4c2k6dHlwZT0iQnlFeHByZXNzaW9uIj4KICAgICAgICAgICAgICAgICAgPGV4cHJlc3Npb24gcGF0aD0idmFsdWUiIHhzaTp0eXBlPSJQcm9wZXJ0eSI+CiAgICAgICAgICAgICAgICAgICAgIDxzb3VyY2UgbmFtZT0iZWZmZWN0aXZlIiB4c2k6dHlwZT0iSWRlbnRpZmllclJlZiIvPgogICAgICAgICAgICAgICAgICA8L2V4cHJlc3Npb24+CiAgICAgICAgICAgICAgIDwvYnk+CiAgICAgICAgICAgIDwvc29ydD4KICAgICAgICAgPC9leHByZXNzaW9uPgogICAgICA8L2RlZj4KICAgICAgPGRlZiBuYW1lPSJNb3N0IFJlY2VudCBJbGxpY2l0IERydWcgVXJpbmUgU2NyZWVuaW5ncyBpbiBMYXN0IDEyIE1vbnRocyIgY29udGV4dD0iUGF0aWVudCIgYWNjZXNzTGV2ZWw9IlB1YmxpYyI+CiAgICAgICAgIDxleHByZXNzaW9uIHhzaTp0eXBlPSJMYXN0Ij4KICAgICAgICAgICAgPHNvdXJjZSBuYW1lPSJHZXQgSWxsaWNpdCBEcnVnIFVyaW5lIFNjcmVlbmluZ3MgaW4gTGFzdCAxMiBNb250aHMiIHhzaTp0eXBlPSJFeHByZXNzaW9uUmVmIi8+CiAgICAgICAgIDwvZXhwcmVzc2lvbj4KICAgICAgPC9kZWY+CiAgICAgIDxkZWYgbmFtZT0iR2V0IE9waW9pZCBEcnVnIFVyaW5lIFNjcmVlbmluZ3MgaW4gTGFzdCAxMiBNb250aHMiIGNvbnRleHQ9IlBhdGllbnQiIGFjY2Vzc0xldmVsPSJQdWJsaWMiPgogICAgICAgICA8ZXhwcmVzc2lvbiB4c2k6dHlwZT0iUXVlcnkiPgogICAgICAgICAgICA8c291cmNlIGFsaWFzPSJvYnNlcnZhdGlvbiI+CiAgICAgICAgICAgICAgIDxleHByZXNzaW9uIGRhdGFUeXBlPSJmaGlyOk9ic2VydmF0aW9uIiBjb2RlUHJvcGVydHk9ImNvbWJvLWNvZGUiIHhzaTp0eXBlPSJSZXRyaWV2ZSI+CiAgICAgICAgICAgICAgICAgIDxjb2RlcyBuYW1lPSJPcGlvaWQgRHJ1ZyBTY3JlZW5pbmciIGxpYnJhcnlOYW1lPSJDb21tb24iIHhzaTp0eXBlPSJWYWx1ZVNldFJlZiIvPgogICAgICAgICAgICAgICA8L2V4cHJlc3Npb24+CiAgICAgICAgICAgIDwvc291cmNlPgogICAgICAgICAgICA8d2hlcmUgeHNpOnR5cGU9IkluIj4KICAgICAgICAgICAgICAgPG9wZXJhbmQgcGF0aD0idmFsdWUiIHhzaTp0eXBlPSJQcm9wZXJ0eSI+CiAgICAgICAgICAgICAgICAgIDxzb3VyY2UgcGF0aD0iZWZmZWN0aXZlIiBzY29wZT0ib2JzZXJ2YXRpb24iIHhzaTp0eXBlPSJQcm9wZXJ0eSIvPgogICAgICAgICAgICAgICA8L29wZXJhbmQ+CiAgICAgICAgICAgICAgIDxvcGVyYW5kIG5hbWU9Ikxvb2tiYWNrIFllYXIiIHhzaTp0eXBlPSJFeHByZXNzaW9uUmVmIi8+CiAgICAgICAgICAgIDwvd2hlcmU+CiAgICAgICAgICAgIDxzb3J0PgogICAgICAgICAgICAgICA8YnkgZGlyZWN0aW9uPSJhc2MiIHhzaTp0eXBlPSJCeUV4cHJlc3Npb24iPgogICAgICAgICAgICAgICAgICA8ZXhwcmVzc2lvbiBwYXRoPSJ2YWx1ZSIgeHNpOnR5cGU9IlByb3BlcnR5Ij4KICAgICAgICAgICAgICAgICAgICAgPHNvdXJjZSBuYW1lPSJlZmZlY3RpdmUiIHhzaTp0eXBlPSJJZGVudGlmaWVyUmVmIi8+CiAgICAgICAgICAgICAgICAgIDwvZXhwcmVzc2lvbj4KICAgICAgICAgICAgICAgPC9ieT4KICAgICAgICAgICAgPC9zb3J0PgogICAgICAgICA8L2V4cHJlc3Npb24+CiAgICAgIDwvZGVmPgogICAgICA8ZGVmIG5hbWU9Ik1vc3QgUmVjZW50IE9waW9pZCBEcnVnIFVyaW5lIFNjcmVlbmluZ3MgaW4gTGFzdCAxMiBNb250aHMiIGNvbnRleHQ9IlBhdGllbnQiIGFjY2Vzc0xldmVsPSJQdWJsaWMiPgogICAgICAgICA8ZXhwcmVzc2lvbiB4c2k6dHlwZT0iTGFzdCI+CiAgICAgICAgICAgIDxzb3VyY2UgbmFtZT0iR2V0IE9waW9pZCBEcnVnIFVyaW5lIFNjcmVlbmluZ3MgaW4gTGFzdCAxMiBNb250aHMiIHhzaTp0eXBlPSJFeHByZXNzaW9uUmVmIi8+CiAgICAgICAgIDwvZXhwcmVzc2lvbj4KICAgICAgPC9kZWY+CiAgICAgIDxkZWYgbmFtZT0iTm8gVXJpbmUgU2NyZWVuaW5nIEluIExhc3QgMTIgTW9udGhzIiBjb250ZXh0PSJQYXRpZW50IiBhY2Nlc3NMZXZlbD0iUHVibGljIj4KICAgICAgICAgPGV4cHJlc3Npb24geHNpOnR5cGU9IkFuZCI+CiAgICAgICAgICAgIDxvcGVyYW5kIHhzaTp0eXBlPSJJc051bGwiPgogICAgICAgICAgICAgICA8b3BlcmFuZCBuYW1lPSJNb3N0IFJlY2VudCBJbGxpY2l0IERydWcgVXJpbmUgU2NyZWVuaW5ncyBpbiBMYXN0IDEyIE1vbnRocyIgeHNpOnR5cGU9IkV4cHJlc3Npb25SZWYiLz4KICAgICAgICAgICAgPC9vcGVyYW5kPgogICAgICAgICAgICA8b3BlcmFuZCB4c2k6dHlwZT0iSXNOdWxsIj4KICAgICAgICAgICAgICAgPG9wZXJhbmQgbmFtZT0iTW9zdCBSZWNlbnQgT3Bpb2lkIERydWcgVXJpbmUgU2NyZWVuaW5ncyBpbiBMYXN0IDEyIE1vbnRocyIgeHNpOnR5cGU9IkV4cHJlc3Npb25SZWYiLz4KICAgICAgICAgICAgPC9vcGVyYW5kPgogICAgICAgICA8L2V4cHJlc3Npb24+CiAgICAgIDwvZGVmPgogICAgICA8ZGVmIG5hbWU9IlBvc2l0aXZlIE9waW9pZCBEcnVnIFNjcmVlbmluZyIgY29udGV4dD0iUGF0aWVudCIgYWNjZXNzTGV2ZWw9IlB1YmxpYyI+CiAgICAgICAgIDxleHByZXNzaW9uIHhzaTp0eXBlPSJRdWVyeSI+CiAgICAgICAgICAgIDxzb3VyY2UgYWxpYXM9Im1vc3RSZWNlbnRTY3JlZW5pbmciPgogICAgICAgICAgICAgICA8ZXhwcmVzc2lvbiBuYW1lPSJNb3N0IFJlY2VudCBPcGlvaWQgRHJ1ZyBVcmluZSBTY3JlZW5pbmdzIGluIExhc3QgMTIgTW9udGhzIiB4c2k6dHlwZT0iRXhwcmVzc2lvblJlZiIvPgogICAgICAgICAgICA8L3NvdXJjZT4KICAgICAgICAgICAgPHdoZXJlIHhzaTp0eXBlPSJPciI+CiAgICAgICAgICAgICAgIDxvcGVyYW5kIHhzaTp0eXBlPSJFcXVhbCI+CiAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIHBhdGg9InZhbHVlIiB4c2k6dHlwZT0iUHJvcGVydHkiPgogICAgICAgICAgICAgICAgICAgICA8c291cmNlIHBhdGg9ImNvZGUiIHhzaTp0eXBlPSJQcm9wZXJ0eSI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxzb3VyY2UgeHNpOnR5cGU9IkluZGV4ZXIiPgogICAgICAgICAgICAgICAgICAgICAgICAgICA8b3BlcmFuZCBwYXRoPSJjb2RpbmciIHhzaTp0eXBlPSJQcm9wZXJ0eSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzb3VyY2UgcGF0aD0iaW50ZXJwcmV0YXRpb24iIHNjb3BlPSJtb3N0UmVjZW50U2NyZWVuaW5nIiB4c2k6dHlwZT0iUHJvcGVydHkiLz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9vcGVyYW5kPgogICAgICAgICAgICAgICAgICAgICAgICAgICA8b3BlcmFuZCB2YWx1ZVR5cGU9InQ6SW50ZWdlciIgdmFsdWU9IjAiIHhzaTp0eXBlPSJMaXRlcmFsIi8+CiAgICAgICAgICAgICAgICAgICAgICAgIDwvc291cmNlPgogICAgICAgICAgICAgICAgICAgICA8L3NvdXJjZT4KICAgICAgICAgICAgICAgICAgPC9vcGVyYW5kPgogICAgICAgICAgICAgICAgICA8b3BlcmFuZCB2YWx1ZVR5cGU9InQ6U3RyaW5nIiB2YWx1ZT0iUE9TIiB4c2k6dHlwZT0iTGl0ZXJhbCIvPgogICAgICAgICAgICAgICA8L29wZXJhbmQ+CiAgICAgICAgICAgICAgIDxvcGVyYW5kIHhzaTp0eXBlPSJJZiI+CiAgICAgICAgICAgICAgICAgIDxjb25kaXRpb24gYXNUeXBlPSJ0OkJvb2xlYW4iIHhzaTp0eXBlPSJBcyI+CiAgICAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIHhzaTp0eXBlPSJOb3QiPgogICAgICAgICAgICAgICAgICAgICAgICA8b3BlcmFuZCB4c2k6dHlwZT0iSXNOdWxsIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wZXJhbmQgeHNpOnR5cGU9IkluZGV4ZXIiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3BlcmFuZCBwYXRoPSJjb21wb25lbnQiIHNjb3BlPSJtb3N0UmVjZW50U2NyZWVuaW5nIiB4c2k6dHlwZT0iUHJvcGVydHkiLz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wZXJhbmQgdmFsdWVUeXBlPSJ0OkludGVnZXIiIHZhbHVlPSIwIiB4c2k6dHlwZT0iTGl0ZXJhbCIvPgogICAgICAgICAgICAgICAgICAgICAgICAgICA8L29wZXJhbmQ+CiAgICAgICAgICAgICAgICAgICAgICAgIDwvb3BlcmFuZD4KICAgICAgICAgICAgICAgICAgICAgPC9vcGVyYW5kPgogICAgICAgICAgICAgICAgICA8L2NvbmRpdGlvbj4KICAgICAgICAgICAgICAgICAgPHRoZW4geHNpOnR5cGU9IkVxdWFsIj4KICAgICAgICAgICAgICAgICAgICAgPG9wZXJhbmQgcGF0aD0idmFsdWUiIHhzaTp0eXBlPSJQcm9wZXJ0eSI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxzb3VyY2UgcGF0aD0iY29kZSIgeHNpOnR5cGU9IlByb3BlcnR5Ij4KICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNvdXJjZSB4c2k6dHlwZT0iSW5kZXhlciI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIHBhdGg9ImNvZGluZyIgeHNpOnR5cGU9IlByb3BlcnR5Ij4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNvdXJjZSBwYXRoPSJpbnRlcnByZXRhdGlvbiIgeHNpOnR5cGU9IlByb3BlcnR5Ij4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNvdXJjZSB4c2k6dHlwZT0iSW5kZXhlciI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIHBhdGg9ImNvbXBvbmVudCIgc2NvcGU9Im1vc3RSZWNlbnRTY3JlZW5pbmciIHhzaTp0eXBlPSJQcm9wZXJ0eSIvPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3BlcmFuZCB2YWx1ZVR5cGU9InQ6SW50ZWdlciIgdmFsdWU9IjAiIHhzaTp0eXBlPSJMaXRlcmFsIi8+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc291cmNlPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NvdXJjZT4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9vcGVyYW5kPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3BlcmFuZCB2YWx1ZVR5cGU9InQ6SW50ZWdlciIgdmFsdWU9IjAiIHhzaTp0eXBlPSJMaXRlcmFsIi8+CiAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc291cmNlPgogICAgICAgICAgICAgICAgICAgICAgICA8L3NvdXJjZT4KICAgICAgICAgICAgICAgICAgICAgPC9vcGVyYW5kPgogICAgICAgICAgICAgICAgICAgICA8b3BlcmFuZCB2YWx1ZVR5cGU9InQ6U3RyaW5nIiB2YWx1ZT0iUE9TIiB4c2k6dHlwZT0iTGl0ZXJhbCIvPgogICAgICAgICAgICAgICAgICA8L3RoZW4+CiAgICAgICAgICAgICAgICAgIDxlbHNlIHZhbHVlVHlwZT0idDpCb29sZWFuIiB2YWx1ZT0iZmFsc2UiIHhzaTp0eXBlPSJMaXRlcmFsIi8+CiAgICAgICAgICAgICAgIDwvb3BlcmFuZD4KICAgICAgICAgICAgPC93aGVyZT4KICAgICAgICAgPC9leHByZXNzaW9uPgogICAgICA8L2RlZj4KICAgICAgPGRlZiBuYW1lPSJPcmRlcnMgQmVmb3JlIE1vc3QgUmVjZW50IE9waW9pZCBTY3JlZW5pbmciIGNvbnRleHQ9IlBhdGllbnQiIGFjY2Vzc0xldmVsPSJQdWJsaWMiPgogICAgICAgICA8ZXhwcmVzc2lvbiB4c2k6dHlwZT0iUXVlcnkiPgogICAgICAgICAgICA8c291cmNlIGFsaWFzPSJvcmRlcnMiPgogICAgICAgICAgICAgICA8ZXhwcmVzc2lvbiBuYW1lPSJHZXQgQWN0aXZlIEFtYnVsYXRvcnkgT3Bpb2lkIFJ4IiB4c2k6dHlwZT0iRXhwcmVzc2lvblJlZiIvPgogICAgICAgICAgICA8L3NvdXJjZT4KICAgICAgICAgICAgPHJlbGF0aW9uc2hpcCBhbGlhcz0ibW9zdFJlY2VudFNjcmVlbmluZyIgeHNpOnR5cGU9IldpdGgiPgogICAgICAgICAgICAgICA8ZXhwcmVzc2lvbiBuYW1lPSJQb3NpdGl2ZSBPcGlvaWQgRHJ1ZyBTY3JlZW5pbmciIHhzaTp0eXBlPSJFeHByZXNzaW9uUmVmIi8+CiAgICAgICAgICAgICAgIDxzdWNoVGhhdCB4c2k6dHlwZT0iTGVzcyI+CiAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIHBhdGg9InZhbHVlIiB4c2k6dHlwZT0iUHJvcGVydHkiPgogICAgICAgICAgICAgICAgICAgICA8c291cmNlIHBhdGg9ImF1dGhvcmVkT24iIHNjb3BlPSJvcmRlcnMiIHhzaTp0eXBlPSJQcm9wZXJ0eSIvPgogICAgICAgICAgICAgICAgICA8L29wZXJhbmQ+CiAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIHBhdGg9InZhbHVlIiB4c2k6dHlwZT0iUHJvcGVydHkiPgogICAgICAgICAgICAgICAgICAgICA8c291cmNlIHBhdGg9ImVmZmVjdGl2ZSIgc2NvcGU9Im1vc3RSZWNlbnRTY3JlZW5pbmciIHhzaTp0eXBlPSJQcm9wZXJ0eSIvPgogICAgICAgICAgICAgICAgICA8L29wZXJhbmQ+CiAgICAgICAgICAgICAgIDwvc3VjaFRoYXQ+CiAgICAgICAgICAgIDwvcmVsYXRpb25zaGlwPgogICAgICAgICAgICA8cmV0dXJuPgogICAgICAgICAgICAgICA8ZXhwcmVzc2lvbiBuYW1lPSJvcmRlcnMiIHhzaTp0eXBlPSJBbGlhc1JlZiIvPgogICAgICAgICAgICA8L3JldHVybj4KICAgICAgICAgPC9leHByZXNzaW9uPgogICAgICA8L2RlZj4KICAgICAgPGRlZiBuYW1lPSJQcmVzY3JpYmVkIE9waW9pZHMiIGNvbnRleHQ9IlBhdGllbnQiIGFjY2Vzc0xldmVsPSJQdWJsaWMiPgogICAgICAgICA8ZXhwcmVzc2lvbiB4c2k6dHlwZT0iUXVlcnkiPgogICAgICAgICAgICA8c291cmNlIGFsaWFzPSJvcmRlcnMiPgogICAgICAgICAgICAgICA8ZXhwcmVzc2lvbiBuYW1lPSJPcmRlcnMgQmVmb3JlIE1vc3QgUmVjZW50IE9waW9pZCBTY3JlZW5pbmciIHhzaTp0eXBlPSJFeHByZXNzaW9uUmVmIi8+CiAgICAgICAgICAgIDwvc291cmNlPgogICAgICAgICAgICA8cmV0dXJuPgogICAgICAgICAgICAgICA8ZXhwcmVzc2lvbiB4c2k6dHlwZT0iTG93ZXIiPgogICAgICAgICAgICAgICAgICA8b3BlcmFuZCB4c2k6dHlwZT0iU2luZ2xldG9uRnJvbSI+CiAgICAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIG5hbWU9IkdldEluZ3JlZGllbnQiIGxpYnJhcnlOYW1lPSJDb21tb24iIHhzaTp0eXBlPSJGdW5jdGlvblJlZiI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIG5hbWU9IlRvQ29kZSIgbGlicmFyeU5hbWU9IkNvbW1vbiIgeHNpOnR5cGU9IkZ1bmN0aW9uUmVmIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wZXJhbmQgeHNpOnR5cGU9IkluZGV4ZXIiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3BlcmFuZCBwYXRoPSJjb2RpbmciIHhzaTp0eXBlPSJQcm9wZXJ0eSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzb3VyY2UgcGF0aD0ibWVkaWNhdGlvbiIgc2NvcGU9Im9yZGVycyIgeHNpOnR5cGU9IlByb3BlcnR5Ii8+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvb3BlcmFuZD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wZXJhbmQgdmFsdWVUeXBlPSJ0OkludGVnZXIiIHZhbHVlPSIwIiB4c2k6dHlwZT0iTGl0ZXJhbCIvPgogICAgICAgICAgICAgICAgICAgICAgICAgICA8L29wZXJhbmQ+CiAgICAgICAgICAgICAgICAgICAgICAgIDwvb3BlcmFuZD4KICAgICAgICAgICAgICAgICAgICAgPC9vcGVyYW5kPgogICAgICAgICAgICAgICAgICA8L29wZXJhbmQ+CiAgICAgICAgICAgICAgIDwvZXhwcmVzc2lvbj4KICAgICAgICAgICAgPC9yZXR1cm4+CiAgICAgICAgIDwvZXhwcmVzc2lvbj4KICAgICAgPC9kZWY+CiAgICAgIDxkZWYgbmFtZT0iR2V0T3Bpb2lkIiBjb250ZXh0PSJQYXRpZW50IiBhY2Nlc3NMZXZlbD0iUHVibGljIiB4c2k6dHlwZT0iRnVuY3Rpb25EZWYiPgogICAgICAgICA8ZXhwcmVzc2lvbiB4c2k6dHlwZT0iQ2FzZSI+CiAgICAgICAgICAgIDxjb21wYXJhbmQgbmFtZT0idmFsdWUiIHhzaTp0eXBlPSJPcGVyYW5kUmVmIi8+CiAgICAgICAgICAgIDxjYXNlSXRlbT4KICAgICAgICAgICAgICAgPHdoZW4gdmFsdWVUeXBlPSJ0OlN0cmluZyIgdmFsdWU9IjMyOTktNSIgeHNpOnR5cGU9IkxpdGVyYWwiLz4KICAgICAgICAgICAgICAgPHRoZW4gdmFsdWVUeXBlPSJ0OlN0cmluZyIgdmFsdWU9IkFjZXRhbWlub3BoZW4iIHhzaTp0eXBlPSJMaXRlcmFsIi8+CiAgICAgICAgICAgIDwvY2FzZUl0ZW0+CiAgICAgICAgICAgIDxjYXNlSXRlbT4KICAgICAgICAgICAgICAgPHdoZW4gdmFsdWVUeXBlPSJ0OlN0cmluZyIgdmFsdWU9IjE0MTg0LTYiIHhzaTp0eXBlPSJMaXRlcmFsIi8+CiAgICAgICAgICAgICAgIDx0aGVuIHZhbHVlVHlwZT0idDpTdHJpbmciIHZhbHVlPSJBdHJvcGluZSIgeHNpOnR5cGU9IkxpdGVyYWwiLz4KICAgICAgICAgICAgPC9jYXNlSXRlbT4KICAgICAgICAgICAgPGNhc2VJdGVtPgogICAgICAgICAgICAgICA8d2hlbiB2YWx1ZVR5cGU9InQ6U3RyaW5nIiB2YWx1ZT0iMTY0ODUtNSIgeHNpOnR5cGU9IkxpdGVyYWwiLz4KICAgICAgICAgICAgICAgPHRoZW4gdmFsdWVUeXBlPSJ0OlN0cmluZyIgdmFsdWU9IkJyb21vZGlwaGVuaHlkcmFtaW5lIiB4c2k6dHlwZT0iTGl0ZXJhbCIvPgogICAgICAgICAgICA8L2Nhc2VJdGVtPgogICAgICAgICAgICA8Y2FzZUl0ZW0+CiAgICAgICAgICAgICAgIDx3aGVuIHZhbHVlVHlwZT0idDpTdHJpbmciIHZhbHVlPSIzNDA4LTIiIHhzaTp0eXBlPSJMaXRlcmFsIi8+CiAgICAgICAgICAgICAgIDx0aGVuIHZhbHVlVHlwZT0idDpTdHJpbmciIHZhbHVlPSJCcm9tcGhlbmlyYW1pbmUiIHhzaTp0eXBlPSJMaXRlcmFsIi8+CiAgICAgICAgICAgIDwvY2FzZUl0ZW0+CiAgICAgICAgICAgIDxjYXNlSXRlbT4KICAgICAgICAgICAgICAgPHdoZW4gdmFsdWVUeXBlPSJ0OlN0cmluZyIgdmFsdWU9IjM0MTQtMCIgeHNpOnR5cGU9IkxpdGVyYWwiLz4KICAgICAgICAgICAgICAgPHRoZW4gdmFsdWVUeXBlPSJ0OlN0cmluZyIgdmFsdWU9IkJ1cHJlbm9ycGhpbmUiIHhzaTp0eXBlPSJMaXRlcmFsIi8+CiAgICAgICAgICAgIDwvY2FzZUl0ZW0+CiAgICAgICAgICAgIDxjYXNlSXRlbT4KICAgICAgICAgICAgICAgPHdoZW4gdmFsdWVUeXBlPSJ0OlN0cmluZyIgdmFsdWU9IjM0MjEtNSIgeHNpOnR5cGU9IkxpdGVyYWwiLz4KICAgICAgICAgICAgICAgPHRoZW4gdmFsdWVUeXBlPSJ0OlN0cmluZyIgdmFsdWU9IkJ1dGFsYml0YWwiIHhzaTp0eXBlPSJMaXRlcmFsIi8+CiAgICAgICAgICAgIDwvY2FzZUl0ZW0+CiAgICAgICAgICAgIDxjYXNlSXRlbT4KICAgICAgICAgICAgICAgPHdoZW4gdmFsdWVUeXBlPSJ0OlN0cmluZyIgdmFsdWU9IjEyMzMzLTEiIHhzaTp0eXBlPSJMaXRlcmFsIi8+CiAgICAgICAgICAgICAgIDx0aGVuIHZhbHVlVHlwZT0idDpTdHJpbmciIHZhbHVlPSJCdXRvcnBoYW5vbCIgeHNpOnR5cGU9IkxpdGVyYWwiLz4KICAgICAgICAgICAgPC9jYXNlSXRlbT4KICAgICAgICAgICAgPGNhc2VJdGVtPgogICAgICAgICAgICAgICA8d2hlbiB2YWx1ZVR5cGU9InQ6U3RyaW5nIiB2YWx1ZT0iMzQyMy0xIiB4c2k6dHlwZT0iTGl0ZXJhbCIvPgogICAgICAgICAgICAgICA8dGhlbiB2YWx1ZVR5cGU9InQ6U3RyaW5nIiB2YWx1ZT0iQ2FmZmVpbmUiIHhzaTp0eXBlPSJMaXRlcmFsIi8+CiAgICAgICAgICAgIDwvY2FzZUl0ZW0+CiAgICAgICAgICAgIDxjYXNlSXRlbT4KICAgICAgICAgICAgICAgPHdoZW4gdmFsdWVUeXBlPSJ0OlN0cmluZyIgdmFsdWU9IjIxMTQyLTUiIHhzaTp0eXBlPSJMaXRlcmFsIi8+CiAgICAgICAgICAgICAgIDx0aGVuIHZhbHVlVHlwZT0idDpTdHJpbmciIHZhbHVlPSJDYXJpc29wcm9kb2wiIHhzaTp0eXBlPSJMaXRlcmFsIi8+CiAgICAgICAgICAgIDwvY2FzZUl0ZW0+CiAgICAgICAgICAgIDxjYXNlSXRlbT4KICAgICAgICAgICAgICAgPHdoZW4gdmFsdWVUeXBlPSJ0OlN0cmluZyIgdmFsdWU9IjE2NjA1LTgiIHhzaTp0eXBlPSJMaXRlcmFsIi8+CiAgICAgICAgICAgICAgIDx0aGVuIHZhbHVlVHlwZT0idDpTdHJpbmciIHZhbHVlPSJDaGxvcmN5Y2xpemluZSIgeHNpOnR5cGU9IkxpdGVyYWwiLz4KICAgICAgICAgICAgPC9jYXNlSXRlbT4KICAgICAgICAgICAgPGNhc2VJdGVtPgogICAgICAgICAgICAgICA8d2hlbiB2YWx1ZVR5cGU9InQ6U3RyaW5nIiB2YWx1ZT0iMzQ2Ny04IiB4c2k6dHlwZT0iTGl0ZXJhbCIvPgogICAgICAgICAgICAgICA8dGhlbiB2YWx1ZVR5cGU9InQ6U3RyaW5nIiB2YWx1ZT0iQ2hsb3JwaGVuaXJhbWluZSIgeHNpOnR5cGU9IkxpdGVyYWwiLz4KICAgICAgICAgICAgPC9jYXNlSXRlbT4KICAgICAgICAgICAgPGNhc2VJdGVtPgogICAgICAgICAgICAgICA8d2hlbiB2YWx1ZVR5cGU9InQ6U3RyaW5nIiB2YWx1ZT0iMzUwNy0xIiB4c2k6dHlwZT0iTGl0ZXJhbCIvPgogICAgICAgICAgICAgICA8dGhlbiB2YWx1ZVR5cGU9InQ6U3RyaW5nIiB2YWx1ZT0iQ29kZWluZSIgeHNpOnR5cGU9IkxpdGVyYWwiLz4KICAgICAgICAgICAgPC9jYXNlSXRlbT4KICAgICAgICAgICAgPGNhc2VJdGVtPgogICAgICAgICAgICAgICA8d2hlbiB2YWx1ZVR5cGU9InQ6U3RyaW5nIiB2YWx1ZT0iMTQwNjYtNSIgeHNpOnR5cGU9IkxpdGVyYWwiLz4KICAgICAgICAgICAgICAgPHRoZW4gdmFsdWVUeXBlPSJ0OlN0cmluZyIgdmFsdWU9IkRpaHlkcm9jb2RlaW5lIiB4c2k6dHlwZT0iTGl0ZXJhbCIvPgogICAgICAgICAgICA8L2Nhc2VJdGVtPgogICAgICAgICAgICA8Y2FzZUl0ZW0+CiAgICAgICAgICAgICAgIDx3aGVuIHZhbHVlVHlwZT0idDpTdHJpbmciIHZhbHVlPSIzNTcxLTciIHhzaTp0eXBlPSJMaXRlcmFsIi8+CiAgICAgICAgICAgICAgIDx0aGVuIHZhbHVlVHlwZT0idDpTdHJpbmciIHZhbHVlPSJEaXBoZW5oeWRyYW1pbmUiIHhzaTp0eXBlPSJMaXRlcmFsIi8+CiAgICAgICAgICAgIDwvY2FzZUl0ZW0+CiAgICAgICAgICAgIDxjYXNlSXRlbT4KICAgICAgICAgICAgICAgPHdoZW4gdmFsdWVUeXBlPSJ0OlN0cmluZyIgdmFsdWU9IjExMjM1LTkiIHhzaTp0eXBlPSJMaXRlcmFsIi8+CiAgICAgICAgICAgICAgIDx0aGVuIHZhbHVlVHlwZT0idDpTdHJpbmciIHZhbHVlPSJGZW50YW55bCIgeHNpOnR5cGU9IkxpdGVyYWwiLz4KICAgICAgICAgICAgPC9jYXNlSXRlbT4KICAgICAgICAgICAgPGNhc2VJdGVtPgogICAgICAgICAgICAgICA8d2hlbiB2YWx1ZVR5cGU9InQ6U3RyaW5nIiB2YWx1ZT0iMTIzMDgtMyIgeHNpOnR5cGU9IkxpdGVyYWwiLz4KICAgICAgICAgICAgICAgPHRoZW4gdmFsdWVUeXBlPSJ0OlN0cmluZyIgdmFsdWU9Ikh5ZHJvY29kb25lIiB4c2k6dHlwZT0iTGl0ZXJhbCIvPgogICAgICAgICAgICA8L2Nhc2VJdGVtPgogICAgICAgICAgICA8Y2FzZUl0ZW0+CiAgICAgICAgICAgICAgIDx3aGVuIHZhbHVlVHlwZT0idDpTdHJpbmciIHZhbHVlPSI5ODM0LTMiIHhzaTp0eXBlPSJMaXRlcmFsIi8+CiAgICAgICAgICAgICAgIDx0aGVuIHZhbHVlVHlwZT0idDpTdHJpbmciIHZhbHVlPSJIeWRyb21vcnBob25lIiB4c2k6dHlwZT0iTGl0ZXJhbCIvPgogICAgICAgICAgICA8L2Nhc2VJdGVtPgogICAgICAgICAgICA8Y2FzZUl0ZW0+CiAgICAgICAgICAgICAgIDx3aGVuIHZhbHVlVHlwZT0idDpTdHJpbmciIHZhbHVlPSIxNDA3MSIgeHNpOnR5cGU9IkxpdGVyYWwiLz4KICAgICAgICAgICAgICAgPHRoZW4gdmFsdWVUeXBlPSJ0OlN0cmluZyIgdmFsdWU9IklidXByb2ZlbiIgeHNpOnR5cGU9IkxpdGVyYWwiLz4KICAgICAgICAgICAgPC9jYXNlSXRlbT4KICAgICAgICAgICAgPGNhc2VJdGVtPgogICAgICAgICAgICAgICA8d2hlbiB2YWx1ZVR5cGU9InQ6U3RyaW5nIiB2YWx1ZT0iMzcxMS05IiB4c2k6dHlwZT0iTGl0ZXJhbCIvPgogICAgICAgICAgICAgICA8dGhlbiB2YWx1ZVR5cGU9InQ6U3RyaW5nIiB2YWx1ZT0iTGV2b3JwaGFub2wiIHhzaTp0eXBlPSJMaXRlcmFsIi8+CiAgICAgICAgICAgIDwvY2FzZUl0ZW0+CiAgICAgICAgICAgIDxjYXNlSXRlbT4KICAgICAgICAgICAgICAgPHdoZW4gdmFsdWVUeXBlPSJ0OlN0cmluZyIgdmFsdWU9IjM3NDYtNSIgeHNpOnR5cGU9IkxpdGVyYWwiLz4KICAgICAgICAgICAgICAgPHRoZW4gdmFsdWVUeXBlPSJ0OlN0cmluZyIgdmFsdWU9Ik1lcGVyaWRpbmUiIHhzaTp0eXBlPSJMaXRlcmFsIi8+CiAgICAgICAgICAgIDwvY2FzZUl0ZW0+CiAgICAgICAgICAgIDxjYXNlSXRlbT4KICAgICAgICAgICAgICAgPHdoZW4gdmFsdWVUeXBlPSJ0OlN0cmluZyIgdmFsdWU9IjM3NzMtOSIgeHNpOnR5cGU9IkxpdGVyYWwiLz4KICAgICAgICAgICAgICAgPHRoZW4gdmFsdWVUeXBlPSJ0OlN0cmluZyIgdmFsdWU9Ik1ldGhhZG9uZSIgeHNpOnR5cGU9IkxpdGVyYWwiLz4KICAgICAgICAgICAgPC9jYXNlSXRlbT4KICAgICAgICAgICAgPGNhc2VJdGVtPgogICAgICAgICAgICAgICA8d2hlbiB2YWx1ZVR5cGU9InQ6U3RyaW5nIiB2YWx1ZT0iMzgzMC03IiB4c2k6dHlwZT0iTGl0ZXJhbCIvPgogICAgICAgICAgICAgICA8dGhlbiB2YWx1ZVR5cGU9InQ6U3RyaW5nIiB2YWx1ZT0iTW9ycGhpbmUiIHhzaTp0eXBlPSJMaXRlcmFsIi8+CiAgICAgICAgICAgIDwvY2FzZUl0ZW0+CiAgICAgICAgICAgIDxjYXNlSXRlbT4KICAgICAgICAgICAgICAgPHdoZW4gdmFsdWVUeXBlPSJ0OlN0cmluZyIgdmFsdWU9IjQyNjE4LTkiIHhzaTp0eXBlPSJMaXRlcmFsIi8+CiAgICAgICAgICAgICAgIDx0aGVuIHZhbHVlVHlwZT0idDpTdHJpbmciIHZhbHVlPSJOYWxveG9uZSIgeHNpOnR5cGU9IkxpdGVyYWwiLz4KICAgICAgICAgICAgPC9jYXNlSXRlbT4KICAgICAgICAgICAgPGNhc2VJdGVtPgogICAgICAgICAgICAgICA8d2hlbiB2YWx1ZVR5cGU9InQ6U3RyaW5nIiB2YWx1ZT0iMTIzMDktMSIgeHNpOnR5cGU9IkxpdGVyYWwiLz4KICAgICAgICAgICAgICAgPHRoZW4gdmFsdWVUeXBlPSJ0OlN0cmluZyIgdmFsdWU9Ik5hbHRyZXhvbmUiIHhzaTp0eXBlPSJMaXRlcmFsIi8+CiAgICAgICAgICAgIDwvY2FzZUl0ZW0+CiAgICAgICAgICAgIDxjYXNlSXRlbT4KICAgICAgICAgICAgICAgPHdoZW4gdmFsdWVUeXBlPSJ0OlN0cmluZyIgdmFsdWU9IjEwOTk4LTMiIHhzaTp0eXBlPSJMaXRlcmFsIi8+CiAgICAgICAgICAgICAgIDx0aGVuIHZhbHVlVHlwZT0idDpTdHJpbmciIHZhbHVlPSJPeHljb2RvbmUiIHhzaTp0eXBlPSJMaXRlcmFsIi8+CiAgICAgICAgICAgIDwvY2FzZUl0ZW0+CiAgICAgICAgICAgIDxjYXNlSXRlbT4KICAgICAgICAgICAgICAgPHdoZW4gdmFsdWVUeXBlPSJ0OlN0cmluZyIgdmFsdWU9IjExMjQ3LTQiIHhzaTp0eXBlPSJMaXRlcmFsIi8+CiAgICAgICAgICAgICAgIDx0aGVuIHZhbHVlVHlwZT0idDpTdHJpbmciIHZhbHVlPSJPeHltb3JwaG9uZSIgeHNpOnR5cGU9IkxpdGVyYWwiLz4KICAgICAgICAgICAgPC9jYXNlSXRlbT4KICAgICAgICAgICAgPGNhc2VJdGVtPgogICAgICAgICAgICAgICA8d2hlbiB2YWx1ZVR5cGU9InQ6U3RyaW5nIiB2YWx1ZT0iMzkxNy0yIiB4c2k6dHlwZT0iTGl0ZXJhbCIvPgogICAgICAgICAgICAgICA8dGhlbiB2YWx1ZVR5cGU9InQ6U3RyaW5nIiB2YWx1ZT0iUGVudGF6b2NpbmUiIHhzaTp0eXBlPSJMaXRlcmFsIi8+CiAgICAgICAgICAgIDwvY2FzZUl0ZW0+CiAgICAgICAgICAgIDxjYXNlSXRlbT4KICAgICAgICAgICAgICAgPHdoZW4gdmFsdWVUeXBlPSJ0OlN0cmluZyIgdmFsdWU9IjM5NjItOCIgeHNpOnR5cGU9IkxpdGVyYWwiLz4KICAgICAgICAgICAgICAgPHRoZW4gdmFsdWVUeXBlPSJ0OlN0cmluZyIgdmFsdWU9IlBoZW55bGVwaHJpbmUiIHhzaTp0eXBlPSJMaXRlcmFsIi8+CiAgICAgICAgICAgIDwvY2FzZUl0ZW0+CiAgICAgICAgICAgIDxjYXNlSXRlbT4KICAgICAgICAgICAgICAgPHdoZW4gdmFsdWVUeXBlPSJ0OlN0cmluZyIgdmFsdWU9IjM5NjUtMSIgeHNpOnR5cGU9IkxpdGVyYWwiLz4KICAgICAgICAgICAgICAgPHRoZW4gdmFsdWVUeXBlPSJ0OlN0cmluZyIgdmFsdWU9IlBoZW55bHByb3Bhbm9sYW1pbmUiIHhzaTp0eXBlPSJMaXRlcmFsIi8+CiAgICAgICAgICAgIDwvY2FzZUl0ZW0+CiAgICAgICAgICAgIDxjYXNlSXRlbT4KICAgICAgICAgICAgICAgPHdoZW4gdmFsdWVUeXBlPSJ0OlN0cmluZyIgdmFsdWU9IjExMDAwLTciIHhzaTp0eXBlPSJMaXRlcmFsIi8+CiAgICAgICAgICAgICAgIDx0aGVuIHZhbHVlVHlwZT0idDpTdHJpbmciIHZhbHVlPSJQcm9tZXRoYXppbmUiIHhzaTp0eXBlPSJMaXRlcmFsIi8+CiAgICAgICAgICAgIDwvY2FzZUl0ZW0+CiAgICAgICAgICAgIDxjYXNlSXRlbT4KICAgICAgICAgICAgICAgPHdoZW4gdmFsdWVUeXBlPSJ0OlN0cmluZyIgdmFsdWU9IjQwMDMtMCIgeHNpOnR5cGU9IkxpdGVyYWwiLz4KICAgICAgICAgICAgICAgPHRoZW4gdmFsdWVUeXBlPSJ0OlN0cmluZyIgdmFsdWU9IlBzZXVkb2VwaGVkcmluZSIgeHNpOnR5cGU9IkxpdGVyYWwiLz4KICAgICAgICAgICAgPC9jYXNlSXRlbT4KICAgICAgICAgICAgPGNhc2VJdGVtPgogICAgICAgICAgICAgICA8d2hlbiB2YWx1ZVR5cGU9InQ6U3RyaW5nIiB2YWx1ZT0iNDAwOS03IiB4c2k6dHlwZT0iTGl0ZXJhbCIvPgogICAgICAgICAgICAgICA8dGhlbiB2YWx1ZVR5cGU9InQ6U3RyaW5nIiB2YWx1ZT0iUHlyaWxhbWluZSIgeHNpOnR5cGU9IkxpdGVyYWwiLz4KICAgICAgICAgICAgPC9jYXNlSXRlbT4KICAgICAgICAgICAgPGNhc2VJdGVtPgogICAgICAgICAgICAgICA8d2hlbiB2YWx1ZVR5cGU9InQ6U3RyaW5nIiB2YWx1ZT0iNjU4MDctMCIgeHNpOnR5cGU9IkxpdGVyYWwiLz4KICAgICAgICAgICAgICAgPHRoZW4gdmFsdWVUeXBlPSJ0OlN0cmluZyIgdmFsdWU9IlRhcGVudGFkb2wiIHhzaTp0eXBlPSJMaXRlcmFsIi8+CiAgICAgICAgICAgIDwvY2FzZUl0ZW0+CiAgICAgICAgICAgIDxjYXNlSXRlbT4KICAgICAgICAgICAgICAgPHdoZW4gdmFsdWVUeXBlPSJ0OlN0cmluZyIgdmFsdWU9IjQzMjE5LTUiIHhzaTp0eXBlPSJMaXRlcmFsIi8+CiAgICAgICAgICAgICAgIDx0aGVuIHZhbHVlVHlwZT0idDpTdHJpbmciIHZhbHVlPSJUcmFtYWRvbCIgeHNpOnR5cGU9IkxpdGVyYWwiLz4KICAgICAgICAgICAgPC9jYXNlSXRlbT4KICAgICAgICAgICAgPGVsc2UgeHNpOnR5cGU9IkNvbmNhdGVuYXRlIj4KICAgICAgICAgICAgICAgPG9wZXJhbmQgdmFsdWVUeXBlPSJ0OlN0cmluZyIgdmFsdWU9IlVua25vd24gY29kZTogIiB4c2k6dHlwZT0iTGl0ZXJhbCIvPgogICAgICAgICAgICAgICA8b3BlcmFuZCBuYW1lPSJ2YWx1ZSIgeHNpOnR5cGU9Ik9wZXJhbmRSZWYiLz4KICAgICAgICAgICAgPC9lbHNlPgogICAgICAgICA8L2V4cHJlc3Npb24+CiAgICAgICAgIDxvcGVyYW5kIG5hbWU9InZhbHVlIj4KICAgICAgICAgICAgPG9wZXJhbmRUeXBlU3BlY2lmaWVyIG5hbWU9InQ6U3RyaW5nIiB4c2k6dHlwZT0iTmFtZWRUeXBlU3BlY2lmaWVyIi8+CiAgICAgICAgIDwvb3BlcmFuZD4KICAgICAgPC9kZWY+CiAgICAgIDxkZWYgbmFtZT0iTWlzc2luZyBPcGlvaWRzIiBjb250ZXh0PSJQYXRpZW50IiBhY2Nlc3NMZXZlbD0iUHVibGljIj4KICAgICAgICAgPGV4cHJlc3Npb24geHNpOnR5cGU9IklmIj4KICAgICAgICAgICAgPGNvbmRpdGlvbiBhc1R5cGU9InQ6Qm9vbGVhbiIgeHNpOnR5cGU9IkFzIj4KICAgICAgICAgICAgICAgPG9wZXJhbmQgeHNpOnR5cGU9Ik5vdCI+CiAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIHhzaTp0eXBlPSJJc051bGwiPgogICAgICAgICAgICAgICAgICAgICA8b3BlcmFuZCBuYW1lPSJQb3NpdGl2ZSBPcGlvaWQgRHJ1ZyBTY3JlZW5pbmciIHhzaTp0eXBlPSJFeHByZXNzaW9uUmVmIi8+CiAgICAgICAgICAgICAgICAgIDwvb3BlcmFuZD4KICAgICAgICAgICAgICAgPC9vcGVyYW5kPgogICAgICAgICAgICA8L2NvbmRpdGlvbj4KICAgICAgICAgICAgPHRoZW4geHNpOnR5cGU9IkV4Y2VwdCI+CiAgICAgICAgICAgICAgIDxvcGVyYW5kIHhzaTp0eXBlPSJRdWVyeSI+CiAgICAgICAgICAgICAgICAgIDxzb3VyY2UgYWxpYXM9IlByZXNjcmlwdGlvbnMiPgogICAgICAgICAgICAgICAgICAgICA8ZXhwcmVzc2lvbiBuYW1lPSJQcmVzY3JpYmVkIE9waW9pZHMiIHhzaTp0eXBlPSJFeHByZXNzaW9uUmVmIi8+CiAgICAgICAgICAgICAgICAgIDwvc291cmNlPgogICAgICAgICAgICAgICA8L29wZXJhbmQ+CiAgICAgICAgICAgICAgIDxvcGVyYW5kIHhzaTp0eXBlPSJUb0xpc3QiPgogICAgICAgICAgICAgICAgICA8b3BlcmFuZCB4c2k6dHlwZT0iTG93ZXIiPgogICAgICAgICAgICAgICAgICAgICA8b3BlcmFuZCBuYW1lPSJHZXRPcGlvaWQiIHhzaTp0eXBlPSJGdW5jdGlvblJlZiI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIHBhdGg9InZhbHVlIiB4c2k6dHlwZT0iUHJvcGVydHkiPgogICAgICAgICAgICAgICAgICAgICAgICAgICA8c291cmNlIHBhdGg9ImNvZGUiIHhzaTp0eXBlPSJQcm9wZXJ0eSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzb3VyY2UgeHNpOnR5cGU9IkluZGV4ZXIiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3BlcmFuZCBwYXRoPSJjb2RpbmciIHhzaTp0eXBlPSJQcm9wZXJ0eSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzb3VyY2UgcGF0aD0iY29kZSIgeHNpOnR5cGU9IlByb3BlcnR5Ij4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNvdXJjZSBuYW1lPSJQb3NpdGl2ZSBPcGlvaWQgRHJ1ZyBTY3JlZW5pbmciIHhzaTp0eXBlPSJFeHByZXNzaW9uUmVmIi8+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc291cmNlPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L29wZXJhbmQ+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIHZhbHVlVHlwZT0idDpJbnRlZ2VyIiB2YWx1ZT0iMCIgeHNpOnR5cGU9IkxpdGVyYWwiLz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zb3VyY2U+CiAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc291cmNlPgogICAgICAgICAgICAgICAgICAgICAgICA8L29wZXJhbmQ+CiAgICAgICAgICAgICAgICAgICAgIDwvb3BlcmFuZD4KICAgICAgICAgICAgICAgICAgPC9vcGVyYW5kPgogICAgICAgICAgICAgICA8L29wZXJhbmQ+CiAgICAgICAgICAgIDwvdGhlbj4KICAgICAgICAgICAgPGVsc2UgeHNpOnR5cGU9IkFzIj4KICAgICAgICAgICAgICAgPG9wZXJhbmQgeHNpOnR5cGU9Ik51bGwiLz4KICAgICAgICAgICAgICAgPGFzVHlwZVNwZWNpZmllciB4c2k6dHlwZT0iTGlzdFR5cGVTcGVjaWZpZXIiPgogICAgICAgICAgICAgICAgICA8ZWxlbWVudFR5cGUgbmFtZT0idDpTdHJpbmciIHhzaTp0eXBlPSJOYW1lZFR5cGVTcGVjaWZpZXIiLz4KICAgICAgICAgICAgICAgPC9hc1R5cGVTcGVjaWZpZXI+CiAgICAgICAgICAgIDwvZWxzZT4KICAgICAgICAgPC9leHByZXNzaW9uPgogICAgICA8L2RlZj4KICAgICAgPGRlZiBuYW1lPSJIYXMgTWlzc2luZyBPcGlvaWRzPyIgY29udGV4dD0iUGF0aWVudCIgYWNjZXNzTGV2ZWw9IlB1YmxpYyI+CiAgICAgICAgIDxleHByZXNzaW9uIHhzaTp0eXBlPSJFeGlzdHMiPgogICAgICAgICAgICA8b3BlcmFuZCBuYW1lPSJNaXNzaW5nIE9waW9pZHMiIHhzaTp0eXBlPSJFeHByZXNzaW9uUmVmIi8+CiAgICAgICAgIDwvZXhwcmVzc2lvbj4KICAgICAgPC9kZWY+CiAgICAgIDxkZWYgbmFtZT0iR2V0IE9waW9pZHMgRnJvbSBNb3N0IFJlY2VudCBTY3JlZW5pbmciIGNvbnRleHQ9IlBhdGllbnQiIGFjY2Vzc0xldmVsPSJQdWJsaWMiPgogICAgICAgICA8ZXhwcmVzc2lvbiB4c2k6dHlwZT0iUXVlcnkiPgogICAgICAgICAgICA8c291cmNlIGFsaWFzPSJtb3N0UmVjZW50U2NyZWVuaW5nIj4KICAgICAgICAgICAgICAgPGV4cHJlc3Npb24gbmFtZT0iUG9zaXRpdmUgT3Bpb2lkIERydWcgU2NyZWVuaW5nIiB4c2k6dHlwZT0iRXhwcmVzc2lvblJlZiIvPgogICAgICAgICAgICA8L3NvdXJjZT4KICAgICAgICAgICAgPHJldHVybj4KICAgICAgICAgICAgICAgPGV4cHJlc3Npb24geHNpOnR5cGU9IlVuaW9uIj4KICAgICAgICAgICAgICAgICAgPG9wZXJhbmQgeHNpOnR5cGU9IlRvTGlzdCI+CiAgICAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIHhzaTp0eXBlPSJMb3dlciI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIG5hbWU9IkdldE9waW9pZCIgeHNpOnR5cGU9IkZ1bmN0aW9uUmVmIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wZXJhbmQgcGF0aD0idmFsdWUiIHhzaTp0eXBlPSJQcm9wZXJ0eSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzb3VyY2UgcGF0aD0iY29kZSIgeHNpOnR5cGU9IlByb3BlcnR5Ij4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNvdXJjZSB4c2k6dHlwZT0iSW5kZXhlciI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIHBhdGg9ImNvZGluZyIgeHNpOnR5cGU9IlByb3BlcnR5Ij4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNvdXJjZSBwYXRoPSJjb2RlIiBzY29wZT0ibW9zdFJlY2VudFNjcmVlbmluZyIgeHNpOnR5cGU9IlByb3BlcnR5Ii8+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvb3BlcmFuZD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wZXJhbmQgdmFsdWVUeXBlPSJ0OkludGVnZXIiIHZhbHVlPSIwIiB4c2k6dHlwZT0iTGl0ZXJhbCIvPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NvdXJjZT4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zb3VyY2U+CiAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvb3BlcmFuZD4KICAgICAgICAgICAgICAgICAgICAgICAgPC9vcGVyYW5kPgogICAgICAgICAgICAgICAgICAgICA8L29wZXJhbmQ+CiAgICAgICAgICAgICAgICAgIDwvb3BlcmFuZD4KICAgICAgICAgICAgICAgICAgPG9wZXJhbmQgeHNpOnR5cGU9IlRvTGlzdCI+CiAgICAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIHhzaTp0eXBlPSJJZiI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxjb25kaXRpb24gYXNUeXBlPSJ0OkJvb2xlYW4iIHhzaTp0eXBlPSJBcyI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIHhzaTp0eXBlPSJOb3QiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3BlcmFuZCB4c2k6dHlwZT0iSXNOdWxsIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wZXJhbmQgeHNpOnR5cGU9IkluZGV4ZXIiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3BlcmFuZCBwYXRoPSJjb21wb25lbnQiIHNjb3BlPSJtb3N0UmVjZW50U2NyZWVuaW5nIiB4c2k6dHlwZT0iUHJvcGVydHkiLz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wZXJhbmQgdmFsdWVUeXBlPSJ0OkludGVnZXIiIHZhbHVlPSIwIiB4c2k6dHlwZT0iTGl0ZXJhbCIvPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L29wZXJhbmQ+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvb3BlcmFuZD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9vcGVyYW5kPgogICAgICAgICAgICAgICAgICAgICAgICA8L2NvbmRpdGlvbj4KICAgICAgICAgICAgICAgICAgICAgICAgPHRoZW4geHNpOnR5cGU9Ikxvd2VyIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wZXJhbmQgbmFtZT0iR2V0T3Bpb2lkIiB4c2k6dHlwZT0iRnVuY3Rpb25SZWYiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3BlcmFuZCBwYXRoPSJ2YWx1ZSIgeHNpOnR5cGU9IlByb3BlcnR5Ij4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNvdXJjZSBwYXRoPSJjb2RlIiB4c2k6dHlwZT0iUHJvcGVydHkiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c291cmNlIHhzaTp0eXBlPSJJbmRleGVyIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wZXJhbmQgcGF0aD0iY29kaW5nIiB4c2k6dHlwZT0iUHJvcGVydHkiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c291cmNlIHBhdGg9ImNvZGUiIHhzaTp0eXBlPSJQcm9wZXJ0eSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzb3VyY2UgeHNpOnR5cGU9IkluZGV4ZXIiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3BlcmFuZCBwYXRoPSJjb21wb25lbnQiIHNjb3BlPSJtb3N0UmVjZW50U2NyZWVuaW5nIiB4c2k6dHlwZT0iUHJvcGVydHkiLz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wZXJhbmQgdmFsdWVUeXBlPSJ0OkludGVnZXIiIHZhbHVlPSIwIiB4c2k6dHlwZT0iTGl0ZXJhbCIvPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NvdXJjZT4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zb3VyY2U+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvb3BlcmFuZD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wZXJhbmQgdmFsdWVUeXBlPSJ0OkludGVnZXIiIHZhbHVlPSIwIiB4c2k6dHlwZT0iTGl0ZXJhbCIvPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NvdXJjZT4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zb3VyY2U+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvb3BlcmFuZD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9vcGVyYW5kPgogICAgICAgICAgICAgICAgICAgICAgICA8L3RoZW4+CiAgICAgICAgICAgICAgICAgICAgICAgIDxlbHNlIGFzVHlwZT0idDpTdHJpbmciIHhzaTp0eXBlPSJBcyI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIHhzaTp0eXBlPSJTaW5nbGV0b25Gcm9tIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wZXJhbmQgeHNpOnR5cGU9Ikxpc3QiLz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9vcGVyYW5kPgogICAgICAgICAgICAgICAgICAgICAgICA8L2Vsc2U+CiAgICAgICAgICAgICAgICAgICAgIDwvb3BlcmFuZD4KICAgICAgICAgICAgICAgICAgPC9vcGVyYW5kPgogICAgICAgICAgICAgICA8L2V4cHJlc3Npb24+CiAgICAgICAgICAgIDwvcmV0dXJuPgogICAgICAgICA8L2V4cHJlc3Npb24+CiAgICAgIDwvZGVmPgogICAgICA8ZGVmIG5hbWU9IlVucHJlc2NyaWJlZCBPcGlvaWRzIiBjb250ZXh0PSJQYXRpZW50IiBhY2Nlc3NMZXZlbD0iUHVibGljIj4KICAgICAgICAgPGV4cHJlc3Npb24geHNpOnR5cGU9IlF1ZXJ5Ij4KICAgICAgICAgICAgPHNvdXJjZSBhbGlhcz0ibW9zdFJlY2VudFNjcmVlbmluZ09waW9pZHMiPgogICAgICAgICAgICAgICA8ZXhwcmVzc2lvbiBuYW1lPSJHZXQgT3Bpb2lkcyBGcm9tIE1vc3QgUmVjZW50IFNjcmVlbmluZyIgeHNpOnR5cGU9IkV4cHJlc3Npb25SZWYiLz4KICAgICAgICAgICAgPC9zb3VyY2U+CiAgICAgICAgICAgIDxyZWxhdGlvbnNoaXAgYWxpYXM9ImluZ3JlZGllbnRzIiB4c2k6dHlwZT0iV2l0aCI+CiAgICAgICAgICAgICAgIDxleHByZXNzaW9uIG5hbWU9IlByZXNjcmliZWQgT3Bpb2lkcyIgeHNpOnR5cGU9IkV4cHJlc3Npb25SZWYiLz4KICAgICAgICAgICAgICAgPHN1Y2hUaGF0IHhzaTp0eXBlPSJOb3QiPgogICAgICAgICAgICAgICAgICA8b3BlcmFuZCB4c2k6dHlwZT0iSW4iPgogICAgICAgICAgICAgICAgICAgICA8b3BlcmFuZCBuYW1lPSJtb3N0UmVjZW50U2NyZWVuaW5nT3Bpb2lkcyIgeHNpOnR5cGU9IkFsaWFzUmVmIi8+CiAgICAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIHhzaTp0eXBlPSJUb0xpc3QiPgogICAgICAgICAgICAgICAgICAgICAgICA8b3BlcmFuZCBuYW1lPSJpbmdyZWRpZW50cyIgeHNpOnR5cGU9IkFsaWFzUmVmIi8+CiAgICAgICAgICAgICAgICAgICAgIDwvb3BlcmFuZD4KICAgICAgICAgICAgICAgICAgPC9vcGVyYW5kPgogICAgICAgICAgICAgICA8L3N1Y2hUaGF0PgogICAgICAgICAgICA8L3JlbGF0aW9uc2hpcD4KICAgICAgICAgICAgPHJldHVybj4KICAgICAgICAgICAgICAgPGV4cHJlc3Npb24gbmFtZT0ibW9zdFJlY2VudFNjcmVlbmluZ09waW9pZHMiIHhzaTp0eXBlPSJBbGlhc1JlZiIvPgogICAgICAgICAgICA8L3JldHVybj4KICAgICAgICAgPC9leHByZXNzaW9uPgogICAgICA8L2RlZj4KICAgICAgPGRlZiBuYW1lPSJIYXMgVW5wcmVzY3JpYmVkIE9waW9pZHM/IiBjb250ZXh0PSJQYXRpZW50IiBhY2Nlc3NMZXZlbD0iUHVibGljIj4KICAgICAgICAgPGV4cHJlc3Npb24geHNpOnR5cGU9IkV4aXN0cyI+CiAgICAgICAgICAgIDxvcGVyYW5kIG5hbWU9IlVucHJlc2NyaWJlZCBPcGlvaWRzIiB4c2k6dHlwZT0iRXhwcmVzc2lvblJlZiIvPgogICAgICAgICA8L2V4cHJlc3Npb24+CiAgICAgIDwvZGVmPgogICAgICA8ZGVmIG5hbWU9IlBvc2l0aXZlIElsbGljaXQgRHJ1ZyBTY3JlZW5pbmciIGNvbnRleHQ9IlBhdGllbnQiIGFjY2Vzc0xldmVsPSJQdWJsaWMiPgogICAgICAgICA8ZXhwcmVzc2lvbiB4c2k6dHlwZT0iUXVlcnkiPgogICAgICAgICAgICA8c291cmNlIGFsaWFzPSJtb3N0UmVjZW50U2NyZWVuaW5nIj4KICAgICAgICAgICAgICAgPGV4cHJlc3Npb24gbmFtZT0iTW9zdCBSZWNlbnQgSWxsaWNpdCBEcnVnIFVyaW5lIFNjcmVlbmluZ3MgaW4gTGFzdCAxMiBNb250aHMiIHhzaTp0eXBlPSJFeHByZXNzaW9uUmVmIi8+CiAgICAgICAgICAgIDwvc291cmNlPgogICAgICAgICAgICA8d2hlcmUgeHNpOnR5cGU9Ik9yIj4KICAgICAgICAgICAgICAgPG9wZXJhbmQgeHNpOnR5cGU9IkVxdWFsIj4KICAgICAgICAgICAgICAgICAgPG9wZXJhbmQgcGF0aD0idmFsdWUiIHhzaTp0eXBlPSJQcm9wZXJ0eSI+CiAgICAgICAgICAgICAgICAgICAgIDxzb3VyY2UgcGF0aD0iY29kZSIgeHNpOnR5cGU9IlByb3BlcnR5Ij4KICAgICAgICAgICAgICAgICAgICAgICAgPHNvdXJjZSB4c2k6dHlwZT0iSW5kZXhlciI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIHBhdGg9ImNvZGluZyIgeHNpOnR5cGU9IlByb3BlcnR5Ij4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNvdXJjZSBwYXRoPSJpbnRlcnByZXRhdGlvbiIgc2NvcGU9Im1vc3RSZWNlbnRTY3JlZW5pbmciIHhzaTp0eXBlPSJQcm9wZXJ0eSIvPgogICAgICAgICAgICAgICAgICAgICAgICAgICA8L29wZXJhbmQ+CiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIHZhbHVlVHlwZT0idDpJbnRlZ2VyIiB2YWx1ZT0iMCIgeHNpOnR5cGU9IkxpdGVyYWwiLz4KICAgICAgICAgICAgICAgICAgICAgICAgPC9zb3VyY2U+CiAgICAgICAgICAgICAgICAgICAgIDwvc291cmNlPgogICAgICAgICAgICAgICAgICA8L29wZXJhbmQ+CiAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIHZhbHVlVHlwZT0idDpTdHJpbmciIHZhbHVlPSJQT1MiIHhzaTp0eXBlPSJMaXRlcmFsIi8+CiAgICAgICAgICAgICAgIDwvb3BlcmFuZD4KICAgICAgICAgICAgICAgPG9wZXJhbmQgeHNpOnR5cGU9IklmIj4KICAgICAgICAgICAgICAgICAgPGNvbmRpdGlvbiBhc1R5cGU9InQ6Qm9vbGVhbiIgeHNpOnR5cGU9IkFzIj4KICAgICAgICAgICAgICAgICAgICAgPG9wZXJhbmQgeHNpOnR5cGU9Ik5vdCI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIHhzaTp0eXBlPSJJc051bGwiPgogICAgICAgICAgICAgICAgICAgICAgICAgICA8b3BlcmFuZCB4c2k6dHlwZT0iSW5kZXhlciI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIHBhdGg9ImNvbXBvbmVudCIgc2NvcGU9Im1vc3RSZWNlbnRTY3JlZW5pbmciIHhzaTp0eXBlPSJQcm9wZXJ0eSIvPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3BlcmFuZCB2YWx1ZVR5cGU9InQ6SW50ZWdlciIgdmFsdWU9IjAiIHhzaTp0eXBlPSJMaXRlcmFsIi8+CiAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvb3BlcmFuZD4KICAgICAgICAgICAgICAgICAgICAgICAgPC9vcGVyYW5kPgogICAgICAgICAgICAgICAgICAgICA8L29wZXJhbmQ+CiAgICAgICAgICAgICAgICAgIDwvY29uZGl0aW9uPgogICAgICAgICAgICAgICAgICA8dGhlbiB4c2k6dHlwZT0iRXF1YWwiPgogICAgICAgICAgICAgICAgICAgICA8b3BlcmFuZCBwYXRoPSJ2YWx1ZSIgeHNpOnR5cGU9IlByb3BlcnR5Ij4KICAgICAgICAgICAgICAgICAgICAgICAgPHNvdXJjZSBwYXRoPSJjb2RlIiB4c2k6dHlwZT0iUHJvcGVydHkiPgogICAgICAgICAgICAgICAgICAgICAgICAgICA8c291cmNlIHhzaTp0eXBlPSJJbmRleGVyIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wZXJhbmQgcGF0aD0iY29kaW5nIiB4c2k6dHlwZT0iUHJvcGVydHkiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c291cmNlIHBhdGg9ImludGVycHJldGF0aW9uIiB4c2k6dHlwZT0iUHJvcGVydHkiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c291cmNlIHhzaTp0eXBlPSJJbmRleGVyIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wZXJhbmQgcGF0aD0iY29tcG9uZW50IiBzY29wZT0ibW9zdFJlY2VudFNjcmVlbmluZyIgeHNpOnR5cGU9IlByb3BlcnR5Ii8+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIHZhbHVlVHlwZT0idDpJbnRlZ2VyIiB2YWx1ZT0iMCIgeHNpOnR5cGU9IkxpdGVyYWwiLz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zb3VyY2U+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc291cmNlPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L29wZXJhbmQ+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIHZhbHVlVHlwZT0idDpJbnRlZ2VyIiB2YWx1ZT0iMCIgeHNpOnR5cGU9IkxpdGVyYWwiLz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zb3VyY2U+CiAgICAgICAgICAgICAgICAgICAgICAgIDwvc291cmNlPgogICAgICAgICAgICAgICAgICAgICA8L29wZXJhbmQ+CiAgICAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIHZhbHVlVHlwZT0idDpTdHJpbmciIHZhbHVlPSJQT1MiIHhzaTp0eXBlPSJMaXRlcmFsIi8+CiAgICAgICAgICAgICAgICAgIDwvdGhlbj4KICAgICAgICAgICAgICAgICAgPGVsc2UgdmFsdWVUeXBlPSJ0OkJvb2xlYW4iIHZhbHVlPSJmYWxzZSIgeHNpOnR5cGU9IkxpdGVyYWwiLz4KICAgICAgICAgICAgICAgPC9vcGVyYW5kPgogICAgICAgICAgICA8L3doZXJlPgogICAgICAgICA8L2V4cHJlc3Npb24+CiAgICAgIDwvZGVmPgogICAgICA8ZGVmIG5hbWU9IkhhcyBJbGxpY2l0IERydWdzIGluIFNjcmVlbmluZz8iIGNvbnRleHQ9IlBhdGllbnQiIGFjY2Vzc0xldmVsPSJQdWJsaWMiPgogICAgICAgICA8ZXhwcmVzc2lvbiB4c2k6dHlwZT0iRXhpc3RzIj4KICAgICAgICAgICAgPG9wZXJhbmQgeHNpOnR5cGU9IlRvTGlzdCI+CiAgICAgICAgICAgICAgIDxvcGVyYW5kIG5hbWU9IlBvc2l0aXZlIElsbGljaXQgRHJ1ZyBTY3JlZW5pbmciIHhzaTp0eXBlPSJFeHByZXNzaW9uUmVmIi8+CiAgICAgICAgICAgIDwvb3BlcmFuZD4KICAgICAgICAgPC9leHByZXNzaW9uPgogICAgICA8L2RlZj4KICAgICAgPGRlZiBuYW1lPSJJbmNsdXNpb24gQ3JpdGVyaWEiIGNvbnRleHQ9IlBhdGllbnQiIGFjY2Vzc0xldmVsPSJQdWJsaWMiPgogICAgICAgICA8ZXhwcmVzc2lvbiB4c2k6dHlwZT0iQW5kIj4KICAgICAgICAgICAgPG9wZXJhbmQgeHNpOnR5cGU9IkFuZCI+CiAgICAgICAgICAgICAgIDxvcGVyYW5kIHhzaTp0eXBlPSJBbmQiPgogICAgICAgICAgICAgICAgICA8b3BlcmFuZCBuYW1lPSJWYWxpZGF0ZSBUcmlnZ2VyIEV2ZW50IiB4c2k6dHlwZT0iRXhwcmVzc2lvblJlZiIvPgogICAgICAgICAgICAgICAgICA8b3BlcmFuZCB4c2k6dHlwZT0iTm90Ij4KICAgICAgICAgICAgICAgICAgICAgPG9wZXJhbmQgbmFtZT0iRXhjbHVzaW9uIENyaXRlcmlhIiB4c2k6dHlwZT0iRXhwcmVzc2lvblJlZiIvPgogICAgICAgICAgICAgICAgICA8L29wZXJhbmQ+CiAgICAgICAgICAgICAgIDwvb3BlcmFuZD4KICAgICAgICAgICAgICAgPG9wZXJhbmQgeHNpOnR5cGU9IkFueVRydWUiPgogICAgICAgICAgICAgICAgICA8c291cmNlIG5hbWU9IlByb2JhYmxlRGF5c0luUmFuZ2UiIGxpYnJhcnlOYW1lPSJDb21tb24iIHhzaTp0eXBlPSJGdW5jdGlvblJlZiI+CiAgICAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIG5hbWU9IkdldCBBY3RpdmUgQW1idWxhdG9yeSBPcGlvaWQgUngiIHhzaTp0eXBlPSJFeHByZXNzaW9uUmVmIi8+CiAgICAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIHZhbHVlVHlwZT0idDpJbnRlZ2VyIiB2YWx1ZT0iOTAiIHhzaTp0eXBlPSJMaXRlcmFsIi8+CiAgICAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIHZhbHVlVHlwZT0idDpJbnRlZ2VyIiB2YWx1ZT0iODAiIHhzaTp0eXBlPSJMaXRlcmFsIi8+CiAgICAgICAgICAgICAgICAgIDwvc291cmNlPgogICAgICAgICAgICAgICA8L29wZXJhbmQ+CiAgICAgICAgICAgIDwvb3BlcmFuZD4KICAgICAgICAgICAgPG9wZXJhbmQgeHNpOnR5cGU9Ik9yIj4KICAgICAgICAgICAgICAgPG9wZXJhbmQgeHNpOnR5cGU9Ik9yIj4KICAgICAgICAgICAgICAgICAgPG9wZXJhbmQgeHNpOnR5cGU9Ik9yIj4KICAgICAgICAgICAgICAgICAgICAgPG9wZXJhbmQgbmFtZT0iTm8gVXJpbmUgU2NyZWVuaW5nIEluIExhc3QgMTIgTW9udGhzIiB4c2k6dHlwZT0iRXhwcmVzc2lvblJlZiIvPgogICAgICAgICAgICAgICAgICAgICA8b3BlcmFuZCBuYW1lPSJIYXMgTWlzc2luZyBPcGlvaWRzPyIgeHNpOnR5cGU9IkV4cHJlc3Npb25SZWYiLz4KICAgICAgICAgICAgICAgICAgPC9vcGVyYW5kPgogICAgICAgICAgICAgICAgICA8b3BlcmFuZCBuYW1lPSJIYXMgVW5wcmVzY3JpYmVkIE9waW9pZHM/IiB4c2k6dHlwZT0iRXhwcmVzc2lvblJlZiIvPgogICAgICAgICAgICAgICA8L29wZXJhbmQ+CiAgICAgICAgICAgICAgIDxvcGVyYW5kIG5hbWU9IkhhcyBJbGxpY2l0IERydWdzIGluIFNjcmVlbmluZz8iIHhzaTp0eXBlPSJFeHByZXNzaW9uUmVmIi8+CiAgICAgICAgICAgIDwvb3BlcmFuZD4KICAgICAgICAgPC9leHByZXNzaW9uPgogICAgICA8L2RlZj4KICAgICAgPGRlZiBuYW1lPSJHZXRJbGxpY2l0RHJ1ZyIgY29udGV4dD0iUGF0aWVudCIgYWNjZXNzTGV2ZWw9IlB1YmxpYyIgeHNpOnR5cGU9IkZ1bmN0aW9uRGVmIj4KICAgICAgICAgPGV4cHJlc3Npb24geHNpOnR5cGU9IkNhc2UiPgogICAgICAgICAgICA8Y29tcGFyYW5kIG5hbWU9InZhbHVlIiB4c2k6dHlwZT0iT3BlcmFuZFJlZiIvPgogICAgICAgICAgICA8Y2FzZUl0ZW0+CiAgICAgICAgICAgICAgIDx3aGVuIHZhbHVlVHlwZT0idDpTdHJpbmciIHZhbHVlPSIzMzk3LTciIHhzaTp0eXBlPSJMaXRlcmFsIi8+CiAgICAgICAgICAgICAgIDx0aGVuIHZhbHVlVHlwZT0idDpTdHJpbmciIHZhbHVlPSJDb2NhaW5lIiB4c2k6dHlwZT0iTGl0ZXJhbCIvPgogICAgICAgICAgICA8L2Nhc2VJdGVtPgogICAgICAgICAgICA8Y2FzZUl0ZW0+CiAgICAgICAgICAgICAgIDx3aGVuIHZhbHVlVHlwZT0idDpTdHJpbmciIHZhbHVlPSIxNDI2Ny05IiB4c2k6dHlwZT0iTGl0ZXJhbCIvPgogICAgICAgICAgICAgICA8dGhlbiB2YWx1ZVR5cGU9InQ6U3RyaW5nIiB2YWx1ZT0iTWV0aHlsZW5lZGlveHltZXRoYW1waGV0YW1pbmUgKE1ETUEpIiB4c2k6dHlwZT0iTGl0ZXJhbCIvPgogICAgICAgICAgICA8L2Nhc2VJdGVtPgogICAgICAgICAgICA8Y2FzZUl0ZW0+CiAgICAgICAgICAgICAgIDx3aGVuIHZhbHVlVHlwZT0idDpTdHJpbmciIHZhbHVlPSIyOTg2OC03IiB4c2k6dHlwZT0iTGl0ZXJhbCIvPgogICAgICAgICAgICAgICA8dGhlbiB2YWx1ZVR5cGU9InQ6U3RyaW5nIiB2YWx1ZT0iR2FtbWEgSHlkcm94eWJ1dHlyaWMgQWNpZCAoR0hCKSIgeHNpOnR5cGU9IkxpdGVyYWwiLz4KICAgICAgICAgICAgPC9jYXNlSXRlbT4KICAgICAgICAgICAgPGNhc2VJdGVtPgogICAgICAgICAgICAgICA8d2hlbiB2YWx1ZVR5cGU9InQ6U3RyaW5nIiB2YWx1ZT0iMTIzMjctMyIgeHNpOnR5cGU9IkxpdGVyYWwiLz4KICAgICAgICAgICAgICAgPHRoZW4gdmFsdWVUeXBlPSJ0OlN0cmluZyIgdmFsdWU9IktldGFtaW5lIiB4c2k6dHlwZT0iTGl0ZXJhbCIvPgogICAgICAgICAgICA8L2Nhc2VJdGVtPgogICAgICAgICAgICA8Y2FzZUl0ZW0+CiAgICAgICAgICAgICAgIDx3aGVuIHZhbHVlVHlwZT0idDpTdHJpbmciIHZhbHVlPSIzNzMyLTUiIHhzaTp0eXBlPSJMaXRlcmFsIi8+CiAgICAgICAgICAgICAgIDx0aGVuIHZhbHVlVHlwZT0idDpTdHJpbmciIHZhbHVlPSJMeXNlcmdpYyBBY2lkIERpZXRoeWxhbWlkZSAoTFNEKSIgeHNpOnR5cGU9IkxpdGVyYWwiLz4KICAgICAgICAgICAgPC9jYXNlSXRlbT4KICAgICAgICAgICAgPGNhc2VJdGVtPgogICAgICAgICAgICAgICA8d2hlbiB2YWx1ZVR5cGU9InQ6U3RyaW5nIiB2YWx1ZT0iMzc3OS02IiB4c2k6dHlwZT0iTGl0ZXJhbCIvPgogICAgICAgICAgICAgICA8dGhlbiB2YWx1ZVR5cGU9InQ6U3RyaW5nIiB2YWx1ZT0iTWV0aGFtcGhldGFtaW5lIiB4c2k6dHlwZT0iTGl0ZXJhbCIvPgogICAgICAgICAgICA8L2Nhc2VJdGVtPgogICAgICAgICAgICA8Y2FzZUl0ZW0+CiAgICAgICAgICAgICAgIDx3aGVuIHZhbHVlVHlwZT0idDpTdHJpbmciIHZhbHVlPSIxNzUwNC0yIiB4c2k6dHlwZT0iTGl0ZXJhbCIvPgogICAgICAgICAgICAgICA8dGhlbiB2YWx1ZVR5cGU9InQ6U3RyaW5nIiB2YWx1ZT0iUHNpbG9jeWJpbiIgeHNpOnR5cGU9IkxpdGVyYWwiLz4KICAgICAgICAgICAgPC9jYXNlSXRlbT4KICAgICAgICAgICAgPGNhc2VJdGVtPgogICAgICAgICAgICAgICA8d2hlbiB2YWx1ZVR5cGU9InQ6U3RyaW5nIiB2YWx1ZT0iNDEwMjAtOSIgeHNpOnR5cGU9IkxpdGVyYWwiLz4KICAgICAgICAgICAgICAgPHRoZW4gdmFsdWVUeXBlPSJ0OlN0cmluZyIgdmFsdWU9IkZsdW5pdHJhemVwYW0gKFJvaHlwbm9sKSIgeHNpOnR5cGU9IkxpdGVyYWwiLz4KICAgICAgICAgICAgPC9jYXNlSXRlbT4KICAgICAgICAgICAgPGNhc2VJdGVtPgogICAgICAgICAgICAgICA8d2hlbiB2YWx1ZVR5cGU9InQ6U3RyaW5nIiB2YWx1ZT0iMzQyNi00IiB4c2k6dHlwZT0iTGl0ZXJhbCIvPgogICAgICAgICAgICAgICA8dGhlbiB2YWx1ZVR5cGU9InQ6U3RyaW5nIiB2YWx1ZT0iVGV0cmFoeWRyb2Nhbm5hYmlub2wgKFRIQykiIHhzaTp0eXBlPSJMaXRlcmFsIi8+CiAgICAgICAgICAgIDwvY2FzZUl0ZW0+CiAgICAgICAgICAgIDxlbHNlIHhzaTp0eXBlPSJDb25jYXRlbmF0ZSI+CiAgICAgICAgICAgICAgIDxvcGVyYW5kIHZhbHVlVHlwZT0idDpTdHJpbmciIHZhbHVlPSJVbmtub3duIGNvZGU6ICIgeHNpOnR5cGU9IkxpdGVyYWwiLz4KICAgICAgICAgICAgICAgPG9wZXJhbmQgbmFtZT0idmFsdWUiIHhzaTp0eXBlPSJPcGVyYW5kUmVmIi8+CiAgICAgICAgICAgIDwvZWxzZT4KICAgICAgICAgPC9leHByZXNzaW9uPgogICAgICAgICA8b3BlcmFuZCBuYW1lPSJ2YWx1ZSI+CiAgICAgICAgICAgIDxvcGVyYW5kVHlwZVNwZWNpZmllciBuYW1lPSJ0OlN0cmluZyIgeHNpOnR5cGU9Ik5hbWVkVHlwZVNwZWNpZmllciIvPgogICAgICAgICA8L29wZXJhbmQ+CiAgICAgIDwvZGVmPgogICAgICA8ZGVmIG5hbWU9IkluY29uc2lzdGVudCBJbGxpY2l0IERydWdzIiBjb250ZXh0PSJQYXRpZW50IiBhY2Nlc3NMZXZlbD0iUHVibGljIj4KICAgICAgICAgPGV4cHJlc3Npb24geHNpOnR5cGU9IkNvbmNhdGVuYXRlIj4KICAgICAgICAgICAgPG9wZXJhbmQgdmFsdWVUeXBlPSJ0OlN0cmluZyIgdmFsdWU9IkZvdW5kIHRoZSBmb2xsb3dpbmcgaWxsaWNpdCBkcnVnKHMpIGluIHVyaW5lIGRydWcgc2NyZWVuOiAiIHhzaTp0eXBlPSJMaXRlcmFsIi8+CiAgICAgICAgICAgIDxvcGVyYW5kIHhzaTp0eXBlPSJJZiI+CiAgICAgICAgICAgICAgIDxjb25kaXRpb24gYXNUeXBlPSJ0OkJvb2xlYW4iIHhzaTp0eXBlPSJBcyI+CiAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIHhzaTp0eXBlPSJJc051bGwiPgogICAgICAgICAgICAgICAgICAgICA8b3BlcmFuZCBuYW1lPSJHZXRJbGxpY2l0RHJ1ZyIgeHNpOnR5cGU9IkZ1bmN0aW9uUmVmIj4KICAgICAgICAgICAgICAgICAgICAgICAgPG9wZXJhbmQgcGF0aD0idmFsdWUiIHhzaTp0eXBlPSJQcm9wZXJ0eSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzb3VyY2UgcGF0aD0iY29kZSIgeHNpOnR5cGU9IlByb3BlcnR5Ij4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNvdXJjZSB4c2k6dHlwZT0iSW5kZXhlciI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIHBhdGg9ImNvZGluZyIgeHNpOnR5cGU9IlByb3BlcnR5Ij4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNvdXJjZSBwYXRoPSJjb2RlIiB4c2k6dHlwZT0iUHJvcGVydHkiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c291cmNlIG5hbWU9IlBvc2l0aXZlIElsbGljaXQgRHJ1ZyBTY3JlZW5pbmciIHhzaTp0eXBlPSJFeHByZXNzaW9uUmVmIi8+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc291cmNlPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L29wZXJhbmQ+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIHZhbHVlVHlwZT0idDpJbnRlZ2VyIiB2YWx1ZT0iMCIgeHNpOnR5cGU9IkxpdGVyYWwiLz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zb3VyY2U+CiAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc291cmNlPgogICAgICAgICAgICAgICAgICAgICAgICA8L29wZXJhbmQ+CiAgICAgICAgICAgICAgICAgICAgIDwvb3BlcmFuZD4KICAgICAgICAgICAgICAgICAgPC9vcGVyYW5kPgogICAgICAgICAgICAgICA8L2NvbmRpdGlvbj4KICAgICAgICAgICAgICAgPHRoZW4gbmFtZT0iR2V0SWxsaWNpdERydWciIHhzaTp0eXBlPSJGdW5jdGlvblJlZiI+CiAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIHBhdGg9InZhbHVlIiB4c2k6dHlwZT0iUHJvcGVydHkiPgogICAgICAgICAgICAgICAgICAgICA8c291cmNlIHBhdGg9ImNvZGUiIHhzaTp0eXBlPSJQcm9wZXJ0eSI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxzb3VyY2UgeHNpOnR5cGU9IkluZGV4ZXIiPgogICAgICAgICAgICAgICAgICAgICAgICAgICA8b3BlcmFuZCBwYXRoPSJjb2RpbmciIHhzaTp0eXBlPSJQcm9wZXJ0eSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzb3VyY2UgcGF0aD0iaW50ZXJwcmV0YXRpb24iIHhzaTp0eXBlPSJQcm9wZXJ0eSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzb3VyY2UgbmFtZT0iUG9zaXRpdmUgSWxsaWNpdCBEcnVnIFNjcmVlbmluZyIgeHNpOnR5cGU9IkV4cHJlc3Npb25SZWYiLz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zb3VyY2U+CiAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvb3BlcmFuZD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wZXJhbmQgdmFsdWVUeXBlPSJ0OkludGVnZXIiIHZhbHVlPSIwIiB4c2k6dHlwZT0iTGl0ZXJhbCIvPgogICAgICAgICAgICAgICAgICAgICAgICA8L3NvdXJjZT4KICAgICAgICAgICAgICAgICAgICAgPC9zb3VyY2U+CiAgICAgICAgICAgICAgICAgIDwvb3BlcmFuZD4KICAgICAgICAgICAgICAgPC90aGVuPgogICAgICAgICAgICAgICA8ZWxzZSBuYW1lPSJHZXRJbGxpY2l0RHJ1ZyIgeHNpOnR5cGU9IkZ1bmN0aW9uUmVmIj4KICAgICAgICAgICAgICAgICAgPG9wZXJhbmQgcGF0aD0idmFsdWUiIHhzaTp0eXBlPSJQcm9wZXJ0eSI+CiAgICAgICAgICAgICAgICAgICAgIDxzb3VyY2UgcGF0aD0iY29kZSIgeHNpOnR5cGU9IlByb3BlcnR5Ij4KICAgICAgICAgICAgICAgICAgICAgICAgPHNvdXJjZSB4c2k6dHlwZT0iSW5kZXhlciI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIHBhdGg9ImNvZGluZyIgeHNpOnR5cGU9IlByb3BlcnR5Ij4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNvdXJjZSBwYXRoPSJjb2RlIiB4c2k6dHlwZT0iUHJvcGVydHkiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c291cmNlIG5hbWU9IlBvc2l0aXZlIElsbGljaXQgRHJ1ZyBTY3JlZW5pbmciIHhzaTp0eXBlPSJFeHByZXNzaW9uUmVmIi8+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc291cmNlPgogICAgICAgICAgICAgICAgICAgICAgICAgICA8L29wZXJhbmQ+CiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIHZhbHVlVHlwZT0idDpJbnRlZ2VyIiB2YWx1ZT0iMCIgeHNpOnR5cGU9IkxpdGVyYWwiLz4KICAgICAgICAgICAgICAgICAgICAgICAgPC9zb3VyY2U+CiAgICAgICAgICAgICAgICAgICAgIDwvc291cmNlPgogICAgICAgICAgICAgICAgICA8L29wZXJhbmQ+CiAgICAgICAgICAgICAgIDwvZWxzZT4KICAgICAgICAgICAgPC9vcGVyYW5kPgogICAgICAgICA8L2V4cHJlc3Npb24+CiAgICAgIDwvZGVmPgogICAgICA8ZGVmIG5hbWU9IkhhcyBPcGlvaWRzIGluIFNjcmVlbmluZz8iIGNvbnRleHQ9IlBhdGllbnQiIGFjY2Vzc0xldmVsPSJQdWJsaWMiPgogICAgICAgICA8ZXhwcmVzc2lvbiB4c2k6dHlwZT0iRXhpc3RzIj4KICAgICAgICAgICAgPG9wZXJhbmQgeHNpOnR5cGU9IlRvTGlzdCI+CiAgICAgICAgICAgICAgIDxvcGVyYW5kIG5hbWU9IlBvc2l0aXZlIE9waW9pZCBEcnVnIFNjcmVlbmluZyIgeHNpOnR5cGU9IkV4cHJlc3Npb25SZWYiLz4KICAgICAgICAgICAgPC9vcGVyYW5kPgogICAgICAgICA8L2V4cHJlc3Npb24+CiAgICAgIDwvZGVmPgogICAgICA8ZGVmIG5hbWU9IkluY29uc2lzdGVudCBVbnByZXNjcmliZWQgT3Bpb2lkcyIgY29udGV4dD0iUGF0aWVudCIgYWNjZXNzTGV2ZWw9IlB1YmxpYyI+CiAgICAgICAgIDxleHByZXNzaW9uIHhzaTp0eXBlPSJDb25jYXRlbmF0ZSI+CiAgICAgICAgICAgIDxvcGVyYW5kIHZhbHVlVHlwZT0idDpTdHJpbmciIHZhbHVlPSJGb3VuZCB0aGUgZm9sbG93aW5nIHVucHJlc2NyaWJlZCBvcGlvaWQocyk6ICIgeHNpOnR5cGU9IkxpdGVyYWwiLz4KICAgICAgICAgICAgPG9wZXJhbmQgeHNpOnR5cGU9IlNpbmdsZXRvbkZyb20iPgogICAgICAgICAgICAgICA8b3BlcmFuZCBuYW1lPSJVbnByZXNjcmliZWQgT3Bpb2lkcyIgeHNpOnR5cGU9IkV4cHJlc3Npb25SZWYiLz4KICAgICAgICAgICAgPC9vcGVyYW5kPgogICAgICAgICA8L2V4cHJlc3Npb24+CiAgICAgIDwvZGVmPgogICAgICA8ZGVmIG5hbWU9IkluY29uc2lzdGVudCBNaXNzaW5nIE9waW9pZHMiIGNvbnRleHQ9IlBhdGllbnQiIGFjY2Vzc0xldmVsPSJQdWJsaWMiPgogICAgICAgICA8ZXhwcmVzc2lvbiB4c2k6dHlwZT0iQ29uY2F0ZW5hdGUiPgogICAgICAgICAgICA8b3BlcmFuZCB2YWx1ZVR5cGU9InQ6U3RyaW5nIiB2YWx1ZT0iVGhlIGZvbGxvd2luZyBvcGlvaWRzIGFyZSBtaXNzaW5nIGZyb20gdGhlIHNjcmVlbmluZzogIiB4c2k6dHlwZT0iTGl0ZXJhbCIvPgogICAgICAgICAgICA8b3BlcmFuZCB4c2k6dHlwZT0iU2luZ2xldG9uRnJvbSI+CiAgICAgICAgICAgICAgIDxvcGVyYW5kIG5hbWU9Ik1pc3NpbmcgT3Bpb2lkcyIgeHNpOnR5cGU9IkV4cHJlc3Npb25SZWYiLz4KICAgICAgICAgICAgPC9vcGVyYW5kPgogICAgICAgICA8L2V4cHJlc3Npb24+CiAgICAgIDwvZGVmPgogICAgICA8ZGVmIG5hbWU9IkdldCBJbmRpY2F0b3IiIGNvbnRleHQ9IlBhdGllbnQiIGFjY2Vzc0xldmVsPSJQdWJsaWMiPgogICAgICAgICA8ZXhwcmVzc2lvbiB2YWx1ZVR5cGU9InQ6U3RyaW5nIiB2YWx1ZT0id2FybmluZyIgeHNpOnR5cGU9IkxpdGVyYWwiLz4KICAgICAgPC9kZWY+CiAgIDwvc3RhdGVtZW50cz4KPC9saWJyYXJ5Pgo=",
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

export const LibraryOpioidcdsRecommendation11: Library = {
  resourceType: "Library",
  id: "opioidcds-recommendation-11",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: opioidcds-recommendation-11</p><p><b>identifier</b>: OpioidCDS_REC_11 (OFFICIAL)</p><p><b>version</b>: 0.1.0</p><p><b>title</b>: Opioid CDS Logic for recommendation #11</p><p><b>status</b>: active</p><p><b>experimental</b>: false</p><p><b>type</b>: Logic Library <span>(Details : {http://terminology.hl7.org/CodeSystem/library-type code 'logic-library' = 'Logic Library', given as 'Logic Library'})</span></p><p><b>date</b>: 25/03/2018 1:49:09 PM</p><p><b>publisher</b>: Centers for Disease Control and Prevention (CDC)</p><p><b>description</b>: Opioid decision support logic to avoid prescribing opioid pain medication and benzodiazepines concurrently whenever possible.</p><p><b>useContext</b>: , </p><p><b>jurisdiction</b>: United States of America <span>(Details : {urn:iso:std:iso:3166 code 'US' = 'United States of America', given as 'United States of America'})</span></p><p><b>purpose</b>: The purpose of this library is to determine whether opioid pain medication and benzodiazepines have been prescribed concurrently.</p><p><b>usage</b>: This library is used to notify the prescriber/user to avoid prescribing opioid pain medication and benzodiazepines concurrently.</p><p><b>copyright</b>: © CDC 2016+.</p><p><b>topic</b>: Opioid Prescribing <span>(Details )</span></p><p><b>author</b>: , , , </p><p><b>relatedArtifact</b>: , </p><p><b>dataRequirement</b>: , </p><p><b>content</b>: </p></div>",
  },
  identifier: [
    {
      use: "official",
      value: "OpioidCDS_REC_11",
    },
  ],
  version: "0.1.0",
  title: "Opioid CDS Logic for recommendation #11",
  status: "active",
  experimental: false,
  type: {
    coding: [
      {
        system: "http://terminology.hl7.org/CodeSystem/library-type",
        code: "logic-library",
        display: "Logic Library",
      },
    ],
  },
  date: "2018-03-25T13:49:09-06:00",
  publisher: "Centers for Disease Control and Prevention (CDC)",
  description:
    "Opioid decision support logic to avoid prescribing opioid pain medication and benzodiazepines concurrently whenever possible.",
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
    "The purpose of this library is to determine whether opioid pain medication and benzodiazepines have been prescribed concurrently.",
  usage:
    "This library is used to notify the prescriber/user to avoid prescribing opioid pain medication and benzodiazepines concurrently.",
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
      type: "depends-on",
      resource: "Library/opioidcds-common",
    },
  ],
  dataRequirement: [
    {
      type: "MedicationRequest",
      codeFilter: [
        {
          path: "medicationCodeableConcept",
          valueSet: "http://example.org/fhir/ValueSet/benzodiazepines",
        },
      ],
    },
    {
      type: "MedicationRequest",
      codeFilter: [
        {
          path: "medicationCodeableConcept",
          valueSet:
            "http://example.org/fhir/ValueSet/opioids-abused-in-ambulatory-care",
        },
      ],
    },
  ],
  content: [
    {
      contentType: "application/elm+xml",
      data: "PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPGxpYnJhcnkgeG1sbnM9InVybjpobDctb3JnOmVsbTpyMSIgeG1sbnM6dD0idXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxIiB4bWxuczp4c2k9Imh0dHA6Ly93d3cudzMub3JnLzIwMDEvWE1MU2NoZW1hLWluc3RhbmNlIiB4bWxuczp4c2Q9Imh0dHA6Ly93d3cudzMub3JnLzIwMDEvWE1MU2NoZW1hIiB4bWxuczpmaGlyPSJodHRwOi8vaGw3Lm9yZy9maGlyIiB4bWxuczpxZG00Mz0idXJuOmhlYWx0aGl0LWdvdjpxZG06djRfMyIgeG1sbnM6cWRtNTM9InVybjpoZWFsdGhpdC1nb3Y6cWRtOnY1XzMiIHhtbG5zOmE9InVybjpobDctb3JnOmNxbC1hbm5vdGF0aW9uczpyMSI+CiAgIDxhbm5vdGF0aW9uIHN0YXJ0TGluZT0iNTQiIHN0YXJ0Q2hhcj0iMTMiIGVuZExpbmU9IjU0IiBlbmRDaGFyPSI1NyIgbWVzc2FnZT0iQ291bGQgbm90IHJlc29sdmUgY29kZSBwYXRoIG1lZGljYXRpb25Db2RlYWJsZUNvbmNlcHQgZm9yIHRoZSB0eXBlIG9mIHRoZSByZXRyaWV2ZSBGSElSLk1lZGljYXRpb25SZXF1ZXN0LiIgZXJyb3JUeXBlPSJzZW1hbnRpYyIgZXJyb3JTZXZlcml0eT0id2FybmluZyIgeHNpOnR5cGU9ImE6Q3FsVG9FbG1FcnJvciIvPgogICA8YW5ub3RhdGlvbiBzdGFydExpbmU9IjU0IiBzdGFydENoYXI9IjEzIiBlbmRMaW5lPSI1NCIgZW5kQ2hhcj0iNTciIG1lc3NhZ2U9IkNvdWxkIG5vdCByZXNvbHZlIG1lbWJlcnNoaXAgb3BlcmF0b3IgZm9yIHRlcm1pbm9sb2d5IHRhcmdldCBvZiB0aGUgcmV0cmlldmUuIiBlcnJvclR5cGU9InNlbWFudGljIiBlcnJvclNldmVyaXR5PSJ3YXJuaW5nIiB4c2k6dHlwZT0iYTpDcWxUb0VsbUVycm9yIi8+CiAgIDxhbm5vdGF0aW9uIHN0YXJ0TGluZT0iNTgiIHN0YXJ0Q2hhcj0iMTQiIGVuZExpbmU9IjU4IiBlbmRDaGFyPSI3NyIgbWVzc2FnZT0iQ291bGQgbm90IHJlc29sdmUgY29kZSBwYXRoIG1lZGljYXRpb25Db2RlYWJsZUNvbmNlcHQgZm9yIHRoZSB0eXBlIG9mIHRoZSByZXRyaWV2ZSBGSElSLk1lZGljYXRpb25SZXF1ZXN0LiIgZXJyb3JUeXBlPSJzZW1hbnRpYyIgZXJyb3JTZXZlcml0eT0id2FybmluZyIgeHNpOnR5cGU9ImE6Q3FsVG9FbG1FcnJvciIvPgogICA8YW5ub3RhdGlvbiBzdGFydExpbmU9IjU4IiBzdGFydENoYXI9IjE0IiBlbmRMaW5lPSI1OCIgZW5kQ2hhcj0iNzciIG1lc3NhZ2U9IkNvdWxkIG5vdCByZXNvbHZlIG1lbWJlcnNoaXAgb3BlcmF0b3IgZm9yIHRlcm1pbm9sb2d5IHRhcmdldCBvZiB0aGUgcmV0cmlldmUuIiBlcnJvclR5cGU9InNlbWFudGljIiBlcnJvclNldmVyaXR5PSJ3YXJuaW5nIiB4c2k6dHlwZT0iYTpDcWxUb0VsbUVycm9yIi8+CiAgIDxpZGVudGlmaWVyIGlkPSJPcGlvaWRDRFNfU1RVNF9SRUNfMTEiIHZlcnNpb249IjAuMS4wIi8+CiAgIDxzY2hlbWFJZGVudGlmaWVyIGlkPSJ1cm46aGw3LW9yZzplbG0iIHZlcnNpb249InIxIi8+CiAgIDx1c2luZ3M+CiAgICAgIDxkZWYgbG9jYWxJZGVudGlmaWVyPSJTeXN0ZW0iIHVyaT0idXJuOmhsNy1vcmc6ZWxtLXR5cGVzOnIxIi8+CiAgICAgIDxkZWYgbG9jYWxJZGVudGlmaWVyPSJGSElSIiB1cmk9Imh0dHA6Ly9obDcub3JnL2ZoaXIiIHZlcnNpb249IjMuMi4wIi8+CiAgIDwvdXNpbmdzPgogICA8aW5jbHVkZXM+CiAgICAgIDxkZWYgbG9jYWxJZGVudGlmaWVyPSJDb21tb24iIHBhdGg9Ik9waW9pZENEU19TVFU0X0NvbW1vbiIgdmVyc2lvbj0iMC4xLjAiLz4KICAgPC9pbmNsdWRlcz4KICAgPHBhcmFtZXRlcnM+CiAgICAgIDxkZWYgbmFtZT0iQ29udGV4dFByZXNjcmlwdGlvbnMiIGFjY2Vzc0xldmVsPSJQdWJsaWMiPgogICAgICAgICA8cGFyYW1ldGVyVHlwZVNwZWNpZmllciB4c2k6dHlwZT0iTGlzdFR5cGVTcGVjaWZpZXIiPgogICAgICAgICAgICA8ZWxlbWVudFR5cGUgbmFtZT0iZmhpcjpNZWRpY2F0aW9uUmVxdWVzdCIgeHNpOnR5cGU9Ik5hbWVkVHlwZVNwZWNpZmllciIvPgogICAgICAgICA8L3BhcmFtZXRlclR5cGVTcGVjaWZpZXI+CiAgICAgIDwvZGVmPgogICA8L3BhcmFtZXRlcnM+CiAgIDxzdGF0ZW1lbnRzPgogICAgICA8ZGVmIG5hbWU9IlBhdGllbnQiIGNvbnRleHQ9IlBhdGllbnQiPgogICAgICAgICA8ZXhwcmVzc2lvbiB4c2k6dHlwZT0iU2luZ2xldG9uRnJvbSI+CiAgICAgICAgICAgIDxvcGVyYW5kIGRhdGFUeXBlPSJmaGlyOlBhdGllbnQiIHhzaTp0eXBlPSJSZXRyaWV2ZSIvPgogICAgICAgICA8L2V4cHJlc3Npb24+CiAgICAgIDwvZGVmPgogICAgICA8ZGVmIG5hbWU9IlZhbGlkYXRlIFRyaWdnZXIgRXZlbnQgRm9yIEJlbnpvZGlhemVwaW5lIiBjb250ZXh0PSJQYXRpZW50IiBhY2Nlc3NMZXZlbD0iUHVibGljIj4KICAgICAgICAgPGV4cHJlc3Npb24geHNpOnR5cGU9IkV4aXN0cyI+CiAgICAgICAgICAgIDxvcGVyYW5kIHhzaTp0eXBlPSJRdWVyeSI+CiAgICAgICAgICAgICAgIDxzb3VyY2UgYWxpYXM9InRyaWdnZXJTY3JpcHQiPgogICAgICAgICAgICAgICAgICA8ZXhwcmVzc2lvbiBuYW1lPSJDb250ZXh0UHJlc2NyaXB0aW9ucyIgeHNpOnR5cGU9IlBhcmFtZXRlclJlZiIvPgogICAgICAgICAgICAgICA8L3NvdXJjZT4KICAgICAgICAgICAgICAgPHdoZXJlIG5hbWU9IklzQmVuem9kaWF6ZXBpbmUiIGxpYnJhcnlOYW1lPSJDb21tb24iIHhzaTp0eXBlPSJGdW5jdGlvblJlZiI+CiAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIG5hbWU9IlRvQ29kZSIgbGlicmFyeU5hbWU9IkNvbW1vbiIgeHNpOnR5cGU9IkZ1bmN0aW9uUmVmIj4KICAgICAgICAgICAgICAgICAgICAgPG9wZXJhbmQgeHNpOnR5cGU9IkluZGV4ZXIiPgogICAgICAgICAgICAgICAgICAgICAgICA8b3BlcmFuZCBwYXRoPSJjb2RpbmciIHhzaTp0eXBlPSJQcm9wZXJ0eSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzb3VyY2UgcGF0aD0ibWVkaWNhdGlvbiIgc2NvcGU9InRyaWdnZXJTY3JpcHQiIHhzaTp0eXBlPSJQcm9wZXJ0eSIvPgogICAgICAgICAgICAgICAgICAgICAgICA8L29wZXJhbmQ+CiAgICAgICAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIHZhbHVlVHlwZT0idDpJbnRlZ2VyIiB2YWx1ZT0iMCIgeHNpOnR5cGU9IkxpdGVyYWwiLz4KICAgICAgICAgICAgICAgICAgICAgPC9vcGVyYW5kPgogICAgICAgICAgICAgICAgICA8L29wZXJhbmQ+CiAgICAgICAgICAgICAgIDwvd2hlcmU+CiAgICAgICAgICAgIDwvb3BlcmFuZD4KICAgICAgICAgPC9leHByZXNzaW9uPgogICAgICA8L2RlZj4KICAgICAgPGRlZiBuYW1lPSJWYWxpZGF0ZSBUcmlnZ2VyIEV2ZW50IEZvciBBbWJ1bGF0b3J5IENhcmUgQWJ1c2UgUG90ZW50aWFsIiBjb250ZXh0PSJQYXRpZW50IiBhY2Nlc3NMZXZlbD0iUHVibGljIj4KICAgICAgICAgPGV4cHJlc3Npb24geHNpOnR5cGU9IkV4aXN0cyI+CiAgICAgICAgICAgIDxvcGVyYW5kIHhzaTp0eXBlPSJRdWVyeSI+CiAgICAgICAgICAgICAgIDxzb3VyY2UgYWxpYXM9InRyaWdnZXJTY3JpcHQiPgogICAgICAgICAgICAgICAgICA8ZXhwcmVzc2lvbiBuYW1lPSJDb250ZXh0UHJlc2NyaXB0aW9ucyIgeHNpOnR5cGU9IlBhcmFtZXRlclJlZiIvPgogICAgICAgICAgICAgICA8L3NvdXJjZT4KICAgICAgICAgICAgICAgPHdoZXJlIG5hbWU9IklzT3Bpb2lkV2l0aEFtYnVsYXRvcnlBYnVzZVBvdGVudGlhbCIgbGlicmFyeU5hbWU9IkNvbW1vbiIgeHNpOnR5cGU9IkZ1bmN0aW9uUmVmIj4KICAgICAgICAgICAgICAgICAgPG9wZXJhbmQgbmFtZT0iVG9Db2RlIiBsaWJyYXJ5TmFtZT0iQ29tbW9uIiB4c2k6dHlwZT0iRnVuY3Rpb25SZWYiPgogICAgICAgICAgICAgICAgICAgICA8b3BlcmFuZCB4c2k6dHlwZT0iSW5kZXhlciI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIHBhdGg9ImNvZGluZyIgeHNpOnR5cGU9IlByb3BlcnR5Ij4KICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNvdXJjZSBwYXRoPSJtZWRpY2F0aW9uIiBzY29wZT0idHJpZ2dlclNjcmlwdCIgeHNpOnR5cGU9IlByb3BlcnR5Ii8+CiAgICAgICAgICAgICAgICAgICAgICAgIDwvb3BlcmFuZD4KICAgICAgICAgICAgICAgICAgICAgICAgPG9wZXJhbmQgdmFsdWVUeXBlPSJ0OkludGVnZXIiIHZhbHVlPSIwIiB4c2k6dHlwZT0iTGl0ZXJhbCIvPgogICAgICAgICAgICAgICAgICAgICA8L29wZXJhbmQ+CiAgICAgICAgICAgICAgICAgIDwvb3BlcmFuZD4KICAgICAgICAgICAgICAgPC93aGVyZT4KICAgICAgICAgICAgPC9vcGVyYW5kPgogICAgICAgICA8L2V4cHJlc3Npb24+CiAgICAgIDwvZGVmPgogICAgICA8ZGVmIG5hbWU9Ik9uIEJlbnpvZGlhemVwaW5lIiBjb250ZXh0PSJQYXRpZW50IiBhY2Nlc3NMZXZlbD0iUHVibGljIj4KICAgICAgICAgPGV4cHJlc3Npb24geHNpOnR5cGU9Ik9yIj4KICAgICAgICAgICAgPG9wZXJhbmQgbmFtZT0iVmFsaWRhdGUgVHJpZ2dlciBFdmVudCBGb3IgQmVuem9kaWF6ZXBpbmUiIHhzaTp0eXBlPSJFeHByZXNzaW9uUmVmIi8+CiAgICAgICAgICAgIDxvcGVyYW5kIHhzaTp0eXBlPSJFeGlzdHMiPgogICAgICAgICAgICAgICA8b3BlcmFuZCBkYXRhVHlwZT0iZmhpcjpNZWRpY2F0aW9uUmVxdWVzdCIgY29kZVByb3BlcnR5PSJtZWRpY2F0aW9uQ29kZWFibGVDb25jZXB0IiB4c2k6dHlwZT0iUmV0cmlldmUiPgogICAgICAgICAgICAgICAgICA8Y29kZXMgbmFtZT0iQmVuem9kaWF6ZXBpbmVzIiBsaWJyYXJ5TmFtZT0iQ29tbW9uIiB4c2k6dHlwZT0iVmFsdWVTZXRSZWYiLz4KICAgICAgICAgICAgICAgPC9vcGVyYW5kPgogICAgICAgICAgICA8L29wZXJhbmQ+CiAgICAgICAgIDwvZXhwcmVzc2lvbj4KICAgICAgPC9kZWY+CiAgICAgIDxkZWYgbmFtZT0iT3Bpb2lkIHdpdGggQW1idWxhdG9yeSBDYXJlIEFidXNlIFBvdGVudGlhbCIgY29udGV4dD0iUGF0aWVudCIgYWNjZXNzTGV2ZWw9IlB1YmxpYyI+CiAgICAgICAgIDxleHByZXNzaW9uIHhzaTp0eXBlPSJPciI+CiAgICAgICAgICAgIDxvcGVyYW5kIG5hbWU9IlZhbGlkYXRlIFRyaWdnZXIgRXZlbnQgRm9yIEFtYnVsYXRvcnkgQ2FyZSBBYnVzZSBQb3RlbnRpYWwiIHhzaTp0eXBlPSJFeHByZXNzaW9uUmVmIi8+CiAgICAgICAgICAgIDxvcGVyYW5kIHhzaTp0eXBlPSJFeGlzdHMiPgogICAgICAgICAgICAgICA8b3BlcmFuZCBkYXRhVHlwZT0iZmhpcjpNZWRpY2F0aW9uUmVxdWVzdCIgY29kZVByb3BlcnR5PSJtZWRpY2F0aW9uQ29kZWFibGVDb25jZXB0IiB4c2k6dHlwZT0iUmV0cmlldmUiPgogICAgICAgICAgICAgICAgICA8Y29kZXMgbmFtZT0iQW1idWxhdG9yeSBBYnVzZSBQb3RlbnRpYWwgT3Bpb2lkcyIgbGlicmFyeU5hbWU9IkNvbW1vbiIgeHNpOnR5cGU9IlZhbHVlU2V0UmVmIi8+CiAgICAgICAgICAgICAgIDwvb3BlcmFuZD4KICAgICAgICAgICAgPC9vcGVyYW5kPgogICAgICAgICA8L2V4cHJlc3Npb24+CiAgICAgIDwvZGVmPgogICAgICA8ZGVmIG5hbWU9IkluY2x1c2lvbiBDcml0ZXJpYSIgY29udGV4dD0iUGF0aWVudCIgYWNjZXNzTGV2ZWw9IlB1YmxpYyI+CiAgICAgICAgIDxleHByZXNzaW9uIHhzaTp0eXBlPSJBbmQiPgogICAgICAgICAgICA8b3BlcmFuZCB4c2k6dHlwZT0iQW5kIj4KICAgICAgICAgICAgICAgPG9wZXJhbmQgeHNpOnR5cGU9Ik9yIj4KICAgICAgICAgICAgICAgICAgPG9wZXJhbmQgbmFtZT0iVmFsaWRhdGUgVHJpZ2dlciBFdmVudCBGb3IgQmVuem9kaWF6ZXBpbmUiIHhzaTp0eXBlPSJFeHByZXNzaW9uUmVmIi8+CiAgICAgICAgICAgICAgICAgIDxvcGVyYW5kIG5hbWU9IlZhbGlkYXRlIFRyaWdnZXIgRXZlbnQgRm9yIEFtYnVsYXRvcnkgQ2FyZSBBYnVzZSBQb3RlbnRpYWwiIHhzaTp0eXBlPSJFeHByZXNzaW9uUmVmIi8+CiAgICAgICAgICAgICAgIDwvb3BlcmFuZD4KICAgICAgICAgICAgICAgPG9wZXJhbmQgbmFtZT0iT24gQmVuem9kaWF6ZXBpbmUiIHhzaTp0eXBlPSJFeHByZXNzaW9uUmVmIi8+CiAgICAgICAgICAgIDwvb3BlcmFuZD4KICAgICAgICAgICAgPG9wZXJhbmQgbmFtZT0iT3Bpb2lkIHdpdGggQW1idWxhdG9yeSBDYXJlIEFidXNlIFBvdGVudGlhbCIgeHNpOnR5cGU9IkV4cHJlc3Npb25SZWYiLz4KICAgICAgICAgPC9leHByZXNzaW9uPgogICAgICA8L2RlZj4KICAgICAgPGRlZiBuYW1lPSJHZXQgSW5kaWNhdG9yIiBjb250ZXh0PSJQYXRpZW50IiBhY2Nlc3NMZXZlbD0iUHVibGljIj4KICAgICAgICAgPGV4cHJlc3Npb24gdmFsdWVUeXBlPSJ0OlN0cmluZyIgdmFsdWU9Indhcm5pbmciIHhzaTp0eXBlPSJMaXRlcmFsIi8+CiAgICAgIDwvZGVmPgogICAgICA8ZGVmIG5hbWU9IkdldCBTdW1tYXJ5IiBjb250ZXh0PSJQYXRpZW50IiBhY2Nlc3NMZXZlbD0iUHVibGljIj4KICAgICAgICAgPGV4cHJlc3Npb24gdmFsdWVUeXBlPSJ0OlN0cmluZyIgdmFsdWU9IkF2b2lkIHByZXNjcmliaW5nIG9waW9pZCBwYWluIG1lZGljYXRpb24gYW5kIGJlbnpvZGlhemVwaW5lIGNvbmN1cnJlbnRseSB3aGVuZXZlciBwb3NzaWJsZS4iIHhzaTp0eXBlPSJMaXRlcmFsIi8+CiAgICAgIDwvZGVmPgogICAgICA8ZGVmIG5hbWU9IkdldCBEZXRhaWwiIGNvbnRleHQ9IlBhdGllbnQiIGFjY2Vzc0xldmVsPSJQdWJsaWMiPgogICAgICAgICA8ZXhwcmVzc2lvbiB4c2k6dHlwZT0iSWYiPgogICAgICAgICAgICA8Y29uZGl0aW9uIGFzVHlwZT0idDpCb29sZWFuIiB4c2k6dHlwZT0iQXMiPgogICAgICAgICAgICAgICA8b3BlcmFuZCBuYW1lPSJWYWxpZGF0ZSBUcmlnZ2VyIEV2ZW50IEZvciBCZW56b2RpYXplcGluZSIgeHNpOnR5cGU9IkV4cHJlc3Npb25SZWYiLz4KICAgICAgICAgICAgPC9jb25kaXRpb24+CiAgICAgICAgICAgIDx0aGVuIHZhbHVlVHlwZT0idDpTdHJpbmciIHZhbHVlPSJUaGUgYmVuem9kaWF6ZXBpbmUgcHJlc2NyaXB0aW9uIHJlcXVlc3QgaXMgY29uY3VycmVudCB3aXRoIGFuIGFjdGl2ZSBvcGlvaWQgcHJlc2NyaXB0aW9uIiB4c2k6dHlwZT0iTGl0ZXJhbCIvPgogICAgICAgICAgICA8ZWxzZSB2YWx1ZVR5cGU9InQ6U3RyaW5nIiB2YWx1ZT0iVGhlIG9waW9pZCBwcmVzY3JpcHRpb24gcmVxdWVzdCBpcyBjb25jdXJyZW50IHdpdGggYW4gYWN0aXZlIGJlbnpvZGlhemVwaW5lIHByZXNjcmlwdGlvbiIgeHNpOnR5cGU9IkxpdGVyYWwiLz4KICAgICAgICAgPC9leHByZXNzaW9uPgogICAgICA8L2RlZj4KICAgPC9zdGF0ZW1lbnRzPgo8L2xpYnJhcnk+Cg==",
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

export const LibraryQuickModelDefinition: Library = {
  resourceType: "Library",
  id: "library-quick-model-definition",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n         <table class="grid dict">\n            <tr>\n               <td>\n                  <b>Id: </b>\n               </td>\n            </tr>\n            <tr>\n               <td style="padding-left: 25px; padding-right: 25px;">Library/library-quick-model-definition</td>\n            </tr>\n         </table>\n         <table class="grid dict">\n            <tr>\n               <td>\n                  <b>Identifier: </b>\n               </td>\n            </tr>\n            <tr>\n               <td style="padding-left: 25px; padding-right: 25px;">\n                  <b>value: </b>\n                  <span>QUICK</span>\n               </td>\n            </tr>\n         </table>\n         <p/>\n         <table class="grid dict">\n            <tr>\n               <td>\n                  <b>Version: </b>\n               </td>\n            </tr>\n            <tr>\n               <td style="padding-left: 25px; padding-right: 25px;">1.0.0</td>\n            </tr>\n         </table>\n         <p/>\n         <table class="grid dict">\n            <tr>\n               <td>\n                  <b>Title: </b>\n               </td>\n            </tr>\n            <tr>\n               <td style="padding-left: 25px; padding-right: 25px;">QUICK Model Definition</td>\n            </tr>\n         </table>\n         <p/>\n         <table class="grid dict">\n            <tr>\n               <td>\n                  <b>Type: </b>\n               </td>\n            </tr>\n            <tr>\n               <td style="padding-right: 25px;">\n                  <span>\n                     <span>\n                        <span style="padding-left: 25px;">\n                           <b>code: </b>\n                           <span>model-definition</span>\n                        </span>\n                     </span>\n                  </span>\n               </td>\n            </tr>\n         </table>\n         <p/>\n         <table class="grid dict">\n            <tr>\n               <td>\n                  <b>Status: </b>\n               </td>\n            </tr>\n            <tr>\n               <td style="padding-left: 25px; padding-right: 25px;">draft</td>\n            </tr>\n         </table>\n         <p/>\n         <table class="grid dict">\n            <tr>\n               <td>\n                  <b>Description: </b>\n               </td>\n            </tr>\n            <tr>\n               <td style="padding-left: 25px; padding-right: 25px;">Model definition for the QUICK Logical Model</td>\n            </tr>\n         </table>\n         <p/>\n         <table class="grid dict">\n            <tr>\n               <td>\n                  <b>Topic: </b>\n               </td>\n            </tr>\n            <tr>\n               <td style="padding-right: 25px;">\n                  <span style="padding-left: 25px;">\n                     <b>text: </b>\n                     <span>QUICK</span>\n                  </span>\n               </td>\n            </tr>\n         </table>\n         <p/>\n         <table class="grid dict">\n            <tr>\n               <td>\n                  <b>Content: </b>\n               </td>\n            </tr>\n            <tr>\n               <td style="padding-left: 25px; padding-right: 25px;">\n                  <p style="margin-bottom: 5px;">\n                     <b>type: </b>\n                     <span>application/xml</span>\n                  </p>\n                  <p style="margin-bottom: 5px;">\n                     <b>url: </b>\n                     <span>http://cqlrepository.org/quick-modelinfo.xml</span>\n                  </p>\n               </td>\n            </tr>\n         </table>\n      </div>',
  },
  identifier: [
    {
      use: "official",
      value: "QUICK",
    },
  ],
  version: "1.0.0",
  title: "QUICK Model Definition",
  status: "draft",
  type: {
    coding: [
      {
        code: "model-definition",
      },
    ],
  },
  date: "2016-07-08",
  description: "Model definition for the QUICK Logical Model",
  topic: [
    {
      text: "QUICK",
    },
  ],
  content: [
    {
      contentType: "application/xml",
      url: "http://cqlrepository.org/quick-modelinfo.xml",
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
