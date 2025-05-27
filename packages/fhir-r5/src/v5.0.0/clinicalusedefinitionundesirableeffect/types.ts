import type {
  Extension,
  CodeableReference,
  CodeableConcept,
} from "../core/types";

/** Generated from FHIR JSON Schema */

/** A single issue - either an indication, contraindication, interaction or an undesirable effect for a medicinal product, medication, device or procedure. */
export interface ClinicalUseDefinitionUndesirableEffect {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  symptomConditionEffect?: CodeableReference;

  classification?: CodeableConcept;

  frequencyOfOccurrence?: CodeableConcept;
}
