import type { Substance } from "../../src/v4.0.1/substance/types";

export const SubstanceExampleAmoxicillinClavulanate: Substance = {
  resourceType: "Substance",
  id: "f205",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: f205</p><p><b>contained</b>: , </p><p><b>category</b>: Drug or Medicament <span>(Details : {http://terminology.hl7.org/CodeSystem/substance-category code 'drug' = 'Drug or Medicament', given as 'Drug or Medicament'})</span></p><p><b>code</b>: Amoxicillin + clavulanate potassium 875mg/125mg tablet (product) <span>(Details : {SNOMED CT code '392259005' = 'Co-amoxiclav 875mg/125mg tablet', given as 'Amoxicillin + clavulanate potassium 875mg/125mg tablet (product)'})</span></p><p><b>description</b>: Augmentin 875</p><blockquote><p><b>ingredient</b></p><p><b>quantity</b>: 875 mg<span> (Details: UCUM code mg = 'mg')</span>/1000 mg<span> (Details: UCUM code mg = 'mg')</span></p><p><b>substance</b>: id: ingr1; Amoxicillin (substance) <span>(Details : {SNOMED CT code '372687004' = 'Amoxicillin', given as 'Amoxicillin (substance)'})</span></p></blockquote><blockquote><p><b>ingredient</b></p><p><b>quantity</b>: 125 mg<span> (Details: UCUM code mg = 'mg')</span>/1000 mg<span> (Details: UCUM code mg = 'mg')</span></p><p><b>substance</b>: id: ingr2; Clavulanate potassium (substance) <span>(Details : {SNOMED CT code '395938000' = 'Clavulanate potassium', given as 'Clavulanate potassium (substance)'})</span></p></blockquote></div>",
  },
  contained: [
    {
      resourceType: "Substance",
      id: "ingr1",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "372687004",
            display: "Amoxicillin (substance)",
          },
        ],
      },
    },
    {
      resourceType: "Substance",
      id: "ingr2",
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "395938000",
            display: "Clavulanate potassium (substance)",
          },
        ],
      },
    },
  ],
  category: [
    {
      coding: [
        {
          system: "http://terminology.hl7.org/CodeSystem/substance-category",
          code: "drug",
          display: "Drug or Medicament",
        },
      ],
    },
  ],
  code: {
    coding: [
      {
        system: "http://snomed.info/sct",
        code: "392259005",
        display:
          "Amoxicillin + clavulanate potassium 875mg/125mg tablet (product)",
      },
    ],
  },
  description: "Augmentin 875",
  ingredient: [
    {
      quantity: {
        numerator: {
          value: 875,
          unit: "mg",
          system: "http://unitsofmeasure.org",
          code: "mg",
        },
        denominator: {
          value: 1000,
          unit: "mg",
          system: "http://unitsofmeasure.org",
          code: "mg",
        },
      },
      substanceReference: {
        reference: "#ingr1",
      },
    },
    {
      quantity: {
        numerator: {
          value: 125,
          unit: "mg",
          system: "http://unitsofmeasure.org",
          code: "mg",
        },
        denominator: {
          value: 1000,
          unit: "mg",
          system: "http://unitsofmeasure.org",
          code: "mg",
        },
      },
      substanceReference: {
        reference: "#ingr2",
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

export const SubstanceExampleF201Dust: Substance = {
  resourceType: "Substance",
  id: "f201",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: f201</p><p><b>code</b>: House dust allergen <span>(Details : {SNOMED CT code '406466009' = 'House dust allergen', given as 'House dust allergen'})</span></p></div>",
  },
  code: {
    coding: [
      {
        system: "http://snomed.info/sct",
        code: "406466009",
        display: "House dust allergen",
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

export const SubstanceExampleF202Staphylococcus: Substance = {
  resourceType: "Substance",
  id: "f202",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: f202</p><p><b>code</b>: Staphylococcus Aureus <span>(Details : {SNOMED CT code '3092008' = 'Staphylococcus aureus', given as 'Staphylococcus Aureus'})</span></p></div>",
  },
  code: {
    coding: [
      {
        system: "http://snomed.info/sct",
        code: "3092008",
        display: "Staphylococcus Aureus",
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

export const SubstanceExampleF203Potassium: Substance = {
  resourceType: "Substance",
  id: "f203",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: f203</p><p><b>identifier</b>: 1234</p><p><b>category</b>: Chemical <span>(Details : {http://terminology.hl7.org/CodeSystem/substance-category code 'chemical' = 'Chemical', given as 'Chemical'})</span></p><p><b>code</b>: Potassium <span>(Details : {SNOMED CT code '88480006' = 'Potassium', given as 'Potassium'})</span></p></div>",
  },
  identifier: [
    {
      system: "http://acme.org/identifiers/substances",
      value: "1234",
    },
  ],
  category: [
    {
      coding: [
        {
          system: "http://terminology.hl7.org/CodeSystem/substance-category",
          code: "chemical",
          display: "Chemical",
        },
      ],
    },
  ],
  code: {
    coding: [
      {
        system: "http://snomed.info/sct",
        code: "88480006",
        display: "Potassium",
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

export const SubstanceExampleSilverNitrateProduct: Substance = {
  resourceType: "Substance",
  id: "f204",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: f204</p><p><b>identifier</b>: 15970</p><p><b>category</b>: Chemical <span>(Details : {http://terminology.hl7.org/CodeSystem/substance-category code 'chemical' = 'Chemical', given as 'Chemical'})</span></p><p><b>code</b>: Silver nitrate 20% solution (product) <span>(Details : {SNOMED CT code '333346007' = 'Silver nitrate 20% solution', given as 'Silver nitrate 20% solution (product)'})</span></p><p><b>description</b>: Solution for silver nitrate stain</p><h3>Instances</h3><table><tr><td>-</td><td><b>Identifier</b></td><td><b>Expiry</b></td><td><b>Quantity</b></td></tr><tr><td>*</td><td>AB94687</td><td>01/01/2018</td><td>100 mL<span> (Details: UCUM code mL = 'mL')</span></td></tr></table></div>",
  },
  identifier: [
    {
      system: "http://acme.org/identifiers/substances",
      value: "15970",
    },
  ],
  category: [
    {
      coding: [
        {
          system: "http://terminology.hl7.org/CodeSystem/substance-category",
          code: "chemical",
          display: "Chemical",
        },
      ],
    },
  ],
  code: {
    coding: [
      {
        system: "http://snomed.info/sct",
        code: "333346007",
        display: "Silver nitrate 20% solution (product)",
      },
    ],
  },
  description: "Solution for silver nitrate stain",
  instance: [
    {
      identifier: {
        system: "http://acme.org/identifiers/substances/lot",
        value: "AB94687",
      },
      expiry: "2018-01-01",
      quantity: {
        value: 100,
        unit: "mL",
        system: "http://unitsofmeasure.org",
        code: "mL",
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

export const SubstanceExample: Substance = {
  resourceType: "Substance",
  id: "example",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: example</p><p><b>identifier</b>: 1463</p><p><b>status</b>: active</p><p><b>category</b>: Allergen <span>(Details : {http://terminology.hl7.org/CodeSystem/substance-category code 'allergen' = 'Allergen', given as 'Allergen'})</span></p><p><b>code</b>: apitoxin (Honey Bee Venom) <span>(Details )</span></p></div>",
  },
  identifier: [
    {
      system: "http://acme.org/identifiers/substances",
      value: "1463",
    },
  ],
  status: "active",
  category: [
    {
      coding: [
        {
          system: "http://terminology.hl7.org/CodeSystem/substance-category",
          code: "allergen",
          display: "Allergen",
        },
      ],
    },
  ],
  code: {
    text: "apitoxin (Honey Bee Venom)",
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
