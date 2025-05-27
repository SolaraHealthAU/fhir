import type {
  Extension,
  CodeableReference,
  Element,
  Ratio,
  CodeableConcept,
  Quantity,
} from "../core/types";

/** Generated from FHIR JSON Schema */

/** This resource is primarily used for the identification and definition of a medication, including ingredients, for the purposes of prescribing, dispensing, and administering a medication as well as for making statements about medication use. */
export interface MedicationIngredient {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  item: CodeableReference;

  isActive?: boolean;

  _isActive?: Element;

  strengthRatio?: Ratio;

  strengthCodeableConcept?: CodeableConcept;

  strengthQuantity?: Quantity;
}
