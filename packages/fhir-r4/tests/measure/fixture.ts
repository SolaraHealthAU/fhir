import type { Measure } from "../../src/v4.0.1/measure/types";

export const MeasureCms146Example: Measure = {
  resourceType: "Measure",
  id: "measure-cms146-example",
  text: {
    status: "additional",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><table class="grid dict"><tr><td><b>Id: </b></td></tr><tr><td style="padding-left: 25px; padding-right: 25px;">Measure/measure-cms146-example</td></tr></table><p/><table class="grid dict"><tr><td><b>Identifier: </b></td></tr><tr><td style="padding-left: 25px; padding-right: 25px;"><b>system: </b><span>http://hl7.org/fhir/cqi/ecqm/Measure/Identifier/cms</span></td></tr><tr><td style="padding-left: 25px; padding-right: 25px;"><b>value: </b><span>146</span></td></tr></table><table class="grid dict"><tr><td><b>Identifier: </b></td></tr><tr><td style="padding-left: 25px; padding-right: 25px;"><b>system: </b><span>http://hl7.org/fhir/cqi/ecqm/Measure/Identifier/nqf</span></td></tr><tr><td style="padding-left: 25px; padding-right: 25px;"><b>value: </b><span>0002</span></td></tr></table><p/><table class="grid dict"><tr><td><b>Title: </b></td></tr><tr><td style="padding-left: 25px; padding-right: 25px;">Appropriate Testing for Children with Pharyngitis</td></tr></table><p/><table class="grid dict"><tr><td><b>Status: </b></td></tr><tr><td style="padding-left: 25px; padding-right: 25px;">active</td></tr></table><p/><table class="grid dict"><tr><td><b>Description: </b></td></tr><tr><td style="padding-left: 25px; padding-right: 25px;">Percentage of children 2-18 years of age who were diagnosed with pharyngitis, ordered an antibiotic and received a group A streptococcus (strep) test for the episode.</td></tr></table><p/><table class="grid dict"><tr><td><b>Purpose: </b></td></tr><tr><td style="padding-left: 25px; padding-right: 25px;">The Infectious Diseases Society of America (IDSA) &quot;recommends swabbing the throat and testing for GAS pharyngitis by rapid antigen detection test (RADT) and/or culture because the clinical features alone do not reliably discriminate between GAS and viral pharyngitis except when overt viral features like rhinorrhea, cough, oral ulcers, and/or hoarseness are present&quot;</td></tr></table><p/><table class="grid dict"><tr><td><b>Topic: </b></td></tr><tr><td style="padding-right: 25px;"><span><span><span style="padding-left: 25px;"><b>system: </b><span>http://loinc.org</span><br/></span><span style="padding-left: 25px;"><b>code: </b><span>57024-2</span><br/></span></span></span></td></tr></table><p/><table class="grid dict"><tr><td><b>Library: </b></td></tr><tr><td style="padding-left: 25px; padding-right: 25px;"><b>reference: </b><span>Library/library-cms146-example</span></td></tr></table><p/><table class="grid dict"><tr><td><b>Scoring: </b></td></tr><tr><td style="padding-left: 25px; padding-right: 25px;">proportion</td></tr></table><p/><table class="grid dict"><tr><td><b>Type: </b></td></tr><tr><td style="padding-left: 25px; padding-right: 25px;">process</td></tr></table><p/><table class="grid dict"><tr><td><b>Group:</b></td></tr><tr><td style="padding-left: 25px; padding-right: 25px;"><b>Identifier:</b><br/><span style="padding-left: 25px;"><b>value: </b><span>CMS146-group-1</span><br/></span></td></tr><tr><td style="padding-left: 25px; padding-right: 25px;"><b>Population:</b><br/><p style="margin-bottom: 5px; padding-left: 25px;"><b>type:</b><span>initial-population</span></p><p style="margin-bottom: 5px; padding-left: 25px;"><b>Identifier:</b><br/><span style="padding-left: 25px;"><b>value: </b><span>initial-population-identifier</span><br/></span></p><p style="margin-bottom: 5px; padding-left: 25px;"><b>criteria: </b><span>CMS146.InInitialPopulation</span></p></td></tr><tr><td style="padding-left: 25px; padding-right: 25px;"><b>Population:</b><br/><p style="margin-bottom: 5px; padding-left: 25px;"><b>type:</b><span>numerator</span></p><p style="margin-bottom: 5px; padding-left: 25px;"><b>Identifier:</b><br/><span style="padding-left: 25px;"><b>value: </b><span>numerator-identifier</span><br/></span></p><p style="margin-bottom: 5px; padding-left: 25px;"><b>criteria: </b><span>CMS146.InNumerator</span></p></td></tr><tr><td style="padding-left: 25px; padding-right: 25px;"><b>Population:</b><br/><p style="margin-bottom: 5px; padding-left: 25px;"><b>type:</b><span>denominator</span></p><p style="margin-bottom: 5px; padding-left: 25px;"><b>Identifier:</b><br/><span style="padding-left: 25px;"><b>value: </b><span>denominator-identifier</span><br/></span></p><p style="margin-bottom: 5px; padding-left: 25px;"><b>criteria: </b><span>CMS146.InDenominator</span></p></td></tr><tr><td style="padding-left: 25px; padding-right: 25px;"><b>Population:</b><br/><p style="margin-bottom: 5px; padding-left: 25px;"><b>type:</b><span>denominator-exclusion</span></p><p style="margin-bottom: 5px; padding-left: 25px;"><b>Identifier:</b><br/><span style="padding-left: 25px;"><b>value: </b><span>denominator-exclusions-identifier</span><br/></span></p><p style="margin-bottom: 5px; padding-left: 25px;"><b>criteria: </b><span>CMS146.InDenominatorExclusions</span></p></td></tr><tr><td style="padding-left: 25px; padding-right: 25px;"><b>Stratifier:</b><br/><p style="padding-left: 25px; margin-bottom: 5px;"><b>Identifier:</b><br/><span style="padding-left: 25px;"><b>value: </b><span>stratifier-ages-up-to-9</span><br/></span></p><p style="margin-bottom: 5px; padding-left: 25px;"><b>criteria: </b><span>CMS146.AgesUpToNine</span></p></td></tr><tr><td style="padding-left: 25px; padding-right: 25px;"><b>Stratifier:</b><br/><p style="padding-left: 25px; margin-bottom: 5px;"><b>Identifier:</b><br/><span style="padding-left: 25px;"><b>value: </b><span>stratifier-ages-10-plus</span><br/></span></p><p style="margin-bottom: 5px; padding-left: 25px;"><b>criteria: </b><span>CMS146.AgesTenPlus</span></p></td></tr><tr><td style="padding-left: 25px; padding-right: 25px;"><b>Stratifier:</b><br/><p style="padding-left: 25px; margin-bottom: 5px;"><b>Identifier:</b><br/><span style="padding-left: 25px;"><b>value: </b><span>stratifier-ages-up-to-9</span><br/></span></p><p style="margin-bottom: 5px; padding-left: 25px;"><b>path: </b><span>Patient.gender</span></p></td></tr></table><p/><table class="grid dict"><tr><td><b>Supplemental Data:</b></td></tr><tr><td style="padding-left: 25px; padding-right: 25px;"><p style="margin-bottom: 5px;"><b>Identifier:</b><br/><span style="padding-left: 25px;"><b>value: </b><span>supplemental-data-gender</span><br/></span></p><p style="margin-bottom: 5px;"><b>path: </b><span>Patient.gender</span></p></td></tr></table><table class="grid dict"><tr><td><b>Supplemental Data:</b></td></tr><tr><td style="padding-left: 25px; padding-right: 25px;"><p style="margin-bottom: 5px;"><b>Identifier:</b><br/><span style="padding-left: 25px;"><b>value: </b><span>supplemental-data-deceased</span><br/></span></p><p style="margin-bottom: 5px;"><b>path: </b><span>deceasedBoolean</span></p></td></tr></table></div>',
  },
  url: "http://hl7.org/fhir/Measure/measure-cms146-example",
  identifier: [
    {
      use: "official",
      system: "http://hl7.org/fhir/cqi/ecqm/Measure/Identifier/cms",
      value: "146",
    },
    {
      use: "official",
      system: "http://hl7.org/fhir/cqi/ecqm/Measure/Identifier/nqf",
      value: "0002",
    },
  ],
  version: "1.0.0",
  name: "CMS146",
  title: "Appropriate Testing for Children with Pharyngitis",
  status: "active",
  experimental: true,
  date: "2017-03-10",
  publisher: "National Committee for Quality Assurance",
  contact: [
    {
      telecom: [
        {
          system: "url",
          value: "http://www.ncqa.org/",
        },
      ],
    },
  ],
  description:
    "Percentage of children 3-18 years of age who were diagnosed with pharyngitis, ordered an antibiotic and received a group A streptococcus (strep) test for the episode.",
  useContext: [
    {
      code: {
        code: "program",
      },
      valueCodeableConcept: {
        text: "eligibile-provider",
      },
    },
    {
      code: {
        system: "http://terminology.hl7.org/CodeSystem/usage-context-type",
        code: "age",
      },
      valueRange: {
        low: {
          value: 3,
          unit: "a",
        },
        high: {
          value: 18,
          unit: "a",
        },
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
    "Measure of children with a group A streptococcus test in the 7-day period from 3 days prior through 3 days after the diagnosis of pharyngitis",
  copyright:
    "Physician Performance Measure (Measures) and related data specifications were developed by the National Committee for Quality Assurance (NCQA).   The Measures are copyrighted but can be reproduced and distributed, without modification, for noncommercial purposes (eg, use by healthcare providers in connection with their practices). Commercial use is defined as the sale, licensing, or distribution of the Measures for commercial gain, or incorporation of the Measures into a product or service that is sold, licensed or distributed for commercial gain. Commercial use of the Measures requires a license agreement between the user and NCQA. NCQA is not responsible for any use of the Measures.   (c) 2008-2016 National Committee for Quality Assurance. All Rights Reserved.   Limited proprietary coding is contained in the Measure specifications for user convenience. Users of proprietary code sets should obtain all necessary licenses from the owners of the code sets. NCQA disclaims all liability for use or accuracy of any CPT or other codes contained in the specifications.  CPT(R) contained in the Measure specifications is copyright 2004-2015 American Medical Association. LOINC(R) copyright 2004-2015 Regenstrief Institute, Inc. This material contains SNOMED Clinical Terms(R) (SNOMED CT[R]) copyright 2004-2015 International Health Terminology Standards Development Organisation. ICD-10 copyright 2015 World Health Organization. All Rights Reserved.",
  approvalDate: "2016-01-01",
  lastReviewDate: "2016-09-01",
  effectivePeriod: {
    start: "2017-01-01",
    end: "2017-12-31",
  },
  topic: [
    {
      coding: [
        {
          system: "http://loinc.org",
          code: "57024-2",
        },
      ],
    },
  ],
  author: [
    {
      name: "National Committee for Quality Assurance",
    },
  ],
  relatedArtifact: [
    {
      type: "documentation",
      citation:
        "Linder, J.A., D.W. Bates, G.M. Lee, J.A. Finkelstein. 2005. _Antibiotic treatment of children with sore throat._ JAMA 294(18):2315-2322. ",
    },
    {
      type: "documentation",
      citation:
        "Infectious Diseases Society of America. 2012. _Clinical Practice Guideline for the Diagnosis and Management of Group A Streptococcal Pharyngitis: 2012 Update._ ",
    },
    {
      type: "documentation",
      citation:
        "Roberts, R.R., B. Hota, I. Ahmad, et al. _Hospital and Societal Costs of Antimicrobial-Resistant Infections in a Chicago Teaching Hospital: Implications for Antibiotic Stewardship._ Clin Infect Dis. Oct 2009; 49(8):1175-84.",
    },
  ],
  library: ["Library/library-cms146-example"],
  disclaimer:
    'These performance Measures are not clinical guidelines and do not establish a standard of medical care, and have not been tested for all potential applications. THE MEASURES AND SPECIFICATIONS ARE PROVIDED "AS IS" WITHOUT WARRANTY OF ANY KIND. Due to technical limitations, registered trademarks are indicated by (R) or [R] and unregistered trademarks are indicated by (TM) or [TM].',
  scoring: {
    coding: [
      {
        code: "proportion",
      },
    ],
  },
  type: [
    {
      coding: [
        {
          code: "process",
        },
      ],
    },
  ],
  rationale:
    "Group A streptococcal bacterial infections and other infections that cause pharyngitis (which are most often viral) often produce the same signs and symptoms (IDSA 2002). The American Academy of Pediatrics, the Centers for Disease Control and Prevention, and the Infectious Diseases Society of America all recommend a diagnostic test for Strep A to improve diagnostic accuracy and avoid unnecessary antibiotic treatment (Linder et al. 2005). Estimated economic costs of pediatric streptococcal pharyngitis in the United States range from $224 million to $539 million per year, including indirect costs related to parental work losses. At a higher level, the economic cost of antibiotic resistance vary but have extended as high as $20 billion in excess direct healthcare costs, with additional costs to society for lost productivity as high as $35 billion a year (2008 dollars) (Roberts et al. 2009).",
  clinicalRecommendationStatement:
    'The Infectious Diseases Society of America (IDSA) "recommends swabbing the throat and testing for GAS pharyngitis by rapid antigen detection test (RADT) and/or culture because the clinical features alone do not reliably discriminate between GAS and viral pharyngitis except when overt viral features like rhinorrhea, cough, oral ulcers, and/or hoarseness are present"',
  improvementNotation: {
    coding: [
      {
        system:
          "http://terminology.hl7.org/CodeSystem/measure-improvement-notation",
        code: "increase",
      },
    ],
  },
  guidance:
    "This is an episode of care measure that examines all eligible episodes for the patient during the measurement period. If the patient has more than one episode, include all episodes in the measure",
  group: [
    {
      id: "CMS146-group-1",
      population: [
        {
          code: {
            coding: [
              {
                code: "initial-population",
              },
            ],
          },
          criteria: {
            language: "text/cql",
            expression: "CMS146.InInitialPopulation",
          },
        },
        {
          code: {
            coding: [
              {
                code: "numerator",
              },
            ],
          },
          criteria: {
            language: "text/cql",
            expression: "CMS146.InNumerator",
          },
        },
        {
          code: {
            coding: [
              {
                code: "denominator",
              },
            ],
          },
          criteria: {
            language: "text/cql",
            expression: "CMS146.InDenominator",
          },
        },
        {
          code: {
            coding: [
              {
                code: "denominator-exclusion",
              },
            ],
          },
          criteria: {
            language: "text/cql",
            expression: "CMS146.InDenominatorExclusions",
          },
        },
      ],
      stratifier: [
        {
          code: {
            text: "stratifier-ages-up-to-9",
          },
          criteria: {
            language: "text/cql",
            expression: "CMS146.AgesUpToNine",
          },
        },
        {
          code: {
            text: "stratifier-ages-10-plus",
          },
          criteria: {
            language: "text/cql",
            expression: "CMS146.AgesTenPlus",
          },
        },
        {
          code: {
            text: "stratifier-gender",
          },
          criteria: {
            language: "text/fhirpath",
            expression: "Patient.gender",
          },
        },
      ],
    },
  ],
  supplementalData: [
    {
      code: {
        text: "supplemental-data-gender",
      },
      criteria: {
        language: "text/fhirpath",
        expression: "Patient.gender",
      },
    },
    {
      code: {
        text: "supplemental-data-deceased",
      },
      criteria: {
        language: "text/fhirpath",
        expression: "deceasedBoolean",
      },
    },
  ],
} as const;

export const MeasureComponentAExample: Measure = {
  resourceType: "Measure",
  id: "component-a-example",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">Screening for Alcohol Misuse\n    <p>This measure example is used to illustrate how a composite measure can be constructured. This measure is one component of the composite measure.</p></div>',
  },
  title: "Screening for Alcohol Misuse",
  status: "draft",
  scoring: {
    coding: [
      {
        code: "proportion",
      },
    ],
  },
  group: [
    {
      id: "Main",
      population: [
        {
          code: {
            coding: [
              {
                code: "initial-population",
              },
            ],
          },
          criteria: {
            language: "text/cql",
            expression: "Initial Population",
          },
        },
        {
          code: {
            coding: [
              {
                code: "denominator",
              },
            ],
          },
          criteria: {
            language: "text/cql",
            expression: "Denominator",
          },
        },
        {
          code: {
            coding: [
              {
                code: "numerator",
              },
            ],
          },
          criteria: {
            language: "text/cql",
            expression: "Numerator",
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

export const MeasureComponentBExample: Measure = {
  resourceType: "Measure",
  id: "component-b-example",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">Screening for Depression\n    <p>This measure example is used to illustrate how a composite measure can be constructured. This measure is one component of the composite measure.</p></div>',
  },
  title: "Screening for Depression",
  status: "draft",
  scoring: {
    coding: [
      {
        code: "proportion",
      },
    ],
  },
  group: [
    {
      id: "Main",
      population: [
        {
          code: {
            coding: [
              {
                code: "initial-population",
              },
            ],
          },
          criteria: {
            language: "text/cql",
            expression: "Initial Population",
          },
        },
        {
          code: {
            coding: [
              {
                code: "denominator",
              },
            ],
          },
          criteria: {
            language: "text/cql",
            expression: "Denominator",
          },
        },
        {
          code: {
            coding: [
              {
                code: "numerator",
              },
            ],
          },
          criteria: {
            language: "text/cql",
            expression: "Numerator",
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

export const MeasureCompositeExample: Measure = {
  resourceType: "Measure",
  id: "composite-example",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">Behavioral Assessment Composite Measure\n    <p>This measure example is used to illustrate how a composite measure can be constructured. This measure is a composite measure of the Screening for Alcohol Misuse and Screening for Depression measures.</p></div>',
  },
  title: "Behavioral Assessment Composite Measure",
  status: "draft",
  relatedArtifact: [
    {
      type: "composed-of",
      resource: "Measure/component-a-example",
    },
    {
      type: "composed-of",
      resource: "Measure/component-b-example",
    },
  ],
  scoring: {
    coding: [
      {
        code: "proportion",
      },
    ],
  },
  compositeScoring: {
    coding: [
      {
        code: "opportunity",
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

export const MeasureExclusiveBreastfeeding: Measure = {
  resourceType: "Measure",
  id: "measure-exclusive-breastfeeding",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><table class="grid dict"><tr><td><b>Id: </b></td></tr><tr><td style="padding-left: 25px; padding-right: 25px;">Measure/measure-exclusive-breastfeeding</td></tr></table><p/><table class="grid dict"><tr><td><b>Identifier: </b></td></tr><tr><td style="padding-left: 25px; padding-right: 25px;"><b>value: </b><span>exclusive-breastfeeding-measure</span></td></tr></table><p/><table class="grid dict"><tr><td><b>Title: </b></td></tr><tr><td style="padding-left: 25px; padding-right: 25px;">Exclusive Breastfeeding Measure</td></tr></table><p/><table class="grid dict"><tr><td><b>Status: </b></td></tr><tr><td style="padding-left: 25px; padding-right: 25px;">active</td></tr></table><p/><table class="grid dict"><tr><td><b>Description: </b></td></tr><tr><td style="padding-left: 25px; padding-right: 25px;">Exclusive breastfeeding measure of outcomes for exclusive breastmilk feeding of newborns.</td></tr></table><p/><table class="grid dict"><tr><td><b>Purpose: </b></td></tr><tr><td style="padding-left: 25px; padding-right: 25px;">Exclusive breast milk feeding for the first 6 months of neonatal life can result in numerous long-term health benefits for both mother and newborn and is recommended by a number of national and international organizations. Evidence suggests that the prenatal and intrapartum period is critical for the success of exclusive (or any) breast feeding. Therefore, it is recommended that newborns are fed breast milk only from birth to discharge.</td></tr></table><p/><table class="grid dict"><tr><td><b>Topic: </b></td></tr><tr><td style="padding-right: 25px;"><span style="padding-left: 25px;"><b>text: </b><span>Exclusive Breastfeeding</span><br/></span></td></tr></table><p/><table class="grid dict"><tr><td><b>Library: </b></td></tr><tr><td style="padding-left: 25px; padding-right: 25px;"><b>reference: </b><span>Library/library-exclusive-breastfeeding-cqm-logic</span></td></tr></table><p/><table class="grid dict"><tr><td><b>Type: </b></td></tr><tr><td style="padding-left: 25px; padding-right: 25px;">outcome</td></tr></table><p/><table class="grid dict"><tr><td><b>Group:</b></td></tr><tr><td style="padding-left: 25px; padding-right: 25px;"><b>Identifier:</b><br/><span style="padding-left: 25px;"><b>value: </b><span>Population Group 1</span><br/></span></td></tr><tr><td style="padding-left: 25px; padding-right: 25px;"><b>Population:</b><br/><p style="margin-bottom: 5px; padding-left: 25px;"><b>type:</b><span>initial-population</span></p><p style="margin-bottom: 5px; padding-left: 25px;"><b>Identifier:</b><br/><span style="padding-left: 25px;"><b>value: </b><span>initial-population-1-identifier</span><br/></span></p><p style="margin-bottom: 5px; padding-left: 25px;"><b>criteria: </b><span>InitialPopulation1</span></p></td></tr><tr><td style="padding-left: 25px; padding-right: 25px;"><b>Population:</b><br/><p style="margin-bottom: 5px; padding-left: 25px;"><b>type:</b><span>denominator</span></p><p style="margin-bottom: 5px; padding-left: 25px;"><b>Identifier:</b><br/><span style="padding-left: 25px;"><b>value: </b><span>denominator-1-identifier</span><br/></span></p><p style="margin-bottom: 5px; padding-left: 25px;"><b>criteria: </b><span>Denominator1</span></p></td></tr><tr><td style="padding-left: 25px; padding-right: 25px;"><b>Population:</b><br/><p style="margin-bottom: 5px; padding-left: 25px;"><b>type:</b><span>denominator-exclusion</span></p><p style="margin-bottom: 5px; padding-left: 25px;"><b>Identifier:</b><br/><span style="padding-left: 25px;"><b>value: </b><span>denominator-exclusions-1-identifier</span><br/></span></p><p style="margin-bottom: 5px; padding-left: 25px;"><b>criteria: </b><span>DenominatorExclusions1</span></p></td></tr><tr><td style="padding-left: 25px; padding-right: 25px;"><b>Population:</b><br/><p style="margin-bottom: 5px; padding-left: 25px;"><b>type:</b><span>numerator</span></p><p style="margin-bottom: 5px; padding-left: 25px;"><b>Identifier:</b><br/><span style="padding-left: 25px;"><b>value: </b><span>numerator-1-identifier</span><br/></span></p><p style="margin-bottom: 5px; padding-left: 25px;"><b>criteria: </b><span>Numerator1</span></p></td></tr></table><table class="grid dict"><tr><td><b>Group:</b></td></tr><tr><td style="padding-left: 25px; padding-right: 25px;"><b>Identifier:</b><br/><span style="padding-left: 25px;"><b>value: </b><span>Population Group 2</span><br/></span></td></tr><tr><td style="padding-left: 25px; padding-right: 25px;"><b>Population:</b><br/><p style="margin-bottom: 5px; padding-left: 25px;"><b>type:</b><span>initial-population</span></p><p style="margin-bottom: 5px; padding-left: 25px;"><b>Identifier:</b><br/><span style="padding-left: 25px;"><b>value: </b><span>initial-population-2-identifier</span><br/></span></p><p style="margin-bottom: 5px; padding-left: 25px;"><b>criteria: </b><span>InitialPopulation2</span></p></td></tr><tr><td style="padding-left: 25px; padding-right: 25px;"><b>Population:</b><br/><p style="margin-bottom: 5px; padding-left: 25px;"><b>type:</b><span>denominator</span></p><p style="margin-bottom: 5px; padding-left: 25px;"><b>Identifier:</b><br/><span style="padding-left: 25px;"><b>value: </b><span>denominator-2-identifier</span><br/></span></p><p style="margin-bottom: 5px; padding-left: 25px;"><b>criteria: </b><span>Denominator2</span></p></td></tr><tr><td style="padding-left: 25px; padding-right: 25px;"><b>Population:</b><br/><p style="margin-bottom: 5px; padding-left: 25px;"><b>type:</b><span>denominator-exclusion</span></p><p style="margin-bottom: 5px; padding-left: 25px;"><b>Identifier:</b><br/><span style="padding-left: 25px;"><b>value: </b><span>denominator-exclusions-2-identifier</span><br/></span></p><p style="margin-bottom: 5px; padding-left: 25px;"><b>criteria: </b><span>DenominatorExclusions2</span></p></td></tr><tr><td style="padding-left: 25px; padding-right: 25px;"><b>Population:</b><br/><p style="margin-bottom: 5px; padding-left: 25px;"><b>type:</b><span>numerator</span></p><p style="margin-bottom: 5px; padding-left: 25px;"><b>Identifier:</b><br/><span style="padding-left: 25px;"><b>value: </b><span>numerator-2-identifier</span><br/></span></p><p style="margin-bottom: 5px; padding-left: 25px;"><b>criteria: </b><span>Numerator2</span></p></td></tr></table></div>',
  },
  identifier: [
    {
      use: "official",
      value: "exclusive-breastfeeding-measure",
    },
  ],
  version: "4.0.1",
  title: "Exclusive Breastfeeding Measure",
  status: "active",
  date: "2015-03-08",
  description:
    "Exclusive breastfeeding measure of outcomes for exclusive breastmilk feeding of newborns.",
  purpose: "Measure of newborns who were fed breast milk only since birth",
  topic: [
    {
      text: "Exclusive Breastfeeding",
    },
  ],
  relatedArtifact: [
    {
      type: "documentation",
      citation:
        "American Academy of Pediatrics. (2005). Section on Breastfeeding. Policy Statement:Breastfeeding and the Use of Human Milk. Pediatrics.115:496-506.",
    },
    {
      type: "documentation",
      citation:
        "American College of Obstetricians and Gynecologists. (Feb. 2007). Committee on Obstetric Practice and Committee on Health Care for Underserved Women. Breastfeeding: Maternal and Infant Aspects. ACOG Committee Opinion 361.",
    },
    {
      type: "documentation",
      citation:
        "California Department of Public Health. (2006). Genetic Disease Branch. California In-Hospital Breastfeeding as Indicated on the Newborn Screening Test Form, Statewide, County and Hospital of Occurrence: Available at: http://www.cdph.ca.gov/data/statistics/Pages/BreastfeedingStatistics.aspx.",
    },
    {
      type: "documentation",
      citation:
        "Centers for Disease Control and Prevention. (Aug 3, 2007). Breastfeeding trends and updated national health objectives for exclusive breastfeeding--United States birth years 2000-2004. MMWR - Morbidity & Mortality Weekly Report. 56(30):760-3.",
    },
    {
      type: "documentation",
      citation:
        "Centers for Disease Control and Prevention. (2014). Division of Nutrition, Physical Activity and Obesity. Breastfeeding Report Card. Available at: http://www.cdc.gov/breastfeeding/pdf/2014breastfeedingreportcard.pdf",
    },
    {
      type: "documentation",
      citation:
        "Ip, S., Chung, M., Raman, G., et al. (2007). Breastfeeding and maternal and infant health outcomes in developed countries. Rockville, MD: US Department of Health and Human Services. Available at: http://www.ahrq.gov/downloads/pub/evidence/pdf/brfout/brfout.pdf",
    },
    {
      type: "documentation",
      citation:
        "Kramer, M.S. & Kakuma, R. (2002).Optimal duration of exclusive breastfeeding. [107 refs] Cochrane Database of Systematic Reviews. (1):CD003517.",
    },
    {
      type: "documentation",
      citation:
        "Petrova, A., Hegyi, T., & Mehta, R. (2007). Maternal race/ethnicity and one-month exclusive breastfeeding in association with the in-hospital feeding modality. Breastfeeding Medicine. 2(2):92-8.",
    },
    {
      type: "documentation",
      citation:
        "Shealy, K.R., Li, R., Benton-Davis, S., & Grummer-Strawn, L.M. (2005).The CDC guide to breastfeeding interventions. Atlanta, GA: US Department of Health and Human Services, CDC. Available at: http://www.cdc.gov/breastfeeding/pdf/breastfeeding_interventions.pdf.",
    },
    {
      type: "documentation",
      citation:
        "Taveras, E.M., Li, R., Grummer-Strawn, L., Richardson, M., Marshall, R., Rego, V.H., Miroshnik, I., & Lieu, T.A. (2004). Opinions and practices of clinicians associated with continuation of exclusive breastfeeding. Pediatrics. 113(4):e283-90.",
    },
    {
      type: "documentation",
      citation:
        "US Department of Health and Human Services. (2007). Healthy People 2010 Midcourse Review. Washington, DC: US Department of Health and Human Services. Available at: http://www.healthypeople.gov/2010/data/midcourse/?visit=1.",
    },
    {
      type: "documentation",
      citation:
        "World Health Organization. (1991). Indicators for assessing breastfeeding practices. Geneva, Switzerland: World Health Organization. Available at: http://whqlibdoc.who.int/hq/1991/WHO_CDD_SER_91.14.pdf?ua=1.",
    },
    {
      type: "predecessor",
      resource: "Measure/measure-predecessor-example",
    },
    {
      type: "derived-from",
      resource: "Measure/measure-predecessor-example",
    },
  ],
  library: ["Library/library-exclusive-breastfeeding-cqm-logic"],
  disclaimer:
    "These performance measures are not clinical guidelines and do not establish a standard of medical care, and have not been tested for all potential applications. The measures and specifications are provided without warranty.",
  scoring: {
    coding: [
      {
        code: "proportion",
      },
    ],
  },
  type: [
    {
      coding: [
        {
          code: "process",
        },
      ],
    },
  ],
  rationale:
    "Exclusive breast milk feeding for the first 6 months of neonatal life has long been the expressed goal of World Health Organization (WHO), Department of Health and Human Services (DHHS), American Academy of Pediatrics (AAP) and American College of Obstetricians and Gynecologists (ACOG). ACOG has recently reiterated its position (ACOG, 2007). A recent Cochrane review substantiates the benefits (Kramer et al., 2002). Much evidence has now focused on the prenatal and intrapartum period as critical for the success of exclusive (or any) BF (Centers for Disease Control and Prevention [CDC], 2007; Petrova et al., 2007; Shealy et al., 2005; Taveras et al., 2004). Exclusive breast milk feeding rate during birth hospital stay has been calculated by the California Department of Public Health for the last several years using newborn genetic disease testing data. Healthy People 2010 and the CDC have also been active in promoting this goal.",
  clinicalRecommendationStatement:
    "Exclusive breast milk feeding for the first 6 months of neonatal life can result in numerous long-term health benefits for both mother and newborn and is recommended by a number of national and international organizations. Evidence suggests that the prenatal and intrapartum period is critical for the success of exclusive (or any) breast feeding. Therefore, it is recommended that newborns are fed breast milk only from birth to discharge.",
  improvementNotation: {
    coding: [
      {
        system:
          "http://terminology.hl7.org/CodeSystem/measure-improvement-notation",
        code: "increase",
      },
    ],
  },
  definition: [
    "Gestational age is calculated using the ACOG ReVITALize guidelines with Estimated Due Date (EDD) http://www.acog.org/about_acog/acog_departments/patient_safety_and_quality_improvement/~/media/departments/patient%20safety%20and%20quality%20improvement/201213issuesandrationale-gestationalageterm.pdf. The exam used needs to be the most recent exam associated with this pregnancy",
  ],
  guidance:
    "A discharge to a designated cancer center or children's hospital should be captured as a discharge to an acute care facility. It is acceptable to calculate Gestational Age using the American College of Obstetricians and Gynecologists ReVITALize guidelines, which define Gestational Age as calculated using the best obstetrical Estimated Due Date (EDD) based on the formula: Gestational Age= (280-(EDD-Reference Date))/7 where Reference Date is the date on which you are trying to determine gestational age. For PC-05, Reference Date is the Birth Date. Note however that the calculation may yield a non-whole number and gestational age should be rounded off to the nearest completed week. For example, an infant born on the 5th day of the 36th week (35 weeks and 5/7 days) is at a gestational age of 35 weeks, not 36 weeks.",
  group: [
    {
      id: "PopulationGroup1",
      population: [
        {
          code: {
            coding: [
              {
                code: "initial-population",
              },
            ],
          },
          criteria: {
            language: "text/cql",
            expression: "InitialPopulation1",
          },
        },
        {
          code: {
            coding: [
              {
                code: "denominator",
              },
            ],
          },
          criteria: {
            language: "text/cql",
            expression: "Denominator1",
          },
        },
        {
          code: {
            coding: [
              {
                code: "denominator-exclusions",
              },
            ],
          },
          criteria: {
            language: "text/cql",
            expression: "DenominatorExclusions1",
          },
        },
        {
          code: {
            coding: [
              {
                code: "numerator",
              },
            ],
          },
          criteria: {
            language: "text/cql",
            expression: "Numerator1",
          },
        },
      ],
    },
    {
      id: "PopulationGroup2",
      population: [
        {
          code: {
            coding: [
              {
                code: "initial-population",
              },
            ],
          },
          criteria: {
            language: "text/cql",
            expression: "InitialPopulation2",
          },
        },
        {
          code: {
            coding: [
              {
                code: "denominator",
              },
            ],
          },
          criteria: {
            language: "text/cql",
            expression: "Denominator2",
          },
        },
        {
          code: {
            coding: [
              {
                code: "denominator-exclusion",
              },
            ],
          },
          criteria: {
            language: "text/cql",
            expression: "DenominatorExclusions2",
          },
        },
        {
          code: {
            coding: [
              {
                code: "numerator",
              },
            ],
          },
          criteria: {
            language: "text/cql",
            expression: "Numerator2",
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

export const MeasureHivIndicators: Measure = {
  resourceType: "Measure",
  id: "hiv-indicators",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: hiv-indicators</p><p><b>url</b>: <b>http://ohie.org/Measure/hiv-indicators</b></p><p><b>identifier</b>: hiv-indicators</p><p><b>version</b>: 0.0.0</p><p><b>name</b>: HIV</p><p><b>title</b>: HIV Indicators</p><p><b>status</b>: draft</p><p><b>experimental</b>: true</p><p><b>date</b>: 08/03/2018</p><p><b>publisher</b>: Open HIE</p><p><b>description</b>: This ADX-HIV measure defines a common set of HIV core indicators with data elements and associated stratifiers along with instructions regarding how to leverage these to generate and exchange conformant XML messages. Interoperable message exchange will be valuable to jurisdictions such as Ministries of Health, and WHO, and to health initiatives such as the U.S. President’s Emergency Plan for AIDS Relief (PEPFAR), the Global Fund, UNAIDS, and others.</p><p><b>relatedArtifact</b>: </p><p><b>library</b>: <a>http://ohie.org/Library/hiv-indicators</a></p><p><b>scoring</b>: cohort <span>(Details : {[not stated] code 'cohort' = 'cohort)</span></p><blockquote><p><b>group</b></p><p><b>code</b>: QRPH_ADX_ART1_N <span>(Details : {http://ihe.net/qrph/adx/ code 'QRPH_ADX_ART1_N' = 'QRPH_ADX_ART1_N)</span></p><p><b>description</b>: Number of adults and children newly enrolled on antiretroviral therapy (ART) in the reporting period</p><h3>Populations</h3><table><tr><td>-</td><td><b>Code</b></td><td><b>Criteria</b></td></tr><tr><td>*</td><td>cohort <span>(Details )</span></td><td/></tr></table><h3>Stratifiers</h3><table><tr><td>-</td><td><b>Code</b></td><td><b>Criteria</b></td></tr><tr><td>*</td><td>AGE_GROUP:SEX <span>(Details : {http://ihe.net/qrph/adx/ code 'AGE_GROUP:SEX' = 'AGE_GROUP:SEX)</span></td><td/></tr></table></blockquote><blockquote><p><b>group</b></p><p><b>code</b>: QRPH_ADX_ART1_N_PREG_BF <span>(Details : {http://ihe.net/qrph/adx/ code 'QRPH_ADX_ART1_N_PREG_BF' = 'QRPH_ADX_ART1_N_PREG_BF)</span></p><p><b>description</b>: Number of adults and children newly enrolled on ART in the reporting period_pregnant and breastfeeding</p><h3>Populations</h3><table><tr><td>-</td><td><b>Code</b></td><td><b>Criteria</b></td></tr><tr><td>*</td><td>cohort <span>(Details )</span></td><td/></tr></table><h3>Stratifiers</h3><table><tr><td>-</td><td><b>Code</b></td><td><b>Criteria</b></td></tr><tr><td>*</td><td>PREG_BF <span>(Details : {http://ihe.net/qrph/adx/ code 'PREG_BF' = 'PREG_BF)</span></td><td/></tr></table></blockquote><blockquote><p><b>group</b></p><p><b>code</b>: QRPH_ADX_ART3_N <span>(Details : {http://ihe.net/qrph/adx/ code 'QRPH_ADX_ART3_N' = 'QRPH_ADX_ART3_N)</span></p><p><b>description</b>: Number of adults and children currently receiving antiretroviral therapy (ART)</p><h3>Populations</h3><table><tr><td>-</td><td><b>Code</b></td><td><b>Criteria</b></td></tr><tr><td>*</td><td>cohort <span>(Details )</span></td><td/></tr></table></blockquote><blockquote><p><b>group</b></p><p><b>code</b>: QRPH_ADX_ART5_N <span>(Details : {http://ihe.net/qrph/adx/ code 'QRPH_ADX_ART5_N' = 'QRPH_ADX_ART5_N)</span></p><p><b>description</b>: Number of adults and children who are still on treatment at 12 months after initiating ART</p><h3>Populations</h3><table><tr><td>-</td><td><b>Code</b></td><td><b>Criteria</b></td></tr><tr><td>*</td><td>cohort <span>(Details )</span></td><td/></tr></table><blockquote><p><b>stratifier</b></p><blockquote><p><b>component</b></p><p><b>code</b>: AGE_GROUP <span>(Details : {http://ihe.net/qrph/adx/ code 'AGE_GROUP' = 'AGE_GROUP)</span></p><p><b>criteria</b>: </p></blockquote><blockquote><p><b>component</b></p><p><b>code</b>: SEX <span>(Details : {http://ihe.net/qrph/adx/ code 'SEX' = 'SEX)</span></p><p><b>criteria</b>: </p></blockquote></blockquote></blockquote><blockquote><p><b>group</b></p><p><b>code</b>: QRPH_ADX_ART5_N_PREG_BF <span>(Details : {http://ihe.net/qrph/adx/ code 'QRPH_ADX_ART5_N_PREG_BF' = 'QRPH_ADX_ART5_N_PREG_BF)</span></p><p><b>description</b>: Number of adults and children who are still on treatment at 12 months after initiating ART-pregnant and breastfeeding</p><h3>Populations</h3><table><tr><td>-</td><td><b>Code</b></td><td><b>Criteria</b></td></tr><tr><td>*</td><td>cohort <span>(Details )</span></td><td/></tr></table><h3>Stratifiers</h3><table><tr><td>-</td><td><b>Code</b></td><td><b>Criteria</b></td></tr><tr><td>*</td><td>PREG_BF <span>(Details : {http://ihe.net/qrph/adx/ code 'PREG_BF' = 'PREG_BF)</span></td><td/></tr></table></blockquote><blockquote><p><b>group</b></p><p><b>code</b>: QRPH_ADX_ART5_D <span>(Details : {http://ihe.net/qrph/adx/ code 'QRPH_ADX_ART5_D' = 'QRPH_ADX_ART5_D)</span></p><p><b>description</b>: Number of adults and children who initiated ART in the 12 months prior to the beginning of the reporting period</p><h3>Populations</h3><table><tr><td>-</td><td><b>Code</b></td><td><b>Criteria</b></td></tr><tr><td>*</td><td>cohort <span>(Details )</span></td><td/></tr></table><h3>Stratifiers</h3><table><tr><td>-</td><td><b>Code</b></td><td><b>Criteria</b></td></tr><tr><td>*</td><td>AGE_GROUP:SEX <span>(Details : {http://ihe.net/qrph/adx/ code 'AGE_GROUP:SEX' = 'AGE_GROUP:SEX)</span></td><td/></tr></table></blockquote><blockquote><p><b>group</b></p><p><b>code</b>: QRPH_ADX_MTCT1_D <span>(Details : {http://ihe.net/qrph/adx/ code 'QRPH_ADX_MTCT1_D' = 'QRPH_ADX_MTCT1_D)</span></p><p><b>description</b>: Number of pregnant women who attended ANC or had a facility-based delivery in the reporting period</p><h3>Populations</h3><table><tr><td>-</td><td><b>Code</b></td><td><b>Criteria</b></td></tr><tr><td>*</td><td>cohort <span>(Details )</span></td><td/></tr></table><h3>Stratifiers</h3><table><tr><td>-</td><td><b>Code</b></td><td><b>Criteria</b></td></tr><tr><td>*</td><td>PMTCT_HIV_STATUS <span>(Details : {http://ihe.net/qrph/adx/ code 'PMTCT_HIV_STATUS' = 'PMTCT_HIV_STATUS)</span></td><td/></tr></table></blockquote><blockquote><p><b>group</b></p><p><b>code</b>: QRPH_ADX_MTCT2_D <span>(Details : {http://ihe.net/qrph/adx/ code 'QRPH_ADX_MTCT2_D' = 'QRPH_ADX_MTCT2_D)</span></p><p><b>description</b>: Number of HIV positive pregnant women who attended ANC or had a facility-based delivery within the reporting period</p><h3>Populations</h3><table><tr><td>-</td><td><b>Code</b></td><td><b>Criteria</b></td></tr><tr><td>*</td><td>cohort <span>(Details )</span></td><td/></tr></table></blockquote><blockquote><p><b>group</b></p><p><b>code</b>: QRPH_ADX_MTCT2_N <span>(Details : {http://ihe.net/qrph/adx/ code 'QRPH_ADX_MTCT2_N' = 'QRPH_ADX_MTCT2_N)</span></p><p><b>description</b>: Number of HIV-positive pregnant women who received ART to reduce the risk of mother-to-child-transmission during pregnancy</p><h3>Populations</h3><table><tr><td>-</td><td><b>Code</b></td><td><b>Criteria</b></td></tr><tr><td>*</td><td>cohort <span>(Details )</span></td><td/></tr></table><h3>Stratifiers</h3><table><tr><td>-</td><td><b>Code</b></td><td><b>Criteria</b></td></tr><tr><td>*</td><td>PMTCT_ART_STATUS <span>(Details : {http://ihe.net/qrph/adx/ code 'PMTCT_ART_STATUS' = 'PMTCT_ART_STATUS)</span></td><td/></tr></table></blockquote><blockquote><p><b>group</b></p><p><b>code</b>: QRPH_ADX_VLS3_N <span>(Details : {http://ihe.net/qrph/adx/ code 'QRPH_ADX_VLS3_N' = 'QRPH_ADX_VLS3_N)</span></p><p><b>description</b>: Number of people living with HIV and on ART who have a suppressed viral load results (&lt;1000 copies/mL)</p><h3>Populations</h3><table><tr><td>-</td><td><b>Code</b></td><td><b>Criteria</b></td></tr><tr><td>*</td><td>cohort <span>(Details )</span></td><td/></tr></table><h3>Stratifiers</h3><table><tr><td>-</td><td><b>Code</b></td><td><b>Criteria</b></td></tr><tr><td>*</td><td>AGE_GROUP:SEX <span>(Details : {http://ihe.net/qrph/adx/ code 'AGE_GROUP:SEX' = 'AGE_GROUP:SEX)</span></td><td/></tr></table></blockquote><blockquote><p><b>group</b></p><p><b>code</b>: QRPH_ADX_HTS2_N <span>(Details : {http://ihe.net/qrph/adx/ code 'QRPH_ADX_HTS2_N' = 'QRPH_ADX_HTS2_N)</span></p><p><b>description</b>: Number of individuals who received HIV Testing Services (HTS) and received their test results</p><h3>Populations</h3><table><tr><td>-</td><td><b>Code</b></td><td><b>Criteria</b></td></tr><tr><td>*</td><td>cohort <span>(Details )</span></td><td/></tr></table><h3>Stratifiers</h3><table><tr><td>-</td><td><b>Code</b></td><td><b>Criteria</b></td></tr><tr><td>*</td><td>AGE_GROUP:SEX:HIV_TEST_RESULTS <span>(Details : {http://ihe.net/qrph/adx/ code 'AGE_GROUP:SEX:HIV_TEST_RESULTS' = 'AGE_GROUP:SEX:HIV_TEST_RESULTS)</span></td><td/></tr></table></blockquote><blockquote><p><b>group</b></p><p><b>code</b>: QRPH_ADX_MTCT1_N <span>(Details : {http://ihe.net/qrph/adx/ code 'QRPH_ADX_MTCT1_N' = 'QRPH_ADX_MTCT1_N)</span></p><p><b>description</b>: Number of pregnant women with known HIV status at first antenatal care visit</p><h3>Populations</h3><table><tr><td>-</td><td><b>Code</b></td><td><b>Criteria</b></td></tr><tr><td>*</td><td>cohort <span>(Details )</span></td><td/></tr></table><h3>Stratifiers</h3><table><tr><td>-</td><td><b>Code</b></td><td><b>Criteria</b></td></tr><tr><td>*</td><td>PMTCT_HIV_STATUS <span>(Details : {http://ihe.net/qrph/adx/ code 'PMTCT_HIV_STATUS' = 'PMTCT_HIV_STATUS)</span></td><td/></tr></table></blockquote><blockquote><p><b>group</b></p><p><b>code</b>: QRPH_ADX_VLS3_D <span>(Details : {http://ihe.net/qrph/adx/ code 'QRPH_ADX_VLS3_D' = 'QRPH_ADX_VLS3_D)</span></p><p><b>description</b>: Number of people on ART who had a VL measurement in the past 12 months</p><h3>Populations</h3><table><tr><td>-</td><td><b>Code</b></td><td><b>Criteria</b></td></tr><tr><td>*</td><td>cohort <span>(Details )</span></td><td/></tr></table><h3>Stratifiers</h3><table><tr><td>-</td><td><b>Code</b></td><td><b>Criteria</b></td></tr><tr><td>*</td><td>AGE_GROUP:SEX <span>(Details : {http://ihe.net/qrph/adx/ code 'AGE_GROUP:SEX' = 'AGE_GROUP:SEX)</span></td><td/></tr></table></blockquote></div>",
  },
  url: "http://ohie.org/Measure/hiv-indicators",
  identifier: [
    {
      system: "http://ohie.org/Measure/",
      value: "hiv-indicators",
    },
  ],
  version: "0.0.0",
  name: "HIV",
  title: "HIV Indicators",
  status: "draft",
  experimental: true,
  date: "2018-03-08",
  publisher: "Open HIE",
  description:
    "This ADX-HIV measure defines a common set of HIV core indicators with data elements and associated stratifiers along with instructions regarding how to leverage these to generate and exchange conformant XML messages. Interoperable message exchange will be valuable to jurisdictions such as Ministries of Health, and WHO, and to health initiatives such as the U.S. President’s Emergency Plan for AIDS Relief (PEPFAR), the Global Fund, UNAIDS, and others.",
  relatedArtifact: [
    {
      type: "derived-from",
      url: "http://wiki.ihe.net/index.php/Aggregate_Data_Exchange_-_HIV",
    },
  ],
  library: ["http://ohie.org/Library/hiv-indicators"],
  scoring: {
    coding: [
      {
        code: "cohort",
      },
    ],
  },
  group: [
    {
      code: {
        coding: [
          {
            system: "http://ihe.net/qrph/adx/",
            code: "QRPH_ADX_ART1_N",
          },
        ],
      },
      description:
        "Number of adults and children newly enrolled on antiretroviral therapy (ART) in the reporting period",
      population: [
        {
          code: {
            text: "cohort",
          },
          criteria: {
            language: "text/cql",
            expression:
              "Newly enrolled on antiretroviral therapy (ART) during measurement period",
          },
        },
      ],
      stratifier: [
        {
          code: {
            coding: [
              {
                system: "http://ihe.net/qrph/adx/",
                code: "AGE_GROUP:SEX",
              },
            ],
          },
          criteria: {
            language: "text/cql",
            expression: "Age Group/Sex",
          },
        },
      ],
    },
    {
      code: {
        coding: [
          {
            system: "http://ihe.net/qrph/adx/",
            code: "QRPH_ADX_ART1_N_PREG_BF",
          },
        ],
      },
      description:
        "Number of adults and children newly enrolled on ART in the reporting period_pregnant and breastfeeding",
      population: [
        {
          code: {
            text: "cohort",
          },
          criteria: {
            language: "text/cql",
            expression:
              "Newly enrolled on antiretroviral therapy (ART) during measurement period (pregnant and breastfeeding)",
          },
        },
      ],
      stratifier: [
        {
          code: {
            coding: [
              {
                system: "http://ihe.net/qrph/adx/",
                code: "PREG_BF",
              },
            ],
          },
          criteria: {
            language: "text/cql",
            expression: "Pregnant/Breastfeeding",
          },
        },
      ],
    },
    {
      code: {
        coding: [
          {
            system: "http://ihe.net/qrph/adx/",
            code: "QRPH_ADX_ART3_N",
          },
        ],
      },
      description:
        "Number of adults and children currently receiving antiretroviral therapy (ART)",
      population: [
        {
          code: {
            text: "cohort",
          },
          criteria: {
            language: "text/cql",
            expression:
              "Receiving antiretroviral therapy (ART) during measurement period",
          },
        },
      ],
    },
    {
      code: {
        coding: [
          {
            system: "http://ihe.net/qrph/adx/",
            code: "QRPH_ADX_ART5_N",
          },
        ],
      },
      description:
        "Number of adults and children who are still on treatment at 12 months after initiating ART",
      population: [
        {
          code: {
            text: "cohort",
          },
          criteria: {
            language: "text/cql",
            expression:
              "Receiving antiretroviral therapy (ART) at 12 months after initiating",
          },
        },
      ],
      stratifier: [
        {
          component: [
            {
              code: {
                coding: [
                  {
                    system: "http://ihe.net/qrph/adx/",
                    code: "AGE_GROUP",
                  },
                ],
              },
              criteria: {
                language: "text/cql",
                expression: "Age Group",
              },
            },
            {
              code: {
                coding: [
                  {
                    system: "http://ihe.net/qrph/adx/",
                    code: "SEX",
                  },
                ],
              },
              criteria: {
                language: "text/cql",
                expression: "Sex",
              },
            },
          ],
        },
      ],
    },
    {
      code: {
        coding: [
          {
            system: "http://ihe.net/qrph/adx/",
            code: "QRPH_ADX_ART5_N_PREG_BF",
          },
        ],
      },
      description:
        "Number of adults and children who are still on treatment at 12 months after initiating ART-pregnant and breastfeeding",
      population: [
        {
          code: {
            text: "cohort",
          },
          criteria: {
            language: "text/cql",
            expression:
              "Receiving antiretroviral therapy (ART) at 12 months after initiating (pregnant and breastfeeding)",
          },
        },
      ],
      stratifier: [
        {
          code: {
            coding: [
              {
                system: "http://ihe.net/qrph/adx/",
                code: "PREG_BF",
              },
            ],
          },
          criteria: {
            language: "text/cql",
            expression: "Pregnant/Breastfeeding",
          },
        },
      ],
    },
    {
      code: {
        coding: [
          {
            system: "http://ihe.net/qrph/adx/",
            code: "QRPH_ADX_ART5_D",
          },
        ],
      },
      description:
        "Number of adults and children who initiated ART in the 12 months prior to the beginning of the reporting period",
      population: [
        {
          code: {
            text: "cohort",
          },
          criteria: {
            language: "text/cql",
            expression:
              "Initiated antiretroviral therapy (ART) in the 12 months prior to measurement period",
          },
        },
      ],
      stratifier: [
        {
          code: {
            coding: [
              {
                system: "http://ihe.net/qrph/adx/",
                code: "AGE_GROUP:SEX",
              },
            ],
          },
          criteria: {
            language: "text/cql",
            expression: "Age Group/Sex",
          },
        },
      ],
    },
    {
      code: {
        coding: [
          {
            system: "http://ihe.net/qrph/adx/",
            code: "QRPH_ADX_MTCT1_D",
          },
        ],
      },
      description:
        "Number of pregnant women who attended ANC or had a facility-based delivery in the reporting period",
      population: [
        {
          code: {
            text: "cohort",
          },
          criteria: {
            language: "text/cql",
            expression:
              "Antenatal Care Visit or Live Birth during the Measurement Period",
          },
        },
      ],
      stratifier: [
        {
          code: {
            coding: [
              {
                system: "http://ihe.net/qrph/adx/",
                code: "PMTCT_HIV_STATUS",
              },
            ],
          },
          criteria: {
            language: "text/cql",
            expression: "PMTCT HIV Status",
          },
        },
      ],
    },
    {
      code: {
        coding: [
          {
            system: "http://ihe.net/qrph/adx/",
            code: "QRPH_ADX_MTCT2_D",
          },
        ],
      },
      description:
        "Number of HIV positive pregnant women who attended ANC or had a facility-based delivery within the reporting period",
      population: [
        {
          code: {
            text: "cohort",
          },
          criteria: {
            language: "text/cql",
            expression:
              "Antenatal Care Visit or Live Birth during Measurement Period (HIV Positive)",
          },
        },
      ],
    },
    {
      code: {
        coding: [
          {
            system: "http://ihe.net/qrph/adx/",
            code: "QRPH_ADX_MTCT2_N",
          },
        ],
      },
      description:
        "Number of HIV-positive pregnant women who received ART to reduce the risk of mother-to-child-transmission during pregnancy",
      population: [
        {
          code: {
            text: "cohort",
          },
          criteria: {
            language: "text/cql",
            expression:
              "HIV-positive, pregnant, and receiving antiretroviral therapy (ART) to reduce the risk of mother-to-child-transmission during pregnancy",
          },
        },
      ],
      stratifier: [
        {
          code: {
            coding: [
              {
                system: "http://ihe.net/qrph/adx/",
                code: "PMTCT_ART_STATUS",
              },
            ],
          },
          criteria: {
            language: "text/cql",
            expression: "PMTCT ART Status",
          },
        },
      ],
    },
    {
      code: {
        coding: [
          {
            system: "http://ihe.net/qrph/adx/",
            code: "QRPH_ADX_VLS3_N",
          },
        ],
      },
      description:
        "Number of people living with HIV and on ART who have a suppressed viral load results (<1000 copies/mL)",
      population: [
        {
          code: {
            text: "cohort",
          },
          criteria: {
            language: "text/cql",
            expression:
              "Living with HIV and on ART with suppressed viral load results (<1000 copies/mL)",
          },
        },
      ],
      stratifier: [
        {
          code: {
            coding: [
              {
                system: "http://ihe.net/qrph/adx/",
                code: "AGE_GROUP:SEX",
              },
            ],
          },
          criteria: {
            language: "text/cql",
            expression: "Age Group/Sex",
          },
        },
      ],
    },
    {
      code: {
        coding: [
          {
            system: "http://ihe.net/qrph/adx/",
            code: "QRPH_ADX_HTS2_N",
          },
        ],
      },
      description:
        "Number of individuals who received HIV Testing Services (HTS) and received their test results",
      population: [
        {
          code: {
            text: "cohort",
          },
          criteria: {
            language: "text/cql",
            expression:
              "Received HIV Testing Services (HTS) and Recevied Test Results",
          },
        },
      ],
      stratifier: [
        {
          code: {
            coding: [
              {
                system: "http://ihe.net/qrph/adx/",
                code: "AGE_GROUP:SEX:HIV_TEST_RESULTS",
              },
            ],
          },
          criteria: {
            language: "text/cql",
            expression: "Age Group/Sex/HIV Test Results",
          },
        },
      ],
    },
    {
      code: {
        coding: [
          {
            system: "http://ihe.net/qrph/adx/",
            code: "QRPH_ADX_MTCT1_N",
          },
        ],
      },
      description:
        "Number of pregnant women with known HIV status at first antenatal care visit",
      population: [
        {
          code: {
            text: "cohort",
          },
          criteria: {
            language: "text/cql",
            expression: "HIV Status Known at First Antenatal Care Visit",
          },
        },
      ],
      stratifier: [
        {
          code: {
            coding: [
              {
                system: "http://ihe.net/qrph/adx/",
                code: "PMTCT_HIV_STATUS",
              },
            ],
          },
          criteria: {
            language: "text/cql",
            expression: "PMTCT HIV Status",
          },
        },
      ],
    },
    {
      code: {
        coding: [
          {
            system: "http://ihe.net/qrph/adx/",
            code: "QRPH_ADX_VLS3_D",
          },
        ],
      },
      description:
        "Number of people on ART who had a VL measurement in the past 12 months",
      population: [
        {
          code: {
            text: "cohort",
          },
          criteria: {
            language: "text/cql",
            expression:
              "Receiving antiretroviral therapty (ART) and Viral Load Measurement in the past 12 months",
          },
        },
      ],
      stratifier: [
        {
          code: {
            coding: [
              {
                system: "http://ihe.net/qrph/adx/",
                code: "AGE_GROUP:SEX",
              },
            ],
          },
          criteria: {
            language: "text/cql",
            expression: "Age Group/Sex",
          },
        },
      ],
    },
  ],
} as const;

export const MeasurePredecessorExample: Measure = {
  resourceType: "Measure",
  id: "measure-predecessor-example",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><table class="grid dict"><tr><td><b>Id: </b></td></tr><tr><td style="padding-left: 25px; padding-right: 25px;">Measure/measure-predecessor-example</td></tr></table><p/><table class="grid dict"><tr><td><b>Identifier: </b></td></tr><tr><td style="padding-left: 25px; padding-right: 25px;"><b>value: </b><span>exclusive-breastfeeding-measure</span></td></tr></table><p/><table class="grid dict"><tr><td><b>Title: </b></td></tr><tr><td style="padding-left: 25px; padding-right: 25px;">Exclusive Breastfeeding Measure</td></tr></table><p/><table class="grid dict"><tr><td><b>Status: </b></td></tr><tr><td style="padding-left: 25px; padding-right: 25px;">active</td></tr></table><p/><table class="grid dict"><tr><td><b>Description: </b></td></tr><tr><td style="padding-left: 25px; padding-right: 25px;">Exclusive breastfeeding measure of outcomes for exclusive breastmilk feeding of newborns.</td></tr></table><p/><table class="grid dict"><tr><td><b>Purpose: </b></td></tr><tr><td style="padding-left: 25px; padding-right: 25px;">Exclusive breast milk feeding for the first 6 months of neonatal life can result in numerous long-term health benefits for both mother and newborn and is recommended by a number of national and international organizations. Evidence suggests that the prenatal and intrapartum period is critical for the success of exclusive (or any) breast feeding. Therefore, it is recommended that newborns are fed breast milk only from birth to discharge.</td></tr></table><p/><table class="grid dict"><tr><td><b>Topic: </b></td></tr><tr><td style="padding-right: 25px;"><span style="padding-left: 25px;"><b>text: </b><span>Exclusive Breastfeeding</span><br/></span></td></tr></table><p/><table class="grid dict"><tr><td><b>Library: </b></td></tr><tr><td style="padding-left: 25px; padding-right: 25px;"><b>reference: </b><span>Library/library-exclusive-breastfeeding-cqm-logic</span></td></tr></table><p/><table class="grid dict"><tr><td><b>Type: </b></td></tr><tr><td style="padding-left: 25px; padding-right: 25px;">outcome</td></tr></table><p/><table class="grid dict"><tr><td><b>Group:</b></td></tr><tr><td style="padding-left: 25px; padding-right: 25px;"><b>Identifier:</b><br/><span style="padding-left: 25px;"><b>value: </b><span>Population Group 1</span><br/></span></td></tr><tr><td style="padding-left: 25px; padding-right: 25px;"><b>Population:</b><br/><p style="margin-bottom: 5px; padding-left: 25px;"><b>type:</b><span>initial-population</span></p><p style="margin-bottom: 5px; padding-left: 25px;"><b>Identifier:</b><br/><span style="padding-left: 25px;"><b>value: </b><span>initial-population-1-identifier</span><br/></span></p><p style="margin-bottom: 5px; padding-left: 25px;"><b>criteria: </b><span>InitialPopulation1</span></p></td></tr><tr><td style="padding-left: 25px; padding-right: 25px;"><b>Population:</b><br/><p style="margin-bottom: 5px; padding-left: 25px;"><b>type:</b><span>denominator</span></p><p style="margin-bottom: 5px; padding-left: 25px;"><b>Identifier:</b><br/><span style="padding-left: 25px;"><b>value: </b><span>denominator-1-identifier</span><br/></span></p><p style="margin-bottom: 5px; padding-left: 25px;"><b>criteria: </b><span>Denominator1</span></p></td></tr><tr><td style="padding-left: 25px; padding-right: 25px;"><b>Population:</b><br/><p style="margin-bottom: 5px; padding-left: 25px;"><b>type:</b><span>denominator-exclusion</span></p><p style="margin-bottom: 5px; padding-left: 25px;"><b>Identifier:</b><br/><span style="padding-left: 25px;"><b>value: </b><span>denominator-exclusions-1-identifier</span><br/></span></p><p style="margin-bottom: 5px; padding-left: 25px;"><b>criteria: </b><span>DenominatorExclusions1</span></p></td></tr><tr><td style="padding-left: 25px; padding-right: 25px;"><b>Population:</b><br/><p style="margin-bottom: 5px; padding-left: 25px;"><b>type:</b><span>numerator</span></p><p style="margin-bottom: 5px; padding-left: 25px;"><b>Identifier:</b><br/><span style="padding-left: 25px;"><b>value: </b><span>numerator-1-identifier</span><br/></span></p><p style="margin-bottom: 5px; padding-left: 25px;"><b>criteria: </b><span>Numerator1</span></p></td></tr></table><table class="grid dict"><tr><td><b>Group:</b></td></tr><tr><td style="padding-left: 25px; padding-right: 25px;"><b>Identifier:</b><br/><span style="padding-left: 25px;"><b>value: </b><span>Population Group 2</span><br/></span></td></tr><tr><td style="padding-left: 25px; padding-right: 25px;"><b>Population:</b><br/><p style="margin-bottom: 5px; padding-left: 25px;"><b>type:</b><span>initial-population</span></p><p style="margin-bottom: 5px; padding-left: 25px;"><b>Identifier:</b><br/><span style="padding-left: 25px;"><b>value: </b><span>initial-population-2-identifier</span><br/></span></p><p style="margin-bottom: 5px; padding-left: 25px;"><b>criteria: </b><span>InitialPopulation2</span></p></td></tr><tr><td style="padding-left: 25px; padding-right: 25px;"><b>Population:</b><br/><p style="margin-bottom: 5px; padding-left: 25px;"><b>type:</b><span>denominator</span></p><p style="margin-bottom: 5px; padding-left: 25px;"><b>Identifier:</b><br/><span style="padding-left: 25px;"><b>value: </b><span>denominator-2-identifier</span><br/></span></p><p style="margin-bottom: 5px; padding-left: 25px;"><b>criteria: </b><span>Denominator2</span></p></td></tr><tr><td style="padding-left: 25px; padding-right: 25px;"><b>Population:</b><br/><p style="margin-bottom: 5px; padding-left: 25px;"><b>type:</b><span>denominator-exclusion</span></p><p style="margin-bottom: 5px; padding-left: 25px;"><b>Identifier:</b><br/><span style="padding-left: 25px;"><b>value: </b><span>denominator-exclusions-2-identifier</span><br/></span></p><p style="margin-bottom: 5px; padding-left: 25px;"><b>criteria: </b><span>DenominatorExclusions2</span></p></td></tr><tr><td style="padding-left: 25px; padding-right: 25px;"><b>Population:</b><br/><p style="margin-bottom: 5px; padding-left: 25px;"><b>type:</b><span>numerator</span></p><p style="margin-bottom: 5px; padding-left: 25px;"><b>Identifier:</b><br/><span style="padding-left: 25px;"><b>value: </b><span>numerator-2-identifier</span><br/></span></p><p style="margin-bottom: 5px; padding-left: 25px;"><b>criteria: </b><span>Numerator2</span></p></td></tr></table></div>',
  },
  identifier: [
    {
      use: "official",
      value: "exclusive-breastfeeding-measure",
    },
  ],
  version: "4.0.1",
  title: "Exclusive Breastfeeding Measure",
  status: "active",
  date: "2014-03-08",
  description:
    "Exclusive breastfeeding measure of outcomes for exclusive breastmilk feeding of newborns.",
  purpose: "Measure of newborns who were fed breast milk only since birth",
  topic: [
    {
      text: "Exclusive Breastfeeding",
    },
  ],
  relatedArtifact: [
    {
      type: "documentation",
      citation:
        "American Academy of Pediatrics. (2005). Section on Breastfeeding. Policy Statement:Breastfeeding and the Use of Human Milk. Pediatrics.115:496-506.",
    },
    {
      type: "documentation",
      citation:
        "American College of Obstetricians and Gynecologists. (Feb. 2007). Committee on Obstetric Practice and Committee on Health Care for Underserved Women. Breastfeeding: Maternal and Infant Aspects. ACOG Committee Opinion 361.",
    },
    {
      type: "documentation",
      citation:
        "California Department of Public Health. (2006). Genetic Disease Branch. California In-Hospital Breastfeeding as Indicated on the Newborn Screening Test Form, Statewide, County and Hospital of Occurrence: Available at: http://www.cdph.ca.gov/data/statistics/Pages/BreastfeedingStatistics.aspx.",
    },
    {
      type: "documentation",
      citation:
        "Centers for Disease Control and Prevention. (Aug 3, 2007). Breastfeeding trends and updated national health objectives for exclusive breastfeeding--United States birth years 2000-2004. MMWR - Morbidity & Mortality Weekly Report. 56(30):760-3.",
    },
    {
      type: "documentation",
      citation:
        "Centers for Disease Control and Prevention. (2014). Division of Nutrition, Physical Activity and Obesity. Breastfeeding Report Card. Available at: http://www.cdc.gov/breastfeeding/pdf/2014breastfeedingreportcard.pdf",
    },
    {
      type: "documentation",
      citation:
        "Ip, S., Chung, M., Raman, G., et al. (2007). Breastfeeding and maternal and infant health outcomes in developed countries. Rockville, MD: US Department of Health and Human Services. Available at: http://www.ahrq.gov/downloads/pub/evidence/pdf/brfout/brfout.pdf",
    },
    {
      type: "documentation",
      citation:
        "Kramer, M.S. & Kakuma, R. (2002).Optimal duration of exclusive breastfeeding. [107 refs] Cochrane Database of Systematic Reviews. (1):CD003517.",
    },
    {
      type: "documentation",
      citation:
        "Petrova, A., Hegyi, T., & Mehta, R. (2007). Maternal race/ethnicity and one-month exclusive breastfeeding in association with the in-hospital feeding modality. Breastfeeding Medicine. 2(2):92-8.",
    },
    {
      type: "documentation",
      citation:
        "Shealy, K.R., Li, R., Benton-Davis, S., & Grummer-Strawn, L.M. (2005).The CDC guide to breastfeeding interventions. Atlanta, GA: US Department of Health and Human Services, CDC. Available at: http://www.cdc.gov/breastfeeding/pdf/breastfeeding_interventions.pdf.",
    },
    {
      type: "documentation",
      citation:
        "Taveras, E.M., Li, R., Grummer-Strawn, L., Richardson, M., Marshall, R., Rego, V.H., Miroshnik, I., & Lieu, T.A. (2004). Opinions and practices of clinicians associated with continuation of exclusive breastfeeding. Pediatrics. 113(4):e283-90.",
    },
    {
      type: "documentation",
      citation:
        "US Department of Health and Human Services. (2007). Healthy People 2010 Midcourse Review. Washington, DC: US Department of Health and Human Services. Available at: http://www.healthypeople.gov/2010/data/midcourse/?visit=1.",
    },
    {
      type: "documentation",
      citation:
        "World Health Organization. (1991). Indicators for assessing breastfeeding practices. Geneva, Switzerland: World Health Organization. Available at: http://whqlibdoc.who.int/hq/1991/WHO_CDD_SER_91.14.pdf?ua=1.",
    },
    {
      type: "successor",
      resource: "Measure/measure-exclusive-breastfeeding",
    },
  ],
  library: ["Library/library-exclusive-breastfeeding-cqm-logic"],
  disclaimer:
    "These performance measures are not clinical guidelines and do not establish a standard of medical care, and have not been tested for all potential applications. The measures and specifications are provided without warranty.",
  scoring: {
    coding: [
      {
        code: "proportion",
      },
    ],
  },
  type: [
    {
      coding: [
        {
          code: "process",
        },
      ],
    },
  ],
  rationale:
    "Exclusive breast milk feeding for the first 6 months of neonatal life has long been the expressed goal of World Health Organization (WHO), Department of Health and Human Services (DHHS), American Academy of Pediatrics (AAP) and American College of Obstetricians and Gynecologists (ACOG). ACOG has recently reiterated its position (ACOG, 2007). A recent Cochrane review substantiates the benefits (Kramer et al., 2002). Much evidence has now focused on the prenatal and intrapartum period as critical for the success of exclusive (or any) BF (Centers for Disease Control and Prevention [CDC], 2007; Petrova et al., 2007; Shealy et al., 2005; Taveras et al., 2004). Exclusive breast milk feeding rate during birth hospital stay has been calculated by the California Department of Public Health for the last several years using newborn genetic disease testing data. Healthy People 2010 and the CDC have also been active in promoting this goal.",
  clinicalRecommendationStatement:
    "Exclusive breast milk feeding for the first 6 months of neonatal life can result in numerous long-term health benefits for both mother and newborn and is recommended by a number of national and international organizations. Evidence suggests that the prenatal and intrapartum period is critical for the success of exclusive (or any) breast feeding. Therefore, it is recommended that newborns are fed breast milk only from birth to discharge.",
  improvementNotation: {
    coding: [
      {
        system:
          "http://terminology.hl7.org/CodeSystem/measure-improvement-notation",
        code: "increase",
      },
    ],
  },
  guidance:
    "A discharge to a designated cancer center or children's hospital should be captured as a discharge to an acute care facility. It is acceptable to calculate Gestational Age using the American College of Obstetricians and Gynecologists ReVITALize guidelines, which define Gestational Age as calculated using the best obstetrical Estimated Due Date (EDD) based on the formula: Gestational Age= (280-(EDD-Reference Date))/7 where Reference Date is the date on which you are trying to determine gestational age. For PC-05, Reference Date is the Birth Date. Note however that the calculation may yield a non-whole number and gestational age should be rounded off to the nearest completed week. For example, an infant born on the 5th day of the 36th week (35 weeks and 5/7 days) is at a gestational age of 35 weeks, not 36 weeks.",
  group: [
    {
      id: "PopulationGroup1",
      population: [
        {
          code: {
            coding: [
              {
                code: "initial-population",
              },
            ],
          },
          criteria: {
            language: "text/cql",
            expression: "InitialPopulation1",
          },
        },
        {
          code: {
            coding: [
              {
                code: "denominator",
              },
            ],
          },
          criteria: {
            language: "text/cql",
            expression: "Denominator1",
          },
        },
        {
          code: {
            coding: [
              {
                code: "denominator-exclusions",
              },
            ],
          },
          criteria: {
            language: "text/cql",
            expression: "DenominatorExclusions1",
          },
        },
        {
          code: {
            coding: [
              {
                code: "numerator",
              },
            ],
          },
          criteria: {
            language: "text/cql",
            expression: "Numerator1",
          },
        },
      ],
    },
    {
      id: "PopulationGroup2",
      population: [
        {
          code: {
            coding: [
              {
                code: "initial-population",
              },
            ],
          },
          criteria: {
            language: "text/cql",
            expression: "InitialPopulation2",
          },
        },
        {
          code: {
            coding: [
              {
                code: "denominator",
              },
            ],
          },
          criteria: {
            language: "text/cql",
            expression: "Denominator2",
          },
        },
        {
          code: {
            coding: [
              {
                code: "denominator-exclusion",
              },
            ],
          },
          criteria: {
            language: "text/cql",
            expression: "DenominatorExclusions2",
          },
        },
        {
          code: {
            coding: [
              {
                code: "numerator",
              },
            ],
          },
          criteria: {
            language: "text/cql",
            expression: "Numerator2",
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
