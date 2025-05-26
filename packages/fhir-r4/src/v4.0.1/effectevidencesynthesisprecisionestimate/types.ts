import type { Extension, CodeableConcept, Element } from "../core/types";

/** Generated from FHIR JSON Schema */

/** The EffectEvidenceSynthesis resource describes the difference in an outcome between exposures states in a population where the effect estimate is derived from a combination of research studies. */
export interface EffectEvidenceSynthesisPrecisionEstimate {
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
