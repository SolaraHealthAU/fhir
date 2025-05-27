import type { Extension, CodeableConcept, Quantity } from "../core/types";

/** Generated from FHIR JSON Schema */

/** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
export interface NutritionOrderNutrient {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  modifier?: CodeableConcept;

  amount?: Quantity;
}
