import type { MedicinalProductInteraction } from "../../src/v4.0.1/medicinalproductinteraction/types";

export const MedicinalproductinteractionExample: MedicinalProductInteraction = {
  resourceType: "MedicinalProductInteraction",
  id: "example",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: example</p><p><b>description</b>: Inhibitors of CYP3A4 and P-gp\\nCoadministration of equixaban with ketoconazole (400 mg once a day), a strong inhibitor of both\\nCYP3A4 and P-gp, led to a 2-fold increase in mean equixaban AUC and a 1.6-fold increase in mean\\nequixaban Cmax.\\nThe use of Eliquis is not recommended in patients receiving concomitant systemic treatment with\\nstrong inhibitors of both CYP3A4 and P-gp, such as azole-antimycotics (e.g., ketoconazole,\\nitraconazole, voriconazole and posaconazole) and HIV protease inhibitors (e.g., ritonavir) (see\\nsection 4.4).\\nActive substances which are not considered strong inhibitors of both CYP3A4 and P-gp,\\n(e.g., diltiazem, naproxen, amiodarone, verapamil, quinidine) are expected to increase equixaban\\nplasma concentration to a lesser extent. Diltiazem (360 mg once a day), for instance, considered a moderate CYP3A4 and a weak P-gp inhibitor, led to a 1.4-fold increase in mean equixaban AUC and a 1.3-fold increase in Cmax. Naproxen (500 mg, single dose) an inhibitor of P-gp but not an inhibitor of CYP3A4, led to a 1.5-fold and 1.6-fold increase in mean equixaban AUC and Cmax, respectively. No dose adjustment for equixaban is required when coadministered with less potent inhibitors of CYP3A4 and/or P-gp.</p><blockquote><p><b>interactant</b></p><p><b>item</b>: ketoconazole <span>(Details : {http://ema.europa.eu/example/interactant code 'ketoconazole' = 'ketoconazole)</span></p></blockquote><blockquote><p><b>interactant</b></p><p><b>item</b>: itraconazole <span>(Details : {http://ema.europa.eu/example/interactant code 'itraconazole' = 'itraconazole)</span></p></blockquote><p><b>type</b>: StrongInhibitorofCYP3A4 <span>(Details : {http://ema.europa.eu/example/interactionsType code 'StrongInhibitorofCYP3A4' = 'StrongInhibitorofCYP3A4)</span></p><p><b>effect</b>: Increasedplasmaconcentrations <span>(Details : {http://ema.europa.eu/example/interactionseffect code 'Increasedplasmaconcentrations' = 'Increasedplasmaconcentrations)</span></p><p><b>management</b>: Coadministration not recommended in patients receiving concomitant systemic treatment strong inhibitors of both CYP3A4 and P-gp <span>(Details )</span></p></div>",
  },
  description:
    "Inhibitors of CYP3A4 and P-gp\\nCoadministration of equixaban with ketoconazole (400 mg once a day), a strong inhibitor of both\\nCYP3A4 and P-gp, led to a 2-fold increase in mean equixaban AUC and a 1.6-fold increase in mean\\nequixaban Cmax.\\nThe use of Eliquis is not recommended in patients receiving concomitant systemic treatment with\\nstrong inhibitors of both CYP3A4 and P-gp, such as azole-antimycotics (e.g., ketoconazole,\\nitraconazole, voriconazole and posaconazole) and HIV protease inhibitors (e.g., ritonavir) (see\\nsection 4.4).\\nActive substances which are not considered strong inhibitors of both CYP3A4 and P-gp,\\n(e.g., diltiazem, naproxen, amiodarone, verapamil, quinidine) are expected to increase equixaban\\nplasma concentration to a lesser extent. Diltiazem (360 mg once a day), for instance, considered a moderate CYP3A4 and a weak P-gp inhibitor, led to a 1.4-fold increase in mean equixaban AUC and a 1.3-fold increase in Cmax. Naproxen (500 mg, single dose) an inhibitor of P-gp but not an inhibitor of CYP3A4, led to a 1.5-fold and 1.6-fold increase in mean equixaban AUC and Cmax, respectively. No dose adjustment for equixaban is required when coadministered with less potent inhibitors of CYP3A4 and/or P-gp.",
  interactant: [
    {
      itemCodeableConcept: {
        coding: [
          {
            system: "http://ema.europa.eu/example/interactant",
            code: "ketoconazole",
          },
        ],
      },
    },
    {
      itemCodeableConcept: {
        coding: [
          {
            system: "http://ema.europa.eu/example/interactant",
            code: "itraconazole",
          },
        ],
      },
    },
  ],
  type: {
    coding: [
      {
        system: "http://ema.europa.eu/example/interactionsType",
        code: "StrongInhibitorofCYP3A4",
      },
    ],
  },
  effect: {
    coding: [
      {
        system: "http://ema.europa.eu/example/interactionseffect",
        code: "Increasedplasmaconcentrations",
      },
    ],
  },
  management: {
    text: "Coadministration not recommended in patients receiving concomitant systemic treatment strong inhibitors of both CYP3A4 and P-gp",
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
