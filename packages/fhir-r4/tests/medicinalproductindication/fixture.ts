import type { MedicinalProductIndication } from "../../src/v4.0.1/medicinalproductindication/types";

export const MedicinalproductindicationExample: MedicinalProductIndication = {
  resourceType: "MedicinalProductIndication",
  id: "example",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: example</p><p><b>diseaseSymptomProcedure</b>: Prevention of venous thromboembolic events (VTE) in adult patients who have undergone elective hip\\nor knee replacement surgery.\\nPrevention of stroke and systemic embolism in adult patients with non-valvular atrial fibrillation\\n(NVAF), with one or more risk factors, such as prior stroke or transient ischaemic attack (TIA); age\\n≥ 75 years; hypertension; diabetes mellitus; symptomatic heart failure (NYHA Class ≥ II).\\nTreatment of deep vein thrombosis (DVT) and pulmonary embolism (PE), and prevention of recurrent\\nDVT and PE in adults (see section 4.4 for haemodynamically unstable PE patients). <span>(Details : {http://ema.europa.eu/example/indicationasdisease-symptom-procedure code 'Venousthromboembolismprophylaxis' = 'Venousthromboembolismprophylaxis)</span></p><p><b>comorbidity</b>: Hipsurgery <span>(Details : {http://ema.europa.eu/example/comorbidity code 'Hipsurgery' = 'Hipsurgery)</span></p><p><b>intendedEffect</b>: PRYLX <span>(Details : {http://ema.europa.eu/example/intendedeffect code 'PRYLX' = 'PRYLX)</span></p><p><b>population</b>: </p></div>",
  },
  diseaseSymptomProcedure: {
    coding: [
      {
        system:
          "http://ema.europa.eu/example/indicationasdisease-symptom-procedure",
        code: "Venousthromboembolismprophylaxis",
      },
    ],
    text: "Prevention of venous thromboembolic events (VTE) in adult patients who have undergone elective hip\\nor knee replacement surgery.\\nPrevention of stroke and systemic embolism in adult patients with non-valvular atrial fibrillation\\n(NVAF), with one or more risk factors, such as prior stroke or transient ischaemic attack (TIA); age\\n≥ 75 years; hypertension; diabetes mellitus; symptomatic heart failure (NYHA Class ≥ II).\\nTreatment of deep vein thrombosis (DVT) and pulmonary embolism (PE), and prevention of recurrent\\nDVT and PE in adults (see section 4.4 for haemodynamically unstable PE patients).",
  },
  comorbidity: [
    {
      coding: [
        {
          system: "http://ema.europa.eu/example/comorbidity",
          code: "Hipsurgery",
        },
      ],
    },
  ],
  intendedEffect: {
    coding: [
      {
        system: "http://ema.europa.eu/example/intendedeffect",
        code: "PRYLX",
      },
    ],
  },
  population: [
    {
      ageRange: {
        low: {
          value: 18,
          unit: "a",
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
