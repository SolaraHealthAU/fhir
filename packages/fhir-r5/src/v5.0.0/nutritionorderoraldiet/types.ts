import type { Extension, CodeableConcept, Element } from "../core/types";
import type { NutritionOrderSchedule } from "../nutritionorderschedule/types";
import type { NutritionOrderNutrient } from "../nutritionordernutrient/types";
import type { NutritionOrderTexture } from "../nutritionordertexture/types";

/** Generated from FHIR JSON Schema */

/** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
export interface NutritionOrderOralDiet {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  type?: CodeableConcept[];

  schedule?: NutritionOrderSchedule;

  nutrient?: NutritionOrderNutrient[];

  texture?: NutritionOrderTexture[];

  fluidConsistencyType?: CodeableConcept[];

  instruction?: string;

  _instruction?: Element;
}
