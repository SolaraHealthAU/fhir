import type { Medication } from "../../src/v4.0.1/medication/types";

export const Medicationexample0301: Medication = {
  resourceType: "Medication",
  id: "med0301",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: med0301</p><p><b>contained</b>: </p><p><b>code</b>: Vancomycin Hydrochloride (VANCOMYCIN HYDROCHLORIDE) <span>(Details : {http://hl7.org/fhir/sid/ndc code '0069-2587-10' = 'n/a', given as 'Vancomycin Hydrochloride (VANCOMYCIN HYDROCHLORIDE)'})</span></p><p><b>status</b>: active</p><p><b>manufacturer</b>: id: org4; name: Pfizer Laboratories Div Pfizer Inc</p><p><b>form</b>: Injection Solution (qualifier value) <span>(Details : {SNOMED CT code '385219001' = 'Injection solution', given as 'Injection Solution (qualifier value)'})</span></p><h3>Ingredients</h3><table><tr><td>-</td><td><b>Item[x]</b></td><td><b>IsActive</b></td><td><b>Strength</b></td></tr><tr><td>*</td><td>Vancomycin Hydrochloride <span>(Details : {RxNorm code '66955' = 'Vancomycin Hydrochloride', given as 'Vancomycin Hydrochloride'})</span></td><td>true</td><td>500 mg<span> (Details: UCUM code mg = 'mg')</span>/10 mL<span> (Details: UCUM code mL = 'mL')</span></td></tr></table><h3>Batches</h3><table><tr><td>-</td><td><b>LotNumber</b></td><td><b>ExpirationDate</b></td></tr><tr><td>*</td><td>9494788</td><td>22/05/2017</td></tr></table></div>",
  },
  contained: [
    {
      resourceType: "Organization",
      id: "org4",
      name: "Pfizer Laboratories Div Pfizer Inc",
    },
  ],
  code: {
    coding: [
      {
        system: "http://hl7.org/fhir/sid/ndc",
        code: "0069-2587-10",
        display: "Vancomycin Hydrochloride (VANCOMYCIN HYDROCHLORIDE)",
      },
    ],
  },
  status: "active",
  manufacturer: {
    reference: "#org4",
  },
  form: {
    coding: [
      {
        system: "http://snomed.info/sct",
        code: "385219001",
        display: "Injection Solution (qualifier value)",
      },
    ],
  },
  ingredient: [
    {
      itemCodeableConcept: {
        coding: [
          {
            system: "http://www.nlm.nih.gov/research/umls/rxnorm",
            code: "66955",
            display: "Vancomycin Hydrochloride",
          },
        ],
      },
      isActive: true,
      strength: {
        numerator: {
          value: 500,
          system: "http://unitsofmeasure.org",
          code: "mg",
        },
        denominator: {
          value: 10,
          system: "http://unitsofmeasure.org",
          code: "mL",
        },
      },
    },
  ],
  batch: {
    lotNumber: "9494788",
    expirationDate: "2017-05-22",
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

export const Medicationexample0302: Medication = {
  resourceType: "Medication",
  id: "med0302",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: med0302</p><p><b>contained</b>: </p><p><b>code</b>: Zosyn (piperacillin/tazobactam) 4.5gm injection <span>(Details : {http://hl7.org/fhir/sid/ndc code '0206-8862-02' = 'n/a', given as 'Zosyn (piperacillin/tazobactam) 4.5gm injection'})</span></p><p><b>manufacturer</b>: id: org7; name: Wyeth Pharmaceuticals Inc</p><p><b>form</b>: Injection solution (qualifier vallue) <span>(Details : {SNOMED CT code '385219001' = 'Injection solution', given as 'Injection solution (qualifier vallue)'})</span></p><blockquote><p><b>ingredient</b></p><p><b>item</b>: Piperacillin Sodium <span>(Details : {RxNorm code '203134' = 'Piperacillin Sodium', given as 'Piperacillin Sodium'})</span></p><p><b>strength</b>: 4 g<span> (Details: UCUM code g = 'g')</span>/20 mL<span> (Details: UCUM code mL = 'mL')</span></p></blockquote><blockquote><p><b>ingredient</b></p><p><b>item</b>: Tazobactam Sodium <span>(Details : {RxNorm code '221167' = 'TAZOBACTAM SODIUM', given as 'Tazobactam Sodium'})</span></p><p><b>strength</b>: 0.5 g<span> (Details: UCUM code g = 'g')</span>/20 mL<span> (Details: UCUM code mL = 'mL')</span></p></blockquote></div>",
  },
  contained: [
    {
      resourceType: "Organization",
      id: "org7",
      name: "Wyeth Pharmaceuticals Inc",
    },
  ],
  code: {
    coding: [
      {
        system: "http://hl7.org/fhir/sid/ndc",
        code: "0206-8862-02",
        display: "Zosyn (piperacillin/tazobactam) 4.5gm injection",
      },
    ],
  },
  manufacturer: {
    reference: "#org7",
  },
  form: {
    coding: [
      {
        system: "http://snomed.info/sct",
        code: "385219001",
        display: "Injection solution (qualifier vallue)",
      },
    ],
  },
  ingredient: [
    {
      itemCodeableConcept: {
        coding: [
          {
            system: "http://www.nlm.nih.gov/research/umls/rxnorm",
            code: "203134",
            display: "Piperacillin Sodium",
          },
        ],
      },
      strength: {
        numerator: {
          value: 4,
          system: "http://unitsofmeasure.org",
          code: "g",
        },
        denominator: {
          value: 20,
          system: "http://unitsofmeasure.org",
          code: "mL",
        },
      },
    },
    {
      itemCodeableConcept: {
        coding: [
          {
            system: "http://www.nlm.nih.gov/research/umls/rxnorm",
            code: "221167",
            display: "Tazobactam Sodium",
          },
        ],
      },
      strength: {
        numerator: {
          value: 0.5,
          system: "http://unitsofmeasure.org",
          code: "g",
        },
        denominator: {
          value: 20,
          system: "http://unitsofmeasure.org",
          code: "mL",
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

export const Medicationexample0303: Medication = {
  resourceType: "Medication",
  id: "med0303",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: med0303</p><p><b>contained</b>: </p><p><b>code</b>: Alemtuzumab 10mg/ml (Lemtrada) <span>(Details : {RxNorm code '1594660' = 'alemtuzumab 10 MG/ML [Lemtrada]', given as 'Alemtuzumab 10mg/ml (Lemtrada)'})</span></p><p><b>manufacturer</b>: id: org6; name: Genzyme</p><p><b>form</b>: Injection solution (qualifier vallue) <span>(Details : {SNOMED CT code '385219001' = 'Injection solution', given as 'Injection solution (qualifier vallue)'})</span></p><h3>Ingredients</h3><table><tr><td>-</td><td><b>Item[x]</b></td><td><b>Strength</b></td></tr><tr><td>*</td><td>Alemtuzamab (substance) <span>(Details : {SNOMED CT code '129472003' = 'Alemtuzumab', given as 'Alemtuzamab (substance)'})</span></td><td>12 mg<span> (Details: UCUM code mg = 'mg')</span>/1.2 mL<span> (Details: UCUM code mL = 'mL')</span></td></tr></table><h3>Batches</h3><table><tr><td>-</td><td><b>LotNumber</b></td><td><b>ExpirationDate</b></td></tr><tr><td>*</td><td>9494788</td><td>22/05/2017</td></tr></table></div>",
  },
  contained: [
    {
      resourceType: "Organization",
      id: "org6",
      name: "Genzyme",
    },
  ],
  code: {
    coding: [
      {
        system: "http://www.nlm.nih.gov/research/umls/rxnorm",
        code: "1594660",
        display: "Alemtuzumab 10mg/ml (Lemtrada)",
      },
    ],
  },
  manufacturer: {
    reference: "#org6",
  },
  form: {
    coding: [
      {
        system: "http://snomed.info/sct",
        code: "385219001",
        display: "Injection solution (qualifier vallue)",
      },
    ],
  },
  ingredient: [
    {
      itemCodeableConcept: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "129472003",
            display: "Alemtuzamab (substance)",
          },
        ],
      },
      strength: {
        numerator: {
          value: 12,
          system: "http://unitsofmeasure.org",
          code: "mg",
        },
        denominator: {
          value: 1.2,
          system: "http://unitsofmeasure.org",
          code: "mL",
        },
      },
    },
  ],
  batch: {
    lotNumber: "9494788",
    expirationDate: "2017-05-22",
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

export const Medicationexample0304: Medication = {
  resourceType: "Medication",
  id: "med0304",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: med0304</p><p><b>contained</b>: </p><p><b>code</b>: Myleran 2mg tablet, film coated <span>(Details : {http://hl7.org/fhir/sid/ndc code '76388-713-25' = 'n/a', given as 'Myleran 2mg tablet, film coated'})</span></p><p><b>manufacturer</b>: id: org6; name: Aspen Global Inc</p><p><b>form</b>: Film-coated tablet (qualifier value) <span>(Details : {SNOMED CT code '385057009' = 'Film-coated tablet', given as 'Film-coated tablet (qualifier value)'})</span></p><h3>Ingredients</h3><table><tr><td>-</td><td><b>Item[x]</b></td><td><b>Strength</b></td></tr><tr><td>*</td><td>Busulfan (substance) <span>(Details : {SNOMED CT code '387138002' = 'Busulphan', given as 'Busulfan (substance)'})</span></td><td>2 mg<span> (Details: UCUM code mg = 'mg')</span>/1 Tab<span> (Details: http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm code Tab = 'Tab')</span></td></tr></table><h3>Batches</h3><table><tr><td>-</td><td><b>LotNumber</b></td><td><b>ExpirationDate</b></td></tr><tr><td>*</td><td>9494788</td><td>22/05/2017</td></tr></table></div>",
  },
  contained: [
    {
      resourceType: "Organization",
      id: "org6",
      name: "Aspen Global Inc",
    },
  ],
  code: {
    coding: [
      {
        system: "http://hl7.org/fhir/sid/ndc",
        code: "76388-713-25",
        display: "Myleran 2mg tablet, film coated",
      },
    ],
  },
  manufacturer: {
    reference: "#org6",
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
            system: "http://snomed.info/sct",
            code: "387138002",
            display: "Busulfan (substance)",
          },
        ],
      },
      strength: {
        numerator: {
          value: 2,
          system: "http://unitsofmeasure.org",
          code: "mg",
        },
        denominator: {
          value: 1,
          system: "http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",
          code: "Tab",
        },
      },
    },
  ],
  batch: {
    lotNumber: "9494788",
    expirationDate: "2017-05-22",
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

export const Medicationexample0305: Medication = {
  resourceType: "Medication",
  id: "med0305",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: med0305</p><p><b>contained</b>: </p><p><b>code</b>: Timoptic 5mg/ml solution <span>(Details : {http://hl7.org/fhir/sid/ndc code '2501-813-16' = 'n/a', given as 'Timoptic 5mg/ml solution'})</span></p><p><b>manufacturer</b>: id: org5; name: Aton Pharma Inc</p><p><b>form</b>: Opthalmic Solution (qualifier value) <span>(Details : {SNOMED CT code '75359005' = 'Timolol maleate', given as 'Opthalmic Solution (qualifier value)'})</span></p><h3>Ingredients</h3><table><tr><td>-</td><td><b>Item[x]</b></td><td><b>Strength</b></td></tr><tr><td>*</td><td>Timolol Maleate (substance) <span>(Details : {SNOMED CT code '75359005' = 'Timolol maleate', given as 'Timolol Maleate (substance)'})</span></td><td>5 mg<span> (Details: UCUM code mg = 'mg')</span>/1 mL<span> (Details: UCUM code mL = 'mL')</span></td></tr></table><h3>Batches</h3><table><tr><td>-</td><td><b>LotNumber</b></td><td><b>ExpirationDate</b></td></tr><tr><td>*</td><td>9494788</td><td>22/05/2017</td></tr></table></div>",
  },
  contained: [
    {
      resourceType: "Organization",
      id: "org5",
      name: "Aton Pharma Inc",
    },
  ],
  code: {
    coding: [
      {
        system: "http://hl7.org/fhir/sid/ndc",
        code: "2501-813-16",
        display: "Timoptic 5mg/ml solution",
      },
    ],
  },
  manufacturer: {
    reference: "#org5",
  },
  form: {
    coding: [
      {
        system: "http://snomed.info/sct",
        code: "75359005",
        display: "Opthalmic Solution (qualifier value)",
      },
    ],
  },
  ingredient: [
    {
      itemCodeableConcept: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "75359005",
            display: "Timolol Maleate (substance)",
          },
        ],
      },
      strength: {
        numerator: {
          value: 5,
          system: "http://unitsofmeasure.org",
          code: "mg",
        },
        denominator: {
          value: 1,
          system: "http://unitsofmeasure.org",
          code: "mL",
        },
      },
    },
  ],
  batch: {
    lotNumber: "9494788",
    expirationDate: "2017-05-22",
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

export const Medicationexample0306: Medication = {
  resourceType: "Medication",
  id: "med0306",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: med0306</p><p><b>contained</b>: </p><p><b>code</b>: Adcetris <span>(Details : {http://hl7.org/fhir/sid/ndc code '51144-050-01' = 'n/a', given as 'Adcetris'})</span></p><p><b>manufacturer</b>: id: org3; name: Seattle Genetics Inc</p><p><b>form</b>: Lyophilized powder for injectable solution (qualifier value)  <span>(Details : {SNOMED CT code '421637006' = 'Lyophilised powder for injectable solution', given as 'Lyophilized powder for injectable solution (qualifier value) '})</span></p><h3>Batches</h3><table><tr><td>-</td><td><b>LotNumber</b></td><td><b>ExpirationDate</b></td></tr><tr><td>*</td><td>12345</td><td>31/10/2019</td></tr></table></div>",
  },
  contained: [
    {
      resourceType: "Organization",
      id: "org3",
      name: "Seattle Genetics Inc",
    },
  ],
  code: {
    coding: [
      {
        system: "http://hl7.org/fhir/sid/ndc",
        code: "51144-050-01",
        display: "Adcetris",
      },
    ],
  },
  manufacturer: {
    reference: "#org3",
  },
  form: {
    coding: [
      {
        system: "http://snomed.info/sct",
        code: "421637006",
        display:
          "Lyophilized powder for injectable solution (qualifier value) ",
      },
    ],
  },
  batch: {
    lotNumber: "12345",
    expirationDate: "2019-10-31",
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

export const Medicationexample0307: Medication = {
  resourceType: "Medication",
  id: "med0307",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: med0307</p><p><b>contained</b>: </p><p><b>code</b>: Novolog 100u/ml <span>(Details : {http://hl7.org/fhir/sid/ndc code '0169-7501-11' = 'n/a', given as 'Novolog 100u/ml'})</span></p><p><b>manufacturer</b>: id: org3; name: Novo Nordisk</p><p><b>form</b>: Injection solution (qualifier value) <span>(Details : {SNOMED CT code '385219001' = 'Injection solution', given as 'Injection solution (qualifier value)'})</span></p><h3>Ingredients</h3><table><tr><td>-</td><td><b>Item[x]</b></td><td><b>Strength</b></td></tr><tr><td>*</td><td>Insulin Aspart (substance) <span>(Details : {SNOMED CT code '325072002' = 'Insulin aspart', given as 'Insulin Aspart (substance)'})</span></td><td>100 U<span> (Details: UCUM code U = 'U')</span>/1 mL<span> (Details: UCUM code mL = 'mL')</span></td></tr></table><h3>Batches</h3><table><tr><td>-</td><td><b>LotNumber</b></td><td><b>ExpirationDate</b></td></tr><tr><td>*</td><td>12345</td><td>31/10/2019</td></tr></table></div>",
  },
  contained: [
    {
      resourceType: "Organization",
      id: "org3",
      name: "Novo Nordisk",
    },
  ],
  code: {
    coding: [
      {
        system: "http://hl7.org/fhir/sid/ndc",
        code: "0169-7501-11",
        display: "Novolog 100u/ml",
      },
    ],
  },
  manufacturer: {
    reference: "#org3",
  },
  form: {
    coding: [
      {
        system: "http://snomed.info/sct",
        code: "385219001",
        display: "Injection solution (qualifier value)",
      },
    ],
  },
  ingredient: [
    {
      itemCodeableConcept: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "325072002",
            display: "Insulin Aspart (substance)",
          },
        ],
      },
      strength: {
        numerator: {
          value: 100,
          system: "http://unitsofmeasure.org",
          code: "U",
        },
        denominator: {
          value: 1,
          system: "http://unitsofmeasure.org",
          code: "mL",
        },
      },
    },
  ],
  batch: {
    lotNumber: "12345",
    expirationDate: "2019-10-31",
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

export const Medicationexample0308: Medication = {
  resourceType: "Medication",
  id: "med0308",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: med0308</p><p><b>contained</b>: </p><p><b>code</b>: Percocet tablet <span>(Details : {http://hl7.org/fhir/sid/ndc code '16590-619-30' = 'n/a', given as 'Percocet tablet'})</span></p><p><b>manufacturer</b>: id: org1; name: Stat Rx USA LLC</p><p><b>form</b>: Tablet dose form (qualifier value) <span>(Details : {SNOMED CT code '385055001' = 'Tablet', given as 'Tablet dose form (qualifier value)'})</span></p><blockquote><p><b>ingredient</b></p><p><b>item</b>: Oxycodone HCl <span>(Details : {RxNorm code '82063' = 'Oxycodone Hydrochloride', given as 'Oxycodone HCl'})</span></p><p><b>strength</b>: 5 mg<span> (Details: UCUM code mg = 'mg')</span>/1 TAB<span> (Details: http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm code TAB = 'Tablet')</span></p></blockquote><blockquote><p><b>ingredient</b></p><p><b>item</b>: Acetaminophen <span>(Details : {RxNorm code '161' = 'Acetaminophen', given as 'Acetaminophen'})</span></p><p><b>strength</b>: 325 mg<span> (Details: UCUM code mg = 'mg')</span>/1 TAB<span> (Details: http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm code TAB = 'Tablet')</span></p></blockquote><h3>Batches</h3><table><tr><td>-</td><td><b>LotNumber</b></td><td><b>ExpirationDate</b></td></tr><tr><td>*</td><td>658484</td><td>31/07/2020</td></tr></table></div>",
  },
  contained: [
    {
      resourceType: "Organization",
      id: "org1",
      name: "Stat Rx USA LLC",
    },
  ],
  code: {
    coding: [
      {
        system: "http://hl7.org/fhir/sid/ndc",
        code: "16590-619-30",
        display: "Percocet tablet",
      },
    ],
  },
  manufacturer: {
    reference: "#org1",
  },
  form: {
    coding: [
      {
        system: "http://snomed.info/sct",
        code: "385055001",
        display: "Tablet dose form (qualifier value)",
      },
    ],
  },
  ingredient: [
    {
      itemCodeableConcept: {
        coding: [
          {
            system: "http://www.nlm.nih.gov/research/umls/rxnorm",
            code: "82063",
            display: "Oxycodone HCl",
          },
        ],
      },
      strength: {
        numerator: {
          value: 5,
          system: "http://unitsofmeasure.org",
          code: "mg",
        },
        denominator: {
          value: 1,
          system: "http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",
          code: "TAB",
        },
      },
    },
    {
      itemCodeableConcept: {
        coding: [
          {
            system: "http://www.nlm.nih.gov/research/umls/rxnorm",
            code: "161",
            display: "Acetaminophen",
          },
        ],
      },
      strength: {
        numerator: {
          value: 325,
          system: "http://unitsofmeasure.org",
          code: "mg",
        },
        denominator: {
          value: 1,
          system: "http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",
          code: "TAB",
        },
      },
    },
  ],
  batch: {
    lotNumber: "658484",
    expirationDate: "2020-07-31",
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

export const Medicationexample0309: Medication = {
  resourceType: "Medication",
  id: "med0309",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: med0309</p><p><b>contained</b>: </p><p><b>code</b>: Tylenol PM <span>(Details : {http://hl7.org/fhir/sid/ndc code '50580-506-02' = 'n/a', given as 'Tylenol PM'})</span></p><p><b>manufacturer</b>: id: org2; name: Johnson and Johnson Consume Inc, McNeil Consumer Healthcare Division</p><p><b>form</b>: Film-coated tablet (qualifier value) <span>(Details : {SNOMED CT code '385057009' = 'Film-coated tablet', given as 'Film-coated tablet (qualifier value)'})</span></p><blockquote><p><b>ingredient</b></p><p><b>item</b>: Acetaminophen 500 MG <span>(Details : {RxNorm code '315266' = 'Acetaminophen 500 MG', given as 'Acetaminophen 500 MG'})</span></p><p><b>strength</b>: 500 mg<span> (Details: UCUM code mg = 'mg')</span>/1 Tab<span> (Details: http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm code Tab = 'Tab')</span></p></blockquote><blockquote><p><b>ingredient</b></p><p><b>item</b>: Diphenhydramine Hydrochloride 25 mg <span>(Details : {RxNorm code '901813' = 'diphenhydrAMINE Hydrochloride 25 MG', given as 'Diphenhydramine Hydrochloride 25 mg'})</span></p><p><b>strength</b>: 25 mg<span> (Details: UCUM code mg = 'mg')</span>/1 Tab<span> (Details: http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm code Tab = 'Tab')</span></p></blockquote><h3>Batches</h3><table><tr><td>-</td><td><b>LotNumber</b></td><td><b>ExpirationDate</b></td></tr><tr><td>*</td><td>9494788</td><td>22/05/2017</td></tr></table></div>",
  },
  contained: [
    {
      resourceType: "Organization",
      id: "org2",
      name: "Johnson and Johnson Consume Inc, McNeil Consumer Healthcare Division",
    },
  ],
  code: {
    coding: [
      {
        system: "http://hl7.org/fhir/sid/ndc",
        code: "50580-506-02",
        display: "Tylenol PM",
      },
    ],
  },
  manufacturer: {
    reference: "#org2",
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
          system: "http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",
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
          system: "http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",
          code: "Tab",
        },
      },
    },
  ],
  batch: {
    lotNumber: "9494788",
    expirationDate: "2017-05-22",
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

export const Medicationexample0310: Medication = {
  resourceType: "Medication",
  id: "med0310",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: med0310</p><p><b>contained</b>: </p><p><b>code</b>: Oral Form Oxycodone (product) <span>(Details : {SNOMED CT code '430127000' = 'Oral form oxycodone', given as 'Oral Form Oxycodone (product)'})</span></p><p><b>form</b>: Tablet dose form (qualifier value) <span>(Details : {SNOMED CT code '385055001' = 'Tablet', given as 'Tablet dose form (qualifier value)'})</span></p><h3>Ingredients</h3><table><tr><td>-</td><td><b>Item[x]</b></td><td><b>Strength</b></td></tr><tr><td>*</td><td>id: sub03; Oxycodone (substance) <span>(Details : {SNOMED CT code '55452001' = 'Oxycodone', given as 'Oxycodone (substance)'})</span></td><td>5 mg<span> (Details: UCUM code mg = 'mg')</span>/1 TAB<span> (Details: http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm code TAB = 'Tablet')</span></td></tr></table></div>",
  },
  contained: [
    {
      resourceType: "Substance",
      id: "sub03",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "55452001",
            display: "Oxycodone (substance)",
          },
        ],
      },
    },
  ],
  code: {
    coding: [
      {
        system: "http://snomed.info/sct",
        code: "430127000",
        display: "Oral Form Oxycodone (product)",
      },
    ],
  },
  form: {
    coding: [
      {
        system: "http://snomed.info/sct",
        code: "385055001",
        display: "Tablet dose form (qualifier value)",
      },
    ],
  },
  ingredient: [
    {
      itemReference: {
        reference: "#sub03",
      },
      strength: {
        numerator: {
          value: 5,
          system: "http://unitsofmeasure.org",
          code: "mg",
        },
        denominator: {
          value: 1,
          system: "http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",
          code: "TAB",
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

export const Medicationexample0311: Medication = {
  resourceType: "Medication",
  id: "med0311",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: med0311</p><p><b>contained</b>: </p><p><b>code</b>: Prednisone 5mg tablet (Product) <span>(Details : {SNOMED CT code '373994007' = 'Prednisone 5mg tablet', given as 'Prednisone 5mg tablet (Product)'})</span></p><p><b>form</b>: Tablet dose form (qualifier value) <span>(Details : {SNOMED CT code '385055001' = 'Tablet', given as 'Tablet dose form (qualifier value)'})</span></p><h3>Ingredients</h3><table><tr><td>-</td><td><b>Item[x]</b></td><td><b>Strength</b></td></tr><tr><td>*</td><td>id: sub03; Prednisone (substance) <span>(Details : {SNOMED CT code '116602009' = 'Prednisone', given as 'Prednisone (substance)'})</span></td><td>5 mg<span> (Details: UCUM code mg = 'mg')</span>/1 TAB<span> (Details: http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm code TAB = 'Tablet')</span></td></tr></table></div>",
  },
  contained: [
    {
      resourceType: "Substance",
      id: "sub03",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "116602009",
            display: "Prednisone (substance)",
          },
        ],
      },
    },
  ],
  code: {
    coding: [
      {
        system: "http://snomed.info/sct",
        code: "373994007",
        display: "Prednisone 5mg tablet (Product)",
      },
    ],
  },
  form: {
    coding: [
      {
        system: "http://snomed.info/sct",
        code: "385055001",
        display: "Tablet dose form (qualifier value)",
      },
    ],
  },
  ingredient: [
    {
      itemReference: {
        reference: "#sub03",
      },
      strength: {
        numerator: {
          value: 5,
          system: "http://unitsofmeasure.org",
          code: "mg",
        },
        denominator: {
          value: 1,
          system: "http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",
          code: "TAB",
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

export const Medicationexample0312: Medication = {
  resourceType: "Medication",
  id: "med0312",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: med0312</p><p><b>contained</b>: </p><p><b>code</b>: Nystatin 100,000 units/ml oral suspension (product) <span>(Details : {SNOMED CT code '324689003' = 'Nystatin 100,000units/mL oral suspension', given as 'Nystatin 100,000 units/ml oral suspension (product)'})</span></p><p><b>form</b>: Oral suspension (qualifier value) <span>(Details : {SNOMED CT code '387048002' = 'Nystatin', given as 'Oral suspension (qualifier value)'})</span></p><h3>Ingredients</h3><table><tr><td>-</td><td><b>Item[x]</b></td><td><b>Strength</b></td></tr><tr><td>*</td><td>id: sub02; Nystatin (substance) <span>(Details : {SNOMED CT code '387048002' = 'Nystatin', given as 'Nystatin (substance)'})</span></td><td>100000 [IU]<span> (Details: UCUM code [IU] = 'IU')</span>/1 mL<span> (Details: UCUM code mL = 'mL')</span></td></tr></table></div>",
  },
  contained: [
    {
      resourceType: "Substance",
      id: "sub02",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "387048002",
            display: "Nystatin (substance)",
          },
        ],
      },
    },
  ],
  code: {
    coding: [
      {
        system: "http://snomed.info/sct",
        code: "324689003",
        display: "Nystatin 100,000 units/ml oral suspension (product)",
      },
    ],
  },
  form: {
    coding: [
      {
        system: "http://snomed.info/sct",
        code: "387048002",
        display: "Oral suspension (qualifier value)",
      },
    ],
  },
  ingredient: [
    {
      itemReference: {
        reference: "#sub02",
      },
      strength: {
        numerator: {
          value: 100000,
          system: "http://unitsofmeasure.org",
          code: "[IU]",
        },
        denominator: {
          value: 1,
          system: "http://unitsofmeasure.org",
          code: "mL",
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

export const Medicationexample0313: Medication = {
  resourceType: "Medication",
  id: "med0313",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: med0313</p><p><b>code</b>: Lorazepam 2mg/ml injection solution 1ml vial (product) <span>(Details : {SNOMED CT code '400621001' = 'Lorazepam 2mg/mL injection solution 1mL vial', given as 'Lorazepam 2mg/ml injection solution 1ml vial (product)'})</span></p><p><b>form</b>: Injection solution (qualifier value) <span>(Details : {SNOMED CT code '385219001' = 'Injection solution', given as 'Injection solution (qualifier value)'})</span></p><p><b>amount</b>: 1 ml<span> (Details: UCUM code ml = 'ml')</span>/1 vial<span> (Details: http://terminology.hl7.org/CodeSystem/medicationknowledge-package-type code vial = 'Vial')</span></p><h3>Ingredients</h3><table><tr><td>-</td><td><b>Item[x]</b></td><td><b>Strength</b></td></tr><tr><td>*</td><td>Lorazepam (substance) <span>(Details : {SNOMED CT code '387106007' = 'Lorazepam', given as 'Lorazepam (substance)'})</span></td><td>2 mg<span> (Details: UCUM code mg = 'mg')</span>/1 mL<span> (Details: UCUM code mL = 'mL')</span></td></tr></table></div>",
  },
  code: {
    coding: [
      {
        system: "http://snomed.info/sct",
        code: "400621001",
        display: "Lorazepam 2mg/ml injection solution 1ml vial (product)",
      },
    ],
  },
  form: {
    coding: [
      {
        system: "http://snomed.info/sct",
        code: "385219001",
        display: "Injection solution (qualifier value)",
      },
    ],
  },
  amount: {
    numerator: {
      value: 1,
      unit: "ml",
      system: "http://unitsofmeasure.org",
      code: "ml",
    },
    denominator: {
      value: 1,
      system:
        "http://terminology.hl7.org/CodeSystem/medicationknowledge-package-type",
      code: "vial",
    },
  },
  ingredient: [
    {
      itemCodeableConcept: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "387106007",
            display: "Lorazepam (substance)",
          },
        ],
      },
      strength: {
        numerator: {
          value: 2,
          system: "http://unitsofmeasure.org",
          code: "mg",
        },
        denominator: {
          value: 1,
          system: "http://unitsofmeasure.org",
          code: "mL",
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

export const Medicationexample0314: Medication = {
  resourceType: "Medication",
  id: "med0314",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: med0314</p><p><b>code</b>: Alprazolam 0.25mg Oral Tablet <span>(Details : {RxNorm code '308047' = 'ALPRAZolam 0.25 MG Oral Tablet', given as 'Alprazolam 0.25mg Oral Tablet'})</span></p><p><b>form</b>: Tablet dose form (qualifier value) <span>(Details : {SNOMED CT code '385055001' = 'Tablet', given as 'Tablet dose form (qualifier value)'})</span></p><h3>Ingredients</h3><table><tr><td>-</td><td><b>Item[x]</b></td><td><b>Strength</b></td></tr><tr><td>*</td><td>Alprazolam (substance) <span>(Details : {SNOMED CT code '386983007' = 'Alprazolam', given as 'Alprazolam (substance)'})</span></td><td>0.25 mg<span> (Details: UCUM code mg = 'mg')</span>/1 Tablet<span> (Details: SNOMED CT code 385055001 = 'Tablet')</span></td></tr></table></div>",
  },
  code: {
    coding: [
      {
        system: "http://www.nlm.nih.gov/research/umls/rxnorm",
        code: "308047",
        display: "Alprazolam 0.25mg Oral Tablet",
      },
    ],
  },
  form: {
    coding: [
      {
        system: "http://snomed.info/sct",
        code: "385055001",
        display: "Tablet dose form (qualifier value)",
      },
    ],
  },
  ingredient: [
    {
      itemCodeableConcept: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "386983007",
            display: "Alprazolam (substance)",
          },
        ],
      },
      strength: {
        numerator: {
          value: 0.25,
          system: "http://unitsofmeasure.org",
          code: "mg",
        },
        denominator: {
          value: 1,
          unit: "Tablet",
          system: "http://snomed.info/sct",
          code: "385055001",
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

export const Medicationexample0315: Medication = {
  resourceType: "Medication",
  id: "med0315",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: med0315</p><p><b>code</b>: Mometasone Furoate 0.05mg/Actuat <span>(Details : {RxNorm code '358793' = 'mometasone furoate 0.05 MG/ACTUAT', given as 'Mometasone Furoate 0.05mg/Actuat'})</span></p><p><b>form</b>: Nasal Spray <span>(Details : {SNOMED CT code '385157007' = 'Nasal spray', given as 'Nasal Spray'})</span></p></div>",
  },
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

export const Medicationexample0316: Medication = {
  resourceType: "Medication",
  id: "med0316",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: med0316</p><p><b>contained</b>: </p><p><b>code</b>: Chlorthalidone 50mg tablet (product) <span>(Details : {SNOMED CT code '317935006' = 'Chlortalidone 50mg tablet', given as 'Chlorthalidone 50mg tablet (product)'})</span></p><p><b>form</b>: Tablet dose form (qualifier value) <span>(Details : {SNOMED CT code '385055001' = 'Tablet', given as 'Tablet dose form (qualifier value)'})</span></p><h3>Ingredients</h3><table><tr><td>-</td><td><b>Item[x]</b></td><td><b>Strength</b></td></tr><tr><td>*</td><td>id: sub04; Chlorthalidone (substance) <span>(Details : {SNOMED CT code '387324004' = 'Chlorthalidone', given as 'Chlorthalidone (substance)'})</span></td><td>50 mg<span> (Details: UCUM code mg = 'mg')</span>/1 TAB<span> (Details: http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm code TAB = 'Tablet')</span></td></tr></table></div>",
  },
  contained: [
    {
      resourceType: "Substance",
      id: "sub04",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "387324004",
            display: "Chlorthalidone (substance)",
          },
        ],
      },
    },
  ],
  code: {
    coding: [
      {
        system: "http://snomed.info/sct",
        code: "317935006",
        display: "Chlorthalidone 50mg tablet (product)",
      },
    ],
  },
  form: {
    coding: [
      {
        system: "http://snomed.info/sct",
        code: "385055001",
        display: "Tablet dose form (qualifier value)",
      },
    ],
  },
  ingredient: [
    {
      itemReference: {
        reference: "#sub04",
      },
      strength: {
        numerator: {
          value: 50,
          system: "http://unitsofmeasure.org",
          code: "mg",
        },
        denominator: {
          value: 1,
          system: "http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",
          code: "TAB",
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

export const Medicationexample0317: Medication = {
  resourceType: "Medication",
  id: "med0317",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: med0317</p><p><b>form</b>: Injection Solution (qualifier value) <span>(Details : {SNOMED CT code '385219001' = 'Injection solution', given as 'Injection Solution (qualifier value)'})</span></p><blockquote><p><b>ingredient</b></p><p><b>item</b>: Potassium Chloride <span>(Details : {RxNorm code '204520' = 'Potassium Chloride 2 MEQ/ML Injectable Solution', given as 'Potassium Chloride'})</span></p><p><b>strength</b>: 2 meq<span> (Details: UCUM code meq = 'meq')</span>/1 mL<span> (Details: UCUM code mL = 'mL')</span></p></blockquote><blockquote><p><b>ingredient</b></p><p><b>item</b>: Sodium Chloride 0.9% injectable solution <span>(Details : {RxNorm code '313002' = 'Sodium Chloride 0.154 MEQ/ML Injectable Solution', given as 'Sodium Chloride 0.9% injectable solution'})</span></p><p><b>strength</b>: 0.9 g<span> (Details: UCUM code g = 'g')</span>/100 mL<span> (Details: UCUM code mL = 'mL')</span></p></blockquote></div>",
  },
  form: {
    coding: [
      {
        system: "http://snomed.info/sct",
        code: "385219001",
        display: "Injection Solution (qualifier value)",
      },
    ],
    text: "Injection Solution (qualifier value)",
  },
  ingredient: [
    {
      itemCodeableConcept: {
        coding: [
          {
            system: "http://www.nlm.nih.gov/research/umls/rxnorm",
            code: "204520",
            display: "Potassium Chloride",
          },
        ],
      },
      strength: {
        numerator: {
          value: 2,
          system: "http://unitsofmeasure.org",
          code: "meq",
        },
        denominator: {
          value: 1,
          system: "http://unitsofmeasure.org",
          code: "mL",
        },
      },
    },
    {
      itemCodeableConcept: {
        coding: [
          {
            system: "http://www.nlm.nih.gov/research/umls/rxnorm",
            code: "313002",
            display: "Sodium Chloride 0.9% injectable solution",
          },
        ],
      },
      strength: {
        numerator: {
          value: 0.9,
          system: "http://unitsofmeasure.org",
          code: "g",
        },
        denominator: {
          value: 100,
          system: "http://unitsofmeasure.org",
          code: "mL",
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

export const Medicationexample0318: Medication = {
  resourceType: "Medication",
  id: "med0318",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: med0318</p><p><b>form</b>: Injection emulsion <span>(Details : {SNOMED CT code '385221006' = 'Injection emulsion', given as 'Injection emulsion'})</span></p><blockquote><p><b>ingredient</b></p><p><b>item</b>: Clinimix 4.25/10 sulfite-free (4.25% Amino Acid in 10% Dextrose) Injection, 1000ml <span>(Details : {http://hl7.org/fhir/sid/ndc code '0338-1134-03' = 'n/a', given as 'Clinimix 4.25/10 sulfite-free (4.25% Amino Acid in 10% Dextrose) Injection, 1000ml'})</span></p></blockquote><blockquote><p><b>ingredient</b></p><p><b>item</b>: TPN Electrolytes SODIUM CHLORIDE, CALCIUM CHLORIDE, POTASSIUM CHLORIDE, MAGNESIUM CHLORIDE, and SODIUM ACETATE ANHYDROUS | INJECTION, SOLUTION, CONCENTRATE | 321 mg/20mL, 331 mg/20mL, 1491 mg/20mL, 508 mg/20mL, 2420 mg/20mL <span>(Details : {http://hl7.org/fhir/sid/ndc code '0409-5779-01' = 'n/a', given as 'TPN Electrolytes SODIUM CHLORIDE, CALCIUM CHLORIDE, POTASSIUM CHLORIDE, MAGNESIUM CHLORIDE, and SODIUM ACETATE ANHYDROUS | INJECTION, SOLUTION, CONCENTRATE | 321 mg/20mL, 331 mg/20mL, 1491 mg/20mL, 508 mg/20mL, 2420 mg/20mL'})</span></p></blockquote><blockquote><p><b>ingredient</b></p><p><b>item</b>: Intralipid 20% IV Fat Emulsion <span>(Details : {http://hl7.org/fhir/sid/ndc code '0338-0519-02' = 'n/a', given as 'Intralipid 20% IV Fat Emulsion'})</span></p></blockquote><h3>Batches</h3><table><tr><td>-</td><td><b>LotNumber</b></td><td><b>ExpirationDate</b></td></tr><tr><td>*</td><td>123455</td><td>09/07/2016</td></tr></table></div>",
  },
  form: {
    coding: [
      {
        system: "http://snomed.info/sct",
        code: "385221006",
        display: "Injection emulsion",
      },
    ],
  },
  ingredient: [
    {
      itemCodeableConcept: {
        coding: [
          {
            system: "http://hl7.org/fhir/sid/ndc",
            code: "0338-1134-03",
            display:
              "Clinimix 4.25/10 sulfite-free (4.25% Amino Acid in 10% Dextrose) Injection, 1000ml",
          },
        ],
      },
    },
    {
      itemCodeableConcept: {
        coding: [
          {
            system: "http://hl7.org/fhir/sid/ndc",
            code: "0409-5779-01",
            display:
              "TPN Electrolytes SODIUM CHLORIDE, CALCIUM CHLORIDE, POTASSIUM CHLORIDE, MAGNESIUM CHLORIDE, and SODIUM ACETATE ANHYDROUS | INJECTION, SOLUTION, CONCENTRATE | 321 mg/20mL, 331 mg/20mL, 1491 mg/20mL, 508 mg/20mL, 2420 mg/20mL",
          },
        ],
      },
    },
    {
      itemCodeableConcept: {
        coding: [
          {
            system: "http://hl7.org/fhir/sid/ndc",
            code: "0338-0519-02",
            display: "Intralipid 20% IV Fat Emulsion",
          },
        ],
      },
    },
  ],
  batch: {
    lotNumber: "123455",
    expirationDate: "2016-07-09",
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

export const Medicationexample0319: Medication = {
  resourceType: "Medication",
  id: "med0319",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: med0319</p><p><b>form</b>: Ointment <span>(Details : {SNOMED CT code '385101003' = 'Ointment', given as 'Ointment'})</span></p><blockquote><p><b>ingredient</b></p><p><b>item</b>: Salicyclic Acid (substance) <span>(Details : {SNOMED CT code '387253001' = 'Salicylic acid', given as 'Salicyclic Acid (substance)'})</span></p><p><b>strength</b>: 5 g<span> (Details: UCUM code g = 'g')</span>/100 g<span> (Details: UCUM code g = 'g')</span></p></blockquote><blockquote><p><b>ingredient</b></p><p><b>item</b>: Hydrocortisone (substance) <span>(Details : {SNOMED CT code '396458002' = 'Hydrocortisone', given as 'Hydrocortisone (substance)'})</span></p><p><b>strength</b>: 1 g<span> (Details: UCUM code g = 'g')</span>/100 g<span> (Details: UCUM code g = 'g')</span></p></blockquote><blockquote><p><b>ingredient</b></p><p><b>item</b>: White Petrolatum (substance) <span>(Details : {SNOMED CT code '126066007' = 'White petroleum', given as 'White Petrolatum (substance)'})</span></p><p><b>strength</b>: 94 g<span> (Details: UCUM code g = 'g')</span>/100 g<span> (Details: UCUM code g = 'g')</span></p></blockquote></div>",
  },
  form: {
    coding: [
      {
        system: "http://snomed.info/sct",
        code: "385101003",
        display: "Ointment",
      },
    ],
    text: "Ointment",
  },
  ingredient: [
    {
      itemCodeableConcept: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "387253001",
            display: "Salicyclic Acid (substance)",
          },
        ],
      },
      strength: {
        numerator: {
          value: 5,
          system: "http://unitsofmeasure.org",
          code: "g",
        },
        denominator: {
          value: 100,
          system: "http://unitsofmeasure.org",
          code: "g",
        },
      },
    },
    {
      itemCodeableConcept: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "396458002",
            display: "Hydrocortisone (substance)",
          },
        ],
      },
      strength: {
        numerator: {
          value: 1,
          system: "http://unitsofmeasure.org",
          code: "g",
        },
        denominator: {
          value: 100,
          system: "http://unitsofmeasure.org",
          code: "g",
        },
      },
    },
    {
      itemCodeableConcept: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "126066007",
            display: "White Petrolatum (substance)",
          },
        ],
      },
      strength: {
        numerator: {
          value: 94,
          system: "http://unitsofmeasure.org",
          code: "g",
        },
        denominator: {
          value: 100,
          system: "http://unitsofmeasure.org",
          code: "g",
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

export const Medicationexample0320: Medication = {
  resourceType: "Medication",
  id: "med0320",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: med0320</p><p><b>contained</b>: </p><p><b>code</b>: Azithromycin 250mg capsule (product) <span>(Details : {SNOMED CT code '324252006' = 'Azithromycin 250mg capsule', given as 'Azithromycin 250mg capsule (product)'})</span></p><p><b>form</b>: Tablet dose form (qualifier value) <span>(Details : {SNOMED CT code '385055001' = 'Tablet', given as 'Tablet dose form (qualifier value)'})</span></p><h3>Ingredients</h3><table><tr><td>-</td><td><b>Item[x]</b></td><td><b>Strength</b></td></tr><tr><td>*</td><td>id: sub03; Azithromycin (substance) <span>(Details : {SNOMED CT code '387531004' = 'Azithromycin', given as 'Azithromycin (substance)'})</span></td><td>250 mg<span> (Details: UCUM code mg = 'mg')</span>/1 TAB<span> (Details: http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm code TAB = 'Tablet')</span></td></tr></table></div>",
  },
  contained: [
    {
      resourceType: "Substance",
      id: "sub03",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "387531004",
            display: "Azithromycin (substance)",
          },
        ],
      },
    },
  ],
  code: {
    coding: [
      {
        system: "http://snomed.info/sct",
        code: "324252006",
        display: "Azithromycin 250mg capsule (product)",
      },
    ],
  },
  form: {
    coding: [
      {
        system: "http://snomed.info/sct",
        code: "385055001",
        display: "Tablet dose form (qualifier value)",
      },
    ],
  },
  ingredient: [
    {
      itemReference: {
        reference: "#sub03",
      },
      strength: {
        numerator: {
          value: 250,
          system: "http://unitsofmeasure.org",
          code: "mg",
        },
        denominator: {
          value: 1,
          system: "http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",
          code: "TAB",
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

export const Medicationexample0321: Medication = {
  resourceType: "Medication",
  id: "med0321",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: med0321</p><p><b>contained</b>: </p><p><b>code</b>: Capecitabine (product) <span>(Details : {SNOMED CT code '108761006' = 'Capecitabine', given as 'Capecitabine (product)'})</span></p><p><b>form</b>: Tablet dose form (qualifier value) <span>(Details : {SNOMED CT code '385055001' = 'Tablet', given as 'Tablet dose form (qualifier value)'})</span></p><h3>Ingredients</h3><table><tr><td>-</td><td><b>Item[x]</b></td><td><b>Strength</b></td></tr><tr><td>*</td><td>id: sub03; Capecitabine (substance) <span>(Details : {SNOMED CT code '386906001' = 'Capecitabine', given as 'Capecitabine (substance)'})</span></td><td>500 mg<span> (Details: UCUM code mg = 'mg')</span>/1 Tablet<span> (Details: SNOMED CT code 385055001 = 'Tablet')</span></td></tr></table></div>",
  },
  contained: [
    {
      resourceType: "Substance",
      id: "sub03",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "386906001",
            display: "Capecitabine (substance)",
          },
        ],
      },
    },
  ],
  code: {
    coding: [
      {
        system: "http://snomed.info/sct",
        code: "108761006",
        display: "Capecitabine (product)",
      },
    ],
  },
  form: {
    coding: [
      {
        system: "http://snomed.info/sct",
        code: "385055001",
        display: "Tablet dose form (qualifier value)",
      },
    ],
  },
  ingredient: [
    {
      itemReference: {
        reference: "#sub03",
      },
      strength: {
        numerator: {
          value: 500,
          system: "http://unitsofmeasure.org",
          code: "mg",
        },
        denominator: {
          value: 1,
          unit: "Tablet",
          system: "http://snomed.info/sct",
          code: "385055001",
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

export const Medicationexample1: Medication = {
  resourceType: "Medication",
  id: "medicationexample1",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">Amoxicillin 250mg/5ml Suspension</div>',
  },
  code: {
    text: "Amoxicillin 250mg/5ml Suspension",
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

export const Medicationexample15: Medication = {
  resourceType: "Medication",
  id: "medexample015",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: medexample015</p><p><b>contained</b>: , </p><p><b>code</b>: Capecitabine 500mg oral tablet (Xeloda) <span>(Details : {RxNorm code '213293' = 'Xeloda 500 MG Oral Tablet', given as 'Capecitabine 500mg oral tablet (Xeloda)'})</span></p><p><b>manufacturer</b>: id: org2; name: Gene Inc</p><p><b>form</b>: Tablet dose form (qualifier value) <span>(Details : {SNOMED CT code '385055001' = 'Tablet', given as 'Tablet dose form (qualifier value)'})</span></p><h3>Ingredients</h3><table><tr><td>-</td><td><b>Item[x]</b></td><td><b>Strength</b></td></tr><tr><td>*</td><td>id: sub04; Capecitabine (substance) <span>(Details : {SNOMED CT code '386906001' = 'Capecitabine', given as 'Capecitabine (substance)'})</span></td><td>500 mg<span> (Details: UCUM code mg = 'mg')</span>/1 TAB<span> (Details: http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm code TAB = 'Tablet')</span></td></tr></table><h3>Batches</h3><table><tr><td>-</td><td><b>LotNumber</b></td><td><b>ExpirationDate</b></td></tr><tr><td>*</td><td>9494788</td><td>22/05/2017</td></tr></table></div>",
  },
  contained: [
    {
      resourceType: "Organization",
      id: "org2",
      name: "Gene Inc",
    },
    {
      resourceType: "Substance",
      id: "sub04",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "386906001",
            display: "Capecitabine (substance)",
          },
        ],
      },
    },
  ],
  code: {
    coding: [
      {
        system: "http://www.nlm.nih.gov/research/umls/rxnorm",
        code: "213293",
        display: "Capecitabine 500mg oral tablet (Xeloda)",
      },
    ],
  },
  manufacturer: {
    reference: "#org2",
  },
  form: {
    coding: [
      {
        system: "http://snomed.info/sct",
        code: "385055001",
        display: "Tablet dose form (qualifier value)",
      },
    ],
  },
  ingredient: [
    {
      itemReference: {
        reference: "#sub04",
      },
      strength: {
        numerator: {
          value: 500,
          system: "http://unitsofmeasure.org",
          code: "mg",
        },
        denominator: {
          value: 1,
          system: "http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",
          code: "TAB",
        },
      },
    },
  ],
  batch: {
    lotNumber: "9494788",
    expirationDate: "2017-05-22",
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
