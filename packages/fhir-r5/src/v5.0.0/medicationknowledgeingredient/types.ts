import type {
  Extension,
  CodeableReference,
  CodeableConcept,
  Ratio,
  Quantity,
} from "../core/types";

/** Generated from FHIR JSON Schema */

/** Information about a medication that is used to support knowledge. */
export interface MedicationKnowledgeIngredient {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  item: CodeableReference;

  type?: CodeableConcept;

  strengthRatio?: Ratio;

  strengthCodeableConcept?: CodeableConcept;

  strengthQuantity?: Quantity;
}
