import type { Extension, Quantity, Ratio } from "../core/types";
import type { NutritionOrderSchedule2 } from "../nutritionorderschedule2/types";

/** Generated from FHIR JSON Schema */

/** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
export interface NutritionOrderAdministration {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  schedule?: NutritionOrderSchedule2;

  quantity?: Quantity;

  rateQuantity?: Quantity;

  rateRatio?: Ratio;
}
