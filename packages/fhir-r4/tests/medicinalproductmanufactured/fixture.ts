import type { MedicinalProductManufactured } from "../../src/v4.0.1/medicinalproductmanufactured/types";

export const MedicinalproductmanufacturedExample: MedicinalProductManufactured =
  {
    resourceType: "MedicinalProductManufactured",
    id: "example",
    text: {
      status: "generated",
      div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: example</p><p><b>manufacturedDoseForm</b>: Film-coatedtablet <span>(Details : {http://ema.europa.eu/example/manufactureddoseform code 'Film-coatedtablet' = 'Film-coatedtablet)</span></p><p><b>unitOfPresentation</b>: Tablet <span>(Details : {http://ema.europa.eu/example/unitofpresentation code 'Tablet' = 'Tablet)</span></p><p><b>quantity</b>: 10 1</p><p><b>manufacturer</b>: <a>Organization/example</a></p><p><b>ingredient</b>: <a>MedicinalProductIngredient/example</a></p><p><b>physicalCharacteristics</b>: </p></div>",
    },
    manufacturedDoseForm: {
      coding: [
        {
          system: "http://ema.europa.eu/example/manufactureddoseform",
          code: "Film-coatedtablet",
        },
      ],
    },
    unitOfPresentation: {
      coding: [
        {
          system: "http://ema.europa.eu/example/unitofpresentation",
          code: "Tablet",
        },
      ],
    },
    quantity: {
      value: 10,
      unit: "1",
    },
    manufacturer: [
      {
        reference: "Organization/example",
      },
    ],
    ingredient: [
      {
        reference: "MedicinalProductIngredient/example",
      },
    ],
    physicalCharacteristics: {
      shape: "Oval",
      color: ["Pink"],
      imprint: ["894"],
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
