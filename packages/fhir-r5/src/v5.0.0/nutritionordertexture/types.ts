import type { Extension, CodeableConcept } from "../core/types";

/** Generated from FHIR JSON Schema */

/** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
export interface NutritionOrderTexture {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  modifier?: CodeableConcept;

  foodType?: CodeableConcept;
}
