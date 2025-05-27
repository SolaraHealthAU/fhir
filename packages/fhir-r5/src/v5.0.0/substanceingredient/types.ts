import type {
  Extension,
  Ratio,
  CodeableConcept,
  Reference,
} from "../core/types";

/** Generated from FHIR JSON Schema */

/** A homogeneous material with a definite composition. */
export interface SubstanceIngredient {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  quantity?: Ratio;

  substanceCodeableConcept?: CodeableConcept;

  substanceReference?: Reference;
}
