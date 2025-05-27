import type {
  Extension,
  CodeableConcept,
  CodeableReference,
} from "../core/types";

/** Generated from FHIR JSON Schema */

/** A single issue - either an indication, contraindication, interaction or an undesirable effect for a medicinal product, medication, device or procedure. */
export interface ClinicalUseDefinitionOtherTherapy {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  relationshipType: CodeableConcept;

  treatment: CodeableReference;
}
