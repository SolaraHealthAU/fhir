import type {
  Extension,
  Element,
  Annotation,
  CodeableConcept,
  Quantity,
  Range,
} from "../core/types";

/** Generated from FHIR JSON Schema */

/** The Evidence Resource provides a machine-interpretable expression of an evidence concept including the evidence variables (e.g., population, exposures/interventions, comparators, outcomes, measured variables, confounding variables), the statistics, and the certainty of this evidence. */
export interface EvidenceAttributeEstimate {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  description?: string;

  _description?: Element;

  note?: Annotation[];

  type?: CodeableConcept;

  quantity?: Quantity;

  level?: number;

  _level?: Element;

  range?: Range;

  attributeEstimate?: EvidenceAttributeEstimate[];
}
