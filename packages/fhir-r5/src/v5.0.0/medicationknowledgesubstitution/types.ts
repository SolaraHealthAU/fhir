import type { Extension, CodeableConcept, Element } from "../core/types";

/** Generated from FHIR JSON Schema */

/** Information about a medication that is used to support knowledge. */
export interface MedicationKnowledgeSubstitution {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  type: CodeableConcept;

  allowed?: boolean;

  _allowed?: Element;
}
