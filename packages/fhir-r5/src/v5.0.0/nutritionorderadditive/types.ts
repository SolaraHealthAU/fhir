import type {
  Extension,
  CodeableReference,
  Element,
  Quantity,
} from "../core/types";

/** Generated from FHIR JSON Schema */

/** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
export interface NutritionOrderAdditive {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  type?: CodeableReference;

  productName?: string;

  _productName?: Element;

  quantity?: Quantity;
}
