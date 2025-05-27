import type { Extension, CodeableConcept } from "../core/types";

/** Generated from FHIR JSON Schema */

/** A definition of a condition and information relevant to managing it. */
export interface ConditionDefinitionMedication {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  category?: CodeableConcept;

  code?: CodeableConcept;
}
