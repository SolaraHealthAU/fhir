import type {
  Extension,
  CodeableReference,
  Element,
  Quantity,
  CodeableConcept,
} from "../core/types";
import type { NutritionOrderAdditive } from "../nutritionorderadditive/types";
import type { NutritionOrderAdministration } from "../nutritionorderadministration/types";

/** Generated from FHIR JSON Schema */

/** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
export interface NutritionOrderEnteralFormula {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  baseFormulaType?: CodeableReference;

  baseFormulaProductName?: string;

  _baseFormulaProductName?: Element;

  deliveryDevice?: CodeableReference[];

  additive?: NutritionOrderAdditive[];

  caloricDensity?: Quantity;

  routeOfAdministration?: CodeableConcept;

  administration?: NutritionOrderAdministration[];

  maxVolumeToDeliver?: Quantity;

  administrationInstruction?: string;

  _administrationInstruction?: Element;
}
