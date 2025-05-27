import type { Extension, CodeableReference, Ratio } from "../core/types";

/** Generated from FHIR JSON Schema */

/** A food or supplement that is consumed by patients. */
export interface NutritionProductIngredient {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  item: CodeableReference;

  amount?: Ratio[];
}
