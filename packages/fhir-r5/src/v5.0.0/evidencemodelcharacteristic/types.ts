import type { Extension, CodeableConcept, Quantity } from "../core/types";
import type { EvidenceVariable } from "../evidencevariable/types";
import type { EvidenceAttributeEstimate } from "../evidenceattributeestimate/types";

/** Generated from FHIR JSON Schema */

/** The Evidence Resource provides a machine-interpretable expression of an evidence concept including the evidence variables (e.g., population, exposures/interventions, comparators, outcomes, measured variables, confounding variables), the statistics, and the certainty of this evidence. */
export interface EvidenceModelCharacteristic {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  code: CodeableConcept;

  value?: Quantity;

  variable?: EvidenceVariable[];

  attributeEstimate?: EvidenceAttributeEstimate[];
}
