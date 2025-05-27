import type { Extension, CodeableConcept, Reference } from "../core/types";

/** Generated from FHIR JSON Schema */

/** A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern. */
export interface ConditionStage {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  summary?: CodeableConcept;

  assessment?: Reference[];

  type?: CodeableConcept;
}
