import type { Extension, CodeableConcept, Reference } from "../core/types";

/** Generated from FHIR JSON Schema */

/** A kind of specimen with associated set of requirements. */
export interface SpecimenDefinitionAdditive {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  additiveCodeableConcept?: CodeableConcept;

  additiveReference?: Reference;
}
