import type { MedicationStatement } from "../../src/v4.0.1/medicationstatement/types";

export const Medicationstatementexample1: MedicationStatement = {
  resourceType: "MedicationStatement",
  id: "example001",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: example001</p><p><b>contained</b>: </p><p><b>identifier</b>: 12345689 (OFFICIAL)</p><p><b>status</b>: active</p><p><b>category</b>: Inpatient <span>(Details : {http://terminology.hl7.org/CodeSystem/medication-statement-category code 'inpatient' = 'Inpatient', given as 'Inpatient'})</span></p><p><b>medication</b>: id: med0309; Tylenol PM <span>(Details : {http://hl7.org/fhir/sid/ndc code '50580-506-02' = 'n/a', given as 'Tylenol PM'})</span>; Film-coated tablet (qualifier value) <span>(Details : {SNOMED CT code '385057009' = 'Film-coated tablet', given as 'Film-coated tablet (qualifier value)'})</span></p><p><b>subject</b>: <a>Donald Duck</a></p><p><b>effective</b>: 23/01/2015</p><p><b>dateAsserted</b>: 22/02/2015</p><p><b>informationSource</b>: <a>Donald Duck</a></p><p><b>derivedFrom</b>: <a>MedicationRequest/medrx002</a></p><p><b>reasonCode</b>: Restless Legs <span>(Details : {SNOMED CT code '32914008' = 'Restless legs', given as 'Restless Legs'})</span></p><p><b>note</b>: Patient indicates they miss the occasional dose</p><p><b>dosage</b>: </p></div>",
  },
  contained: [
    {
      resourceType: "Medication",
      id: "med0309",
      code: {
        coding: [
          {
            system: "http://hl7.org/fhir/sid/ndc",
            code: "50580-506-02",
            display: "Tylenol PM",
          },
        ],
      },
      form: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "385057009",
            display: "Film-coated tablet (qualifier value)",
          },
        ],
      },
      ingredient: [
        {
          itemCodeableConcept: {
            coding: [
              {
                system: "http://www.nlm.nih.gov/research/umls/rxnorm",
                code: "315266",
                display: "Acetaminophen 500 MG",
              },
            ],
          },
          strength: {
            numerator: {
              value: 500,
              system: "http://unitsofmeasure.org",
              code: "mg",
            },
            denominator: {
              value: 1,
              system:
                "http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",
              code: "Tab",
            },
          },
        },
        {
          itemCodeableConcept: {
            coding: [
              {
                system: "http://www.nlm.nih.gov/research/umls/rxnorm",
                code: "901813",
                display: "Diphenhydramine Hydrochloride 25 mg",
              },
            ],
          },
          strength: {
            numerator: {
              value: 25,
              system: "http://unitsofmeasure.org",
              code: "mg",
            },
            denominator: {
              value: 1,
              system:
                "http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",
              code: "Tab",
            },
          },
        },
      ],
      batch: {
        lotNumber: "9494788",
        expirationDate: "2017-05-22",
      },
    },
  ],
  identifier: [
    {
      use: "official",
      system: "http://www.bmc.nl/portal/medstatements",
      value: "12345689",
    },
  ],
  status: "active",
  category: {
    coding: [
      {
        system:
          "http://terminology.hl7.org/CodeSystem/medication-statement-category",
        code: "inpatient",
        display: "Inpatient",
      },
    ],
  },
  medicationReference: {
    reference: "#med0309",
  },
  subject: {
    reference: "Patient/pat1",
    display: "Donald Duck",
  },
  effectiveDateTime: "2015-01-23",
  dateAsserted: "2015-02-22",
  informationSource: {
    reference: "Patient/pat1",
    display: "Donald Duck",
  },
  derivedFrom: [
    {
      reference: "MedicationRequest/medrx002",
    },
  ],
  reasonCode: [
    {
      coding: [
        {
          system: "http://snomed.info/sct",
          code: "32914008",
          display: "Restless Legs",
        },
      ],
    },
  ],
  note: [
    {
      text: "Patient indicates they miss the occasional dose",
    },
  ],
  dosage: [
    {
      sequence: 1,
      text: "1-2 tablets once daily at bedtime as needed for restless legs",
      additionalInstruction: [
        {
          text: "Taking at bedtime",
        },
      ],
      timing: {
        repeat: {
          frequency: 1,
          period: 1,
          periodUnit: "d",
        },
      },
      asNeededCodeableConcept: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "32914008",
            display: "Restless Legs",
          },
        ],
      },
      route: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "26643006",
            display: "Oral Route",
          },
        ],
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
          doseRange: {
            low: {
              value: 1,
              unit: "TAB",
              system:
                "http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",
              code: "TAB",
            },
            high: {
              value: 2,
              unit: "TAB",
              system:
                "http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",
              code: "TAB",
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

export const Medicationstatementexample2: MedicationStatement = {
  resourceType: "MedicationStatement",
  id: "example002",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: example002</p><p><b>contained</b>: </p><p><b>status</b>: active</p><p><b>statusReason</b>: Liver enzymes abnormal <span>(Details : {SNOMED CT code '166643006' = 'Liver enzymes abnormal', given as 'Liver enzymes abnormal'})</span></p><p><b>medication</b>: id: med0309; Tylenol PM <span>(Details : {http://hl7.org/fhir/sid/ndc code '50580-506-02' = 'n/a', given as 'Tylenol PM'})</span>; Film-coated tablet (qualifier value) <span>(Details : {SNOMED CT code '385057009' = 'Film-coated tablet', given as 'Film-coated tablet (qualifier value)'})</span></p><p><b>subject</b>: <a>Donald Duck</a></p><p><b>effective</b>: 23/01/2015</p><p><b>dateAsserted</b>: 22/02/2015</p><p><b>informationSource</b>: <a>Donald Duck</a></p><p><b>note</b>: Patient cannot take acetaminophen as per Dr instructions</p></div>",
  },
  contained: [
    {
      resourceType: "Medication",
      id: "med0309",
      code: {
        coding: [
          {
            system: "http://hl7.org/fhir/sid/ndc",
            code: "50580-506-02",
            display: "Tylenol PM",
          },
        ],
      },
      form: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "385057009",
            display: "Film-coated tablet (qualifier value)",
          },
        ],
      },
      ingredient: [
        {
          itemCodeableConcept: {
            coding: [
              {
                system: "http://www.nlm.nih.gov/research/umls/rxnorm",
                code: "315266",
                display: "Acetaminophen 500 MG",
              },
            ],
          },
          strength: {
            numerator: {
              value: 500,
              system: "http://unitsofmeasure.org",
              code: "mg",
            },
            denominator: {
              value: 1,
              system:
                "http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",
              code: "Tab",
            },
          },
        },
        {
          itemCodeableConcept: {
            coding: [
              {
                system: "http://www.nlm.nih.gov/research/umls/rxnorm",
                code: "901813",
                display: "Diphenhydramine Hydrochloride 25 mg",
              },
            ],
          },
          strength: {
            numerator: {
              value: 25,
              system: "http://unitsofmeasure.org",
              code: "mg",
            },
            denominator: {
              value: 1,
              system:
                "http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",
              code: "Tab",
            },
          },
        },
      ],
      batch: {
        lotNumber: "9494788",
        expirationDate: "2017-05-22",
      },
    },
  ],
  status: "active",
  statusReason: [
    {
      coding: [
        {
          system: "http://snomed.info/sct",
          code: "166643006",
          display: "Liver enzymes abnormal",
        },
      ],
    },
  ],
  medicationReference: {
    reference: "#med0309",
  },
  subject: {
    reference: "Patient/pat1",
    display: "Donald Duck",
  },
  effectiveDateTime: "2015-01-23",
  dateAsserted: "2015-02-22",
  informationSource: {
    reference: "Patient/pat1",
    display: "Donald Duck",
  },
  note: [
    {
      text: "Patient cannot take acetaminophen as per Dr instructions",
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

export const Medicationstatementexample3: MedicationStatement = {
  resourceType: "MedicationStatement",
  id: "example003",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: example003</p><p><b>status</b>: active</p><p><b>medication</b>: Little Pink Pill for water retention <span>(Details )</span></p><p><b>subject</b>: <a>Donald Duck</a></p><p><b>effective</b>: 01/02/2014</p><p><b>dateAsserted</b>: 22/02/2014</p><p><b>informationSource</b>: <a>Donald Duck</a></p><p><b>reasonReference</b>: <a>Observation/blood-pressure</a></p><p><b>note</b>: Patient cannot remember the name of the tablet, but takes it every day in the morning for water retention</p><p><b>dosage</b>: </p></div>',
  },
  status: "active",
  medicationCodeableConcept: {
    text: "Little Pink Pill for water retention",
  },
  subject: {
    reference: "Patient/pat1",
    display: "Donald Duck",
  },
  effectiveDateTime: "2014-02-01",
  dateAsserted: "2014-02-22",
  informationSource: {
    reference: "Patient/pat1",
    display: "Donald Duck",
  },
  reasonReference: [
    {
      reference: "Observation/blood-pressure",
    },
  ],
  note: [
    {
      text: "Patient cannot remember the name of the tablet, but takes it every day in the morning for water retention",
    },
  ],
  dosage: [
    {
      sequence: 1,
      text: "1 tablet per day",
      asNeededBoolean: false,
      route: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "260548002",
            display: "Oral",
          },
        ],
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
            unit: "tab",
            system:
              "http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",
            code: "tab",
          },
        },
      ],
      maxDosePerPeriod: {
        numerator: {
          value: 1,
        },
        denominator: {
          value: 1,
          system: "http://unitsofmeasure.org",
          code: "d",
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

export const Medicationstatementexample4: MedicationStatement = {
  resourceType: "MedicationStatement",
  id: "example004",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: example004</p><p><b>partOf</b>: <a>Observation/blood-pressure</a></p><p><b>status</b>: active</p><p><b>medication</b>: Amoxicillin (product) <span>(Details : {SNOMED CT code '27658006' = 'p-Hydroxyampicillin', given as 'Amoxicillin (product)'})</span></p><p><b>subject</b>: <a>Donald Duck</a></p><p><b>effective</b>: 23/01/2014</p><p><b>dateAsserted</b>: 22/02/2015</p><p><b>informationSource</b>: <a>Donald Duck</a></p><p><b>reasonCode</b>: Otitis Media <span>(Details : {SNOMED CT code '65363002' = 'Otitis media', given as 'Otitis Media'})</span></p><p><b>note</b>: Patient indicates they miss the occasional dose</p><p><b>dosage</b>: </p></div>",
  },
  partOf: [
    {
      reference: "Observation/blood-pressure",
    },
  ],
  status: "active",
  medicationCodeableConcept: {
    coding: [
      {
        system: "http://snomed.info/sct",
        code: "27658006",
        display: "Amoxicillin (product)",
      },
    ],
  },
  subject: {
    reference: "Patient/pat1",
    display: "Donald Duck",
  },
  effectiveDateTime: "2014-01-23",
  dateAsserted: "2015-02-22",
  informationSource: {
    reference: "Patient/pat1",
    display: "Donald Duck",
  },
  reasonCode: [
    {
      coding: [
        {
          system: "http://snomed.info/sct",
          code: "65363002",
          display: "Otitis Media",
        },
      ],
    },
  ],
  note: [
    {
      text: "Patient indicates they miss the occasional dose",
    },
  ],
  dosage: [
    {
      text: "one capsule three times daily",
      timing: {
        repeat: {
          frequency: 3,
          period: 1,
          periodUnit: "d",
        },
      },
      asNeededBoolean: false,
      route: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "260548002",
            display: "Oral",
          },
        ],
      },
      maxDosePerPeriod: {
        numerator: {
          value: 3,
          unit: "capsules",
          system: "http://snomed.info/sct",
          code: "385055001",
        },
        denominator: {
          value: 1,
          system: "http://unitsofmeasure.org",
          code: "d",
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

export const Medicationstatementexample5: MedicationStatement = {
  resourceType: "MedicationStatement",
  id: "example005",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: example005</p><p><b>basedOn</b>: <a>CarePlan/gpvisit</a></p><p><b>status</b>: entered-in-error</p><p><b>medication</b>: Amoxicillin (product) <span>(Details : {SNOMED CT code '27658006' = 'p-Hydroxyampicillin', given as 'Amoxicillin (product)'})</span></p><p><b>subject</b>: <a>Donald Duck</a></p><p><b>context</b>: <a>Encounter/f203</a></p><p><b>effective</b>: 23/01/2014</p><p><b>dateAsserted</b>: 22/02/2015</p><p><b>informationSource</b>: <a>Donald Duck</a></p><p><b>note</b>: Patient indicated that they thought it was Amoxicillin they were taking but it was really Erythromycin</p></div>",
  },
  basedOn: [
    {
      reference: "CarePlan/gpvisit",
    },
  ],
  status: "entered-in-error",
  medicationCodeableConcept: {
    coding: [
      {
        system: "http://snomed.info/sct",
        code: "27658006",
        display: "Amoxicillin (product)",
      },
    ],
  },
  subject: {
    reference: "Patient/pat1",
    display: "Donald Duck",
  },
  context: {
    reference: "Encounter/f203",
  },
  effectiveDateTime: "2014-01-23",
  dateAsserted: "2015-02-22",
  informationSource: {
    reference: "Patient/pat1",
    display: "Donald Duck",
  },
  note: [
    {
      text: "Patient indicated that they thought it was Amoxicillin they were taking but it was really Erythromycin",
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

export const Medicationstatementexample6: MedicationStatement = {
  resourceType: "MedicationStatement",
  id: "example006",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: example006</p><p><b>status</b>: active</p><p><b>medication</b>: Amoxicillin (product) <span>(Details : {SNOMED CT code '27658006' = 'p-Hydroxyampicillin', given as 'Amoxicillin (product)'})</span></p><p><b>subject</b>: <a>Donald Duck</a></p><p><b>effective</b>: 01/02/2014</p><p><b>dateAsserted</b>: 22/02/2014</p><p><b>informationSource</b>: <a>Peter Chalmers</a></p><p><b>note</b>: Father indicates they miss the occasional dose</p><p><b>dosage</b>: </p></div>",
  },
  status: "active",
  medicationCodeableConcept: {
    coding: [
      {
        system: "http://snomed.info/sct",
        code: "27658006",
        display: "Amoxicillin (product)",
      },
    ],
  },
  subject: {
    reference: "Patient/pat1",
    display: "Donald Duck",
  },
  effectiveDateTime: "2014-02-01",
  dateAsserted: "2014-02-22",
  informationSource: {
    reference: "RelatedPerson/peter",
    display: "Peter Chalmers",
  },
  note: [
    {
      text: "Father indicates they miss the occasional dose",
    },
  ],
  dosage: [
    {
      sequence: 1,
      text: "5ml three times daily",
      asNeededBoolean: false,
      route: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "260548002",
            display: "Oral",
          },
        ],
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
            value: 5,
            unit: "mL",
            system: "http://unitsofmeasure.org",
            code: "mL",
          },
        },
      ],
      maxDosePerPeriod: {
        numerator: {
          value: 3,
        },
        denominator: {
          value: 1,
          system: "http://unitsofmeasure.org",
          code: "d",
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

export const Medicationstatementexample7: MedicationStatement = {
  resourceType: "MedicationStatement",
  id: "example007",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: example007</p><p><b>contained</b>: </p><p><b>status</b>: active</p><p><b>medication</b>: id: med0315; Mometasone Furoate 0.05mg/Actuat <span>(Details : {RxNorm code '358793' = 'mometasone furoate 0.05 MG/ACTUAT', given as 'Mometasone Furoate 0.05mg/Actuat'})</span>; Nasal Spray <span>(Details : {SNOMED CT code '385157007' = 'Nasal spray', given as 'Nasal Spray'})</span></p><p><b>subject</b>: <a>Donald Duck</a></p><p><b>informationSource</b>: <a>Donald Duck</a></p><p><b>note</b>: patient plans to start using for seasonal allergies in the Spring when pollen is in the air</p></div>",
  },
  contained: [
    {
      resourceType: "Medication",
      id: "med0315",
      code: {
        coding: [
          {
            system: "http://www.nlm.nih.gov/research/umls/rxnorm",
            code: "358793",
            display: "Mometasone Furoate 0.05mg/Actuat",
          },
        ],
      },
      form: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "385157007",
            display: "Nasal Spray",
          },
        ],
      },
    },
  ],
  status: "active",
  medicationReference: {
    reference: "#med0315",
  },
  subject: {
    reference: "Patient/pat1",
    display: "Donald Duck",
  },
  informationSource: {
    reference: "Patient/pat1",
    display: "Donald Duck",
  },
  note: [
    {
      text: "patient plans to start using for seasonal allergies in the Spring when pollen is in the air",
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
