import type {
  Extension,
  CodeableReference,
  Element,
  Quantity,
} from "../core/types";
import type { NutritionOrderSchedule1 } from "../nutritionorderschedule1/types";

/** Generated from FHIR JSON Schema */

/** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
export interface NutritionOrderSupplement {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  type?: CodeableReference;

  productName?: string;

  _productName?: Element;

  schedule?: NutritionOrderSchedule1;

  quantity?: Quantity;

  instruction?: string;

  _instruction?: Element;
}
