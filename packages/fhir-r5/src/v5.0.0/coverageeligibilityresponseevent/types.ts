import type {
  Extension,
  CodeableConcept,
  Element,
  Period,
} from "../core/types";

/** Generated from FHIR JSON Schema */

/** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
export interface CoverageEligibilityResponseEvent {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  type: CodeableConcept;

  whenDateTime?: string;

  _whenDateTime?: Element;

  whenPeriod?: Period;
}
