import type { Extension, CodeableConcept, Element } from "../core/types";

/** Generated from FHIR JSON Schema */

/** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
export interface CoverageEligibilityResponseError {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  code: CodeableConcept;

  expression?: string[];

  _expression?: Element[];
}
