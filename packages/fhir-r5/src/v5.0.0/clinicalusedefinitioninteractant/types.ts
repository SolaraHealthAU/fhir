import type { Extension, Reference, CodeableConcept } from "../core/types";

/** Generated from FHIR JSON Schema */

/** A single issue - either an indication, contraindication, interaction or an undesirable effect for a medicinal product, medication, device or procedure. */
export interface ClinicalUseDefinitionInteractant {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  itemReference?: Reference;

  itemCodeableConcept?: CodeableConcept;
}
