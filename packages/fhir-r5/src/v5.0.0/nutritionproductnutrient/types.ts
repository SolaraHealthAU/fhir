import type { Extension, CodeableReference, Ratio } from "../core/types";

/** Generated from FHIR JSON Schema */

/** A food or supplement that is consumed by patients. */
export interface NutritionProductNutrient {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  item?: CodeableReference;

  amount?: Ratio[];
}
