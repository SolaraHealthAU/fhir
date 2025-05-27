import type { Extension, CodeableConcept, Element } from "../core/types";

/** Generated from FHIR JSON Schema */

/** Information about a medication that is used to support knowledge. */
export interface MedicationKnowledgeMedicineClassification {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  type: CodeableConcept;

  sourceString?: string;

  _sourceString?: Element;

  sourceUri?: string;

  _sourceUri?: Element;

  classification?: CodeableConcept[];
}
