import type { Observation } from "../../src/v4.0.1/observation/types";

export const ObservationDecimal: Observation = {
  resourceType: "Observation",
  id: "decimal",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: decimal</p><p><b>status</b>: final</p><p><b>code</b>: Decimal Testing Observation <span>(Details )</span></p><blockquote><p><b>component</b></p><p><b>code</b>: Component <span>(Details )</span></p><p><b>value</b>: 1.0 g</p></blockquote><blockquote><p><b>component</b></p><p><b>code</b>: Component <span>(Details )</span></p><p><b>value</b>: 1.00 g</p></blockquote><blockquote><p><b>component</b></p><p><b>code</b>: Component <span>(Details )</span></p><p><b>value</b>: 1.0 g</p></blockquote><blockquote><p><b>component</b></p><p><b>code</b>: Component <span>(Details )</span></p><p><b>value</b>: 1E-22 g</p></blockquote><blockquote><p><b>component</b></p><p><b>code</b>: Component <span>(Details )</span></p><p><b>value</b>: 1000000000000000000 g</p></blockquote><blockquote><p><b>component</b></p><p><b>code</b>: Component <span>(Details )</span></p><p><b>value</b>: 1.000000000000000000E-245 g</p></blockquote><blockquote><p><b>component</b></p><p><b>code</b>: Component <span>(Details )</span></p><p><b>value</b>: -1.000000000000000000E+245 g</p></blockquote></div>',
  },
  status: "final",
  code: {
    text: "Decimal Testing Observation",
  },
  component: [
    {
      code: {
        text: "Component",
      },
      valueQuantity: {
        value: 1,
        unit: "g",
      },
    },
    {
      code: {
        text: "Component",
      },
      valueQuantity: {
        value: 1,
        unit: "g",
      },
    },
    {
      code: {
        text: "Component",
      },
      valueQuantity: {
        value: 1,
        unit: "g",
      },
    },
    {
      code: {
        text: "Component",
      },
      valueQuantity: {
        value: 1e-22,
        unit: "g",
      },
    },
    {
      code: {
        text: "Component",
      },
      valueQuantity: {
        value: 1000000000000000000,
        unit: "g",
      },
    },
    {
      code: {
        text: "Component",
      },
      valueQuantity: {
        value: 1e-245,
        unit: "g",
      },
    },
    {
      code: {
        text: "Component",
      },
      valueQuantity: {
        value: -1e245,
        unit: "g",
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

export const ObservationExample10minuteApgarScore: Observation = {
  resourceType: "Observation",
  id: "10minute-apgar-score",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: 10minute-apgar-score</p><p><b>contained</b>: </p><p><b>status</b>: final</p><p><b>category</b>: Survey <span>(Details : {http://terminology.hl7.org/CodeSystem/observation-category code 'survey' = 'Survey', given as 'Survey'})</span></p><p><b>code</b>: 10 minute Apgar Score <span>(Details : {LOINC code '9271-8' = '10 minute Apgar Score', given as '10 minute Apgar Score'}; {SNOMED CT code '169922007' = 'Apgar at 10 minutes', given as 'Apgar at 10 minutes'})</span></p><p><b>subject</b>: id: newborn; 12345; active; Peter James Chalmers ; gender: male; birthDate: 18/05/2016</p><p><b>effective</b>: 18/05/2016 10:33:22 PM</p><p><b>performer</b>: <a>Practitioner/example</a></p><p><b>value</b>: 10 {score}<span> (Details: UCUM code {score} = '{score}')</span></p><blockquote><p><b>component</b></p><p><b>code</b>: Apgar color score <span>(Details : {LOINC code '32401-2' = '10 minute Apgar Color', given as '10 minute Apgar Color'}; {SNOMED CT code '249227004' = 'Apgar color score', given as 'Apgar color score'})</span></p><p><b>value</b>: 2. Good color all over <span>(Details : {LOINC code 'LA6724-4' = 'Good color all over', given as 'Good color all over'}; {http://acme.ped/apgarcolor code '2' = '2)</span></p></blockquote><blockquote><p><b>component</b></p><p><b>code</b>: Apgar respiratory effort score <span>(Details : {LOINC code '32402-0' = '10 minute Apgar Heart rate', given as '10 minute Apgar Heart Rate'}; {SNOMED CT code '249223000' = 'Apgar heart rate score', given as 'Apgar heart rate score'})</span></p><p><b>value</b>: 2. At least 100 beats per minute <span>(Details : {LOINC code 'LA6718-6' = 'At least 100 beats per minute', given as 'At least 100 beats per minute'}; {http://acme.ped/apgarheartrate code '2' = '2)</span></p></blockquote><blockquote><p><b>component</b></p><p><b>code</b>: Apgar response to stimulus score <span>(Details : {LOINC code '32404-6' = '10 minute Apgar Reflex irritability', given as '10 minute Apgar Reflex Irritability'}; {SNOMED CT code '249226008' = 'Apgar response to stimulus score', given as 'Apgar response to stimulus score'})</span></p><p><b>value</b>: 2. Grimace and pulling away, cough, or sneeze during suctioning <span>(Details : {LOINC code 'LA6721-0' = 'Grimace and pulling away, cough, or sneeze during suctioning', given as 'Grimace and pulling away, cough, or sneeze during suctioning'}; {http://acme.ped/apgarreflexirritability code '2' = '2)</span></p></blockquote><blockquote><p><b>component</b></p><p><b>code</b>: Apgar muscle tone score <span>(Details : {LOINC code '32403-8' = '10 minute Apgar Muscle tone', given as '10 minute Apgar Muscle Tone'}; {SNOMED CT code '249225007' = 'Apgar muscle tone score', given as 'Apgar muscle tone score'})</span></p><p><b>value</b>: 2. Active motion <span>(Details : {LOINC code 'LA6715-2' = 'Active motion', given as 'Active motion '}; {http://acme.ped/apgarmuscletone code '2' = '2)</span></p></blockquote><blockquote><p><b>component</b></p><p><b>code</b>: Apgar respiratory effort score <span>(Details : {LOINC code '32405-3' = '10 minute Apgar Respiratory effort', given as '10 minute Apgar Respiratory effort'}; {SNOMED CT code '249224006' = 'Apgar respiratory effort score', given as 'Apgar respiratory effort score'})</span></p><p><b>value</b>: 2. Good, strong cry; normal rate and effort of breathing <span>(Details : {LOINC code 'LA6727-7' = 'Good, strong cry; normal rate and effort of breathing', given as 'Good, strong cry; normal rate and effort of breathing    '}; {http://acme.ped/apgarrespiratoryeffort code '2' = '2)</span></p></blockquote></div>",
  },
  contained: [
    {
      resourceType: "Patient",
      id: "newborn",
      identifier: [
        {
          system: "http://acmehealthcare/org/mrns",
          value: "12345",
        },
      ],
      active: true,
      name: [
        {
          family: "Chalmers",
          given: ["Peter", "James"],
        },
      ],
      gender: "male",
      birthDate: "2016-05-18",
      _birthDate: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/patient-birthTime",
            valueDateTime: "2016-05-18T10:28:45Z",
          },
        ],
      },
    },
  ],
  status: "final",
  category: [
    {
      coding: [
        {
          system: "http://terminology.hl7.org/CodeSystem/observation-category",
          code: "survey",
          display: "Survey",
        },
      ],
      text: "Survey",
    },
  ],
  code: {
    coding: [
      {
        system: "http://loinc.org",
        code: "9271-8",
        display: "10 minute Apgar Score",
      },
      {
        system: "http://snomed.info/sct",
        code: "169922007",
        display: "Apgar at 10 minutes",
      },
    ],
    text: "10 minute Apgar Score",
  },
  subject: {
    reference: "#newborn",
  },
  effectiveDateTime: "2016-05-18T22:33:22Z",
  performer: [
    {
      reference: "Practitioner/example",
    },
  ],
  valueQuantity: {
    value: 10,
    system: "http://unitsofmeasure.org",
    code: "{score}",
  },
  component: [
    {
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "32401-2",
            display: "10 minute Apgar Color",
          },
          {
            system: "http://snomed.info/sct",
            code: "249227004",
            display: "Apgar color score",
          },
        ],
        text: "Apgar color score",
      },
      valueCodeableConcept: {
        coding: [
          {
            extension: [
              {
                url: "http://hl7.org/fhir/StructureDefinition/ordinalValue",
                valueDecimal: 2,
              },
            ],
            system: "http://loinc.org",
            code: "LA6724-4",
            display: "Good color all over",
          },
          {
            system: "http://acme.ped/apgarcolor",
            code: "2",
          },
        ],
        text: "2. Good color all over",
      },
    },
    {
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "32402-0",
            display: "10 minute Apgar Heart Rate",
          },
          {
            system: "http://snomed.info/sct",
            code: "249223000",
            display: "Apgar heart rate score",
          },
        ],
        text: "Apgar respiratory effort score",
      },
      valueCodeableConcept: {
        coding: [
          {
            extension: [
              {
                url: "http://hl7.org/fhir/StructureDefinition/ordinalValue",
                valueDecimal: 2,
              },
            ],
            system: "http://loinc.org",
            code: "LA6718-6",
            display: "At least 100 beats per minute",
          },
          {
            system: "http://acme.ped/apgarheartrate",
            code: "2",
          },
        ],
        text: "2. At least 100 beats per minute",
      },
    },
    {
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "32404-6",
            display: "10 minute Apgar Reflex Irritability",
          },
          {
            system: "http://snomed.info/sct",
            code: "249226008",
            display: "Apgar response to stimulus score",
          },
        ],
        text: "Apgar response to stimulus score",
      },
      valueCodeableConcept: {
        coding: [
          {
            extension: [
              {
                url: "http://hl7.org/fhir/StructureDefinition/ordinalValue",
                valueDecimal: 2,
              },
            ],
            system: "http://loinc.org",
            code: "LA6721-0",
            display:
              "Grimace and pulling away, cough, or sneeze during suctioning",
          },
          {
            system: "http://acme.ped/apgarreflexirritability",
            code: "2",
          },
        ],
        text: "2. Grimace and pulling away, cough, or sneeze during suctioning",
      },
    },
    {
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "32403-8",
            display: "10 minute Apgar Muscle Tone",
          },
          {
            system: "http://snomed.info/sct",
            code: "249225007",
            display: "Apgar muscle tone score",
          },
        ],
        text: "Apgar muscle tone score",
      },
      valueCodeableConcept: {
        coding: [
          {
            extension: [
              {
                url: "http://hl7.org/fhir/StructureDefinition/ordinalValue",
                valueDecimal: 2,
              },
            ],
            system: "http://loinc.org",
            code: "LA6715-2",
            display: "Active motion ",
          },
          {
            system: "http://acme.ped/apgarmuscletone",
            code: "2",
          },
        ],
        text: "2. Active motion",
      },
    },
    {
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "32405-3",
            display: "10 minute Apgar Respiratory effort",
          },
          {
            system: "http://snomed.info/sct",
            code: "249224006",
            display: "Apgar respiratory effort score",
          },
        ],
        text: "Apgar respiratory effort score",
      },
      valueCodeableConcept: {
        coding: [
          {
            extension: [
              {
                url: "http://hl7.org/fhir/StructureDefinition/ordinalValue",
                valueDecimal: 2,
              },
            ],
            system: "http://loinc.org",
            code: "LA6727-7",
            display:
              "Good, strong cry; normal rate and effort of breathing    ",
          },
          {
            system: "http://acme.ped/apgarrespiratoryeffort",
            code: "2",
          },
        ],
        text: "2. Good, strong cry; normal rate and effort of breathing",
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

export const ObservationExample1minuteApgarScore: Observation = {
  resourceType: "Observation",
  id: "1minute-apgar-score",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: 1minute-apgar-score</p><p><b>contained</b>: </p><p><b>status</b>: final</p><p><b>category</b>: Survey <span>(Details : {http://terminology.hl7.org/CodeSystem/observation-category code 'survey' = 'Survey', given as 'Survey'})</span></p><p><b>code</b>: 1 minute Apgar Score <span>(Details : {LOINC code '9272-6' = '1 minute Apgar Score', given as '1 minute Apgar Score'}; {SNOMED CT code '169895004' = 'Apgar at 1 minute', given as 'Apgar at 1 minute'})</span></p><p><b>subject</b>: id: newborn; 12345; active; Peter James Chalmers ; gender: male; birthDate: 18/05/2016</p><p><b>effective</b>: 18/05/2016 10:33:22 PM</p><p><b>performer</b>: <a>Practitioner/example</a></p><p><b>value</b>: 0 {score}<span> (Details: UCUM code {score} = '{score}')</span></p><blockquote><p><b>component</b></p><p><b>code</b>: Apgar color score <span>(Details : {LOINC code '32406-1' = '1 minute Apgar Color', given as '1 minute Apgar Color'}; {SNOMED CT code '249227004' = 'Apgar color score', given as 'Apgar color score'})</span></p><p><b>value</b>: 0. The baby's whole body is completely bluish-gray or pale <span>(Details : {LOINC code 'LA6722-8' = 'The baby's whole body is completely bluish-gray or pale', given as 'The baby's whole body is completely bluish-gray or pale'}; {http://acme.ped/apgarcolor code '0' = '0)</span></p></blockquote><blockquote><p><b>component</b></p><p><b>code</b>: Apgar respiratory effort score <span>(Details : {LOINC code '32407-9' = '1 minute Apgar Heart rate', given as '1 minute Apgar Heart Rate'}; {SNOMED CT code '249223000' = 'Apgar heart rate score', given as 'Apgar heart rate score'})</span></p><p><b>value</b>: 0. No heart rate <span>(Details : {LOINC code 'LA6716-0' = 'No heart rate', given as 'No heart rate'}; {http://acme.ped/apgarheartrate code '0' = '0)</span></p></blockquote><blockquote><p><b>component</b></p><p><b>code</b>: Apgar response to stimulus score <span>(Details : {LOINC code '32409-5' = '1 minute Apgar Reflex irritability', given as '1 minute Apgar Reflex Irritability'}; {SNOMED CT code '249226008' = 'Apgar response to stimulus score', given as 'Apgar response to stimulus score'})</span></p><p><b>value</b>: 0. No response to airways being suctioned <span>(Details : {LOINC code 'LA6719-4' = 'No response to airways being suctioned', given as 'No response to airways being suctioned'}; {http://acme.ped/apgarreflexirritability code '0' = '0)</span></p></blockquote><blockquote><p><b>component</b></p><p><b>code</b>: Apgar muscle tone score <span>(Details : {LOINC code '32408-7' = '1 minute Apgar Muscle tone', given as '1 minute Apgar Muscle Tone'}; {SNOMED CT code '249225007' = 'Apgar muscle tone score', given as 'Apgar muscle tone score'})</span></p><p><b>value</b>: 0. Limp; no movement <span>(Details : {LOINC code 'LA6713-7' = 'Limp; no movement', given as 'Limp; no movement'}; {http://acme.ped/apgarmuscletone code '0' = '0)</span></p></blockquote><blockquote><p><b>component</b></p><p><b>code</b>: Apgar respiratory effort score <span>(Details : {LOINC code '32410-3' = '1 minute Apgar Respiratory effort', given as '1 minute Apgar Respiratory effort'}; {SNOMED CT code '249224006' = 'Apgar respiratory effort score', given as 'Apgar respiratory effort score'})</span></p><p><b>value</b>: 0. Not breathing <span>(Details : {LOINC code 'LA6725-1' = 'Not breathing', given as 'Not breathing'}; {http://acme.ped/apgarrespiratoryeffort code '0' = '0)</span></p></blockquote></div>",
  },
  contained: [
    {
      resourceType: "Patient",
      id: "newborn",
      identifier: [
        {
          system: "http://acmehealthcare/org/mrns",
          value: "12345",
        },
      ],
      active: true,
      name: [
        {
          family: "Chalmers",
          given: ["Peter", "James"],
        },
      ],
      gender: "male",
      birthDate: "2016-05-18",
      _birthDate: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/patient-birthTime",
            valueDateTime: "2016-05-18T10:28:45Z",
          },
        ],
      },
    },
  ],
  status: "final",
  category: [
    {
      coding: [
        {
          system: "http://terminology.hl7.org/CodeSystem/observation-category",
          code: "survey",
          display: "Survey",
        },
      ],
      text: "Survey",
    },
  ],
  code: {
    coding: [
      {
        system: "http://loinc.org",
        code: "9272-6",
        display: "1 minute Apgar Score",
      },
      {
        system: "http://snomed.info/sct",
        code: "169895004",
        display: "Apgar at 1 minute",
      },
    ],
    text: "1 minute Apgar Score",
  },
  subject: {
    reference: "#newborn",
  },
  effectiveDateTime: "2016-05-18T22:33:22Z",
  performer: [
    {
      reference: "Practitioner/example",
    },
  ],
  valueQuantity: {
    value: 0,
    system: "http://unitsofmeasure.org",
    code: "{score}",
  },
  component: [
    {
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "32406-1",
            display: "1 minute Apgar Color",
          },
          {
            system: "http://snomed.info/sct",
            code: "249227004",
            display: "Apgar color score",
          },
        ],
        text: "Apgar color score",
      },
      valueCodeableConcept: {
        coding: [
          {
            extension: [
              {
                url: "http://hl7.org/fhir/StructureDefinition/ordinalValue",
                valueDecimal: 0,
              },
            ],
            system: "http://loinc.org",
            code: "LA6722-8",
            display: "The baby's whole body is completely bluish-gray or pale",
          },
          {
            system: "http://acme.ped/apgarcolor",
            code: "0",
          },
        ],
        text: "0. The baby's whole body is completely bluish-gray or pale",
      },
    },
    {
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "32407-9",
            display: "1 minute Apgar Heart Rate",
          },
          {
            system: "http://snomed.info/sct",
            code: "249223000",
            display: "Apgar heart rate score",
          },
        ],
        text: "Apgar respiratory effort score",
      },
      valueCodeableConcept: {
        coding: [
          {
            extension: [
              {
                url: "http://hl7.org/fhir/StructureDefinition/ordinalValue",
                valueDecimal: 0,
              },
            ],
            system: "http://loinc.org",
            code: "LA6716-0",
            display: "No heart rate",
          },
          {
            system: "http://acme.ped/apgarheartrate",
            code: "0",
          },
        ],
        text: "0. No heart rate",
      },
    },
    {
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "32409-5",
            display: "1 minute Apgar Reflex Irritability",
          },
          {
            system: "http://snomed.info/sct",
            code: "249226008",
            display: "Apgar response to stimulus score",
          },
        ],
        text: "Apgar response to stimulus score",
      },
      valueCodeableConcept: {
        coding: [
          {
            extension: [
              {
                url: "http://hl7.org/fhir/StructureDefinition/ordinalValue",
                valueDecimal: 0,
              },
            ],
            system: "http://loinc.org",
            code: "LA6719-4",
            display: "No response to airways being suctioned",
          },
          {
            system: "http://acme.ped/apgarreflexirritability",
            code: "0",
          },
        ],
        text: "0. No response to airways being suctioned",
      },
    },
    {
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "32408-7",
            display: "1 minute Apgar Muscle Tone",
          },
          {
            system: "http://snomed.info/sct",
            code: "249225007",
            display: "Apgar muscle tone score",
          },
        ],
        text: "Apgar muscle tone score",
      },
      valueCodeableConcept: {
        coding: [
          {
            extension: [
              {
                url: "http://hl7.org/fhir/StructureDefinition/ordinalValue",
                valueDecimal: 0,
              },
            ],
            system: "http://loinc.org",
            code: "LA6713-7",
            display: "Limp; no movement",
          },
          {
            system: "http://acme.ped/apgarmuscletone",
            code: "0",
          },
        ],
        text: "0. Limp; no movement",
      },
    },
    {
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "32410-3",
            display: "1 minute Apgar Respiratory effort",
          },
          {
            system: "http://snomed.info/sct",
            code: "249224006",
            display: "Apgar respiratory effort score",
          },
        ],
        text: "Apgar respiratory effort score",
      },
      valueCodeableConcept: {
        coding: [
          {
            extension: [
              {
                url: "http://hl7.org/fhir/StructureDefinition/ordinalValue",
                valueDecimal: 0,
              },
            ],
            system: "http://loinc.org",
            code: "LA6725-1",
            display: "Not breathing",
          },
          {
            system: "http://acme.ped/apgarrespiratoryeffort",
            code: "0",
          },
        ],
        text: "0. Not breathing",
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

export const ObservationExample20minuteApgarScore: Observation = {
  resourceType: "Observation",
  id: "20minute-apgar-score",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: 20minute-apgar-score</p><p><b>contained</b>: </p><p><b>status</b>: final</p><p><b>category</b>: Survey <span>(Details : {http://terminology.hl7.org/CodeSystem/observation-category code 'survey' = 'Survey', given as 'Survey'})</span></p><p><b>code</b>: 20 minute Apgar Score <span>(Details : {SNOMED CT code '443849008' = 'Apgar score at 20 minutes', given as 'Apgar score at 20 minutes'})</span></p><p><b>subject</b>: id: newborn; 12345; active; Peter James Chalmers ; gender: male; birthDate: 18/05/2016</p><p><b>effective</b>: 18/05/2016 10:33:22 PM</p><p><b>performer</b>: <a>Practitioner/example</a></p><p><b>value</b>: 10 {score}<span> (Details: UCUM code {score} = '{score}')</span></p><blockquote><p><b>component</b></p><p><b>code</b>: Apgar color score <span>(Details : {SNOMED CT code '249227004' = 'Apgar color score', given as 'Apgar color score'})</span></p><p><b>value</b>: 2. Good color all over <span>(Details : {LOINC code 'LA6724-4' = 'Good color all over', given as 'Good color all over'}; {http://acme.ped/apgarcolor code '2' = '2)</span></p></blockquote><blockquote><p><b>component</b></p><p><b>code</b>: Apgar respiratory effort score <span>(Details : {SNOMED CT code '249223000' = 'Apgar heart rate score', given as 'Apgar heart rate score'})</span></p><p><b>value</b>: 2. At least 100 beats per minute <span>(Details : {LOINC code 'LA6718-6' = 'At least 100 beats per minute', given as 'At least 100 beats per minute'}; {http://acme.ped/apgarheartrate code '2' = '2)</span></p></blockquote><blockquote><p><b>component</b></p><p><b>code</b>: Apgar response to stimulus score <span>(Details : {SNOMED CT code '249226008' = 'Apgar response to stimulus score', given as 'Apgar response to stimulus score'})</span></p><p><b>value</b>: 2. Grimace and pulling away, cough, or sneeze during suctioning <span>(Details : {LOINC code 'LA6721-0' = 'Grimace and pulling away, cough, or sneeze during suctioning', given as 'Grimace and pulling away, cough, or sneeze during suctioning'}; {http://acme.ped/apgarreflexirritability code '2' = '2)</span></p></blockquote><blockquote><p><b>component</b></p><p><b>code</b>: Apgar muscle tone score <span>(Details : {SNOMED CT code '249225007' = 'Apgar muscle tone score', given as 'Apgar muscle tone score'})</span></p><p><b>value</b>: 2. Active motion <span>(Details : {LOINC code 'LA6715-2' = 'Active motion', given as 'Active motion '}; {http://acme.ped/apgarmuscletone code '2' = '2)</span></p></blockquote><blockquote><p><b>component</b></p><p><b>code</b>: Apgar respiratory effort score <span>(Details : {SNOMED CT code '249224006' = 'Apgar respiratory effort score', given as 'Apgar respiratory effort score'})</span></p><p><b>value</b>: 2. Good, strong cry; normal rate and effort of breathing <span>(Details : {LOINC code 'LA6727-7' = 'Good, strong cry; normal rate and effort of breathing', given as 'Good, strong cry; normal rate and effort of breathing    '}; {http://acme.ped/apgarrespiratoryeffort code '2' = '2)</span></p></blockquote></div>",
  },
  contained: [
    {
      resourceType: "Patient",
      id: "newborn",
      identifier: [
        {
          system: "http://acmehealthcare/org/mrns",
          value: "12345",
        },
      ],
      active: true,
      name: [
        {
          family: "Chalmers",
          given: ["Peter", "James"],
        },
      ],
      gender: "male",
      birthDate: "2016-05-18",
      _birthDate: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/patient-birthTime",
            valueDateTime: "2016-05-18T10:28:45Z",
          },
        ],
      },
    },
  ],
  status: "final",
  category: [
    {
      coding: [
        {
          system: "http://terminology.hl7.org/CodeSystem/observation-category",
          code: "survey",
          display: "Survey",
        },
      ],
      text: "Survey",
    },
  ],
  code: {
    coding: [
      {
        system: "http://snomed.info/sct",
        code: "443849008",
        display: "Apgar score at 20 minutes",
      },
    ],
    text: "20 minute Apgar Score",
  },
  subject: {
    reference: "#newborn",
  },
  effectiveDateTime: "2016-05-18T22:33:22Z",
  performer: [
    {
      reference: "Practitioner/example",
    },
  ],
  valueQuantity: {
    value: 10,
    system: "http://unitsofmeasure.org",
    code: "{score}",
  },
  component: [
    {
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "249227004",
            display: "Apgar color score",
          },
        ],
        text: "Apgar color score",
      },
      valueCodeableConcept: {
        coding: [
          {
            extension: [
              {
                url: "http://hl7.org/fhir/StructureDefinition/ordinalValue",
                valueDecimal: 2,
              },
            ],
            system: "http://loinc.org",
            code: "LA6724-4",
            display: "Good color all over",
          },
          {
            system: "http://acme.ped/apgarcolor",
            code: "2",
          },
        ],
        text: "2. Good color all over",
      },
    },
    {
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "249223000",
            display: "Apgar heart rate score",
          },
        ],
        text: "Apgar respiratory effort score",
      },
      valueCodeableConcept: {
        coding: [
          {
            extension: [
              {
                url: "http://hl7.org/fhir/StructureDefinition/ordinalValue",
                valueDecimal: 2,
              },
            ],
            system: "http://loinc.org",
            code: "LA6718-6",
            display: "At least 100 beats per minute",
          },
          {
            system: "http://acme.ped/apgarheartrate",
            code: "2",
          },
        ],
        text: "2. At least 100 beats per minute",
      },
    },
    {
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "249226008",
            display: "Apgar response to stimulus score",
          },
        ],
        text: "Apgar response to stimulus score",
      },
      valueCodeableConcept: {
        coding: [
          {
            extension: [
              {
                url: "http://hl7.org/fhir/StructureDefinition/ordinalValue",
                valueDecimal: 2,
              },
            ],
            system: "http://loinc.org",
            code: "LA6721-0",
            display:
              "Grimace and pulling away, cough, or sneeze during suctioning",
          },
          {
            system: "http://acme.ped/apgarreflexirritability",
            code: "2",
          },
        ],
        text: "2. Grimace and pulling away, cough, or sneeze during suctioning",
      },
    },
    {
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "249225007",
            display: "Apgar muscle tone score",
          },
        ],
        text: "Apgar muscle tone score",
      },
      valueCodeableConcept: {
        coding: [
          {
            extension: [
              {
                url: "http://hl7.org/fhir/StructureDefinition/ordinalValue",
                valueDecimal: 2,
              },
            ],
            system: "http://loinc.org",
            code: "LA6715-2",
            display: "Active motion ",
          },
          {
            system: "http://acme.ped/apgarmuscletone",
            code: "2",
          },
        ],
        text: "2. Active motion",
      },
    },
    {
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "249224006",
            display: "Apgar respiratory effort score",
          },
        ],
        text: "Apgar respiratory effort score",
      },
      valueCodeableConcept: {
        coding: [
          {
            extension: [
              {
                url: "http://hl7.org/fhir/StructureDefinition/ordinalValue",
                valueDecimal: 2,
              },
            ],
            system: "http://loinc.org",
            code: "LA6727-7",
            display:
              "Good, strong cry; normal rate and effort of breathing    ",
          },
          {
            system: "http://acme.ped/apgarrespiratoryeffort",
            code: "2",
          },
        ],
        text: "2. Good, strong cry; normal rate and effort of breathing",
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

export const ObservationExample2minuteApgarScore: Observation = {
  resourceType: "Observation",
  id: "2minute-apgar-score",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: 2minute-apgar-score</p><p><b>contained</b>: </p><p><b>status</b>: final</p><p><b>category</b>: Survey <span>(Details : {http://terminology.hl7.org/CodeSystem/observation-category code 'survey' = 'Survey', given as 'Survey'})</span></p><p><b>code</b>: 2 minute Apgar Score <span>(Details : {LOINC code '9273-4' = '2 minute Apgar Score', given as '2 minute Apgar Score'})</span></p><p><b>subject</b>: id: newborn; 12345; active; Peter James Chalmers ; gender: male; birthDate: 18/05/2016</p><p><b>effective</b>: 18/05/2016 10:33:22 PM</p><p><b>performer</b>: <a>Practitioner/example</a></p><p><b>value</b>: 5 {score}<span> (Details: UCUM code {score} = '{score}')</span></p><blockquote><p><b>component</b></p><p><b>code</b>: Apgar color score <span>(Details : {SNOMED CT code '249227004' = 'Apgar color score', given as 'Apgar color score'})</span></p><p><b>value</b>: 1. Good color in body with bluish hands or feet <span>(Details : {LOINC code 'LA6723-6' = 'Good color in body with bluish hands or feet', given as 'Good color in body with bluish hands or feet'}; {http://acme.ped/apgarcolor code '1' = '1)</span></p></blockquote><blockquote><p><b>component</b></p><p><b>code</b>: Apgar respiratory effort score <span>(Details : {SNOMED CT code '249223000' = 'Apgar heart rate score', given as 'Apgar heart rate score'})</span></p><p><b>value</b>: 1. Fewer than 100 beats per minute <span>(Details : {LOINC code 'LA6720-2' = 'Grimace during suctioning', given as 'Fewer than 100 beats per minute'}; {http://acme.ped/apgarheartrate code '1' = '1)</span></p></blockquote><blockquote><p><b>component</b></p><p><b>code</b>: Apgar response to stimulus score <span>(Details : {SNOMED CT code '249226008' = 'Apgar response to stimulus score', given as 'Apgar response to stimulus score'})</span></p><p><b>value</b>: 1. Grimace during suctioning <span>(Details : {LOINC code 'LA6721-0' = 'Grimace and pulling away, cough, or sneeze during suctioning', given as 'Grimace during suctioning'}; {http://acme.ped/apgarreflexirritability code '1' = '1)</span></p></blockquote><blockquote><p><b>component</b></p><p><b>code</b>: Apgar muscle tone score <span>(Details : {SNOMED CT code '249225007' = 'Apgar muscle tone score', given as 'Apgar muscle tone score'})</span></p><p><b>value</b>: 1. Some flexion of arms and legs <span>(Details : {LOINC code 'LA6714-5' = 'Some flexion of arms and legs', given as 'Some flexion of arms and legs'}; {http://acme.ped/apgarmuscletone code '1' = '1)</span></p></blockquote><blockquote><p><b>component</b></p><p><b>code</b>: Apgar respiratory effort score <span>(Details : {SNOMED CT code '249224006' = 'Apgar respiratory effort score', given as 'Apgar respiratory effort score'})</span></p><p><b>value</b>: 1. Weak cry; may sound like whimpering, slow or irregular breathing <span>(Details : {LOINC code 'LA6726-9' = 'Weak cry; may sound like whimpering, slow or irregular breathing', given as 'Weak cry; may sound like whimpering, slow or irregular breathing'}; {http://acme.ped/apgarrespiratoryeffort code '1' = '1)</span></p></blockquote></div>",
  },
  contained: [
    {
      resourceType: "Patient",
      id: "newborn",
      identifier: [
        {
          system: "http://acmehealthcare/org/mrns",
          value: "12345",
        },
      ],
      active: true,
      name: [
        {
          family: "Chalmers",
          given: ["Peter", "James"],
        },
      ],
      gender: "male",
      birthDate: "2016-05-18",
      _birthDate: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/patient-birthTime",
            valueDateTime: "2016-05-18T10:28:45Z",
          },
        ],
      },
    },
  ],
  status: "final",
  category: [
    {
      coding: [
        {
          system: "http://terminology.hl7.org/CodeSystem/observation-category",
          code: "survey",
          display: "Survey",
        },
      ],
      text: "Survey",
    },
  ],
  code: {
    coding: [
      {
        system: "http://loinc.org",
        code: "9273-4",
        display: "2 minute Apgar Score",
      },
    ],
    text: "2 minute Apgar Score",
  },
  subject: {
    reference: "#newborn",
  },
  effectiveDateTime: "2016-05-18T22:33:22Z",
  performer: [
    {
      reference: "Practitioner/example",
    },
  ],
  valueQuantity: {
    value: 5,
    system: "http://unitsofmeasure.org",
    code: "{score}",
  },
  component: [
    {
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "249227004",
            display: "Apgar color score",
          },
        ],
        text: "Apgar color score",
      },
      valueCodeableConcept: {
        coding: [
          {
            extension: [
              {
                url: "http://hl7.org/fhir/StructureDefinition/ordinalValue",
                valueDecimal: 1,
              },
            ],
            system: "http://loinc.org",
            code: "LA6723-6",
            display: "Good color in body with bluish hands or feet",
          },
          {
            system: "http://acme.ped/apgarcolor",
            code: "1",
          },
        ],
        text: "1. Good color in body with bluish hands or feet",
      },
    },
    {
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "249223000",
            display: "Apgar heart rate score",
          },
        ],
        text: "Apgar respiratory effort score",
      },
      valueCodeableConcept: {
        coding: [
          {
            extension: [
              {
                url: "http://hl7.org/fhir/StructureDefinition/ordinalValue",
                valueDecimal: 1,
              },
            ],
            system: "http://loinc.org",
            code: "LA6720-2",
            display: "Fewer than 100 beats per minute",
          },
          {
            system: "http://acme.ped/apgarheartrate",
            code: "1",
          },
        ],
        text: "1. Fewer than 100 beats per minute",
      },
    },
    {
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "249226008",
            display: "Apgar response to stimulus score",
          },
        ],
        text: "Apgar response to stimulus score",
      },
      valueCodeableConcept: {
        coding: [
          {
            extension: [
              {
                url: "http://hl7.org/fhir/StructureDefinition/ordinalValue",
                valueDecimal: 1,
              },
            ],
            system: "http://loinc.org",
            code: "LA6721-0",
            display: "Grimace during suctioning",
          },
          {
            system: "http://acme.ped/apgarreflexirritability",
            code: "1",
          },
        ],
        text: "1. Grimace during suctioning",
      },
    },
    {
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "249225007",
            display: "Apgar muscle tone score",
          },
        ],
        text: "Apgar muscle tone score",
      },
      valueCodeableConcept: {
        coding: [
          {
            extension: [
              {
                url: "http://hl7.org/fhir/StructureDefinition/ordinalValue",
                valueDecimal: 1,
              },
            ],
            system: "http://loinc.org",
            code: "LA6714-5",
            display: "Some flexion of arms and legs",
          },
          {
            system: "http://acme.ped/apgarmuscletone",
            code: "1",
          },
        ],
        text: "1. Some flexion of arms and legs",
      },
    },
    {
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "249224006",
            display: "Apgar respiratory effort score",
          },
        ],
        text: "Apgar respiratory effort score",
      },
      valueCodeableConcept: {
        coding: [
          {
            extension: [
              {
                url: "http://hl7.org/fhir/StructureDefinition/ordinalValue",
                valueDecimal: 1,
              },
            ],
            system: "http://loinc.org",
            code: "LA6726-9",
            display:
              "Weak cry; may sound like whimpering, slow or irregular breathing",
          },
          {
            system: "http://acme.ped/apgarrespiratoryeffort",
            code: "1",
          },
        ],
        text: "1. Weak cry; may sound like whimpering, slow or irregular breathing",
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

export const ObservationExample5minuteApgarScore: Observation = {
  resourceType: "Observation",
  id: "5minute-apgar-score",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: 5minute-apgar-score</p><p><b>contained</b>: </p><p><b>status</b>: final</p><p><b>category</b>: Survey <span>(Details : {http://terminology.hl7.org/CodeSystem/observation-category code 'survey' = 'Survey', given as 'Survey'})</span></p><p><b>code</b>: 5 minute Apgar Score <span>(Details : {LOINC code '9274-2' = '5 minute Apgar Score', given as '5 minute Apgar Score'}; {SNOMED CT code '169909004' = 'Apgar at 5 minutes', given as 'Apgar at 5 minutes'})</span></p><p><b>subject</b>: id: newborn; 12345; active; Peter James Chalmers ; gender: male; birthDate: 18/05/2016</p><p><b>effective</b>: 18/05/2016 10:33:22 PM</p><p><b>performer</b>: <a>Practitioner/example</a></p><p><b>value</b>: 10 {score}<span> (Details: UCUM code {score} = '{score}')</span></p><blockquote><p><b>component</b></p><p><b>code</b>: Apgar color score <span>(Details : {LOINC code '32411-1' = '5 minute Apgar Color', given as '5 minute Apgar Color'}; {SNOMED CT code '249227004' = 'Apgar color score', given as 'Apgar color score'})</span></p><p><b>value</b>: 2. Good color all over <span>(Details : {LOINC code 'LA6724-4' = 'Good color all over', given as 'Good color all over'}; {http://acme.ped/apgarcolor code '2' = '2)</span></p></blockquote><blockquote><p><b>component</b></p><p><b>code</b>: Apgar respiratory effort score <span>(Details : {LOINC code '32412-9' = '5 minute Apgar Heart rate', given as '5 minute Apgar Heart Rate'}; {SNOMED CT code '249223000' = 'Apgar heart rate score', given as 'Apgar heart rate score'})</span></p><p><b>value</b>: 2. At least 100 beats per minute <span>(Details : {LOINC code 'LA6718-6' = 'At least 100 beats per minute', given as 'At least 100 beats per minute'}; {http://acme.ped/apgarheartrate code '2' = '2)</span></p></blockquote><blockquote><p><b>component</b></p><p><b>code</b>: Apgar response to stimulus score <span>(Details : {LOINC code '32414-5' = '5 minute Apgar Reflex irritability', given as '5 minute Apgar Reflex Irritability'}; {SNOMED CT code '249226008' = 'Apgar response to stimulus score', given as 'Apgar response to stimulus score'})</span></p><p><b>value</b>: 2. Grimace and pulling away, cough, or sneeze during suctioning <span>(Details : {LOINC code 'LA6721-0' = 'Grimace and pulling away, cough, or sneeze during suctioning', given as 'Grimace and pulling away, cough, or sneeze during suctioning'}; {http://acme.ped/apgarreflexirritability code '2' = '2)</span></p></blockquote><blockquote><p><b>component</b></p><p><b>code</b>: Apgar muscle tone score <span>(Details : {LOINC code '32413-7' = '5 minute Apgar Muscle tone', given as '5 minute Apgar Muscle Tone'}; {SNOMED CT code '249225007' = 'Apgar muscle tone score', given as 'Apgar muscle tone score'})</span></p><p><b>value</b>: 2. Active motion <span>(Details : {LOINC code 'LA6715-2' = 'Active motion', given as 'Active motion '}; {http://acme.ped/apgarmuscletone code '2' = '2)</span></p></blockquote><blockquote><p><b>component</b></p><p><b>code</b>: Apgar respiratory effort score <span>(Details : {LOINC code '32415-2' = '5 minute Apgar Respiratory effort', given as '5 minute Apgar Respiratory effort'}; {SNOMED CT code '249224006' = 'Apgar respiratory effort score', given as 'Apgar respiratory effort score'})</span></p><p><b>value</b>: 2. Good, strong cry; normal rate and effort of breathing <span>(Details : {LOINC code 'LA6727-7' = 'Good, strong cry; normal rate and effort of breathing', given as 'Good, strong cry; normal rate and effort of breathing    '}; {http://acme.ped/apgarrespiratoryeffort code '2' = '2)</span></p></blockquote></div>",
  },
  contained: [
    {
      resourceType: "Patient",
      id: "newborn",
      identifier: [
        {
          system: "http://acmehealthcare/org/mrns",
          value: "12345",
        },
      ],
      active: true,
      name: [
        {
          family: "Chalmers",
          given: ["Peter", "James"],
        },
      ],
      gender: "male",
      birthDate: "2016-05-18",
      _birthDate: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/patient-birthTime",
            valueDateTime: "2016-05-18T10:28:45Z",
          },
        ],
      },
    },
  ],
  status: "final",
  category: [
    {
      coding: [
        {
          system: "http://terminology.hl7.org/CodeSystem/observation-category",
          code: "survey",
          display: "Survey",
        },
      ],
      text: "Survey",
    },
  ],
  code: {
    coding: [
      {
        system: "http://loinc.org",
        code: "9274-2",
        display: "5 minute Apgar Score",
      },
      {
        system: "http://snomed.info/sct",
        code: "169909004",
        display: "Apgar at 5 minutes",
      },
    ],
    text: "5 minute Apgar Score",
  },
  subject: {
    reference: "#newborn",
  },
  effectiveDateTime: "2016-05-18T22:33:22Z",
  performer: [
    {
      reference: "Practitioner/example",
    },
  ],
  valueQuantity: {
    value: 10,
    system: "http://unitsofmeasure.org",
    code: "{score}",
  },
  component: [
    {
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "32411-1",
            display: "5 minute Apgar Color",
          },
          {
            system: "http://snomed.info/sct",
            code: "249227004",
            display: "Apgar color score",
          },
        ],
        text: "Apgar color score",
      },
      valueCodeableConcept: {
        coding: [
          {
            extension: [
              {
                url: "http://hl7.org/fhir/StructureDefinition/ordinalValue",
                valueDecimal: 2,
              },
            ],
            system: "http://loinc.org",
            code: "LA6724-4",
            display: "Good color all over",
          },
          {
            system: "http://acme.ped/apgarcolor",
            code: "2",
          },
        ],
        text: "2. Good color all over",
      },
    },
    {
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "32412-9",
            display: "5 minute Apgar Heart Rate",
          },
          {
            system: "http://snomed.info/sct",
            code: "249223000",
            display: "Apgar heart rate score",
          },
        ],
        text: "Apgar respiratory effort score",
      },
      valueCodeableConcept: {
        coding: [
          {
            extension: [
              {
                url: "http://hl7.org/fhir/StructureDefinition/ordinalValue",
                valueDecimal: 2,
              },
            ],
            system: "http://loinc.org",
            code: "LA6718-6",
            display: "At least 100 beats per minute",
          },
          {
            system: "http://acme.ped/apgarheartrate",
            code: "2",
          },
        ],
        text: "2. At least 100 beats per minute",
      },
    },
    {
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "32414-5",
            display: "5 minute Apgar Reflex Irritability",
          },
          {
            system: "http://snomed.info/sct",
            code: "249226008",
            display: "Apgar response to stimulus score",
          },
        ],
        text: "Apgar response to stimulus score",
      },
      valueCodeableConcept: {
        coding: [
          {
            extension: [
              {
                url: "http://hl7.org/fhir/StructureDefinition/ordinalValue",
                valueDecimal: 2,
              },
            ],
            system: "http://loinc.org",
            code: "LA6721-0",
            display:
              "Grimace and pulling away, cough, or sneeze during suctioning",
          },
          {
            system: "http://acme.ped/apgarreflexirritability",
            code: "2",
          },
        ],
        text: "2. Grimace and pulling away, cough, or sneeze during suctioning",
      },
    },
    {
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "32413-7",
            display: "5 minute Apgar Muscle Tone",
          },
          {
            system: "http://snomed.info/sct",
            code: "249225007",
            display: "Apgar muscle tone score",
          },
        ],
        text: "Apgar muscle tone score",
      },
      valueCodeableConcept: {
        coding: [
          {
            extension: [
              {
                url: "http://hl7.org/fhir/StructureDefinition/ordinalValue",
                valueDecimal: 2,
              },
            ],
            system: "http://loinc.org",
            code: "LA6715-2",
            display: "Active motion ",
          },
          {
            system: "http://acme.ped/apgarmuscletone",
            code: "2",
          },
        ],
        text: "2. Active motion",
      },
    },
    {
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "32415-2",
            display: "5 minute Apgar Respiratory effort",
          },
          {
            system: "http://snomed.info/sct",
            code: "249224006",
            display: "Apgar respiratory effort score",
          },
        ],
        text: "Apgar respiratory effort score",
      },
      valueCodeableConcept: {
        coding: [
          {
            extension: [
              {
                url: "http://hl7.org/fhir/StructureDefinition/ordinalValue",
                valueDecimal: 2,
              },
            ],
            system: "http://loinc.org",
            code: "LA6727-7",
            display:
              "Good, strong cry; normal rate and effort of breathing    ",
          },
          {
            system: "http://acme.ped/apgarrespiratoryeffort",
            code: "2",
          },
        ],
        text: "2. Good, strong cry; normal rate and effort of breathing",
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

export const ObservationExampleTpmtDiplotype: Observation = {
  resourceType: "Observation",
  id: "example-TPMT-diplotype",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: example-TPMT-diplotype</p><p><b>status</b>: final</p><p><b>code</b>: Diplotype Call <span>(Details : {SNOMED CT code '363779003' = 'Genotype determination', given as 'Genotype determination'})</span></p><p><b>subject</b>: <a>E***********</a></p><p><b>issued</b>: 03/04/2013 3:30:10 PM</p><p><b>value</b>: *1/*4</p><p><b>derivedFrom</b>: </p><ul><li><a>Observation/example-TPMT-haplotype-one</a></li><li><a>Observation/example-TPMT-haplotype-two</a></li></ul></div>",
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/observation-geneticsGene",
      valueCodeableConcept: {
        coding: [
          {
            system: "http://www.genenames.org",
            code: "12014",
            display: "TPMT",
          },
        ],
      },
    },
  ],
  status: "final",
  code: {
    coding: [
      {
        system: "http://snomed.info/sct",
        code: "363779003",
        display: "Genotype determination",
      },
    ],
    text: "Diplotype Call",
  },
  subject: {
    reference: "Patient/example",
    display: "E***********",
  },
  issued: "2013-04-03T15:30:10+01:00",
  valueString: "*1/*4",
  derivedFrom: [
    {
      reference: "Observation/example-TPMT-haplotype-one",
    },
    {
      reference: "Observation/example-TPMT-haplotype-two",
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

export const ObservationExampleTpmtHaplotypeOne: Observation = {
  resourceType: "Observation",
  id: "example-TPMT-haplotype-one",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: example-TPMT-haplotype-one</p><p><b>status</b>: unknown</p><p><b>code</b>: Haplotype Call <span>(Details : {SNOMED CT code '363779003' = 'Genotype determination', given as 'Genotype determination'})</span></p><p><b>subject</b>: <a>E***********</a></p><p><b>issued</b>: 03/04/2013 3:30:10 PM</p><p><b>value</b>: *1 <span>(Details : {http://pharmakb.org code 'PA166128347' = 'PA166128347', given as '*1'})</span></p><p><b>derivedFrom</b>: <a>MolecularSequence/example-TPMT-one</a></p></div>",
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/observation-geneticsGene",
      valueCodeableConcept: {
        coding: [
          {
            system: "http://www.genenames.org",
            code: "12014",
            display: "TPMT",
          },
        ],
      },
    },
  ],
  status: "unknown",
  code: {
    coding: [
      {
        system: "http://snomed.info/sct",
        code: "363779003",
        display: "Genotype determination",
      },
    ],
    text: "Haplotype Call",
  },
  subject: {
    reference: "Patient/example",
    display: "E***********",
  },
  issued: "2013-04-03T15:30:10+01:00",
  valueCodeableConcept: {
    coding: [
      {
        system: "http://pharmakb.org",
        code: "PA166128347",
        display: "*1",
      },
    ],
  },
  derivedFrom: [
    {
      reference: "MolecularSequence/example-TPMT-one",
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

export const ObservationExampleTpmtHaplotypeTwo: Observation = {
  resourceType: "Observation",
  id: "example-TPMT-haplotype-two",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: example-TPMT-haplotype-two</p><p><b>status</b>: unknown</p><p><b>code</b>: Haplotype Call <span>(Details : {SNOMED CT code '363779003' = 'Genotype determination', given as 'Genotype determination'})</span></p><p><b>subject</b>: <a>E***********</a></p><p><b>issued</b>: 03/04/2013 3:30:10 PM</p><p><b>value</b>: *4 <span>(Details : {http://pharmakb.org code 'PA166128353' = 'PA166128353', given as '*4'})</span></p><p><b>derivedFrom</b>: <a>MolecularSequence/example-TPMT-two</a></p></div>",
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/observation-geneticsGene",
      valueCodeableConcept: {
        coding: [
          {
            system: "http://www.genenames.org",
            code: "12014",
            display: "TPMT",
          },
        ],
      },
    },
  ],
  status: "unknown",
  code: {
    coding: [
      {
        system: "http://snomed.info/sct",
        code: "363779003",
        display: "Genotype determination",
      },
    ],
    text: "Haplotype Call",
  },
  subject: {
    reference: "Patient/example",
    display: "E***********",
  },
  issued: "2013-04-03T15:30:10+01:00",
  valueCodeableConcept: {
    coding: [
      {
        system: "http://pharmakb.org",
        code: "PA166128353",
        display: "*4",
      },
    ],
  },
  derivedFrom: [
    {
      reference: "MolecularSequence/example-TPMT-two",
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

export const ObservationExampleAbdoTender: Observation = {
  resourceType: "Observation",
  id: "abdo-tender",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: abdo-tender</p><p><b>status</b>: final</p><p><b>category</b>: Exam <span>(Details : {http://terminology.hl7.org/CodeSystem/observation-category code 'exam' = 'Exam', given as 'Exam'})</span></p><p><b>code</b>: Abdominal tenderness <span>(Details : {SNOMED CT code '43478001' = 'Abdominal tenderness', given as 'Abdominal tenderness (finding)'})</span></p><p><b>subject</b>: <a>Patient/example</a></p><p><b>encounter</b>: <a>Encounter/example</a></p><p><b>effective</b>: 02/04/2018 10:30:10 AM --&gt; (ongoing)</p><p><b>issued</b>: 03/04/2018 3:30:10 PM</p><p><b>value</b>: true</p><p><b>interpretation</b>: Abnormal <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation code 'A' = 'Abnormal', given as 'Abnormal'})</span></p></div>",
  },
  status: "final",
  category: [
    {
      coding: [
        {
          system: "http://terminology.hl7.org/CodeSystem/observation-category",
          code: "exam",
          display: "Exam",
        },
      ],
    },
  ],
  code: {
    coding: [
      {
        system: "http://snomed.info/sct",
        code: "43478001",
        display: "Abdominal tenderness (finding)",
      },
    ],
    text: "Abdominal tenderness",
  },
  subject: {
    reference: "Patient/example",
  },
  encounter: {
    reference: "Encounter/example",
  },
  effectivePeriod: {
    start: "2018-04-02T10:30:10+01:00",
  },
  issued: "2018-04-03T15:30:10+01:00",
  valueBoolean: true,
  interpretation: [
    {
      coding: [
        {
          system:
            "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
          code: "A",
          display: "Abnormal",
        },
      ],
      text: "Abnormal",
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

export const ObservationExampleAlcoholType: Observation = {
  resourceType: "Observation",
  id: "alcohol-type",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: alcohol-type</p><p><b>status</b>: final</p><p><b>category</b>: Social History <span>(Details : {http://terminology.hl7.org/CodeSystem/observation-category code 'social-history' = 'Social History', given as 'Social History'})</span></p><p><b>code</b>: Type of alcohol consumed <span>(Details : {http://acme-rehab.org code 'alcohol-type' = 'alcohol-type', given as 'Type of alcohol consumed'})</span></p><p><b>subject</b>: <a>Peter James Chalmers</a></p><p><b>effective</b>: 11/12/2014 4:44:16 AM</p><blockquote><p><b>component</b></p><p><b>code</b>: alcohol-type <span>(Details : {http://acme-rehab.org code 'alcohol-type' = 'alcohol-type)</span></p><p><b>value</b>: Wine <span>(Details : {SNOMED CT code '35748005' = 'Wine', given as 'Wine (substance)'})</span></p></blockquote><blockquote><p><b>component</b></p><p><b>code</b>: alcohol-type <span>(Details : {http://acme-rehab.org code 'alcohol-type' = 'alcohol-type)</span></p><p><b>value</b>: Beer <span>(Details : {SNOMED CT code '53410008' = 'Beer', given as 'Beer (substance)'})</span></p></blockquote><blockquote><p><b>component</b></p><p><b>code</b>: alcohol-type <span>(Details : {http://acme-rehab.org code 'alcohol-type' = 'alcohol-type)</span></p><p><b>value</b>: Liquor <span>(Details : {SNOMED CT code '6524003' = 'Distilled spirits', given as ' Distilled spirits (substance)'})</span></p></blockquote></div>",
  },
  status: "final",
  category: [
    {
      coding: [
        {
          system: "http://terminology.hl7.org/CodeSystem/observation-category",
          code: "social-history",
          display: "Social History",
        },
      ],
      text: "Social History",
    },
  ],
  code: {
    coding: [
      {
        system: "http://acme-rehab.org",
        code: "alcohol-type",
        display: "Type of alcohol consumed",
      },
    ],
    text: "Type of alcohol consumed",
  },
  subject: {
    reference: "Patient/example",
    display: "Peter James Chalmers",
  },
  effectiveDateTime: "2014-12-11T04:44:16Z",
  component: [
    {
      code: {
        coding: [
          {
            system: "http://acme-rehab.org",
            code: "alcohol-type",
          },
        ],
      },
      valueCodeableConcept: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "35748005",
            display: "Wine (substance)",
          },
        ],
        text: "Wine",
      },
    },
    {
      code: {
        coding: [
          {
            system: "http://acme-rehab.org",
            code: "alcohol-type",
          },
        ],
      },
      valueCodeableConcept: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "53410008",
            display: "Beer (substance)",
          },
        ],
        text: "Beer",
      },
    },
    {
      code: {
        coding: [
          {
            system: "http://acme-rehab.org",
            code: "alcohol-type",
          },
        ],
      },
      valueCodeableConcept: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "6524003",
            display: " Distilled spirits (substance)",
          },
        ],
        text: "Liquor",
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

export const ObservationExampleBgpanel: Observation = {
  resourceType: "Observation",
  id: "bgpanel",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: bgpanel</p><p><b>status</b>: final</p><p><b>category</b>: Laboratory <span>(Details : {http://terminology.hl7.org/CodeSystem/observation-category code 'laboratory' = 'Laboratory', given as 'Laboratory'})</span></p><p><b>code</b>: Blood Group Panel <span>(Details : {LOINC code '34532-2' = 'Blood type and Indirect antibody screen panel - Blood', given as ' Blood type and Indirect antibody screen panel - Blood'})</span></p><p><b>subject</b>: <a>Patient/infant</a></p><p><b>effective</b>: 11/03/2018 4:07:54 PM</p><p><b>hasMember</b>: </p><ul><li><a>Observation/bloodgroup</a></li><li><a>Observation/rhstatus</a></li></ul></div>",
  },
  status: "final",
  category: [
    {
      coding: [
        {
          system: "http://terminology.hl7.org/CodeSystem/observation-category",
          code: "laboratory",
          display: "Laboratory",
        },
      ],
      text: "Laboratory",
    },
  ],
  code: {
    coding: [
      {
        system: "http://loinc.org",
        code: "34532-2",
        display: " Blood type and Indirect antibody screen panel - Blood",
      },
    ],
    text: "Blood Group Panel",
  },
  subject: {
    reference: "Patient/infant",
  },
  effectiveDateTime: "2018-03-11T16:07:54+00:00",
  hasMember: [
    {
      reference: "Observation/bloodgroup",
    },
    {
      reference: "Observation/rhstatus",
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

export const ObservationExampleBloodgroup: Observation = {
  resourceType: "Observation",
  id: "bloodgroup",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: bloodgroup</p><p><b>status</b>: final</p><p><b>category</b>: Laboratory <span>(Details : {http://terminology.hl7.org/CodeSystem/observation-category code 'laboratory' = 'Laboratory', given as 'Laboratory'})</span></p><p><b>code</b>: Blood Group <span>(Details : {LOINC code '883-9' = 'ABO group [Type] in Blood', given as 'ABO group [Type] in Blood'})</span></p><p><b>subject</b>: <a>Patient/infant</a></p><p><b>effective</b>: 11/03/2018 4:07:54 PM</p><p><b>value</b>: A <span>(Details : {SNOMED CT code '112144000' = 'Blood group A', given as 'Blood group A (finding)'})</span></p></div>",
  },
  status: "final",
  category: [
    {
      coding: [
        {
          system: "http://terminology.hl7.org/CodeSystem/observation-category",
          code: "laboratory",
          display: "Laboratory",
        },
      ],
      text: "Laboratory",
    },
  ],
  code: {
    coding: [
      {
        system: "http://loinc.org",
        code: "883-9",
        display: "ABO group [Type] in Blood",
      },
    ],
    text: "Blood Group",
  },
  subject: {
    reference: "Patient/infant",
  },
  effectiveDateTime: "2018-03-11T16:07:54+00:00",
  valueCodeableConcept: {
    coding: [
      {
        system: "http://snomed.info/sct",
        code: "112144000",
        display: "Blood group A (finding)",
      },
    ],
    text: "A",
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

export const ObservationExampleBloodpressureCancel: Observation = {
  resourceType: "Observation",
  id: "blood-pressure-cancel",
  meta: {
    profile: ["http://hl7.org/fhir/StructureDefinition/vitalsigns"],
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
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: blood-pressure-cancel</p><p><b>meta</b>: </p><p><b>identifier</b>: urn:uuid:187e0c12-8dd2-67e2-99b2-bf273c878281</p><p><b>status</b>: cancelled</p><p><b>category</b>: Vital Signs <span>(Details : {http://terminology.hl7.org/CodeSystem/observation-category code 'vital-signs' = 'Vital Signs', given as 'Vital Signs'})</span></p><p><b>code</b>: Blood pressure systolic &amp; diastolic <span>(Details : {LOINC code '85354-9' = 'Blood pressure panel with all children optional', given as 'Blood pressure panel with all children optional'})</span></p><p><b>subject</b>: <a>Patient/example</a></p><p><b>effective</b>: 17/09/2012</p><p><b>performer</b>: <a>Practitioner/example</a></p><p><b>interpretation</b>: Below low normal <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation code 'L' = 'Low', given as 'low'})</span></p><p><b>note</b>: In this example, the blood pressure measurements are not available due to cancellation of the order.  Data absent reason is present for each component</p><p><b>bodySite</b>: Right arm <span>(Details : {SNOMED CT code '368209003' = 'Right upper arm', given as 'Right arm'})</span></p><blockquote><p><b>component</b></p><p><b>code</b>: Systolic blood pressure <span>(Details : {LOINC code '8480-6' = 'Systolic blood pressure', given as 'Systolic blood pressure'}; {SNOMED CT code '271649006' = 'Systolic blood pressure', given as 'Systolic blood pressure'}; {http://acme.org/devices/clinical-codes code 'bp-s' = 'bp-s', given as 'Systolic Blood pressure'})</span></p><p><b>dataAbsentReason</b>: Not Asked <span>(Details : {http://terminology.hl7.org/CodeSystem/data-absent-reason code 'not-asked' = 'Not Asked', given as 'Not Asked'})</span></p></blockquote><blockquote><p><b>component</b></p><p><b>code</b>: Diastolic blood pressure <span>(Details : {LOINC code '8462-4' = 'Diastolic blood pressure', given as 'Diastolic blood pressure'})</span></p><p><b>dataAbsentReason</b>: Not Asked <span>(Details : {http://terminology.hl7.org/CodeSystem/data-absent-reason code 'not-asked' = 'Not Asked', given as 'Not Asked'})</span></p></blockquote></div>",
  },
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:uuid:187e0c12-8dd2-67e2-99b2-bf273c878281",
    },
  ],
  status: "cancelled",
  category: [
    {
      coding: [
        {
          system: "http://terminology.hl7.org/CodeSystem/observation-category",
          code: "vital-signs",
          display: "Vital Signs",
        },
      ],
    },
  ],
  code: {
    coding: [
      {
        system: "http://loinc.org",
        code: "85354-9",
        display: "Blood pressure panel with all children optional",
      },
    ],
    text: "Blood pressure systolic & diastolic",
  },
  subject: {
    reference: "Patient/example",
  },
  effectiveDateTime: "2012-09-17",
  performer: [
    {
      reference: "Practitioner/example",
    },
  ],
  interpretation: [
    {
      coding: [
        {
          system:
            "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
          code: "L",
          display: "low",
        },
      ],
      text: "Below low normal",
    },
  ],
  note: [
    {
      text: "In this example, the blood pressure measurements are not available due to cancellation of the order.  Data absent reason is present for each component",
    },
  ],
  bodySite: {
    coding: [
      {
        system: "http://snomed.info/sct",
        code: "368209003",
        display: "Right arm",
      },
    ],
  },
  component: [
    {
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "8480-6",
            display: "Systolic blood pressure",
          },
          {
            system: "http://snomed.info/sct",
            code: "271649006",
            display: "Systolic blood pressure",
          },
          {
            system: "http://acme.org/devices/clinical-codes",
            code: "bp-s",
            display: "Systolic Blood pressure",
          },
        ],
      },
      dataAbsentReason: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/data-absent-reason",
            code: "not-asked",
            display: "Not Asked",
          },
        ],
      },
    },
    {
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "8462-4",
            display: "Diastolic blood pressure",
          },
        ],
      },
      dataAbsentReason: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/data-absent-reason",
            code: "not-asked",
            display: "Not Asked",
          },
        ],
      },
    },
  ],
} as const;

export const ObservationExampleBloodpressureDar: Observation = {
  resourceType: "Observation",
  id: "blood-pressure-dar",
  meta: {
    profile: ["http://hl7.org/fhir/StructureDefinition/vitalsigns"],
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
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: blood-pressure-dar</p><p><b>meta</b>: </p><p><b>identifier</b>: urn:uuid:187e0c12-8dd2-67e2-99b2-bf273c878281</p><p><b>status</b>: final</p><p><b>category</b>: Vital Signs <span>(Details : {http://terminology.hl7.org/CodeSystem/observation-category code 'vital-signs' = 'Vital Signs', given as 'Vital Signs'})</span></p><p><b>code</b>: Blood pressure systolic &amp; diastolic <span>(Details : {LOINC code '85354-9' = 'Blood pressure panel with all children optional', given as 'Blood pressure panel with all children optional'})</span></p><p><b>subject</b>: <a>Patient/example</a></p><p><b>effective</b>: 17/09/2012</p><p><b>performer</b>: <a>Practitioner/example</a></p><p><b>interpretation</b>: Below low normal <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation code 'L' = 'Low', given as 'low'})</span></p><p><b>bodySite</b>: Right arm <span>(Details : {SNOMED CT code '368209003' = 'Right upper arm', given as 'Right arm'})</span></p><blockquote><p><b>component</b></p><p><b>code</b>: Systolic blood pressure <span>(Details : {LOINC code '8480-6' = 'Systolic blood pressure', given as 'Systolic blood pressure'}; {SNOMED CT code '271649006' = 'Systolic blood pressure', given as 'Systolic blood pressure'}; {http://acme.org/devices/clinical-codes code 'bp-s' = 'bp-s', given as 'Systolic Blood pressure'})</span></p><p><b>value</b>: 107 mmHg<span> (Details: UCUM code mm[Hg] = 'mmHg')</span></p></blockquote><blockquote><p><b>component</b></p><p><b>code</b>: Diastolic blood pressure <span>(Details : {LOINC code '8462-4' = 'Diastolic blood pressure', given as 'Diastolic blood pressure'})</span></p><p><b>dataAbsentReason</b>: Not Performed <span>(Details : {http://terminology.hl7.org/CodeSystem/data-absent-reason code 'not-performed' = 'Not Performed', given as 'Not Performed'})</span></p></blockquote></div>",
  },
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:uuid:187e0c12-8dd2-67e2-99b2-bf273c878281",
    },
  ],
  status: "final",
  category: [
    {
      coding: [
        {
          system: "http://terminology.hl7.org/CodeSystem/observation-category",
          code: "vital-signs",
          display: "Vital Signs",
        },
      ],
    },
  ],
  code: {
    coding: [
      {
        system: "http://loinc.org",
        code: "85354-9",
        display: "Blood pressure panel with all children optional",
      },
    ],
    text: "Blood pressure systolic & diastolic",
  },
  subject: {
    reference: "Patient/example",
  },
  effectiveDateTime: "2012-09-17",
  performer: [
    {
      reference: "Practitioner/example",
    },
  ],
  interpretation: [
    {
      coding: [
        {
          system:
            "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
          code: "L",
          display: "low",
        },
      ],
      text: "Below low normal",
    },
  ],
  bodySite: {
    coding: [
      {
        system: "http://snomed.info/sct",
        code: "368209003",
        display: "Right arm",
      },
    ],
  },
  component: [
    {
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "8480-6",
            display: "Systolic blood pressure",
          },
          {
            system: "http://snomed.info/sct",
            code: "271649006",
            display: "Systolic blood pressure",
          },
          {
            system: "http://acme.org/devices/clinical-codes",
            code: "bp-s",
            display: "Systolic Blood pressure",
          },
        ],
      },
      valueQuantity: {
        value: 107,
        unit: "mmHg",
        system: "http://unitsofmeasure.org",
        code: "mm[Hg]",
      },
    },
    {
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "8462-4",
            display: "Diastolic blood pressure",
          },
        ],
      },
      dataAbsentReason: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/data-absent-reason",
            code: "not-performed",
            display: "Not Performed",
          },
        ],
      },
    },
  ],
} as const;

export const ObservationExampleBloodpressure: Observation = {
  resourceType: "Observation",
  id: "blood-pressure",
  meta: {
    profile: ["http://hl7.org/fhir/StructureDefinition/vitalsigns"],
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
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: blood-pressure</p><p><b>meta</b>: </p><p><b>identifier</b>: urn:uuid:187e0c12-8dd2-67e2-99b2-bf273c878281</p><p><b>basedOn</b>: </p><p><b>status</b>: final</p><p><b>category</b>: Vital Signs <span>(Details : {http://terminology.hl7.org/CodeSystem/observation-category code 'vital-signs' = 'Vital Signs', given as 'Vital Signs'})</span></p><p><b>code</b>: Blood pressure systolic &amp; diastolic <span>(Details : {LOINC code '85354-9' = 'Blood pressure panel with all children optional', given as 'Blood pressure panel with all children optional'})</span></p><p><b>subject</b>: <a>Patient/example</a></p><p><b>effective</b>: 17/09/2012</p><p><b>performer</b>: <a>Practitioner/example</a></p><p><b>interpretation</b>: Below low normal <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation code 'L' = 'Low', given as 'low'})</span></p><p><b>bodySite</b>: Right arm <span>(Details : {SNOMED CT code '368209003' = 'Right upper arm', given as 'Right arm'})</span></p><blockquote><p><b>component</b></p><p><b>code</b>: Systolic blood pressure <span>(Details : {LOINC code '8480-6' = 'Systolic blood pressure', given as 'Systolic blood pressure'}; {SNOMED CT code '271649006' = 'Systolic blood pressure', given as 'Systolic blood pressure'}; {http://acme.org/devices/clinical-codes code 'bp-s' = 'bp-s', given as 'Systolic Blood pressure'})</span></p><p><b>value</b>: 107 mmHg<span> (Details: UCUM code mm[Hg] = 'mmHg')</span></p><p><b>interpretation</b>: Normal <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation code 'N' = 'Normal', given as 'normal'})</span></p></blockquote><blockquote><p><b>component</b></p><p><b>code</b>: Diastolic blood pressure <span>(Details : {LOINC code '8462-4' = 'Diastolic blood pressure', given as 'Diastolic blood pressure'})</span></p><p><b>value</b>: 60 mmHg<span> (Details: UCUM code mm[Hg] = 'mmHg')</span></p><p><b>interpretation</b>: Below low normal <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation code 'L' = 'Low', given as 'low'})</span></p></blockquote></div>",
  },
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:uuid:187e0c12-8dd2-67e2-99b2-bf273c878281",
    },
  ],
  basedOn: [
    {
      identifier: {
        system: "https://acme.org/identifiers",
        value: "1234",
      },
    },
  ],
  status: "final",
  category: [
    {
      coding: [
        {
          system: "http://terminology.hl7.org/CodeSystem/observation-category",
          code: "vital-signs",
          display: "Vital Signs",
        },
      ],
    },
  ],
  code: {
    coding: [
      {
        system: "http://loinc.org",
        code: "85354-9",
        display: "Blood pressure panel with all children optional",
      },
    ],
    text: "Blood pressure systolic & diastolic",
  },
  subject: {
    reference: "Patient/example",
  },
  effectiveDateTime: "2012-09-17",
  performer: [
    {
      reference: "Practitioner/example",
    },
  ],
  interpretation: [
    {
      coding: [
        {
          system:
            "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
          code: "L",
          display: "low",
        },
      ],
      text: "Below low normal",
    },
  ],
  bodySite: {
    coding: [
      {
        system: "http://snomed.info/sct",
        code: "368209003",
        display: "Right arm",
      },
    ],
  },
  component: [
    {
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "8480-6",
            display: "Systolic blood pressure",
          },
          {
            system: "http://snomed.info/sct",
            code: "271649006",
            display: "Systolic blood pressure",
          },
          {
            system: "http://acme.org/devices/clinical-codes",
            code: "bp-s",
            display: "Systolic Blood pressure",
          },
        ],
      },
      valueQuantity: {
        value: 107,
        unit: "mmHg",
        system: "http://unitsofmeasure.org",
        code: "mm[Hg]",
      },
      interpretation: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
              code: "N",
              display: "normal",
            },
          ],
          text: "Normal",
        },
      ],
    },
    {
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "8462-4",
            display: "Diastolic blood pressure",
          },
        ],
      },
      valueQuantity: {
        value: 60,
        unit: "mmHg",
        system: "http://unitsofmeasure.org",
        code: "mm[Hg]",
      },
      interpretation: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
              code: "L",
              display: "low",
            },
          ],
          text: "Below low normal",
        },
      ],
    },
  ],
} as const;

export const ObservationExampleBmd: Observation = {
  resourceType: "Observation",
  id: "bmd",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: bmd</p><p><b>status</b>: final</p><p><b>code</b>: BMD - Left Femur <span>(Details : {LOINC code '24701-5' = 'Femur DXA Bone density', given as 'Femur DXA Bone density'})</span></p><p><b>subject</b>: <a>Patient/pat2</a></p><p><b>performer</b>: <a>Acme Imaging Diagnostics</a></p><p><b>value</b>: 0.887 g/cm²<span> (Details: UCUM code g/cm-2 = 'g/cm-2')</span></p><p><b>bodySite</b>: Left Femur <span>(Details : {SNOMED CT code '71341001:272741003=7771000' = 'Femur where Laterality = Left)</span></p></div>",
  },
  status: "final",
  code: {
    coding: [
      {
        system: "http://loinc.org",
        code: "24701-5",
        display: "Femur DXA Bone density",
      },
    ],
    text: "BMD - Left Femur",
  },
  subject: {
    reference: "Patient/pat2",
  },
  performer: [
    {
      reference: "Organization/1832473e-2fe0-452d-abe9-3cdb9879522f",
      display: "Acme Imaging Diagnostics",
    },
  ],
  valueQuantity: {
    value: 0.887,
    unit: "g/cm²",
    system: "http://unitsofmeasure.org",
    code: "g/cm-2",
  },
  bodySite: {
    coding: [
      {
        system: "http://snomed.info/sct",
        code: "71341001:272741003=7771000",
      },
    ],
    text: "Left Femur",
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

export const ObservationExampleBmiUsingRelated: Observation = {
  resourceType: "Observation",
  id: "bmi-using-related",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: bmi-using-related</p><p><b>status</b>: final</p><p><b>category</b>: Vital Signs <span>(Details : {http://terminology.hl7.org/CodeSystem/observation-category code 'vital-signs' = 'Vital Signs', given as 'Vital Signs'})</span></p><p><b>code</b>: BMI <span>(Details : {LOINC code '39156-5' = 'Body mass index (BMI) [Ratio]', given as 'Body mass index (BMI) [Ratio]'})</span></p><p><b>subject</b>: <a>Patient/example</a></p><p><b>effective</b>: 02/07/1999</p><p><b>value</b>: 16.2 kg/m2<span> (Details: UCUM code kg/m2 = 'kg/m2')</span></p><p><b>derivedFrom</b>: </p><ul><li><a>Body Height</a></li><li><a>Body Weight</a></li></ul></div>",
  },
  status: "final",
  category: [
    {
      coding: [
        {
          system: "http://terminology.hl7.org/CodeSystem/observation-category",
          code: "vital-signs",
          display: "Vital Signs",
        },
      ],
      text: "Vital Signs",
    },
  ],
  code: {
    coding: [
      {
        system: "http://loinc.org",
        code: "39156-5",
        display: "Body mass index (BMI) [Ratio]",
      },
    ],
    text: "BMI",
  },
  subject: {
    reference: "Patient/example",
  },
  effectiveDateTime: "1999-07-02",
  valueQuantity: {
    value: 16.2,
    unit: "kg/m2",
    system: "http://unitsofmeasure.org",
    code: "kg/m2",
  },
  derivedFrom: [
    {
      reference: "Observation/bodyheight",
      display: "Body Height",
    },
    {
      reference: "Observation/example",
      display: "Body Weight",
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

export const ObservationExampleBmi: Observation = {
  resourceType: "Observation",
  id: "bmi",
  meta: {
    profile: ["http://hl7.org/fhir/StructureDefinition/vitalsigns"],
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
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: bmi</p><p><b>meta</b>: </p><p><b>status</b>: final</p><p><b>category</b>: Vital Signs <span>(Details : {http://terminology.hl7.org/CodeSystem/observation-category code 'vital-signs' = 'Vital Signs', given as 'Vital Signs'})</span></p><p><b>code</b>: BMI <span>(Details : {LOINC code '39156-5' = 'Body mass index (BMI) [Ratio]', given as 'Body mass index (BMI) [Ratio]'})</span></p><p><b>subject</b>: <a>Patient/example</a></p><p><b>effective</b>: 02/07/1999</p><p><b>value</b>: 16.2 kg/m2<span> (Details: UCUM code kg/m2 = 'kg/m2')</span></p></div>",
  },
  status: "final",
  category: [
    {
      coding: [
        {
          system: "http://terminology.hl7.org/CodeSystem/observation-category",
          code: "vital-signs",
          display: "Vital Signs",
        },
      ],
      text: "Vital Signs",
    },
  ],
  code: {
    coding: [
      {
        system: "http://loinc.org",
        code: "39156-5",
        display: "Body mass index (BMI) [Ratio]",
      },
    ],
    text: "BMI",
  },
  subject: {
    reference: "Patient/example",
  },
  effectiveDateTime: "1999-07-02",
  valueQuantity: {
    value: 16.2,
    unit: "kg/m2",
    system: "http://unitsofmeasure.org",
    code: "kg/m2",
  },
} as const;

export const ObservationExampleBodyHeight: Observation = {
  resourceType: "Observation",
  id: "body-height",
  meta: {
    profile: ["http://hl7.org/fhir/StructureDefinition/vitalsigns"],
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
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: body-height</p><p><b>meta</b>: </p><p><b>status</b>: final</p><p><b>category</b>: Vital Signs <span>(Details : {http://terminology.hl7.org/CodeSystem/observation-category code 'vital-signs' = 'Vital Signs', given as 'Vital Signs'})</span></p><p><b>code</b>: Body height <span>(Details : {LOINC code '8302-2' = 'Body height', given as 'Body height'})</span></p><p><b>subject</b>: <a>Patient/example</a></p><p><b>effective</b>: 02/07/1999</p><p><b>value</b>: 66.899999999999991 in<span> (Details: UCUM code [in_i] = 'in_i')</span></p></div>",
  },
  status: "final",
  category: [
    {
      coding: [
        {
          system: "http://terminology.hl7.org/CodeSystem/observation-category",
          code: "vital-signs",
          display: "Vital Signs",
        },
      ],
      text: "Vital Signs",
    },
  ],
  code: {
    coding: [
      {
        system: "http://loinc.org",
        code: "8302-2",
        display: "Body height",
      },
    ],
    text: "Body height",
  },
  subject: {
    reference: "Patient/example",
  },
  effectiveDateTime: "1999-07-02",
  valueQuantity: {
    value: 66.89999999999999,
    unit: "in",
    system: "http://unitsofmeasure.org",
    code: "[in_i]",
  },
} as const;

export const ObservationExampleBodyLength: Observation = {
  resourceType: "Observation",
  id: "body-length",
  meta: {
    profile: ["http://hl7.org/fhir/StructureDefinition/vitalsigns"],
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
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: body-length</p><p><b>meta</b>: </p><p><b>status</b>: final</p><p><b>category</b>: Vital Signs <span>(Details : {http://terminology.hl7.org/CodeSystem/observation-category code 'vital-signs' = 'Vital Signs', given as 'Vital Signs'})</span></p><p><b>code</b>: Body Length <span>(Details : {LOINC code '8302-2' = 'Body height', given as 'Body height'}; {LOINC code '8306-3' = 'Body height --lying', given as 'Body height --lying'})</span></p><p><b>subject</b>: <a>Patient/example</a></p><p><b>effective</b>: 02/07/1999</p><p><b>value</b>: 25 cm<span> (Details: UCUM code cm = 'cm')</span></p></div>",
  },
  status: "final",
  category: [
    {
      coding: [
        {
          system: "http://terminology.hl7.org/CodeSystem/observation-category",
          code: "vital-signs",
          display: "Vital Signs",
        },
      ],
      text: "Vital Signs",
    },
  ],
  code: {
    coding: [
      {
        system: "http://loinc.org",
        code: "8302-2",
        display: "Body height",
      },
      {
        system: "http://loinc.org",
        code: "8306-3",
        display: "Body height --lying",
        userSelected: true,
      },
    ],
    text: "Body Length",
  },
  subject: {
    reference: "Patient/example",
  },
  effectiveDateTime: "1999-07-02",
  valueQuantity: {
    value: 25,
    unit: "cm",
    system: "http://unitsofmeasure.org",
    code: "cm",
  },
} as const;

export const ObservationExampleBodyTemperature: Observation = {
  resourceType: "Observation",
  id: "body-temperature",
  meta: {
    profile: ["http://hl7.org/fhir/StructureDefinition/vitalsigns"],
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
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: body-temperature</p><p><b>meta</b>: </p><p><b>status</b>: final</p><p><b>category</b>: Vital Signs <span>(Details : {http://terminology.hl7.org/CodeSystem/observation-category code 'vital-signs' = 'Vital Signs', given as 'Vital Signs'})</span></p><p><b>code</b>: Body temperature <span>(Details : {LOINC code '8310-5' = 'Body temperature', given as 'Body temperature'})</span></p><p><b>subject</b>: <a>Patient/example</a></p><p><b>effective</b>: 02/07/1999</p><p><b>value</b>: 36.5 C<span> (Details: UCUM code Cel = 'Cel')</span></p></div>",
  },
  status: "final",
  category: [
    {
      coding: [
        {
          system: "http://terminology.hl7.org/CodeSystem/observation-category",
          code: "vital-signs",
          display: "Vital Signs",
        },
      ],
      text: "Vital Signs",
    },
  ],
  code: {
    coding: [
      {
        system: "http://loinc.org",
        code: "8310-5",
        display: "Body temperature",
      },
    ],
    text: "Body temperature",
  },
  subject: {
    reference: "Patient/example",
  },
  effectiveDateTime: "1999-07-02",
  valueQuantity: {
    value: 36.5,
    unit: "C",
    system: "http://unitsofmeasure.org",
    code: "Cel",
  },
} as const;

export const ObservationExampleClinicalGender: Observation = {
  resourceType: "Observation",
  id: "clinical-gender",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: clinical-gender</p><p><b>status</b>: final</p><p><b>category</b>: Social History <span>(Details : {http://terminology.hl7.org/CodeSystem/observation-category code 'social-history' = 'Social History', given as 'Social History'})</span></p><p><b>code</b>: Gender identity <span>(Details : {LOINC code '76691-5' = 'Gender identity', given as 'Gender identity'})</span></p><p><b>subject</b>: <a>Patient/example</a></p><p><b>encounter</b>: <a>Encounter/example</a></p><p><b>effective</b>: 01/02/2018</p><p><b>performer</b>: <a>Encounter/example</a></p><p><b>value</b>: Feminism in boy <span>(Details : {SNOMED CT code '191788006' = 'Feminism in boy', given as 'Feminism in boy (finding)'})</span></p></div>",
  },
  status: "final",
  category: [
    {
      coding: [
        {
          system: "http://terminology.hl7.org/CodeSystem/observation-category",
          code: "social-history",
          display: "Social History",
        },
      ],
    },
  ],
  code: {
    coding: [
      {
        system: "http://loinc.org",
        code: "76691-5",
        display: "Gender identity",
      },
    ],
    text: "Gender identity",
  },
  subject: {
    reference: "Patient/example",
  },
  encounter: {
    reference: "Encounter/example",
  },
  effectiveDateTime: "2018-02-01",
  performer: [
    {
      reference: "Encounter/example",
    },
  ],
  valueCodeableConcept: {
    coding: [
      {
        system: "http://snomed.info/sct",
        code: "191788006",
        display: "Feminism in boy (finding)",
      },
    ],
    text: "Feminism in boy",
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

export const ObservationExampleDateLastmp: Observation = {
  resourceType: "Observation",
  id: "date-lastmp",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: date-lastmp</p><p><b>status</b>: final</p><p><b>category</b>: AOE <span>(Details : {http://terminology.hl7.org/CodeSystem/observation-category code 'survey' = 'Survey', given as 'Survey'})</span></p><p><b>code</b>: Date last menstrual period <span>(Details : {LOINC code '8665-2' = 'Last menstrual period start date', given as 'Date last menstrual period'})</span></p><p><b>subject</b>: <a>Patient/pat2</a></p><p><b>effective</b>: 24/01/2016</p><p><b>value</b>: 30/12/2016</p></div>",
  },
  status: "final",
  category: [
    {
      coding: [
        {
          system: "http://terminology.hl7.org/CodeSystem/observation-category",
          code: "survey",
          display: "Survey",
        },
      ],
      text: "AOE",
    },
  ],
  code: {
    coding: [
      {
        system: "http://loinc.org",
        code: "8665-2",
        display: "Date last menstrual period",
      },
    ],
    text: "Date last menstrual period",
  },
  subject: {
    reference: "Patient/pat2",
  },
  effectiveDateTime: "2016-01-24",
  valueDateTime: "2016-12-30",
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

export const ObservationExampleDiplotype1: Observation = {
  resourceType: "Observation",
  id: "example-diplotype1",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: example-diplotype1</p><p><b>status</b>: final</p><p><b>code</b>: Diplotype Call <span>(Details : {SNOMED CT code '363779003' = 'Genotype determination', given as 'Genotype determination'})</span></p><p><b>subject</b>: <a>J*********** C***********</a></p><p><b>issued</b>: 03/04/2013 3:30:10 PM</p><p><b>specimen</b>: <a>Molecular Specimen ID: MLD45-Z4-1234</a></p><p><b>derivedFrom</b>: </p><ul><li><a>Observation/example-haplotype1</a></li><li><a>Observation/example-haplotype2</a></li></ul></div>",
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/observation-geneticsGene",
      valueCodeableConcept: {
        coding: [
          {
            system: "http://www.genenames.org",
            code: "2623",
            display: "CYP2C9",
          },
        ],
      },
    },
  ],
  status: "final",
  code: {
    coding: [
      {
        system: "http://snomed.info/sct",
        code: "363779003",
        display: "Genotype determination",
      },
    ],
    text: "Diplotype Call",
  },
  subject: {
    reference: "Patient/727127",
    display: "J*********** C***********",
  },
  issued: "2013-04-03T15:30:10+01:00",
  specimen: {
    reference: "Specimen/genetics-example1-somatic",
    display: "Molecular Specimen ID: MLD45-Z4-1234",
  },
  derivedFrom: [
    {
      reference: "Observation/example-haplotype1",
    },
    {
      reference: "Observation/example-haplotype2",
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

export const ObservationExampleEyeColor: Observation = {
  resourceType: "Observation",
  id: "eye-color",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: eye-color</p><p><b>status</b>: final</p><p><b>code</b>: eye color <span>(Details )</span></p><p><b>subject</b>: <a>Patient/example</a></p><p><b>effective</b>: 18/05/2016</p><p><b>value</b>: blue</p></div>',
  },
  status: "final",
  code: {
    text: "eye color",
  },
  subject: {
    reference: "Patient/example",
  },
  effectiveDateTime: "2016-05-18",
  valueString: "blue",
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

export const ObservationExampleF001Glucose: Observation = {
  resourceType: "Observation",
  id: "f001",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: f001</p><p><b>identifier</b>: 6323 (OFFICIAL)</p><p><b>status</b>: final</p><p><b>code</b>: Glucose [Moles/volume] in Blood <span>(Details : {LOINC code '15074-8' = 'Glucose [Moles/volume] in Blood', given as 'Glucose [Moles/volume] in Blood'})</span></p><p><b>subject</b>: <a>P. van de Heuvel</a></p><p><b>effective</b>: 02/04/2013 9:30:10 AM --&gt; (ongoing)</p><p><b>issued</b>: 03/04/2013 3:30:10 PM</p><p><b>performer</b>: <a>A. Langeveld</a></p><p><b>value</b>: 6.3 mmol/l<span> (Details: UCUM code mmol/L = 'mmol/L')</span></p><p><b>interpretation</b>: High <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation code 'H' = 'High', given as 'High'})</span></p><h3>ReferenceRanges</h3><table><tr><td>-</td><td><b>Low</b></td><td><b>High</b></td></tr><tr><td>*</td><td>3.1 mmol/l<span> (Details: UCUM code mmol/L = 'mmol/L')</span></td><td>6.2 mmol/l<span> (Details: UCUM code mmol/L = 'mmol/L')</span></td></tr></table></div>",
  },
  identifier: [
    {
      use: "official",
      system: "http://www.bmc.nl/zorgportal/identifiers/observations",
      value: "6323",
    },
  ],
  status: "final",
  code: {
    coding: [
      {
        system: "http://loinc.org",
        code: "15074-8",
        display: "Glucose [Moles/volume] in Blood",
      },
    ],
  },
  subject: {
    reference: "Patient/f001",
    display: "P. van de Heuvel",
  },
  effectivePeriod: {
    start: "2013-04-02T09:30:10+01:00",
  },
  issued: "2013-04-03T15:30:10+01:00",
  performer: [
    {
      reference: "Practitioner/f005",
      display: "A. Langeveld",
    },
  ],
  valueQuantity: {
    value: 6.3,
    unit: "mmol/l",
    system: "http://unitsofmeasure.org",
    code: "mmol/L",
  },
  interpretation: [
    {
      coding: [
        {
          system:
            "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
          code: "H",
          display: "High",
        },
      ],
    },
  ],
  referenceRange: [
    {
      low: {
        value: 3.1,
        unit: "mmol/l",
        system: "http://unitsofmeasure.org",
        code: "mmol/L",
      },
      high: {
        value: 6.2,
        unit: "mmol/l",
        system: "http://unitsofmeasure.org",
        code: "mmol/L",
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

export const ObservationExampleF002Excess: Observation = {
  resourceType: "Observation",
  id: "f002",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: f002</p><p><b>identifier</b>: 6324 (OFFICIAL)</p><p><b>status</b>: final</p><p><b>code</b>: Base excess in Blood by calculation <span>(Details : {LOINC code '11555-0' = 'Base excess in Blood by calculation', given as 'Base excess in Blood by calculation'})</span></p><p><b>subject</b>: <a>P. van de Heuvel</a></p><p><b>effective</b>: 02/04/2013 10:30:10 AM --&gt; 05/04/2013 10:30:10 AM</p><p><b>issued</b>: 03/04/2013 3:30:10 PM</p><p><b>performer</b>: <a>A. Langeveld</a></p><p><b>value</b>: 12.6 mmol/l<span> (Details: UCUM code mmol/L = 'mmol/L')</span></p><p><b>interpretation</b>: High <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation code 'H' = 'High', given as 'High'})</span></p><h3>ReferenceRanges</h3><table><tr><td>-</td><td><b>Low</b></td><td><b>High</b></td></tr><tr><td>*</td><td>7.1 mmol/l<span> (Details: UCUM code mmol/L = 'mmol/L')</span></td><td>11.2 mmol/l<span> (Details: UCUM code mmol/L = 'mmol/L')</span></td></tr></table></div>",
  },
  identifier: [
    {
      use: "official",
      system: "http://www.bmc.nl/zorgportal/identifiers/observations",
      value: "6324",
    },
  ],
  status: "final",
  code: {
    coding: [
      {
        system: "http://loinc.org",
        code: "11555-0",
        display: "Base excess in Blood by calculation",
      },
    ],
  },
  subject: {
    reference: "Patient/f001",
    display: "P. van de Heuvel",
  },
  effectivePeriod: {
    start: "2013-04-02T10:30:10+01:00",
    end: "2013-04-05T10:30:10+01:00",
  },
  issued: "2013-04-03T15:30:10+01:00",
  performer: [
    {
      reference: "Practitioner/f005",
      display: "A. Langeveld",
    },
  ],
  valueQuantity: {
    value: 12.6,
    unit: "mmol/l",
    system: "http://unitsofmeasure.org",
    code: "mmol/L",
  },
  interpretation: [
    {
      coding: [
        {
          system:
            "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
          code: "H",
          display: "High",
        },
      ],
    },
  ],
  referenceRange: [
    {
      low: {
        value: 7.1,
        unit: "mmol/l",
        system: "http://unitsofmeasure.org",
        code: "mmol/L",
      },
      high: {
        value: 11.2,
        unit: "mmol/l",
        system: "http://unitsofmeasure.org",
        code: "mmol/L",
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

export const ObservationExampleF003Co2: Observation = {
  resourceType: "Observation",
  id: "f003",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: f003</p><p><b>identifier</b>: 6325 (OFFICIAL)</p><p><b>status</b>: final</p><p><b>code</b>: Carbon dioxide in blood <span>(Details : {LOINC code '11557-6' = 'Carbon dioxide [Partial pressure] in Blood', given as 'Carbon dioxide in blood'})</span></p><p><b>subject</b>: <a>P. van de Heuvel</a></p><p><b>effective</b>: 02/04/2013 10:30:10 AM --&gt; 05/04/2013 10:30:10 AM</p><p><b>issued</b>: 03/04/2013 3:30:10 PM</p><p><b>performer</b>: <a>A. Langeveld</a></p><p><b>value</b>: 6.2 kPa<span> (Details: UCUM code kPa = 'kPa')</span></p><p><b>interpretation</b>: High <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation code 'H' = 'High', given as 'High'})</span></p><h3>ReferenceRanges</h3><table><tr><td>-</td><td><b>Low</b></td><td><b>High</b></td></tr><tr><td>*</td><td>4.8 kPa<span> (Details: UCUM code kPa = 'kPa')</span></td><td>6.0 kPa<span> (Details: UCUM code kPa = 'kPa')</span></td></tr></table></div>",
  },
  identifier: [
    {
      use: "official",
      system: "http://www.bmc.nl/zorgportal/identifiers/observations",
      value: "6325",
    },
  ],
  status: "final",
  code: {
    coding: [
      {
        system: "http://loinc.org",
        code: "11557-6",
        display: "Carbon dioxide in blood",
      },
    ],
  },
  subject: {
    reference: "Patient/f001",
    display: "P. van de Heuvel",
  },
  effectivePeriod: {
    start: "2013-04-02T10:30:10+01:00",
    end: "2013-04-05T10:30:10+01:00",
  },
  issued: "2013-04-03T15:30:10+01:00",
  performer: [
    {
      reference: "Practitioner/f005",
      display: "A. Langeveld",
    },
  ],
  valueQuantity: {
    value: 6.2,
    unit: "kPa",
    system: "http://unitsofmeasure.org",
    code: "kPa",
  },
  interpretation: [
    {
      coding: [
        {
          system:
            "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
          code: "H",
          display: "High",
        },
      ],
    },
  ],
  referenceRange: [
    {
      low: {
        value: 4.8,
        unit: "kPa",
        system: "http://unitsofmeasure.org",
        code: "kPa",
      },
      high: {
        value: 6,
        unit: "kPa",
        system: "http://unitsofmeasure.org",
        code: "kPa",
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

export const ObservationExampleF004Erythrocyte: Observation = {
  resourceType: "Observation",
  id: "f004",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: f004</p><p><b>identifier</b>: 6326 (OFFICIAL)</p><p><b>status</b>: final</p><p><b>code</b>: Erythrocytes [#/volume] in Blood by Automated count <span>(Details : {LOINC code '789-8' = 'Erythrocytes [#/volume] in Blood by Automated count', given as 'Erythrocytes [#/volume] in Blood by Automated count'})</span></p><p><b>subject</b>: <a>P. van de Heuvel</a></p><p><b>effective</b>: 02/04/2013 10:30:10 AM --&gt; 05/04/2013 10:30:10 AM</p><p><b>issued</b>: 03/04/2013 3:30:10 PM</p><p><b>performer</b>: <a>A. Langeveld</a></p><p><b>value</b>: 4.12 10^12/L<span> (Details: UCUM code 10*12/L = '10*12/L')</span></p><p><b>interpretation</b>: Low <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation code 'L' = 'Low', given as 'Low'})</span></p><h3>ReferenceRanges</h3><table><tr><td>-</td><td><b>Text</b></td></tr><tr><td>*</td><td> 12-14 y Male: 4.4 - 5.2  x  10^12/L ; 12-14 y Female: 4.2 - 4.8  x  10^12/L ; 15-17 y Male: 4.6 - 5.4  x  10^12/L ; 15-17 y Female: 4.2 - 4.8  x  10^12/L ; 18-64 y Male: 4.6 - 5.4  x  10^12/L ; 18-64 y Female: 4.0 - 4.8  x  10^12/L ; 65-74 y Male: 4.3 - 5.3  x  10^12/L ; 65-74 y Female: 4.1 - 4.9  x  10^12/L       </td></tr></table></div>",
  },
  identifier: [
    {
      use: "official",
      system: "http://www.bmc.nl/zorgportal/identifiers/observations",
      value: "6326",
    },
  ],
  status: "final",
  code: {
    coding: [
      {
        system: "http://loinc.org",
        code: "789-8",
        display: "Erythrocytes [#/volume] in Blood by Automated count",
      },
    ],
  },
  subject: {
    reference: "Patient/f001",
    display: "P. van de Heuvel",
  },
  effectivePeriod: {
    start: "2013-04-02T10:30:10+01:00",
    end: "2013-04-05T10:30:10+01:00",
  },
  issued: "2013-04-03T15:30:10+01:00",
  performer: [
    {
      reference: "Practitioner/f005",
      display: "A. Langeveld",
    },
  ],
  valueQuantity: {
    value: 4.12,
    unit: "10^12/L",
    system: "http://unitsofmeasure.org",
    code: "10*12/L",
  },
  interpretation: [
    {
      coding: [
        {
          system:
            "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
          code: "L",
          display: "Low",
        },
      ],
    },
  ],
  referenceRange: [
    {
      text: " 12-14 y Male: 4.4 - 5.2  x  10^12/L ; 12-14 y Female: 4.2 - 4.8  x  10^12/L ; 15-17 y Male: 4.6 - 5.4  x  10^12/L ; 15-17 y Female: 4.2 - 4.8  x  10^12/L ; 18-64 y Male: 4.6 - 5.4  x  10^12/L ; 18-64 y Female: 4.0 - 4.8  x  10^12/L ; 65-74 y Male: 4.3 - 5.3  x  10^12/L ; 65-74 y Female: 4.1 - 4.9  x  10^12/L       ",
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

export const ObservationExampleF005Hemoglobin: Observation = {
  resourceType: "Observation",
  id: "f005",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: f005</p><p><b>identifier</b>: 6327 (OFFICIAL)</p><p><b>status</b>: final</p><p><b>code</b>: Hemoglobin [Mass/volume] in Blood <span>(Details : {LOINC code '718-7' = 'Hemoglobin [Mass/volume] in Blood', given as 'Hemoglobin [Mass/volume] in Blood'})</span></p><p><b>subject</b>: <a>P. van de Heuvel</a></p><p><b>effective</b>: 05/04/2013 10:30:10 AM --&gt; 05/04/2013 10:30:10 AM</p><p><b>issued</b>: 05/04/2013 3:30:10 PM</p><p><b>performer</b>: <a>A. Langeveld</a></p><p><b>value</b>: 7.2 g/dl<span> (Details: UCUM code g/dL = 'g/dL')</span></p><p><b>interpretation</b>: Low <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation code 'L' = 'Low', given as 'Low'})</span></p><h3>ReferenceRanges</h3><table><tr><td>-</td><td><b>Low</b></td><td><b>High</b></td></tr><tr><td>*</td><td>7.5 g/dl<span> (Details: UCUM code g/dL = 'g/dL')</span></td><td>10 g/dl<span> (Details: UCUM code g/dL = 'g/dL')</span></td></tr></table></div>",
  },
  identifier: [
    {
      use: "official",
      system: "http://www.bmc.nl/zorgportal/identifiers/observations",
      value: "6327",
    },
  ],
  status: "final",
  code: {
    coding: [
      {
        system: "http://loinc.org",
        code: "718-7",
        display: "Hemoglobin [Mass/volume] in Blood",
      },
    ],
  },
  subject: {
    reference: "Patient/f001",
    display: "P. van de Heuvel",
  },
  effectivePeriod: {
    start: "2013-04-05T10:30:10+01:00",
    end: "2013-04-05T10:30:10+01:00",
  },
  issued: "2013-04-05T15:30:10+01:00",
  performer: [
    {
      reference: "Practitioner/f005",
      display: "A. Langeveld",
    },
  ],
  valueQuantity: {
    value: 7.2,
    unit: "g/dl",
    system: "http://unitsofmeasure.org",
    code: "g/dL",
  },
  interpretation: [
    {
      coding: [
        {
          system:
            "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
          code: "L",
          display: "Low",
        },
      ],
    },
  ],
  referenceRange: [
    {
      low: {
        value: 7.5,
        unit: "g/dl",
        system: "http://unitsofmeasure.org",
        code: "g/dL",
      },
      high: {
        value: 10,
        unit: "g/dl",
        system: "http://unitsofmeasure.org",
        code: "g/dL",
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

export const ObservationExampleF202Temperature: Observation = {
  resourceType: "Observation",
  id: "f202",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: f202</p><p><b>status</b>: entered-in-error</p><p><b>category</b>: Vital Signs <span>(Details : {http://terminology.hl7.org/CodeSystem/observation-category code 'vital-signs' = 'Vital Signs', given as 'Vital Signs'})</span></p><p><b>code</b>: Temperature <span>(Details : {http://acme.lab code 'BT' = 'BT', given as 'Body temperature'}; {LOINC code '8310-5' = 'Body temperature', given as 'Body temperature'}; {LOINC code '8331-1' = 'Oral temperature', given as 'Oral temperature'}; {SNOMED CT code '56342008' = 'Temperature taking', given as 'Temperature taking'})</span></p><p><b>subject</b>: <a>Roel</a></p><p><b>issued</b>: 04/04/2013 1:27:00 PM</p><p><b>performer</b>: <a>Practitioner/f201</a></p><p><b>value</b>: 39 degrees C<span> (Details: UCUM code Cel = 'Cel')</span></p><p><b>interpretation</b>: High <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation code 'H' = 'High)</span></p><p><b>bodySite</b>: Oral cavity <span>(Details : {SNOMED CT code '74262004' = 'Oral cavity', given as 'Oral cavity'})</span></p><p><b>method</b>: Oral temperature taking <span>(Details : {SNOMED CT code '89003005' = 'Oral temperature taking', given as 'Oral temperature taking'})</span></p><h3>ReferenceRanges</h3><table><tr><td>-</td><td><b>High</b></td></tr><tr><td>*</td><td>38.2 degrees C</td></tr></table></div>",
  },
  status: "entered-in-error",
  category: [
    {
      coding: [
        {
          system: "http://terminology.hl7.org/CodeSystem/observation-category",
          code: "vital-signs",
          display: "Vital Signs",
        },
      ],
    },
  ],
  code: {
    coding: [
      {
        system: "http://acme.lab",
        code: "BT",
        display: "Body temperature",
      },
      {
        system: "http://loinc.org",
        code: "8310-5",
        display: "Body temperature",
      },
      {
        system: "http://loinc.org",
        code: "8331-1",
        display: "Oral temperature",
      },
      {
        system: "http://snomed.info/sct",
        code: "56342008",
        display: "Temperature taking",
      },
    ],
    text: "Temperature",
  },
  subject: {
    reference: "Patient/f201",
    display: "Roel",
  },
  issued: "2013-04-04T13:27:00+01:00",
  performer: [
    {
      reference: "Practitioner/f201",
    },
  ],
  valueQuantity: {
    value: 39,
    unit: "degrees C",
    system: "http://unitsofmeasure.org",
    code: "Cel",
  },
  interpretation: [
    {
      coding: [
        {
          system:
            "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
          code: "H",
        },
      ],
    },
  ],
  bodySite: {
    coding: [
      {
        system: "http://snomed.info/sct",
        code: "74262004",
        display: "Oral cavity",
      },
    ],
  },
  method: {
    coding: [
      {
        system: "http://snomed.info/sct",
        code: "89003005",
        display: "Oral temperature taking",
      },
    ],
  },
  referenceRange: [
    {
      high: {
        value: 38.2,
        unit: "degrees C",
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

export const ObservationExampleF203Bicarbonate: Observation = {
  resourceType: "Observation",
  id: "f203",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: f203</p><p><b>identifier</b>: 1304-03720-Bicarbonate</p><p><b>status</b>: final</p><p><b>code</b>: Bicarbonate [Moles/?volume] in Serum <span>(Details : {LOINC code '1963-8' = 'Bicarbonate [Moles/volume] in Serum', given as 'Bicarbonate [Moles/?volume] in Serum'}; {SNOMED CT code '365722008' = 'Bicarbonate level - finding', given as 'Bicarbonate level'})</span></p><p><b>subject</b>: <a>Roel</a></p><p><b>issued</b>: 04/04/2013 2:34:00 PM</p><p><b>performer</b>: <a>Luigi Maas</a></p><p><b>value</b>: 28 mmol/L<span> (Details: SNOMED CT code 258813002 = 'mM')</span></p><p><b>interpretation</b>: Serum bicarbonate level normal <span>(Details : {SNOMED CT code '166698001' = 'Serum bicarbonate level normal', given as 'Serum bicarbonate level normal'}; {http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation code 'N' = 'Normal)</span></p><p><b>method</b>: enzymatic method <span>(Details )</span></p><h3>ReferenceRanges</h3><table><tr><td>-</td><td><b>Low</b></td><td><b>High</b></td><td><b>Type</b></td></tr><tr><td>*</td><td>22</td><td>29</td><td>Normal Range <span>(Details : {http://terminology.hl7.org/CodeSystem/referencerange-meaning code 'normal' = 'Normal Range', given as 'Normal Range'})</span></td></tr></table></div>",
  },
  identifier: [
    {
      system: "https://intranet.aumc.nl/labvalues",
      value: "1304-03720-Bicarbonate",
    },
  ],
  status: "final",
  code: {
    coding: [
      {
        system: "http://loinc.org",
        code: "1963-8",
        display: "Bicarbonate [Moles/?volume] in Serum",
      },
      {
        system: "http://snomed.info/sct",
        code: "365722008",
        display: "Bicarbonate level",
      },
    ],
  },
  subject: {
    reference: "Patient/f201",
    display: "Roel",
  },
  issued: "2013-04-04T14:34:00+01:00",
  performer: [
    {
      reference: "Practitioner/f202",
      display: "Luigi Maas",
    },
  ],
  valueQuantity: {
    value: 28,
    unit: "mmol/L",
    system: "http://snomed.info/sct",
    code: "258813002",
  },
  interpretation: [
    {
      coding: [
        {
          system: "http://snomed.info/sct",
          code: "166698001",
          display: "Serum bicarbonate level normal",
        },
        {
          system:
            "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
          code: "N",
        },
      ],
    },
  ],
  method: {
    text: "enzymatic method",
  },
  referenceRange: [
    {
      low: {
        value: 22,
      },
      high: {
        value: 29,
      },
      type: {
        coding: [
          {
            system:
              "http://terminology.hl7.org/CodeSystem/referencerange-meaning",
            code: "normal",
            display: "Normal Range",
          },
        ],
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

export const ObservationExampleF204Creatinine: Observation = {
  resourceType: "Observation",
  id: "f204",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: f204</p><p><b>identifier</b>: 1304-03720-Creatinine</p><p><b>status</b>: final</p><p><b>code</b>: Creatinine(Serum) <span>(Details : {https://intranet.aumc.nl/labtestcodes code '20005' = '20005', given as 'Creatinine(Serum)'})</span></p><p><b>subject</b>: <a>Roel</a></p><p><b>issued</b>: 04/04/2013 2:34:00 PM</p><p><b>performer</b>: <a>Luigi Maas</a></p><p><b>value</b>: 122 umol/L<span> (Details: SNOMED CT code 258814008 = 'umol/L')</span></p><p><b>interpretation</b>: Serum creatinine raised <span>(Details : {SNOMED CT code '166717003' = 'Serum creatinine raised', given as 'Serum creatinine raised'}; {http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation code 'H' = 'High)</span></p><h3>ReferenceRanges</h3><table><tr><td>-</td><td><b>Low</b></td><td><b>High</b></td><td><b>Type</b></td></tr><tr><td>*</td><td>64</td><td>104</td><td>Normal Range <span>(Details : {http://terminology.hl7.org/CodeSystem/referencerange-meaning code 'normal' = 'Normal Range', given as 'Normal Range'})</span></td></tr></table></div>",
  },
  identifier: [
    {
      system: "https://intranet.aumc.nl/labvalues",
      value: "1304-03720-Creatinine",
    },
  ],
  status: "final",
  code: {
    coding: [
      {
        system: "https://intranet.aumc.nl/labtestcodes",
        code: "20005",
        display: "Creatinine(Serum)",
      },
    ],
  },
  subject: {
    reference: "Patient/f201",
    display: "Roel",
  },
  issued: "2013-04-04T14:34:00+01:00",
  performer: [
    {
      reference: "Practitioner/f202",
      display: "Luigi Maas",
    },
  ],
  valueQuantity: {
    value: 122,
    unit: "umol/L",
    system: "http://snomed.info/sct",
    code: "258814008",
  },
  interpretation: [
    {
      coding: [
        {
          system: "http://snomed.info/sct",
          code: "166717003",
          display: "Serum creatinine raised",
        },
        {
          system:
            "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
          code: "H",
        },
      ],
    },
  ],
  referenceRange: [
    {
      low: {
        value: 64,
      },
      high: {
        value: 104,
      },
      type: {
        coding: [
          {
            system:
              "http://terminology.hl7.org/CodeSystem/referencerange-meaning",
            code: "normal",
            display: "Normal Range",
          },
        ],
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

export const ObservationExampleF205Egfr: Observation = {
  resourceType: "Observation",
  id: "f205",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: f205</p><p><b>identifier</b>: 1304-03720-eGFR</p><p><b>status</b>: final</p><p><b>code</b>: Glomerular filtration rate/1.73 sq M.predicted [Volume Rate/Area] in Serum or Plasma by Creatinine-based formula (MDRD) <span>(Details : {LOINC code '33914-3' = 'Glomerular filtration rate/1.73 sq M.predicted by Creatinine-based formula (MDRD)', given as 'Glomerular filtration rate/1.73 sq M.predicted [Volume Rate/Area] in Serum or Plasma by Creatinine-based formula (MDRD)'})</span></p><p><b>subject</b>: <a>Roel</a></p><p><b>issued</b>: 04/04/2013 2:34:00 PM</p><p><b>performer</b>: <a>Luigi Maas</a></p><p><b>interpretation</b>: interpretation of results should be assigned based upon the level of kindey function <span>(Details )</span></p><p><b>note</b>: GFR estimating equations developed by the Modification of Diet in Renal Disease (MDRD) Study Group and the Chronic Kidney Disease Epidemiology Collaboration (CKD-EPI)....</p><p><b>method</b>: MDRD <span>(Details : {SNOMED CT code '702668005' = 'Modification of diet in renal disease formula', given as 'MDRD'})</span></p><blockquote><p><b>component</b></p><p><b>code</b>: Glomerular filtration rate/1.73 sq M predicted among blacks [Volume Rate/?Area] in Serum or Plasma by Creatinine-based formula (MDRD) <span>(Details : {LOINC code '48643-1' = 'Glomerular filtration rate/1.73 sq M predicted among blacks by Creatinine-based formula (MDRD)', given as 'Glomerular filtration rate/1.73 sq M predicted among blacks [Volume Rate/?Area] in Serum or Plasma by Creatinine-based formula (MDRD)'})</span></p><p><b>value</b>: &gt;60 mL/min/1.73m2<span> (Details: UCUM code mL/min/{1.73_m2} = 'mL/min/{1.73_m2}')</span></p><h3>ReferenceRanges</h3><table><tr><td>-</td></tr><tr><td>*</td></tr></table></blockquote><blockquote><p><b>component</b></p><p><b>code</b>: Glomerular filtration rate/1.73 sq M predicted among non-blacks [Volume Rate/Area] in Serum or Plasma by Creatinine-based formula (MDRD) <span>(Details : {LOINC code '48642-3' = 'Glomerular filtration rate/1.73 sq M predicted among non-blacks by Creatinine-based formula (MDRD)', given as 'Glomerular filtration rate/1.73 sq M predicted among non-blacks [Volume Rate/Area] in Serum or Plasma by Creatinine-based formula (MDRD)'})</span></p><p><b>value</b>: 60 mL/min/1.73m2<span> (Details: UCUM code mL/min/{1.73_m2} = 'mL/min/{1.73_m2}')</span></p><h3>ReferenceRanges</h3><table><tr><td>-</td></tr><tr><td>*</td></tr></table></blockquote></div>",
  },
  identifier: [
    {
      system: "https://intranet.aumc.nl/labvalues",
      value: "1304-03720-eGFR",
    },
  ],
  status: "final",
  code: {
    coding: [
      {
        system: "http://loinc.org",
        code: "33914-3",
        display:
          "Glomerular filtration rate/1.73 sq M.predicted [Volume Rate/Area] in Serum or Plasma by Creatinine-based formula (MDRD)",
      },
    ],
  },
  subject: {
    reference: "Patient/f201",
    display: "Roel",
  },
  issued: "2013-04-04T14:34:00+01:00",
  performer: [
    {
      reference: "Practitioner/f202",
      display: "Luigi Maas",
    },
  ],
  interpretation: [
    {
      text: "interpretation of results should be assigned based upon the level of kindey function",
    },
  ],
  note: [
    {
      text: "GFR estimating equations developed by the Modification of Diet in Renal Disease (MDRD) Study Group and the Chronic Kidney Disease Epidemiology Collaboration (CKD-EPI)....",
    },
  ],
  method: {
    coding: [
      {
        system: "http://snomed.info/sct",
        code: "702668005",
        display: "MDRD",
      },
    ],
  },
  component: [
    {
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "48643-1",
            display:
              "Glomerular filtration rate/1.73 sq M predicted among blacks [Volume Rate/?Area] in Serum or Plasma by Creatinine-based formula (MDRD)",
          },
        ],
      },
      valueQuantity: {
        value: 60,
        comparator: ">",
        unit: "mL/min/1.73m2",
        system: "http://unitsofmeasure.org",
        code: "mL/min/{1.73_m2}",
      },
      referenceRange: [
        {
          low: {
            value: 60,
            unit: "mL/min/1.73m2",
            system: "http://unitsofmeasure.org",
            code: "mL/min/{1.73_m2}",
          },
          appliesTo: [
            {
              text: "non-black/african-american",
            },
          ],
          age: {
            low: {
              value: 18,
              unit: "yrs",
              system: "http://unitsofmeasure.org",
              code: "a",
            },
          },
        },
      ],
    },
    {
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "48642-3",
            display:
              "Glomerular filtration rate/1.73 sq M predicted among non-blacks [Volume Rate/Area] in Serum or Plasma by Creatinine-based formula (MDRD)",
          },
        ],
      },
      valueQuantity: {
        value: 60,
        unit: "mL/min/1.73m2",
        system: "http://unitsofmeasure.org",
        code: "mL/min/{1.73_m2}",
      },
      referenceRange: [
        {
          low: {
            value: 60,
            unit: "mL/min/1.73m2",
            system: "http://unitsofmeasure.org",
            code: "mL/min/{1.73_m2}",
          },
          age: {
            low: {
              value: 18,
              unit: "yrs",
              system: "http://unitsofmeasure.org",
              code: "a",
            },
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

export const ObservationExampleF206Staphylococcus: Observation = {
  resourceType: "Observation",
  id: "f206",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: f206</p><p><b>status</b>: final</p><p><b>code</b>: Blood culture <span>(Details : {http://acmelabs.org code '104177' = '104177', given as 'Blood culture'}; {LOINC code '600-7' = 'Bacteria identified in Blood by Culture', given as 'Bacteria identified in Blood by Culture'})</span></p><p><b>subject</b>: <a>Roel</a></p><p><b>issued</b>: 11/03/2013 10:28:00 AM</p><p><b>performer</b>: <a>Luigi Maas</a></p><p><b>value</b>: Staphylococcus aureus <span>(Details : {SNOMED CT code '3092008' = 'Staphylococcus aureus', given as 'Staphylococcus aureus'})</span></p><p><b>interpretation</b>: Positive <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation code 'POS' = 'Positive)</span></p><p><b>method</b>: Blood culture for bacteria, including anaerobic screen <span>(Details : {SNOMED CT code '104177005' = 'Blood culture for bacteria, including anaerobic screen', given as 'Blood culture for bacteria, including anaerobic screen'})</span></p></div>",
  },
  status: "final",
  code: {
    coding: [
      {
        system: "http://acmelabs.org",
        code: "104177",
        display: "Blood culture",
      },
      {
        system: "http://loinc.org",
        code: "600-7",
        display: "Bacteria identified in Blood by Culture",
      },
    ],
  },
  subject: {
    reference: "Patient/f201",
    display: "Roel",
  },
  issued: "2013-03-11T10:28:00+01:00",
  performer: [
    {
      reference: "Practitioner/f202",
      display: "Luigi Maas",
    },
  ],
  valueCodeableConcept: {
    coding: [
      {
        system: "http://snomed.info/sct",
        code: "3092008",
        display: "Staphylococcus aureus",
      },
    ],
  },
  interpretation: [
    {
      coding: [
        {
          system:
            "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
          code: "POS",
        },
      ],
    },
  ],
  method: {
    coding: [
      {
        system: "http://snomed.info/sct",
        code: "104177005",
        display: "Blood culture for bacteria, including anaerobic screen",
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

export const ObservationExampleGenetics1: Observation = {
  resourceType: "Observation",
  id: "example-genetics-1",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: example-genetics-1</p><p><b>status</b>: final</p><p><b>code</b>: Genetic analysis master panel-- This is the parent OBR for the panel holding all of the associated observations that can be reported with a molecular genetics analysis result. <span>(Details : {LOINC code '55233-1' = 'Genetic analysis master panel - Blood or Tissue by Molecular genetics method', given as 'Genetic analysis master panel-- This is the parent OBR for the panel holding all of the associated observations that can be reported with a molecular genetics analysis result.'})</span></p><p><b>subject</b>: <a>Molecular Lab Patient ID: HOSP-23456</a></p><p><b>issued</b>: 03/04/2013 3:30:10 PM</p><p><b>performer</b>: <a>Molecular Diagnostics Laboratory</a></p><p><b>value</b>: Positive <span>(Details : {SNOMED CT code '10828004' = 'Positive', given as 'Positive'})</span></p><p><b>specimen</b>: <a>Molecular Specimen ID: MLD45-Z4-1234</a></p></div>",
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/observation-geneticsGene",
      valueCodeableConcept: {
        coding: [
          {
            system: "http://www.genenames.org",
            code: "3236",
            display: "EGFR",
          },
        ],
      },
    },
    {
      url: "http://hl7.org/fhir/StructureDefinition/observation-geneticsDNARegionName",
      valueString: "Exon 21",
    },
    {
      url: "http://hl7.org/fhir/StructureDefinition/observation-geneticsGenomicSourceClass",
      valueCodeableConcept: {
        coding: [
          {
            system: "http://loinc.org",
            code: "LA6684-0",
            display: "somatic",
          },
        ],
      },
    },
  ],
  status: "final",
  code: {
    coding: [
      {
        system: "http://loinc.org",
        code: "55233-1",
        display:
          "Genetic analysis master panel-- This is the parent OBR for the panel holding all of the associated observations that can be reported with a molecular genetics analysis result.",
      },
    ],
  },
  subject: {
    reference: "Patient/example",
    display: "Molecular Lab Patient ID: HOSP-23456",
  },
  issued: "2013-04-03T15:30:10+01:00",
  performer: [
    {
      reference: "Practitioner/example",
      display: "Molecular Diagnostics Laboratory",
    },
  ],
  valueCodeableConcept: {
    coding: [
      {
        system: "http://snomed.info/sct",
        code: "10828004",
        display: "Positive",
      },
    ],
  },
  specimen: {
    reference: "Specimen/genetics-example1-somatic",
    display: "Molecular Specimen ID: MLD45-Z4-1234",
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

export const ObservationExampleGenetics2: Observation = {
  resourceType: "Observation",
  id: "example-genetics-2",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: example-genetics-2</p><p><b>status</b>: final</p><p><b>code</b>: Genetic analysis master panel--This is the parent OBR for the panel holding all of the associated observations that can be reported with a molecular genetics analysis result. <span>(Details : {LOINC code '55233-1' = 'Genetic analysis master panel - Blood or Tissue by Molecular genetics method', given as 'Genetic analysis master panel--This is the parent OBR for the panel holding all of the associated observations that can be reported with a molecular genetics analysis result.'})</span></p><p><b>subject</b>: <a>Molecular Lab Patient ID: HOSP-23456</a></p><p><b>issued</b>: 03/04/2013 3:30:10 PM</p><p><b>performer</b>: <a>Molecular Diagnostics Laboratory</a></p><p><b>value</b>: Positive <span>(Details : {SNOMED CT code '10828004' = 'Positive', given as 'Positive'})</span></p><p><b>derivedFrom</b>: <a>Observation/example-genetics-1</a></p><blockquote><p><b>component</b></p><p><b>code</b>: Genetic disease assessed <span>(Details : {LOINC code '51967-8' = 'Genetic disease assessed [Identifier] in Blood or Tissue by Molecular genetics method', given as 'Genetic disease assessed'})</span></p><p><b>value</b>: Lung cancer <span>(Details : {SNOMED CT code '363358000' = 'Malignant tumor of lung', given as 'Malignant tumor of lung (disorder)'})</span></p></blockquote><blockquote><p><b>component</b></p><p><b>code</b>: Genetic disease sequence variation interpretation <span>(Details : {LOINC code '53037-8' = 'Genetic disease sequence variation interpretation [interpretation] in Blood or Tissue by Molecular genetics method', given as 'Genetic disease sequence variation interpretation'})</span></p><p><b>value</b>: Pathogenic <span>(Details : {[not stated] code 'LA6669-1' = 'LA6669-1', given as 'Pathogenic'})</span></p></blockquote></div>",
  },
  status: "final",
  code: {
    coding: [
      {
        system: "http://loinc.org",
        code: "55233-1",
        display:
          "Genetic analysis master panel--This is the parent OBR for the panel holding all of the associated observations that can be reported with a molecular genetics analysis result.",
      },
    ],
  },
  subject: {
    reference: "Patient/example",
    display: "Molecular Lab Patient ID: HOSP-23456",
  },
  issued: "2013-04-03T15:30:10+01:00",
  performer: [
    {
      reference: "Practitioner/example",
      display: "Molecular Diagnostics Laboratory",
    },
  ],
  valueCodeableConcept: {
    coding: [
      {
        system: "http://snomed.info/sct",
        code: "10828004",
        display: "Positive",
      },
    ],
  },
  derivedFrom: [
    {
      reference: "Observation/example-genetics-1",
    },
  ],
  component: [
    {
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "51967-8",
            display: "Genetic disease assessed",
          },
        ],
      },
      valueCodeableConcept: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "363358000",
            display: "Malignant tumor of lung (disorder)",
          },
        ],
        text: "Lung cancer",
      },
    },
    {
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "53037-8",
            display: "Genetic disease sequence variation interpretation",
          },
        ],
      },
      valueCodeableConcept: {
        coding: [
          {
            code: "LA6669-1",
            display: "Pathogenic",
          },
        ],
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

export const ObservationExampleGenetics3: Observation = {
  resourceType: "Observation",
  id: "example-genetics-3",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: example-genetics-3</p><p><b>status</b>: final</p><p><b>code</b>: Further analysis <span>(Details )</span></p><p><b>subject</b>: <a>Molecular Lab Patient ID: HOSP-23456</a></p><p><b>issued</b>: 03/04/2013 3:30:10 PM</p><p><b>performer</b>: <a>Sequence Analysis Laboratory</a></p><p><b>note</b>: The EGFR p.L858R mutation has been associated with response to anti-EGFR therapy</p><p><b>derivedFrom</b>: <a>ObservationForGenetics profile example 1</a></p></div>',
  },
  status: "final",
  code: {
    text: "Further analysis",
  },
  subject: {
    reference: "Patient/example",
    display: "Molecular Lab Patient ID: HOSP-23456",
  },
  issued: "2013-04-03T15:30:10+01:00",
  performer: [
    {
      reference: "Practitioner/example",
      display: "Sequence Analysis Laboratory",
    },
  ],
  note: [
    {
      text: "The EGFR p.L858R mutation has been associated with response to anti-EGFR therapy",
    },
  ],
  derivedFrom: [
    {
      reference: "Observation/example-genetics-1",
      display: "ObservationForGenetics profile example 1",
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

export const ObservationExampleGenetics4: Observation = {
  resourceType: "Observation",
  id: "example-genetics-4",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: example-genetics-4</p><p><b>status</b>: final</p><p><b>code</b>: Allele ABC <span>(Details )</span></p><p><b>subject</b>: <a>Molecular Lab Patient ID: HOSP-23456</a></p><p><b>issued</b>: 03/04/2013 3:30:10 PM</p><p><b>performer</b>: <a>Molecular Diagnostics Laboratory</a></p><p><b>interpretation</b>: Positive <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation code 'POS' = 'Positive)</span></p><p><b>specimen</b>: <a>Molecular Specimen ID: MLD45-Z4-1234</a></p><p><b>hasMember</b>: </p><ul><li><a>Variant-1</a></li><li><a>Variant-2</a></li><li><a>Variant-3</a></li></ul></div>",
  },
  status: "final",
  code: {
    text: "Allele ABC",
  },
  subject: {
    reference: "Patient/example",
    display: "Molecular Lab Patient ID: HOSP-23456",
  },
  issued: "2013-04-03T15:30:10+01:00",
  performer: [
    {
      reference: "Practitioner/example",
      display: "Molecular Diagnostics Laboratory",
    },
  ],
  interpretation: [
    {
      coding: [
        {
          system:
            "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
          code: "POS",
        },
      ],
      text: "Positive",
    },
  ],
  specimen: {
    reference: "Specimen/genetics-example1-somatic",
    display: "Molecular Specimen ID: MLD45-Z4-1234",
  },
  hasMember: [
    {
      reference: "Observation/example-genetics-1",
      display: "Variant-1",
    },
    {
      reference: "Observation/example-genetics-2",
      display: "Variant-2",
    },
    {
      reference: "Observation/example-genetics-3",
      display: "Variant-3",
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

export const ObservationExampleGenetics5: Observation = {
  resourceType: "Observation",
  id: "example-genetics-5",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: example-genetics-5</p><p><b>status</b>: final</p><p><b>code</b>: PCR validation <span>(Details )</span></p><p><b>subject</b>: <a>Molecular Lab Patient ID: HOSP-23456</a></p><p><b>issued</b>: 03/04/2013 3:30:10 PM</p><p><b>performer</b>: <a>Sequence Analysis Laboratory</a></p><p><b>value</b>: Negative <span>(Details : {SNOMED CT code '260385009' = 'Negative', given as 'Negative'})</span></p></div>",
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/observation-sequelTo",
      valueReference: {
        reference: "Observation/example-genetics-1",
        display: "ObservationForGenetics profile example 1",
      },
    },
  ],
  status: "final",
  code: {
    text: "PCR validation",
  },
  subject: {
    reference: "Patient/example",
    display: "Molecular Lab Patient ID: HOSP-23456",
  },
  issued: "2013-04-03T15:30:10+01:00",
  performer: [
    {
      reference: "Practitioner/example",
      display: "Sequence Analysis Laboratory",
    },
  ],
  valueCodeableConcept: {
    coding: [
      {
        system: "http://snomed.info/sct",
        code: "260385009",
        display: "Negative",
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

export const ObservationExampleGeneticsBrcapat: Observation = {
  resourceType: "Observation",
  id: "example-genetics-brcapat",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: example-genetics-brcapat</p><p><b>status</b>: final</p><p><b>code</b>: BRCA1+BRCA2 gene mutations tested for in Blood or Tissue by Molecular genetics method Nominal <span>(Details : {LOINC code '59041-4' = 'BRCA1+BRCA2 gene mutations tested for in Blood or Tissue by Molecular genetics method Nominal', given as 'BRCA1+BRCA2 gene mutations tested for in Blood or Tissue by Molecular genetics method Nominal'})</span></p><p><b>subject</b>: <a>Patient1 with Breast Cancer FamilyHistory</a></p></div>",
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/observation-geneticsGene",
      valueCodeableConcept: {
        coding: [
          {
            system: "https://www.ncbi.nlm.nih.gov/nuccore",
            code: "KX470182.1",
            display: "BRCA",
          },
        ],
      },
    },
    {
      url: "http://hl7.org/fhir/us/core/StructureDefinition/us-core-ethnicity",
      valueCodeableConcept: {
        coding: [
          {
            system: "http://browser.ihtsdotools.org/",
            code: "413581001",
            display: "Unknown racial group",
          },
        ],
      },
    },
  ],
  status: "final",
  code: {
    coding: [
      {
        system: "http://loinc.org",
        code: "59041-4",
        display:
          "BRCA1+BRCA2 gene mutations tested for in Blood or Tissue by Molecular genetics method Nominal",
      },
    ],
  },
  subject: {
    reference: "Patient/brcapat",
    display: "Patient1 with Breast Cancer FamilyHistory",
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

export const ObservationExampleGlasgowQa: Observation = {
  resourceType: "Observation",
  id: "gcs-qa",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: gcs-qa</p><p><b>status</b>: final</p><p><b>code</b>: Glasgow Coma Scale , (GCS) <span>(Details : {LOINC code '9269-2' = 'Glasgow coma score total', given as 'Glasgow coma score total'})</span></p><p><b>subject</b>: <a>Peter James Chalmers</a></p><p><b>effective</b>: 11/12/2014 4:44:16 AM</p><p><b>value</b>: 13 {score}<span> (Details: UCUM code {score} = '{score}')</span></p><blockquote><p><b>referenceRange</b></p><p><b>high</b>: 8 {score}<span> (Details: UCUM code {score} = '{score}')</span></p><p><b>type</b>: Severe TBI <span>(Details )</span></p></blockquote><blockquote><p><b>referenceRange</b></p><p><b>low</b>: 9 {score}<span> (Details: UCUM code {score} = '{score}')</span></p><p><b>high</b>: 12 {score}<span> (Details: UCUM code {score} = '{score}')</span></p><p><b>type</b>: Moderate TBI <span>(Details )</span></p></blockquote><blockquote><p><b>referenceRange</b></p><p><b>low</b>: 13 {score}<span> (Details: UCUM code {score} = '{score}')</span></p><p><b>type</b>: Mild TBI <span>(Details )</span></p></blockquote><p><b>derivedFrom</b>: <a>GCS form results</a></p></div>",
  },
  status: "final",
  code: {
    coding: [
      {
        system: "http://loinc.org",
        code: "9269-2",
        display: "Glasgow coma score total",
      },
    ],
    text: "Glasgow Coma Scale , (GCS)",
  },
  subject: {
    reference: "Patient/example",
    display: "Peter James Chalmers",
  },
  effectiveDateTime: "2014-12-11T04:44:16Z",
  valueQuantity: {
    value: 13,
    system: "http://unitsofmeasure.org",
    code: "{score}",
  },
  referenceRange: [
    {
      high: {
        value: 8,
        system: "http://unitsofmeasure.org",
        code: "{score}",
      },
      type: {
        text: "Severe TBI",
      },
    },
    {
      low: {
        value: 9,
        system: "http://unitsofmeasure.org",
        code: "{score}",
      },
      high: {
        value: 12,
        system: "http://unitsofmeasure.org",
        code: "{score}",
      },
      type: {
        text: "Moderate TBI",
      },
    },
    {
      low: {
        value: 13,
        system: "http://unitsofmeasure.org",
        code: "{score}",
      },
      type: {
        text: "Mild TBI",
      },
    },
  ],
  derivedFrom: [
    {
      reference: "QuestionnaireResponse/gcs",
      display: "GCS form results",
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

export const ObservationExampleGlasgow: Observation = {
  resourceType: "Observation",
  id: "glasgow",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: glasgow</p><p><b>status</b>: final</p><p><b>code</b>: Glasgow Coma Scale , (GCS) <span>(Details : {LOINC code '9269-2' = 'Glasgow coma score total', given as 'Glasgow coma score total'})</span></p><p><b>subject</b>: <a>Peter James Chalmers</a></p><p><b>effective</b>: 11/12/2014 4:44:16 AM</p><p><b>value</b>: 13 {score}<span> (Details: UCUM code {score} = '{score}')</span></p><blockquote><p><b>referenceRange</b></p><p><b>high</b>: 8 {score}<span> (Details: UCUM code {score} = '{score}')</span></p><p><b>type</b>: Severe TBI <span>(Details )</span></p></blockquote><blockquote><p><b>referenceRange</b></p><p><b>low</b>: 9 {score}<span> (Details: UCUM code {score} = '{score}')</span></p><p><b>high</b>: 12 {score}<span> (Details: UCUM code {score} = '{score}')</span></p><p><b>type</b>: Moderate TBI <span>(Details )</span></p></blockquote><blockquote><p><b>referenceRange</b></p><p><b>low</b>: 13 {score}<span> (Details: UCUM code {score} = '{score}')</span></p><p><b>type</b>: Mild TBI <span>(Details )</span></p></blockquote><blockquote><p><b>component</b></p><p><b>code</b>: GCS Motor <span>(Details : {LOINC code '9268-4' = 'Glasgow coma score motor', given as 'Glasgow coma score motor'})</span></p><p><b>value</b>: 5 (Localizes painful stimuli) <span>(Details : {http://acme.ec/codes code '5' = '5', given as 'Localizes painful stimuli'}; {LOINC code 'LA6566-9' = 'Localizing pain', given as 'Localizing pain'})</span></p></blockquote><blockquote><p><b>component</b></p><p><b>code</b>: GSC Verbal <span>(Details : {LOINC code '9270-0' = 'Glasgow coma score verbal', given as 'Glasgow coma score verbal'})</span></p><p><b>value</b>: 4 (Confused, disoriented) <span>(Details : {http://acme.ec/codes code '4' = '4', given as 'Confused, disoriented'}; {LOINC code 'LA6560-2' = 'Confused', given as 'Confused'})</span></p></blockquote><blockquote><p><b>component</b></p><p><b>code</b>: Eyes <span>(Details : {LOINC code '9267-6' = 'Glasgow coma score eye opening', given as 'Glasgow coma score eye opening'})</span></p><p><b>value</b>: 4 (Opens eyes spontaneously) <span>(Details : {http://acme.ec/codes code '4' = '4', given as 'Opens eyes spontaneously'}; {LOINC code 'LA6556-0' = 'Eyes open spontaneously', given as 'Eyes open spontaneously'})</span></p></blockquote></div>",
  },
  status: "final",
  code: {
    coding: [
      {
        system: "http://loinc.org",
        code: "9269-2",
        display: "Glasgow coma score total",
      },
    ],
    text: "Glasgow Coma Scale , (GCS)",
  },
  subject: {
    reference: "Patient/example",
    display: "Peter James Chalmers",
  },
  effectiveDateTime: "2014-12-11T04:44:16Z",
  valueQuantity: {
    value: 13,
    system: "http://unitsofmeasure.org",
    code: "{score}",
  },
  referenceRange: [
    {
      high: {
        value: 8,
        system: "http://unitsofmeasure.org",
        code: "{score}",
      },
      type: {
        text: "Severe TBI",
      },
    },
    {
      low: {
        value: 9,
        system: "http://unitsofmeasure.org",
        code: "{score}",
      },
      high: {
        value: 12,
        system: "http://unitsofmeasure.org",
        code: "{score}",
      },
      type: {
        text: "Moderate TBI",
      },
    },
    {
      low: {
        value: 13,
        system: "http://unitsofmeasure.org",
        code: "{score}",
      },
      type: {
        text: "Mild TBI",
      },
    },
  ],
  component: [
    {
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "9268-4",
            display: "Glasgow coma score motor",
          },
        ],
        text: "GCS Motor",
      },
      valueCodeableConcept: {
        coding: [
          {
            system: "http://acme.ec/codes",
            code: "5",
            display: "Localizes painful stimuli",
          },
          {
            extension: [
              {
                url: "http://hl7.org/fhir/StructureDefinition/ordinalValue",
                valueDecimal: 5,
              },
            ],
            system: "http://loinc.org",
            code: "LA6566-9",
            display: "Localizing pain",
          },
        ],
        text: "5 (Localizes painful stimuli)",
      },
    },
    {
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "9270-0",
            display: "Glasgow coma score verbal",
          },
        ],
        text: "GSC Verbal",
      },
      valueCodeableConcept: {
        coding: [
          {
            system: "http://acme.ec/codes",
            code: "4",
            display: "Confused, disoriented",
          },
          {
            extension: [
              {
                url: "http://hl7.org/fhir/StructureDefinition/ordinalValue",
                valueDecimal: 4,
              },
            ],
            system: "http://loinc.org",
            code: "LA6560-2",
            display: "Confused",
          },
        ],
        text: "4 (Confused, disoriented)",
      },
    },
    {
      code: {
        coding: [
          {
            system: "http://loinc.org",
            code: "9267-6",
            display: "Glasgow coma score eye opening",
          },
        ],
        text: "Eyes",
      },
      valueCodeableConcept: {
        coding: [
          {
            system: "http://acme.ec/codes",
            code: "4",
            display: "Opens eyes spontaneously",
          },
          {
            extension: [
              {
                url: "http://hl7.org/fhir/StructureDefinition/ordinalValue",
                valueDecimal: 4,
              },
            ],
            system: "http://loinc.org",
            code: "LA6556-0",
            display: "Eyes open spontaneously",
          },
        ],
        text: "4 (Opens eyes spontaneously)",
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

export const ObservationExampleHaplotype1: Observation = {
  resourceType: "Observation",
  id: "example-haplotype1",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: example-haplotype1</p><p><b>status</b>: unknown</p><p><b>code</b>: Genetic analysis master panel-- This is the parent OBR for the panel holding all of the associated observations that can be reported with a molecular genetics analysis result. <span>(Details : {LOINC code '55233-1' = 'Genetic analysis master panel - Blood or Tissue by Molecular genetics method', given as 'Genetic analysis master panel-- This is the parent OBR for the panel holding all of the associated observations that can be reported with a molecular genetics analysis result.'})</span></p><p><b>subject</b>: <a>J*********** C***********</a></p><p><b>issued</b>: 03/04/2013 3:30:10 PM</p><p><b>value</b>: *35B <span>(Details : {http://pharmakb.org code 'PA165971587' = 'PA165971587', given as '*35B'})</span></p><p><b>specimen</b>: <a>Molecular Specimen ID: MLD45-Z4-1234</a></p><p><b>derivedFrom</b>: </p><ul><li><a>MolecularSequence/example-pgx-1</a></li><li><a>MolecularSequence/example-pgx-2</a></li></ul></div>",
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/observation-geneticsGene",
      valueCodeableConcept: {
        coding: [
          {
            system: "http://www.genenames.org",
            code: "2625",
            display: "CYP2D6",
          },
        ],
      },
    },
  ],
  status: "unknown",
  code: {
    coding: [
      {
        system: "http://loinc.org",
        code: "55233-1",
        display:
          "Genetic analysis master panel-- This is the parent OBR for the panel holding all of the associated observations that can be reported with a molecular genetics analysis result.",
      },
    ],
  },
  subject: {
    reference: "Patient/727127",
    display: "J*********** C***********",
  },
  issued: "2013-04-03T15:30:10+01:00",
  valueCodeableConcept: {
    coding: [
      {
        system: "http://pharmakb.org",
        code: "PA165971587",
        display: "*35B",
      },
    ],
  },
  specimen: {
    reference: "Specimen/genetics-example1-somatic",
    display: "Molecular Specimen ID: MLD45-Z4-1234",
  },
  derivedFrom: [
    {
      reference: "MolecularSequence/example-pgx-1",
    },
    {
      reference: "MolecularSequence/example-pgx-2",
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

export const ObservationExampleHaplotype2: Observation = {
  resourceType: "Observation",
  id: "example-haplotype2",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: example-haplotype2</p><p><b>status</b>: unknown</p><p><b>code</b>: Genetic analysis master panel-- This is the parent OBR for the panel holding all of the associated observations that can be reported with a molecular genetics analysis result. <span>(Details : {LOINC code '55233-1' = 'Genetic analysis master panel - Blood or Tissue by Molecular genetics method', given as 'Genetic analysis master panel-- This is the parent OBR for the panel holding all of the associated observations that can be reported with a molecular genetics analysis result.'})</span></p><p><b>subject</b>: <a>J*********** C***********</a></p><p><b>issued</b>: 03/04/2013 3:30:10 PM</p><p><b>value</b>: *4 <span>(Details : {http://pharmakb.org code 'PA16581679' = 'PA16581679', given as '*4'})</span></p><p><b>specimen</b>: <a>Molecular Specimen ID: MLD45-Z4-1234</a></p><p><b>derivedFrom</b>: </p><ul><li><a>MolecularSequence/example-pgx-1</a></li><li><a>MolecularSequence/example-pgx-2</a></li></ul></div>",
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/observation-geneticsGene",
      valueCodeableConcept: {
        coding: [
          {
            system: "http://www.genenames.org",
            code: "2623",
            display: "CYP2C9",
          },
        ],
      },
    },
  ],
  status: "unknown",
  code: {
    coding: [
      {
        system: "http://loinc.org",
        code: "55233-1",
        display:
          "Genetic analysis master panel-- This is the parent OBR for the panel holding all of the associated observations that can be reported with a molecular genetics analysis result.",
      },
    ],
  },
  subject: {
    reference: "Patient/727127",
    display: "J*********** C***********",
  },
  issued: "2013-04-03T15:30:10+01:00",
  valueCodeableConcept: {
    coding: [
      {
        system: "http://pharmakb.org",
        code: "PA16581679",
        display: "*4",
      },
    ],
  },
  specimen: {
    reference: "Specimen/genetics-example1-somatic",
    display: "Molecular Specimen ID: MLD45-Z4-1234",
  },
  derivedFrom: [
    {
      reference: "MolecularSequence/example-pgx-1",
    },
    {
      reference: "MolecularSequence/example-pgx-2",
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

export const ObservationExampleHeadCircumference: Observation = {
  resourceType: "Observation",
  id: "head-circumference",
  meta: {
    profile: ["http://hl7.org/fhir/StructureDefinition/vitalsigns"],
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
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: head-circumference</p><p><b>meta</b>: </p><p><b>status</b>: final</p><p><b>category</b>: Vital Signs <span>(Details : {http://terminology.hl7.org/CodeSystem/observation-category code 'vital-signs' = 'Vital Signs', given as 'Vital Signs'})</span></p><p><b>code</b>: Head Circumference <span>(Details : {LOINC code '9843-4' = 'Head Occipital-frontal circumference', given as 'Head Occipital-frontal circumference'})</span></p><p><b>subject</b>: <a>Patient/example</a></p><p><b>effective</b>: 02/07/1999</p><p><b>value</b>: 51.2 cm<span> (Details: UCUM code cm = 'cm')</span></p></div>",
  },
  status: "final",
  category: [
    {
      coding: [
        {
          system: "http://terminology.hl7.org/CodeSystem/observation-category",
          code: "vital-signs",
          display: "Vital Signs",
        },
      ],
      text: "Vital Signs",
    },
  ],
  code: {
    coding: [
      {
        system: "http://loinc.org",
        code: "9843-4",
        display: "Head Occipital-frontal circumference",
      },
    ],
    text: "Head Circumference",
  },
  subject: {
    reference: "Patient/example",
  },
  effectiveDateTime: "1999-07-02",
  valueQuantity: {
    value: 51.2,
    unit: "cm",
    system: "http://unitsofmeasure.org",
    code: "cm",
  },
} as const;

export const ObservationExampleHeartRate: Observation = {
  resourceType: "Observation",
  id: "heart-rate",
  meta: {
    profile: ["http://hl7.org/fhir/StructureDefinition/vitalsigns"],
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
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: heart-rate</p><p><b>meta</b>: </p><p><b>status</b>: final</p><p><b>category</b>: Vital Signs <span>(Details : {http://terminology.hl7.org/CodeSystem/observation-category code 'vital-signs' = 'Vital Signs', given as 'Vital Signs'})</span></p><p><b>code</b>: Heart rate <span>(Details : {LOINC code '8867-4' = 'Heart rate', given as 'Heart rate'})</span></p><p><b>subject</b>: <a>Patient/example</a></p><p><b>effective</b>: 02/07/1999</p><p><b>value</b>: 44 beats/minute<span> (Details: UCUM code /min = '/min')</span></p></div>",
  },
  status: "final",
  category: [
    {
      coding: [
        {
          system: "http://terminology.hl7.org/CodeSystem/observation-category",
          code: "vital-signs",
          display: "Vital Signs",
        },
      ],
      text: "Vital Signs",
    },
  ],
  code: {
    coding: [
      {
        system: "http://loinc.org",
        code: "8867-4",
        display: "Heart rate",
      },
    ],
    text: "Heart rate",
  },
  subject: {
    reference: "Patient/example",
  },
  effectiveDateTime: "1999-07-02",
  valueQuantity: {
    value: 44,
    unit: "beats/minute",
    system: "http://unitsofmeasure.org",
    code: "/min",
  },
} as const;

export const ObservationExampleHerd1: Observation = {
  resourceType: "Observation",
  id: "herd1",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: herd1</p><p><b>status</b>: final</p><p><b>category</b>: Laboratory <span>(Details : {http://terminology.hl7.org/CodeSystem/observation-category code 'laboratory' = 'Laboratory', given as 'Laboratory'})</span></p><p><b>code</b>: Mycoplasma hyopneumoniae - MHP <span>(Details : {LOINC code '80219-9' = 'Mycoplasma hyopneumoniae Ab sample/Positive control in Serum by Immunoassay', given as 'Mycoplasma hyopneumoniae Ab sample/Positive control in Serum by Immunoassay'}; {http://acme.org/devices/clinical-codes code 'Mycoplasma' = 'Mycoplasma', given as 'Mycoplasma'})</span></p><p><b>subject</b>: <a>Group/herd1</a></p><p><b>encounter</b>: part of a health assurance program</p><p><b>effective</b>: 20/11/2017</p><p><b>value</b>: 0.2 % (sample/positive control)<span> (Details: UCUM code % = '%')</span></p><p><b>interpretation</b>: Negative <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation code 'NEG' = 'Negative', given as 'Negative'})</span></p><p><b>specimen</b>: <a>30 serum</a></p><h3>ReferenceRanges</h3><table><tr><td>-</td><td><b>Text</b></td></tr><tr><td>*</td><td>&gt;0.4 Positive; 0.3 to 0.4 Suspect &lt; 0.3 Negative</td></tr></table></div>",
  },
  status: "final",
  category: [
    {
      coding: [
        {
          system: "http://terminology.hl7.org/CodeSystem/observation-category",
          code: "laboratory",
          display: "Laboratory",
        },
      ],
      text: "Laboratory",
    },
  ],
  code: {
    coding: [
      {
        system: "http://loinc.org",
        code: "80219-9",
        display:
          "Mycoplasma hyopneumoniae Ab sample/Positive control in Serum by Immunoassay",
      },
      {
        system: "http://acme.org/devices/clinical-codes",
        code: "Mycoplasma",
        display: "Mycoplasma",
      },
    ],
    text: "Mycoplasma hyopneumoniae - MHP",
  },
  subject: {
    reference: "Group/herd1",
  },
  encounter: {
    display: "part of a health assurance program",
  },
  effectiveDateTime: "2017-11-20",
  valueQuantity: {
    value: 0.2,
    unit: "% (sample/positive control)",
    system: "http://unitsofmeasure.org",
    code: "%",
  },
  interpretation: [
    {
      coding: [
        {
          system:
            "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
          code: "NEG",
          display: "Negative",
        },
      ],
      text: "Negative",
    },
  ],
  specimen: {
    reference: "Specimen/pooled-serum",
    display: "30 serum",
  },
  referenceRange: [
    {
      text: ">0.4 Positive; 0.3 to 0.4 Suspect < 0.3 Negative",
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

export const ObservationExampleMapSitting: Observation = {
  resourceType: "Observation",
  id: "map-sitting",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: map-sitting</p><p><b>status</b>: final</p><p><b>category</b>: Laboratory <span>(Details : {http://terminology.hl7.org/CodeSystem/observation-category code 'laboratory' = 'Laboratory', given as 'Laboratory'})</span></p><p><b>code</b>: Mean blood pressure <span>(Details : {LOINC code '8478-0' = 'Mean blood pressure', given as 'Mean blood pressure'})</span></p><p><b>subject</b>: <a>Patient/example</a></p><p><b>encounter</b>: <a>Encounter/example</a></p><p><b>effective</b>: 02/04/2018 10:30:10 AM --&gt; 05/04/2018 10:30:10 AM</p><p><b>issued</b>: 03/04/2018 3:30:10 PM</p><p><b>value</b>: 60 mm Hg<span> (Details: UCUM code mm[Hg] = 'mmHg')</span></p><p><b>interpretation</b>: Below low normal <span>(Details : {http://terminology.hl7.org/CodeSystem/v2-0078 code 'L' = 'Low', given as 'Low'})</span></p></div>",
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/observation-bodyPosition",
      valueCodeableConcept: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "33586001",
            display: "Sitting position (finding)",
          },
        ],
      },
    },
    {
      url: "http://hl7.org/fhir/StructureDefinition/observation-delta",
      valueCodeableConcept: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "1250004",
            display: "Decreased (qualifier value)",
          },
        ],
      },
    },
  ],
  status: "final",
  category: [
    {
      coding: [
        {
          system: "http://terminology.hl7.org/CodeSystem/observation-category",
          code: "laboratory",
          display: "Laboratory",
        },
      ],
    },
  ],
  code: {
    coding: [
      {
        system: "http://loinc.org",
        code: "8478-0",
        display: "Mean blood pressure",
      },
    ],
  },
  subject: {
    reference: "Patient/example",
  },
  encounter: {
    reference: "Encounter/example",
  },
  effectivePeriod: {
    start: "2018-04-02T10:30:10+01:00",
    end: "2018-04-05T10:30:10+01:00",
  },
  issued: "2018-04-03T15:30:10+01:00",
  valueQuantity: {
    value: 60,
    unit: "mm Hg",
    system: "http://unitsofmeasure.org",
    code: "mm[Hg]",
  },
  interpretation: [
    {
      coding: [
        {
          system: "http://terminology.hl7.org/CodeSystem/v2-0078",
          code: "L",
          display: "Low",
        },
      ],
      text: "Below low normal",
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

export const ObservationExampleMbp: Observation = {
  resourceType: "Observation",
  id: "mbp",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: mbp</p><p><b>status</b>: final</p><p><b>category</b>: Vital Signs <span>(Details : {http://terminology.hl7.org/CodeSystem/observation-category code 'vital-signs' = 'Vital Signs', given as 'Vital Signs'})</span></p><p><b>code</b>: Mean blood pressure <span>(Details : {LOINC code '8478-0' = 'Mean blood pressure', given as 'Mean blood pressure'})</span></p><p><b>subject</b>: <a>Patient/example</a></p><p><b>effective</b>: 02/07/1999</p><p><b>value</b>: 80 mm[Hg]<span> (Details: UCUM code mm[Hg] = 'mmHg')</span></p></div>",
  },
  status: "final",
  category: [
    {
      coding: [
        {
          system: "http://terminology.hl7.org/CodeSystem/observation-category",
          code: "vital-signs",
          display: "Vital Signs",
        },
      ],
      text: "Vital Signs",
    },
  ],
  code: {
    coding: [
      {
        system: "http://loinc.org",
        code: "8478-0",
        display: "Mean blood pressure",
      },
    ],
    text: "Mean blood pressure",
  },
  subject: {
    reference: "Patient/example",
  },
  effectiveDateTime: "1999-07-02",
  valueQuantity: {
    value: 80,
    unit: "mm[Hg]",
    system: "http://unitsofmeasure.org",
    code: "mm[Hg]",
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

export const ObservationExamplePhenotype: Observation = {
  resourceType: "Observation",
  id: "example-phenotype",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: example-phenotype</p><p><b>status</b>: final</p><p><b>code</b>: CYP2C9 gene product metabolic activity interpretation <span>(Details : {LOINC code '79716-7' = 'CYP2C9 gene product metabolic activity interpretation in Blood or Tissue Qualitative by CPIC', given as 'CYP2C9 gene product metabolic activity interpretation'})</span></p><p><b>subject</b>: <a>J*********** C***********</a></p><p><b>issued</b>: 03/04/2013 3:30:10 PM</p><p><b>value</b>: Normal metabolizer <span>(Details : {LOINC code 'LA25391-6' = 'Normal metabolizer', given as 'Normal metabolizer'})</span></p><p><b>specimen</b>: <a>Molecular Specimen ID: MLD45-Z4-1234</a></p><p><b>derivedFrom</b>: <a>Observation/example-diplotype1</a></p></div>",
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/observation-geneticsGene",
      valueCodeableConcept: {
        coding: [
          {
            system: "http://www.genenames.org",
            code: "2623",
            display: "CYP2C9",
          },
        ],
      },
    },
  ],
  status: "final",
  code: {
    coding: [
      {
        system: "http://loinc.org",
        code: "79716-7",
        display: "CYP2C9 gene product metabolic activity interpretation",
      },
    ],
  },
  subject: {
    reference: "Patient/727127",
    display: "J*********** C***********",
  },
  issued: "2013-04-03T15:30:10+01:00",
  valueCodeableConcept: {
    coding: [
      {
        system: "http://loinc.org",
        code: "LA25391-6",
        display: "Normal metabolizer",
      },
    ],
  },
  specimen: {
    reference: "Specimen/genetics-example1-somatic",
    display: "Molecular Specimen ID: MLD45-Z4-1234",
  },
  derivedFrom: [
    {
      reference: "Observation/example-diplotype1",
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

export const ObservationExampleRespiratoryRate: Observation = {
  resourceType: "Observation",
  id: "respiratory-rate",
  meta: {
    profile: ["http://hl7.org/fhir/StructureDefinition/vitalsigns"],
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
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: respiratory-rate</p><p><b>meta</b>: </p><p><b>status</b>: final</p><p><b>category</b>: Vital Signs <span>(Details : {http://terminology.hl7.org/CodeSystem/observation-category code 'vital-signs' = 'Vital Signs', given as 'Vital Signs'})</span></p><p><b>code</b>: Respiratory rate <span>(Details : {LOINC code '9279-1' = 'Respiratory rate', given as 'Respiratory rate'})</span></p><p><b>subject</b>: <a>Patient/example</a></p><p><b>effective</b>: 02/07/1999</p><p><b>value</b>: 26 breaths/minute<span> (Details: UCUM code /min = '/min')</span></p></div>",
  },
  status: "final",
  category: [
    {
      coding: [
        {
          system: "http://terminology.hl7.org/CodeSystem/observation-category",
          code: "vital-signs",
          display: "Vital Signs",
        },
      ],
      text: "Vital Signs",
    },
  ],
  code: {
    coding: [
      {
        system: "http://loinc.org",
        code: "9279-1",
        display: "Respiratory rate",
      },
    ],
    text: "Respiratory rate",
  },
  subject: {
    reference: "Patient/example",
  },
  effectiveDateTime: "1999-07-02",
  valueQuantity: {
    value: 26,
    unit: "breaths/minute",
    system: "http://unitsofmeasure.org",
    code: "/min",
  },
} as const;

export const ObservationExampleRhstatus: Observation = {
  resourceType: "Observation",
  id: "rhstatus",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: rhstatus</p><p><b>status</b>: final</p><p><b>category</b>: Laboratory <span>(Details : {http://terminology.hl7.org/CodeSystem/observation-category code 'laboratory' = 'Laboratory', given as 'Laboratory'})</span></p><p><b>code</b>: Blood Group <span>(Details : {LOINC code '883-9' = 'ABO group [Type] in Blood', given as 'ABO group [Type] in Blood'})</span></p><p><b>subject</b>: <a>Patient/infant</a></p><p><b>effective</b>: 11/03/2018 4:07:54 PM</p><p><b>value</b>: A <span>(Details : {SNOMED CT code '112144000' = 'Blood group A', given as 'Blood group A (finding)'})</span></p></div>",
  },
  status: "final",
  category: [
    {
      coding: [
        {
          system: "http://terminology.hl7.org/CodeSystem/observation-category",
          code: "laboratory",
          display: "Laboratory",
        },
      ],
      text: "Laboratory",
    },
  ],
  code: {
    coding: [
      {
        system: "http://loinc.org",
        code: "883-9",
        display: "ABO group [Type] in Blood",
      },
    ],
    text: "Blood Group",
  },
  subject: {
    reference: "Patient/infant",
  },
  effectiveDateTime: "2018-03-11T16:07:54+00:00",
  valueCodeableConcept: {
    coding: [
      {
        system: "http://snomed.info/sct",
        code: "112144000",
        display: "Blood group A (finding)",
      },
    ],
    text: "A",
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

export const ObservationExampleSampleData: Observation = {
  resourceType: "Observation",
  id: "ekg",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: ekg</p><p><b>status</b>: final</p><p><b>category</b>: Procedure <span>(Details : {http://terminology.hl7.org/CodeSystem/observation-category code 'procedure' = 'Procedure', given as 'Procedure'})</span></p><p><b>code</b>: MDC_ECG_ELEC_POTL <span>(Details : {urn:oid:2.16.840.1.113883.6.24 code '131328' = '131328', given as 'MDC_ECG_ELEC_POTL'})</span></p><p><b>subject</b>: <a>P. van de Heuvel</a></p><p><b>effective</b>: 19/02/2015 9:30:35 AM</p><p><b>performer</b>: <a>A. Langeveld</a></p><p><b>device</b>: 12 lead EKG Device Metric</p><blockquote><p><b>component</b></p><p><b>code</b>: MDC_ECG_ELEC_POTL_I <span>(Details : {urn:oid:2.16.840.1.113883.6.24 code '131329' = '131329', given as 'MDC_ECG_ELEC_POTL_I'})</span></p><p><b>value</b>: Origin: (system = '[not stated]' code null = 'null'), Period: 10, Factor: 1.612, Lower: -3300, Upper: 3300, Dimensions: 1, Data: 2041 2043 2037 2047 2060 2062 2051 2023 2014 2027 2034 2033 2040 2047 2047 2053 2058 2064 2059 2063 2061 2052 2053 2038 1966 1885 1884 2009 2129 2166 2137 2102 2086 2077 2067 2067 2060 2059 2062 2062 2060 2057 2045 2047 2057 2054 2042 2029 2027 2018 2007 1995 2001 2012 2024 2039 2068 2092 2111 2125 2131 2148 2137 2138 2128 2128 2115 2099 2097 2096 2101 2101 2091 2073 2076 2077 2084 2081 2088 2092 2070 2069 2074 2077 2075 2068 2064 2060 2062 2074 2075 2074 2075 2063 2058 2058 2064 2064 2070 2074 2067 2060 2062 2063 2061 2059 2048 2052 2049 2048 2051 2059 2059 2066 2077 2073</p></blockquote><blockquote><p><b>component</b></p><p><b>code</b>: MDC_ECG_ELEC_POTL_II <span>(Details : {urn:oid:2.16.840.1.113883.6.24 code '131330' = '131330', given as 'MDC_ECG_ELEC_POTL_II'})</span></p><p><b>value</b>: Origin: (system = '[not stated]' code null = 'null'), Period: 10, Factor: 1.612, Lower: -3300, Upper: 3300, Dimensions: 1, Data: 2041 2043 2037 2047 2060 2062 2051 2023 2014 2027 2034 2033 2040 2047 2047 2053 2058 2064 2059 2063 2061 2052 2053 2038 1966 1885 1884 2009 2129 2166 2137 2102 2086 2077 2067 2067 2060 2059 2062 2062 2060 2057 2045 2047 2057 2054 2042 2029 2027 2018 2007 1995 2001 2012 2024 2039 2068 2092 2111 2125 2131 2148 2137 2138 2128 2128 2115 2099 2097 2096 2101 2101 2091 2073 2076 2077 2084 2081 2088 2092 2070 2069 2074 2077 2075 2068 2064 2060 2062 2074 2075 2074 2075 2063 2058 2058 2064 2064 2070 2074 2067 2060 2062 2063 2061 2059 2048 2052 2049 2048 2051 2059 2059 2066 2077 2073</p></blockquote><blockquote><p><b>component</b></p><p><b>code</b>: MDC_ECG_ELEC_POTL_III <span>(Details : {urn:oid:2.16.840.1.113883.6.24 code '131389' = '131389', given as 'MDC_ECG_ELEC_POTL_III'})</span></p><p><b>value</b>: Origin: (system = '[not stated]' code null = 'null'), Period: 10, Factor: 1.612, Lower: -3300, Upper: 3300, Dimensions: 1, Data: 2041 2043 2037 2047 2060 2062 2051 2023 2014 2027 2034 2033 2040 2047 2047 2053 2058 2064 2059 2063 2061 2052 2053 2038 1966 1885 1884 2009 2129 2166 2137 2102 2086 2077 2067 2067 2060 2059 2062 2062 2060 2057 2045 2047 2057 2054 2042 2029 2027 2018 2007 1995 2001 2012 2024 2039 2068 2092 2111 2125 2131 2148 2137 2138 2128 2128 2115 2099 2097 2096 2101 2101 2091 2073 2076 2077 2084 2081 2088 2092 2070 2069 2074 2077 2075 2068 2064 2060 2062 2074 2075 2074 2075 2063 2058 2058 2064 2064 2070 2074 2067 2060 2062 2063 2061 2059 2048 2052 2049 2048 2051 2059 2059 2066 2077 2073</p></blockquote></div>",
  },
  status: "final",
  category: [
    {
      coding: [
        {
          system: "http://terminology.hl7.org/CodeSystem/observation-category",
          code: "procedure",
          display: "Procedure",
        },
      ],
    },
  ],
  code: {
    coding: [
      {
        system: "urn:oid:2.16.840.1.113883.6.24",
        code: "131328",
        display: "MDC_ECG_ELEC_POTL",
      },
    ],
  },
  subject: {
    reference: "Patient/f001",
    display: "P. van de Heuvel",
  },
  effectiveDateTime: "2015-02-19T09:30:35+01:00",
  performer: [
    {
      reference: "Practitioner/f005",
      display: "A. Langeveld",
    },
  ],
  device: {
    display: "12 lead EKG Device Metric",
  },
  component: [
    {
      code: {
        coding: [
          {
            system: "urn:oid:2.16.840.1.113883.6.24",
            code: "131329",
            display: "MDC_ECG_ELEC_POTL_I",
          },
        ],
      },
      valueSampledData: {
        origin: {
          value: 2048,
        },
        period: 10,
        factor: 1.612,
        lowerLimit: -3300,
        upperLimit: 3300,
        dimensions: 1,
        data: "2041 2043 2037 2047 2060 2062 2051 2023 2014 2027 2034 2033 2040 2047 2047 2053 2058 2064 2059 2063 2061 2052 2053 2038 1966 1885 1884 2009 2129 2166 2137 2102 2086 2077 2067 2067 2060 2059 2062 2062 2060 2057 2045 2047 2057 2054 2042 2029 2027 2018 2007 1995 2001 2012 2024 2039 2068 2092 2111 2125 2131 2148 2137 2138 2128 2128 2115 2099 2097 2096 2101 2101 2091 2073 2076 2077 2084 2081 2088 2092 2070 2069 2074 2077 2075 2068 2064 2060 2062 2074 2075 2074 2075 2063 2058 2058 2064 2064 2070 2074 2067 2060 2062 2063 2061 2059 2048 2052 2049 2048 2051 2059 2059 2066 2077 2073",
      },
    },
    {
      code: {
        coding: [
          {
            system: "urn:oid:2.16.840.1.113883.6.24",
            code: "131330",
            display: "MDC_ECG_ELEC_POTL_II",
          },
        ],
      },
      valueSampledData: {
        origin: {
          value: 2048,
        },
        period: 10,
        factor: 1.612,
        lowerLimit: -3300,
        upperLimit: 3300,
        dimensions: 1,
        data: "2041 2043 2037 2047 2060 2062 2051 2023 2014 2027 2034 2033 2040 2047 2047 2053 2058 2064 2059 2063 2061 2052 2053 2038 1966 1885 1884 2009 2129 2166 2137 2102 2086 2077 2067 2067 2060 2059 2062 2062 2060 2057 2045 2047 2057 2054 2042 2029 2027 2018 2007 1995 2001 2012 2024 2039 2068 2092 2111 2125 2131 2148 2137 2138 2128 2128 2115 2099 2097 2096 2101 2101 2091 2073 2076 2077 2084 2081 2088 2092 2070 2069 2074 2077 2075 2068 2064 2060 2062 2074 2075 2074 2075 2063 2058 2058 2064 2064 2070 2074 2067 2060 2062 2063 2061 2059 2048 2052 2049 2048 2051 2059 2059 2066 2077 2073",
      },
    },
    {
      code: {
        coding: [
          {
            system: "urn:oid:2.16.840.1.113883.6.24",
            code: "131389",
            display: "MDC_ECG_ELEC_POTL_III",
          },
        ],
      },
      valueSampledData: {
        origin: {
          value: 2048,
        },
        period: 10,
        factor: 1.612,
        lowerLimit: -3300,
        upperLimit: 3300,
        dimensions: 1,
        data: "2041 2043 2037 2047 2060 2062 2051 2023 2014 2027 2034 2033 2040 2047 2047 2053 2058 2064 2059 2063 2061 2052 2053 2038 1966 1885 1884 2009 2129 2166 2137 2102 2086 2077 2067 2067 2060 2059 2062 2062 2060 2057 2045 2047 2057 2054 2042 2029 2027 2018 2007 1995 2001 2012 2024 2039 2068 2092 2111 2125 2131 2148 2137 2138 2128 2128 2115 2099 2097 2096 2101 2101 2091 2073 2076 2077 2084 2081 2088 2092 2070 2069 2074 2077 2075 2068 2064 2060 2062 2074 2075 2074 2075 2063 2058 2058 2064 2064 2070 2074 2067 2060 2062 2063 2061 2059 2048 2052 2049 2048 2051 2059 2059 2066 2077 2073",
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

export const ObservationExampleSato2: Observation = {
  resourceType: "Observation",
  id: "satO2",
  meta: {
    profile: ["http://hl7.org/fhir/StructureDefinition/vitalsigns"],
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
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: satO2</p><p><b>meta</b>: </p><p><b>identifier</b>: o1223435-10</p><p><b>partOf</b>: <a>Procedure/ob</a></p><p><b>status</b>: final</p><p><b>category</b>: Vital Signs <span>(Details : {http://terminology.hl7.org/CodeSystem/observation-category code 'vital-signs' = 'Vital Signs', given as 'Vital Signs'})</span></p><p><b>code</b>: Oxygen saturation in Arterial blood <span>(Details : {LOINC code '2708-6' = 'Oxygen saturation in Arterial blood', given as 'Oxygen saturation in Arterial blood'}; {LOINC code '59408-5' = 'Oxygen saturation in Arterial blood by Pulse oximetry', given as 'Oxygen saturation in Arterial blood by Pulse oximetry'}; {urn:iso:std:iso:11073:10101 code '150456' = '150456', given as 'MDC_PULS_OXIM_SAT_O2'})</span></p><p><b>subject</b>: <a>Patient/example</a></p><p><b>effective</b>: 05/12/2014 9:30:10 AM</p><p><b>value</b>: 95 %<span> (Details: UCUM code % = '%')</span></p><p><b>interpretation</b>: Normal (applies to non-numeric results) <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation code 'N' = 'Normal', given as 'Normal'})</span></p><p><b>device</b>: <a>DeviceMetric/example</a></p><h3>ReferenceRanges</h3><table><tr><td>-</td><td><b>Low</b></td><td><b>High</b></td></tr><tr><td>*</td><td>90 %<span> (Details: UCUM code % = '%')</span></td><td>99 %<span> (Details: UCUM code % = '%')</span></td></tr></table></div>",
  },
  identifier: [
    {
      system: "http://goodcare.org/observation/id",
      value: "o1223435-10",
    },
  ],
  partOf: [
    {
      reference: "Procedure/ob",
    },
  ],
  status: "final",
  category: [
    {
      coding: [
        {
          system: "http://terminology.hl7.org/CodeSystem/observation-category",
          code: "vital-signs",
          display: "Vital Signs",
        },
      ],
      text: "Vital Signs",
    },
  ],
  code: {
    coding: [
      {
        system: "http://loinc.org",
        code: "2708-6",
        display: "Oxygen saturation in Arterial blood",
      },
      {
        system: "http://loinc.org",
        code: "59408-5",
        display: "Oxygen saturation in Arterial blood by Pulse oximetry",
      },
      {
        system: "urn:iso:std:iso:11073:10101",
        code: "150456",
        display: "MDC_PULS_OXIM_SAT_O2",
      },
    ],
  },
  subject: {
    reference: "Patient/example",
  },
  effectiveDateTime: "2014-12-05T09:30:10+01:00",
  valueQuantity: {
    value: 95,
    unit: "%",
    system: "http://unitsofmeasure.org",
    code: "%",
  },
  interpretation: [
    {
      coding: [
        {
          system:
            "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
          code: "N",
          display: "Normal",
        },
      ],
      text: "Normal (applies to non-numeric results)",
    },
  ],
  device: {
    reference: "DeviceMetric/example",
  },
  referenceRange: [
    {
      low: {
        value: 90,
        unit: "%",
        system: "http://unitsofmeasure.org",
        code: "%",
      },
      high: {
        value: 99,
        unit: "%",
        system: "http://unitsofmeasure.org",
        code: "%",
      },
    },
  ],
} as const;

export const ObservationExampleSecondsmoke: Observation = {
  resourceType: "Observation",
  id: "secondsmoke",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: secondsmoke</p><p><b>status</b>: final</p><p><b>category</b>: Social History <span>(Details : {http://terminology.hl7.org/CodeSystem/observation-category code 'social-history' = 'Social History', given as 'Social History'})</span></p><p><b>code</b>: Second hand smoke exposure <span>(Details : {LOINC code '39243-1' = 'Second hand smoke exposure CPHS', given as 'Second hand smoke exposure CPHS'}; {SNOMED CT code '102409004' = 'Second hand cigarette smoke', given as 'Second hand cigarette smoke (substance)'})</span></p><p><b>subject</b>: <a>Patient/infant</a></p><p><b>effective</b>: 18/05/2016 10:33:22 PM</p><p><b>value</b>: YES <span>(Details : {SNOMED CT code '373066001' = 'Yes', given as 'Yes (qualifier value)'})</span></p></div>",
  },
  status: "final",
  category: [
    {
      coding: [
        {
          system: "http://terminology.hl7.org/CodeSystem/observation-category",
          code: "social-history",
          display: "Social History",
        },
      ],
      text: "Social History",
    },
  ],
  code: {
    coding: [
      {
        system: "http://loinc.org",
        code: "39243-1",
        display: "Second hand smoke exposure CPHS",
      },
      {
        system: "http://snomed.info/sct",
        code: "102409004",
        display: "Second hand cigarette smoke (substance)",
      },
    ],
    text: "Second hand smoke exposure",
  },
  subject: {
    reference: "Patient/infant",
  },
  effectiveDateTime: "2016-05-18T22:33:22Z",
  valueCodeableConcept: {
    coding: [
      {
        system: "http://snomed.info/sct",
        code: "373066001",
        display: "Yes (qualifier value)",
      },
    ],
    text: "YES",
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

export const ObservationExampleSpirometry: Observation = {
  resourceType: "Observation",
  id: "656",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: 656</p><p><b>identifier</b>: patientId-urn:oid:1.2.4~0000000000000000~152584~20170503155426~820</p><p><b>status</b>: final</p><p><b>code</b>: MDC_FLOW_AWAY_EXP_FORCED_PEAK <span>(Details : {urn:iso:std:iso:11073:10101 code '152584' = '152584', given as 'MDC_FLOW_AWAY_EXP_FORCED_PEAK'})</span></p><p><b>subject</b>: <a>Patient/PatientId-patientId</a></p><p><b>effective</b>: 03/05/2017 3:54:26 PM</p><p><b>performer</b>: <a>Patient/PatientId-patientId</a></p><p><b>value</b>: 820 cL/s<span> (Details: urn:iso:std:iso:11073:10101 code 265201 = '265201')</span></p></div>",
  },
  identifier: [
    {
      value:
        "patientId-urn:oid:1.2.4~0000000000000000~152584~20170503155426~820",
    },
  ],
  status: "final",
  code: {
    coding: [
      {
        system: "urn:iso:std:iso:11073:10101",
        code: "152584",
        display: "MDC_FLOW_AWAY_EXP_FORCED_PEAK",
      },
    ],
  },
  subject: {
    reference: "Patient/PatientId-patientId",
  },
  effectiveDateTime: "2017-05-03T15:54:26-04:00",
  performer: [
    {
      reference: "Patient/PatientId-patientId",
    },
  ],
  valueQuantity: {
    value: 820,
    unit: "cL/s",
    system: "urn:iso:std:iso:11073:10101",
    code: "265201",
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

export const ObservationExampleTrachcare: Observation = {
  resourceType: "Observation",
  id: "trachcare",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: trachcare</p><p><b>status</b>: final</p><p><b>category</b>: Exam <span>(Details : {http://terminology.hl7.org/CodeSystem/observation-category code 'exam' = 'Exam', given as 'Exam'})</span></p><p><b>code</b>: Tracheostomy care assessment (procedure) <span>(Details : {SNOMED CT code '410211008' = 'Tracheostomy care assessment', given as 'Tracheostomy care assessment (procedure)'})</span></p><p><b>subject</b>: <a>Patient/infant</a></p><p><b>focus</b>: <a>Patient/infant-mom</a></p><p><b>effective</b>: 11/03/2018 4:07:54 PM</p><p><b>value</b>: Mother is trained to change her child's tracheostomy tube</p></div>",
  },
  status: "final",
  category: [
    {
      coding: [
        {
          system: "http://terminology.hl7.org/CodeSystem/observation-category",
          code: "exam",
          display: "Exam",
        },
      ],
      text: "Exam",
    },
  ],
  code: {
    coding: [
      {
        system: "http://snomed.info/sct",
        code: "410211008",
        display: "Tracheostomy care assessment (procedure)",
      },
    ],
  },
  subject: {
    reference: "Patient/infant",
  },
  focus: [
    {
      reference: "Patient/infant-mom",
    },
  ],
  effectiveDateTime: "2018-03-11T16:07:54+00:00",
  valueString: "Mother is trained to change her child's tracheostomy tube",
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

export const ObservationExampleUnsat: Observation = {
  resourceType: "Observation",
  id: "unsat",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: unsat</p><p><b>identifier</b>: 6323 (OFFICIAL)</p><p><b>status</b>: cancelled</p><p><b>code</b>: Glucose [Moles/volume] in Blood <span>(Details : {LOINC code '15074-8' = 'Glucose [Moles/volume] in Blood', given as 'Glucose [Moles/volume] in Blood'})</span></p><p><b>subject</b>: <a>P. van de Heuvel</a></p><p><b>effective</b>: 02/04/2013 9:30:10 AM --&gt; 05/04/2013 9:30:10 AM</p><p><b>issued</b>: 03/04/2013 3:30:10 PM</p><p><b>performer</b>: <a>A. Langeveld</a></p><p><b>dataAbsentReason</b>: Specimen unsatisfactory for evaluation <span>(Details : {SNOMED CT code '125154007' = 'Specimen unsatisfactory for evaluation', given as 'Specimen unsatisfactory for evaluation'})</span></p><p><b>note</b>: Tube broken in transit and sample leaked</p><h3>ReferenceRanges</h3><table><tr><td>-</td><td><b>Low</b></td><td><b>High</b></td></tr><tr><td>*</td><td>3.1 mmol/l<span> (Details: UCUM code mmol/L = 'mmol/L')</span></td><td>6.2 mmol/l<span> (Details: UCUM code mmol/L = 'mmol/L')</span></td></tr></table></div>",
  },
  identifier: [
    {
      use: "official",
      system: "http://www.bmc.nl/zorgportal/identifiers/observations",
      value: "6323",
    },
  ],
  status: "cancelled",
  code: {
    coding: [
      {
        system: "http://loinc.org",
        code: "15074-8",
        display: "Glucose [Moles/volume] in Blood",
      },
    ],
  },
  subject: {
    reference: "Patient/f001",
    display: "P. van de Heuvel",
  },
  effectivePeriod: {
    start: "2013-04-02T09:30:10+01:00",
    end: "2013-04-05T09:30:10+01:00",
  },
  issued: "2013-04-03T15:30:10+01:00",
  performer: [
    {
      reference: "Practitioner/f005",
      display: "A. Langeveld",
    },
  ],
  dataAbsentReason: {
    coding: [
      {
        system: "http://snomed.info/sct",
        code: "125154007",
        display: "Specimen unsatisfactory for evaluation",
      },
    ],
  },
  note: [
    {
      text: "Tube broken in transit and sample leaked",
    },
  ],
  referenceRange: [
    {
      low: {
        value: 3.1,
        unit: "mmol/l",
        system: "http://unitsofmeasure.org",
        code: "mmol/L",
      },
      high: {
        value: 6.2,
        unit: "mmol/l",
        system: "http://unitsofmeasure.org",
        code: "mmol/L",
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

export const ObservationExampleVitalsPanel: Observation = {
  resourceType: "Observation",
  id: "vitals-panel",
  meta: {
    profile: ["http://hl7.org/fhir/StructureDefinition/vitalsigns"],
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
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: vitals-panel</p><p><b>meta</b>: </p><p><b>status</b>: final</p><p><b>category</b>: Vital Signs <span>(Details : {http://terminology.hl7.org/CodeSystem/observation-category code 'vital-signs' = 'Vital Signs', given as 'Vital Signs'})</span></p><p><b>code</b>: Vital signs Panel <span>(Details : {LOINC code '85353-1' = 'Vital signs, weight, height, head circumference, oxygen saturation &amp; BMI panel', given as 'Vital signs, weight, height, head circumference, oxygen saturation and BMI panel'})</span></p><p><b>subject</b>: <a>Patient/example</a></p><p><b>effective</b>: 02/07/1999</p><p><b>hasMember</b>: </p><ul><li><a>Respiratory Rate</a></li><li><a>Heart Rate</a></li><li><a>Blood Pressure</a></li><li><a>Body Temperature</a></li></ul></div>",
  },
  status: "final",
  category: [
    {
      coding: [
        {
          system: "http://terminology.hl7.org/CodeSystem/observation-category",
          code: "vital-signs",
          display: "Vital Signs",
        },
      ],
      text: "Vital Signs",
    },
  ],
  code: {
    coding: [
      {
        system: "http://loinc.org",
        code: "85353-1",
        display:
          "Vital signs, weight, height, head circumference, oxygen saturation and BMI panel",
      },
    ],
    text: "Vital signs Panel",
  },
  subject: {
    reference: "Patient/example",
  },
  effectiveDateTime: "1999-07-02",
  hasMember: [
    {
      reference: "Observation/respiratory-rate",
      display: "Respiratory Rate",
    },
    {
      reference: "Observation/heart-rate",
      display: "Heart Rate",
    },
    {
      reference: "Observation/blood-pressure",
      display: "Blood Pressure",
    },
    {
      reference: "Observation/body-temperature",
      display: "Body Temperature",
    },
  ],
} as const;

export const ObservationExampleVomiting: Observation = {
  resourceType: "Observation",
  id: "vomiting",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: vomiting</p><p><b>status</b>: final</p><p><b>category</b>: Signs and Symptoms <span>(Details )</span></p><p><b>code</b>: Vomiting [Minimum Data Set] <span>(Details : {LOINC code '45708-5' = 'Vomiting [Minimum Data Set]', given as 'Vomiting [Minimum Data Set]'}; {SNOMED CT code '249497008' = 'Vomiting symptom', given as 'Vomiting symptom (finding)'})</span></p><p><b>subject</b>: <a>Patient/infant</a></p><p><b>effective</b>: 18/05/2016 10:33:22 PM</p><p><b>value</b>: Absent (qualifier value) <span>(Details : {SNOMED CT code '2667000' = 'Absent', given as 'Absent (qualifier value)'})</span></p></div>",
  },
  status: "final",
  category: [
    {
      text: "Signs and Symptoms",
    },
  ],
  code: {
    coding: [
      {
        system: "http://loinc.org",
        code: "45708-5",
        display: "Vomiting [Minimum Data Set]",
      },
      {
        system: "http://snomed.info/sct",
        code: "249497008",
        display: "Vomiting symptom (finding)",
      },
    ],
  },
  subject: {
    reference: "Patient/infant",
  },
  effectiveDateTime: "2016-05-18T22:33:22Z",
  valueCodeableConcept: {
    coding: [
      {
        system: "http://snomed.info/sct",
        code: "2667000",
        display: "Absent (qualifier value)",
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

export const ObservationExampleVpOyster: Observation = {
  resourceType: "Observation",
  id: "vp-oyster",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: vp-oyster</p><p><b>identifier</b>: 20171014-1234 (OFFICIAL)</p><p><b>status</b>: preliminary</p><p><b>code</b>: OYSTER TESTING <span>(Details : {LOINC code '41857-4' = 'Vibrio parahaemolyticus DNA [Presence] in Unspecified specimen by Probe and target amplification method', given as 'Vibrio parahaemolyticus DNA [Presence] in Unspecified specimen by Probe and target amplification method'}; {http://sonomacounty.ca.gov/Health/Public-Health/Laboratory/test-codes code 'VP MULTI PCR' = 'VP MULTI PCR', given as 'VP MULTI PCR'})</span></p><p><b>subject</b>: Sonoma oyster farm</p><p><b>effective</b>: 12/10/2017</p><p><b>issued</b>: 14/10/2017 11:11:24 PM</p><p><b>performer</b>: <a>A. Langeveld</a></p><p><b>value</b>: POSITIVE <span>(Details : {SNOMED CT code '10828004' = 'Positive', given as 'Positive (qualifier value)'}; {http://sonomacounty.ca.gov/Health/Public-Health/Laboratory/result-codes code 'POSITIVE' = 'POSITIVE', given as 'POSITIVE'})</span></p><p><b>interpretation</b>: Abnormal <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation code 'A' = 'Abnormal', given as 'Abnormal'})</span></p><p><b>specimen</b>: Live Oysters Acc#20171014-1234</p><h3>ReferenceRanges</h3><table><tr><td>-</td><td><b>Text</b></td></tr><tr><td>*</td><td>NEGATIVE</td></tr></table></div>",
  },
  identifier: [
    {
      use: "official",
      system: "http://sonomacounty.ca.gov/Health/Public-Health/Laboratory",
      value: "20171014-1234",
    },
  ],
  status: "preliminary",
  code: {
    coding: [
      {
        system: "http://loinc.org",
        code: "41857-4",
        display:
          "Vibrio parahaemolyticus DNA [Presence] in Unspecified specimen by Probe and target amplification method",
      },
      {
        system:
          "http://sonomacounty.ca.gov/Health/Public-Health/Laboratory/test-codes",
        code: "VP MULTI PCR",
        display: "VP MULTI PCR",
      },
    ],
    text: "OYSTER TESTING",
  },
  subject: {
    display: "Sonoma oyster farm",
  },
  effectiveDateTime: "2017-10-12",
  issued: "2017-10-14T23:11:24Z",
  performer: [
    {
      reference: "Practitioner/f005",
      display: "A. Langeveld",
    },
  ],
  valueCodeableConcept: {
    coding: [
      {
        system: "http://snomed.info/sct",
        code: "10828004",
        display: "Positive (qualifier value)",
      },
      {
        system:
          "http://sonomacounty.ca.gov/Health/Public-Health/Laboratory/result-codes",
        code: "POSITIVE",
        display: "POSITIVE",
      },
    ],
    text: "POSITIVE",
  },
  interpretation: [
    {
      coding: [
        {
          system:
            "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
          code: "A",
          display: "Abnormal",
        },
      ],
    },
  ],
  specimen: {
    display: "Live Oysters Acc#20171014-1234",
  },
  referenceRange: [
    {
      text: "NEGATIVE",
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

export const ObservationExample: Observation = {
  resourceType: "Observation",
  id: "example",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: example</p><p><b>status</b>: final</p><p><b>category</b>: Vital Signs <span>(Details : {http://terminology.hl7.org/CodeSystem/observation-category code 'vital-signs' = 'Vital Signs', given as 'Vital Signs'})</span></p><p><b>code</b>: Body Weight <span>(Details : {LOINC code '29463-7' = 'Body weight', given as 'Body Weight'}; {LOINC code '3141-9' = 'Body weight Measured', given as 'Body weight Measured'}; {SNOMED CT code '27113001' = 'Body weight', given as 'Body weight'}; {http://acme.org/devices/clinical-codes code 'body-weight' = 'body-weight', given as 'Body Weight'})</span></p><p><b>subject</b>: <a>Patient/example</a></p><p><b>encounter</b>: <a>Encounter/example</a></p><p><b>effective</b>: 28/03/2016</p><p><b>value</b>: 185 lbs<span> (Details: UCUM code [lb_av] = 'lb_av')</span></p></div>",
  },
  status: "final",
  category: [
    {
      coding: [
        {
          system: "http://terminology.hl7.org/CodeSystem/observation-category",
          code: "vital-signs",
          display: "Vital Signs",
        },
      ],
    },
  ],
  code: {
    coding: [
      {
        system: "http://loinc.org",
        code: "29463-7",
        display: "Body Weight",
      },
      {
        system: "http://loinc.org",
        code: "3141-9",
        display: "Body weight Measured",
      },
      {
        system: "http://snomed.info/sct",
        code: "27113001",
        display: "Body weight",
      },
      {
        system: "http://acme.org/devices/clinical-codes",
        code: "body-weight",
        display: "Body Weight",
      },
    ],
  },
  subject: {
    reference: "Patient/example",
  },
  encounter: {
    reference: "Encounter/example",
  },
  effectiveDateTime: "2016-03-28",
  valueQuantity: {
    value: 185,
    unit: "lbs",
    system: "http://unitsofmeasure.org",
    code: "[lb_av]",
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
