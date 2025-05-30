import type { MedicinalProductIngredient } from "../../src/v4.0.1/medicinalproductingredient/types";

export const MedicinalproductingredientExample: MedicinalProductIngredient = {
  resourceType: "MedicinalProductIngredient",
  id: "example",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: example</p><p><b>role</b>: ActiveBase <span>(Details : {http://ema.europa.eu/example/ingredientRole code 'ActiveBase' = 'ActiveBase)</span></p><p><b>manufacturer</b>: <a>Organization/example</a></p><h3>SpecifiedSubstances</h3><table><tr><td>-</td><td><b>Code</b></td><td><b>Group</b></td></tr><tr><td>*</td><td>equixabanCompanyequixaban1 <span>(Details : {http://ema.europa.eu/example/specifiedSubstance code 'equixabanCompanyequixaban1' = 'equixabanCompanyequixaban1)</span></td><td>2 <span>(Details : {http://ema.europa.eu/example/specifiedSubstanceGroup code '2' = '2)</span></td></tr></table><blockquote><p><b>substance</b></p><p><b>code</b>: EQUIXABAN <span>(Details : {http://ema.europa.eu/example/substance code 'EQUIXABAN' = 'EQUIXABAN)</span></p><h3>Strengths</h3><table><tr><td>-</td></tr><tr><td>*</td></tr></table></blockquote></div>",
  },
  role: {
    coding: [
      {
        system: "http://ema.europa.eu/example/ingredientRole",
        code: "ActiveBase",
      },
    ],
  },
  manufacturer: [
    {
      reference: "Organization/example",
    },
  ],
  specifiedSubstance: [
    {
      code: {
        coding: [
          {
            system: "http://ema.europa.eu/example/specifiedSubstance",
            code: "equixabanCompanyequixaban1",
          },
        ],
      },
      group: {
        coding: [
          {
            system: "http://ema.europa.eu/example/specifiedSubstanceGroup",
            code: "2",
          },
        ],
      },
    },
  ],
  substance: {
    code: {
      coding: [
        {
          system: "http://ema.europa.eu/example/substance",
          code: "EQUIXABAN",
        },
      ],
    },
    strength: [
      {
        presentation: {
          numerator: {
            value: 2.5,
            unit: "mg",
          },
          denominator: {
            value: 1,
            unit: "{tablet}",
          },
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
