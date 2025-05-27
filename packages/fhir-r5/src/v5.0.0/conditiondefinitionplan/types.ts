import type { Extension, CodeableConcept, Reference } from "../core/types";

/** Generated from FHIR JSON Schema */

/** A definition of a condition and information relevant to managing it. */
export interface ConditionDefinitionPlan {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  role?: CodeableConcept;

  reference: Reference;
}
