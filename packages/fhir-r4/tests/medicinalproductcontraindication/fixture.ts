import type { MedicinalProductContraindication } from "../../src/v4.0.1/medicinalproductcontraindication/types";

export const MedicinalproductcontraindicationExample: MedicinalProductContraindication =
  {
    resourceType: "MedicinalProductContraindication",
    id: "example",
    text: {
      status: "generated",
      div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: example</p><p><b>disease</b>: Hepatic disease associated with coagulopathy and clinically relevant bleeding risk <span>(Details : {http://ema.europa.eu/example/contraindicationsasdisease-symptom-procedure code 'Coagulopathiesandbleedingdiatheses(exclthrombocytopenic)' = 'Coagulopathiesandbleedingdiatheses(exclthrombocytopenic))</span></p><p><b>comorbidity</b>: Hepaticdisease <span>(Details : {http://ema.europa.eu/example/comorbidity code 'Hepaticdisease' = 'Hepaticdisease)</span></p></div>",
    },
    disease: {
      coding: [
        {
          system:
            "http://ema.europa.eu/example/contraindicationsasdisease-symptom-procedure",
          code: "Coagulopathiesandbleedingdiatheses(exclthrombocytopenic)",
        },
      ],
      text: "Hepatic disease associated with coagulopathy and clinically relevant bleeding risk",
    },
    comorbidity: [
      {
        coding: [
          {
            system: "http://ema.europa.eu/example/comorbidity",
            code: "Hepaticdisease",
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
