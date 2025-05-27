import type { Extension, CodeableConcept, Element } from "../core/types";

/** Generated from FHIR JSON Schema */

/** A patient's point-in-time set of recommendations (i.e. forecasting) according to a published schedule with optional supporting justification. */
export interface ImmunizationRecommendationDateCriterion {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  code: CodeableConcept;

  value?: string;

  _value?: Element;
}
