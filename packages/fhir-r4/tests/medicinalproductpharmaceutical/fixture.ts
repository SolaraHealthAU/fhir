import type { MedicinalProductPharmaceutical } from "../../src/v4.0.1/medicinalproductpharmaceutical/types";

export const MedicinalproductpharmaceuticalExample: MedicinalProductPharmaceutical =
  {
    resourceType: "MedicinalProductPharmaceutical",
    id: "example",
    text: {
      status: "generated",
      div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: example</p><p><b>identifier</b>: {PhPID}</p><p><b>administrableDoseForm</b>: Film-coatedtablet <span>(Details : {http://ema.europa.eu/example/administrabledoseform code 'Film-coatedtablet' = 'Film-coatedtablet)</span></p><p><b>unitOfPresentation</b>: Tablet <span>(Details : {http://ema.europa.eu/example/unitofpresentation code 'Tablet' = 'Tablet)</span></p><p><b>ingredient</b>: <a>MedicinalProductIngredient/example</a></p><h3>RouteOfAdministrations</h3><table><tr><td>-</td><td><b>Code</b></td></tr><tr><td>*</td><td>OralUse <span>(Details : {http://ema.europa.eu/example/routeofadministration code 'OralUse' = 'OralUse)</span></td></tr></table></div>",
    },
    identifier: [
      {
        system: "http://ema.europa.eu/example/phpididentifiersets",
        value: "{PhPID}",
      },
    ],
    administrableDoseForm: {
      coding: [
        {
          system: "http://ema.europa.eu/example/administrabledoseform",
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
    ingredient: [
      {
        reference: "MedicinalProductIngredient/example",
      },
    ],
    routeOfAdministration: [
      {
        code: {
          coding: [
            {
              system: "http://ema.europa.eu/example/routeofadministration",
              code: "OralUse",
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
