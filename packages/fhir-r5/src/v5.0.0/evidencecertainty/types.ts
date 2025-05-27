import type {
  Extension,
  Element,
  Annotation,
  CodeableConcept,
} from "../core/types";

/** Generated from FHIR JSON Schema */

/** The Evidence Resource provides a machine-interpretable expression of an evidence concept including the evidence variables (e.g., population, exposures/interventions, comparators, outcomes, measured variables, confounding variables), the statistics, and the certainty of this evidence. */
export interface EvidenceCertainty {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  description?: string;

  _description?: Element;

  note?: Annotation[];

  type?: CodeableConcept;

  rating?: CodeableConcept;

  rater?: string;

  _rater?: Element;

  subcomponent?: EvidenceCertainty[];
}
