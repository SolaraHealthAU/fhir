import type { Extension, Timing, Quantity, Ratio } from "../core/types";

/** Generated from FHIR JSON Schema */

/** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
export interface NutritionOrderAdministration {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  schedule?: Timing;

  quantity?: Quantity;

  rateQuantity?: Quantity;

  rateRatio?: Ratio;
}
