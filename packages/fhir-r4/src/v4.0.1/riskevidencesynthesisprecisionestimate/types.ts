import type { Extension, CodeableConcept, Element } from "../core/types";

/** Generated from FHIR JSON Schema */

/** The RiskEvidenceSynthesis resource describes the likelihood of an outcome in a population plus exposure state where the risk estimate is derived from a combination of research studies. */
export interface RiskEvidenceSynthesisPrecisionEstimate {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  type?: CodeableConcept;

  level?: number;

  _level?: Element;

  from?: number;

  _from?: Element;

  to?: number;

  _to?: Element;
}
