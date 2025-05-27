import type { Extension, Element, Reference } from "../core/types";

/** Generated from FHIR JSON Schema */

/** A definition of a condition and information relevant to managing it. */
export interface ConditionDefinitionQuestionnaire {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  purpose?: string;

  _purpose?: Element;

  reference: Reference;
}
