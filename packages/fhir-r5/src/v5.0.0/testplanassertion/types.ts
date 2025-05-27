import type {
  Extension,
  CodeableConcept,
  CodeableReference,
} from "../core/types";

/** Generated from FHIR JSON Schema */

/** A plan for executing testing on an artifact or specifications. */
export interface TestPlanAssertion {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  type?: CodeableConcept[];

  object?: CodeableReference[];

  result?: CodeableReference[];
}
